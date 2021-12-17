export default function Movie ({posterURL, title, id}){
    return (
        <>
            <img src={posterURL} alt={title}></img>
        </>
    )
}