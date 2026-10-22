type NavbarProps = {
  variant?: "dark" | "light";
};

export default function Navbar({
  variant = "dark",
}: NavbarProps) {
  const isDark = variant === "dark";

  return (
    <nav
      className={`flex w-full items-center justify-between gap-4 px-6 py-5 md:px-12 ${
        isDark
          ? "bg-[#050505] text-white"
          : "bg-[#fffaf5] text-black"
      }`}
    >
      {/* Logo */}
      <a href="/" className="shrink-0">
        <h2 className="text-xl font-bold">suryakiran</h2>
        <p
          className={`text-xs ${
            isDark ? "text-gray-400" : "text-gray-500"
          }`}
        >
          PHYSIOTHERAPY
        </p>
      </a>

      {/* Navigation Links */}
      <div className="hidden items-center gap-6 text-sm font-medium md:flex">
        <a href="/" className="text-orange-500">Home</a>
        <a href="/About" className="hover:text-orange-500">About</a>
        <a href="/#services" className="hover:text-orange-500">Services</a>
        <a href="/#faq" className="hover:text-orange-500">FAQ</a>
        <a href="/#contact" className="hover:text-orange-500">Contact</a>
      </div>

      {/* Phone Button */}
      <a
        href="tel:+919048030977"
        className={`shrink-0 rounded-full px-5 py-3 text-sm font-semibold ${
          isDark
            ? "bg-white text-black"
            : "bg-black text-white"
        }`}
      >
        ☎ +91 90480 30977
      </a>
    </nav>
  );
}