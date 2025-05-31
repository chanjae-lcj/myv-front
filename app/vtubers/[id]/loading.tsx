export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="h-80 bg-gray-800 animate-pulse" />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="h-32 bg-gray-800 rounded-lg animate-pulse" />
            <div className="h-64 bg-gray-800 rounded-lg animate-pulse" />
            <div className="h-64 bg-gray-800 rounded-lg animate-pulse" />
          </div>
          <div className="space-y-6">
            <div className="h-32 bg-gray-800 rounded-lg animate-pulse" />
            <div className="h-48 bg-gray-800 rounded-lg animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  )
}
