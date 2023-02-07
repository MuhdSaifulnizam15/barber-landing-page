import { BsScissors } from 'react-icons/bs';
import { GiComb, GiRazor } from 'react-icons/gi';
import { TbMassage } from 'react-icons/tb';

const Services = () => {
  return (
    <section className="text-gray-600 body-font -mt-10" id="services">
      <div className="container px-5 py-10 mx-auto flex flex-wrap">
        <div className="flex flex-col text-center w-full mb-10">
          {/* <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
            ROOF PARTY POLAROID
          </h2> */}
          <h1 className="sm:text-3xl text-2xl dark:text-white font-medium title-font text-gray-900">
            Our Services
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border-2 rounded-lg border-gray-200 dark:border-white border-opacity-50 p-8 sm:flex-row flex-col">
              <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <BsScissors size="2em" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 dark:text-white text-lg title-font font-medium mb-3">
                  Men&apos;s Haircut
                </h2>
                <p className="leading-relaxed text-base dark:text-slate-400">
                  Full style and cuts to suit your face shape, professionally
                  styled.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border-2 rounded-lg border-gray-200 dark:border-white border-opacity-50 p-8 sm:flex-row flex-col">
              <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <GiRazor size="2em" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 dark:text-white text-lg title-font font-medium mb-3">
                  Beard Trim
                </h2>
                <p className="leading-relaxed text-base dark:text-slate-400">
                  Keep your beard in great shape with a bit of extra attention
                  with clippers.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border-2 rounded-lg border-gray-200 dark:border-white border-opacity-50 p-8 sm:flex-row flex-col">
              <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <GiComb size="2em" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 dark:text-white text-lg title-font font-medium mb-3">
                  Styling adn Treatment
                </h2>
                <p className="leading-relaxed text-base dark:text-slate-400">
                  Get full treatment by our professional stylist to keep your
                  hair healty.
                </p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border-2 rounded-lg border-gray-200 dark:border-white border-opacity-50 p-8 sm:flex-row flex-col">
              <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <TbMassage size="2em" />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 dark:text-white text-lg title-font font-medium mb-3">
                  Wash and Massage
                </h2>
                <p className="leading-relaxed text-base dark:text-slate-400">
                  Nourish your head and scalp with a full wash using our
                  exclusive product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
