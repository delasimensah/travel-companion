import React from "react";
import GoogleMapReact from "google-map-react";
import { IoLocation } from "react-icons/io5";
import mapStyles from "../../mapStyles";

//mui
import { Rating, useMediaQuery } from "@mui/material";

const Map = ({ coords, setBounds, setCoords, places, setChildClicked }) => {
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <div className="w-full h-[90vh] lg:h-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={{
          disableDefaultUI: true,
          zoomControl: true,
          styles: mapStyles,
        }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
        {places.length > 0 &&
          places
            .filter((place) => place.name !== "")
            .map((place, i) => (
              <div
                className="absolute -translate-x-[50%] -translate-y-[50%] z-10 hover:z-20"
                lat={Number(place.latitude)}
                lng={Number(place.longitude)}
                key={i}
              >
                {!matches ? (
                  <IoLocation color="primary" fontSize="large" />
                ) : (
                  <div className="shadow-md bg-white flex flex-col p-2 justify-center w-[100px]">
                    <p className="mb-1 text-xs capitalize">{place.name}</p>
                    <img
                      className="cursor-pointer"
                      src={
                        place.photo
                          ? place.photo.images.large.url
                          : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                      }
                      alt=""
                    />
                    <Rating
                      name="read-only"
                      size="small"
                      value={Number(place.rating)}
                      readOnly
                    />
                  </div>
                )}
              </div>
            ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
