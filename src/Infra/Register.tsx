import DocumentInfo from "./DocumentManager/DocumentInfo";
import RibbonItemInfo from "./Ribbon/RibbonItemInfo";
import RibbonPageInfo from "./Ribbon/RibbonPageInfo";

import MarginGroupList from "../Components/MarginGroup/MarginGroupList.tsx";
import MarginRunList from "../Components/MarginRun/MarginRunList.tsx";
import ClientProfile from "../Components/ClientProfile/ClientProfile.tsx"; 
import RibbonGroupInfo from "./Ribbon/RibbonGroupInfo";
import { ComponentType } from "react";

export const ElectrumComponentNames = {
  MarginGroup: "MarginGroupList",
  MarginRun: "MarginRunList",
  ClientProfile: "ClientProfile"
}

class Register {
  constructor(){
    this.InitSystem();
  }

  public ElectrumComponentInfoes : {[name: string]: DocumentInfo;} = {};
  public ElectrumComponents : {[name: string]: ComponentType;} = {};

  public RibbonPages: Array<RibbonPageInfo> = [];

  private InitSystem() {
    this.RegisterComponents();
    this.RegisterComponentInfoes();
    this.RegisterRibbonItems();
  }

  private RegisterComponents() {
    this.ElectrumComponents[ElectrumComponentNames.MarginGroup] = MarginGroupList;
    this.ElectrumComponents[ElectrumComponentNames.MarginRun] = MarginRunList;
    this.ElectrumComponents[ElectrumComponentNames.ClientProfile] = ClientProfile;
  } 

  private RegisterComponentInfoes() {
    this.ElectrumComponentInfoes[ElectrumComponentNames.MarginGroup] = { ID: 1, Name: ElectrumComponentNames.MarginGroup, Title: "Margin Group", Params: null};
    this.ElectrumComponentInfoes[ElectrumComponentNames.MarginRun] = { ID: 2, Name: ElectrumComponentNames.MarginRun, Title: "Margin Run", Params: null};
    this.ElectrumComponentInfoes[ElectrumComponentNames.ClientProfile] = { ID: 3, Name: ElectrumComponentNames.ClientProfile, Title: "Client Profile", Params: null};
  } 
  
  private RegisterRibbonItems(){
    //Margin
    var mgItem: RibbonItemInfo = {ID: 1,Title: this.ElectrumComponentInfoes[ElectrumComponentNames.MarginGroup].Title, Image:"Images/Copy.svg", 
      Tag: this.ElectrumComponentInfoes[ElectrumComponentNames.MarginGroup]};
    var mrItem: RibbonItemInfo = {ID: 1,Title: this.ElectrumComponentInfoes[ElectrumComponentNames.MarginRun].Title, Image:"Images/Edit.svg", 
      Tag: this.ElectrumComponentInfoes[ElectrumComponentNames.MarginRun]};
    var cpItem: RibbonItemInfo = {ID: 1,Title: this.ElectrumComponentInfoes[ElectrumComponentNames.ClientProfile].Title, Image:"Images/Link.svg", 
      Tag: this.ElectrumComponentInfoes[ElectrumComponentNames.ClientProfile]};
    var groupM1: RibbonGroupInfo = {ID: 1, Title: "Margin", Items: [mgItem, mrItem, cpItem]};
    var groupM2: RibbonGroupInfo = {ID: 2, Title: "Other", Items: []};
    var marginPage: RibbonPageInfo = {ID: 1, Title: 'Margin', Groups: [groupM1, groupM2], RibbonItemClickHanlder: null};

    //Reports
    var groupR1: RibbonGroupInfo = {ID: 1, Title: "Client Reports", Items: []};
    var groupR2: RibbonGroupInfo = {ID: 2, Title: "Other", Items: []};
    var reportsPage: RibbonPageInfo = {ID: 3, Title: 'Reports', Groups: [groupR1, groupR2], RibbonItemClickHanlder: null};
    //Maintenance
    var groupMt1: RibbonGroupInfo = {ID: 1, Title: "Adjustment", Items: []};
    var groupMt2: RibbonGroupInfo = {ID: 2, Title: "Mapping", Items: []};
    var groupMt3: RibbonGroupInfo = {ID: 3, Title: "Other", Items: []};
    var maintenancePage: RibbonPageInfo = {ID: 3, Title: 'Maintenance', Groups: [groupMt1, groupMt2, groupMt3], RibbonItemClickHanlder: null};


    this.RibbonPages.push(marginPage);
    this.RibbonPages.push(reportsPage);
    this.RibbonPages.push(maintenancePage);
  }
  
}

export default new Register();

  