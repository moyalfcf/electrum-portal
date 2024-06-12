import React, { Component } from 'react';
import RibbonButtonItem from './RibbonButtonItem.tsx';
import RibbonGroupInfo from './RibbonGroupInfo.tsx';
import RibbonItemInfo from './RibbonItemInfo';
import Button from 'devextreme-react/cjs/button';

interface RibbonGroupProps{
  Group: RibbonGroupInfo;
  RibbonItemClickHanlder: (param: RibbonItemInfo) => void;
}

class RibbonGroup extends Component<RibbonGroupProps> {

  constructor(props: RibbonGroupProps){
    super(props);
    this._groupInfo = props.Group;

    this.RibbonItemClickHanlder=props.RibbonItemClickHanlder;
  }

  private _groupInfo: RibbonGroupInfo;
  RibbonItemClickHanlder: (param: RibbonItemInfo) => void;

  OnButtonClick = (param: RibbonItemInfo) => {
    this.RibbonItemClickHanlder(param);
  }

  render(){
    return (
      <div className="ribbongroup">
        {this._groupInfo.Items.map((item, index) => (
          <div className="dockLeft">
              <RibbonButtonItem
                  key={index}
                  Item={item}                  
                  RibbonItemClickHanlder={this.OnButtonClick}
              />
          </div>        
        ))}      
        <div className='ribbongrouptitle'>{this._groupInfo.Title}</div>
    </div>
    );
  }
  
}
export default RibbonGroup;
