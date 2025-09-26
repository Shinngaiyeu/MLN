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
    src: "/hien-dai/hinh1.jpg", // Thay đổi đường dẫn này
    alt: "Lập trình viên và nhà khoa học dữ liệu",
    description: "Những lập trình viên và nhà khoa học dữ liệu đang làm việc với công nghệ tiên tiến, phân tích big data và phát triển AI."
  },
  {
    src: "/hien-dai/hinh2.jpg", // Thay đổi đường dẫn này
    alt: "Trí tuệ nhân tạo và Machine Learning",
    description: "Hệ thống AI và machine learning đang cách mạng hóa mọi ngành nghề từ y tế, giáo dục đến sản xuất và dịch vụ."
  },
  {
    src: "/hien-dai/hinh3.jpg", // Thay đổi đường dẫn này
    alt: "Startup và doanh nhân công nghệ",
    description: "Các startup công nghệ và doanh nhân trẻ đang tạo ra những mô hình kinh doanh mới, thay đổi cách thức hoạt động của xã hội."
  },
  {
    src: "/hien-dai/hinh4.jpg", // Thay đổi đường dẫn này
    alt: "Remote work và digital nomad",
    description: "Xu hướng làm việc từ xa và du mục số đang thay đổi hoàn toàn khái niệm về không gian làm việc truyền thống."
  },
  {
    src: "/hien-dai/hinh5.jpg", // Thay đổi đường dẫn này
    alt: "E-commerce và thương mại điện tử",
    description: "Sự bùng nổ của thương mại điện tử đã tạo ra hàng triệu việc làm mới và thay đổi thói quen mua sắm của người tiêu dùng."
  },
  {
    src: "/hien-dai/hinh6.jpg", // Thay đổi đường dẫn này
    alt: "Cryptocurrency và Blockchain",
    description: "Công nghệ blockchain và tiền điện tử đang tạo ra một hệ thống tài chính mới, mở ra nhiều cơ hội nghề nghiệp khác biệt."
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
                  <div className="aspect-video bg-green-100 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-green-900 mb-2">{image.alt}</h3>
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

export default function HienDaiPage() {
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
            <span className="text-foreground">Giai đoạn Hiện đại</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                1986 - Hiện tại
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Giai đoạn Hiện đại - Công nghệ số
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Thời đại của cuộc cách mạng công nghệ thông tin, trí tuệ nhân tạo và nền kinh tế tri thức toàn cầu.
              </p>
            </div>
            <div className="aspect-square bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg overflow-hidden">
              <img
                src="/modern-period-programmers-and-data-scientists.jpg"
                alt="Lập trình viên và nhà khoa học dữ liệu hiện đại"
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
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
            <h2 className="text-3xl font-bold text-green-900 mb-6">Đặc điểm chính:</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-green-800">Cách mạng công nghệ số</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-green-800">Kinh tế tri thức</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-green-800">Toàn cầu hóa và AI</p>
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
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="text-2xl text-green-900">Lực lượng sản xuất</CardTitle>
                <CardDescription>Cách mạng công nghệ số</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Công nghệ thông tin:</h4>
                  <p className="text-sm text-muted-foreground">
                    Internet, máy tính, smartphone, cloud computing thay đổi cách thức sản xuất và giao tiếp.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Trí tuệ nhân tạo:</h4>
                  <p className="text-sm text-muted-foreground">
                    AI, machine learning, big data analytics tự động hóa nhiều quy trình.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Toàn cầu hóa:</h4>
                  <p className="text-sm text-muted-foreground">
                    Kết nối toàn cầu, làm việc từ xa, thương mại điện tử phát triển mạnh.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quan hệ sản xuất */}
            <Card className="border-emerald-200 bg-emerald-50/50">
              <CardHeader>
                <CardTitle className="text-2xl text-emerald-900">Quan hệ sản xuất</CardTitle>
                <CardDescription>Kinh tế tri thức và dịch vụ</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-emerald-900 mb-2">Kinh tế tri thức:</h4>
                  <p className="text-sm text-muted-foreground">
                    Tri thức, thông tin và sáng tạo trở thành tài sản quan trọng nhất.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-900 mb-2">Dịch vụ cao cấp:</h4>
                  <p className="text-sm text-muted-foreground">
                    Tài chính, tư vấn, giáo dục, y tế chiếm tỷ trọng lớn trong GDP.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-emerald-900 mb-2">Startup và đổi mới:</h4>
                  <p className="text-sm text-muted-foreground">
                    Tinh thần khởi nghiệp, đổi mới sáng tạo được khuyến khích mạnh mẽ.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Kiến trúc thượng tầng */}
            <Card className="border-teal-200 bg-teal-50/50">
              <CardHeader>
                <CardTitle className="text-2xl text-teal-900">Kiến trúc thượng tầng</CardTitle>
                <CardDescription>Văn hóa số và học tập suốt đời</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-teal-900 mb-2">Giáo dục trực tuyến:</h4>
                  <p className="text-sm text-muted-foreground">
                    E-learning, MOOC, học tập suốt đời trở thành xu hướng chủ đạo.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-900 mb-2">Văn hóa số:</h4>
                  <p className="text-sm text-muted-foreground">
                    Mạng xã hội, content creator, influencer tạo ra văn hóa mới.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-teal-900 mb-2">Tư duy đổi mới:</h4>
                  <p className="text-sm text-muted-foreground">
                    Khuyến khích sáng tạo, chấp nhận rủi ro, thất bại là bài học.
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
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-green-900">Nghề danh giá trong giai đoạn</CardTitle>
                <CardDescription className="text-lg">
                  Những nghề nghiệp dẫn đầu trong thời đại công nghệ số
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-200 text-green-900 rounded-full flex items-center justify-center font-bold text-lg">
                        1
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-green-900 mb-2">Lập trình viên</h3>
                        <p className="text-muted-foreground">
                          Software engineer, web developer, mobile developer - những người xây dựng thế giới số.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-200 text-green-900 rounded-full flex items-center justify-center font-bold text-lg">
                        2
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-green-900 mb-2">Chuyên gia dữ liệu</h3>
                        <p className="text-muted-foreground">
                          Data scientist, AI engineer, machine learning specialist phân tích và khai thác dữ liệu.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-emerald-200 text-emerald-900 rounded-full flex items-center justify-center font-bold text-lg">
                        3
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-emerald-900 mb-2">Content Creator</h3>
                        <p className="text-muted-foreground">
                          YouTuber, blogger, influencer tạo ra nội dung số và xây dựng thương hiệu cá nhân.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-emerald-200 text-emerald-900 rounded-full flex items-center justify-center font-bold text-lg">
                        4
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-emerald-900 mb-2">Digital Marketer</h3>
                        <p className="text-muted-foreground">
                          Chuyên gia marketing số, SEO, social media marketing trong thời đại thương mại điện tử.
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
                  Tại sao khoa học - công nghệ cao lại quyết định mọi thứ?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Cách mạng công nghệ thông tin</h4>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    Sự phát triển vượt bậc của công nghệ thông tin đã thay đổi căn bản cách thức sản xuất, giao tiếp và
                    tổ chức xã hội. Những người nắm vững công nghệ trở thành lực lượng sản xuất chủ chốt.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Tri thức là sức mạnh</h4>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    Trong nền kinh tế tri thức, khả năng học hỏi, sáng tạo và ứng dụng công nghệ quyết định giá trị của
                    con người. Lập trình viên và chuyên gia dữ liệu trở thành "thợ rèn" của thời đại số.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Sáng tạo nội dung số</h4>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    Internet và mạng xã hội tạo ra cơ hội cho mọi người trở thành nhà sáng tạo nội dung. Content creator
                    và digital marketer phát triển mạnh nhờ nhu cầu giải trí và tiếp thị trong môi trường số.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Future Prediction */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-blue-900">Dự báo tương lai</CardTitle>
                <CardDescription className="text-lg">Những nghề hot tiếp theo có thể là gì?</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-white/50 rounded-lg">
                    <div className="w-16 h-16 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-blue-900 mb-2">AI Prompt Engineer</h4>
                    <p className="text-sm text-muted-foreground">Chuyên gia tối ưu hóa tương tác với AI</p>
                  </div>
                  <div className="text-center p-4 bg-white/50 rounded-lg">
                    <div className="w-16 h-16 bg-green-100 text-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-green-900 mb-2">Chuyên gia Năng lượng tái tạo</h4>
                    <p className="text-sm text-muted-foreground">Kỹ sư năng lượng xanh và bền vững</p>
                  </div>
                  <div className="text-center p-4 bg-white/50 rounded-lg">
                    <div className="w-16 h-16 bg-purple-100 text-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                    </div>
                    <h4 className="font-semibold text-purple-900 mb-2">Biotech Engineer</h4>
                    <p className="text-sm text-muted-foreground">Kỹ sư công nghệ sinh học và y học</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>


          {/* Navigation */}
          <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-between">
            <Button asChild variant="outline" size="lg">
              <Link href="/timeline/bao-cap">← Giai đoạn trước</Link>
            </Button>
            <Button asChild size="lg">
              <Link href="/timeline">Quay lại Timeline</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
