import React, { useState } from "react";
import SearchButton from "layouts/default/header/search-button/SearchButton";

function SearchRList() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [hashtag, setHashtag] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full text-base p-0 mb-2"
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full text-base p-0 mb-2"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full text-base p-0 mb-2"
      />
      <input
        type="text"
        placeholder="Hashtag"
        value={hashtag}
        onChange={(e) => setHashtag(e.target.value)}
        className="w-full text-base p-0 mb-2"
      />
      <SearchButton
        title={title}
        category={category}
        description={description}
        hashtag={hashtag}
        setTitle={setTitle}
        setCategory={setCategory}
        setDescription={setDescription}
        setHashtag={setHashtag}
      />
    </div>
  );
}

export default SearchRList;
