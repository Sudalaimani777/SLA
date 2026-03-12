const BlockAndInline = ({contents}) => {
  console.log(contents)
  const {paraContent, headingContents, spanContent} = contents;
  const {headingOne, headingTwo, headingThree, headingFour, headingFive, headingSix} = headingContents;
  return (
    <>
      <div>
        {/* Heading Contents */}
        <h1>{headingOne}</h1>
        <h2>{headingTwo}</h2>
        <h3>{headingThree}</h3>
        <h4>{headingFour}</h4>
        <h5>{headingFive}</h5>
        <h6>{headingSix}</h6>

        {/* Paragraph Contents */}
        <p>{paraContent}</p>

        {/* Span Content */}
        <span>{spanContent}</span>
      </div>
    </>
  )
}

export default BlockAndInline