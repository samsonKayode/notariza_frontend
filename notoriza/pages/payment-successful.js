import React from 'react';
import Image from 'next/image'
import Link from 'next/link'


function PaymentSuccessful () {
    return (
        <div className="accountCreated">
            <div className="accountCreatedImage">
                <Image
                    src="/done.png"
                    alt="Done Icon"
                    width={75}
                    height={75}        
                />
            </div>
            <h3 className="accountCreatedTitle"> Your Payment is Successful</h3>

            <div className="accountCreatedImage">
                <Image
                    src="/wallet.png"
                    alt="Wallet Image"
                    width={310}
                    height={310}        
                />
            </div>

            <p className="accountCreatedDesc">You can view your notarize document when you click on the button below</p>

            <Link href="/login">
                <button className="accountCreatedBtn">View here</button>
            </Link>
        </div>
    )
}

export default PaymentSuccessful;