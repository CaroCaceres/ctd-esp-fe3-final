import React, { useEffect } from "react";
import Card from "../Components/Card";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const favsDentists = JSON.parse(localStorage.getItem("favsDentists")) || [];

  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage ✅ */}
        {/* Deberan renderizar una Card por cada uno de ellos ✅ */}
        {favsDentists.map((user) => (
          <Card id={user.id} name={user.name} username={user.username} key={user.id} />
        ))}
      </div>
    </>
  );
};

export default Favs;
