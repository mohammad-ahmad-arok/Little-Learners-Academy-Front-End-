import { gsap } from 'gsap';

export const jumpingStarsAnimation = (card: HTMLElement | null) => {
  console.log('Card Element:', card); // تحقق من العنصر
  if (card) {
    const stars = card.querySelectorAll('.star'); // تحديد جميع النجوم
    console.log('Stars:', stars); // تحقق من النجوم

    // تعريف الـ animation لجميع النجوم
    const jumpAnimation = gsap.to(stars, {
      y: -20, // تحريك النجوم للأعلى
      duration: 0.5,
      ease: 'power2.out',
      stagger: 0.1, // تأخير بين كل نجمة
      paused: true, // إيقاف الـ animation حتى يتم تفعيله
    });

    // تفعيل الـ animation عند التمرير فوق الكارد
    card.addEventListener('mouseenter', () => {
      console.log('Mouse Enter'); // تحقق من تفعيل الحدث
      jumpAnimation.play();
    });

    // إعادة الـ animation إلى البداية عند مغادرة الكارد
    card.addEventListener('mouseleave', () => {
      console.log('Mouse Leave'); // تحقق من تفعيل الحدث
      jumpAnimation.reverse(); // عكس الـ animation
    });
  }
};