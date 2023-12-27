let barang = [
    { kode: '001', nama: 'Barang A', harga: 10000 },
    { kode: '002', nama: 'Barang B', harga: 20000 },
    { kode: '003', nama: 'Barang C', harga: 30000 },
];

function cariBarang(kode) {
    for (let i = 0; i < barang.length; i++) {
        if (barang[i].kode === kode) {
            return barang[i];
        }
    }
    return null;
}

function prosesTransaksi() {
    let kodeBarang = document.getElementById('kode').value;
    let jumlahBarang = parseInt(document.getElementById('jumlah').value);
    let barangCari = cariBarang(kodeBarang);
    let totalHarga = barangCari.harga * jumlahBarang;

    window.alert(`Total Pembayaran: ${totalHarga}`);
    let uangDibayarkan = parseInt(window.prompt("Masukkan jumlah uang yang akan dibayarkan: "));
    if (uangDibayarkan >= totalHarga) {
        let kembalian = uangDibayarkan - totalHarga;
        window.alert(`Total Kembalian Anda: ${kembalian}`);
    } else {
        window.alert("Uang yang dibayarkan kurang. Transaksi dibatalkan.");
    }
}