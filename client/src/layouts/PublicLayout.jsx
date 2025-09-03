import React from "react";
import { Outlet } from "react-router-dom";
import Header2 from "../components/mvpblocks/header-2";
import FooterSection from "@/components/footer";
import SmoothFollower from "@/public/components/Cursor";

const PublicLayout = () => {
  return (
    <>
      <SmoothFollower />
      <Header2 />
      <main className="flex-grow">
        <Outlet /> 
      </main>
      <section className="bg-bottom">
        <FooterSection />
      </section>
    </>
  );
};

export default PublicLayout;
