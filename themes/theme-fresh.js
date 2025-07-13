(function(){
  const css = `
.theme-fresh h1 { font-size: 20px; font-weight: bold; color: #27ae60; margin: 16px 0 12px 0; }
.theme-fresh h2 { font-size: 18px; font-weight: bold; color: #2980b9; margin: 14px 0 10px 0; }
.theme-fresh h3 { font-size: 16px; font-weight: bold; color: #e67e22; margin: 12px 0 8px 0; }
.theme-fresh h4 { font-size: 15px; font-weight: bold; color: #8e44ad; margin: 12px 0 8px 0; }
.theme-fresh h5 { font-size: 14px; font-weight: bold; color: #16a085; margin: 12px 0 8px 0; }
.theme-fresh h6 { font-size: 13px; font-weight: bold; color: #f39c12; margin: 12px 0 8px 0; }
.theme-fresh p { margin: 10px 0; text-align: justify; font-size: 15px; line-height: 1.8; color: #2c3e50; }
.theme-fresh blockquote { margin: 12px 0; padding: 12px 15px; color: #27ae60; font-size: 14px; line-height: 1.8; background: linear-gradient(135deg, #d5f4e6, #a8e6cf); border-radius: 8px; border-left: 4px solid #27ae60; }
.theme-fresh strong { color: #e74c3c; font-weight: bold; }
.theme-fresh em { color: #3498db; font-weight: 500; }`;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
})();
