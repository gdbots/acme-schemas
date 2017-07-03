<?php
// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/command/update-role/1-0-0.json#
namespace Acme\Schemas\Iam\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Iam\Mixin\UpdateRole\UpdateRoleV1 as GdbotsIamUpdateRoleV1;
use Gdbots\Schemas\Iam\Mixin\UpdateRole\UpdateRoleV1Mixin as GdbotsIamUpdateRoleV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\UpdateNode\UpdateNodeV1 as GdbotsNcrUpdateNodeV1;
use Gdbots\Schemas\Ncr\Mixin\UpdateNode\UpdateNodeV1Mixin as GdbotsNcrUpdateNodeV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1 as GdbotsPbjxCommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin as GdbotsPbjxCommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait as GdbotsPbjxCommandV1Trait;

final class UpdateRoleV1 extends AbstractMessage implements
    UpdateRole,
    GdbotsPbjxCommandV1,
    GdbotsNcrUpdateNodeV1,
    GdbotsIamUpdateRoleV1
{
    use GdbotsPbjxCommandV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:command:update-role:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxCommandV1Mixin::create(),
                GdbotsNcrUpdateNodeV1Mixin::create(),
                GdbotsIamUpdateRoleV1Mixin::create(),
            ]
        );
    }
}
