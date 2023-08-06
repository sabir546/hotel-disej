







function cdn() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
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
cdn();



var tl= gsap.timeline()
tl.from("#page1 svg",{
    y:-50,
    opacity:0,
delay:.3,
duration:.6,
})

tl.from("#page1 img",{
    scale:0.3,
    duration:1,
    delay:-0.5,
    // ease:SlowMo.ease.config( 0.7 , 0.7, 0.7  ,0.7, false),
ease:Cubic.easeOut,
borderRadius: "10px",
})

tl.from("nav",{
    y:-50,
    opacity:0,
    duration:.5,
delay:-.3,
})



gsap.to("#page1 svg",{
    scale:.1,
    marginTop:"-7.6%",
    scrollTrigger:{
trigger:"#page1 svg ",
scroller:"#main",
// markers:true,
start:"top -0%",    
end:"top -6%",
scrub:1,
    }
})

gsap.to("#page1 img",{
    
y:150,
    scrollTrigger:{
trigger:"#page1 img ",
scroller:"#main",
// markers:true,
start:"top -0%",    
end:"top -60%",
scrub:2,
    }
})



// gsap.to("nav",{

//     // marginTop:"-11%",
//     opacity:0,

//     scrollTrigger:{
// trigger:"#page1  ",
// scroller:"body",
// markers:true,
// start:"-5%",    
// end:"-10%",
// scrub:2,

//     }

// })

var h2Data = document.querySelectorAll("#page2 h2")
h2Data.forEach(function (elem) {
var textData = elem.textContent;
var splitedText = textData.split("")
var clutter=""
splitedText.forEach(function(e) {
   clutter  += `<span>${e}</span>`
});
elem.innerHTML=clutter;
});



gsap.to("#page2 h2 span",{
    color:"#E3E3C4",
    stagger:.1,
scrollTrigger:{
    trigger:"#page2 h2 span",
    scroller:"#main",
    // markers:true,
    start:"top 60%",
    end:"top -80%",
    scrub:true,
}
})


gsap.to("#page2 #svg2 , #page2 #svg3",{
    left:"-5vw",
    scrollTrigger:{
        trigger:"#page2 #svg2",
        scroller:"#main",
        // markers:true,
        start:"top 85%",
        end:"top -80%",
        scrub:2,
    }
})


var h2Data = document.querySelectorAll("#page3 h2")
h2Data.forEach(function (elem) {
var textData = elem.textContent;
var splitedText = textData.split("")
var clutter=""
splitedText.forEach(function(e) {
   clutter  += `<span>${e}</span>`
});
elem.innerHTML=clutter;
});

gsap.to("#page3 h2 span",{
    color:"#434B34",
    stagger:.1,
scrollTrigger:{
    trigger:"#page3 h2 span",
    scroller:"#main",
    // markers:true,
    start:"top 70%",
    end:"top 40%",
    scrub:2,
}
})

var tl=gsap.timeline();
tl.from(" #page3 #lf p ,#page3 #rt #img1 ",{
    y:90,
    scrollTrigger:{
        trigger:" #page3 #lf p , #page3 #rt #img1 ",
        scroller:"#main",
        // markers:true,
        start:"top 95%",
        end:"top 90%",
        scrub:2,


    }
})

tl.from("#page3 #lf #arrow",{
   y:90,
   scrollTrigger:{
    trigger:" #page3 #lf #arrow",
    scroller:"#main",
    // markers:true,
    start:"top 105%",
    end:"top 95%",
    scrub:2,
}
})

tl.from("#page3 #lf #img1",{
    y:90,
    scrollTrigger:{
     trigger:" #page3 #lf #img1",
     scroller:"#main",
    //  markers:true,
     start:"top 105%",
     end:"top 95%",
     scrub:2,
 }
 
 })


 tl.from("#page3 #rt #img2",{
    y:90,
    scrollTrigger:{
     trigger:" #page3 #rt #img2",
     scroller:"#main",
    //  markers:true,
     start:"top 105%",
     end:"top 95%",
     scrub:2,
 }
 })


 var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });



  gsap.to("#page5 #svg5 , #page5 #svg6",{
    left:"-25vw",
    scrollTrigger:{
        trigger:"#page5 #svg5, #page5 #svg6",
        scroller:"#main",
        // markers:true,
        start:"top 85%",
        end:"top -70%",
        scrub:2,
    }
})




var h2Data = document.querySelectorAll("#page6 h2")
h2Data.forEach(function (elem) {
var textData = elem.textContent;
var splitedText = textData.split("")
var clutter=""
splitedText.forEach(function(e) {
   clutter  += `<span>${e}</span>`
});
elem.innerHTML=clutter;
});

gsap.to("#page6 h2 span",{
    color:"#ffff",
    stagger:.1,
scrollTrigger:{
    trigger:"#page6 h2 span",
    scroller:"#main",
    // markers:true,
    start:"top 65%",
    end:"top 30%",
    scrub:2,
}
})

gsap.from("#page6  p",{
    y:70,
    opacity:0,
scrollTrigger:{
    trigger:"#page6 p",
    scroller:"#main",
    // markers:true,
    start:"top 85%",
    end:"top 80%",
    scrub:2,
}
})

gsap.from("#page6  #pprt1 img,#page6 #pprt3 img",{
    y:50,
    opacity:0,
scrollTrigger:{
    trigger:"#page6  #pprt1 img,#page6 #pprt3 img",
    scroller:"#main",
    // markers:true,
    start:"top 95%",
    end:"top 85%",
    scrub:2,
}
})
gsap.from("#page6  #pprt2 img",{
    y:40,
    opacity:0,
scrollTrigger:{
    trigger:"#page6  #pprt2 img",
    scroller:"#main",
    markers:true,
    start:"top 100%",
    end:"top 97%",
    scrub:2,
}
})
gsap.from("#page6  #arrow2",{
    y:60,
    opacity:0,
scrollTrigger:{
    trigger:"#page6  #arrow2",
    scroller:"#main",
    // markers:true,
    start:"top 100%",
    end:"top 101%",
    scrub:2,
}
})

gsap.to("#page6 #svg7 , #page6 #svg8",{
    left:"-25vw",
    scrollTrigger:{
        trigger:"#page6 #svg7, #page6 #svg8",
        scroller:"#main",
        // markers:true,
        start:"top 85%",
        end:"top -70%",
        scrub:2,
    }
})
