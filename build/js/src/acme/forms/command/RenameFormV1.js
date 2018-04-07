// @link http://acme-schemas.gdbots.io/json-schema/acme/forms/command/rename-form/1-0-0.json#
import GdbotsNcrRenameNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/rename-node/RenameNodeV1Mixin';
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class RenameFormV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:forms:command:rename-form:1-0-0', RenameFormV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsNcrRenameNodeV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(RenameFormV1);
MessageResolver.register('acme:forms:command:rename-form', RenameFormV1);
Object.freeze(RenameFormV1);
Object.freeze(RenameFormV1.prototype);
