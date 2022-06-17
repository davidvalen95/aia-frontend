import React, { FC } from 'react';
import styles from './PaginationComponent.module.scss';

interface PaginationComponentProps {
    pagination:PaginationInterface;
    onPageChange:(page:number)=>void;
}
export interface PaginationInterface {
    page:number;
    totalPage:number;
}
const PaginationComponent: FC<PaginationComponentProps> = (props) => {
    const pagination:PaginationInterface = props.pagination;


    return(
    <div className={styles.PaginationComponent} data-testid="PaginationComponent">
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {
                    pagination.page > 1 ?
                        <li onClick={()=>{if(props.onPageChange){props.onPageChange(pagination.page -1)}}}  className="page-item"><a className="page-link" href="#">Previous</a></li>

                        : ''
                }
                <li className="page-item"><a className="page-link" href="#">{pagination.page}</a></li>

                {
                    pagination.page < pagination.totalPage ?
                        <li onClick={()=>{if(props.onPageChange){props.onPageChange(pagination.page +1)}}}

                            className="page-item"><a className="page-link" href="#">Next</a></li> : ''
                }

            </ul>
        </nav>
    </div>)
};

export default PaginationComponent;
