import React from "react";
import PropTypes from "prop-types";

import { getComponentClassName } from "../../../../helpers";
import "./Fish.css";

const Fish = ({ className }) => {
    const fishClassName = getComponentClassName(["fish", className]);
    return <div className={fishClassName} />
};

Fish.propTypes = {
    className: PropTypes.string,
};

Fish.defaultProps = {
    className: "",
};

export default Fish;