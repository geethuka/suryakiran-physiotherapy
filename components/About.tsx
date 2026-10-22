import Navbar from "./Navbar";


export default function About() {
  return (
    <>
    <Navbar variant="light" />
    <main className="min-h-screen bg-[#fffaf5] px-6 py-12 text-black md:px-12">
      <div className="mx-auto max-w-6xl">

        {/* About Heading */}
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-700">
            About Us
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight md:text-5xl">
            Your Trusted Partner in
            <br />
            <span className="text-orange-500">
              Recovery &amp; Wellness
            </span>
          </h1>

          <div className="mt-2 h-1 w-full max-w-xl bg-black" />

          <p className="mt-5 max-w-xl leading-7 text-gray-600">
            At Suryakiran Physiotherapy Clinic, we believe
            everyone deserves to live a pain-free, active life.
            We are committed to supporting your recovery,
            improving mobility, and helping you enjoy a
            better quality of life.
          </p>
        </div>

        {/* Mission and Vision Cards */}
        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-1">

          {/* Mission Card */}
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-2xl">
              ◎
            </div>

            <h2 className="mt-5 text-2xl font-bold">
              Our Mission
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              To provide personalized, evidence-based
              physiotherapy treatments that restore mobility,
              reduce pain, and improve quality of life for
              every patient who walks through our doors.
            </p>
          </div>

          {/* Vision Card */}
          <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-lg">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-50 text-2xl text-yellow-600">
              ♙
            </div>

            <h2 className="mt-5 text-2xl font-bold">
              Our Vision
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              To be a trusted physiotherapy clinic known
              for quality care, compassion, and a commitment
              to helping patients achieve better outcomes.
            </p>
          </div>

        </div>
      </div>
    </main>
    </>
  );
}