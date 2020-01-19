import React, { useState} from 'react'; 
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './styles/games.css'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'



const Games = () => {
    const[games , setgames]=useState([
        {
            src : "https://demo.w3layouts.com/demos_new/31-12-2016/games_zone-demo_Free/617988487/web/images/tg4.jpg",
            genre : "sports",
            reldate : "29-02-2019"
        },
        {
            src : "https://demo.w3layouts.com/demos_new/31-12-2016/games_zone-demo_Free/617988487/web/images/tg3.jpg",
            genre : "strategy",
            reldate : "29-02-2019"
        },
        {
            src : "https://demo.w3layouts.com/demos_new/31-12-2016/games_zone-demo_Free/617988487/web/images/tg1.jpg",
            genre : "adventure",
            reldate : "29-02-2019"
        }  
    ])

    const[more]=useState(
        [
            {
                src : "https://demo.w3layouts.com/demos_new/31-12-2016/games_zone-demo_Free/617988487/web/images/tg4.jpg",
                genre : "sports",
                reldate : "29-02-2019"
            },
            {
                src : "https://demo.w3layouts.com/demos_new/31-12-2016/games_zone-demo_Free/617988487/web/images/tg3.jpg",
                genre : "strategy",
                reldate : "29-02-2019"
            },
            {
                src : "https://demo.w3layouts.com/demos_new/31-12-2016/games_zone-demo_Free/617988487/web/images/tg1.jpg",
                genre : "adventure",
                reldate : "29-02-2019"
            },
            {
                src : "https://demo.w3layouts.com/demos_new/31-12-2016/games_zone-demo_Free/617988487/web/images/tg2.jpg",
                genre : "adventure",
                reldate : "29-02-2019"
            },
            {
                src : "https://demo.w3layouts.com/demos_new/31-12-2016/games_zone-demo_Free/617988487/web/images/tg2.jpg",
                genre : "adventure",
                reldate : "29-02-2019"
            },
            {
                src : "https://demo.w3layouts.com/demos_new/31-12-2016/games_zone-demo_Free/617988487/web/images/tg2.jpg",
                genre : "adventure",
                reldate : "29-02-2019" 
            },
            {
                src : "https://demo.w3layouts.com/demos_new/31-12-2016/games_zone-demo_Free/617988487/web/images/tg2.jpg",
                genre : "adventure",
                reldate : "29-02-2019"
            },
            {
                src : "https://demo.w3layouts.com/demos_new/31-12-2016/games_zone-demo_Free/617988487/web/images/tg2.jpg",
                genre : "adventure",
                reldate : "29-02-2019"
            },
            {
                src : "https://demo.w3layouts.com/demos_new/31-12-2016/games_zone-demo_Free/617988487/web/images/tg2.jpg",
                genre : "adventure",
                reldate : "29-02-2019"
            }
        ]
    )
    const [buttonshow , setbuttonshow] = useState(true)
    const showmore = () => {
        setgames(more)
        setbuttonshow(false)
    }
   
    return(

<Container className="mt-5 text-center">
<h2>our games</h2>
<p className="text-center">Verge Games ® is an indie game company founded by Victor Aremu driven by a passion for game 
        development.
</p>
    <Row>
    {games.map((label , i)=>{
     return <Col key={i}>
     <div className="mt-3 cardimage">
    <p>{label.genre} || {label.reldate}</p>
     <Image src={label.src} alt="games"/>
     </div>
     </Col>
})}
    </Row>
    
{buttonshow ?  <Button variant="secondary" className="mt-3" onClick={showmore}>
   <p>show more</p>
    </Button> : ""  }
</Container>
    )
}
export default Games


