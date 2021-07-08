import React from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import Link from 'next/link';

function ForgotPassword() {
    return (
        <div>
            <Header />

            <div className="forgotPassword">
                <section className="forgotPasswordWords">
                    <div className="back">
                            <div className="backIcon">
                                <Image
                                    src="/backButton.png"
                                    alt="Back"
                                    width={14}
                                    height={9}
                                />
                            </div>
                            <Link href="/login">
                                Back
                            </Link>
                            
                    </div>

                    <h1>Forgot your password?</h1>

                    <p>Enter your email down below to receive instructions on how to reset your password.</p>

                    <form action="" className="forgotPasswordForm">
                        <label htmlFor="email" className="loginInputLabel">Email</label>
                        <input id="email" name="email" type="email" className="forgotPasswordInput" placeholder="Enter email address" />

                        <button className="forgotPasswordSubmit">Send</button>
                    </form>
                </section>

                <section className="forgotPasswordImage">
                    <Image
                        src="/forgotPassword.png"
                        alt="Forgot Password"
                        width={619}
                        height={459}
                    />
                </section>
            </div>
        </div>
    )
}
export default ForgotPassword;