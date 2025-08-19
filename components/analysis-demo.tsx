"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Brain, Target } from "lucide-react"

export function AnalysisDemo() {
  const [analysisStep, setAnalysisStep] = useState(0)

  const steps = [
    {
      icon: <Brain className="w-5 h-5" />,
      title: "AI Processing",
      description: "Analyzing market data...",
      progress: 100,
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Technical Analysis",
      description: "RSI: 65.2 | MACD: Bullish",
      progress: 85,
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Price Target",
      description: "$185.50 (+5.7%)",
      progress: 92,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setAnalysisStep((prev) => (prev + 1) % steps.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const currentStep = steps[analysisStep]

  return (
    <Card className="p-4 border border-border hover:shadow-md transition-shadow">
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 rounded-lg text-blue-600">{currentStep.icon}</div>
          <div>
            <h4 className="font-semibold text-foreground">{currentStep.title}</h4>
            <p className="text-sm text-muted-foreground">{currentStep.description}</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Confidence</span>
            <span className="font-medium">{currentStep.progress}%</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-1000"
              style={{ width: `${currentStep.progress}%` }}
            ></div>
          </div>
        </div>

        <Badge variant="outline" className="text-xs">
          Updated 2 min ago
        </Badge>
      </div>
    </Card>
  )
}
