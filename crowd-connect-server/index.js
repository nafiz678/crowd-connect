require('dotenv').config()
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');


const app = express()
const port = process.env.PORT || 5000



// Middleware
app.use(express.json())
app.use(cors())



const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9houn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;


const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();

        const database = client.db("campaignCollection")
        const campaignCollection = database.collection("campaigns")
        const donatedCollection = database.collection("donationDB")




        // For campaign collection 
        app.get("/campaigns", async (req, res) => {
            const { ascSort, dscSort } = req.query;

            let query2 = {}; // Filtering conditions (empty in this case)
            let sortQuery = {}; // Sorting conditions

            // If ascSort is "true", sort by minimumDonation in ascending order
            if (ascSort === "true") {
                sortQuery = { minimumDonation: 1 };
            }
            // If dscSort is "true", sort by minimumDonation in descending order
            else if (dscSort === "true") {
                sortQuery = { minimumDonation: -1 };
            }
            // If neither is provided, fallback to default sorting or no sorting
            else {
                sortQuery = {};  // No sorting if neither is provided
            }

            // Perform the query with the given filter and sort conditions
            try {
                const filter = campaignCollection.find(query2).sort(sortQuery);
                const result = await filter.toArray();
                res.send(result);
            } catch (err) {
                console.error("Error fetching campaigns:", err);
                res.status(500).send("Error fetching campaigns");
            }
        });


        app.get("/campaigns/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await campaignCollection.findOne(query)
            res.send(result)
        })

        app.post("/campaigns", async (req, res) => {
            const campaign = req.body;
            const result = await campaignCollection.insertOne(campaign);
            res.send(result)
        })

        app.get("/campaign/:email", async (req, res) => {
            const { email } = req.params;
            const query = { email: email };
            const results = await campaignCollection.find(query).toArray();
            if (results.length === 0) {
                return res.status(404).json({ message: "No records found for the given user" });
            }
            res.send(results);
        })

        app.delete("/campaigns/:id", async (req, res) => {
            const id = req.params.id
            const query = { _id: new ObjectId(id) }
            const result = await campaignCollection.deleteOne(query)
            res.send(result)
        })

        app.put("/campaigns/:id", async (req, res) => {
            const id = req.params.id
            const campaign = req.body
            const filter = { _id: new ObjectId(id) }
            const options = { upsert: true };
            const updatedCampaign = {
                $set: {
                    title: campaign.title,
                    image: campaign.image,
                    type: campaign.type,
                    description: campaign.description,
                    minimumDonation: campaign.minimumDonation,
                    deadline: campaign.deadline,
                    email: campaign.email,
                    userName: campaign.userName,
                },
            };
            const result = await campaignCollection.updateOne(filter, updatedCampaign, options)
            res.send(result)
        })

        // app.get("/sortedCampaign", async (req, res) => {
        //     console.log(req.query);
        //     const ascSort = req.query?.ascSort
        //     const dscSort = req.query?.dscSort

        //     let query2 = {}
        //     let sortQuery = {}
        //     if (ascSort === "true") {
        //         sortQuery = { "minimumDonation": 1 };
        //     }
        //     if (dscSort === "true") {
        //         sortQuery = { "minimumDonation": -1 };
        //     }

        //     console.log(query2);
        //     const query = campaignCollection.find(query2).sort(sortQuery)
        //     const result = await query.toArray()
        //     res.send(result)
        // })

        // Donated section

        app.get("/donations", async (req, res) => {
            const filter = donatedCollection.find()
            const result = await filter.toArray()
            res.send(result)
        })

        app.get("/donations/:id", async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) }
            const result = await donatedCollection.findOne(query)
            res.send(result)
        })

        app.post("/donations", async (req, res) => {
            const donation = req.body
            const result = await donatedCollection.insertOne(donation)
            res.send(result)
        })

        app.get("/donation/:email", async (req, res) => {
            const { email } = req.params;
            const query = { userEmail: email }
            const result = await donatedCollection.find(query).toArray()
            res.send(result)
        })



    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);



app.get("/", (req, res) => {
    res.send("Crowd Connect server is running")
})


app.listen(port, () => {
    console.log(`Crowd connect server is running on ${port}`);
})