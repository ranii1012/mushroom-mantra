import React, { useState, useEffect } from "react";

import logo from "./assets/images/logo.png";

import slide1 from "./assets/images/slide1.jpg";
import slide2 from "./assets/images/slide2.jpg";
import slide3 from "./assets/images/slide3.jpg";
import slide4 from "./assets/images/slide4.jpg";
import slide5 from "./assets/images/slide5.jpg";
import slide6 from "./assets/images/slide6.jpg";
import slide7 from "./assets/images/slide7.jpg";
import slide8 from "./assets/images/slide8.jpg";
import slide9 from "./assets/images/slide9.jpg";
import slide10 from "./assets/images/slide10.jpg";
import slide11 from "./assets/images/slide11.jpg";
import slide12 from "./assets/images/slide12.jpg";
import slide13 from "./assets/images/slide13.jpg";


import workshop1 from "./assets/images/workshop1.jpg";
import workshop2 from "./assets/images/workshop2.jpg";
import workshop3 from "./assets/images/workshop3.jpg"; 

import medicaps from "./assets/images/medicaps.jpg";
import acropolis from "./assets/images/acropolis.jpg";
import vaishnav from "./assets/images/vaishnav.jpg";
import holkarScience from "./assets/images/holkarscience.jpg";
import holkar from "./assets/images/holkar.jpg";

import oyster from "./assets/images/oyster.jpg";
import drymushroom from "./assets/images/drymushroom.jpg";
import oysterpowder from "./assets/images/oysterpowder.jpg";
import button from "./assets/images/button.jpg";
import pickle from "./assets/images/pickle.jpg";
import farm from "./assets/images/farm.jpg";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaClock,
  FaStar,
} from "react-icons/fa";

