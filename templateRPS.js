'use strict';
const Alexa = require('alexa-sdk');
const APP_ID = undefined;
const REPROMPT = "Still there?";

//==============================EDIT BELOW THIS LINE=======================================================

const handlers = {
    
    'LaunchRequest': function () {
        var speechOutput = "Let's play Rock, Paper, Scissors! Ready, set go!";
        
        this.response.speak(speechOutput).listen(REPROMPT);
        this.emit(':responseReady');
    },
    
    'PlayIntent': function () {
        var speechOutput;
        var winSound = "<audio src='soundbank://soundlibrary/human/amzn_sfx_crowd_cheer_med_01'/>";
        var loseSound = "<audio src='soundbank://soundlibrary/human/amzn_sfx_laughter_giggle_01'/>";
        var tieSound = "<audio src='soundbank://soundlibrary/musical/amzn_sfx_trumpet_bugle_01'/>";
        
        var moveList = ["rock", "paper", "scissors"];
        var randomIndex = Math.floor(3 * Math.random() );
        var alexaMove = moveList[randomIndex];
        var yourMove = this.event.request.intent.slots.myMove.value;
        
        var win = yourMove == "rock" && alexaMove == "scissors" ||
                  yourMove == "scissors" && alexaMove == "paper" ||
                  yourMove == "paper" && alexaMove == "rock";
        var lose;
        var tie;
        
        if (win) {
            speechOutput = "Aww... I chose " + alexaMove + ". You win! " + winSound;
        } else if (lose) {
        } else if (tie) {
        }
        
        this.response.speak(speechOutput).listen(REPROMPT);
        this.emit(':responseReady');
    },
    
    'AMAZON.HelpIntent': function () {
        var speechOutput = "To play, choose rock, paper, or scissors.";
        
        this.response.speak(speechOutput).listen(REPROMPT);
        this.emit(':responseReady');
    },
    
    'AMAZON.CancelIntent': function () {
        var speechOutput = "Buh bye!";
        
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    
    'AMAZON.StopIntent': function () {
        var speechOutput = "Later gator!";
        
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    
    'AMAZON.FallbackIntent': function () {
        var speechOutput = "Eh? I didn't quite hear that.";
        
        this.response.speak(speechOutput).listen(REPROMPT);
        this.emit(':responseReady');
    },
    
};

//==============================EDIT ABOVE THIS LINE=======================================================

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
