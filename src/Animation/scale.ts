import { gsap } from "gsap";

export const scale = (
  element: HTMLElement | null,
  scaleValue: number = 1.5,
  duration: number = 2
) => {
  if (element) {
    gsap.to(element, {
      duration,
      scale: scaleValue,
      repeat: -1,
      yoyo: true,
      ease: "elastic.out(1, 0.3)",
    });
  }
};
