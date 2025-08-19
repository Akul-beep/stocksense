"use client"

import { Card } from "@/components/ui/card"
import { TrendingUp, BarChart3, Zap, Target } from "lucide-react"

export function SampleScreen() {
  return (
    <div className="relative">
      <div className="animate-float">
        <Card className="w-96 h-[500px] p-8 glass-effect border-2 border-primary/30 shadow-2xl shadow-primary/10 rounded-3xl overflow-hidden">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-xl">Today's Lesson</h3>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                <span className="text-xs text-primary font-medium">LIVE</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <span className="font-semibold text-lg">P/E Ratio Mastery</span>
                    <div className="text-xs text-muted-foreground">Advanced • 12 min</div>
                  </div>
                </div>
                <div className="text-sm text-muted-foreground leading-relaxed">
                  Master the art of evaluating stocks using P/E ratios with real-time market data
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-6 border border-accent/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                      A
                    </div>
                    <div>
                      <span className="font-bold">AAPL</span>
                      <div className="text-xs text-muted-foreground">Apple Inc.</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-green-400 font-semibold">
                      <TrendingUp className="w-4 h-4" />
                      <span>+2.4%</span>
                    </div>
                    <div className="text-xs text-muted-foreground">$175.43</div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">P/E Ratio</span>
                  <span className="font-semibold text-primary">28.5</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-accent" />
                    <span className="font-medium">Daily Streak</span>
                  </div>
                  <span className="text-accent font-bold">12 days</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-primary" />
                    <span className="font-medium">Quiz Score</span>
                  </div>
                  <span className="text-primary font-bold">85%</span>
                </div>

                <div className="w-full bg-muted rounded-full h-2">
                  <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full w-4/5 animate-pulse"></div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button className="w-full bg-gradient-to-r from-primary to-accent text-black py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25">
                Start Today's Lesson
              </button>
            </div>
          </div>
        </Card>
      </div>

      <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full animate-pulse opacity-60"></div>
      <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-br from-accent to-primary rounded-full animate-pulse opacity-40 delay-1000"></div>
    </div>
  )
}
