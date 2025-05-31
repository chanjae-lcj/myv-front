import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, ChevronRight } from "lucide-react"

export default function VTuberDirectory() {
  const vtubers = [
    {
      name: "아이네",
      group: "이세계아이돌",
      platform: "치지직",
      followers: "320K",
      description: "이세계아이돌의 리더, 다양한 게임과 노래 방송",
      avatar: "/placeholder.svg?height=100&width=100",
      tags: ["게임", "노래", "토크"],
    },
    {
      name: "징버거",
      group: "이세계아이돌",
      platform: "치지직",
      followers: "290K",
      description: "이세계아이돌 멤버, 감미로운 목소리의 소유자",
      avatar: "/placeholder.svg?height=100&width=100",
      tags: ["노래", "게임", "ASMR"],
    },
    {
      name: "릴파",
      group: "이세계아이돌",
      platform: "치지직",
      followers: "280K",
      description: "이세계아이돌 멤버, 귀여운 캐릭터와 목소리",
      avatar: "/placeholder.svg?height=100&width=100",
      tags: ["게임", "노래", "리액션"],
    },
    {
      name: "주르르",
      group: "이세계아이돌",
      platform: "치지직",
      followers: "275K",
      description: "이세계아이돌 멤버, 파워풀한 보컬과 게임 실력",
      avatar: "/placeholder.svg?height=100&width=100",
      tags: ["노래", "게임", "토크"],
    },
    {
      name: "고세구",
      group: "이세계아이돌",
      platform: "치지직",
      followers: "310K",
      description: "이세계아이돌 멤버, 다재다능한 엔터테이너",
      avatar: "/placeholder.svg?height=100&width=100",
      tags: ["게임", "노래", "댄스"],
    },
    {
      name: "비챤",
      group: "이세계아이돌",
      platform: "치지직",
      followers: "270K",
      description: "이세계아이돌 멤버, 차분하고 지적인 매력",
      avatar: "/placeholder.svg?height=100&width=100",
      tags: ["게임", "토크", "ASMR"],
    },
    {
      name: "우왁굳",
      group: "왁타버스",
      platform: "치지직",
      followers: "450K",
      description: "왁타버스의 창시자, 다양한 컨텐츠 제작",
      avatar: "/placeholder.svg?height=100&width=100",
      tags: ["게임", "토크", "리액션"],
    },
    {
      name: "뢴트게늄",
      group: "독립",
      platform: "유튜브",
      followers: "180K",
      description: "독특한 컨셉과 게임 플레이로 인기",
      avatar: "/placeholder.svg?height=100&width=100",
      tags: ["게임", "토크", "리뷰"],
    },
  ]

  const categories = ["전체", "게임", "노래", "토크", "ASMR", "댄스", "리액션", "리뷰"]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">버튜버 도감</h1>
            <p className="text-gray-400">다양한 버튜버들을 찾아보세요</p>
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="버튜버 검색"
                className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 w-full"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="all" className="space-y-8">
          <div className="overflow-x-auto pb-2">
            <TabsList className="bg-gray-800 inline-flex w-auto">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category.toLowerCase()}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="all" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vtubers.map((vtuber) => (
                <Card key={vtuber.name} className="bg-gray-800 border-gray-700">
                  <CardContent className="p-4">
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                        <img
                          src={vtuber.avatar || "/placeholder.svg"}
                          alt={vtuber.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{vtuber.name}</h3>
                        <p className="text-sm text-gray-400">{vtuber.group}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline">{vtuber.platform}</Badge>
                      <div className="text-sm text-gray-400">팔로워 {vtuber.followers}</div>
                    </div>
                    <p className="text-sm text-gray-300 mb-4">{vtuber.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {vtuber.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-purple-500/20 text-purple-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      프로필 보기 <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* 다른 카테고리 탭들도 비슷한 구조로 구현 */}
          <TabsContent value="게임" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vtubers
                .filter((vtuber) => vtuber.tags.includes("게임"))
                .map((vtuber) => (
                  <Card key={vtuber.name} className="bg-gray-800 border-gray-700">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-4">
                        <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                          <img
                            src={vtuber.avatar || "/placeholder.svg"}
                            alt={vtuber.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{vtuber.name}</h3>
                          <p className="text-sm text-gray-400">{vtuber.group}</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="outline">{vtuber.platform}</Badge>
                        <div className="text-sm text-gray-400">팔로워 {vtuber.followers}</div>
                      </div>
                      <p className="text-sm text-gray-300 mb-4">{vtuber.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {vtuber.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-purple-500/20 text-purple-300">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        프로필 보기 <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
