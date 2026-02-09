const MenuSkeleton = () => {
  return (
    <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="bg-white rounded-lg shadow p-4 animate-pulse">
          <div className="h-48 bg-gray-200 rounded mb-4" />
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
          <div className="h-3 bg-gray-200 rounded w-full mb-4" />
          <div className="flex justify-between items-center">
            <div className="h-4 bg-gray-200 rounded w-16" />
            <div className="h-8 bg-gray-200 rounded w-24" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuSkeleton;
