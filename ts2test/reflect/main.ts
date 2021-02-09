import { Container } from './container';
import { load } from './load';

const container = new Container();
load(container);

console.log(container.get('a'));  // => A { b: B { p: 10 } }