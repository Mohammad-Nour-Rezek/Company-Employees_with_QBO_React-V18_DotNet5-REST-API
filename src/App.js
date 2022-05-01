import Button from "@mui/material/Button";

function App() {
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => console.log("Button Clicked!")}
      >
        Strike
      </Button>
    </div>
  );
}

export default App;
