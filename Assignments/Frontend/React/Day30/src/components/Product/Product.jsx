import Dummy from "../Dummy";

const Product = ({data}) => {
    console.log(data)
    return (
        <>
            <section>
                {
                   data.map((val,index) => (
                    <p key={index}>
                        {val.name}
                    </p>
                   ))
                }
            </section>
            
        </>
    )
}
export default Product;