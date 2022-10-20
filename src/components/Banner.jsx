import Carousel from "react-bootstrap/Carousel";

export const Banner = () => {
  const imagenes = ['banner1','banner2'];

  const carouselItems = [];

  imagenes.forEach((img, i) => {
    carouselItems.push(<Carousel.Item key={i}><img className="d-block w-100" src={require(`../img/${img}.png`)} alt={img}/></Carousel.Item>);
  });

  return (
    <Carousel indicators={false} controls={false}>
      {carouselItems}
    </Carousel>
  );
};
