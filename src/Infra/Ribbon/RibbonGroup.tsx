import React, { Component } from 'react';
import RibbonButtonItem from './RibbonButtonItem.tsx';
import RibbonGroupInfo from './RibbonGroupInfo.tsx';


class RibbonGroup extends Component<RibbonGroupInfo> {

  constructor(props: RibbonGroupInfo){
    super(props);
    this._groupInfo = props;
  }

  private _groupInfo: RibbonGroupInfo;

  render(){
    return (
      <div className="ribbongroup">
        {this._groupInfo.Items.map((item, index) => (
          <div className="dockLeft">
              <RibbonButtonItem
                  key={index}
                  ID={item.ID}
                  Title={item.Title}
                  Image={item.Image}
                  Tag={item.Tag}
                  RibbonItemClickHanlder={this._groupInfo.RibbonItemClickHanlder}
              />
          </div>        
        ))}      
        <div>{this._groupInfo.Title}</div>
    </div>
    );
  }
  
}
export default RibbonGroup;
