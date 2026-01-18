
/* =========================================================
   APP CODE (khởi động chỉ khi đã đăng nhập)
   ========================================================= */
if(!window.__USER){
  // chưa đăng nhập -> không chạy app
} else {

/* =========================================================
   0) BÀI HỌC + LỘ TRÌNH (mở khóa khi PASS)
   ========================================================= */
document.body.classList.add('mode-student');

const LESSONS = [
  {
    id:"A1",
    level:"easy",
    title:"A1 — Nhập họ tên và năm sinh của học sinh, in…",
    short:"INPUT/PRINT",
    skill:"input, print, biến, phép toán",
    input:"Nhập theo đúng đề bài (mỗi giá trị 1 dòng).",
    output:"In ra kết quả theo yêu cầu.",
    text:"Nhập họ tên và năm sinh của học sinh, in ra câu chào.",
    sampleIn:"Nguyen Van A\n2008\n",
    sampleOut:"Chào bạn Nguyen Van A\n",
    tests:[{stdin:"Nguyen Van A\n2008\n", expected:"Chào bạn Nguyen Van A\n"}],
    scaffold:`# A1: Nhập họ tên và năm sinh của học sinh, in…
# Nhập họ tên và năm sinh của học sinh, in ra câu chào.
# Input: nhập theo đề bài.
# Output: in kết quả theo yêu cầu.
# Lưu ý PASS: chỉ cần đúng cú pháp + đúng cấu trúc.

`,
    snips:[{d:"Bước 1: Nhập dữ liệu", t:"ho_ten = input(\"Nhập họ và tên: \")\nnam_sinh = int(input(\"Nhập năm sinh: \"))\n"}, {d:"Bước 3: In kết quả", t:"print(\"Chào bạn\", ho_ten)\n"}]
  },
  {
    id:"A2",
    level:"easy",
    title:"A2 — Nhập hai số nguyên, in ra:",
    short:"INPUT/PRINT",
    skill:"input, print, biến, phép toán",
    input:"Nhập theo đúng đề bài (mỗi giá trị 1 dòng).",
    output:"In ra kết quả theo yêu cầu.",
    text:"Nhập hai số nguyên, in ra:",
    sampleIn:"12\n5\n",
    sampleOut:"(ví dụ)\n",
    tests:[{stdin:"12\n5\n", expected:"(ví dụ)\n"}],
    scaffold:`# A2: Nhập hai số nguyên, in ra:
# Nhập hai số nguyên, in ra:
# Input: nhập theo đề bài.
# Output: in kết quả theo yêu cầu.
# Lưu ý PASS: chỉ cần đúng cú pháp + đúng cấu trúc.

`,
    snips:[{d:"Bước 1: Nhập dữ liệu", t:"a = int(input(\"Nhập số nguyên thứ nhất: \"))\nb = int(input(\"Nhập số nguyên thứ hai: \"))\n"}, {d:"Bước 2: Xử lý", t:"     tong = a + b\nhieu = a - b\ntich = a * b\nthuong_nguyen = a // b\n"}, {d:"Bước 3: In kết quả", t:"print(\"Tổng là:\", tong)\nprint(\"Hiệu là:\", hieu)\nprint(\"Tích là:\", tich)\nprint(\"Thương (lấy phần nguyên) là:\", thuong_nguyen)\n"}]
  },
  {
    id:"A3",
    level:"easy",
    title:"A3 — Nhập chiều dài và chiều rộng hình chữ nh…",
    short:"INPUT/PRINT",
    skill:"input, print, biến, phép toán",
    input:"Nhập theo đúng đề bài (mỗi giá trị 1 dòng).",
    output:"In ra kết quả theo yêu cầu.",
    text:"Nhập chiều dài và chiều rộng hình chữ nhật, tính và in:",
    sampleIn:"5\n3\n",
    sampleOut:"(ví dụ)\n",
    tests:[{stdin:"5\n3\n", expected:"(ví dụ)\n"}],
    scaffold:`# A3: Nhập chiều dài và chiều rộng hình chữ nh…
# Nhập chiều dài và chiều rộng hình chữ nhật, tính và in:
# Input: nhập theo đề bài.
# Output: in kết quả theo yêu cầu.
# Lưu ý PASS: chỉ cần đúng cú pháp + đúng cấu trúc.

`,
    snips:[{d:"Bước 1: Nhập dữ liệu", t:"dai = float(input(\"Nhập chiều dài: \"))\nrong = float(input(\"Nhập chiều rộng: \"))\n"}, {d:"Bước 2: Xử lý", t:"     chu_vi = (dai + rong) * 2\ndien_tich = dai * rong\n"}, {d:"Bước 3: In kết quả", t:"     print(\"--- Kết quả hình chữ nhật ---\")\nprint(f\"Chu vi hình chữ nhật là: {chu_vi} (đơn vị độ dài)\")\nprint(f\"Diện tích hình chữ nhật là: {dien_tich} (đơn vị diện tích)\")\n"}]
  },
  {
    id:"A4",
    level:"easy",
    title:"A4 — Nhập điểm Toán, Văn, Anh. Tính điểm trun…",
    short:"INPUT/PRINT",
    skill:"input, print, biến, phép toán",
    input:"Nhập theo đúng đề bài (mỗi giá trị 1 dòng).",
    output:"In ra kết quả theo yêu cầu.",
    text:"Nhập điểm Toán, Văn, Anh. Tính điểm trung bình và in kết quả",
    sampleIn:"8\n7\n9\n",
    sampleOut:"Điểm bạn là: 8.0\n",
    tests:[{stdin:"8\n7\n9\n", expected:"Điểm bạn là: 8.0\n"}],
    scaffold:`# A4: Nhập điểm Toán, Văn, Anh. Tính điểm trun…
# Nhập điểm Toán, Văn, Anh. Tính điểm trung bình và in kết quả
# Input: nhập theo đề bài.
# Output: in kết quả theo yêu cầu.
# Lưu ý PASS: chỉ cần đúng cú pháp + đúng cấu trúc.

`,
    snips:[{d:"Bước 1: Nhập dữ liệu", t:"toan = float(input(\"Nhập điểm Toán: \"))\nvan = float(input(\"Nhập điểm Văn: \"))\nanh = float(input(\"Nhập điểm Anh: \"))\n"}, {d:"Bước 2: Xử lý", t:"diem_trung_binh = (toan + van + anh) / 3\n"}, {d:"Bước 3: In kết quả", t:"print(f\"Điểm bạn là: {diem_trung_binh}\")\n"}]
  },
  {
    id:"A5",
    level:"easy",
    title:"A5 — Nhập một số nguyên, kiểm tra số đó là ch…",
    short:"IF",
    skill:"rẽ nhánh if/elif/else",
    input:"Nhập theo đúng đề bài (mỗi giá trị 1 dòng).",
    output:"In ra kết quả theo yêu cầu.",
    text:"Nhập một số nguyên, kiểm tra số đó là chẵn hay lẻ.",
    sampleIn:"7\n",
    sampleOut:"7 là số lẻ.\n",
    tests:[{stdin:"7\n", expected:"7 là số lẻ.\n"}],
    scaffold:`# A5: Nhập một số nguyên, kiểm tra số đó là ch…
# Nhập một số nguyên, kiểm tra số đó là chẵn hay lẻ.
# Input: nhập theo đề bài.
# Output: in kết quả theo yêu cầu.
# Lưu ý PASS: chỉ cần đúng cú pháp + đúng cấu trúc.

`,
    snips:[{d:"Bước 1: Nhập dữ liệu", t:"n = int(input(\"Nhập một số nguyên: \"))\n"}, {d:"Bước 2: Xử lý", t:"if n % 2 == 0:\nelse:\n"}, {d:"Bước 3: In kết quả", t:"    print(f\"{n} là số chẵn.\")\n    print(f\"{n} là số lẻ.\")\n"}]
  },
  {
    id:"A6",
    level:"easy",
    title:"A6 — Nhập điểm kiểm tra (0–10), xếp loại:",
    short:"IF",
    skill:"rẽ nhánh if/elif/else",
    input:"Nhập theo đúng đề bài (mỗi giá trị 1 dòng).",
    output:"In ra kết quả theo yêu cầu.",
    text:"Nhập điểm kiểm tra (0–10), xếp loại:",
    sampleIn:"7.5\n",
    sampleOut:"Xếp loại: Khá\n",
    tests:[{stdin:"7.5\n", expected:"Xếp loại: Khá\n"}],
    scaffold:`# A6: Nhập điểm kiểm tra (0–10), xếp loại:
# Nhập điểm kiểm tra (0–10), xếp loại:
# Input: nhập theo đề bài.
# Output: in kết quả theo yêu cầu.
# Lưu ý PASS: chỉ cần đúng cú pháp + đúng cấu trúc.

`,
    snips:[{d:"Bước 1: Nhập dữ liệu", t:"diem = float(input(\"Nhập điểm kiểm tra (0-10): \"))\n"}, {d:"Bước 2: Xử lý", t:"if diem >= 8.0:\nelif diem >= 6.5:\nelif diem >= 5.0:\nelse:\n"}, {d:"Bước 3: In kết quả", t:"    print(\"Xếp loại: Giỏi\")\n    print(\"Xếp loại: Khá\")\n    print(\"Xếp loại: Trung bình\")\n    print(\"Xếp loại: Yếu\")\n"}]
  },
  {
    id:"A7",
    level:"easy",
    title:"A7 — Nhập ba số thực, kiểm tra có thể tạo thà…",
    short:"IF",
    skill:"rẽ nhánh if/elif/else",
    input:"Nhập theo đúng đề bài (mỗi giá trị 1 dòng).",
    output:"In ra kết quả theo yêu cầu.",
    text:"Nhập ba số thực, kiểm tra có thể tạo thành tam giác hay không.",
    sampleIn:"3\n4\n5\n",
    sampleOut:"Ba số này có thể tạo thành một tam giác.\n",
    tests:[{stdin:"3\n4\n5\n", expected:"Ba số này có thể tạo thành một tam giác.\n"}],
    scaffold:`# A7: Nhập ba số thực, kiểm tra có thể tạo thà…
# Nhập ba số thực, kiểm tra có thể tạo thành tam giác hay không.
# Input: nhập theo đề bài.
# Output: in kết quả theo yêu cầu.
# Lưu ý PASS: chỉ cần đúng cú pháp + đúng cấu trúc.

`,
    snips:[{d:"Bước 1: Nhập dữ liệu", t:"a = float(input(\"Nhập cạnh a: \"))\nb = float(input(\"Nhập cạnh b: \"))\nc = float(input(\"Nhập cạnh c: \"))\n"}, {d:"Bước 2: Xử lý", t:"if (a + b > c) and (a + c > b) and (b + c > a):\nelse:\n"}, {d:"Bước 3: In kết quả", t:"    print(\"Ba số này có thể tạo thành một tam giác.\")\n    print(\"Ba số này KHÔNG thể tạo thành tam giác.\")\n"}]
  },
  {
    id:"A8",
    level:"easy",
    title:"A8 — Nhập số điện tiêu thụ (kWh), tính tiền đ…",
    short:"IF",
    skill:"rẽ nhánh if/elif/else",
    input:"Nhập theo đúng đề bài (mỗi giá trị 1 dòng).",
    output:"In ra kết quả theo yêu cầu.",
    text:"Nhập số điện tiêu thụ (kWh), tính tiền điện theo bậc (tự cho đơn giản 2–3 mức).",
    sampleIn:"80\n",
    sampleOut:"Số tiền điện phải trả là: 140,000.0 VNĐ\n",
    tests:[{stdin:"80\n", expected:"Số tiền điện phải trả là: 140,000.0 VNĐ\n"}],
    scaffold:`# A8: Nhập số điện tiêu thụ (kWh), tính tiền đ…
# Nhập số điện tiêu thụ (kWh), tính tiền điện theo bậc (tự cho đơn giản 2–3 mức).
# Input: nhập theo đề bài.
# Output: in kết quả theo yêu cầu.
# Lưu ý PASS: chỉ cần đúng cú pháp + đúng cấu trúc.

`,
    snips:[{d:"Bước 1: Nhập dữ liệu", t:"so_dien = float(input(\"Nhập số điện tiêu thụ (kWh): \"))\n"}, {d:"Bước 2: Xử lý", t:"if so_dien <= 50:\n    tien_dien = so_dien * 1600\nelse:\n    tien_dien = (50 * 1600) + (so_dien - 50) * 2000\n"}, {d:"Bước 3: In kết quả", t:"print(f\"Số tiền điện phải trả là: {tien_dien:,} VNĐ\")\n"}]
  },
  {
    id:"A9",
    level:"easy",
    title:"A9 — In ra các số từ 1 đến n (n nhập từ bàn p…",
    short:"FOR",
    skill:"vòng lặp for, range",
    input:"Nhập theo đúng đề bài (mỗi giá trị 1 dòng).",
    output:"In ra kết quả theo yêu cầu.",
    text:"In ra các số từ 1 đến n (n nhập từ bàn phím).",
    sampleIn:"5\n",
    sampleOut:"1 2 3 4 5 ",
    tests:[{stdin:"5\n", expected:"1 2 3 4 5 "}],
    scaffold:`# A9: In ra các số từ 1 đến n (n nhập từ bàn p…
# In ra các số từ 1 đến n (n nhập từ bàn phím).
# Input: nhập theo đề bài.
# Output: in kết quả theo yêu cầu.
# Lưu ý PASS: chỉ cần đúng cú pháp + đúng cấu trúc.

`,
    snips:[{d:"Bước 1: Nhập dữ liệu", t:"n = int(input(\"Nhập n: \"))\n"}, {d:"Bước 2: Xử lý", t:"for i in range(1, n + 1):\n"}, {d:"Bước 3: In kết quả", t:"    print(i, end=\" \")\n"}]
  },
  {
    id:"A10",
    level:"easy",
    title:"A10 — Tính tổng các số chẵn từ 1 đến n.",
    short:"FOR",
    skill:"vòng lặp for, range",
    input:"Nhập theo đúng đề bài (mỗi giá trị 1 dòng).",
    output:"In ra kết quả theo yêu cầu.",
    text:"Tính tổng các số chẵn từ 1 đến n.",
    sampleIn:"10\n",
    sampleOut:"Tổng các số chẵn từ 1 đến 10 là: 30\n",
    tests:[{stdin:"10\n", expected:"Tổng các số chẵn từ 1 đến 10 là: 30\n"}],
    scaffold:`# A10: Tính tổng các số chẵn từ 1 đến n.
# Tính tổng các số chẵn từ 1 đến n.
# Input: nhập theo đề bài.
# Output: in kết quả theo yêu cầu.
# Lưu ý PASS: chỉ cần đúng cú pháp + đúng cấu trúc.

`,
    snips:[{d:"Bước 1: Nhập dữ liệu", t:"n = int(input(\"Nhập n: \"))\n"}, {d:"Bước 2: Xử lý", t:"tong = 0\nfor i in range(1, n + 1):\n    if i % 2 == 0:\n        tong = tong + i\n"}, {d:"Bước 3: In kết quả", t:"print(f\"Tổng các số chẵn từ 1 đến {n} là: {tong}\")\n"}]
  },
  {
    id:"A11",
    level:"easy",
    title:"A11 — In bảng cửu chương của một số n.",
    short:"FOR",
    skill:"vòng lặp for, range",
    input:"Nhập theo đúng đề bài (mỗi giá trị 1 dòng).",
    output:"In ra kết quả theo yêu cầu.",
    text:"In bảng cửu chương của một số n.",
    sampleIn:"7\n",
    sampleOut:"--- BẢNG CỬU CHƯƠNG 7 ---\n7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70\n",
    tests:[{stdin:"7\n", expected:"--- BẢNG CỬU CHƯƠNG 7 ---\n7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70\n"}],
    scaffold:`# A11: In bảng cửu chương của một số n.
# In bảng cửu chương của một số n.
# Input: nhập theo đề bài.
# Output: in kết quả theo yêu cầu.
# Lưu ý PASS: chỉ cần đúng cú pháp + đúng cấu trúc.

`,
    snips:[{d:"Bước 1: Nhập dữ liệu", t:"n = int(input(\"Nhập số n cần in bảng cửu chương: \"))\n"}, {d:"Bước 2: Xử lý", t:"for i in range(1, 11):\n"}, {d:"Bước 3: In kết quả", t:"print(f\"--- BẢNG CỬU CHƯƠNG {n} ---\")\n    print(f\"{n} x {i} = {n * i}\")\n"}]
  },
  {
    id:"A12",
    level:"easy",
    title:"A12 — Tính tổng:",
    short:"FOR",
    skill:"vòng lặp for, range",
    input:"Nhập theo đúng đề bài (mỗi giá trị 1 dòng).",
    output:"In ra kết quả theo yêu cầu.",
    text:"Tính tổng: S = 1 + 1/2 + 1/3 + ... + 1/n.",
    sampleIn:"5\n",
    sampleOut:"Tổng S = 2.28\n",
    tests:[{stdin:"5\n", expected:"Tổng S = 2.28\n"}],
    scaffold:`# A12: Tính tổng:
# Tính tổng: S = 1 + 1/2 + 1/3 + ... + 1/n.
# Input: nhập theo đề bài.
# Output: in kết quả theo yêu cầu.
# Lưu ý PASS: chỉ cần đúng cú pháp + đúng cấu trúc.

`,
    snips:[{d:"Bước 1: Nhập dữ liệu", t:"n = int(input(\"Nhập n: \"))\n"}, {d:"Bước 2: Xử lý", t:"S = 0\nfor i in range(1, n + 1):\n    S = S + 1/i\n"}, {d:"Bước 3: In kết quả", t:"print(f\"Tổng S = {round(S, 2)}\")\n"}]
  },
  {
    id:"A13",
    level:"easy",
    title:"A13 — Đếm số chữ số của một số nguyên dương n…",
    short:"FOR",
    skill:"vòng lặp for, range",
    input:"Nhập theo đúng đề bài (mỗi giá trị 1 dòng).",
    output:"In ra kết quả theo yêu cầu.",
    text:"Đếm số chữ số của một số nguyên dương n (không dùng hàm len).",
    sampleIn:"12345\n",
    sampleOut:"Số 12345 có 5 chữ số.\n",
    tests:[{stdin:"12345\n", expected:"Số 12345 có 5 chữ số.\n"}],
    scaffold:`# A13: Đếm số chữ số của một số nguyên dương n…
# Đếm số chữ số của một số nguyên dương n (không dùng hàm len).
# Input: nhập theo đề bài.
# Output: in kết quả theo yêu cầu.
# Lưu ý PASS: chỉ cần đúng cú pháp + đúng cấu trúc.

`,
    snips:[{d:"Bước 1: Nhập dữ liệu", t:"n = int(input(\"Nhập số nguyên dương n: \"))\n"}, {d:"Bước 2: Xử lý", t:"tam = n # Dùng biến tạm để không làm mất giá trị gốc của n\ndem = 0\nif tam == 0:\n    dem = 1\nelse:\n    while tam > 0:\n        dem = dem + 1\n        tam = tam // 10 # Chia lấy phần nguyên để bỏ chữ số cuối cùng\n"}, {d:"Bước 3: In kết quả", t:"print(f\"Số {n} có {dem} chữ số.\")\n"}]
  },
  {
    id:"A14",
    level:"medium",
    title:"A14 — Nhập số nguyên n (>0), in các chữ số của…",
    short:"WHILE",
    skill:"vòng lặp while",
    input:"Nhập theo đúng đề bài (mỗi giá trị 1 dòng).",
    output:"In ra kết quả theo yêu cầu.",
    text:"Nhập số nguyên n (>0), in các chữ số của n theo thứ tự ngược lại.",
    sampleIn:"12345\n",
    sampleOut:"Các chữ số theo thứ tự ngược lại là: 54321",
    tests:[{stdin:"12345\n", expected:"Các chữ số theo thứ tự ngược lại là: 54321"}],
    scaffold:`# A14: Nhập số nguyên n (>0), in các chữ số của…
# Nhập số nguyên n (>0), in các chữ số của n theo thứ tự ngược lại.
# Input: nhập theo đề bài.
# Output: in kết quả theo yêu cầu.
# Lưu ý PASS: chỉ cần đúng cú pháp + đúng cấu trúc.

`,
    snips:[{d:"Bước 1: Nhập dữ liệu", t:"n = int(input(\"Nhập số nguyên dương n: \"))\n"}, {d:"Bước 2: Xử lý", t:"while n > 0:\n    chu_so = n % 10  # Lấy chữ số cuối\n    n = n // 10\n"}, {d:"Bước 3: In kết quả", t:"print(\"Các chữ số theo thứ tự ngược lại là: \", end=\"\")\n    print(chu_so, end=\"\")\n"}]
  },
  {
    id:"A15",
    level:"medium",
    title:"A15 — Tính tổng các chữ số của một số nguyên d…",
    short:"WHILE",
    skill:"vòng lặp while",
    input:"Nhập theo đúng đề bài (mỗi giá trị 1 dòng).",
    output:"In ra kết quả theo yêu cầu.",
    text:"Tính tổng các chữ số của một số nguyên dương.",
    sampleIn:"12345\n",
    sampleOut:"Tổng các chữ số là: 15\n",
    tests:[{stdin:"12345\n", expected:"Tổng các chữ số là: 15\n"}],
    scaffold:`# A15: Tính tổng các chữ số của một số nguyên d…
# Tính tổng các chữ số của một số nguyên dương.
# Input: nhập theo đề bài.
# Output: in kết quả theo yêu cầu.
# Lưu ý PASS: chỉ cần đúng cú pháp + đúng cấu trúc.

`,
    snips:[{d:"Bước 1: Nhập dữ liệu", t:"n = int(input(\"Nhập số nguyên dương n: \"))\n"}, {d:"Bước 2: Xử lý", t:"tong = 0\nwhile n > 0:\n    chu_so = n % 10\n    tong = tong + chu_so\n    n = n // 10\n"}, {d:"Bước 3: In kết quả", t:"print(f\"Tổng các chữ số là: {tong}\")\n"}]
  },
  {
    id:"B1",
    level:"medium",
    title:"B1 — Nhập các số liên tiếp cho đến khi nhập s…",
    short:"WHILE",
    skill:"vòng lặp while",
    input:"Nhập theo đúng đề bài (mỗi giá trị 1 dòng).",
    output:"In ra kết quả theo yêu cầu.",
    text:"Nhập các số liên tiếp cho đến khi nhập số 0 thì dừng, tính tổng các số đã nhập.",
    sampleIn:"3\n4\n0\n",
    sampleOut:"(ví dụ)\n",
    tests:[{stdin:"3\n4\n0\n", expected:"(ví dụ)\n"}],
    scaffold:`# B1: Nhập các số liên tiếp cho đến khi nhập s…
# Nhập các số liên tiếp cho đến khi nhập số 0 thì dừng, tính tổng các số đã nhập.
# Input: nhập theo đề bài.
# Output: in kết quả theo yêu cầu.
# Lưu ý PASS: chỉ cần đúng cú pháp + đúng cấu trúc.

`,
    snips:[{d:"Bước 1: Nhập dữ liệu", t:"so = int(input(\"Nhập một số (nhập 0 để dừng): \"))\n    so = int(input(\"Nhập tiếp số khác (hoặc 0 để dừng): \"))\n"}, {d:"Bước 2: Xử lý", t:"while so != 0:\n    tong = tong + so\n"}, {d:"Bước 3: In kết quả", t:"print(f\"Tổng các số đã nhập là: {tong}\")\n"}]
  },
  {
    id:"B2",
    level:"medium",
    title:"B2 — Kiểm tra một số nguyên dương có phải là…",
    short:"WHILE",
    skill:"vòng lặp while",
    input:"Nhập theo đúng đề bài (mỗi giá trị 1 dòng).",
    output:"In ra kết quả theo yêu cầu.",
    text:"Kiểm tra một số nguyên dương có phải là số đối xứng hay không.",
    sampleIn:"1221\n",
    sampleOut:"1221 là số đối xứng.\n",
    tests:[{stdin:"1221\n", expected:"1221 là số đối xứng.\n"}],
    scaffold:`# B2: Kiểm tra một số nguyên dương có phải là…
# Kiểm tra một số nguyên dương có phải là số đối xứng hay không.
# Input: nhập theo đề bài.
# Output: in kết quả theo yêu cầu.
# Lưu ý PASS: chỉ cần đúng cú pháp + đúng cấu trúc.

`,
    snips:[{d:"Bước 1: Nhập dữ liệu", t:"n = int(input(\"Nhập số nguyên dương n: \"))\n"}, {d:"Bước 2: Xử lý", t:"so_ban_dau = n\nso_dao_nguoc = 0\nwhile n > 0:\n    chu_so = n % 10\n    # Công thức tạo số đảo ngược: nhân 10 số cũ và cộng chữ số mới\n    so_dao_nguoc = so_dao_nguoc * 10 + chu_so\n    n = n // 10\nif so_ban_dau == so_dao_nguoc:\nelse:\n"}, {d:"Bước 3: In kết quả", t:"    print(f\"{so_ban_dau} là số đối xứng.\")\n    print(f\"{so_ban_dau} KHÔNG phải là số đối xứng.\")\n"}]
  },
  {
    id:"B3",
    level:"medium",
    title:"B3 — Nhập danh sách n số nguyên, in ra:",
    short:"LIST",
    skill:"danh sách (list), vòng lặp",
    input:"Nhập theo đúng đề bài (mỗi giá trị 1 dòng).",
    output:"In ra kết quả theo yêu cầu.",
    text:"Nhập danh sách n số nguyên, in ra:\n- Danh sách\n- Giá trị lớn nhất\n- Giá trị nhỏ nhất",
    sampleIn:"5\n1\n3\n2\n8\n4\n",
    sampleOut:"Danh sách vừa nhập là: [1, 3, 2, 8, 4]\nGiá trị lớn nhất là: 8\nGiá trị nhỏ nhất là: 1\n",
    tests:[{stdin:"5\n1\n3\n2\n8\n4\n", expected:"Danh sách vừa nhập là: [1, 3, 2, 8, 4]\nGiá trị lớn nhất là: 8\nGiá trị nhỏ nhất là: 1\n"}],
    scaffold:`# B3: Nhập danh sách n số nguyên, in ra:
# Nhập danh sách n số nguyên, in ra: - Danh sách - Giá trị lớn nhất - Giá trị nhỏ nhất
# Input: nhập theo đề bài.
# Output: in kết quả theo yêu cầu.
# Lưu ý PASS: chỉ cần đúng cú pháp + đúng cấu trúc.

`,
    snips:[{d:"Bước 1: Nhập dữ liệu", t:"n = int(input(\"Nhập số lượng phần tử n: \"))\n    so = int(input(f\"Nhập phần tử thứ {i+1}: \"))\n"}, {d:"Bước 2: Xử lý", t:"a = [] # Khởi tạo danh sách rỗng\nfor i in range(n):\n    a.append(so) # Thêm số vừa nhập vào danh sách\n"}, {d:"Bước 3: In kết quả", t:"print(\"Danh sách vừa nhập là:\", a)\nprint(\"Giá trị lớn nhất là:\", max(a))\nprint(\"Giá trị nhỏ nhất là:\", min(a))\n"}]
  },
  {
    id:"B4",
    level:"medium",
    title:"B4 — Tính tổng và trung bình các phần tử tron…",
    short:"LIST",
    skill:"danh sách (list), vòng lặp",
    input:"Nhập theo đúng đề bài (mỗi giá trị 1 dòng).",
    output:"In ra kết quả theo yêu cầu.",
    text:"Tính tổng và trung bình các phần tử trong danh sách.",
    sampleIn:"5\n1\n3\n2\n8\n4\n",
    sampleOut:"Tổng các phần tử: 18\nTrung bình cộng: 3.6\n",
    tests:[{stdin:"5\n1\n3\n2\n8\n4\n", expected:"Tổng các phần tử: 18\nTrung bình cộng: 3.6\n"}],
    scaffold:`# B4: Tính tổng và trung bình các phần tử tron…
# Tính tổng và trung bình các phần tử trong danh sách.
# Input: nhập theo đề bài.
# Output: in kết quả theo yêu cầu.
# Lưu ý PASS: chỉ cần đúng cú pháp + đúng cấu trúc.

`,
    snips:[{d:"Bước 1: Nhập dữ liệu", t:"n = int(input(\"Nhập số lượng phần tử n: \"))\n    so = int(input(f\"Nhập phần tử thứ {i+1}: \"))\n"}, {d:"Bước 2: Xử lý", t:"a = []\nfor i in range(n):\n    a.append(so)\n\ntong = sum(a)\ntrung_binh = tong / len(a)\n"}, {d:"Bước 3: In kết quả", t:"print(f\"Tổng các phần tử: {tong}\")\nprint(f\"Trung bình cộng: {trung_binh}\")\n"}]
  },
  {
    id:"B5",
    level:"medium",
    title:"B5 — Đếm số phần tử chẵn và lẻ trong danh sác…",
    short:"LIST",
    skill:"danh sách (list), vòng lặp",
    input:"Nhập theo đúng đề bài (mỗi giá trị 1 dòng).",
    output:"In ra kết quả theo yêu cầu.",
    text:"Đếm số phần tử chẵn và lẻ trong danh sách.",
    sampleIn:"5\n1\n3\n2\n8\n4\n",
    sampleOut:"(ví dụ)\n",
    tests:[{stdin:"5\n1\n3\n2\n8\n4\n", expected:"(ví dụ)\n"}],
    scaffold:`# B5: Đếm số phần tử chẵn và lẻ trong danh sác…
# Đếm số phần tử chẵn và lẻ trong danh sách.
# Input: nhập theo đề bài.
# Output: in kết quả theo yêu cầu.
# Lưu ý PASS: chỉ cần đúng cú pháp + đúng cấu trúc.

`,
    snips:[{d:"Bước 1: Nhập dữ liệu", t:"n = int(input(\"Nhập số lượng phần tử n: \"))\n    so = int(input(f\"Nhập phần tử thứ {i+1}: \"))\n"}, {d:"Bước 2: Xử lý", t:"a = []\nfor i in range(n):\n    a.append(so)\n\ndem_chan = 0\ndem_le = 0\nfor x in a:\nif x % 2 == 0:\ndem_chan += 1\nelse:\ndem_le += 1\n"}, {d:"Bước 3: In kết quả", t:"print(f\"Số lượng số chẵn: {dem_chan}\")\nprint(f\"Số lượng số lẻ: {dem_le}\")\n"}]
  },
  {
    id:"B6",
    level:"medium",
    title:"B6 — Tìm vị trí xuất hiện đầu tiên của một số…",
    short:"LIST",
    skill:"danh sách (list), vòng lặp",
    input:"Nhập theo đúng đề bài (mỗi giá trị 1 dòng).",
    output:"In ra kết quả theo yêu cầu.",
    text:"Tìm vị trí xuất hiện đầu tiên của một số x trong danh sách.",
    sampleIn:"5\n1\n3\n2\n8\n4\n2\n",
    sampleOut:"Vị trí xuất hiện đầu tiên của 2 là: 2\n",
    tests:[{stdin:"5\n1\n3\n2\n8\n4\n2\n", expected:"Vị trí xuất hiện đầu tiên của 2 là: 2\n"}],
    scaffold:`# B6: Tìm vị trí xuất hiện đầu tiên của một số…
# Tìm vị trí xuất hiện đầu tiên của một số x trong danh sách.
# Input: nhập theo đề bài.
# Output: in kết quả theo yêu cầu.
# Lưu ý PASS: chỉ cần đúng cú pháp + đúng cấu trúc.

`,
    snips:[{d:"Bước 1: Nhập dữ liệu", t:"n = int(input(\"Nhập số lượng phần tử n: \"))\n    so = int(input(f\"Nhập phần tử thứ {i+1}: \"))\nx = int(input(\"Nhập số x cần tìm vị trí: \"))\n"}, {d:"Bước 2: Xử lý", t:"a = []\nfor i in range(n):\n    a.append(so)\n\nfound = False\nfor i in range(len(a)):\n    if a[i] == x:\n        found = True\n        break # Dừng lại ngay khi tìm thấy vị trí đầu tiên\nif not found:\n"}, {d:"Bước 3: In kết quả", t:"        print(f\"Vị trí xuất hiện đầu tiên của {x} là: {i}\")\n    print(f\"Không tìm thấy {x} trong danh sách.\")\n"}]
  },
  {
    id:"B7",
    level:"medium",
    title:"B7 — Sắp xếp danh sách theo thứ tự tăng dần k…",
    short:"LIST",
    skill:"danh sách (list), vòng lặp",
    input:"Nhập theo đúng đề bài (mỗi giá trị 1 dòng).",
    output:"In ra kết quả theo yêu cầu.",
    text:"Sắp xếp danh sách theo thứ tự tăng dần không dùng hàm sort().",
    sampleIn:"5\n1\n3\n2\n8\n4\n",
    sampleOut:"Danh sách sau khi sắp xếp tăng dần là: [1, 2, 3, 4, 8]\n",
    tests:[{stdin:"5\n1\n3\n2\n8\n4\n", expected:"Danh sách sau khi sắp xếp tăng dần là: [1, 2, 3, 4, 8]\n"}],
    scaffold:`# B7: Sắp xếp danh sách theo thứ tự tăng dần k…
# Sắp xếp danh sách theo thứ tự tăng dần không dùng hàm sort().
# Input: nhập theo đề bài.
# Output: in kết quả theo yêu cầu.
# Lưu ý PASS: chỉ cần đúng cú pháp + đúng cấu trúc.

`,
    snips:[{d:"Bước 1: Nhập dữ liệu", t:"n = int(input(\"Nhập số lượng phần tử n: \"))\n    so = int(input(f\"Nhập phần tử thứ {i+1}: \"))\n"}, {d:"Bước 2: Xử lý", t:"a = []\nfor i in range(n):\n    a.append(so)\n\nn = len(a)\nfor i in range(n):\n    for j in range(0, n - i - 1):\n        if a[j] > a[j+1]:\n            a[j], a[j+1] = a[j+1], a[j]\n"}, {d:"Bước 3: In kết quả", t:"print(\"Danh sách sau khi sắp xếp tăng dần là:\", a)\n"}]
  },
  {
    id:"B8",
    level:"medium",
    title:"B8 — Nhập một xâu, in:",
    short:"STRING",
    skill:"xâu (string)",
    input:"Nhập theo đúng đề bài (mỗi giá trị 1 dòng).",
    output:"In ra kết quả theo yêu cầu.",
    text:"Nhập một xâu, in:\n- Độ dài xâu\n- Xâu viết hoa\n- Xâu viết thường",
    sampleIn:"Abc deF\n",
    sampleOut:"Độ dài của xâu là: 7\nXâu viết hoa: ABC DEF\nXâu viết thường: abc def\n",
    tests:[{stdin:"Abc deF\n", expected:"Độ dài của xâu là: 7\nXâu viết hoa: ABC DEF\nXâu viết thường: abc def\n"}],
    scaffold:`# B8: Nhập một xâu, in:
# Nhập một xâu, in: - Độ dài xâu - Xâu viết hoa - Xâu viết thường
# Input: nhập theo đề bài.
# Output: in kết quả theo yêu cầu.
# Lưu ý PASS: chỉ cần đúng cú pháp + đúng cấu trúc.

`,
    snips:[{d:"Bước 1: Nhập dữ liệu", t:"s = input(\"Nhập một xâu ký tự: \")\n"}, {d:"Bước 3: In kết quả", t:"print(f\"Độ dài của xâu là: {len(s)}\")\nprint(f\"Xâu viết hoa: {s.upper()}\")\nprint(f\"Xâu viết thường: {s.lower()}\")\n"}]
  },
  {
    id:"B9",
    level:"medium",
    title:"B9 — Đếm số ký tự là chữ cái trong xâu.",
    short:"STRING",
    skill:"xâu (string)",
    input:"Nhập theo đúng đề bài (mỗi giá trị 1 dòng).",
    output:"In ra kết quả theo yêu cầu.",
    text:"Đếm số ký tự là chữ cái trong xâu.",
    sampleIn:"a1B2c!\n",
    sampleOut:"Số lượng chữ cái trong xâu là: 3\n",
    tests:[{stdin:"a1B2c!\n", expected:"Số lượng chữ cái trong xâu là: 3\n"}],
    scaffold:`# B9: Đếm số ký tự là chữ cái trong xâu.
# Đếm số ký tự là chữ cái trong xâu.
# Input: nhập theo đề bài.
# Output: in kết quả theo yêu cầu.
# Lưu ý PASS: chỉ cần đúng cú pháp + đúng cấu trúc.

`,
    snips:[{d:"Bước 1: Nhập dữ liệu", t:"s = input(\"Nhập một xâu: \")\n"}, {d:"Bước 2: Xử lý", t:"dem = 0\nfor char in s:\n    if char.isalpha():\n        dem += 1\n"}, {d:"Bước 3: In kết quả", t:"print(f\"Số lượng chữ cái trong xâu là: {dem}\")\n"}]
  },
  {
    id:"B10",
    level:"medium",
    title:"B10 — Đếm số từ trong một xâu (các từ cách nha…",
    short:"STRING",
    skill:"xâu (string)",
    input:"Nhập theo đúng đề bài (mỗi giá trị 1 dòng).",
    output:"In ra kết quả theo yêu cầu.",
    text:"Đếm số từ trong một xâu (các từ cách nhau bởi dấu cách).",
    sampleIn:"Xin chao cac ban\n",
    sampleOut:"Số từ trong xâu là: 4\n",
    tests:[{stdin:"Xin chao cac ban\n", expected:"Số từ trong xâu là: 4\n"}],
    scaffold:`# B10: Đếm số từ trong một xâu (các từ cách nha…
# Đếm số từ trong một xâu (các từ cách nhau bởi dấu cách).
# Input: nhập theo đề bài.
# Output: in kết quả theo yêu cầu.
# Lưu ý PASS: chỉ cần đúng cú pháp + đúng cấu trúc.

`,
    snips:[{d:"Bước 1: Nhập dữ liệu", t:"s = input(\"Nhập một câu: \")\n"}, {d:"Bước 2: Xử lý", t:"# split() không tham số sẽ tách theo mọi khoảng trắng\ndanh_sach_tu = s.split()\nso_tu = len(danh_sach_tu)\n"}, {d:"Bước 3: In kết quả", t:"print(f\"Số từ trong xâu là: {so_tu}\")\n"}]
  },
  {
    id:"B11",
    level:"medium",
    title:"B11 — Kiểm tra xâu có phải là xâu đối xứng hay…",
    short:"STRING",
    skill:"xâu (string)",
    input:"Nhập theo đúng đề bài (mỗi giá trị 1 dòng).",
    output:"In ra kết quả theo yêu cầu.",
    text:"Kiểm tra xâu có phải là xâu đối xứng hay không.",
    sampleIn:"aba\n",
    sampleOut:"Đây là xâu đối xứng.\n",
    tests:[{stdin:"aba\n", expected:"Đây là xâu đối xứng.\n"}],
    scaffold:`# B11: Kiểm tra xâu có phải là xâu đối xứng hay…
# Kiểm tra xâu có phải là xâu đối xứng hay không.
# Input: nhập theo đề bài.
# Output: in kết quả theo yêu cầu.
# Lưu ý PASS: chỉ cần đúng cú pháp + đúng cấu trúc.

`,
    snips:[{d:"Bước 1: Nhập dữ liệu", t:"s = input(\"Nhập xâu cần kiểm tra: \")\n"}, {d:"Bước 2: Xử lý", t:"s_dao_nguoc = s[::-1]\nif s == s_dao_nguoc:\nelse:\n"}, {d:"Bước 3: In kết quả", t:"    print(\"Đây là xâu đối xứng.\")\n    print(\"Đây KHÔNG phải là xâu đối xứng.\")\n"}]
  },
  {
    id:"B12",
    level:"medium",
    title:"B12 — Chuẩn hóa xâu họ tên: loại bỏ khoảng trắ…",
    short:"STRING",
    skill:"xâu (string)",
    input:"Nhập theo đúng đề bài (mỗi giá trị 1 dòng).",
    output:"In ra kết quả theo yêu cầu.",
    text:"Chuẩn hóa xâu họ tên: loại bỏ khoảng trắng thừa, viết hoa chữ cái đầu mỗi từ.",
    sampleIn:"  nguyen   van   a  \n",
    sampleOut:"Xâu sau khi chuẩn hóa: 'Nguyen Van A'\n",
    tests:[{stdin:"  nguyen   van   a  \n", expected:"Xâu sau khi chuẩn hóa: 'Nguyen Van A'\n"}],
    scaffold:`# B12: Chuẩn hóa xâu họ tên: loại bỏ khoảng trắ…
# Chuẩn hóa xâu họ tên: loại bỏ khoảng trắng thừa, viết hoa chữ cái đầu mỗi từ.
# Input: nhập theo đề bài.
# Output: in kết quả theo yêu cầu.
# Lưu ý PASS: chỉ cần đúng cú pháp + đúng cấu trúc.

`,
    snips:[{d:"Bước 1: Nhập dữ liệu", t:"ho_ten = input(\"Nhập họ tên cần chuẩn hóa: \")\n"}, {d:"Bước 2: Xử lý", t:"# Bước 1: Tách các từ (loại bỏ khoảng trắng thừa)\ncac_tu = ho_ten.split()\n# Bước 2: Nối lại bằng một dấu cách duy nhất\nxau_tam = \" \".join(cac_tu)\n# Bước 3: Viết hoa chữ cái đầu mỗi từ\nxau_chuan_hoa = xau_tam.title()\n"}, {d:"Bước 3: In kết quả", t:"print(f\"Xâu sau khi chuẩn hóa: '{xau_chuan_hoa}'\")\n"}]
  },
  {
    id:"C1",
    level:"easy",
    title:"C1 — Ôn tập: Nhập hai số nguyên, in ra:",
    short:"ÔN TẬP",
    skill:"input, print, biến, phép toán",
    input:"Nhập theo đúng đề bài (mỗi giá trị 1 dòng).",
    output:"In ra kết quả theo yêu cầu.",
    text:"Nhập hai số nguyên, in ra:",
    sampleIn:"12\n5\n",
    sampleOut:"(ví dụ)\n",
    tests:[{stdin:"12\n5\n", expected:"(ví dụ)\n"}],
    scaffold:`# C1: Nhập hai số nguyên, in ra:
# Nhập hai số nguyên, in ra:
# Input: nhập theo đề bài.
# Output: in kết quả theo yêu cầu.
# Lưu ý PASS: chỉ cần đúng cú pháp + đúng cấu trúc.

`,
    snips:[{d:"Bước 1: Nhập dữ liệu", t:"a = int(input(\"Nhập số nguyên thứ nhất: \"))\nb = int(input(\"Nhập số nguyên thứ hai: \"))\n"}, {d:"Bước 2: Xử lý", t:"     tong = a + b\nhieu = a - b\ntich = a * b\nthuong_nguyen = a // b\n"}, {d:"Bước 3: In kết quả", t:"print(\"Tổng là:\", tong)\nprint(\"Hiệu là:\", hieu)\nprint(\"Tích là:\", tich)\nprint(\"Thương (lấy phần nguyên) là:\", thuong_nguyen)\n"}]
  },
  {
    id:"C2",
    level:"easy",
    title:"C2 — Ôn tập: Nhập điểm kiểm tra (0–10), xếp loại:",
    short:"ÔN TẬP",
    skill:"rẽ nhánh if/elif/else",
    input:"Nhập theo đúng đề bài (mỗi giá trị 1 dòng).",
    output:"In ra kết quả theo yêu cầu.",
    text:"Nhập điểm kiểm tra (0–10), xếp loại:",
    sampleIn:"7.5\n",
    sampleOut:"Xếp loại: Khá\n",
    tests:[{stdin:"7.5\n", expected:"Xếp loại: Khá\n"}],
    scaffold:`# C2: Nhập điểm kiểm tra (0–10), xếp loại:
# Nhập điểm kiểm tra (0–10), xếp loại:
# Input: nhập theo đề bài.
# Output: in kết quả theo yêu cầu.
# Lưu ý PASS: chỉ cần đúng cú pháp + đúng cấu trúc.

`,
    snips:[{d:"Bước 1: Nhập dữ liệu", t:"diem = float(input(\"Nhập điểm kiểm tra (0-10): \"))\n"}, {d:"Bước 2: Xử lý", t:"if diem >= 8.0:\nelif diem >= 6.5:\nelif diem >= 5.0:\nelse:\n"}, {d:"Bước 3: In kết quả", t:"    print(\"Xếp loại: Giỏi\")\n    print(\"Xếp loại: Khá\")\n    print(\"Xếp loại: Trung bình\")\n    print(\"Xếp loại: Yếu\")\n"}]
  },
  {
    id:"C3",
    level:"easy",
    title:"C3 — Ôn tập: In bảng cửu chương của một số n.",
    short:"ÔN TẬP",
    skill:"vòng lặp for, range",
    input:"Nhập theo đúng đề bài (mỗi giá trị 1 dòng).",
    output:"In ra kết quả theo yêu cầu.",
    text:"In bảng cửu chương của một số n.",
    sampleIn:"7\n",
    sampleOut:"--- BẢNG CỬU CHƯƠNG 7 ---\n7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70\n",
    tests:[{stdin:"7\n", expected:"--- BẢNG CỬU CHƯƠNG 7 ---\n7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70\n"}],
    scaffold:`# C3: In bảng cửu chương của một số n.
# In bảng cửu chương của một số n.
# Input: nhập theo đề bài.
# Output: in kết quả theo yêu cầu.
# Lưu ý PASS: chỉ cần đúng cú pháp + đúng cấu trúc.

`,
    snips:[{d:"Bước 1: Nhập dữ liệu", t:"n = int(input(\"Nhập số n cần in bảng cửu chương: \"))\n"}, {d:"Bước 2: Xử lý", t:"for i in range(1, 11):\n"}, {d:"Bước 3: In kết quả", t:"print(f\"--- BẢNG CỬU CHƯƠNG {n} ---\")\n    print(f\"{n} x {i} = {n * i}\")\n"}]
  },
  {
    id:"C4",
    level:"medium",
    title:"C4 — Ôn tập: Kiểm tra một số nguyên dương có phải là…",
    short:"ÔN TẬP",
    skill:"vòng lặp while",
    input:"Nhập theo đúng đề bài (mỗi giá trị 1 dòng).",
    output:"In ra kết quả theo yêu cầu.",
    text:"Kiểm tra một số nguyên dương có phải là số đối xứng hay không.",
    sampleIn:"1221\n",
    sampleOut:"1221 là số đối xứng.\n",
    tests:[{stdin:"1221\n", expected:"1221 là số đối xứng.\n"}],
    scaffold:`# C4: Kiểm tra một số nguyên dương có phải là…
# Kiểm tra một số nguyên dương có phải là số đối xứng hay không.
# Input: nhập theo đề bài.
# Output: in kết quả theo yêu cầu.
# Lưu ý PASS: chỉ cần đúng cú pháp + đúng cấu trúc.

`,
    snips:[{d:"Bước 1: Nhập dữ liệu", t:"n = int(input(\"Nhập số nguyên dương n: \"))\n"}, {d:"Bước 2: Xử lý", t:"so_ban_dau = n\nso_dao_nguoc = 0\nwhile n > 0:\n    chu_so = n % 10\n    # Công thức tạo số đảo ngược: nhân 10 số cũ và cộng chữ số mới\n    so_dao_nguoc = so_dao_nguoc * 10 + chu_so\n    n = n // 10\nif so_ban_dau == so_dao_nguoc:\nelse:\n"}, {d:"Bước 3: In kết quả", t:"    print(f\"{so_ban_dau} là số đối xứng.\")\n    print(f\"{so_ban_dau} KHÔNG phải là số đối xứng.\")\n"}]
  },
  {
    id:"C5",
    level:"medium",
    title:"C5 — Ôn tập: Sắp xếp danh sách theo thứ tự tăng dần k…",
    short:"ÔN TẬP",
    skill:"danh sách (list), vòng lặp",
    input:"Nhập theo đúng đề bài (mỗi giá trị 1 dòng).",
    output:"In ra kết quả theo yêu cầu.",
    text:"Sắp xếp danh sách theo thứ tự tăng dần không dùng hàm sort().",
    sampleIn:"5\n1\n3\n2\n8\n4\n",
    sampleOut:"Danh sách sau khi sắp xếp tăng dần là: [1, 2, 3, 4, 8]\n",
    tests:[{stdin:"5\n1\n3\n2\n8\n4\n", expected:"Danh sách sau khi sắp xếp tăng dần là: [1, 2, 3, 4, 8]\n"}],
    scaffold:`# C5: Sắp xếp danh sách theo thứ tự tăng dần k…
# Sắp xếp danh sách theo thứ tự tăng dần không dùng hàm sort().
# Input: nhập theo đề bài.
# Output: in kết quả theo yêu cầu.
# Lưu ý PASS: chỉ cần đúng cú pháp + đúng cấu trúc.

`,
    snips:[{d:"Bước 1: Nhập dữ liệu", t:"n = int(input(\"Nhập số lượng phần tử n: \"))\n    so = int(input(f\"Nhập phần tử thứ {i+1}: \"))\n"}, {d:"Bước 2: Xử lý", t:"a = []\nfor i in range(n):\n    a.append(so)\n\nn = len(a)\nfor i in range(n):\n    for j in range(0, n - i - 1):\n        if a[j] > a[j+1]:\n            a[j], a[j+1] = a[j+1], a[j]\n"}, {d:"Bước 3: In kết quả", t:"print(\"Danh sách sau khi sắp xếp tăng dần là:\", a)\n"}]
  },
  {
    id:"C6",
    level:"medium",
    title:"C6 — Ôn tập: Chuẩn hóa xâu họ tên: loại bỏ khoảng trắ…",
    short:"ÔN TẬP",
    skill:"xâu (string)",
    input:"Nhập theo đúng đề bài (mỗi giá trị 1 dòng).",
    output:"In ra kết quả theo yêu cầu.",
    text:"Chuẩn hóa xâu họ tên: loại bỏ khoảng trắng thừa, viết hoa chữ cái đầu mỗi từ.",
    sampleIn:"  nguyen   van   a  \n",
    sampleOut:"Xâu sau khi chuẩn hóa: 'Nguyen Van A'\n",
    tests:[{stdin:"  nguyen   van   a  \n", expected:"Xâu sau khi chuẩn hóa: 'Nguyen Van A'\n"}],
    scaffold:`# C6: Chuẩn hóa xâu họ tên: loại bỏ khoảng trắ…
# Chuẩn hóa xâu họ tên: loại bỏ khoảng trắng thừa, viết hoa chữ cái đầu mỗi từ.
# Input: nhập theo đề bài.
# Output: in kết quả theo yêu cầu.
# Lưu ý PASS: chỉ cần đúng cú pháp + đúng cấu trúc.

`,
    snips:[{d:"Bước 1: Nhập dữ liệu", t:"ho_ten = input(\"Nhập họ tên cần chuẩn hóa: \")\n"}, {d:"Bước 2: Xử lý", t:"# Bước 1: Tách các từ (loại bỏ khoảng trắng thừa)\ncac_tu = ho_ten.split()\n# Bước 2: Nối lại bằng một dấu cách duy nhất\nxau_tam = \" \".join(cac_tu)\n# Bước 3: Viết hoa chữ cái đầu mỗi từ\nxau_chuan_hoa = xau_tam.title()\n"}, {d:"Bước 3: In kết quả", t:"print(f\"Xâu sau khi chuẩn hóa: '{xau_chuan_hoa}'\")\n"}]
  }
];

/* =========================================================
   HINTS (đã giảm lộ lời giải)
   - Gợi ý chỉ là khung tư duy + điền khuyết (không đưa lời giải hoàn chỉnh)
   - Giữ nguyên UI, tính năng, và điều kiện PASS như hiện tại
   ========================================================= */
const __BUILTIN_IDS = new Set(LESSONS.map(x => x && x.id).filter(Boolean));


function __focusHintText(lesson){
  const all = [lesson && lesson.id, lesson && lesson.title, lesson && lesson.text, lesson && lesson.input, lesson && lesson.output].join(" ");
  const t = String(all||"").toLowerCase();
  const tips = [];
  const add = (cond, msg)=>{ if(cond) tips.push(msg); };

  add(/trung bình/.test(t), "Nếu đề có 'trung bình': thường = tổng / số lượng.");
  add(/chẵn|lẻ/.test(t), "Chẵn/lẻ: thường dùng n % 2 để kiểm tra.");
  add(/ước|bội|chia hết/.test(t), "Bài chia hết/ước/bội: dùng % để kiểm tra điều kiện.");
  add(/chu vi/.test(t), "Hình học: nhớ công thức chu vi theo đề.");
  add(/diện tích/.test(t), "Hình học: nhớ công thức diện tích theo đề.");
  add(/bảng cửu chương/.test(t), "Bảng cửu chương: lặp i từ 1 đến 10 và in từng dòng.");
  add((/đảo/.test(t) || /ngược/.test(t)) && (/số/.test(t) || /chuỗi/.test(t)), "Đảo: chuỗi có thể dùng s[::-1]; số thường lặp lấy chữ số cuối.");
  add(/đối xứng|palindrome/.test(t), "Đối xứng: so sánh giá trị với bản đảo ngược.");
  add(/sắp xếp|sort/.test(t), "Sắp xếp: dùng sort() hoặc đổi chỗ; chú ý tăng/giảm.");
  add(/lớn nhất|max/.test(t), "Giá trị lớn nhất: duyệt và cập nhật biến max.");
  add(/nhỏ nhất|min/.test(t), "Giá trị nhỏ nhất: duyệt và cập nhật biến min.");

  if(!tips.length) return "";
  return tips.map(x => "# - " + x).join("\n") + "\n";
}

function __makeThinkSnips(lesson){
  const cat = String(lesson.short||"").toUpperCase();
  const skills = String(lesson.skill||"").toLowerCase();
  const focus = __focusHintText(lesson);

  const snips = [];

  snips.push({
    d:"Bước 1: Hiểu đề",
    t:`# Bước 1: Hiểu đề\n# - Xác định: cần nhập gì? bao nhiêu dòng?\n# - Cần in ra gì? đúng thứ tự/đúng xuống dòng?\n# - Viết nháp ý tưởng bằng lời (1–3 dòng) trước khi code.\n${focus ? ("# Gợi ý trọng tâm:\n" + focus) : ""}`
  });

  snips.push({
    d:"Bước 2: Đọc input",
    t:`# Bước 2: Đọc input\n# - Nếu mỗi giá trị 1 dòng: dùng input() nhiều lần.\n# - Mẫu (tự chọn đúng kiểu dữ liệu):\n#   n = int(input())\n#   x = float(input())\n#   s = input().strip()\n`
  });

  if(cat.includes("IF") || skills.includes("if")){
    snips.push({
      d:"Bước 3: Rẽ nhánh",
      t:`# Bước 3: Rẽ nhánh (khung)\n# if ___:\n#     ...\n# elif ___:\n#     ...\n# else:\n#     ...\n# (Gợi ý: kiểm tra điều kiện theo thứ tự từ 'mạnh' đến 'yếu')\n`
    });
  } else if(cat.includes("FOR") || skills.includes("for")){
    snips.push({
      d:"Bước 3: Vòng lặp for",
      t:`# Bước 3: Vòng lặp for (khung)\n# tong = 0  # hoặc dem = 0 / mx = -inf / ...\n# for i in range(___, ___):\n#     # TODO: cập nhật biến theo đề\n#     pass\n`
    });
  } else if(cat.includes("WHILE") || skills.includes("while")){
    snips.push({
      d:"Bước 3: Vòng lặp while",
      t:`# Bước 3: Vòng lặp while (khung)\n# while ___:\n#     # TODO: cập nhật biến + tiến dần tới điều kiện dừng\n#     pass\n`
    });
  } else if(cat.includes("LIST") || skills.includes("list") || skills.includes("danh sách") || skills.includes("mảng")){
    snips.push({
      d:"Bước 3: Danh sách (list)",
      t:`# Bước 3: Danh sách (list)\n# a = []\n# for _ in range(n):\n#     a.append(___)\n# # TODO: duyệt a để xử lý theo đề\n`
    });
  } else if(cat.includes("STRING") || skills.includes("chuỗi") || skills.includes("string") || skills.includes("ký tự")){
    snips.push({
      d:"Bước 3: Xử lý chuỗi",
      t:`# Bước 3: Xử lý chuỗi\n# s = input().strip()\n# Gợi ý hàm hay dùng: len(s), s.lower(), s.upper(), s.split(), s[::-1]\n# TODO: xử lý theo yêu cầu đề\n`
    });
  } else {
    snips.push({
      d:"Bước 3: Xử lý",
      t:`# Bước 3: Xử lý\n# TODO: tạo biến kết quả theo đề (công thức/đếm/so sánh...)\n`
    });
  }

  snips.push({
    d:"Bước 4: In kết quả",
    t:`# Bước 4: In kết quả\n# - In đúng định dạng đề (đây là lỗi hay gặp nhất).\n# - Ưu tiên: print(...) đơn giản, đúng thứ tự.\n# TODO: print(...)\n`
  });

  return snips;
}

function __applyThinkHints(){
  try{
    for(const l of LESSONS){
      if(!l || !l.id) continue;
      if(!__BUILTIN_IDS.has(l.id)) continue; // không đụng bài tự tạo
      if(!l.__origSnips) l.__origSnips = l.snips;
      l.snips = __makeThinkSnips(l);
    }
  }catch(e){}
}
__applyThinkHints();



/* =========================================================
   1) STATE + STORAGE
   ========================================================= */
let current = LESSONS[0];
try{ window.LESSONS = LESSONS; window.current = current; }catch(e){}
let editor;
let pyodide = null;
let pyReady = false;
try{ window.pyReady = pyReady; }catch(e){}
let autoSuggest = true;

let suggestTimer = null;
let acTimer = null; // debounce autocomplete
let lastRunError = "";
let lastTestsResult = "";
let lastRunOrTestTs = 0;

// Focus mode
let focus = false;

// Think-Guard + Copilot-like
let thinkMode = true;
let guardStage = 1;
let acceptStreak = 0;
let lastManualTypeTs = Date.now();
let thinkScore = 0;

// Progress unlock per student (tách theo mã HS)
const user = window.__USER;
const PROG_KEY = `py10:progress:${user.id}`;
let progress = loadJSON(PROG_KEY, { unlocked: {A1:true, B1:true, C1:true}, passed: {}, passCount:0 });
try{ window.progress = progress; }catch(e){}

// Logging per student
const LOG_KEY = `py10:log:${user.id}`;
let logData = loadJSON(LOG_KEY, { events: [] });

// Assignments (teacher -> student)
const ASSIGN_KEY = "py10:assignments";
const TEACHER_BANK_KEY = "py10:teacherBank";
function getTeacherBank(){
  try{ return JSON.parse(localStorage.getItem(TEACHER_BANK_KEY) || "[]") || []; }catch{ return []; }
}
function normalizeTeacherLesson(l){
  if(!l) return null;
  const o = Object.assign({}, l);
  o.id = String(o.id||"").trim();
  o.title = o.title || ("Bài GV " + o.id);
  o.short = o.short || "Bài tập về nhà";
  o.skill = o.skill || "Giáo viên";
  o.text = o.text || "";
  o.input = o.input || (o.sampleIn ? "Theo input mẫu" : "");
  o.output = o.output || (o.sampleOut ? "Theo output mẫu" : "");
  o.sampleIn = (o.sampleIn != null) ? String(o.sampleIn) : "";
  o.sampleOut = (o.sampleOut != null) ? String(o.sampleOut) : "";
  if(!Array.isArray(o.tests) || !o.tests.length){
    o.tests = [{ stdin: o.sampleIn || "", expected: o.sampleOut || "", note: "GV" }];
  }
  return o;
}

function getAssignments(){
  try{ return JSON.parse(localStorage.getItem(ASSIGN_KEY) || "[]") || []; }catch{ return []; }
}

function assignmentMatchesStudent(a, user){
  try{
    if(!a || !user) return false;
    if(a.active === false) return false;

    // legacy string target: "all" | "class:10A1" | "student:hs1"
    if(typeof a.target === "string"){
      const t = a.target.trim();
      if(t === "all" || t === "everyone") return true;
      if(t.startsWith("class:")){
        const cls = (user.class || user.cls || "").trim();
        return t.slice(6).trim() === cls;
      }
      if(t.startsWith("student:")){
        return t.slice(8).trim() === String(user.id);
      }
    }

    const type = (a.targetType || "").toLowerCase() || (a.type||"").toLowerCase() || "all";
    const cls = (user.class || user.cls || "").trim();

    if(type === "all" || type === "everyone") return true;

    if(type === "class"){
      const val = String(a.targetValue || a.className || a.class || "").trim();
      return !!val && val === cls;
    }

    if(type === "student" || type === "students"){
      if(String(a.targetValue||"").trim() === String(user.id)) return true;
      const arr = a.targets || a.studentIds || a.students || [];
      if(Array.isArray(arr)) return arr.map(String).includes(String(user.id));
      return false;
    }

    // fallback: targets array could contain classes or student ids
    if(Array.isArray(a.targets)){
      if(a.targets.map(String).includes(String(user.id))) return true;
      if(cls && a.targets.map(String).includes(String(cls))) return true;
    }

    return false;
  }catch(e){
    return false;
  }
}

function isDoneForAssignment(as){
  // done if lesson already PASS
  return !!progress.passed[as.lessonId];
}
function formatDate(iso){
  if(!iso) return "";
  try{
    const d = new Date(iso);
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth()+1).padStart(2,"0");
    const dd = String(d.getDate()).padStart(2,"0");
    return `${dd}/${mm}/${yyyy}`;
  }catch{ return String(iso); }
}
function renderStudentTodo(){
  const box = document.getElementById("todoBox");
  const list = document.getElementById("todoList");
  if(!box || !list) return;

  // Lấy các bài giáo viên giao cho học sinh này (hoặc giao toàn lớp)
  const all = getAssignments().filter(a => a && a.active !== false);
  const mine = all.filter(a => assignmentMatchesStudent(a, user));
  const pending = mine
    .filter(a => !isDoneForAssignment(a))
    .sort((a,b)=> String(a.due||"9999").localeCompare(String(b.due||"9999")));

  // Helper: chọn "bài mặc định" để học sinh luôn có việc làm
  const pickDefaultLessonId = ()=>{
    // ưu tiên bài chưa PASS gần nhất trong lộ trình
    for(const l of LESSONS){
      if(isUnlocked(l.id) && !progress.passed[l.id]) return l.id;
    }
    // nếu đã PASS hết: chọn bài cuối cùng đã mở
    for(let i = LESSONS.length - 1; i >= 0; i--){
      if(isUnlocked(LESSONS[i].id)) return LESSONS[i].id;
    }
    return (LESSONS[0] && LESSONS[0].id) || "A1";
  };

  const cardHtml = (lessonId, title, dueIso, note, prefix)=>{
    const due = dueIso ? (" • Hạn: <b>"+formatDate(dueIso)+"</b>") : "";
    const n = note ? ("<br><span class='muted' style='color:#0b3b7a'>Ghi chú: "+escapeHtml(note)+"</span>") : "";
    return `<div style="padding:10px 12px; border:1px solid var(--border); border-radius:14px; background: rgba(255,255,255,.78); margin-top:8px;">
      <b>${escapeHtml(prefix || "")}${escapeHtml(title)}</b> <span class="chip" style="margin-left:8px;">${escapeHtml(lessonId)}</span>${due}
      ${n}
      <div style="margin-top:8px;">
        <button class="btn primary" style="padding:8px 10px; border-radius:999px; font-size:12px;"
          onclick="window.__openLesson && window.__openLesson('${lessonId}')">Làm ngay</button>
      </div>
    </div>`;
  };

  // Nếu có bài giáo viên giao -> hiện như trước
  if(pending.length){
    box.style.display = "block";
    const lines = pending.slice(0,4).map(a=>{
      const title = a.title || ("Bài " + a.lessonId);
      return cardHtml(a.lessonId, title, a.due, a.note, "");
    }).join("");
    list.innerHTML = "Bạn đang có <b>"+pending.length+"</b> bài cần hoàn thành:" + lines;
    return;
  }

  // Không có bài giao: luôn hiển thị "bài mặc định" để học sinh học mượt (không bị trống)
  const defId = pickDefaultLessonId();
  const l = LESSONS.find(x=>x.id===defId) || current || LESSONS[0];
  box.style.display = "block";

  const hadAssigned = mine.length > 0;
  const head = hadAssigned
    ? "✅ Bạn đã hoàn thành hết bài giáo viên giao. Bài luyện tập mặc định:"
    : "Chưa có bài giáo viên giao. Bài luyện tập mặc định:";
  const title = l ? l.title : ("Bài " + defId);
  list.innerHTML = head + cardHtml(defId, title, "", "Hoàn thành bài này để mở khóa bài tiếp theo.", "");
}

