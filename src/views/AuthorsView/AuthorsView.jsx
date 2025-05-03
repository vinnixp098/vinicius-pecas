
import "./AuthorsViewStyle.css";
import { AuthorsData } from "../../app/AuthorsData";
import { useNavigate } from "react-router-dom";

export function AuthorsView() {
  const navigate = useNavigate();
  return (
    <div className="main-authors">
      <h1>Autores</h1>
      <div className="authors">
        {AuthorsData.map((author) => (
          <div className="author-item" key={author.id} onClick={()=>{
            navigate(`/author-info/${author.name}`, { state: { author } });
          }}>
            <img src={author.imageAuthor} alt="author1" title="Liderança em Design" />
            <div className="author-information">
              <div className="author-name">
                Escritor <small>{author.name}</small>
              </div>
              <div className="author-birth">
                Nascimento <small>{author.birth}</small>
              </div>
              <div className="author-nacionality">
                Nacionalidade <small>{author.nationality}</small>
              </div>
              <div className="author-biography">
                <h3>Biografia</h3>
                {author.biography}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
