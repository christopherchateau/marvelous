import React from "react";
import { connect } from "react-redux";
import "./CharacterProfile.css";

const CharacterProfile = props => {
  if (props.storedCharacters.length >= props.characterCount) {
    const { name, description, pic } = props.storedCharacters[
      props.characterIndex
    ];
    console.log(props.characterIndex);
    return (
      <div className="CharacterProfile">
        <nav className="nav-left">
          <i class="fas fa-chevron-circle-left" />
        </nav>
        <section className="profile-wrapper">
          <img
            className="picture"
            alt="character"
            src="https://pbs.twimg.com/profile_images/847820097821581312/gpfF5-xH_400x400.jpg"
          />
          <article className="description">
            <p>{name}</p>
          </article>
          <article className="comics">
            comics comics comics comics comics
          </article>
        </section>
        <nav className="nav-right">
          <i class="fas fa-chevron-circle-right" />
        </nav>
      </div>
    );
  } else {
    return <div>loading</div>;
  }
};

export const mapStateToProps = state => ({
  storedCharacters: state.characters,
  characterCount: state.storageDetails.count,
  characterIndex: state.storageDetails.currentIndex
});

export default connect(mapStateToProps)(CharacterProfile);
