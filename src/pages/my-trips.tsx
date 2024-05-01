import { CitiesList } from "../components/app/cities-list";
import { Container } from "../components/layout/container";
import { useCitiesState } from "../hooks/cities.hook";

export const MyTrips = () => {
  const { cities, limit, offset, status } = useCitiesState();

  return (
    <Container
      className="flex flex-col max-w-screen-md justify-center align-middle mx-auto my-4"
      status={status}
    >
      <CitiesList cities={cities} status={status} />
    </Container>
  );
};
