import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Play, Calendar, TrendingUp, Music, Heart, Share2, Download, Headphones } from "lucide-react"

export default function MusicChart() {
  const songs = [
    {
      rank: 1,
      title: "Stay",
      artist: "아이네",
      originalArtist: "The Kid LAROI, Justin Bieber",
      views: "1.2M",
      likes: "45.2K",
      type: "커버",
      uploadDate: "2024-05-28",
      thumbnail: "/placeholder.svg?height=120&width=120",
      duration: "3:21",
    },
    {
      rank: 2,
      title: "새로운 시작",
      artist: "이세계아이돌",
      originalArtist: null,
      views: "890K",
      likes: "38.5K",
      type: "오리지널",
      uploadDate: "2024-05-25",
      thumbnail: "/placeholder.svg?height=120&width=120",
      duration: "4:05",
    },
    {
      rank: 3,
      title: "밤하늘의 별처럼",
      artist: "징버거",
      originalArtist: "경서",
      views: "756K",
      likes: "32.1K",
      type: "커버",
      uploadDate: "2024-05-22",
      thumbnail: "/placeholder.svg?height=120&width=120",
      duration: "3:45",
    },
    {
      rank: 4,
      title: "Dangerously",
      artist: "주르르",
      originalArtist: "Charlie Puth",
      views: "678K",
      likes: "29.8K",
      type: "커버",
      uploadDate: "2024-05-20",
      thumbnail: "/placeholder.svg?height=120&width=120",
      duration: "3:19",
    },
    {
      rank: 5,
      title: "Hype Boy",
      artist: "고세구",
      originalArtist: "NewJeans",
      views: "645K",
      likes: "27.3K",
      type: "커버",
      uploadDate: "2024-05-18",
      thumbnail: "/placeholder.svg?height=120&width=120",
      duration: "2:56",
    },
    {
      rank: 6,
      title: "사랑은 늘 도망가",
      artist: "아이네",
      originalArtist: "임영웅",
      views: "612K",
      likes: "25.9K",
      type: "커버",
      uploadDate: "2024-05-15",
      thumbnail: "/placeholder.svg?height=120&width=120",
      duration: "4:12",
    },
    {
      rank: 7,
      title: "우리들의 블루스",
      artist: "이세계아이돌",
      originalArtist: null,
      views: "589K",
      likes: "24.7K",
      type: "오리지널",
      uploadDate: "2024-05-12",
      thumbnail: "/placeholder.svg?height=120&width=120",
      duration: "3:58",
    },
    {
      rank: 8,
      title: "사건의 지평선",
      artist: "비챤",
      originalArtist: "윤하",
      views: "567K",
      likes: "23.5K",
      type: "커버",
      uploadDate: "2024-05-10",
      thumbnail: "/placeholder.svg?height=120&width=120",
      duration: "4:32",
    },
    {
      rank: 9,
      title: "Attention",
      artist: "릴파",
      originalArtist: "NewJeans",
      views: "534K",
      likes: "22.1K",
      type: "커버",
      uploadDate: "2024-05-08",
      thumbnail: "/placeholder.svg?height=120&width=120",
      duration: "3:00",
    },
    {
      rank: 10,
      title: "Love Dive",
      artist: "주르르",
      originalArtist: "IVE",
      views: "512K",
      likes: "21.3K",
      type: "커버",
      uploadDate: "2024-05-05",
      thumbnail: "/placeholder.svg?height=120&width=120",
      duration: "2:58",
    },
  ]

  const categories = ["전체", "커버곡", "오리지널", "콜라보", "라이브"]
  const periods = ["일간", "주간", "월간", "전체"]
  const platforms = ["전체", "유튜브", "치지직", "숲", "기타"]

  const featuredArtists = [
    { name: "아이네", songs: 24, image: "/placeholder.svg?height=80&width=80" },
    { name: "징버거", songs: 18, image: "/placeholder.svg?height=80&width=80" },
    { name: "릴파", songs: 22, image: "/placeholder.svg?height=80&width=80" },
    { name: "주르르", songs: 26, image: "/placeholder.svg?height=80&width=80" },
    { name: "고세구", songs: 19, image: "/placeholder.svg?height=80&width=80" },
    { name: "비챤", songs: 17, image: "/placeholder.svg?height=80&width=80" },
  ]

  const newReleases = [
    {
      title: "Ditto",
      artist: "릴파",
      originalArtist: "NewJeans",
      thumbnail: "/placeholder.svg?height=120&width=120",
      releaseDate: "2024-06-01",
    },
    {
      title: "After LIKE",
      artist: "주르르",
      originalArtist: "IVE",
      thumbnail: "/placeholder.svg?height=120&width=120",
      releaseDate: "2024-05-30",
    },
    {
      title: "Cupid",
      artist: "고세구",
      originalArtist: "FIFTY FIFTY",
      thumbnail: "/placeholder.svg?height=120&width=120",
      releaseDate: "2024-05-29",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
              <Music className="w-8 h-8 text-purple-400" />
              음악 차트
            </h1>
            <p className="text-gray-400">인기 있는 버튜버 음악을 확인하세요</p>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="노래 검색"
                className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 w-full"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* 필터 옵션 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="space-y-2">
            <label className="text-sm text-gray-400">기간</label>
            <div className="flex flex-wrap gap-2">
              {periods.map((period) => (
                <Button
                  key={period}
                  variant={period === "주간" ? "default" : "outline"}
                  size="sm"
                  className={period === "주간" ? "bg-purple-600 hover:bg-purple-700" : ""}
                >
                  {period}
                </Button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-400">카테고리</label>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "전체" ? "default" : "outline"}
                  size="sm"
                  className={category === "전체" ? "bg-purple-600 hover:bg-purple-700" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm text-gray-400">플랫폼</label>
            <div className="flex flex-wrap gap-2">
              {platforms.map((platform) => (
                <Button
                  key={platform}
                  variant={platform === "전체" ? "default" : "outline"}
                  size="sm"
                  className={platform === "전체" ? "bg-purple-600 hover:bg-purple-700" : ""}
                >
                  {platform}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <Tabs defaultValue="chart" className="space-y-8">
          <TabsList className="bg-gray-800">
            <TabsTrigger value="chart" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              인기 차트
            </TabsTrigger>
            <TabsTrigger value="new" className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              최신 음악
            </TabsTrigger>
            <TabsTrigger value="artists" className="flex items-center gap-2">
              <Headphones className="w-4 h-4" />
              아티스트
            </TabsTrigger>
          </TabsList>

          <TabsContent value="chart" className="space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">🎵 주간 인기 차트</h3>
              <div className="text-sm text-gray-400">2024.05.25 ~ 2024.06.01 기준</div>
            </div>

            <div className="space-y-4">
              {songs.map((song) => (
                <Card key={song.rank} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-4">
                      <div className="text-2xl font-bold text-purple-400 w-8 text-center">{song.rank}</div>
                      <div className="w-16 h-16 rounded overflow-hidden">
                        <img
                          src={song.thumbnail || "/placeholder.svg"}
                          alt={`${song.title} by ${song.artist}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-semibold">{song.title}</h4>
                          <Badge variant={song.type === "커버" ? "secondary" : "default"}>{song.type}</Badge>
                        </div>
                        <p className="text-sm text-gray-400">
                          {song.artist}
                          {song.originalArtist && ` • 원곡: ${song.originalArtist}`}
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                          <span>{song.uploadDate}</span>
                          <span>{song.duration}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-sm">
                            <Heart className="w-4 h-4 text-red-400" />
                            <span>{song.likes}</span>
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-400">
                            <Play className="w-4 h-4" />
                            <span>{song.views}</span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2">
                          <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                            <Play className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="new" className="space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">🆕 최신 음악</h3>
              <div className="text-sm text-gray-400">최근 업로드된 음악</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newReleases.concat(songs.slice(0, 3)).map((song, index) => (
                <Card key={index} className="bg-gray-800 border-gray-700 overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={song.thumbnail || "/placeholder.svg"}
                      alt={`${song.title} by ${song.artist}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                      <div>
                        <h4 className="font-semibold text-lg">{song.title}</h4>
                        <p className="text-sm text-gray-300">{song.artist}</p>
                        {song.originalArtist && <p className="text-xs text-gray-400">원곡: {song.originalArtist}</p>}
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 rounded-full bg-black/50 hover:bg-black/70"
                    >
                      <Play className="w-5 h-5" />
                    </Button>
                  </div>
                  <CardContent className="p-4 flex items-center justify-between">
                    <div className="text-sm text-gray-400">{song.releaseDate || song.uploadDate}</div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Share2 className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="artists" className="space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">🎤 인기 아티스트</h3>
              <div className="text-sm text-gray-400">등록된 음악 기준</div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {featuredArtists.map((artist) => (
                <Card key={artist.name} className="bg-gray-800 border-gray-700 hover:bg-gray-750 transition-colors">
                  <CardContent className="p-4 text-center">
                    <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                      <img
                        src={artist.image || "/placeholder.svg"}
                        alt={artist.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-semibold mb-1">{artist.name}</h4>
                    <p className="text-sm text-purple-400">{artist.songs}곡</p>
                    <Button variant="outline" size="sm" className="mt-3 w-full">
                      곡 모아보기
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">🎵 아티스트별 인기곡</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {featuredArtists.slice(0, 2).map((artist) => (
                  <Card key={artist.name} className="bg-gray-800 border-gray-700">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img
                            src={artist.image || "/placeholder.svg"}
                            alt={artist.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-semibold">{artist.name}</h4>
                          <p className="text-sm text-gray-400">인기곡 TOP 3</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        {songs
                          .filter((song) => song.artist === artist.name)
                          .slice(0, 3)
                          .map((song, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-3 border-b border-gray-700 pb-2 last:border-0"
                            >
                              <div className="text-lg font-bold text-purple-400 w-6 text-center">{idx + 1}</div>
                              <div className="flex-1">
                                <h5 className="font-medium text-sm">{song.title}</h5>
                                <p className="text-xs text-gray-400">
                                  {song.originalArtist ? `원곡: ${song.originalArtist}` : "오리지널"}
                                </p>
                              </div>
                              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                                <Play className="w-4 h-4" />
                              </Button>
                            </div>
                          ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* 플레이리스트 추천 */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">🎧 추천 플레이리스트</h2>
            <Button variant="outline">더보기</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "버튜버 인기 커버곡", count: 25, image: "/placeholder.svg?height=180&width=180" },
              { title: "이세계아이돌 컬렉션", count: 18, image: "/placeholder.svg?height=180&width=180" },
              { title: "감성적인 발라드 모음", count: 15, image: "/placeholder.svg?height=180&width=180" },
              { title: "신나는 댄스곡 모음", count: 20, image: "/placeholder.svg?height=180&width=180" },
            ].map((playlist, idx) => (
              <Card key={idx} className="bg-gray-800 border-gray-700 overflow-hidden">
                <div className="relative h-48">
                  <img
                    src={playlist.image || "/placeholder.svg"}
                    alt={playlist.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
                    <div>
                      <h4 className="font-semibold text-lg">{playlist.title}</h4>
                      <p className="text-sm text-gray-300">{playlist.count}곡</p>
                    </div>
                  </div>
                  <Button
                    variant="default"
                    size="icon"
                    className="absolute bottom-4 right-4 rounded-full bg-purple-600 hover:bg-purple-700"
                  >
                    <Play className="w-5 h-5" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
