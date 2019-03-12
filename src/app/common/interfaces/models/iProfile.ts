import { iAvatar } from "./iAvatar";


export interface iProfile {
    abbreviated_name: string,
    allow_calls_on_tasks: boolean,
    avatar: iAvatar,
    average_rating: number, 
    comments_count: number
    default_location_id: number,
    first_name: string,
    id: number,
    posted_tasks_count: number,
    pro: boolean,
    ranking: number,
    ranking_position: number,
    received_reviews_count: number,
    run_tasks_count: number,
    slug: string
}