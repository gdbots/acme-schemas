'use strict';

import Enum from 'gdbots/common/enum';
import SystemUtils from 'gdbots/common/util/system-utils';

/**
 * @method static SocialNetwork UNKNOWN()
 * @method static SocialNetwork FACEBOOK()
 * @method static SocialNetwork QQ()
 * @method static SocialNetwork WHATSAPP()
 * @method static SocialNetwork QZONE()
 * @method static SocialNetwork WECHAT()
 * @method static SocialNetwork LINKEDIN()
 * @method static SocialNetwork SKYPE()
 * @method static SocialNetwork GOOGLEPLUS()
 * @method static SocialNetwork INSTAGRAM()
 * @method static SocialNetwork BAIDUTIEBA()
 * @method static SocialNetwork TWITTER()
 * @method static SocialNetwork VIBER()
 * @method static SocialNetwork TUMBLR()
 * @method static SocialNetwork SNAPCHAT()
 * @method static SocialNetwork LINE()
 * @method static SocialNetwork SINAWEIBO()
 * @method static SocialNetwork VK()
 * @method static SocialNetwork REDDIT()
 * @method static SocialNetwork YY()
 * @method static SocialNetwork TARINGA()
 * @method static SocialNetwork TELEGRAM()
 * @method static SocialNetwork TAGGED()
 * @method static SocialNetwork MYSPACE()
 * @method static SocialNetwork BADOO()
 * @method static SocialNetwork STUMBLEUPON()
 * @method static SocialNetwork FOURSQUARE()
 * @method static SocialNetwork MEETME()
 * @method static SocialNetwork MEETUP()
 * @method static SocialNetwork SKYROCK()
 * @method static SocialNetwork DELICIOUS()
 * @method static SocialNetwork KIWIBOX()
 * @method static SocialNetwork SNAPFISH()
 * @method static SocialNetwork FLICKR()
 * @method static SocialNetwork PHOTOBUCKET()
 * @method static SocialNetwork DEVIANTART()
 * @method static SocialNetwork FOTOLOG()
 * @method static SocialNetwork PINTEREST()
 * @method static SocialNetwork BUZZNET()
 * @method static SocialNetwork WEHEARTIT()
 * @method static SocialNetwork PATH()
 * @method static SocialNetwork LASTFM()
 * @method static SocialNetwork REVERBNATION()
 * @method static SocialNetwork CROSSTV()
 * @method static SocialNetwork FLIXSTER()
 * @method static SocialNetwork GAIAONLINE()
 * @method static SocialNetwork BLACKPLANET()
 * @method static SocialNetwork CARE2()
 * @method static SocialNetwork CARINGBRIDGE()
 * @method static SocialNetwork VAMPIREFREAKS()
 * @method static SocialNetwork CAFEMOM()
 * @method static SocialNetwork RAVELRY()
 * @method static SocialNetwork ASMALLWORLD()
 * @method static SocialNetwork NEXTDOOR()
 * @method static SocialNetwork WAYN()
 * @method static SocialNetwork COUCHSURFING()
 * @method static SocialNetwork TRAVBUDDY()
 * @method static SocialNetwork CELLUFUN()
 * @method static SocialNetwork MOCOSPACE()
 * @method static SocialNetwork ITSMY()
 * @method static SocialNetwork YOUTUBE()
 * @method static SocialNetwork YOUKU()
 * @method static SocialNetwork FUNNYORDIE()
 * @method static SocialNetwork TOUT()
 * @method static SocialNetwork VINE()
 * @method static SocialNetwork CLASSMATES()
 * @method static SocialNetwork MYLIFE()
 * @method static SocialNetwork MYHERITAGE()
 * @method static SocialNetwork VIADEO()
 * @method static SocialNetwork RYZE()
 * @method static SocialNetwork XING()
 * @method static SocialNetwork WEEWORLD()
 * @method static SocialNetwork HABBO()
 * @method static SocialNetwork TUENTI()
 * @method static SocialNetwork XANGA()
 * @method static SocialNetwork SOLABORATE()
 * @method static SocialNetwork PLURK()
 * @method static SocialNetwork LIVEJOURNAL()
 */
export default class SocialNetwork extends SystemUtils.mixinClass(Enum) {}

SocialNetwork.initEnum({
    UNKNOWN: 'unknown',
    FACEBOOK: 'facebook',
    QQ: 'qq',
    WHATSAPP: 'whatsapp',
    QZONE: 'qzone',
    WECHAT: 'wechat',
    LINKEDIN: 'linkedin',
    SKYPE: 'skype',
    GOOGLEPLUS: 'googleplus',
    INSTAGRAM: 'instagram',
    BAIDUTIEBA: 'baidutieba',
    TWITTER: 'twitter',
    VIBER: 'viber',
    TUMBLR: 'tumblr',
    SNAPCHAT: 'snapchat',
    LINE: 'line',
    SINAWEIBO: 'sinaweibo',
    VK: 'vk',
    REDDIT: 'reddit',
    YY: 'yy',
    TARINGA: 'taringa',
    TELEGRAM: 'telegram',
    TAGGED: 'tagged',
    MYSPACE: 'myspace',
    BADOO: 'badoo',
    STUMBLEUPON: 'stumbleupon',
    FOURSQUARE: 'foursquare',
    MEETME: 'meetme',
    MEETUP: 'meetup',
    SKYROCK: 'skyrock',
    DELICIOUS: 'delicious',
    KIWIBOX: 'kiwibox',
    SNAPFISH: 'snapfish',
    FLICKR: 'flickr',
    PHOTOBUCKET: 'photobucket',
    DEVIANTART: 'deviantart',
    FOTOLOG: 'fotolog',
    PINTEREST: 'pinterest',
    BUZZNET: 'buzznet',
    WEHEARTIT: 'weheartit',
    PATH: 'path',
    LASTFM: 'lastfm',
    REVERBNATION: 'reverbnation',
    CROSSTV: 'crosstv',
    FLIXSTER: 'flixster',
    GAIAONLINE: 'gaiaonline',
    BLACKPLANET: 'blackplanet',
    CARE2: 'care2',
    CARINGBRIDGE: 'caringbridge',
    VAMPIREFREAKS: 'vampirefreaks',
    CAFEMOM: 'cafemom',
    RAVELRY: 'ravelry',
    ASMALLWORLD: 'asmallworld',
    NEXTDOOR: 'nextdoor',
    WAYN: 'wayn',
    COUCHSURFING: 'couchsurfing',
    TRAVBUDDY: 'travbuddy',
    CELLUFUN: 'cellufun',
    MOCOSPACE: 'mocospace',
    ITSMY: 'itsmy',
    YOUTUBE: 'youtube',
    YOUKU: 'youku',
    FUNNYORDIE: 'funnyordie',
    TOUT: 'tout',
    VINE: 'vine',
    CLASSMATES: 'classmates',
    MYLIFE: 'mylife',
    MYHERITAGE: 'myheritage',
    VIADEO: 'viadeo',
    RYZE: 'ryze',
    XING: 'xing',
    WEEWORLD: 'weeworld',
    HABBO: 'habbo',
    TUENTI: 'tuenti',
    XANGA: 'xanga',
    SOLABORATE: 'solaborate',
    PLURK: 'plurk',
    LIVEJOURNAL: 'livejournal',
});
