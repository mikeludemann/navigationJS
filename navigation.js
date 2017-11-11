var navigation = (function(){
    
    function browserVersion(){

        console.log("Browser Version: " + navigator.appVersion);

        return navigator.appVersion;

    }
    
    function browserCodeName(){

        console.log("Browser Code Version: " + navigator.appCodeName);

        return navigator.appCodeName;

    }
    
    function browserName(){

        console.log("Browser Name: " + navigator.appName);

        return navigator.appName;

    }
    
    function browserCookieEnabled(){

        console.log("Browser Cookie Available: " + navigator.cookieEnabled);
        
        return navigator.cookieEnabled;

    }
    
    function browserLanguage(){

        console.log("Browser Language: " + navigator.language);

        return navigator.language;

    }
    
    function browserOnline(){

        console.log("Browser Online: " + navigator.onLine);

        return navigator.onLine;

    }
    
    function browserPlatform(){

        console.log("Browser Platform: " + navigator.platform);

        return navigator.platform;

    }
    
    function browserProduct(){
        
        console.log("Browser Product: " + navigator.product);

        return navigator.product;

    }
    
    function browserGeolocation(){

        if(navigator.geolocation){

            console.log("Browser Geolocation is supported and available");

        } else {

            console.log("Browser Geolocation is not supported and not available");

        }

    }
    
    function browserUserAgent(){

        console.log("User Agent: " + navigator.userAgent);

        return navigator.userAgent;

    }
    
    function contains(text){

        if(typeof text === string && text != ""){

            if(navigator.userAgent.indexOf(text) > -1) {
                
                // Value is available

                return true;
                
            } else {

                // Value is not available

                return false

            }

        } else {

            console.log("The value is not a string or is empty.");

        }

        return;

    }

    return {

        browserVersion: browserVersion,
        browserCodeName: browserCodeName,
        browserName: browserName,
        browserCookieEnabled: browserCookieEnabled,
        browserLanguage: browserLanguage,
        browserOnline: browserOnline,
        browserPlatform: browserPlatform,
        browserProduct: browserProduct,
        browserGeolocation: browserGeolocation,
        browserUserAgent: browserUserAgent,
        contains: contains

    }

})();