const express = require("express");
const router = express.Router();

const request = require("request");
const cheerio = require("cheerio");
const Vibrant = require("node-vibrant")
const yiq = require('yiq').default

/* GET home page. */
router.get("/", async function(req, res, next) {
  const url = req.query.url || null
    let title,image, description, color, background;

    if (url) {
      await new Promise(function (resolve, reject) {
        request(url, async function (error, response, body) {
          if (!error) {
            const $ = cheerio.load(body)
            icon = $("link[rel='icon']").attr("href")
            title = $("meta[property='og:title']").attr("content")
            image = $("meta[property='og:image']").attr("content")
            description = $("meta[property='og:description']").attr("content")

            const vibrant = new Vibrant(image)
            const pallete = await vibrant.getPalette()

            background = pallete.LightMuted.getHex()
            color = yiq(pallete.LightMuted.getHex())

            resolve()
          } else {
            console.log("We’ve encountered an error: " + error);
            reject()
          }
        });
      });
    }

    res.render("index", {
      icon: icon,
      title: title,
      image: image,
      description: description,
      url: url,
      background:background,color:color
    });
});

module.exports = router;
