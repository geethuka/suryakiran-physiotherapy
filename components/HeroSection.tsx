import Navbar from "./Navbar"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
        <Navbar variant="dark" />
      {/* Navbar */}
            {/* <nav className="absolute left-0 top-0 z-30 flex items-center gap-10 px-6 py-5 md:px-12">
            <div className="shrink-0">
                <h2 className="text-xl font-bold">suryakiran</h2>
                <p className="text-xs font-semibold">PHYSIOTHERAPY</p>
            </div>

            <div className="flex items-center gap-5 text-sm font-medium">
                <a className="text-orange-500" href="#home">Home</a>
                <a href="/About">About</a>
                <a href="#services">Services</a>
                <a href="#faq">FAQ</a>
                <a href="#contact">Contact</a>
            </div>
            </nav> */}
            

      {/* Hero layout */}
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">

        {/* Left content */}
        <div className="relative z-10 flex items-center px-6 pb-12 pt-32 md:px-12 md:pb-16 md:pt-24">
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              suryakiran
              <br />
              <span className="text-orange-500">
                PHYSIOTHERAPY
              </span>
            </h1>

            <h3 className="mt-4 text-lg font-semibold">
              — BACK TO LIFE
            </h3>

            <p className="mt-6 text-base leading-relaxed text-gray-300">
              The Institute of Physical Medicine.
              <br />
              Expert women-led care tailored to your recovery.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                className="rounded-xl bg-white px-6 py-4 font-semibold text-black"
                href="#contact"
              >
                Book an Appointment
              </a>

              <a
                className="rounded-xl border border-gray-600 px-6 py-4 font-semibold text-white"
                href="#services"
              >
                Explore Services
              </a>
            </div>

            {/* Statistics */}
            <div className="mt-8 flex flex-wrap gap-8 border-t border-gray-800 pt-6">
              <div>
                <p className="text-xl font-bold">20+</p>
                <p className="text-sm text-gray-400">
                  Years Experience
                </p>
              </div>

              <div>

                <p className="text-xl font-bold">500+</p>
                <p className="text-sm text-gray-400">
                  Happy Patients
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right full-height image */}
        <div className="relative min-h-[420px] h-full md:min-h-screen w-full overflow-hidden">
        <img
            src="/therapy.jpeg"
            alt="Physiotherapy care"
            className="absolute inset-0 h-full w-full object-cover"
        />

        {/* <a
            className="absolute right-6 top-6 z-20 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white md:right-10"
            href="tel:+919048030977"
        >
            📞 +91 90480 30977
        </a> */}
        </div>
      </div>
    </section>
  );
}