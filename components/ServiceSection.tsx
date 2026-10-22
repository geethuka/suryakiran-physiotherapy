import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: "🚚",
    title: "FREE HOME DELIVERY",
    description:
      "Get premium physiotherapy care delivered directly to your doorstep with zero hassle.",
  },
  {
    icon: "🎨",
    title: "COLOR CONSULTATION",
    description:
      "Expert assistance to choose the perfect treatment plan that matches your needs.",
  },
  {
    icon: "🏥",
    title: "COMPLETE PROJECT WORKS",
    description:
      "End-to-end management of physiotherapy treatments, ensuring quality and timely recovery.",
  },
  {
    icon: "🛡️",
    title: "WARRANTED PAINTING",
    description:
      "Professional physiotherapy services backed by quality care for your peace of mind.",
  },
  {
    icon: "💼",
    title: "EXECUTIVE SITE VISITS",
    description:
      "Our experts assess your requirements and recommend suitable treatment plans.",
  },
  {
    icon: "🔧",
    title: "AFTER-SALES SUPPORT",
    description:
      "Dedicated follow-up care and support even after your treatment is completed.",
  },
];

export default function ServiceSection() {
  return (
    <section
      id="services"
      className="bg-white px-6 py-20 md:px-12"
    >
      <div className="mx-auto max-w-6xl">

        <div className="mb-12 text-center">
          <span className="mb-4 inline-block rounded-full bg-purple-100 px-4 py-1 text-xs font-bold tracking-widest text-purple-600">
            OUR SERVICES
          </span>

          <h2 className="text-3xl font-bold text-gray-900 md:text-5xl">
            EVERYTHING YOU NEED
            <br />
            <span className="text-purple-600">
              UNDER ONE ROOF
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-gray-500 md:text-base">
            We provide comprehensive physiotherapy services
            designed for your comfort, recovery and well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}