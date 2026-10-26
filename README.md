# 班主任工作台 · 模板包

## 马上使用

解压后，双击 index.html 查看入口。点击「查看演示」了解效果；点击「开始使用」，填写班主任姓名和班级，再导入学生名单。

如果浏览器限制本地文件存储或多页面跳转，请在此文件夹打开终端运行：

```bash
python3 -m http.server 8080
```

然后打开 http://localhost:8080 。也可以将整个文件夹交给 AI 工具，要求预览或部署静态网页。

## 自己修改

1. 将本文件夹完整上传或拖入 AI 编程工具。
2. 复制 downloads/ai-instructions.md 的指令，补上自己的修改要求。
3. 要求 AI 基于现有代码修改并检查，而不是从头重新生成。

## 文件位置

| 文件 | 用途 |
| --- | --- |
| index.html / welcome.css / welcome.js | 三入口分享页与首次建班 |
| workspace.html | 工作台页面骨架 |
| app.js | 数据结构、演示数据、各模块逻辑、导入导出 |
| style.css | 工作台样式与手机适配 |
| icons.js / docx.js | 本地依赖，无需外部 CDN |
| downloads/template-spec.md | 产品与实现说明，可独立发给 AI |
| downloads/ai-instructions.md | 可直接复制的 AI 修改指令 |
| licenses/ | 第三方依赖许可 |
| build-template.py | 修改后重新生成源码压缩包 |

## 数据和版本

数据保存在当前浏览器，键名为 classdesk-v1。刷新、关闭后再次打开同一网址，资料可继续使用。清理网站数据会移除这些资料；换浏览器、换设备或换网址时请先导出 JSON 备份，再到新环境恢复。演示模式不写入个人数据，刷新后复原。

此版没有账号密码、云端同步和学生独立登录。成长宠物由教师在工作台操作；奖惩积分由老师手动记录。默认三科为语文、数学、英语，满分 100，需扩科请交给 AI 修改。

学生与成绩支持 XLSX/CSV 导入；各业务列表可导出 XLSX；学生报告、请假条、谈话及工作记录可导出 DOCX；座位表可导出 PNG。旧式 .xls 不支持。

## 重新分享和发布

部署此文件夹为静态网站，默认首页 index.html。无需 npm 安装和构建。此包不包含原网站的项目身份、Git 信息或个人录入数据，请发布到自己的新网址。

运行 `python3 build-template.py` 可刷新 downloads/classroom-template.zip；每次修改源码后重新执行，避免别人下载到旧版本。
