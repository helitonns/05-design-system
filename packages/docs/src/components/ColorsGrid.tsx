import { colors } from "@heliton-ignite-ui/tokens";

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    return(
      <div key={key} style={{backgroundColor: color, padding: "2rem"}}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "monospace",
            color: "#fff",
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    );
  });
}
