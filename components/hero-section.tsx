"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, Brain, AlertTriangle, Flame, Trophy } from "lucide-react"

function HomeScreenDemo() {
  const [currentScreen, setCurrentScreen] = useState(0)

  const screens = [
    {
      title: "Your Learning Dashboard",
      content: (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-navy-800">What's up, Alex! 👋</h3>
            <Badge className="bg-red-100 text-red-700 flex items-center gap-1">
              <Flame className="w-3 h-3" />7 day streak 🔥
            </Badge>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg p-4 border border-purple-200">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium text-navy-800">Level 5: Growth Investor</span>
              <span className="text-sm text-purple-600">1,980 / 2,500 XP</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                style={{ width: "79%" }}
              ></div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-4 border border-teal-200">
            <div className="flex items-center gap-3 mb-2">
              <Brain className="w-5 h-5 text-teal-600" />
              <span className="font-medium text-navy-800">Today's Market Lesson</span>
            </div>
            <p className="text-sm text-navy-700">Tesla just dropped 3% — perfect time to learn about buying dips!</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white rounded-lg p-3 border text-center">
              <div className="text-xl font-bold text-navy-800">5 min</div>
              <div className="text-xs text-gray-600">Today's lesson</div>
            </div>
            <div className="bg-white rounded-lg p-3 border text-center">
              <div className="text-xl font-bold text-teal-600">+250 XP</div>
              <div className="text-xs text-gray-600">This week</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "AI Coach Roasts Your Trades",
      content: (
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h4 className="font-semibold text-navy-800">Oops, you panic sold again</h4>
              <p className="text-sm text-gray-600">From your TSLA trade</p>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
            <p className="text-red-800 font-medium mb-2">❌ You sold during a 5% dip</p>
            <p className="text-sm text-red-700">
              But TSLA bounced back in 2 days. Classic panic move — happens to everyone!
            </p>
          </div>

          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
            <p className="text-green-800 font-medium mb-2">💡 Next time, try this:</p>
            <p className="text-sm text-green-700">
              Set a stop-loss at -8% instead. Gives you room for normal market noise.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Weekly Leaderboard",
      content: (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-navy-800">This Week's Champions</h4>
            <Badge className="bg-orange-100 text-orange-700 flex items-center gap-1">
              <Trophy className="w-3 h-3" />
              You're #3!
            </Badge>
          </div>

          <div className="space-y-3">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-3 border border-yellow-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-lg">🥇</span>
                  <span className="font-medium text-navy-800">Sarah_Trades</span>
                </div>
                <span className="text-sm font-bold text-orange-600">2,450 XP</span>
              </div>
            </div>

            <div className="bg-white rounded-lg p-3 border">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-lg">🥈</span>
                  <span className="font-medium text-navy-800">InvestorMike</span>
                </div>
                <span className="text-sm font-bold text-gray-600">2,200 XP</span>
              </div>
            </div>

            <div className="bg-teal-50 rounded-lg p-3 border border-teal-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-lg">🥉</span>
                  <span className="font-medium text-teal-800">You (Alex)</span>
                </div>
                <span className="text-sm font-bold text-teal-600">1,980 XP</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScreen((prev) => (prev + 1) % screens.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-96">
      <div className="mb-4">
        <h3 className="font-semibold text-navy-800 mb-2">{screens[currentScreen].title}</h3>
        <div className="flex gap-1">
          {screens.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all ${
                index === currentScreen ? "bg-teal-500 w-8" : "bg-gray-300 w-2"
              }`}
            />
          ))}
        </div>
      </div>
      {screens[currentScreen].content}
    </div>
  )
}

export function HeroSection() {
  return (
    <section className="relative pt-24 pb-20 px-6 gradient-bg overflow-hidden">
      <div className="container mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm text-sm font-medium text-navy-700 border border-white/50 shadow-sm">
                <Sparkles className="w-4 h-4" />
                <span>The first investing app that doesn't suck</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-navy-900">
                Learn the game.
                <br />
                <span className="text-teal-600">Rule the market.</span>
                <br />
                <span className="text-blue-600">Stay on top.</span>
              </h1>

              <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                <p className="text-teal-800 font-medium text-center">
                  <em>"For teens and beginners — learn without risking a cent."</em>
                </p>
              </div>

              <p className="text-xl text-navy-700 leading-relaxed max-w-lg">
              The daily finance app for Gen-Z: learn, apply, and compete with friends.
Skip the boring courses and random YouTube advice — StockSense makes investing click with daily lessons, AI feedback, and gamified challenges.
Think of it as Duolingo, but for growing money.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border border-white/50 shadow-sm">
              <div className="flex items-center justify-center gap-4 text-sm font-medium text-navy-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>$10k simulated money</span>
                </div>
                <div className="w-px h-4 bg-gray-300"></div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Your real skills, zero risk</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex flex-col gap-4">
              <a href="#waitlist">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white font-medium px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all w-fit animate-pulse"
                >
                  Level up my money game 💸
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                </a>
                <a href="#demo" className="text-navy-600 hover:text-teal-600 transition-colors underline text-sm">
                  
                </a>
              </div>

              <div className="flex flex-wrap gap-4 text-sm text-navy-700">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span>No real money at risk</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span>5 min/day max</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                  <span>Built for Gen Z</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Card className="w-full max-w-md bg-white/90 backdrop-blur-sm shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">StockSense</h3>
                      <p className="text-white/80 text-sm">Your AI Learning Coach</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <HomeScreenDemo />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-white/50 py-6">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <p className="text-sm text-navy-700 italic">
                "The AI coach actually made me think—no more random FOMO trades."
              </p>
              <p className="text-xs text-gray-500 font-medium">– Ananya, 17</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-navy-700 italic">
                "I stick to lessons because I don't want to break my streak!"
              </p>
              <p className="text-xs text-gray-500 font-medium">– Rahil, 16</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-navy-700 italic">"Finally learned P/E ratios without falling asleep."</p>
              <p className="text-xs text-gray-500 font-medium">– Priya, 18</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
