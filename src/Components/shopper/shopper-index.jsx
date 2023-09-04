import { ShopperHeader } from "./shopper-header";
import { ShopperMain } from "./shopper-main";

export function ShopperIndex(){
    return(
        <div className="container-fluid">
            <ShopperHeader />
            <section>
                <ShopperMain />
            </section>
        </div>
    )
}