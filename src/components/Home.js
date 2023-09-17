 import profilePic from '../assets/profile-picture.png'
 
 
const Home = () => {
    return (<div className="container">
        <div className="profile">
            <img src={profilePic} alt=""/>
            
            

        </div>
        <h6 className='bienvenido'>Mi portafolio</h6>
        <h1 className='color'>Sergio Quintero</h1>
       
        
    
    </div>);
}

export default Home;