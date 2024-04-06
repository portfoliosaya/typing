let kata = [
  "kuda",
  "ayam",
  "sapi",
  "singa",
  "macan",
  "keledai",
  "gajah",
  "buaya",
  "ular",
  "tikus",
  "kucing",
  "semut",
  "kudanil",
  "jerapah",
  "rusa",
  "kijang",
  "hiena",
  "hiu",
  "paus",
  "pare",
  "banteng",
  "domba",
  "kambing",
  "cheetah",
  "elang",
  "godzilla",
  "gorilla",
  "lele",
  "lohan",
  "leopard",
];
let buttonStart = document.getElementById("start");
let temp = "";
let random = Math.floor(Math.random() * 29);
let jawaban = document.getElementById("jawaban");
let soal = document.getElementById("soal");
let hasil = 0;
let vol = document.getElementById("myMusic");
let backButton = document.getElementById("back");

vol.volume = 0;

function goBack() {
  window.location.href = "/firzaportfolio/index.html#portfolio";
}

if (location.reload) {
  soal.value = "               ";
  jawaban.value = "";
}

buttonStart.onclick = function start() {
  document.getElementById("jawaban").focus();
  vol.volume = 0.5;
  buttonStart.style.display = "none";
  timer();
  let acak = random;
  document.getElementById("soal").value = kata[acak];
  return;
};
jawaban.oninput = function cek() {
  if (jawaban.value === soal.value) {
    soal.value = kata[Math.floor(Math.random() * 29)];
    jawaban.value = "";

    document.getElementById("skor").innerHTML = ++hasil;
    return;
  }
};

function timer() {
  var seconds = 35;
  var x = setInterval(function () {
    seconds--;
    document.getElementById("demo").innerHTML = seconds + " Second";
    if (seconds === 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "Time's Up";
      document.getElementById("jawaban").disabled = true;

      if (hasil <= 20) {
        alert(`Newbie Score Anda ${hasil}`);
        soal.value = "                ";
      } else if (hasil > 20 && hasil < 27) {
        alert(`Good Job Score Anda ${hasil}`);
        soal.value = "                ";
      } else {
        alert(`Pro Score Anda ${hasil}`);
        soal.value = "                ";
      }
      location.reload();
      soal.value = "                    ";
    }
  }, 1000);
}
