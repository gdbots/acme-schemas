<?php
declare(strict_types=1);

// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/node/role/1-0-0.json#
namespace Acme\Schemas\Iam\Node;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Iam\Mixin\Role\RoleV1Trait as GdbotsIamRoleV1Trait;
use Gdbots\Schemas\Iam\RoleId;
use Gdbots\Schemas\Ncr\Enum\NodeStatus;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Trait as GdbotsNcrNodeV1Trait;

final class RoleV1 extends AbstractMessage
{
    const SCHEMA_ID = 'pbj:acme:iam:node:role:1-0-0';
    const SCHEMA_CURIE = 'acme:iam:node:role';
    const SCHEMA_CURIE_MAJOR = 'acme:iam:node:role:v1';

    const MIXINS = [
      'gdbots:ncr:mixin:node:v1',
      'gdbots:ncr:mixin:node',
      'gdbots:iam:mixin:role:v1',
      'gdbots:iam:mixin:role',
    ];

    const _ID_FIELD = '_id';
    const STATUS_FIELD = 'status';
    const ETAG_FIELD = 'etag';
    const CREATED_AT_FIELD = 'created_at';
    const CREATOR_REF_FIELD = 'creator_ref';
    const UPDATED_AT_FIELD = 'updated_at';
    const UPDATER_REF_FIELD = 'updater_ref';
    const LAST_EVENT_REF_FIELD = 'last_event_ref';
    const TITLE_FIELD = 'title';
    const ALLOWED_FIELD = 'allowed';
    const DENIED_FIELD = 'denied';

    const FIELDS = [
      self::_ID_FIELD,
      self::STATUS_FIELD,
      self::ETAG_FIELD,
      self::CREATED_AT_FIELD,
      self::CREATOR_REF_FIELD,
      self::UPDATED_AT_FIELD,
      self::UPDATER_REF_FIELD,
      self::LAST_EVENT_REF_FIELD,
      self::TITLE_FIELD,
      self::ALLOWED_FIELD,
      self::DENIED_FIELD,
    ];

    use GdbotsNcrNodeV1Trait;

    use GdbotsIamRoleV1Trait;

    protected static function defineSchema(): Schema
    {
        return new Schema(self::SCHEMA_ID, __CLASS__,
            [
                Fb::create(self::_ID_FIELD, T\IdentifierType::create())
                    ->required()
                    ->className(RoleId::class)
                    ->build(),
                Fb::create(self::STATUS_FIELD, T\StringEnumType::create())
                    ->withDefault("draft")
                    ->className(NodeStatus::class)
                    ->build(),
                Fb::create(self::ETAG_FIELD, T\StringType::create())
                    ->maxLength(100)
                    ->pattern('^[\w\.:-]+$')
                    ->build(),
                Fb::create(self::CREATED_AT_FIELD, T\MicrotimeType::create())
                    ->build(),
                /*
                 * A fully qualified reference to what created this node. This is intentionally a message-ref
                 * and not a user id because it is often a program that creates nodes, not a user.
                 */
                Fb::create(self::CREATOR_REF_FIELD, T\MessageRefType::create())
                    ->build(),
                Fb::create(self::UPDATED_AT_FIELD, T\MicrotimeType::create())
                    ->useTypeDefault(false)
                    ->build(),
                /*
                 * A fully qualified reference to what updated this node. This is intentionally a message-ref
                 * and not a user id because it is often a program that updates nodes, not a user.
                 * E.g. "acme:iam:node:app:cli-scheduler" or "acme:iam:node:user:60c71df0-fda8-11e5-bfb9-30342d363854"
                 */
                Fb::create(self::UPDATER_REF_FIELD, T\MessageRefType::create())
                    ->build(),
                /*
                 * A reference to the last event that changed the state of this node.
                 * E.g. "acme:blog:event:article-published:60c71df0-fda8-11e5-bfb9-30342d363854"
                 */
                Fb::create(self::LAST_EVENT_REF_FIELD, T\MessageRefType::create())
                    ->build(),
                Fb::create(self::TITLE_FIELD, T\StringType::create())
                    ->build(),
                /*
                 * The "allowed" field is a set of actions that a user will be granted.
                 * Although the string can be anything it is best practice to use the
                 * curies of the pbjx commands and requests from your application.
                 * E.g. "acme:blog:command:publish-article" or "acme:blog:command:*"
                 */
                Fb::create(self::ALLOWED_FIELD, T\StringType::create())
                    ->asASet()
                    ->pattern('^[a-z0-9_\*\.:-]+$')
                    ->build(),
                /*
                 * The "denied" field works just like the "allowed" field with the
                 * exception that these rules take precedence and deny a user's
                 * ability to perform the action.
                 */
                Fb::create(self::DENIED_FIELD, T\StringType::create())
                    ->asASet()
                    ->pattern('^[a-z0-9_\*\.:-]+$')
                    ->build(),
            ],
            self::MIXINS
        );
    }
}
