import { animate, motion, useMotionValue } from 'framer-motion';
import React, { CSSProperties, useEffect, useState } from 'react';
import useMeasure from 'react-use-measure';
import { cn } from '@/lib/utils';
import newLogo1 from '@/assets/company-logos/new-logo-1.svg';
import newLogo2 from '@/assets/company-logos/new-logo-2.svg';
import newLogo3 from '@/assets/company-logos/new-logo-3.svg';
import newLogo4 from '@/assets/company-logos/new-logo-4.svg';
import newLogo5 from '@/assets/company-logos/new-logo-5.svg';
import newLogo6 from '@/assets/company-logos/new-logo-6.svg';
import newLogo7 from '@/assets/company-logos/new-logo-7.svg';
import newLogo8 from '@/assets/company-logos/new-logo-8.svg';

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
    { name: 'Company 1', logo: newLogo1, height: 40 },
    { name: 'Company 2', logo: newLogo2, height: 40 },
    { name: 'Company 3', logo: newLogo3, height: 40 },
    { name: 'Company 4', logo: newLogo4, height: 40 },
    { name: 'Company 5', logo: newLogo5, height: 40 },
    { name: 'Company 6', logo: newLogo6, height: 40 },
    { name: 'Company 7', logo: newLogo7, height: 40 },
    { name: 'Company 8', logo: newLogo8, height: 40 }
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
                <div key={company.name} className="flex h-12 items-center">
                  <img
                    className="mx-auto w-fit dark:invert block"
                    src={company.logo}
                    alt={`${company.name} logo`}
                    style={{ height: `${company.height}px` }}
                    loading="lazy"
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