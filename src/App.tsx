import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.css';
import React, {Component, createRef, RefObject } from 'react';
import MarginGroupList from './Components/MarginGroup/MarginGroupList';
import ClientProfile from './Components/ClientProfile/ClientProfile.tsx';
import DocumentManager from './Infra/DocumentManager/DocumentManager.tsx'; 
import DocumentInfo from './Infra/DocumentManager/DocumentInfo.tsx';
import Ribbon from './Infra/Ribbon/Ribbon.tsx';
import RibbonPageInfo from './Infra/Ribbon/RibbonPageInfo.tsx';
import Register from './Infra/Register.tsx';

class App extends Component{

  private documentManagerRef: RefObject<DocumentManager>;
  private initialRibbons: RibbonPageInfo[];

  constructor(props) {
    super(props);
    this.documentManagerRef = createRef();
    this.initialRibbons = Register.RibbonPages;
  };

  OpenComponent = () => {
    if (this.documentManagerRef.current) {
      const tempCmp : DocumentInfo = { ID: 1, Name: "mgrun", Title: "Margin Group Run"};
      this.documentManagerRef.current.OpenDocument(tempCmp);
    }
  };

  render(){
    return (
      <React.Fragment>
        <div className="App">
          <Ribbon RibbonHeight={135} RibbonPages={this.initialRibbons} />
          <DocumentManager ref={this.documentManagerRef} />
        </div>
      </React.Fragment>    
    );
  };
}

export default App;
