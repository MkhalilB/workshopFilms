import CardMovie from "./CardMovie"

const ListMovie=({movies})=>{
    return(
        <div className="ListMovie">
            {movies.map((el,i,t) => <CardMovie el= {el} />)}
        </div>
    )
}

export default ListMovie