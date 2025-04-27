const Input = () => {
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Email"
        className="px-4 py-3 xl:w-80 rounded-l-xl bg-white text-black"
      />
      <button
        type="submit"
        className="bg-blue-500 h-full rounded-r-xl xl:py-3 px-6 text-white"
      >
        Join Waitlist
      </button>
    </div>
  );
};

export default Input;
