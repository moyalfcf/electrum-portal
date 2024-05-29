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
                Title: "Open", 
                Image:"Images/Copy.png", 
                ComponentName: "cmp name",
                Tag: null
              },
              {
                ID: 2, 
                Title: "Close", 
                Image:"Images/Edit.svg", 
                ComponentName: "cmp name",
                Tag: null
              },
              {
                ID: 3, 
                Title: "New", 
                Image:"Images/View.png", 
                ComponentName: "cmp name",
                Tag: null
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
                Image:"Images/Copy.png", 
                ComponentName: "cmp name",
                Tag: null
              },
              {
                ID: 2, 
                Title: "Close", 
                Image:"Images/Edit.svg", 
                ComponentName: "cmp name",
                Tag: null
              },
              {
                ID: 3, 
                Title: "New", 
                Image:"Images/View.png", 
                ComponentName: "cmp name",
                Tag: null
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
                Image:"Images/Copy.png", 
                ComponentName: "cmp name",
                Tag: null
              },
              {
                ID: 2, 
                Title: "Close", 
                Image:"Images/Edit.svg", 
                ComponentName: "cmp name",
                Tag: null
              },
              {
                ID: 3, 
                Title: "New", 
                Image:"Images/View.png", 
                ComponentName: "cmp name",
                Tag: null
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
                Image:"Images/Copy.png", 
                ComponentName: "cmp name",
                Tag: null
              },
              {
                ID: 2, 
                Title: "Close", 
                Image:"Images/Edit.svg", 
                ComponentName: "cmp name",
                Tag: null
              },
              {
                ID: 3, 
                Title: "New", 
                Image:"Images/View.png", 
                ComponentName: "cmp name",
                Tag: null
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

  