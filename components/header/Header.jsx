import Link from 'next/link';

/* Components */
// import DarkModeToggle from "../DarkModeToggle";

const Header = ({ props }) => {
  return (
    <>
    <Link href="/login">
      <button class="uppercase px-8 py-2 rounded bg-blue-600 text-blue-50 max-w-max shadow-sm hover:shadow-lg">Login</button>
    </Link>
    </>
  );
};

export default Header;
