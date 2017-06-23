import Message from '@gdbots/pbj/Message';
import App from '/app';
import Cloud from '/cloud';
import IndexedV1Mixin from '/indexed-v1-mixin';
import NodeV1Mixin from '/node-v1-mixin';
import Schema from '@gdbots/pbj/Schema';
import T from '@gdbots/pbj/Type';
import TaggableV1Mixin from '/taggable-v1-mixin';
import UserV1Mixin from '/user-v1-mixin';

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
        NodeV1Mixin.create(), 
        UserV1Mixin.create(), 
        IndexedV1Mixin.create(), 
        TaggableV1Mixin.create()
      ]
    );
  }

  /**
   * @returns {Object}
   */
  getUriTemplateVars()
  {
    return {user_id: `${this.get('_id')}` };
  }
}
