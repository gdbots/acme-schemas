// @link http://acme-schemas.gdbots.io/json-schema/gdbots/ncr/command/delete-edge/1-0-0.json#
import Fb from '@gdbots/pbj/FieldBuilder';
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import Message from '@gdbots/pbj/Message';
import Schema from '@gdbots/pbj/Schema';
import T from '@gdbots/pbj/Type';

export default class DeleteEdgeV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:gdbots:ncr:command:delete-edge:1-0-0', DeleteEdgeV1,
      [
        Fb.create('edge', T.MessageType.create())
          .required()
          .anyOfCuries([
            'gdbots:ncr:mixin:edge',
          ])
          .build(),
      ],
      [
        GdbotsPbjxCommandV1Mixin.create(),
      ]
    );
  }
}
