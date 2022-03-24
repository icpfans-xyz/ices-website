import { Like } from "@icon-park/react";

const Footer = () => {
  return (
    <footer className="py-12 text-gray-700 bg-white xl:py-12">
      <div className="flex flex-col items-center max-w-screen-xl mx-auto">
        <div className="flex items-center text-md">
          <a href="https://dfinity.org" target="_blank" rel="noreferrer">
            <img
              src="/assets/images/ic-badge-powered-by_default-dark-text.png"
              className="h-8 px-2"
              alt="powered by Dfinity"
            />
          </a>
        </div>

        <div className="flex items-center mt-8 text-sm text-gray-600">
          Made by
          <span className="px-2">
            <Like theme="filled" size="20" fill="#F15A24" strokeWidth={3} />
          </span>
          with ICFans Labs
        </div>
      </div>
    </footer>
  );
};

export default Footer;
