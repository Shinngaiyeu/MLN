'use client'

import { useState } from 'react'
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import Link from "next/link"

// Dữ liệu hình ảnh cho gallery
const galleryImages = [
  {
    src: "/bao-cap/hinh1.jpg",
    alt: "Kỹ sư và cán bộ nhà nước",
    description: "Đội ngũ kỹ sư và cán bộ quản lý được đào tạo để phục vụ công cuộc công nghiệp hóa và hiện đại hóa đất nước."
  },
  {
    src: "/bao-cap/hinh2.jpg",
    alt: "Nhà máy công nghiệp nặng",
    description: "Các nhà máy thép, xi măng, máy móc được xây dựng để phát triển nền tảng công nghiệp cơ bản của đất nước."
  },
  {
    src: "/bao-cap/hinh3.png",
    alt: "Hợp tác xã nông nghiệp",
    description: "Mô hình tổ chức sản xuất nông nghiệp tập thể, với việc cơ giới hóa và áp dụng khoa học kỹ thuật vào nông nghiệp."
  },
  {
    src: "/bao-cap/hinh4.png",
    alt: "Hệ thống giáo dục quốc dân",    
    description: "Chương trình xóa nạn mù chữ và phát triển giáo dục phổ thông, đào tạo nguồn nhân lực cho công nghiệp hóa."
  },
  {
    src: "/bao-cap/hinh5.jpg",
    alt: "Y tế và phúc lợi xã hội",
    description: "Hệ thống y tế công cộng miễn phí và các chế độ phúc lợi xã hội đảm bảo cuộc sống cơ bản cho người dân."
  },
  {
    src: "/bao-cap/hinh6.png",
    alt: "Văn hóa và tuyên truyền",
    description: "Các hoạt động văn hóa, nghệ thuật phục vụ mục tiêu xây dựng xã hội chủ nghĩa và giáo dục con người mới."
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
                  <div className="aspect-video bg-red-100 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-red-900 mb-2">{image.alt}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{image.description}</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full z-[9999]">
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

export default function BaoCapPage() {
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
            <span className="text-foreground">Giai đoạn Bao cấp</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                1945 - 1986
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Giai đoạn Bao cấp</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Thời kỳ xây dựng nền kinh tế kế hoạch hóa tập trung với sự phát triển công nghiệp cơ bản và hệ thống
                giáo dục quốc dân.
              </p>
            </div>
            <div className="aspect-square bg-gradient-to-br from-red-100 to-pink-100 rounded-lg overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('/subsidized-period-engineers-and-officials.jpg')" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Đặc điểm chính */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8 border border-red-200">
            <h2 className="text-3xl font-bold text-red-900 mb-6">Đặc điểm chính:</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-red-800">Kinh tế kế hoạch hóa</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-red-800">Công nghiệp hóa tập trung</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-red-800">Hệ thống bao cấp xã hội</p>
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
            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <CardTitle className="text-2xl text-red-900">Lực lượng sản xuất</CardTitle>
                <CardDescription>Công nghiệp hóa và hiện đại hóa</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-red-900 mb-2">Công nghiệp cơ bản:</h4>
                  <p className="text-sm text-muted-foreground">
                    Xây dựng các ngành công nghiệp nặng: thép, xi măng, hóa chất, điện lực.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-900 mb-2">Kế hoạch hóa tập trung:</h4>
                  <p className="text-sm text-muted-foreground">
                    Nhà nước điều phối toàn bộ nền kinh tế theo kế hoạch 5 năm.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-red-900 mb-2">Giáo dục phổ cập:</h4>
                  <p className="text-sm text-muted-foreground">
                    Xóa nạn mù chữ, phát triển giáo dục kỹ thuật và đại học.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quan hệ sản xuất */}
            <Card className="border-pink-200 bg-pink-50/50">
              <CardHeader>
                <CardTitle className="text-2xl text-pink-900">Quan hệ sản xuất</CardTitle>
                <CardDescription>Sở hữu tập thể và nhà nước</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-pink-900 mb-2">Sở hữu nhà nước:</h4>
                  <p className="text-sm text-muted-foreground">
                    Các ngành công nghiệp chủ chốt thuộc sở hữu và quản lý của nhà nước.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-pink-900 mb-2">Hợp tác xã:</h4>
                  <p className="text-sm text-muted-foreground">
                    Nông nghiệp tổ chức theo mô hình hợp tác xã sản xuất tập thể.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-pink-900 mb-2">Phân phối bình quân:</h4>
                  <p className="text-sm text-muted-foreground">
                    Hệ thống phân phối theo nhu cầu, bao cấp xã hội toàn diện.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Kiến trúc thượng tầng */}
            <Card className="border-rose-200 bg-rose-50/50">
              <CardHeader>
                <CardTitle className="text-2xl text-rose-900">Kiến trúc thượng tầng</CardTitle>
                <CardDescription>Tư tưởng xã hội chủ nghĩa</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-rose-900 mb-2">Chủ nghĩa Mác - Lênin:</h4>
                  <p className="text-sm text-muted-foreground">
                    Tư tưởng chỉ đạo trong xây dựng xã hội và phát triển kinh tế.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-rose-900 mb-2">Giáo dục toàn dân:</h4>
                  <p className="text-sm text-muted-foreground">
                    Hệ thống giáo dục thống nhất, miễn phí từ tiểu học đến đại học.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-rose-900 mb-2">Văn hóa xã hội chủ nghĩa:</h4>
                  <p className="text-sm text-muted-foreground">
                    Tôn vinh lao động, khoa học kỹ thuật và tinh thần tập thể.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Nghề danh giá */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-red-900">Nghề danh giá trong giai đoạn</CardTitle>
                <CardDescription className="text-lg">
                  Những nghề nghiệp phục vụ mục tiêu công nghiệp hóa và xây dựng đất nước
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-red-200 text-red-900 rounded-full flex items-center justify-center font-bold text-lg">
                        1
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-red-900 mb-2">Cán bộ nhà nước</h3>
                        <p className="text-muted-foreground">
                          Những người điều hành bộ máy nhà nước, thực hiện các chính sách phát triển kinh tế - xã hội.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-red-200 text-red-900 rounded-full flex items-center justify-center font-bold text-lg">
                        2
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-red-900 mb-2">Kỹ sư</h3>
                        <p className="text-muted-foreground">
                          Chuyên gia kỹ thuật thiết kế và vận hành các nhà máy, công trình công nghiệp.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-pink-200 text-pink-900 rounded-full flex items-center justify-center font-bold text-lg">
                        3
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-pink-900 mb-2">Giáo viên</h3>
                        <p className="text-muted-foreground">
                          Đội ngũ giáo dục đào tạo nhân lực cho sự nghiệp công nghiệp hóa đất nước.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-pink-200 text-pink-900 rounded-full flex items-center justify-center font-bold text-lg">
                        4
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-pink-900 mb-2">Bác sĩ</h3>
                        <p className="text-muted-foreground">
                          Y bác sĩ phục vụ hệ thống y tế quốc gia, chăm sóc sức khỏe nhân dân.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Gallery Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-red-900 mb-4">Hình ảnh giai đoạn bao cấp</h2>
              <p className="text-lg text-red-700 max-w-3xl mx-auto">
                Khám phá những hình ảnh đặc trưng của giai đoạn bao cấp qua các khía cạnh kinh tế, xã hội và văn hóa
              </p>
            </div>
            <ImageGallery images={galleryImages} />
          </div>

          {/* Phân tích duy vật lịch sử */}
          <div className="mt-16">
            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-3xl">Phân tích duy vật lịch sử</CardTitle>
                <CardDescription className="text-primary-foreground/80 text-lg">
                  Tại sao nhà nước trở thành trung tâm của mọi hoạt động?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Nhà nước điều phối kinh tế</h4>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    Trong nền kinh tế kế hoạch hóa tập trung, nhà nước đóng vai trò quyết định trong việc phân bổ nguồn
                    lực và định hướng phát triển. Cán bộ nhà nước trở thành những người có quyền lực và địa vị cao.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Ưu tiên công nghiệp nặng</h4>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    Chiến lược công nghiệp hóa tập trung vào các ngành nặng tạo ra nhu cầu lớn về kỹ sư và chuyên gia kỹ
                    thuật. Những người có kiến thức khoa học kỹ thuật được xã hội trọng dụng.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Đầu tư vào con người</h4>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    Nhận thức được tầm quan trọng của giáo dục và y tế trong phát triển xã hội, nhà nước đầu tư mạnh vào
                    các lĩnh vực này. Giáo viên và bác sĩ được tôn vinh như những người xây dựng tương lai đất nước.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          

          {/* Navigation */}
          <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-between">
            <Button asChild variant="outline" size="lg">
              <Link href="/timeline/thuoc-dia">← Giai đoạn trước</Link>
            </Button>
            <Button asChild size="lg">
              <Link href="/timeline/hien-dai">Giai đoạn tiếp theo →</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
