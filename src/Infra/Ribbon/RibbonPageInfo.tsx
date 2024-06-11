import RibbonGroupInfo from "./RibbonGroupInfo";
import RibbonItemInfo from "./RibbonItemInfo";

interface RibbonPageInfo{
    ID : number;
    Title: string;
    Groups: Array<RibbonGroupInfo>;
    RibbonItemClickHanlder: ((param: RibbonItemInfo) => void) | null;
}
export default RibbonPageInfo;

