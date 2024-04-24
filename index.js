const express = require('express');
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;


//Middleware
app.use(cors());
app.use(express.json());

//abrarctg25
//0l2qUcSFu9aLxkcB



const uri = "mongodb+srv://abrarctg25:0l2qUcSFu9aLxkcB@cluster0.1qcsvas.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
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
        await client.connect();
        const database = client.db("usersDB");
        const userCollection = database.collection("users");

        app.get('/users', async (req, res) => {
            const cursor = userCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        //get user from mongo
        app.get('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const user = await userCollection.findOne(query);
            res.send(user);
        })

        //create new user
        app.post('/users', async (req, res) => {
            const user = req.body;
            console.log("new User", user);
            const result = await userCollection.insertOne(user);
            res.send(result);

        });

        //Update User
        app.put("/users/:id", async (req, res) => {
            const id = req.params.id;
            const user = req.body;
            console.log(id, user);
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updatedUser = {
                $set: {
                    name: user.name,
                    email: user.email
                }
            }
            const result = await userCollection.updateOne(filter, updatedUser, options);
            res.send(result);
        })

        //delete user
        app.delete('/users/:id', async (req, res) => {
            const id = req.params.id;
            console.log("delete from DB ", id);
            const query = { _id: new ObjectId(id) };
            const result = await userCollection.deleteOne(query);
            res.send(result);
        })

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    }
    catch (error) {
        console.error("Error Connecting to MongoDB", error);
    }
    finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);







app.get('/', (req, res) => {
    res.send("Simple CRUD Server is Running");
})




app.listen(port, () => {
    console.log(`Simple CRUD SERVER is running on Port:  ${port}`);
})




// async function run() {

// }
// run().catch(err => console.log(err))
// const run = async () => {

// }


// try{

// }
// catch{

// }
// finally{

// }
