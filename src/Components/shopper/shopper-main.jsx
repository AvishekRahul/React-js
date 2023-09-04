import './shopper-main.css';

export function ShopperMain(){
    return(
        <main className="row p-2">
            <div className="card-women col text-center">
                <h1 className="text-white mt-4 mb-4">Women</h1>
                <button className="btn mt-4 btn-light">Shop <span className="bi bi-arrow-right"></span> </button>
            </div>
            <div className="card-men col text-center">
            <h1 className="text-white mt-4 mb-4">Men</h1>
                <button className="btn btn-light mt-4">Shop <span className="bi bi-arrow-right"></span> </button>
            </div>
            <div className="card-kids col text-center">
            <h1 className="text-white mb-4 mt-4">Kids</h1>
            <button className="btn mt-4 btn-light">Shop <span className="bi bi-arrow-right"></span> </button>
            </div>
        </main>
    )
}