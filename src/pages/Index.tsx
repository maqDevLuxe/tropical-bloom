import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Partners from "@/components/landing/Partners";
import OriginStories from "@/components/landing/OriginStories";
import ColdChain from "@/components/landing/ColdChain";
import GlobalReach from "@/components/landing/GlobalReach";
import Seasonality from "@/components/landing/Seasonality";
import QualityGrading from "@/components/landing/QualityGrading";
import OrchardImage from "@/components/landing/OrchardImage";
import ExportCounters from "@/components/landing/ExportCounters";
import NutritionBlog from "@/components/landing/NutritionBlog";
import Documentation from "@/components/landing/Documentation";
import BuyerReviews from "@/components/landing/BuyerReviews";
import FooterCTA from "@/components/landing/FooterCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Partners />
      <OriginStories />
      <ColdChain />
      <GlobalReach />
      <Seasonality />
      <QualityGrading />
      <OrchardImage />
      <ExportCounters />
      <NutritionBlog />
      <Documentation />
      <BuyerReviews />
      <FooterCTA />
    </div>
  );
};

export default Index;
