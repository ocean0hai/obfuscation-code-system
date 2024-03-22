import { api } from "@/api/request";
import { ElMessage } from "element-plus";
import { ref } from "vue";

export function getTableDate(address:string){
  const data=ref<Array<any>>([])
  const datatotal=ref<number>(1)
  const currentpage=ref<number>(1)
  const search=ref<string>('')
  async function getData(name='') {
    const res:any= await api.get(address,{
      params:{
        page:currentpage.value,
        limit:10,
        fileName:search.value
      }
    })
    if (res?.code===200) {
      const {total,records}=res.data
      datatotal.value=total
      data.value=records
      
    }else{
      ElMessage.error('出错了！！')
    }
  }
  async function deleteData(id:number){
    if(data.value.length===1)datatotal.value-=1
    const res:any= await api.delete(`/api/file/remove/fileId/${id}`)
    if ( res?.code) {
      ElMessage.success('删除成功！')
      getData() 
    }else{
      datatotal.value +=1
      ElMessage.error('删除失败！')
    }
}

async function searchData(value:string){
  if (value==='') {
    search.value=''
    getData()
    return ;
  }else{
    search.value=value
    currentpage.value=1
    getData(value)
    
  }
}

async function handleCurrent(val:any) {
  currentpage.value=val
  getData()
}
  return{
    deleteData,
    searchData,
    handleCurrent,
    getData,
    data,
    datatotal
  } 
}