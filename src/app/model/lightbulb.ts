import { Extras } from './extras';

export class Lightbulb {
    constructor(
        public id: string,
        public accuracy:number,
        public altitude:number,
        public bearing:number,
        public bearingAccuracyDegrees:number,
        public complete:boolean,
        public elapsedRealtimeNanos:number,
        public extras:Extras,
        public fromMockProvider:boolean,
        public latitude:number,
        public longitude:number,
        public provider: string,
        public speed:number,
        public speedAccuracyMetersPerSecond:number,
        public time:number,
        public verticalAccuracyMeters:number
        ) { }
}
