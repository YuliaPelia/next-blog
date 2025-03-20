import { MongoClient } from 'mongodb';

async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;

        if (!email ||
            !name ||
            !message ||
            message.trim() === '' ||
            email.trim() === ''
            || name.trim() === ''
            || !email.includes('@')) {
            res.status(422).json({ message: 'Invalid input.' });
            return;
        }

        // Store it in a database
        const newMessage = {
            email,
            name,
            message
        }

        console.log(newMessage);
        let client;

        try {
            client = await MongoClient.connect('mongodb+srv://Yulia109:SGcXrHt5rtWLTmk@cluster0.tq9t8.mongodb.net/my-site')
        } catch (error) {
            res.status(500).json({ message: 'Could not connect to database.' });
            return;
        }

        const db = client.db();

        try {
            const result = await db.collection('messages').insertOne(newMessage);
            newMessage._id = result.insertedId;
        } catch (error) {
            client.close();
            res.status(500).json({ message: 'Storing message failed.' });
            return;
        }

        client.close();
        res.status(201).json({
            message: 'Message stored successfully!', newMessage
        });
    }
}

export default handler;