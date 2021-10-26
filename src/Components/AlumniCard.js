import { React } from 'react';
import '../Styles/AlumniCard.css'
import Card from 'react-bootstrap/Card'
import { SocialIcon } from 'react-social-icons';

const AlumniCard = (props) => {
    props = props.alumni

    return(
        <Card className="alumni-card">
            <Card.Img variant="top" height={275} src={props.image}/>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                {props.class !== undefined &&
                    <Card.Subtitle className="mb-2 text-muted">Class of {props.class}</Card.Subtitle>
                }
                <Card.Subtitle className="mb-2 text-muted">{props.sport}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{props.city}, {props.state}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">{props.major}</Card.Subtitle>
                {props.medias !== undefined && props.medias.map((media) =>
                    <SocialIcon url={media}/>
                )}
            </Card.Body>
        </Card>
    )
}

export default AlumniCard