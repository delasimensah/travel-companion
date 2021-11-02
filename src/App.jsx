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
  const [loading, setLoading] = useState(false);

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
        // console.log("places: ", data);
        setPlaces(data);
        setLoading(false);
      });
    }
  }, [coords, bounds, type]);

  return (
    <div className="md:100vh">
      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr,3fr] w-full h-[calc(100vh-56px)]">
        <List type={type} setType={setType} places={places} loading={loading} />

        <div className="flex items-center justify-center">
          <Map setCoords={setCoords} coords={coords} setBounds={setBounds} />
        </div>
      </div>
    </div>
  );
};

export default App;