// Inline ghost UI
let ghost = { el:null, active:false, text:"", lastShown:0 };

const el = (id)=>document.getElementById(id);
function setPyStatus(kind, text){
  const dot = el("pyDot");
  dot.classList.remove("ok","warn");
  dot.classList.add(kind);
  el("pyStatus").textContent = text;
}
function toast(msg){
  const t = el("toast");
  t.textContent = msg;
  t.style.display = "block";
  clearTimeout(toast._tm);
  toast._tm = setTimeout(()=> t.style.display="none", 2400);
}
function escapeHtml(s){
  return String(s)
    .replaceAll("&","&amp;").replaceAll("<","&lt;")
    .replaceAll(">","&gt;").replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}
function saveJSON(key, obj){ localStorage.setItem(key, JSON.stringify(obj)); }
function loadJSON(key, fallback){
  try{ return JSON.parse(localStorage.getItem(key) || "") || fallback; }
  catch{ return fallback; }
}
function nowISO(){ return new Date().toISOString(); }

/* =========================================================
   2) UI — LEFT DROPDOWN + SEARCH + LOCK
   ========================================================= */
function setPickedLessonUI(){
  el("pickId").textContent = current.id;
  el("pickTitle").textContent = current.title;
  el("pickSub").textContent = current.short + " • " + current.skill;
  // Header: tên bài học
  const hdr = el("hdrLessonName");
  if(hdr) hdr.textContent = current.title;
  updateProgressBar();
}
function toggleLessonDrop(force){
  const drop = el("lessonDrop");
  const chev = el("chev");
  const open = typeof force === "boolean" ? force : !drop.classList.contains("open");
  drop.classList.toggle("open", open);
  chev.classList.toggle("open", open);
}
function isUnlocked(id){ return !!progress.unlocked[id]; }
function markPassed(id){
  progress.passed[id] = true;
  progress.passCount = Object.keys(progress.passed).length;
  const idx = LESSONS.findIndex(x=>x.id===id);
  if(idx >= 0){
    const cur = LESSONS[idx];
    const curLevel = (cur && cur.level) ? cur.level : "easy";
    // Mở bài tiếp theo trong CÙNG mức độ (Dễ/Khó/Nâng cao)
    for(let j = idx + 1; j < LESSONS.length; j++){
      const nx = LESSONS[j];
      const nxLevel = (nx && nx.level) ? nx.level : "easy";
      if(nxLevel === curLevel){
        progress.unlocked[nx.id] = true;
        break;
      }
    }
  }
  saveJSON(PROG_KEY, progress);
  updateScoreUI();
  updateProgressBar();
  renderLessonList();
  renderStudentTodo();
}
// Expose to patches (để PASS theo cấu trúc vẫn mở khóa + cập nhật tiến trình)
try{ window.markPassed = markPassed; }catch(e){}
function renderLessonList(){
  const list = el("lessonList");
  const q = (el("lessonSearch").value || "").trim().toLowerCase();
  const lv = (el("levelFilter") ? el("levelFilter").value : "all");
  list.innerHTML = "";
  for(const l of LESSONS){
    const searchable = (l.id+" "+l.title+" "+l.short+" "+l.skill+" "+l.text).toLowerCase();
    if(q && !searchable.includes(q)) continue;
    const lvl = (l.level || "easy");
    if(lv !== "all" && lvl !== lv) continue;

    const div = document.createElement("div");
    const locked = !isUnlocked(l.id);
    div.className = "item" + (l.id===current.id ? " active" : "") + (locked ? " locked" : "");
    const badge = progress.passed[l.id] ? `<span class="badge pass">PASS</span>`
                  : locked ? `<span class="badge lock">KHÓA</span>` : "";

    const lvlTxt = (lvl==="hard") ? "Khó" : (lvl==="adv") ? "Nâng cao" : "Dễ";
    div.innerHTML = `
      ${badge}
      <div class="k">${l.id}</div>
      <div class="t">${escapeHtml(l.title)}</div>
      <div class="s">${escapeHtml(l.short)} • <b>${escapeHtml(l.skill)}</b></div>
      <div class="tagrow"><span class="tag ${lvl}">${lvlTxt}</span></div>
    `;
    div.onclick = ()=>{
      if(locked){ toast("🔒 Bài này đang khóa. Hãy PASS bài trước để mở."); return; }
      current = l;
  try{ window.current = current; }catch(e){}
      try{ window.current = current; }catch(e){}
      document.querySelectorAll(".item").forEach(x=>x.classList.remove("active"));
      div.classList.add("active");
      setPickedLessonUI();
      renderTask();
        renderVideoPanel();
loadProgressFor(l);
      toggleLessonDrop(false);
      logEvent("lesson_select", {id:l.id});
    };
    list.appendChild(div);
  }
}

