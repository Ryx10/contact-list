import {useEffect, useState} from 'react'
import apiData from 'src/data/api'
import {Feedback, FeedbackStatuses} from 'src/helpers/Feedback'
import type {Contact} from '../types'

export const useContacts = (): {feedback: Feedback; data: Array<Contact>} => {
  const [feedback, setFeedback] = useState<Feedback>({
    status: FeedbackStatuses.LOADING,
  })
  const [data, setData] = useState<any>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiData()
        setData(response)
        setFeedback({status: FeedbackStatuses.SUCCESS})
      } catch (e) {
        setFeedback({
          status: FeedbackStatuses.ERROR,
          message: e.message,
        })
      }
    }

    fetchData()
  }, [])

  return {feedback, data}
}
