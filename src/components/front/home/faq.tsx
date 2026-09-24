"use client"

import clsx from "clsx";
import { useState } from "react";
import { faqs } from "@/data";

export default function Faq() {
    const [faqActive, setFaqActive] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setFaqActive(faqActive === index ? null : index);
    };

    return (
        <section>
            {faqs.map((item, index) => {
                const isActive = faqActive === index;
                return (
                    <article 
                        key={item.id || index} 
                        className="flex items-start gap-x-5 md:gap-x-6 lg:gap-x-8 xl:gap-x-10 px-0 md:px-6 py-5 md:py-6 border-b border-[#ACACAC] text-[#111111]"
                    >
                        <div className="grow">
                            <h3 className="font-medium text-lg md:text-[21px] lg:text-[24px] leading-[25px] md:leading-[28px] lg:leading-[31.2px]">
                                {item.question}
                            </h3>
                            <p className={clsx('font-medium text-sm sm:text-base opacity-75 pt-2.5 sm:pt-3 md:pt-4', { 'hidden': !isActive })}>
                                {item.answer}
                            </p>
                        </div>
                        <button 
                            type="button" 
                            className="h-10 w-10 flex-none" 
                            onClick={() => toggleFaq(index)}
                            aria-label="Toggle FAQ"
                        >
                            {isActive ? (
                                <svg className="size-7 md:size-8 lg:size-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25 20H15M35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5C28.2843 5 35 11.7157 35 20Z" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            ) : (
                                <svg className="size-7 md:size-8 lg:size-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20 15V20M20 20V25M20 20H25M20 20H15M35 20C35 28.2843 28.2843 35 20 35C11.7157 35 5 28.2843 5 20C5 11.7157 11.7157 5 20 5C28.2843 5 35 11.7157 35 20Z" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            )}
                        </button>
                    </article>
                );
            })}
        </section>
    );
}
