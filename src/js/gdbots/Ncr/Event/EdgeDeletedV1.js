import Message from '@gdbots/pbj/Message';
import Edge from '/edge';
import EventV1Mixin from '/event-v1-mixin';
import Schema from '@gdbots/pbj/Schema';
import T from '@gdbots/pbj/Type';

export default class EdgeDeletedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:ncr:event:edge-deleted:1-0-0', this.name,
      [
        Fb.create('edge', T.MessageType.create())
          .required()
          .anyOfCuries([
            'gdbots:ncr:mixin:edge',
          ])
          .build()
      ],
      [
        EventV1Mixin.create()
      ]
    );
  }
}
