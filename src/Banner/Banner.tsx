import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Carousel1 from "./Carousel1";
import Carousel2 from "./Carousel2";
import Carousel3 from "./Carousel3";
import Carousel4 from "./Carousel4";

const Banner = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const carouselContent = [<Carousel1 />, <Carousel2 />, <Carousel3 />, <Carousel4 />];

  const layout = `w-[1030px] mx-[120px] h-[485px]`
  // lg:w-[800px] md:w-[550px] sm:w-[450px] sm:mx-[100px]
  return (

    <div className="w-full">
      <Carousel
        plugins={[plugin.current]}
        className={`${layout}`}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          {carouselContent.map((content, index) => (
            <CarouselItem key={index}>
              <Card className="h-[450px] flex">
                <CardContent>{content}</CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Banner;
