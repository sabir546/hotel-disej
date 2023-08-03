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
    marginTop:"-11%",
    scrollTrigger:{
trigger:"#page1 svg ",
scroller:"body",
// markers:true,
start:"top -0%",    
end:"top -6%",
scrub:1,
    }
})

gsap.to("#page1 img",{
    
y:500,
    scrollTrigger:{
trigger:"#page1 img ",
scroller:"body",
// markers:true,
start:"top -0%",    
end:"top -100%",
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
    scroller:"body",
    // markers:true,
    start:"top 60%",
    end:"top -100%",
    scrub:true,
}
})


gsap.to("#page2 #svg2 , #page2 #svg3",{
    left:"-5vw",
    scrollTrigger:{
        trigger:"#page2 #svg2",
        scroller:"body",
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
    scroller:"body",
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
        scroller:"body",
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
    scroller:"body",
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
     scroller:"body",
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
     scroller:"body",
    //  markers:true,
     start:"top 105%",
     end:"top 95%",
     scrub:2,
 }
 })