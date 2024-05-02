const functions = require("firebase-functions");
const express = require("express");
//secrete key pass here
const stripe = require("stripe")(
  "sk_test_51NJUcFSBl7eiZkuNBc5Aco0T71lln3UJbXCOa15AP6BSd4FID4RQOPlNn5yxSsdRUKZdybqEOUXdSYw6MRCJCvFF006cBQ8iwT"
);
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: true,
  })
);
app.use(bodyParser.json());
app.use(express.json());
app.get("/", (req, res) => {
  return res.json({
    message: "Hello word",
  });
});
app.post("/payment/create", async (req, res) => {
  try {
    const { total } = req.query;

    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "INR",
    });

    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment:", error);
    res.status(500).send({ error: "Failed to create payment" });
  }
});

exports.api = functions.https.onRequest(app);
