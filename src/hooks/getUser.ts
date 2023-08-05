import { api } from "@/api/request";
import { objType } from "@/type";
import { ElMessage } from "element-plus";
import { ref } from "vue";

export function getUserDate(address: string) {
  const data = ref<Array<any>>([]);
  const datatotal = ref<number>(1);
  const currentpage = ref<number>(1);
  const search = ref<string>("");
  const userobj = ref<objType>({});
  async function getData(name = "") {

    const res: any = await api.get(address, {
      params: {
        pageNum: currentpage.value,
        pageSize: 10,
        userName: search.value,
      },
    });

    if (res?.code === 200) {
      const { total, records } = res.data;
      datatotal.value = total;
      data.value = records;
      console.log(data.value);
    } else {
      ElMessage.error("出错了！！");
    }
  }
  async function deleteData(id: number) {
    if (data.value.length === 1) datatotal.value -= 1;
    const res: any = await api.put(`/user/status/${id}`);
    if (res?.code) {
      ElMessage.success("操作成功！");
      getData();
    } else {
      datatotal.value += 1;
      ElMessage.error("操作失败！");
    }
  }

  async function searchData(value: string) {
    if (value === "") {
      search.value = "";
      getData();
      return;
    } else {
      search.value = value;
      currentpage.value = 1;
      getData(value);
    }
  }

  async function handleCurrent(val: any) {
    currentpage.value = val;
    getData();
  }
  //更新用户信息
  async function putUser(id: number) {
    userobj.value["id"] = id;
    const res: any = await api.put("/user/update", {
      ...userobj.value,
    });
    if (res?.code === 200) {
      userobj.value = {};
      getData();
      ElMessage.success("修改成功！！");
    }
  }
  function inputValue(key: string, value: string) {
    userobj.value[key] = value;
  }
  return {
    deleteData,
    searchData,
    handleCurrent,
    getData,
    userobj,
    putUser,
    inputValue,
    data,
    datatotal,
  };
}
