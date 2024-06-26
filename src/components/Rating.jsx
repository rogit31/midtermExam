export default function Rating({bookRating}){

    const stars = [];

    for(let i=0; i<bookRating; i++){
        stars.push(<span key={i}>⭐</span>)
    }

    return(
        <>
            {stars}
        </>
    )

}