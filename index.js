const nav = document.querySelector(".nav");
const navh1 = nav ? nav.querySelector("h1") : null;
const navActions = nav ? nav.querySelector(".navAction_sec") : null;
const videoContainer = document.querySelector(".videoContainer");
let clipValue;
let previousClipValue = null;

var heroTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#home",
    start: "top top",
    end: "bottom top",
    pin: true,
    scrub: 0.8,
  },
});



gsap.set(".textContainer", { scale: 5 });

heroTl.to(
  ".videoContainer",
  {
    "--clip": "0%",
    ease: "power1.out",
  },
  "a"
);

heroTl.to(
  ".textContainer",
  {
    scale: 1.2,
    ease: "power1.out",
  },
  "a"
);

heroTl.to(
  ".lft",
  {
    xPercent: 2,
    stagger: 0.03,
    ease: "power4.out",
  },
  "b"
);
heroTl.to(
  ".rgt",
  {
    xPercent: -2,
    stagger: 0.03,
    ease: "power4.out",
  },
  "b"
);

const section2Heading = document.querySelectorAll(".section2Heading");

section2Heading.forEach((heading) => {
  const words = heading.innerText.split(" ");
  heading.innerHTML = words
    .map((word) => `<span class="word">${word}</span>`)
    .join(" ");
});

gsap.from(".word", {
  y: 100,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  scrollTrigger: {
    trigger: ".section2",
    start:'top center+=140vh',
    end:"bottom top",
    markers:false,
  }
});
const section3Heading = document.querySelectorAll(".section3Heading");

section3Heading.forEach((heading) => {
  const words = heading.innerText.split(" ");
  heading.innerHTML = words
    .map((word) => `<span class="word">${word}</span>`)
    .join(" ");
});


gsap.from(".section3Heading span", {
  y: 100,
  opacity: 0,
  duration: 0.5,
  stagger: 0.15,
  scrollTrigger: {
    trigger: ".section3",
    start:'top center-=220vh',
    end:"bottom top",
    markers:false,
  }
});



const observer = new MutationObserver(() => {
  const computedStyle = window.getComputedStyle(videoContainer);
  const clipValue = parseInt(
    computedStyle.getPropertyValue("--clip").trim(),
    10
  );

  if (clipValue > 1 && nav) {
    gsap.to(nav, { backgroundColor: "transparent", duration: 0.5 });
    if (navh1) gsap.to(navh1, { color: "#fff", duration: 0.5 });
    if (navActions) gsap.to(navActions, { color: "#fff", duration: 0.5 });
  }
});

observer.observe(videoContainer, {
  attributes: true,
  attributeFilter: ["style"],
});

const sections = [
  { trigger: "#home", backgroundColor: "#000", color: "#fff" },
  // { trigger: ".textContainer", backgroundColor: "#000", color: "#fff" },
  { trigger: ".section2", backgroundColor: "#aedee0", color: "#000" },
  { trigger: ".section3", backgroundColor: "#EF9D71", color: "#000" },
  { trigger: ".section4", backgroundColor: "#fff", color: "#000" },
];

sections.forEach(({ trigger, backgroundColor, color }, index) => {
  ScrollTrigger.create({
    trigger: trigger,
    start: "top top",
    end: "bottom top",
    // markers: true,
    onEnter: () => {
      gsap.to("body", {
        backgroundColor,
        color,
        duration: 0.2,
        ease: "power4.out",
      });
      if (nav)
        gsap.to(nav, {
          backgroundColor,
          color,
          duration: 0.2,
          ease: "power4.out",
        });
      if (navh1) gsap.to(navh1, { color, duration: 0.2, ease: "power4.out" });
      if (navActions)
        gsap.to(navActions, { color, duration: 0.2, ease: "power4.out" });

      if (index === 1) {
        gsap.to(".card", { color: "black", border: "1px solid black" });
        gsap.to(".ltext", { color: "black" });
      }
    },
    onEnterBack: () => {
      gsap.to("body", {
        backgroundColor,
        color,
        duration: 0.2,
        ease: "power4.out",
      });
      if (nav)
        gsap.to(nav, {
          backgroundColor,
          color,
          duration: 0.2,
          ease: "power4.out",
        });
      if (navh1) gsap.to(navh1, { color, duration: 0.2, ease: "power4.out" });
      if (navActions)
        gsap.to(navActions, { color, duration: 0.2, ease: "power4.out" });

      if (index === 1) {
        gsap.to(".card", { color: "black", border: "1px solid black" });
        gsap.to(".ltext", { color: "black" });
      }
    },
    onLeave: () => {
      const next = sections[index + 1];
      if (next) {
        gsap.to("body", {
          backgroundColor: next.backgroundColor,
          color: next.color,
          duration: 0.2,
          ease: "power4.out",
        });
        if (nav)
          gsap.to(nav, {
            backgroundColor: next.backgroundColor,
            color: next.color,
            duration: 0.2,
            ease: "power4.out",
          });
        if (navh1)
          gsap.to(navh1, {
            color: next.color,
            duration: 0.2,
            ease: "power4.out",
          });
        if (navActions)
          gsap.to(navActions, {
            color: next.color,
            duration: 0.2,
            ease: "power4.out",
          });

        if (index === 1) {
          gsap.to(".card", { color: "", border: "" });
          gsap.to(".ltext", { color: "" });
        }
      }
    },
    onLeaveBack: () => {
      const prev = sections[index - 1];
      if (prev) {
        gsap.to("body", {
          backgroundColor: prev.backgroundColor,
          color: prev.color,
          duration: 0.2,
          ease: "power4.out",
        });
        if (nav)
          gsap.to(nav, {
            backgroundColor: prev.backgroundColor,
            color: prev.color,
            duration: 0.2,
            ease: "power4.out",
          });
        if (navh1)
          gsap.to(navh1, {
            color: prev.color,
            duration: 0.2,
            ease: "power4.out",
          });
        if (navActions)
          gsap.to(navActions, {
            color: prev.color,
            duration: 0.2,
            ease: "power4.out",
          });

        if (index === 1) {
          gsap.to(".card", { color: "", border: "" });
          gsap.to(".ltext", { color: "" });
        }
      }
    },
  });
});

