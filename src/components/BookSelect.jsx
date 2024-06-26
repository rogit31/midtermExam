export default function BookSelect({selectedBook, bookArray, onClick}){
    return(
        <>
        <nav className="bookSelectNav">
            <ul>
                {bookArray.map((book) => 
                    <li key={book.id}
                    className="bookSelectLi"
                    onClick={() => onClick(book.id)}
                    style={{backgroundColor: book.id== selectedBook.id ? '#242424' : ''}}
                      >{book.name}</li>
                )}
            </ul>
        </nav>
        </>
    )
}