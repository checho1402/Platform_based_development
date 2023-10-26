const Progress = ({ done }) => {
  const [style, setStyle] = React.useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%` };


    setStyle(newStyle);
  }, 200);

  return /*#__PURE__*/(
    React.createElement("div", { className: "progress" }, /*#__PURE__*/
    React.createElement("div", { className: "progress-done", style: style },
    done, "%")));



};
const item = "20";
const App = () => /*#__PURE__*/
React.createElement(React.Fragment, null, /*#__PURE__*/
React.createElement("h1", null, "React Progress Bar"), /*#__PURE__*/
React.createElement(Progress, { done: item }));



ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));