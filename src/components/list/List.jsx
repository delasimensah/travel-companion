import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

//mui
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const typeOptions = ["restaurant", "hotels", "attractions"];

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
    label: "Above",
  },
];
const List = () => {
  const [type, setType] = useState("");
  const [rating, setRating] = useState("");
  return (
    <div className="p-5">
      <h1 className="text-lg font-semibold md:text-xl lg:text-2xl">
        Food & Dining around you
      </h1>

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
            {typeOptions.map((type, idx) => {
              return (
                <MenuItem
                  key={idx}
                  value={type}
                  className="capitalize hover:bg-green-200"
                  classes={{
                    selected: "hover:bg-green-300",
                  }}
                >
                  {type}
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

      <div
        className="overflow-x-hidden overflow-y-auto"
        style={{ height: "75vh" }}
      ></div>
    </div>
  );
};

export default List;
