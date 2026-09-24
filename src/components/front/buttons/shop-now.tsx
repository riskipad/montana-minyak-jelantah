import Link from "next/link";

export default function ShopNow({ text, link, classList }: { text: string, link: string, classList: string }) {
    return (
        <div className={`relative border border-[#070707] rounded-full overflow-hidden ${classList}`}>
            <Link href={link} className="h-full w-full relative z-10 inline-flex justify-center items-center gap-x-2 font-semibold text-base text-[#070707] group-hover:text-white">
                {text}
            </Link>
            <span className="absolute top-full left-0 h-full w-full bg-black transform transition-all duration-200 group-hover:top-0"></span>
        </div>
    )
}