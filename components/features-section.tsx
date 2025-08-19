"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Brain, BookOpen, FileText, Flame, Shield, Trophy, CheckCircle, Award, Target } from "lucide-react"

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setStatus("Submitting...");

  try {
    const res = await fetch("https://script.google.com/macros/s/AKfycbw_9P1OY4xeVkz8s1Y_k2ilgl8kgTDE_5r3_-XMgqnJ8ikNULhQ3VG0BwjcmAIag3Mn/exec", {
      method: "POST",
      // no need for mode: "cors"
      body: new URLSearchParams({ email }), // <-- simple request, no preflight
      // do NOT set Content-Type manually; fetch will set application/x-www-form-urlencoded
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`HTTP ${res.status}: ${text}`);
    }

    // Apps Script should return JSON text
    const data = JSON.parse(await res.text());
    if (data.result === "success") {
      setStatus("✅ You’re on the waitlist!");
      setEmail("");
    } else {
      setStatus("❌ Something went wrong. Try again.");
    }
  } catch (err: any) {
    setStatus(`⚠️ Network/server error: ${err.message ?? err}`);
  }
};


  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="flex-1 px-4 py-3 rounded-xl border border-gray-300"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl font-bold hover:scale-105 transition"
      >
        🚀 Save my spot
      </button>
      <p className="text-sm mt-2">{status}</p>
    </form>
  );
}


const features = [
  {
    id: "ai-coach",
    icon: Brain,
    title: "AI that roasts your trades (in a good way)",
    description:
      "Our AI reviews every move, spots patterns (panic sells, FOMO buys), and teaches you pro thinking. It's like having a mentor who's seen every mistake and knows exactly how to fix it.",
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600 bg-blue-100",
    accentColor: "blue",
  },
  {
    id: "daily-lessons",
    icon: BookOpen,
    title: "Daily lessons tied to what's happening RIGHT NOW",
    description:
      "Learn P/E ratios today? We'll show you Apple vs. Tesla. Tomorrow, RSI on moving stocks. No boring theory — just real market action with interactive examples.",
    color: "bg-green-50 border-green-200",
    iconColor: "text-green-600 bg-green-100",
    accentColor: "green",
  },
  {
    id: "quizzes",
    icon: FileText,
    title: "Quick quizzes that actually stick",
    description:
      "2-3 questions after each lesson. Fast, fun, designed to make sure you GET IT before moving on. Spaced repetition brings back concepts you struggled with.",
    color: "bg-orange-50 border-orange-200",
    iconColor: "text-orange-600 bg-orange-100",
    accentColor: "orange",
  },
  {
    id: "practice-zone",
    icon: Shield,
    title: "Practice with fake money, learn real skills",
    description:
      "Get $10k virtual cash to test everything you learn. Make mistakes, try strategies, watch your P&L — all while AI tracks your progress.",
    color: "bg-teal-50 border-teal-200",
    iconColor: "text-teal-600 bg-teal-100",
    accentColor: "teal",
  },
]

function AICoachDemo() {
  const [currentFeedback, setCurrentFeedback] = useState(0)
  const feedbacks = [
    {
      mistake: "Panic sold TSLA during 5% dip",
      lesson: "Stock recovered within 2 days. Set stop-loss at -8% instead of panic selling at -5%.",
      icon: "❌",
      color: "red",
    },
    {
      mistake: "Bought NVDA at all-time high",
      lesson: "Check RSI first! RSI was 78 (overbought). Wait for RSI < 50 for better entry.",
      icon: "⚠️",
      color: "orange",
    },
    {
      mistake: "Great diversification strategy!",
      lesson: "Your portfolio risk is well balanced across 6 sectors. Keep this up!",
      icon: "✅",
      color: "green",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeedback((prev) => (prev + 1) % feedbacks.length)
    }, 3500)
    return () => clearInterval(interval)
  }, [])

  const current = feedbacks[currentFeedback]

  return (
    <div className="demo-screen">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
          <Brain className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <h4 className="font-semibold text-navy-900">AI Coach Analysis</h4>
          <p className="text-sm text-gray-500">From your recent trades</p>
        </div>
      </div>

      <div className={`bg-${current.color}-50 rounded-lg p-4 border border-${current.color}-200 mb-4`}>
        <div className="flex items-start gap-3">
          <span className="text-lg">{current.icon}</span>
          <div>
            <p className={`font-medium text-${current.color}-800 mb-2`}>{current.mistake}</p>
            <p className={`text-sm text-${current.color}-700`}>{current.lesson}</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-gray-600">
        <CheckCircle className="w-4 h-4 text-green-500" />
        <span>Based on your last 15 trades</span>
      </div>
    </div>
  )
}

