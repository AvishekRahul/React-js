/* It is the process of notifying the subscribers of child and to its parent.
- If user clicks on child element, it propagates notification to its parent.
- You can stop the propagation by using the event argument method.
        e.stopPropagation()
- It is defined only for child element event. */

export function EventBinding(){
    return(
        <div className="container-fluid">
            <h3>Event Binding</h3>
            <div onClick={()=>{alert("Div Clicked")}} className="bg-dark text-white p-3">
                <p>Parent Element</p>
                <button onClick={(e)=>{alert("Button Clicked"); e.stopPropagation()}}>Child Element</button>
            </div>
        </div>
    )
}