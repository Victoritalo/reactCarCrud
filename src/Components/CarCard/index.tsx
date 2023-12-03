import { NewCarProps } from "../../database/carsdata_bd";
import { Button } from "../Button";
import { CardContainer } from "./style";
export function CarCard(props: {
  car: NewCarProps;
  deletar: (id: string) => void;
}) {
  return (
    <>
      <CardContainer style={{ backgroundColor: props.car.color }}>
        <h2>{props.car.model}</h2>
        <p>{props.car.manufacturer}</p>
        <p>{props.car.carYear}</p>
        <Button
          title={"Delete"}
          deleteFunction={() => props.deletar(props.car.id)}
        />
      </CardContainer>
    </>
  );
}
