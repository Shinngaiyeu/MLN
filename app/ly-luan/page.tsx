import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function LyLuanPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Lý luận Duy vật lịch sử</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Hiểu rõ các khái niệm cơ bản và mối quan hệ biện chứng trong phương pháp luận Mác - Lênin
          </p>
        </div>
      </section>

      {/* Core Concepts */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ba khái niệm cơ bản</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nền tảng lý thuyết để hiểu sự phát triển xã hội và nghề nghiệp
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Lực lượng sản xuất */}
            <Card className="border-blue-200 bg-blue-50/50 h-full">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 text-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <CardTitle className="text-2xl text-blue-900 text-center">Lực lượng sản xuất</CardTitle>
                <CardDescription className="text-center">Productive Forces</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Định nghĩa:</h4>
                  <p className="text-sm text-muted-foreground">
                    Tổng hợp các yếu tố vật chất và con người tham gia vào quá trình sản xuất.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Bao gồm:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Công cụ lao động (máy móc, thiết bị)</li>
                    <li>• Đối tượng lao động (nguyên liệu, tài nguyên)</li>
                    <li>• Con người lao động (kỹ năng, tri thức)</li>
                    <li>• Khoa học công nghệ</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Vai trò:</h4>
                  <p className="text-sm text-muted-foreground">
                    Yếu tố quyết định, động lực chính thúc đẩy sự phát triển xã hội.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Quan hệ sản xuất */}
            <Card className="border-green-200 bg-green-50/50 h-full">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 text-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <CardTitle className="text-2xl text-green-900 text-center">Quan hệ sản xuất</CardTitle>
                <CardDescription className="text-center">Production Relations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Định nghĩa:</h4>
                  <p className="text-sm text-muted-foreground">
                    Mối quan hệ giữa con người trong quá trình sản xuất vật chất.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Bao gồm:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Quan hệ sở hữu tư liệu sản xuất</li>
                    <li>• Quan hệ trong quá trình sản xuất</li>
                    <li>• Quan hệ phân phối sản phẩm</li>
                    <li>• Quan hệ trao đổi, tiêu dùng</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Vai trò:</h4>
                  <p className="text-sm text-muted-foreground">
                    Quyết định cấu trúc giai cấp và tổ chức xã hội, ảnh hưởng đến nghề nghiệp.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Kiến trúc thượng tầng */}
            <Card className="border-purple-200 bg-purple-50/50 h-full">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 text-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <CardTitle className="text-2xl text-purple-900 text-center">Kiến trúc thượng tầng</CardTitle>
                <CardDescription className="text-center">Superstructure</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-900 mb-2">Định nghĩa:</h4>
                  <p className="text-sm text-muted-foreground">
                    Hệ thống các quan điểm, tư tưởng và thể chế chính trị - xã hội.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-900 mb-2">Bao gồm:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Nhà nước, pháp luật</li>
                    <li>• Tư tưởng, đạo đức</li>
                    <li>• Tôn giáo, triết học</li>
                    <li>• Văn học, nghệ thuật</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-900 mb-2">Vai trò:</h4>
                  <p className="text-sm text-muted-foreground">
                    Phản ánh và tác động ngược lại cơ sở hạ tầng, định hình giá trị nghề nghiệp.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Production Tools Through History */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Công cụ sản xuất chính qua các thời kỳ</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Sự phát triển của công cụ sản xuất quyết định đặc điểm nghề nghiệp của mỗi thời đại
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Primitive Society Tools */}
            <Card className="border-stone-200 bg-stone-50/50">
              <CardHeader>
                <CardTitle className="text-2xl text-stone-900 flex items-center gap-3">
                  <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                    </svg>
                  </div>
                  Xã hội Nguyên thủy
                </CardTitle>
                <CardDescription>Công cụ đá và săn bắt hái lượm</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Công cụ cơ bản:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Rìu đá, dao đá</li>
                    <li>• Giáo, cung tên</li>
                    <li>• Lưới đánh cá thô sơ</li>
                    <li>• Lửa và hang động</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Kỹ thuật sản xuất:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Đẽo gọt đá</li>
                    <li>• Săn bắt tập thể</li>
                    <li>• Hái lượm quả rừng</li>
                    <li>• Chế tạo đồ gốm đầu tiên</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 mb-2">Tác động đến nghề nghiệp:</h4>
                  <p className="text-sm text-muted-foreground">
                    Công cụ thô sơ → Phân công lao động đơn giản theo giới tính và tuổi tác. 
                    Thợ săn, người hái lượm, thầy cúng là những "chuyên môn" đầu tiên.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Slave Society Tools */}
            <Card className="border-amber-200 bg-amber-50/50">
              <CardHeader>
                <CardTitle className="text-2xl text-amber-900 flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                    </svg>
                  </div>
                  Xã hội Chiếm hữu nô lệ
                </CardTitle>
                <CardDescription>Công cụ đồng thau và nông nghiệp</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">Công cụ kim loại:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Rìu, dao đồng thau</li>
                    <li>• Cày đồng, cuốc đồng</li>
                    <li>• Vũ khí chiến tranh</li>
                    <li>• Đồ trang sức kim loại</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">Kỹ thuật nông nghiệp:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Trồng lúa nước có hệ thống</li>
                    <li>• Chăn nuôi gia súc</li>
                    <li>• Thủy lợi cơ bản</li>
                    <li>• Dệt vải và gốm sứ</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">Tác động đến nghề nghiệp:</h4>
                  <p className="text-sm text-muted-foreground">
                    Công cụ kim loại → Xuất hiện thợ rèn, thợ gốm chuyên nghiệp. 
                    Nông dân, chiến binh, thầy cúng, thương gia trở thành các tầng lớp riêng biệt.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Feudal Period Tools - Updated */}
            <Card className="border-orange-200 bg-orange-50/50">
              <CardHeader>
                <CardTitle className="text-2xl text-orange-900 flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                    </svg>
                  </div>
                  Thời kỳ Phong kiến (Trước 1858)
                </CardTitle>
                <CardDescription>Công cụ thủ công và nông nghiệp truyền thống</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Công cụ nông nghiệp:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Cày, bừa, cuốc, liềm sắt</li>
                    <li>• Cối xay, chày giã</li>
                    <li>• Hệ thống thủy lợi phát triển</li>
                    <li>• Trâu bò làm sức kéo</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Công cụ thủ công:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Khung cửi dệt vải</li>
                    <li>• Lò rèn, búa, đe</li>
                    <li>• Bàn thờ, đục, dũa</li>
                    <li>• Thúng, rổ, giỏ tre</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-orange-900 mb-2">Tác động đến nghề nghiệp:</h4>
                  <p className="text-sm text-muted-foreground">
                    Công cụ sắt tinh xảo → Nghề nghiệp dựa vào kỹ năng thủ công cao. 
                    Nông dân, thợ thủ công, quan lại, sĩ phu là những nghề có uy tín.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Colonial Period Tools - Updated */}
            <Card className="border-red-200 bg-red-50/50">
              <CardHeader>
                <CardTitle className="text-2xl text-red-900 flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                    </svg>
                  </div>
                  Thời kỳ Thuộc địa (1858-1945)
                </CardTitle>
                <CardDescription>Máy móc công nghiệp và công nghệ phương Tây</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-red-900 mb-2">Máy móc công nghiệp:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Máy dệt cơ khí</li>
                    <li>• Máy ép cao su</li>
                    <li>• Thiết bị khai thác mỏ</li>
                    <li>• Máy xay xát hiện đại</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-900 mb-2">Phương tiện giao thông:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Đường sắt và tàu hỏa</li>
                    <li>• Tàu thủy hơi nước</li>
                    <li>• Xe hơi và xe máy</li>
                    <li>• Hệ thống bưu điện</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-red-900 mb-2">Tác động đến nghề nghiệp:</h4>
                  <p className="text-sm text-muted-foreground">
                    Công nghệ mới → Xuất hiện công nhân nhà máy, thông ngôn viên, nhân viên đường sắt. 
                    Nghề truyền thống bị thách thức bởi sản xuất công nghiệp.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Subsidized Period Tools - Updated */}
            <Card className="border-green-200 bg-green-50/50">
              <CardHeader>
                <CardTitle className="text-2xl text-green-900 flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  Thời kỳ Bao cấp (1975-1986)
                </CardTitle>
                <CardDescription>Công nghiệp nặng và kế hoạch hóa tập trung</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Công nghiệp nặng:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Lò cao luyện thép</li>
                    <li>• Máy móc sản xuất xi măng</li>
                    <li>• Thiết bị khai thác than</li>
                    <li>• Máy dệt công nghiệp</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Công nghệ quản lý:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Hệ thống kế hoạch hóa</li>
                    <li>• Máy tính cơ khí đầu tiên</li>
                    <li>• Hệ thống phân phối tập trung</li>
                    <li>• Công nghệ sản xuất hàng loạt</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900 mb-2">Tác động đến nghề nghiệp:</h4>
                  <p className="text-sm text-muted-foreground">
                    Công nghiệp hóa → Kỹ sư, công nhân kỹ thuật, cán bộ quản lý nhà nước trở thành nghề "hot". 
                    Nông nghiệp tập thể hóa tạo ra nghề quản lý hợp tác xã.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Modern Period Tools - Updated */}
            <Card className="border-blue-200 bg-blue-50/50">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-900 flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  Thời kỳ Hiện đại (1986-nay)
                </CardTitle>
                <CardDescription>Công nghệ thông tin và cách mạng số</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Công nghệ thông tin:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Máy tính cá nhân và laptop</li>
                    <li>• Internet và mạng xã hội</li>
                    <li>• Smartphone và ứng dụng di động</li>
                    <li>• Cloud computing và big data</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Công nghệ mới nổi:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Trí tuệ nhân tạo (AI)</li>
                    <li>• Blockchain và cryptocurrency</li>
                    <li>• Internet of Things (IoT)</li>
                    <li>• Robot và tự động hóa</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-900 mb-2">Tác động đến nghề nghiệp:</h4>
                  <p className="text-sm text-muted-foreground">
                    Cách mạng số → Lập trình viên, chuyên gia dữ liệu, digital marketer trở thành nghề "hot". 
                    Nhiều nghề truyền thống bị thay thế bởi AI và tự động hóa.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Mối quan hệ biện chứng</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Sự tương tác và ảnh hưởng lẫn nhau giữa các yếu tố trong sự phát triển xã hội
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-xl text-primary flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    Lực lượng sản xuất quyết định quan hệ sản xuất
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Khi công cụ sản xuất phát triển, nó buộc quan hệ sản xuất phải thay đổi để phù hợp.
                  </p>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="text-sm text-primary font-medium">
                      Ví dụ: Máy móc công nghiệp → Xuất hiện giai cấp công nhân và tư bản gia, thay thế quan hệ phong kiến.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
