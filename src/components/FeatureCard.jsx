import React from 'react';
import PropTypes from 'prop-types';
import chatIcon from "../assets/icon-chat.png";
import moneyIcon from "../assets/icon-money.png";
import securityIcon from "../assets/icon-security.png";

/**
 * React component for feature card
 * @param {Object} props 
 * @param {String} props.type  Kind of feature for icon (available so far: chat | money | security)
 * @param {String} props.title Title for the feature
 * @param {String} props.text  Description of the feature
 * @component 
 */
export function FeatureCard(props) {
  const { type, title, text } = props;

  return (
    <article className="featureCard">
      {setIcon(type)}
      <h3 className="featureCard__title">{title}</h3>
      <p className="featureCard__text">{text}</p>
    </article>
  )
}

/**
 * Determine which icon to display depending on the feature card type
 * @param {String} type 
 * @component 
 */
function setIcon(type) {
  switch (type) {
    case "chat": return <img className="featureCard__icon" src={chatIcon} alt="Chat Icon" />;
    case "money": return <img className="featureCard__icon" src={moneyIcon} alt="Money Icon" />;
    case "security": return <img className="featureCard__icon" src={securityIcon} alt="Security Icon" />;
    default: return;
  }
}

FeatureCard.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
};