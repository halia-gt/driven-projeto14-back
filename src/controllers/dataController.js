import axios from "axios";
import { ObjectId } from "mongodb";
import db from "../database/db.js";

function getForever21Data() {
  const options = {
    method: "GET",
    url: "https://apidojo-forever21-v1.p.rapidapi.com/products/v2/list",
    params: {
      pageSize: "48",
      pageNumber: "3",
      sortby: "0",
    },
    headers: {
      "X-RapidAPI-Key": "6bb55d5608msh88f61159aead8e1p164e12jsn806a2ed1439c",
      "X-RapidAPI-Host": "apidojo-forever21-v1.p.rapidapi.com",
    },
  };

  const promise = axios.request(options);

  return promise;
}
async function insertData(req, res) {
  try {
    const promise = await getForever21Data();
    promise.data.CatalogProducts.map((product) => {
      db.collection("clothes").insertOne({
        category: product.CategoryName,
        defaultProductImage: product.DefaultProductImage,
        displayName: product.DisplayName,
        description: product.Description,
        productShareLinkUrl: product.ProductShareLinkUrl,
        variants: product.Variants,
        listPrice: product.ListPrice,
      });
    });
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(404);
  }
}
async function getAllProducts(req, res) {
  try {
    const products = await db.collection("clothes").find().toArray();
    return res.status(200).send(products);
  } catch (error) {
    console.log(error);
    return res.sendStatus(404);
  }
}

async function getProductById(req, res) {
  const productId = req.params;
  try {
    const productInfo = await db
      .collection("clothes")
      .find({
        _id: ObjectId(productId.id),
      })
      .toArray();
    res.status(200).send(productInfo);
  } catch (error) {
    console.log(error);
    res.sendStatus(404);
  }
}
async function getProductByCategory(req, res) {
  const categoryKey = req.params;
  let categoryId;

  switch (categoryKey.category) {
    case "Summer Collection":
      categoryId = [
        "bottom_jeans",
        "lingerie",
        "top_blouses",
        "bottoms_shorts",
        "dress",
        "activewear",
        "bottoms_pants",
      ];
      break;

    case "Winter Collection":
      categoryId = [
        "sweater",
        "rompers_jumpsuits",
        "outerwear_coats_and_jackets",
      ];
      break;

    case "Shoes":
      categoryId = "shoes";
      break;

    case "Accesories":
      categoryId = ["acc_jewelry", "acc_beauty_makeup"];
      break;

    default:
      break;
  }
  try {
    const products = await db.collection("clothes").find().toArray();
    const filteredList = products.filter((product) => {
      return (
        categoryId.includes(product.category) || product.category === categoryId
      );
    });
    res.status(200).send(filteredList);
  } catch (error) {
    console.log(error);
    res.sendStatus(404);
  }
}

export { getProductByCategory, getProductById, getAllProducts, getForever21Data };
