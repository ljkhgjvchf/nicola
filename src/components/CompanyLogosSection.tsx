import { animate, motion, useMotionValue } from 'framer-motion';
import React, { CSSProperties, useEffect, useState } from 'react';
import useMeasure from 'react-use-measure';
import { cn } from '@/lib/utils';
import alpineLogo from '@/assets/company-logos/alpine.svg';
import bugattiLogo from '@/assets/company-logos/bugatti.svg';
import cotyLogo from '@/assets/company-logos/coty.svg';
import hublotLogo from '@/assets/company-logos/hublot.svg';
import hugoBossLogo from '@/assets/company-logos/hugo-boss.svg';
import mcdonaldsLogo from '@/assets/company-logos/mcdonalds.svg';
import shiseidoLogo from '@/assets/company-logos/shiseido.svg';
import vogueLogo from '@/assets/company-logos/vogue.svg';

type InfiniteSliderProps = {
    children: React.ReactNode;
    gap?: number;
    speed?: number;
    speedOnHover?: number;
    direction?: 'horizontal' | 'vertical';
    reverse?: boolean;
    className?: string;
};

function InfiniteSlider({
    children,
    gap = 16,
    speed = 100,
    speedOnHover,
    direction = 'horizontal',
    reverse = false,
    className,
}: InfiniteSliderProps) {
    const [currentSpeed, setCurrentSpeed] = useState(speed);
    const [ref, { width, height }] = useMeasure();
    const translation = useMotionValue(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [key, setKey] = useState(0);

    useEffect(() => {
        let controls;
        const size = direction === 'horizontal' ? width : height;
        if (size === 0) return;

        const contentSize = size + gap;
        const from = reverse ? -contentSize / 2 : 0;
        const to = reverse ? 0 : -contentSize / 2;

        const distanceToTravel = Math.abs(to - from);
        const duration = distanceToTravel / currentSpeed;

        if (isTransitioning) {
            const remainingDistance = Math.abs(translation.get() - to);
            const transitionDuration = remainingDistance / currentSpeed;
            controls = animate(translation, [translation.get(), to], {
                ease: 'linear',
                duration: transitionDuration,
                onComplete: () => {
                    setIsTransitioning(false);
                    setKey((prevKey) => prevKey + 1);
                },
            });
        } else {
            controls = animate(translation, [from, to], {
                ease: 'linear',
                duration: duration,
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0,
                onRepeat: () => {
                    translation.set(from);
                },
            });
        }

        return () => controls?.stop();
    }, [key, translation, currentSpeed, width, height, gap, isTransitioning, direction, reverse]);

    const hoverProps = speedOnHover
        ? {
              onHoverStart: () => {
                  setIsTransitioning(true);
                  setCurrentSpeed(speedOnHover);
              },
              onHoverEnd: () => {
                  setIsTransitioning(true);
                  setCurrentSpeed(speed);
              },
          }
        : {};

    return (
        <div className={cn('overflow-hidden', className)}>
            <motion.div
                className="flex w-max"
                style={{
                    ...(direction === 'horizontal' ? { x: translation } : { y: translation }),
                    gap: `${gap}px`,
                    flexDirection: direction === 'horizontal' ? 'row' : 'column',
                }}
                ref={ref}
                {...hoverProps}>
                {children}
                {children}
            </motion.div>
        </div>
    );
}

export type BlurredInfiniteSliderProps = InfiniteSliderProps & {
    fadeWidth?: number;
    containerClassName?: string;
};

export function BlurredInfiniteSlider({
    children,
    fadeWidth = 80,
    containerClassName,
    ...sliderProps
}: BlurredInfiniteSliderProps) {

    const maskStyle: CSSProperties = {
        maskImage: `linear-gradient(to right, transparent, black ${fadeWidth}px, black calc(100% - ${fadeWidth}px), transparent)`,
        WebkitMaskImage: `linear-gradient(to right, transparent, black ${fadeWidth}px, black calc(100% - ${fadeWidth}px), transparent)`,
    };

    return (
        <div
            className={cn('relative w-full', containerClassName)}
            style={maskStyle}
        >
            <InfiniteSlider {...sliderProps}>{children}</InfiniteSlider>
        </div>
    );
}

export const CompanyLogosSection = () => {
  const companies = [
    { name: 'Alpine', logo: alpineLogo, height: 20 },
    { name: 'Bugatti', logo: bugattiLogo, height: 32 },
    { name: 'Coty', logo: cotyLogo, height: 32 },
    { name: 'Hublot', logo: hublotLogo, height: 20 },
    { name: 'Hugo Boss', logo: hugoBossLogo, height: 20 },
    { name: 'McDonalds', logo: mcdonaldsLogo, height: 20 },
    { name: 'Shiseido', logo: shiseidoLogo, height: 20 },
    { name: 'Vogue', logo: vogueLogo, height: 32 }
  ];

  return (
    <section className="bg-background overflow-hidden py-16 w-full border-b border-border">
      <div className="m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="flex-shrink-0 text-center md:text-right md:max-w-44 md:border-r md:border-border md:pr-6">
            <p className="text-sm text-muted-foreground">
              Trusted by Industry Leaders
            </p>
          </div>
          <div className="w-full py-6 md:w-auto md:flex-1">
            <BlurredInfiniteSlider
              speedOnHover={20}
              speed={40}
              gap={112}
              fadeWidth={80}
            >
              {companies.map((company) => (
                <div key={company.name} className="flex">
                  <img
                    className="mx-auto w-fit dark:invert"
                    src={company.logo}
                    alt={`${company.name} logo`}
                    style={{ height: `${company.height}px` }}
                    width="auto"
                  />
                </div>
              ))}
            </BlurredInfiniteSlider>
          </div>
        </div>
      </div>
    </section>
  );
};