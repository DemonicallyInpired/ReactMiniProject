const Cards = ({ name, flag, abbr }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: 200,
        height: 200,
        border: "1px solid grey",
        borderRadius: "10px",
        textAlign: "center",
      }}
    >
      <img src={flag} alt={`${abbr}-flag`} width={"50%"} height={"50%"} />
      <p>{name}</p>
    </div>
  );
};
export default Cards;
