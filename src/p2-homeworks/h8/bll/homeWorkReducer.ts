import {initialPeople, UserType} from "../HW8";

export const homeWorkReducer = (state:Array<UserType> = initialPeople, action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
             const newState = [...state].sort((a,b)=>{
               if(a.name > b.name)return 1;
               else if(a.name < b.name)return -1;
               else return 0
             })
            return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'check': {
            return state.filter(p => p.age >= action.payload)
        }
        default: return state
    }
}
export type ActionType = sortActionType | checkActionType
export const sortAC = (payload: string)=>({type:"sort", payload}as const)
type sortActionType = ReturnType<typeof sortAC>
export const checkAC = (payload: number)=>({type:"check", payload}as const)
type checkActionType = ReturnType<typeof checkAC>

