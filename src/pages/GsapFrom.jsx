import React, { useEffect } from 'react';
import gsap from 'gsap';

const GsapFrom = () => {
  useEffect(() => {
    // Animate the green box to a new state
    gsap.to("#green-box", {
      x: 250, // Move to a position 250px to the right
      opacity: 1, // End with full opacity
      duration: 2, // Animation duration
      rotation: 90, // Rotate to 90 degrees
      repeat: -1,  // Repeat the animation infinitely
      yoyo: true,  // Make the animation reverse after completing a cycle
      ease: 'power1.inOut', // Smooth easing effect
    });
  }, []);

  return (
    <main>
      <h1>GsapFrom</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is used to animate elements from
        their current state to a new state.
      </p>

      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is different from{" "}
        <code>gsap.from()</code> because it animates elements from their
        current state to a new state, whereas <code>gsap.from()</code> animates
        elements from a new state to their current state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.to()"
          target="_blank"
          rel="noreferrer noopener nofollow"
        >
          gsap.to()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <div id="green-box" className="w-20 h-20 bg-green-500 rounded-lg" />
      </div>
    </main>
  );
};

export default GsapFrom;
