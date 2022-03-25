import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [word, setWord] = useState("");
  const [error, setError] = useState("");

  const fetchRhyme = async (word) => {
    const response = await fetch(
      `https://api.datamuse.com/words?rel_rhy=${word}`
    );
    const data = await response.json();
    setData(data);
    if (data.length === 0) {
      setError(` Nothing rhymes with ${word}`);
    } else {
      setError("");
    }
    console.log(data);
  };

  const handleClick = (word) => {
    if (word.length > 0) {
      fetchRhyme(word);
      setError("");
    } else {
      setError("Enter a word in the search bar");
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div class=" text-center w-full mb-2">
          <h1 class="sm:text-3xl text-2xl font-medium title-font  text-gray-900">
            Rhyme with me
          </h1>
        </div>
        <div className="p-4 flex w-full">
          <div className="mx-auto flex">
            <input
              placeholder="Search"
              value={word.value}
              onChange={(e) => setWord(e.target.value)}
              class="w-48 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
            <button
              onClick={() => handleClick(word)}
              class="ml-5 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div class="flex flex-wrap -m-4 mt-6">
          {data &&
            data.map(({ word }) => (
              <div class="xl:w-1/4 md:w-1/2 p-4">
                <div class="border-2 border-indigo-400 p-6 rounded-lg">
                  <h2 class="text-lg text-gray-900 font-medium title-font mb-2">
                    {word}
                  </h2>
                </div>
              </div>
            ))}
          <div class=" text-center w-full mb-2">
            <p className="text-lg font-medium title-font  text-gray-900">
              {error}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
