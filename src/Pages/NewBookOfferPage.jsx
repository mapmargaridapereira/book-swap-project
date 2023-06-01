import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5005";

import booksService from "../../Services/book.service";

function NewBookOffer(props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  const [publisher, setPublisher] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();

    const requestBody = {title, author, genre, description, publisher};

    booksService.createOffer(requestBody)
    .then(()=>{
        setTitle("");
        setAuthor("");
        setGenre("");
        setDescription("");
        setPublisher("");
/*         props.refreshBooks(); */
    })
    .catch((error)=>console.log(error));
  }

  return (
    <div className="NewBookOffer">
      <h3>Add Project</h3>

      <form>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Author:</label>
        <textarea
          type="text"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

<label>Genre:</label>
        <textarea
          type="text"
          name="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />

<label>Description:</label>
        <textarea
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

<label>Publisher:</label>
        <textarea
          type="text"
          name="publisher"
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default NewBookOffer;