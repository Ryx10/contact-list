import css from './Button.module.css'

type Props = {
  disabled?: boolean
  onClick: () => void
  children: React.ReactElement | string
}

const Button = ({disabled, children, onClick}: Props) => (
  <button className={css.button} onClick={onClick} disabled={disabled}>
    {children}
  </button>
)

export default Button
