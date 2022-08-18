/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import * as React from "react";

import Layout from "@/components/layout/Layout";

export default function NotFoundPage() {
    const { t } = useTranslation("404");
    return (
        <Layout>
            <main className='m-0 flex w-full overflow-clip bg-iceblue p-0 align-middle xxs:flex-col xs:flex-col sm:flex-col md:flex-col lg:h-[600px] lg:flex-row'>
                <div className='flex flex-col justify-center align-middle text-darkpurple xs:w-full sm:w-full md:w-full lg:w-[70%]'>
                    <div className='xxs:text-center xs:text-center sm:text-center md:text-center lg:ml-10 lg:text-left'>
                        <h2 className=' m-2  text-4xl font-bold text-darkpurple'>
                            oops
                        </h2>
                        <h2 className='m-2  font-Poppins text-8xl font-bold text-orange'>
                            404
                        </h2>
                        <p className='m-2 font-Poppins text-4xl font-bold'>
                            {t("embarassing")}
                        </p>
                        <p className='m-2 font-Poppins text-2xl font-bold'>
                            {t("find")}
                        </p>
                        <Link href='/'>
                            <button className='m-2 mt-4 rounded-xl bg-purple py-2 px-4 text-lg font-bold text-white hover:bg-pumpkin'>
                                {t("homepage")}
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='overflow-hidden xxs:hidden xs:hidden sm:hidden md:hidden lg:flex '>
                    <img
                        className='object-cover'
                        src='https://68.media.tumblr.com/a366e8e94b3f3839134b7b22a403abe4/tumblr_oqts02PFVa1wn1p99o2_1280.gif'
                        alt='404'
                    />
                </div>
                <img
                    src='https://ichef.bbci.co.uk/news/976/cpsprodpb/F1F2/production/_118283916_b19c5a1f-162b-410b-8169-f58f0d153752.jpg'
                    alt='girl watching the house burn'
                    className='h-[300px] w-full object-cover xs:block  sm:block md:block lg:hidden'
                />
            </main>
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
                "404",
            ])),
            // Will be passed to the page component as props
        },
    };
}
