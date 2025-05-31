import Link from "next/link"
import { ExternalLink, ChevronRight, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* 상단 섹션 */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Link href="/" className="text-xl font-bold">
              <span className="text-white">my</span>
              <span className="text-purple-400">V</span>
            </Link>
            <ExternalLink className="w-4 h-4 text-gray-400" />
          </div>

          <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition-colors cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-white mb-1">버튜버 등록 요청</h3>
                <p className="text-sm text-gray-400">버튜버와 누구나 제안하고 요청할 수 있습니다.</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* 링크 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-white mb-4">서비스 이용 약관</h4>
            <div className="space-y-2">
              <Link href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">
                유튜브 API 서비스 이용약관
              </Link>
              <Link href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">
                유튜브 서비스 이용약관
              </Link>
              <Link href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">
                치지직 API 서비스 이용약관
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">개인정보처리방침</h4>
            <div className="space-y-2">
              <Link href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">
                구글 개인정보 처리방침
              </Link>
              <Link href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">
                구글 제3자 접근 권한 설명
              </Link>
              <Link href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">
                myV 개인정보 처리방침
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">문의하기</h4>
            <div className="space-y-2">
              <Link href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">
                고객센터
              </Link>
              <Link href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">
                버그 신고
              </Link>
              <Link href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">
                기능 제안
              </Link>
              <Link href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">
                파트너십 문의
              </Link>
            </div>
          </div>
        </div>

        {/* 소셜 미디어 및 저작권 */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
              </svg>
            </Link>
          </div>

          <div className="text-sm text-gray-400">© Copyright myV, 2024 - All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  )
}
