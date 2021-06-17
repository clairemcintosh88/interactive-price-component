import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {

    yearlyPrice() {
        let tenKPageViews = 8 * 12 - (8 * 12 * .25),
            fiftyKPageViews = 12 * 12 - (12 * 12 * .25),
            hundredKPageViews = 16 * 12 - (16 * 12 * .25),
            fiveHundredKPageViews = 24 * 12 - (24 * 12 * .25),
            millionPageViews = 36 * 12 - (36 * 12 * .25);

        console.log(tenKPageViews);
        console.log(fiftyKPageViews);
        console.log(hundredKPageViews);
        console.log(fiveHundredKPageViews);
        console.log(millionPageViews);
    }

}
