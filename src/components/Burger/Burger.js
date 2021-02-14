import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import styles from './Burger.module.css';

const Burger = (props) => {
    let transformedIng = Object.keys(props.ingredients).map(igKey =>
        {
            return [...Array(props.ingredients[igKey])].map((_, i) =>{
                return <BurgerIngredient key ={igKey + i} type = {igKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
    if(transformedIng.length === 0){
        transformedIng = <p>Please add ingredients</p>
    }     
    return (
        <div className= {styles.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIng}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};
 export default Burger;