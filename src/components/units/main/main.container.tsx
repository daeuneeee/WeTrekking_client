import MainUi from "./main.presenter";

const Main = () => {
  const options = {
    activeClass: "active", // the class that is appended to the sections links
    anchors: ["main01", "main02", "main03"], // the anchors for each sections
    arrowNavigation: true, // use arrow keys
    className: "SectionContainer", // the class name for the section container
    delay: 1000, // the scroll animation speed
    navigation: true, // use dots navigatio
    scrollBar: false, // use the browser default scrollbar
    sectionClassName: "Section", // the section class name
    sectionPaddingTop: "0", // the section top padding
    sectionPaddingBottom: "0", // the section bottom padding
    verticalAlign: false, // align the content of each section vertical
  };
  return <MainUi options={options} />;
};

export default Main;
