import { useEffect, useState } from "react"

export function StyleBinding(){

    const [styleObject, setStyleObject] = useState({border:'', boxShadow:''})

    useEffect(()=>{
        setStyleObject({
            border: '1px solid red',
            boxShadow: '2px 2px 2px red'
        })
    },[]);

    function handleNameChange(e){
        if(e.target.value==""){
            setStyleObject({
                border: '1px solid red',
                boxShadow: '2px 2px 2px red'
            })
        } else {
            setStyleObject({
                border: '1px solid green',
                boxShadow: '2px 2px 2px green'
            })
        }
    }

    return(
        <div className="container-fluid">
            <h3>User Login</h3>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" placeholder="Name Required" onChange={handleNameChange} style={styleObject} /></dd>
            </dl>
        </div>
    )
}
