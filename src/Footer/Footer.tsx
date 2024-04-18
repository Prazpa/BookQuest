import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

function Footer() {
    return (
        <div>
            <Accordion type="single" collapsible className="w-full flex justify-center gap-10">
                <AccordionItem value="item-1">
                    <AccordionTrigger>Contact Us</AccordionTrigger>
                    <AccordionContent>
                        <h1>LinkedIn: </h1>
                        <h1>Email: </h1>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Privacy Policy</AccordionTrigger>
                    <AccordionContent>
                        All resource are in Github
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Terms and Conditions</AccordionTrigger>
                    <AccordionContent>
                        You can access this website for free
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>Resource</AccordionTrigger>
                    <AccordionContent>
                        <h1>Project base: Vite+React+TypeScript</h1>
                        <h1>APIs: Openlibrary.org</h1>
                        <h1>Component UI: shadcn/ui</h1>
                        <h1>CSS: tailwildcss</h1>
                        <h1>Design Prototype: Handlelt (Figma)</h1>
                        <h1>Colors: UI Colors</h1>
                        <h1>Image: Microsoft Copilot (AI)</h1>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default Footer