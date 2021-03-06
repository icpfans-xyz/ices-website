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
    description: "All code is open source, MIT protocol, feel free to use",
    icon: Github,
  },
  {
    title: "Free To Use",
    description: "Don't worry about price, it's Free",
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
    title: "GraphQL/Restful API",
    description: "More customized and fast query from off-chain data",
    icon: Api,
  },
  {
    title: "Explorer UI",
    description: "ICES explorer can easily query canister related event logs ",
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
        <p className="w-10/12 mx-auto text-sm text-gray-700">
          {props.description}
        </p>
      </div>
    );
  };

  return (
    <div className="px-6 py-16 text-gray-600 bg-white lg:px-8 lg:py-20 xl:pb-32 xl:pt-24">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-2xl font-medium text-gray-800 sm:text-3xl md:text-4xl">
          Features
        </h2>
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
