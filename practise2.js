gsap.registerPlugin(ScrollTrigger);
// alert("hell")
// 
let t1=gsap.timeline();

t1.from(".nav",{
    opacity: 0,
    delay:1
})
t1.from(".company,.nav-items,#login",{
    y:-80,
    duration:0.8,
    stagger:0.15
})
t1.from('.text1 .l1,.text1 .l2,.text1 .l3',{
    x:-100,
    stagger:0.3,
    duration:.8,
    opacity:0
})
t1.from(".break-line,.sp2 img",{
    opacity:0,
    duration:0.5,
    stagger:0.2
})
t1.from("span img",{
    y:20,
    y:-20,
    repeat:-1,
    yoyo:true,
    stagger:0.3
})

gsap.from(".text3,.box",{
    scale:0,
    duration:0.5,
    
    scrollTrigger:{
        trigger:".text3",
        scroller:"body",
        // markers:/true,
        start:"top 80%",
        end:"top 30%",
        scrub:3
    }
})


gsap.to(".page3 .text4",{
    transform: "translateX(-650%)",
    fontWeight: "100",
    scrollTrigger:{
        trigger:".page3 ",
        scroller:"body",
    //    markers:true,
       start:"top 0%" ,
       end:"top -500%",
       scrub:3 ,
       pin:true    
    }
})


function loader(){
    let c=0;
 let loaderInterval=   setInterval(()=>{
        c+=Math.floor(Math.random()*20)
        if(c<100)
        {
            document.getElementById("loaderText").innerHTML=c+"%";
        }
        else{
        c=100
            document.getElementById("loaderText").innerHTML=c+"%";
            clearInterval(loaderInterval);
        }

    console.log(c)
    },100)
}
let t2=gsap.timeline()
// loader()
t2.to("#loader h1",{
    // opacity:0,
    duration:1,
    onStart:loader(),
    
})
t2.to("#loader",
{
    top:"-100vh",
    duration:1,
    delay:0.5
})