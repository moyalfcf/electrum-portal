
interface RibbonItemInfo{
    ID: number;
    Title: string; 
    Image: string; 
    Tag: object | null;
    RibbonItemClickHanlder: (param: RibbonItemInfo) => void; 
}
export default RibbonItemInfo;