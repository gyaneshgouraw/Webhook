// enzyme-setup.js
/**
 * Coverage - Explained
 * https://stackoverflow.com/questions/26618243/how-do-i-read-an-istanbul-coverage-report
 */
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });