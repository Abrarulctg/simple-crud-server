/**
 * MONGODB Connection
 * 
 * 
 * 1. Create account
 * 2. Create an user with password
 * 3. whitelist IP Address
 * 4. database > connect > driver > node > show full code
 * 5. change the password in the uri
 * ---------------------
 * 
 * Server Side:
 * 1. CREATE --- POST
 * 2. app.post('/users' async (req, res) => {})
 * 3. Make the function async to use await inside it
 * 4. Make sure you use the express.json() middleware
 * 5. access data from the body: const user = req.body
 * 6. const result = await userCollection.insertOne(user);
 * 6. res.send(result);
 * 
 * 
 * 
 * ---------
 * Client Side:
 * 1. create fetch
 * 2. add second parameter as an object
 * 3. provide method: "POST"
 * 4. add headers: {'content-type':'appliction/json'}
 * 5. add body: JSON.Stringify(user)
 * 
 * 
 * 
 * 
 * READ: 
 * 1. create a cursor = userCollection.find()
 * 2. const result = await cursor.toArray();
 * 
 * 
 * 
 * =============
 * delete
 * ============
 * 1. create app.delete('/users/:id',async(req, res) ={ })
 * 2. specify unique ObjectId to delete the right user.
 * 3. const query = {_id: new ObjectId(id)}
 * 4. const result = await userCollection.deleteOne(query);
 * 
 * 
 * 
 * Client:
 * 1. cretae dynamic url with id
 * 2. mention the DELETE Method
 * 
 */
