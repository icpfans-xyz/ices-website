const Partnets = () => {
  type IPartnerItemProps = {
    id: string;
    name: string;
  };

  const PartnerList = [
    {
      id: "dmail",
      name: "Dmail",
    },
    {
      id: "deland",
      name: "Deland Labs",
    },
    {
      id: "ccc",
      name: "C3 Protocol",
    },
    {
      id: "icname",
      name: "ICNaming",
    },
    {
      id: "icpmeet",
      name: "ICPMeet",
    },
    {
      id: "astrome",
      name: "ME",
    },
    {
      id: "ibridge",
      name: "iBridge",
    },
    {
      id: "dfinitynft",
      name: "DfinityNFT",
    },
    {
      id: "dfinity-sz",
      name: "DfinitySZ",
    },
  ];

  const PartnerItem = ({ id, name }: IPartnerItemProps) => {
    return (
      <a
        href={`https://icp123.xyz/${id}`}
        target="__blank"
        className="flex flex-row items-center p-4 space-x-6 bg-white border border-gray-200 rounded-lg lg:p-8"
      >
        <span className="w-12 h-12 text-gray-600">
          <img
            src={`/assets/images/${id}.png`}
            className="w-12 h-12 rounded-lg"
            alt={name}
          />
        </span>
        <div className="self-center flex-1">
          <p className="text-2xl">{name}</p>
        </div>
        <span className="inline-block w-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </span>
      </a>
    );
  };

  return (
    <div className="px-6 pt-12 pb-20 text-gray-600 bg-gray-50 lg:px-8">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-2xl font-medium text-center text-gray-700 sm:text-3xl md:text-4xl">
          Who use ICES
        </h2>
        <p className="mt-2 text-lg text-center text-gray-600 lg:text-xl">
          Thank you to these early ICES supporters for joining us in this
          long-term endeavor.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto mt-12 space-y-12 md:grid-cols-2 md:grid xl:grid-cols-3 md:gap-12 md:space-y-0">
        {PartnerList.map((item) => (
          <PartnerItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Partnets;
