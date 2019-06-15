import yiq from 'yiq'
const request = require('request')
const cheerio = require('cheerio')
const Vibrant = require('node-vibrant')

module.exports = async url => {
  let title, image, description, color, background, icon

  const promise = await new Promise((resolve, reject) => {
    request(url, async (error, response, body) => {
      if (!error) {
        const $ = cheerio.load(body)
        icon = $("link[rel='icon']").attr('href')
        title = $("meta[property='og:title']").attr('content')
        image = $("meta[property='og:image']").attr('content')
        description = $("meta[property='og:description']").attr('content')
        const vibrant = new Vibrant(image)
        const pallete = await vibrant.getPalette()
        background = pallete.LightMuted.getHex()
        color = yiq(pallete.LightMuted.getHex())
        resolve({
          icon: icon,
          title: title,
          image: image,
          description: description,
          url: url,
          background: background,
          color: color
        })
      } else {
        reject(error)
      }
    })
  })

  return promise
}
