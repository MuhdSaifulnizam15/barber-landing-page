import Image from 'next/image';
import Link from 'next/link';

import logo from '../public/assets/logo.png';

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="" className="flex title-font font-medium items-center text-gray-900 dark:text-white mb-4 md:mb-0">
          <Image 
            className="object-cover object-center rounded"
            alt="Rolex Barbershop Logo"
            src={logo}
            width={40}
            height={40}
          />
          <span className="ml-3 text-xl">Rolex Barbershop</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base dark:text-white justify-center">
          <a className="mr-5 hover:text-slate-400 mb-2" href="#services">Services</a>
          <a className="mr-5 hover:text-slate-400 mb-2" href="#gallery">Gallery</a>
          <a className="mr-5 hover:text-slate-400 mb-2" href="#priceList">Price List</a>
          <a className="mr-5 hover:text-slate-400 mb-2" href="#testimonial">Testimonials</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
