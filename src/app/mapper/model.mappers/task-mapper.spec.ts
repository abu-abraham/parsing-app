import { TaskMapperService } from "./task-mapper";
import { iTask } from "src/app/common/interfaces/models/iTask";

describe('TaskMapperSpec', () => {
    let taskMapper: TaskMapperService;
    beforeEach(() => {
        taskMapper = new TaskMapperService();
        taskMapper.add((<iTask>{
            assigned_price: 1,
            bids_count: 1,
            clone_task_ids: [1],
            clone_task_slugs: ["string"],
            comments_count: 1,
            created_at: "string",
            deadline: "string",
            default_location_id: 1, 
            distance: 1,
            first_posted_at: "string",
            fixed_price: true,
            id: 1,
            location_ids: [1],
            name:"string",
            online_or_phone: true,
            origin_task_id: 1,
            origin_task_slug: null,
            posted_or_edited_at: null,
            price: null,
            private_messages_count: null,
            project: null,
            runner_id: null,
            runners_assigned_count: null,
            runners_required_count: null,
            sender_id: null,
            slug: null,
            sort_present: null,
            state: null
        }),1)
    });
  
    it('should be created', () => {
      expect(taskMapper).toBeTruthy();
    });

    it('should add values', () => {
        
        expect(taskMapper.getAll().length).toBe(1);
    });

    it('should get values correctly', () => {
        expect(taskMapper.getProperty(1,"name")).toBe("string");
    });
  });