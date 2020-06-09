<!--
 * @Author: zouzheng
 * @Date: 2020-06-08 17:31:13
 * @LastEditors: zouzheng
 * @LastEditTime: 2020-06-09 09:23:33
 * @Description: 这是iframe插件（页面）
--> 
<template>
  <div class="demo">
    <pikaz-iframe :setting="setting">
    </pikaz-iframe>
  </div>
</template>

<script>
export default {
  props: {},
  components: {},
  data () {
    return {
      setting: {
        src: "https://m.baidu.com/"
      }
    }
  },
  created () {
  },
  mounted () {
  },
  methods: {},
  computed: {},
  watch: {},
}
</script>

<style scoped>
.demo {
  width: 375px;
  height: 700px;
  box-shadow: 0px 2px 20px 0px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(230, 230, 230, 1);
}
</style>