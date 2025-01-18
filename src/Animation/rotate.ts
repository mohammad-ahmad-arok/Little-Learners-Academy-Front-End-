import { gsap } from "gsap";

export const rotate = (
  element: HTMLElement | null,
  duration: number = 2,
  repeat: number = -1
) => {
  if (element) {
    gsap.to(element, {
      duration,
      rotation: 360,
      repeat,
      yoyo: true,
      ease: "power1.inOut",
    });
  }
};
