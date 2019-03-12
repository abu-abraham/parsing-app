import { LocationMapperService } from "./location-mapper";
import { iLocation } from "src/app/common/interfaces/models/iLocation";

describe('LocationMapperSpec', () => {
    let locationMapper: LocationMapperService;
    beforeEach(() => locationMapper = new LocationMapperService());
  
    it('should be created', () => {
      expect(locationMapper).toBeTruthy();
    });

    it('should add values', () => {
        locationMapper.add((<iLocation>{
            display_name: "string",
            id: 1,
            latitude: "string",
            longitude: "string"
        }),1)
        expect(locationMapper.getAll().length).toBe(1);
    });

    it('should get values correctly', () => {
        locationMapper.add((<iLocation>{
            display_name: "string",
            id: 1,
            latitude: "string",
            longitude: "string"
        }),1)
        expect(locationMapper.get(1).display_name).toBe("string");
    });
  });