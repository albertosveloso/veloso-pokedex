import React from "react";
import Main from "../template/Main";
import principal from "../../assets/imgs/principal.png";

export default props => (
  <Main
    icon="home"
    title="Home"
    subtitle="
  Welcome to Pokédex"
  >
    <p className="mb-0 principal-msg">Use Pokédex and expand your knowledge</p>
    <div className="principal">
      <img className="img-fluid" src={principal} alt="Picachu" />
    </div>
  </Main>
);
