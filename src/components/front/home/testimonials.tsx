"use client";

import Image from "next/image";
import { fontVarien } from "@/styles/fonts";
import FrontTitleSection from "@/components/front/home/title-section";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  comment: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Budi Santoso",
    role: "Pemilik Restoran Padang",
    avatar: "https://www.loremfaces.net/96/id/3.jpg",
    rating: 5,
    comment:
      "Layanan penjemputan minyak jelantah sangat tepat waktu. Proses penimbangan transparan dan pembayaran langsung di tempat. Sangat membantu operasional kami!",
  },
  {
    id: 2,
    name: "Siti Rahmawati",
    role: "Pengusaha Katering",
    avatar: "https://www.loremfaces.net/96/id/5.jpg",
    rating: 5,
    comment:
      "Sangat puas bermitra! Minyak jelantah sisa katering yang biasanya menumpuk kini bisa menghasilkan pemasukan tambahan secara rutin.",
  },
  {
    id: 3,
    name: "Hendrik Wijaya",
    role: "Operational Manager Hotel",
    avatar: "https://www.loremfaces.net/96/id/2.jpg",
    rating: 5,
    comment:
      "Mitra terpercaya untuk pengolahan minyak bekas. Timnya profesional, ramah, dan transparan dalam penimbangan serta penentuan harga.",
  },
];

export default function FrontTestimonials() {
  return (
    <section id="testimoni" className="w-full px-2.5 md:px-4 pb-2.5 md:pb-4">
      <div className="w-full bg-white py-[35px] sm:py-[45px] md:py-[58px] lg:py-[70px] xl:py-[80px] rounded-[16px] md:rounded-[20px]">
        <div className="container px-5 md:px-6 lg:px-8 xl:px-10">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-[30px] sm:mb-[36px] md:mb-[42px] lg:mb-[50px] gap-y-4">
            <div>
              <FrontTitleSection title="Testimoni Mitra" classList="mb-3" />
              <p className="text-base md:text-lg text-[#858585] max-w-[540px]">
                Dengarkan langsung pengalaman para mitra usaha yang telah mempercayakan pengelolaan minyak jelantah bersama kami.
              </p>
            </div>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="bg-[#F8F9FA] p-6 sm:p-8 rounded-[24px] border border-[#EBEBEB] flex flex-col justify-between hover:shadow-lg transition-all duration-300"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-x-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 fill-[#EB4A26]"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Comment */}
                  <p className="text-base text-[#333333] leading-relaxed mb-6 italic">
                    &ldquo;{item.comment}&rdquo;
                  </p>
                </div>

                {/* Profile Info */}
                <div className="flex items-center gap-x-4 pt-4 border-t border-[#E5E5E5]">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex-none">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4
                      className={`${fontVarien.className} text-lg text-[#131313] font-semibold`}
                    >
                      {item.name}
                    </h4>
                    <p className="text-sm text-[#858585]">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
