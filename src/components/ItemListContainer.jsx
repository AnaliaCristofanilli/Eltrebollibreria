import React from "react";

export default function ItemListContainer   ({Greeting,Contenedor}) {
  return (

    <div>
        <h2  className={Contenedor}>{Greeting}
        </h2>
    </div>
  )
}
