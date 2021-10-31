import React from "react";
import GoogleMapReact from "google-map-react";

import mapStyles from "../../mapStyles";

const Map = ({ coords }) => {
  return (
    <div className="w-full" style={{ height: "90vh" }}>
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
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
