//Traen informacion del state
export const menu = ( state ) => (state.menu)

export const wings = ( state ) => {
    return{
        ...state.menu.wings,
        ...state.menu.combos
    }
}

export const ticket = ( state ) => {
    return{
        ...state.tickets
    }
}

export const creating = ( state ) => {
    return{
        ...state.creating
    }
}