<template>
  <h3>简单桶排序输入整数，以","隔开，点击按钮查看排序结果</h3>
  <input type="text" v-focus ref="input" v-model.trim="sortNum" />
  <button @click="handleClick('asc')">升序排序</button>
  <button @click="handleClick('desc')">降序排序</button>
  <h3>
    结果：<span v-show="res.length">{{ res }}</span>
  </h3>
</template>

<script setup>
const input = ref()
const res = ref([])
const sortNum = ref("")
function handleClick(sortBy) {
  const sortArr = sortNum.value
    .replace(/\s*/g, "")
    .split(",")
    .map((num) => Number(num))

  const intNum = Math.max(...sortArr)

  bucketSort(sortArr, intNum, sortBy)

  setTimeout(() => {
    sortNum.value = ""
  }, 100)
}

// 核心逻辑
// [5, 3, 5, 2, 8]
function bucketSort(sortArr, intNum, sortBy) {
  let resArr = []
  // 创建intNUm+1个桶
  const arr = new Array(intNum + 1)
  for (let i = 0; i <= intNum; i++) {
    arr[i] = 0
  }

  // 将目标放在对应的桶中（目标累加）
  for (let i = 0; i < sortArr.length; i++) {
    arr[sortArr[i]]++
  }

  // 依次循环遍历打印目标
  if (sortBy == "asc") {
    // 升序
    for (let i = 0; i <= intNum; i++) {
      for (let j = 1; j <= arr[i]; j++) {
        resArr.push(i)
      }
    }
  } else {
    // 降序
    for (let i = intNum; i >= 0; i--) {
      for (let j = 0; j < arr[i]; j++) {
        resArr.push(i)
      }
    }
  }
  res.value = resArr
}
</script>

<style scoped></style>
