import { gsap } from "gsap";

export const CircularMotion = (
  element: HTMLElement | null,
  duration: number = 1.5
) => {
  if (element) {
    gsap.from(element, {
      duration,
      rotation: 360,
      x: 200,
      y: 200,
      repeat: -1,
      yoyo: true,
      ease: "none",
    });
  }
};
