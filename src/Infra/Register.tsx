import DocumentInfo from "./DocumentManager/DocumentInfo";
import RibbonItemInfo from "./Ribbon/RibbonItemInfo";
import RibbonPageInfo from "./Ribbon/RibbonPageInfo";

import MarginGroupList from "../Components/MarginGroup/MarginGroupList";
import MarginRunList from "../Components/MarginRun/MarginRunList";
import ClientProfile from "../Components/ClientProfile/ClientProfile"; 
import RibbonGroupInfo from "./Ribbon/RibbonGroupInfo";

const MarginGroupListComponentName = "MarginGroupList";
const MarginRunListComponentName = "MarginRunList";
const ClientProfileComponentName = "ClientProfile";

class Register {
  constructor(){
    this.InitSystem();
  }

  public ElectrumComponents : {[name: string]: DocumentInfo;} = {};

  public RibbonPages: Array<RibbonPageInfo> = [];

  private InitSystem() {
    this.RegisterComponents();
    this.RegisterRibbonItems();
  }

  private RegisterComponents() {
    this.ElectrumComponents[MarginGroupListComponentName] = { ID: 1, Name: MarginGroupListComponentName, Title: "Margin Group", Params: null};
    this.ElectrumComponents[MarginRunListComponentName] = { ID: 2, Name: MarginRunListComponentName, Title: "Margin Run", Params: null};
    this.ElectrumComponents[ClientProfileComponentName] = { ID: 3, Name: ClientProfileComponentName, Title: "Client Profile", Params: null};
  } 
  
  private RegisterRibbonItems(){
    //Margin
    var mgItem: RibbonItemInfo = {ID: 1,Title: this.ElectrumComponents[MarginGroupListComponentName].Title, Image:"Images/Copy.svg", 
      Tag: this.ElectrumComponents[MarginGroupListComponentName]};
    var mrItem: RibbonItemInfo = {ID: 1,Title: this.ElectrumComponents[MarginRunListComponentName].Title, Image:"Images/Edit.svg", 
      Tag: this.ElectrumComponents[MarginRunListComponentName]};
    var cpItem: RibbonItemInfo = {ID: 1,Title: this.ElectrumComponents[ClientProfileComponentName].Title, Image:"Images/Link.svg", 
      Tag: this.ElectrumComponents[ClientProfileComponentName]};
    var group1: RibbonGroupInfo = {ID: 1, Title: "Group 1", Items: [mgItem, mrItem, cpItem]};
    var marginPage: RibbonPageInfo = {ID: 1, Title: 'Margin', Groups: [group1]};

    this.RibbonPages.push(marginPage);
  }
  
}

export default new Register();

  