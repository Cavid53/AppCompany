import React from "react";
import "../../assets/styles/search.scss";

const AppSearch = () => {
  return (
    <div className="app-search">
      <span>Axtarış</span>
      <input className="fullNameInput" type="text" placeholder="Ad, Soyad" />
      <input className="structureInput" type="text" placeholder="Struktur" />
      <input className="roleInput" type="text" placeholder="Vəzifə" />
      <button className="search-button">Axtar</button>
    </div>
  );
};

export default AppSearch;
