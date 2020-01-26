import React, { Component } from 'react';
import SearchTab from './SearchTab/SearchTab';
import ImageGallery from './ImageGallery/ImageGallery';
import LoadMore from './LoadMore/LoadMore';
import Loader from 'react-loader-spinner';

import axios from 'axios';

const key = '14483587-180e2cab6a3540976c3c7e498';

export default class Gallary extends Component {
  state = {
    dataApi: [],
    isModalOpen: false,
    id: null,
    object: {},
    search: '',
    page: 1,
    isLoading: false,
  };
  componentDidUpdate(prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      if (prevState.search !== this.state.search) {
        this.setState({ dataApi: [], page: 1 });
      }
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  openModal = e => {
    console.log('e.target.id', e.target.id);
    const [object] = this.state.dataApi.filter(item => item.id === e.target.id);
    this.setState({ isModalOpen: true, id: e.target.id, object: object });
  };

  getData = () => {
    this.setState({
      isLoading: true,
    });
    axios
      .get(
        `https://pixabay.com/api/?q=${this.state.search}&page=${this.state.page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
      )
      .then(data => {
        this.setState(state => ({
          page: state.page + 1,
          dataApi: [...state.dataApi, ...data.data.hits],
        }));
      })
      .finally(() => this.setState({ isLoading: false }));
  };

  getSearchValue = e => {
    this.setState({ search: e.target.value });
  };

  handleLoad = e => {
    this.getData();
  };

  close = () => {
    this.setState({ isModalOpen: false });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.getData();
  };

  handleKeyPress = event => {
    if (event.code === 'Escape') {
      this.close();
    }
  };
  handleClick = event => {
    if (Number(event.target.id) === Number(this.state.object.id)) {
      this.close();
    }
  };

  render() {
    console.log('this.state.dataApi', this.state.dataApi);
    const { isLoading } = this.state;

    return (
      <div className="App">
        <SearchTab
          search={this.state.search}
          getSearchValue={this.getSearchValue}
          handleSubmit={this.handleSubmit}
        />

        <ImageGallery
          handleKeyPress={this.handleKeyPress}
          handleClick={this.handleClick}
          object={this.state.object}
          images={this.state.dataApi}
          openModal={this.openModal}
          isModalOpen={this.state.isModalOpen}
          id={this.state.id}
        />
        {isLoading && (
          <Loader
            type="ThreeDots"
            color="#000000"
            height={100}
            width={100}
            timeout={3000}
          />
        )}

        <LoadMore handleLoad={this.handleLoad} />
      </div>
    );
  }
}
