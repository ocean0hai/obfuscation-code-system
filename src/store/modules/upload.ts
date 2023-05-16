import { defineStore } from "pinia";
const uploadStore=defineStore('upload',{
    state:()=>{
        return{
         upload:{
            pType:'',
            fileName:''
         }  
        }
    },
    actions:{
        changUpload(pType:string,fileName:string){
            this.upload.pType=pType
            this.upload.fileName=fileName
        }
    }
})
export default uploadStore