import React, { Component } from "react";
import { connect } from "react-redux";
import { updateStorageDetails } from "../../actions";
import FavoriteButton from '../FavoriteButton'
import "./CharacterProfile.css";

class CharacterProfile extends Component {
  constructor(props) {
    super(props);
  }

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

  handleFavoriteClick = () => {

  }

  render() {
    const { storedCharacters, characterCount } = this.props;
    if (storedCharacters.length >= 3) {
      const { id, name, description, pic, favorited } = this.props.storedCharacters[
        this.props.currentIndex
      ];
      return (
        <div className="CharacterProfile">
          <nav className="nav-left">
            <i
              onClick={() => this.handleArrowClick("BACK")}
              className="fas fa-chevron-circle-left"
            />
          </nav>
          <section className="profile-wrapper">
            <img className="picture" alt="character" src={pic} />
            <article className="description">
            <FavoriteButton id={id} favorited={favorited}/>
              <h3 className="description-title">Description</h3>
              <br />
              <p>{id}</p>
            </article>
            <article className="comics">
              comics comics comics comics comics
            </article>
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
      return <div>loading</div>;
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
