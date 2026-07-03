# Semangat Skripsi

Web kecil untuk menyemangati pacar yang sedang skripsian.

## Jalankan lokal

```bash
npm install
npm run dev
```

## Personalisasi

Edit bagian `loveConfig`, `reasons`, dan `pocketNotes` di `src/main.jsx`.

Bagian yang paling sering diganti:

- `recipientName`: nama panggilan pacar
- `fullName`: nama lengkap pacar
- `nicknames`: daftar panggilan kecil yang muncul di hero
- `senderName`: nama kamu
- `thesisName`: sebutan skripsinya
- `headline`, `intro`, `closing`: kalimat utama
- `memories`: daftar item carousel

## Tambah foto carousel

Taruh foto di `public/photos`, lalu isi properti `image` di `src/main.jsx`.

Contoh:

```js
{
  image: "/photos/foto-1.jpg",
  title: "Foto favorit Dedek",
  caption: "Yang satu ini nanti jadi alasan aku senyum sendiri.",
}
```

## Deploy ke Vercel

1. Push folder ini ke GitHub.
2. Buka Vercel, pilih **Add New Project**.
3. Import repository.
4. Framework preset biasanya otomatis terbaca sebagai **Vite**.
5. Build command: `npm run build`.
6. Output directory: `dist`.
7. Klik **Deploy**.
