"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useState } from "react";

const FALLBACK_SRC = "/images/fallback.jpg";

interface SafeImageProps extends ImageProps {
  fallbackSrc?: string;
}

export function SafeImage({
  src,
  fallbackSrc = FALLBACK_SRC,
  alt,
  className = "",
  onLoad,
  onError,
  ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setLoaded(false);
    setErrored(false);
  }, [src]);

  return (
    <>
      {!loaded && (
        <div
          className="absolute inset-0 bg-surface"
          aria-hidden="true"
        >
          <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-surface via-background to-surface" />
        </div>
      )}
      <Image
        {...props}
        src={errored ? fallbackSrc : imgSrc}
        alt={alt}
        className={`object-cover transition-opacity duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${loaded ? "opacity-100" : "opacity-0"} ${className}`}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        onError={(e) => {
          if (!errored) {
            setErrored(true);
            setImgSrc(fallbackSrc);
          }
          setLoaded(true);
          onError?.(e);
        }}
      />
    </>
  );
}
