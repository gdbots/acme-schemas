<?php
// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/node/user/1-0-0.json#
namespace Acme\Schemas\Iam\Node;

use Acme\Schemas\Iam\UserId;
use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Common\Mixin\Taggable\TaggableV1 as GdbotsCommonTaggableV1;
use Gdbots\Schemas\Common\Mixin\Taggable\TaggableV1Mixin as GdbotsCommonTaggableV1Mixin;
use Gdbots\Schemas\Iam\Mixin\User\UserV1 as GdbotsIamUserV1;
use Gdbots\Schemas\Iam\Mixin\User\UserV1Mixin as GdbotsIamUserV1Mixin;
use Gdbots\Schemas\Iam\Mixin\User\UserV1Trait as GdbotsIamUserV1Trait;
use Gdbots\Schemas\Ncr\Mixin\Indexed\IndexedV1 as GdbotsNcrIndexedV1;
use Gdbots\Schemas\Ncr\Mixin\Indexed\IndexedV1Mixin as GdbotsNcrIndexedV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1 as GdbotsNcrNodeV1;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Mixin as GdbotsNcrNodeV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\Node\NodeV1Trait as GdbotsNcrNodeV1Trait;

final class UserV1 extends AbstractMessage implements
    User,
    GdbotsNcrNodeV1,
    GdbotsIamUserV1,
    GdbotsNcrIndexedV1,
    GdbotsCommonTaggableV1
{
    use GdbotsNcrNodeV1Trait;
    use GdbotsIamUserV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:node:user:1-0-0', __CLASS__,
            [
                Fb::create('_id', T\IdentifierType::create())
                    ->required()
                    ->withDefault(function() { return UserId::generate(); })
                    ->className(UserId::class)
                    ->build(),
            ],
            [
                GdbotsNcrNodeV1Mixin::create(),
                GdbotsIamUserV1Mixin::create(),
                GdbotsNcrIndexedV1Mixin::create(),
                GdbotsCommonTaggableV1Mixin::create(),
            ]
        );
    }
}
