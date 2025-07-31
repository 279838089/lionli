(function(){
  const css = `
.theme-default h1 { font-size: 18px; font-weight: bold; color: #000000; margin: 31.5px 0 36px 0; padding: 0; font-family: SimSun, serif; letter-spacing: 1px; line-height: 2; }
.theme-default h2 { font-size: 18px; font-weight: bold; color: #000000; margin: 31.5px 0 36px 0; padding: 0; font-family: SimSun, serif; letter-spacing: 1px; line-height: 2; }
.theme-default h3 { font-size: 18px; font-weight: bold; color: #000000; margin: 31.5px 0 36px 0; padding: 0; font-family: SimSun, serif; letter-spacing: 1px; line-height: 2; }
.theme-default h4 { font-size: 18px; font-weight: bold; color: #000000; margin: 31.5px 0 36px 0; padding: 0; font-family: SimSun, serif; letter-spacing: 1px; line-height: 2; }
.theme-default h5 { font-size: 18px; font-weight: bold; color: #000000; margin: 31.5px 0 36px 0; padding: 0; font-family: SimSun, serif; letter-spacing: 1px; line-height: 2; }
.theme-default h6 { font-size: 18px; font-weight: bold; color: #000000; margin: 31.5px 0 36px 0; padding: 0; font-family: SimSun, serif; letter-spacing: 1px; line-height: 2; }
.theme-default p { margin: 26.25px 0 30px 0; text-align: justify; font-size: 15px; line-height: 1.9; color: #595959; font-family: SimSun, serif; letter-spacing: 1px; }
.theme-default blockquote { margin: 26.25px 0 30px 0; padding: 12px 15px; color: #595959; font-size: 15px; line-height: 1.9; background: #f8f9fa; border-left: 4px solid #667eea; font-family: SimSun, serif; letter-spacing: 1px; }
.theme-default strong { font-weight: bold; color: #595959; }
.theme-default em { color: #595959; font-style: italic; }`;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);
})();
