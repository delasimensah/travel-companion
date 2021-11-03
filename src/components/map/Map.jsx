import React from "react";
import GoogleMapReact from "google-map-react";
import { IoLocation } from "react-icons/io5";
import mapStyles from "../../mapStyles";

//mui
import { styled } from "@mui/material/styles";
import { Rating, IconButton } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.white,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 14,
    fontWeight: 600,
  },
}));

const Map = ({ coords, setBounds, setCoords, places, setChildClicked }) => {
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
          places.map((place, i) => (
            <div
              className="absolute -translate-x-[50%] -translate-y-[50%] z-10 hover:z-20"
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              <CustomTooltip
                arrow
                title={
                  <div className="flex flex-col items-center p-1 space-y-1">
                    <h1>{place.name}</h1>

                    <Rating
                      name="read-only"
                      size="small"
                      value={Number(place.rating)}
                      readOnly
                      precision={0.5}
                    />
                  </div>
                }
              >
                <IconButton>
                  <IoLocation className="text-green-500 w-7 h-7" />
                </IconButton>
              </CustomTooltip>
            </div>
          ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
