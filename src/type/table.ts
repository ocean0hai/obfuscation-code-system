import { objType } from "./index"

export interface dataType{
    name:string,
    content:string
}
export interface historytableType{
    originalFileName:string,
    queryFileId:number
    resultFileName:string,
    updateTime:string  
}
export interface userType extends objType{
    id:number,
    username:string,
    phone:string,
    password:string,
    email:string,   
    state:string
}
export interface columnsType{
    key:string,
    dataIndex:string,
    label:string
}
export interface fileType{
   id:number,
   name:string,
   memory:string,
   store:string,
   type:string,
   createTime:string 
}