const Message = ({ allRef }) => {
  const isValidated = allRef.every((item, index) => !Object.is(item, null));
  if (!isValidated) {
    return null;
  }
  const msg = allRef.reverse().map((item, index) => {
    return (
      <span
        style={{
          color: index !== 0 ? "gray" : "black",
          fontSize: index === 0 ? "2rem" : "1rem",
        }}
        key={`${item}-${index}`}
      >
        {index !== allRef.length - 1 ? item.concat(", ") : item}
      </span>
    );
  });
  return (
    <div
      style={{ fontWeight: "bold", fontSize: "1.5rem", textAlign: "center" }}
    >
      <p>You selected {msg}</p>
    </div>
  );
};
export default Message;
