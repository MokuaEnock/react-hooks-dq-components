import React from "react";
import AlbumCard from "./AlbumCard";
import AlbumList from "./AlbumList";
import TopMenu from "./TopMenu";
import GenrePicker from "./GenrePicker";
function MainContent() {
  return (
    <main>
      <TopMenu />
      <GenrePicker />
      <AlbumList />
    </main>
  );
}

export default MainContent;
