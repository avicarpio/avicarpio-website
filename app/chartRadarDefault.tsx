// components/ChartRadarDefault.tsx
'use client'

import { TrendingUp } from "lucide-react"
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

const chartData = [
  { skill: "Frontend", level: 100 },
  { skill: "Backend", level: 70 },
  { skill: "UI/UX", level: 65 },
  { skill: "DevOps", level: 70 },
  { skill: "Unity", level: 90 },
  { skill: "Node.js", level: 80 },
]

const chartConfig = {
  level: {
    label: "Experience",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig

export function ChartRadarDefault() {
  const currentDate = new Date().toLocaleString('en-US', { month: 'long', year: 'numeric' })

  return (
    <Card>
      <CardHeader className="items-center pb-4">
        <CardTitle>Full Stack Proficiency</CardTitle>
        <CardDescription>
          Breaking down skills by technology area
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] w-full"
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="skill" />
            <PolarGrid />
            <Radar
              dataKey="level"
              fill="var(--color-level)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Always leveling up <TrendingUp className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-2 leading-none text-muted-foreground">
          Last updated {currentDate}
        </div>
      </CardFooter>
    </Card>
  )
}