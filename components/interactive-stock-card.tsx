"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Activity } from "lucide-react"

export function InteractiveStockCard() {
  const [currentStock, setCurrentStock] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const stocks = [
    {
      symbol: "AAPL",
      name: "Apple Inc.",
      price: 175.43,
      change: +2.34,
      changePercent: +1.35,
      recommendation: "BUY",
      confidence: 92,
      trend: "up",
    },
    {
      symbol: "TSLA",
      name: "Tesla Inc.",
      price: 248.87,
      change: -5.21,
      changePercent: -2.05,
      recommendation: "HOLD",
      confidence: 78,
      trend: "down",
    },
    {
      symbol: "NVDA",
      name: "NVIDIA Corp.",
      price: 421.32,
      change: +12.45,
      changePercent: +3.04,
      recommendation: "STRONG BUY",
      confidence: 95,
      trend: "up",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentStock((prev) => (prev + 1) % stocks.length)
        setIsAnimating(false)
      }, 300)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  const stock = stocks[currentStock]

  return (
    <Card className="w-full max-w-md p-6 glass-card shadow-xl border-0">
      <div className={`transition-all duration-300 ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-foreground">{stock.symbol}</h3>
            <p className="text-sm text-muted-foreground">{stock.name}</p>
          </div>
          <div className="flex items-center space-x-2">
            {stock.trend === "up" ? (
              <TrendingUp className="w-5 h-5 text-green-500" />
            ) : (
              <TrendingDown className="w-5 h-5 text-red-500" />
            )}
            <Activity className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <div className="text-2xl font-bold text-foreground">${stock.price}</div>
            <div
              className={`flex items-center space-x-1 text-sm ${stock.change >= 0 ? "text-green-600" : "text-red-600"}`}
            >
              <span>
                {stock.change >= 0 ? "+" : ""}
                {stock.change}
              </span>
              <span>
                ({stock.changePercent >= 0 ? "+" : ""}
                {stock.changePercent}%)
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <Badge
                variant={
                  stock.recommendation === "STRONG BUY"
                    ? "default"
                    : stock.recommendation === "BUY"
                      ? "secondary"
                      : "outline"
                }
                className={
                  stock.recommendation === "STRONG BUY"
                    ? "bg-green-500 hover:bg-green-600"
                    : stock.recommendation === "BUY"
                      ? "bg-primary hover:bg-primary/90"
                      : ""
                }
              >
                {stock.recommendation}
              </Badge>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground">Confidence</div>
              <div className="text-lg font-semibold text-foreground">{stock.confidence}%</div>
            </div>
          </div>

          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-1000"
              style={{ width: `${stock.confidence}%` }}
            ></div>
          </div>
        </div>
      </div>
    </Card>
  )
}
