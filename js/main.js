let box = document.querySelector('#box')
let image = document.querySelector('#image')

x = 1
const change = (direction, imageID) => {
  let sliderImage = document.querySelector(imageID)
  let imageurl = sliderImage.getAttribute('src').split('/')
  let imgsrc = imageurl[2].split('.')[0].substring(0, imageurl[2].split('.')[0].length - 1)

  if (direction == 'left') {
    x -= 1
    if (x == 0) {
      x = 3
    }
  } else if (direction == 'right') {
    x += 1
    if (x == 4) {
      x = 1
    }
  }

  sliderImage.src = `../images/${imgsrc + x}.png`
}



let header = document.querySelector('.header__container__nav')
let btn = document.querySelector('#button__up')

window.addEventListener('scroll', function() {
  if (pageYOffset > 30) {
    header.style.backgroundColor = '#e2ac3f75'
    btn.style.opacity = 1
  } else {
    header.style.backgroundColor = 'transparent'
    btn.style.opacity = 0
  }
})

let now = new Date
document.querySelector('#date').innerHTML = now.getDate() + '.' + now.getMonth() + '.' + now.getFullYear()

let hide = () => {
  document.querySelector('#modal').style.display = 'none'
}

let show = () => {
  document.querySelector('#modal').style.display = 'block'
}