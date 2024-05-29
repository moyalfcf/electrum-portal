import "./RibbonStyles.css"

import React, { Component, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import TabPanel from 'devextreme-react/tab-panel';
import RibbonPage from './RibbonPage.tsx';
import RibbonPageInfo from "./RibbonPageInfo.tsx";
import Register from "../Register.tsx";

export interface RibbonProps {
  RibbonHeight: number;
  RibbonPages: RibbonPageInfo[];
}

class Ribbon extends Component<RibbonProps> {
  constructor(props: RibbonProps){
    super(props);
    this.RibbonHeight = props.RibbonHeight;
    this.ribbonPageInfoes = props.RibbonPages;
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

