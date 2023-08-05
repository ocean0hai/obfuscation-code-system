<script lang="ts" setup>
import { api } from "@/api/request";
import AdminDialog from "@/components/admin/AdminDialog.vue";
import { objType } from "@/type";
import { Icon } from "@iconify/vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
const router = useRouter();
onMounted(() => {
  getUser();
});
const userData = ref<objType>({});
let userSub = ref<objType>({});
const childRef: any = ref(null);
async function getUser() {
  const uid = localStorage.getItem("loginId");
  const res: any = await api.get(`/user/query/${uid}`);
  if (typeof res === "undefined") {
    return;
  }

  userData.value = { ...res.data };
  userData.value["password"] = "";
  console.log(res);
  Object.keys(userData.value).forEach((item) => {
    if (!inputP(item)) userSub.value[item] = userData.value[item];
  });
}

async function putUser(id: number) {
  const { password, ...data } = userSub.value;
  if (password !== "") {
    data["password"] = password;
  }
  const uid = localStorage.getItem("loginId");
  const res: any = await api.put("/user/update", {
    id: uid,
    ...data,
  });
  if (res?.code === 200) {
    ElMessage.success("修改成功！");
      getUser();
    if (password !== "") router.push({ path: "/login" });
  }
}
function inputValue(key: string, value: string) {
  userSub.value[key] = value;
}

function inputP(str: string) {
  const arr = ["id", "state", "createTime", "updateTime", "status"];
  return arr.includes(str);
}
</script>

<template>
  <div class="w-[500px] mx-auto mt-5">
    <Icon
      @click="router.push({ path: '/home/index' })"
      class="w-10 h-10"
      icon="pajamas:go-back"
    />
    <div class="mx-auto w-[300px]">
      <Icon class="w-[300px] h-[300px]" icon="ic:baseline-person" />
    </div>
    <div class="w-96 mx-auto" v-for="(value, key) in userData" :key="key">
      <div v-if="key !== 'password'">
        <div class="w-96 text-xl flex my-3">
          <div class="w-1/3 block text-right mr-1">{{ key }}</div>
          :
          <div class="w-2/3 block ml-1">{{ value }}</div>
        </div>
      </div>
    </div>
    <div class="w-24 mx-auto my-2">
      <AdminDialog :put-user="putUser">
        <template #button> 修改信息 </template>
        <template #customize>
          <div class="w-full" v-for="(value, key) in userSub" :label="key">
            <el-form-item v-if="!inputP(key + '')" :label="key">
              <!-- 普通的输入框 -->
              <input
                class="input w-full input-bordered h-8"
                :value="userSub[key]"
                @blur="
                  inputValue(
                    key + '',
                    ($event.target as HTMLInputElement).value
                  )
                "
                autocomplete="off"
              />
            </el-form-item>
          </div>
        </template>
      </AdminDialog>
    </div>
  </div>
</template>

<style scoped></style>
