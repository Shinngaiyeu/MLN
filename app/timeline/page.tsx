import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const timelinePeriods = [
  {
    id: "nguyen-thuy",
    title: "Giai đoạn Công Xã Nguyên thủy (Hay Giai đoạn Cộng Sản Nguyên Thủy)",
    period: "Trước thế kỷ 10 TCN",
    description: "Xã hội săn bắt hái lượm, công cụ đá. Nghề danh giá: Thủ lĩnh bộ tộc, thầy cúng.",
    keyFeatures: ["Công cụ đá", "Săn bắt hái lượm", "Tổ chức bộ tộc"],
    image: "/primitive-society-stone-tools.jpg",
    bgColor: "bg-gradient-to-br from-stone-50 to-slate-50",
    borderColor: "border-stone-200",
    accentColor: "text-stone-600",
  },
  {
    id: "chiem-huu-no-le",
    title: "Giai đoạn Chiếm hữu nô lệ",
    period: "Thế kỷ 10 TCN - 10 SCN",
    description: "Nông nghiệp phát triển, phân hóa giai cấp. Nghề danh giá: Vua chúa, quan lại, thầy tu.",
    keyFeatures: ["Công cụ đồng thau", "Nông nghiệp tưới tiêu", "Phân hóa giai cấp"],
    image: "/slave-society-bronze-tools.jpg",
    bgColor: "bg-gradient-to-br from-amber-50 to-yellow-50",
    borderColor: "border-amber-200",
    accentColor: "text-amber-600",
  },
  {
    id: "phong-kien",
    title: "Giai đoạn Phong kiến",
    period: "10 - 1858",
    description: "Xã hội nông nghiệp với quan hệ địa chủ - nông dân. Nghề danh giá: Quan lại, nho sĩ.",
    keyFeatures: ["Nông nghiệp thủ công", "Tư tưởng Nho giáo", "Hệ thống quan lại"],
    image: "/feudal-period-scholars-and-officials.jpg",
    bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
    borderColor: "border-orange-200",
    accentColor: "text-orange-600",
  },
  {
    id: "thuoc-dia",
    title: "Giai đoạn Thuộc địa / Đầu tư bản",
    period: "1858 - 1945",
    description: "Tiếp xúc với công nghiệp phương Tây, phát triển thương nghiệp. Nghề danh giá: Buôn bán, thông ngôn.",
    keyFeatures: ["Kinh tế hàng hóa", "Giao thương quốc tế", "Trung gian ngôn ngữ"],
    image: "/colonial-period-merchants-and-interpreters.jpg",
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
    borderColor: "border-blue-200",
    accentColor: "text-blue-600",
  },
  {
    id: "bao-cap",
    title: "Giai đoạn Bao cấp",
    period: "1945 - 1986",
    description: "Công nghiệp cơ bản, kế hoạch hóa tập trung. Nghề danh giá: Cán bộ nhà nước, kỹ sư.",
    keyFeatures: ["Sở hữu nhà nước", "Kế hoạch hóa", "Công nghiệp nặng"],
    image: "/subsidized-period-engineers-and-officials.jpg",
    bgColor: "bg-gradient-to-br from-red-50 to-pink-50",
    borderColor: "border-red-200",
    accentColor: "text-red-600",
  },
  {
    id: "hien-dai",
    title: "Giai đoạn Hiện đại - Công nghệ số",
    period: "1986 - Hiện tại",
    description: "Công nghệ thông tin, AI, toàn cầu hóa. Nghề danh giá: Lập trình viên, chuyên gia dữ liệu.",
    keyFeatures: ["Kinh tế tri thức", "Công nghệ số", "Toàn cầu hóa"],
    image: "/modern-period-programmers-and-data-scientists.jpg",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
    borderColor: "border-green-200",
    accentColor: "text-green-600",
  },
]

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20 bg-gradient-to-br from-background via-muted/20 to-accent/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-flowing-lines-representing-historical-pro.jpg')] bg-cover bg-center opacity-5" />
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 text-balance">
            Timeline các thời kỳ lịch sử
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
            Khám phá sự phát triển của các nghề nghiệp qua sáu giai đoạn chính trong lịch sử nhân loại và Việt Nam
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {timelinePeriods.map((period) => (
              <span
                key={period.id}
                className="px-3 py-1 bg-card/80 backdrop-blur-sm rounded-full text-sm text-muted-foreground border"
              >
                {period.period}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary/20 via-primary to-primary/20 h-full hidden lg:block" />

            <div className="space-y-20">
              {timelinePeriods.map((period, index) => (
                <div key={period.id} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg z-10 hidden lg:block" />

                  <div
                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                      index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    {/* Content */}
                    <div className={`${index % 2 === 0 ? "lg:order-1" : "lg:order-2"}`}>
                      <Card
                        className={`${period.bgColor} ${period.borderColor} border-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]`}
                      >
                        <CardHeader className="pb-4">
                          <div className="flex items-center justify-between mb-3">
                            <span
                              className={`text-sm font-semibold ${period.accentColor} bg-background/90 px-4 py-2 rounded-full shadow-sm`}
                            >
                              {period.period}
                            </span>
                          </div>
                          <CardTitle className="text-2xl md:text-3xl font-bold text-card-foreground mb-2">
                            {period.title}
                          </CardTitle>
                          <CardDescription className="text-base md:text-lg text-muted-foreground leading-relaxed">
                            {period.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-6">
                            <div>
                              <h4 className="font-semibold text-card-foreground mb-3 text-lg">Đặc điểm chính:</h4>
                              <ul className="space-y-2">
                                {period.keyFeatures.map((feature, idx) => (
                                  <li key={idx} className="flex items-center text-muted-foreground">
                                    <div
                                      className={`w-3 h-3 bg-gradient-to-r from-primary to-primary/60 rounded-full mr-4 flex-shrink-0`}
                                    />
                                    <span className="text-sm md:text-base">{feature}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <Button
                              asChild
                              className="w-full shadow-md hover:shadow-lg transition-all duration-300"
                              size="lg"
                            >
                              <Link href={`/timeline/${period.id}`}>Xem chi tiết giai đoạn</Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className={`${index % 2 === 0 ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="aspect-square bg-muted rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                        <div
                          className="w-full h-full bg-cover bg-center hover:scale-110 transition-transform duration-700"
                          style={{ backgroundImage: `url('${period.image}')` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-card via-muted/10 to-accent/5 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-card-foreground mb-6">Tiếp tục khám phá</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            Tìm hiểu sâu hơn về lý thuyết duy vật lịch sử và ứng dụng trong phân tích nghề nghiệp
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href="/ly-luan">Lý luận Duy vật lịch sử</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent"
            >
              <Link href="/phan-tich">Phân tích & Thảo luận</Link>
            </Button>
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/quiz">Kiểm tra kiến thức</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
