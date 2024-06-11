import React, { Component, useCallback } from "react";
import TabPanel, { TabPanelTypes } from 'devextreme-react/tab-panel';
import DocumentTemplate from "./DocumentTemplate.tsx";
import DocumentWrapper from "./DocumentWrapper.tsx";
import DocumentInfo from "./DocumentInfo.tsx";
import Sortable, { SortableTypes } from 'devextreme-react/sortable';

interface DocumentManagerState{
  Documents: DocumentInfo[];
  SelectedDocument: DocumentInfo | undefined;
}

class DocumentManager extends Component<{}, DocumentManagerState>{
    constructor(props){
        super(props);
        //this.documents = 

        this.state = {
          SelectedDocument: undefined, // { ID: 1, Name: "MarginGroup", Title: "Margin Group", Params: null},
          Documents: [] //[{ ID: 1, Name: "MarginGroup", Title: "Margin Group", Params: null},             { ID: 2, Name: "MarginRun", Title: "Margin Run", Params: null},             { ID: 3, Name: "ClientProfile", Title: "Client Profile", Params: null}]          
        };
    }

    RenderTitle = (data: DocumentInfo) => (
      <React.Fragment>
        <div>
          <span>
            {data.Title}
          </span>
          {this.state.Documents.length >= 1 && (
            <i
              className="dx-icon dx-icon-close"
              onClick={() => {
                this.closeButtonHandler(data);
              }}
            />
          )}
        </div>
      </React.Fragment>
    )

    
    public openDocument(param: DocumentInfo) {
      if(this.state.Documents.length == 0)
        this.addDocument(param);
      else {
        const doc = this.state.Documents.find(x => x.ID === param.ID);
        if(doc){              
          this.setState((prevState) => ({
            SelectedDocument: doc
          }));
        }
        else{
          //alert("not found!");
          this.addDocument(param);
        }          
      }  
    };

    addDocument = (newDocument: DocumentInfo) => {
      this.setState((prevState) => ({
          Documents: [...prevState.Documents, newDocument],
          SelectedDocument: newDocument
      }));
  };


    closeButtonHandler = (doc: DocumentInfo) => {
      
      const index = this.state.Documents.indexOf(doc);
      
      this.setState((prevState) => ({
        Documents: prevState.Documents.filter(x => x.ID !== doc.ID)
      }));

      if(index<this.state.Documents.length){
        this.setState((prevState) => ({
          SelectedDocument: this.state.Documents[index]
        }));
      }
      else{
        this.setState((prevState) => ({
          SelectedDocument: undefined
        }));
      }
             
    };
    onSelectionChanged = (args: TabPanelTypes.SelectionChangedEvent) => {
      this.setState((prevState) => ({
        SelectedDocument: args.addedItems[0]
      }));
    };

    onTabDragStart = (e: SortableTypes.DragStartEvent) => {
      e.itemData = e.fromData[e.fromIndex];
    };
  
    onTabDrop = (e: SortableTypes.ReorderEvent) => {
      const newDocuments = [...this.state.Documents];
  
      newDocuments.splice(e.fromIndex, 1);
      newDocuments.splice(e.toIndex, 0, e.itemData);
  
      this.setState((prevState) => ({
        Documents: newDocuments,
    }));
    };

    render(){
        return (
          <React.Fragment>          
            <Sortable
              filter=".dx-tab"
              data={this.state.Documents}
              itemOrientation="horizontal"
              dragDirection="horizontal"
              onDragStart={this.onTabDragStart}
              onReorder={this.onTabDrop}
            >
              <TabPanel              
                noDataText=""
                dataSource={this.state.Documents}
                height={410}
                itemTitleRender={this.RenderTitle}
                deferRendering={false}
                showNavButtons={true}
                selectedItem={this.state.SelectedDocument}
                repaintChangesOnly={true}
                onSelectionChanged={this.onSelectionChanged}
                itemComponent={DocumentTemplate}
              />
            </Sortable>
          </React.Fragment>
        );
    }
}

export default DocumentManager;