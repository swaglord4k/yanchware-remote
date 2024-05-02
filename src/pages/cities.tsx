import { useNavigate } from "react-router-dom";
import { CitiesList } from "../components/app/cities-list";
import { Card } from "../components/ui/card";
import { Pagination } from "../components/ui/pagination";
import { useCitiesState } from "../hooks/cities.hook";
import { useAppDispatch } from "../store/hooks";
import { setLimit, setOffset } from "../store/slices/cities.slice";

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { cities, limit, offset, status, count } = useCitiesState();

  return (
    <main>
      <Card status={status} className="mx-auto my-4 max-w-screen-md">
        <CitiesList
          cities={cities}
          status={status}
          onClick={(city) => {
            navigate(`/city/${city.cityId}`);
          }}
        />
        {cities?.length && (
          <Pagination
            total={count}
            page={offset}
            pageSize={limit}
            onNextClicked={() => dispatch(setOffset(offset + 1))}
            onPreviousClicked={() => dispatch(setOffset(offset - 1))}
            onPageClicked={(page) => dispatch(setOffset(page))}
            onSizeChange={(size) => dispatch(setLimit(size))}
          />
        )}
      </Card>
    </main>
  );
};
