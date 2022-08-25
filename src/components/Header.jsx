import PropTypes from "prop-types";
import React from "react";

function Header({ text, bgColor, textColor }) {
  const HeadStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={HeadStyles}>
      <div className="container">
        <h1>{text}</h1>
      </div>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback Form",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
