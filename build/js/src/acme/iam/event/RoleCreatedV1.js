import Message from '@gdbots/pbj/Message';
import GdbotsAnalyticsTrackedMessageV1Mixin from '//TrackedMessageV1Mixin';
import GdbotsEnrichmentsIpToGeoV1Mixin from '//IpToGeoV1Mixin';
import GdbotsEnrichmentsTimePartingV1Mixin from '//TimePartingV1Mixin';
import GdbotsEnrichmentsTimeSamplingV1Mixin from '//TimeSamplingV1Mixin';
import GdbotsEnrichmentsUaParserV1Mixin from '//UaParserV1Mixin';
import GdbotsIamRoleCreatedV1Mixin from '//RoleCreatedV1Mixin';
import GdbotsNcrNodeCreatedV1Mixin from '//NodeCreatedV1Mixin';
import GdbotsPbjxEventV1Mixin from '//EventV1Mixin';
import Schema from '@gdbots/pbj/Schema';

export default class RoleCreatedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:event:role-created:1-0-0', this.name,
      [],
      [
        GdbotsPbjxEventV1Mixin.create(),
        GdbotsNcrNodeCreatedV1Mixin.create(),
        GdbotsIamRoleCreatedV1Mixin.create(),
        GdbotsAnalyticsTrackedMessageV1Mixin.create(),
        GdbotsEnrichmentsIpToGeoV1Mixin.create(),
        GdbotsEnrichmentsTimePartingV1Mixin.create(),
        GdbotsEnrichmentsTimeSamplingV1Mixin.create(),
        GdbotsEnrichmentsUaParserV1Mixin.create(),
      ]
    );
  }
}
