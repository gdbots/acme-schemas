'use strict';

import Enum from 'gdbots/common/enum';
import SystemUtils from 'gdbots/common/util/system-utils';

/**
 * @method static Tracker UNKNOWN()
 * @method static Tracker CUSTOM()
 * @method static Tracker AKAMAI_MEDIA_ANALYTICS()
 * @method static Tracker AWS_CLOUD_WATCH()
 * @method static Tracker AWS_MOBILE_ANALYTICS()
 * @method static Tracker CRASHLYTICS()
 * @method static Tracker GOOGLE_ANALYTICS()
 * @method static Tracker FLURRY()
 * @method static Tracker IRIS()
 * @method static Tracker KALTURA()
 * @method static Tracker KEEN()
 * @method static Tracker MIXPANEL()
 * @method static Tracker OMNITURE()
 * @method static Tracker SEGMENT()
 * @method static Tracker SNOWPLOW()
 */
export default class Tracker extends SystemUtils.mixinClass(Enum) {}

Tracker.initEnum({
    UNKNOWN: 'unknown',
    CUSTOM: 'custom',
    AKAMAI_MEDIA_ANALYTICS: 'akamai_ma',
    AWS_CLOUD_WATCH: 'aws_cw',
    AWS_MOBILE_ANALYTICS: 'aws_ma',
    CRASHLYTICS: 'crashlytics',
    GOOGLE_ANALYTICS: 'ga',
    FLURRY: 'flurry',
    IRIS: 'iris',
    KALTURA: 'kaltura',
    KEEN: 'keen',
    MIXPANEL: 'mixpanel',
    OMNITURE: 'omniture',
    SEGMENT: 'segment',
    SNOWPLOW: 'snowplow',
});
