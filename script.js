let kata = [
  "KUDA",
  "AYAM",
  "SAPI",
  "SINGA",
  "MACAN",
  "KELEDAI",
  "GAJAH",
  "BUAYA",
  "ULAR",
  "TIKUS",
  "KUCING",
  "SEMUT",
  "KUDANIL",
  "JERAPAH",
  "RUSA",
  "KIJANG",
  "HIENA",
  "HIU",
  "PAUS",
  "PARE",
  "BANTENG",
  "DOMBA",
  "KAMBING",
  "CHEETAH",
  "ELANG",
  "GODZILLA",
  "GORILLA",
  "LELE",
  "LOHAN",
  "LEOPARD",
];
let buttonStart = document.getElementById("start");
let temp = "";
let random = Math.floor(Math.random() * 29);
let jawaban = document.getElementById("jawaban");
let soal = document.getElementById("soal");
let hasil = 0;
let vol = document.getElementById("myMusic");
let backButton = document.getElementById("back");
let reset = document.getElementById("reset");

vol.volume = 0;

reset.style.display = "none";

// function goBack() {
//   window.location.href = "/firzaportfolio/index.html#portfolio";
// }

if (location.reload) {
  soal.value = "               ";
  jawaban.value = "";
}

buttonStart.onclick = function start() {
  document.getElementById("jawaban").focus();
  vol.volume = 0.5;
  buttonStart.style.display = "none";
  document.getElementById("back").style.display = "none";
  reset.style.display = "block";
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
  var seconds = 34;
  var x = setInterval(function () {
    seconds--;
    document.getElementById("demo").innerHTML = seconds + " Second";
    if (seconds === 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "Time's Up";
      document.getElementById("jawaban").disabled = true;

      if (hasil <= 19) {
        Swal.fire({
          title: "Kurang",
          text: `Nilai Anda ${hasil}`,
          icon: "warning",
        });
        soal.value = "                ";
      } else if (hasil >= 20 && hasil <= 25) {
        Swal.fire({
          title: "Cukup",
          text: `Nilai Anda ${hasil}`,
          icon: "info",
        });
        soal.value = "                ";
      } else {
        Swal.fire({
          title: "Bagus !!!",
          text: `Nilai Anda ${hasil}`,
          icon: "success",
        });
        soal.value = "                ";
      }
      soal.value = "                    ";
    }
  }, 1000);
}
