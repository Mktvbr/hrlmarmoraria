"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { useEffect } from "react";

export default function Carousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
    });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();

    }, [emblaApi]);
    useEffect(() => {
        if (!emblaApi) return

        const interval = setInterval(() => {
            emblaApi.scrollNext()
        }, 6000)

        return () => clearInterval(interval)
    }, [emblaApi])

    const images = [
        "/mesa.png",
        "/pia.jpg",
        "/pia2.jpg",
        "/pia3.jpg",
        "/pulpito.jpg",
        "/bancada.jpg",
    ];

    return (
        <div className="relative w-full max-w-7xl mx-auto">
            {/* Viewport */}
            <div className="overflow-hidden w-full" ref={emblaRef}>
                {/* Track */}
                <div className="flex -mx-4">
                    {images.map((src, index) => (
                        <div
                            key={index}
                            className="
                                pl-4
                                flex-[0_0_90%]
                                sm:flex-[0_0_48%]
                                md:flex-[0_0_31%]
                                lg:flex-[0_0_23%]
                                "
                        >
                            <div className="relative h-80 overflow-hidden ">
                                <Image
                                    src={src}
                                    alt={`Imagem ${index}`}
                                    fill
                                    quality={100}
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transition-transform duration-500 hover:scale-105 rounded-2xl"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Botões */}
            <button
                onClick={scrollPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-lg hover:scale-110 transition"
            >
                ←
            </button>

            <button
                onClick={scrollNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-lg hover:scale-110 transition"
            >
                →
            </button>
        </div>
    );
}
