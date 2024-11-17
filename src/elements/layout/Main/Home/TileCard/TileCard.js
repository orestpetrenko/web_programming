import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import "./TileCard.scss";

// Функція для обрізки опису автомобіля
function rightSlice(text) {
    if (text.length > 200) {  // Можна змінити кількість символів
        return text.slice(0, text.indexOf(" ", 200)) + "...";
    } else {
        return text;
    }
}

function TileCard({ data: props }) {
    let nav = useNavigate();

    return (
        <Card className="tile-card p-0 border-0" onClick={() => nav(`/catalog/${props.id}`)}>
            <Card.Img variant="top" src={props.imageUrls[0]} className='rounded' />
            <Card.Title>{props.name}</Card.Title>
            <Card.Text>{rightSlice(props.description)}</Card.Text>
        </Card>
    );
}

export default TileCard;
