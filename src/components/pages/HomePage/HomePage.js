import React, { Component } from 'react';

import { Link, withRouter } from 'react-router-dom';

class HomePage extends Component {
  state = {};

  render() {
    return (
      <>
        <ul>
          {this.props.movies.map(item => (
            <li key={item.id}>
              <Link
                id={item.id}
                onClick={this.props.getDetails}
                to={`/movies/${item.id}`}
              >
                {item.original_title}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
export default HomePage;
