







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


 gsap.from("#first",{
    opacity:0,
    y:40,
scrollTrigger:{
    trigger:"#first",
    scroller:"#main",
    // markers:true,
    start:"top 80%",
    end:"top 70%",
    scrub:2,
}
})

gsap.from("#second",{
    opacity:0,
    y:40,
scrollTrigger:{
    trigger:"#second",
    scroller:"#main",
    // markers:true,
    start:"top 85%",
    end:"top 75%",
    scrub:2,
}
})
gsap.from("#third",{
    opacity:0,
    y:40,
scrollTrigger:{
    trigger:"#third",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    end:"top 80%",
    scrub:2,
}
})
gsap.from("#forth",{
    opacity:0,
    y:40,
scrollTrigger:{
    trigger:"#forth",
    scroller:"#main",
    // markers:true,
    start:"top 95%",
    end:"top 85%",
    scrub:2,
}
})
gsap.from("#fifth",{
    stagger:.3,
    opacity:0,
    y:40,
scrollTrigger:{
    trigger:"#fifth",
    scroller:"#main",
    // markers:true,
    start:"top 100%",
    end:"top 90%",
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
    // markers:true,
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



var h2Data = document.querySelectorAll("#page7 h2")
h2Data.forEach(function (elem) {
var textData = elem.textContent;
var splitedText = textData.split("")
var clutter=""
splitedText.forEach(function(e) {
   clutter  += `<span>${e}</span>`
});
elem.innerHTML=clutter;
});

gsap.to("#page7 h2 span",{
    color:"#434B34",
    stagger:.1,
scrollTrigger:{
    trigger:"#page7 h2 span",
    scroller:"#main",
    // markers:true,
    start:"top 63%",
    end:"top -30%",
    scrub:2,
}
})


var tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#photoes",
      scroller: "#main",
    //   markers: true,
      start: "top 90%",
      end: "top -10%",
      scrub: 3,
    },
  });
  tl2.to("#photoes .right-img ", {
    transform: `translateX(50%)`,
    duration: 1,
  },"page7-anim");

  tl2.to("#photoes .left-img", {
    transform: `translateX(-50%)`,
    duration: 1,
    
  },"page7-anim");
  tl2.from(" .center", {
  delay:.2,
    // transform: `translateY(50%)`,
    opacity:0,
  },"page7-anim");

  gsap.from("#photoes #arrow4",{
    y:90,
    scrollTrigger: {
        trigger: "#photoes #arrow4",
        scroller: "#main",
        // markers: true,
        start: "top 105%",
        end: "top 100%",
        scrub: 3,}

  })
    



gsap.to("#page8 #svg9 , #page8 #svg10",{
    left:"-25vw",
    scrollTrigger:{
        trigger:"#page8 #svg9, #page8 #svg10",
        scroller:"#main",
        // markers:true,
        start:"top 85%",
        end:"top -70%",
        scrub:2,
    }
})
var h2Data = document.querySelectorAll("#page9 h2")
h2Data.forEach(function (elem) {
var textData = elem.textContent;
var splitedText = textData.split("")
var clutter=""
splitedText.forEach(function(e) {
   clutter  += `<span>${e}</span>`
});
elem.innerHTML=clutter;
});
gsap.to("#page9 h2 span",{
    color:"#fff",
    stagger:.1,
scrollTrigger:{
    trigger:"#page9 h2 span",
    scroller:"#main",
    // markers:true,
    start:"top 65%",
    end:"top 45%",
    scrub:2,
}
})



gsap.from("#page9 p",{
    y:50,
    opacity:0,
    
scrollTrigger:{
    trigger:"#page9 p",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    end:"top 70%",
    scrub:1,
}
})
gsap.from("#page9 #pprt22,#page9 #pprt33",{
    y:30,
    opacity:0,
    
scrollTrigger:{
    trigger:"#page9 #pprt22,#page9 #pprt33",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    end:"top 80%",
    scrub:1,
}
})
gsap.from("#page9 #pprt11",{
    y:50,
    opacity:0,
scrollTrigger:{
    trigger:"#page9 #pprt11",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    end:"top 80%",
    scrub:1,
}
})

gsap.from("#page9 #arrow5",{
    y:60,
    opacity:0,
scrollTrigger:{
    trigger:"#page9 #arrow5",
    scroller:"#main",
    // markers:true,
    start:"top 80%",
    end:"top 60%",
    scrub:1,
}
})

gsap.from("#page10 h2 ,#page10 p",{
    y:90,
    delay:.5,
    opacity:0,
    stagger:1,
scrollTrigger:{
    trigger:"#page10 h2 ,#page10 p ",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    end:"top 70%",
    scrub:1,
}
})

gsap.from("#page10 #lff",{
    y:90,
    delay:.5,
    opacity:0,
    stagger:1,
scrollTrigger:{
    trigger:"#page10 #lff",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    end:"top 80%",
    scrub:1,
}
})
gsap.from("#page10 #text6 h3,#page10 #text6 h5,#page10 #arrow6",{
    y:50,
    delay:.5,
    opacity:0,
    stagger:1,
scrollTrigger:{
    trigger:"#page10 #text6 h3,#page10 #text6 h5,#page10 #arrow6",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    end:"top 50%",
    scrub:1,
}
})
gsap.from("#page11 #part1-rt img",{
    y:50,
    delay:.5,
    opacity:0,
    stagger:1,
scrollTrigger:{
    trigger:"#page11 #part1-rt img",
    scroller:"#main",
    // markers:true,
    start:"top 95%",
    end:"top 80%",
    scrub:1,
}
})
    
gsap.from("#page11 #text7 h3,#page11 #text7 h5,#page11 #arrow7",{
    y:50,
    delay:.5,
    opacity:0,
    stagger:1,
scrollTrigger:{
    trigger:"#page11 #text7 h3,#page11 #text7 h5,#page11 #arrow7",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    end:"top 50%",
    scrub:1,
}
})
gsap.from("#page12 #sec",{
    y:50,
    delay:.5,
    opacity:0,
    stagger:1,
scrollTrigger:{
    trigger:"#page12 #sec",
    scroller:"#main",
    // markers:true,
    start:"top 95%",
    end:"top 60%",
    scrub:1,
}
})

