"use client"

import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Link from "next/link"
import { useState } from "react"

// Dữ liệu hình ảnh - bạn có thể thay đổi đường dẫn hình ảnh ở đây
const galleryImages = [
  {
    src: "/thuoc-dia/hinh1.jpg", // Thay đổi đường dẫn này
    alt: "Thương gia và phiên dịch viên",
    description: "Hình ảnh các thương gia và phiên dịch viên trong thời kỳ thuộc địa, đóng vai trò cầu nối giữa hai nền văn hóa."
  },
  {
    src: "/thuoc-dia/hinh2.jpg", // Thay đổi đường dẫn này
    alt: "Công nhân đồn điền",
    description: "Lao động tại các đồn điền cao su, cà phê do thực dân Pháp thành lập, thể hiện sự bóc lột lao động."
  },
  {
    src: "/thuoc-dia/hinh3.jpg", // Thay đổi đường dẫn này
    alt: "Trường học phương Tây",
    description: "Hệ thống giáo dục phương Tây được du nhập, tạo ra tầng lớp trí thức mới với tư duy hiện đại."
  },
  {
    src: "/thuoc-dia/hinh4.jpg", // Thay đổi đường dẫn này
    alt: "Đường sắt và giao thông",
    description: "Việc xây dựng đường sắt và phát triển giao thông vận tải hiện đại thay đổi cơ cấu kinh tế."
  },
  {
    src: "/thuoc-dia/hinh5.jpg", // Thay đổi đường dẫn này
    alt: "Y học hiện đại",
    description: "Sự du nhập của y học phương Tây tạo ra nghề bác sĩ, y tá với phương pháp điều trị khoa học."
  },
  {
    src: "/thuoc-dia/hinh6.jpg", // Thay đổi đường dẫn này
    alt: "Báo chí và truyền thông",
    description: "Sự phát triển của báo chí và truyền thông hiện đại, tạo điều kiện cho việc truyền bá tư tưởng mới."
  }
]

// Component ImageGallery với modal
function ImageGallery({ images }: { images: typeof galleryImages }) {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer">
                  <div className="aspect-video bg-blue-100 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-blue-900 mb-2">{image.alt}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{image.description}</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full">
                <div className="space-y-4">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto rounded-lg"
                  />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{image.alt}</h3>
                    <p className="text-muted-foreground leading-relaxed">{image.description}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
    </>
  )
}

