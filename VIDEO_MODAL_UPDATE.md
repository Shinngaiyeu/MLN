# Cập nhật Trang Bài học - Video Modal

## ✅ Đã hoàn thành:

### 1. **Bỏ các phần không cần thiết:**
- ✅ **Tags (Badges)**: Bỏ category và level tags 
- ✅ **Nội dung mô tả**: Bỏ description dưới video cards
- ✅ **Nút "Xem video"**: Bỏ nút riêng để xem video
- ✅ **Nút "Chi tiết giai đoạn"**: Bỏ nút link đến timeline

### 2. **Tính năng mới - Video Modal:**
- ✅ **Click vào nút Play** → Mở modal với video YouTube embed
- ✅ **Modal responsive** với kích thước tối ưu (max-w-4xl)
- ✅ **YouTube iframe** tự động phát video
- ✅ **Tiêu đề và mô tả** hiển thị trong modal
- ✅ **Đóng modal** bằng nút X hoặc click outside

### 3. **Design đã đơn giản hóa:**
- Card chỉ hiển thị: **Thumbnail + Play button + Tiêu đề**
- Hover effects vẫn giữ nguyên
- Layout 3 cột trên desktop, responsive trên mobile

## 🔧 Cách sử dụng:

### **Thay đổi link YouTube:**
Trong file `/app/bai-hoc/page.tsx`, tìm mảng `videoLessons`:

```tsx
const videoLessons = [
  {
    id: 1,
    title: "Xã hội nguyên thủy - Công cụ đá và nghề săn bắt",
    description: "Mô tả video...",
    duration: "15:30",
    thumbnail: "/primitive-society-stone-tools.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_1", // ← Thay đổi đây
  },
  // ... các video khác
]
```

### **Các format URL YouTube được hỗ trợ:**
- `https://www.youtube.com/watch?v=VIDEO_ID`
- `https://youtu.be/VIDEO_ID`
- `https://www.youtube.com/embed/VIDEO_ID`

### **Thay đổi thumbnail:**
```tsx
thumbnail: "/ten-hinh-anh-moi.jpg", // Đặt file trong thư mục /public/
```

## 📱 Tính năng:

1. **Click Play Button** → Modal mở với video YouTube
2. **Responsive Design** → Hoạt động tốt trên mọi thiết bị
3. **Auto-play** → Video tự động phát khi mở modal
4. **Full Screen** → Hỗ trợ chế độ toàn màn hình trong modal
5. **Close Modal** → Click nút X hoặc click bên ngoài để đóng

## 🚀 App đang chạy:
**URL**: http://localhost:3001/bai-hoc

### Điều hướng:
- Trang chủ → Bài học (trong menu)
- Hoặc trực tiếp: http://localhost:3001/bai-hoc

## 📝 Lưu ý:
- Cần thay `YOUR_VIDEO_ID_X` bằng ID video YouTube thật để test
- Modal sử dụng YouTube embed nên cần internet để load video
- Tất cả animations và hover effects vẫn hoạt động bình thường
