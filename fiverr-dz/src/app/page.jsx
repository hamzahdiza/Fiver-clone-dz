"use client";
import Companies from "@/components/Home/Companies";
import Everything from "@/components/Home/Everything";
import FiverrBusiness from "@/components/Home/FiverrBusiness";
import HeroBanner from "@/components/Home/HeroBanner";
import JoinFiverr from "@/components/Home/JoinFiverr";
import PopularServices from "@/components/Home/PopularServices";
import Services from "@/components/Home/Services";
import AuthWrapper from "@/components/additional/authWrapper";
import { useStateProvider } from "@/context/StateContext";
import React from "react";

const Index = () => {
  const [{ showLoginModal, showSignupModal }] = useStateProvider();
  return (
    <div>
      <HeroBanner />
      <Companies />
      <PopularServices />
      <Everything />
      <Services />
      <FiverrBusiness />
      <JoinFiverr />

      {(showLoginModal || showSignupModal) && <AuthWrapper type={showLoginModal ? "login" : "signup"} />}
    </div>
  );
};

export default Index;
