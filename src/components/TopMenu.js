import "./TopMenu.css";

const TopMenu = () => {
  return (
    <ul id="menu">
      <li data-menuanchor="firstPage" className="active">
        <a href="#firstPage">First section</a>
      </li>
      <li data-menuanchor="secondPage">
        <a href="#secondPage">Second section</a>
      </li>
      <li data-menuanchor="thirdPage">
        <a href="#thirdPage">Third section</a>
      </li>
      <li data-menuanchor="fourthPage">
        <a href="#fourthPage">Fourth section</a>
      </li>
    </ul>
  );
};

export default TopMenu;
