import React from "react";

type Props = {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: Props) => (
  <div className="defaultLayout">
    { children }
  </div>
);

export default DefaultLayout;
