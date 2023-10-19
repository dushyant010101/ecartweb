import React from "react";
import "./NewCollection.css";
import Item from "../Item/Item";
import { new_collection } from "../Data/new_collection";

const NewCollection = () => {
  return (
    <>
      <div className="newcollection">
        <h2>NEW COLLECTION</h2>
        <hr />
        <div className="collectons">
          {new_collection.map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                img={item.img}
                newprice={item.newprice}
                oldprice={item.oldprice}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default NewCollection;
