export default function Movie({ posterURL, title }) {
    return (
        <>
            <img src={posterURL} alt={title}></img>
        </>
    )
}