import RibbonItemInfo from "./Ribbon/RibbonItemInfo";
import RibbonPageInfo from "./Ribbon/RibbonPageInfo";


class Register {
  constructor(){
    this.InitSystem();
  }

  public RibbonPages: Array<RibbonPageInfo>;

  private InitSystem() {
    this.RibbonPages = [
      {
        ID: 1,
        Title: 'Margin',
        Groups: [
          {
            ID: 1,
            Title: "Group 1",
            Items: [
              {
                ID: 1, 
                Title: "Margin Group", 
                Image:"Images/Copy.svg", 
                RibbonItemClickHanlder: null,
                Tag: { ID: 1, Name: "MarginGroup", Title: "Margin Group"}
              },
              {
                ID: 2, 
                Title: "Margin Group", 
                Image:"Images/Edit.svg", 
                RibbonItemClickHanlder: null,
                Tag: { ID: 1, Name: "MarginGroup", Title: "Margin Group"}
              },
              {
                ID: 3, 
                Title: "Margin Group", 
                Image:"Images/Link.svg", 
                RibbonItemClickHanlder: null,
                Tag: { ID: 1, Name: "MarginGroup", Title: "Margin Group"}
              }
            ]
          },
          {
            ID: 2,
            Title: "Group 2",
            Items: [
              {
                ID: 1, 
                Title: "Margin Group Run", 
                Image:"Images/Copy.svg", 
                RibbonItemClickHanlder: null,
                Tag: { ID: 1, Name: "MarginGroupRun", Title: "Margin Group Run"}
              },
              {
                ID: 2, 
                Title: "Margin Group Run", 
                Image:"Images/Edit.svg", 
                RibbonItemClickHanlder: null,
                Tag: { ID: 1, Name: "MarginGroupRun", Title: "Margin Group Run"}
              },
              {
                ID: 3, 
                Title: "Margin Group Run", 
                Image:"Images/Link.svg", 
                RibbonItemClickHanlder: null,
                Tag: { ID: 1, Name: "MarginGroupRun", Title: "Margin Group Run"}
              }
            ]
          },
        ]
      },
      {
        ID: 2,
        Title: "Maintenance",
        Groups: [
          {
            ID: 1,
            Title: "Group 1",
            Items: [           
              {
                ID: 1, 
                Title: "Open", 
                Image:"Images/Copy.svg", 
                RibbonItemClickHanlder: null,
                Tag: { ID: 1, Name: "ClientProfile", Title: "Client Profile"}
              },
              {
                ID: 2, 
                Title: "Close", 
                Image:"Images/Edit.svg", 
                RibbonItemClickHanlder: null,
                Tag: { ID: 1, Name: "ClientProfile", Title: "Client Profile"}
              },
              {
                ID: 3, 
                Title: "New", 
                Image:"Images/Link.svg", 
                RibbonItemClickHanlder: null,
                Tag: { ID: 1, Name: "ClientProfile", Title: "Client Profile"}
              }
            ]
          },
          {
            ID: 2,
            Title: "Group 2",
            Items: [
              {
                ID: 1, 
                Title: "Open", 
                Image:"Images/Copy.svg", 
                RibbonItemClickHanlder: null,
                Tag: { ID: 1, Name: "ClientProfile", Title: "Client Profile"}
              },
              {
                ID: 2, 
                Title: "Close", 
                Image:"Images/Edit.svg", 
                RibbonItemClickHanlder: null,
                Tag: { ID: 1, Name: "ClientProfile", Title: "Client Profile"}
              },
              {
                ID: 3, 
                Title: "New", 
                Image:"Images/Link.svg", 
                RibbonItemClickHanlder: null,
                Tag: { ID: 1, Name: "ClientProfile", Title: "Client Profile"}
              }
            ]
          },
        ]
      }
    ];
  }
  
  public RegisterComponent(param: RibbonItemInfo) {
    
  } 
}

export default new Register();

  