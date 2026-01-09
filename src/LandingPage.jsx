import React, { useState, useEffect } from "react";
import slide1 from "./assets/images/slide1.jpg";
import slide2 from "./assets/images/slide2.jpg";
import slide3 from "./assets/images/slide3.jpg";

import oyster from "./assets/images/oyster.jpg";
import button from "./assets/images/oysterpowder.jpg";
import farm from "./assets/images/farm.jpg";

export default function LandingPage() {
  const slides = [slide1, slide2, slide3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-sans text-gray-800">
      <div className="relative w-full h-[70vh]">
        <img src={slides[current]} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Mushroom Mantra 🍄</h1>
          <p className="text-xl">Fresh • Organic • Chemical-Free</p>
          <a
            href="#contact"
            className="mt-6 bg-white text-green-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </div>

      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">About Mushroom Mantra</h2>
        <p className="text-center max-w-3xl mx-auto text-gray-600">
          Mushroom Mantra is an organic mushroom farm based in Indore, Madhya Pradesh. We grow high-quality mushrooms using
          sustainable and chemical-free farming methods to ensure freshness and health benefits.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition">
            <h3 className="text-2xl font-semibold text-green-700 mb-3">🌱 100% Organic</h3>
            <p className="text-gray-600">Pure mushrooms grown naturally without harmful chemicals.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition">
            <h3 className="text-2xl font-semibold text-green-700 mb-3">⭐ 4.5 Rating</h3>
            <p className="text-gray-600">Trusted by customers with 23+ Google reviews.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition">
            <h3 className="text-2xl font-semibold text-green-700 mb-3">📍 Indore Based</h3>
            <p className="text-gray-600">Local farm serving fresh produce across Madhya Pradesh.</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12">Our Farm & Products 🍄</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src={oyster} className="w-full h-56 object-cover" />
            <div className="p-4 text-center">
              <h3 className="font-semibold mb-3">Fresh Oyster Mushrooms</h3>
              <a
                href="https://wa.me/918640031642"
                target="_blank"
                className="bg-green-600 text-white px-6 py-2 rounded-full"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src={button} className="w-full h-56 object-cover" />
            <div className="p-4 text-center">
              <h3 className="font-semibold mb-3">Oyster Mushroom Powder</h3>
              <a
                href="https://wa.me/918640031642"
                target="_blank"
                className="bg-green-600 text-white px-6 py-2 rounded-full"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src={farm} className="w-full h-56 object-cover" />
            <div className="p-4 text-center">
              <h3 className="font-semibold mb-3">Natural Mushroom Farming</h3>
              <a
                href="https://wa.me/918640031642"
                target="_blank"
                className="bg-green-600 text-white px-6 py-2 rounded-full"
              >
                Contact on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12">What Customers Say ⭐</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <p className="text-gray-700 italic">"Their mushrooms are always fresh, organic, and full of flavor."</p>
            <p className="mt-4 font-semibold text-green-700">★★★★★</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <p className="text-gray-700 italic">"Wonderful experience! Highly recommended for fresh organic mushrooms."</p>
            <p className="mt-4 font-semibold text-green-700">★★★★★</p>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-green-700 text-white py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Contact Information</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-600 rounded-xl p-6">
            <p className="mb-3"><strong>Address:</strong></p>
            <p>
              Flat no 311, H, Nariman Points, Vrindavan Palace Colony, Mahalaxmi Nagar,
              Indore, Madhya Pradesh 452010
            </p>
          </div>
          <div className="bg-green-600 rounded-xl p-6">
            <p className="mb-3"><strong>Business Hours:</strong></p>
            <p>Open • Closes at 6 PM</p>
            <p className="mt-4"><strong>Google Rating:</strong> ⭐ 4.5 / 5</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">Find Us on Google Maps 📍</h2>
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Mushroom Mantra Location"
            src="https://www.google.com/maps?q=Mushroom%20Mantra%20Indore&output=embed"
            className="w-full h-[400px] border-0"
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <a
        href="https://wa.me/918640031642"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition"
      >
        💬
      </a>

      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        © 2026 Mushroom Mantra | Organic Farm
      </footer>
    </div>
  );
}
