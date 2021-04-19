import { Application } from '../declarations';
import v1States from './v1/states/states.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(v1States);
}
