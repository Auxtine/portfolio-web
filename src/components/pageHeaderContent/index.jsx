import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const PageHeaderContent = (props) => {
  // eslint-disable-next-line react/prop-types
  const { headerText, icon } = props;

  return (
    <div className="wrapper">
      <h2> {headerText} </h2>
      <span>{icon}</span>
    </div>
  );
};
PageHeaderContent.PropTypes = {
    headerText: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
}

export default PageHeaderContent;
