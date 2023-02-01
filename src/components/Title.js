import React from 'react';
import PropTypes from 'prop-types';

class Title extends React.Component {
  render() {
    const { headline } = this.props;
    return (
      <h2 className="title">
        { headline }
      </h2>
    );
  }
}

Title.defaultProps = {
  headline: PropTypes.string,
};

Title.propTypes = {
  headline: PropTypes.string,
};

export default Title;
