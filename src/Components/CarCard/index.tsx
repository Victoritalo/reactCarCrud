import { NewCarProps } from "../../database/carsdata_bd";
import { Button } from "../Button";
import { CardContainer } from "./style";

interface CarCardProps {
  car: NewCarProps;
  delete: (id: string) => void;
}

export function CarCard(props: CarCardProps) {
  return (
    <>
      <CardContainer style={{ backgroundColor: props.car.color }}>
        <h2>{props.car.model}</h2>
        <p>{props.car.manufacturer}</p>
        <p>{props.car.carYear}</p>
        <Button title={"Delete"} delete={() => props.delete(props.car.id)} />
      </CardContainer>
    </>
  );
}
