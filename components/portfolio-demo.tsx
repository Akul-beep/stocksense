"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, DollarSign } from "lucide-react"

export function PortfolioDemo() {
  const [portfolioData, setPortfolioData] = useState({
    totalValue: 125420,
    dayChange: 2340,
    dayChangePercent: 1.9,
  })

  const holdings = [
    { symbol: "AAPL", shares: 50, value: 8771, change: 1.2 },
    { symbol: "TSLA", shares: 25, value: 6221, change: -2.1 },
    { symbol: "NVDA", shares: 15, value: 6319, change: 3.4 },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setPortfolioData((prev) => ({
        ...prev,
        totalValue: prev.totalValue + (Math.random() - 0.5) * 100,
        dayChange: prev.dayChange + (Math.random() - 0.5) * 50,
        dayChangePercent: prev.dayChangePercent + (Math.random() - 0.5) * 0.1,
      }))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="p-4 border border-border hover:shadow-md transition-shadow">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-foreground">Portfolio Value</h4>
          <DollarSign className="w-4 h-4 text-muted-foreground" />
        </div>

        <div>
          <div className="text-2xl font-bold text-foreground">${portfolioData.totalValue.toLocaleString()}</div>
          <div
            className={`flex items-center space-x-1 text-sm ${
              portfolioData.dayChange >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {portfolioData.dayChange >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            <span>
              {portfolioData.dayChange >= 0 ? "+" : ""}${Math.abs(portfolioData.dayChange).toFixed(0)}(
              {portfolioData.dayChangePercent >= 0 ? "+" : ""}
              {portfolioData.dayChangePercent.toFixed(1)}%)
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <h5 className="text-sm font-medium text-muted-foreground">Top Holdings</h5>
          {holdings.map((holding, index) => (
            <div key={holding.symbol} className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <span className="font-medium">{holding.symbol}</span>
                <span className="text-muted-foreground">{holding.shares} shares</span>
              </div>
              <div className="text-right">
                <div className="font-medium">${holding.value.toLocaleString()}</div>
                <div className={`text-xs ${holding.change >= 0 ? "text-green-600" : "text-red-600"}`}>
                  {holding.change >= 0 ? "+" : ""}
                  {holding.change}%
                </div>
              </div>
            </div>
          ))}
        </div>

        <Badge variant="outline" className="text-xs w-full justify-center">
          Last updated: Just now
        </Badge>
      </div>
    </Card>
  )
}
