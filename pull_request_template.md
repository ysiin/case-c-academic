## Related Work
- Sprint Task: ST-01 (Pemisahan / filter tugas aktif)
- Product Backlog Item / User Story: US1 (Lihat semua tugas aktif di satu tempat; urutan 1, Must Have)
- Requirement: R1
- Evidence P9 (Finding / Need) atau sumber lain: F3 / F1 / N1 (didukung O1, O4, O8)
- Kartu Trello: https://trello.com/invite/b/6acd9ee41761ecd548ba2acc/ATTIcc64cec3111634045160f17d01825ef5848ED495/my-trello-board

## What Changed
- `src/utils/taskUtils.js`: menambah `isActiveTask()` dan `getActiveTasks()`. Sesuai R1, task aktif adalah task yang belum berstatus `DONE` dan deadline-nya belum lewat (task yang jatuh tempo hari ini masih aktif).
- `src/components/TaskFilter.jsx` (baru): tombol toggle untuk menampilkan tugas aktif saja, dengan jumlah task aktif di labelnya.
- `src/App.jsx`: menambah state `showActiveOnly` dan menyambungkan `TaskFilter`; `TaskList` menerima daftar yang sudah difilter saat filter menyala. Counter Total/Done tetap dihitung dari semua task.

## Why
- Mahasiswa harus memeriksa banyak tempat berulang untuk mengetahui tugas aktif (F1, F3, P1; kebutuhan N1).
- R1/US1 meminta tugas aktif terlihat di satu tempat. Tugas yang deadline-nya sudah lewat sengaja tidak dihitung aktif karena ditangani terpisah sebagai terlambat (R7, ST-06/ST-07).

## How It Was Verified
- [ ] `npm run build` berhasil
- [ ] Aplikasi dijalankan (`npm run dev`) dan perilaku dicek manual
- Langkah uji (hasil di bawah untuk tanggal 21 Oktober 2026; di tanggal lain daftar bisa berbeda):
  1. Jalankan `npm run dev`, buka aplikasi, klik Reset Demo Data lalu Confirm Reset.
  2. Tombol menampilkan "Show Active Tasks (3)".
  3. Klik tombol: hanya TASK-003, TASK-005, TASK-006 yang tampil. TASK-001 dan TASK-002 (deadline sudah lewat) dan TASK-004 (DONE) tidak tampil.
  4. Dengan filter menyala, pilih TASK-003 lalu klik Mark as Done: task hilang dari daftar, angka di tombol menjadi (2), Done tasks menjadi 2.
  5. Klik tombol lagi: keenam task tampil kembali dan Total tasks tetap 6.
- Acceptance Criteria yang dicek: AC1.1, AC1.2 (AC1.3 milik ST-02)
- Tanggal pengujian: [isi tanggal pengujian sebenarnya]

## Evidence
[Lampirkan screenshot: filter menyala (3 task) dan setelah TASK-003 ditandai selesai]

## Catatan / Keterbatasan
- Data masih demo (bukan integrasi LMS, A8); sumber status selesai belum ditentukan (A7, Q9).
- Empty state "tidak ada tugas aktif" (AC1.3) adalah bagian ST-02, jadi `TaskList.jsx` tidak diubah di PR ini.
- Aturan "terlambat" (termasuk tugas yang jatuh tempo hari ini) perlu disamakan dengan ST-06 (`overdue.js`).
- Tanggal seed berada di 16–25 Oktober 2026; setelah 25 Oktober semua task terlambat sehingga filter aktif kosong.
- State filter tidak tersimpan setelah halaman di-refresh.

---

### Untuk Reviewer (anggota lain, bukan penulis PR)
- [ ] Sesuai dengan Sprint Task dan user story yang tertulis
- [ ] Acceptance Criteria yang relevan sudah dicek
- [ ] Perubahan mudah dipahami
- [ ] Tidak ada masalah yang terlihat (error, file tak terkait, `node_modules` ikut ter-commit)
- [ ] Aman untuk di-merge, atau komentar sudah diberikan

**Reviewer:** @
**Keputusan:** Approved / Changes requested
**Status akhir PR:** Open / In Review / Changes Requested / Merged