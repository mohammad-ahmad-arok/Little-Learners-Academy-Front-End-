import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

export const typingAnimation = (element: HTMLElement | null, text: string) => {
  if (element) {
    const words = text.split(" ");

    element.innerHTML = words.map((word) => `<span>${word}</span>`).join(" ");

    gsap.from(element.children, {
      duration: 0.5,
      opacity: 0,
      y: 20,
      stagger: 0.3,
      ease: "power2.out",
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    });
  }
};
