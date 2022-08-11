/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import * as React from "react";

import Layout from "@/components/layout/Layout";

export default function NotFoundPage() {
    return (
        <Layout>
            <main className='m-0 flex h-[600px] w-full overflow-clip bg-iceblue p-0 align-middle'>
                <div className='flex w-[70%] flex-col justify-center align-middle text-darkpurple'>
                    <div className='ml-10 text-left'>
                        <h2 className=' m-2 text-left text-4xl font-bold text-darkpurple'>
                            oops
                        </h2>
                        <h2 className='m-2 text-left font-Poppins text-8xl font-bold text-orange'>
                            404
                        </h2>
                        <p className='m-2 font-Poppins text-4xl font-bold'>
                            this is embarassing but...
                        </p>
                        <p className='m-2 font-Poppins text-2xl font-bold'>
                            we couldn&apos;t find the page you&apos;re looking
                            for
                        </p>
                        <Link href='/'>
                            <button className='m-2 mt-4 rounded-xl bg-purple py-2 px-4 text-lg font-bold text-white hover:bg-pumpkin'>
                                go to the homepage
                            </button>
                        </Link>
                    </div>
                </div>
                <div className='flex overflow-hidden '>
                    <img
                        className='object-cover'
                        src='https://68.media.tumblr.com/a366e8e94b3f3839134b7b22a403abe4/tumblr_oqts02PFVa1wn1p99o2_1280.gif'
                        alt='404'
                    />
                </div>
            </main>
        </Layout>
    );
}
