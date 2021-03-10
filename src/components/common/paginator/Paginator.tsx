import React from 'react';
import s from './Paginator.module.css'
import {UsersType} from "../../users/Users";


export type PaginatorPropsType = {
    users: Array<UsersType>
    onPageChanged: (pageNumber: number) => void
    pageSize: number
    totalCount: number
    currentPage: number
}


function Paginator(props: PaginatorPropsType) {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        {
            pages.map(p => {
                return <span key={p} className={props.currentPage === p ? s.selectedPage : ""}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
    </div>

}


export default Paginator