/* =========================================================
   3) UI — RIGHT TASK + TABS + FOCUS
   ========================================================= */
function renderTask(){
  el("taskTitle").textContent = current.title;
  el("taskDesc").textContent = current.short + " • " + current.skill;
  el("taskText").textContent = current.text;
  el("chipIn").textContent = "Input: " + current.input;
  el("chipOut").textContent = "Output: " + current.output;
  el("chipSkill").textContent = "Kỹ năng: " + current.skill;
  el("testsInfo").textContent = `Bộ test: ${current.tests.length} case • Ví dụ output: ${JSON.stringify(current.sampleOut)}`;

  renderVideoPanel();
}


// ===== Video bài học (chọn video theo bài) =====
function _videoKey(lessonId){ return `py10:video:last:${user.id}:${lessonId}`; }

function _normalizeVideo(url){
  const u = (url||"").trim();
  if(!u) return { kind:"none", src:"" };

  // YouTube
  const ytWatch = u.match(/https?:\/\/(www\.)?youtube\.com\/watch\?([^#]+)/i);
  const ytShort = u.match(/https?:\/\/youtu\.be\/([A-Za-z0-9_-]{6,})/i);
  const ytEmbed = u.match(/https?:\/\/(www\.)?youtube\.com\/embed\/([A-Za-z0-9_-]{6,})/i);

  let id = "";
  if(ytEmbed) id = ytEmbed[2];
  else if(ytShort) id = ytShort[1];
  else if(ytWatch){
    const qs = new URLSearchParams(ytWatch[2]);
    id = qs.get("v") || "";
  }
  if(id){
    return { kind:"youtube", src:`https://www.youtube.com/embed/${id}` };
  }

  // direct video file
  if(/\.(mp4|webm|ogg)(\?.*)?$/i.test(u)){
    return { kind:"file", src:u };
  }

  // generic iframe (drive/other)
  return { kind:"iframe", src:u };
}

function _setVideoPlayer(url, label){
  const box = el("videoPlayer");
  const meta = el("videoMeta");
  if(!box || !meta) return;

  const n = _normalizeVideo(url);
  if(n.kind==="none"){
    box.innerHTML = '<div class="videoPlayer muted">Chưa chọn video.</div>';
    meta.textContent = "—";
    return;
  }

  if(n.kind==="file"){
    box.innerHTML = `<video controls preload="metadata" src="${n.src}"></video>`;
  } else {
    // youtube / iframe
    box.innerHTML = `<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen src="${n.src}"></iframe>`;
  }
  meta.textContent = (label && label.trim()) ? `Đang xem: ${label}` : `Đang xem: ${url}`;
}

function renderVideoPanel(){
  const sel = el("videoSelect");
  const inp = el("videoCustom");
  const btn = el("videoApply");
  if(!sel || !inp || !btn) return;

  // build list from lesson config
  const list = (current && current.videos) ? current.videos.filter(v=>v && v.url && String(v.url).trim()) : [];
  const saved = localStorage.getItem(_videoKey(current.id)) || "";

  // options
  sel.innerHTML = "";
  const opt0 = document.createElement("option");
  opt0.value = "";
  opt0.textContent = "— Chọn video —";
  sel.appendChild(opt0);

  if(list.length===0){
    const opt = document.createElement("option");
    opt.value = "__none";
    opt.textContent = "Chưa có video mẫu cho bài này";
    opt.disabled = true;
    sel.appendChild(opt);
  } else {
    for(const v of list){
      const o = document.createElement("option");
      o.value = v.url.trim();
      o.textContent = v.title ? v.title : v.url;
      sel.appendChild(o);
    }
  }

  // if saved url not in list, add it
  if(saved && !list.some(v=>String(v.url).trim()===saved)){
    const o = document.createElement("option");
    o.value = saved;
    o.textContent = "Gần đây (đã mở)";
    sel.appendChild(o);
  }

  // set current selection
  if(saved){
    sel.value = saved;
    _setVideoPlayer(saved, "Gần đây (đã mở)");
  } else {
    _setVideoPlayer("", "");
  }

  // bind once
  if(!sel.dataset.bound){
    sel.addEventListener("change", ()=>{
      const v = sel.value;
      if(!v || v==="__none"){ _setVideoPlayer("", ""); return; }
      localStorage.setItem(_videoKey(current.id), v);
      const label = (sel.options[sel.selectedIndex] && sel.options[sel.selectedIndex].textContent) || "";
      _setVideoPlayer(v, label);
    });
    btn.addEventListener("click", ()=>{
      const u = (inp.value||"").trim();
      if(!u){ toast("Dán link video trước khi bấm Mở."); return; }
      localStorage.setItem(_videoKey(current.id), u);
      // also set select to empty (custom)
      sel.value = "";
      _setVideoPlayer(u, "Video tự nhập");
      toast("✅ Đã mở video");
    });
    sel.dataset.bound = "1";
  }
}

function initTabs(){
  document.querySelectorAll(".tab").forEach(t=>{
    t.onclick = ()=>{
      document.querySelectorAll(".tab").forEach(x=>x.classList.remove("active"));
      t.classList.add("active");
      const key = t.dataset.tab;
      document.querySelectorAll(".panel").forEach(p=>p.classList.remove("active"));
      el("panel-" + key).classList.add("active");
    };
  });
}
function toggleFocus(){
  focus = !focus;
  const grid = el("grid");
  const left = el("leftCard");
  grid.classList.toggle("focus", focus);
  left.classList.toggle("hidden", focus);
  el("btnFocus").textContent = focus ? "Thoát Focus" : "Focus";
  toast(focus ? "🎯 Focus Mode: tập trung editor" : "🧩 Đã hiện sidebar");
}

/* =========================================================
   4) SAVE/LOAD + SCORE + LOG
   ========================================================= */
function saveProgress(){
  localStorage.setItem(`py10:${user.id}:${current.id}`, editor.getValue());
  localStorage.setItem(`py10:last:${user.id}`, current.id);
  toast("✅ Đã lưu " + current.id);
  logEvent("save", {id: current.id});
}
// expose để UI tối giản (gán vào nút "Nạp kết quả GV") có thể gọi mà không đổi logic
try{ window.__saveProgress = saveProgress; }catch(e){}
function loadProgressFor(lesson){
  const key = `py10:${user.id}:${lesson.id}`;
  const v = localStorage.getItem(key);
  const draft = localStorage.getItem(`py10:draft:${user.id}:${lesson.id}`);
  editor.setValue((v && v.trim()) ? v : (draft && draft.trim() ? draft : blankStarter(lesson)));
  el("stdin").value = lesson.sampleIn || "";
  el("console").textContent = "";
  lastRunError = "";
  lastTestsResult = "";
  clearErrorHighlight();
  updateCoach();
  updateGuard();
  updateLogView();
  renderStudentTodo();
}

function blankStarter(lesson){
  // Editor trống theo tinh thần "tự làm": chỉ gợi ý tối thiểu, không đưa lời giải.
  const title = (lesson && lesson.title) ? lesson.title : "Bài tập";
  const id = (lesson && lesson.id) ? lesson.id : "";
  return `# ${id} ${title}\n# Gõ lời giải của em ở đây.\n`;
}


/* =========================================================
   6.5) TỰ RA ĐỀ (bài của học sinh) — lưu cục bộ theo tài khoản
   - Không sinh lời giải hoàn chỉnh
   - Gợi ý theo 4 tầng để giữ thói quen tư duy
   ========================================================= */
const CP_LIST_KEY  = `py10:customLessons:${user.id}`;
const CP_DRAFT_KEY = `py10:customDraft:${user.id}`;

function getCustomLessons(){
  const list = loadJSON(CP_LIST_KEY, []);
  return Array.isArray(list) ? list : [];
}
function saveCustomLessons(list){ saveJSON(CP_LIST_KEY, list); }

function loadCustomLessons(){
  const list = getCustomLessons();
  if(!list.length) return;
  const existing = new Set(LESSONS.map(x=>x.id));
  for(const l of list){
    if(!l || !l.id || existing.has(l.id)) continue;
    progress.unlocked[l.id] = true;
    LESSONS.unshift(l);
    existing.add(l.id);
  }
}

function upsertCustomLesson(lesson){
  const list = getCustomLessons();
  const idx = list.findIndex(x => x && x.id === lesson.id);
  if(idx >= 0) list[idx] = lesson;
  else list.unshift(lesson);
  saveCustomLessons(list);
}

function readCpForm(){
  return {
    level: (el("cpLevel") && el("cpLevel").value) || "easy",
    title: (el("cpTitle") && el("cpTitle").value || "").trim(),
    text: (el("cpText") && el("cpText").value || "").trim(),
    input: (el("cpInput") && el("cpInput").value || "").trim(),
    output: (el("cpOutput") && el("cpOutput").value || "").trim(),
    sampleIn: (el("cpSampleIn") && el("cpSampleIn").value || ""),
    sampleOut: (el("cpSampleOut") && el("cpSampleOut").value || "")
  };
}
function writeCpForm(d){
  if(!d) return;
  if(el("cpLevel")) el("cpLevel").value = d.level || "easy";
  if(el("cpTitle")) el("cpTitle").value = d.title || "";
  if(el("cpText")) el("cpText").value = d.text || "";
  if(el("cpInput")) el("cpInput").value = d.input || "";
  if(el("cpOutput")) el("cpOutput").value = d.output || "";
  if(el("cpSampleIn")) el("cpSampleIn").value = d.sampleIn || "";
  if(el("cpSampleOut")) el("cpSampleOut").value = d.sampleOut || "";
}
function saveCpDraft(){ saveJSON(CP_DRAFT_KEY, readCpForm()); }
function restoreCpDraft(){
  const d = loadJSON(CP_DRAFT_KEY, null);
  if(d) writeCpForm(d);
}
function clearCpDraft(){
  localStorage.removeItem(CP_DRAFT_KEY);
  writeCpForm({ level:"easy", title:"", text:"", input:"", output:"", sampleIn:"", sampleOut:"" });
  if(el("cpAnalysisOut")) el("cpAnalysisOut").textContent = "—";
  renderMyCustomList();
}

function norm(s){ return String(s||"").toLowerCase(); }
function summarizeOneLine(text){
  const t = String(text||"").replace(/\s+/g,' ').trim();
  if(!t) return "—";
  return t.length > 120 ? t.slice(0,118) + "…" : t;
}

function detectTopics(all){
  const t = norm(all);
  const topics = [];
  const add = (name, re)=>{ if(re.test(t) && !topics.includes(name)) topics.push(name); };

  add("toán số", /(ước|bội|nguyên tố|gcd|lcm|chia hết|tổng chữ số|chữ số|cơ số)/);
  add("rẽ nhánh", /(nếu|if|elif|điều kiện|so sánh|>=|<=|>|<)/);
  add("vòng lặp", /(for|while|lặp|từ\s*\d+\s*đến|1\.\.n|1\.\. n|1..n|đếm|duyệt|lần)/);
  add("chuỗi", /(chuỗi|string|ký tự|palindrome|đảo|tách|split|strip)/);
  add("danh sách", /(mảng|danh sách|list|phần tử|dãy số)/);
  add("sắp xếp", /(sắp xếp|sort|tăng dần|giảm dần)/);
  add("nhập/xuất", /(input|stdin|output|in ra|nhập)/);

  if(!topics.length) topics.push("nhập/xuất");
  return topics.slice(0,5);
}

function inferInputFrames(sampleIn){
  const raw = String(sampleIn||"");
  const lines = raw.split(/\r?\n/).filter(x=>x.trim().length);
  if(!lines.length){
    return [{d:"Đọc input", t:"# (Đề không yêu cầu nhập)\n"}];
  }
  if(lines.length === 1){
    const tok = lines[0].trim().split(/\s+/);
    if(tok.length === 1){
      if(/^[-+]?\d+$/.test(tok[0])) return [{d:"Đọc 1 số", t:"n = int(input())\n"}];
      if(/^[-+]?\d+\.\d+$/.test(tok[0])) return [{d:"Đọc 1 số thực", t:"x = float(input())\n"}];
      return [{d:"Đọc 1 chuỗi", t:"s = input().strip()\n"}];
    }
    if(tok.length === 2) return [{d:"Đọc 2 số", t:"a, b = map(int, input().split())\n"}];
    if(tok.length === 3) return [{d:"Đọc 3 số", t:"a, b, c = map(int, input().split())\n"}];
    return [{d:"Đọc nhiều số trên 1 dòng", t:"arr = list(map(int, input().split()))\n"}];
  }
  const first = lines[0].trim().split(/\s+/);
  if(first.length === 1 && /^\d+$/.test(first[0]) && lines.length >= 2){
    return [
      {d:"Đọc n rồi đọc tiếp", t:"n = int(input())\n# TODO: đọc tiếp theo đúng đề\n"},
      {d:"Gợi ý danh sách", t:"arr = [int(input()) for _ in range(n)]\n"}
    ];
  }
  return [{d:"Gợi ý đọc input", t:"# TODO: đọc theo từng dòng và split() đúng định dạng\n"}];
}

function analyzeProblem(payload){
  const all = [payload.title, payload.text, payload.input, payload.output].join("\n");
  const topics = detectTopics(all);
  const skills = topics.join(", ");

  const tier1 = [
    "Tóm tắt yêu cầu (1 câu): " + summarizeOneLine(payload.text),
    "Xác định đúng Input/Output theo đề (đúng số dòng, khoảng trắng, xuống dòng).",
    "Chia bài thành 3 phần: Đầu vào → Xử lý → Đầu ra (viết ý tưởng trước rồi mới code)."
  ];

  const tier2 = [
    "Đầu vào: " + (payload.input ? summarizeOneLine(payload.input) : "(chưa mô tả)"),
    "Đầu ra: " + (payload.output ? summarizeOneLine(payload.output) : "(chưa mô tả)"),
    "Rà các trường hợp biên (n=0/1, số âm, chuỗi rỗng, dữ liệu nhiều dòng…) nếu đề có."
  ];

  const tier3 = ["Lập kế hoạch thuật toán (mỗi bước 1 dòng):"];
  if(topics.includes("toán số")) tier3.push("- Tách dữ liệu (chữ số/ước/bội…), kiểm tra điều kiện, cộng/đếm/so sánh theo đề.");
  if(topics.includes("vòng lặp")) tier3.push("- Dùng vòng lặp để duyệt; cập nhật biến tổng/đếm/max/min.");
  if(topics.includes("rẽ nhánh")) tier3.push("- Dùng if/elif; kiểm tra thứ tự điều kiện để tránh chồng chéo.");
  if(topics.includes("chuỗi")) tier3.push("- Chuẩn hoá chuỗi (strip/lower); duyệt ký tự hoặc tách bằng split().");
  if(topics.includes("danh sách")) tier3.push("- Đọc list; duyệt list; xử lý từng phần tử theo đề.");
  if(topics.includes("sắp xếp")) tier3.push("- Sắp xếp rồi xử lý/so sánh; chú ý thứ tự tăng/giảm.");
  tier3.push("- In kết quả đúng định dạng (đây là lỗi hay gặp nhất).");

  const frames = inferInputFrames(payload.sampleIn || "");
  frames.push({d:"Khung xử lý", t:"# TODO: viết thuật toán theo ý tưởng (không cần dài)\n"});
  frames.push({d:"Khung in kết quả", t:"# TODO: print(...) đúng định dạng đề\n"});

  const cloze = [];
  if(topics.includes("vòng lặp")) cloze.push({d:"Khung vòng lặp", t:"for i in range(___, ___):\n    # TODO\n"});
  if(topics.includes("rẽ nhánh")) cloze.push({d:"Khung if/elif", t:"if ___:\n    ...\nelif ___:\n    ...\nelse:\n    ...\n"});
  if(topics.includes("chuỗi")) cloze.push({d:"Xử lý chuỗi", t:"s = input().strip()\n# TODO: xử lý s\n"});
  if(topics.includes("danh sách")) cloze.push({d:"Duyệt list", t:"for x in arr:\n    # TODO\n"});
  if(!cloze.length) cloze.push({d:"Khung chung", t:"# TODO: triển khai theo 3 phần (Input → Process → Output)\n"});

  const tier4 = [
    "Tầng 4 chỉ gợi ý mức 'một dòng/ý' — em vẫn tự ghép thành bài hoàn chỉnh.",
    "Nếu output sai: dùng nút So sánh Output để kiểm tra xuống dòng / khoảng trắng.",
    "Luôn bấm Test để xác nhận PASS trước khi nộp."
  ];

  return { topics, skills, tier1, tier2, tier3, tier4, frames, cloze };
}

function formatAnalysisForPanel(ana){
  const lines = [];
  lines.push("Kỹ năng/Chủ đề nhận diện: " + (ana.skills || "—"));
  lines.push("");
  lines.push("Tầng 1 (Ý):");
  ana.tier1.forEach(x=>lines.push("- " + x));
  lines.push("");
  lines.push("Tầng 2 (Khung):");
  ana.tier2.forEach(x=>lines.push("- " + x));
  lines.push("");
  lines.push("Tầng 3 (Điền khuyết):");
  ana.tier3.forEach(x=>lines.push("- " + x));
  lines.push("");
  lines.push("Tầng 4 (Hoàn thiện dòng):");
  ana.tier4.forEach(x=>lines.push("- " + x));
  return lines.join("\n");
}

function newCustomId(){
  const list = getCustomLessons();
  const nums = list.map(x=>String(x.id||"").match(/^U(\d+)$/)).filter(Boolean).map(m=>parseInt(m[1],10));
  const next = (nums.length ? Math.max(...nums) : 0) + 1;
  return "U" + String(next).padStart(3,'0');
}

function buildCustomLesson(payload, ana){
  const id = newCustomId();
  const title = payload.title || ("Bài tự tạo " + id);
  const scaffold = `# ${id} — ${title}\n# Đề: ${summarizeOneLine(payload.text)}\n# Gõ lời giải của em ở dưới:\n`;
  const tests = [];
  const sin = payload.sampleIn || "";
  const sout = payload.sampleOut || "";
  if((sin.trim() || sout.trim())) tests.push({stdin: sin, expected: sout});
  // Nếu không có ví dụ thì vẫn cho 1 test rỗng để tránh lỗi
  if(!tests.length) tests.push({stdin:"", expected:""});
  return {
    id,
    level: payload.level || "easy",
    title: `${id} — ${title}`,
    short: "Bài tự ra đề",
    skill: ana.skills || "nhập/xuất",
    input: payload.input || "(theo đề tự tạo)",
    output: payload.output || "(theo đề tự tạo)",
    text: payload.text || "",
    sampleIn: payload.sampleIn || "",
    sampleOut: payload.sampleOut || "",
    tests,
    scaffold,
    snips: [
      {d:"Tầng 1: Ý tưởng", t:(ana.tier1||[]).slice(0,2).join("\n") + "\n"},
      {d:"Tầng 2: Input/Output", t:(ana.tier2||[]).slice(0,2).join("\n") + "\n"}
    ],
    analysis: ana,
    isCustom: true
  };
}

function renderMyCustomList(){
  const box = el("cpMyList");
  if(!box) return;
  const list = getCustomLessons();
  if(!list.length){
    box.innerHTML = '<span class="chip">Chưa có bài tự tạo</span>';
    return;
  }
  box.innerHTML = '';
  list.slice(0,12).forEach(l=>{
    const b = document.createElement('button');
    b.className = 'chip';
    b.textContent = l.id + ' • ' + String(l.title||'').replace(/^U\d+\s—\s/, '');
    b.onclick = ()=>{ if(window.__openLesson) window.__openLesson(l.id); };
    box.appendChild(b);
  });
}

function doCpAnalyze(){
  const p = readCpForm();
  if(!p.text){
    toast("✍️ Em hãy nhập mô tả đề bài trước.");
    return;
  }
  const ana = analyzeProblem(p);
  if(el("cpAnalysisOut")) el("cpAnalysisOut").textContent = formatAnalysisForPanel(ana);
  saveCpDraft();
}

function doCpCreateAndOpen(){
  const p = readCpForm();
  if(!p.text){
    toast("✍️ Em hãy nhập mô tả đề bài trước.");
    return;
  }
  if(!p.title){
    p.title = "Bài tự tạo";
  }
  const ana = analyzeProblem(p);
  const lesson = buildCustomLesson(p, ana);

  // Lưu + nạp vào danh sách bài hiện tại
  upsertCustomLesson(lesson);
  progress.unlocked[lesson.id] = true;
  saveJSON(PROG_KEY, progress);

  // Đưa vào LESSONS (đầu danh sách)
  if(!LESSONS.find(x=>x.id===lesson.id)) LESSONS.unshift(lesson);

  // render list + mở luôn
  renderLessonList();
  renderMyCustomList();
  if(el("cpAnalysisOut")) el("cpAnalysisOut").textContent = formatAnalysisForPanel(ana);
  if(window.__openLesson) window.__openLesson(lesson.id);
  toast("📌 Đã tạo bài và mở để làm ngay.");
}

function updateProgressBar(){
  const fill = el("progressFill");
  const txt = el("progressText");
  if(!fill || !txt) return;
  const total = (Array.isArray(LESSONS) ? LESSONS.length : 0);
  const passed = Number(progress.passCount || 0);
  const pct = total ? Math.round((passed/total)*100) : 0;
  fill.style.width = pct + "%";
  fill.classList.toggle("done", pct >= 100);
  txt.textContent = `${passed}/${total} • ${pct}%`;
}

function updateScoreUI(){
  el("thinkScore").textContent = String(Math.max(0, Math.round(thinkScore)));
  el("passCount").textContent = String(progress.passCount || 0);
  updateProgressBar();
}
function logEvent(type, payload){
  logData.events.push({ t: nowISO(), type, lesson: current.id, ...payload });
  if(logData.events.length > 200) logData.events = logData.events.slice(-200);
  saveJSON(LOG_KEY, logData);
  updateLogView();
}
try{ window.logEvent = logEvent; }catch(e){}
function updateLogView(){
  const last = logData.events.slice(-12).reverse();
  if(!last.length){ el("logView").textContent = "Chưa có nhật ký."; return; }
  const lines = last.map(e=>{
    const time = e.t.replace("T"," ").replace("Z","");
    let extra = "";
    if(e.type==="test") extra = ` • ${e.result || ""}`;
    if(e.type==="run" && e.ok===false) extra = ` • lỗi`;
    if(e.type==="pass") extra = ` • MỞ BÀI TIẾP`;
    return `• [${time}] (${e.lesson}) ${e.type}${extra}`;
  });
  el("logView").textContent = lines.join("\n");
}
function exportCSV(){
  // Giữ nguyên nút/luồng cũ, nhưng xuất file Excel (.xls) để mở trực tiếp bằng Excel.
  const header = ["time","student_id","student_name","lesson","type","result","detail"];
  const rows = logData.events.map(e=>{
    const detail = e.errorLine ? `line=${e.errorLine}` : (e.detail || "");
    return [
      e.t, user.id, user.name || "", e.lesson, e.type, (e.result || ""), (detail || "")
    ].map(x => String(x ?? ""));
  });

  function esc(s){
    return String(s ?? "")
      .replace(/&/g,"&amp;")
      .replace(/</g,"&lt;")
      .replace(/>/g,"&gt;")
      .replace(/"/g,"&quot;");
  }
  function tr(cells, tag){
    return "<tr>" + cells.map(c=>`<${tag}>${esc(c)}</${tag}>`).join("") + "</tr>";
  }

  const sheetName = "NhatKy";
  let html = `<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8">`;
  html += `<!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>${esc(sheetName)}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->`;
  html += `</head><body><table border="1">`;
  html += tr(header, "th");
  rows.forEach(r=>{ html += tr(r, "td"); });
  html += `</table></body></html>`;

  const blob = new Blob(["\ufeff", html], {type:"application/vnd.ms-excel;charset=utf-8"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `nhatky_${user.id}.xls`;
  a.click();
  setTimeout(()=>{ try{ URL.revokeObjectURL(url); }catch{} }, 1000);
  toast("📄 Đã xuất Excel");
}

// expose để UI tối giản dùng lại (nút "Nạp kết quả GV")
try{ window.__exportExcel = exportCSV; }catch(e){}

// expose để UI tối giản có thể gọi xuất Excel
try{ window.__exportExcel = exportCSV; }catch(e){}


/* =========================================================
   5) PYODIDE RUN/TEST + DEBUG HIGHLIGHT
   ========================================================= */
// Runtime ưu tiên: Skulpt (offline, tải nhanh) → nếu thiếu mới dùng Pyodide.
let PY_RUNTIME = "skulpt";

function initSkulptRuntime(){
  if(!(window.Sk && typeof window.Sk.configure === "function")) return false;
  // cấu hình cơ bản: stdlib + giới hạn chạy để tránh treo
  Sk.configure({
    read: (x)=>{
      if(!Sk.builtinFiles || !Sk.builtinFiles.files || !(x in Sk.builtinFiles.files)){
        throw new Error("Skulpt: thiếu file thư viện: " + x);
      }
      return Sk.builtinFiles.files[x];
    },
    output: ()=>{},
    inputfun: ()=>"",
    inputfunTakesPrompt: true,
    execLimit: 100000
  });
  return true;
}

async function initPyodide(){
  // 0) Nếu Skulpt có sẵn thì dùng ngay (đảm bảo chạy 100% trên GitHub Pages)
  try{
    if(initSkulptRuntime()){
      PY_RUNTIME = "skulpt";
      pyReady = true;
      try{ window.pyReady = true; }catch(e){}
      setPyStatus("ok", "Python sẵn sàng");
      el("btnRun").disabled = false;
      el("btnTest").disabled = false;
      el("console").textContent = "✅ Python sẵn sàng. Bấm Run hoặc Test.\n";
      return;
    }
  }catch(e){
    console.warn("Skulpt init fail, fallback Pyodide", e);
  }

  // Tăng độ ổn định tải Pyodide:
  // - Chờ loader ở <head> (nếu có)
  // - Thử nhiều nguồn indexURL (local ./pyodide/ trước, rồi CDN)
  // - Có timeout để tránh treo vô hạn
  try{
    setPyStatus("warn", "Đang tải Python…");

    // 1) đảm bảo có loadPyodide
    if(typeof window.__PYODIDE_SCRIPT_READY !== "undefined"){
      try{ await window.__PYODIDE_SCRIPT_READY; }catch(e){}
    }
    if(typeof loadPyodide !== "function"){
      throw new Error("Không nạp được pyodide.js (có thể do mạng/tiện ích chặn).\nGợi ý: tắt AdBlock hoặc thử mạng khác.\nNếu vẫn lỗi: đặt thư mục 'pyodide' vào cùng repo và chạy lại.");
    }

    const V = "0.25.1";
    // Tránh bị "treo" lâu khi repo CHƯA có thư mục ./pyodide/.
    // Nếu phát hiện có ./pyodide/ thì ưu tiên local; nếu không, ưu tiên CDN.
    const cdnBases = [
      `https://cdn.jsdelivr.net/pyodide/v${V}/full/`,
      `https://cdn.jsdelivr.net/npm/pyodide@${V}/full/`,
      `https://unpkg.com/pyodide@${V}/full/`
    ];
    let useLocal = false;
    try{
      // HEAD nhanh hơn GET; nếu server không hỗ trợ HEAD thì sẽ rơi vào catch và dùng CDN
      const r = await fetch("./pyodide/pyodide.js", { method: "HEAD", cache: "no-store" });
      useLocal = !!(r && r.ok);
    }catch(e){ useLocal = false; }
    const bases = useLocal ? ["./pyodide/", ...cdnBases] : cdnBases;
    const tried = [];

    const withTimeout = (p, ms) => new Promise((resolve, reject)=>{
      const t = setTimeout(()=>reject(new Error("timeout")), ms);
      Promise.resolve(p).then(v=>{clearTimeout(t); resolve(v);}, e=>{clearTimeout(t); reject(e);});
    });

    let lastErr = null;
    for(let i=0;i<bases.length;i++){
      const base = bases[i];
      tried.push(base);
      setPyStatus("warn", i===0 ? "Đang tải Python…" : `Đang tải Python… (thử nguồn ${i+1})`);
      try{
        // 45s đủ cho mạng trường; nếu timeout thì thử nguồn khác
        pyodide = await withTimeout(loadPyodide({ indexURL: base }), 45000);
        pyReady = true;
      try{ window.pyReady = true; }catch(e){}
        setPyStatus("ok", "Python sẵn sàng");
        el("btnRun").disabled = false;
        el("btnTest").disabled = false;
        el("console").textContent = "✅ Python sẵn sàng. Bấm Run hoặc Test.\n";
        return;
      }catch(e){
        lastErr = e;
      }
    }

    // Nếu tới đây vẫn fail
    setPyStatus("warn", "Lỗi tải Python");
    const msg = (String(lastErr||""))
      .replaceAll("\n\n","\n")
      .slice(0, 1200);
    el("console").textContent =
      "❌ Không tải được môi trường Python (Pyodide).\n"+
      "Nguyên nhân thường gặp: mạng trường chặn CDN hoặc tải file lớn bị gián đoạn.\n\n"+
      "Cách khắc phục nhanh:\n"+
      "1) Tắt AdBlock/tiện ích chặn, rồi Ctrl+Shift+R để tải lại.\n"+
      "2) Thử đổi mạng (Wi‑Fi ↔ 4G).\n"+
      "3) Cách ổn định nhất: upload thư mục 'pyodide' vào cùng repo (./pyodide/) để chạy offline CDN.\n\n"+
      "Đã thử các nguồn:\n- " + tried.join("\n- ") + "\n\n"+
      "Chi tiết lỗi: " + msg;

  }catch(e){
    setPyStatus("warn", "Lỗi tải Python");
    el("console").textContent = "❌ Không tải được Pyodide.\n" + String(e);
  }
}
async function runPython(code, stdin){
  if(!pyReady) return {stdout:"", error:"Python chưa sẵn sàng."};

  // ===== Runtime 1: Skulpt (offline, ổn định cho kiến thức Python cơ bản) =====
  if(PY_RUNTIME === "skulpt"){
    let stdout = "";
    let stderr = "";
    const lines = String(stdin ?? "").replace(/\r\n/g,"\n").split("\n");
    let idx = 0;

    // cấu hình lại mỗi lần chạy để gắn input/output theo phiên
    Sk.configure({
      output: (t)=>{ stdout += t; },
      read: (x)=>{
        if(!Sk.builtinFiles || !Sk.builtinFiles.files || !(x in Sk.builtinFiles.files)){
          throw new Error("Skulpt: thiếu file thư viện: " + x);
        }
        return Sk.builtinFiles.files[x];
      },
      inputfun: (prompt)=>{
        // Skulpt gọi input() nhiều lần, trả từng dòng
        if(idx >= lines.length) return "";
        return String(lines[idx++]);
      },
      inputfunTakesPrompt: true,
      execLimit: 200000
    });

    try{
      await Sk.misceval.asyncToPromise(()=>
        Sk.importMainWithBody("__main__", false, String(code), true)
      );
    }catch(e){
      // Skulpt error thường là object; ưu tiên toString()
      stderr = (e && e.toString) ? e.toString() : String(e);
    }
    return { stdout, error: stderr };
  }

  // ===== Runtime 2: Pyodide (nếu sử dụng) =====
  if(!window.pyodide) return {stdout:"", error:"Pyodide chưa sẵn sàng."};
  pyodide.globals.set("USER_CODE", code);
  pyodide.globals.set("USER_STDIN", stdin ?? "");
  const runner = `
import sys, io, traceback, contextlib
code = USER_CODE
stdin = USER_STDIN
_out = io.StringIO()
_err = io.StringIO()
sys.stdin = io.StringIO(stdin)
ns = {"__name__":"__main__"}
try:
    with contextlib.redirect_stdout(_out), contextlib.redirect_stderr(_err):
        exec(code, ns)
except Exception:
    traceback.print_exc(file=_err)
{"stdout": _out.getvalue(), "error": _err.getvalue()}
`;
  const res = await pyodide.runPythonAsync(runner);

  let stdout = "";
  let error  = "";
  try{
    if(res && typeof res.get === "function"){
      const outP = res.get("stdout");
      const errP = res.get("error");
      stdout = outP == null ? "" : String(outP);
      error  = errP == null ? "" : String(errP);
      if(outP && typeof outP.destroy === "function") outP.destroy();
      if(errP && typeof errP.destroy === "function") errP.destroy();
    } else {
      const js = (res && typeof res.toJs === "function") ? res.toJs() : res;
      stdout = js?.stdout ?? js?.["stdout"] ?? "";
      error  = js?.error  ?? js?.["error"]  ?? "";
      stdout = String(stdout);
      error  = String(error);
    }
  }catch(e){
    error = String(e);
  } finally {
    if(res && typeof res.destroy === "function") res.destroy();
  }
  return { stdout, error };
}
try{ window.runPython = runPython; }catch(e){}
function normalize(s){ return String(s).replace(/\r\n/g,"\n").replace(/[ \t]+$/gm,"").trimEnd(); }
function normalizeLoose(s){
  return String(s||"")
    .replace(/\r\n/g,"\n")
    .replace(/[ \t]+$/gm,"")
    .trim()
    .replace(/[ \t]+/g," ")
    .replace(/\n{2,}/g,"\n");
}
try{ window.normalize = normalize; }catch(e){}
try{ window.normalizeLoose = normalizeLoose; }catch(e){}
let errorLineHandle = null;
function clearErrorHighlight(){
  if(errorLineHandle !== null){
    editor.removeLineClass(errorLineHandle, "background", "cm-errorline");
    errorLineHandle = null;
  }
}
function extractErrorLine(trace){
  const m = String(trace).match(/line\s+(\d+)/i);
  if(!m) return null;
  const n = parseInt(m[1],10);
  if(!Number.isFinite(n)) return null;
  return n;
}
function extractErrorType(trace){
  const lines = String(trace||"").trim().split(/\n/);
  for(let i=lines.length-1;i>=0;i--){
    const s = (lines[i]||"").trim();
    if(!s) continue;
    const m = s.match(/^([A-Za-z_][A-Za-z0-9_]*):/);
    if(m) return m[1];
  }
  return "";
}

// Dịch lỗi Python sang tiếng Việt + gợi ý cách xử lý (không đưa lời giải).
function extractErrorMessage(trace){
  const lines = String(trace||"").trim().split(/\n/);
  for(let i=lines.length-1;i>=0;i--){
    const s = (lines[i]||"").trim();
    if(!s) continue;
    const m = s.match(/^[A-Za-z_][A-Za-z0-9_]*:\s*(.*)$/);
    if(m) return (m[1]||"").trim();
  }
  return "";
}


function _getCodeLine(code, ln1){
  const lines = String(code||"").split(/\n/);
  const i = (parseInt(ln1,10)||0) - 1;
  if(i < 0 || i >= lines.length) return "";
  return lines[i];
}
function _countInputCalls(code){
  // đếm thô (có thể sai nếu input() nằm trong chuỗi), nhưng đủ để gợi ý cho HS
  const s = String(code||"").replace(/#.*$/gm,"");
  const m = s.match(/\binput\s*\(/g);
  return m ? m.length : 0;
}
function _countStdinLines(stdin){
  return String(stdin||"").split(/\n/).filter(x=>String(x).trim()!=="").length;
}
function _analyzePythonErrorSpecific(raw, type, msg, ln, code, stdin){
  const t = String(type||"").toLowerCase();
  const line = (ln && code) ? _getCodeLine(code, ln) : "";
  const trimmed = String(line||"").trim();
  const info = { exact:"", why:"", line:"", fixes:[] };
  const addFix = (s)=>{ if(s) info.fixes.push("- " + s); };

  // ===== SyntaxError: cố gắng đoán lỗi cụ thể theo dòng code =====
  if(t === "syntaxerror"){
    info.line = line ? `📌 Dòng ${ln}: ${line}` : "";
    // Hiển thị thêm 1 dòng trước/sau để dễ khoanh vùng lỗi
    if(ln && code){
      const prev = _getCodeLine(code, ln-1);
      const curL = _getCodeLine(code, ln);
      const next = _getCodeLine(code, ln+1);
      const ctx = [];
      if(prev) ctx.push(`   ${ln-1}| ${prev}`);
      if(curL) ctx.push(`👉 ${ln}| ${curL}`);
      if(next) ctx.push(`   ${ln+1}| ${next}`);
      if(ctx.length) info.line = "📌 Vùng lỗi:\n" + ctx.join("\n");
    }

    const msgLower = String(msg||"").toLowerCase();
    // Skulpt đôi khi trả về SyntaxError: bad input (thiếu dấu đóng, ký tự lạ...)
    if(msgLower.includes("bad input")){
      const curLine = (ln && code) ? _getCodeLine(code, ln) : (line || "");
      // 0) Ký tự lạ khi copy (smart quotes, NBSP, dash dài, tab)
      const suspects = [];
      const prevLine0 = (ln && code) ? _getCodeLine(code, ln-1) : "";
      const nextLine0 = (ln && code) ? _getCodeLine(code, ln+1) : "";
      const around = [prevLine0, curLine, nextLine0].filter(x=>x!==null && x!==undefined).join("\n");

      if(/[“”‘’]/.test(around)) suspects.push("dấu nháy cong ( “ ” ‘ ’ )");
      if(/[–—]/.test(around)) suspects.push("dấu gạch ngang dài (–/—)");
      if(/\u00A0/.test(around)) suspects.push("khoảng trắng đặc biệt (NBSP)");
      if(/\t/.test(around)) suspects.push("ký tự TAB");

      // nếu không thấy ở quanh dòng lỗi, vẫn kiểm tra toàn bài (hay gặp khi copy từ Word)
      if(!suspects.length && /[“”‘’–—\u00A0]/.test(String(code||""))){
        if(/[“”‘’]/.test(code)) suspects.push("dấu nháy cong ( “ ” ‘ ’ )");
        if(/[–—]/.test(code)) suspects.push("dấu gạch ngang dài (–/—)");
        if(/\u00A0/.test(code)) suspects.push("khoảng trắng đặc biệt (NBSP)");
      }

      if(suspects.length){
        info.exact = "Có ký tự lạ trong code khiến Python không phân tích cú pháp được.";
        info.why = "Khi copy từ Word/PDF hoặc gõ bằng bộ gõ đặc biệt, có thể xuất hiện ký tự không chuẩn → Skulpt báo 'bad input'.";
        addFix("Xóa ký tự lạ và gõ lại (dấu nháy ' \" chuẩn, khoảng trắng thường).");
        addFix("Mẹo: dán vào Notepad, thay lại dấu nháy và gạch ngang, rồi dán lại.");
        return info;
      }

      // 1) Thiếu dấu đóng ngoặc/dấu nháy ở các dòng trước (đoán theo cân bằng ký tự)
      const unclosed = (function(){
        const lines = String(code||"").split(/\n/).slice(0, ln); // tới dòng lỗi (bao gồm)
        const stack = []; // {ch, line}
        const closeMap = {"(" : ")", "[" : "]", "{" : "}"};
        const pairOpen = {")":"(", "]":"[", "}":"{"};
        let inStr = null;      // "'" hoặc '"'
        let inTriple = null;   // "'" hoặc '"'
        let esc = false;
        let strLine = 1;
        for(let li=0; li<lines.length; li++){
          let s = lines[li] || "";
          const lineNo = li+1;
          // bỏ comment khi không ở trong chuỗi
          // (xử lý thô: cắt từ # nếu không nằm trong chuỗi ở đầu dòng)
          // duyệt từng ký tự
          for(let i=0;i<s.length;i++){
            const ch = s[i];
            if(inTriple){
              const q = inTriple;
              if(ch===q && s[i+1]===q && s[i+2]===q){ inTriple=null; i+=2; continue; }
              continue;
            }
            if(inStr){
              if(esc){ esc=false; continue; }
              if(ch==="\\"){ esc=true; continue; }
              if(ch===inStr){ inStr=null; continue; }
              continue;
            }
            if(ch==="#"){ break; } // comment
            if((ch==="'" || ch==='"') && s[i+1]===ch && s[i+2]===ch){
              inTriple = ch; strLine = lineNo; i+=2; continue;
            }
            if(ch==="'" || ch==='"'){
              inStr = ch; strLine = lineNo; continue;
            }
            if(ch==="(" || ch==="[" || ch==="{"){ stack.push({ch, line: lineNo}); continue; }
            if(ch===")" || ch==="]" || ch==="}"){
              const need = pairOpen[ch];
              if(stack.length && stack[stack.length-1].ch===need) stack.pop();
              continue;
            }
          }
        }
        if(inTriple || inStr){
          const q = inTriple || inStr;
          return { kind:"quote", q, openLine: strLine };
        }
        if(stack.length){
          const top = stack[stack.length-1];
          return { kind:"bracket", open: top.ch, close: closeMap[top.ch], openLine: top.line };
        }
        return null;
      })();

      if(unclosed){
        if(unclosed.kind==="quote"){
          info.exact = `Thiếu đóng dấu nháy (mở ở dòng ${unclosed.openLine}).`;
          info.why = "Thiếu dấu nháy đóng làm Python hiểu phần sau vẫn đang là chuỗi → dễ báo 'bad input' ở dòng kế tiếp.";
          addFix(`Kiểm tra dòng ${unclosed.openLine} xem có thiếu dấu nháy đóng (' hoặc ").`);
          addFix("Nếu dùng \"\"\" hoặc ''' thì phải đóng đủ 3 dấu.");
          return info;
        }
        if(unclosed.kind==="bracket"){
          info.exact = `Thiếu ký tự đóng '${unclosed.close}' cho '${unclosed.open}' (mở ở dòng ${unclosed.openLine}).`;
          info.why = "Thiếu đóng ngoặc khiến cú pháp bị vỡ và Skulpt thường báo 'bad input'.";
          addFix(`Thêm '${unclosed.close}' đúng vị trí (thường ở cuối biểu thức mở tại dòng ${unclosed.openLine}).`);
          addFix("Kiểm tra các cặp (), [], {} ở các dòng trước.");
          return info;
        }
      }

      
      // 1b) Thiếu dấu ':' ở dòng trước (Skulpt thường báo lỗi ở dòng kế tiếp)
      try{
        const linesAll = String(code||"").split(/\n/);
        let prevNo = null;
        let prevSig = "";
        for(let k = (parseInt(ln,10)||1) - 2; k >= 0; k--){
          const s = (linesAll[k]||"");
          const tt = s.trim();
          if(!tt) continue;
          if(tt.startsWith("#")) continue;
          prevNo = k+1;
          prevSig = s;
          break;
        }
        if(prevNo){
          const pt = String(prevSig||"").trim();
          if(/^(if|elif|else|for|while|def|class|try|except|finally|with)\b/.test(pt) && !pt.endsWith(":")){
            info.exact = `Thiếu dấu ':' ở cuối dòng ${prevNo}.`;
            info.why = "Trong Python, các câu lệnh khối (if/for/while/def/...) phải kết thúc bằng ':'; nếu thiếu, dòng sau thường bị báo 'bad input'.";
            addFix(`Thêm ':' ở cuối dòng ${prevNo} (ví dụ: if ...:).`);
            addFix("Dòng bên dưới phải thụt lề 4 dấu cách.");
            return info;
          }
          // 1c) Dòng hiện tại là else/elif/except/finally nhưng không đứng sau một dòng kết thúc bằng ':'
          const ct = String(curLine||"").trim();
          if(/^(else|elif|except|finally)\b/.test(ct) && !pt.endsWith(":")){
            info.exact = "Từ khoá else/elif/except/finally đặt sai vị trí (không nối đúng với khối trước).";
            info.why = "Các từ khoá này phải đi ngay sau một khối if/try/except và thường đứng sau dòng kết thúc bằng ':'.";
            addFix("Kiểm tra lại khối if/elif/else hoặc try/except và đảm bảo các dòng kết thúc bằng ':'.");
            addFix("Đảm bảo thụt lề đúng cấp (else/elif cùng mức với if).");
            return info;
          }
          // 1d) Dòng sau dấu ':' nhưng không thụt lề
          if(pt.endsWith(":") && ct && !/^\s+/.test(curLine)){
            info.exact = `Dòng ${ln} chưa thụt lề sau dấu ':' ở dòng ${prevNo}.`;
            info.why = "Sau if/for/while/def/...: dòng kế tiếp bắt buộc phải thụt lề để tạo khối lệnh.";
            addFix(`Thụt lề dòng ${ln} vào 4 dấu cách (hoặc cùng mức thụt lề của khối).`);
            return info;
          }
        }
      }catch(e){}

      // 2) Không nhận diện được nguyên nhân cụ thể → vẫn đưa gợi ý sát thực tế
      info.exact = "Python báo 'bad input' (cú pháp không hợp lệ) tại dòng này.";
      info.why = "Thường do: thiếu ':' ở cuối if/for/while/def; thiếu dấu đóng ngoặc/dấu nháy ở dòng trước; hoặc có ký tự lạ khi copy.";
      addFix("Kiểm tra cuối dòng có thiếu ':' không.");
      addFix("Kiểm tra có thiếu ')', ']', '}', hoặc dấu nháy ở các dòng trước.");
      addFix("Nếu copy từ Word/PDF, hãy gõ lại dòng bị lỗi.");
      // không return: để các rule bên dưới bắt lỗi cụ thể hơn nếu khớp
    }
    // 1) Thiếu dấu ":" sau các câu lệnh khối
    if(/^\s*(if|elif|else|for|while|def|class|try|except|finally|with)\b/.test(trimmed) && !trimmed.endsWith(":")){
      info.exact = "Thiếu dấu ':' ở cuối câu lệnh khối.";
      info.why = "Trong Python, các khối lệnh (if/for/while/def/...) phải kết thúc bằng dấu ':' để bắt đầu một khối thụt lề.";
      addFix("Thêm dấu ':' ở cuối dòng (ví dụ: if ...:)");
      addFix("Dòng bên dưới phải thụt lề (4 dấu cách).");
      return info;
    }
    // 2) Tên biến có dấu cách trước dấu "=" (ví dụ: 'diem trung binh = ...')
    //    Chỉ kiểm tra khi có dấu '=' và không phải '==', '>=', '<=', '!='
    const eq = line.indexOf("=");
    if(eq > -1){
      const prev = line[eq-1] || "";
      const next = line[eq+1] || "";
      const isCompare = (prev === "=" || next === "=" || prev === "!" || prev === ">" || prev === "<");
      if(!isCompare){
        const lhs = line.slice(0, eq).trim();
        // loại trừ tuple assignment có dấu ','
        if(lhs && !lhs.includes(",") && /\s/.test(lhs)){
          info.exact = "Tên biến/biểu thức gán ở vế trái có dấu cách (Python không cho phép tên biến có khoảng trắng).";
          info.why = "Tên biến phải là một định danh liền mạch (ví dụ: diem_trung_binh), không được có khoảng trắng.";
          addFix("Đổi tên biến thành dạng có gạch dưới: diem_trung_binh = ...");
          addFix("Tránh đặt tên biến có khoảng trắng.");
          return info;
        }
      }
    }
    // 3) Thiếu/dư dấu nháy chuỗi
    const dq = (line.match(/(?<!\\)\"/g) || []).length;
    const sq = (line.match(/(?<!\\)\'/g) || []).length;
    if((dq % 2) === 1 || (sq % 2) === 1){
      info.exact = "Chuỗi (string) bị thiếu/dư dấu nháy.";
      info.why = "Khi mở chuỗi bằng ' hoặc \", bạn phải đóng lại đúng dấu nháy tương ứng.";
      addFix("Kiểm tra dấu nháy ở dòng báo lỗi, đảm bảo mở/đóng đủ cặp.");
      addFix("Nếu trong chuỗi có dấu nháy, dùng \\\" hoặc \\' hoặc đổi loại nháy.");
      return info;
    }
    // 4) Python 3: print cần ngoặc (nếu HS viết print "abc")
    if(/^\s*print\s+[^(\s]/.test(trimmed)){
      info.exact = "Bạn đang dùng cú pháp print kiểu Python 2 (thiếu ngoặc).";
      info.why = "Trong Python 3, print là một hàm nên phải viết print(...).";
      addFix("Đổi thành: print(\"...\")");
      return info;
    }

    // 5) Mismatch ngoặc toàn bài (gợi ý nhanh)
    const all = String(code||"");
    const openP = (all.match(/\(/g)||[]).length, closeP = (all.match(/\)/g)||[]).length;
    const openB = (all.match(/\[/g)||[]).length, closeB = (all.match(/\]/g)||[]).length;
    const openC = (all.match(/\{/g)||[]).length, closeC = (all.match(/\}/g)||[]).length;
    if(openP !== closeP || openB !== closeB || openC !== closeC){
      info.exact = "Có thể bạn đang thiếu/dư ngoặc (), [] hoặc {}.";
      info.why = "Ngoặc phải đi theo cặp. Thiếu/dư ngoặc rất hay gây SyntaxError.";
      addFix("Đếm lại số ngoặc mở/đóng và đặt đúng vị trí.");
      addFix("Tập trung quanh dòng báo lỗi và dòng ngay trước đó.");
      return info;
    }

    // fallback
    info.exact = msg ? `Cú pháp không hợp lệ: ${msg}` : "Cú pháp không hợp lệ (SyntaxError).";
    info.why = "Python báo SyntaxError khi câu lệnh sai cấu trúc. Thường gặp: thiếu ':', sai ngoặc/nháy, sai vị trí từ khoá.";
    addFix("Xem ký tự ngay trước dấu '^' (nếu có) trong lỗi gốc.");
    addFix("Kiểm tra dấu ':', ngoặc, và dấu nháy quanh dòng báo lỗi.");
    return info;
  }

  // ===== IndentationError / TabError =====
  if(t === "indentationerror" || t === "taberror"){
    info.line = line ? `📌 Dòng ${ln}: ${line}` : "";
    info.exact = "Thụt lề không đúng (IndentationError/TabError).";
    info.why = "Các dòng trong cùng khối phải thụt lề đều nhau và không trộn Tab với Space.";
    addFix("Dùng 4 dấu cách cho mỗi mức thụt lề.");
    addFix("Không trộn Tab và Space; có thể bôi đen và nhấn Tab/Shift+Tab để chỉnh lại.");
    return info;
  }

  // ===== NameError =====
  if(t === "nameerror"){
    const m = String(msg||"").match(/name\s+'([^']+)'\s+is\s+not\s+defined/i);
    if(m){
      info.exact = `Bạn đang dùng tên '${m[1]}' nhưng chưa được định nghĩa (NameError).`;
      info.why = "Biến/hàm phải được khai báo (gán giá trị/định nghĩa) trước khi sử dụng.";
      addFix(`Kiểm tra bạn có gõ đúng '${m[1]}' không (phân biệt hoa/thường).`);
      addFix("Đảm bảo biến đã được gán trước khi dùng.");
    }else{
      info.exact = "Dùng biến/hàm chưa được định nghĩa (NameError).";
      info.why = "Thường do gõ sai tên hoặc quên gán giá trị.";
      addFix("Kiểm tra chính tả tên biến/hàm, phân biệt hoa thường.");
    }
    info.line = (ln && line) ? `📌 Dòng ${ln}: ${line}` : "";
    return info;
  }

  // ===== TypeError =====
  if(t === "typeerror"){
    info.exact = "Sai kiểu dữ liệu (TypeError).";
    const m = String(msg||"").match(/unsupported operand type\(s\) for ([+\-*/%])/);
    if(m){
      info.why = `Bạn đang dùng toán tử '${m[1]}' với 2 kiểu dữ liệu không tương thích (ví dụ: số + chuỗi).`;
      addFix("Kiểm tra kiểu dữ liệu bằng type(...).");
      addFix("Ép kiểu phù hợp: int(...), float(...), str(...) trước khi tính.");
    }else{
      info.why = "Bạn thao tác/call hàm với kiểu dữ liệu không phù hợp hoặc sai số tham số.";
      addFix("Đọc kỹ dòng 'Thông điệp' để biết kiểu nào đang bị sai.");
      addFix("Kiểm tra bạn gọi hàm có đúng số tham số không.");
    }
    info.line = (ln && line) ? `📌 Dòng ${ln}: ${line}` : "";
    return info;
  }

  // ===== ValueError =====
  if(t === "valueerror"){
    info.exact = "Giá trị không hợp lệ (ValueError).";
    const m = String(msg||"").match(/invalid literal for int\(\).*?:\s*'([^']+)'/i);
    if(m){
      info.why = `Bạn đang đổi sang int nhưng dữ liệu '${m[1]}' không phải số nguyên.`;
      addFix("Kiểm tra input có đúng định dạng đề bài không.");
      addFix("Nếu input có nhiều số trên 1 dòng: dùng input().split() và map(int, ...).");
    }else{
      info.why = "Thường do ép kiểu/parse input sai định dạng.";
      addFix("Kiểm tra input thực tế và cách bạn split/ép kiểu.");
    }
    info.line = (ln && line) ? `📌 Dòng ${ln}: ${line}` : "";
    return info;
  }

  // ===== EOFError: thiếu dữ liệu input =====
  if(t === "eoferror"){
    const need = _countInputCalls(code);
    const got  = _countStdinLines(stdin);
    info.exact = "Thiếu dữ liệu input (EOFError).";
    info.why = need ? `Code của bạn có khoảng ${need} lần input(), nhưng bạn chỉ nhập ~${got} dòng dữ liệu.` : "Bạn gọi input() nhưng chưa nhập đủ dữ liệu.";
    addFix("Nhập đủ số dòng/số giá trị theo đề bài.");
    addFix("Nếu đề không yêu cầu input, hãy xoá/bỏ input().");
    return info;
  }

  return null;
}

function explainPythonErrorVI(trace, code="", stdin=""){
  const raw = String(trace||"").trim();
  const type = extractErrorType(raw) || "";
  const msg  = extractErrorMessage(raw);
  const ln   = extractErrorLine(raw);
  const t = (type||"").toLowerCase();

  // tên gọi tiếng Việt + cách xử lý ngắn gọn
  let viName = "Lỗi khi chạy";
  let explain = "Chương trình bị dừng do lỗi khi thực thi.";
  let fix = [];

  const push = (s)=>{ if(s) fix.push("- " + s); };

  if(t === "syntaxerror"){
    viName = "Lỗi cú pháp";
    explain = "Bạn viết sai cấu trúc câu lệnh Python (thiếu dấu, sai ngoặc/nháy, sai vị trí từ khoá...).";
    push("Kiểm tra thiếu dấu ':' sau if/elif/else/for/while/def/class.");
    push("Kiểm tra ngoặc (), [], {} có đủ cặp; chuỗi có đủ dấu nháy.");
    push("Nếu báo gần dấu '^', xem ký tự ngay trước đó.");
  } else if(t === "indentationerror" || t === "taberror"){
    viName = "Lỗi thụt lề";
    explain = "Python rất nhạy với thụt lề. Bạn đang thụt lề không đều hoặc trộn Tab và dấu cách.";
    push("Dùng 4 dấu cách cho mỗi mức thụt lề.");
    push("Không trộn Tab và Space; nên bật hiển thị whitespace nếu có.");
    push("Các dòng trong cùng khối (sau if/for/while/def) phải thụt lề giống nhau.");
  } else if(t === "nameerror"){
    viName = "Biến/hàm chưa được định nghĩa";
    explain = "Bạn đang dùng một tên (biến/hàm) chưa tồn tại hoặc gõ sai chính tả.";
    push("Kiểm tra chính tả tên biến/hàm (hoa-thường cũng phân biệt)." );
    push("Đảm bảo biến đã được gán giá trị trước khi dùng." );
    push("Nếu là dữ liệu từ input: nhớ gán như a = int(input()) hoặc map/split phù hợp." );
  } else if(t === "typeerror"){
    viName = "Sai kiểu dữ liệu";
    explain = "Bạn đang thao tác với kiểu không phù hợp (ví dụ cộng chuỗi với số, gọi hàm sai số tham số...).";
    push("In/kiểm tra type(...) của biến để xác định kiểu đang nhận." );
    push("Ép kiểu đúng: int(...), float(...), str(...) khi cần." );
    push("Kiểm tra bạn gọi hàm có đúng số tham số không." );
  } else if(t === "valueerror"){
    viName = "Giá trị không hợp lệ";
    explain = "Bạn ép kiểu/đổi dạng dữ liệu không đúng (ví dụ int('abc'), hoặc tách input sai).";
    push("Kiểm tra input thực tế có đúng định dạng đề bài không." );
    push("Nếu có nhiều số trên 1 dòng: dùng input().split() rồi map(int, ...)." );
    push("Loại bỏ khoảng trắng thừa: .strip() trước khi ép kiểu." );
  } else if(t === "zerodivisionerror"){
    viName = "Chia cho 0";
    explain = "Bạn đang chia hoặc lấy modulo với mẫu số bằng 0.";
    push("Trước khi chia, kiểm tra mẫu số != 0 (dùng if)." );
    push("Xem lại dữ liệu đầu vào có thể cho ra 0 không." );
  } else if(t === "indexerror"){
    viName = "Vượt chỉ số (Index)";
    explain = "Bạn truy cập list/string ở vị trí không tồn tại (i < 0 hoặc i >= len).";
    push("Kiểm tra len(...) trước khi truy cập." );
    push("Xem lại vòng lặp range: range(n) chạy từ 0 đến n-1." );
    push("Nếu split: đảm bảo số phần tử đúng như bạn nghĩ." );
  } else if(t === "keyerror"){
    viName = "Thiếu khoá (Key) trong dict";
    explain = "Bạn truy cập dict[key] với key không tồn tại.";
    push("Dùng dict.get(key, default) hoặc kiểm tra if key in dict." );
    push("In dict.keys() để xem các khoá hiện có." );
  } else if(t === "attributeerror"){
    viName = "Đối tượng không có thuộc tính";
    explain = "Bạn gọi .thuoc_tinh hoặc .ham trên kiểu dữ liệu không hỗ trợ.";
    push("Kiểm tra biến đang là kiểu gì bằng type(...)." );
    push("Đảm bảo bạn dùng đúng hàm/method cho kiểu đó (vd: split cho str, append cho list)." );
  } else if(t === "modulenotfounderror" || t === "importerror"){
    viName = "Không import được thư viện";
    explain = "Môi trường chạy trên web có thể không hỗ trợ một số thư viện.";
    push("Tránh import thư viện ngoài; ưu tiên giải bằng Python cơ bản." );
    push("Nếu cần math: thường dùng được; còn thư viện lạ thì bỏ." );
  } else if(t === "eoferror"){
    viName = "Thiếu dữ liệu input";
    explain = "Chương trình gọi input() nhưng bạn chưa nhập đủ dữ liệu.";
    push("Nhập đúng số dòng/số giá trị theo đề." );
    push("Nếu đề không có input: bỏ input() hoặc kiểm tra phần đọc dữ liệu." );
  } else if(t === "recursionerror"){
    viName = "Đệ quy quá sâu";
    explain = "Hàm đệ quy gọi quá nhiều lần (thiếu điều kiện dừng hoặc n quá lớn).";
    push("Thêm/kiểm tra điều kiện dừng (base case)." );
    push("Cân nhắc đổi sang vòng lặp nếu phù hợp." );
  }

  // fallback nhẹ nếu không nhận ra type
  if(!type){
    push("Đọc dòng cuối của lỗi để biết tên lỗi (ví dụ: SyntaxError, NameError...).");
    push("Nếu chưa rõ, thử chạy với input mẫu và in biến trung gian để debug.");
  }

  // AI phân tích lỗi cụ thể (dựa trên dòng lỗi + thông điệp)
  let specific = null;
  try{ specific = _analyzePythonErrorSpecific(raw, type, msg, ln, code, stdin); }catch(e){ specific = null; }

  const head = `❌ ${viName}${type ? ` (${type})` : ""}`;
  const where = ln ? `📌 Vị trí: khoảng dòng ${ln}` : "";
  const msgLine = msg ? `🔎 Thông điệp: ${msg}` : "";

  // Luôn hiển thị đoạn code quanh dòng lỗi để bám sát thực tế
  let ctxBlock = "";
  try{
    if(ln && code){
      const _ls = String(code||"").split(/\n/);
      const s = Math.max(1, ln - 2);
      const e = Math.min(_ls.length, ln + 1);
      const out = [];
      for(let k=s;k<=e;k++){
        const prefix = (k===ln) ? "👉" : "  ";
        out.push(`${prefix} ${k}| ${_ls[k-1]}`);
      }
      if(out.length) ctxBlock = "📌 Code quanh dòng lỗi:\n" + out.join("\n");
    }
  }catch(e){}

  let aiBlock = "";
  if(specific && (specific.exact || specific.why)){
    const exact = specific.exact ? `🎯 Lỗi chính xác: ${specific.exact}` : "";
    const why  = specific.why ? `🧠 Vì sao: ${specific.why}` : "";
    const lineText = specific.line || "";
    const fixes = (specific.fixes && specific.fixes.length) ? (`✅ Gợi ý sửa nhanh:\n${specific.fixes.join("\n")}`) : "";
    aiBlock = [exact, lineText, why, fixes].filter(Boolean).join("\n");
  }

  // Gắn code quanh dòng lỗi nếu phần phân tích chưa có
  if(ctxBlock && (!aiBlock || (aiBlock.indexOf("📌 Vùng lỗi:")===-1 && aiBlock.indexOf("📌 Code quanh dòng lỗi:")===-1))){
    aiBlock = [ctxBlock, aiBlock].filter(Boolean).join("\n");
  }

  const fixText = fix.length ? (`✅ Cách xử lý gợi ý:\n${fix.join("\n")}`) : "";
  const rawText = raw ? (`\n\n---\nLỗi gốc (Python):\n${raw}`) : "";
  return [head, where, msgLine, aiBlock, `🧠 Diễn giải: ${explain}`, fixText].filter(Boolean).join("\n") + rawText + "\n";
}
function highlightErrorLine(lineNumber1Based){
  clearErrorHighlight();
  const ln = lineNumber1Based - 1;
  if(ln >= 0 && ln < editor.lineCount()){ 
    errorLineHandle = ln;
    editor.addLineClass(ln, "background", "cm-errorline");
    editor.setCursor({line: ln, ch: 0});
    editor.focus();
  }
}

function _nonCommentLineCount(code){
  return String(code||"").split(/\n/).map(s=>s.trim()).filter(s=>s && !s.startsWith("#")).length;
}
function structureOk(code, lesson){
  const c = String(code||"");
  const lc = c.toLowerCase();
  const need = [];

  if(_nonCommentLineCount(c) === 0) need.push("có code (không để trống)");

  const short = String((lesson && lesson.short) || "").toUpperCase().trim();
  const title = String((lesson && lesson.title) || "");
  const text  = String((lesson && lesson.text)  || "");
  const skill = String((lesson && lesson.skill) || "");
  const allTxt = (title + " " + short + " " + skill + " " + text);

  // 1) Input chỉ bắt buộc nếu đề thực sự có input
  const inpSpec = (lesson && lesson.input) ? String(lesson.input) : "";
  const tests = (lesson && Array.isArray(lesson.tests)) ? lesson.tests : [];
  const hasSampleIn = !!String((lesson && lesson.sampleIn) || "").trim();
  const hasTestIn   = tests.some(t => t && typeof t.stdin === "string" && String(t.stdin).trim().length);
  const needInput   = ((inpSpec && inpSpec.trim() && inpSpec.trim() !== "(không có)") || hasSampleIn || hasTestIn);
  const hasInput    = /\binput\s*\(/.test(lc) || /sys\.stdin/.test(lc);
  if(needInput && !hasInput) need.push("đọc input()");

  // 2) Print: bài nào cũng cần in kết quả (PASS theo cấu trúc)
  const hasPrint = /\bprint\s*\(/.test(lc);
  if(!hasPrint) need.push("in kết quả bằng print()");

  // 3) IF: chỉ bắt khi đề thuộc nhóm IF hoặc yêu cầu rẽ nhánh rõ ràng
  const needIf = (short === "IF") || /rẽ\s*nhánh|điều\s*kiện|nếu\s+|so\s*sánh|phân\s*loại/i.test(allTxt);
  if(needIf && !/\bif\b/.test(lc)) need.push("dùng if (điều kiện)");

  // 4) LOOP: chỉ bắt khi đề thuộc nhóm FOR/WHILE hoặc có mô tả vòng lặp
  const explicitWhile = /vòng\s*lặp\s*while|dùng\s*while|sử\s*dụng\s*while/i.test(allTxt);
  const explicitFor   = /vòng\s*lặp\s*for|for\s+range|dùng\s*for|sử\s*dụng\s*for/i.test(allTxt);
  const needLoop = (short === "FOR" || short === "WHILE") || /vòng\s*lặp|lặp\s*lại|từ\s+1\s+đến|cho\s+đến\s+khi|mỗi\s+lần|duyệt/i.test(allTxt);
  if(needLoop){
    if(explicitWhile){
      if(!/\bwhile\b/.test(lc)) need.push("dùng while");
    }else if(explicitFor){
      if(!/\bfor\b/.test(lc)) need.push("dùng for");
    }else{
      if(!(/\bfor\b/.test(lc) || /\bwhile\b/.test(lc))) need.push("dùng vòng lặp (for/while)");
    }
  }

  // 5) LIST: chỉ bắt khi đề thuộc nhóm LIST hoặc nói rõ danh sách
  const needList = (short === "LIST") || /danh\s*sách|list|mảng|array/i.test(allTxt);
  if(needList){
    if(!/\[/.test(c) && !/\blist\s*\(/.test(lc) && !/\.append\s*\(/.test(lc)) need.push("dùng list ([], list(), append)");
  }

  // 6) FUNCTION/DEF: chỉ bắt khi đề thực sự yêu cầu "viết/tạo hàm" (không bắt khi đề nói "không dùng hàm ...")
  const negFuncTopic = /(không\s*dùng\s*hàm|khong\s*dung\s*ham|không\s*sử\s*dụng\s*hàm|khong\s*su\s*dung\s*ham)/i.test(allTxt);
  const funcRequired = /hãy\s*viết\s*hàm|viết\s*hàm|tạo\s*hàm|xây\s*dựng\s*hàm|define\s+a\s+function/i.test(allTxt);
  if(!negFuncTopic && funcRequired){
    if(!/\bdef\s+\w+\s*\(/.test(lc)) need.push("định nghĩa hàm def");
  }

  // 7) Cấm dùng hàm theo đề (vd: "không dùng hàm len")
  try{
    const forb = [];
    const r1 = /không\s*(?:sử\s*dụng|dùng)\s*hàm\s+([a-z_][a-z0-9_]*)/gi;
    const r2 = /khong\s*(?:su\s*dung|dung)\s*ham\s+([a-z_][a-z0-9_]*)/gi;
    let mm;
    while((mm = r1.exec(allTxt)) !== null){ if(mm[1]) forb.push(String(mm[1]).toLowerCase()); }
    while((mm = r2.exec(allTxt)) !== null){ if(mm[1]) forb.push(String(mm[1]).toLowerCase()); }
    const uniq = Array.from(new Set(forb)).filter(Boolean);
    const used = uniq.filter(fn => new RegExp('\\b' + fn + '\\s*\\(', 'i').test(c||''));
    if(used.length) need.push("không dùng hàm bị cấm: " + used.map(x=>x+"()").join(", "));
  }catch(e){}

  // PASS theo cấu trúc cho TẤT CẢ bài: không so khớp output.
  return { ok: need.length === 0, need };
}
try{ window.structureOk = structureOk; }catch(e){}  

async function runTests(){
  const code = editor.getValue();
  let pass = 0;
  let details = [];
  let hadError = false;
  clearErrorHighlight();

  const userStdin = (el("stdin") && el("stdin").value) ? el("stdin").value : "";
  const testsToRun = userStdin.trim() ? [{ stdin: userStdin, expected: "" }] : current.tests;

  
  for(let i=0;i<testsToRun.length;i++){
    const tc = testsToRun[i];
    const r = await runPython(code, tc.stdin);
    const err = (r.error || "");
    if(err.trim()){
      hadError = true;
      let friendly = "";
      try{ friendly = explainPythonErrorVI(err, code, tc.stdin); }catch(e){ friendly = err; }
      details.push(`❌ Test ${i+1}: Lỗi khi chạy\n${friendly}`);
      lastRunError = err;
      const ln = extractErrorLine(err);
      if(ln) highlightErrorLine(ln);
      break;
    }
    pass++;
    details.push(`✅ Test ${i+1}: Chạy không lỗi`);
  }

  // PASS theo cấu trúc cho TẤT CẢ bài: không so khớp output.
  let structurePass = false;
  let st = null;
  try{ st = structureOk(code, current); }catch(e){}
  if(!hadError && st && st.ok){
    if(pass === testsToRun.length){
      structurePass = true;
      details.push(`\n✅ PASS theo cấu trúc (không cần khớp output).`);
    }else{
      details.push(`\n⚠️ Code đúng cấu trúc nhưng chưa chạy hết test — không PASS.`);
    }
  }else if(st && st.need && st.need.length){
    details.push(`\nℹ️ Thiếu cấu trúc để PASS: ${st.need.slice(0,6).join(', ')}`);
  }


  lastRunOrTestTs = Date.now();
  lastTestsResult = `Đạt ${pass}/${testsToRun.length} test`;
  el("console").textContent = details.join("\n") + "\n\n" + lastTestsResult + "\n";
  document.querySelector('.tab[data-tab="tests"]').click();

  logEvent("test", { result: lastTestsResult });
  if(structurePass){
    if(!progress.passed[current.id]){
      markPassed(current.id);
      logEvent("pass", { result: "PASS" });
      toast("🎉 PASS! Đã mở khóa bài tiếp theo.");
      thinkScore += Math.max(3, 10 - acceptStreak * 2);
    } else {
      toast("✅ PASS (đã PASS trước đó)");
      thinkScore += 1;
    }
  } else {
    thinkScore = Math.max(0, thinkScore - 1);
  }
  updateScoreUI();
  updateCoach();
  updateGuard();
  updateInlineGhost(editor);
}
try{ window.runTests = runTests; }catch(e){}

/* =========================================================
   6) COACH + Checklist
   ========================================================= */
function analyzeChecklist(code){
  const c = code || "";
  const needInput = current.input !== "(không có)";
  const needLoop = /vòng lặp|Tổng 1\.\.n|nguyên tố/i.test(current.title + " " + current.text + " " + current.skill);
  const hasInput = /input\s*\(/.test(c);
  const hasParse = /map\(|int\(|float\(|split\(/.test(c);
  const hasIf = /\bif\b/.test(c);
  const hasLoop = /\bfor\b|\bwhile\b/.test(c);
  const hasPrint = /print\s*\(/.test(c);
  return [
    {ok: !needInput || hasInput,  title:"Đọc input", desc: needInput ? "Dùng input()." : "Bài không cần input."},
    {ok: !needInput || hasParse,  title:"Ép kiểu / tách dữ liệu", desc:"int/float + split/map."},
    {ok: !needLoop || (hasLoop || hasIf), title:"Thuật toán", desc:"if/for/while theo đề."},
    {ok: hasPrint, title:"In kết quả", desc:"print(...) đúng định dạng."},
  ];
}
function parseCommonPitfalls(errText){
  const e = (errText || "").toLowerCase();
  const tips = [];
  if(!e.trim()){ 
    tips.push("Nếu sai test: kiểm tra xuống dòng, khoảng trắng, format output.");
    tips.push("In tạm biến trung gian để debug.");
    return tips;
  }
  if(e.includes("syntaxerror")) tips.push("SyntaxError: thiếu ':' hoặc sai ngoặc/nháy.");
  if(e.includes("indentationerror")) tips.push("IndentationError: thụt lề 4 dấu cách.");
  if(e.includes("nameerror")) tips.push("NameError: biến chưa khai báo hoặc gõ sai.");
  if(e.includes("valueerror")) tips.push("ValueError: ép kiểu sai, kiểm tra input.split().");
  tips.push("Mẹo: chạy với input mẫu rồi test lại.");
  return tips;
}
function generateCoach(code, errText, testsText, level){
  const checklist = analyzeChecklist(code);
  const missing = checklist.filter(x=>!x.ok);

  let hint = "";
  const steps = [];

  if(errText && errText.trim()){ 
    const ln = extractErrorLine(errText);
    hint = ln ? `Có lỗi ở khoảng dòng ${ln}. Sửa lỗi trước rồi Run/Test lại.` : "Ưu tiên sửa lỗi trước → Run/Test lại.";
    steps.push("Đọc traceback: tên lỗi + dòng lỗi.");
    steps.push("Sửa cú pháp/indent/biến → chạy lại.");
  } else if(testsText && /đạt 0\//i.test(testsText)) {
    hint = "Chạy được nhưng output chưa khớp test → kiểm tra format in.";
    steps.push("So sánh output với expected (xuống dòng/space).");
  } else if(missing.length) {
    hint = "Hoàn thiện theo checklist (từng bước nhỏ).";
    missing.slice(0,3).forEach(m=> steps.push(m.title + " → " + m.desc));
  } else {
    hint = "Bạn đã đủ bước cơ bản. Hãy bấm Test để chắc chắn PASS.";
    steps.push("Nếu FAIL: xem lại đề và xử lý trường hợp đặc biệt.");
  }

  if(level === 1) return {hint, steps: steps.slice(0,2), checklist, pitfalls: parseCommonPitfalls(errText)};
  if(level === 3) steps.push("Bạn có thể bấm 'Nạp khung' để xem cấu trúc mẫu.");
  return {hint, steps, checklist, pitfalls: parseCommonPitfalls(errText)};
}
function renderCoachUI(coach){
  el("coachHint").textContent = coach.hint;
  const ul = el("coachSteps"); ul.innerHTML = "";
  coach.steps.forEach(s=>{ const li = document.createElement("li"); li.textContent = s; ul.appendChild(li); });
  const cl = el("checklist"); cl.innerHTML = "";
  coach.checklist.forEach(it=>{
    const row = document.createElement("div"); row.className = "c";
    const tick = document.createElement("div"); tick.className = "tick" + (it.ok ? " ok" : ""); tick.textContent = it.ok ? "✓" : "•";
    const ct = document.createElement("div"); ct.className = "ct"; ct.innerHTML = `<b>${escapeHtml(it.title)}</b><br>${escapeHtml(it.desc)}`;
    row.appendChild(tick); row.appendChild(ct); cl.appendChild(row);
  });
  const pf = el("pitfalls"); pf.innerHTML = "";
  coach.pitfalls.slice(0,5).forEach(p=>{ const li=document.createElement("li"); li.textContent=p; pf.appendChild(li); });
}
function updateCoach(){
  const code = editor ? editor.getValue() : "";
  const level = parseInt(el("levelSel").value, 10);
  const coach = generateCoach(code, lastRunError, lastTestsResult, level);
  renderCoachUI(coach);
}

/* =========================================================
   7) AUTOCOMPLETE + INLINE GHOST + Think-Guard
   ========================================================= */
const PY_KEYWORDS = ["print","input","range","len","int","float","str","list","dict","set","tuple","map","sum","min","max","abs","round","sorted","for","while","if","elif","else","break","continue","pass","return","True","False","None"];

const HINT_EXTRA_KEYS = {
  // Chống phụ thuộc: Enter KHÔNG chèn gợi ý. Enter = xuống dòng bình thường.
  "Enter": function(cm, handle){
    try{ handle && handle.close && handle.close(); }catch(e){}
    cm.execCommand("newlineAndIndent");
  },
  // Chỉ cho chèn bằng Tab hoặc click.
  "Tab": function(cm, handle){
    if(typeof canAcceptSuggestion === "function" && !canAcceptSuggestion(cm)){
      try{ window.toast && toast("🧠 Hãy tự gõ thêm (≥ 6 ký tự/dòng) hoặc Run/Test rồi mới dùng gợi ý."); }catch(e){}
      try{ handle && handle.close && handle.close(); }catch(e){}
      return;
    }
    try{ handle && handle.pick && handle.pick(); }catch(e){}
  },
  "Esc": function(cm, handle){ try{ handle && handle.close && handle.close(); }catch(e){} }
};
try{ window.HINT_EXTRA_KEYS = HINT_EXTRA_KEYS; }catch(e){}
function customPythonHint(cm){
  const cur = cm.getCursor();
  const line = cm.getLine(cur.line);
  let from = cur.ch;
  while (from && /[A-Za-z0-9_\.]/.test(line.charAt(from-1))) from--;
  const prefix = line.slice(from, cur.ch);

  const fromPos = CodeMirror.Pos(cur.line, from);
  const toPos   = CodeMirror.Pos(cur.line, cur.ch);

  const wrap = (item)=>({
    ...item,
    hint: function(cm2, data, completion){
      // Chống phụ thuộc: chặn chèn khi Think-Guard chưa cho phép
      if(typeof canAcceptSuggestion === "function" && !canAcceptSuggestion(cm2)){
        try{ window.toast && toast("🧠 Hãy tự gõ thêm (≥ 6 ký tự/dòng) hoặc Run/Test rồi mới dùng gợi ý."); }catch(e){}
        return;
      }
      cm2.replaceRange(completion.text, data.from, data.to, "complete");
      }
  });

  const base = PY_KEYWORDS
    .filter(k => k.toLowerCase().startsWith(prefix.toLowerCase()))
    .map(k => wrap({text: k, displayText: k}));

  const extra = [];
  if(prefix === ""){
    extra.push(wrap({text:"print()", displayText:"print()"}));
    extra.push(wrap({text:"input()", displayText:"input()"}));
  }

  return { list: [...extra, ...base].slice(0,18), from: fromPos, to: toPos };
}
function maybeAutoComplete(cm, changeObj){
  const txt = changeObj.text && changeObj.text[0] ? changeObj.text[0] : "";
  if(!txt) return;
  // Chỉ gợi ý khi gõ chữ/số/dấu _ hoặc .
  if (!/^[A-Za-z0-9_\.]$/.test(txt)) return;
  // Nếu hint đang mở thì không mở lại (tránh giật/lag)
  if(cm && cm.state && cm.state.completionActive) return;

  // Debounce để mượt hơn
  if(acTimer) clearTimeout(acTimer);
  acTimer = setTimeout(()=>{
    try{
      const cur = cm.getCursor();
      const line = cm.getLine(cur.line);
      let from = cur.ch;
      while (from && /[A-Za-z0-9_\.]/.test(line.charAt(from-1))) from--;
      const prefix = line.slice(from, cur.ch);
      if(prefix.length >= 1){
        CodeMirror.showHint(cm, customPythonHint, {completeSingle:false, extraKeys: HINT_EXTRA_KEYS});
      }
    }catch(e){}
  }, 120);
}
function noteAccept(){
  acceptStreak++;
  setTimeout(()=>{ acceptStreak = Math.max(0, acceptStreak - 1); }, 45000);
  thinkScore = Math.max(0, thinkScore - 0.5);
  updateScoreUI();
}
function noteManualTyping(){
  lastManualTypeTs = Date.now();
  thinkScore += 0.08;
  updateScoreUI();
}
function canAcceptSuggestion(cm){
  if(!thinkMode) return true;
  const cur = cm.getCursor();
  const line = cm.getLine(cur.line) || "";
  const typed = line.slice(0, cur.ch).replace(/\s+/g,"");
  const now = Date.now();
  if(now - lastRunOrTestTs < 25000) return true;
  if(typed.length >= 6) return true;
  if(acceptStreak >= 3) return false;
  return false;
}
function ensureGhostEl(){
  if(ghost.el) return;
  const div = document.createElement("div");
  div.className = "ghost-inline";
  div.style.display = "none";
  div.innerHTML = `<span class="hint" id="ghostText"></span>`;
  document.body.appendChild(div);
  ghost.el = div;
}
function hideGhost(){ if(!ghost.el) return; ghost.active=false; ghost.el.style.display="none"; }
function showGhostAt(cm, remainderText){
  ensureGhostEl();
  const cur = cm.getCursor();
  const coords = cm.cursorCoords(cur, "page");
  const box = ghost.el;
  const textEl = box.querySelector("#ghostText");
  ghost.active = true;
  ghost.text = remainderText;
  textEl.textContent = "Tab: " + remainderText;
  box.style.left = (coords.left + 6) + "px";
  box.style.top  = (coords.top  - 2) + "px";
  box.style.display = "block";
}
function getLineIndent(line){ const m = line.match(/^\s*/); return m ? m[0] : ""; }
function proposeNext(cm){
  const code = cm.getValue();
  const cur = cm.getCursor();
  const line = cm.getLine(cur.line) || "";
  const before = line.slice(0, cur.ch);
  const after  = line.slice(cur.ch);
  if(after.trim().length) return "";
  if(before.trim().startsWith("#")) return "";
  const indent = getLineIndent(line);

  if (/^\s*(if|elif|for|while)\b/.test(before) && !before.trimEnd().endsWith(":")) {
    if(before.trim().length >= 2) return ":\n" + indent + "    ";
  }
  if(before.trim() === "") {
    const snips = current.snips || [];
    for(const s of snips){
      const needle = s.d.replace(/\s+/g," ").trim();
      if(needle && !code.replace(/\s+/g," ").includes(needle)) return s.t;
    }
    if(current.input !== "(không có)" && !/input\s*\(/.test(code)) return "n = int(input().strip())\n";
    if(!/print\s*\(/.test(code)) return "print()\n";
  }
  const m = before.match(/[A-Za-z_][A-Za-z0-9_]*$/);
  const word = m ? m[0] : "";
  const templ = {
    "pri":"print()","print":"print()","inp":"input()","input":"input()",
    "for":"for i in range(1, n + 1):\n" + indent + "    ",
    "while":"while condition:\n" + indent + "    ",
    "if":"if condition:\n" + indent + "    ",
    "elif":"elif condition:\n" + indent + "    "
  };
  for(const k of Object.keys(templ)) {
    if(word && k.startsWith(word)) {
      const full = templ[k];
      return full.startsWith(word) ? full.slice(word.length) : full;
    }
  }
  return "";
}
function computeRemainder(cm){
  const cur = cm.getCursor();
  const line = cm.getLine(cur.line) || "";
  const before = line.slice(0, cur.ch);
  const sug = proposeNext(cm);
  if(!sug) return "";
  if(sug.startsWith(before)) return sug.slice(before.length);
  return sug;
}
function updateInlineGhost(cm){
  const now = Date.now();
  if(now - ghost.lastShown < 140) return;
  ghost.lastShown = now;
  if(thinkMode && guardStage !== 4) { hideGhost(); return; }
  const rem = computeRemainder(cm);
  if(!rem) { hideGhost(); return; }
  showGhostAt(cm, rem.replace(/\n/g,"↵ "));
}

/* ---- Guard chips ---- */

function _scanSignals(code){
  const c = String(code||"");
  const lc = c.toLowerCase();
  return {
    hasInput: /\binput\s*\(/.test(lc),
    hasParse: /\bmap\s*\(|\bint\s*\(|\bfloat\s*\(|\.split\s*\(/.test(lc),
    hasPrint: /\bprint\s*\(/.test(lc),
    hasIf: /\bif\b/.test(lc),
    hasLoop: /\bfor\b|\bwhile\b/.test(lc),
    hasMod: /%/.test(c),
    hasDef: /\bdef\b/.test(lc)
  };
}
function _algoKey(lesson){
  const hay = ((lesson?.id||"") + " " + (lesson?.title||"") + " " + (lesson?.text||"") + " " + (lesson?.skill||"")).toLowerCase();
  if(hay.includes("nguyên tố") || hay.includes("prime")) return "prime";
  if(hay.includes("ucln") || hay.includes("bcnn") || hay.includes("gcd") || hay.includes("lcm") || hay.includes("euclid")) return "gcdlcm";
  if(hay.includes("tổng chữ số")) return "sumdigits";
  if(hay.includes("năm nhuận")) return "leapyear";
  if(hay.includes("giai thừa")) return "factorial";
  if(/tổng\s*1\.\.n|từ\s*1\s*đến\s*n/.test(hay)) return "sum1n";
  return "";
}
function _algoTier1(key){
  if(key==="prime"){
    return [
      "Đầu vào: đọc n (số nguyên).",
      "Nếu n < 2 → kết luận NO (không phải số nguyên tố).",
      "Duyệt i từ 2 đến √n: nếu n % i == 0 → NO (có ước).",
      "Nếu không tìm thấy ước nào → YES."
    ];
  }
  if(key==="gcdlcm"){
    return [
      "Đầu vào: đọc a, b. Lưu a0=a, b0=b để tính BCNN.",
      "UCLN (Euclid): while b != 0: a, b = b, a % b.",
      "Sau vòng lặp: UCLN = a.",
      "BCNN = a0*b0//UCLN (cẩn thận dùng trị tuyệt đối nếu cần)."
    ];
  }
  if(key==="sumdigits"){
    return [
      "Đầu vào: đọc n.",
      "Xử lý: lặp while n>0: lấy digit = n%10, cộng vào tổng, rồi n//=10.",
      "Trường hợp n=0 → tổng = 0.",
      "Đầu ra: print(tổng)."
    ];
  }
  if(key==="leapyear"){
    return [
      "Đọc y.",
      "Nếu y%400==0 → YES.",
      "Ngược lại nếu y%4==0 và y%100!=0 → YES.",
      "Còn lại → NO."
    ];
  }
  return [];
}
function _algoFrames(key){
  if(key==="prime"){
    return [
      {d:"Khung thuật toán nguyên tố", t:
`# B1) n < 2 -> NO
# B2) thử i=2..isqrt(n)
import math
n = int(input())
if n < 2:
    print("NO")
else:
    r = int(math.isqrt(n))
    # TODO: giả sử là nguyên tố
    for i in range(2, r+1):
        if n % i == 0:
            # TODO: kết luận NO và dừng
            ...
    # TODO: nếu không rơi vào trường hợp chia hết -> YES
` }
    ];
  }
  if(key==="gcdlcm"){
    return [
      {d:"Khung Euclid (UCLN/BCNN)", t:
`a, b = map(int, input().split())
a0, b0 = a, b
# UCLN bằng Euclid
while b != 0:
    a, b = b, a % b
g = a
# TODO: in UCLN và BCNN
# l = a0*b0//g
` }
    ];
  }
  return [];
}
function _algoCloze(key){
  if(key==="prime"){
    return [
      {d:"Nguyên tố (điền khuyết)", t:
`n = int(input())
if n < ____:
    print("NO")
else:
    import math
    r = int(math.isqrt(n))
    ok = True
    for i in range(2, r+1):
        if n % i == ____:
            ok = False
            break
    print("YES" if ok else "NO")
` }
    ];
  }
  if(key==="gcdlcm"){
    return [
      {d:"UCLN/BCNN (điền khuyết)", t:
`a, b = map(int, input().split())
a0, b0 = a, b
while b != ____:
    a, b = b, a % b
g = a
print(g)
print(a0*b0 // ____)
` }
    ];
  }
  return [];
}

function stageIdea(){
  // 1) Nếu bài có phân tích AI (bài tự tạo): ưu tiên tầng 1 từ phân tích
  if(current && current.analysis && Array.isArray(current.analysis.tier1) && current.analysis.tier1.length){
    const out = [];
    if(lastRunError && lastRunError.trim()){
      out.push("Ưu tiên 1: đọc lỗi và sửa đúng dòng bị báo lỗi trước (tránh viết tiếp khi chương trình chưa chạy).");
    }
    current.analysis.tier1.slice(0,3).forEach(x=>out.push(x));
    return out;
  }

  const key = _algoKey(current);
  const code = editor.getValue();
  const sig = _scanSignals(code);

  // 2) Nếu là bài có thuật toán đặc thù (nguyên tố/UCLN...): gợi ý theo đúng thuật toán nhưng theo dạng bước (không đưa full code)
  const algo = _algoTier1(key);
  if(algo && algo.length){
    // Nếu chưa viết gì thì đưa 3-4 bước chuẩn
    if(_nonCommentLineCount(code) === 0) return algo;
    // Nếu đã viết nhưng thiếu phần trọng yếu thì ưu tiên nhắc phần thiếu
    if(key==="prime" && !sig.hasMod) return ["Thiếu phép % để kiểm tra chia hết (n % i).", ...algo.slice(1,4)];
    if(key==="gcdlcm" && !sig.hasLoop) return ["Thiếu vòng lặp while cho Euclid (while b != 0).", ...algo.slice(1,4)];
    return algo.slice(0,3);
  }

  // 3) Mặc định: dựa theo trạng thái code
  if(!sig.hasInput && !sig.hasPrint) return ["Bắt đầu bằng cách viết lại yêu cầu đề bằng 1 câu ngắn.", "Xác định rõ Input/Output rồi mới code."];
  if(current.input !== "(không có)" && !sig.hasInput) return ["Thiếu phần đọc dữ liệu vào. Em cần input() / split() / int(...) đúng định dạng đề."];
  if(!sig.hasPrint) return ["Thiếu phần in kết quả. Em cần print(...) đúng theo Output của đề."];
  if(lastRunError && lastRunError.trim()) return ["Em đang có lỗi khi chạy. Đọc lỗi, sửa lỗi trước rồi hãy tiếp tục."];
  return ["Viết ý tưởng theo 3 phần: Input → Process → Output.", "Tách bài thành bước nhỏ (1 bước = 1 dòng) rồi mới code."];
}

function stageFrame(){
  const suggestions = [];

  // 1) Bài tự tạo: thêm khung theo phân tích đề (tầng 2)
  if(current && current.analysis && Array.isArray(current.analysis.frames)){
    current.analysis.frames.slice(0,4).forEach(f=>{
      if(f && (f.d||f.t)) suggestions.push({d: f.d || "Khung", t: f.t || ""});
    });
  }

  // 2) Khung "bám sát thuật toán" theo từng bài (nguyên tố/UCLN...)
  const key = _algoKey(current);
  _algoFrames(key).forEach(x=> suggestions.push(x));

  // 3) Khung mặc định theo tình trạng code hiện tại
  const code = editor.getValue();
  const sig = _scanSignals(code);

  if(current.input !== "(không có)" && !sig.hasInput){
    suggestions.push({d:"Khung đọc input", t:`data = input().strip()
# TODO: tách/ép kiểu theo đề
`});
  }
  if(sig.hasInput && !sig.hasParse){
    suggestions.push({d:"Nhắc ép kiểu", t:`# TODO: nếu đề yêu cầu số, dùng int(...) hoặc float(...)
`});
  }
  if(!sig.hasPrint){
    suggestions.push({d:"Khung in output", t:`# TODO: print(...) đúng định dạng đề
`});
  }

  // chống lạm dụng: không đưa khung quá dài / quá nhiều
  return suggestions.slice(0,6);
}

function stageCloze(){
  const out = [];

  // Bài tự tạo: dùng mẫu điền khuyết theo phân tích (tầng 3)
  if(current && current.analysis && Array.isArray(current.analysis.cloze) && current.analysis.cloze.length){
    current.analysis.cloze.slice(0,4).forEach(x=>{
      out.push({d: x.d || "Điền khuyết", t: x.t || ""});
    });
    return out;
  }

  // 2) Cloze bám sát thuật toán theo từng bài
  const key = _algoKey(current);
  const algoC = _algoCloze(key);
  if(algoC && algoC.length){
    algoC.slice(0,4).forEach(x=> out.push({d: x.d, t: x.t}));
    return out;
  }

  // 3) Mặc định theo bài có sẵn
  if(current.id==="A1") out.push({d:"Hello", t:"print(____)\n"});
  if(current.id==="A2") out.push({d:"Tổng 2 số", t:"a, b = map(int, input().split())\nprint(a ____ b)\n"});
  if(current.id==="A3") out.push({d:"Diện tích", t:"r = float(input())\nprint(____ * r * r)\n"});
  if(current.id==="B1") out.push({d:"Nếu… thì…", t:"x = int(input())\nif x ____ 0:\n    print('...')\nelse:\n    print('...')\n"});
  if(current.id==="B2") out.push({d:"Vòng lặp", t:"n = int(input())\ns = 0\nfor i in range(____):\n    s += ____\nprint(s)\n"});
  if(current.id==="C1") out.push({d:"List", t:"arr = list(map(int, input().split()))\nprint(max(arr))\n"});
  return out.length? out : [{d:"Khung chung", t:"# TODO: Input → Process → Output\n"}];
}
function stageFullLine(){
  const list = [];
  const rem = computeRemainder(editor);
  if(rem) list.push({label:"Hoàn thiện tại con trỏ (Tab)", text:""});
  (current.snips || []).slice(0,4).forEach(s=> list.push({label:s.d, text:s.t}));
  return list;
}
function insertAtCursor(text){
  const cur = editor.getCursor();
  editor.replaceRange(text, cur);
  editor.focus();
}
function renderGuardChips(){
  const box = el("guardChips");
  box.innerHTML = "";
  let items = [];
  if(guardStage === 1) items = stageIdea().map(x=>({label:x, text:""}));
  else if(guardStage === 2) items = stageFrame();
  else if(guardStage === 3) items = stageCloze();
  else items = stageFullLine();

  items.slice(0,7).forEach(it=>{
    const b = document.createElement("button");
    b.className = "chipBtn";
    b.textContent = it.label;
    b.onclick = ()=>{
      if(guardStage === 1) {
        toast("💡 " + it.label);
        logEvent("hint", { detail: "stage1" });
        thinkScore += 0.2; updateScoreUI();
        return;
      }
      if(guardStage === 4 && thinkMode) {
        if(!canAcceptSuggestion(editor)) {
          toast("🧠 Hãy tự gõ thêm (≥ 6 ký tự/dòng) hoặc Run/Test rồi mới dùng Hoàn thiện dòng.");
          logEvent("hint_blocked", { detail: "stage4_block" });
          thinkScore = Math.max(0, thinkScore - 0.5); updateScoreUI();
          return;
        }
      }
      if(it.text) {
        insertAtCursor(it.text);
        logEvent("hint", { detail: "stage"+guardStage });
        if(guardStage >= 3) noteAccept();
        else thinkScore += 0.2;
        updateScoreUI();
      } else {
        toast("👉 Nhấn Tab để chèn ghost tại con trỏ.");
      }
      updateInlineGhost(editor);
    };
    box.appendChild(b);
  });
}
function updateGuard(){
  const msg = {
    1: "Tầng 1: Chỉ nêu mục tiêu bước tiếp theo (không đưa code).",
    2: "Tầng 2: Đưa khung câu lệnh (bạn tự điền chi tiết).",
    3: "Tầng 3: (Tạm tắt để tránh lạm dụng).",
    4: "Tầng 4: (Tạm tắt để tránh lạm dụng)."
  }[guardStage];
  el("guardText").textContent = msg;
  renderGuardChips();
}

/* =========================================================
   8) EVENTS + INIT EDITOR
   ========================================================= */
function bindEvents(){
  el("lessonHeader").onclick = ()=> toggleLessonDrop();
  document.addEventListener("click", (e)=>{
    const dropOpen = el("lessonDrop").classList.contains("open");
    if(dropOpen && !e.target.closest("#lessonHeader") && !e.target.closest("#lessonDrop")) toggleLessonDrop(false);
  });
  el("lessonSearch").addEventListener("input", renderLessonList);
  const lf = el("levelFilter");
  if(lf) lf.addEventListener("change", renderLessonList);
  el("btnFocus").onclick = toggleFocus;
  el("autoTog").onclick = ()=>{
    autoSuggest = !autoSuggest;
    el("autoTog").classList.toggle("on", autoSuggest);
    el("autoTog").setAttribute("aria-checked", autoSuggest ? "true" : "false");
    toast(autoSuggest ? "🤖 Bật tự gợi ý" : "🧠 Tắt tự gợi ý");
  };
  el("thinkTog").onclick = ()=>{
    thinkMode = !thinkMode;
    el("thinkTog").classList.toggle("on", thinkMode);
    el("thinkTog").setAttribute("aria-checked", thinkMode ? "true" : "false");
    toast(thinkMode ? "🧠 Bật Tư duy" : "⚡ Tắt Tư duy");
    updateGuard();
    updateInlineGhost(editor);
  };
  document.querySelectorAll(".stage").forEach(btn=>{
    try{ if(parseInt(btn.dataset.stage,10) > 2){ btn.style.display = "none"; } }catch(e){}
    btn.onclick = ()=>{
      document.querySelectorAll(".stage").forEach(x=>x.classList.remove("active"));
      btn.classList.add("active");
      guardStage = Math.min(2, parseInt(btn.dataset.stage, 10));
      updateGuard();
      updateInlineGhost(editor);
      logEvent("stage", { detail: "stage="+guardStage });
    };
  });

  el("btnRun").onclick = async ()=>{
    const code = editor.getValue();
    const stdin = el("stdin").value;
    clearErrorHighlight();
    el("console").textContent = "▶ Đang chạy...\n";
    const r = await runPython(code, stdin);
    lastRunOrTestTs = Date.now();
    lastRunError = (r.error || "");
    lastTestsResult = "";

    if(r.error && r.error.trim()) {
      // Hiển thị lỗi kèm diễn giải tiếng Việt + cách xử lý
      try{
        el("console").textContent = explainPythonErrorVI(r.error, code, stdin);
      }catch(e){
        el("console").textContent = "❌ Lỗi:\n" + r.error;
      }
      toast("❌ Có lỗi — xem Output/Lỗi");
      const ln = extractErrorLine(r.error);
      if(ln) highlightErrorLine(ln);
      logEvent("run", { ok:false, errorLine: ln || "", errorType: extractErrorType(r.error), errorMsg: String(r.error||"").slice(-220) });
      thinkScore = Math.max(0, thinkScore - 1);
      updateScoreUI();
      document.querySelector('.tab[data-tab="coach"]').click();
    } else {
      el("console").textContent = r.stdout || "(không có output)\n";
      toast("✅ Run xong");
      logEvent("run", { ok:true });
      thinkScore += 0.4;
      updateScoreUI();
    }
    updateCoach();
    updateGuard();
    updateInlineGhost(editor);
  };

  el("btnTest").onclick = ()=>{ try{ window.runTests && window.runTests(); }catch(e){} };
  el("btnClear").onclick = ()=>{
    el("console").textContent = "";
    lastRunError = "";
    lastTestsResult = "";
    clearErrorHighlight();
    updateCoach(); updateGuard(); updateInlineGhost(editor);
    toast("🧹 Đã xóa output");
    logEvent("clear", {});
  };
  el("btnSample").onclick = ()=>{ el("stdin").value = current.sampleIn || ""; toast("📌 Đã nạp input mẫu"); logEvent("sample", {}); };
  el("btnScaffold").onclick = ()=>{ const cur=editor.getValue().trim(); if(cur){ if(!confirm("Nạp khung sẽ ghi đè phần đang viết. Bạn có chắc?")) return; } editor.setValue(current.scaffold); updateCoach(); updateGuard(); updateInlineGhost(editor); toast("🧩 Đã nạp khung"); logEvent("scaffold", {}); };
  el("btnSave").onclick = saveProgress;
  el("btnExport").onclick = exportCSV;

  // --- Tự ra đề ---
  if(el("btnCpAnalyze")) el("btnCpAnalyze").onclick = doCpAnalyze;
  if(el("btnCpCreate")) el("btnCpCreate").onclick = doCpCreateAndOpen;
  if(el("btnCpClear"))  el("btnCpClear").onclick  = clearCpDraft;

  // Tự lưu nháp khi gõ
  ["cpTitle","cpText","cpInput","cpOutput","cpSampleIn","cpSampleOut","cpLevel"].forEach(id=>{
    const node = el(id);
    if(!node) return;
    node.addEventListener("input", ()=>{ try{ saveCpDraft(); }catch(e){} });
    node.addEventListener("change", ()=>{ try{ saveCpDraft(); }catch(e){} });
  });

  el("levelSel").onchange = ()=> { updateCoach(); updateGuard(); };
  el("btnLogout").onclick = ()=>{
    localStorage.removeItem(SESSION_KEY);
    location.reload();
  };

  window.addEventListener("keydown", (e)=>{
    if((e.ctrlKey || e.metaKey) && e.key === "Enter"){ e.preventDefault(); if(!el("btnRun").disabled) el("btnRun").click(); }
    if((e.ctrlKey || e.metaKey) && e.code === "Space"){ e.preventDefault(); CodeMirror.showHint(editor, customPythonHint, {completeSingle:false, extraKeys: HINT_EXTRA_KEYS}); }
  });
}
function initEditor(){
  // CodeMirror có thể fail (CDN bị chặn, load chậm, cache lỗi...).
  // Nếu fail: rơi về textarea thường để hệ thống vẫn chạy (không treo "Đang tải Python").
  try{
    if(!window.CodeMirror) throw new Error("CodeMirror chưa sẵn sàng");
    editor = CodeMirror.fromTextArea(el("code"), {
      mode: "python",
      lineNumbers: true,
      indentUnit: 4,
      tabSize: 4,
      indentWithTabs: false,
      extraKeys: {
        "Ctrl-Space": function(cm){ CodeMirror.showHint(cm, customPythonHint, {completeSingle:false, extraKeys: HINT_EXTRA_KEYS}); },
        "Tab": function(cm){
          if(ghost.active){
            if(!canAcceptSuggestion(cm)){
              toast("🧠 Hãy tự gõ thêm (≥ 6 ký tự/dòng) hoặc Run/Test rồi mới dùng Hoàn thiện dòng.");
              logEvent("ghost_blocked", { detail: "blocked" });
              thinkScore = Math.max(0, thinkScore - 0.5);
              updateScoreUI();
              return;
            }
            const real = computeRemainder(cm).replace(/↵/g,"\n");
            cm.replaceRange(real, cm.getCursor());
            noteAccept();
            hideGhost();
            logEvent("ghost_accept", { detail: "accept" });
            updateGuard();
            return;
          }
          cm.execCommand("indentMore");
        },
        "Esc": function(cm){ hideGhost(); cm.execCommand("singleSelection"); }
      }
    });

    // expose để các patch UI có thể kích hoạt gợi ý/điều khiển mà không đổi logic
    try{ window.__editor = editor; window.editor = editor; window.__customPythonHint = customPythonHint; }catch(e){}

    editor.on("change", (cm, changeObj)=>{
      localStorage.setItem(`py10:draft:${user.id}:${current.id}`, editor.getValue());
      if(changeObj && changeObj.origin === "+input") noteManualTyping();
      if(!autoSuggest){ updateGuard(); updateInlineGhost(editor); return; }
      clearTimeout(suggestTimer);
      suggestTimer = setTimeout(()=>{ updateCoach(); updateGuard(); updateInlineGhost(editor); }, 1300);
    });

    editor.on("cursorActivity", ()=>{ updateGuard(); updateInlineGhost(editor); });
    editor.on("inputRead", (cm, changeObj)=>{ maybeAutoComplete(cm, changeObj); updateInlineGhost(cm); });
    ensureGhostEl();
  }catch(e){
    console.error("initEditor fallback:", e);
    const ta = el("code");
    // tạo API giả giống CodeMirror tối thiểu
    editor = {
      getValue(){ return ta.value || ""; },
      setValue(v){ ta.value = v ?? ""; },
      focus(){ ta.focus(); },
      on(){ /* no-op */ },
      execCommand(){ /* no-op */ },
      getCursor(){ return {line:0, ch:0}; },
      replaceRange(text){
        const start = ta.selectionStart ?? ta.value.length;
        const end = ta.selectionEnd ?? ta.value.length;
        ta.value = ta.value.slice(0,start) + text + ta.value.slice(end);
        const pos = start + (text?.length||0);
        ta.setSelectionRange(pos,pos);
      }
    };
    ta.addEventListener("input", ()=>{
      localStorage.setItem(`py10:draft:${user.id}:${current.id}`, editor.getValue());
      noteManualTyping();
      if(autoSuggest){
        clearTimeout(suggestTimer);
        suggestTimer = setTimeout(()=>{ updateCoach(); updateGuard(); }, 1300);
      }else{
        updateGuard();
      }
    });
  }
}

/* =========================================================
   10) BOOT
   ========================================================= */

// external helper for Todo button (click "Làm ngay")
window.__openLesson = function(lessonId){
  let l = LESSONS.find(x=>x.id===lessonId);
  let isTeacherCustom = false;
  if(!l){
    const bank = getTeacherBank();
    const found = bank.find(x=>x && x.id===lessonId);
    if(found){
      l = normalizeTeacherLesson(found);
      isTeacherCustom = true;
      // bài GV giao luôn được mở, không phụ thuộc unlock
      try{ progress.unlocked[lessonId] = true; }catch(e){}
    }
  }
  if(!l) return;
  if(!isTeacherCustom && !isUnlocked(l.id)){ toast("🔒 Bài này đang khóa. Hãy PASS bài trước để mở."); return; }
  current = l;
  try{ window.current = current; }catch(e){}
  setPickedLessonUI();
  renderTask();

// (FIX) Khi chuyển bài: phải nạp đúng code + stdin theo bài, tránh giữ lại code bài trước
try{
  if(window.editor){
    const saved = localStorage.getItem(`py10:${user.id}:${current.id}`);
    const draft = localStorage.getItem(`py10:draft:${user.id}:${current.id}`);
    const starter = (saved && saved.trim())
      ? saved
      : ((draft && draft.trim()) ? draft : blankStarter(current));
    editor.setValue(starter);
    if(typeof editor.clearHistory === "function") editor.clearHistory();
  }
  const stdinEl = el("stdin");
  if(stdinEl) stdinEl.value = current.sampleIn || "";
  const cons = el("console");
  if(cons) cons.textContent = "—";
}catch(e){}
  loadProgressFor(l);
  renderLessonList();
  updateCoach();
  updateGuard();
  toggleLessonDrop(false);
  logEvent("assignment_open", { id:l.id });
};

function bootApp(){
  // Không để app chết giữa chừng (sẽ treo "Đang tải Python...").
  try{
    initTabs();

  // Nạp bài tự tạo của học sinh + khôi phục nháp
  loadCustomLessons();
  restoreCpDraft();
  renderMyCustomList();

  // 1) Ưu tiên mở bài đang được giao (nếu có)
  const allAs = getAssignments().filter(a => a && a.active !== false);
  const mineAs = allAs.filter(a => assignmentMatchesStudent(a, user));
  // Ưu tiên mở bài được chọn từ cột "Bài tập về nhà" (chỉ 1 lần) — KHÔNG đụng UI.
  const focusKey = `py10:focusLesson:${user.id}`;
  const focusLessonId = localStorage.getItem(focusKey);
  if(focusLessonId){
    const l = LESSONS.find(x=>x.id===focusLessonId);
    if(l && isUnlocked(l.id)) current = l;
    try{ localStorage.removeItem(focusKey); }catch(e){}
  }
  const pendingAs = mineAs
    .filter(a => !isDoneForAssignment(a))
    .sort((a,b)=> String(a.due||"9999").localeCompare(String(b.due||"9999")))[0] || null;

  // 2) Nếu không có bài giao: mở bài gần nhất học sinh học dở
  const last = localStorage.getItem(`py10:last:${user.id}`);
  const lastLesson = LESSONS.find(x=>x.id===last);

  // 3) Nếu vẫn chưa có: chọn bài chưa PASS đầu tiên trong lộ trình (bài mặc định)
  const defaultLesson = (()=>{
    for(const l of LESSONS){
      if(isUnlocked(l.id) && !progress.passed[l.id]) return l;
    }
    for(const l of LESSONS){
      if(isUnlocked(l.id)) return l;
    }
    return LESSONS[0];
  })();

  if(!focusLessonId && pendingAs){
    const l = LESSONS.find(x=>x.id===pendingAs.lessonId);
    if(l && isUnlocked(l.id)) current = l;
  } else if(lastLesson && isUnlocked(lastLesson.id)){
    current = lastLesson;
  } else if(defaultLesson){
    current = defaultLesson;
  }

  setPickedLessonUI();
  renderLessonList();
  renderTask();
  updateScoreUI();
  updateLogView();

    initEditor();
  bindEvents();

  const saved = localStorage.getItem(`py10:${user.id}:${current.id}`);
  const draft = localStorage.getItem(`py10:draft:${user.id}:${current.id}`);
  editor.setValue((saved && saved.trim()) ? saved : (draft && draft.trim() ? draft : blankStarter(current)));

  el("stdin").value = current.sampleIn || "";
  updateCoach();
  updateGuard();

  // Hiển thị "Bài tập cần làm ngay" ngay khi vào (không cần bấm gì thêm)
  renderStudentTodo();

    // luôn gọi init runtime kể cả khi phía trên có lỗi nhỏ
    initPyodide();

    // Watchdog: nếu sau 4 giây vẫn chưa sẵn sàng -> ép dùng Skulpt và bật nút.
    setTimeout(()=>{
      try{
        if(window.__PY_READY__) return;
        // thử lại Skulpt (đề phòng script load chậm)
        if(window.Sk && typeof window.Sk.configure === "function"){
          // dùng lại logic trong initSkulptRuntime (nhưng không phụ thuộc devHost)
          if(!window.Sk.__configured){
            window.Sk.configure({
              output: (t)=>{},
              read: (x)=>{
                if(window.Sk.builtinFiles && window.Sk.builtinFiles.files[x]) return window.Sk.builtinFiles.files[x];
                throw `File not found: '${x}'`;
              }
            });
            window.Sk.__configured = true;
          }
          pyRuntime = "skulpt";
          el("pyStatus").textContent = "Python sẵn sàng";
          el("btnRun").disabled = false;
          el("btnTest").disabled = false;
          window.__PY_READY__ = true;
        }else{
          // ít nhất bỏ trạng thái treo để người dùng thấy lỗi rõ
          el("pyStatus").textContent = "Python chưa sẵn sàng (kiểm tra tải thư viện)";
        }
      }catch(err){ console.error("watchdog error", err); }
    }, 4000);
  }catch(err){
    console.error("bootApp error:", err);
    try{
      el("pyStatus").textContent = "Lỗi khởi động (mở Console để xem)";
      el("out").textContent = "Lỗi khởi động: " + (err?.message || err);
    }catch(_){ }
    // cố gắng vẫn bật runtime nếu có thể
    try{ initPyodide(); }catch(_){ }
  }
}

bootApp();

} // end logged-in
