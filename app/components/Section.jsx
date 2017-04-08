import React from 'react';

class Section extends React.Component {
    render() {
        return (
            <div className={'Section'} id={this.props.name}>
                <h2>{this.props.name}</h2>
                <img className={'SectionImage'} src={require('./img/' + (this.props.id + 3) + '.jpg')} alt={this.props.name}/>
            </div>
        );
    }
};

export default Section;
