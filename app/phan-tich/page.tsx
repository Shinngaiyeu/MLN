import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function PhanTichPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Phân tích & Thảo luận</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Tìm hiểu sâu hơn về vai trò của lực lượng sản xuất trong việc định hình nghề nghiệp qua các thời kỳ
          </p>
        </div>
      </section>

      {/* Main Analysis Article */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="border-2 border-indigo-200 bg-indigo-50/30">
            <CardHeader>
              <CardTitle className="text-3xl text-indigo-900">
                Vai trò của lực lượng sản xuất trong thay đổi nghề nghiệp
              </CardTitle>
              <CardDescription className="text-lg">
                Phân tích chi tiết về mối quan hệ giữa công nghệ và sự phát triển nghề nghiệp
              </CardDescription>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none">
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  Trong suốt lịch sử phát triển của nhân loại, <strong>lực lượng sản xuất</strong> luôn đóng vai trò
                  quyết định trong việc định hình cấu trúc nghề nghiệp của xã hội. Từ xã hội nông nghiệp thủ công đến
                  thời đại công nghệ số hiện tại, mỗi bước tiến của khoa học kỹ thuật đều tạo ra những thay đổi sâu sắc
                  trong thế giới nghề nghiệp.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  1. Lực lượng sản xuất - Động lực thay đổi căn bản
                </h3>
                <p>
                  Theo quan điểm duy vật lịch sử, lực lượng sản xuất bao gồm công cụ lao động, đối tượng lao động và con
                  người lao động. Khi lực lượng sản xuất phát triển, nó không chỉ thay đổi cách thức sản xuất mà còn tạo
                  ra nhu cầu về những kỹ năng và nghề nghiệp hoàn toàn mới.
                </p>
                <p>
                  Ví dụ rõ ràng nhất là sự xuất hiện của máy tính và internet. Trước đây, không ai có thể tưởng tượng
                  được nghề "lập trình viên" hay "chuyên gia dữ liệu". Nhưng khi công nghệ thông tin phát triển, những
                  nghề này không chỉ xuất hiện mà còn trở thành những nghề có thu nhập cao và được xã hội đánh giá cao.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  2. Từ nông nghiệp đến công nghệ số: Hành trình biến đổi
                </h3>
                <p>
                  Trong xã hội phong kiến, khi lực lượng sản xuất chủ yếu dựa vào nông nghiệp thủ công, những nghề được
                  trọng dụng là quan lại và nho sĩ - những người có khả năng đọc viết và quản lý xã hội. Điều này hoàn
                  toàn hợp lý vì trong bối cảnh đó, tri thức về văn chương và quản lý là khan hiếm và cần thiết.
                </p>
                <p>
                  Khi thực dân Pháp đưa công nghiệp và thương mại vào Việt Nam, lực lượng sản xuất thay đổi mạnh mẽ.
                  Giao thương quốc tế phát triển tạo ra nhu cầu về thông ngôn, thư ký và thương gia. Những người có khả
                  năng làm cầu nối giữa hai nền văn hóa trở thành những nghề "hot" của thời đại.
                </p>
                <p>
                  Thời kỳ bao cấp với việc ưu tiên phát triển công nghiệp nặng đã tạo ra nhu cầu lớn về kỹ sư và cán bộ
                  quản lý nhà nước. Đây là hệ quả tự nhiên của việc nhà nước đóng vai trò trung tâm trong nền kinh tế kế
                  hoạch hóa.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  3. Thời đại công nghệ số: Cuộc cách mạng nghề nghiệp
                </h3>
                <p>
                  Hiện tại, chúng ta đang chứng kiến một cuộc cách mạng nghề nghiệp chưa từng có. Trí tuệ nhân tạo, big
                  data, và internet of things không chỉ tạo ra những nghề mới mà còn thay đổi căn bản cách thức làm việc
                  của hầu hết các nghề truyền thống.
                </p>
                <p>
                  Lập trình viên không còn chỉ là những người viết code, mà trở thành những "kiến trúc sư" của thế giới
                  số. Content creator và digital marketer xuất hiện như những nghề hoàn toàn mới, phục vụ nhu cầu giải
                  trí và tiếp thị trong môi trường số hóa.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                  4. Quy luật khách quan và dự báo tương lai
                </h3>
                <p>
                  Việc hiểu rõ mối quan hệ giữa lực lượng sản xuất và nghề nghiệp giúp chúng ta không chỉ giải thích
                  được quá khứ mà còn dự báo được tương lai. Khi AI và automation phát triển mạnh, những nghề đòi hỏi
                  sáng tạo, tương tác con người và giải quyết vấn đề phức tạp sẽ trở nên quan trọng hơn.
                </p>
                <p>
                  Những nghề như AI prompt engineer, chuyên gia năng lượng tái tạo, hay biotech engineer có thể sẽ trở
                  thành những nghề "hot" trong tương lai gần. Điều này không phải do may mắn hay xu hướng tạm thời, mà
                  là kết quả tất yếu của sự phát triển lực lượng sản xuất.
                </p>

                <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">5. Kết luận</h3>
                <p>
                  Lịch sử đã chứng minh rằng không có nghề nào "hot" mãi mãi, cũng như không có nghề nào biến mất hoàn
                  toàn mà không có lý do. Sự thay đổi nghề nghiệp tuân theo quy luật khách quan của sự phát triển lực
                  lượng sản xuất. Hiểu được điều này, chúng ta có thể đưa ra những quyết định nghề nghiệp sáng suốt hơn,
                  không chỉ dựa trên xu hướng tạm thời mà dựa trên sự hiểu biết sâu sắc về quy luật phát triển xã hội.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      



      {/* Navigation */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-card-foreground mb-6">Khám phá thêm</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Tìm hiểu thêm về ứng dụng thực tế cho sinh viên và người lao động
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/sinh-vien">Hướng dẫn Sinh viên</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/ly-luan">Quay lại Lý luận</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
