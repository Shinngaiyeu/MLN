"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, Clock, HelpCircle, Play, RotateCcw } from "lucide-react"
import Link from "next/link"

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

interface QuizResult {
  questionId: number
  selectedAnswer: number
  isCorrect: boolean
  timeSpent: number
}

const questions: Question[] = [
  {
    id: 1,
    question: "Theo chủ nghĩa duy vật lịch sử, yếu tố nào giữ vai trò quyết định trong sự phát triển xã hội?",
    options: [
      "Ý thức xã hội",
      "Kiến trúc thượng tầng", 
      "Lực lượng sản xuất",
      "Tôn giáo và văn hóa"
    ],
    correctAnswer: 2,
    explanation: "Theo chủ nghĩa duy vật lịch sử của Marx, lực lượng sản xuất là yếu tố quyết định sự phát triển xã hội.",
  },
  {
    id: 2,
    question: "Khi LLSX phát triển đến một trình độ mới, sẽ dẫn đến hệ quả nào?",
    options: [
      "Quan hệ sản xuất thay đổi để phù hợp",
      "Kiến trúc thượng tầng không đổi",
      "Nghề nghiệp giữ nguyên vị thế",
      "Xã hội rơi vào khủng hoảng triền miên"
    ],
    correctAnswer: 0,
    explanation: "Khi lực lượng sản xuất phát triển, quan hệ sản xuất phải thay đổi để phù hợp với trình độ phát triển mới.",
  },
  {
    id: 3,
    question: "Trong xã hội phong kiến Việt Nam, nghề nào được tôn vinh nhất?",
    options: [
      "Buôn bán",
      "Thông ngôn",
      "Quan lại, nho sĩ",
      "Công nhân mỏ"
    ],
    correctAnswer: 2,
    explanation: "Trong xã hội phong kiến Việt Nam, quan lại và nho sĩ được tôn vinh cao nhất theo thứ bậc 'sĩ - nông - công - thương'.",
  },
  {
    id: 4,
    question: "Nguyên nhân sâu xa khiến nghề quan lại, trí thức nho học được coi trọng thời phong kiến là gì?",
    options: [
      "Vì có nhiều của cải vật chất",
      "Vì gắn với LLSX công nghiệp",
      "Vì phục vụ bộ máy cai trị phong kiến và phù hợp KTTT Nho giáo",
      "Vì do nhân dân tự nguyện tôn vinh"
    ],
    correctAnswer: 2,
    explanation: "Quan lại và nho sĩ được coi trọng vì họ phục vụ bộ máy cai trị phong kiến và phù hợp với kiến trúc thượng tầng Nho giáo.",
  },
  {
    id: 5,
    question: "Thời thuộc địa, vì sao nghề thông ngôn, thư ký được coi trọng?",
    options: [
      "Vì có nhiều đất đai",
      "Vì gắn với giao thương và bộ máy cai trị của thực dân",
      "Vì xã hội vẫn đề cao Nho giáo",
      "Vì có kỹ năng nông nghiệp giỏi"
    ],
    correctAnswer: 1,
    explanation: "Thông ngôn và thư ký được coi trọng vì họ phục vụ cho giao thương và bộ máy cai trị của thực dân Pháp.",
  },
  {
    id: 6,
    question: "Trong giai đoạn bao cấp, nghề cán bộ nhà nước được tôn vinh vì:",
    options: [
      "Tư duy làm giàu cá nhân",
      "Sở hữu ruộng đất riêng",
      "Nắm quyền phân phối trong nền kinh tế kế hoạch hóa",
      "Có vốn ngoại tệ lớn"
    ],
    correctAnswer: 2,
    explanation: "Trong giai đoạn bao cấp, cán bộ nhà nước được tôn vinh vì họ nắm quyền phân phối trong nền kinh tế kế hoạch hóa tập trung.",
  },
  {
    id: 7,
    question: "Kiến trúc thượng tầng trong thời bao cấp nhấn mạnh tư tưởng nào?",
    options: [
      "Cạnh tranh thị trường tự do",
      "Khuyến khích khởi nghiệp cá nhân",
      "\"Cán bộ là gốc\", đề cao trí thức khoa học kỹ thuật",
      "Lợi nhuận là tối thượng"
    ],
    correctAnswer: 2,
    explanation: "Kiến trúc thượng tầng thời bao cấp nhấn mạnh tư tưởng 'cán bộ là gốc' và đề cao trí thức khoa học kỹ thuật.",
  },
  {
    id: 8,
    question: "Khi bước vào thời kỳ đổi mới, nghề nào bắt đầu được coi trọng?",
    options: [
      "Nhà sư, thầy đồ",
      "Doanh nhân, chuyên gia kinh tế, ngoại thương",
      "Cán bộ làng xã",
      "Nông dân thuần túy"
    ],
    correctAnswer: 1,
    explanation: "Thời kỳ đổi mới, doanh nhân, chuyên gia kinh tế và ngoại thương được coi trọng do phù hợp với cơ chế thị trường.",
  },
  {
    id: 9,
    question: "Trong kinh tế số hiện nay, nghề nào thường được xem là \"hot\"?",
    options: [
      "Lập trình viên, chuyên gia dữ liệu",
      "Thư ký đánh máy",
      "Cán bộ hợp tác xã",
      "Nho sĩ Hán học"
    ],
    correctAnswer: 0,
    explanation: "Trong kinh tế số, lập trình viên và chuyên gia dữ liệu được xem là 'hot' do phù hợp với lực lượng sản xuất mới.",
  },
  {
    id: 10,
    question: "Theo duy vật lịch sử, \"cơ sở hạ tầng\" của xã hội là gì?",
    options: [
      "Toàn bộ quan hệ sản xuất",
      "Đường sá, nhà cửa, cầu cống",
      "Toàn bộ các công cụ sản xuất",
      "Nhà nước, pháp luật, tôn giáo"
    ],
    correctAnswer: 0,
    explanation: "Theo duy vật lịch sử, cơ sở hạ tầng của xã hội là toàn bộ quan hệ sản xuất, bao gồm quan hệ giữa con người trong quá trình sản xuất.",
  },
  {
    id: 11,
    question: "Trong xã hội phong kiến, cơ sở hạ tầng được xây dựng trên:",
    options: [
      "Sở hữu ruộng đất của địa chủ, vua quan",
      "Sở hữu tập thể nông trang",
      "Sở hữu cá nhân tư bản",
      "Sở hữu toàn dân về công cụ sản xuất"
    ],
    correctAnswer: 0,
    explanation: "Trong xã hội phong kiến, cơ sở hạ tầng được xây dựng trên chế độ sở hữu ruộng đất của địa chủ, vua quan.",
  },
  {
    id: 12,
    question: "Yếu tố nào làm thay đổi vị thế nghề nghiệp qua từng thời kỳ lịch sử?",
    options: [
      "Tâm lý đám đông",
      "Sự phát triển của lực lượng sản xuất",
      "Truyền thống văn hóa",
      "Chính sách tuyên truyền"
    ],
    correctAnswer: 1,
    explanation: "Sự phát triển của lực lượng sản xuất là yếu tố chính làm thay đổi vị thế nghề nghiệp qua các thời kỳ lịch sử.",
  },
  {
    id: 13,
    question: "Khi LLSX phát triển mạnh mẽ trong thời kỳ công nghiệp 4.0, xuất hiện quan hệ sản xuất mới nào?",
    options: [
      "Nền kinh tế số, gig economy",
      "Kinh tế nông nghiệp tự cung tự cấp",
      "Kinh tế kế hoạch hóa tập trung",  
      "Kinh tế phong kiến tiểu nông"
    ],
    correctAnswer: 0,
    explanation: "Công nghiệp 4.0 tạo ra quan hệ sản xuất mới như nền kinh tế số và gig economy (kinh tế chia sẻ).",
  },
  {
    id: 14,
    question: "Vị thế nghề nghiệp trong xã hội chịu sự chi phối trực tiếp bởi:",
    options: [
      "Tính cá nhân",
      "Quan hệ sản xuất",
      "Văn học nghệ thuật",
      "Phong tục tập quán"
    ],
    correctAnswer: 1,
    explanation: "Vị thế nghề nghiệp chịu sự chi phối trực tiếp bởi quan hệ sản xuất trong từng thời kỳ lịch sử cụ thể.",
  },
  {
    id: 15,
    question: "Tại sao nhiều sinh viên chọn \"nghề hot\" ngày nay?",
    options: [
      "Do nhu cầu thực tế của xã hội",
      "Do thu nhập hấp dẫn",
      "Do tâm lý đám đông",
      "Tất cả các lý do trên"
    ],
    correctAnswer: 3,
    explanation: "Sinh viên chọn 'nghề hot' do nhiều yếu tố: nhu cầu xã hội, thu nhập cao và tâm lý đám đông.",
  },
  {
    id: 16,
    question: "Nghề nào có khả năng bền vững lâu dài hơn?",
    options: [
      "Nghề gắn với nhu cầu nền tảng của LLSX (y tế, giáo dục, công nghệ lõi)",
      "Nghề chỉ nổi lên nhờ trào lưu truyền thông",
      "Nghề dựa vào sự độc quyền tạm thời",
      "Nghề phụ thuộc vào xu hướng giải trí ngắn hạn"
    ],
    correctAnswer: 0,
    explanation: "Nghề gắn với nhu cầu nền tảng của lực lượng sản xuất như y tế, giáo dục, công nghệ lõi có tính bền vững cao.",
  },
  {
    id: 17,
    question: "Thời kỳ nào trí thức tân học (chữ Quốc ngữ, tiếng Pháp) vượt lên nho sĩ truyền thống?",
    options: [
      "Phong kiến",
      "Thuộc địa – nửa phong kiến",
      "Bao cấp",
      "Kinh tế số"
    ],
    correctAnswer: 1,
    explanation: "Thời thuộc địa - nửa phong kiến, trí thức tân học với chữ Quốc ngữ và tiếng Pháp vượt lên nho sĩ truyền thống.",
  },
  {
    id: 18,
    question: "Vai trò của kiến trúc thượng tầng trong việc tôn vinh nghề nghiệp là gì?",
    options: [
      "Quy định trực tiếp nghề nào được trả lương cao",
      "Định hình hệ giá trị, tư tưởng, ý thức xã hội, từ đó ảnh hưởng đến sự tôn vinh nghề",
      "Làm thay đổi ngay lập tức LLSX",
      "Không có vai trò gì"
    ],
    correctAnswer: 1,
    explanation: "Kiến trúc thượng tầng định hình hệ giá trị, tư tưởng và ý thức xã hội, từ đó ảnh hưởng đến việc tôn vinh nghề nghiệp.",
  },
  {
    id: 19,
    question: "Trong giai đoạn bao cấp, LLSX của Việt Nam được đặc trưng bởi:",
    options: [
      "Máy móc hiện đại, công nghệ số",
      "Nông cụ thủ công, cơ sở sản xuất nghèo nàn",
      "Trí tuệ nhân tạo, dữ liệu lớn",
      "Công cụ lao động số hóa"
    ],
    correctAnswer: 1,
    explanation: "Giai đoạn bao cấp, LLSX Việt Nam còn lạc hậu với nông cụ thủ công và cơ sở sản xuất nghèo nàn.",
  },
  {
    id: 20,
    question: "Đâu là hệ quả tất yếu khi sinh viên chọn nghề chỉ theo \"tâm lý đám đông\"?",
    options: [
      "Cung – cầu nhân lực cân bằng",
      "Thừa nhân lực, thiếu việc làm phù hợp",
      "Mọi sinh viên đều thành công",
      "Nghề nghiệp trở nên bền vững hơn"
    ],
    correctAnswer: 1,
    explanation: "Khi sinh viên chọn nghề theo tâm lý đám đông sẽ dẫn đến thừa nhân lực và thiếu việc làm phù hợp.",
  }
]

