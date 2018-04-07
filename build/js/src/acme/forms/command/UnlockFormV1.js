// @link http://acme-schemas.gdbots.io/json-schema/acme/forms/command/unlock-form/1-0-0.json#
import GdbotsNcrUnlockNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/unlock-node/UnlockNodeV1Mixin';
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class UnlockFormV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:forms:command:unlock-form:1-0-0', UnlockFormV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsNcrUnlockNodeV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(UnlockFormV1);
MessageResolver.register('acme:forms:command:unlock-form', UnlockFormV1);
Object.freeze(UnlockFormV1);
Object.freeze(UnlockFormV1.prototype);
