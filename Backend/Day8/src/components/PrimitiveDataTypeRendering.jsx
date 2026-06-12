

const PrimitiveDataTypeRendering = () => {
    const userName = "Sudalaimani Kannan";
    const isActive = true;
    const favoutiteNumber = 7;
  return (
    <>
        <p>{userName}</p>
        <p>{isActive && "HI"}</p>
        <p>{favoutiteNumber}</p>
    </>
  )
}

export default PrimitiveDataTypeRendering