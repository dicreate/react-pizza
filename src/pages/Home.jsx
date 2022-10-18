import React from 'react';

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";
import Pagination from "../components/Pagination";

const Home = ({searchValue}) => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true)
    const [categoryId, setCategoryId] = React.useState(0)
    const [sortType, setSortType] = React.useState({
        name:'популярности',
        sortProperty: 'rating'
    });
    const [currentPage, setCurrentPage] = React.useState(1);


    React.useEffect(() => {
        setIsLoading(true);
        fetch(`https://62ff3d0a9350a1e548da51eb.mockapi.io/items?page=${currentPage}&limit=4&${
                categoryId > 0 ? `category=${categoryId}` : ''
            }&sortBy=${sortType.sortProperty}&order=desc`
        )
            .then((res) => {
            return res.json();
        }).then((arr) => {
            setItems(arr);
            setIsLoading(false);
        });
        window.scrollTo(0,0);
    }, [categoryId, sortType, searchValue, currentPage])

    const pizzas = items.filter((obj) =>{
        return obj.title.toLowerCase().includes(searchValue.toLowerCase())
    }).map((obj) => <PizzaBlock key = {obj.id} {...obj}/>)
    const skeletons = [...new Array(6)].map((_, index) => <Skeleton key = {index} />)

    return (
        <div className={'container'}>
            <div className="content__top">
                <Categories value={categoryId} onChangeCategory={(id) => setCategoryId(id)} />
                <Sort value = {sortType} onChangeSort={(i) => setSortType(i)}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading
                        ? skeletons
                        : pizzas
                }
            </div>
            <Pagination onChangePage={(number) => setCurrentPage(number)}/>
        </div>
    );
};

export default Home;