import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Carousel1 from "./Carousel1"
import Carousel2 from "./Carousel2"
import Carousel3 from "./Carousel3"
import Carousel4 from "./Carousel4"

const Slider = () => {

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

  const carouselContent = [
    <Carousel1/>,
    <Carousel2/>,
    <Carousel3/>,
    <Carousel4/>
  ];

  return (
    <div className="w-full">
        <Carousel
          plugins={[plugin.current]}
          className="w-[1024px] mx-[120px] h-[485px]"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {carouselContent.map((content, index) => (
              <CarouselItem key={index}>
                <div>
                  <Card className="h-[450px] flex">
                    <CardContent key={index}>
                      {content}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
    </div>
  );
};

export default Slider