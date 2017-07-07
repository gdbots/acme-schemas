<?php
// @link http://acme-schemas.gdbots.io/json-schema/acme/iam/request/get-role-batch-response/1-0-0.json#
namespace Acme\Schemas\Iam\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\Schema;
use Gdbots\Schemas\Iam\Mixin\GetRoleBatchResponse\GetRoleBatchResponseV1 as GdbotsIamGetRoleBatchResponseV1;
use Gdbots\Schemas\Iam\Mixin\GetRoleBatchResponse\GetRoleBatchResponseV1Mixin as GdbotsIamGetRoleBatchResponseV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\GetNodeBatchResponse\GetNodeBatchResponseV1 as GdbotsNcrGetNodeBatchResponseV1;
use Gdbots\Schemas\Ncr\Mixin\GetNodeBatchResponse\GetNodeBatchResponseV1Mixin as GdbotsNcrGetNodeBatchResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1 as GdbotsPbjxResponseV1;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Mixin as GdbotsPbjxResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Trait as GdbotsPbjxResponseV1Trait;

final class GetRoleBatchResponseV1 extends AbstractMessage implements
    GetRoleBatchResponse,
    GdbotsPbjxResponseV1,
    GdbotsNcrGetNodeBatchResponseV1,
    GdbotsIamGetRoleBatchResponseV1
{
    use GdbotsPbjxResponseV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:request:get-role-batch-response:1-0-0', __CLASS__,
            [],
            [
                GdbotsPbjxResponseV1Mixin::create(),
                GdbotsNcrGetNodeBatchResponseV1Mixin::create(),
                GdbotsIamGetRoleBatchResponseV1Mixin::create(),
            ]
        );
    }
}
