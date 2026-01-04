# Launchory 网站项目

这是Launchory应用的官方网站，使用现代HTML、CSS和JavaScript构建，符合Netlify前端技术规范。

## 项目概述

Launchory是为现代工作流程设计的macOS应用启动器，旨在填补macOS Tahoe变更留下的空白。它不仅是一个替代品，更是一次升级，将用户喜爱的熟悉、直观的网格界面与强大的新自定义和组织功能相结合。

## 技术栈

- HTML5
- CSS3 (使用CSS变量和现代布局)
- 原生JavaScript (无框架依赖)
- Google Fonts (Inter字体)
- 响应式设计 (移动优先)

## 项目结构

```
launchory-website/
├── index.html      # 主页面
├── styles.css      # 样式表
├── script.js       # 交互脚本
├── netlify.toml    # Netlify配置文件
└── README.md       # 项目说明
```

## 功能特点

- 响应式设计，适配各种设备
- 平滑滚动和导航
- 动画效果和过渡
- 移动端友好的菜单
- 功能卡片展示
- 下载交互提示
- 隐私政策页面

## 部署到Netlify

### 方法一：通过Git仓库部署

1. 将项目推送到Git仓库（GitHub、GitLab或Bitbucket）
2. 在Netlify中创建新站点
3. 连接到您的Git仓库
4. 选择主分支（通常是main或master）
5. 构建设置保持默认（发布目录：根目录）
6. 点击"部署站点"

### 方法二：通过拖放部署

1. 访问[Netlify](https://app.netlify.com/drop)
2. 将整个项目文件夹拖放到页面中
3. 等待部署完成

### 方法三：使用Netlify CLI

1. 安装Netlify CLI：
   ```
   npm install -g netlify-cli
   ```

2. 在项目目录中登录Netlify：
   ```
   netlify login
   ```

3. 部署网站：
   ```
   netlify deploy --prod --dir=.
   ```

## 自定义和扩展

### 修改颜色主题

在`styles.css`文件中，修改`:root`选择器中的CSS变量：

```css
:root {
    --primary-color: #0071e3;      /* 主色调 */
    --secondary-color: #f5f5f7;    /* 次要颜色 */
    --text-color: #1d1d1f;        /* 文本颜色 */
    --text-secondary: #86868b;     /* 次要文本颜色 */
    /* 其他变量... */
}
```

### 添加新功能

1. 在HTML中添加新内容
2. 在CSS中添加相应样式
3. 在JavaScript中添加交互逻辑

## 浏览器兼容性

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 贡献

欢迎提交问题报告和功能请求。如果您想贡献代码，请：

1. Fork本项目
2. 创建功能分支
3. 提交您的更改
4. 创建Pull Request

## 许可证

本项目采用MIT许可证。详情请参阅LICENSE文件。

## 联系方式

如有任何问题或建议，请通过以下方式联系我们：

- 电子邮件：chenjianyu944@gmail.com
- 网站：[Launchory官网](https://your-domain.netlify.app)