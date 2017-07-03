<?php
// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/request/get-role-request/1-0-0.json#
namespace Acme\Schemas\Iam\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Iam\Mixin\GetRoleRequest\GetRoleRequestV1 as GdbotsIamGetRoleRequestV1;
use Gdbots\Schemas\Iam\Mixin\GetRoleRequest\GetRoleRequestV1Mixin as GdbotsIamGetRoleRequestV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\GetNodeRequest\GetNodeRequestV1 as GdbotsNcrGetNodeRequestV1;
use Gdbots\Schemas\Ncr\Mixin\GetNodeRequest\GetNodeRequestV1Mixin as GdbotsNcrGetNodeRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1 as GdbotsPbjxRequestV1;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Mixin as GdbotsPbjxRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Trait as GdbotsPbjxRequestV1Trait;

final class GetRoleRequestV1 extends AbstractMessage implements
    GetRoleRequest,
    GdbotsPbjxRequestV1,
    GdbotsNcrGetNodeRequestV1,
    GdbotsIamGetRoleRequestV1
{
    use GdbotsPbjxRequestV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:request:get-role-request:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxRequestV1Mixin::create(),
                GdbotsNcrGetNodeRequestV1Mixin::create(),
                GdbotsIamGetRoleRequestV1Mixin::create(),
            ]
        );
    }
}
