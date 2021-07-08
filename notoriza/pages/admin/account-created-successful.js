import React from 'react';
import Image from 'next/image'
import Link from 'next/link'


function AccountCreated () {
    return (
        <div className="accountCreated">
            <h3 className="accountCreatedTitle">Account created succesfully</h3>

            <div className="accountCreatedImage">
                <Image
                    src="/accountImage.png"
                    alt="Account created succesful Image"
                    width={290}
                    height={209}        
                />
            </div>

            <p className="accountCreatedDesc">Proceed to login to start notarizing documents</p>

            <Link href="/admin/login">
                <button className="accountCreatedBtn">Proceed to Login</button>
            </Link>
        </div>
    )
}

export default AccountCreated;