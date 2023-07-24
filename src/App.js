import logo from "./logo.svg";
import "./App.css";
import AppHeader from "./components/AppHeader";
import TattooItem from "./components/TattooItem";
import TattooPost from "./components/TattooPost";
import tattoos from "./components/data/tatoos";
import { useState } from "react";
import AppSearch from "./components/AppSearch";

export default function App() {
  const [selectedTattoo, setSelectedTattoo] = useState(null);
  const [searchText, setSearchText] = useState("");

  function onTattooOpen(theTattoo) {
    setSelectedTattoo(theTattoo);
  }

  function onTattooClose() {
    setSelectedTattoo(null);
  }

  let tattooPost = null;
  if (!!selectedTattoo) {
    tattooPost = (
      <TattooPost tattoo={selectedTattoo} onBgClick={onTattooClose} />
    );
  }

  const tattooElements = tattoos
    .filter((tattoo) => {
      return tattoo.title.includes(searchText);
    })
    .map((tattoo, index) => {
      return (
        <TattooItem key={index} tattoo={tattoo} onTattooClick={onTattooOpen} />
      );
    });

  return (
    <div>
      <AppHeader />
      <section className="app-section">
        <div className="app-container">
          <AppSearch value={searchText} onValue={setSearchText}></AppSearch>
          <div className="app-grid">{tattooElements}</div>
          {tattooPost}
        </div>
      </section>
    </div>
  );
}
