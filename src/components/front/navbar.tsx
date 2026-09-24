"use client"

import Link from "next/link";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import { fontVarien } from '@/styles/fonts';

export default function FrontNavbar() {
    const [isSticky, setIsSticky] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const element = document.querySelector('nav');

        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => setIsSticky(entry.intersectionRatio < 1),
            { threshold: [1], rootMargin: '-1px 0px 0px 0px' }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <>
            <nav className={clsx(
                "sticky top-0 z-50 w-full transition-all duration-200",
                { 'px-0 opacity-0': !isSticky && isOpen, 'px-2.5 md:px-4': !isSticky && !isOpen }
            )}>
                <div className={clsx(
                    "h-[70px] md:h-[92px] w-full bg-white transition-all duration-200",
                    { 'rounded-0': !isSticky && isOpen, 'rounded-[16px] md:rounded-[20px]': !isSticky && !isOpen }
                )}>
                    <div className="container h-full flex items-center justify-between flex-nowrap px-5 md:px-6 lg:px-8 xl:px-10">
                        <div className="block">
                            <h2 className={fontVarien.className}>
                                <Link href="/" className="text-lg md:text-[21px] lg:text-[24px] text-[#131313] uppercase">Montana</Link>
                            </h2>
                        </div>
                        <div className={`hidden md:flex items-center md:gap-x-6 lg:gap-x-8 md:text-base lg:text-lg text-[#131313]`}>
                            <Link href="#about" className="hover:text-[#EB4A26] transition-colors">Tentang</Link>
                            <Link href="#services" className="hover:text-[#EB4A26] transition-colors">Layanan</Link>
                            <Link href="#testimoni" className="hover:text-[#EB4A26] transition-colors">Testimoni</Link>
                        </div>
                        <div className="flex justify-end items-center gap-x-3 md:gap-x-4">
                            <Link href="#contact" className="hidden md:block px-8 py-4 rounded-full bg-black text-white hover:bg-[#EB4A26] transition-colors">
                                Hubungi
                            </Link>
                            <button
                                type="button"
                                onClick={() => setIsOpen(!isOpen)}
                                className="md:hidden p-2 text-[#131313] hover:text-[#EB4A26] transition-colors focus:outline-none"
                                aria-label="Toggle Menu"
                            >
                                {isOpen ? <XMarkIcon className="size-7" /> : <Bars3Icon className="size-7" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Fullscreen Mobile Menu */}
            <div
                className={clsx(
                    "fixed inset-0 bg-white z-40 md:hidden flex flex-col justify-between p-6 sm:p-8 transition-all duration-300 ease-in-out",
                    isOpen ? "opacity-100 pointer-events-auto translate-y-0" : "opacity-0 pointer-events-none -translate-y-4"
                )}
            >
                <div className="flex items-center justify-between pt-2">
                    <h2 className={fontVarien.className}>
                        <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl text-[#131313] uppercase">
                            Montana
                        </Link>
                    </h2>
                    <button
                        type="button"
                        onClick={() => setIsOpen(false)}
                        className="p-2 text-[#131313] hover:text-[#EB4A26] transition-colors"
                        aria-label="Close Menu"
                    >
                        <XMarkIcon className="size-8" />
                    </button>
                </div>

                <div className="flex flex-col items-center justify-center space-y-8 my-auto text-center">
                    <Link
                        href="#about"
                        onClick={() => setIsOpen(false)}
                        className={`${fontVarien.className} text-3xl sm:text-4xl text-[#131313] hover:text-[#EB4A26] transition-colors`}
                    >
                        Tentang
                    </Link>
                    <Link
                        href="#services"
                        onClick={() => setIsOpen(false)}
                        className={`${fontVarien.className} text-3xl sm:text-4xl text-[#131313] hover:text-[#EB4A26] transition-colors`}
                    >
                        Layanan
                    </Link>
                    <Link
                        href="#testimoni"
                        onClick={() => setIsOpen(false)}
                        className={`${fontVarien.className} text-3xl sm:text-4xl text-[#131313] hover:text-[#EB4A26] transition-colors`}
                    >
                        Testimoni
                    </Link>
                    <Link
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="mt-4 px-10 py-4 rounded-full bg-black text-white text-xl font-medium hover:bg-[#EB4A26] transition-colors shadow-md active:scale-95"
                    >
                        Hubungi
                    </Link>
                </div>

                <div className="text-center text-sm text-gray-500 pb-4">
                    © {new Date().getFullYear()} Montana. All rights reserved.
                </div>
            </div>
        </>
    );
}

