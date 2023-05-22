import { POPUP_NAME } from "../../utils/popupNames";
import { CardImage } from "../cardimage/CardImage";

import { useDispatch, useSelector } from "react-redux";
import {
  selectCocktailNeighbours,
  selectSelectedCocktail,
} from "../../selectors/selectCocktailData";
import Tags from "../tags/Tags";
import { Ingredient } from "../ingredients/Ingredients";
import { Instructions } from "../instructions/Instructions";
import { CocktailNav } from "../cocktailnav/CocktailNav";
import "./cardmodal.css";
import { useEffect } from "react";

export function CardModal({ open }) {
  const cocktail = useSelector(selectSelectedCocktail);
  const dispatch = useDispatch();
  const { nextId, prevId } = useSelector(selectCocktailNeighbours);

  return (
    !!cocktail && (
      <div className={`card-background ${!open ? "hide-card" : ""}`}>
        <div className="popup-details">
          <div className="first">
            <CardImage image={cocktail?.strDrinkThumb} />
            <Tags tags={(cocktail?.strTags ?? []).split(",")} />
            <div className="cocktail-title">
              <p className="cocktail-title-text">{cocktail?.name}</p>
            </div>
            {/* <CocktailNav prevId={prevId} nextId={nextId} /> */}
          </div>
          <div className="second">
            {/* <Ingredient ingredients={cocktail?.ingredients} /> */}
            <Instructions
              instructions={[
                cocktail?.strInstructions,
                cocktail?.strInstructionsDE,
                cocktail?.strInstructionsES,
              ]}
            />
          </div>
        </div>
      </div>
    )
  );
}