import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { ChartRadarDefault } from "./chartRadarDefault"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export default function Page() {
  return (
    <div className="flex min-h-svh w-full flex-col items-center justify-center p-6">
      <div className="flex w-full max-w-md min-w-0 flex-col gap-4 text-center text-sm leading-loose">
        <div>
          <h1 className="font-bold">Àlex Vicente Carpio</h1>
          <p>Full Stack Software Engineer</p>
          <a href="/Profile.pdf" download>
            <Button variant="outline">
              Download CV
              <HugeiconsIcon icon={Download01Icon} className="h-4 w-4" />
            </Button>
          </a>
          <div className="pt-4 pb-3">
            <Badge variant="default">Experience</Badge>
          </div>
          <ChartRadarDefault />
          <div className="pt-4 pb-3">
            <Badge variant="default">Portfolio</Badge>
          </div>
          <Carousel>
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-4xl font-semibold">
                          {index + 1}
                        </span>
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
      </div>
    </div>
  )
}
