import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Users, ChevronRight } from "lucide-react"

export default function VTuberGroups() {
  const groups = [
    {
      name: "이세계아이돌",
      members: 6,
      platform: "치지직",
      description: "고세구, 아이네, 릴파, 주르르, 비챤, 징버거로 구성된 버튜버 그룹",
      thumbnail: "/placeholder.svg?height=100&width=100",
      color: "bg-purple-500",
    },
    {
      name: "우왁굳의 왁타버스",
      members: 12,
      platform: "치지직",
      description: "우왁굳을 중심으로 활동하는 다양한 버튜버들의 그룹",
      thumbnail: "/placeholder.svg?height=100&width=100",
      color: "bg-blue-500",
    },
    {
      name: "호로라이브",
      members: 48,
      platform: "유튜브",
      description: "일본의 대표적인 버튜버 그룹으로 한국어 활동도 활발함",
      thumbnail: "/placeholder.svg?height=100&width=100",
      color: "bg-pink-500",
    },
    {
      name: "니지산지",
      members: 36,
      platform: "유튜브",
      description: "다국적 버튜버 그룹으로 한국어 활동 버튜버도 다수 포함",
      thumbnail: "/placeholder.svg?height=100&width=100",
      color: "bg-green-500",
    },
    {
      name: "VShojo",
      members: 9,
      platform: "트위치",
      description: "영어권 중심의 버튜버 그룹",
      thumbnail: "/placeholder.svg?height=100&width=100",
      color: "bg-red-500",
    },
    {
      name: "PRISM Project",
      members: 10,
      platform: "유튜브",
      description: "영어 중심의 버튜버 그룹",
      thumbnail: "/placeholder.svg?height=100&width=100",
      color: "bg-yellow-500",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">버튜버 그룹</h1>
            <p className="text-gray-400">다양한 버튜버 그룹들을 만나보세요</p>
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="그룹 검색"
              className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 w-full"
            />
          </div>
        </div>

        <Tabs defaultValue="all" className="space-y-8">
          <TabsList className="bg-gray-800">
            <TabsTrigger value="all">전체</TabsTrigger>
            <TabsTrigger value="chzzk">치지직</TabsTrigger>
            <TabsTrigger value="youtube">유튜브</TabsTrigger>
            <TabsTrigger value="twitch">트위치</TabsTrigger>
            <TabsTrigger value="other">기타</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groups.map((group) => (
                <Card key={group.name} className="bg-gray-800 border-gray-700 overflow-hidden">
                  <div className="flex items-center p-4 border-b border-gray-700">
                    <div className={`w-12 h-12 ${group.color} rounded-full flex items-center justify-center mr-4`}>
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{group.name}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Badge variant="outline">{group.platform}</Badge>
                        <span>멤버 {group.members}명</span>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-gray-300 mb-4">{group.description}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      자세히 보기 <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="chzzk" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groups
                .filter((group) => group.platform === "치지직")
                .map((group) => (
                  <Card key={group.name} className="bg-gray-800 border-gray-700 overflow-hidden">
                    <div className="flex items-center p-4 border-b border-gray-700">
                      <div className={`w-12 h-12 ${group.color} rounded-full flex items-center justify-center mr-4`}>
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{group.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Badge variant="outline">{group.platform}</Badge>
                          <span>멤버 {group.members}명</span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-sm text-gray-300 mb-4">{group.description}</p>
                      <Button variant="outline" size="sm" className="w-full">
                        자세히 보기 <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          {/* 다른 탭들도 비슷한 구조로 구현 */}
          <TabsContent value="youtube" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {groups
                .filter((group) => group.platform === "유튜브")
                .map((group) => (
                  <Card key={group.name} className="bg-gray-800 border-gray-700 overflow-hidden">
                    {/* 내용은 위와 동일 */}
                    <div className="flex items-center p-4 border-b border-gray-700">
                      <div className={`w-12 h-12 ${group.color} rounded-full flex items-center justify-center mr-4`}>
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{group.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <Badge variant="outline">{group.platform}</Badge>
                          <span>멤버 {group.members}명</span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <p className="text-sm text-gray-300 mb-4">{group.description}</p>
                      <Button variant="outline" size="sm" className="w-full">
                        자세히 보기 <ChevronRight className="w-4 h-4 ml-1" />
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
