import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Bell, Calendar, Eye, ChevronRight, AlertTriangle, Info, Megaphone, Settings } from "lucide-react"

export default function Notices() {
  const notices = [
    {
      id: 1,
      title: "🎉 myV 2.0 업데이트 안내",
      content: "새로운 기능들이 추가되었습니다. 라이브 알림, 음악 차트, 커뮤니티 기능이 개선되었습니다.",
      date: "2024-06-01",
      author: "관리자",
      views: 2456,
      type: "업데이트",
      priority: "high",
      isNew: true,
    },
    {
      id: 2,
      title: "📋 커뮤니티 이용 규칙 변경 안내",
      content: "건전한 커뮤니티 문화 조성을 위해 이용 규칙이 일부 변경되었습니다. 자세한 내용을 확인해주세요.",
      date: "2024-05-28",
      author: "관리자",
      views: 1834,
      type: "정책",
      priority: "medium",
      isNew: false,
    },
    {
      id: 3,
      title: "🔧 서버 점검 안내 (완료)",
      content: "2024년 5월 25일 새벽 2시~4시 서버 점검이 진행되었습니다. 이용에 불편을 드려 죄송합니다.",
      date: "2024-05-25",
      author: "기술팀",
      views: 1567,
      type: "점검",
      priority: "medium",
      isNew: false,
    },
    {
      id: 4,
      title: "🎵 음악 차트 시스템 오픈",
      content: "버튜버들의 음악을 차트로 확인할 수 있는 새로운 기능이 추가되었습니다.",
      date: "2024-05-22",
      author: "개발팀",
      views: 2134,
      type: "기능",
      priority: "low",
      isNew: false,
    },
    {
      id: 5,
      title: "🚨 개인정보 보호정책 업데이트",
      content: "개인정보 보호정책이 업데이트되었습니다. 변경사항을 확인해주세요.",
      date: "2024-05-20",
      author: "법무팀",
      views: 987,
      type: "정책",
      priority: "high",
      isNew: false,
    },
    {
      id: 6,
      title: "📱 모바일 앱 베타 테스트 모집",
      content: "myV 모바일 앱 베타 테스터를 모집합니다. 관심 있으신 분들의 많은 참여 부탁드립니다.",
      date: "2024-05-18",
      author: "모바일팀",
      views: 1456,
      type: "모집",
      priority: "low",
      isNew: false,
    },
    {
      id: 7,
      title: "🎊 사이트 오픈 1주년 기념 이벤트",
      content: "myV 사이트 오픈 1주년을 기념하여 다양한 이벤트를 진행합니다.",
      date: "2024-05-15",
      author: "이벤트팀",
      views: 3245,
      type: "이벤트",
      priority: "medium",
      isNew: false,
    },
    {
      id: 8,
      title: "🔐 보안 강화 안내",
      content: "사용자 계정 보안 강화를 위한 2단계 인증 기능이 추가되었습니다.",
      date: "2024-05-12",
      author: "보안팀",
      views: 1678,
      type: "보안",
      priority: "high",
      isNew: false,
    },
  ]

  const categories = [
    { name: "전체", count: notices.length, color: "bg-gray-500" },
    { name: "업데이트", count: notices.filter((n) => n.type === "업데이트").length, color: "bg-blue-500" },
    { name: "정책", count: notices.filter((n) => n.type === "정책").length, color: "bg-red-500" },
    { name: "점검", count: notices.filter((n) => n.type === "점검").length, color: "bg-orange-500" },
    { name: "이벤트", count: notices.filter((n) => n.type === "이벤트").length, color: "bg-purple-500" },
    { name: "기능", count: notices.filter((n) => n.type === "기능").length, color: "bg-green-500" },
  ]

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "high":
        return <AlertTriangle className="w-4 h-4 text-red-400" />
      case "medium":
        return <Info className="w-4 h-4 text-yellow-400" />
      default:
        return <Bell className="w-4 h-4 text-gray-400" />
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge className="bg-red-500 hover:bg-red-600">중요</Badge>
      case "medium":
        return <Badge className="bg-yellow-500 hover:bg-yellow-600">일반</Badge>
      default:
        return <Badge variant="outline">안내</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
              <Megaphone className="w-8 h-8 text-purple-400" />
              공지사항
            </h1>
            <p className="text-gray-400">myV의 최신 소식과 중요한 안내사항을 확인하세요</p>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="공지사항 검색"
                className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 w-full"
              />
            </div>
            <Button variant="outline" size="icon">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* 카테고리 필터 */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={category.name === "전체" ? "default" : "outline"}
              className="flex items-center gap-2"
            >
              <div className={`w-3 h-3 ${category.color} rounded-full`}></div>
              {category.name}
              <Badge variant="secondary" className="ml-1">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* 중요 공지사항 */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            중요 공지사항
          </h2>
          <div className="space-y-3">
            {notices
              .filter((notice) => notice.priority === "high")
              .slice(0, 3)
              .map((notice) => (
                <Card key={notice.id} className="bg-gradient-to-r from-red-900/20 to-gray-800 border-red-500/30">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {notice.isNew && <Badge className="bg-green-500 hover:bg-green-600 text-xs">NEW</Badge>}
                          {getPriorityBadge(notice.priority)}
                          <Badge variant="outline" className="text-xs">
                            {notice.type}
                          </Badge>
                        </div>
                        <h3 className="font-semibold text-lg mb-2 hover:text-purple-400 cursor-pointer transition-colors">
                          {notice.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-3 line-clamp-2">{notice.content}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{notice.date}</span>
                          </div>
                          <span>{notice.author}</span>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{notice.views.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="ml-4">
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* 전체 공지사항 */}
        <div>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Bell className="w-5 h-5 text-purple-400" />
            전체 공지사항
          </h2>
          <div className="space-y-3">
            {notices.map((notice) => (
              <Card
                key={notice.id}
                className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors cursor-pointer"
              >
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3 flex-1">
                      <div className="mt-1">{getPriorityIcon(notice.priority)}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {notice.isNew && <Badge className="bg-green-500 hover:bg-green-600 text-xs">NEW</Badge>}
                          {getPriorityBadge(notice.priority)}
                          <Badge variant="outline" className="text-xs">
                            {notice.type}
                          </Badge>
                        </div>
                        <h3 className="font-semibold mb-2 hover:text-purple-400 transition-colors">{notice.title}</h3>
                        <p className="text-gray-300 text-sm mb-3 line-clamp-2">{notice.content}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{notice.date}</span>
                          </div>
                          <span>{notice.author}</span>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{notice.views.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="ml-4">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 알림 설정 */}
        <Card className="bg-gray-800 border-gray-700 mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-purple-400" />
              알림 설정
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold">공지사항 알림</h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="rounded" defaultChecked />
                    <span className="text-sm">중요 공지사항 알림</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="rounded" defaultChecked />
                    <span className="text-sm">업데이트 알림</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">이벤트 알림</span>
                  </label>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold">알림 방식</h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="rounded" defaultChecked />
                    <span className="text-sm">브라우저 알림</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">이메일 알림</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="rounded" />
                    <span className="text-sm">모바일 푸시 알림</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-6">
              <Button className="bg-purple-600 hover:bg-purple-700">설정 저장</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
