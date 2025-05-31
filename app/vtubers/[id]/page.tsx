import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Play, Music, MessageSquare, ExternalLink, Heart, Share2 } from "lucide-react"
import Link from "next/link"

interface VTuberDetailProps {
  params: {
    id: string
  }
}

export default function VTuberDetail({ params }: VTuberDetailProps) {
  // 실제로는 API에서 데이터를 가져올 것입니다
  const vtuberData = {
    aine: {
      name: "아이네",
      group: "이세계아이돌",
      platform: "치지직",
      avatar: "/placeholder.svg?height=120&width=120",
      banner: "/placeholder.svg?height=300&width=800",
      followers: "320K",
      debutDate: "2021-05-23",
      description: "아이네님은 약 3일 전에 아프리카TV에서 라이브 방송을 했습니다.",
      tags: ["#여성", "#게임실력"],
      stats: {
        subscribers: "320K",
        totalViews: "15.2M",
        videos: 1263,
      },
      recentVideos: [
        { title: "발로란트 랭크 게임", views: "12K", date: "1일 전" },
        { title: "새로운 커버곡 연습", views: "8.5K", date: "2일 전" },
        { title: "팬들과 함께하는 Q&A", views: "15K", date: "3일 전" },
      ],
      popularSongs: [
        { title: "Stay", originalArtist: "The Kid LAROI, Justin Bieber", views: "1.2M" },
        { title: "사랑은 늘 도망가", originalArtist: "임영웅", views: "612K" },
        { title: "Hype Boy", originalArtist: "NewJeans", views: "645K" },
      ],
    },
  }

  const vtuber = vtuberData[params.id as keyof typeof vtuberData]

  if (!vtuber) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">버튜버를 찾을 수 없습니다</h1>
          <Link href="/vtubers">
            <Button variant="outline">버튜버 도감으로 돌아가기</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* 배너 섹션 */}
      <div className="relative h-80 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600">
          <img
            src={vtuber.banner || "/placeholder.svg"}
            alt={`${vtuber.name} banner`}
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

        {/* 프로필 정보 */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end gap-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white/20 bg-gray-800">
                <img
                  src={vtuber.avatar || "/placeholder.svg"}
                  alt={vtuber.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 pb-4">
                <div className="flex items-center gap-3 mb-2">
                  {vtuber.tags.map((tag) => (
                    <Badge key={tag} className="bg-purple-500 hover:bg-purple-600">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h1 className="text-4xl font-bold mb-2">{vtuber.name}</h1>
                <p className="text-gray-300 mb-4">{vtuber.description}</p>
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{vtuber.group}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    <span>{vtuber.platform}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>데뷔일: {vtuber.debutDate}</span>
                  </div>
                </div>
              </div>
              <div className="text-right pb-4">
                <div className="text-2xl font-bold text-purple-400 mb-1">{vtuber.stats.subscribers}</div>
                <div className="text-sm text-gray-400">구독자</div>
                <div className="flex gap-2 mt-4">
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <Heart className="w-4 h-4 mr-2" />
                    팔로우
                  </Button>
                  <Button variant="outline">
                    <Share2 className="w-4 h-4 mr-2" />
                    공유
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 상세 정보 */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* 메인 콘텐츠 */}
          <div className="lg:col-span-2 space-y-8">
            {/* 통계 */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4">채널 통계</h2>
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{vtuber.stats.subscribers}</div>
                    <div className="text-sm text-gray-400">구독자</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{vtuber.stats.totalViews}</div>
                    <div className="text-sm text-gray-400">총 조회수</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{vtuber.stats.videos}</div>
                    <div className="text-sm text-gray-400">동영상</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 최근 영상 */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">최근 영상</h2>
                  <Button variant="ghost" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    채널 보기
                  </Button>
                </div>
                <div className="space-y-4">
                  {vtuber.recentVideos.map((video, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <div className="w-16 h-12 bg-gray-600 rounded overflow-hidden">
                        <img
                          src="/placeholder.svg?height=48&width=64"
                          alt={video.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{video.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <span>{video.views} 조회</span>
                          <span>•</span>
                          <span>{video.date}</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Play className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* 인기 음악 */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold flex items-center gap-2">
                    <Music className="w-5 h-5" />
                    인기 음악
                  </h2>
                  <Link href="/music">
                    <Button variant="ghost" size="sm">
                      전체 보기
                    </Button>
                  </Link>
                </div>
                <div className="space-y-4">
                  {vtuber.popularSongs.map((song, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      <div className="text-lg font-bold text-purple-400 w-6">{index + 1}</div>
                      <div className="w-12 h-12 bg-gray-600 rounded overflow-hidden">
                        <img
                          src="/placeholder.svg?height=48&width=48"
                          alt={song.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{song.title}</h3>
                        <p className="text-sm text-gray-400">원곡: {song.originalArtist}</p>
                      </div>
                      <div className="text-sm text-gray-400">{song.views}</div>
                      <Button variant="ghost" size="sm">
                        <Play className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 사이드바 */}
          <div className="space-y-6">
            {/* 소속 정보 */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="font-bold mb-4">소속</h3>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-medium">{vtuber.group}</div>
                    <div className="text-sm text-gray-400">6명의 멤버</div>
                  </div>
                </div>
                <Link href="/groups">
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    그룹 정보 보기
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* 관련 링크 */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="font-bold mb-4">관련 링크</h3>
                <div className="space-y-3">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    {vtuber.platform} 채널
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Music className="w-4 h-4 mr-2" />
                    음악 모아보기
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <MessageSquare className="w-4 h-4 mr-2" />팬 커뮤니티
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
