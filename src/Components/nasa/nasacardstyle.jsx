import { useEffect, useState } from "react"

export function Nasa(){
    const [mars, setMars] = useState({});
    const url="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY&quot";
    useEffect((url)=>{
        fetch()
        .then(res=> res.json())
        .then(obj=>{
            setMars(obj);
        })
    },[]);


    return(
        <div className="container-fluid">
            <h2>Mars Rover Photos</h2>
            <main className="d-flex flex-wrap">
                {
                    mars.photos.map(photo=>
                        <div key={photo.id} className="card p-2 m-2" style={{width:'200px'}}>
                            <img src={photo.img_src} className="card-img-top" height="150"/>
                            <div className="card-header">
                                <h3>{photo.id}</h3>
                            </div>
                            <div className="card-body">
                                <dl>
                                    <dt>Camera</dt>
                                    <dd>{photo.camera.full_name}</dd>
                                    <dt>Rover</dt>
                                    <dd>{photo.rover.name}</dd>
                                </dl>
                            </div>
                            <div className="card-footer">
                                <a className="btn btn-primary w-100" target="_blank" href={photo.img_src}>View Photo</a>
                            </div>
                        </div>
                        )
                }
            </main>
        </div>
    )
}
