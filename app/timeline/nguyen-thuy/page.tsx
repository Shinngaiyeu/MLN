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
    src: "/primitive-society-stone-tools.jpg",
    alt: "Công cụ đá nguyên thủy",
    description: "Các loại công cụ đá được chế tác thô sơ như rìu đá, dao đá, mũi tên đá dùng trong săn bắt và sinh hoạt hàng ngày."
  },
  {
    src: "/nguyen-thuy/hinh2.jpg", // Thay đổi đường dẫn này
    alt: "Cuộc sống săn bắt hái lượm",
    description: "Cảnh tượng săn bắt tập thể của bộ tộc nguyên thủy, thể hiện sự phối hợp và phân công lao động theo giới tính."
  },
  {
    src: "/nguyen-thuy/hinh3.jpg", // Thay đổi đường dẫn này
    alt: "Nghệ thuật hang động",
    description: "Tranh vẽ trên vách đá trong hang động, mô tả các hoạt động săn bắt và nghi lễ tôn giáo của con người tiền sử."
  },
  {
    src: "/nguyen-thuy/hinh4.jpg", // Thay đổi đường dẫn này
    alt: "Lửa và nơi ở",
    description: "Khám phá và sử dụng lửa - bước ngoặt quan trọng giúp con người chế biến thức ăn và bảo vệ khỏi thú dữ."
  },
  {
    src: "/nguyen-thuy/hinh5.jpg", // Thay đổi đường dẫn này
    alt: "Tổ chức bộ tộc",
    description: "Cấu trúc xã hội bộ tộc với thủ lĩnh được bầu chọn, thể hiện sự bình đẳng và dân chủ nguyên thủy."
  },
  {
    src: "/nguyen-thuy/hinh6.jpg", // Thay đổi đường dẫn này
    alt: "Nghi lễ tôn giáo",
    description: "Các nghi lễ thờ cúng tổ tiên và thần linh thiên nhiên, thể hiện tín ngưỡng và tâm linh của con người nguyên thủy."
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
                  <div className="aspect-video bg-stone-100 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-stone-900 mb-2">{image.alt}</h3>
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

export default function NguyenThuyPage() {
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
            <span className="text-foreground">Giai đoạn Công Xã Nguyên thủy (Hay Giai đoạn Cộng Sản Nguyên Thủy)</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-stone-50 to-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-stone-100 text-stone-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Trước thế kỷ 10 TCN
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Giai đoạn Công Xã Nguyên thủy (Hay Giai đoạn Cộng Sản Nguyên Thủy)
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Xã hội săn bắt hái lượm với công cụ đá, tổ chức bộ tộc và sự phân công lao động đơn giản theo giới tính
                và tuổi tác.
              </p>
            </div>
            <div className="aspect-square bg-gradient-to-br from-stone-100 to-slate-100 rounded-lg overflow-hidden">
              <img
                src="/primitive-society-stone-tools.jpg"
                alt="Công cụ đá thời nguyên thủy"
                className="w-full h-full object-cover"
              />
              {/* Bạn có thể thay đổi đường dẫn hình ảnh ở đây */}
            </div>
          </div>
        </div>
      </section>

      {/* Đặc điểm chính */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Phần trái - Đặc điểm chính */}
            <div className="bg-gradient-to-br from-stone-50 to-slate-50 rounded-2xl p-8 border border-stone-200">
              <h2 className="text-3xl font-bold text-stone-900 mb-6 text-left">Đặc điểm chính:</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-stone-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-stone-800 text-left">Công cụ đá thô sơ</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-stone-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-stone-800 text-left">Săn bắt hái lượm</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-stone-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-lg text-stone-800 text-left">Tổ chức bộ tộc</p>
                </div>
              </div>
            </div>
            
            {/* Phần phải - Mô tả thêm */}
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-stone-900 mb-4">Xã hội săn bắt hái lượm nguyên thủy</h3>
              <p className="text-lg text-stone-700 leading-relaxed mb-4">
                Giai đoạn nguyên thủy được đặc trưng bởi công cụ đá thô sơ và tổ chức xã hội bộ tộc đơn giản.
              </p>
              <p className="text-lg text-stone-700 leading-relaxed">
                Phân công lao động theo giới tính và tuổi tác, chưa có sự phân hóa nghề nghiệp rõ rệt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Lực lượng sản xuất */}
            <Card className="border-stone-200 bg-stone-50/50">
              <CardHeader>
                <CardTitle className="text-2xl text-stone-900">Lực lượng sản xuất</CardTitle>
                <CardDescription>Công cụ và phương thức sản xuất chủ yếu</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Công cụ đá:</h4>
                  <p className="text-sm text-muted-foreground">
                    Rìu đá, dao đá, mũi tên đá - được chế tác bằng cách đẽo gọt đá lửa, đá phiến.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Săn bắt hái lượm:</h4>
                  <p className="text-sm text-muted-foreground">
                    Thu thập quả rừng, săn thú rừng, đánh cá bằng tay và công cụ đơn giản.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Lửa và nơi ở:</h4>
                  <p className="text-sm text-muted-foreground">
                    Khám phá và sử dụng lửa, sống trong hang động hoặc lều tranh đơn sơ.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Tri thức nguyên thủy:</h4>
                  <p className="text-sm text-muted-foreground">
                    Kiến thức về thiên nhiên, thời tiết, động thực vật được truyền miệng qua các thế hệ.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quan hệ sản xuất */}
            <Card className="border-slate-200 bg-slate-50/50">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900">Quan hệ sản xuất</CardTitle>
                <CardDescription>Cấu trúc xã hội và quan hệ giai cấp</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Sở hữu chung:</h4>
                  <p className="text-sm text-muted-foreground">
                    Không có tài sản tư nhân, mọi thứ thuộc về cộng đồng bộ tộc.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Phân công theo giới tính:</h4>
                  <p className="text-sm text-muted-foreground">
                    Nam giới săn bắt, nữ giới hái lượm và chăm sóc con cái, người già truyền đạt kinh nghiệm.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Tổ chức bộ tộc:</h4>
                  <p className="text-sm text-muted-foreground">
                    Sống theo nhóm máu, có thủ lĩnh được bầu chọn dựa trên kinh nghiệm và uy tín.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Không có giai cấp:</h4>
                  <p className="text-sm text-muted-foreground">
                    Chưa có sự phân hóa giàu nghèo, mọi người đều bình đẳng về địa vị xã hội.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Kiến trúc thượng tầng */}
            <Card className="border-gray-200 bg-gray-50/50">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">Kiến trúc thượng tầng</CardTitle>
                <CardDescription>Tư tưởng và văn hóa chi phối</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Tín ngưỡng nguyên thủy:</h4>
                  <p className="text-sm text-muted-foreground">
                    Thờ cúng tổ tiên, thần linh thiên nhiên, động vật totem của bộ tộc.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Nghệ thuật hang động:</h4>
                  <p className="text-sm text-muted-foreground">
                    Vẽ tranh trên vách đá mô tả cảnh săn bắt, động vật và nghi lễ tôn giáo.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Ngôn ngữ và truyền thống:</h4>
                  <p className="text-sm text-muted-foreground">
                    Phát triển ngôn ngữ nói, truyền đạt kiến thức qua câu chuyện và bài hát.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Luật tục bộ tộc:</h4>
                  <p className="text-sm text-muted-foreground">
                    Quy tắc sống chung dựa trên tập tục, kinh nghiệm và sự đồng thuận của cộng đồng.
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
            <Card className="bg-gradient-to-r from-stone-50 to-slate-50 border-stone-200">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-stone-900">Nghề danh giá trong giai đoạn</CardTitle>
                <CardDescription className="text-lg">
                  Những vai trò được cộng đồng bộ tộc tôn trọng và có uy tín cao
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-stone-200 text-stone-900 rounded-full flex items-center justify-center font-bold text-lg">
                        1
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-stone-900 mb-2">Thủ lĩnh bộ tộc</h3>
                        <p className="text-muted-foreground">
                          Người có kinh nghiệm săn bắt, am hiểu địa hình và có khả năng lãnh đạo, tổ chức các hoạt động
                          của bộ tộc.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-stone-200 text-stone-900 rounded-full flex items-center justify-center font-bold text-lg">
                        2
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-stone-900 mb-2">Thầy cúng / Pháp sư</h3>
                        <p className="text-muted-foreground">
                          Người được cho là có khả năng giao tiếp với thần linh, chữa bệnh bằng phép thuật và chủ trì
                          các nghi lễ.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-slate-200 text-slate-900 rounded-full flex items-center justify-center font-bold text-lg">
                        3
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">Thợ chế tác công cụ</h3>
                        <p className="text-muted-foreground">
                          Người có kỹ năng đẽo gọt đá, chế tạo công cụ săn bắt và dụng cụ sinh hoạt cho cả bộ tộc.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-slate-200 text-slate-900 rounded-full flex items-center justify-center font-bold text-lg">
                        4
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">Thợ săn giỏi</h3>
                        <p className="text-muted-foreground">
                          Những người có kỹ năng săn bắt xuất sắc, am hiểu thói quen động vật và đảm bảo thức ăn cho
                          cộng đồng.
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
                  Tại sao những vai trò này lại có uy tín cao trong xã hội nguyên thủy?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold mb-3">Công cụ sản xuất thô sơ</h4>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    Với công cụ đá đơn giản, khả năng sản xuất thấp, việc sinh tồn phụ thuộc hoàn toàn vào kỹ năng cá
                    nhân và kinh nghiệm. Những người có kỹ năng đặc biệt trở thành không thể thiếu cho sự tồn tại của
                    cộng đồng.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Nhu cầu tổ chức và bảo vệ</h4>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    Cuộc sống đầy nguy hiểm với thú dữ và thiên tai đòi hỏi sự tổ chức chặt chẽ. Thủ lĩnh có kinh nghiệm
                    và khả năng ra quyết định nhanh chóng trở thành yếu tố quyết định sự sống còn của bộ tộc.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Tâm lý tôn giáo nguyên thủy</h4>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    Trước những hiện tượng thiên nhiên không thể giải thích, con người nguyên thủy tin vào thần linh.
                    Những người được cho là có khả năng giao tiếp với thế giới siêu nhiên được tôn kính và có ảnh hưởng
                    lớn.
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
              <Link href="/timeline/chiem-huu-no-le">Giai đoạn tiếp theo →</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
