import {Contact} from '../types'
import {useEffect, useReducer} from 'react'

type State = {
  selected: Array<Contact>
  notSelected: Array<Contact>
}

enum Actions {
  APPEND_NOT_SELECTED = 'APPEND_NOT_SELECTED',
  SELECT = 'SELECT',
  DESELECT = 'DESELECT',
}

type Action =
  | {type: Actions.APPEND_NOT_SELECTED; payload: Array<Contact>}
  | {type: Actions.SELECT; payload: Contact}
  | {type: Actions.DESELECT; payload: Contact}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case Actions.APPEND_NOT_SELECTED:
      return {
        ...state,
        notSelected: action.payload.filter(
          (contact) => !state.selected.includes(contact),
        ),
      }
    case Actions.SELECT:
      return {
        selected: [...state.selected, action.payload],
        notSelected: state.notSelected.filter(
          (contact) => contact.id !== action.payload.id,
        ),
      }
    case Actions.DESELECT:
      return {
        selected: state.selected.filter(
          (contact) => contact.id !== action.payload.id,
        ),
        notSelected: [...state.notSelected, action.payload],
      }
    default:
      return state
  }
}

const useSelectableContacts = (contacts: Array<Contact> | null) => {
  const [state, dispatch] = useReducer(reducer, {
    selected: [],
    notSelected: [],
  })

  useEffect(() => {
    if (contacts) {
      dispatch({type: Actions.APPEND_NOT_SELECTED, payload: contacts})
    }
  }, [contacts])

  return {
    selectedContacts: state.selected,
    notSelectedContacts: state.notSelected,
    selectContact: (contact: Contact) =>
      dispatch({type: Actions.SELECT, payload: contact}),
    deselectContact: (contact: Contact) =>
      dispatch({type: Actions.DESELECT, payload: contact}),
  }
}

export default useSelectableContacts
