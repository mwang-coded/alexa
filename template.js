'use strict';
const Alexa = require('alexa-sdk');
const APP_ID = undefined;
const REPROMPT = "Still there?";

//==============================EDIT BELOW THIS LINE=======================================================

const handlers = {
    
    'LaunchRequest': function () {
        var speechOutput = "Welcome! ";
        
        this.response.speak(speechOutput).listen(REPROMPT);
        this.emit(':responseReady');
    },
    
    'FirstIntent': function () {
        var speechOutput = "";
        
        this.response.speak(speechOutput).listen(REPROMPT);
        this.emit(':responseReady');
    },
    
    'SecondIntent': function () {
        var speechOutput = "";
        
        this.response.speak(speechOutput).listen(REPROMPT);
        this.emit(':responseReady');
    },
    
    'AMAZON.HelpIntent': function () {
        var speechOutput = "Try saying something like: ";
        
        this.response.speak(speechOutput).listen(REPROMPT);
        this.emit(':responseReady');
    },
    
    'AMAZON.CancelIntent': function () {
        var speechOutput = "Sure. Closing skill... Goodbye! ";
        
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    
    'AMAZON.StopIntent': function () {
        var speechOutput = "Sure. Closing skill... Goodbye! ";
        
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    
    'AMAZON.FallbackIntent': function () {
        var speechOutput = "I don't understand that. ";
        
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
