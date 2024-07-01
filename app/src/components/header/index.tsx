import React from 'react';
import styles from './Header.module.scss';
import meliLogo from "../../assets/mercadolibre-logo.svg"
import searchIcon from "../../assets/searchIcon.svg"



const Header: React.FC = () => {
    const [search, setSearch] = React.useState<string>('');
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    React.useEffect(() => {
        if(searchParam) {
            setSearch(searchParam);
        }
    }, [searchParam]);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        window.location.href = `/items?search=${search}`;
    }

    return (
        <section className={styles.headerSection} role='banner'>
            <div className={styles.headerContainer}>
                <a href="/" className={styles.headerLogo} aria-label="Logo">
                    <img className={styles.headerImg} src={meliLogo} alt="mercado libre logo" />
                </a>
                <search className={styles.headerSearchGroup}>
                    <form className={styles.headerSearchForm} onSubmit={handleSearch}>
                        <input type="search" id="site-search" className={styles.searchInput} onChange={e => {setSearch(e.target.value)}} value={search} placeholder='Nunca dejes de buscar' name="q" required />
                        <button type="submit" id="submit" data-testid="search-button" aria-label='Buscar'><img src={searchIcon} alt="icono de busqueda" className={styles.searchIcon} /></button>
                    </form>
                </search>
            </div>
        </section>
    );
};

export default Header;