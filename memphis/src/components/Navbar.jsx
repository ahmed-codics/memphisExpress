import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo + Company Name */}
{/* Logo + Company Name */}
<div className="flex items-center gap-3">

<span className="text-xl font-bold text-gray-800">
  Memphis Express
</span>

</div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li><a href="#hero" className="hover:text-blue-600">الرئيسية</a></li>
          <li><a href="#services" className="hover:text-blue-600">الخدمات</a></li>
          <li><a href="#about" className="hover:text-blue-600">من نحن</a></li>
          <li><a href="#ratings" className="hover:text-blue-600">آراء العملاء</a></li>
          <li><a href="#contact" className="hover:text-blue-600">اتصل بنا</a></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center gap-4 py-6 text-gray-700 font-medium">
            <li><a href="#hero" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>الرئيسية</a></li>
            <li><a href="#services" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>الخدمات</a></li>
            <li><a href="#about" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>من نحن</a></li>
            <li><a href="#ratings" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>آراء العملاء</a></li>
            <li><a href="#contact" className="hover:text-blue-600" onClick={() => setIsOpen(false)}>اتصل بنا</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
