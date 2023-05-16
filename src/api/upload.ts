import { api } from "./request";
import { uploadStore } from "@/store";
import { storeToRefs } from "pinia";
const store=uploadStore()
const {upload}=store
//pType 保护类型
export async function submitParameter(parameter:Array<string>){
   const {fileName,pType}=upload
   console.log('uploadfile',upload);
   
   const res:any= await api.post(`/api/file/protect/${2}/${fileName}`,{
    ...parameter
   })
   console.log(res); 
}

