import { Link } from "@inertiajs/react";
import logo from '../../images/logo.svg';

export default function Layout({ children }) {
  return (
    <>
      <header className="header">
        <div className="header__container container mx-auto">
          <div className="grid lg:flex items-center gap-[20px]">
            <img src={logo} className="header__logo" alt="" />
            <div className="header__nav">
              <nav className="poppins-regular header__nav hidden lg:flex flex-wrap align-center justify-center">
                <Link href="/">Services</Link>
                <Link href="/">About Us</Link>
                <Link href="/">Showcase</Link>
                <Link href="/">Contact Us</Link>
              </nav>
            </div>
          </div>
          <div className="hidden lg:flex align-center gap-[20px] ">
            <button className="btn btn-secondary text-white">1800 144 199</button>
            <button className="btn btn-primary text-white">Enquire Now</button>
          </div>
        </div>
      </header>
      <main>{children}</main>
    </>
  )
}