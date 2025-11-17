import { Link, NavLink } from "react-router";

function Header() {
  return (
    <header className="bg-gray-100/50">
      <div className="container mx-auto flex h-16 items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="font-bold text-2xl text-indigo-600" href="#">
          AmirSPA
        </Link>

        <div className="flex items-center justify-end md:justify-between">
          <nav>
            <ul className="flex items-center gap-6 text-md">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-indigo-500 transition hover:text-indigo-500/75"
                      : "text-gray-500 transition hover:text-gray-500/75"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-indigo-500 transition hover:text-indigo-500/75"
                      : "text-gray-500 transition hover:text-gray-500/75"
                  }
                  to="/users"
                >
                  Users
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="text-gray-500 transition hover:text-gray-500/75"
                  to="/posts"
                >
                  Posts
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
