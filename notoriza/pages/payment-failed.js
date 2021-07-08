import React from 'react';
import Image from 'next/image'
import Link from 'next/link'


function PaymentUnsuccessful () {
    return (
        <div className="accountCreated">
            <div className="accountCreatedImage">
                <Image
                    src="/paymentFailed.png"
                    alt="Failed Icon"
                    width={75}
                    height={75}        
                />
            </div>
            <h3 className="accountCreatedTitle"> Your Payment was unsuccessful</h3>

            <div className="accountCreatedImage">
                <Image
                    src="/wallet.png"
                    alt="Wallet Image"
                    width={310}
                    height={310}        
                />
            </div>

            <p className="accountCreatedDesc">You can try to pay again</p>

            <Link href="/login">
                <button className="accountCreatedBtn">View here</button>
            </Link>
        </div>
    )
}

export default PaymentUnsuccessful;