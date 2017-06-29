// @link http://acme-schemas.gdbots.io/json-schema/gdbots/analytics/tracker/keen/1-0-0.json#
import Fb from '@gdbots/pbj/FieldBuilder';
import GdbotsAnalyticsTrackerV1Mixin from '@gdbots/schemas/gdbots/analytics/mixin/tracker/TrackerV1Mixin';
import Message from '@gdbots/pbj/Message';
import Schema from '@gdbots/pbj/Schema';
import T from '@gdbots/pbj/Type';

export default class KeenV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:analytics:tracker:keen:1-0-0', KeenV1,
      [
        Fb.create('project_id', T.StringType.create())
          .pattern('^\\w+$')
          .build(),
        Fb.create('read_key', T.StringType.create())
          .pattern('^\\w+$')
          .build(),
        Fb.create('write_key', T.StringType.create())
          .pattern('^\\w+$')
          .build(),
      ],
      [
        GdbotsAnalyticsTrackerV1Mixin.create(),
      ]
    );
  }
}
