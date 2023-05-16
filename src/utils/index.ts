import { objType,formType,paramerType } from "@/type"

export function transformObj(Arr:Array<formType>){
  const obj:objType={}
  Arr.map(item=>{
    if(item.type==='checkbox')
    obj[item.key] =false
    else obj[item.key]=''
  })
  return obj
}


