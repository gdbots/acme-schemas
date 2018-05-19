<?php
// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/request/list-all-apps-request/1-0-0.json#
namespace Acme\Schemas\Iam\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Iam\Mixin\ListAllAppsRequest\ListAllAppsRequestV1 as GdbotsIamListAllAppsRequestV1;
use Gdbots\Schemas\Iam\Mixin\ListAllAppsRequest\ListAllAppsRequestV1Mixin as GdbotsIamListAllAppsRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1 as GdbotsPbjxRequestV1;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Mixin as GdbotsPbjxRequestV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Request\RequestV1Trait as GdbotsPbjxRequestV1Trait;

final class ListAllAppsRequestV1 extends AbstractMessage implements
    ListAllAppsRequest,
    GdbotsPbjxRequestV1,
    GdbotsIamListAllAppsRequestV1
{
    use GdbotsPbjxRequestV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:request:list-all-apps-request:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxRequestV1Mixin::create(),
                GdbotsIamListAllAppsRequestV1Mixin::create(),
            ]
        );
    }
}
