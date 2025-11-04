import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppConstant } from '../utility/Constant';
import ApiEndpoints from './apiEndpoints';
import { resetToLogin } from '../navigation/NavigationService';

// ✅ Create an axios instance
const apiDev: AxiosInstance = axios.create({
  baseURL: ApiEndpoints.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// ---------- 🔹 Request Interceptor ----------
apiDev.interceptors.request.use(
  async (
    config: InternalAxiosRequestConfig
  ): Promise<InternalAxiosRequestConfig> => {
    try {
      // ✅ Attach token
      const token = await AsyncStorage.getItem(AppConstant.access_token);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      // ✅ Debug logs (development only)
      if (__DEV__) {
        console.log('------------------------------------------------');
        console.log('📡 API Request Config : apiDev.ts');
        console.log('------------------------------------------------');
        console.log('Base URL:', config.baseURL);
        console.log('URL:', config.url);
        console.log('Method:', config.method);
        console.log('Headers:', config.headers);
        console.log('Params/Data:', config.data);
        console.log('------------------------------------------------');
      }
    } catch (err) {
      console.log('⚠️ Error attaching token to request : apiDev.ts :', err);
    }

    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// ---------- 🔹 Response Interceptor ----------
apiDev.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => response,
  async (error: AxiosError): Promise<never> => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    console.log('Response Interceptor : 1');

    // ✅ Handle network error (no response)
    if (!error.response) {
      console.log('Response Interceptor : 2');
      console.log('🌐 Network error : apiDev.ts :', error);
      return Promise.reject({
        message: 'Network error. Please check your connection.',
      });
    }

    console.log('Response Interceptor : 3');

    const { status } = error.response;
    if ((status === 401 || status === 403) && !originalRequest._retry) {
      originalRequest._retry = true;
      console.log('Response Interceptor : 4');
      console.log('❌ Response Interceptor : Please implement refresh token feature');
      resetToLogin();

      return Promise.reject({
        message: '❌ Response Interceptor : Please implement refresh token feature',
      });

      /*
      // 🔄 Example refresh token logic (to implement later)
      if (!isRefreshing) {
        try {
          isRefreshing = true;

          const refreshToken = await AsyncStorage.getItem(AppConstant.refresh_token);
          if (!refreshToken) {
            isRefreshing = false;
            return Promise.reject(error);
          }

          console.log('--- Refreshing Access Token --- apiDev.ts');
          // const response = await refreshTokenAPI(refreshToken);

          const newAccessToken = await AsyncStorage.getItem(AppConstant.access_token);
          if (!newAccessToken) {
            console.log('No new access token found after refresh : apiDev.ts');
            return Promise.reject(error);
          }

          isRefreshing = false;
          onRefreshed(newAccessToken);

          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return apiDev(originalRequest);
        } catch (refreshError) {
          isRefreshing = false;
          console.log('Token refresh failed : apiDev.ts :', refreshError);
          return Promise.reject(refreshError);
        }
      }
      */
    }

    return Promise.reject(error);
  }
);

export default apiDev;
