import { ElMessage } from "element-plus";
import { api } from "./request";
import { uploadStore } from "@/store";
const store=uploadStore()
const {upload}=store
//pType 保护类型
export async function submitParameter(parameter:Array<string>){
  const {fileName}=upload
  const pType ='2'
  const res:any= await api.post(`/api/file/protect/${pType}/${fileName}`,parameter)
  if (res.code===200) {
    ElMessage.success('文件保护成功！！') 
  } 
}

// ['1',34]

// ['2',45]
// ['3',67]

