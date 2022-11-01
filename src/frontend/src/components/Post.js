import React from 'react'
import { ThumbsUp } from 'react-feather';
const Post = (props) => {
    return (
        <div className="w-2/5 bg-slate-100 m-auto my-4 py-4 px-8">
            <div className="text-left text-sm font-medium text-slate-500">
                {props.data.user} posted
            </div>
            <div className="text-left text-slate-800 mt-2">
                {props.data.desc}
            </div>
            <div className="my-4 text-slate-500 flex flex-row">
                <ThumbsUp />
                <div className="ml-2 align-middle font-bold ">
                    {props.data.likes}
                </div>
            </div>
        </div>
    )
}

export default Post