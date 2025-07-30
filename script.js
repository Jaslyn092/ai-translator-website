// 全局变量
let translationHistory = [];
let currentTerms = [];

// 专业术语库
const termDatabase = {
    cloud: [
        { english: "Virtual Machine", chinese: "虚拟机" },
        { english: "Container", chinese: "容器" },
        { english: "Load Balancer", chinese: "负载均衡器" },
        { english: "Auto Scaling", chinese: "自动扩缩容" },
        { english: "CDN", chinese: "内容分发网络" },
        { english: "API Gateway", chinese: "API网关" },
        { english: "Microservices", chinese: "微服务" },
        { english: "Serverless", chinese: "无服务器" },
        { english: "Kubernetes", chinese: "K8s容器编排" },
        { english: "Docker", chinese: "容器化技术" },
        { english: "Cloud Native", chinese: "云原生" },
        { english: "Infrastructure as Code", chinese: "基础设施即代码" }
    ],
    ai: [
        { english: "Machine Learning", chinese: "机器学习" },
        { english: "Deep Learning", chinese: "深度学习" },
        { english: "Neural Network", chinese: "神经网络" },
        { english: "Natural Language Processing", chinese: "自然语言处理" },
        { english: "Computer Vision", chinese: "计算机视觉" },
        { english: "Reinforcement Learning", chinese: "强化学习" },
        { english: "Transfer Learning", chinese: "迁移学习" },
        { english: "Data Mining", chinese: "数据挖掘" },
        { english: "Predictive Analytics", chinese: "预测分析" },
        { english: "AI Model", chinese: "AI模型" },
        { english: "Training Data", chinese: "训练数据" },
        { english: "Inference", chinese: "推理" }
    ],
    database: [
        { english: "Relational Database", chinese: "关系型数据库" },
        { english: "NoSQL", chinese: "非关系型数据库" },
        { english: "Data Warehouse", chinese: "数据仓库" },
        { english: "Data Lake", chinese: "数据湖" },
        { english: "ETL", chinese: "数据提取转换加载" },
        { english: "Index", chinese: "索引" },
        { english: "Query Optimization", chinese: "查询优化" },
        { english: "ACID", chinese: "原子性一致性隔离性持久性" },
        { english: "CAP Theorem", chinese: "CAP定理" },
        { english: "Sharding", chinese: "分片" },
        { english: "Replication", chinese: "复制" },
        { english: "Backup and Recovery", chinese: "备份与恢复" }
    ],
    network: [
        { english: "TCP/IP", chinese: "传输控制协议/网际协议" },
        { english: "DNS", chinese: "域名系统" },
        { english: "VPN", chinese: "虚拟专用网络" },
        { english: "Firewall", chinese: "防火墙" },
        { english: "Load Balancing", chinese: "负载均衡" },
        { english: "SSL/TLS", chinese: "安全套接层/传输层安全" },
        { english: "API", chinese: "应用程序编程接口" },
        { english: "REST", chinese: "表述性状态转移" },
        { english: "GraphQL", chinese: "查询语言" },
        { english: "WebSocket", chinese: "WebSocket协议" },
        { english: "Microservices", chinese: "微服务架构" },
        { english: "Service Mesh", chinese: "服务网格" }
    ]
};

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// 初始化应用
function initializeApp() {
    // 加载历史记录
    loadHistory();
    
    // 显示默认术语类别
    showTerms('cloud');
    
    // 添加事件监听器
    addEventListeners();
    
    // 更新字符计数
    updateCharCount();
}

// 添加事件监听器
function addEventListeners() {
    const sourceText = document.getElementById('sourceText');
    const targetText = document.getElementById('targetText');
    
    // 字符计数
    sourceText.addEventListener('input', updateCharCount);
    
    // 回车键翻译
    sourceText.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && e.ctrlKey) {
            translateText();
        }
    });
    
    // 自动调整文本框高度
    sourceText.addEventListener('input', autoResize);
    targetText.addEventListener('input', autoResize);
}

