import RibbonItemInfo from "./RibbonItemInfo";

interface RibbonGroupInfo{
    ID : number;
    Title: string;
    Items: Array<RibbonItemInfo>;
}
export default RibbonGroupInfo;