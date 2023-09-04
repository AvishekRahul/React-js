import { useEffect, useState } from "react"

export function StyleBinding(){

    const [styleObj, setStyleObj] = useState({display:'none'});

    function  handlePreviewChange(e){
        if(e.target.checked){
            setStyleObj({
                display:'block'
            })
        } else {
            setStyleObj({
                display:'none'
            })
        }
    }

    return(
        <div className="container-fluid">
           <h2>Product Details</h2>
           <dl>
            <dt>Name</dt>
            <dd>Realme C55</dd>
            <dt>Preview <span className="form-switch"> <input type="checkbox" onChange={handlePreviewChange} className="form-check-input" /> </span> </dt>
            <dd style={styleObj}>
                <img src="realme.jpg" />
            </dd>
           </dl>
        </div>
    )
}