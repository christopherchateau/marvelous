import React from "react";
import { connect } from "react-redux";
import "./CharacterProfile.css";

const CharacterProfile = (props) => {

  const { pic } = props.storedCharacters
  //console.log(props.storedCharacters[1])
  return (
  <div className="CharacterProfile">
    <img className="picture" src={pic}/>
    <article className="description">

    </article>
    <section className="comics">
    </section>
  </div>) 
};

export const mapStateToProps = state => ({
  storedCharacters: state.characters
});

export default connect(mapStateToProps)(CharacterProfile);
