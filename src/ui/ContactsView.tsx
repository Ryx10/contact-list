import {Contact} from '../types'
import ContactList from './ContactList'
import useSelectableContacts from '../useSelectableContacts'
import ContactsHeader from './ContactsHeader'

type Props = {
  contacts: Array<Contact> | null
}

const ContactsView = ({contacts}: Props) => {
  const {
    selectedContacts,
    notSelectedContacts,
    selectContact,
    deselectContact,
  } = useSelectableContacts(contacts)

  if (!contacts) {
    return null
  }
  return (
    <div>
      <ContactsHeader selectedCount={selectedContacts.length} />
      <ContactList
        selectedContacts={selectedContacts}
        notSelectedContacts={notSelectedContacts}
        deselectContact={deselectContact}
        selectContact={selectContact}
      />
    </div>
  )
}

export default ContactsView
