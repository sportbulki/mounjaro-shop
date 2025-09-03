
'use client';
import { useState } from "react";
import { motion } from "framer-motion";

export default function Page() {
  const products = [
    { dose: "2,5 mg", pack: "1 шт", img: "/mounjaro25.jpg" },
    { dose: "5 mg", pack: "1 шт", img: "/mounjaro5.jpg" },
    { dose: "5 mg", pack: "3 шт", img: "/mounjaro5-3.jpg" },
    { dose: "7,5 mg", pack: "1 шт", img: "/mounjaro75.jpg" },
    { dose: "10 mg", pack: "1 шт", img: "/mounjaro10.jpg" },
    { dose: "10 mg", pack: "3 шт", img: "/mounjaro10-3.jpg" },
    { dose: "12,5 mg", pack: "1 шт", img: "/mounjaro125.jpg" },
    { dose: "15 mg", pack: "1 шт", img: "/mounjaro15.jpg" },
    { dose: "15 mg", pack: "3 шт", img: "/mounjaro15-3.jpg" },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-900">
      <header className="p-6 flex justify-between items-center shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold">Интернет-магазин</h1>
        <nav className="space-x-6">
          <a href="#products" className="hover:text-blue-600">Товары</a>
          <a href="#about" className="hover:text-blue-600">О нас</a>
          <a href="#gallery" className="hover:text-blue-600">Фото и отзывы</a>
          <a href="#contacts" className="hover:text-blue-600">Контакты</a>
        </nav>
      </header>
      <section id="products" className="py-16 text-center">
        <h2 className="text-3xl font-semibold mb-8">Наши товары</h2>
        <div className="flex flex-col items-center">
          <div className="w-96 p-6 shadow-xl rounded-2xl bg-white">
            <motion.img
              key={products[currentIndex].img}
              src={products[currentIndex].img}
              alt="Mounjaro"
              className="w-60 h-60 object-contain mb-4 mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            />
            <p className="text-xl font-medium">Mounjaro</p>
            <p className="text-gray-600">{products[currentIndex].dose} – {products[currentIndex].pack}</p>
            <div className="flex gap-2 mt-4 justify-center">
              <button onClick={() => setCurrentIndex((currentIndex - 1 + products.length) % products.length)} className="px-4 py-2 bg-gray-200 rounded">←</button>
              <button onClick={() => setCurrentIndex((currentIndex + 1) % products.length)} className="px-4 py-2 bg-gray-200 rounded">→</button>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="py-16 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4">О нас</h2>
        <p className="max-w-2xl mx-auto text-gray-700">
          Мы предлагаем оригинальные препараты Mounjaro напрямую из Европы. Наш магазин гарантирует качество и быструю доставку.
        </p>
      </section>
      <section id="gallery" className="py-16 text-center bg-gray-100">
        <h2 className="text-3xl font-semibold mb-8">Фото и отзывы</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <img src="/review1.jpg" alt="review" className="rounded-2xl shadow-md" />
          <img src="/review2.jpg" alt="review" className="rounded-2xl shadow-md" />
          <img src="/review3.jpg" alt="review" className="rounded-2xl shadow-md" />
        </div>
      </section>
      <section id="contacts" className="py-16 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-6">Контакты</h2>
        <p className="text-gray-700 mb-4">Свяжитесь с нами для заказа:</p>
        <div className="flex justify-center gap-6">
          <a href="https://wa.me/79999999999" target="_blank" className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600">WhatsApp</a>
          <a href="https://t.me/yourusername" target="_blank" className="px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600">Telegram</a>
        </div>
      </section>
      <footer className="py-6 text-center text-gray-500 bg-gray-50 border-t">
        © 2025 Интернет-магазин. Все права защищены.
      </footer>
    </div>
  );
}
