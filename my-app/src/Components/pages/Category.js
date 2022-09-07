import {useEffect,useState} from "react";
import {useParams} from "react-router-dom";
import {getFilterCategory} from "../../api";
import {Loader} from "../Loader";
import {MealList} from "../MealList";

export default  function Category () {
  const {name} = useParams()
  const [meals,setMeals] =useState([])

  useEffect( ()=> {
    getFilterCategory(name).then(data => setMeals(data.meals))
  },[] )

return (
  <>

    {!meals.length ? <Loader /> : <MealList meals={meals} />  }

  </>
)
}

