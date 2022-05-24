import { Token } from '../../token/models/token';

export interface RouteQuote {
  expectedInputQuote: string;
  expectedConvertQuote: string;
  routePathArrayTokenMap: Token[];
  routeText: string;
  routePathArray: string[];
}
