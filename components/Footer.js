import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center py-4">
      <div className="max-w-screen-xl px-4 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          <div className="px-5 py-2">
            <a
              href="#"
              className="text-base dark:text-white leading-6 text-gray-500 hover:text-slate-400"
            >
              About
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#"
              className="text-base dark:text-white leading-6 text-gray-500 hover:text-slate-400"
            >
              Services
            </a>
          </div>
          <div className="px-5 py-2">
            <a
              href="#"
              className="text-base dark:text-white leading-6 text-gray-500 hover:text-slate-400"
            >
              Contact Us
            </a>
          </div>
        </nav>
        <div className="flex justify-center mt-8 space-x-6">
          <a href="#" className="text-gray-400 dark:text-white hover:text-slate-400">
            <span className="sr-only">Facebook</span>
            <BsFacebook size="1.5em" />
          </a>
          <a href="#" className="text-gray-400 dark:text-white hover:text-slate-400">
            <span className="sr-only">Instagram</span>
            <BsInstagram size="1.5em" />
          </a>
          <a href="#" className="text-gray-400 dark:text-white hover:text-slate-400">
            <span className="sr-only">WhatsApp</span>
            <BsWhatsapp size="1.5em" />
          </a>
        </div>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2023 Rolex Barbershop. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
