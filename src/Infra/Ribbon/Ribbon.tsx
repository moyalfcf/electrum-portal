import "./RibbonStyles.css"

import React, { Component, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import TabPanel from 'devextreme-react/tab-panel';
import RibbonPage from './RibbonPage.tsx';
import RibbonPageInfo from "./RibbonPageInfo.tsx";
import Register from "../Register.tsx";
import RibbonItemInfo from "./RibbonItemInfo.tsx";

interface RibbonProps {
  RibbonHeight: number;
  RibbonPages: RibbonPageInfo[];
  RibbonItemClickHanlder: (param: RibbonItemInfo) => void;
}

class Ribbon extends Component<RibbonProps> {
  constructor(props: RibbonProps){
    super(props);    
    this.InitRibbon(props);
  }

  private InitRibbon(param: RibbonProps){
    this.RibbonHeight = param.RibbonHeight;
    this.ribbonPageInfoes = param.RibbonPages;
    this.ribbonPageInfoes.map((pi, index) => {
      pi.RibbonItemClickHanlder = param.RibbonItemClickHanlder;
    });
  }

  public RibbonHeight: number;
  ribbonPageInfoes: RibbonPageInfo[];
  selectedPage: RibbonPageInfo;
  onSelectionChanged = (data) => {

  };

  renderTitle = (data) => (
    <React.Fragment>
      <div>
        <span>
          {data.Title}
        </span>
      </div>
    </React.Fragment>
  );

  render(){
    return (
      <div className="ribbon">
          <TabPanel
              height={this.RibbonHeight}
              dataSource={this.ribbonPageInfoes}
              selectedItem={this.selectedPage}
              onSelectionChanged={this.onSelectionChanged}
              loop={false}
              itemTitleRender={this.renderTitle}
              itemComponent={RibbonPage}
              showNavButtons={true}
              animationEnabled={true}
              swipeEnabled={true}
          />          
      </div>
  );
  }
}

export default Ribbon;

