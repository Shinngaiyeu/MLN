import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-accent/10" />
        <div className="absolute inset-0 bg-[url('/historical-timeline-collage-showing-evolution-of-w.jpg')] bg-cover bg-center opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-4 text-center">
          <div className="mb-8">
            <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              Duy vật lịch sử • Phân tích nghề nghiệp
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 text-balance leading-tight">
              Sự thay Đổi Vị thế nghề nghiệp
              <span className="block text-primary">qua các thời kỳ</span>
            </h1>
          </div>

          <div className="max-w-3xl mx-auto space-y-6 mb-12">
            <p className="text-xl md:text-2xl text-muted-foreground text-pretty leading-relaxed">
              Khám phá sự phát triển của các nghề nghiệp qua <strong>sáu giai đoạn lịch sử</strong>: từ xã hội nguyên
              thủy, chiếm hữu nô lệ, phong kiến, thuộc địa, bao cấp đến thời đại công nghệ số hiện tại.
            </p>
            <p className="text-lg text-muted-foreground text-pretty">
              Hiểu rõ mối quan hệ giữa lực lượng sản xuất, quan hệ sản xuất và sự thay đổi cơ cấu nghề nghiệp theo quy
              luật khách quan của lịch sử.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/timeline">Khám phá Timeline Lịch sử</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent"
            >
              <Link href="/bai-hoc">Xem Video Bài học</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent"
            >
              <Link href="/quiz">Kiểm tra kiến thức</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {[
              { period: "Nguyên thủy", icon: "🪨", color: "bg-stone-100 text-stone-800" },
              { period: "Nô lệ", icon: "🏺", color: "bg-amber-100 text-amber-800" },
              { period: "Phong kiến", icon: "📜", color: "bg-orange-100 text-orange-800" },
              { period: "Thuộc địa", icon: "🚢", color: "bg-blue-100 text-blue-800" },
              { period: "Bao cấp", icon: "🏭", color: "bg-red-100 text-red-800" },
              { period: "Hiện đại", icon: "💻", color: "bg-green-100 text-green-800" },
            ].map((item, index) => (
              <div
                key={index}
                className={`${item.color} p-3 rounded-lg text-center backdrop-blur-sm border border-white/20`}
              >
                <div className="text-2xl mb-1">{item.icon}</div>
                <div className="text-xs font-medium">{item.period}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/marxist-historical-materialism-diagram-showing.jpg')] bg-cover bg-center opacity-5" />
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-card-foreground mb-8">Phương pháp tiếp cận</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              Sử dụng phương pháp duy vật lịch sử để phân tích sự phát triển nghề nghiệp
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <CardTitle className="text-2xl text-primary">Lực lượng sản xuất</CardTitle>
                <CardDescription className="text-base">Công cụ và con người lao động</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Phân tích công cụ lao động, trình độ khoa học kỹ thuật và con người lao động trong từng giai đoạn lịch
                  sử.
                </p>
                <div className="mt-4 p-3 bg-primary/5 rounded-lg">
                  <p className="text-sm text-primary font-medium">
                    Ví dụ: Từ công cụ đá → đồng thau → sắt → máy móc → AI
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-secondary/10 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <CardTitle className="text-2xl text-secondary-foreground">Quan hệ sản xuất</CardTitle>
                <CardDescription className="text-base">Cấu trúc xã hội và giai cấp</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Nghiên cứu mối quan hệ giữa các tầng lớp xã hội và cách thức tổ chức sản xuất trong từng thời kỳ.
                </p>
                <div className="mt-4 p-3 bg-secondary/5 rounded-lg">
                  <p className="text-sm text-secondary-foreground font-medium">
                    Ví dụ: Bộ tộc → Nô lệ → Phong kiến → Tư bản
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-accent/10 hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <CardTitle className="text-2xl text-accent-foreground">Kiến trúc thượng tầng</CardTitle>
                <CardDescription className="text-base">Tư tưởng và văn hóa</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Tìm hiểu tư tưởng, văn hóa và hệ thống giá trị chi phối việc đánh giá nghề nghiệp trong mỗi thời kỳ.
                </p>
                <div className="mt-4 p-3 bg-accent/5 rounded-lg">
                  <p className="text-sm text-accent-foreground font-medium">
                    Ví dụ: Tín ngưỡng → Tôn giáo → Nho giáo → Khoa học
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-muted/50 to-accent/10 p-8 rounded-2xl border">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Quy luật phát triển</h3>
              <p className="text-muted-foreground">Lực lượng sản xuất quyết định quan hệ sản xuất</p>
            </div>
            <div className="flex items-center justify-center space-x-4 text-center">
              <div className="bg-primary/10 p-4 rounded-lg flex-1">
                <div className="text-3xl mb-2">⚒️</div>
                <p className="font-semibold text-primary">Công cụ phát triển</p>
              </div>
              <div className="text-2xl text-primary">→</div>
              <div className="bg-secondary/10 p-4 rounded-lg flex-1">
                <div className="text-3xl mb-2">👥</div>
                <p className="font-semibold text-secondary-foreground">Xã hội thay đổi</p>
              </div>
              <div className="text-2xl text-primary">→</div>
              <div className="bg-accent/10 p-4 rounded-lg flex-1">
                <div className="text-3xl mb-2">💼</div>
                <p className="font-semibold text-accent-foreground">Nghề mới xuất hiện</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-muted/30 via-background to-accent/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Tính năng nổi bật</h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              Trải nghiệm học tập tương tác và toàn diện với nhiều hình ảnh minh họa
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <CardTitle className="text-2xl text-blue-900">Timeline Tương tác</CardTitle>
                <CardDescription className="text-blue-700">6 giai đoạn lịch sử chi tiết</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-blue-800 leading-relaxed mb-4">
                  Khám phá 6 giai đoạn lịch sử từ nguyên thủy đến hiện đại với giao diện trực quan và hình ảnh minh họa
                  phong phú.
                </p>
                <div className="bg-blue-200/50 p-3 rounded-lg">
                  <p className="text-sm text-blue-900 font-medium">✨ Hơn 20 hình ảnh lịch sử</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <CardTitle className="text-2xl text-green-900">Quiz Kiểm tra</CardTitle>
                <CardDescription className="text-green-700">Kiểm tra kiến thức của bạn</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-green-800 leading-relaxed mb-4">
                  Kiểm tra kiến thức với 10 câu hỏi trắc nghiệm về lịch sử phát triển nghề nghiệp qua các thời kỳ.
                </p>
                <div className="bg-green-200/50 p-3 rounded-lg">
                  <p className="text-sm text-green-900 font-medium">🧠 Không giới hạn thời gian</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <CardTitle className="text-2xl text-purple-900">Lý thuyết Chuyên sâu</CardTitle>
                <CardDescription className="text-purple-700">Phương pháp duy vật lịch sử</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-purple-800 leading-relaxed mb-4">
                  Tìm hiểu phương pháp duy vật lịch sử và ứng dụng vào phân tích sự phát triển nghề nghiệp qua các thời
                  kỳ.
                </p>
                <div className="bg-purple-200/50 p-3 rounded-lg">
                  <p className="text-sm text-purple-900 font-medium">📚 Công cụ sản xuất chi tiết</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/students-studying-historical-timeline-in-modern.jpg')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-balance">Bắt đầu hành trình khám phá</h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 text-pretty leading-relaxed">
            Tìm hiểu cách các nghề nghiệp phát triển và thay đổi theo từng giai đoạn lịch sử với hình ảnh minh họa phong
            phú
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              variant="secondary"
              size="lg"
              className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/timeline">Xem Timeline</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/quiz">Làm Quiz Kiểm tra</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/ly-luan">Tìm hiểu Lý luận</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
