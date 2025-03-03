import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div className="text-white flex justify-between p-4 border border-x-0 border-t-0">
      <Link to="/">
        <img src={Logo} alt="Logo" className="w-45" />
      </Link>
      <ul className="flex gap-6 text-xl">
        <li>Ongoing Startupathon</li>
        <li>Completed Startupathon</li>
        <li>Startupathon guide</li>
        <li>How to win</li>
        <li>Mentor network</li>
      </ul>
    </div>
  );
}
