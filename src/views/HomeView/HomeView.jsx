import "./HomeViewStyle.css";
import { PecasData } from "../../app/PecasData";
import { useNavigate } from "react-router-dom";
import { formatarPreco } from "../../utils/formatarValor";

export function HomeView() {
  const navigate = useNavigate();
  return (
    <div className="main">
      <h1>Recomendados</h1>
      <div className="books">
        {PecasData.map((book) => (
          <div
            className="book-item"
            key={book.id}
            onClick={() => {
              navigate(`/book-info/${book.title}`, { state: { book } });
            }}
          >
            <img src={book.image} alt={book.title} title={book.title} />
            <div className="book-information">
              <div className="book-title">{book.title}</div>
              <div className="book-price"> Por Apenas R$ {formatarPreco(book.price)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
