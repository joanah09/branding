import {useParams} from "react-router-dom"
import { Link } from "react-router-dom"

function NewsDetail(props) {
    console.log("NEWS DETAIL", props)

    return(
        <>
        <h1>{props.item.id}</h1>
        <p>{props.item.type}</p>
        </>
        
    )
}

export default NewsDetail