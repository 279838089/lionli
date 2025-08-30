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
const THEME_ACCENTS = {
  default: '#0a84ff',
  apple: '#0a84ff',
  tech: '#2563eb',
  elegant: '#b8860b',
  fresh: '#10b981',
  warm: '#ea580c',
  lemon: '#ca8a04',
};

// 历史与光标位置
let history = [];
let redoStack = [];
let restoring = false;
let lastSaveTime = 0;
const HISTORY_LIMIT = 100;
let savedCursorPos = 0;
let savedScrollPos = 0;

// 配置 marked 选项
if (typeof marked !== 'undefined') {
  marked.setOptions({ breaks: true, gfm: true });
}

// 预览渲染
function renderPreview() {
  if (typeof marked === 'undefined') {
    previewContent.innerHTML = '<p>正在加载 Markdown 解析器...</p>';
    return;
  }
  const markdownText = editor.value;
  const htmlContent = marked.parse(markdownText);
  previewContent.innerHTML = htmlContent;
  previewContent.className = `preview-content theme-${currentTheme} ${isPreviewMode ? 'show' : ''}`;
}

// 切换编辑/预览
function toggleMode() {
  isPreviewMode = !isPreviewMode;
  if (isPreviewMode) {
    savedCursorPos = editor.selectionStart;
    savedScrollPos = editor.scrollTop;
    editor.classList.add('hidden');
    quickInsert.style.display = 'none';
    modeIndicator.classList.add('show');
    toggleBtn.textContent = '✏️ 返回编辑';
    renderPreview();
  } else {
    editor.classList.remove('hidden');
    previewContent.classList.remove('show');
    quickInsert.style.display = 'flex';
    modeIndicator.classList.remove('show');
    toggleBtn.textContent = '👀 预览效果';
    setTimeout(() => {
      editor.focus();
      editor.setSelectionRange(savedCursorPos, savedCursorPos);
      editor.scrollTop = savedScrollPos;
    }, 10);
  }
}

// 切换主题
function changeTheme(theme) {
  currentTheme = theme;
  previewContent.className = `preview-content theme-${theme} ${isPreviewMode ? 'show' : ''}`;
  try {
    const color = THEME_ACCENTS[theme] || '#0a84ff';
    document.documentElement.style.setProperty('--accent', color);
  } catch (e) {}
  if (isPreviewMode) renderPreview();
}

// 插入文本
function insertText(text) {
  if (isPreviewMode) toggleMode();
  const start = editor.selectionStart;
  const end = editor.selectionEnd;
  const value = editor.value;
  const before = value.substring(0, start);
  const after = value.substring(end);
  editor.value = before + text + after;
  const newCursorPos = start + text.length;
  editor.focus();
  editor.setSelectionRange(newCursorPos, newCursorPos);
  saveHistory();
}

// 复制为带样式 HTML
function copyToClipboard() {
  if (typeof marked === 'undefined') {
    alert('Markdown 解析器未加载完成，请稍候再试');
    return;
  }
  const markdownText = editor.value;
  const htmlContent = marked.parse(markdownText);
  const styledHtml = `<div class="theme-${currentTheme}" style="font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Helvetica Neue', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei UI', 'Microsoft YaHei', Arial, sans-serif; line-height: 1.8; color: #1d1d1f; background:#ffffff;">${htmlContent}</div>`;
  copyContent.innerHTML = styledHtml;
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

function showSuccessMessage() {
  successMessage.classList.add('show');
  setTimeout(() => successMessage.classList.remove('show'), 2500);
}

// 清空
function clearEditor() {
  if (confirm('确定要清空所有内容吗？')) {
    editor.value = '';
    editor.focus();
    if (isPreviewMode) renderPreview();
    saveHistory();
  }
}

// 输入监听：历史记录 + 实时预览
editor.addEventListener('input', () => {
  saveHistory();
  if (isPreviewMode) renderPreview();
});

// 快捷键：B/ I / Enter 预览
editor.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
    e.preventDefault();
    insertText('**粗体**');
  }
  if ((e.ctrlKey || e.metaKey) && e.key === 'i') {
    e.preventDefault();
    insertText('*斜体*');
  }
  if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
    e.preventDefault();
    toggleMode();
  }
});

// 初始化渲染与历史首帧
if (typeof marked !== 'undefined') renderPreview();
setTimeout(() => {
  saveHistory();
  // 初始化强调色
  try { document.documentElement.style.setProperty('--accent', THEME_ACCENTS[currentTheme] || '#0a84ff'); } catch(e) {}
}, 0);

// 回到顶部
const backToTopBtn = document.getElementById('backToTop');
editor.addEventListener('scroll', () => {
  if (editor.scrollTop > 200) {
    backToTopBtn.classList.add('show');
    backToTopBtn.style.pointerEvents = 'auto';
  } else {
    backToTopBtn.classList.remove('show');
    backToTopBtn.style.pointerEvents = 'none';
  }
});
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopBtn.classList.add('show');
    backToTopBtn.style.pointerEvents = 'auto';
  } else if (editor.scrollTop <= 200 && window.pageYOffset <= 300) {
    backToTopBtn.classList.remove('show');
    backToTopBtn.style.pointerEvents = 'none';
  }
});
previewContent.addEventListener('scroll', () => {
  if (previewContent.scrollTop > 200) {
    backToTopBtn.classList.add('show');
    backToTopBtn.style.pointerEvents = 'auto';
  } else {
    backToTopBtn.classList.remove('show');
    backToTopBtn.style.pointerEvents = 'none';
  }
});
function scrollToTop() {
  if (isPreviewMode) {
    previewContent.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    editor.scrollTo({ top: 0, behavior: 'smooth' });
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 触摸设备支持（轻量）
let touchStartY = 0;
let touchEndY = 0;
document.addEventListener('touchstart', (e) => {
  touchStartY = e.changedTouches[0].screenY;
});
document.addEventListener('touchend', (e) => {
  touchEndY = e.changedTouches[0].screenY;
  if (touchEndY < touchStartY - 50 && (window.pageYOffset > 300 || editor.scrollTop > 200)) {
    backToTopBtn.classList.add('show');
  }
});

// 撤销
function saveHistory() {
  if (restoring) return;
  const now = Date.now();
  if (history.length === 0 || now - lastSaveTime > 350) {
    history.push({
      value: editor.value,
      selStart: editor.selectionStart,
      selEnd: editor.selectionEnd,
      scroll: editor.scrollTop
    });
    if (history.length > HISTORY_LIMIT) history.shift();
    lastSaveTime = now;
    redoStack.length = 0;
  }
}
function applyState(state) {
  restoring = true;
  editor.value = state.value;
  editor.focus();
  try { editor.setSelectionRange(state.selStart ?? editor.value.length, state.selEnd ?? editor.value.length); } catch(e) {}
  editor.scrollTop = state.scroll ?? 0;
  restoring = false;
}
function undoEdit() {
  if (history.length <= 1) return;
  redoStack.push({ value: editor.value, selStart: editor.selectionStart, selEnd: editor.selectionEnd, scroll: editor.scrollTop });
  history.pop();
  const prev = history[history.length - 1];
  if (prev) {
    applyState(prev);
    if (isPreviewMode) renderPreview();
  }
}
