"use strict";
var index_1 = require('../index');
var chai = require("chai");
var expect = chai.expect;
var ns = new index_1.default();
describe("statuses", function () {
    it("a working process return a status that is active", function (done) {
        ns.status('networking').then(function (a) {
            expect(a).to.be.ok;
            expect(a).to.be.an('object');
            expect(a.active).to.be.a('boolean').that.is.eq(true);
            expect(a.active_status).to.be.a('string');
            done();
        }).catch(function (err) {
            done(Error(err));
        });
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Qvc3RhdHVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxzQkFBdUIsVUFBVSxDQUFDLENBQUE7QUFFbEMsSUFBTyxJQUFJLFdBQVcsTUFBTSxDQUFDLENBQUM7QUFDOUIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUczQixJQUFNLEVBQUUsR0FBRyxJQUFJLGVBQVUsRUFBRSxDQUFBO0FBSTNCLFFBQVEsQ0FBQyxVQUFVLEVBQUU7SUFDakIsRUFBRSxDQUFDLGtEQUFrRCxFQUFFLFVBQVUsSUFBSTtRQUNqRSxFQUFFLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLENBQU07WUFFaEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1lBQ25CLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM3QixNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JELE1BQU0sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7WUFFMUMsSUFBSSxFQUFFLENBQUE7UUFFVixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFHO1lBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ3BCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDLENBQUMsQ0FBQSIsImZpbGUiOiJ0ZXN0L3N0YXR1cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFN5c1NlcnZpY2UgZnJvbSAnLi4vaW5kZXgnO1xuXG5pbXBvcnQgY2hhaSA9IHJlcXVpcmUoXCJjaGFpXCIpO1xuY29uc3QgZXhwZWN0ID0gY2hhaS5leHBlY3Q7XG5cblxuY29uc3QgbnMgPSBuZXcgU3lzU2VydmljZSgpXG5cblxuXG5kZXNjcmliZShcInN0YXR1c2VzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBpdChcImEgd29ya2luZyBwcm9jZXNzIHJldHVybiBhIHN0YXR1cyB0aGF0IGlzIGFjdGl2ZVwiLCBmdW5jdGlvbiAoZG9uZSkge1xuICAgICAgICBucy5zdGF0dXMoJ25ldHdvcmtpbmcnKS50aGVuKChhOiBhbnkpID0+IHtcblxuICAgICAgICAgICAgZXhwZWN0KGEpLnRvLmJlLm9rO1xuICAgICAgICAgICAgZXhwZWN0KGEpLnRvLmJlLmFuKCdvYmplY3QnKTtcbiAgICAgICAgICAgIGV4cGVjdChhLmFjdGl2ZSkudG8uYmUuYSgnYm9vbGVhbicpLnRoYXQuaXMuZXEodHJ1ZSk7XG4gICAgICAgICAgICBleHBlY3QoYS5hY3RpdmVfc3RhdHVzKS50by5iZS5hKCdzdHJpbmcnKTtcblxuICAgICAgICAgICAgZG9uZSgpXG5cbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgZG9uZShFcnJvcihlcnIpKVxuICAgICAgICB9KVxuICAgIH0pXG59KVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
