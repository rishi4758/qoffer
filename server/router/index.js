const mysqlCon = require("../database");
const passport = require("passport");
module.exports = (app) => {
  app.get("/list", async (req, res) => {
    mysqlCon.query("select * from products", (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else {
        res.send(err);
      }
    });
  });

  app.post("/list", async (req, res) => {
    const { name, price, description } = await req.body;
    const file = await req.files.image;

    file.mv(`../client/public/images/${file.name}`, (err) => {
      if (err) {
        return res.status(500).send(err);
      }
    });

    mysqlCon.query(
      "INSERT INTO products(name, price,description,image) VALUES (?, ?, ?,?)",
      [name, price, description, file.name],
      (err, rows, fields) => {
        if (!err) {
          res.json({
            p_id: rows.insertId,
            name: name,
            price: price,
            description: description,
            image: file.name,
          });
        } else {
          return res.status(500).send(err);
        }
      }
    );
  });

  app.put(`/list/:id`, async (req, res) => {
    const file = req.files;
    if (file) {
      const { name, price, description } = req.body;
      file.image.mv(`../client/public/images/${file.name}`, (err) => {
        if (err) {
          return res.status(500).send(err);
        }
      });

      mysqlCon.query(
        `update products set name='${name}', price='${price}',description='${description}' ,image='${file.image.name}' where p_id=${req.params.id}`,
        (err, rows, fields) => {
          if (!err) {
            res.json({
              p_id: req.params.id,
              name: name,
              price: price,
              description: description,
              image: file.name,
            });
          } else {
            return res.status(500).send(err);
          }
        }
      );
    } else {
      const { name, price, description, image } = req.body;
      mysqlCon.query(
        `update products set name='${name}', price='${price}',description='${description}' ,image='${image}' where p_id=${req.params.id}`,
        (err, rows, fields) => {
          if (!err) {
            res.json({
              p_id: req.params.id,
              name: name,
              price: price,
              description: description,
              image: image,
            });
          } else {
            return res.status(500).send(err);
          }
        }
      );
    }
  });

  app.delete("/list/:id", async (req, res) => {
    mysqlCon.query(
      `delete from products where p_id=${req.params.id}`,
      (err, rows, fields) => {
        if (!err) {
          res.send(rows);
        } else {
          return res.status(500).send(err);
        }
      }
    );
  });
};
