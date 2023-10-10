import BounceLoader from "react-spinners/BounceLoader";

const override = {
  display: "block",
  margin: "auto",
  borderColor: "black",
};

export const Loading = () => {
  return (
    <div className="loading">
      <BounceLoader
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}