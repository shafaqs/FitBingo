import Link from 'next/link';
import Progress from '../components/Progress';

function Navbar({ completedDashboards }) {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/dashboard/[id]" as={`/dashboard/${id}`}>
            <a>Current Dashboard</a>
          </Link>
        </li>
        <li>
          <Progress completedDashboards={completedDashboards} />
        </li>
        <li>
          <Link href="/stats">
            <a>Statistics</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
