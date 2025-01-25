import { DataTypes } from "sequelize";
import sequelize from "../utils/db.js";

const imageModel = sequelize.define("image", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  image_one: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  image_two: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  image_three: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

// (async () => {
//   await sequelize.sync({ force: true });
// })();

export default imageModel;
