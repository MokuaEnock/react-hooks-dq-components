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
      <SideMenu />

      {/* <TopMenu></TopMenu> */}
      {/* <GenrePicker></GenrePicker> */}
      <MainContent></MainContent>
    </div>
  );
}

export default App;

/*
      <SideMenu />
 <TopMenu />
      <Search />
      <GenrePicker />

      <MenuLinks />
      <MainContent />
      <Logo />

*/
