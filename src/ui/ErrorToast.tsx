import {toast, ToastContainer} from 'react-toastify'
import {useCallback, useEffect} from 'react'

import 'react-toastify/dist/ReactToastify.css'
import css from './ErrorToast.module.css'

type Props = {
  show: boolean
  retry: () => void
}

const ErrorToast = ({show, retry}: Props) => {
  const notify = useCallback(
    () =>
      toast.error(
        <div>
          <div>Something went wrong...</div>
          <span className={css.linkButton} onClick={retry}>
            Try again
          </span>
        </div>,
        {
          style: {cursor: 'default'},
        },
      ),
    [retry],
  )

  useEffect(() => {
    if (show) {
      toast.clearWaitingQueue()
      notify()
    }
    return () => toast.clearWaitingQueue()
  }, [show, notify])

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
