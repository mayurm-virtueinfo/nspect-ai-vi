import axios from "axios";
import apiDev from "./apiDev";
import ApiEndpoints from "./apiEndpoints";

const getGlobalError = (error: any) => {
  if (axios.isAxiosError(error)) {
    const status = error.response?.status;
    const data = error.response?.data;
    const detail = error.response?.data?.detail;
    console.log("❌ error.response?.status : ", status);
    console.log("❌ error.response?.data : ", data);
    console.log("❌ error.response?.data?.detail :", detail);

    if (Array.isArray(detail)) {
      const combinedErrorMessage = detail
        .map(err => `${err.loc[1]}: ${err.msg}`) // pick field name + message
        .join("\n"); // newline separated
      return {
        status: status,
        message: combinedErrorMessage
      };
    }

    return {
      status: status,
      message: detail
    };
  } else {
    return error;
  }
};
export const postRegister = async (data: any) => {
  try {
    let apiUrl = ApiEndpoints.API_REGISTER;
    const response = await apiDev.post(apiUrl, data);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(getGlobalError(error));
  }
};

export const postToken = async (data: any) => {
  try {
    let apiUrl = ApiEndpoints.API_TOKEN;
    const response = await apiDev.post(apiUrl, data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(getGlobalError(error));
  }
};

export const getUser = async () => {
  try {
    let apiUrl = ApiEndpoints.API_USER_ME;
    const response = await apiDev.get(apiUrl);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(getGlobalError(error));
  }
};

export const postCreateLocation = async (data: any) => {
  try {
    let apiUrl = ApiEndpoints.API_ADD_LOCATION;
    const response = await apiDev.post(apiUrl, data);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(getGlobalError(error));
  }
};

export const putUpdateLocation = async (data: any) => {
  try {
    let apiUrl = ApiEndpoints.API_UPDATE_LOCATION;
    apiUrl = apiUrl.replaceAll('{location_id}', data?.location_id)
    apiUrl = apiUrl.replaceAll('{display_name}', data?.display_name)
    apiUrl = apiUrl.replaceAll('{address1}', data?.address1)
    apiUrl = apiUrl.replaceAll('{address2}', data?.address2)
    apiUrl = apiUrl.replaceAll('{city}', data?.city)
    apiUrl = apiUrl.replaceAll('{state}', data?.state)
    apiUrl = apiUrl.replaceAll('{zip_code}', data?.zip_code)
    apiUrl = apiUrl.replaceAll('{time_zone}', data?.time_zone)

    const response = await apiDev.put(apiUrl, data);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(getGlobalError(error));
  }
};

export const postAddSystem = async (data: any) => {
  try {
    let apiUrl = ApiEndpoints.API_ADD_SYSTEM;
    apiUrl = apiUrl.replaceAll('{location_id}', data?.location_id)
    apiUrl = apiUrl.replaceAll('{system_name}', data?.system_name)

    const response = await apiDev.post(apiUrl, data);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(getGlobalError(error));
  }
};
export const putUpdateSystem = async (data: any) => {
  try {
    let apiUrl = ApiEndpoints.API_UPDATE_SYSTEM;
    apiUrl = apiUrl.replaceAll('{location_id}', data?.location_id)
    apiUrl = apiUrl.replaceAll('{system_id}', data?.system_id)
    apiUrl = apiUrl.replaceAll('{new_location_id}', data?.new_location_id)
    apiUrl = apiUrl.replaceAll('{system_name}', data?.system_name)

    const response = await apiDev.put(apiUrl, data);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(getGlobalError(error));
  }
};
export const putDeleteLocation = async (data: any) => {
  try {
    let apiUrl = ApiEndpoints.API_DELETE_LOCATION;
    apiUrl = apiUrl.replaceAll('{location_id}', data?.location_id)

    const response = await apiDev.put(apiUrl);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(getGlobalError(error));
  }
};
export const putDeleteSystem = async (data: any) => {
  try {
    let apiUrl = ApiEndpoints.API_DELETE_SYSTEM;
    apiUrl = apiUrl.replaceAll('{system_id}', data?.system_id)

    const response = await apiDev.put(apiUrl);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(getGlobalError(error));
  }
};

export const getListLocationsForUsername = async () => {
  try {
    let apiUrl = ApiEndpoints.API_LIST_LOCATIONS_FOR_USERNAME;
    const response = await apiDev.get(apiUrl);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(getGlobalError(error));
  }
};

export const getSystemList = async () => {
  try {
    let apiUrl = ApiEndpoints.API_SYSTEM_INFO;
    const response = await apiDev.get(apiUrl);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(getGlobalError(error));
  }
};

export const getUSStatesList = async () => {
  try {
    let apiUrl = ApiEndpoints.API_US_STATES;
    const response = await apiDev.get(apiUrl);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(getGlobalError(error));
  }
};
export const getTimeZonesList = async () => {
  try {
    let apiUrl = ApiEndpoints.API_TIME_ZONES;
    const response = await apiDev.get(apiUrl);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(getGlobalError(error));
  }
};
export const getDevicesByUsername = async () => {
  try {
    let apiUrl = ApiEndpoints.API_GET_DEVICES_BY_USERNAME;
    const response = await apiDev.get(apiUrl);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(getGlobalError(error));
  }
};

export const putPairDeviceViaBtidUseridDeviceName = async (data: any) => {
  try {
    let apiUrl = ApiEndpoints.API_PAIR_DEVICE_VIA_BTID_USERID_DEVICE_NAME;

    const response = await apiDev.put(apiUrl, data);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(getGlobalError(error));
  }
};

export const putChangeDeviceName = async (data: any) => {
  try {
    let apiUrl = ApiEndpoints.API_CHANGE_DEVICE_NAME;
    const device_id = data?.device_id;
    const old_device_name = data?.old_device_name;
    const new_device_name = data?.new_device_name;
    apiUrl = apiUrl.replaceAll('{device_id}', device_id)
    apiUrl = apiUrl.replaceAll('{old_device_name}', old_device_name)
    apiUrl = apiUrl.replaceAll('{new_device_name}', new_device_name)

    const response = await apiDev.put(apiUrl);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(getGlobalError(error));
  }
};

export const putDeleteDevice = async (data: any) => {
  try {
    let apiUrl = ApiEndpoints.API_DELETE_DEVICE;
    const device_id = data?.device_id;
    const device_name = data?.device_name;
    apiUrl = apiUrl.replaceAll('{device_id}', device_id)
    apiUrl = apiUrl.replaceAll('{device_name}', device_name)

    const response = await apiDev.put(apiUrl);
    return Promise.resolve(response);
  } catch (error) {
    return Promise.reject(getGlobalError(error));
  }
};