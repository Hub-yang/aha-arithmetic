<template>
  <h3>简单筒排序(1~10,最多10个)，输入数字，以","隔开，回车键查看排序结果</h3>
  <input type="text" v-focus v-model.trim="sortNum" @keyup="handleKeyup">
  <h3>结果：<span v-show="res.length">{{res}}</span></h3>
</template>

<script setup>
import { ref, reactive } from "vue"

const vFocus = {
  mounted(el) {
    el.focus()
  }
}
const res = ref([])
const sortNum = ref("")
function handleKeyup(e) {
  if (e.key == "Enter") {
    const sortArr = sortNum.value.split(",").map((num) => Number(num))
    if (sortArr.some((num) => num > 10 || num < 1)) {
      alert("请输入1~10以内的数字！")
    } else if (sortArr.length >= 10) {
      alert("最多输入10个数字！")
    } else {
      bucketSort(sortArr)
    }
    setTimeout(() => {
      sortNum.value = ""
    }, 100)
  }
}

// 核心逻辑
// [5, 3, 5, 2, 8]
function bucketSort(sortArr) {
  let resArr = []
  const arr = new Array(11)
  for (let i = 0; i <= 10; i++) {
    arr[i] = 0
  }

  for (let i = 0; i < sortArr.length; i++) {
    arr[sortArr[i]]++
  }

  for (let i = 0; i <= 10; i++) {
    for (let j = 1; j <= arr[i]; j++) {
      resArr.push(i)
    }
  }
  res.value = resArr
}


</script>

<style scoped>

</style>
