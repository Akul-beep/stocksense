"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell, TrendingUp, Volume2 } from "lucide-react"

export function AlertsDemo() {
  const [activeAlert, setActiveAlert] = useState(0)

  const alerts = [
    {
      type: "Price Alert",
      stock: "AAPL",
      message: "Reached target price $175",
      icon: <TrendingUp className="w-4 h-4" />,
      color: "green",
      time: "2 min ago",
    },
    {
      type: "Volume Spike",
      stock: "TSLA",
      message: "Volume 3x above average",
      icon: <Volume2 className="w-4 h-4" />,
      color: "orange",
      time: "5 min ago",
    },
    {
      type: "AI Pattern",
      stock: "NVDA",
      message: "Bullish breakout detected",
      icon: <Bell className="w-4 h-4" />,
      color: "blue",
      time: "1 min ago",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAlert((prev) => (prev + 1) % alerts.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  const alert = alerts[activeAlert]

  return (
    <Card className="p-4 border border-border hover:shadow-md transition-shadow">
      <div className="space-y-4">
        <div className="flex items-start space-x-3">
          <div
            className={`p-2 rounded-lg ${
              alert.color === "green"
                ? "bg-green-100 text-green-600"
                : alert.color === "orange"
                  ? "bg-orange-100 text-orange-600"
                  : "bg-blue-100 text-blue-600"
            }`}
          >
            {alert.icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-semibold text-foreground">{alert.stock}</h4>
              <Badge variant="outline" className="text-xs">
                {alert.time}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground mb-2">{alert.message}</p>
            <Badge
              variant="secondary"
              className={`text-xs ${
                alert.color === "green"
                  ? "bg-green-50 text-green-700"
                  : alert.color === "orange"
                    ? "bg-orange-50 text-orange-700"
                    : "bg-blue-50 text-blue-700"
              }`}
            >
              {alert.type}
            </Badge>
          </div>
        </div>

        <div className="flex space-x-2">
          <button className="flex-1 text-xs py-2 px-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
            View Details
          </button>
          <button className="text-xs py-2 px-3 border border-border rounded-md hover:bg-muted transition-colors">
            Dismiss
          </button>
        </div>
      </div>
    </Card>
  )
}
