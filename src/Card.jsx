import profilePic from './assets/picpro.jpg'

function Card() {
    return (
        <div className="card">
            <img className = "card-image" src={profilePic} alt="Profile Picture" />
            <h2 className = "card-title">Asim Rana</h2>
            <p className = "card-text">I make Youtube videos and play video games</p>
        </div>
    )
}

export default Card;