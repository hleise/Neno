var React = require('react');
var NavBar = require('../navbar/Navbar');
var Slider = require('../slider/Slider');
var HeaderArrow = require('../header_arrow/HeaderArrow');

var Header = React.createClass({
    render: function () {
        return (
            <div className={'Header'}>
                <Slider></Slider>
                <NavBar className={'TopNavbar'} goTo={'Gallery'}>
                    <h3 id="TravelInfo">Travel Info</h3>
                    <h3 id="Booking">Booking</h3>
                    <h3 id="Safaris">Safaris</h3>
                    <h3 id="Tours">Tours</h3>
                </NavBar>
                <h1>Neno Tours & Travels</h1>
                <HeaderArrow />
            </div>
        );
    }
});

module.exports = Header;
