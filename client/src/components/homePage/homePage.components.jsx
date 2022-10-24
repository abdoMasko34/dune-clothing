import React from "react";
import Dirctory from "./dirctory/dirctory.component";
import { HomePageContainer, HomeMenu } from "./home.style";

const HomePage = () => (
  <HomePageContainer>
    <HomeMenu>
      <Dirctory />
    </HomeMenu>
  </HomePageContainer>
);

export default HomePage;
