import css from './ErrorView.module.css'
import Button from './common/Button'

type Props = {
  refetch: () => void
}

const ErrorView = ({refetch}: Props) => (
  <div className={css.container}>
    <div className={css.info}>Something went wrong</div>
    <div className={css.buttonContainer} onClick={refetch}>
      <Button onClick={refetch}>Try again...</Button>
    </div>
  </div>
)

export default ErrorView
