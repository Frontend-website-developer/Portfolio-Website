
gsap.registerPlugin(ScrollTrigger);

var menu = document.querySelector(".menu-button")
var cross = document.querySelector(".close-button")
var logo = document.querySelector(".logo")
var main = document.querySelector("body")
var links = document.querySelectorAll("a")

var navigation = document.querySelectorAll(".nav a")

console.log(navigation)

console.log(links)

var tl = gsap.timeline()

tl.to(".nav", {
    right: "0",
    duration: 0.5,
})

tl.from(".nav h4", {
    x: 100,
    duration:0.5,
    stagger:0.2,
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

navigation.onclick = function(){
    console.log("clicked")
    tl.reverse()
}

main.addEventListener("mousemove", function(dets){
    gsap.to("#cursor",{
        x:dets.x - 10,
        y:dets.y - 10,
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

links.forEach(function(link){
    link.addEventListener("mouseenter", function(dets) {
        gsap.to("#cursor", {
            width: 50,
            height: 50,
            duration: 0.5,
            x:dets.x - 60,
            y:dets.y - 60,
            ease: "back.out",
        });
    });
    link.addEventListener("mouseleave", function(dets) {
        gsap.to("#cursor", {
            width: 20,
            height: 20,
            x:dets.x - 10,
            y:dets.y - 10,
            duration: 0.5,
            ease: "back.out"
        });
    });
    link.addEventListener("mousemove", function(dets) {
        gsap.to("#cursor", {
            width: 50,
            height: 50,
            x:dets.x - 22,
            y:dets.y - 22,
            duration: 0.5,
            ease: "back.out"
        });
    });
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
    scrollTrigger:{
        trigger:".experience",
        scroller: "body",
        start: "top 0%",
        end: "top -200%",
        scrub: true,
        pin:true,
        ease: "sine.out",
    }
})

gsap.to(".projects-wrapper", {
    scrollTrigger:{
        trigger:".projects",
        scroller: "body",
        start: "top 0%",
        end: "top -300%",
        scrub: true,
        pin:true,
    },
    
    transform: "translateY(-83%)",
})

gsap.to(".projects-right", {
    scrollTrigger:{
        trigger:".projects-right-wrapper",
        scroller: "body",
        start: "top 0%",
        end: "top -300%",
        scrub: true,
        pin:true,
    },
    
    transform: "translateY(0%)",
})