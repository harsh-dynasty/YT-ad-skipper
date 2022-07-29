(() => {
  const clickBtn = (className, timeout) => {
    setInterval(() => {
      const btn = document.getElementsByClassName(className)[0];

      if (btn) {
        btn.click();
      }
    }, timeout);
  };

  console.log("content script loaded");
  clickBtn("ytp-ad-skip-button ytp-button", 500);
  clickBtn("ytp-ad-overlay-close-button", 2000);
})();
