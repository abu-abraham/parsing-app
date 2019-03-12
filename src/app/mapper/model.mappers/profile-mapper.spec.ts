import { ProfileMapperService } from "./profile-mapper";
import { iProfile } from "src/app/common/interfaces/models/iProfile";

describe('ProfileMapperSpec', () => {
    let profileMapper: ProfileMapperService;
    beforeEach(() => {
        profileMapper = new ProfileMapperService();
        profileMapper.add((<iProfile>{
            abbreviated_name: "string",
            allow_calls_on_tasks: true,
            avatar: null,
            average_rating: 1, 
            comments_count: 1,
            default_location_id: 1,
            first_name: "string",
            id: 1,
            posted_tasks_count: 1,
            pro: true,
            ranking: 1,
            ranking_position: 1,
            received_reviews_count: 1,
            run_tasks_count: 1,
            slug: "string"
        }),1)
    });
  
    it('should be created', () => {
      expect(profileMapper).toBeTruthy();
    });

    it('should add values', () => {
        expect(profileMapper.getAll().length).toBe(1);
    });

    it('should get values correctly', () => {
        expect(profileMapper.getProperty(1,"name")).toBe("string");
    });
  });