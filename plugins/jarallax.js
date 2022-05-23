import 'object-fit-images'
import { jarallax, jarallaxVideo } from 'jarallax'

window.addEventListener('load', function(event) {
  jarallaxVideo()

  jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.2,
    imgPosition: "50% 0%"
  })

  jarallax(document.querySelectorAll('.jarallax-video'), {
    speed: 0.2,
    videoSrc: 'https://youtu.be/mru3Q5m4lkY'
  })
})
