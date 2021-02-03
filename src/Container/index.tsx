import * as React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Images from './Images';
import Pagination from './Pagination';
import { getGif } from './service';
import { IState } from './types';

class AppContainer extends React.Component {
  state: IState = {
    offset: 0,
    totalCount: 0,
    limit: 25,
    searchQuery: '',
    images: [],
  };

  onClickHandler = async () => {
    this.setState(
      {
        offset: 0,
        totalCount: 0,
      },
      () => this.fetchData(),
    );
  };

  fetchData = async () => {
    try {
      const { searchQuery, limit, offset } = this.state;
      const resp = await getGif(searchQuery, offset, limit);
      const { data, pagination } = resp.data;

      this.setState({
        totalCount: pagination.total_count,
        images: data,
      });
    } catch {
      this.setState({
        error: true,
      });
    }
  };

  onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchQuery: e.target.value });
  };

  onChangePage = (type: 'prev' | 'next') => {
    const { offset, limit, totalCount } = this.state;
    if (type === 'prev') {
      if (offset - limit >= 0) {
        this.setState(
          {
            offset: offset - limit,
          },
          () => this.fetchData(),
        );
      }
    } else {
      if (offset + limit < totalCount) {
        this.setState(
          {
            offset: offset + limit,
          },
          () => this.fetchData(),
        );
      }
    }
  };

  render() {
    const { images, totalCount, offset, limit, error } = this.state;
    if (error) {
      return <p className="error-title">Something when wrong</p>;
    }

    return (
      <div className="container">
        <h1 className="main-title">Try to find gifs</h1>
        <div className="container-top-row">
          <div className="container__search-row">
            <Input onChange={this.onChangeHandler} />
            <Button onClick={this.onClickHandler}>Search gif</Button>
          </div>
        </div>
        {!!images.length && (
          <Pagination
            onChangePage={this.onChangePage}
            totalCount={totalCount}
            offset={offset}
            limit={limit}
          />
        )}
        <Images data={images} />
      </div>
    );
  }
}

export default AppContainer;
