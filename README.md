<!--
 * @Author: zouzheng
 * @Date: 2020-06-08 17:13:20
 * @LastEditors: zouzheng
 * @LastEditTime: 2020-06-09 10:37:07
 * @Description: 这是XXX组件（页面）
--> 
## 多项目共用组件demo-组件

### 打包

```bash
npm run lib
```

### 生成导出文件
node script.js

### 提交git

第一次提交git
```bash
git init
git add .
git commit -m "commit"
git remote add origin https://github.com/pikaz-18/test.git
git push -u origin master
```

之后提交git，只需写在package.json中的命令中即可
```js
"scripts": {
  "push": "node script.js && npm run lib && git add . && git commit -m 'commit' && git push"
  }
```