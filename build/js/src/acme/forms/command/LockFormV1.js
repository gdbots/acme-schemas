// @link http://acme-schemas.gdbots.io/json-schema/acme/forms/command/lock-form/1-0-0.json#
import GdbotsNcrLockNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/lock-node/LockNodeV1Mixin';
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class LockFormV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:forms:command:lock-form:1-0-0', LockFormV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsNcrLockNodeV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(LockFormV1);
MessageResolver.register('acme:forms:command:lock-form', LockFormV1);
Object.freeze(LockFormV1);
Object.freeze(LockFormV1.prototype);
