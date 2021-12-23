const Hero = () => {
  return (
    <div className="py-12 bg-gray-100 md:py-24">
      <div className="max-w-screen-xl px-6 mx-auto bg-gray-100 lg:px-8 xl:px-4">
        <div className="mb-6 text-center md:mb-8">
          <img
            src="/logo.svg"
            alt="ICES"
            className="w-48 mx-auto mb-4 lg:mb-6"
          />
          <h2 className="mb-2 text-3xl font-bold text-gray-800 md:text-4xl md:mb-4">
            <span className="text-pink-600">I</span>nternet{" "}
            <span className="text-orange-600">C</span>omputer{" "}
            <span className="text-blue-600">E</span>vent{" "}
            <span className="text-yellow-600">S</span>ystem
          </h2>
          <p className="flex items-center justify-center w-9/12 mx-auto mb-2 text-xl text-gray-600 xl:text-2xl">
            a storage and analysis service for canister&apos;s event logs on{" "}
            <img
              src="assets/images/dfinity.svg"
              alt="Dfinity"
              className="h-4 px-2"
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
