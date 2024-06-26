import Rating from './Rating.jsx'
export default function BookView({selectedBook}){

    return(
        <>
        <h1>{selectedBook.name}</h1>
        <div className='bookView'>
            <div>
                <img src={selectedBook.coverImg} className="coverImage" alt="" />
            </div>
            <div>
                {selectedBook.sequels && (
                    <>
                        <h2>Sequels</h2>
                        <ol>
                        {selectedBook.sequels.map((sequel, index) => 
                        <li key={index}>{sequel}</li>) 
                            }
                        </ol>
                    </>
                )}

                <h2>Rating</h2>
                    <Rating bookRating = {selectedBook.rating}/>
            </div>
        </div>
        </>
    )
}