function Button({ buttonName }) {
  const handleClick = () => {
    alert("Changing theme...");
  };

  return <button onClick={handleClick}>{buttonName}</button>;
}

export default Button;


/* style={{
    backgroundColor: "#F7C9F3",
    color: "#110038",
    border: "#110038 outset 1px",
    WebkitBoxShadow:
      "inset -1px -1px 0 0 #997D97, inset 1px 1px 0 0 #FFFFFF",
    boxShadow: "inset -1px -1px 0 0 #997D97, inset 1px 1px 0 0 #FFFFFF",
    cursor: "pointer",
  }} */