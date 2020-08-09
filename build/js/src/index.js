/**
 * DO NOT EDIT THIS FILE as it will be overwritten by the Pbj compiler.
 * @link https://github.com/gdbots/pbjc-php
 *
 * Registers all of the pbj schemas with the MessageResolver.
 *
 * @link http://acme-schemas.gdbots.io/
 */

import MessageResolver from '@gdbots/pbj/MessageResolver';
import '@gdbots/acme-schemas/acme/forms/command/CreateFormV1';
import '@gdbots/acme-schemas/acme/forms/command/DeleteFormV1';
import '@gdbots/acme-schemas/acme/forms/command/ExpireFormV1';
import '@gdbots/acme-schemas/acme/forms/command/LockFormV1';
import '@gdbots/acme-schemas/acme/forms/command/MarkFormAsDraftV1';
import '@gdbots/acme-schemas/acme/forms/command/MarkFormAsPendingV1';
import '@gdbots/acme-schemas/acme/forms/command/PublishFormV1';
import '@gdbots/acme-schemas/acme/forms/command/RenameFormV1';
import '@gdbots/acme-schemas/acme/forms/command/SendSubmissionV1';
import '@gdbots/acme-schemas/acme/forms/command/UnlockFormV1';
import '@gdbots/acme-schemas/acme/forms/command/UnpublishFormV1';
import '@gdbots/acme-schemas/acme/forms/command/UpdateFormV1';
import '@gdbots/acme-schemas/acme/forms/event/FormCreatedV1';
import '@gdbots/acme-schemas/acme/forms/event/FormDeletedV1';
import '@gdbots/acme-schemas/acme/forms/event/FormExpiredV1';
import '@gdbots/acme-schemas/acme/forms/event/FormLockedV1';
import '@gdbots/acme-schemas/acme/forms/event/FormMarkedAsDraftV1';
import '@gdbots/acme-schemas/acme/forms/event/FormMarkedAsPendingV1';
import '@gdbots/acme-schemas/acme/forms/event/FormPublishedV1';
import '@gdbots/acme-schemas/acme/forms/event/FormRenamedV1';
import '@gdbots/acme-schemas/acme/forms/event/FormScheduledV1';
import '@gdbots/acme-schemas/acme/forms/event/FormUnlockedV1';
import '@gdbots/acme-schemas/acme/forms/event/FormUnpublishedV1';
import '@gdbots/acme-schemas/acme/forms/event/FormUpdatedV1';
import '@gdbots/acme-schemas/acme/forms/event/SubmissionReceivedV1';
import '@gdbots/acme-schemas/acme/forms/node/FormV1';
import '@gdbots/acme-schemas/acme/forms/request/GetFormHistoryRequestV1';
import '@gdbots/acme-schemas/acme/forms/request/GetFormHistoryResponseV1';
import '@gdbots/acme-schemas/acme/forms/request/GetFormRequestV1';
import '@gdbots/acme-schemas/acme/forms/request/GetFormResponseV1';
import '@gdbots/acme-schemas/acme/forms/request/SearchFormsRequestV1';
import '@gdbots/acme-schemas/acme/forms/request/SearchFormsResponseV1';
import '@gdbots/acme-schemas/acme/iam/command/CreateAppV1';
import '@gdbots/acme-schemas/acme/iam/command/CreateRoleV1';
import '@gdbots/acme-schemas/acme/iam/command/CreateUserV1';
import '@gdbots/acme-schemas/acme/iam/command/DeleteAppV1';
import '@gdbots/acme-schemas/acme/iam/command/DeleteRoleV1';
import '@gdbots/acme-schemas/acme/iam/command/DeleteUserV1';
import '@gdbots/acme-schemas/acme/iam/command/GrantRolesToAppV1';
import '@gdbots/acme-schemas/acme/iam/command/GrantRolesToUserV1';
import '@gdbots/acme-schemas/acme/iam/command/PatchUserV1';
import '@gdbots/acme-schemas/acme/iam/command/PatchUsersV1';
import '@gdbots/acme-schemas/acme/iam/command/RevokeRolesFromAppV1';
import '@gdbots/acme-schemas/acme/iam/command/RevokeRolesFromUserV1';
import '@gdbots/acme-schemas/acme/iam/command/UpdateAppV1';
import '@gdbots/acme-schemas/acme/iam/command/UpdateRoleV1';
import '@gdbots/acme-schemas/acme/iam/command/UpdateUserV1';
import '@gdbots/acme-schemas/acme/iam/event/AppCreatedV1';
import '@gdbots/acme-schemas/acme/iam/event/AppDeletedV1';
import '@gdbots/acme-schemas/acme/iam/event/AppRolesGrantedV1';
import '@gdbots/acme-schemas/acme/iam/event/AppRolesRevokedV1';
import '@gdbots/acme-schemas/acme/iam/event/AppUpdatedV1';
import '@gdbots/acme-schemas/acme/iam/event/RoleCreatedV1';
import '@gdbots/acme-schemas/acme/iam/event/RoleDeletedV1';
import '@gdbots/acme-schemas/acme/iam/event/RoleUpdatedV1';
import '@gdbots/acme-schemas/acme/iam/event/UserCreatedV1';
import '@gdbots/acme-schemas/acme/iam/event/UserDeletedV1';
import '@gdbots/acme-schemas/acme/iam/event/UserPatchedV1';
import '@gdbots/acme-schemas/acme/iam/event/UserRolesGrantedV1';
import '@gdbots/acme-schemas/acme/iam/event/UserRolesRevokedV1';
import '@gdbots/acme-schemas/acme/iam/event/UserUpdatedV1';
import '@gdbots/acme-schemas/acme/iam/node/AlexaAppV1';
import '@gdbots/acme-schemas/acme/iam/node/AndroidAppV1';
import '@gdbots/acme-schemas/acme/iam/node/AppleNewsAppV1';
import '@gdbots/acme-schemas/acme/iam/node/BrowserAppV1';
import '@gdbots/acme-schemas/acme/iam/node/EmailAppV1';
import '@gdbots/acme-schemas/acme/iam/node/IosAppV1';
import '@gdbots/acme-schemas/acme/iam/node/RoleV1';
import '@gdbots/acme-schemas/acme/iam/node/SlackAppV1';
import '@gdbots/acme-schemas/acme/iam/node/SmsAppV1';
import '@gdbots/acme-schemas/acme/iam/node/UserV1';
import '@gdbots/acme-schemas/acme/iam/request/GetAllAppsRequestV1';
import '@gdbots/acme-schemas/acme/iam/request/GetAllAppsResponseV1';
import '@gdbots/acme-schemas/acme/iam/request/GetAppHistoryRequestV1';
import '@gdbots/acme-schemas/acme/iam/request/GetAppHistoryResponseV1';
import '@gdbots/acme-schemas/acme/iam/request/GetAppRequestV1';
import '@gdbots/acme-schemas/acme/iam/request/GetAppResponseV1';
import '@gdbots/acme-schemas/acme/iam/request/GetRoleHistoryRequestV1';
import '@gdbots/acme-schemas/acme/iam/request/GetRoleHistoryResponseV1';
import '@gdbots/acme-schemas/acme/iam/request/GetRoleRequestV1';
import '@gdbots/acme-schemas/acme/iam/request/GetRoleResponseV1';
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
import '@gdbots/schemas/gdbots/forms/field/AddressFieldV1';
import '@gdbots/schemas/gdbots/forms/field/AgeFieldV1';
import '@gdbots/schemas/gdbots/forms/field/CountryFieldV1';
import '@gdbots/schemas/gdbots/forms/field/DateFieldV1';
import '@gdbots/schemas/gdbots/forms/field/DobFieldV1';
import '@gdbots/schemas/gdbots/forms/field/DocumentFieldV1';
import '@gdbots/schemas/gdbots/forms/field/EmailFieldV1';
import '@gdbots/schemas/gdbots/forms/field/FacebookUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/GenderFieldV1';
import '@gdbots/schemas/gdbots/forms/field/HeightFieldV1';
import '@gdbots/schemas/gdbots/forms/field/InstagramUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/LegalFieldV1';
import '@gdbots/schemas/gdbots/forms/field/LongTextFieldV1';
import '@gdbots/schemas/gdbots/forms/field/NumberFieldV1';
import '@gdbots/schemas/gdbots/forms/field/PhoneFieldV1';
import '@gdbots/schemas/gdbots/forms/field/PhotoFieldV1';
import '@gdbots/schemas/gdbots/forms/field/PinterestUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/SelectFieldV1';
import '@gdbots/schemas/gdbots/forms/field/SexualOrientationFieldV1';
import '@gdbots/schemas/gdbots/forms/field/ShortTextFieldV1';
import '@gdbots/schemas/gdbots/forms/field/SignatureFieldV1';
import '@gdbots/schemas/gdbots/forms/field/SkypeUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/SnapchatUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/StatementFieldV1';
import '@gdbots/schemas/gdbots/forms/field/TwitterUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/VideoFieldV1';
import '@gdbots/schemas/gdbots/forms/field/WebsiteFieldV1';
import '@gdbots/schemas/gdbots/forms/field/WeightFieldV1';
import '@gdbots/schemas/gdbots/forms/field/YesNoFieldV1';
import '@gdbots/schemas/gdbots/forms/field/YoutubeUserFieldV1';
import '@gdbots/schemas/gdbots/forms/field/YoutubeVideoFieldV1';
import '@gdbots/schemas/gdbots/geo/AddressV1';
import '@gdbots/schemas/gdbots/ncr/command/CreateEdgeV1';
import '@gdbots/schemas/gdbots/ncr/command/DeleteEdgeV1';
import '@gdbots/schemas/gdbots/ncr/command/UpdateNodeLabelsV1';
import '@gdbots/schemas/gdbots/ncr/event/EdgeCreatedV1';
import '@gdbots/schemas/gdbots/ncr/event/EdgeDeletedV1';
import '@gdbots/schemas/gdbots/ncr/event/NodeLabelsUpdatedV1';
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
