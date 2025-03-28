export default function SocialProofSection() {
  const testimonials = [
    {
      quote: "Saved me hours on research!",
      author: "Sarah K.",
    },
    {
      quote: "Perfect for quick summaries.",
      author: "Mike T.",
    },
  ]

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">What People Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <p className="text-lg mb-2 italic">"{testimonial.quote}"</p>
              <span className="text-gray-600">– {testimonial.author}</span>
            </div>
          ))}
        </div>
        <p className="text-gray-600">5,000+ recaps generated | Trusted by students, pros, and creators.</p>
      </div>
    </section>
  )
}

