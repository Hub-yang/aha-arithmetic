<template>
  <h3>冒泡排序，输入整数，以","隔开，点击按钮查看排序结果</h3>
  <input type="text" v-focus ref="input" v-model.trim="sortNum" />
  <button @click="handleClick('asc')">升序排序</button>
  <button @click="handleClick('desc')">降序排序</button>
  <h3>
    <!-- 结果：<span v-show="res.length">{{ res }}</span> -->
  </h3>
</template>

<script setup>
import { ref } from "vue"

const sortNum = ref("")
const input = ref()
const res = ref([])

let sortArr = [6, 1, 2, 7, 9, 3, 4, 5, 10, 8]

function handleClick(sortBy) {
  // const sortArr = sortNum.value
  //   .replace(/\s*/g, "")
  //   .split(",")
  //   .map((num) => Number(num))

  // 初始化left与right
  let left = 0
  let right = sortArr.length - 1

  if (sortBy === "asc") {
    res.value = quicksortByAsc(left, right, sortArr)
    console.log(res.value)
  } else if (sortBy === "desc") {
    res.value = quicksortByDesc(left, right, sortArr)
    console.log(res.value)
  }
  setTimeout(() => {
    sortNum.value = ""
  }, 100)
}

function quicksortByAsc(left, right, sortArr) {
  if (left > right) {
    return
  }

  // 基准数（最左侧）
  let temp = sortArr[left]
  let i = left
  let j = right
  while (i != j) {
    // 顺序很重要，要先从右往左找
    while (sortArr[j] >= temp && i < j) {
      j--
    }

    while (sortArr[i] <= temp && i < j) {
      i++
    }

    // 交换两数位置
    // i和j没有相遇时
    if (i < j) {
      let t = sortArr[i]
      sortArr[i] = sortArr[j]
      sortArr[j] = t
    }
  }
  // 最终将基准数归位
  sortArr[left] = sortArr[i]
  sortArr[i] = temp

  // 递归处理基准数左边的
  quicksortByAsc(left, i - 1, sortArr)
  // 递归处理基准数右边的
  quicksortByAsc(i + 1, right, sortArr)
}

function quicksortByDesc(left, right, sortArr) {
  if (left > right) {
    return sortArr
  }

  // 定义循环变量
  let temp = sortArr[left]
  let i = left
  let j = right

  while (i != j) {
    // 从右侧开始
    while (sortArr[j] >= temp && i < j) {
      j--
    }

    while (sortArr[i] <= temp && i < j) {
      i++
    }

    // 调换位置
    let t = sortArr[i]
    sortArr[i] = sortArr[j]
    sortArr[j] = t
  }
  sortArr[left] = sortArr[i]
  sortArr[i] = temp
  // 递归处理左侧
  quicksortByDesc(left, i - 1, sortArr)
  // 递归处理右侧
  quicksortByDesc(i + 1, right, sortArr)
}
</script>

<style scoped></style>
