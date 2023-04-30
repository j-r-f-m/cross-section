import React from "react";
import CardPrj from "../../components/CardPrj";

function Home(props) {
  return (
    <div id="home--container" alt="card">
      {props.projects.map((prj) => (
        <div key={prj.name} className="home--prj--card">
          <h2>{prj.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default Home;
