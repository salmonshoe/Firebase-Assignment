// 1. Create Firebase configuration
// 2. Place initial train data to Firebase
// 3. Create button for adding new trains - then update the HTML + update the database
// 4. Create a way to retrieve trains from the trainList
// 5. Create a way to calculate the time. Using difference between start and current time.
// Don't forget to take the difference by frequency. 

// Initialize Firebase (1)
const config = {
    apiKey: "AIzaSyDdxlfNVjUMAfSTywMRskDFwiemlBA-OR0",
    authDomain: "train-activity-d8484.firebaseapp.com",
    databaseURL: "https://train-activity-d8484.firebaseio.com",
    projectId: "train-activity-d8484",
    storageBucket: "train-activity-d8484.appspot.com",
    messagingSenderId: "853671304117"
};
firebase.initializeApp(config);
const trainData = firebase.database();

// Add functionality to Submit button
$('#add-train-btn').on('click', event => {
    event.preventDefault();
    // Collect inputs
    let trainName = $('#train-name-input').val();
    let destination = $('#detination-input').val();
    let firstTrain = $('#first-train-input').val();
    let frequency = $('#frequency').val();

    // Place input variables into an object to work with, then post to DB
    let newTrain = {
        name : trainName,
        destination: destination,
        firstTrain: firstTrain,
        frequency: frequency
    };
    trainData.ref().push(newTrain);

    // console.table(newTrain);
    console.log(`First ${name} train arrives to ${destination} at ${firstTrain}. Next comes every ${frequency} mins.`);


      // Clears all of the text-boxes
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#first-train-input").val("");
  $("#frequency-input").val("");
    
});

