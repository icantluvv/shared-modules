"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SystemType = void 0;
class SystemType {
    constructor(type) {
        this.type = type;
    }
    toJSON() {
        switch (true) {
            case this.type instanceof SystemType.Ios:
                return {
                    ios: this.type
                };
            case this.type instanceof SystemType.Android:
                return {
                    android: this.type
                };
            case this.type instanceof SystemType.Chrome:
                return {
                    chrome: this.type
                };
            case this.type instanceof SystemType.Edge:
                return {
                    edge: this.type
                };
            case this.type instanceof SystemType.Firefox:
                return {
                    firefox: this.type
                };
            case this.type instanceof SystemType.Opera:
                return {
                    opera: this.type
                };
            case this.type instanceof SystemType.Safari:
                return {
                    safari: this.type
                };
        }
    }
    static fromJSON(json) {
        if (json.ios) {
            return new SystemType(json.ios);
        }
        else if (json.android) {
            return new SystemType(json.android);
        }
        else if (json.chrome) {
            return new SystemType(json.chrome);
        }
        else if (json.edge) {
            return new SystemType(json.edge);
        }
        else if (json.firefox) {
            return new SystemType(json.firefox);
        }
        else if (json.opera) {
            return new SystemType(json.opera);
        }
        else if (json.safari) {
            return new SystemType(json.safari);
        }
        else {
            throw new Error("Unknown Schedule pattern type");
        }
    }
}
exports.SystemType = SystemType;
(function (SystemType) {
    class Ios {
        constructor(version) {
            this.version = version;
        }
    }
    SystemType.Ios = Ios;
    class Android {
        constructor(version) {
            this.version = version;
        }
    }
    SystemType.Android = Android;
    class Chrome {
        constructor(version) {
            this.version = version;
        }
    }
    SystemType.Chrome = Chrome;
    class Edge {
        constructor(version) {
            this.version = version;
        }
    }
    SystemType.Edge = Edge;
    class Firefox {
        constructor(version) {
            this.version = version;
        }
    }
    SystemType.Firefox = Firefox;
    class Opera {
        constructor(version) {
            this.version = version;
        }
    }
    SystemType.Opera = Opera;
    class Safari {
        constructor(version) {
            this.version = version;
        }
    }
    SystemType.Safari = Safari;
})(SystemType || (exports.SystemType = SystemType = {}));
