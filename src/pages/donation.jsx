import Image from "next/image";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";
import { toast, ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

import Layout from "@/components/layout/Layout";

if (typeof window !== "undefined") {
    injectStyle();
}

export default function Donation() {
    const { t } = useTranslation("donation");
    function notify() {
        toast(
            t(
                "we-are-thrilled-to-have-your-support-thank-you-for-your-generous-gift"
            ) + "!",
            { position: toast.POSITION.TOP_CENTER }
        );
    }
    return (
        <Layout>
            <div className='grid-flow-col-1 grid items-center justify-around bg-iceblue font-Poppins'>
                <div className='relative p-10'>
                    <div className='relative z-10 text-center xs:top-8 xs:text-sm sm:top-14 sm:text-2xl lg:text-4xl'>
                        <h2 className='px-4 py-2 text-white opacity-70'>
                            Be the reason someone smiles today
                        </h2>
                    </div>
                    <Image
                        src='/images/donate-img1.png'
                        alt='donation image'
                        width='1024px'
                        height='512px'
                        className='rounded-lg'
                    ></Image>
                </div>
                <div className='htext donationbrush text-center font-bold text-purple xxs:text-xl xs:text-3xl sm:text-4xl'>
                    <h2>{t("make-a-difference-by-donating")}!</h2>
                </div>
                <div className='flex items-center justify-around xxs:scale-90 xxs:flex-col xxs:gap-4 xxs:p-0 sm:scale-100 sm:p-10 lg:flex-row lg:gap-12'>
                    <div className=' donationCard donationCardPhone mt-8 flex h-64 w-72 flex-col justify-center rounded-lg bg-white text-darkpurple shadow-lg '>
                        <div className='flex flex-col items-center p-10 '>
                            <span className='text-center text-xl font-semibold'>
                                {t("help")}
                            </span>
                            <div className='flex items-center'>
                                <span className='text-3xl'>$</span>
                                <span className='mt-3 text-6xl font-bold'>
                                    10
                                </span>
                            </div>
                        </div>
                        <div className='justfy-center flex px-10 pb-10'>
                            <button
                                onClick={notify}
                                className='flex h-12 w-full items-center justify-center rounded-lg bg-pumpkin px-6 text-sm font-semibold uppercase text-white'
                            >
                                {t("donate-now")}!
                            </button>
                        </div>
                    </div>
                    <div className='  donationCard donationCardPhone mt-8 flex h-72 w-72 flex-col justify-center rounded-lg bg-white text-darkpurple shadow-lg '>
                        <div className='flex flex-col items-center p-10 '>
                            <span className='text-center text-xl font-semibold'>
                                {t("some-help")}
                            </span>
                            <div className='flex items-center'>
                                <span className='text-3xl'>$</span>
                                <span className='mt-3 text-6xl font-bold'>
                                    25
                                </span>
                            </div>
                        </div>
                        <div className='justfy-center flex px-10 pb-10'>
                            <button
                                onClick={notify}
                                className='flex h-12 w-full items-center justify-center rounded-lg bg-pumpkin px-6 text-sm font-semibold uppercase text-white'
                            >
                                {t("donate-now")}!
                            </button>
                        </div>
                    </div>
                    <div className='  donationCard  donationCardPhone mt-8 flex h-80 w-72 flex-col justify-center rounded-lg bg-white text-darkpurple shadow-lg '>
                        <div className='flex flex-col items-center p-10 '>
                            <span className='text-center text-xl font-semibold'>
                                {t("big-help")}
                            </span>
                            <div className='flex items-center'>
                                <span className='text-3xl'>$</span>
                                <span className='mt-3 text-6xl font-bold'>
                                    50
                                </span>
                            </div>
                        </div>
                        <div className='justfy-center flex px-10 pb-10'>
                            <button
                                onClick={notify}
                                className='flex h-12 w-full items-center justify-center rounded-lg bg-pumpkin px-6 text-sm font-semibold uppercase text-white'
                            >
                                {t("donate-now")}!
                            </button>
                        </div>
                    </div>
                </div>
                <div className='mb-28 flex max-w-4xl flex-col items-center justify-self-center text-center xxs:gap-0 sm:gap-4'>
                    <div className='donationbrush brushphone htext h-12 font-bold text-purple xxs:text-xl xs:text-3xl sm:text-4xl'>
                        <h2>{t("why-donate")}?</h2>
                    </div>
                    <p className='ptexttab p-3 text-2xl leading-loose text-darkpurple'>
                        {t("motivation")}
                    </p>
                    <ToastContainer />
                </div>
            </div>
        </Layout>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, [
                "common",
                "header",
                "footer",
                "donation",
            ])),
            // Will be passed to the page component as props
        },
    };
}
