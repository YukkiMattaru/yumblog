import React from 'react';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import s from "./App.module.css"
import PostsContainer from "./components/Posts/PostsContainer";

function App() {
  return (
    <div className={s.app}>
        <Header />
        <div className={s.content}>
            <PostsContainer />
        </div>
        <Footer />
    </div>
  );
}

export default App;
