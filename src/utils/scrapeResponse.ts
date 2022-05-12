import responseTime from "response-time";
import { Request, Response } from "express";
import { responseTimeAPI } from "./metrics";


    const appResponseTime = responseTime((req: Request, res: Response, time: number) => {
      if (req?.route?.path) {
        responseTimeAPI.observe(
          {
            method: req.method,
            route: req.route.path,
            status_code: res.statusCode,
          },
          time * 1000
        );
      }
    });

    export default appResponseTime;