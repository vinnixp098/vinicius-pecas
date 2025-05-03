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
          <img src={book?.image} alt={book?.title} title={book?.title}/>
        </div>
        <div className="book-info">
          <h3>{book?.title}</h3>
          <div className="book-price">
           Por apenas R$ {formatarPreco(book?.price)}
          </div>
          <div className="book-sinopse">
            <h4>Falar com vendedor</h4>
            <div className="books-sale">
              <a
                href={book.buyLinks.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={book.buyLinks.whatsapp.icon} alt="Amazon" />
              </a>
            </div>
          </div>
          <div className="book-sinopse">
            <h3>Descrição</h3>
            {book?.description}
          </div>
        </div>
      </div>
    </div>
  );
}
