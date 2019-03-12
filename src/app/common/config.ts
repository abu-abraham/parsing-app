import {LoggerFactory, LoggerFactoryOptions, LFService, LogGroupRule, LogLevel} from "typescript-logging";
 
const options = new LoggerFactoryOptions()
.addLogGroupRule(new LogGroupRule(new RegExp("model.+"), LogLevel.Debug));
 
const factory = LFService.createNamedLoggerFactory("LoggerFactory", options);
export const logger = factory.getLogger("model.Product");