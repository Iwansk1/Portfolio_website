gsap.registerPlugin(ScrollTrigger) 

gsap.from(".header_title",{
    opacity: 0,
    duration: 1.5
})
gsap.from(".breakline",{
    y: 250,
    duration: 1.5,
    opacity: 0
})
gsap.from(".about_me_img" ,{
    scrollTrigger: ".about-me",
    x: 150,
    duration: 1.5,
    opacity: 0
})
gsap.from(".about_me_text",{
    scrollTrigger: ".about-me",
    x: -150,
    duration: 1.5,
    opacity: 0
})
gsap.from(".projects_artstation",{
    scrollTrigger: ".projects_artstation",
    x: 350,
    duration: 1.5,
    delay: 0.1,
})
gsap.from(".projects_design",{
    scrollTrigger: ".projects_design",
    x: -350,
    duration: 1.5,
    delay: 0.1
})

gsap.from(".intro",{
    scrollTrigger: ".info_introduction",
    duration: 1.5,
    x: -350,
    opacity: 0,
    delay: 0.1
})
gsap.from(".intro_text",{
    scrollTrigger: ".info_introduction",
    duration: 1.5,
    x: 350,
    opacity: 0,
    delay: 0.1
})
gsap.from(".game",{
    scrollTrigger: ".info_game",
    duration: 1.5,
    x: 350,
    opacity: 0,
    delay: 0.1
})
gsap.from(".game_text",{
    scrollTrigger: ".info_game",
    duration: 1.5,
    x: -350,
    opacity: 0,
    delay: 0.1
})
gsap.from(".dev",{
    scrollTrigger: ".info_dev",
    duration: 1.5,
    x: -350,
    opacity: 0,
    delay: 0.1
})
gsap.from(".dev_text",{
    scrollTrigger: ".info_dev",
    duration: 1.5,
    x: 350,
    opacity: 0,
    delay: 0.1,
})