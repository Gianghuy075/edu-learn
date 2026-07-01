## Mục tiêu
Xây 2 trang mới dựa trên ảnh mẫu, tiếng Việt 100%, dùng `AppLayout` sidebar navy đã có.

## Trang 1: `/lop-hoc` — Lớp học theo môn
Theo ảnh mẫu #2 (EduHub — Courses by Subject).

- **Hero banner** xanh navy gradient: "Khám phá khóa học theo môn" + mô tả + minh hoạ icon học thuật ở góc phải.
- **Danh mục môn học** — grid 4 cột × 2 hàng (8 môn): Toán học, Vật lý, Hoá học, Ngữ văn, Sinh học, Sử & Địa, Tiếng Anh, Tin học.
  - Mỗi card: ảnh cover, tên môn, "150+ khóa học có sẵn", cụm avatar giáo viên "+N", nút "Xem chi tiết →".
  - Badge "HOT" trên môn nổi bật (Toán học).
- **Khóa học tiêu biểu** — 3 card lớn với thumbnail, chip môn học, tiêu đề, giảng viên + rating.
- Link "Tất cả môn học →" ở header danh mục.

Data mẫu định nghĩa trong `src/lib/subjects.ts` (slug, tên, số khóa, số giảng viên, mô tả, cover, các gói lớp học).

## Trang 2: `/lop-hoc/$slug` — Đăng ký khóa học & Chọn lớp
Theo ảnh mẫu #1 (EduManage — Đăng ký lớp học).

Layout 2 cột: nội dung trái + card sticky phải.

**Cột trái:**
- Breadcrumb: Trang chủ › Lớp học › Đăng ký lớp học
- Tiêu đề "Đăng ký khóa học & Chọn lớp" + phụ đề.
- **Card khóa học**: ảnh bìa với badge chip môn, tên khoá, mô tả, meta (📖 Bài giảng · 👥 Học viên · ⏱ Thời lượng).
- **Giảng viên hướng dẫn** (radio-select, "Bắt buộc"): 2 card giảng viên — avatar, tên, rating, kinh nghiệm; card được chọn có viền primary + chấm chọn.
- **Lịch học dự kiến** (radio-select): 3 ca học — tên ca, khung thứ & giờ, badge "Còn N chỗ".

**Cột phải — sticky "CHI TIẾT ĐĂNG KÝ":**
- Header xanh navy.
- Bảng thông tin: Khóa học, Giảng viên, Lịch học (theo lựa chọn hiện tại).
- Tổng học phí: giá gốc gạch ngang + giá ưu đãi lớn.
- Nút "Xác nhận đăng ký →" (primary, full width).
- Ghi chú điều khoản.
- Card khuyến mãi cam nhạt: "Ưu đãi mùa hè! Nhập mã SUMMER24…".

**Tương tác:** state cục bộ `useState` cho `selectedTeacher` và `selectedSlot`; sidebar cập nhật theo lựa chọn. Click "Xác nhận đăng ký" → `toast` xác nhận (không gọi backend).

## Điều hướng
- Sidebar item "Lớp học" (đã có) trỏ tới `/lop-hoc`.
- Card môn học → `/lop-hoc/$slug` (Link TanStack với `params`).
- Trang chi tiết dùng data từ `subjects.ts` theo slug; nếu không match → `notFoundComponent`.

## Chi tiết kỹ thuật
- File mới: `src/lib/subjects.ts`, `src/routes/lop-hoc.index.tsx`, `src/routes/lop-hoc.$slug.tsx`, và route layout `src/routes/lop-hoc.tsx` trả `<Outlet />`.
- Ảnh mới (imagegen fast): 8 cover môn học + 3 cover khóa tiêu biểu + 2 avatar giảng viên. Ảnh nhỏ dùng chung avatar placeholder từ dicebear (URL) để tiết kiệm.
- Style: token semantic đã định nghĩa trong `styles.css` (navy sidebar, primary blue, gradient). Không hardcode màu.
- `head()` riêng cho từng route với title/description tiếng Việt.
