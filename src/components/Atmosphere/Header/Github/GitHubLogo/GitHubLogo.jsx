import React from "react";
import PropTypes from "prop-types";

import styles from "./GitHubLogo.css";

const GitHubLogo = ({ classNameSVG, classNamePath }) => {
    const pathClassName = [styles.gitHubLogoPathSVG, classNamePath].join(" ").trim();
    return (
        <svg id="gitHubLogoSVG" className={classNameSVG} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 100">
            <title>gitHub</title>
            <path
                className={pathClassName}
                d="M51.5,0A51.24,51.24,0,0,0,35.22,99.91c2.57.47,3.51-1.11,3.51-2.47s0-5.26-.07-9.54c-14.32,3.1-17.35-6-17.35-6-2.34-5.92-5.72-7.5-5.72-7.5-4.68-3.18.36-3.12.36-3.12,5.17.36,7.89,5.28,7.89,5.28,4.6,7.83,12.06,5.57,15,4.26a10.94,10.94,0,0,1,3.27-6.85c-11.43-1.3-23.46-5.69-23.46-25.34a19.8,19.8,0,0,1,5.3-13.76c-.52-1.3-2.3-6.52.51-13.57,0,0,4.32-1.38,14.16,5.26a49,49,0,0,1,25.78,0c9.83-6.64,14.15-5.26,14.15-5.26,2.82,7.06,1,12.27.52,13.57a19.74,19.74,0,0,1,5.29,13.76c0,19.69-12,24-23.52,25.3,1.85,1.59,3.5,4.71,3.5,9.49,0,6.85-.07,12.38-.07,14.07,0,1.36.94,3,3.55,2.46A51.24,51.24,0,0,0,51.5,0Z"/>
        </svg>
    );
};

GitHubLogo.propTypes = {
    classNameSVG: PropTypes.string,
    classNamePath: PropTypes.string,
};

GitHubLogo.defaultProps = {
    classNameSVG: "",
    classNamePath: "",
};

export default GitHubLogo;