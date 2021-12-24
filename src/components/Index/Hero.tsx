const Hero = () => {
  return (
    <div className="py-12 mt-20 bg-gray-100 md:py-20">
      <div className="max-w-screen-xl px-6 py-12 mx-auto lg:px-8 xl:px-4">
        <div className="mb-6 text-center md:mb-8">
          <img
            src="/logo.svg"
            alt="ICES"
            className="w-48 mx-auto mb-4 transition duration-500 ease-in-out transform lg:mb-6 hover:scale-110 hover:-translate-y-1"
          />
          <h2 className="mb-2 text-3xl font-bold text-gray-800 md:text-4xl md:mb-4">
            <span className="text-pink-600">I</span>nternet{" "}
            <span className="text-orange-600">C</span>omputer{" "}
            <span className="text-blue-600">E</span>vent{" "}
            <span className="text-yellow-600">S</span>ystem
          </h2>
          <p className="flex flex-col items-center justify-center w-9/12 mx-auto mb-2 text-xl text-gray-600 xl:text-2xl md:flex-row">
            a storage and analysis service for canister&apos;s event logs on{" "}
            <img
              src="assets/images/dfinity.svg"
              alt="Dfinity"
              className="h-6 px-2 my-4"
            />
          </p>
          <p className="w-9/12 mx-auto text-lg text-gray-600 xl:text-xl">
            Let canister&apos;s interaction transactions are publicly
            accessible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
