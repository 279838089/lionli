(function(){
  const css = `
.theme-lemon h1 { font-size: 20px; font-weight: bold; color: #e0a800; margin: 16px 0 12px 0; padding: 10px 15px; background: linear-gradient(90deg, #fff9c4, #ffe082); border-radius: 8px; }
.theme-lemon h2 { font-size: 18px; font-weight: bold; color: #d97706; margin: 14px 0 10px 0; padding: 8px 12px; background: #fffbea; border-left: 4px solid #fcd34d; }
.theme-lemon h3 { font-size: 16px; font-weight: bold; color: #f59e0b; margin: 12px 0 8px 0; }
.theme-lemon h4 { font-size: 15px; font-weight: bold; color: #d97706; margin: 12px 0 8px 0; }
.theme-lemon h5 { font-size: 14px; font-weight: bold; color: #ca8a04; margin: 12px 0 8px 0; }
.theme-lemon h6 { font-size: 13px; font-weight: bold; color: #a16207; margin: 12px 0 8px 0; }
.theme-lemon p { margin: 10px 0; text-align: justify; font-size: 15px; line-height: 1.8; color: #333; }
.theme-lemon blockquote { margin: 12px 0; padding: 12px 15px; color: #b45309; font-size: 14px; line-height: 1.8; background: linear-gradient(135deg, #fff9c4, #fffbea); border-radius: 8px; border-left: 4px solid #fcd34d; }
.theme-lemon hr { height: 2px; border: none; background: linear-gradient(to right, rgba(248,57,41,0), #f4b400, rgba(248,57,41,0)); }
.theme-lemon strong { color: #e0a800; font-weight: bold; }
.theme-lemon em { color: #d97706; }
`;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
})();
