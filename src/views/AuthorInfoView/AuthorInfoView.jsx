import "./AuthorInfoViewStyle.css";
import { useLocation } from "react-router-dom";

export function AuthorInfoView() {
  const location = useLocation();
  const author = location.state?.author;

  return (
    <div className="book">
      <div className="book-container">
        <div className="book-image">
          <img
            src={author?.imageAuthor}
            alt={author?.name}
            title={author?.name}
          />
        </div>
        <div className="book-info">
          <h2>Título</h2>
          <h3>{author?.name}</h3>
          <div className="book-sinopse">
            <h3>Autor</h3>
            {author?.name}
          </div>
          <div className="book-sinopse">
            <h3>Ano da publicação</h3>
            {/* {author?.published} */}
          </div>
          <div className="book-sinopse">
            <h3>Preço médio</h3>
            {/* UR$ {book?.price} */}
          </div>
        </div>
        <div className="author-books">
          
        </div>
      </div>
    </div>
  );
}
