<template>
  <vie-call :value ='test'></vie-call>
</template>

<script>
import {test} from '@/lang/Expr'

export default {
  name: 'App',
  data:()=>({test})
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
