import {useCallback, useEffect, useState} from 'react'
import apiData from 'src/data/api'
import {Feedback, FeedbackStatuses} from 'src/helpers/Feedback'
import type {Contact} from '../types'

export const useContacts = (): {
  feedback: Feedback
  data: Array<Contact> | null
  fetchNextPage: () => void
} => {
  const [feedback, setFeedback] = useState<Feedback>({
    status: FeedbackStatuses.LOADING,
  })
  const [data, setData] = useState<Array<Contact> | null>(null)
  const fetchData = useCallback(async () => {
    try {
      setFeedback({status: FeedbackStatuses.LOADING})
      const response = await apiData()
      setData((data) => [...(data || []), ...response])
      setFeedback({status: FeedbackStatuses.SUCCESS})
    } catch (e) {
      setFeedback({
        status: FeedbackStatuses.ERROR,
        message: e.message,
      })
    }
  }, [])
  useEffect(() => {
    void fetchData()
  }, [])

  return {feedback, data, fetchNextPage: fetchData}
}
