import React from "react";

function Home(props) {
  return (
    <div id="home--container" alt="card">
      {props.projects.map((prj) => (
        <div key={prj.projectName} className="home--prj--card">
          <h2>{prj.projectName}</h2>
        </div>
      ))}
    </div>
  );
}

export default Home;
