Penjelasan Folder

# 1 Assets/

Folder ini digunakan untuk menyimpan file statis yang tidak berubah selama aplikasi berjalan. Dengan mengatur file statis di sini, kamu dapat dengan mudah mengakses dan mengelola aset-aset tersebut.

Isi:

- Images (gambar): Ikon, logo, atau gambar lainnya (contoh: png, jpg, svg).
- Fonts (font): Font kustom yang tidak diinstal melalui npm (contoh: .ttf, .otf).
- Styles (gaya): File CSS global seperti reset CSS, Tailwind setup, atau tema.

# 2 components/

Folder ini digunakan untuk menyimpan komponen yang dapat digunakan ulang di seluruh aplikasi. Biasanya, komponen ini adalah elemen UI kecil atau komponen tata letak.

Isi:

- UI (User Interface): Komponen UI yang dapat digunakan ulang (contoh: tombol, input, modal).
- Layout (Tata Letak): Komponen untuk mengatur struktur halaman (contoh: Header, Footer, Sidebar).

# 3 features/

Folder ini mengorganisasi kode berdasarkan fitur atau domain aplikasi. Setiap fitur memiliki foldernya sendiri, berisi komponen, halaman, API, state management, dan gaya terkait.

Isi:

- components/: Komponen yang hanya digunakan dalam fitur tertentu.
- pages/: Halaman khusus untuk fitur tersebut.
- api/: Panggilan API yang terkait dengan fitur.
- state/: Redux slice atau context untuk mengelola state fitur.

# 4 hooks/

Folder ini digunakan untuk menyimpan custom hooks yang dibuat untuk mengelola logika aplikasi yang bisa digunakan kembali di berbagai tempat. Hooks membantu mengabstraksi logika kompleks agar lebih modular dan mudah dikelola.

Isi:

- Custom Hooks: Fungsi-fungsi berbasis React Hooks seperti useState, useEffect, dan lainnya, yang dibuat untuk kasus tertentu.
- Modular Hooks: Hooks yang dibuat khusus untuk fitur tertentu.

# 5 pages/

Folder ini digunakan untuk menyimpan halaman utama aplikasi. Halaman ini biasanya terkait dengan routing, sehingga setiap halaman memiliki route spesifik.

Isi:

- Komponen Halaman: Setiap halaman adalah komponen React (misalnya: HomePage, LoginPage).
- Subfolder untuk Modularisasi: Jika ada halaman yang kompleks, bisa memiliki subfolder tersendiri.

# 6 services/

Folder ini digunakan untuk menyimpan logika bisnis dan komunikasi API. Semua fungsi atau kelas yang mengakses backend/API ditempatkan di sini untuk menjaga logika tetap terorganisasi.

Isi:

- API Client: Setup Axios atau fetch untuk komunikasi dengan server.
- Service Modular: Setiap fitur memiliki service tersendiri untuk API terkait.
- Helper Function: Fungsi umum yang mendukung operasi API (misalnya: handle error, refresh token).

# 7 store/

Folder ini digunakan untuk menyimpan store dan logika terkait state management aplikasi menggunakan Redux. Ini juga termasuk konfigurasi store, reducers, dan actions yang dibutuhkan untuk mengelola status global aplikasi.

Isi:

- Store Konfigurasi: Menyimpan file yang mengatur store Redux dan konfigurasi middleware seperti redux-thunk atau redux-saga.
- Reducers: File untuk setiap fitur atau domain aplikasi yang mengatur state terkait.
- Actions: File yang mendefinisikan action types dan action creators.
- Slices (jika menggunakan Redux Toolkit): Menggunakan createSlice untuk membuat reducers dan actions sekaligus.

# 8 utils/

Folder ini digunakan untuk menyimpan fungsi-fungsi utilitas yang dapat digunakan di seluruh aplikasi. Fungsi-fungsi ini biasanya adalah fungsi pembantu umum yang tidak bergantung pada komponen atau state.

Isi:

- Fungsi Pembantu: Fungsi untuk melakukan perhitungan, format tanggal, manipulasi string, validasi, dll.
- Konfigurasi: Berisi konfigurasi umum seperti setup axios instance, helper untuk mengelola token, atau setup linting dan format.

# 9 Config

Konfigurasi utama untuk framwork tailwind css, di sini tempat untuk mengatur wanra, font, dan thema custom yang sesuai dengan kebutuhan project.
