let cursor = document.querySelector("#cursor");
let cursorBlur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (e) {
    cursor.style.left = e.clientX+"px";
    cursor.style.top = e.clientY+"px";

    cursorBlurblur.style.left = e.clientX+"px";
    cursorBlur.style.top = e.clientY+"px";
});



gsap.to("#nav",{
    backgroundColor:"#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})
