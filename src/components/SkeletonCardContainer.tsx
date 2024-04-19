export default function SkeletonCardContainer() {
  return (
    <div className="rounded-xl min-w-48 h-52 mx-auto">
      <div className="animate-pulse flex">
        <div className="flex-1 space-y-6">
          <div className="w-48 h-52 p-3 bg-slate-700 rounded-xl">
            <div className="grid grid-rows-2 space-y-20">
              <div></div>
              <div className="h-2 bg-slate-600 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
