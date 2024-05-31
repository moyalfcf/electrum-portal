import React, { Component } from 'react';
import DocumentInfo from './DocumentInfo';


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
          Hello Document: {this._documentInfo.Name}!
        </div>
      </React.Fragment>
    );
  }
  
}
export default DocumentTemplate;
