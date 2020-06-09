<!--
 * @Author: zouzheng
 * @Date: 2020-06-08 17:30:57
 * @LastEditors: zouzheng
 * @LastEditTime: 2020-06-09 09:21:50
 * @Description: 这是excel导出插件（页面）
--> 
<template>
  <excel-export :bookType="bookType" :filename="filename" :sheet="sheet">
    <div class="export-btn">导出表格</div>
  </excel-export>
</template>

<script>
import { ExcelExport } from 'pikaz-excel-js'
export default {
  props: {},
  components: { ExcelExport },
  data () {
    return {
      bookType: 'xlsx',
      filename: '组件demo',
      sheet: [
        {
          title: '组件信息',
          tHeader: ['作者', '语言', '组件用途'],
          table: [{ author: 'pikaz', language: 'javascript', application: '导出表格' }],
          keys: ['author', 'language', 'application'],
          sheetName: '插件信息',
          cellStyle: [
            {
              cell: 'A1',
              font: {
                sz: 14,
                color: { rgb: "ffffff" },
                bold: true,
              },
              fill: {
                fgColor: { rgb: "ff7e00" },
              }
            }
          ]
        }
      ]
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
.export-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 30px;
  background: #ff7e00;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
}
</style>