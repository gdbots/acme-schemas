<?php
// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/request/get-role-response/1-0-0.json#
namespace Acme\Schemas\Iam\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Iam\Mixin\GetRoleResponse\GetRoleResponseV1 as GdbotsIamGetRoleResponseV1;
use Gdbots\Schemas\Iam\Mixin\GetRoleResponse\GetRoleResponseV1Mixin as GdbotsIamGetRoleResponseV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\GetNodeResponse\GetNodeResponseV1 as GdbotsNcrGetNodeResponseV1;
use Gdbots\Schemas\Ncr\Mixin\GetNodeResponse\GetNodeResponseV1Mixin as GdbotsNcrGetNodeResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1 as GdbotsPbjxResponseV1;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Mixin as GdbotsPbjxResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Trait as GdbotsPbjxResponseV1Trait;

final class GetRoleResponseV1 extends AbstractMessage implements
    GetRoleResponse,
    GdbotsPbjxResponseV1,
    GdbotsNcrGetNodeResponseV1,
    GdbotsIamGetRoleResponseV1
{
    use GdbotsPbjxResponseV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:request:get-role-response:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxResponseV1Mixin::create(),
                GdbotsNcrGetNodeResponseV1Mixin::create(),
                GdbotsIamGetRoleResponseV1Mixin::create(),
            ]
        );
    }
}
