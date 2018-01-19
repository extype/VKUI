import React from 'react';
import getClassName from '../../helpers/getClassName';
import classnames from '../../lib/classnames';
import PropTypes from 'prop-types';
import './Progress.css';
import { keys as colorKeys, values as colors } from '../../helpers/colors';

const baseClassName = getClassName('Progress');

const Progress = ({ value, style, className, color, ...props }) => {
  return (
    <div
      className={classnames(baseClassName, className)}
      {...props}
    >
      <div
        className="Progress__in"
        style={{ ...style, width: `${value}%`, backgroundColor: color }}
      />
    </div>
  );
};

Progress.propTypes = {
  color: PropTypes.oneOf(Object.keys(colorKeys)),
  style: PropTypes.object,
  className: PropTypes.string,
  value: PropTypes.number
};

Progress.defaultProps = {
  color: colors[colorKeys.headerBlue],
  value: 0
};

export default Progress;

