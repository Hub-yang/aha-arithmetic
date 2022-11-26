<template>
  <h3>快速排序，输入整数，以","隔开，点击按钮查看排序结果</h3>
  <input type="text" v-focus v-model.trim="sortNum" />
  <button @click="handleClick('asc')">升序排序</button>
  <button @click="handleClick('desc')">降序排序</button>
  <h3>
    结果：<span v-if="res.length">{{ res }}</span>
  </h3>
</template>

<script setup>
const sortNum = ref("")
const res = ref([])
let sortArr = []

function handleClick(sortBy) {
  if (sortNum.value) {
    sortArr = sortNum.value.split(",").map(item => Number(item))
    // 初始化left与right
    let left = 0
    let right = sortArr.length - 1

    if (sortBy === "asc") {
      quicksortByAsc(left, right)
      res.value = sortArr
    } else if (sortBy === "desc") {
      quicksortByDesc(left, right)
      res.value = sortArr
    }
    setTimeout(() => {
      sortNum.value = ""
    }, 100)
  } else {
    alert("请输入数字，并以‘,’隔开")
  }
}

function quicksortByAsc(left, right) {
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
  quicksortByAsc(left, i - 1)
  // 递归处理基准数右边的
  quicksortByAsc(i + 1, right)
  return
}

function quicksortByDesc(left, right) {
  if (left > right) {
    return
  }

  // 定义循环变量
  let temp = sortArr[left]
  let i = left
  let j = right

  while (i != j) {
    // 从右侧开始
    while (sortArr[j] <= temp && i < j) {
      j--
    }

    while (sortArr[i] >= temp && i < j) {
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
  quicksortByDesc(left, i - 1)
  // 递归处理右侧
  quicksortByDesc(i + 1, right)
  return
}
</script>

<style scoped>

</style>
