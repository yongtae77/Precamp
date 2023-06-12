const startWord = () => {
  let cord = document.getElementById("cord").value;
  let word = document.getElementById("word").innerText;

  let last = word[word.length - 1];
  let first = cord[0];

  if (last == first) {
    //정답일때
    document.getElementById("result").innerText = "정답입니다!";
    document.getElementById("word").innerText = cord;
    document.getElementById("cord").value = "";
  } else {
    //오답일때
    document.getElementById("result").innerText = "땡!";
    document.getElementById("cord").value = "";
  }
};
