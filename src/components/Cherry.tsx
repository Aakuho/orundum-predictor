export default function Cherry() {
  return (
    <div className="flex justify-center items-center mb-4 font-mono text-hint select-none">
      <span>---</span>
      <span className="mx-2 p-1 flex items-center justify-center" style={{ width: 40, height: 40 }}>
        <img
          src="src/assets/orundum-deco.ico"
          alt="Orundum Deco Icon"
          style={{ display: "block" }}
        />
      </span>
      <span>---</span>
    </div>
  );
}