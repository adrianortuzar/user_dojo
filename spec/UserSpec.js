describe("Class User test", function() {
	"use strict";

	var User = window.User;

	function getUserWithData(){
		var user = new User({
			password: "1234",
			email: "adrianortuzar@gmail.com",
			name:"Adrian",
			surname:"Ortuzar",
			telephoneNumber : 123456
		});
		return user;
	}

	describe("Change properties with the change method", function() {

		var user = getUserWithData();

		user.change("name", "Juan", "1234");
		it("user.name Should be a string 'Juan'", function() {
			expect(user.name).toBe("Juan");
		});

		user.change("surname", "Rodrigo", "1234");
		it("user.surname Should be a 'Rodrigo'", function() {
			expect(user.surname).toBe("Rodrigo");
		});

		it("user.fullname Should be a 'Juan Rodrigo'", function() {
			expect(user.fullname).toBe("Juan Rodrigo");
		});

		user.change("telephoneNumber", 66666, "1234");
		it("user.telephoneNumber Should be 66666", function() {
			expect(user.telephoneNumber).toBe(66666);
		});
	});

	describe("Change properties with out password", function() {
		var user = getUserWithData();

		user.name = "Juan";
		it("user.name Should be a string 'Adrian'", function() {
			expect(user.name).toBe("Adrian");
		});

		user.surname = "Rodrigo";
		it("user.surname Should be a 'Ortuzar'", function() {
			expect(user.surname).toBe("Ortuzar");
		});

		user.telephoneNumber = 12344;
		it("user.telephoneNumber Should be 123456", function() {
			expect(user.telephoneNumber).toBe(123456);
		});
	});

	describe("Initialize with real data", function() {
		var user = getUserWithData();

		it("user.name Should be a string 'Adrian'", function() {
			expect(user.name).toBe("Adrian");
		});

		it("user.surname Should be a 'Ortuzar'", function() {
			expect(user.surname).toBe("Ortuzar");
		});

		it("user.fullname Should be a 'Adrian Ortuzar'", function() {
			expect(user.fullname).toBe("Adrian Ortuzar");
		});

		it("user.telephoneNumber Should be 123456", function() {
			expect(user.telephoneNumber).toBe(123456);
		});
	});

	describe("Initialize with minimun value", function() {	
		var user = new User({
			email: "adrianortuzar@gmail.com",
			password :"1234"
		});

		it("user Should have a email", function() {
			expect(typeof user.email).toBe("string");
		});

		it("user.name Should be a string", function() {
			expect(typeof user.name).toBe("string");
		});

		it("user.surname Should be a string", function() {
			expect(typeof user.surname).toBe("string");
		});

		it("user.fullname Should be a string", function() {
			expect(typeof user.fullname).toBe("string");
		});

		it("user.telephoneNumber Should be a number", function() {
			expect(typeof user.telephoneNumber).toBe("number");
		});
	});
});


