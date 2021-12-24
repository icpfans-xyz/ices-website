import { ReactNode } from "react";

interface IChildren {
  children: ReactNode;
}

export default function Container({ children }: IChildren) {
  return (
    <div className="container max-w-screen-xl px-10 mx-auto">{children}</div>
  );
}
