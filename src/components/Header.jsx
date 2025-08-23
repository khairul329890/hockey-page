import Button from "./uiEleament/Button";
import Nav from "./uiEleament/nav";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        borderBottom: "1px solid #ddd",
        width: "1200px",
      }}
    >
      {/* LOGO */}
      <h1 style={{ margin: 0, color: "black" }}>LOGO</h1>

      {/* Menu */}
      <Nav />

      {/* Login Button */}
      <Button text="Login" />
    </header>
  );
};

export default Header;