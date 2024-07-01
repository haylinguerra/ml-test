import React from 'react';
import styles from './Product.module.scss';
import { ProductBreadcrumbs, ProductDetails } from '../../shared/types/product.types';
import { useLoaderData } from 'react-router-dom';
import BreadCrumbs from "../../components/BreadCrumbs"

const ProductDetailsPage: React.FC = () => {
    const { product, breadcrumbs } = useLoaderData() as { product: ProductDetails, breadcrumbs: ProductBreadcrumbs[] };

    return (
        <main role='main' className={styles.mainContainer}>
            <BreadCrumbs breadcrumbs={breadcrumbs} />
            <section className={styles.container}>
                <div className={styles.splitView}>
                    <figure className={styles.imageContainer}>
                        <img src={product.picture} alt={product.item.title} className={styles.image} />
                        <figcaption hidden>{product.picture}</figcaption>
                    </figure>
                    <section className={styles.productDetails}>
                        <section className={styles.productSalesInfo}>
                            <p>{product.condition}&nbsp;-&nbsp;</p>
                            <p>{product.sold_quantity.toString()} vendidos</p>
                        </section>
                        <h1 className={styles.title}>{product.item.title}</h1>
                        <section className={styles.price}>
                            <span>{product.item.price.currency}</span>
                            <p className={styles.priceAmount}>{product.item.price.amount.toString()}</p>
                            <span className={styles.priceDecimals}>{product.item.price.decimals.toFixed(2).replace("0.", "")}</span>
                        </ section>
                        <button type="button" className={styles.buyButton}>Comprar</button>
                    </section>
                </div>
                {product.description && (
                    <section className={styles.productDescription}>
                        <h2 className={styles.descriptionTitle}>Descripcion del producto</h2>
                        <p className={styles.description}>{product.description}</p>
                    </section>
                )}
            </section>
        </main>
    );
};

export default ProductDetailsPage;