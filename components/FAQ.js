const FAQ = () => {
  return (
    <section className="text-gray-700 my-4">
      <div className="container px-5 py-5 mx-auto">
        <div className="text-center mb-4">
          <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4 dark:text-white">
            Frequently Asked Question
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto dark:text-slate-400">
            The most common questions about how our business works and what can
            do for you.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div className="w-full lg:w-1/2 px-4 py-2">
            <details className="mb-4">
              <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4 mb-2">
                Do we offer styling advice?
              </summary>

              <span className="dark:text-white">
                Yes we offer styling advice and we have an array of product lines to accommodate all races.
              </span>
            </details>
            <details className="mb-4">
              <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4 mb-2">
                Can we do a haircut for you if you bring a picture of another one in that you would like your hair to look like?
              </summary>

              <span className="dark:text-white">
                Yes we are great at mimicking pictures of haircuts bring a picture, or your smartphone with a picture on it and we will do our best to match you up.
              </span>
            </details>
            <details className="mb-4">
              <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4 mb-2">
                Do we service children?
              </summary>

              <span className="dark:text-white">
                Absolutely, as young as you want to bring them as long as they are willing!
              </span>
            </details>
          </div>
          <div className="w-full lg:w-1/2 px-4 py-2">
            <details className="mb-4">
              <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4 mb-2">
                Can we fade?
              </summary>

              <span className="dark:text-white">
                Yes we can and very well, all types of fades from high and tights to blowouts!
              </span>
            </details>
            <details className="mb-4">
              <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4 mb-2">
                Can I book an appointment to the barber of my choice?
              </summary>

              <span className="dark:text-white">
                Of course you can. You can book easily online or by calling the barber shop. You can find the shop details here.
              </span>
            </details>
            <details className="mb-4">
              <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4 mb-2">
                Do I need to book an appointment in advance or can I just walk-in?
              </summary>

              <span className="dark:text-white">
                You are always welcome to just walk-in to check if we have free times but we recommend booking in advance especially after 3pm when we are usually pretty busy. Especially if you want to have a longer service we recommend to book an appointment so that you can come when it suits you best. So welcome to pop by any time!
              </span>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
