import { formatarPreco } from "../../utils/formatarValor";
import "./BookInfoViewStyle.css";
import { useLocation } from "react-router-dom";

export function BookInfoView() {
  const location = useLocation();
  const book = location.state?.book;

  return (
    <div className="book">
      <div className="book-container">
        <div className="book-image">
          <img src={book?.image} alt="img" />
        </div>
        <div className="book-info">
          <h3>{book?.title}</h3>
          <div className="book-price">
            Por apenas R$ {formatarPreco(book?.price)}
          </div>
          <div className="book-description">
            <h4>Descrição</h4>

            <p>{book.description}</p>
          </div>

          <div className="book-sale" href="">
            <a
              href={book.buyLinks.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com vendedor
            </a>
            <img src={book.buyLinks.whatsapp.icon} alt="Amazon" />
          </div>
        </div>
      </div>
    </div>
  );
}
