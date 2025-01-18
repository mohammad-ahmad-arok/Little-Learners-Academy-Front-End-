import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const counterAnimation = (
  element: HTMLElement | null,
  targetNumber: number,
  prefix: string = "",
  duration: number = 3
) => {
  if (element) {
    let currentNumber = 0;
    const increment = targetNumber / (duration * 60);

    gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reset",
      },
      duration,
      onUpdate: () => {
        if (currentNumber < targetNumber) {
          currentNumber = Math.min(currentNumber + increment, targetNumber);
          element.innerText = `${prefix}${Math.round(
            currentNumber
          ).toLocaleString()}`;
        }
      },
      onComplete: () => {
        element.innerText = `${prefix}${targetNumber.toLocaleString()}`;
      },
      ease: "power1.out",
    });
  }
};
