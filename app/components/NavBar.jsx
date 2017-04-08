import React from 'react';

class NavBar extends React.Component {
  render() {
    return (
      <div className={'NavBar'}>
          {React.Children.map(this.props.children, (child) => (
              <button className={'navBarButton'}>{child}</button>))}
      </div>
    )
  }
}

export default NavBar;
