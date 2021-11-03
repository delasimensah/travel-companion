import { useState, useEffect } from "react";
import { getPlacesData } from "./api/travelAdvisorApi";

//components
import Header from "./components/header/Header";
import List from "./components/list/List";
import Map from "./components/map/Map";

const App = () => {
  const [coords, setCoords] = useState({});
  const [places, setPlaces] = useState([]);
  const [bounds, setBounds] = useState(null);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [loading, setLoading] = useState(false);
  const [childClicked, setChildClicked] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoords({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    if (bounds) {
      setLoading(true);
      getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
        setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
        setLoading(false);
      });
    }
  }, [bounds, type]);

  return (
    <div className="md:100vh">
      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-[400px,3fr] w-full h-[calc(100vh-56px)]">
        <List
          type={type}
          setType={setType}
          rating={rating}
          setRating={setRating}
          places={places}
          loading={loading}
          childClicked={childClicked}
        />

        <div className="flex items-center justify-center">
          <Map
            setCoords={setCoords}
            coords={coords}
            setBounds={setBounds}
            places={places}
            setChildClicked={setChildClicked}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
