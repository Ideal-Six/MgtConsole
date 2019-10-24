import { Extras } from './extras';

export class Taxi {
    constructor(
        public name: string,
        public accuracy:number,
        public altitude:number,
        public bearing:number,
        public complete:boolean,
        public elapsedRealtimeNanos:number,
        public extras:Extras,
        public fromMockProvider:boolean,
        public latitude:number,
        public longitude:number,
        public provider: string,
        public speed:number,
        public time:number,
        ) { }
}
