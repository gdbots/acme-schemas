<?php
// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/command/patch-user/1-0-0.json#
namespace Acme\Schemas\Iam\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Ncr\Mixin\PatchNode\PatchNodeV1 as GdbotsNcrPatchNodeV1;
use Gdbots\Schemas\Ncr\Mixin\PatchNode\PatchNodeV1Mixin as GdbotsNcrPatchNodeV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1 as GdbotsPbjxCommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin as GdbotsPbjxCommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait as GdbotsPbjxCommandV1Trait;

final class PatchUserV1 extends AbstractMessage implements
    PatchUser,
    GdbotsPbjxCommandV1,
    GdbotsNcrPatchNodeV1
{
    use GdbotsPbjxCommandV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:command:patch-user:1-0-0', __CLASS__,
            [
                Fb::create('is_staff', T\BooleanType::create())
                    ->build(),
            ],
            [
                GdbotsPbjxCommandV1Mixin::create(),
                GdbotsNcrPatchNodeV1Mixin::create(),
            ]
        );
    }
}
