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

->

// AI翻译函数 - 支持多种AI服务
async function simulateAITranslation(text, sourceLang, targetLang) {
    // 获取选择的AI模型
    const aiModel = document.getElementById('aiModel')?.value || 'gpt';
    
    try {
        switch (aiModel) {
            case 'gpt':
                return await callChatGPT(text, sourceLang, targetLang);
            case 'gemini':
                return await callGemini(text, sourceLang, targetLang);
            case 'claude':
                return await callClaude(text, sourceLang, targetLang);
            default:
                return await callChatGPT(text, sourceLang, targetLang);
        }
    } catch (error) {
        console.error('AI翻译错误:', error);
        // 如果API调用失败，返回模拟翻译
        return getFallbackTranslation(text, sourceLang, targetLang);
    }
}

// ChatGPT API调用
async function callChatGPT(text, sourceLang, targetLang) {
    const apiKey = getAPIKey('openai');
    if (!apiKey) {
        throw new Error('请配置OpenAI API密钥');
    }
    
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'system',
                    content: `你是一个专业的技术翻译助手，专门翻译云计算、人工智能、数据库、网络技术等专业术语。请将以下文本从${getLanguageName(sourceLang)}翻译成${getLanguageName(targetLang)}，保持专业性和准确性。`
                },
                {
                    role: 'user',
                    content: text
                }
            ],
            max_tokens: 1000,
            temperature: 0.3
        })
    });
    
    if (!response.ok) {
        throw new Error(`OpenAI API错误: ${response.status}`);
    }
    
    const data = await response.json();
    return data.choices[0].message.content.trim();
}

// Gemini API调用
async function callGemini(text, sourceLang, targetLang) {
    const apiKey = getAPIKey('gemini');
    if (!apiKey) {
        throw new Error('请配置Gemini API密钥');
    }
    
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            contents: [{
                parts: [{
                    text: `你是一个专业的技术翻译助手，专门翻译云计算、人工智能、数据库、网络技术等专业术语。请将以下文本从${getLanguageName(sourceLang)}翻译成${getLanguageName(targetLang)}，保持专业性和准确性：\n\n${text}`
                }]
            }]
        })
    });
    
    if (!response.ok) {
        throw new Error(`Gemini API错误: ${response.status}`);
    }
    
    const data = await response.json();
    return data.candidates[0].content.parts[0].text.trim();
}

// Claude API调用
async function callClaude(text, sourceLang, targetLang) {
    const apiKey = getAPIKey('claude');
    if (!apiKey) {
        throw new Error('请配置Claude API密钥');
    }
    
    const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
            'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
            model: 'claude-3-sonnet-20240229',
            max_tokens: 1000,
            messages: [{
                role: 'user',
                content: `你是一个专业的技术翻译助手，专门翻译云计算、人工智能、数据库、网络技术等专业术语。请将以下文本从${getLanguageName(sourceLang)}翻译成${getLanguageName(targetLang)}，保持专业性和准确性：\n\n${text}`
            }]
        })
    });
    
    if (!response.ok) {
        throw new Error(`Claude API错误: ${response.status}`);
    }
    
    const data = await response.json();
    return data.content[0].text.trim();
}

// 获取API密钥
function getAPIKey(service) {
    if (service === 'gemini') return 'AIzaSyDVWqEzPhp-tY-KDtE30f6mgDaziY-HLl4';
    const apiKeys = JSON.parse(localStorage.getItem('apiKeys') || '{}');
    return apiKeys[service];
}

// 设置API密钥
function setAPIKey(service, key) {AIzaSyA1vzFbCiTfvfoWVohj7HJt-WH3qqp_zdI
    const apiKeys = JSON.parse(localStorage.getItem('apiKeys') || '{}');
    apiKeys[service] = key;
    localStorage.setItem('apiKeys', JSON.stringify(apiKeys));
}

// 获取语言名称
function getLanguageName(code) {
    const languages = {
        'en': '英语',
        'zh': '中文',
        'ja': '日语',
        'ko': '韩语',
        'auto': '自动检测'
    };
    return languages[code] || code;
}

// 备用翻译（当API调用失败时使用）
function getFallbackTranslation(text, sourceLang, targetLang) {
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
        return `[备用翻译] ${text} - 这是备用翻译结果，建议配置AI API获得更好效果。`;
    } else if (sourceLang === 'zh' && targetLang === 'en') {
        return `[Fallback Translation] ${text} - This is a fallback translation result, please configure AI API for better results.`;
    } else {
        return `[备用翻译] ${text} - 这是备用翻译结果。`;
    }
}

