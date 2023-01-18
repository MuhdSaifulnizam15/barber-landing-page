import Image from 'next/image';

import image7 from '../public/assets/image7.jpg';

const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Your Friendly
            <br className="hidden lg:inline-block" />
            Neighbourhood Barbershop
          </h1>
          <p className="mb-8 leading-relaxed">
            BUSINESS HOUR <br />
            11 AM – 10 PM <br />
            FRIDAYS 3 PM – 10 PM <br />
            OPEN EVERYDAY
          </p>
          {/* <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button>
          </div> */}
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded"
            alt="hero"
            src={image7}
            width={720}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
