const sayi1 = Math.ceil(Math.random() * 10);
const sayi2 = Math.ceil(Math.random() * 10);

const soruE = document.getElementById("soru");
const inputE = document.getElementById("input");
const formE = document.getElementById("form");
const puanE = document.getElementById("puan");

let puan = JSON.parse(localStorage.getItem("puan"));
if (!puan) {
  puan = 0;
}
puanE.innerText = `puan: ${puan}`;
soruE.innerText = `${sayi1} ile ${sayi2} çarpımı kaçtır?`;

const dogruCevap = sayi1 * sayi2;
formE.addEventListener("submit", () => {
  const kullaniciCevabi = +inputE.value;
  if (kullaniciCevabi === dogruCevap) {
    puan++;
    sonucGuncel();
  } else {
    puan--;
    sonucGuncel();
  }
  sonucGuncel();
});
function sonucGuncel() {
  localStorage.setItem("puan", JSON.stringify(puan));
}
