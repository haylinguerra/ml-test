import React from 'react';
import styles from './BreadCrumbs.module.scss';
import { ProductBreadcrumbs } from '../../shared/types/product.types';
import { Link } from 'react-router-dom';

type breadCrumbsProps = {
    breadcrumbs: ProductBreadcrumbs[];
};

const breadCrumbs: React.FC<breadCrumbsProps> = ({ breadcrumbs }) => {
    return (
        <div className={styles.breadCrumbsSection}>

            <ul >
                {breadcrumbs.map((breadcrumb: ProductBreadcrumbs) => (
                    <li key={breadcrumb.id} itemProp="itemListElement" data-id={breadcrumb.id} data-testid="breadcrumb-item"><Link to={`/items?search=${breadcrumb.name}`}>{breadcrumb.name}</Link></li>
                ))}
            </ul>


        </div>
    );
};

export default breadCrumbs;