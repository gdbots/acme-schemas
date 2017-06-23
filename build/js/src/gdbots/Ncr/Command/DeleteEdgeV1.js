import Message from '@gdbots/pbj/Message';
import CommandV1Mixin from '/command-v1-mixin';
import Edge from '/edge';
import Schema from '@gdbots/pbj/Schema';
import T from '@gdbots/pbj/Type';

export default class DeleteEdgeV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:ncr:command:delete-edge:1-0-0', this.name,
      [
        Fb.create('edge', T.MessageType.create())
          .required()
          .anyOfCuries([
            'gdbots:ncr:mixin:edge',
          ])
          .build()
      ],
      [
        CommandV1Mixin.create()
      ]
    );
  }
}
