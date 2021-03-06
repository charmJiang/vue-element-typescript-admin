export interface ILoginParams {
  username: string
  password: string
}

export interface IResponse {
}

export interface ILoginResponse extends IResponse{
  token: string
}

export interface IRoleData {
  key: string
  name: string
  description: string
  routes: any
}

export interface IUserInfo {
  roles: string[]
}
