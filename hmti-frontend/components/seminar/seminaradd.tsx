'use client'

import Image from "next/image";
import placeholder from "@/public/wisuda.png";
import backdrop from "@/public/backdrop.png";
import { BiBulb, BiCalendarEvent, BiSolidNews } from "react-icons/bi";
import { LuCalendar } from "react-icons/lu"
import { Reveal } from "../utils/reveal";
import moment from "moment";
import Link from "next/link";

export default function SeminarForm() {
    const date = moment().format('LL')
    const day = moment().format('dddd')

    return (
        <div>
            <div className="flex flex-col items-center -space-y-20 z-20">
            <div className='relative h-56 bg-primary-focus w-full bg-opacity-70'>
                <Image className='absolute object-cover w-full h-56 -z-10'
                    loading='lazy'
                    src={backdrop}
                    placeholder='blur'
                    alt="news"
                />
                <div className="absolute brightness-100 text-white mt-4 left-1/2 transform -translate-x-1/2 w-4/5 sm:w-2/3 flex flex-row justify-between">
                    <div className="lg:w-2/3 mt-7 w-full">
                        <Reveal>
                            <div className="font-beautiful tracking-wider">Add Seminar Event</div>
                        </Reveal>
                        <Reveal>
                            <h1 className="font-bold text-3xl hover:opacity-100 uppercase">
                                Seminar event data collection form
                            </h1>
                        </Reveal>
                    </div>
                    <div className="lg:flex hidden flex-col w-1/3">
                        <div className="text-base-100 flex flex-row mt-5 gap-2 mr-1 justify-end">
                            <BiSolidNews className="rounded-full bg-accent text-accent" size={20} />
                            <BiCalendarEvent className="rounded-full bg-secondary-focus text-secondary-focus" size={20} />
                            <BiBulb className="rounded-full bg-primary text-primary" size={20} />
                        </div>
                        <div className="mt-5 mr-0.5 flex flex-row items-center justify-end">
                            <LuCalendar className="mt-0.5" size={30} />
                            <div className="flex flex-col ml-2">
                                <Reveal>
                                    <div className="uppercase tracking-wide text-sm font-bold">{day}</div>
                                </Reveal>
                                <Reveal>
                                    <div className="text-xs">{date}</div>
                                </Reveal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-2/3 brightness-100 z-20">
                <Image className='mt-12 sm:mt-8 lg:mt-4 object-cover sm:rounded-t-xl w-full sm:h-56 xl:h-72 h-36 z-30'
                    loading='lazy'
                    src={placeholder}
                    placeholder='blur'
                    alt="news"
                />
            </div>
        </div>
            <div className="flex items-center flex-col brightness-100 mb-10">
                <div className="w-full sm:w-2/3  border-x sm:border-b bg-white sm:rounded-b-xl">
                    <iframe 
                    title="Form Pendataan Seminar Teknik Industri"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdLFbDyqFjT_bSA3mSWf_wZGKdXNN5vRxppn0vKsb_og810ZA/viewform?embedded=true" 
                    className="w-full h-[170vh] sm:h-[170vh] lg:h-[170vh] xl:h-[165vh] rounded-b-xl"/>
                </div>
                <Link href="/seminar" className="btn btn-primary sm:w-2/3 w-5/6 mt-8">Back To Seminar Event List</Link>
            </div>
        </div>
    );
};