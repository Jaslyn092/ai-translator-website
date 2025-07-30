# AI专业术语翻译器

一个专为云计算和技术术语设计的智能翻译网站，基于AI技术提供准确的术语翻译服务。

## 🌟 功能特点

- **专业术语翻译**: 专门针对云计算、AI、数据库、网络技术等专业术语优化
- **多语言支持**: 支持中英文互译，以及日语、韩语
- **术语库**: 内置丰富的技术术语库，快速查找常用术语
- **翻译历史**: 自动保存翻译历史，方便重复使用
- **现代化UI**: 美观的渐变背景和卡片式设计
- **响应式布局**: 完美适配手机、平板、电脑等设备
- **免费部署**: 使用GitHub Pages免费部署，无需服务器费用

## 🚀 快速开始

### 方法一：直接使用（推荐）

1. 下载项目文件到本地
2. 双击打开 `index.html` 文件
3. 在浏览器中开始使用

### 方法二：GitHub Pages部署（免费）

#### 步骤1：创建GitHub仓库

1. 访问 [GitHub](https://github.com)
2. 点击右上角的 "+" 号，选择 "New repository"
3. 仓库名称填写：`ai-translator-website`
4. 选择 "Public"（公开）
5. 点击 "Create repository"

#### 步骤2：上传文件

1. 在新建的仓库页面，点击 "uploading an existing file"
2. 将项目中的所有文件拖拽上传：
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. 点击 "Commit changes"

#### 步骤3：启用GitHub Pages

1. 在仓库页面，点击 "Settings" 标签
2. 左侧菜单找到 "Pages"
3. 在 "Source" 部分，选择 "Deploy from a branch"
4. 在 "Branch" 下拉菜单中选择 "main"
5. 点击 "Save"
6. 等待几分钟，GitHub会自动生成网站链接

#### 步骤4：访问网站

部署完成后，你会看到一个类似这样的链接：
`https://你的用户名.github.io/ai-translator-website`

## 📁 项目结构

```
ai-translator-website/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # JavaScript功能
└── README.md          # 说明文档
```

## 🛠️ 技术栈

- **HTML5**: 页面结构
- **CSS3**: 现代化样式，包含渐变、动画、响应式设计
- **JavaScript**: 交互功能、本地存储、API调用
- **Font Awesome**: 图标库
- **GitHub Pages**: 免费托管服务

## 💡 使用说明

### 基本翻译

1. 在左侧文本框中输入要翻译的内容
2. 选择源语言和目标语言
3. 点击"开始翻译"按钮
4. 翻译结果会显示在右侧文本框中

### 专业术语库

1. 点击下方的术语分类（云计算、人工智能、数据库、网络技术）
2. 点击任意术语卡片，自动填入翻译框
3. 点击"开始翻译"进行翻译

### 翻译历史

- 所有翻译都会自动保存到历史记录
- 点击历史记录项可以重新加载
- 历史记录最多保存50条

### 其他功能

- **复制结果**: 点击右侧的复制按钮
- **朗读功能**: 点击朗读按钮（需要浏览器支持）
- **清空文本**: 点击清空按钮快速清除内容
- **交换语言**: 点击中间的交换按钮快速切换语言

## 🔧 自定义配置

### 添加新的AI API

在 `script.js` 文件中，找到 `simulateAITranslation` 函数，替换为真实的API调用：

```javascript
async function simulateAITranslation(text, sourceLang, targetLang) {
    // 替换为真实的API调用
    const response = await fetch('你的API端点', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 你的API密钥'
        },
        body: JSON.stringify({
            text: text,
            source: sourceLang,
            target: targetLang
        })
    });
    
    const result = await response.json();
    return result.translation;
}
```

### 添加新的术语

在 `script.js` 文件中，找到 `termDatabase` 对象，添加新的术语：

```javascript
const termDatabase = {
    cloud: [
        // 现有术语...
        { english: "新术语", chinese: "新术语翻译" }
    ],
    // 其他分类...
};
```

## 🌐 支持的AI服务

目前支持以下AI服务（需要自行配置API密钥）：

- **ChatGPT**: OpenAI的GPT模型
- **Gemini**: Google的Gemini模型
- **Claude**: Anthropic的Claude模型

## 📱 移动端适配

网站完全支持移动设备：
- 响应式设计，自动适配屏幕大小
- 触摸友好的按钮和输入框
- 优化的移动端布局

## 🔒 隐私说明

- 所有翻译历史仅保存在本地浏览器中
- 不会向第三方服务器发送用户数据
- 如需使用AI API，请确保API服务商的隐私政策

## 🆘 常见问题

### Q: 翻译功能不工作？
A: 当前版本使用模拟翻译，如需真实AI翻译，请配置相应的API密钥。

### Q: 如何添加更多语言？
A: 在 `index.html` 中的语言选择器添加新选项，并在 `script.js` 中添加相应的翻译逻辑。

### Q: 如何修改网站样式？
A: 编辑 `styles.css` 文件，修改相应的CSS规则。

### Q: 部署后网站无法访问？
A: 检查GitHub Pages设置是否正确，确保仓库为公开状态。

## 📞 技术支持

如果遇到问题，可以：
1. 检查浏览器控制台是否有错误信息
2. 确认所有文件都已正确上传
3. 清除浏览器缓存后重试

## 📄 许可证

本项目采用 MIT 许可证，可自由使用和修改。

## 🙏 致谢

- Font Awesome 提供的图标
- GitHub Pages 提供的免费托管服务
- 所有贡献者和用户的支持

---

**注意**: 这是一个演示项目，实际使用时建议配置真实的AI翻译API以获得更好的翻译效果。 