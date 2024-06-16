import './Home.css'
import NavBar from '../Component/NavBar'
import Footer from '../Component/Footer';

function Home(){
    return(

        <>
            <NavBar/>
            <div className='body'>
                <div className="left">
                    This is Left
                </div>
                <div className="right">
                    this is right
                </div>
            </div>
            <Footer/>
        </>
    )
}


export default Home;