export default function QuizPage() {
  const [gameState, setGameState] = useState<"playing" | "results">("playing")
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [results, setResults] = useState<QuizResult[]>([])

  const startQuiz = () => {
    setGameState("playing")
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setResults([])
  }

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex)
  }

  const handleNextQuestion = () => {
    const question = questions[currentQuestion]
    const isCorrect = selectedAnswer === question.correctAnswer

    const result: QuizResult = {
      questionId: question.id,
      selectedAnswer: selectedAnswer ?? -1,
      isCorrect,
      timeSpent: 0,
    }

    const newResults = [...results, result]
    setResults(newResults)

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
    } else {
      setGameState("results")
    }
  }

  const resetQuiz = () => {
    setGameState("playing")
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setResults([])
  }

  const score = results.filter((r) => r.isCorrect).length

  if (gameState === "playing") {
    const question = questions[currentQuestion]
    const progress = ((currentQuestion + 1) / questions.length) * 100

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <span className="text-lg font-semibold text-slate-700">
                  Câu {currentQuestion + 1}/{questions.length}
                </span>
              </div>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Về trang chủ
              </Link>
            </div>

            {/* Progress bar */}
            <div className="w-full bg-slate-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-8 leading-relaxed">{question.question}</h2>

            <div className="grid gap-4">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`p-4 text-left rounded-xl border-2 transition-all ${
                    selectedAnswer === index
                      ? "border-blue-600 bg-blue-50 text-blue-900"
                      : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                        selectedAnswer === index ? "bg-blue-600 text-white" : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="text-lg">{option}</span>
                  </div>
                </button>
              ))}
            </div>

            <div className="flex justify-end mt-8">
              <button
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null}
                className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed transition-colors font-medium"
              >
                {currentQuestion === questions.length - 1 ? "Hoàn thành" : "Câu tiếp theo"}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (gameState === "results") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
        <div className="container mx-auto max-w-4xl">
          {/* Results Header */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 text-center">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Kết quả Quiz</h1>
            <p className="text-xl text-slate-600 mb-4">Chúc mừng bạn đã hoàn thành!</p>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">{score}/10</div>
                <div className="text-slate-700">Điểm số</div>
              </div>
              <div className="bg-green-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {Math.round((score / questions.length) * 100)}%
                </div>
                <div className="text-slate-700">Tỷ lệ đúng</div>
              </div>
              <div className="bg-orange-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  {questions.length}
                </div>
                <div className="text-slate-700">Tổng câu hỏi</div>
              </div>
            </div>
          </div>

          {/* Detailed Results */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Chi tiết kết quả</h2>

            <div className="space-y-6">
              {results.map((result, index) => {
                const question = questions[index]
                return (
                  <div
                    key={index}
                    className={`border rounded-xl p-6 ${
                      result.isCorrect ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="font-semibold text-slate-900 flex-1">
                        Câu {index + 1}: {question.question}
                      </h3>
                      <div
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          result.isCorrect ? "bg-green-600 text-white" : "bg-red-600 text-white"
                        }`}
                      >
                        {result.isCorrect ? "Đúng" : "Sai"}
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="text-slate-700">
                        <span className="font-medium">Bạn chọn:</span>{" "}
                        {result.selectedAnswer >= 0
                          ? question.options[result.selectedAnswer]
                          : "Không trả lời (hết thời gian)"}
                      </div>
                      <div className="text-slate-700">
                        <span className="font-medium">Đáp án đúng:</span> {question.options[question.correctAnswer]}
                      </div>
                    </div>

                    <div className="bg-white rounded-lg p-4 border-l-4 border-blue-600">
                      <p className="text-slate-700">{question.explanation}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 justify-center">
            <button
              onClick={resetQuiz}
              className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2 font-medium"
            >
              <RotateCcw className="w-5 h-5" />
              Làm lại Quiz
            </button>
            <Link
              href="/"
              className="border border-slate-300 text-slate-700 py-3 px-8 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2 font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              Về trang chủ
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return null
}
