import React from "react";
import Header from "./Header";
import Headline from "./Headline";
import Icons from "./Icons";
import Cheatsheet from "./Cheatsheet";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <article className="container text-center py-5">
          <Headline />
          <Icons />
        </article>
        <article className="container text-center py-5">
          <Cheatsheet />
        </article>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
