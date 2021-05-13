import useDarkMode from "use-dark-mode";

interface ToggleProps {}

const Toggle: React.FC<ToggleProps> = () => {
  const darkMode = useDarkMode(false);

  return (
    <span className="toggle-control">
      <input
        className="dmcheck"
        type="checkbox"
        checked={darkMode.value}
        onChange={darkMode.toggle}
        id="dmcheck"
      />
      <label htmlFor="dmcheck" />
    </span>
  );
};

export default Toggle;
