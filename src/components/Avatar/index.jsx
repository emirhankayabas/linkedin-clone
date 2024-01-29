import PropTypes from "prop-types";

export default function Avatar({
  src = "https://avatars.githubusercontent.com/u/92752721?v=4",
  alt = "Avatar",
  ...props
}) {
  return <img src={src} alt={alt} {...props} />;
}

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
};
