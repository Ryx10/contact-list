import type {Contact} from '../types'
import PersonInfo from '../PersonInfo'
import useSelectableContacts from '../useSelectableContacts'

type Props = {
  contacts: Array<Contact> | null
}

const ContactList = ({contacts}: Props) => {
  const {
    selectedContacts,
    notSelectedContacts,
    selectContact,
    deselectContact,
  } = useSelectableContacts(contacts)

  return (
    <div className="list">
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
