'use strict';
const Alexa = require('alexa-sdk');
const APP_ID = undefined;
const REPROMPT = "Still there?";

//==============================EDIT BELOW THIS LINE=======================================================

const handlers = {
    
    'launchrequest': function () {
        var speechOutput = "This skill will test your abilities to debug. If you pass then I will make an "animal noise for you. You can say, talk like a cat, talk like a dog, or talk like a lion";
        
        this.response.speak(speechOutout).listen(REPROMPT);
        this.emit(':responseReady');
    },
    
    'Catintent': function () {
        var speechOutput = "Meow meow meeeooowwww! Look I'm a cat! You passed the kitty cat test. Now say talk like a dog, or talk like a lion";
        
        this.response.speak(speechOutput).listen;
        this.emit(':responseReady');
    },
    
    'dogIntent': function () {
        speechOutput = "Woof wooooff! My name is dog. Congrats! You passed the puppy test. Now say talk like a lion;
        
        this.response.speek(speechOutput).listen(REPROMPT);
        this.emit(:responseReady');
    },
    
    'LionIntet': function () {
        var speechOutput = "Before I talk like a lion, tell me your favorite color";
        
        this.response.speak(speechOutput);
        this.emit(':responseready');
    },
    
    'AfterIntent': function () {
        this.attribute.color = this.request.intent.slots.color.value;
        var speechOutput = "Rawr! I am a " + this.atributes.Color + " lion. Great job you passed the test!";
        
        this.response.speak(speechOutput).listen(REPROMPT);
        this.emit(responseReady);
    
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say talk like a cat, talk like a dog, or talk like a lion.";
        
        this.response.speak(speechOutput).listen(REPROMPT);
        this.emit(':responseReady');
    },
    
    'AMAZON.CancelIntent': function () {
        var speechOutput = "Bye!";
        
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    }
    
    'AMAZON.StopIntent': function () {
        var speechOutput = "Peace out.";
        
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    
    'AMAZON.FallbackIntent': function () {
        var speechOutput = "I don't understand.";
        
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
