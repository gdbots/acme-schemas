// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/node/user/1-0-0.json#
import Fb from '@gdbots/pbj/FieldBuilder';
import GdbotsCommonTaggableV1Mixin from '@gdbots/schemas/gdbots/common/mixin/taggable/TaggableV1Mixin';
import GdbotsIamUserV1Mixin from '@gdbots/schemas/gdbots/iam/mixin/user/UserV1Mixin';
import GdbotsIamUserV1Trait from '@gdbots/schemas/gdbots/iam/mixin/user/UserV1Trait';
import GdbotsNcrIndexedV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/indexed/IndexedV1Mixin';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import Message from '@gdbots/pbj/Message';
import MessageResolver from '@gdbots/pbj/MessageResolver';
import Schema from '@gdbots/pbj/Schema';
import T from '@gdbots/pbj/types';
import UserId from '@gdbots/acme-schemas/acme/iam/UserId';

export default class UserV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:node:user:1-0-0', UserV1,
      [
        Fb.create('_id', T.IdentifierType.create())
          .required()
          .withDefault(() => UserId.generate())
          .classProto(UserId)
          .build(),
        Fb.create('test_any_of1', T.MessageType.create())
          .anyOfCuries([
            'gdbots:contexts::app',
          ])
          .build(),
        Fb.create('test_any_of2', T.MessageType.create())
          .anyOfCuries([
            'gdbots:contexts::app',
            'gdbots:contexts::cloud',
          ])
          .build(),
      ],
      [
        GdbotsNcrNodeV1Mixin.create(),
        GdbotsIamUserV1Mixin.create(),
        GdbotsNcrIndexedV1Mixin.create(),
        GdbotsCommonTaggableV1Mixin.create(),
      ],
    );
  }
}

GdbotsNcrNodeV1Trait(UserV1);
GdbotsIamUserV1Trait(UserV1);
MessageResolver.register('acme:iam:node:user', UserV1);
Object.freeze(UserV1);
Object.freeze(UserV1.prototype);
