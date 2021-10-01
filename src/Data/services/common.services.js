import axios from 'axios' ;

export const error = (error) => {
  return { status: "error", isSuccessful: false, message: error };
};
export const success = (data) => {
  return { status: "success", isSuccessful: true, data: data };
};

// we'll store the token in the localstorage 

export const getAuthHeaders = () => {
  return { Authorization: "Bearer " + localStorage.getItem("token") };
};

export const get = async (url, headers) => {
  try {
    let response = await axios.get(url, { headers  });
    console.log('response in common service : ', response);
    return success(response.data);
  } catch (e) {
    return error(e.response);
  }
};

export const post = async (url, data, headers) => {
  try {
    let response = await axios.post(url, data, { headers });

    return success(response.data);
  } catch (e) {
    return error(e.response);
  }
};

export const patch = async (url, data, headers) => {
  try {
    let response = await axios.patch(url, data, { headers });

    return success(response.data);
  } catch (e) {
    return error(e.response);
  }
};

export const put = async (url, data, headers) => {
  try {
    let response = await axios.put(url, data, { headers });

    return success(response.data);
  } catch (e) {
    return error(e.response);
  }
};

export const del = async (url, headers) => {
  try {
    let response = await axios.delete(url, { headers });
    return success(response.data);
  } catch (e) {
    return error(e.response);
  }
};
