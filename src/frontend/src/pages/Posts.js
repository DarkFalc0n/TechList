import React from 'react'
import Post from '../components/Post'

const Posts = () => {
    return (
        <div className="flex flex-col justify-evenly w-full text-center">
            <Post data={{
                "user": "darkfalc0n",
                "likes": 40,
                "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt turpis nec quam ultricies, a commodo nisi convallis. Sed finibus congue mauris. Curabitur quis tincidunt urna, quis imperdiet diam. Pellentesque condimentum mauris ultrices vehicula fringilla. Curabitur rhoncus lorem in magna lacinia, vitae dictum turpis condimentum. Mauris suscipit malesuada metus, non facilisis justo rutrum non."
            }} />

            <Post data={{
                "user": "john",
                "likes": 128,
                "desc": "Donec a magna mi. Sed dignissim ipsum metus, eu eleifend purus vulputate vitae. Aliquam placerat, est at blandit cursus, felis justo sollicitudin orci, sed suscipit elit orci vel velit."
            }} />
        </div>
    )
}

export default Posts