// 更新字符计数
function updateCharCount() {
    const sourceText = document.getElementById('sourceText');
    const charCount = document.getElementById('charCount');
    charCount.textContent = sourceText.value.length;
}

// 自动调整文本框高度
function autoResize() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
}

// 交换语言
function swapLanguages() {
    const sourceLanguage = document.getElementById('sourceLanguage');
    const targetLanguage = document.getElementById('targetLanguage');
    
    const tempValue = sourceLanguage.value;
    sourceLanguage.value = targetLanguage.value;
    targetLanguage.value = tempValue;
}

// 清空文本
function clearText() {
    document.getElementById('sourceText').value = '';
    document.getElementById('targetText').value = '';
    updateCharCount();
}

// 翻译文本
async function translateText() {
    const sourceText = document.getElementById('sourceText');
    const targetText = document.getElementById('targetText');
    const sourceLanguage = document.getElementById('sourceLanguage').value;
    const targetLanguage = document.getElementById('targetLanguage').value;
    
    if (!sourceText.value.trim()) {
        showNotification('请输入要翻译的文本', 'warning');
        return;
    }
    
    // 显示加载状态
    showLoading(true);
    
    try {
        // 模拟AI翻译（实际项目中需要调用真实的AI API）
        const translatedText = await simulateAITranslation(
            sourceText.value, 
            sourceLanguage, 
            targetLanguage
        );
        
        targetText.value = translatedText;
        
        // 保存到历史记录
        saveToHistory(sourceText.value, translatedText, sourceLanguage, targetLanguage);
        
        // 显示成功通知
        showNotification('翻译完成！', 'success');
        
    } catch (error) {
        console.error('翻译错误:', error);
        showNotification('翻译失败，请重试', 'error');
    } finally {
        showLoading(false);
    }
}

