import RibbonItemInfo from "./RibbonItemInfo";

interface RibbonGroupInfo{
    ID : number;
    Title: string;
    Items: Array<RibbonItemInfo>;
    RibbonItemClickHanlder: (param: RibbonItemInfo) => void;
}
export default RibbonGroupInfo;