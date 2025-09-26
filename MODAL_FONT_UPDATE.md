# Cập nhật Modal Video & Font Chữ

## ✅ Đã hoàn thành:

### 1. **Modal Video lớn hơn:**
- ✅ **Kích thước mới**: `max-w-7xl w-[95vw]` (từ `max-w-4xl`)
- ✅ **Chiều cao**: `max-h-[95vh]` và `min-h-[60vh]` cho video
- ✅ **Responsive**: Chiếm 95% viewport width trên mọi thiết bị
- ✅ **Video chất lượng cao**: Aspect ratio được tối ưu

### 2. **Font chữ dễ nhìn hơn:**
- ✅ **Font stack**: Inter, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif
- ✅ **Font smoothing**: Antialiased cho màn hình retina
- ✅ **Áp dụng toàn app**: Thay đổi trong `globals.css`
- ✅ **Font-sans classes**: Thêm vào các elements quan trọng

## 🎯 Chi tiết thay đổi:

### **Modal Size:**
```tsx
// Trước:
className="max-w-4xl w-full max-h-[90vh] p-0"

// Sau:
className="max-w-7xl w-[95vw] max-h-[95vh] p-0"
```

### **Video Area:**
```tsx
// Thêm min-height để video luôn đủ lớn
<div className="aspect-video w-full min-h-[60vh]">
```

### **Font Changes:**
1. **Global font** trong `app/globals.css`:
```css
body {
  font-family: 'Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

2. **Explicit font-sans classes** được thêm vào:
- Headers (h1, h2, h3)
- Paragraphs và descriptions  
- Statistics numbers
- Buttons và labels

## 📱 Kích thước Modal mới:

### **Desktop:**
- Width: ~1280px (max-w-7xl)
- Height: ~95% màn hình
- Video area: Tối thiểu 60% viewport height

### **Mobile/Tablet:**
- Width: 95% màn hình
- Height: 95% màn hình  
- Responsive và tối ưu cho touch

## 🔤 Font Features:

### **Inter Font:**
- Thiết kế cho UI/UX hiện đại
- Dễ đọc trên màn hình số
- Hỗ trợ tiếng Việt tốt
- Fallback: Segoe UI (Windows), Roboto (Android)

### **Font Smoothing:**
- `-webkit-font-smoothing: antialiased`
- `-moz-osx-font-smoothing: grayscale`
- Text sắc nét hơn trên màn hình high-DPI

## 🚀 Test trên app:

**URL**: http://localhost:3001/bai-hoc

### Cách test:
1. Click vào bất kỳ video nào
2. Modal sẽ mở **to hơn rõ rệt**
3. Video hiển thị **rõ nét và lớn**
4. Font chữ **dễ đọc hơn** trên toàn trang
5. Responsive tốt trên mobile

## 📝 Lưu ý:
- Modal giờ chiếm gần toàn bộ màn hình
- Video quality tối ưu cho xem trên màn hình lớn
- Font áp dụng cho toàn bộ app, không chỉ trang bài học
- Vẫn giữ nguyên tính năng auto-play và fullscreen
