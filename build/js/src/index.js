/**
 * DO NOT EDIT THIS FILE as it will be overwritten.
 *
 * Registers all of the pbj schemas with the MessageResolver.
 *
 * This file has been auto-generated by the Pbj Compiler.
 */

import MessageResolver from '@gdbots/pbj/MessageResolver';
import '@gdbots/acme-schemas/acme/iam/command/CreateRoleV1';
import '@gdbots/acme-schemas/acme/iam/command/CreateUserV1';
import '@gdbots/acme-schemas/acme/iam/command/DeleteRoleV1';
import '@gdbots/acme-schemas/acme/iam/command/DeleteUserV1';
import '@gdbots/acme-schemas/acme/iam/command/GrantRolesToUserV1';
import '@gdbots/acme-schemas/acme/iam/command/RevokeRolesFromUserV1';
import '@gdbots/acme-schemas/acme/iam/command/UpdateRoleV1';
import '@gdbots/acme-schemas/acme/iam/command/UpdateUserV1';
import '@gdbots/acme-schemas/acme/iam/event/RoleCreatedV1';
import '@gdbots/acme-schemas/acme/iam/event/RoleDeletedV1';
import '@gdbots/acme-schemas/acme/iam/event/RoleUpdatedV1';
import '@gdbots/acme-schemas/acme/iam/event/UserCreatedV1';
import '@gdbots/acme-schemas/acme/iam/event/UserDeletedV1';
import '@gdbots/acme-schemas/acme/iam/event/UserRolesGrantedV1';
import '@gdbots/acme-schemas/acme/iam/event/UserRolesRevokedV1';
import '@gdbots/acme-schemas/acme/iam/event/UserUpdatedV1';
import '@gdbots/acme-schemas/acme/iam/node/RoleV1';
import '@gdbots/acme-schemas/acme/iam/node/UserV1';
import '@gdbots/acme-schemas/acme/iam/request/GetRoleBatchRequestV1';
import '@gdbots/acme-schemas/acme/iam/request/GetRoleBatchResponseV1';
import '@gdbots/acme-schemas/acme/iam/request/GetRoleHistoryRequestV1';
import '@gdbots/acme-schemas/acme/iam/request/GetRoleHistoryResponseV1';
import '@gdbots/acme-schemas/acme/iam/request/GetRoleRequestV1';
import '@gdbots/acme-schemas/acme/iam/request/GetRoleResponseV1';
import '@gdbots/acme-schemas/acme/iam/request/GetUserBatchRequestV1';
import '@gdbots/acme-schemas/acme/iam/request/GetUserBatchResponseV1';
import '@gdbots/acme-schemas/acme/iam/request/GetUserHistoryRequestV1';
import '@gdbots/acme-schemas/acme/iam/request/GetUserHistoryResponseV1';
import '@gdbots/acme-schemas/acme/iam/request/GetUserRequestV1';
import '@gdbots/acme-schemas/acme/iam/request/GetUserResponseV1';
import '@gdbots/acme-schemas/acme/iam/request/ListAllRolesRequestV1';
import '@gdbots/acme-schemas/acme/iam/request/ListAllRolesResponseV1';
import '@gdbots/acme-schemas/acme/iam/request/SearchUsersRequestV1';
import '@gdbots/acme-schemas/acme/iam/request/SearchUsersResponseV1';
import '@gdbots/schemas/gdbots/analytics/tracker/KeenV1';
import '@gdbots/schemas/gdbots/contexts/AppV1';
import '@gdbots/schemas/gdbots/contexts/CloudV1';
import '@gdbots/schemas/gdbots/contexts/UserAgentV1';
import '@gdbots/schemas/gdbots/geo/AddressV1';
import '@gdbots/schemas/gdbots/ncr/command/CreateEdgeV1';
import '@gdbots/schemas/gdbots/ncr/command/DeleteEdgeV1';
import '@gdbots/schemas/gdbots/ncr/event/EdgeCreatedV1';
import '@gdbots/schemas/gdbots/ncr/event/EdgeDeletedV1';
import '@gdbots/schemas/gdbots/ncr/request/GetNodeBatchRequestV1';
import '@gdbots/schemas/gdbots/ncr/request/GetNodeBatchResponseV1';
import '@gdbots/schemas/gdbots/pbjx/EnvelopeV1';
import '@gdbots/schemas/gdbots/pbjx/command/CheckHealthV1';
import '@gdbots/schemas/gdbots/pbjx/event/EventExecutionFailedV1';
import '@gdbots/schemas/gdbots/pbjx/event/HealthCheckedV1';
import '@gdbots/schemas/gdbots/pbjx/request/EchoRequestV1';
import '@gdbots/schemas/gdbots/pbjx/request/EchoResponseV1';
import '@gdbots/schemas/gdbots/pbjx/request/RequestFailedResponseV1';

export default MessageResolver;
