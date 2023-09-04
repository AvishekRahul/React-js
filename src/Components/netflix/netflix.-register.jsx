export function NetflixRegister(){
    return(
       <div className="w-100 d-flex justify-content-center">
         <div>
            <div className="input-group input-group-lg">
                <input type="email" placeholder="Your email address" className="form-control bg-dark text-white" />
                <button className="btn btn-danger ms-2">
                    Get Started <span className="bi bi-chevron-right"></span>
                </button>
            </div>
        </div>
       </div>
    )
}