import { HttpHeaders } from '@angular/common/http';

export class AppConfig{
    static readonly API_PANDASCORE_URL = " https://api.pandascore.co";
    static readonly API_PANDASCORE_TOKEN = "HsfAnbLM4LEnwHQ2g62ndabCeB7Cj4Y3l__6XNEaAAq0UhiZNe8"
    static readonly API_PANDASCORE_HEADER = new HttpHeaders().set('Authorization', `Bearer ${AppConfig.API_PANDASCORE_TOKEN}`)

    static readonly ASSETS_URL = "assets"
    static readonly ASSETS_MOCK_DATA_URL = "assets/mock-data";
}