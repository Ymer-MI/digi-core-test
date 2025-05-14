import { useEffect, useState } from 'react';

export const useFetch = <T>(url: string) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<T>()

  useEffect(() => {
    if (data !== undefined) (async () => {
        try {
          setData(await (await fetch(url)).json())
        } catch (error) {
          console.error(error)
        } finally {
          setLoading(false)
        }
      })()
  })

  return { loading, data }
};