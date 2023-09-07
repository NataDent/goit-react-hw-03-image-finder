import { Component } from 'react';
import { getImages } from '../api';
import { Container } from './App.styled';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { toast } from 'react-toastify';

export class App extends Component {
  state: {
    searchQuery: '',
    imageSrc: '',
    images: [],
    page: 1,
    totalPages: 0,
    error: false,
    loading: false,
    modal: false,
  };

  async componentDidMount() {
    const savedQuery = localStorage.getItem('searchQuery');
    if (savedQuery !== null) {
      this.setState({
        searchQuery: JSON.parse(savedQuery),
      });
    }

    try {
      this.setState({ loading: true, error: false });
      const images = await getImages();
      console.log(images);
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  }

  componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page) {
      getImages();
    }
  }

  searchQuery = query => {
    this.setState({
      searchQuery: query,
    });
  };

  onChange = e => e.target.value;

  onSubmit = e => {
    e.preventDefault();
    const query = e.currentTarget.value.trim();
    if (!query) {
      toast.warn('Please enter your request');
    }
  };

  render() {
    const { loading, error } = this.state;
    return (
      <Container>
        <SearchBar onSubmit={this.onSubmit} />
        {loading && <div>Loading...</div>}
        {error && !loading && toast.error('OOPS! THERE WAS AN ERROR!')}
      </Container>
    );
  }
}
