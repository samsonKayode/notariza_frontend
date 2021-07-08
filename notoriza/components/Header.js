import React, {useState} from 'react';
import Image from 'next/image'
import Link from 'next/link'


function Header () {
    const [open, setOpen] = useState(false);

    const  toggleMenu = () => {
      setOpen(!open);
    };

    return (
        <header className="container header">
            <div className="headerLogo">
            <Image
                src="/logo.png"
                alt="Logo Icon"
                width={143}
                height={37}
            />
            </div>
            

            <div className="hamburger" onClick={toggleMenu}>
                <Image
                    src="/hamburger.png"
                    alt="Hamburger Icon"
                    width={20}
                    height={20}  
                />
            </div>
            
            <nav  className={`headerNav ${open ? "show" : ""}`}>
                <ul className="pageNav">
                    <li><a href="#home" className="headerNavItem">Home</a></li>
                    <li><a href="#features" className="headerNavItem">Features</a></li>
                    <li>
                        <Link href="/about">
                        <a className="headerNavItem">About Us</a>
                        </Link>
                    </li>
                </ul>

                <div className="headerBtn">
                    <Link href="/login">
                        <a className="login">Login</a>
                    </Link>
                    
                    <Link href="/register">
                    <button className="clearBtn">Create an account</button>
                    </Link>
                </div>
            </nav>
                
        </header>
    )
}
export default Header