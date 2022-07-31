import css from './Loader.module.css'

const LoadingView = () => {
  return (
    <div className={css.container}>
      <div className={css.loader} />
    </div>
  )
}

export default LoadingView
