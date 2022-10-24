<template>
  <h3>冒泡排序，输入整数，以","隔开，点击按钮查看排序结果</h3>
  <input type="text" v-focus ref="input" v-model.trim="sortNum" />
  <button @click="handleClick('asc')">升序排序</button>
  <button @click="handleClick('desc')">降序排序</button>
  <h3>
    结果：<span v-show="res.length">{{ res }}</span>
  </h3>
</template>

<script setup>
import { ref, reactive } from "vue"

const sortNum = ref("")
const input = ref()
const res = ref([])

function handleClick(sortBy) {
  const sortArr = sortNum.value
    .replace(/\s*/g, "")
    .split(",")
    .map((num) => Number(num))

  bubbleSort(sortArr, sortBy)

  setTimeout(() => {
    sortNum.value = ""
  }, 100)
}

function bubbleSort(arr, sortBy) {
  // 冒泡排序核心代码
  for (let i = 1; i <= arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      // 升序
      if (sortBy == "asc") {
        let temp = arr[j]
        if (arr[j] > arr[j + 1]) {
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
        }
        // 降序
      } else {
        let temp = arr[j]
        if (arr[j] < arr[j + 1]) {
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
        }
      }
    }
  }
  res.value = arr
}
</script>

<style scoped></style>