// 模拟AI翻译（实际项目中替换为真实的API调用）
async function simulateAITranslation(text, sourceLang, targetLang) {
    // 模拟网络延迟
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // 这里是一个简单的模拟翻译
    // 实际项目中，你需要调用ChatGPT、Gemini或其他AI API
    
    const translations = {
        'en-zh': {
            'Virtual Machine': '虚拟机',
            'Container': '容器',
            'Load Balancer': '负载均衡器',
            'Auto Scaling': '自动扩缩容',
            'CDN': '内容分发网络',
            'API Gateway': 'API网关',
            'Microservices': '微服务',
            'Serverless': '无服务器',
            'Kubernetes': 'K8s容器编排',
            'Docker': '容器化技术',
            'Cloud Native': '云原生',
            'Machine Learning': '机器学习',
            'Deep Learning': '深度学习',
            'Neural Network': '神经网络',
            'Natural Language Processing': '自然语言处理',
            'Computer Vision': '计算机视觉',
            'Reinforcement Learning': '强化学习',
            'Transfer Learning': '迁移学习',
            'Data Mining': '数据挖掘',
            'Predictive Analytics': '预测分析',
            'AI Model': 'AI模型',
            'Training Data': '训练数据',
            'Inference': '推理',
            'Relational Database': '关系型数据库',
            'NoSQL': '非关系型数据库',
            'Data Warehouse': '数据仓库',
            'Data Lake': '数据湖',
            'ETL': '数据提取转换加载',
            'Index': '索引',
            'Query Optimization': '查询优化',
            'ACID': '原子性一致性隔离性持久性',
            'CAP Theorem': 'CAP定理',
            'Sharding': '分片',
            'Replication': '复制',
            'Backup and Recovery': '备份与恢复',
            'TCP/IP': '传输控制协议/网际协议',
            'DNS': '域名系统',
            'VPN': '虚拟专用网络',
            'Firewall': '防火墙',
            'Load Balancing': '负载均衡',
            'SSL/TLS': '安全套接层/传输层安全',
            'API': '应用程序编程接口',
            'REST': '表述性状态转移',
            'GraphQL': '查询语言',
            'WebSocket': 'WebSocket协议',
            'Service Mesh': '服务网格'
        },
        'zh-en': {
            '虚拟机': 'Virtual Machine',
            '容器': 'Container',
            '负载均衡器': 'Load Balancer',
            '自动扩缩容': 'Auto Scaling',
            '内容分发网络': 'CDN',
            'API网关': 'API Gateway',
            '微服务': 'Microservices',
            '无服务器': 'Serverless',
            'K8s容器编排': 'Kubernetes',
            '容器化技术': 'Docker',
            '云原生': 'Cloud Native',
            '机器学习': 'Machine Learning',
            '深度学习': 'Deep Learning',
            '神经网络': 'Neural Network',
            '自然语言处理': 'Natural Language Processing',
            '计算机视觉': 'Computer Vision',
            '强化学习': 'Reinforcement Learning',
            '迁移学习': 'Transfer Learning',
            '数据挖掘': 'Data Mining',
            '预测分析': 'Predictive Analytics',
            'AI模型': 'AI Model',
            '训练数据': 'Training Data',
            '推理': 'Inference',
            '关系型数据库': 'Relational Database',
            '非关系型数据库': 'NoSQL',
            '数据仓库': 'Data Warehouse',
            '数据湖': 'Data Lake',
            '数据提取转换加载': 'ETL',
            '索引': 'Index',
            '查询优化': 'Query Optimization',
            '原子性一致性隔离性持久性': 'ACID',
            'CAP定理': 'CAP Theorem',
            '分片': 'Sharding',
            '复制': 'Replication',
            '备份与恢复': 'Backup and Recovery',
            '传输控制协议/网际协议': 'TCP/IP',
            '域名系统': 'DNS',
            '虚拟专用网络': 'VPN',
            '防火墙': 'Firewall',
            '安全套接层/传输层安全': 'SSL/TLS',
            '应用程序编程接口': 'API',
            '表述性状态转移': 'REST',
            '查询语言': 'GraphQL',
            'WebSocket协议': 'WebSocket',
            '服务网格': 'Service Mesh'
        }
    };
    
    const langPair = `${sourceLang}-${targetLang}`;
    const translationMap = translations[langPair];
    
    if (translationMap && translationMap[text]) {
        return translationMap[text];
    }
    
    // 如果没有找到精确匹配，返回一个通用的翻译
    if (sourceLang === 'en' && targetLang === 'zh') {
        return `[AI翻译] ${text} - 这是通过AI技术翻译的结果，专为技术术语优化。`;
    } else if (sourceLang === 'zh' && targetLang === 'en') {
        return `[AI Translation] ${text} - This is the result translated by AI technology, optimized for technical terms.`;
    } else {
        return `[AI翻译] ${text} - 这是通过AI技术翻译的结果。`;
    }
}

// 显示术语
function showTerms(category) {
    const termsList = document.getElementById('termsList');
    const categories = document.querySelectorAll('.term-category');
    
    // 更新活动状态
    categories.forEach(cat => cat.classList.remove('active'));
    event.target.classList.add('active');
    
    // 获取术语数据
    currentTerms = termDatabase[category] || [];
    
    // 渲染术语列表
    termsList.innerHTML = currentTerms.map(term => `
        <div class="term-item" onclick="useTerm('${term.english}')">
            <div class="term-english">${term.english}</div>
            <div class="term-chinese">${term.chinese}</div>
        </div>
    `).join('');
}

// 使用术语
function useTerm(term) {
    document.getElementById('sourceText').value = term;
    updateCharCount();
    showNotification(`已添加术语: ${term}`, 'info');
}

// 复制结果
function copyResult() {
    const targetText = document.getElementById('targetText');
    
    if (!targetText.value.trim()) {
        showNotification('没有可复制的内容', 'warning');
        return;
    }
    
    navigator.clipboard.writeText(targetText.value).then(() => {
        showNotification('已复制到剪贴板', 'success');
    }).catch(() => {
        // 备用复制方法
        targetText.select();
        document.execCommand('copy');
        showNotification('已复制到剪贴板', 'success');
    });
}

