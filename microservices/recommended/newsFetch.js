const fs = require('fs');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://ranaaryansh12:jXGKXC6kVXMuzkqW@cluster0.kln2bnp.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const FormDataSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    clickedNews: [String]
});

// Define a model using the schema
const FormDataModel = mongoose.model('log_reg_form', FormDataSchema);

// Function to get clickedNews arrays based on email
async function getClickedNewsByEmail(email) {
    try {
        // Find documents with the given email
        const documents = await FormDataModel.find({ email: email });

        // Extract clickedNews arrays from documents
        const clickedNewsArrays = documents.map(doc => doc.clickedNews);

        return clickedNewsArrays;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

function writeToFile(data, filename) {
    fs.writeFile(filename, data, { flag: 'a+' }, (err) => { // Using 'a+' flag to append to the file
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('Data has been written to', filename);
        }
    });
}

// Example usage
const userEmail = 'user3@gmail.com'; // Provide the email here
const outputFilename = 'clickedNews.txt'; // Provide the output filename here

getClickedNewsByEmail(userEmail)
    .then(clickedNewsArrays => {
        clickedNewsArrays.forEach(newsArray => {
            const outputData = newsArray.join('\n');
            writeToFile(outputData + '\n', outputFilename);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
