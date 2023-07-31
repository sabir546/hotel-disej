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
// borderRadious:"10px"
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
    // position:"fixed",

    scrollTrigger:{
trigger:"#page1 svg ",
scroller:"body",
markers:true,
start:"top -0%",    
end:"top -6%",
scrub:1,

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