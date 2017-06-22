<?php

namespace Gdbots\Schemas\Ncr\Mixin\NodeRenamed;

use Gdbots\Pbj\AbstractMixin;
use Gdbots\Pbj\Enum\Format;
use Gdbots\Pbj\FieldBuilder as Fb;
use Gdbots\Pbj\SchemaId;
use Gdbots\Pbj\Type as T;
use Gdbots\Schemas\Ncr\Enum\NodeStatus;
use Gdbots\Schemas\Ncr\NodeRef;

final class NodeRenamedV1Mixin extends AbstractMixin
{
    /**
     * {@inheritdoc}
     */
    public function getId()
    {
        return SchemaId::fromString('pbj:gdbots:ncr:mixin:node-renamed:1-0-0');
    }

    /**
     * {@inheritdoc}
     */
    public function getFields()
    {
        return [
            Fb::create('node_ref', T\IdentifierType::create())
                ->required()
                ->className(NodeRef::class)
                ->build(),
            Fb::create('node_status', T\StringEnumType::create())
                ->className(NodeStatus::class)
                ->build(),
            Fb::create('new_slug', T\StringType::create())
                ->format(Format::SLUG())
                ->build(),
            Fb::create('old_slug', T\StringType::create())
                ->format(Format::SLUG())
                ->build()
        ];
    }
}
