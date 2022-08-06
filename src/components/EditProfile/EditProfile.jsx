import Link from "next/link";
import * as React from "react";

import Button from "../button";
import Input from "../layout/input";

export default function EditProfile() {
    // const [info, setInfo] = React.useState()
    //function handleInfo(){
    //alert("clicked")
    //}
    return (
        <div className='mt-4 flex flex-wrap justify-center  '>
            <div className=' w-3/4 '>
                <Input type='text' placeholder='Name' />
                <Input type='text' placeholder='Surname' />
                <Input
                    type='email'
                    placeholder='Your Collage or University email'
                />
                <Input type='password' placeholder='Password' />
                <Input type='password' placeholder='Confirm New Password' />
                <div className='flex h-48 items-stretch'>
                    <Input type='text' placeholder='Address' />
                </div>
            </div>
            <div className=' flex w-1/2 justify-center'>
                <Link href='/'>
                    <Button
                        buttonStyle='saveChanges'
                        type='button'
                        text='Save Changes'
                    />
                </Link>
            </div>
        </div>
    );
}
