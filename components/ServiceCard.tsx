type ServiceCardProps = {
  title: string;
  description: string;
  icon: string;
};

export default function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <div className="rounded-2xl border border-purple-200 bg-purple-100/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-xl text-purple-600">
        {icon}
      </div>

      <h3 className="mb-3 text-base font-bold text-gray-900">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-gray-600">
        {description}
      </p>

      <div className="mt-5 h-1 w-10 rounded-full bg-purple-200" />

    </div>
  );
}