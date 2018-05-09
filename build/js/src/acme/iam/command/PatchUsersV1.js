// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/command/patch-users/1-0-0.json#
import Fb from '@gdbots/pbj/FieldBuilder';
import GdbotsNcrPatchNodesV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/patch-nodes/PatchNodesV1Mixin';
import GdbotsPbjxCommandV1Mixin from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Mixin';
import GdbotsPbjxCommandV1Trait from '@gdbots/schemas/gdbots/pbjx/mixin/command/CommandV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import T from '@gdbots/pbj/types';

export default class PatchUsersV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:command:patch-users:1-0-0', PatchUsersV1,
      [
        Fb.create('is_staff', T.BooleanType.create())
          .build(),
      ],
      [
        GdbotsPbjxCommandV1Mixin.create(),
        GdbotsNcrPatchNodesV1Mixin.create(),
      ],
    );
  }
}

GdbotsPbjxCommandV1Trait(PatchUsersV1);
MessageResolver.register('acme:iam:command:patch-users', PatchUsersV1);
Object.freeze(PatchUsersV1);
Object.freeze(PatchUsersV1.prototype);
