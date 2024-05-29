import React from 'react';
import RibbonGroup from './RibbonGroup.tsx';

const RibbonPage = ({ data }) => {
  //const title = data.Title;
  const groups = data.Groups;
  return (
    <div className="ribbonpage"> 
      {groups.map((group, index) => (
        <div className="dockLeft">
          <RibbonGroup
              key={index}
              id={group.ID}
              text={group.Title}
              items={(group.Items)}
          />
        </div>
      ))}
    </div>
  );
}
export default RibbonPage;
