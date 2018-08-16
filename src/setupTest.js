import requestAnimationFrame from './tempPolyfills';

import { configure } form 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter(), disableLifecycleMethods: true });
