import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if(action.payload === 'up'){
                return state.sort((a, b)=> a.name > b.name ? 1 : -1)
            }
            return state.sort((a, b)=> a.name < b.name ? 1 : -1)
        }
        case 'check': {
            return state.filter(item => item.age >= 18).reverse()
        }
        default:
            return state
    }
}
