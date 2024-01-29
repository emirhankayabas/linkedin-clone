import PropTypes from "prop-types";

export default function Photo({ photos }) {
  console.log(photos[0]);
  switch (photos.length) {
    case 1:
      return <img src={photos[0]} alt="Post Image" className="w-full" />;

    case 2:
      return (
        <div className="grid grid-cols-2 gap-0.5 max-h-[552px]">
          <img
            src={photos[0]}
            alt="Post Image"
            className="w-full h-full object-cover"
          />
          <img
            src={photos[1]}
            alt="Post Image"
            className="w-full h-full object-cover"
          />
        </div>
      );

    case 3:
      return (
        <div className="max-h-[552px]">
          <div className="grid grid-cols-1 gap-0.5 h-full max-h-[331px] overflow-hidden mb-0.5">
            <img
              src={photos[0]}
              alt="Post Image"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="grid grid-cols-2 gap-0.5 h-full min-h-[221px] max-h-[221px]">
            <img
              src={photos[1]}
              alt="Post Image"
              className="w-full h-full object-cover"
            />
            <img
              src={photos[2]}
              alt="Post Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      );

    case 4:
      return (
        <div className="max-h-[552px]">
          <div className="grid grid-cols-1 gap-0.5 h-full max-h-[331px] overflow-hidden mb-0.5">
            <img
              src={photos[0]}
              alt="Post Image"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="grid grid-cols-3 gap-0.5 h-full min-h-[221px] max-h-[221px]">
            <img
              src={photos[1]}
              alt="Post Image"
              className="w-full h-full object-cover"
            />
            <img
              src={photos[2]}
              alt="Post Image"
              className="w-full h-full object-cover"
            />
            <img
              src={photos[3]}
              alt="Post Image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      );
  }
}

Photo.propTypes = {
  photos: PropTypes.any.isRequired,
};
