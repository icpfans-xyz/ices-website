import Features from "../components/Index/Features";
import Hero from "../components/Index/Hero";
import Partners from "../components/Index/Partners";
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

      <Partners />
    </Main>
  );
};

export default Index;
