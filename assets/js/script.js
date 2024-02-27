// 

var tl = gsap.timeline()
var tl1 = gsap.timeline()
var animateName = gsap.timeline()

tl.from(".page1 .about-img img", {
    rotate:360,
    repeat:-1,
    delay:0.5,
    duration:50,
    yoyo:true,
})


tl1.from(".hero-text > h5", {
    y:20,
    repeat:-1,
    duration:0.7,
    yoyo:true,
})
tl1.to(".h1-portfolio", {
    x:1920,
    color:'#FF9900',
    repeat:-1,
    duration:25,
})

// animateName.from(".page > .animated-name-header", {
//     x:1000,
//     duration:3.5,
//     delay:0.5,
// })



// Typewriter effect here ...
var typingEffect = document.getElementById('typewriting-effect');

var Typewriter = new Typewriter(typingEffect, {
    loop:true,
    delay:200,
});

Typewriter
    .pauseFor(90)
    .typeString('<strong><span style="color: #FF9900; font-size: 28px;"> a Web Developer.</span></strong>')
    .pauseFor(400)
    .deleteChars(16)
    .typeString('<strong><span style="color: #FF9900; font-size: 28px;">a Programmer.</span></strong>')
    .pauseFor(400)
    .deleteChars(13)
    .typeString('<strong><span style="color: #FF9900; font-size: 28px;">a UI Designer.</span></strong>')
    .pauseFor(400)
    .start();


// for a smooth scrolling the anchor tags
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
