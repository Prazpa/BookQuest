import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Carousel1 from "./Carousel1";
import Carousel2 from "./Carousel2";
import Carousel3 from "./Carousel3";
import Carousel4 from "./Carousel4";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ColContext } from '@/app/settype/ColType';
import { useContext } from 'react';

const Banner = () => {
  const { darkMode } = useContext(ColContext);
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const carouselContent = [<Carousel1 />, <Carousel2 />, <Carousel3 />, <Carousel4 />];

  return (
    <div>
      <Carousel
        plugins={[plugin.current]}
        className={`mx-[80px] lg:mx-[60px] h-[400px] flex content-center border border-white ${darkMode ? 'bg-[rgba(255,255,255,0.9)]' : 'bg-[rgba(255,255,255,0.6)]'}` }
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {carouselContent.map((content, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent>{content}</CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className={`${darkMode ? 'bg-white' : 'bg-transparent'} mx-[10px]` }/>
        <CarouselNext className={`${darkMode ? 'bg-white' : 'bg-transparent'} mx-[10px]`}/>
      </Carousel>
    </div>
  );
};

export default Banner;
