import { City } from "../../models/city.model";
import { Stateful } from "../../models/stateful.model";
import { Status } from "../../models/status.model";
import { List } from "../ui/list";
import { ListItem } from "../ui/list-item";

export type CitiesListProps = {
  cities: City[];
  onClick?: (city: City) => void;
} & Stateful;

export const CitiesList = ({ cities, status, onClick }: CitiesListProps) => {
  if (!cities?.length && status === Status.idle) {
    return <p>There are not cities to show</p>;
  }
  return (
    <List>
      {cities?.map((city) => (
        <ListItem key={city.cityId} onClick={() => onClick?.(city)}>
          <p>{city.cityId}</p>
          <p>{city.name}</p>
          <p>{city.country}</p>
        </ListItem>
      ))}
    </List>
  );
};
