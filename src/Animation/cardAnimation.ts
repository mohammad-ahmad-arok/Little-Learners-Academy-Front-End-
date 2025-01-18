import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const setupCardAnimation = (
  numberRef: React.RefObject<HTMLHeadingElement>,
  lineRef: React.RefObject<HTMLDivElement>,
  cardRef: React.RefObject<HTMLDivElement>
) => {
  if (!numberRef.current || !lineRef.current || !cardRef.current) return;

  const number = numberRef.current;
  const line = lineRef.current;
  const card = cardRef.current;

  gsap.set([number, line, card], { opacity: 0 });
  gsap.set(line, { scaleY: 0, transformOrigin: "top" });

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: card,
      start: "top 80%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
    },
  });

  timeline.to(number, {
    duration: 0.5,
    opacity: 1,
    ease: "power2.out",
  });

  timeline.to(line, {
    duration: 1,
    scaleY: 1,
    opacity: 1,
    ease: "power2.out",
  });

  timeline.to(
    card,
    {
      duration: 1,
      opacity: 1,
      y: 0,
      ease: "bounce.out",
    },
    "-=0.5"
  );
};
