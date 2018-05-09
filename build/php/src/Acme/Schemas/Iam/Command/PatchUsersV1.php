<?php
// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/command/patch-users/1-0-0.json#
namespace Acme\Schemas\Iam\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Ncr\Mixin\PatchNodes\PatchNodesV1 as GdbotsNcrPatchNodesV1;
use Gdbots\Schemas\Ncr\Mixin\PatchNodes\PatchNodesV1Mixin as GdbotsNcrPatchNodesV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1 as GdbotsPbjxCommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin as GdbotsPbjxCommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait as GdbotsPbjxCommandV1Trait;

final class PatchUsersV1 extends AbstractMessage implements
    PatchUsers,
    GdbotsPbjxCommandV1,
    GdbotsNcrPatchNodesV1
{
    use GdbotsPbjxCommandV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:command:patch-users:1-0-0', __CLASS__,
            [
                Fb::create('is_staff', T\BooleanType::create())
                    ->build(),
            ],
            [
                GdbotsPbjxCommandV1Mixin::create(),
                GdbotsNcrPatchNodesV1Mixin::create(),
            ]
        );
    }
}
