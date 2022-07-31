import type {Contact} from '../types'
import PersonInfo from './PersonInfo'

import css from './ContactList.module.css'

type Props = {
  selectedContacts: Array<Contact>
  notSelectedContacts: Array<Contact>
  selectContact: (contact: Contact) => void
  deselectContact: (contact: Contact) => void
}

const ContactList = ({
  selectedContacts,
  notSelectedContacts,
  selectContact,
  deselectContact,
}: Props) => {
  return (
    <div className={css.list}>
      {selectedContacts.map((personInfo) => (
        <PersonInfo
          key={personInfo.id}
          data={personInfo}
          onClick={deselectContact}
          selected
        />
      ))}
      {notSelectedContacts.map((personInfo) => (
        <PersonInfo
          key={personInfo.id}
          data={personInfo}
          onClick={selectContact}
        />
      ))}
    </div>
  )
}

export default ContactList
