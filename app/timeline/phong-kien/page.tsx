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
    src: "/phong-kien/hinh1.jpg", // Thay đổi đường dẫn này
    alt: "Nho sinh và quan lại phong kiến",
    description: "Hình ảnh các nho sinh và quan lại trong triều đình phong kiến, thể hiện tầng lớp trí thức và quyền lực thời bấy giờ."
  },
  {
    src: "/phong-kien/hinh2.jpg", // Thay đổi đường dẫn này
    alt: "Nông dân làm ruộng",
    description: "Cảnh nông dân cày bừa làm ruộng, thể hiện nền tảng kinh tế nông nghiệp của xã hội phong kiến Việt Nam."
  },
  {
    src: "/phong-kien/hinh3.jpg", // Thay đổi đường dẫn này
    alt: "Thợ thủ công truyền thống",
    description: "Các nghề thủ công truyền thống như làm gốm, dệt vải, rèn sắt đã phát triển mạnh trong thời kỳ phong kiến."
  },
  {
    src: "/phong-kien/hinh4.jpg", // Thay đổi đường dẫn này
    alt: "Kỳ thi khoa cử",
    description: "Hệ thống thi cử khoa bảng - con đường duy nhất để thay đổi địa vị xã hội trong thời phong kiến."
  },
  {
    src: "/phong-kien/hinh5.jpg", // Thay đổi đường dẫn này
    alt: "Làng xã Việt Nam",
    description: "Cấu trúc làng xã tự trị với hương ước và các thể chế tự quản địa phương đặc trưng của Việt Nam."
  },
  {
    src: "/phong-kien/hinh6.jpg", // Thay đổi đường dẫn này
    alt: "Văn hóa Nho giáo",
    description: "Ảnh hưởng của Nho giáo đối với giáo dục, đạo đức và tổ chức xã hội trong thời kỳ phong kiến."
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
                  <div className="aspect-video bg-amber-100 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-amber-900 mb-2">{image.alt}</h3>
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

export default function PhongKienPage() {
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
            <span className="text-foreground">Giai đoạn Phong kiến</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Trước 1858
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Giai đoạn Phong kiến</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Xã hội nông nghiệp với quan hệ sản xuất dựa trên chế độ địa chủ - nông dân và hệ thống quan lại Nho
                giáo.
              </p>
            </div>
            <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg overflow-hidden">
              <img
                src="/feudal-period-scholars-and-officials.jpg"
                alt="Nho sinh và quan lại phong kiến"
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
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">Đặc điểm chính:</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-amber-800">Nông nghiệp thủ công</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-amber-800">Tư tưởng Nho giáo</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-amber-800">Hệ thống quan lại</p>
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
            <Card className="border-amber-200 bg-amber-50/50">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-900">Lực lượng sản xuất</CardTitle>
                <CardDescription>Công cụ và phương thức sản xuất chủ yếu</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">Nông nghiệp thủ công:</h4>
                  <p className="text-sm text-muted-foreground">
                    Cày bừa bằng trâu bò, công cụ thủ công đơn giản như cuốc, liềm, chày cối.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">Thủ công nghiệp:</h4>
                  <p className="text-sm text-muted-foreground">
                    Dệt vải, gốm sứ, rèn đúc, mộc công - tất cả đều dựa vào kỹ năng thủ công.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">Tri thức hạn chế:</h4>
                  <p className="text-sm text-muted-foreground">
                    Khoa học kỹ thuật chưa phát triển, dựa chiefly vào kinh nghiệm truyền thống.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quan hệ sản xuất */}
            <Card className="border-orange-200 bg-orange-50/50">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-900">Quan hệ sản xuất</CardTitle>
                <CardDescription>Cấu trúc xã hội và quan hệ giai cấp</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Địa chủ - Nông dân:</h4>
                  <p className="text-sm text-muted-foreground">
                    Địa chủ sở hữu ruộng đất, nông dân thuê đất canh tác và nộp tô thuế.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Nhà nước quân chủ:</h4>
                  <p className="text-sm text-muted-foreground">
                    Vua là chủ sở hữu tối cao, quan lại điều hành theo hệ thống phong kiến.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Thủ công nghiệp:</h4>
                  <p className="text-sm text-muted-foreground">
                    Nghề thủ công gia đình, làng nghề với tổ chức bang hội truyền thống.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Kiến trúc thượng tầng */}
            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <CardTitle className="text-2xl text-red-900">Kiến trúc thượng tầng</CardTitle>
                <CardDescription>Tư tưởng và văn hóa chi phối</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-red-900 mb-2">Nho giáo:</h4>
                  <p className="text-sm text-muted-foreground">
                    Tư tưởng Khổng Mạnh làm nền tảng đạo đức, chính trị và giáo dục.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-900 mb-2">Phật giáo - Đạo giáo:</h4>
                  <p className="text-sm text-muted-foreground">
                    Ảnh hưởng sâu sắc đến đời sống tinh thần và văn hóa dân gian.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-900 mb-2">Hệ thống giáo dục:</h4>
                  <p className="text-sm text-muted-foreground">
                    Khoa cử dựa trên kinh điển Nho học, tạo ra tầng lớp sĩ phu.
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
            <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-amber-900">Nghề danh giá trong giai đoạn</CardTitle>
                <CardDescription className="text-lg">
                  Những nghề nghiệp được xã hội tôn trọng và có địa vị cao
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-amber-200 text-amber-900 rounded-full flex items-center justify-center font-bold text-lg">
                        1
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-amber-900 mb-2">Quan lại</h3>
                        <p className="text-muted-foreground">
                          Từ tri huyện đến tể tướng, những người điều hành bộ máy nhà nước phong kiến với quyền lực và
                          địa vị cao.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-amber-200 text-amber-900 rounded-full flex items-center justify-center font-bold text-lg">
                        2
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-amber-900 mb-2">Nho sĩ</h3>
                        <p className="text-muted-foreground">
                          Những người có học thức, am hiểu kinh điển, làm thầy dạy học và cố vấn cho quan lại.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-200 text-orange-900 rounded-full flex items-center justify-center font-bold text-lg">
                        3
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-orange-900 mb-2">Thầy thuốc</h3>
                        <p className="text-muted-foreground">
                          Y sĩ am hiểu y học cổ truyền, được kính trọng vì khả năng cứu chữa bệnh tật.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-200 text-orange-900 rounded-full flex items-center justify-center font-bold text-lg">
                        4
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-orange-900 mb-2">Thầy đồ</h3>
                        <p className="text-muted-foreground">
                          Giáo viên dạy chữ Hán và kinh điển Nho học, đóng vai trò quan trọng trong giáo dục.
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
                  Tại sao những nghề này lại có địa vị cao trong xã hội phong kiến?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Công cụ và tri thức hạn chế</h4>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    Trong xã hội nông nghiệp với công cụ sản xuất thủ công đơn giản, tri thức và khả năng đọc viết trở
                    thành tài sản quý giá. Chỉ một số ít người có điều kiện học tập, tạo ra sự khan hiếm về nhân lực có
                    trình độ.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Nhu cầu quản lý xã hội</h4>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    Xã hội phong kiến cần một bộ máy quan lại để duy trì trật tự, thu thuế và điều hành đất nước. Những
                    người có khả năng đọc viết và am hiểu luật pháp trở thành không thể thiếu.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Tư tưởng Nho giáo chi phối</h4>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    Nho giáo tôn vinh tri thức và đạo đức, tạo ra hệ thống giá trị coi trọng "sĩ nông công thương" với
                    sĩ phu (trí thức) đứng đầu. Điều này hợp lý hóa địa vị cao của các nghề trí thức.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          

          {/* Navigation */}
          <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-between">
            <Button asChild variant="outline" size="lg">
              <Link href="/timeline">← Quay lại Timeline</Link>
            </Button>
            <Button asChild size="lg">
              <Link href="/timeline/thuoc-dia">Giai đoạn tiếp theo →</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
