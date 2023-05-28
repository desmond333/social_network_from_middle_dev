export interface User {
    id: string
    username: string
}

export interface UserSchema {
    // пользователь авторизован если здесь есть данные
    authData?: User
    _inited: boolean
}
