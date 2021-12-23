import { Like } from "@icon-park/react";

const Footer = () => {
  return (
    <footer className="py-12 text-gray-700 bg-white xl:pb-24">
      <div className="flex flex-col items-center max-w-screen-xl mx-auto mt-16">
        <div className="flex items-center mt-4 text-md">
          Made by{" "}
          <span className="px-2">
            <Like theme="filled" size="24" fill="#F15A24" strokeWidth={3} />
          </span>
          with
          <a href="https://icp123.xyz" target="_blank" rel="noreferrer">
            <img
              src="/assets/images/icp123.png"
              className="h-5 px-2"
              alt="ICP123.xyz"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
