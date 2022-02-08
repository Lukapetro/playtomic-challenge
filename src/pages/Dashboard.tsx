import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      Dashboard
      <nav>
        <Link to="/setting">setting</Link>
      </nav>
    </div>
  );
}
