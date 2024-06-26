import { NewsInfo } from '~/types/pon-design'

type Result = {
  title: string
  status: 'OK' | 'NG'
}

const getNewsTitle = () => {
  let isLoading = false
  const fetchHandler = async (news_id: string): Promise<Result> => {
    const url = `/api/pon-design/news/${news_id ?? 'web-magazine'}`
    try {
      isLoading = true
      const response = await fetch(url)
      const data: NewsInfo = await response.json()
      return { title: data.title, status: 'OK' }
    } catch (e) {
      if (e instanceof Error) {
        throw new Error('Failed data fetch', e)
      } else {
        throw new Error('Failed data fetch')
      }
    } finally {
      isLoading = true
    }
  }
  return {
    fetchHandler,
    isLoading,
  }
}

export { getNewsTitle }
