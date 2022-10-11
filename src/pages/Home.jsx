import React from 'react';

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";

const Home = () => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        fetch('https://62ff3d0a9350a1e548da51eb.mockapi.io/items').then((res) => {
            return res.json();
        }).then((arr) => {
            setItems(arr);
            setIsLoading(false);
        });
    }, [])

    return (
        <>
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    isLoading
                        ? [...new Array(6)].map((_, index) => <Skeleton key = {index} />)
                        : items.map((obj) => <PizzaBlock key = {obj.id} {...obj}/>)
                }
            </div>
        </>
    );
};

export default Home;