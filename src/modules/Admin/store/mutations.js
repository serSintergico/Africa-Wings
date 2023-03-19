// Son sincronas y hacen las modificaciones al state
//  actions -> mutations -> state
// export const myAction = ( state ) => {

// }

export const menu = ( state, menu ) => {
  state.menu = { ...menu }
}

export const addItem = (state, item) => {
  state.tickets.push(item)
}

export const creating = (state, item) => {
  state.creating.push(item)
}

export const deleteCreating = ( state ) => {
  state.creating = []
}
