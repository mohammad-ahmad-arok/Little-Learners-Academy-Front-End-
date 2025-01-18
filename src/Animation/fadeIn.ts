import { gsap } from "gsap";

export const fadeIn = (
  element: HTMLElement | null,
  duration: number = 1.5,
  delay: number = 0
) => {
  if (element) {
    gsap.from(element, {
      duration,
      opacity: 0,
      y: 50,
      ease: "power2.out",
      delay,
    });
  }
};
