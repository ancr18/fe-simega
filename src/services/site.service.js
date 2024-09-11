import { fetchDataApi } from "./service";

export const getAllSite = async () => {
  try {
    return await fetchDataApi("GET", "site");
  } catch (err) {
    return { error: true, message: err.message, statusCode: err.statusCode };
    throw err;
  }
};

export const getOneSite = async (id) => {
  try {
    return await fetchDataApi("GET", `site/${id}`);
  } catch (err) {
    return { error: true, message: err.message, statusCode: err.statusCode };
  }
};

export const createSite = async (formData) => {
  try {
    return await fetchDataApi("POST", "site", formData);
  } catch (err) {
    return { error: true, message: err.message, statusCode: err.statusCode };
  }
};

export const updateSite = async (id, formData) => {
  try {
    return await fetchDataApi("POST", `site/${id}`, formData);
  } catch (err) {
    return { error: true, message: err.message, statusCode: err.statusCode };
  }
};

export const deleteSite = async (id) => {
  try {
    return await fetchDataApi("DELETE", `site/${id}`);
  } catch (err) {
    return { error: true, message: err.message, statusCode: err.statusCode };
  }
};
