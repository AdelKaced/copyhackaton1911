import React, { useState } from "react";
import "./search.css";
import Search from './Search'

const products = [
  {
    name: " Cat  ",
    function: "best chat in the market",
    quantity: 2,
    picture:
      "https://previews.123rf.com/images/chris_elwell/chris_elwell1506/chris_elwell150600017/40962129-rustique-fourche-en-bois-en-plein-champ-de-bl%C3%A9.jpg",
  },

  {
    name: "Fork",
    function: "Best fourk in the market ",
    quantity: 10,
    picture:
      "https://previews.123rf.com/images/chris_elwell/chris_elwell1506/chris_elwell150600017/40962129-rustique-fourche-en-bois-en-plein-champ-de-bl%C3%A9.jpg",
  },
  {
    name: " pelle ",
    function: "Best pelle in the market",
    quantity: 2,
    picture:
      "https://media.istockphoto.com/photos/shovel-picture-id872877836?k=6&m=872877836&s=612x612&w=0&h=UfE4xOjQNSSlG1SmpZ8vmEojSKvS-z4NIp9IN8EvP74=",
  },
  {
    name: " pelle ",
    function: "Best pelle in the market",
    quantity: 2,
    picture:
      "https://media.istockphoto.com/photos/shovel-picture-id872877836?k=6&m=872877836&s=612x612&w=0&h=UfE4xOjQNSSlG1SmpZ8vmEojSKvS-z4NIp9IN8EvP74=",
  },
  {
    name: " pelle ",
    function: "Best pelle in the market",
    quantity: 2,
    picture:
      "https://media.istockphoto.com/photos/shovel-picture-id872877836?k=6&m=872877836&s=612x612&w=0&h=UfE4xOjQNSSlG1SmpZ8vmEojSKvS-z4NIp9IN8EvP74=",
  },
];

const SearchList = () => {
  return (
    <div>
      <h1 className="search-h1">what can you have in return ? </h1>
      <div className="search-display">
        {products.map((para) => (
          <Search info={para} />
        ))}
      </div>
    </div>
  );
};

export default SearchList;
