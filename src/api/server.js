import axios from "axios";
const serverURL = "";
const localURL = "http://localhost:8080";

const userRequest = axios.create({
  baseURL: `${localURL}`,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "X-Requested-With,Content-Type",
    "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS",
    "Content-Type": "multipart/form-data",
  },
  validateStatus: function (status) {
    return status >= 200 && status < 300; // default
  },
});

const makeFd = (data) => {
  let fd = new FormData();
  for (const key in data) {
    fd.append(key, data[key]);
  }
  return fd;
};

const get_all_user_data = () => {
  return userRequest.get("/user");
};

const updateDataBase = () => {
  return userRequest.get()
}

const create_user = (data) => {
  console.log(data)
  return userRequest.post("/user", { data: makeFd(data) });
};

const get_profile = (uid) => {
  return userRequest.get(`/user/${uid}`);
};

export { create_user, updateDataBase, get_all_user_data, get_profile, localURL, serverURL };
