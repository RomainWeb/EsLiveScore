import { HttpHeaders } from '@angular/common/http'; 

export class AppConfig{
    static readonly PANDASCORE_API_URL = " https://api.pandascore.co";
    static readonly PANDASCORE_API_TOKEN = "HsfAnbLM4LEnwHQ2g62ndabCeB7Cj4Y3l__6XNEaAAq0UhiZNe8";
    static readonly PANDASCORE_AUTH_HEADER = new HttpHeaders().set('Authorization', `Bearer ${AppConfig.PANDASCORE_API_TOKEN}`)

    static readonly ASSETS_URL = "assets";
    static readonly ASSETS_URL_MOCK = "assets/mock-data";
}