const chai = require('chai'),
	expect = chai.expect,
	chaiHttp = require('chai-http'),
	server = require('../app'),
	should = chai.should();

const ind = require('../routes/index.js');

chai.use(chaiHttp);

describe("Generation of new Short URL", function() {
	it("returns success when all parameters are passed", function() {

    });
});