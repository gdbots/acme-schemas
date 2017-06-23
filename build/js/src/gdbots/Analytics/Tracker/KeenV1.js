import Message from '@gdbots/pbj/Message';
import Schema from '@gdbots/pbj/Schema';
import T from '@gdbots/pbj/Type';
import TrackerV1Mixin from '/tracker-v1-mixin';

export default class KeenV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:analytics:tracker:keen:1-0-0', this.name,
      [
        Fb.create('project_id', T.StringType.create())
          .pattern('^\\w+$')
          .build(),
        Fb.create('read_key', T.StringType.create())
          .pattern('^\\w+$')
          .build(),
        Fb.create('write_key', T.StringType.create())
          .pattern('^\\w+$')
          .build()
      ],
      [
        TrackerV1Mixin.create()
      ]
    );
  }
}
