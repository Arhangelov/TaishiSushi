import url from "../utils/connectionUrl";
export const getUser = async () => {
  const savedUser = JSON.parse(localStorage.getItem("user"));
  if (savedUser && savedUser._id) {
    const userobj = await fetch(`${url}/api/auth/user/${savedUser._id}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (userobj.status === 200) return await userobj.json();
    localStorage.removeItem("user");
  } /* 
  TODO JWT COOKIES SESSIONID ETC
  */
  return null;
};