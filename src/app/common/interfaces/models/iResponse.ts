import { iTask } from "./iTask";
import { iLocation } from "./iLocation";
import { iProfile } from "./iProfile";
import { iActivity } from "./iActivity";


export interface iJsonResponse {
    tasks: iTask[],
    locations: iLocation[],
    profiles: iProfile[],
    activity_feed: iActivity[]
}

export enum Properties {
    tasks = "tasks",
    task = "task",
    locations= "locations",
    profiles = "profiles",
    activities = "activity_feed",
}
