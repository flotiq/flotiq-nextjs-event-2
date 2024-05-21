export * from './runtime';
export * from './apis/index';
export * from './models/index';
import * as Api from './apis/index';
export declare class FlotiqApi {
    EventAPI: Api.EventAPI;
    MediaInternalAPI: Api.MediaInternalAPI;
    TagInternalAPI: Api.TagInternalAPI;
    constructor(key: any);
}
