import React, {useState} from 'react';
import s from './Paginator.module.css'
import {UsersType} from "../../users/Users";


export type PaginatorPropsType = {
    users: Array<UsersType>
    onPageChanged: (pageNumber: number) => void
    pageSize: number
    totalCount: number
    currentPage: number
    portionSize: number
}


function Paginator(props: PaginatorPropsType) {

    let pagesCount = Math.ceil(props.totalCount / props.pageSize);
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize)
    let [portionNumber, setPortonNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    let rightPortionPageNumber = portionNumber * props.portionSize
    return <div>
        {portionNumber > 1 && <button onClick={()=>{setPortonNumber(portionNumber-1)}}>prev</button>}



        {
            pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p, i) => {
                return <span key={i} className={props.currentPage === p ? s.selectedPage : ""}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })
        }
        {portionCount >portionNumber&& <button onClick={()=>{setPortonNumber(portionNumber+1)}}>next</button>}
    </div>

}


export default Paginator