// 朗读结果
function speakResult() {
    const targetText = document.getElementById('targetText');
    
    if (!targetText.value.trim()) {
        showNotification('没有可朗读的内容', 'warning');
        return;
    }
    
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(targetText.value);
        utterance.lang = getLanguageCode(document.getElementById('targetLanguage').value);
        speechSynthesis.speak(utterance);
        showNotification('正在朗读...', 'info');
    } else {
        showNotification('您的浏览器不支持语音朗读功能', 'warning');
    }
}

// 获取语言代码
function getLanguageCode(language) {
    const codes = {
        'en': 'en-US',
        'zh': 'zh-CN',
        'ja': 'ja-JP',
        'ko': 'ko-KR'
    };
    return codes[language] || 'en-US';
}

// 保存到历史记录
function saveToHistory(original, translated, sourceLang, targetLang) {
    const historyItem = {
        id: Date.now(),
        original,
        translated,
        sourceLang,
        targetLang,
        timestamp: new Date().toLocaleString()
    };
    
    translationHistory.unshift(historyItem);
    
    // 限制历史记录数量
    if (translationHistory.length > 50) {
        translationHistory = translationHistory.slice(0, 50);
    }
    
    // 保存到本地存储
    localStorage.setItem('translationHistory', JSON.stringify(translationHistory));
    
    // 更新历史记录显示
    updateHistoryDisplay();
}

// 加载历史记录
function loadHistory() {
    const saved = localStorage.getItem('translationHistory');
    if (saved) {
        translationHistory = JSON.parse(saved);
        updateHistoryDisplay();
    }
}

// 更新历史记录显示
function updateHistoryDisplay() {
    const historyList = document.getElementById('historyList');
    
    if (translationHistory.length === 0) {
        historyList.innerHTML = '<p style="text-align: center; color: #666; padding: 20px;">暂无翻译历史</p>';
        return;
    }
    
    historyList.innerHTML = translationHistory.map(item => `
        <div class="history-item" onclick="loadHistoryItem('${item.id}')">
            <div class="history-original">${item.original}</div>
            <div class="history-translated">${item.translated}</div>
            <div class="history-time">${item.timestamp}</div>
        </div>
    `).join('');
}

// 加载历史记录项
function loadHistoryItem(id) {
    const item = translationHistory.find(h => h.id == id);
    if (item) {
        document.getElementById('sourceText').value = item.original;
        document.getElementById('targetText').value = item.translated;
        document.getElementById('sourceLanguage').value = item.sourceLang;
        document.getElementById('targetLanguage').value = item.targetLang;
        updateCharCount();
        showNotification('已加载历史记录', 'info');
    }
}

// 显示加载状态
function showLoading(show) {
    const loadingOverlay = document.getElementById('loadingOverlay');
    if (show) {
        loadingOverlay.classList.remove('hidden');
    } else {
        loadingOverlay.classList.add('hidden');
    }
}

// 显示通知
function showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <i class="fas fa-${getNotificationIcon(type)}"></i>
        <span>${message}</span>
    `;
    
    // 添加样式
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        z-index: 1001;
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 14px;
        animation: slideIn 0.3s ease-out;
    `;
    
    // 添加到页面
    document.body.appendChild(notification);
    
    // 3秒后自动移除
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// 获取通知图标
function getNotificationIcon(type) {
    const icons = {
        'success': 'check-circle',
        'error': 'exclamation-circle',
        'warning': 'exclamation-triangle',
        'info': 'info-circle'
    };
    return icons[type] || 'info-circle';
}

// 获取通知颜色
function getNotificationColor(type) {
    const colors = {
        'success': '#28a745',
        'error': '#dc3545',
        'warning': '#ffc107',
        'info': '#17a2b8'
    };
    return colors[type] || '#17a2b8';
}

// 切换设置面板
function toggleSettings() {
    const settingsPanel = document.getElementById('settingsPanel');
    settingsPanel.classList.toggle('hidden');
}

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style); 