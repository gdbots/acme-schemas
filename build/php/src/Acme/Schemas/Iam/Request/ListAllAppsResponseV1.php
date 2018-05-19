<?php
// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/request/list-all-apps-response/1-0-0.json#
namespace Acme\Schemas\Iam\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Iam\Mixin\ListAllAppsResponse\ListAllAppsResponseV1 as GdbotsIamListAllAppsResponseV1;
use Gdbots\Schemas\Iam\Mixin\ListAllAppsResponse\ListAllAppsResponseV1Mixin as GdbotsIamListAllAppsResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1 as GdbotsPbjxResponseV1;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Mixin as GdbotsPbjxResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Trait as GdbotsPbjxResponseV1Trait;

final class ListAllAppsResponseV1 extends AbstractMessage implements
    ListAllAppsResponse,
    GdbotsPbjxResponseV1,
    GdbotsIamListAllAppsResponseV1
{
    use GdbotsPbjxResponseV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:request:list-all-apps-response:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxResponseV1Mixin::create(),
                GdbotsIamListAllAppsResponseV1Mixin::create(),
            ]
        );
    }
}
