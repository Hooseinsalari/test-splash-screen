function PwaLoading() {
  const dotsColor = ["#006400", "#008000", "#87CEEB", "#FFD700"];

  return (
    <div style={{ display: "flex", gap: "8px", marginBottom: "32px" }}>
      {dotsColor.map((item) => (
        <div
          key={item}
          className="splash-dot"
          style={{
            width: "32px",
            height: "32px",
            backgroundColor: item,
            borderRadius: "50%",
            animation: "bounce 0.4s ease-in-out alternate",
          }}
        />
      ))}
    </div>
  );
}

export default PwaLoading;
