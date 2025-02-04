
    gsap.from(".navbar", {
        y: -100, 
        opacity: 0, 
        duration: 1, 
        ease: "power2.out"
    });

    // Video Overlay Arrow Animation (Bouncing Effect)
    gsap.to("#overlay-text i", {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 0.8,
        ease: "power1.inOut"
    });

    // Content Section Animation (Fade-in & Slide)
    gsap.from(".content-text", {
        scrollTrigger: {
            trigger: ".content-text",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        x: 100, 
        opacity: 0, 
        duration: 1.2, 
        ease: "power2.out"
    });

    gsap.from(".content-section img", {
        scrollTrigger: {
            trigger: ".content-section img",
            start: "top 85%",
            toggleActions: "play none none none"
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });

    // Flower Image Animation (Subtle Pulse Effect)
    gsap.to(".flower", {
        scale: 1.05,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power1.inOut"
    });

