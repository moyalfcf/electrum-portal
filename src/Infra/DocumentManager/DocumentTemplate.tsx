import React, { Component } from 'react';
import DocumentInfo from './DocumentInfo';
import DocumentWrapper from './DocumentWrapper.tsx'


class DocumentTemplate extends Component {

  constructor(props){
    super(props);
    this._documentInfo = props.data;
  }

  private _documentInfo: DocumentInfo;

  render(){
    return (
      <React.Fragment>
        <div className="document">
          <DocumentWrapper ID={this._documentInfo.ID} Title={this._documentInfo.Title} Name={this._documentInfo.Name}  />
        </div>
      </React.Fragment>
    );
  }
  
}
export default DocumentTemplate;
