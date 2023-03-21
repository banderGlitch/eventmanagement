import Link from 'next/link';
import Image from 'next/image';
import Router from "next/router";

export const Header = () => {
    return (
        <header>
            <div>
                <div className="topNav">
                    <Image alt="logo" src={'/images/logo_black.png'} width={50} height={50} onClick={() => Router.push('/')} />
                    <nav>
                        <ul>
                            <li>
                                <Link href="/" passHref>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/events" passHref>
                                    Events
                                </Link>
                            </li>
                            <li>
                                <Link href="/about-us" passHref>
                                    About us
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <p className="title"> Sed ut perspiciatis unde omnis</p>
            </div>
        </header>
    );
};