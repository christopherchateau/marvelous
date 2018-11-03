import React, { Component } from "react";
import { connect } from "react-redux";
import { updateStorageDetails } from "../../actions";
import PropTypes from "prop-types";
import FavoriteIcon from "../FavoriteIcon";
import spiderManLoading from "../../images/spiderman-loading.gif";
import "./CharacterProfile.css";

export class CharacterProfile extends Component {
  handleArrowClick = direction => {
    let {
      currentIndex,
      characterCount,
      dispatchStorageDetailsUpdate,
      getCharacter
    } = this.props;

    let updatedIndex = currentIndex;
    let updatedCount = characterCount;

    direction === "FORWARD" ? updatedIndex++ : updatedIndex--;
    if (updatedIndex === 0 || updatedIndex === characterCount - 1) {
      updatedCount++;
      getCharacter(direction);
    }
    if (updatedIndex === 0) updatedIndex = 1;
    dispatchStorageDetailsUpdate(updatedIndex, updatedCount);
  };

  render() {
    if (
      this.props.showFavorites ||
      (this.props.storedCharacters.length >= 3 &&
        this.props.storedCharacters[this.props.currentIndex])
    ) {
      const {
        id,
        name,
        description,
        pic,
        favorited
      } = this.props.storedCharacters[this.props.currentIndex];

      return (
        <div className="CharacterProfile">
          <nav className="nav-left">
            <i
              onClick={() => this.handleArrowClick("BACK")}
              className="fas fa-chevron-circle-left"
            />
          </nav>
          <section className="profile-wrapper">
            <div className="picture-wrapper">
              <img className="picture" alt="character" src={pic} />
            </div>
            <div className="description-comics-wrapper">
              <section className="description">
                <h3 className="name">{name}</h3>
                <FavoriteIcon id={id} favorited={favorited} />
                <article className="description-text">
                  <h3 className="description-title">Description</h3>
                  <br />
                  <p className="desctiption-text">{description}</p>
                </article>
              </section>
              <article className="comics">
                comics comics comics comics comics
              </article>
            </div>
          </section>
          <nav className="nav-right">
            <i
              onClick={() => this.handleArrowClick("FORWARD")}
              className="fas fa-chevron-circle-right"
            />
          </nav>
        </div>
      );
    } else {
      return (
        <div className="loading-screen">
          <img
            className="loading-pic"
            alt="Spiderman loading"
            src={spiderManLoading}
          />
          <h3 className="loading-msg">Loading...</h3>
        </div>
      );
    }
  }
}

export const mapStateToProps = state => ({
  storedCharacters: state.characters,
  characterCount: state.storageDetails.count,
  currentIndex: state.storageDetails.currentIndex
});

export const mapDispatchToProps = dispatch => ({
  dispatchStorageDetailsUpdate: (index, count) =>
    dispatch(updateStorageDetails(index, count))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharacterProfile);

CharacterProfile.propTypes = {
  dispatchStorageDetailsUpdate: PropTypes.func.isRequired,
  storedCharacters: PropTypes.array.isRequired,
  getCharacter: PropTypes.func.isRequired,
  characterCount: PropTypes.number.isRequired,
  currentIndex: PropTypes.number.isRequired
};
