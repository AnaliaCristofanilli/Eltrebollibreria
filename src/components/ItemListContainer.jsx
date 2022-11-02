import React from "react";

export default function ItemListContainer({ greeting, contenedor }) {
  return (
    <div>
      <h2 className={contenedor}>{greeting}</h2>
    </div>
  );
}
