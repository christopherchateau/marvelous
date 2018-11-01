import React from "react";
import { connect } from "react-redux";
import "./CharacterProfile.css";

const CharacterProfile = props => {
  //const { name, description, pic } = props.storedCharacters[1]
  console.log(props.storedCharacters.length)
  if (props.storedCharacters.length > 2) {
  return (
    <div className="CharacterProfile">
      <section className="profile-wrapper">
        <img
          className="picture"
          alt="character"
          src="https://pbs.twimg.com/profile_images/847820097821581312/gpfF5-xH_400x400.jpg"
        />
        <article className="description">
          <p>
            {props.storedCharacters[1].name}
          </p>
        </article>
        <article className="comics">comics comics comics comics comics</article>
      </section>
    </div>
  );
} else {
  return (<div>loading</div>)
}
};

export const mapStateToProps = state => ({
  storedCharacters: state.characters
});

export default connect(mapStateToProps)(CharacterProfile);