function DailyLessonsDemo() {
  const [progress, setProgress] = useState(65)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev === 100 ? 65 : prev + 5))
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="demo-screen">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h4 className="font-semibold text-gray-900">Today's Lesson</h4>
          <p className="text-sm text-gray-500">Understanding P/E Ratios</p>
        </div>
        <Badge className="bg-green-100 text-green-700">Day 23</Badge>
      </div>

      <div className="space-y-4">
        <div className="bg-white rounded-lg p-4 border">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-green-600" />
            </div>
            <span className="font-medium text-gray-900">What is P/E Ratio?</span>
          </div>
          <Progress value={progress} className="h-2" />
          <p className="text-sm text-gray-600 mt-2">{progress}% complete</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-gray-900">5 min</div>
            <div className="text-xs text-gray-600">Estimated time</div>
          </div>
          <div className="bg-gray-50 rounded-lg p-3 text-center">
            <div className="text-lg font-bold text-gray-900">+50 XP</div>
            <div className="text-xs text-gray-600">Reward</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TechnicalIndicatorsDemo() {
  const [indicators] = useState([
    {
      symbol: "AAPL",
      price: 150.25,
      change: -3.2,
      rsi: 28,
      macd: "↑",
      bb: "Lower",
      signal: "Strong Buy",
      color: "emerald",
    },
    { symbol: "MSFT", price: 285.4, change: -4.1, rsi: 25, macd: "↑", bb: "Lower", signal: "Buy", color: "green" },
    { symbol: "TSLA", price: 195.8, change: 2.1, rsi: 65, macd: "↑", bb: "Middle", signal: "Hold", color: "amber" },
    { symbol: "GOOGL", price: 125.6, change: -1.8, rsi: 75, macd: "↓", bb: "Upper", signal: "Sell", color: "red" },
  ])

  const [selectedStock, setSelectedStock] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedStock((prev) => (prev + 1) % indicators.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const stock = indicators[selectedStock]

  return (
    <div className="demo-screen">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h4 className="font-semibold text-navy-900">Technical Analysis Hub</h4>
          <p className="text-sm text-gray-500">Multi-indicator signals</p>
        </div>
        <div className="flex gap-2">
          <Badge className="bg-blue-100 text-blue-700 text-xs">RSI: {stock.rsi}</Badge>
          <Badge className="bg-purple-100 text-purple-700 text-xs">MACD: {stock.macd}</Badge>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 border mb-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <span className="text-xl font-bold text-navy-900">{stock.symbol}</span>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-lg font-semibold text-gray-900">${stock.price}</span>
              <span className={`text-sm font-medium ${stock.change > 0 ? "text-emerald-600" : "text-red-600"}`}>
                {stock.change > 0 ? "+" : ""}
                {stock.change}%
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 bg-${stock.color}-500 rounded-full`}></div>
            <span className={`text-sm font-medium text-${stock.color}-700`}>{stock.signal}</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-3">
          <div
            className={`px-3 py-2 bg-${stock.rsi < 30 ? "emerald" : stock.rsi > 70 ? "red" : "amber"}-100 rounded-lg text-center`}
          >
            <div className="text-xs text-gray-600">RSI</div>
            <div className={`font-semibold text-${stock.rsi < 30 ? "emerald" : stock.rsi > 70 ? "red" : "amber"}-700`}>
              {stock.rsi}
            </div>
          </div>
          <div className={`px-3 py-2 bg-${stock.macd === "↑" ? "emerald" : "red"}-100 rounded-lg text-center`}>
            <div className="text-xs text-gray-600">MACD</div>
            <div className={`font-semibold text-${stock.macd === "↑" ? "emerald" : "red"}-700`}>{stock.macd}</div>
          </div>
          <div
            className={`px-3 py-2 bg-${stock.bb === "Lower" ? "emerald" : stock.bb === "Upper" ? "red" : "amber"}-100 rounded-lg text-center`}
          >
            <div className="text-xs text-gray-600">Bollinger</div>
            <div
              className={`font-semibold text-${stock.bb === "Lower" ? "emerald" : stock.bb === "Upper" ? "red" : "amber"}-700`}
            >
              {stock.bb}
            </div>
          </div>
        </div>
      </div>

      <div className={`bg-${stock.color}-50 rounded-lg p-3 border border-${stock.color}-200`}>
        <p className={`text-sm text-${stock.color}-800`}>
          💡 <strong>AI Insight:</strong>{" "}
          {stock.signal === "Strong Buy" || stock.signal === "Buy"
            ? "Multiple indicators align for a bullish signal!"
            : stock.signal === "Hold"
              ? "Mixed signals - wait for clearer direction."
              : "Bearish indicators suggest caution."}
        </p>
      </div>
    </div>
  )
}

function PracticeZoneDemo() {
  const [portfolio, setPortfolio] = useState(10000)
  const [profit, setProfit] = useState(250)

  useEffect(() => {
    const interval = setInterval(() => {
      const change = (Math.random() - 0.5) * 100
      setProfit((prev) => prev + change)
      setPortfolio((prev) => prev + change)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="demo-screen">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h4 className="font-semibold text-gray-900">Practice Portfolio</h4>
          <p className="text-sm text-gray-500">Virtual money, real learning</p>
        </div>
        <Badge className="bg-teal-100 text-teal-700">SAFE MODE</Badge>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-white rounded-lg p-4 border">
          <div className="text-sm text-gray-600 mb-1">Total Value</div>
          <div className="text-xl font-bold text-gray-900">${portfolio.toLocaleString()}</div>
        </div>
        <div className="bg-white rounded-lg p-4 border">
          <div className="text-sm text-gray-600 mb-1">Total Profit</div>
          <div className={`text-xl font-bold ${profit > 0 ? "text-emerald-600" : "text-red-600"}`}>
            ${Math.abs(profit).toFixed(0)}
          </div>
        </div>
      </div>

      <div className="bg-teal-50 rounded-lg p-3 border border-teal-200">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-teal-600" />
          <span className="text-sm font-medium text-teal-800">100% Risk-Free Practice</span>
        </div>
      </div>
    </div>
  )
}

function StreaksDemo() {
  const [streak, setStreak] = useState(7)
  const [rank, setRank] = useState(3)

  useEffect(() => {
    const interval = setInterval(() => {
      setStreak((prev) => (prev % 15) + 1)
      setRank((prev) => (prev % 5) + 1)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="demo-screen">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h4 className="font-semibold text-gray-900">Your Progress</h4>
          <p className="text-sm text-gray-500">Keep it up!</p>
        </div>
        <div className="flex items-center gap-1">
          <Flame className="w-5 h-5 text-red-500 streak-fire" />
          <span className="font-bold text-red-600">{streak}</span>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 border mb-4">
        <div className="text-center mb-4">
          <div className="text-3xl font-bold text-gray-900">{streak} Day Streak!</div>
          <p className="text-sm text-gray-600">You're on fire! 🔥</p>
        </div>

        <div className="flex justify-center gap-1 mb-4">
          {[...Array(7)].map((_, i) => (
            <div key={i} className={`w-6 h-6 rounded-full ${i < streak % 7 ? "bg-red-500" : "bg-gray-200"}`} />
          ))}
        </div>
      </div>

      <div className="bg-red-50 rounded-lg p-3 border border-red-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-red-600" />
            <span className="text-sm font-medium text-red-800">Leaderboard</span>
          </div>
          <span className="text-sm font-bold text-red-600">#{rank}</span>
        </div>
      </div>
    </div>
  )
}

function QuizzesDemo() {
  const [score, setScore] = useState(0)
  const [currentQ, setCurrentQ] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQ((prev) => (prev + 1) % 3)
      setScore((prev) => Math.min(100, prev + 10))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="demo-screen">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h4 className="font-semibold text-gray-900">Weekly Challenge</h4>
          <p className="text-sm text-gray-500">Question {currentQ + 1} of 3</p>
        </div>
        <div className="flex items-center gap-2">
          <Trophy className="w-4 h-4 text-orange-600" />
          <span className="font-medium text-orange-600">{score} pts</span>
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 border mb-4">
        <p className="font-medium text-gray-900 mb-3">What does a high P/E ratio typically indicate?</p>
        <div className="space-y-2">
          <button className="w-full text-left p-3 rounded-lg bg-orange-50 border border-orange-200 text-orange-800">
            ✓ High growth expectations
          </button>
          <button className="w-full text-left p-3 rounded-lg bg-gray-50 border text-gray-600">
            Low growth expectations
          </button>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-green-600">
        <CheckCircle className="w-4 h-4" />
        <span>Correct! +25 XP earned</span>
      </div>
    </div>
  )
}

const demoComponents = {
  "ai-coach": AICoachDemo,
  "daily-lessons": DailyLessonsDemo,
  "technical-indicators": TechnicalIndicatorsDemo,
  quizzes: QuizzesDemo,
  streaks: StreaksDemo,
  "practice-zone": PracticeZoneDemo,
}

export function FeaturesSection() {
  const [showNotAnymore, setShowNotAnymore] = useState(false)
  const [currentCycleStep, setCurrentCycleStep] = useState(0)
  const [showFloatingCTA, setShowFloatingCTA] = useState(false)

  const cycleSteps = [
    { icon: BookOpen, title: "Learn", desc: "5-min daily lessons", color: "green" },
    { icon: FileText, title: "Quiz", desc: "Quick knowledge check", color: "orange" },
    { icon: Target, title: "Apply", desc: "Practice with real data", color: "teal" },
    { icon: Brain, title: "Fix", desc: "AI shows mistakes", color: "blue" },
    { icon: Trophy, title: "Compete", desc: "Streaks & leaderboards", color: "red" },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotAnymore(true)
      setTimeout(() => setShowNotAnymore(false), 2000)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCycleStep((prev) => (prev + 1) % cycleSteps.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > window.innerHeight * 0.8
      setShowFloatingCTA(scrolled)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById("waitlist")
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="features" className="py-16 px-6 gradient-bg">
      <div className="container mx-auto">
        <div className="text-center mb-12 relative">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-navy-900">Why most young investors quit early</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mt-6 relative">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 border border-red-200 shadow-lg hover:shadow-xl transition-all">
              <div className="w-10 h-10 bg-red-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🤯</span>
              </div>
              <p className="text-sm text-red-800 font-semibold leading-relaxed">
                Market news feels like rocket science
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 border border-red-200 shadow-lg hover:shadow-xl transition-all">
              <div className="w-10 h-10 bg-red-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">📱</span>
              </div>
              <p className="text-sm text-red-800 font-semibold leading-relaxed">
                Random YouTube/Twitter advice with no structure
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 border border-red-200 shadow-lg hover:shadow-xl transition-all">
              <div className="w-10 h-10 bg-red-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">💸</span>
              </div>
              <p className="text-sm text-red-800 font-semibold leading-relaxed">
                You lose money before learning the basics
              </p>
            </div>
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 border border-red-200 shadow-lg hover:shadow-xl transition-all">
              <div className="w-10 h-10 bg-red-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">😴</span>
              </div>
              <p className="text-sm text-red-800 font-semibold leading-relaxed">Boring apps that feel like homework</p>
            </div>

            {showNotAnymore && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-teal-600 text-white px-8 py-4 rounded-2xl shadow-2xl animate-pulse">
                  <span className="text-2xl font-bold">✨ Not anymore!</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-navy-900">
            The <span className="text-teal-600">StockSense Cycle</span>
          </h2>
          <p className="text-lg text-navy-700 max-w-2xl mx-auto mb-8">
            Learn → Quiz → Apply → Fix → Compete. This loop makes it stick.
          </p>

          <div className="max-w-5xl mx-auto mb-8">
            <div className="flex justify-center items-center gap-4 overflow-x-auto pb-4">
              {cycleSteps.map((step, index) => {
                const isActive = index === currentCycleStep
                return (
                  <div key={step.title} className="flex items-center gap-4 flex-shrink-0">
                    <div className={`transition-all duration-500 ${isActive ? "scale-110" : "scale-100"}`}>
                      <div
                        className={`w-16 h-16 rounded-xl flex items-center justify-center shadow-lg border-2 transition-all ${
                          isActive
                            ? `bg-gradient-to-br from-${step.color}-400 to-${step.color}-600 border-white shadow-xl`
                            : `bg-gradient-to-br from-${step.color}-100 to-${step.color}-200 border-${step.color}-300`
                        }`}
                      >
                        <step.icon className={`w-6 h-6 ${isActive ? "text-white" : `text-${step.color}-600`}`} />
                      </div>
                      <div className="text-center mt-2">
                        <h3 className={`font-bold text-sm ${isActive ? "text-navy-900" : "text-gray-600"}`}>
                          {step.title}
                        </h3>
                        <p className={`text-xs ${isActive ? "text-navy-700" : "text-gray-500"}`}>{step.desc}</p>
                      </div>
                    </div>
                    {index < cycleSteps.length - 1 && <ArrowRight className="w-5 h-5 text-gray-400 flex-shrink-0" />}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div
          id="waitlist"
          className="mb-16 bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden border border-teal-200"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-200/20 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-200/20 rounded-full translate-y-12 -translate-x-12"></div>

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-teal-100 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-teal-800">Early Access Open</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-900">Want early access?</h2>
            <p className="text-lg md:text-xl mb-8 text-navy-700">
              Join 10,000+ learners already on the waitlist and lock your streak from Day 1. Few spots left!
            </p>
            <p className="text-base md:text-lg mb-8 text-navy-600 leading-relaxed">
  Get 3 months of free access to premium features • Access to an Exclusive Community • Launching Soon
</p>
<p className="text-base md:text-lg mb-8 text-navy-600 leading-relaxed">
  Ready to make money moves? 🚀 Drop your email and start your streak today.
</p>

            <WaitlistForm />

            <div className="flex items-center justify-center gap-6 text-sm text-navy-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-500" />
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-teal-500" />
                <span>Launching Soon</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12 max-w-7xl mx-auto">
          {features.slice(0, 4).map((feature, index) => {
            const DemoComponent = demoComponents[feature.id as keyof typeof demoComponents]
            const isEven = index % 2 === 0

            return (
              <div
                key={feature.id}
                className={`grid lg:grid-cols-2 gap-8 items-center ${!isEven ? "lg:grid-flow-col-dense" : ""}`}
              >
                <div className={isEven ? "" : "lg:col-start-2"}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${feature.iconColor}`}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-base text-gray-700 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>

                <div className={isEven ? "" : "lg:col-start-1"}>
                  <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
                    <CardContent className="p-0">
                      <div
                        className={`p-3 border-b bg-gradient-to-r ${feature.color.replace("border-", "from-").replace("50", "100")} to-white`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${feature.iconColor}`}>
                            <feature.icon className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm">{feature.title.split(" ")[0]} Demo</h4>
                            <p className="text-xs text-gray-600">Live Preview</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <DemoComponent />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )
          })}
        </div>

        {showFloatingCTA && (
          <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
            <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white p-4 rounded-2xl shadow-2xl max-w-xs hover:scale-105 transition-transform">
              <div className="text-center">
                <div className="text-xl mb-2">⚡</div>
                <p className="font-bold text-sm mb-2">Limited spots left!</p>
                <p className="text-xs mb-3">Get 3 months free</p>
                <Button
                  onClick={scrollToWaitlist}
                  size="sm"
                  className="w-full bg-white text-orange-600 hover:bg-gray-100 font-bold text-xs py-2 rounded-lg"
                >
                  Join Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
