import Companies from "@/components/Home/Companies";
import Everything from "@/components/Home/Everything";
import FiverrBusiness from "@/components/Home/FiverrBusiness";
import HeroBanner from "@/components/Home/HeroBanner";
import JoinFiverr from "@/components/Home/JoinFiverr";
import PopularServices from "@/components/Home/PopularServices";
import Services from "@/components/Home/Services";
import React from "react";

const Index = () => {
  return (
    <div>
      <HeroBanner />
      <Companies />
      <PopularServices />
      <Everything />
      <Services />
      <FiverrBusiness />
      <JoinFiverr />
    </div>
  );
};

export default Index;
