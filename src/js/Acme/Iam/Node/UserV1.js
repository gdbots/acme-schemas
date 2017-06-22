'use strict';

import App from '/app';
import Cloud from '/cloud';
import IdentifierType from 'gdbots/pbj/type/identifier-type';
import IndexedV1Mixin from '/indexed-v1-mixin';
import MessageType from 'gdbots/pbj/type/message-type';
import NodeV1Mixin from '/node-v1-mixin';
import Schema from 'gdbots/pbj/schema';
import SystemUtils from 'gdbots/common/util/system-utils';
import TaggableV1Mixin from '/taggable-v1-mixin';
import User from 'acme/iam/node/user';
import UserV1Mixin from '/user-v1-mixin';

export default class UserV1 extends SystemUtils.mixinClass(User)
{
  /**
   * @return Schema
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:node:user:1-0-0', this.name,
      [
        Fb.create('_id', IdentifierType.create())
          .required()
          .withDefault(() => UserId.generate())
          .build(),
        Fb.create('test_any_of1', MessageType.create())
          .instance(App)
          .build(),
        Fb.create('test_any_of2', MessageType.create())
          .anyOfInstances([
            App, 
            Cloud
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
