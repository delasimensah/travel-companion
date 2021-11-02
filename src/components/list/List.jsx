import { useState, useEffect, createRef } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

//mui
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
} from "@mui/material";

//components
import PlaceDetails from "../placeDetails/PlaceDetails";

const typeOptions = [
  { value: "restaurants", label: "Restaurants" },
  { value: "hotels", label: "Hotels" },
  { value: "attractions", label: "Attractions" },
];

const ratingOptions = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "3",
    label: "Above 3.0",
  },
  {
    value: "4",
    label: "Above 4.0",
  },
  {
    value: "4.5",
    label: "Above 4.5",
  },
];

const List = ({
  type,
  setType,
  places,
  loading,
  childClicked,
  rating,
  setRating,
}) => {
  console.log({ childClicked });
  // const [elRefs, setElRefs] = useState([]);

  // useEffect(() => {
  //   setElRefs((refs) =>
  //     Array(places.length)
  //       .fill()
  //       .map((_, i) => refs[i] || createRef())
  //   );
  // }, [places]);

  return (
    <div className="p-3 space-y-3 flex flex-col h-[90vh] lg:h-full overflow-hidden">
      <h1 className="text-xl font-semibold text-gray-600 lg:text-2xl">
        Food & Dining around you
      </h1>
      {loading ? (
        <div className="flex items-center justify-center flex-grow">
          <CircularProgress />
        </div>
      ) : (
        <>
          <div className="flex items-center space-x-5">
            <FormControl fullWidth className="w-28" variant="standard">
              <InputLabel>Type</InputLabel>
              <Select
                value={type}
                label="Type"
                onChange={(e) => setType(e.target.value)}
                MenuProps={{
                  classes: {
                    paper: "mt-2 shadow-md rounded-lg",
                  },
                }}
                IconComponent={IoChevronDownOutline}
              >
                {typeOptions.map(({ value, label }, idx) => {
                  return (
                    <MenuItem
                      key={idx}
                      value={value}
                      className="hover:bg-green-200"
                      classes={{
                        selected: "hover:bg-green-300",
                      }}
                    >
                      {label}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>

            <FormControl fullWidth className="w-28" variant="standard">
              <InputLabel>Rating</InputLabel>
              <Select
                value={rating}
                label="Rating"
                onChange={(e) => setRating(e.target.value)}
                MenuProps={{
                  classes: {
                    paper: "mt-2 shadow-md rounded-lg",
                  },
                }}
                IconComponent={IoChevronDownOutline}
              >
                {ratingOptions.map(({ value, label }, idx) => {
                  return (
                    <MenuItem
                      key={idx}
                      value={value === "all" ? "" : value}
                      className="capitalize hover:bg-green-200"
                      classes={{
                        selected: "hover:bg-green-300",
                      }}
                    >
                      {label}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>

          <div className="grid flex-grow grid-cols-1 gap-5 overflow-x-hidden overflow-y-auto">
            {places?.map((place, idx) => {
              return (
                <div key={idx}>
                  <PlaceDetails
                    place={place}
                    selected={Number(childClicked) === idx}
                    // refProps={elRefs[idx]}
                  />
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default List;
