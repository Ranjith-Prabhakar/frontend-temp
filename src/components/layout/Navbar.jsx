import LoginContainer from '../../features/auth/containers/LoginContainer';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 border-b  shadow-sm">
      <div className="text-xl font-bold">MyApp</div>
      <div>
        <LoginContainer />
      </div>
    </nav>
  );
};

export default Navbar;
