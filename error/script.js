document.addEventListener("DOMContentLoaded", function () {
  var copyContainer = document.querySelector(".copy-container");
  var textEl = copyContainer ? copyContainer.querySelector("p") : null;
  var replayIcon = document.getElementById("cb-replay");
  if (!textEl) {
    return;
  }

  var fullText = textEl.textContent.trim();
  var intervalId = null;

  function startTyping() {
    var index = 0;
    textEl.textContent = "";
    if (intervalId) {
      clearInterval(intervalId);
    }
    intervalId = setInterval(function () {
      textEl.textContent = fullText.slice(0, index + 1);
      index += 1;
      if (index >= fullText.length) {
        clearInterval(intervalId);
      }
    }, 60);
  }

  startTyping();
  if (replayIcon) {
    replayIcon.addEventListener("click", startTyping);
  }
});
