import React from 'react';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Posts from "./components/Posts/Posts";
import s from "./App.module.css"

function App() {
  return (
    <div className={s.app}>
        <Header />
        <div className={s.content}>
            <Posts />
        </div>
        <Footer />
    </div>
  );
}

export default App;