// 切换设置面板
function toggleSettings() {
    const settingsPanel = document.getElementById('settingsPanel');
    settingsPanel.classList.toggle('hidden');
}

->

// 切换设置面板
function toggleSettings() {
    const settingsPanel = document.getElementById('settingsPanel');
    settingsPanel.classList.toggle('hidden');
    
    if (!settingsPanel.classList.contains('hidden')) {
        loadAPIKeys();
        updateAPIStatus();
    }
}

// 保存API密钥
function saveAPIKey(service) {
    const keyInput = document.getElementById(`${service}Key`);
    const key = keyInput.value.trim();
    
    if (!key) {
        showNotification('请输入API密钥', 'warning');
        return;
    }
    
    setAPIKey(service, key);
    showNotification(`${service.toUpperCase()} API密钥已保存`, 'success');
    updateAPIStatus();
}

// 加载API密钥到输入框
function loadAPIKeys() {
    const apiKeys = JSON.parse(localStorage.getItem('apiKeys') || '{}');
    
    if (apiKeys.openai) {
        document.getElementById('openaiKey').value = apiKeys.openai;
    }
    if (apiKeys.gemini) {
        document.getElementById('geminiKey').value = apiKeys.gemini;
    }
    if (apiKeys.claude) {
        document.getElementById('claudeKey').value = apiKeys.claude;
    }
}

// 更新API状态显示
function updateAPIStatus() {
    const apiStatus = document.getElementById('apiStatus');
    const currentApiStatus = document.getElementById('currentApiStatus');
    const apiKeys = JSON.parse(localStorage.getItem('apiKeys') || '{}');
    const currentModel = document.getElementById('aiModel')?.value || 'gpt';
    
    if (apiKeys[currentModel]) {
        const statusText = `${currentModel.toUpperCase()} API已配置`;
        if (apiStatus) {
            apiStatus.textContent = statusText;
            apiStatus.className = 'configured';
        }
        if (currentApiStatus) {
            currentApiStatus.textContent = statusText;
            currentApiStatus.parentElement.className = 'api-status-display configured';
        }
    } else {
        const statusText = `${currentModel.toUpperCase()} API未配置`;
        if (apiStatus) {
            apiStatus.textContent = statusText;
            apiStatus.className = 'not-configured';
        }
        if (currentApiStatus) {
            currentApiStatus.textContent = statusText;
            currentApiStatus.parentElement.className = 'api-status-display not-configured';
        }
    }
}

// 切换设置面板
function toggleSettings() {
    const settingsPanel = document.getElementById('settingsPanel');
    settingsPanel.classList.toggle('hidden');
}

->

// 切换设置面板
function toggleSettings() {
    const settingsPanel = document.getElementById('settingsPanel');
    settingsPanel.classList.toggle('hidden');
    
    if (!settingsPanel.classList.contains('hidden')) {
        loadAPIKeys();
        updateAPIStatus();
    }
}

// 保存API密钥
function saveAPIKey(service) {
    const keyInput = document.getElementById(`${service}Key`);
    const key = keyInput.value.trim();
    
    if (!key) {
        showNotification('请输入API密钥', 'warning');
        return;
    }
    
    setAPIKey(service, key);
    showNotification(`${service.toUpperCase()} API密钥已保存`, 'success');
    updateAPIStatus();
}

// 加载API密钥到输入框
function loadAPIKeys() {
    const apiKeys = JSON.parse(localStorage.getItem('apiKeys') || '{}');
    
    if (apiKeys.openai) {
        document.getElementById('openaiKey').value = apiKeys.openai;
    }
    if (apiKeys.gemini) {
        document.getElementById('geminiKey').value = apiKeys.gemini;
    }
    if (apiKeys.claude) {
        document.getElementById('claudeKey').value = apiKeys.claude;
    }
}

