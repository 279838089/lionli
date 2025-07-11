(function(){
  const css = `
.theme-default h1 { font-size: 20px; font-weight: bold; color: #2c3e50; margin: 16px 0 12px 0; padding: 0 0 6px 0; border-bottom: 1px solid #667eea; }
.theme-default h2 { font-size: 18px; font-weight: bold; color: #34495e; margin: 14px 0 10px 0; padding: 0 0 0 10px; }
.theme-default h3 { font-size: 16px; font-weight: bold; color: #2c3e50; margin: 12px 0 8px 0; }
.theme-default h4 { font-size: 15px; font-weight: bold; color: #2c3e50; margin: 12px 0 8px 0; }
.theme-default h5 { font-size: 14px; font-weight: bold; color: #2c3e50; margin: 12px 0 8px 0; }
.theme-default h6 { font-size: 13px; font-weight: bold; color: #2c3e50; margin: 12px 0 8px 0; }
.theme-default p { margin: 10px 0; text-align: justify; font-size: 15px; line-height: 1.8; color: #333; }
.theme-default blockquote { margin: 12px 0; padding: 12px 15px; color: #555; font-size: 14px; line-height: 1.8; background: #f8f9fa; border-left: 4px solid #667eea; }
.theme-default strong { color: #2c3e50; font-weight: bold; }
.theme-default em { color: #667eea; }`;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
})();
