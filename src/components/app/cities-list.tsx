import { SlArrowRight } from "react-icons/sl";
import { Loading } from "../../app/loading";
import { City } from "../../models/city.model";
import { Stateful } from "../../models/stateful.model";
import { Status } from "../../models/status.model";
import { List } from "../ui/list";
import { ListItem } from "../ui/list-item";
import { CityHeader } from "./city-header";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export type CitiesListProps = {
  cities: City[];
  onClick?: (city: City) => void;
} & Stateful;

export const CitiesList = ({ cities, status, onClick }: CitiesListProps) => {
  if (!cities?.length && status === Status.idle) {
    return <p>There are not cities to show</p>;
  }
  if (status === Status.pending) {
    return <Loading />;
  }
  return (
    <List>
      {cities?.map((city) => (
        <ListItem
          className="flex justify-between items-center p-2 border-b border-gray-100"
          key={city.cityId}
          onClick={() => onClick?.(city)}
        >
          <CityHeader city={city} />{" "}
          <MdOutlineKeyboardArrowRight className={"fill-gray-500"} />
        </ListItem>
      ))}
    </List>
  );
};
