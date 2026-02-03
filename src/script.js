const favorit = document.querySelectorAll(".favorit");
const hapus = document.querySelectorAll(".hapus");
const getfav = document.querySelector(".getfav");
const hapusSemua = document.querySelector("#hapusSemua");
const rating = document.getElementById("rating");
const akhir = document.querySelector(".akhir");
akhir.innerHTML = rating.value;
rating.addEventListener("input", function () {
  akhir.innerHTML = rating.value;
});
document.getElementById("year").textContent = new Date().getFullYear();
let data2 = JSON.parse(localStorage.getItem("favorit")) || [];

function tampilkan() {
  getfav.innerHTML = "";

  data2.forEach((item, index) => {
    getfav.innerHTML += `
        <li class="border p-2 rounded flex justify-between items-start">
        <div>
          <strong>#${index + 1}</strong><br>
          Favorit: ${item.favorit}<br>
          </div>
          <button 
          onclick="hapus2(${index})"
          class="bg-red-600 text-white px-2 py-1 rounded cursor-pointer">
          Hapus
          </button>
          </li>
      `;
  });
}

tampilkan();

favorit.forEach(function (el) {
  el.addEventListener("click", function (e) {
    data2.push({
      favorit: e.target.value,
    });
    localStorage.setItem("favorit", JSON.stringify(data2));
    tampilkan();
  });
});

function hapus2(index) {
  if (confirm("Yakin hapus data?")) {
    data2.splice(index, 1);
    localStorage.setItem("favorit", JSON.stringify(data2));
    tampilkan();
  }
}

hapusSemua.addEventListener("click", function () {
  if (confirm("Yakin hapus semua data?")) {
    data2 = [];
    localStorage.removeItem("favorit");
    tampilkan();
  }
});

const form = document.querySelector("form");
const list = document.getElementById("listData");

// ambil data lama atau array kosong
let data = JSON.parse(localStorage.getItem("feedback")) || [];

function render() {
  list.innerHTML = "";

  data.forEach((item, index) => {
    list.innerHTML += `
        <li class="border p-2 rounded flex justify-between items-start relative overflow-scroll">
        <div>
          <strong>#${index + 1}</strong><br>
          No HP: ${item.nohp}<br>
          Website: <a href=${item.website} target="_blank" class="text-blue-600 underline cursor-pointer">${item.website}</a> <br>
          Rating: ${item.rating}<br>
          Tanggal: ${item.tanggal}
          </div>
          <button 
          onclick="hapus1(${index})"
          class="bg-red-600 text-white px-2 py-1 rounded cursor-pointer">
          Hapus
          </button>
          </li>
      `;
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault(); // cegah reload

  data.push({
    nohp: form.nohp.value,
    website: form.website.value,
    rating: form.rating.value,
    tanggal: form.tanggal.value,
  });

  localStorage.setItem("feedback", JSON.stringify(data));
  form.reset();
  render();
});

function hapus1(index) {
  if (confirm("Yakin hapus data?")) {
    data.splice(index, 1);
    localStorage.setItem("feedback", JSON.stringify(data));
    render();
  }
}

const btnHapusSemua = document.getElementById("hapusSemua1");

btnHapusSemua.addEventListener("click", () => {
  if (confirm("Yakin hapus semua data?")) {
    data = [];
    localStorage.removeItem("feedback");
    render();
  }
});

// tampilkan data saat halaman dibuka
render();
