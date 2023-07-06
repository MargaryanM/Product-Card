import React, { useEffect, useState } from "react";

const Card = ({ name, description, price, image }) => {
  return (
    <div className="card-cont1">
      <h2>Product Name: {name}</h2>
      <p>Description: {description}</p>
      <p>Price: {price}</p>
      <img src={image} alt="Product Img" />
      <button className="card-btn">Remove</button>
    </div>
  );
};

const ProdCard = () => {
  const [cards, setCards] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cards"));
    if (items?.length) {
      setCards(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
    console.log("second useeffect");
  }, [cards]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleDescChange = (e) => {
    setDescription(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleImgChange = (e) => {
    setImage(e.target.value);
  };

  const addCard = () => {
    const card = { name, description, price, image };
    setCards([...cards, card]);
    setName("");
    setDescription("");
    setPrice("");
    setImage("");
  };

  return (
    <>
      <div className="inputs-cont">
        <label>
          Product Name
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Product Description
          <input type="text" value={description} onChange={handleDescChange} />
        </label>
        <label>
          Product Price
          <input type="number" value={price} onChange={handlePriceChange} />
        </label>
        <label>
          Product Image URL
          <input type="text" value={image} onChange={handleImgChange} />
        </label>
        <button onClick={addCard}>Add Card</button>
      </div>

      <div className="card-cont">
        {cards.map((carditem, key) => {
          return (
            <Card
              key={key}
              name={carditem.name}
              description={carditem.description}
              price={carditem.price}
              image={carditem.image}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProdCard;
