import axios from "axios";
import { domain } from "./wrapperApi";

const client = axios.create({
  baseURL: domain,
});

export const request = ({ ...options }) => {
  client.defaults.headers.common.Accept = "application/json";
  if (options.jwt)
    client.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
      "jwt"
    )}`;

  const onSuccess = (response) => {
    console.log("<<Success>>", response.data);
    return response.data;
  };

  const onError = (err) => {
    console.log("<<ERROR>>", err);
    return err;
  };

  return client(options).then(onSuccess).catch(onError);
};
