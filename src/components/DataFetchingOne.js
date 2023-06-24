import React, {useEffect, useState} from 'react'
import axios from 'axios'

function DataFetchingOne() {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [ post, setPost] = useState({})

    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                setLoading(false)
                setError('')
                setPost(response.data)
            })
            .catch(error => {
                setLoading(false)
                setError('something whent wrong!')
                setPost({})
            })
    }, [])

  return (
    <div>
        
    </div>
  )
}

export default DataFetchingOne