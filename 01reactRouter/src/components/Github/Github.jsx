import React, { useEffect } from 'react'
import { useState} from 'react'
function Github() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://api.github.com/users/Pandey-Sudheer')
        .then(response => response.json())
        .then(data => {
            console.timeLog(data)
            setData(data)
        })
    }, []);
  return (
    <div className='bg-gray-600 text-white text-3xl p-4 text-center m-4'>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github
