//import state and autoplay
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

//import Detail component
import Carousel1 from "./Carousel1";
import Carousel2 from "./Carousel2";
import Carousel3 from "./Carousel3";
import Carousel4 from "./Carousel4";

//import shadcn/ui component
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

//import for Darkmode 
import { ColContext } from '@/App';
import { useContext } from 'react';

const Banner = () => {
  //Receive value from app.tsx
  const { darkMode } = useContext(ColContext);

  //auto slide
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  
  //mini component in each slide
  const carouselContent = [<Carousel1 />, <Carousel2 />, <Carousel3 />, <Carousel4 />];

  return (
    <div className="">
      <Carousel
        plugins={[plugin.current]}
        className={`
          mx-[80px] h-[400px] flex content-center
          border border-white  
          ${darkMode ? 'bg-[rgba(255,255,255,0.9)]' : 'bg-[rgba(255,255,255,0.6)]'}` }
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
        <CarouselPrevious className={`${darkMode ? 'bg-white' : 'bg-transparent'}`}/>
        <CarouselNext className={`${darkMode ? 'bg-white' : 'bg-transparent'}`}/>
      </Carousel>
    </div>
  );
};

export default Banner;
