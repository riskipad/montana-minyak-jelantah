import ShopNow from "@/components/front/buttons/shop-now";
import BoxImage from "@/components/front/cards/box-image";
import Faq from "@/components/front/home/faq";
import Image from "next/image";
import Link from "next/link";
import { fontVarien } from '@/styles/fonts';
import FrontTitleSection from "@/components/front/home/title-section";
import FrontHomeProducts from "@/components/front/home/products";
import FrontTestimonials from "@/components/front/home/testimonials";
import FrontProductsFilter from "@/components/front/home/products-filter";
import { products } from "@/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asyncot Template - Inovasi desain modern"
};

export default function Page() {
  const showProducts = products;
  return (
    <>
      {/* HERO */}
      <header className="w-full relative py-2.5 md:py-4 px-2.5 md:px-4">
        <Image className="h-[630px] md:h-[650px] lg:h-[700px] w-full object-cover rounded-[16px] md:rounded-[20px]" priority={true} src="/images/asset-2.jpg" height={700} width={1408} alt="Banner" />
        <div className="h-full w-full absolute top-0 left-0 flex items-center z-20">
          <div className="container px-10 md:px-6 lg:px-8 xl:px-10">
            <div className="w-full max-w-[993px] text-black">
              <h2 className={`${fontVarien.className} text-[38px] text-white sm:text-[41px] md:text-[48px] lg:text-[58px] xl:text-[72px] leading-[38px] sm:leading-[41px] md:leading-[48px] lg:leading-[58px] xl:leading-[72px] mb-7 md:mb-8 lg:mb-10`}>Dari minyak jelantah jadi upah</h2>
              <p className="w-full max-w-[843px] text-base md:text-lg lg:text-xl text-white/90 mb-7 md:mb-8 lg:mb-10">Kami hadir langsung ke lokasi Anda — mengambil, menimbang, dan membayar minyak jelantah bekas pakai secara transparan. Mudah, rutin, dan terpercaya.</p>
              <Link href="#services" className="h-[56px] w-[159px] inline-flex items-center justify-center bg-[#EB4A26] font-medium text-base text-white rounded-[24px]">
               Jadi Mitra
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="w-full px-2.5 md:px-4 pb-2.5 md:pb-4">
        <div className="w-full bg-white py-[35px] sm:py-[45px] md:py-[58px] lg:py-[70px] xl:py-[80px] rounded-[16px] md:rounded-[20px]">
          <div className="container px-5 md:px-6 lg:px-8 xl:px-10">
            <div className="flex items-center justify-between mb-[30px] sm:mb-[36px] md:mb-[42px] lg:mb-[50px]">
              <FrontTitleSection title="Tentang Kami" />
              <ShopNow text="See All" link="#contact" classList="h-[55px] w-[138px] group" />
            </div>
            <div className="flex flex-wrap md:flex-nowrap justify-between gap-y-5 gap-x-4">
              <article className="h-[460px] sm:h-[500px] md:h-[560px] lg:h-[600px] xl:h-[620px] w-full md:w-1/2 relative overflow-hidden rounded-[28px] md:rounded-[34px] lg:rounded-[41px] group">
                <Image className="h-full w-full object-cover transition-all duration-200 transform group-hover:scale-110" src="/images/asset-1.jpg" priority={true} height={620} width={656} alt="Nike Air Jordan 1 High “Bubble Gum”" />
                <div className="w-full absolute bottom-4 z-10 px-4">
                  <div className="w-full flex flex-wrap md:flex-nowrap items-center justify-between bg-white p-4 rounded-[28px] md:rounded-[28px] lg:rounded-[32px]">
                    <h3 className={`${fontVarien.className} text-[22px] sm:text-25px md:text-[28px] lg:text-[32px] text-[#111111] mb-2.5 md:mb-0 grow`}>Mitra Pengelola <br /> Minyak Jelantah</h3>
                    <ShopNow text="Visi" link="" classList="flex-none h-[48px] md:h-[50px] lg:h-[55px] w-[152px]" />
                  </div>
                </div>
              </article>
              <article className="h-[460px] sm:h-[500px] md:h-[560px] lg:h-[600px] xl:h-[620px] w-full md:w-1/2 relative overflow-hidden rounded-[28px] md:rounded-[34px] lg:rounded-[41px] group">
                <Image className="h-full w-full object-cover transition-all duration-200 transform group-hover:scale-110" src="/images/asset-2.jpg" priority={true} height={620} width={656} alt="Nike x Travis Scott x Fragment" />
                <div className="w-full absolute bottom-4 z-10 px-4">
                  <div className="w-full flex flex-wrap md:flex-nowrap items-center justify-between bg-white p-4 rounded-[28px] md:rounded-[28px] lg:rounded-[32px]">
                    <h3 className={`${fontVarien.className} text-[22px] sm:text-25px md:text-[28px] lg:text-[32px] text-[#111111] mb-2.5 md:mb-0 grow`}>pengepul terpercaya ratusan horeca</h3>
                    <ShopNow text="Misi" link="" classList="flex-none h-[48px] md:h-[50px] lg:h-[55px] w-[152px]" />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="w-full px-2.5 md:px-4 pb-2.5 md:pb-4">
        <div className="w-full bg-white py-[35px] sm:py-[45px] md:py-[58px] lg:py-[70px] xl:py-[80px] rounded-[16px] md:rounded-[20px]">
          <div className="container px-5 md:px-6 lg:px-8 xl:px-10">
            <FrontTitleSection title="Jasa kami" classList="mb-5 md:mb-12" />
            <FrontHomeProducts products={showProducts} />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION (Diletakkan di sini) */}
      <section id="testimoni">
        <FrontTestimonials />
      </section>

      {/* FAQ */}
      <section id="testimoni" className="w-full px-2.5 md:px-4 pb-2.5 md:pb-4">
        <div className="w-full bg-white py-[35px] sm:py-[45px] md:py-[58px] lg:py-[70px] xl:py-[80px] rounded-[16px] md:rounded-[20px]">
          <div className="container flex flex-wrap md:flex-nowrap items-start md:gap-x-[30px] lg:gap-x-[38px] xl:gap-x-[46px] px-5 md:px-6 lg:px-8 xl:px-10">
            <div className="flex-none w-full md:w-[507px] mb-6 md:mb-0">
              <FrontTitleSection title="FAQ" classList="mb-4" />
              <p className="text-base text-[#858585]">Kami melayani dengan sepenuh hati dan berusaha memberikan yang terbaik, hubungi kami untuk info lebih lanjut.</p>
            </div>
            <div className="grow">
              <Faq />
            </div>
          </div>
        </div>
      </section>

      {/* BANNER */}
      <section id="contact" className="w-full h-[563px] relative px-2.5 md:px-4 overflow-hidden">
        <div className="h-[563px] w-full relative rounded-[16px] md:rounded-[20px] overflow-hidden">
          <Image className="h-full w-full object-cover" src="/images/asset-4.jpg" height={563} width={1408} alt="Daftarkan usaha Anda sekarang" />
          <div className="h-full w-full absolute top-0 left-0 bg-[#070707] z-10 opacity-25"></div>
        </div>
        <div className="h-full w-full absolute top-0 left-0 flex items-center justify-center z-20 px-5 md:px-0">
          <div className="w-full max-w-[1016px] text-center text-white">
            <h2 className={`${fontVarien.className} text-[40px] sm:text-[46px] md:text-[58px] lg:text-[70px] xl:text-[84px] leading-[40px] sm:leading-[46px] md:leading-[58px] lg:leading-[70px] xl:leading-[84px] mb-4`}>jadi mitra kami sekarang</h2>
            <p className="w-full max-w-[689px] opacity-80 mx-auto mb-6"></p>
            <div className="h-[55px] w-[232px] mx-auto relative border-[3px] border-white rounded-full overflow-hidden group">
              <Link href="https://wa.me/6289608613506" target="blank" className="relative z-10 h-full w-full inline-flex items-center justify-center gap-x-2 font-semibold text-white group-hover:text-black">
                Daftar Sekarang
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.7499 6V15.75C18.7499 15.9489 18.6709 16.1397 18.5303 16.2803C18.3896 16.421 18.1988 16.5 17.9999 16.5C17.801 16.5 17.6103 16.421 17.4696 16.2803C17.3289 16.1397 17.2499 15.9489 17.2499 15.75V7.81031L6.53055 18.5306C6.38982 18.6714 6.19895 18.7504 5.99993 18.7504C5.80091 18.7504 5.61003 18.6714 5.4693 18.5306C5.32857 18.3899 5.24951 18.199 5.24951 18C5.24951 17.801 5.32857 17.6101 5.4693 17.4694L16.1896 6.75H8.24993C8.05102 6.75 7.86025 6.67098 7.7196 6.53033C7.57895 6.38968 7.49993 6.19891 7.49993 6C7.49993 5.80109 7.57895 5.61032 7.7196 5.46967C7.86025 5.32902 8.05102 5.25 8.24993 5.25H17.9999C18.1988 5.25 18.3896 5.32902 18.5303 5.46967C18.6709 5.61032 18.7499 5.80109 18.7499 6Z" fill="currentcolor" />
                </svg>
              </Link>
              <span className="absolute top-full left-0 h-full w-full bg-white transform transition-all duration-200 group-hover:top-0"></span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}