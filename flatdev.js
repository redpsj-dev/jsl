/**
 * alert-script.js
 * 다양한 방식으로 alert을 표시하는 JavaScript 함수 모음
 */

// 기본 알림 표시 함수
function showAlert(message) {
  alert(message);
}

// 환영 메시지 표시
function showWelcomeAlert(userName) {
  alert(`환영합니다, ${userName}님!`);
}

// 오류 메시지 표시
function showErrorAlert(errorCode, errorMessage) {
  alert(`오류 발생 [${errorCode}]: ${errorMessage}`);
}

// 확인 메시지 표시 (확인/취소 선택 가능)
function showConfirmAlert(message) {
  return confirm(message);
}

// 입력 프롬프트 표시
function showPromptAlert(message, defaultValue) {
  return prompt(message, defaultValue);
}

// 타이머 후 알림 표시
function showDelayedAlert(message, delayInMs) {
  setTimeout(() => {
    alert(message);
  }, delayInMs);
}

// 페이지 로드 시 알림 표시
function showAlertOnPageLoad(message) {
  window.addEventListener('load', () => {
    alert(message);
  });
}

// 버튼 클릭 시 알림 표시 (버튼 ID 필요)
function attachAlertToButton(buttonId, message) {
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener('click', () => {
        alert(message);
      });
    }
  });
}

// 여러 알림을 순차적으로 표시
function showSequentialAlerts(messagesArray) {
  messagesArray.forEach((message, index) => {
    setTimeout(() => {
      alert(message);
    }, index * 1000); // 각 알림은 1초 간격으로 표시
  });
}

// 조건부 알림 표시
function showConditionalAlert(condition, trueMessage, falseMessage) {
  if (condition) {
    alert(trueMessage);
  } else {
    alert(falseMessage);
  }
}

// 사용 예시:
// showAlert("안녕하세요!");
// showWelcomeAlert("홍길동");
// showErrorAlert("404", "페이지를 찾을 수 없습니다.");
// const userConfirmed = showConfirmAlert("계속 진행하시겠습니까?");
// const userName = showPromptAlert("이름을 입력하세요:", "");
// showDelayedAlert("3초 후에 표시되는 메시지입니다.", 3000);
// showAlertOnPageLoad("페이지가 로드되었습니다!");
// attachAlertToButton("myButton", "버튼이 클릭되었습니다!");
// showSequentialAlerts(["첫 번째 메시지", "두 번째 메시지", "세 번째 메시지"]);
// showConditionalAlert(score > 80, "합격입니다!", "불합격입니다.");