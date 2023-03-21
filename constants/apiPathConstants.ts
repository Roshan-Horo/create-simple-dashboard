export const SIGNUP_PATH = '/user'
export const SIGNIN_PATH = '/user/login'

// Admin
export const ADMIN_ALL_USERS = '/final/admin/allusers'
export const ADMIN_DELETE_USER = '/final/admin/allusers/deleteuser/:userid'

export const ADMIN_ALL_WAREHOUSE = '/final/admin/allwarehouse'
export const ADMIN_ALL_MANAGERS = '/final/admin/allmanagers'
export const ADMIN_ADD_MANAGER = '/final/admin/allmanagers/addmanager'
export const ADMIN_DELETE_MANAGER = '/final/admin/allmanagers/deletemanager/:managerid'

export const ADMIN_ADD_WAREHOUSE = '/final/admin/allwarehouse/addwarehouse'
export const ADMIN_UPDATE_WAREHOUSE = '/final/admin/allwarehouse/updatewarehouse/:warehouseid'
export const ADMIN_DELETE_WAREHOUSE = '/final/admin/allwarehouse/deletewarehouse/:warehouseid'
export const ADMIN_UPDATE_LOCATION_WAREHOUSE = '/final/admin/allwarehouse/:warehouseid/addlocation'

// Requests
export const ADMIN_ALL_REQUESTS = '/final/admin/allrequests'
export const ADMIN_PENDING_REQUEST = '/final/admin/allpendingrequests'
export const ADMIN_APPROVED_REQUEST = '/final/admin/allapprovedrequests'
export const ADMIN_DECLINED_REQUEST = '/final/admin/alldeclinedrequests'
export const ADMIN_APPROVE_REQUEST = '/final/admin/allrequests/approve/:reqid'
export const ADMIN_DECLINE_REQUEST = '/final/admin/allrequests/decline/:reqid'

// User Requests
export const USER_ALL_REQUESTS = '/final/user/request/allrequests/:userid'
export const USER_NEW_REQUESTS = '/final/user/request/allrequests/:userid/createrequest/:warehouseid'
export const USER_DELETE_REQUESTS = '/final/user/request/allrequests/:userid/deleterequest/:requestid'
export const USER_LOCATION_UPDATE = '/final/user/:userid/addlocation'