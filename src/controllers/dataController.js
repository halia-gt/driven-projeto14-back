import axios from "axios";
import db from "../database/db.js";

function getForever21Data() {
  const options = {
    method: "GET",
    url: "https://apidojo-forever21-v1.p.rapidapi.com/products/v2/list",
    params: {
      pageSize: "2",
      pageNumber: "2",
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
export async function insertData(req, res) {
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
export async function getAllProducts(req, res) {
  try {
    const apiData = await db.collection("clothes").find().toArray();
    console.log(apiData);
    return res.status(200).send(apiData);
  } catch (error) {
    console.log(error);
    return res.sendStatus(404);
  }
}
