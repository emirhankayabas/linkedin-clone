import PropTypes from "prop-types";

export default function Divrider({ height = "1", ...props }) {
  return (
    <div className={`w-full h-[${height}px] bg-[#8c8c8c40]`} {...props}></div>
  );
}

Divrider.propTypes = {
  height: PropTypes.string,
};
