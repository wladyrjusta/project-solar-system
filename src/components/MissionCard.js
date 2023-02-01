import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div className="mission-planet" data-testid="mission-card">
        <p className="mission-name" data-testid="mission-name">{ name }</p>
        <p className="mission-year" data-testid="mission-year">{ year }</p>
        <p className="mission-country" data-testid="mission-country">{ country }</p>
        <p className="mission-dest" data-testid="mission-destination">{ destination }</p>
      </div>
    );
  }
}

MissionCard.defaultProps = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
};

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
};

export default MissionCard;
