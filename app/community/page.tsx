import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Search, MessageSquare, Eye, ThumbsUp, Clock, Pin, TrendingUp, Users, PlusCircle, Filter } from "lucide-react"

export default function Community() {
  const boards = [
    { name: "자유게시판", description: "자유롭게 이야기해요", posts: 1234, color: "bg-blue-500" },
    { name: "버튜버 추천", description: "새로운 버튜버를 추천해주세요", posts: 567, color: "bg-purple-500" },
    { name: "음악 게시판", description: "좋은 노래를 공유해요", posts: 890, color: "bg-pink-500" },
    { name: "팬아트", description: "창작물을 공유하는 공간", posts: 345, color: "bg-green-500" },
    { name: "질문/답변", description: "궁금한 것을 물어보세요", posts: 678, color: "bg-orange-500" },
    { name: "이벤트", description: "각종 이벤트 정보", posts: 123, color: "bg-red-500" },
  ]

  const hotPosts = [
    {
      id: 1,
      title: "이세계아이돌 신곡 'Stay' 어떻게 생각하세요?",
      author: "음악러버",
      board: "음악 게시판",
      replies: 156,
      views: 2341,
      likes: 89,
      time: "2시간 전",
      isPinned: true,
      isHot: true,
    },
    {
      id: 2,
      title: "치지직 vs 유튜브 어느 플랫폼이 더 좋나요?",
      author: "버튜버팬123",
      board: "자유게시판",
      replies: 234,
      views: 3456,
      likes: 67,
      time: "4시간 전",
      isPinned: false,
      isHot: true,
    },
    {
      id: 3,
      title: "신인 버튜버 추천받습니다!",
      author: "newbie_fan",
      board: "버튜버 추천",
      replies: 89,
      views: 1567,
      likes: 45,
      time: "6시간 전",
      isPinned: false,
      isHot: true,
    },
    {
      id: 4,
      title: "[팬아트] 아이네 그려봤어요!",
      author: "그림쟁이",
      board: "팬아트",
      replies: 67,
      views: 1234,
      likes: 123,
      time: "8시간 전",
      isPinned: false,
      isHot: false,
    },
    {
      id: 5,
      title: "버튜버 굿즈 어디서 사나요?",
      author: "굿즈수집가",
      board: "질문/답변",
      replies: 34,
      views: 789,
      likes: 23,
      time: "10시간 전",
      isPinned: false,
      isHot: false,
    },
    {
      id: 6,
      title: "이번 주말 버튜버 콘서트 후기",
      author: "콘서트러버",
      board: "자유게시판",
      replies: 78,
      views: 1456,
      likes: 56,
      time: "12시간 전",
      isPinned: false,
      isHot: false,
    },
    {
      id: 7,
      title: "ASMR 추천 좀 해주세요!",
      author: "힐링필요",
      board: "버튜버 추천",
      replies: 45,
      views: 987,
      likes: 34,
      time: "1일 전",
      isPinned: false,
      isHot: false,
    },
    {
      id: 8,
      title: "[이벤트] 6월 생일 버튜버 축하 이벤트",
      author: "관리자",
      board: "이벤트",
      replies: 123,
      views: 2567,
      likes: 89,
      time: "2일 전",
      isPinned: true,
      isHot: false,
    },
  ]

  const recentPosts = [
    {
      id: 9,
      title: "오늘 라이브 방송 어땠나요?",
      author: "실시간러버",
      board: "자유게시판",
      replies: 12,
      views: 234,
      likes: 8,
      time: "10분 전",
    },
    {
      id: 10,
      title: "새로운 버튜버 그룹 데뷔했네요",
      author: "정보통",
      board: "버튜버 추천",
      replies: 5,
      views: 156,
      likes: 3,
      time: "25분 전",
    },
    {
      id: 11,
      title: "커버곡 추천 받습니다",
      author: "음악애호가",
      board: "음악 게시판",
      replies: 8,
      views: 189,
      likes: 6,
      time: "45분 전",
    },
    {
      id: 12,
      title: "버튜버 스케줄 정리 사이트 있나요?",
      author: "스케줄러",
      board: "질문/답변",
      replies: 3,
      views: 98,
      likes: 2,
      time: "1시간 전",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">커뮤니티</h1>
            <p className="text-gray-400">버튜버 팬들과 소통하는 공간</p>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="게시글 검색"
                className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 w-full"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <PlusCircle className="w-4 h-4 mr-2" />
              글쓰기
            </Button>
          </div>
        </div>

        {/* 게시판 목록 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {boards.map((board) => (
            <Card
              key={board.name}
              className="bg-gray-800 border-gray-700 cursor-pointer hover:bg-gray-750 transition-colors"
            >
              <CardContent className="p-4 text-center">
                <div className={`w-12 h-12 ${board.color} rounded-full mx-auto mb-3 flex items-center justify-center`}>
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{board.name}</h3>
                <p className="text-xs text-gray-400 mb-2">{board.description}</p>
                <div className="text-xs text-purple-400">{board.posts.toLocaleString()}개 글</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="hot" className="space-y-8">
          <TabsList className="bg-gray-800">
            <TabsTrigger value="hot" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              인기글
            </TabsTrigger>
            <TabsTrigger value="recent" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              최신글
            </TabsTrigger>
            <TabsTrigger value="boards" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              게시판별
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hot" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">🔥 인기 게시글</h3>
              <div className="text-sm text-gray-400">최근 24시간 기준</div>
            </div>
            <div className="space-y-3">
              {hotPosts.map((post) => (
                <Card
                  key={post.id}
                  className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors cursor-pointer"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          {post.isPinned && <Pin className="w-4 h-4 text-yellow-400" />}
                          {post.isHot && <Badge className="bg-red-500 hover:bg-red-600 text-xs">HOT</Badge>}
                          <Badge variant="outline" className="text-xs">
                            {post.board}
                          </Badge>
                        </div>
                        <h4 className="font-semibold mb-2 hover:text-purple-400 transition-colors">{post.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span>{post.author}</span>
                          <span>{post.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-400 ml-4">
                        <div className="flex items-center gap-1">
                          <MessageSquare className="w-4 h-4" />
                          <span>{post.replies}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="recent" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">⏰ 최신 게시글</h3>
              <div className="text-sm text-gray-400">실시간 업데이트</div>
            </div>
            <div className="space-y-3">
              {recentPosts.map((post) => (
                <Card
                  key={post.id}
                  className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors cursor-pointer"
                >
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="text-xs">
                            {post.board}
                          </Badge>
                        </div>
                        <h4 className="font-semibold mb-2 hover:text-purple-400 transition-colors">{post.title}</h4>
                        <div className="flex items-center gap-4 text-sm text-gray-400">
                          <span>{post.author}</span>
                          <span>{post.time}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-400 ml-4">
                        <div className="flex items-center gap-1">
                          <MessageSquare className="w-4 h-4" />
                          <span>{post.replies}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="w-4 h-4" />
                          <span>{post.likes}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="boards" className="space-y-6">
            <h3 className="text-xl font-semibold">📋 게시판별 최신글</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {boards.slice(0, 4).map((board) => (
                <Card key={board.name} className="bg-gray-800 border-gray-700">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <div className={`w-6 h-6 ${board.color} rounded-full flex items-center justify-center`}>
                        <MessageSquare className="w-3 h-3 text-white" />
                      </div>
                      {board.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {hotPosts
                      .filter((post) => post.board === board.name)
                      .slice(0, 3)
                      .map((post) => (
                        <div key={post.id} className="border-b border-gray-700 pb-2 last:border-b-0">
                          <h5 className="text-sm font-medium mb-1 hover:text-purple-400 cursor-pointer transition-colors">
                            {post.title}
                          </h5>
                          <div className="flex items-center justify-between text-xs text-gray-400">
                            <span>{post.author}</span>
                            <div className="flex items-center gap-2">
                              <span>{post.replies}개 댓글</span>
                              <span>{post.time}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    <Button variant="ghost" size="sm" className="w-full mt-2">
                      더보기
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* 글쓰기 폼 (간단한 예시) */}
        <Card className="bg-gray-800 border-gray-700 mt-8">
          <CardHeader>
            <CardTitle>✍️ 빠른 글쓰기</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Input placeholder="제목을 입력하세요" className="bg-gray-700 border-gray-600" />
              <select className="bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white">
                <option>게시판 선택</option>
                {boards.map((board) => (
                  <option key={board.name} value={board.name}>
                    {board.name}
                  </option>
                ))}
              </select>
            </div>
            <Textarea placeholder="내용을 입력하세요..." className="bg-gray-700 border-gray-600 min-h-[100px]" />
            <div className="flex justify-end gap-2">
              <Button variant="outline">취소</Button>
              <Button className="bg-purple-600 hover:bg-purple-700">게시하기</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
