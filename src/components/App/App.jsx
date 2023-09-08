import React, { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getImages } from '../api';
import { Container } from './App.styled';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';
import { Modal } from '../Modal/Modal';
import { Button } from '../Button/Button';

export class App extends Component {
  state = {
    images: [],
    largeImageUrl: '',
    showModal: false,
    query: '',
    page: 1,
    error: null,
    isLoading: false,
    isEmpty: false,
    isVisible: false,
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      getImages(query, page).then(data => {
        this.setState(prev => ({ images: [...prev.images, ...data.hits] }));
      });
    }
  }

  getImages = async (query, page) => {
    if (!query) return;
    this.setState({ isLoading: true });
    try {
      const { hits, totalHits } = await getImages(query, page);

      if (hits.length === 0) {
        this.setState({ isEmpty: true });
        toast.warn('Sorry. there are no images ... 😅');
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        isVisible: page < Math.ceil(totalHits / 12),
      }));
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  getLargeImage = e => {
    const { images } = this.state;
    const id = e.target.id;
    const result = images.find(el => el.id === +id);
    this.setState({ largeImageURL: result.largeImageURL });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  onSubmit = query => {
    this.setState({
      query,
      images: [],
      page: 1,
      isVisible: false,
      isEmpty: false,
    });
  };

  onLoadMore = () => {
    this.setState(prevState => ({
      isVisible: false,
      page: prevState.page + 1,
    }));
  };

  render() {
    const {
      isEmpty,
      images,
      isVisible,
      showModal,
      error,
      isLoading,
      largeImageURL,
    } = this.state;

    return (
      <Container>
        <Searchbar onSubmit={this.onSubmit} />

        {error && !isLoading && toast.error('OOPS! THERE WAS AN ERROR!')}
        {isEmpty && toast.warn('Images not found')}

        <ImageGallery images={images} onClick={this.getBigPhoto}></ImageGallery>

        {largeImageURL && showModal && (
          <Modal onClose={this.toggleModal}>{largeImageURL}</Modal>
        )}
        {isLoading && <Loader />}
        {isVisible && <Button onClick={this.onLoadMore} onLoad={isLoading} />}
      </Container>
    );
  }
}
