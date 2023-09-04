export  function ShopperHeader(){
    var userName = "John";
    return(
        <header>
            <nav className="d-flex justify-content-between">
                <div>
                   <span className="h4">Shopper.</span>
                   <span className="ms-2">Hello ! {userName}</span>
                </div>
                <div>
                    <span className="me-3">Home</span>
                    <span className="me-3">Shop</span>
                    <span className="me-3">Pages</span>
                    <span className="me-3">Blog</span>
                    <span className="me-3">Docs</span>
                    <span className="me-3">Catalog</span>
                </div>
                <div>
                    <span className="bi bi-search me-3"></span>
                    <span className="bi bi-heart me-3"></span>
                    <span className="bi bi-person me-3"></span>
                    <span className="bi bi-cart3 me-3"></span>
                </div>
            </nav>
            <article className="text-center bg-dark text-white p-1 mt-4">
                <span className="bi bi-lightning-fill text-warning"></span>
                HAPPY HOLIDAY DEALS ON EVERYTHING 
                <span className="bi bi-lightning-fill text-warning"></span>
            </article>
        </header>
    )
}