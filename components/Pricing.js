const Pricing = () => {
  return (
    <section className="text-gray-600 body-font" id="priceList">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">
            Price List
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Our Highly skilled barbers use quality straight razors and the best equipment to achieve the best haircut.
          </p>
        </div>
        <div className="lg:w-2/3 w-full mx-auto overflow-auto">
          <table className="table-auto w-full lg:w-half text-left whitespace-no-wrap">
            <thead>
              <tr>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
                  Services
                </th>
                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3">Adult Haircut</td>
                <td className="px-4 py-3">RM 15</td>
              </tr>
              <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3">Kids Haircut (Under 12)</td>
                <td className="border-t-2 border-gray-200 px-4 py-3">RM 8</td>
              </tr>
              <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3">Head Massage</td>
                <td className="border-t-2 border-gray-200 px-4 py-3">RM 10</td>
              </tr>
              <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3">Gold Mask Facial</td>
                <td className="border-t-2 border-gray-200 px-4 py-3">RM 15</td>
              </tr>
              <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3">Black Mask</td>
                <td className="border-t-2 border-gray-200 px-4 py-3">RM 10</td>
              </tr>
              <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3">Aloevera Mask</td>
                <td className="border-t-2 border-gray-200 px-4 py-3">RM 20</td>
              </tr>
              <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3">Wash and Style</td>
                <td className="border-t-2 border-gray-200 px-4 py-3">RM 10</td>
              </tr>
              <tr>
                <td className="border-t-2 border-gray-200 px-4 py-3">Shave and Trim</td>
                <td className="border-t-2 border-gray-200 px-4 py-3">RM 10</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
