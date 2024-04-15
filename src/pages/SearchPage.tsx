import { useSearchRestaurants } from "@/api/RestaurantApi";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { city } = useParams();
  const { results, isLoading } = useSearchRestaurants(city);

  return (
    <div>
      SearchPage {city}{" "}
      <span>
        {results?.data.map((restaurant) => (
          <span>
            {restaurant.restaurantName}, {restaurant.city}
          </span>
        ))}
      </span>
    </div>
  );
};

export default SearchPage;
