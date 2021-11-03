import { IoLocation, IoCall } from "react-icons/io5";

//mui
import {
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
  Rating,
} from "@mui/material";

const ProductDetails = ({ place, selected, refProp }) => {
  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <Card
      classes={{
        root: "shadow-lg border border-gray-100",
      }}
    >
      <CardMedia
        className="h-[320px]"
        image={
          place.photo
            ? place?.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        title={place?.name}
      />

      <CardContent className="space-y-1">
        <h1 className="text-xl font-semibold">{place?.name}</h1>

        <div className="flex justify-between">
          <Rating
            name="read-only"
            value={Number(place.rating)}
            precision={0.5}
            readOnly
            size="small"
          />

          <legend className="text-xs">
            {place.num_reviews} review{place.num_review > 1 && "s"}
          </legend>
        </div>

        <div className="flex justify-between">
          <legend>Price</legend>
          <p className="text-xs">{place.price_level}</p>
        </div>

        <div className="flex items-center justify-between">
          <legend>Ranking</legend>
          <p className="text-xs">{place.ranking}</p>
        </div>

        {place?.awards?.map((award, i) => (
          <div key={i} className="flex items-center justify-between my-2">
            <img src={award.images.small} alt="" className="w-4" />
            <p className="text-xs font-medium text-gray-400">
              {award.display_name}
            </p>
          </div>
        ))}

        {place?.cuisine?.map(({ name }) => (
          <Chip
            key={name}
            size="small"
            label={name}
            className="mt-1 mb-1 ml-0 mr-1"
            variant="outlined"
            color="primary"
          />
        ))}

        {place.address && (
          <p className="flex items-center justify-between space-x-2 text-gray-500">
            <IoLocation className="flex-shrink-0" />
            <span className="text-xs">{place.address}</span>
          </p>
        )}

        {place.phone && (
          <p className="flex items-center justify-between text-gray-500">
            <IoCall /> <span className="text-xs">{place.phone}</span>
          </p>
        )}
      </CardContent>

      <CardActions>
        {place.web_url && (
          <Button
            size="small"
            color="primary"
            onClick={() => {
              window.open(place.web_url);
            }}
            className="capitalize shadow-none"
          >
            Trip Advisor
          </Button>
        )}

        {place.website && (
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.website)}
            className="capitalize shadow-none"
          >
            Website
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductDetails;
