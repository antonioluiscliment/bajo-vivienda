"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export type MotionSlide = {
  src: string;
  alt: string;
  /** How long this slide stays fully visible before crossfading to the next, in ms. */
  durationMs: number;
};

/**
 * Seamless looping crossfade + slow zoom (Ken Burns) sequence, used in place
 * of a single static hero image. No video asset: every "frame" is a next/image
 * layer, cross-faded via React state + CSS opacity transitions. Each slide can
 * have its own dwell time (see `durationMs`), so some images can hold longer
 * than others in the loop.
 *
 * Respects prefers-reduced-motion: the sequence never advances and the zoom
 * animation is disabled (see the media query in globals.css), leaving the
 * first slide as a static image.
 */
export default function HeroMotion({
  slides,
  priority,
}: {
  slides: MotionSlide[];
  priority?: boolean;
}) {
  const [active, setActive] = useState(0);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mq.matches;
  }, []);

  useEffect(() => {
    if (reducedMotionRef.current || slides.length <= 1) return;

    let cancelled = false;
    const timer = setTimeout(() => {
      if (!cancelled) setActive((i) => (i + 1) % slides.length);
    }, slides[active].durationMs);

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [active, slides]);

  return (
    <>
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`motion-layer${i === active ? " is-active" : ""}`}
          aria-hidden={i === active ? undefined : true}
        >
          <Image
            src={slide.src}
            alt={i === active ? slide.alt : ""}
            fill
            sizes="(max-width: 880px) 90vw, 560px"
            style={{ objectFit: "cover" }}
            priority={Boolean(priority) && i === 0}
          />
        </div>
      ))}
    </>
  );
}
