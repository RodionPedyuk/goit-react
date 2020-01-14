import React, { Component } from 'react';
import Controls from './controls/Controls';
import Progress from './progress/Progress';
import Publication from './publication/Publication';

class Reader extends Component {
  state = {
    publicationIndex: 0,
  };

  handleClickPositive = () => {
    this.setState(prevState => ({
      publicationIndex: prevState.publicationIndex + 1,
    }));
  };

  handleClickNegative = () => {
    this.setState(prevState => ({
      publicationIndex: prevState.publicationIndex - 1,
    }));
  };

  render() {
    const { publicationIndex } = this.state;
    const publication = this.props.publications[this.state.publicationIndex];
    return (
      <div>
        <Controls
          handleClickPositive={this.handleClickPositive}
          handleClickNegative={this.handleClickNegative}
          pageIndex={publicationIndex}
          itemLength={this.props.publications.length}
        />
        <Progress
          progress={this.state.publicationIndex}
          itemLength={this.props.publications.length}
        />
        <Publication
          publications={this.props.publications}
          id={publication.id}
          title={publication.title}
          text={publication.text}
        />
      </div>
    );
  }
}

export default Reader;
