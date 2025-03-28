export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4">
            <a href="#" className="mx-2 hover:underline">
              About Us
            </a>{" "}
            |
            <a href="#" className="mx-2 hover:underline">
              Pricing
            </a>{" "}
            |
            <a href="#" className="mx-2 hover:underline">
              Support
            </a>{" "}
            |
            <a href="#" className="mx-2 hover:underline">
              Terms
            </a>{" "}
            |
            <a href="#" className="mx-2 hover:underline">
              Privacy
            </a>
          </div>
          <p className="mb-2">© 2025 Nexonic Industries LLC</p>
          <p>
            Contact:{" "}
            <a href="mailto:hello@baileyrecap.com" className="hover:underline">
              hello@baileyrecap.com
            </a>
          </p>
        </div>
      </footer>
    )
  }
  
  