export default function FeaturesSection() {
    const features = [
      {
        icon: "⏱️",
        title: "Fast Recaps",
        description: "Upload a video, image, or text—get a recap in under 10 seconds."
      },
      {
        icon: "📁",
        title: "Any Content",
        description: "Works with YouTube links, PDFs, photos, and more."
      },
      {
        icon: "💸",
        title: "Simple Pricing",
        description: "Free to start, upgrade for more power."
      }
    ]
  
    return (
      <section className="py-[50px] px-5 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[36px] font-bold mb-10">Why Bailey?</h2>
          <div className="flex justify-center gap-[30px] flex-wrap">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card bg-white p-[30px] rounded-[10px] w-[300px] shadow-md"
              >
                <span className="text-[40px] block mb-5">{feature.icon}</span>
                <h3 className="text-[24px] font-bold mb-[10px]">{feature.title}</h3>
                <p className="text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  