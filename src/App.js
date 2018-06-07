import React from "react";
import Header from "./Header";
import Headline from "./Headline";
import Icons from "./Icons";
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
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
