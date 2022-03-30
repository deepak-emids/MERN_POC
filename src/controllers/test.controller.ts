import { Request, Response, NextFunction } from 'express';
import TestService from './testing.service';

class Test {
  public testService = new TestService();

  public testMethod = () => {
    const responseData: string = this.testService.test();
    return responseData;
  };
}

export default Test;
