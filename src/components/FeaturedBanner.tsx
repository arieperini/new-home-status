"use client";

import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const banners = [
  {
    id: 1,
    backgroundColor: "bg-emerald-900",
    title: "ALPHADAY",
    description: "Acompanhe as principais atualizações do dia.",
    imgSrc: "https://same-assets.com/image-placeholder.jpg", // Placeholder
    buttonUrl: "#",
    buttonText: "Saiba mais",
  },
  {
    id: 2,
    backgroundColor: "bg-blue-900",
    title: "Hyundai IONIQ 5",
    description: "Conheça o carro elétrico da Hyundai",
    imgSrc: "https://same-assets.com/image-car-placeholder.jpg", // Placeholder
    buttonUrl: "#",
    buttonText: "Ver detalhes",
    logo: "https://same-assets.com/logo-placeholder.jpg", // Placeholder for Hyundai logo
  },
];

export default function FeaturedBanner() {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {banners.map((banner) => (
          <CarouselItem key={banner.id}>
            <div className={`flex flex-col md:flex-row items-center ${banner.backgroundColor} text-white p-4 py-8 md:p-10`}>
              <div className="flex-1 space-y-3 md:mr-6">
                {banner.logo && (
                  <div className="h-8 relative">
                    <Image
                      src={banner.logo}
                      alt="Logo"
                      fill
                      style={{ objectFit: "contain" }}
                      sizes="(max-width: 768px) 100vw, 200px"
                    />
                  </div>
                )}
                <h2 className="text-2xl md:text-3xl font-bold">{banner.title}</h2>
                <p className="text-sm md:text-base">{banner.description}</p>
                <Button className="bg-white text-zinc-900 hover:bg-gray-100 mt-2">
                  {banner.buttonText}
                </Button>
              </div>
              <div className="flex-1 mt-4 md:mt-0 relative h-[200px] md:h-[300px] w-full">
                <Image
                  src={banner.imgSrc}
                  alt={banner.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`h-2 w-2 rounded-full ${index === 0 ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </Carousel>
  );
}
