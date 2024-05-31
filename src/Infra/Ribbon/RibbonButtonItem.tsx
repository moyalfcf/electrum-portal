import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'devextreme-react/Button';
import RibbonItemInfo from './RibbonItemInfo';

class RibbonButtonItem extends Component<RibbonItemInfo> {

    constructor(props: RibbonItemInfo){
      super(props);
      this._itemInfo = props;
    }
  
    private _itemInfo: RibbonItemInfo;
  
    render(){
      return (
        <div className='ribbonbutton'>
            <Button  
                icon={this._itemInfo.Image} 
                stylingMode="text"
                onClick = {() => this._itemInfo.RibbonItemClickHanlder(this._itemInfo)}
            /> 
        <div>{this._itemInfo.Title}</div>
    </div>
      );
    }
    
  }
  export default RibbonButtonItem;
