const editor = document.getElementById('editor');
const previewContent = document.getElementById('previewContent');
const copyContent = document.getElementById('copyContent');
const successMessage = document.getElementById('successMessage');
const toggleBtn = document.getElementById('toggleBtn');
const modeIndicator = document.getElementById('modeIndicator');
const quickInsert = document.getElementById('quickInsert');
const themeSelect = document.getElementById('themeSelect');

let isPreviewMode = false;
let currentTheme = 'default';

// 保存光标位置的变量
let savedCursorPos = 0;
let savedScrollPos = 0;

// 配置marked选项
if (typeof marked !== 'undefined') {
    marked.setOptions({
        breaks: true,
        gfm: true
    });
}

// 自动渲染预览（如果有marked库）
function renderPreview() {
    if (typeof marked === 'undefined') {
        // 如果marked库未加载，使用简单的文本显示
        previewContent.innerHTML = '<p>正在加载Markdown解析器...</p>';
        return;
    }

    const markdownText = editor.value;
    const htmlContent = marked.parse(markdownText);
    previewContent.innerHTML = htmlContent;
    previewContent.className = `preview-content theme-${currentTheme} ${isPreviewMode ? 'show' : ''}`;
}

// 切换编辑/预览模式
function toggleMode() {
    isPreviewMode = !isPreviewMode;

    if (isPreviewMode) {
        // 保存编辑器状态
        savedCursorPos = editor.selectionStart;
        savedScrollPos = editor.scrollTop;

        // 切换到预览模式
        editor.classList.add('hidden');
        quickInsert.style.display = 'none';
        modeIndicator.classList.add('show');
        toggleBtn.textContent = '✏️ 返回编辑';

        renderPreview();
    } else {
        // 切换回编辑模式
        editor.classList.remove('hidden');
        previewContent.classList.remove('show');
        quickInsert.style.display = 'flex';
        modeIndicator.classList.remove('show');
        toggleBtn.textContent = '👀 预览效果';

        // 恢复编辑器状态
        setTimeout(() => {
            editor.focus();
            editor.setSelectionRange(savedCursorPos, savedCursorPos);
            editor.scrollTop = savedScrollPos;
        }, 10);
    }
}

// 切换主题样式
function changeTheme(theme) {
    currentTheme = theme;
    previewContent.className = `preview-content theme-${theme} ${isPreviewMode ? 'show' : ''}`;

    if (isPreviewMode) {
        renderPreview();
    }
}

// 插入文本到编辑器
function insertText(text) {
    if (isPreviewMode) {
        toggleMode(); // 切换回编辑模式
    }

    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const value = editor.value;
    const before = value.substring(0, start);
    const after = value.substring(end);

    editor.value = before + text + after;

    // 设置光标位置
    const newCursorPos = start + text.length;
    editor.focus();
    editor.setSelectionRange(newCursorPos, newCursorPos);
}

// 复制格式到剪贴板
function copyToClipboard() {
    if (typeof marked === 'undefined') {
        alert('Markdown解析器未加载完成，请稍候再试');
        return;
    }

    const markdownText = editor.value;
    const htmlContent = marked.parse(markdownText);

    // 创建带样式的HTML内容
    const styledHtml = `<div class="theme-${currentTheme}" style="font-family: -apple-system-font, BlinkMacSystemFont, 'Helvetica Neue', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei UI', 'Microsoft YaHei', Arial, sans-serif; line-height: 1.8; color: #333; background:#ffffff;">${htmlContent}</div>`;

    copyContent.innerHTML = styledHtml;

    // 复制到剪贴板
    const range = document.createRange();
    range.selectNode(copyContent);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    try {
        document.execCommand('copy');
        showSuccessMessage();
    } catch (err) {
        alert('复制失败，请手动复制内容');
    }

    selection.removeAllRanges();
}

// 显示成功消息
function showSuccessMessage() {
    successMessage.classList.add('show');
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 2500);
}

// 清空编辑器
function clearEditor() {
    if (confirm('确定要清空所有内容吗？')) {
        editor.value = '';
        editor.focus();
        if (isPreviewMode) {
            renderPreview();
        }
    }
}

// 编辑器内容变化监听
editor.addEventListener('input', () => {
    if (isPreviewMode) {
        renderPreview();
    }
});

// 快捷键支持
editor.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + B 粗体
    if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
        e.preventDefault();
        insertText('**粗体**');
    }

    // Ctrl/Cmd + I 斜体
    if ((e.ctrlKey || e.metaKey) && e.key === 'i') {
        e.preventDefault();
        insertText('*斜体*');
    }

    // Ctrl/Cmd + Enter 预览切换
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        toggleMode();
    }
});

// 初始化时渲染一次
if (typeof marked !== 'undefined') {
    renderPreview();
}

// 回到顶部功能
const backToTopBtn = document.getElementById('backToTop');

// 监听编辑框滚动事件
editor.addEventListener('scroll', () => {
    if (editor.scrollTop > 200) {
        backToTopBtn.classList.add('show');
        backToTopBtn.style.pointerEvents = 'auto';
    } else {
        backToTopBtn.classList.remove('show');
        backToTopBtn.style.pointerEvents = 'none';
    }
});

// 监听窗口滚动事件
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('show');
        backToTopBtn.style.pointerEvents = 'auto';
    } else if (editor.scrollTop <= 200 && window.pageYOffset <= 300) {
        backToTopBtn.classList.remove('show');
        backToTopBtn.style.pointerEvents = 'none';
    }
});

// 监听预览区域滚动事件
previewContent.addEventListener('scroll', () => {
    if (previewContent.scrollTop > 200) {
        backToTopBtn.classList.add('show');
        backToTopBtn.style.pointerEvents = 'auto';
    } else {
        backToTopBtn.classList.remove('show');
        backToTopBtn.style.pointerEvents = 'none';
    }
});

// 回到顶部函数
function scrollToTop() {
    if (isPreviewMode) {
        // 预览模式下滚动预览区域
        previewContent.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        // 编辑模式下滚动编辑框
        editor.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // 同时滚动窗口到顶部
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// 触摸设备支持
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    if (touchEndY < touchStartY - 50) {
        // 向上滑动，显示按钮
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        }
    }
}