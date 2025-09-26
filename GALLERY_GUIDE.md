# Hướng dẫn sử dụng Gallery hình ảnh

## Trang Bài học Video đã được tạo ✅

1. **Trang mới**: `/app/bai-hoc/page.tsx`
   - Chứa 6 video bài học tương ứng với 6 giai đoạn lịch sử
   - Mỗi video có thông tin: tiêu đề, mô tả, thời lượng, thumbnail
   - Link YouTube: Thay đổi `YOUR_VIDEO_ID_X` thành ID video thật

2. **Navigation**: Đã thêm link "Bài học" vào menu chính

## Gallery hình ảnh đã được thêm vào các trang timeline ✅

### Các trang đã cập nhật:
- `/app/timeline/nguyen-thuy/page.tsx` - Giai đoạn nguyên thủy (6 hình)
- `/app/timeline/hien-dai/page.tsx` - Giai đoạn hiện đại (6 hình)
- `/app/timeline/phong-kien/page.tsx` - Giai đoạn phong kiến (6 hình) 
- `/app/timeline/thuoc-dia/page.tsx` - Giai đoạn thuộc địa (6 hình)

### Tính năng Gallery:
- **6 hình ảnh mỗi trang** với layout responsive (3 cột trên desktop, 2 cột trên tablet)
- **Description dưới mỗi hình** với tiêu đề và mô tả chi tiết
- **Modal popup** khi click vào hình để xem to hơn
- **Hover effects** với scale transform khi di chuột
- **Shadow và animation** để UX tốt hơn

## Cách thay đổi hình ảnh:

### 1. Thay đổi hình ảnh chính (header):
```tsx
<img
  src="/ten-hinh-anh-moi.jpg"  // ← Thay đổi đường dẫn ở đây
  alt="Mô tả hình ảnh"
  className="w-full h-full object-cover"
/>
```

### 2. Thay đổi hình trong gallery:
Tìm mảng `galleryImages` ở đầu file:
```tsx
const galleryImages = [
  {
    src: "/primitive-society-stone-tools.jpg", // ← Thay đổi đường dẫn
    alt: "Công cụ đá nguyên thủy",             // ← Thay đổi alt text
    description: "Mô tả chi tiết..."           // ← Thay đổi mô tả
  },
  // ... các hình khác
]
```

### 3. Thay đổi link video YouTube:
Trong `/app/bai-hoc/page.tsx`, tìm:
```tsx
youtubeUrl: "https://www.youtube.com/watch?v=YOUR_VIDEO_ID_1", // ← Thay YOUR_VIDEO_ID_X
```

## Các trang cần cập nhật thêm:
- `/app/timeline/chiem-huu-no-le/page.tsx` - Giai đoạn chiếm hữu nô lệ
- `/app/timeline/bao-cap/page.tsx` - Giai đoạn bao cấp

## Cấu trúc file hình ảnh:
Tất cả hình ảnh nên được đặt trong thư mục `/public/` với tên rõ ràng:
- `primitive-society-stone-tools.jpg` ✅ (đã có)
- `feudal-period-scholars-and-officials.jpg` ✅ (đã có)  
- `colonial-period-merchants-and-interpreters.jpg` ✅ (đã có)
- `modern-period-programmers-and-data-scientists.jpg` ✅ (đã có)
- `placeholder.jpg` - Thay thế bằng hình thật

## Lưu ý:
- Modal sử dụng Dialog component từ shadcn/ui
- Tất cả trang đã thêm "use client" để hỗ trợ interactivity
- Responsive design hoạt động tốt trên mobile và desktop
- Hover effects và transitions mượt mà
