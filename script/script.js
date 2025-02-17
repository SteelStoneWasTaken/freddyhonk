counter = 0

function honk () {
  console.log('honk')

  video = document.getElementById('video')
  img = document.getElementById('img')

  audio = new Audio('assets/honk.mp3');
  audio.volume = 0.1;

  if (counter == 10) {
    img.style.maxHeight = '0px'
    video.style.height = '100vh'

    video.play()
    function cat() {
      window.location.replace('https://www.google.com/search?q=cute+cats&client=firefox-b-d&sca_esv=235c16590f4f616b&udm=2&biw=1920&bih=994&sxsrf=AHTn8zq4CmQkmk2VPt0lMz5Wt0C7mpcctQ%3A1739758717150&ei=fZyyZ9j1CImK5OUP04KG8Aw&ved=0ahUKEwiYqNKi0smLAxUJBbkGHVOBAc4Q4dUDCBE&uact=5&oq=cute+cats&gs_lp=EgNpbWciCWN1dGUgY2F0czIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgARI7BVQlAdY1xRwAXgAkAEAmAGcAaABggqqAQMwLjm4AQPIAQD4AQGYAgqgAp8KwgIGEAAYBxgewgIKEAAYgAQYQxiKBcICBxAAGIAEGAqYAwCIBgGSBwMxLjmgB7Un&sclient=img')
    }
    setTimeout(cat, 1000);
  } else {
    counter += 1
    audio.play();
  }
}
