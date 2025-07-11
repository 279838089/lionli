(function(){
  const css = `
.theme-tech h1 { font-size: 20px; font-weight: bold; color: #00d4aa; margin: 16px 0 12px 0; padding: 8px 12px; background: linear-gradient(135deg, #667eea, #764ba2); color: white; border-radius: 6px; }
.theme-tech h2 { font-size: 18px; font-weight: bold; color: #0084ff; margin: 14px 0 10px 0; padding: 6px 10px; background: #f0f8ff; border-left: 4px solid #0084ff; }
.theme-tech h3 { font-size: 16px; font-weight: bold; color: #ff6b6b; margin: 12px 0 8px 0; padding: 4px 8px; background: #fff5f5; border-radius: 4px; }
.theme-tech h4 { font-size: 15px; font-weight: bold; color: #4ecdc4; margin: 12px 0 8px 0; }
.theme-tech h5 { font-size: 14px; font-weight: bold; color: #45b7d1; margin: 12px 0 8px 0; }
.theme-tech h6 { font-size: 13px; font-weight: bold; color: #96ceb4; margin: 12px 0 8px 0; }
.theme-tech p { margin: 10px 0; text-align: justify; font-size: 15px; line-height: 1.8; color: #2c3e50; }
.theme-tech blockquote { margin: 12px 0; padding: 12px 15px; color: #0084ff; font-size: 14px; line-height: 1.8; background: linear-gradient(135deg, #e3f2fd, #f0f8ff); border-left: 4px solid #0084ff; border-radius: 0 8px 8px 0; }
.theme-tech strong { color: #ff6b6b; font-weight: bold; }
.theme-tech em { color: #00d4aa; font-style: normal; font-weight: 500; }`;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
})();
