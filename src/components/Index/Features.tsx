import {
  Analysis,
  CloudStorage,
  SmilingFace,
  Api,
  Github,
  Install,
} from "@icon-park/react";

type IFeatureItemProps = {
  title: string;
  description: string;
  icon: any;
};

const FeatureData = [
  {
    title: "Open Source",
    description:
      "All code is open source, follow the MIT protocol, feel free to use",
    icon: Github,
  },
  {
    title: "Free To Use",
    description:
      "We will build our product based on ICES, part of the revenue generated will be donated to ICES",
    icon: SmilingFace,
  },
  {
    title: "Simple Integration",
    description: "We provide motoko, rust SDK to integrate to your canister",
    icon: Install,
  },
  {
    title: "Permanent Data Storage",
    description: "All storage on the chain, storage automatic expansion",
    icon: CloudStorage,
  },
  {
    title: "Graph/Restful API Query",
    description:
      "More customized and fast query by synchronizing canister's data to database",
    icon: Api,
  },
  {
    title: "Dashboard",
    description:
      "Public dashboard can easily query canister related event records ",
    icon: Analysis,
  },
];

const Icon = (props: any) => {
  const TheIcon = props.icon;
  return <TheIcon {...props} theme="outline" size="60" strokeWidth={3} />;
};

const Features = () => {
  const FeatureItem = (props: IFeatureItemProps) => {
    return (
      <div className="text-center">
        <div className="flex justify-center w-12 mx-auto mb-4 text-blue-600">
          <Icon icon={props.icon} />
        </div>
        <h3 className="mb-2 text-xl font-semibold text-gray-800">
          {props.title}
        </h3>
        <p className="w-10/12 mx-auto text-gray-600 text-md">
          {props.description}
        </p>
      </div>
    );
  };

  return (
    <div className="px-6 py-16 text-gray-600 bg-white lg:px-8 lg:py-20 xl:pb-32 xl:pt-24">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-2xl font-medium text-gray-800 sm:text-3xl md:text-4xl">
          <span className="text-yellow-600">Amazing</span> Features
        </h2>
        <p className="flex flex-col items-center justify-center mt-2 text-lg leading-8 text-gray-600 lg:text-xl md:flex-row">
          We are committed to building the{" "}
          <span className="px-2 text-orange-600">BEST</span>Event Storage &
          Analysis service on{" "}
          <img
            src="assets/images/dfinity.svg"
            alt="Dfinity"
            className="h-4 px-2 my-4"
          />
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto mt-12 space-y-12 md:grid md:grid-cols-2 xl:grid-cols-3 md:gap-12 xl:gap-y-20 lg:mt-20 md:space-y-0">
        {FeatureData.map((item) => (
          <FeatureItem {...item} key={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Features;
