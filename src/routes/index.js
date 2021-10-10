import { Route, BrowserRouter } from 'react-router-dom';

import { Checkout } from '../pages/checkout';
import { PlanInfo } from '../pages/plan-info';
import { Platform } from '../pages/platform';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Platform} path='/' exact />
            <Route component={PlanInfo} path='/plan' />
            <Route component={Checkout} path='/checkout' />
        </BrowserRouter>
    )
};

export default Routes;