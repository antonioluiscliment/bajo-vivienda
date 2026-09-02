"use client";

import { useState } from "react";
import HeroMotion, { type MotionSlide } from "./HeroMotion";
import { localeHref, type Locale } from "@/lib/i18n";

/**
 * Wraps the hero's image slideshow together with the clickable corner tag,
 * so the tag's text can alternate in step with the slideshow's cycles:
 * `priceTag` while showing the first pass through the four images, then
 * `optionTag` for the next full pass, and so on. Needs client state (the
 * "use client" boundary), so it's split out from Hero.tsx to keep the rest
 * of the hero server-rendered.
 */
export default function HeroVisual({
  locale,
  slides,
  priceTag,
  optionTag,
}: {
  locale: Locale;
  slides: MotionSlide[];
  priceTag: string;
  optionTag: string;
}) {
  const [showOption, setShowOption] = useState(false);

  return (
    <div className="hero-visual-frame">
      <div className="hero-visual-corner" />
      <div className="hero-visual-image">
        <HeroMotion slides={slides} priority onCycleComplete={() => setShowOption((v) => !v)} />
      </div>
      <a className="hero-visual-tag mono" href={localeHref(locale, "/oferta-terreno")}>
        {showOption ? optionTag : priceTag}
      </a>
    </div>
  );
                                   }
