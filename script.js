// variables
let toTop = document.getElementById('top');
let pagenationSlide = document.querySelectorAll('.slider div span');
const allImages = document.querySelectorAll('img')
console.log(allImages)
allImages.forEach(e => {
    e.setAttribute('loading', 'lazy')
})
let img1 = document.querySelectorAll('.slider div img')[0]
let img2 = document.querySelectorAll('.slider div img')[1]
let img3 = document.querySelectorAll('.slider div img')[2]
let img4 = document.querySelectorAll('.slider div img')[3]
let img5 = document.querySelectorAll('.slider div img')[4]
let sliderImage = [img1, img2, img3, img4, img5]
let currentSlide = pagenationSlide[0]
sliderImage[0].classList.add('active')
// setting to top functionality
toTop.onclick = function () {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
}
// checking page offset Y 
window.onscroll = function () {
    if (this.scrollY >= 100) {
        toTop.style.opacity = '1'
        toTop.style.visibility = 'visible'
    }
    else {
        toTop.style.visibility = 'hidden'
        toTop.style.opacity = '0'
    }
}
// set slide funtionality 
pagenationSlide.forEach((el, i) => {
    el.onclick = () => {
        pagenationSlide.forEach(e => {
            e.classList.remove('active')
        })
        sliderImage.forEach(element => {
            element.classList.remove('active')
        })
        currentSlide = pagenationSlide[i];
        console.log(currentSlide)
        currentSlide.classList.add('active')
        sliderImage[i].classList.add('active')
    }
})

console.log(currentSlide)