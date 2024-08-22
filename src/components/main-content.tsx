import { contents } from "@/constant";

const MainContent = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto px-4">
      {/* Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {contents.map((content) => (
          <button
            key={content.title}
            className="px-4 py-2 text-left hover:bg-gray-200 rounded-[18px] shadow"
          >
            <span className="text-lg">{content.title}</span>
            <br />
            <span className="text-sm text-gray-500">{content.description}</span>
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="w-full mt-4">
        <input
          type="text"
          placeholder="Message ChatGPT"
          className="w-full px-4 py-4 bg-[#f4f4f4] rounded-full"
        />
      </div>
    </div>
  );
};

export default MainContent;
