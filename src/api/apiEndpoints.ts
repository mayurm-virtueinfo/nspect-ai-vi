class ApiEndpoints {

  static readonly BASE_URL = 'https://test.aer-solutions.com';
  static readonly API_VERSION = '';

  // Mock API endpoints for demonstration
  static readonly API_REGISTER = `${ApiEndpoints.API_VERSION}/flowid/register`;
  // API is yet to be implemented. : PUT
  static readonly CHANGE_PASSWORD = `${ApiEndpoints.API_VERSION}/flowid/change_password?password=MayurTest1%40&new_password=MayurTest1%40`;
  static readonly API_TOKEN = `${ApiEndpoints.API_VERSION}/flowid/token`;
  static readonly API_USER_ME = `${ApiEndpoints.API_VERSION}/flowid/users/me`;
  static readonly API_LIST_LOCATIONS_FOR_USERNAME = `${ApiEndpoints.API_VERSION}/flowid/list_locations_for_username`;
  static readonly API_ADD_LOCATION = `${ApiEndpoints.API_VERSION}/flowid/add_location`;
  static readonly API_UPDATE_LOCATION = `${ApiEndpoints.API_VERSION}/flowid/update_location?location_id={location_id}&display_name={display_name}&address1={address1}&address2={address2}&city={city}&state={state}&zip_code={zip_code}&time_zone={time_zone}`;
  static readonly API_DELETE_LOCATION = `${ApiEndpoints.API_VERSION}/flowid/delete_location?location_id={location_id}`;
  static readonly API_US_STATES = `${ApiEndpoints.API_VERSION}/flowid/us_states`; 
  static readonly API_TIME_ZONES = `${ApiEndpoints.API_VERSION}/flowid/timezones`;
  static readonly API_SYSTEM_INFO = `${ApiEndpoints.API_VERSION}/flowid/system_info`; 
  static readonly API_ADD_SYSTEM = `${ApiEndpoints.API_VERSION}/flowid/add_system?location_id={location_id}&system_name={system_name}`;
  static readonly API_UPDATE_SYSTEM = `${ApiEndpoints.API_VERSION}/flowid/update_system?location_id={location_id}&system_id={system_id}&new_location_id={new_location_id}&system_name={system_name}`;
  static readonly API_DELETE_SYSTEM = `${ApiEndpoints.API_VERSION}/flowid/delete_system?system_id={system_id}`;
  static readonly API_GET_DEVICES_BY_USERNAME = `${ApiEndpoints.API_VERSION}/flowid/get_devices_by_username`;
  // API is yet to be implemented : GET
  static readonly API_GET_DEVICES_BY_LOCATION_AND_SYSTEM = `${ApiEndpoints.API_VERSION}/flowid/get_devices_by_location_and_system?system_name=Ms2&location_name=L12&device_type=Associated`;
  // API is yet to be implemented : PUT
  static readonly API_ADD_DEVICE_TO_LOCATION = `${ApiEndpoints.API_VERSION}/flowid/add_device_to_location?system_id=9&location_id=13&device_id=18`;
  static readonly API_PAIR_DEVICE_VIA_BTID_USERID_DEVICE_NAME = `${ApiEndpoints.API_VERSION}/flowid/pair_device_via_btid_userid_device_name`;
  static readonly API_CHANGE_DEVICE_NAME = `${ApiEndpoints.API_VERSION}/flowid/change_device_name?device_id={device_id}&old_device_name={old_device_name}&new_device_name={new_device_name}`;
  static readonly API_DELETE_DEVICE = `${ApiEndpoints.API_VERSION}/flowid/delete_device?device_id={device_id}&device_name={device_name}`;

  
}

export default ApiEndpoints;

