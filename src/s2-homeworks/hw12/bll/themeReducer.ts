const initState = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: changeThemeIdType): typeof initState=> {
    switch (action.type) {
        case "CHANGE_THEME_ID":
            return {...state, themeId: action.id}
        default:
            return state
    }
}

type changeThemeIdType = {
    type: 'CHANGE_THEME_ID'
    id: number
}

export const changeThemeId = (id: number): changeThemeIdType => ({ type: 'CHANGE_THEME_ID', id })
