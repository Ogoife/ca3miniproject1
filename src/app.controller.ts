import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
  
  @Get('citizen')
  @Render('citizen.html')
  createForm() {}

  @Get() 
  @Render('home.html') 
  getHome(): {} {
    return this.appService.getHome();
  }

  @Get() 
  @Render('about-us.html') 
  getAboutUs(): {} {
    return this.appService.getAboutUs();
  }
}
   


