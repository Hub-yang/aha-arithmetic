<template>
  <h1>Num1</h1>
</template>

<script setup>
import { ref, reactive } from "vue"

const arr = Array(11)
for (let i = 0; i <= 10; i++) {
  arr[i] = 0
}

bucketSort(arr, [5, 3, 5, 2, 8])
function bucketSort(sortArr, arr) {
  for (let i = 0; i < arr.length; i++) {
    sortArr[arr[i]]++
  }
  for (let i = 0; i <= 10; i++) {
    for (let j = 1; j <= sortArr[i]; j++) {
      console.log(i)
    }
  }
}


</script>

<style scoped>

</style>
