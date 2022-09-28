function show(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

show();


gsap.from("#page2p",{
  x:50,
  duration:5,
  opacity:0,
  rotateY:0,
  rotateX:50,
  scrollTrigger:{
   trigger:"#page2p",
   scroller:"#main",
   start:"top 90%",
   end: "top 55%", 
   scrub: true,
  }

})

gsap.from("#page2p2",{
  x:-50,
  duration:5,
  opacity:0,
  rotateY:0,
  rotateX:50,
  scrollTrigger:{
   trigger:"#page2p2",
   scroller:"#main",
   start:"top 90%",
   end: "top 52%",
   scrub: true,
  }

})

gsap.from("#nav>h3",{
  y: -60,
  opacity: 0,
  duration:1,
})

gsap.from("#nav2>h4",{
  y:-60,
  duration:1,
  opacity:0,
  scrollTrigger:{
   trigger:"#nav2>h4",
   scroller:"#main",
   start:"top 80%",
   scrub: true,
  }

})

gsap.from("img",{
  duration:1,
  opacity:0,
  scale:0.7,
  scrollTrigger:{
   trigger:"img",
   scroller:"#main",
   start:"top 90%",
   scrub: true,
  }

})

gsap.from("#left>h1",{
  y: 60,
  opacity: -1,
  duration:1,
})