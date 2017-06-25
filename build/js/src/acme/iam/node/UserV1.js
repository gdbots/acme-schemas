import Message from '@gdbots/pbj/Message';
import GdbotsCommonTaggableV1Mixin from '//TaggableV1Mixin';
import GdbotsContextsAppV1 from '//AppV1';
import GdbotsContextsCloudV1 from '//CloudV1';
import GdbotsIamUserV1Mixin from '//UserV1Mixin';
import GdbotsNcrIndexedV1Mixin from '//IndexedV1Mixin';
import GdbotsNcrNodeV1Mixin from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Mixin';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import MessageRef from '@gdbots/pbj/MessageRef';
import Schema from '@gdbots/pbj/Schema';
import T from '@gdbots/pbj/Type';

export default class UserV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:node:user:1-0-0', this.name,
      [
        Fb.create('_id', T.IdentifierType.create())
          .required()
          .withDefault(() => UserId.generate())
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
          .build()
      ],
      [
        GdbotsNcrNodeV1Mixin.create(),
        GdbotsIamUserV1Mixin.create(),
        GdbotsNcrIndexedV1Mixin.create(),
        GdbotsCommonTaggableV1Mixin.create(),
      ]
    );
  }

  /**
   * @returns {Object}
   */
  getUriTemplateVars() {
    return { user_id: `${this.get('_id')}` };
  }
}
