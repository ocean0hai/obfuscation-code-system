import { paramerType } from "./../type/index";
import { ElMessage } from "element-plus";
import { api } from "./request";
import { uploadStore } from "@/store";
const store = uploadStore();
const { upload } = store;
interface propsType {
  pType?: string;
  paramerarry: Array<string>;
}
//pType 保护类型
export async function submitParameter(
  parameter: Array<string>,
  pType?: string
) {
  const { fileName } = upload;
  pType = pType !== "1" ? "2" : "1";
  const res: any = await api.post(
    `/api/file/protect/${pType}/${fileName}`,
    parameter
  );
  if (res?.code === 200) {
    ElMessage.success("文件保护成功！！");
  } else {
    console.log(res);
  }
}

// ['1',34]

// ['2',45]
// ['3',67]
