<?php
// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/command/create-role/1-0-0.json#
namespace Acme\Schemas\Iam\Command;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Iam\Mixin\CreateRole\CreateRoleV1 as GdbotsIamCreateRoleV1;
use Gdbots\Schemas\Iam\Mixin\CreateRole\CreateRoleV1Mixin as GdbotsIamCreateRoleV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\CreateNode\CreateNodeV1 as GdbotsNcrCreateNodeV1;
use Gdbots\Schemas\Ncr\Mixin\CreateNode\CreateNodeV1Mixin as GdbotsNcrCreateNodeV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1 as GdbotsPbjxCommandV1;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Mixin as GdbotsPbjxCommandV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Command\CommandV1Trait as GdbotsPbjxCommandV1Trait;

final class CreateRoleV1 extends AbstractMessage implements
    CreateRole,
    GdbotsPbjxCommandV1,
    GdbotsNcrCreateNodeV1,
    GdbotsIamCreateRoleV1
{
    use GdbotsPbjxCommandV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:command:create-role:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxCommandV1Mixin::create(),
                GdbotsNcrCreateNodeV1Mixin::create(),
                GdbotsIamCreateRoleV1Mixin::create(),
            ]
        );
    }
}
