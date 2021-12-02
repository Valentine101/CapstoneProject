import { React } from 'react';
import '../Styles/AlumniCard.css'
import Card from 'react-bootstrap/Card'
import { SocialIcon } from 'react-social-icons';

const AlumniCard = (props) => {
    props = props.alumni

    return(
        <Card className="alumni-card">
            <Card.Img variant="top" height={275} src={props.image || "images/missing-photo.jpeg"}/>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                {props.class !== undefined &&
                    <Card.Subtitle className="mb-2 text-muted">Class of {props.class}</Card.Subtitle>
                }
                <Card.Subtitle className="mb-2 text-muted">{props.sport}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{props.city}, {props.state}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{props.major}</Card.Subtitle>
                {props.socials && props.socials.map((media,index) =>
                    <SocialIcon 
                        style={{ marginLeft: "0.5em" }} 
                        key={"media"+index} 
                        url={media.includes("https") ? media : "https://"+media}
                        target="_blank"
                    />
                )}
            </Card.Body>
        </Card>
    )
}

export default AlumniCard