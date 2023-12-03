import { useState, useCallback, useEffect } from "react";
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
  InputSearch,
} from "./style";

export function App() {
  const [cars, setCars] = useState<NewCarProps[]>(carsData);
  const [model, setModel] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [carYear, setCarYear] = useState("");
  const [color, setColor] = useState("");
  const [carsFilter, setCarsFilter] = useState<NewCarProps[]>([]);
  const [search, setSearch] = useState("");

  const addNewCar = useCallback(() => {
    if (
      model.trim() === "" ||
      manufacturer.trim() === "" ||
      carYear.trim() === "" ||
      color.trim() === ""
    )
      return window.alert(
        "Please review your submission as some fields are still empty."
      );

    if (isNaN(Number(carYear)))
      return window.alert("Please enter a valid number for the year.");

    if (Number(carYear.length) < 4)
      return window.alert("Year must have 4 digits");

    const newCar: NewCarProps = {
      id: uuid(),
      model: model,
      manufacturer: manufacturer,
      carYear: Number(carYear),
      color: color,
    };
    setCars([newCar, ...cars]);
    setModel("");
    setManufacturer("");
    setCarYear("");
    setColor("");
  }, [model, manufacturer, carYear, color, cars]);

  useEffect(() => {
    if (search === "") return setCarsFilter(cars);

    const filterCar = cars.filter((car) => {
      return car.model.toLowerCase().includes(search.toLowerCase());
    });

    setCarsFilter(filterCar);
  }, [search, cars]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
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
                required
              />
              <Label htmlFor="brand">Brand</Label>
              <Input
                value={manufacturer}
                name="brand"
                onChange={(e) => setManufacturer(e.target.value)}
                type="text"
                placeholder="Car's Brand"
                required
              />
              <Label htmlFor="carYear">Year</Label>
              <Input
                value={carYear}
                name="carYear"
                onChange={(e) => setCarYear(e.target.value)}
                type="number"
                placeholder="Add car's year"
                required
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
            <FormTitle>Car List - Search</FormTitle>
            <InputSearch
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search by Model"
            />
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
                {carsFilter.map((car) => (
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
