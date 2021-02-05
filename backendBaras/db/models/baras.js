"use strict";
module.exports = (sequelize, DataTypes) => {
  const Baras = sequelize.define(
    "Baras",
    {
      userId: DataTypes.INTEGER,
      relatesTo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 100],
        },
      },
      text: DataTypes.TEXT,
      photo: DataTypes.TEXT,
      music: DataTypes.TEXT,
      video: DataTypes.TEXT,
      private: { type: DataTypes.BOOLEAN, defaultValue: false },
      trusted: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {}
  );
  Baras.associate = function (models) {
    Baras.belongsTo(models.User, { foreignKey: "userId" });
    Baras.belongsToMany(models.Trust, {
      through: "BarasTrustedJoins",
      otherKey: "trustedId",
      foriegnKey: "barasId",
    });
    // associations can be defined here
  };
  return Baras;
};
