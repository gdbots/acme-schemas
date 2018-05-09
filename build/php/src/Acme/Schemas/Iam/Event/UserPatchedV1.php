<?php
// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/event/user-patched/1-0-0.json#
namespace Acme\Schemas\Iam\Event;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Ncr\Mixin\NodePatched\NodePatchedV1 as GdbotsNcrNodePatchedV1;
use Gdbots\Schemas\Ncr\Mixin\NodePatched\NodePatchedV1Mixin as GdbotsNcrNodePatchedV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1 as GdbotsPbjxEventV1;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Mixin as GdbotsPbjxEventV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Event\EventV1Trait as GdbotsPbjxEventV1Trait;

final class UserPatchedV1 extends AbstractMessage implements
    UserPatched,
    GdbotsPbjxEventV1,
    GdbotsNcrNodePatchedV1
{
    use GdbotsPbjxEventV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:event:user-patched:1-0-0', __CLASS__,
            [
                Fb::create('is_staff', T\BooleanType::create())
                    ->build(),
            ],
            [
                GdbotsPbjxEventV1Mixin::create(),
                GdbotsNcrNodePatchedV1Mixin::create(),
            ]
        );
    }
}
