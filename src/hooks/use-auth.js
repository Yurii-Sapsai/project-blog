import {useSelector} from 'react-redux'

export function useAuth() {
    const {email, token, id} = useSelector(state => state.user) //хук який отримує state

    return {
        isAuth: !!email,
        email,
        token,
        id
    }
}