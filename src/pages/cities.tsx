import { useNavigate } from "react-router-dom";
import { CitiesList } from "../components/app/cities-list";
import { Container } from "../components/layout/container";
import { useCitiesState } from "../hooks/cities.hook";
import { Pagination } from "../components/ui/pagination";
import { useAppDispatch } from "../store/hooks";
import { setLimit, setOffset } from "../store/slices/cities.slice";

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { cities, limit, offset, status, count } = useCitiesState();

  return (
    <Container
      className="flex flex-col max-w-screen-md justify-center align-middle mx-auto my-4"
      status={status}
    >
      <CitiesList
        cities={cities}
        status={status}
        onClick={(city) => {
          navigate(`/city/${city.cityId}`);
        }}
      />
      <Pagination
        total={count}
        page={offset}
        pageSize={limit}
        onNextClicked={() => dispatch(setOffset(offset + 1))}
        onPreviousClicked={() => dispatch(setOffset(offset - 1))}
        onPageClicked={(page) => dispatch(setOffset(page))}
        onSizeChange={(size) => dispatch(setLimit(size))}
      />
    </Container>
  );
};
