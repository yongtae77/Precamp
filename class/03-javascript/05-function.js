let auth = () => {
  const token = String(Math.floor(Math.random() * 100000)).padStart(6, "0");
  document.getElementById("target").innerText = token;
  document.getElementById("target").style.color = "#" + token;
};
