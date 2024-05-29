import React from 'react';
import PropTypes from 'prop-types';
import Button from 'devextreme-react/Button';

const RibbonButtonItem = ({ id, text, image, onButtonItemClick }) => (
    <div className='ribbonbutton'>
        <Button  
            icon={image} 
            stylingMode="text"
            onClick = {onButtonItemClick}
        /> 
        <div>{text}</div>
    </div>
);

RibbonButtonItem.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  //onButtonItemClick: PropTypes.func.isRequired,
};

export default RibbonButtonItem;
