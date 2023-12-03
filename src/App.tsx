import { useState, useCallback } from "react";
import { NewCarProps } from "./database/carsdata_bd";
import { v4 as uuid } from "uuid";
import { carsData } from "./database/carsdata_bd";
import { CarCard } from "./Components/CarCard/index";
import {
  FormContainer,
  MainContainer,
  FormTitle,
  TitleDiv,
  FormBodyStyle,
  FormGroup,
  Input,
  Label,
  SubmitBtn,
  CarsContainer,
  InfoDiv,
  ListContainer,
} from "./style";

export function App() {
  const [cars, setCars] = useState<NewCarProps[]>(carsData);
  const [model, setModel] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");

  const addNewCar = useCallback(() => {
    if (
      model.trim() === "" ||
      manufacturer.trim() === "" ||
      year.trim() === "" ||
      color.trim() === ""
    )
      return window.alert(
        "Please review your submission as some fields are still empty."
      );
    const newCar: NewCarProps = {
      id: uuid(),
      model: model,
      manufacturer: manufacturer,
      year: Number(year),
      color: color,
    };
    setCars([newCar, ...cars]);
    setModel("");
    setManufacturer("");
    setYear("");
    setColor("");
  }, [model, manufacturer, year, color, cars]);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    addNewCar();
  };
  function deleteCar(id: string) {
    const updatedCars = cars.filter((car) => car.id !== id);
    setCars(updatedCars);
  }

  return (
    <>
      <MainContainer>
        <FormContainer>
          <TitleDiv>
            <FormTitle>Add New Car</FormTitle>
          </TitleDiv>
          <FormBodyStyle>
            <FormGroup>
              <Label htmlFor="model">Model</Label>
              <Input
                value={model}
                name="model"
                onChange={(e) => setModel(e.target.value)}
                type="text"
                placeholder="Car's model"
              />
              <Label htmlFor="brand">Brand</Label>
              <Input
                value={manufacturer}
                name="brand"
                onChange={(e) => setManufacturer(e.target.value)}
                type="text"
                placeholder="Car's Brand"
              />
              <Label htmlFor="carYear">Year</Label>
              <Input
                value={year}
                name="carYear"
                onChange={(e) => setYear(e.target.value)}
                type="text"
                placeholder="Add car's tear"
              />
              <Label htmlFor="carColor">Color</Label>
              <Input
                value={color}
                name="carColor"
                onChange={(e) => setColor(e.target.value)}
                type="color"
                placeholder="Choose a color"
              />
              <SubmitBtn onClick={handleSubmit}>Submit</SubmitBtn>
            </FormGroup>
          </FormBodyStyle>
        </FormContainer>
        <CarsContainer>
          <TitleDiv>
            <FormTitle>Car List</FormTitle>
          </TitleDiv>
          <ul>
            <InfoDiv>
              <p>Model</p>
              <p>Brand</p>
              <p>Year</p>
              <p>Actions</p>
            </InfoDiv>
            <ListContainer>
              <li>
                {cars.map((car) => (
                  <CarCard key={car.id} car={car} deletar={deleteCar} />
                ))}
              </li>
            </ListContainer>
          </ul>
        </CarsContainer>
      </MainContainer>
    </>
  );
}
