(function(){
  const css = `
.theme-elegant h1 { font-size: 22px; font-weight: 300; color: #8b4513; margin: 20px 0 15px 0; padding: 0 0 8px 0; border-bottom: 2px solid #d4af37; text-align: center; }
.theme-elegant h2 { font-size: 19px; font-weight: 400; color: #2f4f4f; margin: 16px 0 12px 0; padding: 0 0 4px 0; border-bottom: 1px solid #ddd; }
.theme-elegant h3 { font-size: 17px; font-weight: 500; color: #696969; margin: 14px 0 10px 0; font-style: italic; }
.theme-elegant h4 { font-size: 16px; font-weight: 500; color: #708090; margin: 12px 0 8px 0; }
.theme-elegant h5 { font-size: 15px; font-weight: 500; color: #778899; margin: 12px 0 8px 0; }
.theme-elegant h6 { font-size: 14px; font-weight: 500; color: #808080; margin: 12px 0 8px 0; }
.theme-elegant p { margin: 12px 0; text-align: justify; font-size: 16px; line-height: 1.9; color: #444; }
.theme-elegant blockquote { margin: 15px 0; padding: 15px 20px; color: #6b6b6b; font-size: 15px; line-height: 1.8; background: #faf9f7; border-left: 5px solid #d4af37; font-style: italic; }
.theme-elegant strong { color: #8b4513; font-weight: 600; }
.theme-elegant em { color: #b8860b; font-style: italic; }`;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
})();
