import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function SinhVienPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Sinh viên & Nghề hot
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Ứng dụng thực tiễn lý thuyết duy vật lịch sử trong việc lựa chọn và định hướng nghề nghiệp
          </p>
        </div>
      </section>

      {/* Reality Check */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Thực tế vs Tâm lý đám đông</h2>
            <p className="text-lg text-muted-foreground">
              Phân biệt giữa nhu cầu thực sự của xã hội và xu hướng tạm thời
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <CardTitle className="text-2xl text-red-900 flex items-center">
                  <svg className="w-8 h-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                  Nghề "chạy theo trào lưu"
                </CardTitle>
                <CardDescription>Những lựa chọn dựa trên tâm lý đám đông</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-white/70 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">Đặc điểm:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Xuất hiện đột ngột, "hot" trong thời gian ngắn</li>
                    <li>• Được truyền thông thổi phồng quá mức</li>
                    <li>• Nhiều người đổ xô theo học mà không hiểu rõ</li>
                    <li>• Thiếu nền tảng lý thuyết vững chắc</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-red-100/70 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">Rủi ro:</h4>
                  <p className="text-sm text-muted-foreground">
                    Thị trường nhanh chóng bão hòa, cạnh tranh khốc liệt, nhiều người thất nghiệp khi "bong bóng" vỡ.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="text-2xl text-green-900 flex items-center">
                  <svg className="w-8 h-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Nghề "xã hội cần"
                </CardTitle>
                <CardDescription>Những lựa chọn dựa trên nhu cầu thực tế</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-white/70 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Đặc điểm:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Phát triển từ từ, bền vững theo thời gian</li>
                    <li>• Có nền tảng lý thuyết và thực tiễn vững chắc</li>
                    <li>• Đáp ứng nhu cầu cơ bản của xã hội</li>
                    <li>• Ít bị ảnh hưởng bởi biến động ngắn hạn</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-100/70 rounded-lg">
                  <h4 className="font-semibold text-green-900 mb-2">Lợi ích:</h4>
                  <p className="text-sm text-muted-foreground">
                    Cơ hội việc làm ổn định, thu nhập tăng trưởng đều đặn, ít rủi ro thất nghiệp do thay đổi công nghệ.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Career Trends */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Dự báo xu hướng nghề 5-10 năm tới</h2>
            <p className="text-lg text-muted-foreground">Dựa trên phân tích lực lượng sản xuất và nhu cầu xã hội</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-purple-200 bg-purple-50/50">
              <CardHeader>
                <CardTitle className="text-xl text-purple-900">AI & Automation</CardTitle>
                <CardDescription>Trí tuệ nhân tạo và tự động hóa</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="text-sm font-medium">AI Ethics Specialist</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="text-sm font-medium">Human-AI Interaction Designer</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="text-sm font-medium">AI Training Data Curator</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="text-sm font-medium">Automation Process Designer</span>
                  </div>
                </div>
                <div className="p-3 bg-white/70 rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    <strong>Lý do:</strong> AI phát triển mạnh nhưng cần con người giám sát, thiết kế và đảm bảo đạo
                    đức.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="text-xl text-green-900">Green Technology</CardTitle>
                <CardDescription>Công nghệ xanh và bền vững</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-sm font-medium">Solar/Wind Energy Engineer</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-sm font-medium">Carbon Footprint Analyst</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-sm font-medium">Sustainable Materials Scientist</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-sm font-medium">Climate Change Adaptation Planner</span>
                  </div>
                </div>
                <div className="p-3 bg-white/70 rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    <strong>Lý do:</strong> Biến đổi khí hậu và nhu cầu phát triển bền vững tạo ra thị trường lớn.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50/50">
              <CardHeader>
                <CardTitle className="text-xl text-blue-900">Biotechnology</CardTitle>
                <CardDescription>Công nghệ sinh học và y học</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-sm font-medium">Gene Therapy Specialist</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-sm font-medium">Personalized Medicine Developer</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-sm font-medium">Bioinformatics Analyst</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-sm font-medium">Synthetic Biology Engineer</span>
                  </div>
                </div>
                <div className="p-3 bg-white/70 rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    <strong>Lý do:</strong> Dân số già hóa và nhu cầu chăm sóc sức khỏe cá nhân hóa tăng cao.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">So sánh chi tiết</h2>
            <p className="text-lg text-muted-foreground">Bảng so sánh "Nghề xã hội cần" vs "Nghề chạy theo trào lưu"</p>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-4 font-semibold">Tiêu chí</th>
                      <th className="text-left p-4 font-semibold text-green-900">Nghề xã hội cần</th>
                      <th className="text-left p-4 font-semibold text-red-900">Nghề chạy theo trào lưu</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr>
                      <td className="p-4 font-medium">Thời gian phát triển</td>
                      <td className="p-4 text-green-900">5-10 năm, từ từ và ổn định</td>
                      <td className="p-4 text-red-900">6-18 tháng, bùng nổ đột ngột</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="p-4 font-medium">Nền tảng lý thuyết</td>
                      <td className="p-4 text-green-900">Vững chắc, có nghiên cứu khoa học</td>
                      <td className="p-4 text-red-900">Mỏng, dựa trên hype và marketing</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Rào cản gia nhập</td>
                      <td className="p-4 text-green-900">Cao, cần học tập lâu dài</td>
                      <td className="p-4 text-red-900">Thấp, khóa học ngắn hạn</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="p-4 font-medium">Mức độ cạnh tranh</td>
                      <td className="p-4 text-green-900">Vừa phải, tăng dần theo thời gian</td>
                      <td className="p-4 text-red-900">Rất cao, mọi người đổ xô vào</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Thu nhập</td>
                      <td className="p-4 text-green-900">Ổn định, tăng trưởng đều đặn</td>
                      <td className="p-4 text-red-900">Biến động lớn, có thể rất cao hoặc rất thấp</td>
                    </tr>
                    <tr className="bg-muted/30">
                      <td className="p-4 font-medium">Tính bền vững</td>
                      <td className="p-4 text-green-900">Cao, ít bị thay thế</td>
                      <td className="p-4 text-red-900">Thấp, dễ bị công nghệ mới thay thế</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Ví dụ điển hình</td>
                      <td className="p-4 text-green-900">Software Engineer, Data Scientist, UX Designer</td>
                      <td className="p-4 text-red-900">Blockchain Developer, NFT Artist, Crypto Trader</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Practical Advice */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Lời khuyên thực tế</h2>
            <p className="text-lg text-muted-foreground">Cách áp dụng kiến thức vào quyết định nghề nghiệp</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-blue-200 bg-blue-50/50">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900">Cho sinh viên đang chọn ngành</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-200 text-blue-900 rounded-full flex items-center justify-center text-sm font-bold mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">Nghiên cứu nền tảng công nghệ</h4>
                    <p className="text-sm text-muted-foreground">
                      Chọn ngành dựa trên công nghệ cơ bản (AI, biotech, renewable energy) chứ không phải ứng dụng bề
                      mặt.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-200 text-blue-900 rounded-full flex items-center justify-center text-sm font-bold mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">Tìm hiểu nhu cầu dài hạn</h4>
                    <p className="text-sm text-muted-foreground">
                      Phân tích các vấn đề xã hội cần giải quyết trong 10-20 năm tới (già hóa dân số, biến đổi khí hậu).
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-200 text-blue-900 rounded-full flex items-center justify-center text-sm font-bold mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-1">Xây dựng nền tảng vững chắc</h4>
                    <p className="text-sm text-muted-foreground">
                      Tập trung vào toán học, khoa học, tư duy logic thay vì chỉ học công cụ cụ thể.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="text-2xl text-green-900">Cho người đi làm muốn chuyển nghề</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-200 text-green-900 rounded-full flex items-center justify-center text-sm font-bold mt-1">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900 mb-1">Đánh giá kỹ năng chuyển đổi</h4>
                    <p className="text-sm text-muted-foreground">
                      Xem kỹ năng hiện tại có thể ứng dụng vào nghề mới không, tránh bắt đầu từ con số 0.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-200 text-green-900 rounded-full flex items-center justify-center text-sm font-bold mt-1">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900 mb-1">Học thử trước khi quyết định</h4>
                    <p className="text-sm text-muted-foreground">
                      Tham gia khóa học ngắn hạn, làm project cá nhân để kiểm tra sự phù hợp.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-200 text-green-900 rounded-full flex items-center justify-center text-sm font-bold mt-1">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-900 mb-1">Chuyển đổi từ từ</h4>
                    <p className="text-sm text-muted-foreground">
                      Không bỏ việc cũ ngay, làm part-time hoặc freelance nghề mới để tích lũy kinh nghiệm.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-card-foreground mb-6">Tìm hiểu thêm</h2>
          <p className="text-lg text-muted-foreground mb-8">Khám phá thêm tài liệu và nguồn tham khảo</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/tai-lieu">Tài liệu & Trích dẫn</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/phan-tich">Quay lại Phân tích</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
