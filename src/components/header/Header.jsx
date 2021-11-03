import { IoSearch } from "react-icons/io5";

//mui
import { MenuList, MenuItem, Typography } from "@mui/material";

const Header = ({ data, onSelect, ready, value, setValue }) => {
  const handleInput = (e) => {
    const { value } = e.target;
    setValue(value);
  };

  return (
    <div className="flex items-center justify-between px-3 md:px-10 text-white bg-green-600 shadow-lg h-[56px]">
      <h5 className="hidden font-semibold md:block md:text-2xl">
        Travel Companion
      </h5>

      <div className="flex items-center md:space-x-3">
        <h6 className="hidden md:block">Explore new places</h6>

        <div className="relative">
          <div className="flex items-center px-2 bg-white rounded bg-opacity-20 hover:bg-opacity-25">
            <IoSearch />
            <input
              type="text"
              className="p-1 placeholder-current bg-transparent focus:outline-none"
              placeholder="Search..."
              value={value}
              disabled={!ready}
              onChange={handleInput}
            />
          </div>

          {data.length > 0 && (
            <MenuList className="absolute z-50 w-full overflow-x-hidden bg-white rounded shadow-lg top-10">
              {data.map((sug) => {
                return (
                  <MenuItem
                    key={sug.id}
                    className="text-black hover:bg-green-200"
                    onClick={() => onSelect(sug)}
                  >
                    <Typography noWrap variant="subtitle2">
                      {sug.description}
                    </Typography>
                  </MenuItem>
                );
              })}
            </MenuList>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
