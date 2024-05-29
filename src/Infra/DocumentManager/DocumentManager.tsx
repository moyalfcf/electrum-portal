import React, { Component, useCallback } from "react";
import TabPanel, { TabPanelTypes } from 'devextreme-react/tab-panel';
import DocumentTemplate from "./DocumentTemplate.tsx";
import DocumentInfo from "./DocumentInfo.tsx";
import Sortable, { SortableTypes } from 'devextreme-react/sortable';

class DocumentManager extends Component{
    constructor(props){
        super(props);
        this.documents = [{ ID: 1, Name: "MarginGroup", Title: "Margin Group"}, { ID: 2, Name: "MarginRun", Title: "Margin Run"}, { ID: 2, Name: "ClientProfile", Title: "Client Profile"}];
    }

    documents: Array<DocumentInfo>;
    selectedItem : DocumentInfo;

    OpenDocument: (doc : DocumentInfo) => {
      Alert(doc);
    };

    RenderTitle = (data) => (
      <React.Fragment>
        <div>
          <span>
            {data.Title}
          </span>
          {this.documents.length >= 2 && (
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
    closeButtonHandler = (data) => {

    };
    onSelectionChanged = () => {

    };

    onTabDragStart = (e: SortableTypes.DragStartEvent) => {
      e.itemData = e.fromData[e.fromIndex];
    };
  
    onTabDrop = (e: SortableTypes.ReorderEvent) => {
      const newEmployees = [...this.documents];
  
      newEmployees.splice(e.fromIndex, 1);
      newEmployees.splice(e.toIndex, 0, e.itemData);
  
      this.documents = newEmployees;
    };

    render(){
        return (
          <React.Fragment>          
            <Sortable
              filter=".dx-tab"
              data={this.documents}
              itemOrientation="horizontal"
              dragDirection="horizontal"
              onDragStart={this.onTabDragStart}
              onReorder={this.onTabDrop}
            >
              <TabPanel
                dataSource={this.documents}
                height={410}
                itemTitleRender={this.RenderTitle}
                deferRendering={false}
                showNavButtons={true}
                selectedItem={this.selectedItem}
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