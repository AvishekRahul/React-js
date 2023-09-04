import { useEffect, useState } from "react"

export function Nasaa(){
    const [mars, setMars] = useState({});
    const url="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY&quot";

    useEffect(()=>{
        fetch()
        .then(res=> res.json())
        .then(obj=>{
            setMars(obj);
        })
    },[]);


    return(
        <div className="container-fluid">
            <h2>Mars Rover Photos</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Photo Id</th>
                        <th>Preview</th>
                        <th>Camera Name</th>
                        <th>Rover Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mars.photos.map(photo=>
                            <tr key={photo.id}>
                                <td>{photo.id}</td>
                                <td>
                                    <a href={photo.img_src} target="_blank">
                                    <img src={photo.img_src} width="100" height="100" />
                                    </a>
                                </td>
                                <td>{photo.camera.full_name}</td>
                                <td>{photo.rover.name}</td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    )
}
