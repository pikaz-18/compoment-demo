/*
 * @Author: zouzheng
 * @Date: 2020-06-08 17:32:32
 * @LastEditors: zouzheng
 * @LastEditTime: 2020-06-08 17:54:55
 * @Description: 这是XXX组件（页面）
 */
const fs = require('fs');
const path = require('path');

fs.readdir(path.join(__dirname, './src/components'), function (err, files) {
  if (err) {
    return console.log('目录不存在')
  }
  // 设置时间戳以提交git
  let content = `/*${new Date()}*/`
  let ex = []
  // 处理导出代码
  files.forEach(item => {
    // 读取目录名
    const name = item.replace(".vue", "")
    content = content + `import ${name} from './components/${name}';`
    ex.push(name)
  })
  ex = ex.join(",")
  content = content + `export { ${ex} }; `

  fs.writeFile(path.join(__dirname, './src/import.js'), content, 'utf8', (err) => {
    if (err) throw err;
  });
})