sections.forEach(({ trigger, backgroundColor, color }, index) => {
  const computedStyle = window.getComputedStyle(videoContainer);
  let clipValue = parseInt(computedStyle.getPropertyValue("--clip").trim(), 10);
  ScrollTrigger.create({
    trigger: trigger,
    start: "top center",
    end: "bottom top",
    // markers: true,
    onEnter: () => {
      gsap.to("body", {
        backgroundColor,
        color,
        duration: 0.2,
        ease: "power4.out",
      });
      if (nav)
        gsap.to(nav, {
          backgroundColor,
          color,
          duration: 0.2,
          ease: "power4.out",
        });
      if (navh1) gsap.to(navh1, { color, duration: 0.2, ease: "power4.out" });
      if (navActions)
        gsap.to(navActions, { color, duration: 0.2, ease: "power4.out" });

      if (index === 1) {
        gsap.to(".card", { color: "black", border: "1px solid black" });
        gsap.to(".ltext", { color: "black" });
      }
    },
    onEnterBack: () => {
      gsap.to("body", {
        backgroundColor,
        color,
        duration: 0.2,
        ease: "power4.out",
      });
      if (nav)
        gsap.to(nav, {
          backgroundColor,
          color,
          duration: 0.2,
          ease: "power4.out",
        });
      if (navh1) gsap.to(navh1, { color, duration: 0.2, ease: "power4.out" });
      if (navActions)
        gsap.to(navActions, { color, duration: 0.2, ease: "power4.out" });

      if (index === 1) {
        gsap.to(".card", { color: "black", border: "1px solid black" });
        gsap.to(".ltext", { color: "black" });
      }
    },
    onLeave: () => {
      const next = sections[index + 1];
      if (next) {
        gsap.to("body", {
          backgroundColor: next.backgroundColor,
          color: next.color,
          duration: 0.2,
          ease: "power4.out",
        });
        if (nav)
          gsap.to(nav, {
            backgroundColor: next.backgroundColor,
            color: next.color,
            duration: 0.2,
            ease: "power4.out",
          });
        if (navh1)
          gsap.to(navh1, {
            color: next.color,
            duration: 0.2,
            ease: "power4.out",
          });
        if (navActions)
          gsap.to(navActions, {
            color: next.color,
            duration: 0.2,
            ease: "power4.out",
          });

        if (index === 1) {
          gsap.to(".card", { color: "", border: "" });
          gsap.to(".ltext", { color: "" });
        }
      }
    },
    onLeaveBack: () => {
      const prev = sections[index - 1];
      if (prev) {
        gsap.to("body", {
          backgroundColor: prev.backgroundColor,
          color: prev.color,
          duration: 0.2,
          ease: "power4.out",
        });
        if (nav)
          gsap.to(nav, {
            backgroundColor: prev.backgroundColor,
            color: prev.color,
            duration: 0.2,
            ease: "power4.out",
          });
        if (navh1)
          gsap.to(navh1, {
            color: prev.color,
            duration: 0.2,
            ease: "power4.out",
          });
        if (navActions)
          gsap.to(navActions, {
            color: prev.color,
            duration: 0.2,
            ease: "power4.out",
          });

        if (index === 1) {
          gsap.to(".card", { color: "", border: "" });
          gsap.to(".ltext", { color: "" });
        }
      }
    },
  });
});

const cards = document.querySelectorAll(".cards");

// Horizontal Scroll
gsap.to(".slide", {
  scrollTrigger: {
    trigger: ".section3",
    start: "top top",
    end: "bottom bottom",

    scrub: 1,
  },
  xPercent: -315,
  ease: Power4,
});



gsap.matchMedia().add("(max-width: 460px)", () => {
  gsap.to(".slide", {
    scrollTrigger: {
      trigger: ".section3",
      start: "top top",
      end: "bottom bottom",
      markers:true,
      scrub: 1,
    },
    xPercent: -300 ,
    ease: "power1.out",
  });
});
