import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Product = db.define(
  "products",
  {
    name: {
      type: DataTypes.STRING,
    //   allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
);

export default Product;

//generate table jikata tidak ada, dengan fungsi diabawah ini.
(async () => {
  await db.sync();
})();
