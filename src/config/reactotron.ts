// Vendors
import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

// Locals
import env from './env';

if (env.isDevelopment) {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(sagaPlugin({}))
    .connect();

  // @ts-ignore - To improve debug experience
  console.tron = tron;

  tron.clear();
}
