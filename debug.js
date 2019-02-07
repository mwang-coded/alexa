'use strict';
const Alexa = require('alexa-sdk');
const APP_ID = undefined;
const REPROMPT = "Still there?";

//==============================EDIT BELOW THIS LINE=======================================================

const handlers = {
    
    'Launch Request': function () {
        var speechoutput = "This skill will teach you to debug. Tell me good morning.";
        
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    
    'GoodMorning': function () {
        var speechOutput = Good morning! What is your name?";
        
        this.response.speek(speechOutput).listen(REPROMPT);
        this.emit(':responseReady');
    },
    
    'nameintent': function () {
        var name = this.request.intent.slot.Name.value;
        speechOutput = "Awesome! Nice to meet you " name + ". Now ask me 'how are you?'";
        
        this.response.speak(speechOutput).listen(REPROMPT);
        this.emit(':Ready');
    },
    
    'HowAreYouIntent': function () {
        var speechOutput "I'm doing fantastic! Great job fixing the code!";
        
        this.response.speak(speechOutout).listen(REPROMPT);
        this.emit(':responseReady');
    }
    
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You don't need help here.";
        
        this.response.speak(speechOutput).listen(REPROMPT);
    },
    
    'AMAZON.CancelIntent': function () {
        var speechOutput = "Bye!";
        
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    
    'AMAZON.StopIntent': function () {
        var speechOutput = "See ya!";
        
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    
    'AMAZON.FallbackIntent': function () {
        var speechOutput = "I don't recognize that.";
        
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
