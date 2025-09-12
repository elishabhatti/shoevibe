import { shoeModel } from "../models/shoe.models.js";

export const getShoe = async (req, res) => {
  try {
    const shoe = await shoeModel.find();
    if (!shoe) return res.json({ data: "Shoe not found" });
    console.log("shoe", shoe);

    return res.json({ data: shoe });
  } catch (error) {
    console.error(error);
  }
};
