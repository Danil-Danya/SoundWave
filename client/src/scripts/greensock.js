import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, Draggable, MotionPathPlugin); 

class AnimationLanding {
    animateHeader (title, text, image) {
        gsap.fromTo(title, {
            x: -300,
            opacity: 0
        },{
            x: 0,
            opacity: 1,
            duration: 0.5
        });

        gsap.fromTo(text, {
            y: 300,
            opacity: 0
        },{
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: 0.5
        });

        gsap.fromTo(image, {
            x: 300,
            opacity: 0
        },{
            x: 0,
            opacity: 1,
            duration: 0.5,
            delay: 1
        });
    }

    animateDownloadItem(item, trigger) {
        gsap.fromTo(item, {
            y: 300,
            opacity: 0,
        },{
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 1,
            scrollTrigger: {
                trigger: trigger,
                start: 'top 0',
                end: 'bottom 0',
                scrub: 4,
            }
        });
    }

    animateTarifsItem (item, trigger) {
        gsap.fromTo(item, {
            y: 300,
            opacity: 0,
        },{
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 1,
            scrollTrigger: {
                trigger: trigger,
                start: 'top 50%',
                end: 'bottom 80%',
                scrub: 3,
            }
        });
    }
}

const animationLanding = new AnimationLanding();

export { animationLanding };