<?php

namespace Acme\Schemas\Iam\Request;

use Gdbots\Pbj\AbstractMessage;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\Schema;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Iam\Mixin\GetRoleBatchResponse\GetRoleBatchResponseV1 as GdbotsIamGetRoleBatchResponseV1;
use Gdbots\Schemas\Iam\Mixin\GetRoleBatchResponse\GetRoleBatchResponseV1Mixin;
use Gdbots\Schemas\Iam\Mixin\GetRoleBatchResponse\GetRoleBatchResponseV1Trait;
use Gdbots\Schemas\Ncr\Mixin\GetNodeBatchResponse\GetNodeBatchResponseV1;
use Gdbots\Schemas\Ncr\Mixin\GetNodeBatchResponse\GetNodeBatchResponseV1Mixin;
use Gdbots\Schemas\Ncr\Mixin\GetNodeBatchResponse\GetNodeBatchResponseV1Trait;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Mixin;
use Gdbots\Schemas\Pbjx\Mixin\Response\ResponseV1Trait;

final class GetRoleBatchResponseV1 extends AbstractMessage implements
    GetRoleBatchResponse,
    ResponseV1,
    GetNodeBatchResponseV1,
    GdbotsIamGetRoleBatchResponseV1
  
{
    use ResponseV1Trait;
    use GetNodeBatchResponseV1Trait;
    use GetRoleBatchResponseV1Trait;

    /**
     * @return Schema
     */
    protected static function defineSchema()
    {
        return new Schema('pbj:acme:iam:request:get-role-batch-response:1-0-0', __CLASS__,
            [],
            [
                ResponseV1Mixin::create(), 
                GetNodeBatchResponseV1Mixin::create(), 
                GetRoleBatchResponseV1Mixin::create()
            ]
        );
    }
}
