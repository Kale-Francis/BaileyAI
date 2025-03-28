'use client'

import { Button } from '@/components/ui/button'

export default function HeroSection() {
  const scrollToSignup = () => {
    const pricingSection = document.getElementById('pricing')
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-secondary text-white text-center py-[100px] px-5">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-[48px] font-bold mb-5">
          Recap Anything in Seconds with Bailey
        </h1>
        <p className="text-xl md:text-[20px] mb-8 text-muted">
          Videos, images, text—get the gist fast with AI-powered recaps.
        </p>
        <Button 
          onClick={scrollToSignup} 
          className="bg-primary hover:bg-[#218838] text-white text-lg py-[15px] px-[30px] rounded-[5px] border-none"
        >
          Try Bailey Free
        </Button>
        <a 
          href="#demo" 
          className="block text-primary no-underline my-5 text-base"
        >
          See How It Works
        </a>
        <div className="mt-5 text-sm text-muted">
          <span>Powered by AI Tech</span> | <span>1000+ Users Recap Daily</span>
        </div>
      </div>
    </section>
  )
}
