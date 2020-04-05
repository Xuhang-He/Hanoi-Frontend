import React from 'react';
import './App.css';
import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";
import Channel from "./pages/channel/Channel";

function App() {
  return (
    <div className="App">
      <Header />
      <Channel />
      <Footer />
    </div>
  );
}

export default App;
