var React = require('react');
var Header = require('./components/Header');
var Footer = require('./components/Footer');
var Navigation = require('./components/Navigation');
var BaselineFooter = require('./components/BaselineFooter');
var Section = require('./components/Section');

var App = React.createClass({
    getInitialState: function () {
        return {currentPage: 0, sectionsArray: ["Welcome", "Gallery"]};
    },
    changePage: function (i) {
        this.setState((prevState, props) => {
            return {currentPage: i};
        });
    },
    render: function () {
        return (
            <div>
                <Header />
                {this.state.sectionsArray.map((name, i) => <Section key={i} id={i} name={name}/>)}
                <Navigation />
                <Footer />
                <BaselineFooter />
            </div>
        );
    }
});

module.exports = App;
