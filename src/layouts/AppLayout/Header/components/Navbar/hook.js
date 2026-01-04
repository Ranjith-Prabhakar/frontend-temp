export function useHook() {
  let Home = {
    name: "Home",
    dropDown: [
      { name: "test", dropDown: [{}] },
      { name: "test2", dropDown: [{}] },
    ],
  };
  let About = {
    name: "Home",
    dropDown: [
      { name: "test", dropDown: [{}] },
      { name: "test2", dropDown: [{}] },
    ],
  };
  let Contact = {
    name: "Home",
    dropDown: [
      { name: "test", dropDown: [{}] },
      { name: "test2", dropDown: [{}] },
    ],
  };

  let navItems = [Home, About, Contact];
  return [navItems];
}
