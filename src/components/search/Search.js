import "./search.css";
import x from "../../img/x.svg";
import search from "../../img/search.svg";
import noresults from "../../img/nores.svg";
export function Search(open) {
  function hideSearch() {
    const searchBackground = document.querySelector(".search-background");
    searchBackground.classList.add("hide-search");
  }

  return (
    <div>
      <div class={`search-background ${open ? "hide-search" : ""}`}>
        <div class="search-content">
          <div class="close" onClick={hideSearch}>
            <img src={x}></img>
          </div>

          <div class="search-title">
            <h2>SEARCH</h2>
          </div>
          <div class="form-div>">
            <form>
              <label for="search"></label>
              <input
                type="text"
                id="search"
                name="search"
                placeholder="TYPE HERE"
              />
              <a class="submit-btn" type="submit">
                <img src={search}></img>
              </a>
            </form>
          </div>

          <div class="results-container">
            <div class="results-text">
              <h2>RESULTS</h2>
            </div>

            <div class="results-content">
              <img src={noresults}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}