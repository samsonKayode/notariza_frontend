import React from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import Footer from '../components/Footer';

function About() {
    return(
        <div>

            <Header />

            <div className="container about">
                
                <section className="aboutTitle">
                    <h3>OUR PURPOSE</h3>

                    <h2>Automating the process of notarizing documents</h2>
                </section>

                <section className="aboutIdentity">
                    <div className="aboutIdentityWords">
                        <h2 className="aboutSectionHeader">Who we are</h2>

                        <p className="aboutParagraph">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p> 
                        <p className="aboutParagraph">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. .</p>
                    </div>

                    <div className="aboutIdentityImage">
                        <span>
                            <Image
                                src="/quotes.png"
                                alt="Quote Icon"
                                width={60}
                                height={75}
                            />
                        </span>

                        <span>
                            <Image
                                src="/aboutLine.png"
                                alt="Line Icon"
                                width={290}
                                height={5}
                            />
                        </span>

                        <p className="aboutParagraph">“ We believe that teamwork is  at the heart of a great achievement. “</p>


                        <span>
                            <Image
                                src="/identityImage.png"
                                alt="Identity Image"
                                width={515}
                                height={345}
                            />
                        </span>
                    
                    </div>
                </section>

                <section className="aboutOffer">
                    <div className="aboutOfferHeading">
                        <h3 className="aboutSectionHeader">What we offer</h3>
                        <p className="aboutParagraph">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. .</p>
                    </div>

                    <div className="aboutOfferWork">
                        <div className="aboutOfferWorkImage"> 
                            <Image
                                src="/yellowHand.png"
                                alt="Hand Image"
                                width={490}
                                height={490}
                            />
                        </div>

                        <div className="aboutOfferWorkWords">
                            <h3 className="aboutSectionHeader">How it works?</h3>

                            <p className="aboutParagraph">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. .<br/>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. .</p>
                        </div>
                    </div>
                </section>

                <section className="aboutTeam">
                    <h3 className="aboutSectionHeader">Meet the Team</h3>

                    <div className="aboutTeamMembers">
                        <div className="aboutTeamMember">
                            <span>
                                <Image
                                    src="/aboutManOne.png"
                                    alt="About Image"
                                    width={330}
                                    height={340}
                                />
                            </span>

                            <h5>Marvin McKinney</h5>

                            <h4>Project Manager</h4>
                        </div>

                        <div className="aboutTeamMember">
                            <span>
                                <Image
                                    src="/aboutManTwo.png"
                                    alt="About Image"
                                    width={330}
                                    height={340}
                                />
                            </span>

                            <h5>Ronald Richards</h5>

                            <h4>Software Developer</h4>
                        </div>

                        <div className="aboutTeamMember">
                            <span>
                                <Image
                                    src="/aboutWoman.png"
                                    alt="About Image"
                                    width={330}
                                    height={340}
                                />
                            </span>

                            <h5>Annette Black</h5>

                            <h4>Team Leader</h4>
                        </div>

                        <div className="aboutTeamMember">
                            <span>
                                <Image
                                    src="/aboutManOne.png"
                                    alt="About Image"
                                    width={330}
                                    height={340}
                                />
                            </span>

                            <h5>Marvin McKinney</h5>

                            <h4>Project Manager</h4>
                        </div>

                        <div className="aboutTeamMember">
                            <span>
                                <Image
                                    src="/aboutManTwo.png"
                                    alt="About Image"
                                    width={330}
                                    height={340}
                                />
                            </span>

                            <h5>Ronald Richards</h5>

                            <h4>Software Developer</h4>
                        </div>

                        <div className="aboutTeamMember">
                            <span>
                                <Image
                                    src="/aboutWoman.png"
                                    alt="About Image"
                                    width={330}
                                    height={340}
                                />
                            </span>

                            <h5>Annette Black</h5>

                            <h4>Team Leader</h4>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="contact">
                        <h2 className="contactTitle">Do you have any questions?</h2>

                        <input type="email" placeholder="Enter Email Address" className="contactInput" /><br/>

                        <button className="contactBtn">Send</button>
                    </div>
                </section>

                <Footer />
                
            </div>
        </div>
    )
}

export default About;