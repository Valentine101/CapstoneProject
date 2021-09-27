import { React } from 'react';
import '../Styles/AlumniCard.css'
import '../Styles/GSColors.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

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
                {props.medias !== undefined && props.medias.map((media) =>
                    <Button 
                        className="gs-background-blue gs-text-gray" 
                        key={media.platform} 
                        onClick={() => window.open(media.link, "_blank")}
                        >{media.platform}
                    </Button>
                )}
            </Card.Body>
        </Card>
    )
}

export default AlumniCard