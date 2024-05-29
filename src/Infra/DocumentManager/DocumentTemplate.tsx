import React from 'react';


function DocumentTemplate(props) {
  const cmpName = props.data.Name;
  return (
    <React.Fragment>
      <div className="document">
        Hello Document: {cmpName}!
      </div>
    </React.Fragment>
  );
}
export default DocumentTemplate;
