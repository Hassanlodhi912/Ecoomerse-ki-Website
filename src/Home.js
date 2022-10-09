import Feature from "./components/Feature";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Trusted from "./components/Trusted";

const Home = () => {
  const data = {
    name: "Shop By Voice",
  };

  return (
    <>
      <HeroSection myData={data} />
      <Feature/>
      <Services />
      <Trusted />
      
    </>
  );
};

export default Home;
