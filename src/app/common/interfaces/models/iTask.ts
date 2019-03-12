export interface iTask {
    assigned_price: number,
    bids_count: number,
    clone_task_ids: number[],
    clone_task_slugs: string[],
    comments_count: number,
    created_at: string,
    deadline: string,
    default_location_id: number, 
    distance: number,
    first_posted_at: string,
    fixed_price: boolean,
    id: number,
    location_ids: number[],
    name:string,
    online_or_phone: boolean,
    origin_task_id: number,
    origin_task_slug: string,
    posted_or_edited_at: string,
    price: number,
    private_messages_count: number,
    project: boolean,
    runner_id: number,
    runners_assigned_count: number,
    runners_required_count: number,
    sender_id: number,
    slug: string,
    sort_present: boolean,
    state: string
}