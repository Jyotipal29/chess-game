const Board = () => {
  const arr = Array(64).fill(null);
  console.log(arr, "arr");
  return (
    <div className="grid grid-cols-8">
      {arr.map((item, index) => {
        const row = Math.floor(index / 8); // Get row number (0 to 7)
        const isWhiteSquare = (row + index) % 2 === 0;
        return (
          <div
            key={index}
            className={`border border-black h-[100px]  flex justify-center  items-center  ${
              isWhiteSquare ? "bg-white" : "bg-black"
            }`}
          ></div>
        );
      })}
    </div>
  );
};

export default Board;
