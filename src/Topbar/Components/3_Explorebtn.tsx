import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer';

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ExploreBtn = () => {

    const reponsive = ``
    const customtext = `text-lg font-normal font-['Overpass']`
    const layout = `self-center`

    return (
        <div className={`${customtext} ${layout} ${reponsive}`}>
            <Drawer>
                <DrawerTrigger className="cursor">Explore</DrawerTrigger>
                <DrawerContent className="bg-white h-[80%]">
                    <DrawerHeader>
                        <DrawerTitle>Explore the Library of US-Book</DrawerTitle>
                    </DrawerHeader>

                    {/* Card */}
                    <div className="flex justify-center space-x-4">
                        <Card className="w-[400px] h-[300px] hover:bg-[rgb(132,253,243)] rounded">
                            <CardHeader>
                                <CardTitle>Explore</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Discover the Vibrant World Within: Explore the US - Unveiling the Journey Through Our Captivating Book Cover!</p>
                            </CardContent>
                        </Card>

                        <Card className="w-[400px] hover:bg-[rgb(183,243,238)] rounded">
                            <CardHeader>
                                <CardTitle>Discover</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Discover Your Next Favorite Read: Dive into our Selection of Highly Recommended Books!</p>
                            </CardContent>
                        </Card>

                        <Card className="w-[400px] hover:bg-[rgb(213,245,242)] rounded">
                            <CardHeader>
                                <CardTitle>Share</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Unlock Your Story: Share the Book That Speaks to You!</p>
                            </CardContent>
                        </Card>
                    </div>

                    <DrawerFooter>
                        <DrawerClose>
                            <Button className="rounded bg-black text-white text-md">Okay!</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </div>

    );
}

export default ExploreBtn;
