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
    src: "/chiem-huu-no-le/hinh1.jpg",
    alt: "Công cụ đồng thau thời kỳ nô lệ",
    description: "Các công cụ đồng thau tiên tiến như rìu, dao, mũi tên đã cách mạng hóa nông nghiệp và thủ công nghiệp, tạo ra thặng dư sản phẩm đáng kể."
  },
  {
    src: "/chiem-huu-no-le/hinh2.jpg",
    alt: "Ruộng đất và trang trại nô lệ",
    description: "Hệ thống nông nghiệp lớn sử dụng lao động nô lệ để canh tác lúa nước, tạo ra sản lượng cao phục vụ tầng lớp quý tộc."
  },
  {
    src: "/chiem-huu-no-le/hinh3.jpg",
    alt: "Chợ phiên và thương mại",
    description: "Sự phát triển của thương mại và trao đổi hàng hóa, với việc xuất hiện đồng tiền kim loại đầu tiên."
  },
  {
    src: "/chiem-huu-no-le/hinh4.jpg",
    alt: "Thủ công nghiệp đồng thau",
    description: "Các xưởng thủ công chuyên nghiệp sản xuất đồ đồng, gốm sứ, dệt may phục vụ tầng lớp thống trị."
  },
  {
    src: "/chiem-huu-no-le/hinh5.jpg",
    alt: "Kiến trúc cung đình và lăng mộ",
    description: "Những công trình kiến trúc hoành tráng thể hiện quyền lực của vua chúa và sự phân hóa giai cấp rõ rệt."
  },
  {
    src: "/chiem-huu-no-le/hinh6.jpg",
    alt: "Văn tự và tri thức",
    description: "Sự ra đời của hệ thống văn tự đầu tiên, được sử dụng để ghi chép luật pháp, thuế khóa và quản lý nhà nước."
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

export default function ChiemHuuNoLePage() {
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
            <span className="text-foreground">Giai đoạn Chiếm hữu nô lệ</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Thế kỷ 10 TCN - 10 SCN
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Giai đoạn Chiếm hữu nô lệ
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Xã hội nông nghiệp phát triển với công cụ đồng thau, sự phân hóa giai cấp rõ rệt giữa chủ nô và nô lệ.
              </p>
            </div>
            <div className="aspect-square bg-gradient-to-br from-amber-100 to-yellow-100 rounded-lg overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: "url('/slave-society-bronze-tools.jpg')" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Đặc điểm chính */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 border border-amber-200">
            <h2 className="text-3xl font-bold text-amber-900 mb-6">Đặc điểm chính:</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-amber-800">Công cụ đồng thau</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-amber-800">Nông nghiệp tưới tiêu</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-amber-800">Phân hóa giai cấp rõ rệt</p>
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
                  <h4 className="font-semibold text-amber-900 mb-2">Công cụ đồng thau:</h4>
                  <p className="text-sm text-muted-foreground">
                    Rìu đồng, dao đồng, cày đồng - bền hơn và sắc hơn công cụ đá, tăng năng suất lao động.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">Nông nghiệp tưới tiêu:</h4>
                  <p className="text-sm text-muted-foreground">
                    Phát triển hệ thống kênh mương, đập đê để tưới tiêu và kiểm soát lũ lụt.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">Chăn nuôi gia súc:</h4>
                  <p className="text-sm text-muted-foreground">
                    Thuần hóa trâu, bò, lợn, gà - cung cấp thức ăn ổn định và sức kéo cho nông nghiệp.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">Thủ công nghiệp:</h4>
                  <p className="text-sm text-muted-foreground">
                    Dệt vải, gốm sứ, luyện kim - tạo ra sản phẩm chất lượng cao và thặng dư sản phẩm.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quan hệ sản xuất */}
            <Card className="border-yellow-200 bg-yellow-50/50">
              <CardHeader>
                <CardTitle className="text-2xl text-yellow-900">Quan hệ sản xuất</CardTitle>
                <CardDescription>Cấu trúc xã hội và quan hệ giai cấp</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-yellow-900 mb-2">Chủ nô - Nô lệ:</h4>
                  <p className="text-sm text-muted-foreground">
                    Chủ nô sở hữu ruộng đất, công cụ và cả con người nô lệ như tài sản.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-900 mb-2">Nhà nước chuyên chế:</h4>
                  <p className="text-sm text-muted-foreground">
                    Vua là chủ sở hữu tối cao, có quân đội và bộ máy quan lại để duy trì trật tự.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-900 mb-2">Phân hóa giai cấp:</h4>
                  <p className="text-sm text-muted-foreground">
                    Xuất hiện tầng lớp quý tộc, thương gia, thủ công nghiệp và nông dân tự do.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-900 mb-2">Thặng dư sản phẩm:</h4>
                  <p className="text-sm text-muted-foreground">
                    Năng suất cao tạo ra thặng dư, cho phép một bộ phận không trực tiếp sản xuất.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Kiến trúc thượng tầng */}
            <Card className="border-orange-200 bg-orange-50/50">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-900">Kiến trúc thượng tầng</CardTitle>
                <CardDescription>Tư tưởng và văn hóa chi phối</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Tôn giáo nhà nước:</h4>
                  <p className="text-sm text-muted-foreground">
                    Vua được coi là con trời, có quyền thiêng liêng để cai trị và sở hữu mọi thứ.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Hệ thống pháp luật:</h4>
                  <p className="text-sm text-muted-foreground">
                    Luật pháp bảo vệ quyền sở hữu tư nhân và duy trì trật tự xã hội phân cấp.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Văn hóa quý tộc:</h4>
                  <p className="text-sm text-muted-foreground">
                    Phát triển văn tự, nghệ thuật, kiến trúc phục vụ tầng lớp thống trị.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Giáo dục phân biệt:</h4>
                  <p className="text-sm text-muted-foreground">
                    Chỉ con em quý tộc được học chữ và tiếp cận tri thức, tạo ra độc quyền văn hóa.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Nghề danh giá */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-amber-900">Nghề danh giá trong giai đoạn</CardTitle>
                <CardDescription className="text-lg">
                  Những nghề nghiệp được xã hội nô lệ tôn trọng và có địa vị cao
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
                        <h3 className="text-xl font-semibold text-amber-900 mb-2">Vua chúa</h3>
                        <p className="text-muted-foreground">
                          Người cai trị tối cao, được coi là đại diện của thần linh trên trái đất, sở hữu mọi quyền lực
                          chính trị và kinh tế.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-amber-200 text-amber-900 rounded-full flex items-center justify-center font-bold text-lg">
                        2
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-amber-900 mb-2">Quan lại</h3>
                        <p className="text-muted-foreground">
                          Những người điều hành bộ máy nhà nước, thu thuế, duy trì trật tự và thực thi ý chí của vua.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-yellow-200 text-yellow-900 rounded-full flex items-center justify-center font-bold text-lg">
                        3
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-yellow-900 mb-2">Thầy tu / Tăng lữ</h3>
                        <p className="text-muted-foreground">
                          Người phục vụ tôn giáo, có tri thức về văn tự và được xã hội kính trọng vì vai trò tâm linh.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-yellow-200 text-yellow-900 rounded-full flex items-center justify-center font-bold text-lg">
                        4
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-yellow-900 mb-2">Thầy thuốc</h3>
                        <p className="text-muted-foreground">
                          Y sĩ có kiến thức về thảo dược và phương pháp chữa bệnh, được quý trọng vì khả năng cứu chữa.
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
                  Tại sao những nghề này lại có địa vị cao trong xã hội nô lệ?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Thặng dư sản phẩm và phân hóa giai cấp</h4>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    Công cụ đồng thau và nông nghiệp tưới tiêu tạo ra thặng dư sản phẩm lớn, cho phép một bộ phận dân cư
                    không trực tiếp sản xuất mà chuyên về quản lý, tôn giáo và tri thức. Điều này tạo ra sự phân hóa
                    giai cấp rõ rệt.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Nhu cầu tổ chức xã hội phức tạp</h4>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    Xã hội lớn hơn với hàng nghìn người cần bộ máy quản lý chuyên nghiệp. Việc xây dựng công trình thủy
                    lợi, quản lý kho tàng và điều hành quân đội đòi hỏi những người có tri thức và kinh nghiệm tổ chức.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Độc quyền tri thức và văn tự</h4>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    Chỉ tầng lớp thống trị mới có điều kiện học chữ và tiếp cận tri thức. Điều này tạo ra độc quyền về
                    thông tin và khả năng quản lý, khiến những người có tri thức trở thành không thể thay thế.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Gallery Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Hình ảnh minh họa</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Khám phá cuộc sống và văn hóa trong giai đoạn chiếm hữu nô lệ qua những hình ảnh sinh động
              </p>
            </div>
            <ImageGallery images={galleryImages} />
          </div>

          {/* Navigation */}
          <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-between">
            <Button asChild variant="outline" size="lg">
              <Link href="/timeline/nguyen-thuy">← Giai đoạn trước</Link>
            </Button>
            <Button asChild size="lg">
              <Link href="/timeline/phong-kien">Giai đoạn tiếp theo →</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
