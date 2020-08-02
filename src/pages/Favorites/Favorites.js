import React, { Component } from "react";
import "./Favorites.scss";
import { connect } from "react-redux";
import Row from "../../components/Row/Row";
import { GET_FAVORITES } from "../../state/reducers/movieReducer";
import { splitList } from "../../components/MovieRow/MovieRow";

const mapStatesToProps = state => ({
  favorites: state.movie.favorites
});

const mapDispatchToProps = dispatch => ({
  getFavorites: () => dispatch({ type: GET_FAVORITES })
});

class Favorites extends Component {
  constructor(props) {
    super(props);

    this.state = {
      select: 0,
      hover: 0,
      movies: [],
      rowSelect: 0
    };
  }

  componentDidMount = () => {
    this.props.getFavorites();
  };

  changeRow = id => {
    this.setState({ rowSelect: id });
  };

  render() {
    const {
      favorites: { has_more: hasMore, list }
    } = this.props;

    const { rowSelect } = this.state;

    if (!list) return null;

    const movies = splitList(6, list);

    return (
      <div className="page-container">
        <div className="header"></div>
        <div className="page--title">
          <div className="title">My Favorites</div>
        </div>
        <div>
          <div className={`gallery ${rowSelect > 0 ? "gallery-open" : ""}`}>
            <div></div>
            <div className="galleryContent">
              <div>
                <div className="galleryLockups">
                  {movies &&
                    movies.map((list, index) => (
                      <Row
                        rowId={index + 1}
                        key={index}
                        list={list}
                        changeRow={this.changeRow}
                        rowSelect={rowSelect}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStatesToProps, mapDispatchToProps)(Favorites);
