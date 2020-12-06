import React from 'react';
import s from'./Post.module.css'


type PostProps = {
    id: string
    message: string
    likekounts: number
}

const Post = (props: PostProps) => {

    return (
        <div className={s.item}>
            <img src="https://vignette.wikia.nocookie.net/castle-rock/images/9/9d/Stephen_King._Art_by_CoalRye.jpg/revision/latest?cb=20180716011208&path-prefix=ru"/>
            {props.message}

            <div>
            <span>{props.likekounts} like</span>
            </div>
        </div>


)
}
export default Post