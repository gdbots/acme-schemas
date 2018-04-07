// @link http://acme-schemas.gdbots.io/json-schema/acme/forms/command/update-form/1-0-0.json#
import GdbotsNcrUpdateNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/update-node/UpdateNodeV1Mixin';
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';

export default class UpdateFormV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:forms:command:update-form:1-0-0', UpdateFormV1,
      [],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsNcrUpdateNodeV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(UpdateFormV1);
MessageResolver.register('acme:forms:command:update-form', UpdateFormV1);
Object.freeze(UpdateFormV1);
Object.freeze(UpdateFormV1.prototype);
