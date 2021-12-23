import Features from "../components/Index/Features";
import Hero from "../components/Index/Hero";
import { Meta } from "../layout/Meta";
import { Main } from "../templates/Main";
import { AppConfig } from "../utils/AppConfig";

const Index = () => {
  return (
    <Main
      meta={
        <Meta title={AppConfig.site_name} description={AppConfig.description} />
      }
    >
      <Hero />

      <Features />
    </Main>
  );
};

export default Index;