export default function LandingPage() {
  const slides = [
    slide1,
    slide2,
    slide3,
    slide4,
    slide5,
    slide6,
    slide7,
    slide8,
    slide9,
    slide10,
    slide11,
    slide12,
    slide13,
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const reviews = [
    { text: "I have had an amazing experience with Mushroom Mantra! Their mushrooms are always fresh, organic, and full of flavor. What I appreciate most is their timely doorstep delivery. It’s so convenient and reliable. Highly recommend Mushroom Mantra!" },
    { text: "I have been ordering from Mushroom Mantra for a while now, and the quality has always been excellent! Super fresh mushrooms and always on-time delivery." },
    { text: "Best oyster mushroom in Indore." },
    { text: "Their mushrooms are always fresh, organic, and full of flavor." },
    { text: "Wonderful experience! Highly recommended for fresh organic mushrooms." },
  ];

  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <div className="font-sans text-gray-800">

      <div className="relative w-full h-[70vh]">
        <img src={slides[current]} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white px-6 text-center">
         
<h1 className="text-5xl font-bold mb-4 flex items-center gap-3">
  <img
    src={logo}
    alt="Mushroom Mantra Logo"
    className="w-20 h-20"
  />
  Mushroom Mantra🍄
</h1>


          <p className="text-xl">Fresh • Organic • Grown with care </p>
          <a
            href="#contact"
            className="mt-6 bg-[#8B6A3D] text-black px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </div>

      <section className="py-28 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6">
          About
        </h2>
        <p className="text-center max-w-3xl mx-auto text-gray-600">
          Mushroom Mantra is Indore’s trusted organic mushroom farming 
          company, delivering fresh oyster and button mushrooms grown through
          sustainable, chemical - free methods. We offer fast home delivery in
          Indore and are available on Meesho, Blinkit, and Swiggy. Along with
          fresh mushrooms, we produce tasty mushroom achar,  protein powder,  popper, 
          cookies,  & pastries.
          As farmers,  manufacturers, wholesalers, & retailers, we provides organic mushrooms, bulk supply, and  
           bioproducts for homes, gyms, cafés, and healthconscious customers across Indore.
        </p>
      </section>
        
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition">
            <h3 className="text-2xl font-semibold text-[#8B6A3D] mb-3">🌱 100% Organic</h3>
            <p className="text-gray-600">• Pure mushrooms grown naturally without harmful chemicals.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition">
            <h3 className="text-2xl font-semibold text-[#8B6A3D] mb-3">⭐ 4.5 Rating</h3>
            <p className="text-gray-600">• Trusted by customers with 23+ Google reviews.</p>
          </div>
          
                  <div className="bg-white rounded-2xl shadow-xl p-8 text-center hover:scale-105 transition">
            <h3 className="text-2xl font-semibold text-[#8B6A3D] mb-3">500+</h3>
            <p className="text-gray-600">• Farmers Trained/ Farmed Setup</p>

          </div>

          
        </div>

      <section className="py-20 bg-white px-6">
      <h2 className="text-4xl font-bold text-center mb-10 flex items-center justify-center gap-3">
  <img
    src={logo}
    alt="Mushroom Mantra Logo"
    className="w-10 h-10"
  />
  Mushroom Farming Workshop🍄
</h2>


        <p className="text-center max-w-3xl mx-auto text-gray-600 mb-14">
          Mushroom Mantra conducts hands-on mushroom farming workshops and
          internships for students, farmers, and entrepreneurs.
        </p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
            <img src={workshop1} className="w-full h-56 object-cover" />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold">Practical Training</h3>
              <p className="text-gray-600">In that we provide practical training, internship & certificates </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
            <img src={workshop2} className="w-full h-56 object-cover" />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold">Internship Program</h3>
               <p className="text-gray-600">Mushroom Mantra
(Hands-on training program)</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden">
            <img src={workshop3} className="w-full h-56 object-cover" />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold">Certification</h3>
              <p className="text-gray-600">Internship Completion – Mushroom Mantra</p>
            </div>
          </div>
        </div>
      </section>

<section className="py-20 bg-gray-50 px-6">
 <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
  <span className="p-2 rounded-full flex items-center justify-center">
    <img
      src={logo}
      alt="Mushroom Mantra Logo"
      className="w-10 h-10"
    />
  </span>
 College Training & Workshops 🎓
</h2>


  <p className="text-center max-w-3xl mx-auto text-gray-600 mb-14">
    Mushroom Mantra actively conducts mushroom cultivation training programs
    and practical workshops in reputed colleges. These programs help students
    gain hands-on agricultural, biotechnology, and entrepreneurship exposure.
  </p>

  <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <img src={medicaps} alt="Medicaps College Training" className="w-full h-52 object-cover" />
      <div className="p-5 text-center font-semibold">
        Medicaps University
      </div>
    </div>

    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <img src={acropolis} alt="Acropolis College Training" className="w-full h-52 object-cover" />
      <div className="p-5 text-center font-semibold">
        Acropolis Institute
      </div>
    </div>

    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <img src={vaishnav} alt="Vaishnav College Training" className="w-full h-52 object-cover" />
      <div className="p-5 text-center font-semibold">
        Vaishnav College
      </div>
    </div>
  <div className="md:col-span-3 flex justify-center gap-8">
    
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full sm:w-[45%] md:w-[30%]">
      <img src={holkarScience} alt="Holkar Science College Training" className="w-full h-52 object-cover" />
      <div className="p-5 text-center font-semibold">
        Holkar Science College
      </div>
    </div>

    <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full sm:w-[45%] md:w-[30%]">
      <img src={holkar} alt="Holkar College Training" className="w-full h-52 object-cover" />
      <div className="p-5 text-center font-semibold">
        Holkar College
      </div>
    </div>

  </div>

</div>

  <div className="text-center mt-12">
    <a
      href="#contact"
      className="bg-[#8B6A3D] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 transition"
    >
      Invite Training Program
    </a>
  </div>
</section>

         <section className="py-16 bg-gray-50">
       <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
  <img
    src={logo}
    alt="Mushroom Mantra Logo"
    className="w-10 h-10"
  />
  Our Products 🍄
</h2>


        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src={oyster} className="w-full h-56 object-cover" />
            <div className="p-4 text-center">
              <h3 className="font-semibold mb-3">Fresh Oyster Mushrooms</h3>
              <a
                href="https://wa.me/918640031642"
                target="_blank"
                className="bg-[#8B6A3D] text-white px-6 py-2 rounded-full"
              >
                Order on WhatsApp
              </a>
            </div>
          </div> 

           <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src={drymushroom} className="w-full h-56 object-cover" />
            <div className="p-4 text-center">
              <h3 className="font-semibold mb-3">Dry Oyster Mushrooms</h3>
              <a
                href="https://wa.me/918640031642"
                target="_blank"
                className="bg-[#8B6A3D] text-white px-6 py-2 rounded-full"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src={oysterpowder} className="w-full h-56 object-cover" />
            <div className="p-4 text-center">
              <h3 className="font-semibold mb-3">Fresh Oyster Powder</h3>
              <a
                href="https://wa.me/918640031642"
                target="_blank"
                className="bg-[#8B6A3D] text-white px-6 py-2 rounded-full"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src={button} className="w-full h-56 object-cover" />
            <div className="p-4 text-center">
              <h3 className="font-semibold mb-3">Fresh Button Mushroom</h3>
              <a
                href="https://wa.me/918640031642"
                target="_blank"
                className="bg-[#8B6A3D] text-white px-6 py-2 rounded-full"
              >
                Order on WhatsApp
              </a>
            </div>

          </div> 

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <img src={pickle} className="w-full h-56 object-cover" />
            <div className="p-4 text-center">
              <h3 className="font-semibold mb-3">Oyster Mushroom Pickle</h3>
              <a
                href="https://wa.me/918640031642"
                target="_blank"
                className="bg-[#8B6A3D] text-white px-6 py-2 rounded-full"
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
                className="bg-[#8B6A3D] text-white px-6 py-2 rounded-full"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>

        </div>
      </section>

      <section className="py-20 px-6 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-12">
          What Customers Say ⭐
        </h2>

        <div className="max-w-3xl mx-auto bg-white p-10 rounded-2xl shadow-lg text-center">
          <p className="italic text-lg">
            "{reviews[currentReview].text}"
          </p>
          <p className="mt-6 font-semibold text-[#8B6A3D]">⭐⭐⭐⭐⭐</p>
        </div>
      </section>

      <section id="contact" className="bg-[#6B4F2A] text-white py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          Contact Information
        </h2>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#8B6A3D] rounded-xl p-6 space-y-5">
            <div className="flex gap-3">
              <FaMapMarkerAlt />
              <p>Indore – Flat no 311, H, Nariman Points, Vrindavan Palace Colony</p>
            </div>
            <div className="flex gap-3">
              <FaMapMarkerAlt />
              <p>Lakhnadon – Ward 05 front of college Lakhnadon</p>
            </div>
          </div>

          <div className="bg-[#8B6A3D] rounded-xl p-6 space-y-4">
            <div className="flex gap-3"><FaPhoneAlt /> +91 8640031642</div>
            <div className="flex gap-3"><FaEnvelope /> gopisopreinnovatives@gmail.com</div>
            <div className="flex gap-3"><FaInstagram /> mushroommantraofficial</div>
            <div className="flex gap-3"><FaLinkedin /> Mushroom Mantra</div>
            <div className="flex gap-3"><FaClock /> Open at 10 AM • Closes at 6 PM</div>
            <div className="flex gap-3"><FaStar /> Rating ⭐ 4.5 </div>
          </div>
        </div>
      </section> 

         
      <section className="py-20 px-6"> <h2 className="text-4xl font-bold text-center mb-10">Find Us on Google Maps 📍</h2> <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg"> <iframe title="Mushroom Mantra Location" src="https://www.google.com/maps?q=Mushroom%20Mantra%20Indore&output=embed" className="w-full h-[400px] border-0" loading="lazy" ></iframe> </div> </section>

      <a
        href="https://wa.me/918640031642"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition"
      >
        💬
      </a>


      <footer className="bg-[#8B6A3D] text-white text-center py-6">
        © 2026 Mushroom Mantra | Organic Farm
      </footer>
    </div>
  );
}
