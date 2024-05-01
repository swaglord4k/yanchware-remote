/* eslint-disable react-hooks/exhaustive-deps */
import { useParams } from "react-router-dom";
import { Container } from "../components/layout/container";
import { useCityState } from "../hooks/city.hook";

export const City = () => {
  const params = useParams();
  const { city, status } = useCityState(params.cityId);

  return (
    <Container
      className="flex flex-col max-w-screen-md justify-center align-middle mx-auto my-4"
      status={status}
    >
      <p>{city?.cityId}</p>
      <p>Climate</p>
      <p>avg: {city?.climate?.averageTemperature}</p>
      <p>rainfal: {city?.climate?.rainfall}</p>
      <p>{city?.costOfLivingIndex}</p>
      <p>{city?.country}</p>
      <p>Coworking Spaces</p>
      {city?.coworkingSpaces?.map((space) => (
        <div key={`${space.name} ${space.address}`}>
          <p>{space.name}</p>
          <p>{space.address}</p>
          <p>{space.rating}</p>
        </div>
      ))}
      <p>Internet Speed</p>
      <p>{city?.internetSpeed?.download}</p>
      <p>{city?.internetSpeed?.upload}</p>
      <p>{city?.name}</p>
      <p>{city?.safetyIndex}</p>
    </Container>
  );
};
