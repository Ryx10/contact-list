import css from './NavigationPanel.module.css'
type Props = {
  children: React.ReactElement
}

const NavigationPanel = ({children}: Props) => (
  <div className={css.container}>{children}</div>
)

export default NavigationPanel
