// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/event/user-patched/1-0-0.json#
import Fb from '@gdbots/pbj/FieldBuilder';
import GdbotsNcrNodePatchedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node-patched/NodePatchedV1Mixin';
import GdbotsPbjxEventV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Mixin';
import GdbotsPbjxEventV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/event/EventV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import T from '@gdbots/pbj/types';

export default class UserPatchedV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:event:user-patched:1-0-0', UserPatchedV1,
      [
        Fb.create('is_staff', T.BooleanType.create())
          .build(),
      ],
      [
        GdbotsPbjxEventV1Mixin.create(),
        GdbotsNcrNodePatchedV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxEventV1Trait(UserPatchedV1);
MessageResolver.register('acme:iam:event:user-patched', UserPatchedV1);
Object.freeze(UserPatchedV1);
Object.freeze(UserPatchedV1.prototype);
