chrome.runtime.onInstalled.addListener(() => {
    console.log("Email Classifier Extension Installed");
  });
// 확장 프로그램을 설치하면 처음 한 번만 실행되는 리스너