const Shimmer = () => {
  return (
    <div className="shimmer-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
      {Array(32)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="shimmer-card w-full h-24 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer rounded-lg"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
