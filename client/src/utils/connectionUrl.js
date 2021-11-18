const url = `${process.env.REACT_APP_URL || "http://localhost"}:${
  process.env.REACT_APP_PORT || ""
}`;
export default url;