// 更新API状态显示
function updateAPIStatus() {
    const apiStatus = document.getElementById('apiStatus');
    const currentApiStatus = document.getElementById('currentApiStatus');
    const apiKeys = JSON.parse(localStorage.getItem('apiKeys') || '{}');
    const currentModel = document.getElementById('aiModel')?.value || 'gpt';
    
    if (apiKeys[currentModel]) {
        const statusText = `${currentModel.toUpperCase()} API已配置`;
        if (apiStatus) {
            apiStatus.textContent = statusText;
            apiStatus.className = 'configured';
        }
        if (currentApiStatus) {
            currentApiStatus.textContent = statusText;
            currentApiStatus.parentElement.className = 'api-status-display configured';
        }
    } else {
        const statusText = `${currentModel.toUpperCase()} API未配置`;
        if (apiStatus) {
            apiStatus.textContent = statusText;
            apiStatus.className = 'not-configured';
        }
        if (currentApiStatus) {
            currentApiStatus.textContent = statusText;
            currentApiStatus.parentElement.className = 'api-status-display not-configured';
        }
    }
}

// 切换设置面板
function toggleSettings() {
    const settingsPanel = document.getElementById('settingsPanel');
    settingsPanel.classList.toggle('hidden');
}

->

// 切换设置面板
function toggleSettings() {
    const settingsPanel = document.getElementById('settingsPanel');
    settingsPanel.classList.toggle('hidden');
    
    if (!settingsPanel.classList.contains('hidden')) {
        loadAPIKeys();
        updateAPIStatus();
    }
}

// 保存API密钥
function saveAPIKey(service) {
    const keyInput = document.getElementById(`${service}Key`);
    const key = keyInput.value.trim();
    
    if (!key) {
        showNotification('请输入API密钥', 'warning');
        return;
    }
    
    setAPIKey(service, key);
    showNotification(`${service.toUpperCase()} API密钥已保存`, 'success');
    updateAPIStatus();
}

// 加载API密钥到输入框
function loadAPIKeys() {
    const apiKeys = JSON.parse(localStorage.getItem('apiKeys') || '{}');
    
    if (apiKeys.openai) {
        document.getElementById('openaiKey').value = apiKeys.openai;
    }
    if (apiKeys.gemini) {
        document.getElementById('geminiKey').value = apiKeys.gemini;
    }
    if (apiKeys.claude) {
        document.getElementById('claudeKey').value = apiKeys.claude;
    }
}

// 更新API状态显示
function updateAPIStatus() {
    const apiStatus = document.getElementById('apiStatus');
    const currentApiStatus = document.getElementById('currentApiStatus');
    const apiKeys = JSON.parse(localStorage.getItem('apiKeys') || '{}');
    const currentModel = document.getElementById('aiModel')?.value || 'gpt';
    
    if (apiKeys[currentModel]) {
        const statusText = `${currentModel.toUpperCase()} API已配置`;
        if (apiStatus) {
            apiStatus.textContent = statusText;
            apiStatus.className = 'configured';
        }
        if (currentApiStatus) {
            currentApiStatus.textContent = statusText;
            currentApiStatus.parentElement.className = 'api-status-display configured';
        }
    } else {
        const statusText = `${currentModel.toUpperCase()} API未配置`;
        if (apiStatus) {
            apiStatus.textContent = statusText;
            apiStatus.className = 'not-configured';
        }
        if (currentApiStatus) {
            currentApiStatus.textContent = statusText;
            currentApiStatus.parentElement.className = 'api-status-display not-configured';
        }
    }
}

// 快速配置功能
function showQuickConfig() {
    const apiKey = prompt('请输入Gemini API密钥（以AIza开头）：');
    if (apiKey && apiKey.trim()) {
        setAPIKey('gemini', apiKey.trim());
        showNotification('Gemini API密钥已保存', 'success');
        updateAPIStatus();
    }
}

// 切换设置面板
function toggleSettings() {
    const settingsPanel = document.getElementById('settingsPanel');
    settingsPanel.classList.toggle('hidden');
}

->

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

->

// 添加事件监听器
function addEventListeners() {
    const sourceText = document.getElementById('sourceText');
    const targetText = document.getElementById('targetText');
    const aiModel = document.getElementById('aiModel');
    
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
    
    // AI模型切换
    if (aiModel) {
        aiModel.addEventListener('change', updateAPIStatus);
    }
    
    // 键盘快捷键
    document.addEventListener('keydown', function(e) {
        // Ctrl + , 打开设置
        if (e.ctrlKey && e.key === ',') {
            e.preventDefault();
            toggleSettings();
        }
    });
}
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

->

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
    
    // 更新API状态
    updateAPIStatus();
}