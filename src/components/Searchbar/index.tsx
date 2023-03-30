const Searchbar = () => {
  return (
    <div role="search">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="relative"
        style={{
          padding: "9px 10px 8px",
        }}
      >
        <input
          style={{ padding: "5px 7px" }}
          className="bg-search-bg focus:bg-white outline-0 h-7 w-full rounded text-sm font-thin"
          placeholder="Search"
        />
        <button
          className="absolute"
          style={{
            height: "15px",
            width: "15px",
            top: "15px",
            right: "20px",
            font: "0/0 a",
            background:
              "url(https://a-v2.sndcdn.com/assets/images/search-dbfe5cbb.svg) 0 0 no-repeat",
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Searchbar;
