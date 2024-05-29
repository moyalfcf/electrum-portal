import React from 'react';
import PropTypes from 'prop-types';
import RibbonButtonItem from './RibbonButtonItem.tsx';

const RibbonGroup = ({ id, text, items }) => (
    <div className="ribbongroup">
      {items.map((item, index) => (
        <div className="dockLeft">
            <RibbonButtonItem
                key={index}
                id={item.ID}
                text={item.Title}
                image={item.Image}
                onButtonItemClick={item.Tag}
            />
        </div>        
      ))}      
      <div>{text}</div>
    </div>
);

RibbonGroup.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  items: PropTypes.array.isRequired,
};

export default RibbonGroup;
