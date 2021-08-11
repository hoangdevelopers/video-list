import { ILoginParams } from "../model/auth";

export const Login = (params: ILoginParams) => new Promise(resolve => {
    resolve({
        code: 200,
        data: {email: params.email},
    })
})