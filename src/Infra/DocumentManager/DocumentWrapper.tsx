import React, { Component } from 'react';
import DocumentInfo from './DocumentInfo';
import Register, { ElectrumComponentNames } from '../Register.tsx';


class DocumentWrapper extends Component<DocumentInfo> {

  constructor(props: DocumentInfo){
    super(props);
    this._documentInfo = props;
  }

  private _documentInfo: DocumentInfo;

  render(){
    var cmpType = Register.ElectrumComponents[this._documentInfo.Name];
    return React.createElement(cmpType);
  }
  
}
export default DocumentWrapper;
