const dataPeserta = [
  { nama: "Rizka Nanda Utari", tglLahir: "2005-10-17", status: "LOLOS" },
  { nama: "Atikah Najla Mulya", tglLahir: "2008-06-03", status: "LOLOS" },
  { nama: "Hanifah Fitri", tglLahir: "2008-06-13", status: "LOLOS" },
  { nama: "Daffa Aulia Ramadhani", tglLahir: "2008-09-15", status: "LOLOS" },
  { nama: "Namira Aulia", tglLahir: "2009-04-28", status: "LOLOS" },
  { nama: "Adilla Jelita Satria", tglLahir: "2010-10-16", status: "LOLOS" },
  { nama: "Ghazi Akma", tglLahir: "2009-07-31", status: "LOLOS" },
  { nama: "Adinda Maharani", tglLahir: "2008-02-02", status: "LOLOS" },
  { nama: "Octavianti Citra", tglLahir: "2008-10-08", status: "LOLOS" },
  { nama: "Hans Castro Manurung", tglLahir: "2007-10-16", status: "LOLOS" },
  { nama: "Jhonatan Ignasius Sinambela", tglLahir: "2006-12-17", status: "LOLOS" },
  { nama: "Keisya Nabila Syofyan", tglLahir: "2009-06-22", status: "LOLOS" },
  { nama: "Dwi Indah Azzahra Putri", tglLahir: "2009-12-21", status: "LOLOS" },
  { nama: "Fiqri Haikal", tglLahir: "2006-08-10", status: "LOLOS" },
  { nama: "Rahma Yulfitri", tglLahir: "2009-02-14", status: "LOLOS" },
  { nama: "Muhammad Rendy Anuar", tglLahir: "2006-08-10", status: "LOLOS" },
  { nama: "Elsa Septya Atikah", tglLahir: "2007-09-03", status: "LOLOS" },
  { nama: "Ikhsan Saputra", tglLahir: "2008-05-07", status: "LOLOS" },
  { nama: "Ashley Rorongsomba", tglLahir: "2008-04-20", status: "LOLOS" },
  { nama: "Ester Yekholia Siahaan", tglLahir: "2008-06-16", status: "LOLOS" },
  { nama: "Rahima Dzakira Nisa", tglLahir: "2007-09-24", status: "LOLOS" },
  { nama: "Carissa Belva Octavia", tglLahir: "2008-10-22", status: "LOLOS" },
  { nama: "Seven Saputra", tglLahir: "", status: "LOLOS" },
  { nama: "Cheryllia Arni", tglLahir: "2007-11-15", status: "LOLOS" },
  { nama: "Zaskia Ana Tasya", tglLahir: "2010-10-18", status: "LOLOS" },
  { nama: "Diva Anggraini", tglLahir: "2010-06-20", status: "LOLOS" },
  { nama: "Ozy Setia Budi Siregar", tglLahir: "2009-03-01", status: "LOLOS" },
  { nama: "Muhammad Ihsan", tglLahir: "2007-03-29", status: "LOLOS" },
  { nama: "Nasywa Dzulhi Putri", tglLahir: "2006-12-27", status: "LOLOS" }
];

function cekKelulusan() {
  const namaInput = document.getElementById("nama").value.trim().toLowerCase();
  const tglInput = document.getElementById("tglLahir").value;

  const peserta = dataPeserta.find(p =>
    p.nama.toLowerCase() === namaInput &&
    p.tglLahir === tglInput
  );

  const judul = document.getElementById("judulHasil");
  const pesan = document.getElementById("pesanHasil");
  const formPage = document.getElementById("formPage");
  const resultPage = document.getElementById("resultPage");

  if (peserta) {
    judul.innerHTML = "🎉 Selamat, kamu LOLOS!";
    pesan.innerHTML = `Selamat! Kamu dinyatakan <b>lulus Tahap 1 (Administrasi)</b> dalam proses seleksi GGR 2025. 
    Untuk melanjutkan ke tahap berikutnya, silakan segera hubungi <b>+62 819-9268-3849</b> dan kirimkan bukti kelulusanmu. 
    Informasi lebih lanjut akan disampaikan melalui grup WhatsApp dan Instagram resmi kami.`;
  } else {
    judul.innerHTML = "❗ Data tidak ditemukan";
    pesan.innerHTML = "Periksa kembali nama lengkap dan tanggal lahirmu dengan benar.";
  }

  formPage.classList.add("hidden");
  resultPage.classList.remove("hidden");
}

function kembali() {
  document.getElementById("formPage").classList.remove("hidden");
  document.getElementById("resultPage").classList.add("hidden");
  document.getElementById("nama").value = "";
  document.getElementById("tglLahir").value = "";
}
