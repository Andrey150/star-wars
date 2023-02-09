import React from "react";
import PropTypes from 'prop-types';

import './row.css'


const Row = ( {leftEl, rightEl} ) => {
  return (
    <div className="row mb2">
      <div className="col-md-6">
        {leftEl}
      </div>
      <div className="col-md-6">
        {rightEl}
      </div>
    </div>
  )
}

/**
 * PropTypes.node проверяет что этот компонент можно отрендерить
 */
Row.prototypes = {
  leftEl: PropTypes.node,
  rightEl: PropTypes.node,
}

export default Row;