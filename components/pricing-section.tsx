"use client"

import { Button } from "@/components/ui/button"

export default function PricingSection() {
  const scrollToSignup = () => {
    // This would typically connect to a signup form or process
    console.log("Signup clicked")
  }

  const plans = [
    {
      name: "Free",
      description: "10 recaps/month, no card needed.",
      buttonText: "Start Free",
      action: scrollToSignup,
    },
    {
      name: "Basic",
      description: "$5/month, 50 recaps, priority processing.",
      buttonText: "Get Basic",
      action: () => console.log("Basic plan selected"),
    },
    {
      name: "Pro",
      description: "$15/month, unlimited recaps, all features.",
      buttonText: "Go Pro",
      action: () => console.log("Pro plan selected"),
    },
  ]

  return (
    <section id="pricing" className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">Plans for Everyone</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md flex flex-col">
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <p className="mb-6 flex-grow">{plan.description}</p>
              <Button onClick={plan.action} className="bg-primary text-white hover:bg-primary/90 w-full">
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
        <p className="text-gray-600">No contracts, cancel anytime.</p>
      </div>
    </section>
  )
}

