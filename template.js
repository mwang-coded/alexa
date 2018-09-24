'use strict';
const Alexa = require('alexa-sdk');
const APP_ID = undefined;
const REPROMPT = "Still there?";

//==============================EDIT BELOW THIS LINE=======================================================

const handlers = {
    
    'LaunchRequest': function () {
        var speechOutput = "CHANGE THIS: alexa's response after invocation";
        
        this.response.speak(speechOutput).listen(REPROMPT);
        this.emit(':responseReady');
    },
    
    'FirstIntent': function () {
        var speechOutput = "CHANGE THIS: alexa's response after utterance for first intent";
        
        this.response.speak(speechOutput).listen(REPROMPT);
        this.emit(':responseReady');
    },
    
    'SecondIntent': function () {
        var speechOutput = "CHANGE THIS: alexa's response after utterance for second intent";
        
        this.response.speak(speechOutput).listen(REPROMPT);
        this.emit(':responseReady');
    },
    
    'AMAZON.HelpIntent': function () {
        var speechOutput = "CHANGE THIS: alexa's response after help";
        
        this.response.speak(speechOutput).listen(REPROMPT);
        this.emit(':responseReady');
    },
    
    'AMAZON.CancelIntent': function () {
        var speechOutput = "CHANGE THIS: alexa's response after cancel";
        
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    
    'AMAZON.StopIntent': function () {
        var speechOutput = "CHANGE THIS: alexa's response after stop";
        
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    
    'AMAZON.FallbackIntent': function () {
        var speechOutput = "CHANGE THIS: alexa's response for unrecognized";
        
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
