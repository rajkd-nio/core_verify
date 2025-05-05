
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.DocumentTypeScalarFieldEnum = {
  id: 'id',
  name: 'name',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  description: 'description',
  formId: 'formId',
  hideHeader: 'hideHeader',
  showFormButtons: 'showFormButtons',
  parent_type_id: 'parent_type_id',
  parent_name: 'parent_name',
  child_type_id: 'child_type_id',
  child_name: 'child_name',
  form_template_id: 'form_template_id'
};

exports.Prisma.DocumentTitleScalarFieldEnum = {
  id: 'id',
  title: 'title',
  created_at: 'created_at',
  updated_at: 'updated_at',
  shareable: 'shareable',
  document_type_id: 'document_type_id',
  is_display: 'is_display',
  require_number: 'require_number',
  require_valid_date: 'require_valid_date',
  require_expire_date: 'require_expire_date',
  require_doc_data: 'require_doc_data',
  doc_data_options: 'doc_data_options',
  doc_data_name: 'doc_data_name',
  require_attachment_front: 'require_attachment_front',
  require_attachment_back: 'require_attachment_back',
  description: 'description',
  form_description: 'form_description',
  form_title: 'form_title'
};

exports.Prisma.FormFieldScalarFieldEnum = {
  id: 'id',
  template_id: 'template_id',
  field_id: 'field_id',
  field_name: 'field_name',
  field_type: 'field_type',
  label: 'label',
  placeholder: 'placeholder',
  required: 'required',
  is_hidden: 'is_hidden',
  order: 'order',
  full_width: 'full_width',
  display_conditions: 'display_conditions',
  validation_rules: 'validation_rules',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.DocumentConfigurationScalarFieldEnum = {
  id: 'id',
  regionId: 'regionId',
  documentTypeId: 'documentTypeId',
  documentTitleId: 'documentTitleId',
  typeOfCondition: 'typeOfCondition',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  active: 'active',
  priority: 'priority',
  customFields: 'customFields'
};

exports.Prisma.RegionScalarFieldEnum = {
  id: 'id',
  name: 'name',
  code: 'code',
  country: 'country',
  active: 'active',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.Document_fieldsScalarFieldEnum = {
  id: 'id',
  field_id: 'field_id',
  name: 'name',
  label: 'label',
  type: 'type',
  placeholder: 'placeholder',
  required: 'required',
  order: 'order',
  full_width: 'full_width',
  hidden: 'hidden',
  default_value: 'default_value',
  options: 'options',
  validation: 'validation',
  conditional_display: 'conditional_display',
  help_text: 'help_text',
  document_type_id: 'document_type_id',
  document_title_id: 'document_title_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.FormTemplateScalarFieldEnum = {
  id: 'id',
  form_key: 'form_key',
  name: 'name',
  description: 'description',
  version: 'version',
  is_active: 'is_active',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.FieldOptionScalarFieldEnum = {
  id: 'id',
  field_id: 'field_id',
  option_value: 'option_value',
  option_label: 'option_label',
  order: 'order',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.DocumentTypeLocationScalarFieldEnum = {
  id: 'id',
  document_type_id: 'document_type_id',
  location_id: 'location_id',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};


exports.Prisma.ModelName = {
  DocumentType: 'DocumentType',
  DocumentTitle: 'DocumentTitle',
  FormField: 'FormField',
  DocumentConfiguration: 'DocumentConfiguration',
  Region: 'Region',
  document_fields: 'document_fields',
  FormTemplate: 'FormTemplate',
  FieldOption: 'FieldOption',
  DocumentTypeLocation: 'DocumentTypeLocation'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
