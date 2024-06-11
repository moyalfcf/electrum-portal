import React, { Component } from "react";
import Button from 'devextreme-react/button';
import DataGrid from 'devextreme-react/data-grid'

import IconAdd from '../../Assets/Images/Add.svg'
import IconEdit from '../../Assets/Images/Edit.svg'
import IconRetire from '../../Assets/Images/Retire.svg'

import {sample, columns, key} from '../../Assets/Data/data.js'

class MarginRunList extends Component{
    constructor(props){
        super(props);
    }

    onButtonItemClick(e){
        alert(e);
    }

    render(){
        return (
            <div>
                <div className="toolbox">
                    <ul className="tools list-unstyled">
                        <li>
                            <Button
                                icon={IconAdd} 
                                stylingMode="text"
                                onClick = {this.onButtonItemClick}/>
                        </li>
                        <li>
                            <Button
                                icon={IconEdit} 
                                stylingMode="text"
                                onClick = {this.onButtonItemClick}/>
                        </li>
                        <li>
                            <Button
                                icon={IconRetire} 
                                stylingMode="text"
                                onClick = {this.onButtonItemClick}/>
                        </li>
                    </ul>
                </div>
                <DataGrid
                    dataSource={sample}
                    defaultColumns={columns}
                    keyExpr={key}
                    showBorders={true}
                    activeStateEnabled={true}
                    showRowLines={true}
                    focusedRowEnabled={true}
                />
            </div>
        );
    }
}

export default MarginRunList;