"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "College Student",
    content:
      "Finally, an app that doesn't overwhelm me with jargon. I've learned more about investing in 2 weeks than I did in months of YouTube videos.",
    rating: 5,
    avatar: "/professional-woman-diverse.png",
  },
  {
    name: "Marcus Johnson",
    role: "Recent Graduate",
    content:
      "The daily lessons keep me consistent. I love how everything connects to real market events happening right now.",
    rating: 5,
    avatar: "/professional-man.png",
  },
  {
    name: "Emily Rodriguez",
    role: "Young Professional",
    content:
      "The AI coach actually helps me understand my mistakes instead of just telling me I'm wrong. Game changer.",
    rating: 5,
    avatar: "/confident-business-woman.png",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            What early users <span className="text-primary">say</span>
          </h2>
          <p className="text-xl text-muted-foreground">Join thousands learning to invest smarter</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="relative mb-6">
                  <Quote className="w-6 h-6 text-primary/20 absolute -top-1 -left-1" />
                  <p className="text-muted-foreground leading-relaxed pl-4">{testimonial.content}</p>
                </div>

                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
