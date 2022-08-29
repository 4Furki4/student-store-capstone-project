import { useAuth } from "context/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import React from "react";

import rifik from "../../../public/images/rifik.png";

function Sidebar({ pageName }) {
    const { t } = useTranslation("profile");
    let sidebarClasses = "pb-9 xs:pb-2 sm:pb-4";
    const { user } = useAuth();

    return (
        <aside
            className='flex h-screen flex-col justify-start bg-white p-6 text-center align-middle shadow-lg
            xs:h-[150px] xs:flex-row xs:justify-between
            sm:h-[200px] sm:w-full sm:flex-row sm:justify-center sm:gap-10
            sm:align-middle md:h-screen md:w-1/3 md:flex-col md:justify-start lg:w-1/5'
        >
            <div className='mb-5 flex w-[190px] self-center overflow-hidden rounded-full border-[5px] border-lightpurple bg-red-300 xs:w-[50px] sm:flex sm:w-[130px] md:flex lg:flex'>
                <Image src={rifik} alt='rifik' layout='intrinsic' />
            </div>
            <div className='flex flex-col justify-evenly xs:mb-2 xs:ml-2 xs:text-left sm:mb-5 sm:text-center'>
                <p className='mt-2 text-xl font-semibold text-purple xs:text-sm sm:mt-0'>
                    {user ? user.displayName : "Rifik Haspolat"}
                </p>
                {user ? user.Image : "Rifik Haspolat"}
                <p className='text-sm text-purple xs:text-sm'>
                    <span className='font-semibold'>E-mail: </span>
                    {user ? user.email : "YourEmail@gmail.com"}
                </p>
                <p className='text-sm text-purple'>
                    <span className='font-semibold'>Location:</span>
                    Istanbul/Turkey
                </p>
            </div>
            <hr className='m-10 xs:hidden sm:hidden'></hr>
            <div className='flex flex-col justify-center' id='sidebarWrapper'>
                <div
                    className={
                        pageName == "edit-profile"
                            ? sidebarClasses + " activeLink"
                            : sidebarClasses
                    }
                >
                    <Link href='/edit-profile'>
                        <a className='sm:text-md m-2 font-bold text-purple hover:cursor-pointer xs:text-sm md:text-xl lg:text-2xl'>
                            {t("edit-Profile")}
                        </a>
                    </Link>
                </div>
                <div
                    className={
                        pageName == "listings"
                            ? sidebarClasses + " activeLink"
                            : sidebarClasses
                    }
                >
                    <Link href='/listings'>
                        <a className='sm:text-md m-2 font-bold text-purple hover:cursor-pointer xs:text-sm md:text-xl lg:text-2xl'>
                            {t("my-listings")}
                        </a>
                    </Link>
                </div>
                {/* <div
                    className={
                        pageName == "orders"
                            ? sidebarClasses + " activeLink"
                            : sidebarClasses
                    }
                >
                    <Link href='/orders'>
                        <a className='sm:text-md m-2 font-bold text-purple hover:cursor-pointer xs:text-sm md:text-xl lg:text-2xl'>
                            {t("my-orders")}
                        </a>
                    </Link>
                </div> */}
            </div>
        </aside>
    );
}

export default Sidebar;
