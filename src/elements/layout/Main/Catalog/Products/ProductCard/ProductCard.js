import TextWithGap from "elements/components/TextWithGap/TextWithGap";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './ProductCard.scss';

function ProductCard({ data }) {
    const nav = useNavigate();

    return (
        <Card border="primary" className="productCard m-2">
            <Card.Img variant="top" src={data.imageUrls[0]} className='rounded' />
            <Card.Title className="text-center">{data.name}</Card.Title>
            <div className="flex-grow-1" />
            <Card.Text as='div' className="spacingChild">
                <TextWithGap start="Year:" end={`${data.year}`} />
                <TextWithGap start="Colors:" end={data.colors} />
                <TextWithGap start="Power:" end={`${data.power} HP`} />
                <TextWithGap classesForText="fw-bolder" start="Price:" end={`$ ${data.price}`} />
            </Card.Text>
            <Button variant="primary" className="my-2" onClick={() => nav(`${data.id}`)}>View More</Button>
        </Card>
    );
}

export default ProductCard;
