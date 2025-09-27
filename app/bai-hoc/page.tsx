"use client";

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Play, Clock, BookOpen, Star, Users } from "lucide-react"

// ================== DATA ==================
const videoLessons = [
  {
    id: 1,
    title: "Xã hội Nguyên thủy - Công cụ đá và nghề săn bắt",
    description:
      "Tìm hiểu về các nghề nghiệp đầu tiên trong lịch sử loài người, từ công cụ đá đến các kỹ năng săn bắt cơ bản",
    duration: "04:48",
    views: "12.5K",
    difficulty: "Cơ bản",
    category: "Nguyên thủy",
    thumbnail: "/thumbnail_1.png",
    youtubeUrl: "https://www.youtube.com/watch?v=KMAI1cYv3SM&list=PLPNAu0pGRwlJYtgCE90cfK0p46QlHmlOn&index=2",
  },
  {
    id: 2,
    title: "Xã hội Nô lệ - Thủ công nghiệp và công cụ đồng",
    description:
      "Sự xuất hiện của các nghề thủ công và thương mại, đánh dấu bước chuyển quan trọng trong lịch sử",
    duration: "03:47",
    views: "10.2K",
    difficulty: "Cơ bản",
    category: "Nô lệ",
    thumbnail: "/thumbnail_2.png",
    youtubeUrl: "https://www.youtube.com/watch?v=vJgIwGGyGe0&list=PLPNAu0pGRwlJYtgCE90cfK0p46QlHmlOn&index=3",
  },
  {
    id: 3,
    title: "Thời kỳ Phong kiến - Nông nghiệp và quan lại",
    description:
      "Hệ thống phong kiến và các nghề truyền thống, vai trò của nho sinh trong xã hội Việt Nam",
    duration: "06:22",
    views: "15.8K",
    difficulty: "Trung cấp",
    category: "Phong kiến",
    thumbnail: "/thumbnail_3.png",
    youtubeUrl: "https://www.youtube.com/watch?v=d1KpG4q1q7M&list=PLPNAu0pGRwlJYtgCE90cfK0p46QlHmlOn&index=4",
  },
  {
    id: 4,
    title: "Thời kỳ Thuộc địa - Thương gia và thông ngôn",
    description:
      "Ảnh hưởng của thực dân đến cơ cấu nghề nghiệp và sự ra đời của tầng lớp trí thức mới",
    duration: "04:59",
    views: "13.7K",
    difficulty: "Trung cấp",
    category: "Thuộc địa",
    thumbnail: "/thumbnail_4.png",
    youtubeUrl: "https://www.youtube.com/watch?v=OO-DUnhvuU8&list=PLPNAu0pGRwlJYtgCE90cfK0p46QlHmlOn&index=5",
  },
  {
    id: 5,
    title: "Thời kỳ Bao cấp - Kỹ sư và cán bộ",
    description:
      "Công nghiệp hóa và các nghề kỹ thuật trong thời kỳ xây dựng chủ nghĩa xã hội",
    duration: "07:07",
    views: "11.4K",
    difficulty: "Nâng cao",
    category: "Bao cấp",
    thumbnail: "/thumbnail_5.png",
    youtubeUrl: "https://www.youtube.com/watch?v=ZKpH7Qeg6EI&list=PLPNAu0pGRwlJYtgCE90cfK0p46QlHmlOn&index=6",
  },
  {
    id: 6,
    title: "Thời đại Hiện đại - Lập trình viên và Data Scientist",
    description:
      "Khám phá nghề nghiệp trong thời đại công nghệ thông tin và trí tuệ nhân tạo",
    duration: "05:35",
    views: "18.9K",
    difficulty: "Nâng cao",
    category: "Hiện đại",
    thumbnail: "/thumbnail_6.png",
    youtubeUrl: "https://www.youtube.com/watch?v=V97efKwPGGo&list=PLPNAu0pGRwlJYtgCE90cfK0p46QlHmlOn&index=7",
  },
]

// ================== HELPERS ==================
const categoryColors: Record<string, string> = {
  "Nguyên thủy": "from-stone-400 to-stone-600",
  "Nô lệ": "from-amber-400 to-amber-600",
  "Phong kiến": "from-orange-400 to-orange-600",
  "Thuộc địa": "from-blue-400 to-blue-600",
  "Bao cấp": "from-red-400 to-red-600",
  "Hiện đại": "from-green-400 to-green-600",
}

const difficultyColors: Record<string, string> = {
  "Cơ bản": "bg-green-100 text-green-800",
  "Trung cấp": "bg-yellow-100 text-yellow-800",
  "Nâng cao": "bg-red-100 text-red-800",
}

const getYouTubeVideoId = (url: string) => {
  const regExp =
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/
  const match = url.match(regExp)
  return match && match[7] && match[7].length === 11 ? match[7] : ""
}

// ================== COMPONENT ==================
export default function BaiHocPage() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navigation />

      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-sm text-indigo-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <BookOpen className="w-5 h-5" />
            Bài học Video
          </div>
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Bài học Video
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Khám phá hành trình phát triển nghề nghiệp qua 6 giai đoạn lịch sử
            với video bài học sinh động và dễ hiểu
          </p>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoLessons.map((video, index) => (
              <Dialog key={video.id}>
                <DialogTrigger asChild>
                  <Card className="group overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl bg-white border-0 shadow-lg">
                    {/* Thumbnail */}
                    <div className="relative overflow-hidden">
                      <div className="aspect-video relative">
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${categoryColors[video.category]} opacity-20`}
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 flex items-center justify-center transition-all">
                          <div className="w-20 h-20 bg-white/95 rounded-full flex items-center justify-center shadow-2xl transition-transform group-hover:scale-110">
                            <Play className="w-8 h-8 text-slate-700 ml-1" />
                          </div>
                        </div>
                        <div className="absolute top-3 right-3 bg-black/80 text-white px-3 py-1 rounded-full text-sm flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          {video.duration}
                        </div>

                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-slate-800 mb-3 leading-tight group-hover:text-indigo-600 transition-colors">
                        {video.title}
                      </h3>

                      
                    </div>
                  </Card>
                </DialogTrigger>

                {/* Modal */}
                <DialogContent 
                  className="p-0 overflow-hidden bg-black z-[9999]" 
                  style={{ 
                    maxWidth: '90vw', 
                    width: '90vw', 
                    height: '85vh',
                  }}
                >
                  <div className="relative w-full h-full bg-black rounded-lg shadow-2xl overflow-hidden">
                    <div className="w-full h-full bg-black">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${getYouTubeVideoId(
                          video.youtubeUrl
                        )}?autoplay=1&rel=0&modestbranding=1`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

    
    </div>
  )
}
