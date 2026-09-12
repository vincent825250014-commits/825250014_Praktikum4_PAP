
// Fungsi untuk membuat ID
function buatID() {

    // Mengambil tempat untuk menampilkan ID
    let container = document.getElementById("idContainer");

    // Menampilkan kartu ID
    container.innerHTML = `
        <div class="pesan-berhasil">
            ID berhasil dibuat!
        </div>

        <div class="id-card">
            <h2>IDENTITAS MAHASISWA</h2>

            <p>
                <span class="label">Nama:</span>
                Vincent Christopher Chandra
            </p>

            <p>
                <span class="label">NIM:</span>
                825250014
            </p>
        </div>
    `;
}


// Fungsi untuk menghapus ID
function hapusID() {

    // Mengambil tempat ID
    let container = document.getElementById("idContainer");

    // Menghapus kartu dan menampilkan pesan
    container.innerHTML = `
        <div class="pesan-hapus">
            ID berhasil dihapus!
        </div>
    `;
}

