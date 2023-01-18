import Image from 'next/image';

import image1 from '../public/assets/image1.jpg'
import image2 from '../public/assets/image2.jpg'
import image3 from '../public/assets/image3.jpg'
import image4 from '../public/assets/image4.jpg'
import image5 from '../public/assets/image5.jpg'
import image6 from '../public/assets/image6.jpg'

const Gallery = () => {
  return (
    <section className="text-gray-600 body-font" id="gallery">
      <div className="container px-5 py-10 mx-auto flex flex-wrap">
        <div className="flex w-full mb-10 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            Hair Style Collections
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Looks that can make you different
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={image1}
                width={500}
                height={300}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={image2}
                width={501}
                height={301}
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={image3}
                width={600}
                height={360}
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <Image
                alt="gallery"
                className="w-full h-full object-cover object-center block"
                src={image4}
                width={601}
                height={361}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={image5}
                width={502}
                height={302}
              />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image
                alt="gallery"
                className="w-full object-cover h-full object-center block"
                src={image6}
                width={503}
                height={303}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
