(function(){
  const css = `
.theme-warm h1 { font-size: 20px; font-weight: bold; color: #d35400; margin: 16px 0 12px 0; padding: 10px 15px; background: linear-gradient(135deg, #f39c12, #e67e22); color: white; border-radius: 8px; }
.theme-warm h2 { font-size: 18px; font-weight: bold; color: #c0392b; margin: 14px 0 10px 0; padding: 8px 12px; background: #fdeaea; border-left: 4px solid #c0392b; }
.theme-warm h3 { font-size: 16px; font-weight: bold; color: #8e44ad; margin: 12px 0 8px 0; padding: 6px 10px; background: #f4ecf7; border-radius: 4px; }
.theme-warm h4 { font-size: 15px; font-weight: bold; color: #d35400; margin: 12px 0 8px 0; }
.theme-warm h5 { font-size: 14px; font-weight: bold; color: #e74c3c; margin: 12px 0 8px 0; }
.theme-warm h6 { font-size: 13px; font-weight: bold; color: #9b59b6; margin: 12px 0 8px 0; }
.theme-warm p { margin: 10px 0; text-align: justify; font-size: 15px; line-height: 1.8; color: #2c3e50; }
.theme-warm blockquote { margin: 12px 0; padding: 12px 15px; color: #d35400; font-size: 14px; line-height: 1.8; background: linear-gradient(135deg, #fef9e7, #fadbd8); border-radius: 8px; border-left: 4px solid #f39c12; }
.theme-warm strong { color: #c0392b; font-weight: bold; }
.theme-warm em { color: #8e44ad; font-weight: 500; }`;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
})();
