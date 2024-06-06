import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'devextreme-react/Button';
import RibbonItemInfo from './RibbonItemInfo';

interface RibbonItemProps{
  Item: RibbonItemInfo;
  RibbonItemClickHanlder: (param: RibbonItemInfo) => void;
}

class RibbonButtonItem extends Component<RibbonItemProps> {

    constructor(props: RibbonItemProps){
      super(props);
      this._itemInfo = props.Item;
      this.RibbonItemClickHanlder = props.RibbonItemClickHanlder;
    }
  
    private _itemInfo: RibbonItemInfo;
    RibbonItemClickHanlder: (param: RibbonItemInfo) => void;
  
    render(){
      return (
        <div className='ribbonbutton'>
            <Button  
                icon={this._itemInfo.Image} 
                stylingMode="text"
                onClick = {() => this.RibbonItemClickHanlder(this._itemInfo)}
            /> 
        <div>{this._itemInfo.Title}</div>
    </div>
      );
    }
    
  }
  export default RibbonButtonItem;
