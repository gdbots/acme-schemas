import Message from '@gdbots/pbj/Message';
import EventV1Mixin from '/event-v1-mixin';
import IpToGeoV1Mixin from '/ip-to-geo-v1-mixin';
import NodeCreatedV1Mixin from '/node-created-v1-mixin';
import Schema from '@gdbots/pbj/Schema';
import TimePartingV1Mixin from '/time-parting-v1-mixin';
import TimeSamplingV1Mixin from '/time-sampling-v1-mixin';
import TrackedMessageV1Mixin from '/tracked-message-v1-mixin';
import UaParserV1Mixin from '/ua-parser-v1-mixin';
import UserCreatedV1Mixin from '/user-created-v1-mixin';

export default class UserCreatedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:event:user-created:1-0-0', this.name,
      [],
      [
        EventV1Mixin.create(), 
        NodeCreatedV1Mixin.create(), 
        UserCreatedV1Mixin.create(), 
        TrackedMessageV1Mixin.create(), 
        IpToGeoV1Mixin.create(), 
        TimePartingV1Mixin.create(), 
        TimeSamplingV1Mixin.create(), 
        UaParserV1Mixin.create()
      ]
    );
  }
}
