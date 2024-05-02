import PropTypes from "prop-types";

export const LogoSymbol = (props) => {
  const { color = "#3E50F8" } = props;

  return (
    <svg
      width="641"
      height="40"
      viewBox="0 0 641 155"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M103.749 11.9701C115.628 11.9701 126.605 18.3074 132.544 28.5946L151.001 60.5634C156.941 70.8507 156.941 83.5251 151.001 93.8124L132.544 125.781C126.605 136.068 115.628 142.406 103.749 142.406L66.8351 142.406C54.9564 142.406 43.98 136.068 38.0406 125.781L19.5835 93.8124C13.6441 83.5251 13.6441 70.8507 19.5835 60.5634L38.0406 28.5947C43.98 18.3074 54.9564 11.9701 66.8351 11.9701L103.749 11.9701Z"
        stroke={color}
        stroke-width="13.7867"
      />
      <path
        d="M113.855 44.0634L91.6575 44.7911C90.5919 44.8261 89.5781 45.2589 88.8159 46.0044L79.7385 54.8824C78.9856 55.6187 77.9868 56.0504 76.9346 56.0942L68.1706 56.4594C67.102 56.5039 66.0893 56.9483 65.3331 57.7045L50.1703 72.8673C47.4842 75.5534 49.3866 80.1461 53.1853 80.1461L77.952 80.1461C81.4843 80.1461 84.3478 83.0096 84.3478 86.5419L84.3478 111.057C84.3478 114.856 88.9406 116.758 91.6266 114.072L106.664 99.0352C107.42 98.279 107.864 97.2662 107.909 96.1977L108.273 87.4608C108.317 86.3923 108.762 85.3796 109.518 84.6233L118.576 75.5657C119.345 74.7961 119.792 73.7614 119.823 72.6734L120.458 50.6399C120.564 46.9543 117.54 43.9425 113.855 44.0634Z"
        fill={color}
      />
      <path
        d="M71.5659 89.259C73.5283 89.259 75.1191 90.8499 75.1191 92.8122V103.594C75.1191 105.24 73.9888 106.671 72.3875 107.051L58.2444 110.412C55.6701 111.024 53.3542 108.708 53.966 106.134L57.327 91.9907C57.7076 90.3894 59.1381 89.259 60.784 89.259H71.5659Z"
        fill={color}
      />
    </svg>
  );
};

LogoSymbol.propTypes = {
  color: PropTypes.oneOf(["black", "primary", "white"]),
};
