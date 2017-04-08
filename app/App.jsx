import React from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Section from './components/Section.jsx';

class App extends React.Component {

    constructor(props) {
      super(props);
        this.state = {
          currentPage: 0,
          sectionsArray: ["Welcome", "Gallery"]
        };

      this.changePage = this.changePage.bind(this);
    }
    changePage(i) {
        this.setState(
            {currentPage: i}
        );
    }
    render() {
        return (
            <div>
                <Header />
                {this.state.sectionsArray.map((name, i) => <Section key={i} id={i} name={name}/>)}
                <Footer />
            </div>
        );
    }
};

export default App;
