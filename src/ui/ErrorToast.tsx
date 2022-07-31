import {toast, ToastContainer} from 'react-toastify'
import {useEffect} from 'react'

import 'react-toastify/dist/ReactToastify.css'
import css from './ErrorToast.module.css'

type Props = {
  show: boolean
  retry: () => void
}

const ErrorToast = ({show, retry}: Props) => {
  const notify = () =>
    toast.error(
      <div>
        <div>Something went wrong...</div>
        <a className={css.linkButton} onClick={retry}>
          Try again
        </a>
      </div>,
      {
        style: {cursor: 'default'},
      },
    )

  useEffect(() => {
    if (show) {
      toast.clearWaitingQueue()
      notify()
    }
    return () => toast.clearWaitingQueue()
  }, [show])

  return (
    <ToastContainer
      limit={1}
      closeOnClick
      position="bottom-right"
      pauseOnHover
    />
  )
}

export default ErrorToast
