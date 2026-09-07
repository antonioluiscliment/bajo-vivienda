"use client";

import { useState } from "react";
import HeroMotion, { type MotionSlide } from "./HeroMotion";
import { localeHref, type Locale } from "@/lib/i18n";

/**
 * Wraps the hero's image slideshow together with the clickable corner tag,
 * so the tag's text can alternate in step with the slideshow's cycles:
 * `tags[0]` while showing the first pass through the four images, `tags[1]`
 * for the next full pass, `tags[2]` for the one after that, then back to
 * `tags[0]` and so on. Needs client state (the "use client" boundary), so
 * it's split out from Hero.tsx to keep the rest of the hero server-rendered.
 */
export default function HeroVisual({
  locale,
  slides,
  tags,
}: {
  locale: Locale;
  slides: MotionSlide[];
  tags: string[];
}) {
  const [tagIndex, setTagIndex] = useState(0);

  return (
    <div className="hero-visual-frame">
      <div className="hero-visual-corner" />
      <div className="hero-visual-image">
        <HeroMotion
          slides={slides}
          priority
          onCycleComplete={() => setTagIndex((i) => (i + 1) % tags.length)}
        />
      </div>
      <a className="hero-visual-tag mono" href={localeHref(locale, "/oferta-terreno")}>
        {tags[tagIndex]}
      </a>
    </div>
  );
}
