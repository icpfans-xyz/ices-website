import { ReactNode } from "react";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <main className="font-medium text-gray-700 bg-white">
    {props.meta}

    <Nav />

    {props.children}

    <Footer />
  </main>
);

export { Main };
