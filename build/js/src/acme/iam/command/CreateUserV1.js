import Message from '@gdbots/pbj/Message';
import CommandV1Mixin from '/command-v1-mixin';
import CreateNodeV1Mixin from '/create-node-v1-mixin';
import CreateUserV1Mixin from '/create-user-v1-mixin';
import Schema from '@gdbots/pbj/Schema';

export default class CreateUserV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema('pbj:acme:iam:command:create-user:1-0-0', this.name,
      [],
      [
        CommandV1Mixin.create(), 
        CreateNodeV1Mixin.create(), 
        CreateUserV1Mixin.create()
      ]
    );
  }
}
