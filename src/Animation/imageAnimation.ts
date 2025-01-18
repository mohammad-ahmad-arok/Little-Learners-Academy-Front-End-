import gsap from "gsap";

export const setupImageAnimation = (
  imageRef: React.RefObject<HTMLDivElement>
) => {
  if (!imageRef.current) return;

  const image = imageRef.current;

  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const centerX = innerWidth / 2;
    const centerY = innerHeight / 2;

    const deltaX = (clientX - centerX) / centerX;
    const deltaY = (clientY - centerY) / centerY;

    gsap.to(image, {
      duration: 0.5,
      rotationY: deltaX * 20,
      rotationX: -deltaY * 20,
      ease: "power2.out",
    });
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
};
