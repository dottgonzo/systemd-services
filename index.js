"use strict";
var Promise = require('bluebird');
var child_process = require('child_process');
var exec = child_process.exec;
var SysService = (function () {
    function SysService() {
    }
    SysService.prototype.status = function (service) {
        return new Promise(function (resolve, reject) {
            exec('systemctl status ' + service, function (err, stdout, stderr) {
                if (stderr) {
                }
                if (err) {
                    reject(err);
                }
                else {
                    var outperline = stdout.split('\n');
                    var status_1 = {};
                    for (var i = 0; i < outperline.length; i++) {
                        var line = outperline[i];
                        if (line.split('Active:').length > 1) {
                            status_1.active_status = line.split('Active: ')[1];
                            if (status_1.active_status.split(' ')[0] === 'active') {
                                status_1.active = true;
                            }
                        }
                    }
                    resolve(status_1);
                }
            });
        });
    };
    SysService.prototype.start = function (service) {
        return new Promise(function (resolve, reject) {
            exec('systemctl start ' + service, function (err, stdout, stderr) {
                if (stderr) {
                    console.error(stderr);
                }
                if (err) {
                    reject(err);
                }
                else {
                    resolve(true);
                }
            });
        });
    };
    SysService.prototype.stop = function (service) {
        return new Promise(function (resolve, reject) {
            exec('systemctl stop ' + service, function (err, stdout, stderr) {
                if (stderr) {
                    console.error(stderr);
                }
                if (err) {
                    reject(err);
                }
                else {
                    resolve(true);
                }
            });
        });
    };
    SysService.prototype.restart = function (service) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.stop(service).then(function () {
                _this.start(service).then(function () {
                    resolve(true);
                }).catch(function (err) {
                    reject(err);
                });
            }).catch(function (err) {
                _this.start(service).then(function () {
                    resolve(true);
                }).catch(function (err) {
                    reject(err);
                });
            });
        });
    };
    SysService.prototype.enable = function (service) {
        return new Promise(function (resolve, reject) {
            exec('systemctl enable ' + service, function (err, stdout, stderr) {
                if (stderr) {
                    console.error(stderr);
                }
                if (err) {
                    reject(err);
                }
                else {
                    resolve(true);
                }
            });
        });
    };
    return SysService;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SysService;

//# sourceMappingURL=data:application/json;base64,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TyxFQUFFLE1BQU07WUFDeEMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE9BQU8sRUFBRSxVQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTTtnQkFDcEQsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDVCxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFBO2dCQUN6QixDQUFDO2dCQUNELEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ04sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUNmLENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ0osT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNqQixDQUFDO1lBRUwsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFTCxpQkFBQztBQUFELENBMUdBLEFBMEdDLElBQUE7QUExR0Q7NEJBMEdDLENBQUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBQcm9taXNlIGZyb20gJ2JsdWViaXJkJztcblxuXG5pbXBvcnQgKiBhcyBjaGlsZF9wcm9jZXNzIGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuXG5cbmNvbnN0IGV4ZWMgPSBjaGlsZF9wcm9jZXNzLmV4ZWM7XG5cblxuXG5pbnRlcmZhY2UgSVN0YXR1cyB7XG4gICAgYWN0aXZlOiBib29sZWFuO1xuICAgIGFjdGl2ZV9zdGF0dXM6IHN0cmluZztcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTeXNTZXJ2aWNlIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG5cbiAgICBzdGF0dXMoc2VydmljZTogc3RyaW5nKTogUHJvbWlzZTxJU3RhdHVzPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxJU3RhdHVzPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBleGVjKCdzeXN0ZW1jdGwgc3RhdHVzICcgKyBzZXJ2aWNlLCAoZXJyLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdGRlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjb25zb2xlLmVycm9yKHN0ZGVycilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IG91dHBlcmxpbmUgPSBzdGRvdXQuc3BsaXQoJ1xcbicpXG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzID0gPElTdGF0dXM+e31cblxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG91dHBlcmxpbmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsaW5lID0gb3V0cGVybGluZVtpXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpbmUuc3BsaXQoJ0FjdGl2ZTonKS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzLmFjdGl2ZV9zdGF0dXMgPSBsaW5lLnNwbGl0KCdBY3RpdmU6ICcpWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMuYWN0aXZlX3N0YXR1cy5zcGxpdCgnICcpWzBdID09PSAnYWN0aXZlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHN0YXR1cylcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBzdGFydChzZXJ2aWNlOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGV4ZWMoJ3N5c3RlbWN0bCBzdGFydCAnICsgc2VydmljZSwgKGVyciwgc3Rkb3V0LCBzdGRlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoc3RkZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3Ioc3RkZXJyKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG4gICAgc3RvcChzZXJ2aWNlOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGV4ZWMoJ3N5c3RlbWN0bCBzdG9wICcgKyBzZXJ2aWNlLCAoZXJyLCBzdGRvdXQsIHN0ZGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzdGRlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihzdGRlcnIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cbiAgICByZXN0YXJ0KHNlcnZpY2U6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXNcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIF90aGlzLnN0b3Aoc2VydmljZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc3RhcnQoc2VydmljZSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zdGFydChzZXJ2aWNlKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cblxuICAgIGVuYWJsZShzZXJ2aWNlOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGV4ZWMoJ3N5c3RlbWN0bCBlbmFibGUgJyArIHNlcnZpY2UsIChlcnIsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHN0ZGVycikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHN0ZGVycilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
