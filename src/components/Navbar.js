import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <Link to="/">หน้าหลัก</Link>
      <Link to="/dashboard">ภาพรวม</Link>
      <Link to="/about">เกี่ยวกับเรา</Link>
    </nav>
  );
};

export default Navbar;
