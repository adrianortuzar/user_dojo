(function(){
    "use strict";
    //private
    var _password;

    /**
     * [minimunData private function that is going to determine which is the minimum data to construct a User. If the data is not valid is going to throw a exception.]
     * @param  {[object]} options [options of User]
     */
    function minimunData (options){
        if (options && options.password && options.email) {
            this.email = options.email;
        }
        else {
            throw "User should have a minimun data, password and email";
        }
    }


    //public
    var User = function(options){
    	minimunData.call(this, options);

    	_password = options.password;

    	this.lastPasswordValue = _password;

    	this.name = (options && options.name && (typeof options.name === "string")) ? options.name : "";

    	this.surname = (options && options.surname && (typeof options.surname === "string")) ? options.surname : "";

        this.telephoneNumber = (options && options.telephoneNumber && (typeof options.telephoneNumber === "number")) ? options.telephoneNumber : 0;

        this.lastPasswordValue = null;
    };
    
    //make user global variable
    window.User = User;

    //define user prototype
    User.prototype = {
        /**
         * Set the constructor of the user because we rewrite the prototype object
         */
        constructor: User,

    	//name
        get name(){
            return this._name;
        },
        set name(val){
        	if (this.lastPasswordValue === _password) {
        		this._name = val;
        	}
        	else{
        		console.warn("Set name with the user property change");
        	}
        },
        //surname
        get surname(){
            return this._surname;
        },
        set surname(val){
        	if (this.lastPasswordValue === _password) {
        		this._surname = val;
        	}
        	else{
        		console.warn("Set surname with the user property change");
        	}
        },
        //fullname
        get fullname(){
    		return this.name+" "+this.surname;
    	},
    	//telephoneNumber
        get telephoneNumber(){
            return this._telephoneNumber;
        },
        set telephoneNumber(val){
        	if (this.lastPasswordValue === _password) {
        		this._telephoneNumber = val;
        	}
        	else{
        		console.warn("Set telephoneNumber with the user property change");
        	}
        },
    };

    /**
     * [change public User method to change properties of User like name, surname, telephone providing a password. If the password is correct the property changed if not will print a warning in the browser console.]
     * @param  {[string]} key           [User property name]
     * @param  {[string]} value         [User value for the providing property]
     * @param  {[type]} passwordValue [password of the user]
     * @return {[value]}               [return the value providing if the property change if not will print a console warning.]
     */
    User.prototype.change = function(key, value, passwordValue){
    	if (_password === passwordValue) {
    		this.lastPasswordValue = passwordValue;
    		this[key] = value;
    		this.lastPasswordValue = null;
    		return value;	
    	}
    	else {
    		console.warn("Trying change "+key+" with a wrong password");
    	}	
    };

})();