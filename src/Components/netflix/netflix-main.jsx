import './netflix-main.css';
import { NetflixRegister } from './netflix-register';

export function NetflixMain(){
    return(
        <main>
            <h1>Unlimited movies, TV shows and more</h1>
            <p>Watch anywhere. Cancel anytime.</p>
            <div>
            <NetflixRegister />
            </div>
        </main>
    )
}