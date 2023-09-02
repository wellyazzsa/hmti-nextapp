import Image from "next/image";
import Logo from "@/public/hmtilogo.jpg";
import { BsFillBagFill, BsInstagram, BsLine, BsLinkedin, BsTiktok, BsYoutube } from "react-icons/bs";
import topography from "@/public/topography.svg";
import { AiOutlineHeart } from "react-icons/ai";

export default function Footer () {
    return (
        <footer className="relative">
            <Image className="absolute object-cover w-full sm:h-56 h-[60vh] opacity-5" src={topography} alt="Topography"/>
        <div className="absolute p-4 sm:p-6 w-full bg-neutral bg-opacity-25">
        <div className="mx-auto max-w-screen-xl">
            <div className="md:flex md:justify-between">
            <div className="btn btn-ghost cursor-pointer lg:flex hidden"><a href="/">
                <Image src={Logo} alt="Logo HMTI" className="h-8 w-8 rounded-md"/></a>
                <text className="text-xl font-raleway"><a href="/">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-warning">
                        HMTI
                    </span>
                    <span>
                        UNSOED
                    </span>
                </a></text>
            </div>
                <div className="grid grid-cols-2 gap-10 sm:gap-20 sm:mx-4 mx-auto sm:grid-cols-3 z-2">
                    <div>
                        <h2 className="mb-6 text-sm font-bold uppercase">
                            About
                        </h2>
                        <ul>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">History</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Organization</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-bold uppercase">
                            Academic
                        </h2>
                        <ul >
                            <li className="mb-4">
                                <a href="/artery" className="hover:underline ">Artery</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Curiculum</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-bold uppercase">
                            Corner
                        </h2>
                        <ul>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Hall of Fame</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Galery</a>
                            </li>
                        </ul>
                    </div>
                    <div className="sm:hidden">
                        <h2 className="mb-6 text-sm font-bold uppercase">
                            Sekertariat HMTI UNSOED
                        </h2>
                        <p className="text-xs">
                        Fakultas Teknik Unsoed, Jl. Raya Mayjen Sungkono KM 5, Dusun 2, Blater, Kec. Kalimanah, Kabupaten Purbalingga, Jawa Tengah 53371
                        </p>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-1 border-primary sm:mx-auto lg:my-6" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <div className="flex flex-row justify-center">
                <span className="flex text-sm sm:text-center">
                    © 2023 HMTI UNSOED&nbsp;
                    <p className="hidden sm:flex">| Designed and Maintained with&nbsp;</p>
                </span>
                <AiOutlineHeart className="hidden sm:flex" size={18}/>
                </div>
                <div className="flex mt-4 space-x-6 sm:justify-center justify-center sm:mt-0">
                    <a href="https://www.instagram.com/hmti.unsoed/">
                        <BsInstagram className="hover:text-primary"/>
                    </a>
                    <a href="https://www.linkedin.com/company/himpunan-mahasiswa-teknik-industri-unsoed-hmti-unsoed/">
                        <BsLinkedin className="hover:text-primary"/>
                    </a>
                    <a href="https://www.youtube.com/@hmti_unsoed">
                        <BsYoutube className="hover:text-primary"/>
                    </a>
                    <a href="https://www.tiktok.com/@hmti.unsoed">
                        <BsTiktok className="hover:text-primary"/>
                    </a>
                    <a href="https://line.me/R/ti/p/@ybt3365p">
                        <BsLine className="hover:text-primary"/>
                    </a>
                    <a href="https://www.instagram.com/hmti.stardust/">
                        <BsFillBagFill className="hover:text-primary"/>
                    </a>
                </div>
            </div>
        </div>
        </div>
    </footer>
    )
}