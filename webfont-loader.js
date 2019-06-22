const webfontsGenerator = require('webfonts-generator')
webfontsGenerator(
  {
    // 폰트화 하고자하는 벡터 이미지들 경로 목록
    files: [
      // 분류
      'assets/img/svg/icon_article.svg',
      'assets/img/svg/icon_awards.svg',
      'assets/img/svg/icon_company.svg',
      'assets/img/svg/icon_education.svg',
      'assets/img/svg/icon_gallery.svg',
      'assets/img/svg/icon_portfolio.svg',
      'assets/img/svg/icon_shopping.svg'
    ],
    dest: 'assets/icon/', // 아이콘 폰트 리소스들(my-icons.css, my-icons.eot, my-icons.ttf, ...)이 자동생성될 폴더경로
    fontName: 'dtalks-icons', // 이 이름으로 폰트 리소스들이 만들어질것이다.
    // cssFontsUrl: 'assets/icon',
    html: true, // true이면 html 미리보기(my-icons.html)를 생성해줍ㅂ니다.
    templateOptions: {
      baseSelector: '.dtalks-icons', // 기본으로 추가될 클래스 이름
      classPrefix: 'dtalks-icons-' // 위 벡터 이미지 이름과 조합하여 추가될 클래스 이름(예: my-icon-download)
    }
  },
  function(error) {
    if (error) {
      // console.log('> Webfont Generation Fail!', error)
    } else {
      // console.log('> Webfont Generation Done!')
    }
  }
)
