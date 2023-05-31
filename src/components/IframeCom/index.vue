<!--
 * @Author: zouzheng
 * @Date: 2020-06-08 17:31:13
 * @LastEditors: zouzheng
 * @LastEditTime: 2020-06-09 10:14:41
 * @Description: 这是iframe插件（页面）
--> 
<template>
  <div class="demo">
    <pikaz-iframe :setting="setting">
    </pikaz-iframe>
  </div>
</template>

<script>
import { PikazIframe } from 'pikaz-iframe'
export default {
  props: {},
  components: { PikazIframe },
  data () {
    return {
      setting: {
        src: "https://m.baidu.com/hualc"
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
