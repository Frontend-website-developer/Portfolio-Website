
var menu = document.querySelector(".menu-button")
var cross = document.querySelector(".close-button")
var logo = document.querySelector(".logo")
var main = document.querySelector("body")

var tl = gsap.timeline()

tl.to(".nav", {
    right: "0",
    duration: 0.8,
})

tl.from(".nav h4", {
    x: 100,
    duration:1,
    stagger:0.3,
    opacity: 0
})

tl.from(".nav i", {
    opacity: 0
})

tl.pause()

menu.addEventListener("click", function(){
    tl.play()
})

cross.addEventListener("click", function(){
    tl.reverse()
})

main.addEventListener("mousemove", function(dets){
    gsap.to("#cursor",{
        x:dets.x,
        y:dets.y,
        ease: "back.out"
    })
})



logo.addEventListener("mouseenter", function(){
    gsap.to(".logo", {
        letterSpacing: "4px",
        duration: 0.5
    })
})

logo.addEventListener("mouseleave", function(){
    gsap.to(".logo", {
        letterSpacing: "1px",
        duration: 0.5
    })
})

gsap.to(".marque", {
    transform: 'translateX(-200%)',
    duration: 10,
    repeat: -1,
    ease:"none",
})

gsap.to(".from-left", {
    transform: 'translateX(0%)',
    duration: 10,
    repeat: -1,
    ease:"none",
})

gsap.from(".about-graphic-image", {
    x: 300,
    rotate: 360,
    delay: 0.5,
    duration: 0.5,
    opacity: 0,
    scrollTrigger: {
        trigger: ".about-graphic-image",
        start: "top 60%",
        end: "top 30%",
        scrub: 2,
    }
})

gsap.from(".degree-icon", {
    rotate: 90,
    delay: 0.5,
    duration: 2,
    ease:"none",
    scrollTrigger: {
        trigger: ".degree-icon",
    }
})

gsap.to(".experience h1", {
    transform: "translateX(-80%)",
    duration: 10,
    scrollTrigger:{
        trigger:".experience",
        scroller: "body",
        start: "top 0%",
        end: "bottom 50%",
        scrub: true,
        pin:true,
        markers: true
    }
})