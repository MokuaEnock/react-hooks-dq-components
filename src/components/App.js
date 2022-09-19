import React from "react";
import MainContent from "./MainContent";
import Logo from "./Logo";
import MenuLinks from "./MenuLinks";
import Search from "./Search";
import SideMenu from "./SideMenu";
import TopMenu from "./TopMenu";
import GenrePicker from "./GenrePicker";

function App() {
  return (
    <div className="app-container">

      <Logo />
      <Search />


      <GenrePicker />
      <MenuLinks />
      <TopMenu />
      <SideMenu />

      <MainContent />
    </div>
  );
}

export default App;
