import css from './ContactsHeader.module.css'

type Props = {
  selectedCount: number
}

const ContactsHeader = ({selectedCount}: Props) => (
  <div className={css.header}>Selected contacts: {selectedCount}</div>
)

export default ContactsHeader
