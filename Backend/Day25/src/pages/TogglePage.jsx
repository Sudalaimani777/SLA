import useTheme from "../hooks/useToggle"

const TogglePage = () => {

    const { toggle, handleToggle, style } = useTheme()

    return (
        <>
            <section className={style}>
                <h1>Content</h1>
            </section>
            <button onClick={handleToggle}>{toggle ? "Show" : "Hide"}</button>
        </>
    )
}

export default TogglePage