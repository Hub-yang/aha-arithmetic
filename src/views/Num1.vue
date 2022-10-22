<template>
  <h3>简单桶排序(1~100,最多100个)，输入数字，以","隔开，点击按钮查看排序结果</h3>
  <input type="text" v-focus ref="input" v-model.trim="sortNum">
  <button @click="handleClick('asc')">升序排序</button>
  <button @click="handleClick('desc')">降序排序</button>
  <h3>结果：<span v-show="res.length">{{res}}</span></h3>
</template>

<script setup>
import { ref, reactive } from "vue"

const vFocus = {
  mounted(el) {
    el.focus()
  }
}
const input = ref()
const res = ref([])
const sortNum = ref("")
function handleClick(sortBy) {
  const sortArr = sortNum.value.replace(/\s*/g, "").split(",").map((num) => Number(num))
  if (sortArr.some((num) => num > 100 || num < 1)) {
    alert("请输入1~100以内的数字！")
    input.value.focus()
  } else if (sortArr.length >= 100) {
    alert("最多输入100个数字！")
    input.value.focus()
  } else {
    bucketSort(sortArr, sortBy)
  }
  setTimeout(() => {
    sortNum.value = ""
  }, 100)
}

// 核心逻辑
// [5, 3, 5, 2, 8]
function bucketSort(sortArr, sortBy) {
  let resArr = []
  // 0~100,创建101个桶，初始化为0
  const arr = new Array(101)
  for (let i = 0; i <= 100; i++) {
    arr[i] = 0
  }

  // 将目标放在对应的桶中（目标累加）
  for (let i = 0; i < sortArr.length; i++) {
    arr[sortArr[i]]++
  }

  // 依次循环遍历打印目标
  if (sortBy == 'asc') {
    // 升序
    for (let i = 0; i <= 100; i++) {
      for (let j = 1; j <= arr[i]; j++) {
        resArr.push(i)
      }
    }
  } else {
    // 降序
    for (let i = 10; i >= 0; i--) {
      for (let j = 0; j < arr[i]; j++) {
        resArr.push(i)
      }
    }
  }
  res.value = resArr
}
</script>

<style scoped>

</style>
