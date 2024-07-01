import React from 'react';
import styles from './Search.module.scss';
import { ProductSearchItem } from '../../shared/types/productSearch.types';
import BreadCrumbs from "../../components/BreadCrumbs"
import freeShippingExampleImg from "../../assets/transportation-truck.png"
import { useLoaderData, Link } from 'react-router-dom';
import { ProductBreadcrumbs } from '../../shared/types/product.types';



const ProductSearchPage: React.FC = () => {

    const { items, breadcrumbs } = useLoaderData() as { items: ProductSearchItem[], breadcrumbs: ProductBreadcrumbs[] };
    return (
        <main role='main' className={styles.container}>
            <section className={styles.contentSection}>
                <BreadCrumbs breadcrumbs={breadcrumbs} />

                <ul className={styles.productList}>
                    {items.map((item: ProductSearchItem) => (
                        <li className={styles.listItem} key={item.id} data-testid="product-list-item">
                            <Link to={`/items/${item.id}`} className={styles.itemLink}>
                                <div className={styles.itemGroup}>
                                    <div className={styles.itemContainer}>
                                        <img className={styles.itemImg} src={item.picture} alt={item.title} />

                                        <div className={styles.itemMiddleGroup}>
                                            <h4>{item.price.currency} {item.price.amount.toString()}

                                                {item.free_shipping && <span className={styles.itemShipping}><img className={styles.itemIcon} src={freeShippingExampleImg} alt="" /></span>}

                                            </h4>
                                            <p>{item.title}</p>
                                        </div>
                                    </div>


                                    <p className={styles.itemLocation}>medellin</p>
                                </div>
                            </Link>
                        </li>
                    ))}


                </ul>
            </section>
        </main>
    );
};

export default ProductSearchPage;