
    // gsap.from(".navbar", {
    //     y: -100, 
    //     opacity: 0, 
    //     duration: 1, 
    //     ease: "power2.out"
    // });

    // // Video Overlay Arrow Animation (Bouncing Effect)
    // gsap.to("#overlay-text i", {
    //     y: 10,
    //     repeat: -1,
    //     yoyo: true,
    //     duration: 0.8,
    //     ease: "power1.inOut"
    // });

    // // Content Section Animation (Fade-in & Slide)
    // gsap.from(".content-text", {
    //     scrollTrigger: {
    //         trigger: ".content-text",
    //         start: "top 80%",
    //         toggleActions: "play none none none"
    //     },
    //     x: 100, 
    //     opacity: 0, 
    //     duration: 1.2, 
    //     ease: "power2.out"
    // });

    // gsap.from(".content-section img", {
    //     scrollTrigger: {
    //         trigger: ".content-section img",
    //         start: "top 85%",
    //         toggleActions: "play none none none"
    //     },
    //     scale: 0.8,
    //     opacity: 0,
    //     duration: 1,
    //     ease: "power2.out"
    // });

    // // Flower Image Animation (Subtle Pulse Effect)
    // gsap.to(".flower", {
    //     scale: 1.05,
    //     repeat: -1,
    //     yoyo: true,
    //     duration: 2,
    //     ease: "power1.inOut"
    // });


    // GSAP Animation for Sections (Fade-in on Scroll)
    gsap.utils.toArray('.content-section').forEach((section) => {
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse",
            }
        });
    });

    // Navbar Shrink Effect on Scroll
    gsap.to(".navbar-custom", {
        background: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(20px)",
        height: "60px",
        duration: 0.3,
        scrollTrigger: {
            trigger: "body",
            start: "top -10%",
            toggleActions: "play none none reverse",
        }
    });

    // Slide-in animation for text and images
    gsap.from(".content-text", {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".content-text",
            start: "top 80%",
        }
    });

    gsap.from(".content-section img", {
        x: 100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".content-section img",
            start: "top 80%",
        }
    });

    // Button Hover Effect
    document.querySelectorAll("button").forEach((btn) => {
        btn.addEventListener("mouseenter", () => {
            gsap.to(btn, { scale: 1.1, duration: 0.2 });
        });
        btn.addEventListener("mouseleave", () => {
            gsap.to(btn, { scale: 1, duration: 0.2 });
        });
    });

