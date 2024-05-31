import React, { Component } from 'react';
import RibbonGroup from './RibbonGroup.tsx';
import RibbonPageInfo from './RibbonPageInfo.tsx';


class RibbonPage extends Component {

  constructor(props){
    super(props);
    this._pageInfo = props.data;
  }

  private _pageInfo: RibbonPageInfo;

  render(){
    return (
      <div className="ribbonpage"> 
        {this._pageInfo.Groups.map((group, index) => (
          <div className="dockLeft">
            <RibbonGroup
                key={index}
                ID={group.ID}
                Title={group.Title}
                Items={(group.Items)}
                RibbonItemClickHanlder={this._pageInfo.RibbonItemClickHanlder}
            />
          </div>
        ))}
      </div>
    );
  }
  
}
export default RibbonPage;