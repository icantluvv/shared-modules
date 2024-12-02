export declare class SystemType {
    type: SystemType.Types;
    constructor(type: SystemType.Types);
    toJSON(): {
        ios: SystemType.Ios;
        android?: undefined;
        chrome?: undefined;
        edge?: undefined;
        firefox?: undefined;
        opera?: undefined;
        safari?: undefined;
    } | {
        android: SystemType.Android;
        ios?: undefined;
        chrome?: undefined;
        edge?: undefined;
        firefox?: undefined;
        opera?: undefined;
        safari?: undefined;
    } | {
        chrome: SystemType.Chrome;
        ios?: undefined;
        android?: undefined;
        edge?: undefined;
        firefox?: undefined;
        opera?: undefined;
        safari?: undefined;
    } | {
        edge: SystemType.Edge;
        ios?: undefined;
        android?: undefined;
        chrome?: undefined;
        firefox?: undefined;
        opera?: undefined;
        safari?: undefined;
    } | {
        firefox: SystemType.Firefox;
        ios?: undefined;
        android?: undefined;
        chrome?: undefined;
        edge?: undefined;
        opera?: undefined;
        safari?: undefined;
    } | {
        opera: SystemType.Opera;
        ios?: undefined;
        android?: undefined;
        chrome?: undefined;
        edge?: undefined;
        firefox?: undefined;
        safari?: undefined;
    } | {
        safari: SystemType.Safari;
        ios?: undefined;
        android?: undefined;
        chrome?: undefined;
        edge?: undefined;
        firefox?: undefined;
        opera?: undefined;
    } | undefined;
    static fromJSON(json: any): SystemType;
}
export declare namespace SystemType {
    type Types = SystemType.Ios | SystemType.Android | SystemType.Edge | SystemType.Chrome | SystemType.Opera | SystemType.Firefox | SystemType.Safari;
    class Ios {
        version: string;
        constructor(version: string);
    }
    class Android {
        version: string;
        constructor(version: string);
    }
    class Chrome {
        version: string;
        constructor(version: string);
    }
    class Edge {
        version: string;
        constructor(version: string);
    }
    class Firefox {
        version: string;
        constructor(version: string);
    }
    class Opera {
        version: string;
        constructor(version: string);
    }
    class Safari {
        version: string;
        constructor(version: string);
    }
}
