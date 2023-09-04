/* Handling Generic Elements:
- Generic elements are the HTML elements that have a default functionality configured.
- When you define events both generic and custom events will fireup.
- You have to disable the default event configured for element by using
            "preventDefault()"
- preventDefault() is a method of event argument. You have to access with reference of event */
export function EventBinding(){
    return(
        <div className="container-fluid">
            <h3>Event Binding</h3>
            <form onSubmit={(e)=>{alert("Form Submits its data to API"); e.preventDefault()}}>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" name="Name"/></dd>
                    <dt>Age</dt>
                    <dd><input type="number" name="Age"/></dd>
                </dl>
                <button>Submit</button>
            </form>
        </div>
    )
}
