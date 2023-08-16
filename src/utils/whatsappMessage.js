export default function whatsappMessage({
  productCart,
  user,
  totalHarga,
  totalHargaOngkir,
}) {
  const phoneNumber = "+6281293421405"; // Nomor telepon tujuan
  let message = `Halo, Saya ${user.name},\n\n Data diri : Alamat: ${user.alamat},\n\n Email: ${user.email},\n\n Nomor Hp : ${user.phone},\n\n Notes: ${user.notes},\n\n ingin memesan produk berikut: \n\n`;
  productCart.forEach((product) => {
    message += `Produk: ${product.title}\n Jumlah: ${product.quantity}\n\n`;
  });
  message += ` Total Harga Pesanan : Rp${totalHarga} + Ongkir Rp.15.0000 \n\n Total Harga + Ongkir : Rp.${totalHargaOngkir}. \n\n jika sudah memesan sesuai yang diinginkan,dimohon untuk transfer ke BCA a/n Muhammad Alfajri
  0020196696 sesuai dengan jumlah yang harus dibayar, jika sudah kirim bukti foto transferan agar segera disiapkan pesanannya `;
  const encodedMessage = encodeURIComponent(message);
  const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
  window.open(url);
}