export default function ThuocDiaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-muted/30 py-4">
        <div className="max-w-6xl mx-auto px-4">
          <nav className="text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Trang chủ
            </Link>
            <span className="mx-2">/</span>
            <Link href="/timeline" className="hover:text-primary">
              Timeline
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Giai đoạn Thuộc địa</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                1858 - 1945
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Giai đoạn Thuộc địa / Đầu tư bản
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Thời kỳ tiếp xúc với nền văn minh công nghiệp phương Tây, sự phát triển của thương nghiệp và kinh tế
                hàng hóa.
              </p>
            </div>
            <div className="aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg overflow-hidden">
              <img
                src="/colonial-period-merchants-and-interpreters.jpg"
                alt="Thương gia và phiên dịch viên thuộc địa"
                className="w-full h-full object-cover"
              />
              {/* Bạn có thể thay đổi đường dẫn hình ảnh ở đây */}
            </div>
          </div>
        </div>
      </section>

      {/* Đặc điểm chính */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
            <h2 className="text-3xl font-bold text-blue-900 mb-6">Đặc điểm chính:</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-blue-800">Kinh tế hàng hóa</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-blue-800">Giao thương quốc tế</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-blue-800">Trung gian ngôn ngữ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Lực lượng sản xuất */}
            <Card className="border-blue-200 bg-blue-50/50">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Lực lượng sản xuất</CardTitle>
                <CardDescription>Sự tiếp xúc với công nghiệp hiện đại</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Công nghiệp phương Tây:</h4>
                  <p className="text-sm text-muted-foreground">
                    Máy móc hiện đại, đường sắt, tàu thủy, điện báo được du nhập vào Việt Nam.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Thương nghiệp phát triển:</h4>
                  <p className="text-sm text-muted-foreground">
                    Giao thương quốc tế, xuất khẩu nông sản, nhập khẩu hàng công nghiệp.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Tri thức mới:</h4>
                  <p className="text-sm text-muted-foreground">
                    Khoa học kỹ thuật phương Tây, ngoại ngữ, kỹ năng giao tiếp quốc tế.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quan hệ sản xuất */}
            <Card className="border-indigo-200 bg-indigo-50/50">
              <CardHeader>
                <CardTitle className="text-2xl text-indigo-900">Quan hệ sản xuất</CardTitle>
                <CardDescription>Sự thay đổi trong cấu trúc xã hội</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-indigo-900 mb-2">Chế độ thuộc địa:</h4>
                  <p className="text-sm text-muted-foreground">
                    Pháp thống trị chính trị, kinh tế phục vụ lợi ích thực dân.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-900 mb-2">Kinh tế hàng hóa:</h4>
                  <p className="text-sm text-muted-foreground">
                    Sản xuất để bán, thị trường mở rộng, tiền tệ lưu thông nhiều hơn.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-900 mb-2">Tầng lớp mới:</h4>
                  <p className="text-sm text-muted-foreground">
                    Thương gia, thông ngôn, công nhân, trí thức mới xuất hiện.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Kiến trúc thượng tầng */}
            <Card className="border-purple-200 bg-purple-50/50">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-900">Kiến trúc thượng tầng</CardTitle>
                <CardDescription>Sự giao thoa văn hóa Đông - Tây</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-900 mb-2">Giáo dục mới:</h4>
                  <p className="text-sm text-muted-foreground">
                    Trường học kiểu Pháp, chữ quốc ngữ, kiến thức khoa học hiện đại.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-900 mb-2">Tư tưởng tiến bộ:</h4>
                  <p className="text-sm text-muted-foreground">
                    Dân chủ, tự do, bình đẳng, tư tưởng cách mạng bắt đầu lan tỏa.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-900 mb-2">Báo chí phát triển:</h4>
                  <p className="text-sm text-muted-foreground">
                    Báo chí bằng chữ quốc ngữ, truyền bá tri thức và tư tưởng mới.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Gallery Images - Chỗ để gắn thêm hình ảnh */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">Hình ảnh minh họa</h2>
            <ImageGallery images={galleryImages} />
          </div>

          {/* Nghề danh giá */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-blue-900">Nghề danh giá trong giai đoạn</CardTitle>
                <CardDescription className="text-lg">
                  Những nghề nghiệp phù hợp với nhu cầu giao thương và tiếp xúc quốc tế
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-200 text-blue-900 rounded-full flex items-center justify-center font-bold text-lg">
                        1
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-2">Buôn bán</h3>
                        <p className="text-muted-foreground">
                          Thương gia xuất nhập khẩu, môi giới thương mại giữa Việt Nam và các nước phương Tây.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-200 text-blue-900 rounded-full flex items-center justify-center font-bold text-lg">
                        2
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-2">Thông ngôn</h3>
                        <p className="text-muted-foreground">
                          Phiên dịch viên, thông dịch viên giúp giao tiếp giữa người Việt và người nước ngoài.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-indigo-200 text-indigo-900 rounded-full flex items-center justify-center font-bold text-lg">
                        3
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-indigo-900 mb-2">Thư ký</h3>
                        <p className="text-muted-foreground">
                          Nhân viên văn phòng, kế toán, thư ký cho các công ty và cơ quan thực dân.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-indigo-200 text-indigo-900 rounded-full flex items-center justify-center font-bold text-lg">
                        4
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-indigo-900 mb-2">Báo chí</h3>
                        <p className="text-muted-foreground">
                          Nhà báo, biên tập viên sử dụng chữ quốc ngữ để truyền bá thông tin và tư tưởng.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Phân tích duy vật lịch sử */}
          <div className="mt-16">
            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-3xl">Phân tích duy vật lịch sử</CardTitle>
                <CardDescription className="text-primary-foreground/80 text-lg">
                  Tại sao giao thương và ngôn ngữ trở thành then chốt?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Giao thương quốc tế tăng mạnh</h4>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    Sự du nhập của công nghiệp phương Tây tạo ra nhu cầu lớn về giao thương. Việt Nam xuất khẩu nông sản
                    và nhập khẩu hàng công nghiệp, tạo ra cơ hội cho những người am hiểu thương mại.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Rào cản ngôn ngữ và văn hóa</h4>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    Sự khác biệt về ngôn ngữ và văn hóa giữa Đông - Tây tạo ra nhu cầu cấp thiết về những người có thể
                    làm cầu nối. Thông ngôn và thư ký trở thành nghề khan hiếm và có giá trị cao.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Tri thức mới được trọng dụng</h4>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    Chữ quốc ngữ, kiến thức khoa học phương Tây, kỹ năng giao tiếp quốc tế trở thành những tài sản quý
                    giá. Những người sở hữu tri thức này có cơ hội nghề nghiệp tốt hơn.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          

          {/* Navigation */}
          <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-between">
            <Button asChild variant="outline" size="lg">
              <Link href="/timeline/phong-kien">← Giai đoạn trước</Link>
            </Button>
            <Button asChild size="lg">
              <Link href="/timeline/bao-cap">Giai đoạn tiếp theo →</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
