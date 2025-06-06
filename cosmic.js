document.getElementById("secretBtn").addEventListener("click", function () {
  document.getElementById("codeModal").classList.remove("hidden");
});

document.querySelector(".close-button").addEventListener("click", function () {
  document.getElementById("codeModal").classList.add("hidden");
  document.getElementById("codeInput").value = "";
  document.getElementById("privateMessage").classList.add("hidden");
  document.getElementById("error").classList.add("hidden");
});

document.getElementById("checkCode").addEventListener("click", function () {
  const code = document.getElementById("codeInput").value.trim();
  const correctCode = "slay gurl";

  if (code === correctCode) {
    document.getElementById("privateMessage").classList.remove("hidden");
    document.getElementById("error").classList.add("hidden");
  } else {
    document.getElementById("privateMessage").classList.add("hidden");
    document.getElementById("error").classList.remove("hidden");
  }
});
