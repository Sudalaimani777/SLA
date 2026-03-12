import { blockAndInline } from "../../props/blockAndInline"
import BlockAndInline from "./BlockAndInline"

const Semantic = () => {
  return (
    <>
      <section>
        <BlockAndInline contents={blockAndInline}/>
      </section>
    </>
  )
}

export default Semantic