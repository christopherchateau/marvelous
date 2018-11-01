import React from "react";
import { connect } from "react-redux";
import "./CharacterProfile.css";

const CharacterProfile = props => {
  return (
    <div className="CharacterProfile">
      <section className="profile-wrapper">
        <img
          className="picture"
          src="https://pbs.twimg.com/profile_images/847820097821581312/gpfF5-xH_400x400.jpg"
        />
        <article className="description">
          <p>
            Spiderman Spiderman Spiderman Spiderman Spiderman Spiderman
            Spiderman Spiderman Spiderman Spiderman Spiderman
          </p>
        </article>
        <article className="comics">comics comics comics comics comics</article>
      </section>
    </div>
  );
};

export const mapStateToProps = state => ({
  storedCharacters: state.characters
});

export default connect(mapStateToProps)(CharacterProfile);
