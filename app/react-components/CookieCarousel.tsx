import React from "react";
import Image from "@/node_modules/next/image";
import cookieImage from "../public/Cookie-Dough-Main.jpg";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CookieCarousel = () => {
  return (
    <Carousel className="w-full max-w-md mx-auto mt-8">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-6">
                  <Image
                    height={300}
                    width={400}
                    src={cookieImage}
                    alt="cookies"
                  ></Image>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CookieCarousel;
