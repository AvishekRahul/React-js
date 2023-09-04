export function Button(props){
    return(
        <div className={`${props.color,props.text} text-white mt-2 mb-2 p-2 d-flex justify-content-between`}>
           
            
           <Button>{props}</Button>
            
        </div>
    )
}