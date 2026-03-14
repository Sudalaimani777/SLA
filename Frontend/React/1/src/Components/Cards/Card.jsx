const Card = ({cardData}) => {
    const {cardName} = cardData;
    console.log(cardName)
    return(
        <>
            <section>
                <h1 style={{color: "red"}}>{cardName}</h1>
            </section>
        </>
    )
}
export default Card;