// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/node/apple-news-app/1-0-0.json#
import Fb from '@gdbots/pbj/FieldBuilder';
import GdbotsIamAppleNewsAppV1Trait from '@gdbots/schemas/gdbots/iam/mixin/apple-news-app/AppleNewsAppV1Trait';
import GdbotsNcrNodeV1Trait from '@gdbots/schemas/gdbots/ncr/mixin/node/NodeV1Trait';
import Message from '@gdbots/pbj/Message';
import NodeStatus from '@gdbots/schemas/gdbots/ncr/enums/NodeStatus';
import Schema from '@gdbots/pbj/Schema';
import T from '@gdbots/pbj/types';
import UuidIdentifier from '@gdbots/pbj/well-known/UuidIdentifier';

export default class AppleNewsAppV1 extends Message {
  /**
   * @private
   *
   * @returns {Schema}
   */
  static defineSchema() {
    return new Schema(this.SCHEMA_ID, this,
      [
        /*
         * The "_id" value:
         * - MUST NOT change for the life of the node.
         * - SHOULD be globally unique
         * - SHOULD be generated by the app (ideally in default value closure... e.g. UuidIdentifier::generate())
         */
        Fb.create(this._ID_FIELD, T.IdentifierType.create())
          .required()
          .withDefault(UuidIdentifier.generate)
          .classProto(UuidIdentifier)
          .overridable(true)
          .build(),
        Fb.create(this.STATUS_FIELD, T.StringEnumType.create())
          .withDefault("draft")
          .classProto(NodeStatus)
          .build(),
        Fb.create(this.ETAG_FIELD, T.StringType.create())
          .maxLength(100)
          .pattern('^[\\w\\.:-]+$')
          .build(),
        Fb.create(this.CREATED_AT_FIELD, T.MicrotimeType.create())
          .build(),
        /*
         * A fully qualified reference to what created this node. This is intentionally a message-ref
         * and not a user id because it is often a program that creates nodes, not a user.
         */
        Fb.create(this.CREATOR_REF_FIELD, T.MessageRefType.create())
          .build(),
        Fb.create(this.UPDATED_AT_FIELD, T.MicrotimeType.create())
          .useTypeDefault(false)
          .build(),
        /*
         * A fully qualified reference to what updated this node. This is intentionally a message-ref
         * and not a user id because it is often a program that updates nodes, not a user.
         * E.g. "acme:iam:node:app:cli-scheduler" or "acme:iam:node:user:60c71df0-fda8-11e5-bfb9-30342d363854"
         */
        Fb.create(this.UPDATER_REF_FIELD, T.MessageRefType.create())
          .build(),
        /*
         * A reference to the last event that changed the state of this node.
         * E.g. "acme:blog:event:article-published:60c71df0-fda8-11e5-bfb9-30342d363854"
         */
        Fb.create(this.LAST_EVENT_REF_FIELD, T.MessageRefType.create())
          .build(),
        Fb.create(this.TITLE_FIELD, T.StringType.create())
          .build(),
        /*
         * The roles determine what permissions this app will have when using the system.
         * The role itself is a node which has a set of "allow" and "deny" rules.
         */
        Fb.create(this.ROLES_FIELD, T.NodeRefType.create())
          .asASet()
          .build(),
        /*
         * The "channel_id" comes from Apple News and is not a secret so it does
         * not require encryption. It is usually a version 4 uuid.
         * @link https://developer.apple.com/documentation/apple_news/apple_news_api/about_the_news_security_model
         */
        Fb.create(this.CHANNEL_ID_FIELD, T.StringType.create())
          .pattern('^[\\w-]+$')
          .build(),
        /*
         * The "api_key" comes from Apple News and is not a secret so it does
         * not require encryption. It is usually a version 4 uuid (similar to channel_id).
         */
        Fb.create(this.API_KEY_FIELD, T.StringType.create())
          .pattern('^[\\w-]+$')
          .build(),
        /*
         * The "api_secret" should be encrypted and never stored in plain text.
         */
        Fb.create(this.API_SECRET_FIELD, T.TextType.create())
          .build(),
      ],
      this.MIXINS,
    );
  }
}

const M = AppleNewsAppV1;
M.prototype.SCHEMA_ID = M.SCHEMA_ID = 'pbj:acme:iam:node:apple-news-app:1-0-0';
M.prototype.SCHEMA_CURIE = M.SCHEMA_CURIE = 'acme:iam:node:apple-news-app';
M.prototype.SCHEMA_CURIE_MAJOR = M.SCHEMA_CURIE_MAJOR = 'acme:iam:node:apple-news-app:v1';

M.prototype.MIXINS = M.MIXINS = [
  'gdbots:ncr:mixin:node:v1',
  'gdbots:ncr:mixin:node',
  'gdbots:iam:mixin:app:v1',
  'gdbots:iam:mixin:app',
  'gdbots:iam:mixin:apple-news-app:v1',
  'gdbots:iam:mixin:apple-news-app',
];

M.prototype._ID_FIELD = M._ID_FIELD = '_id';
M.prototype.STATUS_FIELD = M.STATUS_FIELD = 'status';
M.prototype.ETAG_FIELD = M.ETAG_FIELD = 'etag';
M.prototype.CREATED_AT_FIELD = M.CREATED_AT_FIELD = 'created_at';
M.prototype.CREATOR_REF_FIELD = M.CREATOR_REF_FIELD = 'creator_ref';
M.prototype.UPDATED_AT_FIELD = M.UPDATED_AT_FIELD = 'updated_at';
M.prototype.UPDATER_REF_FIELD = M.UPDATER_REF_FIELD = 'updater_ref';
M.prototype.LAST_EVENT_REF_FIELD = M.LAST_EVENT_REF_FIELD = 'last_event_ref';
M.prototype.TITLE_FIELD = M.TITLE_FIELD = 'title';
M.prototype.ROLES_FIELD = M.ROLES_FIELD = 'roles';
M.prototype.CHANNEL_ID_FIELD = M.CHANNEL_ID_FIELD = 'channel_id';
M.prototype.API_KEY_FIELD = M.API_KEY_FIELD = 'api_key';
M.prototype.API_SECRET_FIELD = M.API_SECRET_FIELD = 'api_secret';

M.prototype.FIELDS = M.FIELDS = [
  M._ID_FIELD,
  M.STATUS_FIELD,
  M.ETAG_FIELD,
  M.CREATED_AT_FIELD,
  M.CREATOR_REF_FIELD,
  M.UPDATED_AT_FIELD,
  M.UPDATER_REF_FIELD,
  M.LAST_EVENT_REF_FIELD,
  M.TITLE_FIELD,
  M.ROLES_FIELD,
  M.CHANNEL_ID_FIELD,
  M.API_KEY_FIELD,
  M.API_SECRET_FIELD,
];

GdbotsNcrNodeV1Trait(M);

GdbotsIamAppleNewsAppV1Trait(M);

Object.freeze(M);
Object.freeze(M.prototype);
