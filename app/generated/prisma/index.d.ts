
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model DocumentType
 * 
 */
export type DocumentType = $Result.DefaultSelection<Prisma.$DocumentTypePayload>
/**
 * Model DocumentTitle
 * 
 */
export type DocumentTitle = $Result.DefaultSelection<Prisma.$DocumentTitlePayload>
/**
 * Model FormField
 * 
 */
export type FormField = $Result.DefaultSelection<Prisma.$FormFieldPayload>
/**
 * Model DocumentConfiguration
 * 
 */
export type DocumentConfiguration = $Result.DefaultSelection<Prisma.$DocumentConfigurationPayload>
/**
 * Model Region
 * 
 */
export type Region = $Result.DefaultSelection<Prisma.$RegionPayload>
/**
 * Model document_fields
 * 
 */
export type document_fields = $Result.DefaultSelection<Prisma.$document_fieldsPayload>
/**
 * Model FormTemplate
 * 
 */
export type FormTemplate = $Result.DefaultSelection<Prisma.$FormTemplatePayload>
/**
 * Model FieldOption
 * 
 */
export type FieldOption = $Result.DefaultSelection<Prisma.$FieldOptionPayload>
/**
 * Model DocumentTypeLocation
 * 
 */
export type DocumentTypeLocation = $Result.DefaultSelection<Prisma.$DocumentTypeLocationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DocumentTypes
 * const documentTypes = await prisma.documentType.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more DocumentTypes
   * const documentTypes = await prisma.documentType.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.documentType`: Exposes CRUD operations for the **DocumentType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentTypes
    * const documentTypes = await prisma.documentType.findMany()
    * ```
    */
  get documentType(): Prisma.DocumentTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentTitle`: Exposes CRUD operations for the **DocumentTitle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentTitles
    * const documentTitles = await prisma.documentTitle.findMany()
    * ```
    */
  get documentTitle(): Prisma.DocumentTitleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formField`: Exposes CRUD operations for the **FormField** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormFields
    * const formFields = await prisma.formField.findMany()
    * ```
    */
  get formField(): Prisma.FormFieldDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentConfiguration`: Exposes CRUD operations for the **DocumentConfiguration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentConfigurations
    * const documentConfigurations = await prisma.documentConfiguration.findMany()
    * ```
    */
  get documentConfiguration(): Prisma.DocumentConfigurationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.region`: Exposes CRUD operations for the **Region** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regions
    * const regions = await prisma.region.findMany()
    * ```
    */
  get region(): Prisma.RegionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document_fields`: Exposes CRUD operations for the **document_fields** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Document_fields
    * const document_fields = await prisma.document_fields.findMany()
    * ```
    */
  get document_fields(): Prisma.document_fieldsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.formTemplate`: Exposes CRUD operations for the **FormTemplate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormTemplates
    * const formTemplates = await prisma.formTemplate.findMany()
    * ```
    */
  get formTemplate(): Prisma.FormTemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fieldOption`: Exposes CRUD operations for the **FieldOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FieldOptions
    * const fieldOptions = await prisma.fieldOption.findMany()
    * ```
    */
  get fieldOption(): Prisma.FieldOptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentTypeLocation`: Exposes CRUD operations for the **DocumentTypeLocation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentTypeLocations
    * const documentTypeLocations = await prisma.documentTypeLocation.findMany()
    * ```
    */
  get documentTypeLocation(): Prisma.DocumentTypeLocationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "documentType" | "documentTitle" | "formField" | "documentConfiguration" | "region" | "document_fields" | "formTemplate" | "fieldOption" | "documentTypeLocation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      DocumentType: {
        payload: Prisma.$DocumentTypePayload<ExtArgs>
        fields: Prisma.DocumentTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>
          }
          findFirst: {
            args: Prisma.DocumentTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>
          }
          findMany: {
            args: Prisma.DocumentTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>[]
          }
          create: {
            args: Prisma.DocumentTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>
          }
          createMany: {
            args: Prisma.DocumentTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>[]
          }
          delete: {
            args: Prisma.DocumentTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>
          }
          update: {
            args: Prisma.DocumentTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>
          }
          deleteMany: {
            args: Prisma.DocumentTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>[]
          }
          upsert: {
            args: Prisma.DocumentTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypePayload>
          }
          aggregate: {
            args: Prisma.DocumentTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentType>
          }
          groupBy: {
            args: Prisma.DocumentTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentTypeCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentTypeCountAggregateOutputType> | number
          }
        }
      }
      DocumentTitle: {
        payload: Prisma.$DocumentTitlePayload<ExtArgs>
        fields: Prisma.DocumentTitleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentTitleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTitlePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentTitleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTitlePayload>
          }
          findFirst: {
            args: Prisma.DocumentTitleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTitlePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentTitleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTitlePayload>
          }
          findMany: {
            args: Prisma.DocumentTitleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTitlePayload>[]
          }
          create: {
            args: Prisma.DocumentTitleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTitlePayload>
          }
          createMany: {
            args: Prisma.DocumentTitleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentTitleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTitlePayload>[]
          }
          delete: {
            args: Prisma.DocumentTitleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTitlePayload>
          }
          update: {
            args: Prisma.DocumentTitleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTitlePayload>
          }
          deleteMany: {
            args: Prisma.DocumentTitleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentTitleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentTitleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTitlePayload>[]
          }
          upsert: {
            args: Prisma.DocumentTitleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTitlePayload>
          }
          aggregate: {
            args: Prisma.DocumentTitleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentTitle>
          }
          groupBy: {
            args: Prisma.DocumentTitleGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentTitleGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentTitleCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentTitleCountAggregateOutputType> | number
          }
        }
      }
      FormField: {
        payload: Prisma.$FormFieldPayload<ExtArgs>
        fields: Prisma.FormFieldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormFieldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormFieldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormFieldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormFieldPayload>
          }
          findFirst: {
            args: Prisma.FormFieldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormFieldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormFieldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormFieldPayload>
          }
          findMany: {
            args: Prisma.FormFieldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormFieldPayload>[]
          }
          create: {
            args: Prisma.FormFieldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormFieldPayload>
          }
          createMany: {
            args: Prisma.FormFieldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormFieldCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormFieldPayload>[]
          }
          delete: {
            args: Prisma.FormFieldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormFieldPayload>
          }
          update: {
            args: Prisma.FormFieldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormFieldPayload>
          }
          deleteMany: {
            args: Prisma.FormFieldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormFieldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormFieldUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormFieldPayload>[]
          }
          upsert: {
            args: Prisma.FormFieldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormFieldPayload>
          }
          aggregate: {
            args: Prisma.FormFieldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormField>
          }
          groupBy: {
            args: Prisma.FormFieldGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormFieldGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormFieldCountArgs<ExtArgs>
            result: $Utils.Optional<FormFieldCountAggregateOutputType> | number
          }
        }
      }
      DocumentConfiguration: {
        payload: Prisma.$DocumentConfigurationPayload<ExtArgs>
        fields: Prisma.DocumentConfigurationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentConfigurationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentConfigurationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentConfigurationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentConfigurationPayload>
          }
          findFirst: {
            args: Prisma.DocumentConfigurationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentConfigurationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentConfigurationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentConfigurationPayload>
          }
          findMany: {
            args: Prisma.DocumentConfigurationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentConfigurationPayload>[]
          }
          create: {
            args: Prisma.DocumentConfigurationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentConfigurationPayload>
          }
          createMany: {
            args: Prisma.DocumentConfigurationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentConfigurationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentConfigurationPayload>[]
          }
          delete: {
            args: Prisma.DocumentConfigurationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentConfigurationPayload>
          }
          update: {
            args: Prisma.DocumentConfigurationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentConfigurationPayload>
          }
          deleteMany: {
            args: Prisma.DocumentConfigurationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentConfigurationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentConfigurationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentConfigurationPayload>[]
          }
          upsert: {
            args: Prisma.DocumentConfigurationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentConfigurationPayload>
          }
          aggregate: {
            args: Prisma.DocumentConfigurationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentConfiguration>
          }
          groupBy: {
            args: Prisma.DocumentConfigurationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentConfigurationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentConfigurationCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentConfigurationCountAggregateOutputType> | number
          }
        }
      }
      Region: {
        payload: Prisma.$RegionPayload<ExtArgs>
        fields: Prisma.RegionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findFirst: {
            args: Prisma.RegionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findMany: {
            args: Prisma.RegionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          create: {
            args: Prisma.RegionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          createMany: {
            args: Prisma.RegionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          delete: {
            args: Prisma.RegionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          update: {
            args: Prisma.RegionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          deleteMany: {
            args: Prisma.RegionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          upsert: {
            args: Prisma.RegionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          aggregate: {
            args: Prisma.RegionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegion>
          }
          groupBy: {
            args: Prisma.RegionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegionCountArgs<ExtArgs>
            result: $Utils.Optional<RegionCountAggregateOutputType> | number
          }
        }
      }
      document_fields: {
        payload: Prisma.$document_fieldsPayload<ExtArgs>
        fields: Prisma.document_fieldsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.document_fieldsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_fieldsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.document_fieldsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_fieldsPayload>
          }
          findFirst: {
            args: Prisma.document_fieldsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_fieldsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.document_fieldsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_fieldsPayload>
          }
          findMany: {
            args: Prisma.document_fieldsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_fieldsPayload>[]
          }
          create: {
            args: Prisma.document_fieldsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_fieldsPayload>
          }
          createMany: {
            args: Prisma.document_fieldsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.document_fieldsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_fieldsPayload>[]
          }
          delete: {
            args: Prisma.document_fieldsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_fieldsPayload>
          }
          update: {
            args: Prisma.document_fieldsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_fieldsPayload>
          }
          deleteMany: {
            args: Prisma.document_fieldsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.document_fieldsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.document_fieldsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_fieldsPayload>[]
          }
          upsert: {
            args: Prisma.document_fieldsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$document_fieldsPayload>
          }
          aggregate: {
            args: Prisma.Document_fieldsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument_fields>
          }
          groupBy: {
            args: Prisma.document_fieldsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Document_fieldsGroupByOutputType>[]
          }
          count: {
            args: Prisma.document_fieldsCountArgs<ExtArgs>
            result: $Utils.Optional<Document_fieldsCountAggregateOutputType> | number
          }
        }
      }
      FormTemplate: {
        payload: Prisma.$FormTemplatePayload<ExtArgs>
        fields: Prisma.FormTemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FormTemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormTemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FormTemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormTemplatePayload>
          }
          findFirst: {
            args: Prisma.FormTemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormTemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FormTemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormTemplatePayload>
          }
          findMany: {
            args: Prisma.FormTemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormTemplatePayload>[]
          }
          create: {
            args: Prisma.FormTemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormTemplatePayload>
          }
          createMany: {
            args: Prisma.FormTemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FormTemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormTemplatePayload>[]
          }
          delete: {
            args: Prisma.FormTemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormTemplatePayload>
          }
          update: {
            args: Prisma.FormTemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormTemplatePayload>
          }
          deleteMany: {
            args: Prisma.FormTemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FormTemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FormTemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormTemplatePayload>[]
          }
          upsert: {
            args: Prisma.FormTemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FormTemplatePayload>
          }
          aggregate: {
            args: Prisma.FormTemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormTemplate>
          }
          groupBy: {
            args: Prisma.FormTemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormTemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.FormTemplateCountArgs<ExtArgs>
            result: $Utils.Optional<FormTemplateCountAggregateOutputType> | number
          }
        }
      }
      FieldOption: {
        payload: Prisma.$FieldOptionPayload<ExtArgs>
        fields: Prisma.FieldOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FieldOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FieldOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldOptionPayload>
          }
          findFirst: {
            args: Prisma.FieldOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FieldOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldOptionPayload>
          }
          findMany: {
            args: Prisma.FieldOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldOptionPayload>[]
          }
          create: {
            args: Prisma.FieldOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldOptionPayload>
          }
          createMany: {
            args: Prisma.FieldOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FieldOptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldOptionPayload>[]
          }
          delete: {
            args: Prisma.FieldOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldOptionPayload>
          }
          update: {
            args: Prisma.FieldOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldOptionPayload>
          }
          deleteMany: {
            args: Prisma.FieldOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FieldOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FieldOptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldOptionPayload>[]
          }
          upsert: {
            args: Prisma.FieldOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldOptionPayload>
          }
          aggregate: {
            args: Prisma.FieldOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFieldOption>
          }
          groupBy: {
            args: Prisma.FieldOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<FieldOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.FieldOptionCountArgs<ExtArgs>
            result: $Utils.Optional<FieldOptionCountAggregateOutputType> | number
          }
        }
      }
      DocumentTypeLocation: {
        payload: Prisma.$DocumentTypeLocationPayload<ExtArgs>
        fields: Prisma.DocumentTypeLocationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentTypeLocationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypeLocationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentTypeLocationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypeLocationPayload>
          }
          findFirst: {
            args: Prisma.DocumentTypeLocationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypeLocationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentTypeLocationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypeLocationPayload>
          }
          findMany: {
            args: Prisma.DocumentTypeLocationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypeLocationPayload>[]
          }
          create: {
            args: Prisma.DocumentTypeLocationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypeLocationPayload>
          }
          createMany: {
            args: Prisma.DocumentTypeLocationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentTypeLocationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypeLocationPayload>[]
          }
          delete: {
            args: Prisma.DocumentTypeLocationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypeLocationPayload>
          }
          update: {
            args: Prisma.DocumentTypeLocationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypeLocationPayload>
          }
          deleteMany: {
            args: Prisma.DocumentTypeLocationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentTypeLocationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentTypeLocationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypeLocationPayload>[]
          }
          upsert: {
            args: Prisma.DocumentTypeLocationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentTypeLocationPayload>
          }
          aggregate: {
            args: Prisma.DocumentTypeLocationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentTypeLocation>
          }
          groupBy: {
            args: Prisma.DocumentTypeLocationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentTypeLocationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentTypeLocationCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentTypeLocationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    documentType?: DocumentTypeOmit
    documentTitle?: DocumentTitleOmit
    formField?: FormFieldOmit
    documentConfiguration?: DocumentConfigurationOmit
    region?: RegionOmit
    document_fields?: document_fieldsOmit
    formTemplate?: FormTemplateOmit
    fieldOption?: FieldOptionOmit
    documentTypeLocation?: DocumentTypeLocationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type DocumentTypeCountOutputType
   */

  export type DocumentTypeCountOutputType = {
    documentTitles: number
    documentConfigurations: number
    document_fields: number
    locations: number
  }

  export type DocumentTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentTitles?: boolean | DocumentTypeCountOutputTypeCountDocumentTitlesArgs
    documentConfigurations?: boolean | DocumentTypeCountOutputTypeCountDocumentConfigurationsArgs
    document_fields?: boolean | DocumentTypeCountOutputTypeCountDocument_fieldsArgs
    locations?: boolean | DocumentTypeCountOutputTypeCountLocationsArgs
  }

  // Custom InputTypes
  /**
   * DocumentTypeCountOutputType without action
   */
  export type DocumentTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTypeCountOutputType
     */
    select?: DocumentTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocumentTypeCountOutputType without action
   */
  export type DocumentTypeCountOutputTypeCountDocumentTitlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentTitleWhereInput
  }

  /**
   * DocumentTypeCountOutputType without action
   */
  export type DocumentTypeCountOutputTypeCountDocumentConfigurationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentConfigurationWhereInput
  }

  /**
   * DocumentTypeCountOutputType without action
   */
  export type DocumentTypeCountOutputTypeCountDocument_fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: document_fieldsWhereInput
  }

  /**
   * DocumentTypeCountOutputType without action
   */
  export type DocumentTypeCountOutputTypeCountLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentTypeLocationWhereInput
  }


  /**
   * Count Type DocumentTitleCountOutputType
   */

  export type DocumentTitleCountOutputType = {
    documentConfigurations: number
    document_fields: number
  }

  export type DocumentTitleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentConfigurations?: boolean | DocumentTitleCountOutputTypeCountDocumentConfigurationsArgs
    document_fields?: boolean | DocumentTitleCountOutputTypeCountDocument_fieldsArgs
  }

  // Custom InputTypes
  /**
   * DocumentTitleCountOutputType without action
   */
  export type DocumentTitleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTitleCountOutputType
     */
    select?: DocumentTitleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocumentTitleCountOutputType without action
   */
  export type DocumentTitleCountOutputTypeCountDocumentConfigurationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentConfigurationWhereInput
  }

  /**
   * DocumentTitleCountOutputType without action
   */
  export type DocumentTitleCountOutputTypeCountDocument_fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: document_fieldsWhereInput
  }


  /**
   * Count Type FormFieldCountOutputType
   */

  export type FormFieldCountOutputType = {
    field_options: number
  }

  export type FormFieldCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    field_options?: boolean | FormFieldCountOutputTypeCountField_optionsArgs
  }

  // Custom InputTypes
  /**
   * FormFieldCountOutputType without action
   */
  export type FormFieldCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormFieldCountOutputType
     */
    select?: FormFieldCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormFieldCountOutputType without action
   */
  export type FormFieldCountOutputTypeCountField_optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FieldOptionWhereInput
  }


  /**
   * Count Type RegionCountOutputType
   */

  export type RegionCountOutputType = {
    documentConfigurations: number
  }

  export type RegionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentConfigurations?: boolean | RegionCountOutputTypeCountDocumentConfigurationsArgs
  }

  // Custom InputTypes
  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionCountOutputType
     */
    select?: RegionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeCountDocumentConfigurationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentConfigurationWhereInput
  }


  /**
   * Count Type FormTemplateCountOutputType
   */

  export type FormTemplateCountOutputType = {
    form_fields: number
    document_types: number
  }

  export type FormTemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form_fields?: boolean | FormTemplateCountOutputTypeCountForm_fieldsArgs
    document_types?: boolean | FormTemplateCountOutputTypeCountDocument_typesArgs
  }

  // Custom InputTypes
  /**
   * FormTemplateCountOutputType without action
   */
  export type FormTemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormTemplateCountOutputType
     */
    select?: FormTemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FormTemplateCountOutputType without action
   */
  export type FormTemplateCountOutputTypeCountForm_fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormFieldWhereInput
  }

  /**
   * FormTemplateCountOutputType without action
   */
  export type FormTemplateCountOutputTypeCountDocument_typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentTypeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model DocumentType
   */

  export type AggregateDocumentType = {
    _count: DocumentTypeCountAggregateOutputType | null
    _avg: DocumentTypeAvgAggregateOutputType | null
    _sum: DocumentTypeSumAggregateOutputType | null
    _min: DocumentTypeMinAggregateOutputType | null
    _max: DocumentTypeMaxAggregateOutputType | null
  }

  export type DocumentTypeAvgAggregateOutputType = {
    id: number | null
    form_template_id: number | null
  }

  export type DocumentTypeSumAggregateOutputType = {
    id: number | null
    form_template_id: number | null
  }

  export type DocumentTypeMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    description: string | null
    formId: string | null
    hideHeader: boolean | null
    showFormButtons: boolean | null
    parent_type_id: string | null
    parent_name: string | null
    child_type_id: string | null
    child_name: string | null
    form_template_id: number | null
  }

  export type DocumentTypeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    description: string | null
    formId: string | null
    hideHeader: boolean | null
    showFormButtons: boolean | null
    parent_type_id: string | null
    parent_name: string | null
    child_type_id: string | null
    child_name: string | null
    form_template_id: number | null
  }

  export type DocumentTypeCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    description: number
    formId: number
    hideHeader: number
    showFormButtons: number
    parent_type_id: number
    parent_name: number
    child_type_id: number
    child_name: number
    form_template_id: number
    _all: number
  }


  export type DocumentTypeAvgAggregateInputType = {
    id?: true
    form_template_id?: true
  }

  export type DocumentTypeSumAggregateInputType = {
    id?: true
    form_template_id?: true
  }

  export type DocumentTypeMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    description?: true
    formId?: true
    hideHeader?: true
    showFormButtons?: true
    parent_type_id?: true
    parent_name?: true
    child_type_id?: true
    child_name?: true
    form_template_id?: true
  }

  export type DocumentTypeMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    description?: true
    formId?: true
    hideHeader?: true
    showFormButtons?: true
    parent_type_id?: true
    parent_name?: true
    child_type_id?: true
    child_name?: true
    form_template_id?: true
  }

  export type DocumentTypeCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    description?: true
    formId?: true
    hideHeader?: true
    showFormButtons?: true
    parent_type_id?: true
    parent_name?: true
    child_type_id?: true
    child_name?: true
    form_template_id?: true
    _all?: true
  }

  export type DocumentTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentType to aggregate.
     */
    where?: DocumentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentTypes to fetch.
     */
    orderBy?: DocumentTypeOrderByWithRelationInput | DocumentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentTypes
    **/
    _count?: true | DocumentTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentTypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentTypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentTypeMaxAggregateInputType
  }

  export type GetDocumentTypeAggregateType<T extends DocumentTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentType[P]>
      : GetScalarType<T[P], AggregateDocumentType[P]>
  }




  export type DocumentTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentTypeWhereInput
    orderBy?: DocumentTypeOrderByWithAggregationInput | DocumentTypeOrderByWithAggregationInput[]
    by: DocumentTypeScalarFieldEnum[] | DocumentTypeScalarFieldEnum
    having?: DocumentTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentTypeCountAggregateInputType | true
    _avg?: DocumentTypeAvgAggregateInputType
    _sum?: DocumentTypeSumAggregateInputType
    _min?: DocumentTypeMinAggregateInputType
    _max?: DocumentTypeMaxAggregateInputType
  }

  export type DocumentTypeGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    description: string | null
    formId: string | null
    hideHeader: boolean
    showFormButtons: boolean
    parent_type_id: string | null
    parent_name: string | null
    child_type_id: string | null
    child_name: string | null
    form_template_id: number | null
    _count: DocumentTypeCountAggregateOutputType | null
    _avg: DocumentTypeAvgAggregateOutputType | null
    _sum: DocumentTypeSumAggregateOutputType | null
    _min: DocumentTypeMinAggregateOutputType | null
    _max: DocumentTypeMaxAggregateOutputType | null
  }

  type GetDocumentTypeGroupByPayload<T extends DocumentTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentTypeGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentTypeGroupByOutputType[P]>
        }
      >
    >


  export type DocumentTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
    formId?: boolean
    hideHeader?: boolean
    showFormButtons?: boolean
    parent_type_id?: boolean
    parent_name?: boolean
    child_type_id?: boolean
    child_name?: boolean
    form_template_id?: boolean
    documentTitles?: boolean | DocumentType$documentTitlesArgs<ExtArgs>
    documentConfigurations?: boolean | DocumentType$documentConfigurationsArgs<ExtArgs>
    document_fields?: boolean | DocumentType$document_fieldsArgs<ExtArgs>
    form_template?: boolean | DocumentType$form_templateArgs<ExtArgs>
    locations?: boolean | DocumentType$locationsArgs<ExtArgs>
    _count?: boolean | DocumentTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentType"]>

  export type DocumentTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
    formId?: boolean
    hideHeader?: boolean
    showFormButtons?: boolean
    parent_type_id?: boolean
    parent_name?: boolean
    child_type_id?: boolean
    child_name?: boolean
    form_template_id?: boolean
    form_template?: boolean | DocumentType$form_templateArgs<ExtArgs>
  }, ExtArgs["result"]["documentType"]>

  export type DocumentTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
    formId?: boolean
    hideHeader?: boolean
    showFormButtons?: boolean
    parent_type_id?: boolean
    parent_name?: boolean
    child_type_id?: boolean
    child_name?: boolean
    form_template_id?: boolean
    form_template?: boolean | DocumentType$form_templateArgs<ExtArgs>
  }, ExtArgs["result"]["documentType"]>

  export type DocumentTypeSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
    formId?: boolean
    hideHeader?: boolean
    showFormButtons?: boolean
    parent_type_id?: boolean
    parent_name?: boolean
    child_type_id?: boolean
    child_name?: boolean
    form_template_id?: boolean
  }

  export type DocumentTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "description" | "formId" | "hideHeader" | "showFormButtons" | "parent_type_id" | "parent_name" | "child_type_id" | "child_name" | "form_template_id", ExtArgs["result"]["documentType"]>
  export type DocumentTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentTitles?: boolean | DocumentType$documentTitlesArgs<ExtArgs>
    documentConfigurations?: boolean | DocumentType$documentConfigurationsArgs<ExtArgs>
    document_fields?: boolean | DocumentType$document_fieldsArgs<ExtArgs>
    form_template?: boolean | DocumentType$form_templateArgs<ExtArgs>
    locations?: boolean | DocumentType$locationsArgs<ExtArgs>
    _count?: boolean | DocumentTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DocumentTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form_template?: boolean | DocumentType$form_templateArgs<ExtArgs>
  }
  export type DocumentTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form_template?: boolean | DocumentType$form_templateArgs<ExtArgs>
  }

  export type $DocumentTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentType"
    objects: {
      documentTitles: Prisma.$DocumentTitlePayload<ExtArgs>[]
      documentConfigurations: Prisma.$DocumentConfigurationPayload<ExtArgs>[]
      document_fields: Prisma.$document_fieldsPayload<ExtArgs>[]
      form_template: Prisma.$FormTemplatePayload<ExtArgs> | null
      locations: Prisma.$DocumentTypeLocationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
      description: string | null
      formId: string | null
      hideHeader: boolean
      showFormButtons: boolean
      parent_type_id: string | null
      parent_name: string | null
      child_type_id: string | null
      child_name: string | null
      form_template_id: number | null
    }, ExtArgs["result"]["documentType"]>
    composites: {}
  }

  type DocumentTypeGetPayload<S extends boolean | null | undefined | DocumentTypeDefaultArgs> = $Result.GetResult<Prisma.$DocumentTypePayload, S>

  type DocumentTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentTypeCountAggregateInputType | true
    }

  export interface DocumentTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentType'], meta: { name: 'DocumentType' } }
    /**
     * Find zero or one DocumentType that matches the filter.
     * @param {DocumentTypeFindUniqueArgs} args - Arguments to find a DocumentType
     * @example
     * // Get one DocumentType
     * const documentType = await prisma.documentType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentTypeFindUniqueArgs>(args: SelectSubset<T, DocumentTypeFindUniqueArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentTypeFindUniqueOrThrowArgs} args - Arguments to find a DocumentType
     * @example
     * // Get one DocumentType
     * const documentType = await prisma.documentType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeFindFirstArgs} args - Arguments to find a DocumentType
     * @example
     * // Get one DocumentType
     * const documentType = await prisma.documentType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentTypeFindFirstArgs>(args?: SelectSubset<T, DocumentTypeFindFirstArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeFindFirstOrThrowArgs} args - Arguments to find a DocumentType
     * @example
     * // Get one DocumentType
     * const documentType = await prisma.documentType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentTypes
     * const documentTypes = await prisma.documentType.findMany()
     * 
     * // Get first 10 DocumentTypes
     * const documentTypes = await prisma.documentType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentTypeWithIdOnly = await prisma.documentType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentTypeFindManyArgs>(args?: SelectSubset<T, DocumentTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentType.
     * @param {DocumentTypeCreateArgs} args - Arguments to create a DocumentType.
     * @example
     * // Create one DocumentType
     * const DocumentType = await prisma.documentType.create({
     *   data: {
     *     // ... data to create a DocumentType
     *   }
     * })
     * 
     */
    create<T extends DocumentTypeCreateArgs>(args: SelectSubset<T, DocumentTypeCreateArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentTypes.
     * @param {DocumentTypeCreateManyArgs} args - Arguments to create many DocumentTypes.
     * @example
     * // Create many DocumentTypes
     * const documentType = await prisma.documentType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentTypeCreateManyArgs>(args?: SelectSubset<T, DocumentTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentTypes and returns the data saved in the database.
     * @param {DocumentTypeCreateManyAndReturnArgs} args - Arguments to create many DocumentTypes.
     * @example
     * // Create many DocumentTypes
     * const documentType = await prisma.documentType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentTypes and only return the `id`
     * const documentTypeWithIdOnly = await prisma.documentType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocumentType.
     * @param {DocumentTypeDeleteArgs} args - Arguments to delete one DocumentType.
     * @example
     * // Delete one DocumentType
     * const DocumentType = await prisma.documentType.delete({
     *   where: {
     *     // ... filter to delete one DocumentType
     *   }
     * })
     * 
     */
    delete<T extends DocumentTypeDeleteArgs>(args: SelectSubset<T, DocumentTypeDeleteArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentType.
     * @param {DocumentTypeUpdateArgs} args - Arguments to update one DocumentType.
     * @example
     * // Update one DocumentType
     * const documentType = await prisma.documentType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentTypeUpdateArgs>(args: SelectSubset<T, DocumentTypeUpdateArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentTypes.
     * @param {DocumentTypeDeleteManyArgs} args - Arguments to filter DocumentTypes to delete.
     * @example
     * // Delete a few DocumentTypes
     * const { count } = await prisma.documentType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentTypeDeleteManyArgs>(args?: SelectSubset<T, DocumentTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentTypes
     * const documentType = await prisma.documentType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentTypeUpdateManyArgs>(args: SelectSubset<T, DocumentTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentTypes and returns the data updated in the database.
     * @param {DocumentTypeUpdateManyAndReturnArgs} args - Arguments to update many DocumentTypes.
     * @example
     * // Update many DocumentTypes
     * const documentType = await prisma.documentType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocumentTypes and only return the `id`
     * const documentTypeWithIdOnly = await prisma.documentType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocumentType.
     * @param {DocumentTypeUpsertArgs} args - Arguments to update or create a DocumentType.
     * @example
     * // Update or create a DocumentType
     * const documentType = await prisma.documentType.upsert({
     *   create: {
     *     // ... data to create a DocumentType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentType we want to update
     *   }
     * })
     */
    upsert<T extends DocumentTypeUpsertArgs>(args: SelectSubset<T, DocumentTypeUpsertArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeCountArgs} args - Arguments to filter DocumentTypes to count.
     * @example
     * // Count the number of DocumentTypes
     * const count = await prisma.documentType.count({
     *   where: {
     *     // ... the filter for the DocumentTypes we want to count
     *   }
     * })
    **/
    count<T extends DocumentTypeCountArgs>(
      args?: Subset<T, DocumentTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentTypeAggregateArgs>(args: Subset<T, DocumentTypeAggregateArgs>): Prisma.PrismaPromise<GetDocumentTypeAggregateType<T>>

    /**
     * Group by DocumentType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentTypeGroupByArgs['orderBy'] }
        : { orderBy?: DocumentTypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentType model
   */
  readonly fields: DocumentTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documentTitles<T extends DocumentType$documentTitlesArgs<ExtArgs> = {}>(args?: Subset<T, DocumentType$documentTitlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentTitlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documentConfigurations<T extends DocumentType$documentConfigurationsArgs<ExtArgs> = {}>(args?: Subset<T, DocumentType$documentConfigurationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentConfigurationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    document_fields<T extends DocumentType$document_fieldsArgs<ExtArgs> = {}>(args?: Subset<T, DocumentType$document_fieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$document_fieldsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    form_template<T extends DocumentType$form_templateArgs<ExtArgs> = {}>(args?: Subset<T, DocumentType$form_templateArgs<ExtArgs>>): Prisma__FormTemplateClient<$Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    locations<T extends DocumentType$locationsArgs<ExtArgs> = {}>(args?: Subset<T, DocumentType$locationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentTypeLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DocumentType model
   */
  interface DocumentTypeFieldRefs {
    readonly id: FieldRef<"DocumentType", 'Int'>
    readonly name: FieldRef<"DocumentType", 'String'>
    readonly createdAt: FieldRef<"DocumentType", 'DateTime'>
    readonly updatedAt: FieldRef<"DocumentType", 'DateTime'>
    readonly description: FieldRef<"DocumentType", 'String'>
    readonly formId: FieldRef<"DocumentType", 'String'>
    readonly hideHeader: FieldRef<"DocumentType", 'Boolean'>
    readonly showFormButtons: FieldRef<"DocumentType", 'Boolean'>
    readonly parent_type_id: FieldRef<"DocumentType", 'String'>
    readonly parent_name: FieldRef<"DocumentType", 'String'>
    readonly child_type_id: FieldRef<"DocumentType", 'String'>
    readonly child_name: FieldRef<"DocumentType", 'String'>
    readonly form_template_id: FieldRef<"DocumentType", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DocumentType findUnique
   */
  export type DocumentTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * Filter, which DocumentType to fetch.
     */
    where: DocumentTypeWhereUniqueInput
  }

  /**
   * DocumentType findUniqueOrThrow
   */
  export type DocumentTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * Filter, which DocumentType to fetch.
     */
    where: DocumentTypeWhereUniqueInput
  }

  /**
   * DocumentType findFirst
   */
  export type DocumentTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * Filter, which DocumentType to fetch.
     */
    where?: DocumentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentTypes to fetch.
     */
    orderBy?: DocumentTypeOrderByWithRelationInput | DocumentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentTypes.
     */
    cursor?: DocumentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentTypes.
     */
    distinct?: DocumentTypeScalarFieldEnum | DocumentTypeScalarFieldEnum[]
  }

  /**
   * DocumentType findFirstOrThrow
   */
  export type DocumentTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * Filter, which DocumentType to fetch.
     */
    where?: DocumentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentTypes to fetch.
     */
    orderBy?: DocumentTypeOrderByWithRelationInput | DocumentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentTypes.
     */
    cursor?: DocumentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentTypes.
     */
    distinct?: DocumentTypeScalarFieldEnum | DocumentTypeScalarFieldEnum[]
  }

  /**
   * DocumentType findMany
   */
  export type DocumentTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * Filter, which DocumentTypes to fetch.
     */
    where?: DocumentTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentTypes to fetch.
     */
    orderBy?: DocumentTypeOrderByWithRelationInput | DocumentTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentTypes.
     */
    cursor?: DocumentTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentTypes.
     */
    skip?: number
    distinct?: DocumentTypeScalarFieldEnum | DocumentTypeScalarFieldEnum[]
  }

  /**
   * DocumentType create
   */
  export type DocumentTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentType.
     */
    data: XOR<DocumentTypeCreateInput, DocumentTypeUncheckedCreateInput>
  }

  /**
   * DocumentType createMany
   */
  export type DocumentTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentTypes.
     */
    data: DocumentTypeCreateManyInput | DocumentTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentType createManyAndReturn
   */
  export type DocumentTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * The data used to create many DocumentTypes.
     */
    data: DocumentTypeCreateManyInput | DocumentTypeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentType update
   */
  export type DocumentTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentType.
     */
    data: XOR<DocumentTypeUpdateInput, DocumentTypeUncheckedUpdateInput>
    /**
     * Choose, which DocumentType to update.
     */
    where: DocumentTypeWhereUniqueInput
  }

  /**
   * DocumentType updateMany
   */
  export type DocumentTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentTypes.
     */
    data: XOR<DocumentTypeUpdateManyMutationInput, DocumentTypeUncheckedUpdateManyInput>
    /**
     * Filter which DocumentTypes to update
     */
    where?: DocumentTypeWhereInput
    /**
     * Limit how many DocumentTypes to update.
     */
    limit?: number
  }

  /**
   * DocumentType updateManyAndReturn
   */
  export type DocumentTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * The data used to update DocumentTypes.
     */
    data: XOR<DocumentTypeUpdateManyMutationInput, DocumentTypeUncheckedUpdateManyInput>
    /**
     * Filter which DocumentTypes to update
     */
    where?: DocumentTypeWhereInput
    /**
     * Limit how many DocumentTypes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentType upsert
   */
  export type DocumentTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentType to update in case it exists.
     */
    where: DocumentTypeWhereUniqueInput
    /**
     * In case the DocumentType found by the `where` argument doesn't exist, create a new DocumentType with this data.
     */
    create: XOR<DocumentTypeCreateInput, DocumentTypeUncheckedCreateInput>
    /**
     * In case the DocumentType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentTypeUpdateInput, DocumentTypeUncheckedUpdateInput>
  }

  /**
   * DocumentType delete
   */
  export type DocumentTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    /**
     * Filter which DocumentType to delete.
     */
    where: DocumentTypeWhereUniqueInput
  }

  /**
   * DocumentType deleteMany
   */
  export type DocumentTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentTypes to delete
     */
    where?: DocumentTypeWhereInput
    /**
     * Limit how many DocumentTypes to delete.
     */
    limit?: number
  }

  /**
   * DocumentType.documentTitles
   */
  export type DocumentType$documentTitlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTitle
     */
    select?: DocumentTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTitle
     */
    omit?: DocumentTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTitleInclude<ExtArgs> | null
    where?: DocumentTitleWhereInput
    orderBy?: DocumentTitleOrderByWithRelationInput | DocumentTitleOrderByWithRelationInput[]
    cursor?: DocumentTitleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentTitleScalarFieldEnum | DocumentTitleScalarFieldEnum[]
  }

  /**
   * DocumentType.documentConfigurations
   */
  export type DocumentType$documentConfigurationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentConfiguration
     */
    select?: DocumentConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentConfiguration
     */
    omit?: DocumentConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentConfigurationInclude<ExtArgs> | null
    where?: DocumentConfigurationWhereInput
    orderBy?: DocumentConfigurationOrderByWithRelationInput | DocumentConfigurationOrderByWithRelationInput[]
    cursor?: DocumentConfigurationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentConfigurationScalarFieldEnum | DocumentConfigurationScalarFieldEnum[]
  }

  /**
   * DocumentType.document_fields
   */
  export type DocumentType$document_fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_fields
     */
    select?: document_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_fields
     */
    omit?: document_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_fieldsInclude<ExtArgs> | null
    where?: document_fieldsWhereInput
    orderBy?: document_fieldsOrderByWithRelationInput | document_fieldsOrderByWithRelationInput[]
    cursor?: document_fieldsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Document_fieldsScalarFieldEnum | Document_fieldsScalarFieldEnum[]
  }

  /**
   * DocumentType.form_template
   */
  export type DocumentType$form_templateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormTemplate
     */
    select?: FormTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormTemplate
     */
    omit?: FormTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormTemplateInclude<ExtArgs> | null
    where?: FormTemplateWhereInput
  }

  /**
   * DocumentType.locations
   */
  export type DocumentType$locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTypeLocation
     */
    select?: DocumentTypeLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTypeLocation
     */
    omit?: DocumentTypeLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeLocationInclude<ExtArgs> | null
    where?: DocumentTypeLocationWhereInput
    orderBy?: DocumentTypeLocationOrderByWithRelationInput | DocumentTypeLocationOrderByWithRelationInput[]
    cursor?: DocumentTypeLocationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentTypeLocationScalarFieldEnum | DocumentTypeLocationScalarFieldEnum[]
  }

  /**
   * DocumentType without action
   */
  export type DocumentTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
  }


  /**
   * Model DocumentTitle
   */

  export type AggregateDocumentTitle = {
    _count: DocumentTitleCountAggregateOutputType | null
    _avg: DocumentTitleAvgAggregateOutputType | null
    _sum: DocumentTitleSumAggregateOutputType | null
    _min: DocumentTitleMinAggregateOutputType | null
    _max: DocumentTitleMaxAggregateOutputType | null
  }

  export type DocumentTitleAvgAggregateOutputType = {
    id: number | null
    document_type_id: number | null
  }

  export type DocumentTitleSumAggregateOutputType = {
    id: number | null
    document_type_id: number | null
  }

  export type DocumentTitleMinAggregateOutputType = {
    id: number | null
    title: string | null
    created_at: Date | null
    updated_at: Date | null
    shareable: boolean | null
    document_type_id: number | null
    is_display: boolean | null
    require_number: boolean | null
    require_valid_date: boolean | null
    require_expire_date: boolean | null
    require_doc_data: boolean | null
    doc_data_name: string | null
    require_attachment_front: boolean | null
    require_attachment_back: boolean | null
    description: string | null
    form_description: string | null
    form_title: string | null
  }

  export type DocumentTitleMaxAggregateOutputType = {
    id: number | null
    title: string | null
    created_at: Date | null
    updated_at: Date | null
    shareable: boolean | null
    document_type_id: number | null
    is_display: boolean | null
    require_number: boolean | null
    require_valid_date: boolean | null
    require_expire_date: boolean | null
    require_doc_data: boolean | null
    doc_data_name: string | null
    require_attachment_front: boolean | null
    require_attachment_back: boolean | null
    description: string | null
    form_description: string | null
    form_title: string | null
  }

  export type DocumentTitleCountAggregateOutputType = {
    id: number
    title: number
    created_at: number
    updated_at: number
    shareable: number
    document_type_id: number
    is_display: number
    require_number: number
    require_valid_date: number
    require_expire_date: number
    require_doc_data: number
    doc_data_options: number
    doc_data_name: number
    require_attachment_front: number
    require_attachment_back: number
    description: number
    form_description: number
    form_title: number
    _all: number
  }


  export type DocumentTitleAvgAggregateInputType = {
    id?: true
    document_type_id?: true
  }

  export type DocumentTitleSumAggregateInputType = {
    id?: true
    document_type_id?: true
  }

  export type DocumentTitleMinAggregateInputType = {
    id?: true
    title?: true
    created_at?: true
    updated_at?: true
    shareable?: true
    document_type_id?: true
    is_display?: true
    require_number?: true
    require_valid_date?: true
    require_expire_date?: true
    require_doc_data?: true
    doc_data_name?: true
    require_attachment_front?: true
    require_attachment_back?: true
    description?: true
    form_description?: true
    form_title?: true
  }

  export type DocumentTitleMaxAggregateInputType = {
    id?: true
    title?: true
    created_at?: true
    updated_at?: true
    shareable?: true
    document_type_id?: true
    is_display?: true
    require_number?: true
    require_valid_date?: true
    require_expire_date?: true
    require_doc_data?: true
    doc_data_name?: true
    require_attachment_front?: true
    require_attachment_back?: true
    description?: true
    form_description?: true
    form_title?: true
  }

  export type DocumentTitleCountAggregateInputType = {
    id?: true
    title?: true
    created_at?: true
    updated_at?: true
    shareable?: true
    document_type_id?: true
    is_display?: true
    require_number?: true
    require_valid_date?: true
    require_expire_date?: true
    require_doc_data?: true
    doc_data_options?: true
    doc_data_name?: true
    require_attachment_front?: true
    require_attachment_back?: true
    description?: true
    form_description?: true
    form_title?: true
    _all?: true
  }

  export type DocumentTitleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentTitle to aggregate.
     */
    where?: DocumentTitleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentTitles to fetch.
     */
    orderBy?: DocumentTitleOrderByWithRelationInput | DocumentTitleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentTitleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentTitles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentTitles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentTitles
    **/
    _count?: true | DocumentTitleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentTitleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentTitleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentTitleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentTitleMaxAggregateInputType
  }

  export type GetDocumentTitleAggregateType<T extends DocumentTitleAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentTitle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentTitle[P]>
      : GetScalarType<T[P], AggregateDocumentTitle[P]>
  }




  export type DocumentTitleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentTitleWhereInput
    orderBy?: DocumentTitleOrderByWithAggregationInput | DocumentTitleOrderByWithAggregationInput[]
    by: DocumentTitleScalarFieldEnum[] | DocumentTitleScalarFieldEnum
    having?: DocumentTitleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentTitleCountAggregateInputType | true
    _avg?: DocumentTitleAvgAggregateInputType
    _sum?: DocumentTitleSumAggregateInputType
    _min?: DocumentTitleMinAggregateInputType
    _max?: DocumentTitleMaxAggregateInputType
  }

  export type DocumentTitleGroupByOutputType = {
    id: number
    title: string
    created_at: Date
    updated_at: Date
    shareable: boolean
    document_type_id: number
    is_display: boolean
    require_number: boolean
    require_valid_date: boolean
    require_expire_date: boolean
    require_doc_data: boolean
    doc_data_options: JsonValue | null
    doc_data_name: string | null
    require_attachment_front: boolean
    require_attachment_back: boolean
    description: string | null
    form_description: string | null
    form_title: string | null
    _count: DocumentTitleCountAggregateOutputType | null
    _avg: DocumentTitleAvgAggregateOutputType | null
    _sum: DocumentTitleSumAggregateOutputType | null
    _min: DocumentTitleMinAggregateOutputType | null
    _max: DocumentTitleMaxAggregateOutputType | null
  }

  type GetDocumentTitleGroupByPayload<T extends DocumentTitleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentTitleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentTitleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentTitleGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentTitleGroupByOutputType[P]>
        }
      >
    >


  export type DocumentTitleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    created_at?: boolean
    updated_at?: boolean
    shareable?: boolean
    document_type_id?: boolean
    is_display?: boolean
    require_number?: boolean
    require_valid_date?: boolean
    require_expire_date?: boolean
    require_doc_data?: boolean
    doc_data_options?: boolean
    doc_data_name?: boolean
    require_attachment_front?: boolean
    require_attachment_back?: boolean
    description?: boolean
    form_description?: boolean
    form_title?: boolean
    document_types?: boolean | DocumentTypeDefaultArgs<ExtArgs>
    documentConfigurations?: boolean | DocumentTitle$documentConfigurationsArgs<ExtArgs>
    document_fields?: boolean | DocumentTitle$document_fieldsArgs<ExtArgs>
    _count?: boolean | DocumentTitleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentTitle"]>

  export type DocumentTitleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    created_at?: boolean
    updated_at?: boolean
    shareable?: boolean
    document_type_id?: boolean
    is_display?: boolean
    require_number?: boolean
    require_valid_date?: boolean
    require_expire_date?: boolean
    require_doc_data?: boolean
    doc_data_options?: boolean
    doc_data_name?: boolean
    require_attachment_front?: boolean
    require_attachment_back?: boolean
    description?: boolean
    form_description?: boolean
    form_title?: boolean
    document_types?: boolean | DocumentTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentTitle"]>

  export type DocumentTitleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    created_at?: boolean
    updated_at?: boolean
    shareable?: boolean
    document_type_id?: boolean
    is_display?: boolean
    require_number?: boolean
    require_valid_date?: boolean
    require_expire_date?: boolean
    require_doc_data?: boolean
    doc_data_options?: boolean
    doc_data_name?: boolean
    require_attachment_front?: boolean
    require_attachment_back?: boolean
    description?: boolean
    form_description?: boolean
    form_title?: boolean
    document_types?: boolean | DocumentTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentTitle"]>

  export type DocumentTitleSelectScalar = {
    id?: boolean
    title?: boolean
    created_at?: boolean
    updated_at?: boolean
    shareable?: boolean
    document_type_id?: boolean
    is_display?: boolean
    require_number?: boolean
    require_valid_date?: boolean
    require_expire_date?: boolean
    require_doc_data?: boolean
    doc_data_options?: boolean
    doc_data_name?: boolean
    require_attachment_front?: boolean
    require_attachment_back?: boolean
    description?: boolean
    form_description?: boolean
    form_title?: boolean
  }

  export type DocumentTitleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "created_at" | "updated_at" | "shareable" | "document_type_id" | "is_display" | "require_number" | "require_valid_date" | "require_expire_date" | "require_doc_data" | "doc_data_options" | "doc_data_name" | "require_attachment_front" | "require_attachment_back" | "description" | "form_description" | "form_title", ExtArgs["result"]["documentTitle"]>
  export type DocumentTitleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document_types?: boolean | DocumentTypeDefaultArgs<ExtArgs>
    documentConfigurations?: boolean | DocumentTitle$documentConfigurationsArgs<ExtArgs>
    document_fields?: boolean | DocumentTitle$document_fieldsArgs<ExtArgs>
    _count?: boolean | DocumentTitleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DocumentTitleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document_types?: boolean | DocumentTypeDefaultArgs<ExtArgs>
  }
  export type DocumentTitleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document_types?: boolean | DocumentTypeDefaultArgs<ExtArgs>
  }

  export type $DocumentTitlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentTitle"
    objects: {
      document_types: Prisma.$DocumentTypePayload<ExtArgs>
      documentConfigurations: Prisma.$DocumentConfigurationPayload<ExtArgs>[]
      document_fields: Prisma.$document_fieldsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      created_at: Date
      updated_at: Date
      shareable: boolean
      document_type_id: number
      is_display: boolean
      require_number: boolean
      require_valid_date: boolean
      require_expire_date: boolean
      require_doc_data: boolean
      doc_data_options: Prisma.JsonValue | null
      doc_data_name: string | null
      require_attachment_front: boolean
      require_attachment_back: boolean
      description: string | null
      form_description: string | null
      form_title: string | null
    }, ExtArgs["result"]["documentTitle"]>
    composites: {}
  }

  type DocumentTitleGetPayload<S extends boolean | null | undefined | DocumentTitleDefaultArgs> = $Result.GetResult<Prisma.$DocumentTitlePayload, S>

  type DocumentTitleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentTitleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentTitleCountAggregateInputType | true
    }

  export interface DocumentTitleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentTitle'], meta: { name: 'DocumentTitle' } }
    /**
     * Find zero or one DocumentTitle that matches the filter.
     * @param {DocumentTitleFindUniqueArgs} args - Arguments to find a DocumentTitle
     * @example
     * // Get one DocumentTitle
     * const documentTitle = await prisma.documentTitle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentTitleFindUniqueArgs>(args: SelectSubset<T, DocumentTitleFindUniqueArgs<ExtArgs>>): Prisma__DocumentTitleClient<$Result.GetResult<Prisma.$DocumentTitlePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentTitle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentTitleFindUniqueOrThrowArgs} args - Arguments to find a DocumentTitle
     * @example
     * // Get one DocumentTitle
     * const documentTitle = await prisma.documentTitle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentTitleFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentTitleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentTitleClient<$Result.GetResult<Prisma.$DocumentTitlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentTitle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTitleFindFirstArgs} args - Arguments to find a DocumentTitle
     * @example
     * // Get one DocumentTitle
     * const documentTitle = await prisma.documentTitle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentTitleFindFirstArgs>(args?: SelectSubset<T, DocumentTitleFindFirstArgs<ExtArgs>>): Prisma__DocumentTitleClient<$Result.GetResult<Prisma.$DocumentTitlePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentTitle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTitleFindFirstOrThrowArgs} args - Arguments to find a DocumentTitle
     * @example
     * // Get one DocumentTitle
     * const documentTitle = await prisma.documentTitle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentTitleFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentTitleFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentTitleClient<$Result.GetResult<Prisma.$DocumentTitlePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentTitles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTitleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentTitles
     * const documentTitles = await prisma.documentTitle.findMany()
     * 
     * // Get first 10 DocumentTitles
     * const documentTitles = await prisma.documentTitle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentTitleWithIdOnly = await prisma.documentTitle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentTitleFindManyArgs>(args?: SelectSubset<T, DocumentTitleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentTitlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentTitle.
     * @param {DocumentTitleCreateArgs} args - Arguments to create a DocumentTitle.
     * @example
     * // Create one DocumentTitle
     * const DocumentTitle = await prisma.documentTitle.create({
     *   data: {
     *     // ... data to create a DocumentTitle
     *   }
     * })
     * 
     */
    create<T extends DocumentTitleCreateArgs>(args: SelectSubset<T, DocumentTitleCreateArgs<ExtArgs>>): Prisma__DocumentTitleClient<$Result.GetResult<Prisma.$DocumentTitlePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentTitles.
     * @param {DocumentTitleCreateManyArgs} args - Arguments to create many DocumentTitles.
     * @example
     * // Create many DocumentTitles
     * const documentTitle = await prisma.documentTitle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentTitleCreateManyArgs>(args?: SelectSubset<T, DocumentTitleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentTitles and returns the data saved in the database.
     * @param {DocumentTitleCreateManyAndReturnArgs} args - Arguments to create many DocumentTitles.
     * @example
     * // Create many DocumentTitles
     * const documentTitle = await prisma.documentTitle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentTitles and only return the `id`
     * const documentTitleWithIdOnly = await prisma.documentTitle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentTitleCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentTitleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentTitlePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocumentTitle.
     * @param {DocumentTitleDeleteArgs} args - Arguments to delete one DocumentTitle.
     * @example
     * // Delete one DocumentTitle
     * const DocumentTitle = await prisma.documentTitle.delete({
     *   where: {
     *     // ... filter to delete one DocumentTitle
     *   }
     * })
     * 
     */
    delete<T extends DocumentTitleDeleteArgs>(args: SelectSubset<T, DocumentTitleDeleteArgs<ExtArgs>>): Prisma__DocumentTitleClient<$Result.GetResult<Prisma.$DocumentTitlePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentTitle.
     * @param {DocumentTitleUpdateArgs} args - Arguments to update one DocumentTitle.
     * @example
     * // Update one DocumentTitle
     * const documentTitle = await prisma.documentTitle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentTitleUpdateArgs>(args: SelectSubset<T, DocumentTitleUpdateArgs<ExtArgs>>): Prisma__DocumentTitleClient<$Result.GetResult<Prisma.$DocumentTitlePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentTitles.
     * @param {DocumentTitleDeleteManyArgs} args - Arguments to filter DocumentTitles to delete.
     * @example
     * // Delete a few DocumentTitles
     * const { count } = await prisma.documentTitle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentTitleDeleteManyArgs>(args?: SelectSubset<T, DocumentTitleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentTitles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTitleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentTitles
     * const documentTitle = await prisma.documentTitle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentTitleUpdateManyArgs>(args: SelectSubset<T, DocumentTitleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentTitles and returns the data updated in the database.
     * @param {DocumentTitleUpdateManyAndReturnArgs} args - Arguments to update many DocumentTitles.
     * @example
     * // Update many DocumentTitles
     * const documentTitle = await prisma.documentTitle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocumentTitles and only return the `id`
     * const documentTitleWithIdOnly = await prisma.documentTitle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentTitleUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentTitleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentTitlePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocumentTitle.
     * @param {DocumentTitleUpsertArgs} args - Arguments to update or create a DocumentTitle.
     * @example
     * // Update or create a DocumentTitle
     * const documentTitle = await prisma.documentTitle.upsert({
     *   create: {
     *     // ... data to create a DocumentTitle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentTitle we want to update
     *   }
     * })
     */
    upsert<T extends DocumentTitleUpsertArgs>(args: SelectSubset<T, DocumentTitleUpsertArgs<ExtArgs>>): Prisma__DocumentTitleClient<$Result.GetResult<Prisma.$DocumentTitlePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentTitles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTitleCountArgs} args - Arguments to filter DocumentTitles to count.
     * @example
     * // Count the number of DocumentTitles
     * const count = await prisma.documentTitle.count({
     *   where: {
     *     // ... the filter for the DocumentTitles we want to count
     *   }
     * })
    **/
    count<T extends DocumentTitleCountArgs>(
      args?: Subset<T, DocumentTitleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentTitleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentTitle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTitleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentTitleAggregateArgs>(args: Subset<T, DocumentTitleAggregateArgs>): Prisma.PrismaPromise<GetDocumentTitleAggregateType<T>>

    /**
     * Group by DocumentTitle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTitleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentTitleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentTitleGroupByArgs['orderBy'] }
        : { orderBy?: DocumentTitleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentTitleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentTitleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentTitle model
   */
  readonly fields: DocumentTitleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentTitle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentTitleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document_types<T extends DocumentTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentTypeDefaultArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    documentConfigurations<T extends DocumentTitle$documentConfigurationsArgs<ExtArgs> = {}>(args?: Subset<T, DocumentTitle$documentConfigurationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentConfigurationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    document_fields<T extends DocumentTitle$document_fieldsArgs<ExtArgs> = {}>(args?: Subset<T, DocumentTitle$document_fieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$document_fieldsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DocumentTitle model
   */
  interface DocumentTitleFieldRefs {
    readonly id: FieldRef<"DocumentTitle", 'Int'>
    readonly title: FieldRef<"DocumentTitle", 'String'>
    readonly created_at: FieldRef<"DocumentTitle", 'DateTime'>
    readonly updated_at: FieldRef<"DocumentTitle", 'DateTime'>
    readonly shareable: FieldRef<"DocumentTitle", 'Boolean'>
    readonly document_type_id: FieldRef<"DocumentTitle", 'Int'>
    readonly is_display: FieldRef<"DocumentTitle", 'Boolean'>
    readonly require_number: FieldRef<"DocumentTitle", 'Boolean'>
    readonly require_valid_date: FieldRef<"DocumentTitle", 'Boolean'>
    readonly require_expire_date: FieldRef<"DocumentTitle", 'Boolean'>
    readonly require_doc_data: FieldRef<"DocumentTitle", 'Boolean'>
    readonly doc_data_options: FieldRef<"DocumentTitle", 'Json'>
    readonly doc_data_name: FieldRef<"DocumentTitle", 'String'>
    readonly require_attachment_front: FieldRef<"DocumentTitle", 'Boolean'>
    readonly require_attachment_back: FieldRef<"DocumentTitle", 'Boolean'>
    readonly description: FieldRef<"DocumentTitle", 'String'>
    readonly form_description: FieldRef<"DocumentTitle", 'String'>
    readonly form_title: FieldRef<"DocumentTitle", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DocumentTitle findUnique
   */
  export type DocumentTitleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTitle
     */
    select?: DocumentTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTitle
     */
    omit?: DocumentTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTitleInclude<ExtArgs> | null
    /**
     * Filter, which DocumentTitle to fetch.
     */
    where: DocumentTitleWhereUniqueInput
  }

  /**
   * DocumentTitle findUniqueOrThrow
   */
  export type DocumentTitleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTitle
     */
    select?: DocumentTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTitle
     */
    omit?: DocumentTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTitleInclude<ExtArgs> | null
    /**
     * Filter, which DocumentTitle to fetch.
     */
    where: DocumentTitleWhereUniqueInput
  }

  /**
   * DocumentTitle findFirst
   */
  export type DocumentTitleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTitle
     */
    select?: DocumentTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTitle
     */
    omit?: DocumentTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTitleInclude<ExtArgs> | null
    /**
     * Filter, which DocumentTitle to fetch.
     */
    where?: DocumentTitleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentTitles to fetch.
     */
    orderBy?: DocumentTitleOrderByWithRelationInput | DocumentTitleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentTitles.
     */
    cursor?: DocumentTitleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentTitles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentTitles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentTitles.
     */
    distinct?: DocumentTitleScalarFieldEnum | DocumentTitleScalarFieldEnum[]
  }

  /**
   * DocumentTitle findFirstOrThrow
   */
  export type DocumentTitleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTitle
     */
    select?: DocumentTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTitle
     */
    omit?: DocumentTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTitleInclude<ExtArgs> | null
    /**
     * Filter, which DocumentTitle to fetch.
     */
    where?: DocumentTitleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentTitles to fetch.
     */
    orderBy?: DocumentTitleOrderByWithRelationInput | DocumentTitleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentTitles.
     */
    cursor?: DocumentTitleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentTitles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentTitles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentTitles.
     */
    distinct?: DocumentTitleScalarFieldEnum | DocumentTitleScalarFieldEnum[]
  }

  /**
   * DocumentTitle findMany
   */
  export type DocumentTitleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTitle
     */
    select?: DocumentTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTitle
     */
    omit?: DocumentTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTitleInclude<ExtArgs> | null
    /**
     * Filter, which DocumentTitles to fetch.
     */
    where?: DocumentTitleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentTitles to fetch.
     */
    orderBy?: DocumentTitleOrderByWithRelationInput | DocumentTitleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentTitles.
     */
    cursor?: DocumentTitleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentTitles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentTitles.
     */
    skip?: number
    distinct?: DocumentTitleScalarFieldEnum | DocumentTitleScalarFieldEnum[]
  }

  /**
   * DocumentTitle create
   */
  export type DocumentTitleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTitle
     */
    select?: DocumentTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTitle
     */
    omit?: DocumentTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTitleInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentTitle.
     */
    data: XOR<DocumentTitleCreateInput, DocumentTitleUncheckedCreateInput>
  }

  /**
   * DocumentTitle createMany
   */
  export type DocumentTitleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentTitles.
     */
    data: DocumentTitleCreateManyInput | DocumentTitleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentTitle createManyAndReturn
   */
  export type DocumentTitleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTitle
     */
    select?: DocumentTitleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTitle
     */
    omit?: DocumentTitleOmit<ExtArgs> | null
    /**
     * The data used to create many DocumentTitles.
     */
    data: DocumentTitleCreateManyInput | DocumentTitleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTitleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentTitle update
   */
  export type DocumentTitleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTitle
     */
    select?: DocumentTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTitle
     */
    omit?: DocumentTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTitleInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentTitle.
     */
    data: XOR<DocumentTitleUpdateInput, DocumentTitleUncheckedUpdateInput>
    /**
     * Choose, which DocumentTitle to update.
     */
    where: DocumentTitleWhereUniqueInput
  }

  /**
   * DocumentTitle updateMany
   */
  export type DocumentTitleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentTitles.
     */
    data: XOR<DocumentTitleUpdateManyMutationInput, DocumentTitleUncheckedUpdateManyInput>
    /**
     * Filter which DocumentTitles to update
     */
    where?: DocumentTitleWhereInput
    /**
     * Limit how many DocumentTitles to update.
     */
    limit?: number
  }

  /**
   * DocumentTitle updateManyAndReturn
   */
  export type DocumentTitleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTitle
     */
    select?: DocumentTitleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTitle
     */
    omit?: DocumentTitleOmit<ExtArgs> | null
    /**
     * The data used to update DocumentTitles.
     */
    data: XOR<DocumentTitleUpdateManyMutationInput, DocumentTitleUncheckedUpdateManyInput>
    /**
     * Filter which DocumentTitles to update
     */
    where?: DocumentTitleWhereInput
    /**
     * Limit how many DocumentTitles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTitleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentTitle upsert
   */
  export type DocumentTitleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTitle
     */
    select?: DocumentTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTitle
     */
    omit?: DocumentTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTitleInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentTitle to update in case it exists.
     */
    where: DocumentTitleWhereUniqueInput
    /**
     * In case the DocumentTitle found by the `where` argument doesn't exist, create a new DocumentTitle with this data.
     */
    create: XOR<DocumentTitleCreateInput, DocumentTitleUncheckedCreateInput>
    /**
     * In case the DocumentTitle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentTitleUpdateInput, DocumentTitleUncheckedUpdateInput>
  }

  /**
   * DocumentTitle delete
   */
  export type DocumentTitleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTitle
     */
    select?: DocumentTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTitle
     */
    omit?: DocumentTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTitleInclude<ExtArgs> | null
    /**
     * Filter which DocumentTitle to delete.
     */
    where: DocumentTitleWhereUniqueInput
  }

  /**
   * DocumentTitle deleteMany
   */
  export type DocumentTitleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentTitles to delete
     */
    where?: DocumentTitleWhereInput
    /**
     * Limit how many DocumentTitles to delete.
     */
    limit?: number
  }

  /**
   * DocumentTitle.documentConfigurations
   */
  export type DocumentTitle$documentConfigurationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentConfiguration
     */
    select?: DocumentConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentConfiguration
     */
    omit?: DocumentConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentConfigurationInclude<ExtArgs> | null
    where?: DocumentConfigurationWhereInput
    orderBy?: DocumentConfigurationOrderByWithRelationInput | DocumentConfigurationOrderByWithRelationInput[]
    cursor?: DocumentConfigurationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentConfigurationScalarFieldEnum | DocumentConfigurationScalarFieldEnum[]
  }

  /**
   * DocumentTitle.document_fields
   */
  export type DocumentTitle$document_fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_fields
     */
    select?: document_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_fields
     */
    omit?: document_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_fieldsInclude<ExtArgs> | null
    where?: document_fieldsWhereInput
    orderBy?: document_fieldsOrderByWithRelationInput | document_fieldsOrderByWithRelationInput[]
    cursor?: document_fieldsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Document_fieldsScalarFieldEnum | Document_fieldsScalarFieldEnum[]
  }

  /**
   * DocumentTitle without action
   */
  export type DocumentTitleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTitle
     */
    select?: DocumentTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTitle
     */
    omit?: DocumentTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTitleInclude<ExtArgs> | null
  }


  /**
   * Model FormField
   */

  export type AggregateFormField = {
    _count: FormFieldCountAggregateOutputType | null
    _avg: FormFieldAvgAggregateOutputType | null
    _sum: FormFieldSumAggregateOutputType | null
    _min: FormFieldMinAggregateOutputType | null
    _max: FormFieldMaxAggregateOutputType | null
  }

  export type FormFieldAvgAggregateOutputType = {
    id: number | null
    template_id: number | null
    order: number | null
  }

  export type FormFieldSumAggregateOutputType = {
    id: number | null
    template_id: number | null
    order: number | null
  }

  export type FormFieldMinAggregateOutputType = {
    id: number | null
    template_id: number | null
    field_id: string | null
    field_name: string | null
    field_type: string | null
    label: string | null
    placeholder: string | null
    required: boolean | null
    is_hidden: boolean | null
    order: number | null
    full_width: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FormFieldMaxAggregateOutputType = {
    id: number | null
    template_id: number | null
    field_id: string | null
    field_name: string | null
    field_type: string | null
    label: string | null
    placeholder: string | null
    required: boolean | null
    is_hidden: boolean | null
    order: number | null
    full_width: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FormFieldCountAggregateOutputType = {
    id: number
    template_id: number
    field_id: number
    field_name: number
    field_type: number
    label: number
    placeholder: number
    required: number
    is_hidden: number
    order: number
    full_width: number
    display_conditions: number
    validation_rules: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type FormFieldAvgAggregateInputType = {
    id?: true
    template_id?: true
    order?: true
  }

  export type FormFieldSumAggregateInputType = {
    id?: true
    template_id?: true
    order?: true
  }

  export type FormFieldMinAggregateInputType = {
    id?: true
    template_id?: true
    field_id?: true
    field_name?: true
    field_type?: true
    label?: true
    placeholder?: true
    required?: true
    is_hidden?: true
    order?: true
    full_width?: true
    created_at?: true
    updated_at?: true
  }

  export type FormFieldMaxAggregateInputType = {
    id?: true
    template_id?: true
    field_id?: true
    field_name?: true
    field_type?: true
    label?: true
    placeholder?: true
    required?: true
    is_hidden?: true
    order?: true
    full_width?: true
    created_at?: true
    updated_at?: true
  }

  export type FormFieldCountAggregateInputType = {
    id?: true
    template_id?: true
    field_id?: true
    field_name?: true
    field_type?: true
    label?: true
    placeholder?: true
    required?: true
    is_hidden?: true
    order?: true
    full_width?: true
    display_conditions?: true
    validation_rules?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type FormFieldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormField to aggregate.
     */
    where?: FormFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormFields to fetch.
     */
    orderBy?: FormFieldOrderByWithRelationInput | FormFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormFields
    **/
    _count?: true | FormFieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormFieldAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormFieldSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormFieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormFieldMaxAggregateInputType
  }

  export type GetFormFieldAggregateType<T extends FormFieldAggregateArgs> = {
        [P in keyof T & keyof AggregateFormField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormField[P]>
      : GetScalarType<T[P], AggregateFormField[P]>
  }




  export type FormFieldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormFieldWhereInput
    orderBy?: FormFieldOrderByWithAggregationInput | FormFieldOrderByWithAggregationInput[]
    by: FormFieldScalarFieldEnum[] | FormFieldScalarFieldEnum
    having?: FormFieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormFieldCountAggregateInputType | true
    _avg?: FormFieldAvgAggregateInputType
    _sum?: FormFieldSumAggregateInputType
    _min?: FormFieldMinAggregateInputType
    _max?: FormFieldMaxAggregateInputType
  }

  export type FormFieldGroupByOutputType = {
    id: number
    template_id: number
    field_id: string
    field_name: string
    field_type: string
    label: string
    placeholder: string | null
    required: boolean
    is_hidden: boolean
    order: number
    full_width: boolean
    display_conditions: JsonValue | null
    validation_rules: JsonValue | null
    created_at: Date
    updated_at: Date
    _count: FormFieldCountAggregateOutputType | null
    _avg: FormFieldAvgAggregateOutputType | null
    _sum: FormFieldSumAggregateOutputType | null
    _min: FormFieldMinAggregateOutputType | null
    _max: FormFieldMaxAggregateOutputType | null
  }

  type GetFormFieldGroupByPayload<T extends FormFieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormFieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormFieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormFieldGroupByOutputType[P]>
            : GetScalarType<T[P], FormFieldGroupByOutputType[P]>
        }
      >
    >


  export type FormFieldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    template_id?: boolean
    field_id?: boolean
    field_name?: boolean
    field_type?: boolean
    label?: boolean
    placeholder?: boolean
    required?: boolean
    is_hidden?: boolean
    order?: boolean
    full_width?: boolean
    display_conditions?: boolean
    validation_rules?: boolean
    created_at?: boolean
    updated_at?: boolean
    form_template?: boolean | FormTemplateDefaultArgs<ExtArgs>
    field_options?: boolean | FormField$field_optionsArgs<ExtArgs>
    _count?: boolean | FormFieldCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formField"]>

  export type FormFieldSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    template_id?: boolean
    field_id?: boolean
    field_name?: boolean
    field_type?: boolean
    label?: boolean
    placeholder?: boolean
    required?: boolean
    is_hidden?: boolean
    order?: boolean
    full_width?: boolean
    display_conditions?: boolean
    validation_rules?: boolean
    created_at?: boolean
    updated_at?: boolean
    form_template?: boolean | FormTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formField"]>

  export type FormFieldSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    template_id?: boolean
    field_id?: boolean
    field_name?: boolean
    field_type?: boolean
    label?: boolean
    placeholder?: boolean
    required?: boolean
    is_hidden?: boolean
    order?: boolean
    full_width?: boolean
    display_conditions?: boolean
    validation_rules?: boolean
    created_at?: boolean
    updated_at?: boolean
    form_template?: boolean | FormTemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formField"]>

  export type FormFieldSelectScalar = {
    id?: boolean
    template_id?: boolean
    field_id?: boolean
    field_name?: boolean
    field_type?: boolean
    label?: boolean
    placeholder?: boolean
    required?: boolean
    is_hidden?: boolean
    order?: boolean
    full_width?: boolean
    display_conditions?: boolean
    validation_rules?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type FormFieldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "template_id" | "field_id" | "field_name" | "field_type" | "label" | "placeholder" | "required" | "is_hidden" | "order" | "full_width" | "display_conditions" | "validation_rules" | "created_at" | "updated_at", ExtArgs["result"]["formField"]>
  export type FormFieldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form_template?: boolean | FormTemplateDefaultArgs<ExtArgs>
    field_options?: boolean | FormField$field_optionsArgs<ExtArgs>
    _count?: boolean | FormFieldCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FormFieldIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form_template?: boolean | FormTemplateDefaultArgs<ExtArgs>
  }
  export type FormFieldIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form_template?: boolean | FormTemplateDefaultArgs<ExtArgs>
  }

  export type $FormFieldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormField"
    objects: {
      form_template: Prisma.$FormTemplatePayload<ExtArgs>
      field_options: Prisma.$FieldOptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      template_id: number
      field_id: string
      field_name: string
      field_type: string
      label: string
      placeholder: string | null
      required: boolean
      is_hidden: boolean
      order: number
      full_width: boolean
      display_conditions: Prisma.JsonValue | null
      validation_rules: Prisma.JsonValue | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["formField"]>
    composites: {}
  }

  type FormFieldGetPayload<S extends boolean | null | undefined | FormFieldDefaultArgs> = $Result.GetResult<Prisma.$FormFieldPayload, S>

  type FormFieldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormFieldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormFieldCountAggregateInputType | true
    }

  export interface FormFieldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FormField'], meta: { name: 'FormField' } }
    /**
     * Find zero or one FormField that matches the filter.
     * @param {FormFieldFindUniqueArgs} args - Arguments to find a FormField
     * @example
     * // Get one FormField
     * const formField = await prisma.formField.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormFieldFindUniqueArgs>(args: SelectSubset<T, FormFieldFindUniqueArgs<ExtArgs>>): Prisma__FormFieldClient<$Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FormField that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormFieldFindUniqueOrThrowArgs} args - Arguments to find a FormField
     * @example
     * // Get one FormField
     * const formField = await prisma.formField.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormFieldFindUniqueOrThrowArgs>(args: SelectSubset<T, FormFieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormFieldClient<$Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormField that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFieldFindFirstArgs} args - Arguments to find a FormField
     * @example
     * // Get one FormField
     * const formField = await prisma.formField.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormFieldFindFirstArgs>(args?: SelectSubset<T, FormFieldFindFirstArgs<ExtArgs>>): Prisma__FormFieldClient<$Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormField that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFieldFindFirstOrThrowArgs} args - Arguments to find a FormField
     * @example
     * // Get one FormField
     * const formField = await prisma.formField.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormFieldFindFirstOrThrowArgs>(args?: SelectSubset<T, FormFieldFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormFieldClient<$Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FormFields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormFields
     * const formFields = await prisma.formField.findMany()
     * 
     * // Get first 10 FormFields
     * const formFields = await prisma.formField.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formFieldWithIdOnly = await prisma.formField.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormFieldFindManyArgs>(args?: SelectSubset<T, FormFieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FormField.
     * @param {FormFieldCreateArgs} args - Arguments to create a FormField.
     * @example
     * // Create one FormField
     * const FormField = await prisma.formField.create({
     *   data: {
     *     // ... data to create a FormField
     *   }
     * })
     * 
     */
    create<T extends FormFieldCreateArgs>(args: SelectSubset<T, FormFieldCreateArgs<ExtArgs>>): Prisma__FormFieldClient<$Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FormFields.
     * @param {FormFieldCreateManyArgs} args - Arguments to create many FormFields.
     * @example
     * // Create many FormFields
     * const formField = await prisma.formField.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormFieldCreateManyArgs>(args?: SelectSubset<T, FormFieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FormFields and returns the data saved in the database.
     * @param {FormFieldCreateManyAndReturnArgs} args - Arguments to create many FormFields.
     * @example
     * // Create many FormFields
     * const formField = await prisma.formField.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FormFields and only return the `id`
     * const formFieldWithIdOnly = await prisma.formField.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormFieldCreateManyAndReturnArgs>(args?: SelectSubset<T, FormFieldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FormField.
     * @param {FormFieldDeleteArgs} args - Arguments to delete one FormField.
     * @example
     * // Delete one FormField
     * const FormField = await prisma.formField.delete({
     *   where: {
     *     // ... filter to delete one FormField
     *   }
     * })
     * 
     */
    delete<T extends FormFieldDeleteArgs>(args: SelectSubset<T, FormFieldDeleteArgs<ExtArgs>>): Prisma__FormFieldClient<$Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FormField.
     * @param {FormFieldUpdateArgs} args - Arguments to update one FormField.
     * @example
     * // Update one FormField
     * const formField = await prisma.formField.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormFieldUpdateArgs>(args: SelectSubset<T, FormFieldUpdateArgs<ExtArgs>>): Prisma__FormFieldClient<$Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FormFields.
     * @param {FormFieldDeleteManyArgs} args - Arguments to filter FormFields to delete.
     * @example
     * // Delete a few FormFields
     * const { count } = await prisma.formField.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormFieldDeleteManyArgs>(args?: SelectSubset<T, FormFieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormFields
     * const formField = await prisma.formField.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormFieldUpdateManyArgs>(args: SelectSubset<T, FormFieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormFields and returns the data updated in the database.
     * @param {FormFieldUpdateManyAndReturnArgs} args - Arguments to update many FormFields.
     * @example
     * // Update many FormFields
     * const formField = await prisma.formField.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FormFields and only return the `id`
     * const formFieldWithIdOnly = await prisma.formField.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FormFieldUpdateManyAndReturnArgs>(args: SelectSubset<T, FormFieldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FormField.
     * @param {FormFieldUpsertArgs} args - Arguments to update or create a FormField.
     * @example
     * // Update or create a FormField
     * const formField = await prisma.formField.upsert({
     *   create: {
     *     // ... data to create a FormField
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormField we want to update
     *   }
     * })
     */
    upsert<T extends FormFieldUpsertArgs>(args: SelectSubset<T, FormFieldUpsertArgs<ExtArgs>>): Prisma__FormFieldClient<$Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FormFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFieldCountArgs} args - Arguments to filter FormFields to count.
     * @example
     * // Count the number of FormFields
     * const count = await prisma.formField.count({
     *   where: {
     *     // ... the filter for the FormFields we want to count
     *   }
     * })
    **/
    count<T extends FormFieldCountArgs>(
      args?: Subset<T, FormFieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormFieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormFieldAggregateArgs>(args: Subset<T, FormFieldAggregateArgs>): Prisma.PrismaPromise<GetFormFieldAggregateType<T>>

    /**
     * Group by FormField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormFieldGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FormFieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormFieldGroupByArgs['orderBy'] }
        : { orderBy?: FormFieldGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FormFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FormField model
   */
  readonly fields: FormFieldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormField.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormFieldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    form_template<T extends FormTemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormTemplateDefaultArgs<ExtArgs>>): Prisma__FormTemplateClient<$Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    field_options<T extends FormField$field_optionsArgs<ExtArgs> = {}>(args?: Subset<T, FormField$field_optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FormField model
   */
  interface FormFieldFieldRefs {
    readonly id: FieldRef<"FormField", 'Int'>
    readonly template_id: FieldRef<"FormField", 'Int'>
    readonly field_id: FieldRef<"FormField", 'String'>
    readonly field_name: FieldRef<"FormField", 'String'>
    readonly field_type: FieldRef<"FormField", 'String'>
    readonly label: FieldRef<"FormField", 'String'>
    readonly placeholder: FieldRef<"FormField", 'String'>
    readonly required: FieldRef<"FormField", 'Boolean'>
    readonly is_hidden: FieldRef<"FormField", 'Boolean'>
    readonly order: FieldRef<"FormField", 'Int'>
    readonly full_width: FieldRef<"FormField", 'Boolean'>
    readonly display_conditions: FieldRef<"FormField", 'Json'>
    readonly validation_rules: FieldRef<"FormField", 'Json'>
    readonly created_at: FieldRef<"FormField", 'DateTime'>
    readonly updated_at: FieldRef<"FormField", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FormField findUnique
   */
  export type FormFieldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormField
     */
    select?: FormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormField
     */
    omit?: FormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormFieldInclude<ExtArgs> | null
    /**
     * Filter, which FormField to fetch.
     */
    where: FormFieldWhereUniqueInput
  }

  /**
   * FormField findUniqueOrThrow
   */
  export type FormFieldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormField
     */
    select?: FormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormField
     */
    omit?: FormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormFieldInclude<ExtArgs> | null
    /**
     * Filter, which FormField to fetch.
     */
    where: FormFieldWhereUniqueInput
  }

  /**
   * FormField findFirst
   */
  export type FormFieldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormField
     */
    select?: FormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormField
     */
    omit?: FormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormFieldInclude<ExtArgs> | null
    /**
     * Filter, which FormField to fetch.
     */
    where?: FormFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormFields to fetch.
     */
    orderBy?: FormFieldOrderByWithRelationInput | FormFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormFields.
     */
    cursor?: FormFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormFields.
     */
    distinct?: FormFieldScalarFieldEnum | FormFieldScalarFieldEnum[]
  }

  /**
   * FormField findFirstOrThrow
   */
  export type FormFieldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormField
     */
    select?: FormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormField
     */
    omit?: FormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormFieldInclude<ExtArgs> | null
    /**
     * Filter, which FormField to fetch.
     */
    where?: FormFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormFields to fetch.
     */
    orderBy?: FormFieldOrderByWithRelationInput | FormFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormFields.
     */
    cursor?: FormFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormFields.
     */
    distinct?: FormFieldScalarFieldEnum | FormFieldScalarFieldEnum[]
  }

  /**
   * FormField findMany
   */
  export type FormFieldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormField
     */
    select?: FormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormField
     */
    omit?: FormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormFieldInclude<ExtArgs> | null
    /**
     * Filter, which FormFields to fetch.
     */
    where?: FormFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormFields to fetch.
     */
    orderBy?: FormFieldOrderByWithRelationInput | FormFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormFields.
     */
    cursor?: FormFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormFields.
     */
    skip?: number
    distinct?: FormFieldScalarFieldEnum | FormFieldScalarFieldEnum[]
  }

  /**
   * FormField create
   */
  export type FormFieldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormField
     */
    select?: FormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormField
     */
    omit?: FormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormFieldInclude<ExtArgs> | null
    /**
     * The data needed to create a FormField.
     */
    data: XOR<FormFieldCreateInput, FormFieldUncheckedCreateInput>
  }

  /**
   * FormField createMany
   */
  export type FormFieldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FormFields.
     */
    data: FormFieldCreateManyInput | FormFieldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormField createManyAndReturn
   */
  export type FormFieldCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormField
     */
    select?: FormFieldSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormField
     */
    omit?: FormFieldOmit<ExtArgs> | null
    /**
     * The data used to create many FormFields.
     */
    data: FormFieldCreateManyInput | FormFieldCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormFieldIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FormField update
   */
  export type FormFieldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormField
     */
    select?: FormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormField
     */
    omit?: FormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormFieldInclude<ExtArgs> | null
    /**
     * The data needed to update a FormField.
     */
    data: XOR<FormFieldUpdateInput, FormFieldUncheckedUpdateInput>
    /**
     * Choose, which FormField to update.
     */
    where: FormFieldWhereUniqueInput
  }

  /**
   * FormField updateMany
   */
  export type FormFieldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FormFields.
     */
    data: XOR<FormFieldUpdateManyMutationInput, FormFieldUncheckedUpdateManyInput>
    /**
     * Filter which FormFields to update
     */
    where?: FormFieldWhereInput
    /**
     * Limit how many FormFields to update.
     */
    limit?: number
  }

  /**
   * FormField updateManyAndReturn
   */
  export type FormFieldUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormField
     */
    select?: FormFieldSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormField
     */
    omit?: FormFieldOmit<ExtArgs> | null
    /**
     * The data used to update FormFields.
     */
    data: XOR<FormFieldUpdateManyMutationInput, FormFieldUncheckedUpdateManyInput>
    /**
     * Filter which FormFields to update
     */
    where?: FormFieldWhereInput
    /**
     * Limit how many FormFields to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormFieldIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FormField upsert
   */
  export type FormFieldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormField
     */
    select?: FormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormField
     */
    omit?: FormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormFieldInclude<ExtArgs> | null
    /**
     * The filter to search for the FormField to update in case it exists.
     */
    where: FormFieldWhereUniqueInput
    /**
     * In case the FormField found by the `where` argument doesn't exist, create a new FormField with this data.
     */
    create: XOR<FormFieldCreateInput, FormFieldUncheckedCreateInput>
    /**
     * In case the FormField was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormFieldUpdateInput, FormFieldUncheckedUpdateInput>
  }

  /**
   * FormField delete
   */
  export type FormFieldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormField
     */
    select?: FormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormField
     */
    omit?: FormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormFieldInclude<ExtArgs> | null
    /**
     * Filter which FormField to delete.
     */
    where: FormFieldWhereUniqueInput
  }

  /**
   * FormField deleteMany
   */
  export type FormFieldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormFields to delete
     */
    where?: FormFieldWhereInput
    /**
     * Limit how many FormFields to delete.
     */
    limit?: number
  }

  /**
   * FormField.field_options
   */
  export type FormField$field_optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldOption
     */
    select?: FieldOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldOption
     */
    omit?: FieldOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldOptionInclude<ExtArgs> | null
    where?: FieldOptionWhereInput
    orderBy?: FieldOptionOrderByWithRelationInput | FieldOptionOrderByWithRelationInput[]
    cursor?: FieldOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FieldOptionScalarFieldEnum | FieldOptionScalarFieldEnum[]
  }

  /**
   * FormField without action
   */
  export type FormFieldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormField
     */
    select?: FormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormField
     */
    omit?: FormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormFieldInclude<ExtArgs> | null
  }


  /**
   * Model DocumentConfiguration
   */

  export type AggregateDocumentConfiguration = {
    _count: DocumentConfigurationCountAggregateOutputType | null
    _avg: DocumentConfigurationAvgAggregateOutputType | null
    _sum: DocumentConfigurationSumAggregateOutputType | null
    _min: DocumentConfigurationMinAggregateOutputType | null
    _max: DocumentConfigurationMaxAggregateOutputType | null
  }

  export type DocumentConfigurationAvgAggregateOutputType = {
    id: number | null
    regionId: number | null
    documentTypeId: number | null
    documentTitleId: number | null
    typeOfCondition: number | null
    priority: number | null
  }

  export type DocumentConfigurationSumAggregateOutputType = {
    id: number | null
    regionId: number | null
    documentTypeId: number | null
    documentTitleId: number | null
    typeOfCondition: number | null
    priority: number | null
  }

  export type DocumentConfigurationMinAggregateOutputType = {
    id: number | null
    regionId: number | null
    documentTypeId: number | null
    documentTitleId: number | null
    typeOfCondition: number | null
    createdAt: Date | null
    updatedAt: Date | null
    active: boolean | null
    priority: number | null
  }

  export type DocumentConfigurationMaxAggregateOutputType = {
    id: number | null
    regionId: number | null
    documentTypeId: number | null
    documentTitleId: number | null
    typeOfCondition: number | null
    createdAt: Date | null
    updatedAt: Date | null
    active: boolean | null
    priority: number | null
  }

  export type DocumentConfigurationCountAggregateOutputType = {
    id: number
    regionId: number
    documentTypeId: number
    documentTitleId: number
    typeOfCondition: number
    createdAt: number
    updatedAt: number
    active: number
    priority: number
    customFields: number
    _all: number
  }


  export type DocumentConfigurationAvgAggregateInputType = {
    id?: true
    regionId?: true
    documentTypeId?: true
    documentTitleId?: true
    typeOfCondition?: true
    priority?: true
  }

  export type DocumentConfigurationSumAggregateInputType = {
    id?: true
    regionId?: true
    documentTypeId?: true
    documentTitleId?: true
    typeOfCondition?: true
    priority?: true
  }

  export type DocumentConfigurationMinAggregateInputType = {
    id?: true
    regionId?: true
    documentTypeId?: true
    documentTitleId?: true
    typeOfCondition?: true
    createdAt?: true
    updatedAt?: true
    active?: true
    priority?: true
  }

  export type DocumentConfigurationMaxAggregateInputType = {
    id?: true
    regionId?: true
    documentTypeId?: true
    documentTitleId?: true
    typeOfCondition?: true
    createdAt?: true
    updatedAt?: true
    active?: true
    priority?: true
  }

  export type DocumentConfigurationCountAggregateInputType = {
    id?: true
    regionId?: true
    documentTypeId?: true
    documentTitleId?: true
    typeOfCondition?: true
    createdAt?: true
    updatedAt?: true
    active?: true
    priority?: true
    customFields?: true
    _all?: true
  }

  export type DocumentConfigurationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentConfiguration to aggregate.
     */
    where?: DocumentConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentConfigurations to fetch.
     */
    orderBy?: DocumentConfigurationOrderByWithRelationInput | DocumentConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentConfigurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentConfigurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentConfigurations
    **/
    _count?: true | DocumentConfigurationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentConfigurationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentConfigurationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentConfigurationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentConfigurationMaxAggregateInputType
  }

  export type GetDocumentConfigurationAggregateType<T extends DocumentConfigurationAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentConfiguration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentConfiguration[P]>
      : GetScalarType<T[P], AggregateDocumentConfiguration[P]>
  }




  export type DocumentConfigurationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentConfigurationWhereInput
    orderBy?: DocumentConfigurationOrderByWithAggregationInput | DocumentConfigurationOrderByWithAggregationInput[]
    by: DocumentConfigurationScalarFieldEnum[] | DocumentConfigurationScalarFieldEnum
    having?: DocumentConfigurationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentConfigurationCountAggregateInputType | true
    _avg?: DocumentConfigurationAvgAggregateInputType
    _sum?: DocumentConfigurationSumAggregateInputType
    _min?: DocumentConfigurationMinAggregateInputType
    _max?: DocumentConfigurationMaxAggregateInputType
  }

  export type DocumentConfigurationGroupByOutputType = {
    id: number
    regionId: number
    documentTypeId: number
    documentTitleId: number
    typeOfCondition: number
    createdAt: Date
    updatedAt: Date
    active: boolean
    priority: number
    customFields: JsonValue | null
    _count: DocumentConfigurationCountAggregateOutputType | null
    _avg: DocumentConfigurationAvgAggregateOutputType | null
    _sum: DocumentConfigurationSumAggregateOutputType | null
    _min: DocumentConfigurationMinAggregateOutputType | null
    _max: DocumentConfigurationMaxAggregateOutputType | null
  }

  type GetDocumentConfigurationGroupByPayload<T extends DocumentConfigurationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentConfigurationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentConfigurationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentConfigurationGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentConfigurationGroupByOutputType[P]>
        }
      >
    >


  export type DocumentConfigurationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    regionId?: boolean
    documentTypeId?: boolean
    documentTitleId?: boolean
    typeOfCondition?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    active?: boolean
    priority?: boolean
    customFields?: boolean
    documentTitle?: boolean | DocumentTitleDefaultArgs<ExtArgs>
    documentType?: boolean | DocumentTypeDefaultArgs<ExtArgs>
    region?: boolean | RegionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentConfiguration"]>

  export type DocumentConfigurationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    regionId?: boolean
    documentTypeId?: boolean
    documentTitleId?: boolean
    typeOfCondition?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    active?: boolean
    priority?: boolean
    customFields?: boolean
    documentTitle?: boolean | DocumentTitleDefaultArgs<ExtArgs>
    documentType?: boolean | DocumentTypeDefaultArgs<ExtArgs>
    region?: boolean | RegionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentConfiguration"]>

  export type DocumentConfigurationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    regionId?: boolean
    documentTypeId?: boolean
    documentTitleId?: boolean
    typeOfCondition?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    active?: boolean
    priority?: boolean
    customFields?: boolean
    documentTitle?: boolean | DocumentTitleDefaultArgs<ExtArgs>
    documentType?: boolean | DocumentTypeDefaultArgs<ExtArgs>
    region?: boolean | RegionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentConfiguration"]>

  export type DocumentConfigurationSelectScalar = {
    id?: boolean
    regionId?: boolean
    documentTypeId?: boolean
    documentTitleId?: boolean
    typeOfCondition?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    active?: boolean
    priority?: boolean
    customFields?: boolean
  }

  export type DocumentConfigurationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "regionId" | "documentTypeId" | "documentTitleId" | "typeOfCondition" | "createdAt" | "updatedAt" | "active" | "priority" | "customFields", ExtArgs["result"]["documentConfiguration"]>
  export type DocumentConfigurationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentTitle?: boolean | DocumentTitleDefaultArgs<ExtArgs>
    documentType?: boolean | DocumentTypeDefaultArgs<ExtArgs>
    region?: boolean | RegionDefaultArgs<ExtArgs>
  }
  export type DocumentConfigurationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentTitle?: boolean | DocumentTitleDefaultArgs<ExtArgs>
    documentType?: boolean | DocumentTypeDefaultArgs<ExtArgs>
    region?: boolean | RegionDefaultArgs<ExtArgs>
  }
  export type DocumentConfigurationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentTitle?: boolean | DocumentTitleDefaultArgs<ExtArgs>
    documentType?: boolean | DocumentTypeDefaultArgs<ExtArgs>
    region?: boolean | RegionDefaultArgs<ExtArgs>
  }

  export type $DocumentConfigurationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentConfiguration"
    objects: {
      documentTitle: Prisma.$DocumentTitlePayload<ExtArgs>
      documentType: Prisma.$DocumentTypePayload<ExtArgs>
      region: Prisma.$RegionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      regionId: number
      documentTypeId: number
      documentTitleId: number
      typeOfCondition: number
      createdAt: Date
      updatedAt: Date
      active: boolean
      priority: number
      customFields: Prisma.JsonValue | null
    }, ExtArgs["result"]["documentConfiguration"]>
    composites: {}
  }

  type DocumentConfigurationGetPayload<S extends boolean | null | undefined | DocumentConfigurationDefaultArgs> = $Result.GetResult<Prisma.$DocumentConfigurationPayload, S>

  type DocumentConfigurationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentConfigurationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentConfigurationCountAggregateInputType | true
    }

  export interface DocumentConfigurationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentConfiguration'], meta: { name: 'DocumentConfiguration' } }
    /**
     * Find zero or one DocumentConfiguration that matches the filter.
     * @param {DocumentConfigurationFindUniqueArgs} args - Arguments to find a DocumentConfiguration
     * @example
     * // Get one DocumentConfiguration
     * const documentConfiguration = await prisma.documentConfiguration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentConfigurationFindUniqueArgs>(args: SelectSubset<T, DocumentConfigurationFindUniqueArgs<ExtArgs>>): Prisma__DocumentConfigurationClient<$Result.GetResult<Prisma.$DocumentConfigurationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentConfiguration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentConfigurationFindUniqueOrThrowArgs} args - Arguments to find a DocumentConfiguration
     * @example
     * // Get one DocumentConfiguration
     * const documentConfiguration = await prisma.documentConfiguration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentConfigurationFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentConfigurationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentConfigurationClient<$Result.GetResult<Prisma.$DocumentConfigurationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentConfiguration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentConfigurationFindFirstArgs} args - Arguments to find a DocumentConfiguration
     * @example
     * // Get one DocumentConfiguration
     * const documentConfiguration = await prisma.documentConfiguration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentConfigurationFindFirstArgs>(args?: SelectSubset<T, DocumentConfigurationFindFirstArgs<ExtArgs>>): Prisma__DocumentConfigurationClient<$Result.GetResult<Prisma.$DocumentConfigurationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentConfiguration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentConfigurationFindFirstOrThrowArgs} args - Arguments to find a DocumentConfiguration
     * @example
     * // Get one DocumentConfiguration
     * const documentConfiguration = await prisma.documentConfiguration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentConfigurationFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentConfigurationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentConfigurationClient<$Result.GetResult<Prisma.$DocumentConfigurationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentConfigurations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentConfigurationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentConfigurations
     * const documentConfigurations = await prisma.documentConfiguration.findMany()
     * 
     * // Get first 10 DocumentConfigurations
     * const documentConfigurations = await prisma.documentConfiguration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentConfigurationWithIdOnly = await prisma.documentConfiguration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentConfigurationFindManyArgs>(args?: SelectSubset<T, DocumentConfigurationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentConfigurationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentConfiguration.
     * @param {DocumentConfigurationCreateArgs} args - Arguments to create a DocumentConfiguration.
     * @example
     * // Create one DocumentConfiguration
     * const DocumentConfiguration = await prisma.documentConfiguration.create({
     *   data: {
     *     // ... data to create a DocumentConfiguration
     *   }
     * })
     * 
     */
    create<T extends DocumentConfigurationCreateArgs>(args: SelectSubset<T, DocumentConfigurationCreateArgs<ExtArgs>>): Prisma__DocumentConfigurationClient<$Result.GetResult<Prisma.$DocumentConfigurationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentConfigurations.
     * @param {DocumentConfigurationCreateManyArgs} args - Arguments to create many DocumentConfigurations.
     * @example
     * // Create many DocumentConfigurations
     * const documentConfiguration = await prisma.documentConfiguration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentConfigurationCreateManyArgs>(args?: SelectSubset<T, DocumentConfigurationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentConfigurations and returns the data saved in the database.
     * @param {DocumentConfigurationCreateManyAndReturnArgs} args - Arguments to create many DocumentConfigurations.
     * @example
     * // Create many DocumentConfigurations
     * const documentConfiguration = await prisma.documentConfiguration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentConfigurations and only return the `id`
     * const documentConfigurationWithIdOnly = await prisma.documentConfiguration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentConfigurationCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentConfigurationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentConfigurationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocumentConfiguration.
     * @param {DocumentConfigurationDeleteArgs} args - Arguments to delete one DocumentConfiguration.
     * @example
     * // Delete one DocumentConfiguration
     * const DocumentConfiguration = await prisma.documentConfiguration.delete({
     *   where: {
     *     // ... filter to delete one DocumentConfiguration
     *   }
     * })
     * 
     */
    delete<T extends DocumentConfigurationDeleteArgs>(args: SelectSubset<T, DocumentConfigurationDeleteArgs<ExtArgs>>): Prisma__DocumentConfigurationClient<$Result.GetResult<Prisma.$DocumentConfigurationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentConfiguration.
     * @param {DocumentConfigurationUpdateArgs} args - Arguments to update one DocumentConfiguration.
     * @example
     * // Update one DocumentConfiguration
     * const documentConfiguration = await prisma.documentConfiguration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentConfigurationUpdateArgs>(args: SelectSubset<T, DocumentConfigurationUpdateArgs<ExtArgs>>): Prisma__DocumentConfigurationClient<$Result.GetResult<Prisma.$DocumentConfigurationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentConfigurations.
     * @param {DocumentConfigurationDeleteManyArgs} args - Arguments to filter DocumentConfigurations to delete.
     * @example
     * // Delete a few DocumentConfigurations
     * const { count } = await prisma.documentConfiguration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentConfigurationDeleteManyArgs>(args?: SelectSubset<T, DocumentConfigurationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentConfigurations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentConfigurationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentConfigurations
     * const documentConfiguration = await prisma.documentConfiguration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentConfigurationUpdateManyArgs>(args: SelectSubset<T, DocumentConfigurationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentConfigurations and returns the data updated in the database.
     * @param {DocumentConfigurationUpdateManyAndReturnArgs} args - Arguments to update many DocumentConfigurations.
     * @example
     * // Update many DocumentConfigurations
     * const documentConfiguration = await prisma.documentConfiguration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocumentConfigurations and only return the `id`
     * const documentConfigurationWithIdOnly = await prisma.documentConfiguration.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentConfigurationUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentConfigurationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentConfigurationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocumentConfiguration.
     * @param {DocumentConfigurationUpsertArgs} args - Arguments to update or create a DocumentConfiguration.
     * @example
     * // Update or create a DocumentConfiguration
     * const documentConfiguration = await prisma.documentConfiguration.upsert({
     *   create: {
     *     // ... data to create a DocumentConfiguration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentConfiguration we want to update
     *   }
     * })
     */
    upsert<T extends DocumentConfigurationUpsertArgs>(args: SelectSubset<T, DocumentConfigurationUpsertArgs<ExtArgs>>): Prisma__DocumentConfigurationClient<$Result.GetResult<Prisma.$DocumentConfigurationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentConfigurations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentConfigurationCountArgs} args - Arguments to filter DocumentConfigurations to count.
     * @example
     * // Count the number of DocumentConfigurations
     * const count = await prisma.documentConfiguration.count({
     *   where: {
     *     // ... the filter for the DocumentConfigurations we want to count
     *   }
     * })
    **/
    count<T extends DocumentConfigurationCountArgs>(
      args?: Subset<T, DocumentConfigurationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentConfigurationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentConfiguration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentConfigurationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentConfigurationAggregateArgs>(args: Subset<T, DocumentConfigurationAggregateArgs>): Prisma.PrismaPromise<GetDocumentConfigurationAggregateType<T>>

    /**
     * Group by DocumentConfiguration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentConfigurationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentConfigurationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentConfigurationGroupByArgs['orderBy'] }
        : { orderBy?: DocumentConfigurationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentConfigurationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentConfigurationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentConfiguration model
   */
  readonly fields: DocumentConfigurationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentConfiguration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentConfigurationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documentTitle<T extends DocumentTitleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentTitleDefaultArgs<ExtArgs>>): Prisma__DocumentTitleClient<$Result.GetResult<Prisma.$DocumentTitlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    documentType<T extends DocumentTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentTypeDefaultArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    region<T extends RegionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RegionDefaultArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DocumentConfiguration model
   */
  interface DocumentConfigurationFieldRefs {
    readonly id: FieldRef<"DocumentConfiguration", 'Int'>
    readonly regionId: FieldRef<"DocumentConfiguration", 'Int'>
    readonly documentTypeId: FieldRef<"DocumentConfiguration", 'Int'>
    readonly documentTitleId: FieldRef<"DocumentConfiguration", 'Int'>
    readonly typeOfCondition: FieldRef<"DocumentConfiguration", 'Int'>
    readonly createdAt: FieldRef<"DocumentConfiguration", 'DateTime'>
    readonly updatedAt: FieldRef<"DocumentConfiguration", 'DateTime'>
    readonly active: FieldRef<"DocumentConfiguration", 'Boolean'>
    readonly priority: FieldRef<"DocumentConfiguration", 'Int'>
    readonly customFields: FieldRef<"DocumentConfiguration", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * DocumentConfiguration findUnique
   */
  export type DocumentConfigurationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentConfiguration
     */
    select?: DocumentConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentConfiguration
     */
    omit?: DocumentConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which DocumentConfiguration to fetch.
     */
    where: DocumentConfigurationWhereUniqueInput
  }

  /**
   * DocumentConfiguration findUniqueOrThrow
   */
  export type DocumentConfigurationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentConfiguration
     */
    select?: DocumentConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentConfiguration
     */
    omit?: DocumentConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which DocumentConfiguration to fetch.
     */
    where: DocumentConfigurationWhereUniqueInput
  }

  /**
   * DocumentConfiguration findFirst
   */
  export type DocumentConfigurationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentConfiguration
     */
    select?: DocumentConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentConfiguration
     */
    omit?: DocumentConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which DocumentConfiguration to fetch.
     */
    where?: DocumentConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentConfigurations to fetch.
     */
    orderBy?: DocumentConfigurationOrderByWithRelationInput | DocumentConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentConfigurations.
     */
    cursor?: DocumentConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentConfigurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentConfigurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentConfigurations.
     */
    distinct?: DocumentConfigurationScalarFieldEnum | DocumentConfigurationScalarFieldEnum[]
  }

  /**
   * DocumentConfiguration findFirstOrThrow
   */
  export type DocumentConfigurationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentConfiguration
     */
    select?: DocumentConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentConfiguration
     */
    omit?: DocumentConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which DocumentConfiguration to fetch.
     */
    where?: DocumentConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentConfigurations to fetch.
     */
    orderBy?: DocumentConfigurationOrderByWithRelationInput | DocumentConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentConfigurations.
     */
    cursor?: DocumentConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentConfigurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentConfigurations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentConfigurations.
     */
    distinct?: DocumentConfigurationScalarFieldEnum | DocumentConfigurationScalarFieldEnum[]
  }

  /**
   * DocumentConfiguration findMany
   */
  export type DocumentConfigurationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentConfiguration
     */
    select?: DocumentConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentConfiguration
     */
    omit?: DocumentConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentConfigurationInclude<ExtArgs> | null
    /**
     * Filter, which DocumentConfigurations to fetch.
     */
    where?: DocumentConfigurationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentConfigurations to fetch.
     */
    orderBy?: DocumentConfigurationOrderByWithRelationInput | DocumentConfigurationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentConfigurations.
     */
    cursor?: DocumentConfigurationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentConfigurations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentConfigurations.
     */
    skip?: number
    distinct?: DocumentConfigurationScalarFieldEnum | DocumentConfigurationScalarFieldEnum[]
  }

  /**
   * DocumentConfiguration create
   */
  export type DocumentConfigurationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentConfiguration
     */
    select?: DocumentConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentConfiguration
     */
    omit?: DocumentConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentConfigurationInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentConfiguration.
     */
    data: XOR<DocumentConfigurationCreateInput, DocumentConfigurationUncheckedCreateInput>
  }

  /**
   * DocumentConfiguration createMany
   */
  export type DocumentConfigurationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentConfigurations.
     */
    data: DocumentConfigurationCreateManyInput | DocumentConfigurationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentConfiguration createManyAndReturn
   */
  export type DocumentConfigurationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentConfiguration
     */
    select?: DocumentConfigurationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentConfiguration
     */
    omit?: DocumentConfigurationOmit<ExtArgs> | null
    /**
     * The data used to create many DocumentConfigurations.
     */
    data: DocumentConfigurationCreateManyInput | DocumentConfigurationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentConfigurationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentConfiguration update
   */
  export type DocumentConfigurationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentConfiguration
     */
    select?: DocumentConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentConfiguration
     */
    omit?: DocumentConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentConfigurationInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentConfiguration.
     */
    data: XOR<DocumentConfigurationUpdateInput, DocumentConfigurationUncheckedUpdateInput>
    /**
     * Choose, which DocumentConfiguration to update.
     */
    where: DocumentConfigurationWhereUniqueInput
  }

  /**
   * DocumentConfiguration updateMany
   */
  export type DocumentConfigurationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentConfigurations.
     */
    data: XOR<DocumentConfigurationUpdateManyMutationInput, DocumentConfigurationUncheckedUpdateManyInput>
    /**
     * Filter which DocumentConfigurations to update
     */
    where?: DocumentConfigurationWhereInput
    /**
     * Limit how many DocumentConfigurations to update.
     */
    limit?: number
  }

  /**
   * DocumentConfiguration updateManyAndReturn
   */
  export type DocumentConfigurationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentConfiguration
     */
    select?: DocumentConfigurationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentConfiguration
     */
    omit?: DocumentConfigurationOmit<ExtArgs> | null
    /**
     * The data used to update DocumentConfigurations.
     */
    data: XOR<DocumentConfigurationUpdateManyMutationInput, DocumentConfigurationUncheckedUpdateManyInput>
    /**
     * Filter which DocumentConfigurations to update
     */
    where?: DocumentConfigurationWhereInput
    /**
     * Limit how many DocumentConfigurations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentConfigurationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentConfiguration upsert
   */
  export type DocumentConfigurationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentConfiguration
     */
    select?: DocumentConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentConfiguration
     */
    omit?: DocumentConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentConfigurationInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentConfiguration to update in case it exists.
     */
    where: DocumentConfigurationWhereUniqueInput
    /**
     * In case the DocumentConfiguration found by the `where` argument doesn't exist, create a new DocumentConfiguration with this data.
     */
    create: XOR<DocumentConfigurationCreateInput, DocumentConfigurationUncheckedCreateInput>
    /**
     * In case the DocumentConfiguration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentConfigurationUpdateInput, DocumentConfigurationUncheckedUpdateInput>
  }

  /**
   * DocumentConfiguration delete
   */
  export type DocumentConfigurationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentConfiguration
     */
    select?: DocumentConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentConfiguration
     */
    omit?: DocumentConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentConfigurationInclude<ExtArgs> | null
    /**
     * Filter which DocumentConfiguration to delete.
     */
    where: DocumentConfigurationWhereUniqueInput
  }

  /**
   * DocumentConfiguration deleteMany
   */
  export type DocumentConfigurationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentConfigurations to delete
     */
    where?: DocumentConfigurationWhereInput
    /**
     * Limit how many DocumentConfigurations to delete.
     */
    limit?: number
  }

  /**
   * DocumentConfiguration without action
   */
  export type DocumentConfigurationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentConfiguration
     */
    select?: DocumentConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentConfiguration
     */
    omit?: DocumentConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentConfigurationInclude<ExtArgs> | null
  }


  /**
   * Model Region
   */

  export type AggregateRegion = {
    _count: RegionCountAggregateOutputType | null
    _avg: RegionAvgAggregateOutputType | null
    _sum: RegionSumAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  export type RegionAvgAggregateOutputType = {
    id: number | null
  }

  export type RegionSumAggregateOutputType = {
    id: number | null
  }

  export type RegionMinAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    country: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    country: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RegionCountAggregateOutputType = {
    id: number
    name: number
    code: number
    country: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RegionAvgAggregateInputType = {
    id?: true
  }

  export type RegionSumAggregateInputType = {
    id?: true
  }

  export type RegionMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    country?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegionMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    country?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RegionCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    country?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RegionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Region to aggregate.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Regions
    **/
    _count?: true | RegionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegionMaxAggregateInputType
  }

  export type GetRegionAggregateType<T extends RegionAggregateArgs> = {
        [P in keyof T & keyof AggregateRegion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegion[P]>
      : GetScalarType<T[P], AggregateRegion[P]>
  }




  export type RegionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegionWhereInput
    orderBy?: RegionOrderByWithAggregationInput | RegionOrderByWithAggregationInput[]
    by: RegionScalarFieldEnum[] | RegionScalarFieldEnum
    having?: RegionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegionCountAggregateInputType | true
    _avg?: RegionAvgAggregateInputType
    _sum?: RegionSumAggregateInputType
    _min?: RegionMinAggregateInputType
    _max?: RegionMaxAggregateInputType
  }

  export type RegionGroupByOutputType = {
    id: number
    name: string
    code: string
    country: string
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: RegionCountAggregateOutputType | null
    _avg: RegionAvgAggregateOutputType | null
    _sum: RegionSumAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  type GetRegionGroupByPayload<T extends RegionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegionGroupByOutputType[P]>
            : GetScalarType<T[P], RegionGroupByOutputType[P]>
        }
      >
    >


  export type RegionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    country?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    documentConfigurations?: boolean | Region$documentConfigurationsArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["region"]>

  export type RegionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    country?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["region"]>

  export type RegionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    country?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["region"]>

  export type RegionSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    country?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RegionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "country" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["region"]>
  export type RegionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentConfigurations?: boolean | Region$documentConfigurationsArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RegionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RegionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RegionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Region"
    objects: {
      documentConfigurations: Prisma.$DocumentConfigurationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      code: string
      country: string
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["region"]>
    composites: {}
  }

  type RegionGetPayload<S extends boolean | null | undefined | RegionDefaultArgs> = $Result.GetResult<Prisma.$RegionPayload, S>

  type RegionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegionCountAggregateInputType | true
    }

  export interface RegionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Region'], meta: { name: 'Region' } }
    /**
     * Find zero or one Region that matches the filter.
     * @param {RegionFindUniqueArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegionFindUniqueArgs>(args: SelectSubset<T, RegionFindUniqueArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Region that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegionFindUniqueOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegionFindUniqueOrThrowArgs>(args: SelectSubset<T, RegionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Region that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegionFindFirstArgs>(args?: SelectSubset<T, RegionFindFirstArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Region that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegionFindFirstOrThrowArgs>(args?: SelectSubset<T, RegionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regions
     * const regions = await prisma.region.findMany()
     * 
     * // Get first 10 Regions
     * const regions = await prisma.region.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regionWithIdOnly = await prisma.region.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegionFindManyArgs>(args?: SelectSubset<T, RegionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Region.
     * @param {RegionCreateArgs} args - Arguments to create a Region.
     * @example
     * // Create one Region
     * const Region = await prisma.region.create({
     *   data: {
     *     // ... data to create a Region
     *   }
     * })
     * 
     */
    create<T extends RegionCreateArgs>(args: SelectSubset<T, RegionCreateArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Regions.
     * @param {RegionCreateManyArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const region = await prisma.region.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegionCreateManyArgs>(args?: SelectSubset<T, RegionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Regions and returns the data saved in the database.
     * @param {RegionCreateManyAndReturnArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const region = await prisma.region.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Regions and only return the `id`
     * const regionWithIdOnly = await prisma.region.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegionCreateManyAndReturnArgs>(args?: SelectSubset<T, RegionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Region.
     * @param {RegionDeleteArgs} args - Arguments to delete one Region.
     * @example
     * // Delete one Region
     * const Region = await prisma.region.delete({
     *   where: {
     *     // ... filter to delete one Region
     *   }
     * })
     * 
     */
    delete<T extends RegionDeleteArgs>(args: SelectSubset<T, RegionDeleteArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Region.
     * @param {RegionUpdateArgs} args - Arguments to update one Region.
     * @example
     * // Update one Region
     * const region = await prisma.region.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegionUpdateArgs>(args: SelectSubset<T, RegionUpdateArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Regions.
     * @param {RegionDeleteManyArgs} args - Arguments to filter Regions to delete.
     * @example
     * // Delete a few Regions
     * const { count } = await prisma.region.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegionDeleteManyArgs>(args?: SelectSubset<T, RegionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regions
     * const region = await prisma.region.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegionUpdateManyArgs>(args: SelectSubset<T, RegionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions and returns the data updated in the database.
     * @param {RegionUpdateManyAndReturnArgs} args - Arguments to update many Regions.
     * @example
     * // Update many Regions
     * const region = await prisma.region.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Regions and only return the `id`
     * const regionWithIdOnly = await prisma.region.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RegionUpdateManyAndReturnArgs>(args: SelectSubset<T, RegionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Region.
     * @param {RegionUpsertArgs} args - Arguments to update or create a Region.
     * @example
     * // Update or create a Region
     * const region = await prisma.region.upsert({
     *   create: {
     *     // ... data to create a Region
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Region we want to update
     *   }
     * })
     */
    upsert<T extends RegionUpsertArgs>(args: SelectSubset<T, RegionUpsertArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionCountArgs} args - Arguments to filter Regions to count.
     * @example
     * // Count the number of Regions
     * const count = await prisma.region.count({
     *   where: {
     *     // ... the filter for the Regions we want to count
     *   }
     * })
    **/
    count<T extends RegionCountArgs>(
      args?: Subset<T, RegionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegionAggregateArgs>(args: Subset<T, RegionAggregateArgs>): Prisma.PrismaPromise<GetRegionAggregateType<T>>

    /**
     * Group by Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegionGroupByArgs['orderBy'] }
        : { orderBy?: RegionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Region model
   */
  readonly fields: RegionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Region.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documentConfigurations<T extends Region$documentConfigurationsArgs<ExtArgs> = {}>(args?: Subset<T, Region$documentConfigurationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentConfigurationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Region model
   */
  interface RegionFieldRefs {
    readonly id: FieldRef<"Region", 'Int'>
    readonly name: FieldRef<"Region", 'String'>
    readonly code: FieldRef<"Region", 'String'>
    readonly country: FieldRef<"Region", 'String'>
    readonly active: FieldRef<"Region", 'Boolean'>
    readonly createdAt: FieldRef<"Region", 'DateTime'>
    readonly updatedAt: FieldRef<"Region", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Region findUnique
   */
  export type RegionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region findUniqueOrThrow
   */
  export type RegionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region findFirst
   */
  export type RegionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region findFirstOrThrow
   */
  export type RegionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region findMany
   */
  export type RegionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Regions to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region create
   */
  export type RegionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The data needed to create a Region.
     */
    data: XOR<RegionCreateInput, RegionUncheckedCreateInput>
  }

  /**
   * Region createMany
   */
  export type RegionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Regions.
     */
    data: RegionCreateManyInput | RegionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Region createManyAndReturn
   */
  export type RegionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * The data used to create many Regions.
     */
    data: RegionCreateManyInput | RegionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Region update
   */
  export type RegionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The data needed to update a Region.
     */
    data: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
    /**
     * Choose, which Region to update.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region updateMany
   */
  export type RegionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Regions.
     */
    data: XOR<RegionUpdateManyMutationInput, RegionUncheckedUpdateManyInput>
    /**
     * Filter which Regions to update
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to update.
     */
    limit?: number
  }

  /**
   * Region updateManyAndReturn
   */
  export type RegionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * The data used to update Regions.
     */
    data: XOR<RegionUpdateManyMutationInput, RegionUncheckedUpdateManyInput>
    /**
     * Filter which Regions to update
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to update.
     */
    limit?: number
  }

  /**
   * Region upsert
   */
  export type RegionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The filter to search for the Region to update in case it exists.
     */
    where: RegionWhereUniqueInput
    /**
     * In case the Region found by the `where` argument doesn't exist, create a new Region with this data.
     */
    create: XOR<RegionCreateInput, RegionUncheckedCreateInput>
    /**
     * In case the Region was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
  }

  /**
   * Region delete
   */
  export type RegionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter which Region to delete.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region deleteMany
   */
  export type RegionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regions to delete
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to delete.
     */
    limit?: number
  }

  /**
   * Region.documentConfigurations
   */
  export type Region$documentConfigurationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentConfiguration
     */
    select?: DocumentConfigurationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentConfiguration
     */
    omit?: DocumentConfigurationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentConfigurationInclude<ExtArgs> | null
    where?: DocumentConfigurationWhereInput
    orderBy?: DocumentConfigurationOrderByWithRelationInput | DocumentConfigurationOrderByWithRelationInput[]
    cursor?: DocumentConfigurationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentConfigurationScalarFieldEnum | DocumentConfigurationScalarFieldEnum[]
  }

  /**
   * Region without action
   */
  export type RegionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
  }


  /**
   * Model document_fields
   */

  export type AggregateDocument_fields = {
    _count: Document_fieldsCountAggregateOutputType | null
    _avg: Document_fieldsAvgAggregateOutputType | null
    _sum: Document_fieldsSumAggregateOutputType | null
    _min: Document_fieldsMinAggregateOutputType | null
    _max: Document_fieldsMaxAggregateOutputType | null
  }

  export type Document_fieldsAvgAggregateOutputType = {
    id: number | null
    order: number | null
    document_type_id: number | null
    document_title_id: number | null
  }

  export type Document_fieldsSumAggregateOutputType = {
    id: number | null
    order: number | null
    document_type_id: number | null
    document_title_id: number | null
  }

  export type Document_fieldsMinAggregateOutputType = {
    id: number | null
    field_id: string | null
    name: string | null
    label: string | null
    type: string | null
    placeholder: string | null
    required: boolean | null
    order: number | null
    full_width: boolean | null
    hidden: boolean | null
    default_value: string | null
    help_text: string | null
    document_type_id: number | null
    document_title_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Document_fieldsMaxAggregateOutputType = {
    id: number | null
    field_id: string | null
    name: string | null
    label: string | null
    type: string | null
    placeholder: string | null
    required: boolean | null
    order: number | null
    full_width: boolean | null
    hidden: boolean | null
    default_value: string | null
    help_text: string | null
    document_type_id: number | null
    document_title_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Document_fieldsCountAggregateOutputType = {
    id: number
    field_id: number
    name: number
    label: number
    type: number
    placeholder: number
    required: number
    order: number
    full_width: number
    hidden: number
    default_value: number
    options: number
    validation: number
    conditional_display: number
    help_text: number
    document_type_id: number
    document_title_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Document_fieldsAvgAggregateInputType = {
    id?: true
    order?: true
    document_type_id?: true
    document_title_id?: true
  }

  export type Document_fieldsSumAggregateInputType = {
    id?: true
    order?: true
    document_type_id?: true
    document_title_id?: true
  }

  export type Document_fieldsMinAggregateInputType = {
    id?: true
    field_id?: true
    name?: true
    label?: true
    type?: true
    placeholder?: true
    required?: true
    order?: true
    full_width?: true
    hidden?: true
    default_value?: true
    help_text?: true
    document_type_id?: true
    document_title_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Document_fieldsMaxAggregateInputType = {
    id?: true
    field_id?: true
    name?: true
    label?: true
    type?: true
    placeholder?: true
    required?: true
    order?: true
    full_width?: true
    hidden?: true
    default_value?: true
    help_text?: true
    document_type_id?: true
    document_title_id?: true
    created_at?: true
    updated_at?: true
  }

  export type Document_fieldsCountAggregateInputType = {
    id?: true
    field_id?: true
    name?: true
    label?: true
    type?: true
    placeholder?: true
    required?: true
    order?: true
    full_width?: true
    hidden?: true
    default_value?: true
    options?: true
    validation?: true
    conditional_display?: true
    help_text?: true
    document_type_id?: true
    document_title_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Document_fieldsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which document_fields to aggregate.
     */
    where?: document_fieldsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of document_fields to fetch.
     */
    orderBy?: document_fieldsOrderByWithRelationInput | document_fieldsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: document_fieldsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` document_fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` document_fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned document_fields
    **/
    _count?: true | Document_fieldsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Document_fieldsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Document_fieldsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Document_fieldsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Document_fieldsMaxAggregateInputType
  }

  export type GetDocument_fieldsAggregateType<T extends Document_fieldsAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument_fields]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument_fields[P]>
      : GetScalarType<T[P], AggregateDocument_fields[P]>
  }




  export type document_fieldsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: document_fieldsWhereInput
    orderBy?: document_fieldsOrderByWithAggregationInput | document_fieldsOrderByWithAggregationInput[]
    by: Document_fieldsScalarFieldEnum[] | Document_fieldsScalarFieldEnum
    having?: document_fieldsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Document_fieldsCountAggregateInputType | true
    _avg?: Document_fieldsAvgAggregateInputType
    _sum?: Document_fieldsSumAggregateInputType
    _min?: Document_fieldsMinAggregateInputType
    _max?: Document_fieldsMaxAggregateInputType
  }

  export type Document_fieldsGroupByOutputType = {
    id: number
    field_id: string
    name: string
    label: string
    type: string
    placeholder: string | null
    required: boolean
    order: number
    full_width: boolean
    hidden: boolean
    default_value: string | null
    options: JsonValue | null
    validation: JsonValue | null
    conditional_display: JsonValue | null
    help_text: string | null
    document_type_id: number
    document_title_id: number | null
    created_at: Date
    updated_at: Date
    _count: Document_fieldsCountAggregateOutputType | null
    _avg: Document_fieldsAvgAggregateOutputType | null
    _sum: Document_fieldsSumAggregateOutputType | null
    _min: Document_fieldsMinAggregateOutputType | null
    _max: Document_fieldsMaxAggregateOutputType | null
  }

  type GetDocument_fieldsGroupByPayload<T extends document_fieldsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Document_fieldsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Document_fieldsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Document_fieldsGroupByOutputType[P]>
            : GetScalarType<T[P], Document_fieldsGroupByOutputType[P]>
        }
      >
    >


  export type document_fieldsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    field_id?: boolean
    name?: boolean
    label?: boolean
    type?: boolean
    placeholder?: boolean
    required?: boolean
    order?: boolean
    full_width?: boolean
    hidden?: boolean
    default_value?: boolean
    options?: boolean
    validation?: boolean
    conditional_display?: boolean
    help_text?: boolean
    document_type_id?: boolean
    document_title_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    document_titles?: boolean | document_fields$document_titlesArgs<ExtArgs>
    document_types?: boolean | DocumentTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document_fields"]>

  export type document_fieldsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    field_id?: boolean
    name?: boolean
    label?: boolean
    type?: boolean
    placeholder?: boolean
    required?: boolean
    order?: boolean
    full_width?: boolean
    hidden?: boolean
    default_value?: boolean
    options?: boolean
    validation?: boolean
    conditional_display?: boolean
    help_text?: boolean
    document_type_id?: boolean
    document_title_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    document_titles?: boolean | document_fields$document_titlesArgs<ExtArgs>
    document_types?: boolean | DocumentTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document_fields"]>

  export type document_fieldsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    field_id?: boolean
    name?: boolean
    label?: boolean
    type?: boolean
    placeholder?: boolean
    required?: boolean
    order?: boolean
    full_width?: boolean
    hidden?: boolean
    default_value?: boolean
    options?: boolean
    validation?: boolean
    conditional_display?: boolean
    help_text?: boolean
    document_type_id?: boolean
    document_title_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    document_titles?: boolean | document_fields$document_titlesArgs<ExtArgs>
    document_types?: boolean | DocumentTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document_fields"]>

  export type document_fieldsSelectScalar = {
    id?: boolean
    field_id?: boolean
    name?: boolean
    label?: boolean
    type?: boolean
    placeholder?: boolean
    required?: boolean
    order?: boolean
    full_width?: boolean
    hidden?: boolean
    default_value?: boolean
    options?: boolean
    validation?: boolean
    conditional_display?: boolean
    help_text?: boolean
    document_type_id?: boolean
    document_title_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type document_fieldsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "field_id" | "name" | "label" | "type" | "placeholder" | "required" | "order" | "full_width" | "hidden" | "default_value" | "options" | "validation" | "conditional_display" | "help_text" | "document_type_id" | "document_title_id" | "created_at" | "updated_at", ExtArgs["result"]["document_fields"]>
  export type document_fieldsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document_titles?: boolean | document_fields$document_titlesArgs<ExtArgs>
    document_types?: boolean | DocumentTypeDefaultArgs<ExtArgs>
  }
  export type document_fieldsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document_titles?: boolean | document_fields$document_titlesArgs<ExtArgs>
    document_types?: boolean | DocumentTypeDefaultArgs<ExtArgs>
  }
  export type document_fieldsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document_titles?: boolean | document_fields$document_titlesArgs<ExtArgs>
    document_types?: boolean | DocumentTypeDefaultArgs<ExtArgs>
  }

  export type $document_fieldsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "document_fields"
    objects: {
      document_titles: Prisma.$DocumentTitlePayload<ExtArgs> | null
      document_types: Prisma.$DocumentTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      field_id: string
      name: string
      label: string
      type: string
      placeholder: string | null
      required: boolean
      order: number
      full_width: boolean
      hidden: boolean
      default_value: string | null
      options: Prisma.JsonValue | null
      validation: Prisma.JsonValue | null
      conditional_display: Prisma.JsonValue | null
      help_text: string | null
      document_type_id: number
      document_title_id: number | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["document_fields"]>
    composites: {}
  }

  type document_fieldsGetPayload<S extends boolean | null | undefined | document_fieldsDefaultArgs> = $Result.GetResult<Prisma.$document_fieldsPayload, S>

  type document_fieldsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<document_fieldsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Document_fieldsCountAggregateInputType | true
    }

  export interface document_fieldsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['document_fields'], meta: { name: 'document_fields' } }
    /**
     * Find zero or one Document_fields that matches the filter.
     * @param {document_fieldsFindUniqueArgs} args - Arguments to find a Document_fields
     * @example
     * // Get one Document_fields
     * const document_fields = await prisma.document_fields.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends document_fieldsFindUniqueArgs>(args: SelectSubset<T, document_fieldsFindUniqueArgs<ExtArgs>>): Prisma__document_fieldsClient<$Result.GetResult<Prisma.$document_fieldsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document_fields that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {document_fieldsFindUniqueOrThrowArgs} args - Arguments to find a Document_fields
     * @example
     * // Get one Document_fields
     * const document_fields = await prisma.document_fields.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends document_fieldsFindUniqueOrThrowArgs>(args: SelectSubset<T, document_fieldsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__document_fieldsClient<$Result.GetResult<Prisma.$document_fieldsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document_fields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_fieldsFindFirstArgs} args - Arguments to find a Document_fields
     * @example
     * // Get one Document_fields
     * const document_fields = await prisma.document_fields.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends document_fieldsFindFirstArgs>(args?: SelectSubset<T, document_fieldsFindFirstArgs<ExtArgs>>): Prisma__document_fieldsClient<$Result.GetResult<Prisma.$document_fieldsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document_fields that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_fieldsFindFirstOrThrowArgs} args - Arguments to find a Document_fields
     * @example
     * // Get one Document_fields
     * const document_fields = await prisma.document_fields.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends document_fieldsFindFirstOrThrowArgs>(args?: SelectSubset<T, document_fieldsFindFirstOrThrowArgs<ExtArgs>>): Prisma__document_fieldsClient<$Result.GetResult<Prisma.$document_fieldsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Document_fields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_fieldsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Document_fields
     * const document_fields = await prisma.document_fields.findMany()
     * 
     * // Get first 10 Document_fields
     * const document_fields = await prisma.document_fields.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const document_fieldsWithIdOnly = await prisma.document_fields.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends document_fieldsFindManyArgs>(args?: SelectSubset<T, document_fieldsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$document_fieldsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document_fields.
     * @param {document_fieldsCreateArgs} args - Arguments to create a Document_fields.
     * @example
     * // Create one Document_fields
     * const Document_fields = await prisma.document_fields.create({
     *   data: {
     *     // ... data to create a Document_fields
     *   }
     * })
     * 
     */
    create<T extends document_fieldsCreateArgs>(args: SelectSubset<T, document_fieldsCreateArgs<ExtArgs>>): Prisma__document_fieldsClient<$Result.GetResult<Prisma.$document_fieldsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Document_fields.
     * @param {document_fieldsCreateManyArgs} args - Arguments to create many Document_fields.
     * @example
     * // Create many Document_fields
     * const document_fields = await prisma.document_fields.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends document_fieldsCreateManyArgs>(args?: SelectSubset<T, document_fieldsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Document_fields and returns the data saved in the database.
     * @param {document_fieldsCreateManyAndReturnArgs} args - Arguments to create many Document_fields.
     * @example
     * // Create many Document_fields
     * const document_fields = await prisma.document_fields.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Document_fields and only return the `id`
     * const document_fieldsWithIdOnly = await prisma.document_fields.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends document_fieldsCreateManyAndReturnArgs>(args?: SelectSubset<T, document_fieldsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$document_fieldsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document_fields.
     * @param {document_fieldsDeleteArgs} args - Arguments to delete one Document_fields.
     * @example
     * // Delete one Document_fields
     * const Document_fields = await prisma.document_fields.delete({
     *   where: {
     *     // ... filter to delete one Document_fields
     *   }
     * })
     * 
     */
    delete<T extends document_fieldsDeleteArgs>(args: SelectSubset<T, document_fieldsDeleteArgs<ExtArgs>>): Prisma__document_fieldsClient<$Result.GetResult<Prisma.$document_fieldsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document_fields.
     * @param {document_fieldsUpdateArgs} args - Arguments to update one Document_fields.
     * @example
     * // Update one Document_fields
     * const document_fields = await prisma.document_fields.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends document_fieldsUpdateArgs>(args: SelectSubset<T, document_fieldsUpdateArgs<ExtArgs>>): Prisma__document_fieldsClient<$Result.GetResult<Prisma.$document_fieldsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Document_fields.
     * @param {document_fieldsDeleteManyArgs} args - Arguments to filter Document_fields to delete.
     * @example
     * // Delete a few Document_fields
     * const { count } = await prisma.document_fields.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends document_fieldsDeleteManyArgs>(args?: SelectSubset<T, document_fieldsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Document_fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_fieldsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Document_fields
     * const document_fields = await prisma.document_fields.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends document_fieldsUpdateManyArgs>(args: SelectSubset<T, document_fieldsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Document_fields and returns the data updated in the database.
     * @param {document_fieldsUpdateManyAndReturnArgs} args - Arguments to update many Document_fields.
     * @example
     * // Update many Document_fields
     * const document_fields = await prisma.document_fields.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Document_fields and only return the `id`
     * const document_fieldsWithIdOnly = await prisma.document_fields.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends document_fieldsUpdateManyAndReturnArgs>(args: SelectSubset<T, document_fieldsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$document_fieldsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document_fields.
     * @param {document_fieldsUpsertArgs} args - Arguments to update or create a Document_fields.
     * @example
     * // Update or create a Document_fields
     * const document_fields = await prisma.document_fields.upsert({
     *   create: {
     *     // ... data to create a Document_fields
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document_fields we want to update
     *   }
     * })
     */
    upsert<T extends document_fieldsUpsertArgs>(args: SelectSubset<T, document_fieldsUpsertArgs<ExtArgs>>): Prisma__document_fieldsClient<$Result.GetResult<Prisma.$document_fieldsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Document_fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_fieldsCountArgs} args - Arguments to filter Document_fields to count.
     * @example
     * // Count the number of Document_fields
     * const count = await prisma.document_fields.count({
     *   where: {
     *     // ... the filter for the Document_fields we want to count
     *   }
     * })
    **/
    count<T extends document_fieldsCountArgs>(
      args?: Subset<T, document_fieldsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Document_fieldsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document_fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Document_fieldsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Document_fieldsAggregateArgs>(args: Subset<T, Document_fieldsAggregateArgs>): Prisma.PrismaPromise<GetDocument_fieldsAggregateType<T>>

    /**
     * Group by Document_fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {document_fieldsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends document_fieldsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: document_fieldsGroupByArgs['orderBy'] }
        : { orderBy?: document_fieldsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, document_fieldsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocument_fieldsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the document_fields model
   */
  readonly fields: document_fieldsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for document_fields.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__document_fieldsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document_titles<T extends document_fields$document_titlesArgs<ExtArgs> = {}>(args?: Subset<T, document_fields$document_titlesArgs<ExtArgs>>): Prisma__DocumentTitleClient<$Result.GetResult<Prisma.$DocumentTitlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    document_types<T extends DocumentTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentTypeDefaultArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the document_fields model
   */
  interface document_fieldsFieldRefs {
    readonly id: FieldRef<"document_fields", 'Int'>
    readonly field_id: FieldRef<"document_fields", 'String'>
    readonly name: FieldRef<"document_fields", 'String'>
    readonly label: FieldRef<"document_fields", 'String'>
    readonly type: FieldRef<"document_fields", 'String'>
    readonly placeholder: FieldRef<"document_fields", 'String'>
    readonly required: FieldRef<"document_fields", 'Boolean'>
    readonly order: FieldRef<"document_fields", 'Int'>
    readonly full_width: FieldRef<"document_fields", 'Boolean'>
    readonly hidden: FieldRef<"document_fields", 'Boolean'>
    readonly default_value: FieldRef<"document_fields", 'String'>
    readonly options: FieldRef<"document_fields", 'Json'>
    readonly validation: FieldRef<"document_fields", 'Json'>
    readonly conditional_display: FieldRef<"document_fields", 'Json'>
    readonly help_text: FieldRef<"document_fields", 'String'>
    readonly document_type_id: FieldRef<"document_fields", 'Int'>
    readonly document_title_id: FieldRef<"document_fields", 'Int'>
    readonly created_at: FieldRef<"document_fields", 'DateTime'>
    readonly updated_at: FieldRef<"document_fields", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * document_fields findUnique
   */
  export type document_fieldsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_fields
     */
    select?: document_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_fields
     */
    omit?: document_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_fieldsInclude<ExtArgs> | null
    /**
     * Filter, which document_fields to fetch.
     */
    where: document_fieldsWhereUniqueInput
  }

  /**
   * document_fields findUniqueOrThrow
   */
  export type document_fieldsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_fields
     */
    select?: document_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_fields
     */
    omit?: document_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_fieldsInclude<ExtArgs> | null
    /**
     * Filter, which document_fields to fetch.
     */
    where: document_fieldsWhereUniqueInput
  }

  /**
   * document_fields findFirst
   */
  export type document_fieldsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_fields
     */
    select?: document_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_fields
     */
    omit?: document_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_fieldsInclude<ExtArgs> | null
    /**
     * Filter, which document_fields to fetch.
     */
    where?: document_fieldsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of document_fields to fetch.
     */
    orderBy?: document_fieldsOrderByWithRelationInput | document_fieldsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for document_fields.
     */
    cursor?: document_fieldsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` document_fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` document_fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of document_fields.
     */
    distinct?: Document_fieldsScalarFieldEnum | Document_fieldsScalarFieldEnum[]
  }

  /**
   * document_fields findFirstOrThrow
   */
  export type document_fieldsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_fields
     */
    select?: document_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_fields
     */
    omit?: document_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_fieldsInclude<ExtArgs> | null
    /**
     * Filter, which document_fields to fetch.
     */
    where?: document_fieldsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of document_fields to fetch.
     */
    orderBy?: document_fieldsOrderByWithRelationInput | document_fieldsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for document_fields.
     */
    cursor?: document_fieldsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` document_fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` document_fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of document_fields.
     */
    distinct?: Document_fieldsScalarFieldEnum | Document_fieldsScalarFieldEnum[]
  }

  /**
   * document_fields findMany
   */
  export type document_fieldsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_fields
     */
    select?: document_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_fields
     */
    omit?: document_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_fieldsInclude<ExtArgs> | null
    /**
     * Filter, which document_fields to fetch.
     */
    where?: document_fieldsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of document_fields to fetch.
     */
    orderBy?: document_fieldsOrderByWithRelationInput | document_fieldsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing document_fields.
     */
    cursor?: document_fieldsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` document_fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` document_fields.
     */
    skip?: number
    distinct?: Document_fieldsScalarFieldEnum | Document_fieldsScalarFieldEnum[]
  }

  /**
   * document_fields create
   */
  export type document_fieldsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_fields
     */
    select?: document_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_fields
     */
    omit?: document_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_fieldsInclude<ExtArgs> | null
    /**
     * The data needed to create a document_fields.
     */
    data: XOR<document_fieldsCreateInput, document_fieldsUncheckedCreateInput>
  }

  /**
   * document_fields createMany
   */
  export type document_fieldsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many document_fields.
     */
    data: document_fieldsCreateManyInput | document_fieldsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * document_fields createManyAndReturn
   */
  export type document_fieldsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_fields
     */
    select?: document_fieldsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the document_fields
     */
    omit?: document_fieldsOmit<ExtArgs> | null
    /**
     * The data used to create many document_fields.
     */
    data: document_fieldsCreateManyInput | document_fieldsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_fieldsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * document_fields update
   */
  export type document_fieldsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_fields
     */
    select?: document_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_fields
     */
    omit?: document_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_fieldsInclude<ExtArgs> | null
    /**
     * The data needed to update a document_fields.
     */
    data: XOR<document_fieldsUpdateInput, document_fieldsUncheckedUpdateInput>
    /**
     * Choose, which document_fields to update.
     */
    where: document_fieldsWhereUniqueInput
  }

  /**
   * document_fields updateMany
   */
  export type document_fieldsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update document_fields.
     */
    data: XOR<document_fieldsUpdateManyMutationInput, document_fieldsUncheckedUpdateManyInput>
    /**
     * Filter which document_fields to update
     */
    where?: document_fieldsWhereInput
    /**
     * Limit how many document_fields to update.
     */
    limit?: number
  }

  /**
   * document_fields updateManyAndReturn
   */
  export type document_fieldsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_fields
     */
    select?: document_fieldsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the document_fields
     */
    omit?: document_fieldsOmit<ExtArgs> | null
    /**
     * The data used to update document_fields.
     */
    data: XOR<document_fieldsUpdateManyMutationInput, document_fieldsUncheckedUpdateManyInput>
    /**
     * Filter which document_fields to update
     */
    where?: document_fieldsWhereInput
    /**
     * Limit how many document_fields to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_fieldsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * document_fields upsert
   */
  export type document_fieldsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_fields
     */
    select?: document_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_fields
     */
    omit?: document_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_fieldsInclude<ExtArgs> | null
    /**
     * The filter to search for the document_fields to update in case it exists.
     */
    where: document_fieldsWhereUniqueInput
    /**
     * In case the document_fields found by the `where` argument doesn't exist, create a new document_fields with this data.
     */
    create: XOR<document_fieldsCreateInput, document_fieldsUncheckedCreateInput>
    /**
     * In case the document_fields was found with the provided `where` argument, update it with this data.
     */
    update: XOR<document_fieldsUpdateInput, document_fieldsUncheckedUpdateInput>
  }

  /**
   * document_fields delete
   */
  export type document_fieldsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_fields
     */
    select?: document_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_fields
     */
    omit?: document_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_fieldsInclude<ExtArgs> | null
    /**
     * Filter which document_fields to delete.
     */
    where: document_fieldsWhereUniqueInput
  }

  /**
   * document_fields deleteMany
   */
  export type document_fieldsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which document_fields to delete
     */
    where?: document_fieldsWhereInput
    /**
     * Limit how many document_fields to delete.
     */
    limit?: number
  }

  /**
   * document_fields.document_titles
   */
  export type document_fields$document_titlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTitle
     */
    select?: DocumentTitleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTitle
     */
    omit?: DocumentTitleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTitleInclude<ExtArgs> | null
    where?: DocumentTitleWhereInput
  }

  /**
   * document_fields without action
   */
  export type document_fieldsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the document_fields
     */
    select?: document_fieldsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the document_fields
     */
    omit?: document_fieldsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: document_fieldsInclude<ExtArgs> | null
  }


  /**
   * Model FormTemplate
   */

  export type AggregateFormTemplate = {
    _count: FormTemplateCountAggregateOutputType | null
    _avg: FormTemplateAvgAggregateOutputType | null
    _sum: FormTemplateSumAggregateOutputType | null
    _min: FormTemplateMinAggregateOutputType | null
    _max: FormTemplateMaxAggregateOutputType | null
  }

  export type FormTemplateAvgAggregateOutputType = {
    id: number | null
    version: number | null
  }

  export type FormTemplateSumAggregateOutputType = {
    id: number | null
    version: number | null
  }

  export type FormTemplateMinAggregateOutputType = {
    id: number | null
    form_key: string | null
    name: string | null
    description: string | null
    version: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FormTemplateMaxAggregateOutputType = {
    id: number | null
    form_key: string | null
    name: string | null
    description: string | null
    version: number | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FormTemplateCountAggregateOutputType = {
    id: number
    form_key: number
    name: number
    description: number
    version: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type FormTemplateAvgAggregateInputType = {
    id?: true
    version?: true
  }

  export type FormTemplateSumAggregateInputType = {
    id?: true
    version?: true
  }

  export type FormTemplateMinAggregateInputType = {
    id?: true
    form_key?: true
    name?: true
    description?: true
    version?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type FormTemplateMaxAggregateInputType = {
    id?: true
    form_key?: true
    name?: true
    description?: true
    version?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type FormTemplateCountAggregateInputType = {
    id?: true
    form_key?: true
    name?: true
    description?: true
    version?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type FormTemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormTemplate to aggregate.
     */
    where?: FormTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormTemplates to fetch.
     */
    orderBy?: FormTemplateOrderByWithRelationInput | FormTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FormTemplates
    **/
    _count?: true | FormTemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormTemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormTemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormTemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormTemplateMaxAggregateInputType
  }

  export type GetFormTemplateAggregateType<T extends FormTemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateFormTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormTemplate[P]>
      : GetScalarType<T[P], AggregateFormTemplate[P]>
  }




  export type FormTemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormTemplateWhereInput
    orderBy?: FormTemplateOrderByWithAggregationInput | FormTemplateOrderByWithAggregationInput[]
    by: FormTemplateScalarFieldEnum[] | FormTemplateScalarFieldEnum
    having?: FormTemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormTemplateCountAggregateInputType | true
    _avg?: FormTemplateAvgAggregateInputType
    _sum?: FormTemplateSumAggregateInputType
    _min?: FormTemplateMinAggregateInputType
    _max?: FormTemplateMaxAggregateInputType
  }

  export type FormTemplateGroupByOutputType = {
    id: number
    form_key: string
    name: string
    description: string | null
    version: number
    is_active: boolean
    created_at: Date
    updated_at: Date
    _count: FormTemplateCountAggregateOutputType | null
    _avg: FormTemplateAvgAggregateOutputType | null
    _sum: FormTemplateSumAggregateOutputType | null
    _min: FormTemplateMinAggregateOutputType | null
    _max: FormTemplateMaxAggregateOutputType | null
  }

  type GetFormTemplateGroupByPayload<T extends FormTemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormTemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormTemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormTemplateGroupByOutputType[P]>
            : GetScalarType<T[P], FormTemplateGroupByOutputType[P]>
        }
      >
    >


  export type FormTemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    form_key?: boolean
    name?: boolean
    description?: boolean
    version?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    form_fields?: boolean | FormTemplate$form_fieldsArgs<ExtArgs>
    document_types?: boolean | FormTemplate$document_typesArgs<ExtArgs>
    _count?: boolean | FormTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formTemplate"]>

  export type FormTemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    form_key?: boolean
    name?: boolean
    description?: boolean
    version?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["formTemplate"]>

  export type FormTemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    form_key?: boolean
    name?: boolean
    description?: boolean
    version?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["formTemplate"]>

  export type FormTemplateSelectScalar = {
    id?: boolean
    form_key?: boolean
    name?: boolean
    description?: boolean
    version?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type FormTemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "form_key" | "name" | "description" | "version" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["formTemplate"]>
  export type FormTemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form_fields?: boolean | FormTemplate$form_fieldsArgs<ExtArgs>
    document_types?: boolean | FormTemplate$document_typesArgs<ExtArgs>
    _count?: boolean | FormTemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FormTemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type FormTemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $FormTemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormTemplate"
    objects: {
      form_fields: Prisma.$FormFieldPayload<ExtArgs>[]
      document_types: Prisma.$DocumentTypePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      form_key: string
      name: string
      description: string | null
      version: number
      is_active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["formTemplate"]>
    composites: {}
  }

  type FormTemplateGetPayload<S extends boolean | null | undefined | FormTemplateDefaultArgs> = $Result.GetResult<Prisma.$FormTemplatePayload, S>

  type FormTemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FormTemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FormTemplateCountAggregateInputType | true
    }

  export interface FormTemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FormTemplate'], meta: { name: 'FormTemplate' } }
    /**
     * Find zero or one FormTemplate that matches the filter.
     * @param {FormTemplateFindUniqueArgs} args - Arguments to find a FormTemplate
     * @example
     * // Get one FormTemplate
     * const formTemplate = await prisma.formTemplate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FormTemplateFindUniqueArgs>(args: SelectSubset<T, FormTemplateFindUniqueArgs<ExtArgs>>): Prisma__FormTemplateClient<$Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FormTemplate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FormTemplateFindUniqueOrThrowArgs} args - Arguments to find a FormTemplate
     * @example
     * // Get one FormTemplate
     * const formTemplate = await prisma.formTemplate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FormTemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, FormTemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FormTemplateClient<$Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormTemplate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormTemplateFindFirstArgs} args - Arguments to find a FormTemplate
     * @example
     * // Get one FormTemplate
     * const formTemplate = await prisma.formTemplate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FormTemplateFindFirstArgs>(args?: SelectSubset<T, FormTemplateFindFirstArgs<ExtArgs>>): Prisma__FormTemplateClient<$Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FormTemplate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormTemplateFindFirstOrThrowArgs} args - Arguments to find a FormTemplate
     * @example
     * // Get one FormTemplate
     * const formTemplate = await prisma.formTemplate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FormTemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, FormTemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__FormTemplateClient<$Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FormTemplates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormTemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormTemplates
     * const formTemplates = await prisma.formTemplate.findMany()
     * 
     * // Get first 10 FormTemplates
     * const formTemplates = await prisma.formTemplate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formTemplateWithIdOnly = await prisma.formTemplate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FormTemplateFindManyArgs>(args?: SelectSubset<T, FormTemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FormTemplate.
     * @param {FormTemplateCreateArgs} args - Arguments to create a FormTemplate.
     * @example
     * // Create one FormTemplate
     * const FormTemplate = await prisma.formTemplate.create({
     *   data: {
     *     // ... data to create a FormTemplate
     *   }
     * })
     * 
     */
    create<T extends FormTemplateCreateArgs>(args: SelectSubset<T, FormTemplateCreateArgs<ExtArgs>>): Prisma__FormTemplateClient<$Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FormTemplates.
     * @param {FormTemplateCreateManyArgs} args - Arguments to create many FormTemplates.
     * @example
     * // Create many FormTemplates
     * const formTemplate = await prisma.formTemplate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FormTemplateCreateManyArgs>(args?: SelectSubset<T, FormTemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FormTemplates and returns the data saved in the database.
     * @param {FormTemplateCreateManyAndReturnArgs} args - Arguments to create many FormTemplates.
     * @example
     * // Create many FormTemplates
     * const formTemplate = await prisma.formTemplate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FormTemplates and only return the `id`
     * const formTemplateWithIdOnly = await prisma.formTemplate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FormTemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, FormTemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FormTemplate.
     * @param {FormTemplateDeleteArgs} args - Arguments to delete one FormTemplate.
     * @example
     * // Delete one FormTemplate
     * const FormTemplate = await prisma.formTemplate.delete({
     *   where: {
     *     // ... filter to delete one FormTemplate
     *   }
     * })
     * 
     */
    delete<T extends FormTemplateDeleteArgs>(args: SelectSubset<T, FormTemplateDeleteArgs<ExtArgs>>): Prisma__FormTemplateClient<$Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FormTemplate.
     * @param {FormTemplateUpdateArgs} args - Arguments to update one FormTemplate.
     * @example
     * // Update one FormTemplate
     * const formTemplate = await prisma.formTemplate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FormTemplateUpdateArgs>(args: SelectSubset<T, FormTemplateUpdateArgs<ExtArgs>>): Prisma__FormTemplateClient<$Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FormTemplates.
     * @param {FormTemplateDeleteManyArgs} args - Arguments to filter FormTemplates to delete.
     * @example
     * // Delete a few FormTemplates
     * const { count } = await prisma.formTemplate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FormTemplateDeleteManyArgs>(args?: SelectSubset<T, FormTemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormTemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormTemplates
     * const formTemplate = await prisma.formTemplate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FormTemplateUpdateManyArgs>(args: SelectSubset<T, FormTemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormTemplates and returns the data updated in the database.
     * @param {FormTemplateUpdateManyAndReturnArgs} args - Arguments to update many FormTemplates.
     * @example
     * // Update many FormTemplates
     * const formTemplate = await prisma.formTemplate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FormTemplates and only return the `id`
     * const formTemplateWithIdOnly = await prisma.formTemplate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FormTemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, FormTemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FormTemplate.
     * @param {FormTemplateUpsertArgs} args - Arguments to update or create a FormTemplate.
     * @example
     * // Update or create a FormTemplate
     * const formTemplate = await prisma.formTemplate.upsert({
     *   create: {
     *     // ... data to create a FormTemplate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormTemplate we want to update
     *   }
     * })
     */
    upsert<T extends FormTemplateUpsertArgs>(args: SelectSubset<T, FormTemplateUpsertArgs<ExtArgs>>): Prisma__FormTemplateClient<$Result.GetResult<Prisma.$FormTemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FormTemplates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormTemplateCountArgs} args - Arguments to filter FormTemplates to count.
     * @example
     * // Count the number of FormTemplates
     * const count = await prisma.formTemplate.count({
     *   where: {
     *     // ... the filter for the FormTemplates we want to count
     *   }
     * })
    **/
    count<T extends FormTemplateCountArgs>(
      args?: Subset<T, FormTemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormTemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormTemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormTemplateAggregateArgs>(args: Subset<T, FormTemplateAggregateArgs>): Prisma.PrismaPromise<GetFormTemplateAggregateType<T>>

    /**
     * Group by FormTemplate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormTemplateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FormTemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormTemplateGroupByArgs['orderBy'] }
        : { orderBy?: FormTemplateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FormTemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FormTemplate model
   */
  readonly fields: FormTemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FormTemplate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FormTemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    form_fields<T extends FormTemplate$form_fieldsArgs<ExtArgs> = {}>(args?: Subset<T, FormTemplate$form_fieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    document_types<T extends FormTemplate$document_typesArgs<ExtArgs> = {}>(args?: Subset<T, FormTemplate$document_typesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FormTemplate model
   */
  interface FormTemplateFieldRefs {
    readonly id: FieldRef<"FormTemplate", 'Int'>
    readonly form_key: FieldRef<"FormTemplate", 'String'>
    readonly name: FieldRef<"FormTemplate", 'String'>
    readonly description: FieldRef<"FormTemplate", 'String'>
    readonly version: FieldRef<"FormTemplate", 'Int'>
    readonly is_active: FieldRef<"FormTemplate", 'Boolean'>
    readonly created_at: FieldRef<"FormTemplate", 'DateTime'>
    readonly updated_at: FieldRef<"FormTemplate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FormTemplate findUnique
   */
  export type FormTemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormTemplate
     */
    select?: FormTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormTemplate
     */
    omit?: FormTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormTemplateInclude<ExtArgs> | null
    /**
     * Filter, which FormTemplate to fetch.
     */
    where: FormTemplateWhereUniqueInput
  }

  /**
   * FormTemplate findUniqueOrThrow
   */
  export type FormTemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormTemplate
     */
    select?: FormTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormTemplate
     */
    omit?: FormTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormTemplateInclude<ExtArgs> | null
    /**
     * Filter, which FormTemplate to fetch.
     */
    where: FormTemplateWhereUniqueInput
  }

  /**
   * FormTemplate findFirst
   */
  export type FormTemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormTemplate
     */
    select?: FormTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormTemplate
     */
    omit?: FormTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormTemplateInclude<ExtArgs> | null
    /**
     * Filter, which FormTemplate to fetch.
     */
    where?: FormTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormTemplates to fetch.
     */
    orderBy?: FormTemplateOrderByWithRelationInput | FormTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormTemplates.
     */
    cursor?: FormTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormTemplates.
     */
    distinct?: FormTemplateScalarFieldEnum | FormTemplateScalarFieldEnum[]
  }

  /**
   * FormTemplate findFirstOrThrow
   */
  export type FormTemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormTemplate
     */
    select?: FormTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormTemplate
     */
    omit?: FormTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormTemplateInclude<ExtArgs> | null
    /**
     * Filter, which FormTemplate to fetch.
     */
    where?: FormTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormTemplates to fetch.
     */
    orderBy?: FormTemplateOrderByWithRelationInput | FormTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FormTemplates.
     */
    cursor?: FormTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormTemplates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FormTemplates.
     */
    distinct?: FormTemplateScalarFieldEnum | FormTemplateScalarFieldEnum[]
  }

  /**
   * FormTemplate findMany
   */
  export type FormTemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormTemplate
     */
    select?: FormTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormTemplate
     */
    omit?: FormTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormTemplateInclude<ExtArgs> | null
    /**
     * Filter, which FormTemplates to fetch.
     */
    where?: FormTemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FormTemplates to fetch.
     */
    orderBy?: FormTemplateOrderByWithRelationInput | FormTemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FormTemplates.
     */
    cursor?: FormTemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FormTemplates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FormTemplates.
     */
    skip?: number
    distinct?: FormTemplateScalarFieldEnum | FormTemplateScalarFieldEnum[]
  }

  /**
   * FormTemplate create
   */
  export type FormTemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormTemplate
     */
    select?: FormTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormTemplate
     */
    omit?: FormTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormTemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a FormTemplate.
     */
    data: XOR<FormTemplateCreateInput, FormTemplateUncheckedCreateInput>
  }

  /**
   * FormTemplate createMany
   */
  export type FormTemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FormTemplates.
     */
    data: FormTemplateCreateManyInput | FormTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormTemplate createManyAndReturn
   */
  export type FormTemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormTemplate
     */
    select?: FormTemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormTemplate
     */
    omit?: FormTemplateOmit<ExtArgs> | null
    /**
     * The data used to create many FormTemplates.
     */
    data: FormTemplateCreateManyInput | FormTemplateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FormTemplate update
   */
  export type FormTemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormTemplate
     */
    select?: FormTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormTemplate
     */
    omit?: FormTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormTemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a FormTemplate.
     */
    data: XOR<FormTemplateUpdateInput, FormTemplateUncheckedUpdateInput>
    /**
     * Choose, which FormTemplate to update.
     */
    where: FormTemplateWhereUniqueInput
  }

  /**
   * FormTemplate updateMany
   */
  export type FormTemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FormTemplates.
     */
    data: XOR<FormTemplateUpdateManyMutationInput, FormTemplateUncheckedUpdateManyInput>
    /**
     * Filter which FormTemplates to update
     */
    where?: FormTemplateWhereInput
    /**
     * Limit how many FormTemplates to update.
     */
    limit?: number
  }

  /**
   * FormTemplate updateManyAndReturn
   */
  export type FormTemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormTemplate
     */
    select?: FormTemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FormTemplate
     */
    omit?: FormTemplateOmit<ExtArgs> | null
    /**
     * The data used to update FormTemplates.
     */
    data: XOR<FormTemplateUpdateManyMutationInput, FormTemplateUncheckedUpdateManyInput>
    /**
     * Filter which FormTemplates to update
     */
    where?: FormTemplateWhereInput
    /**
     * Limit how many FormTemplates to update.
     */
    limit?: number
  }

  /**
   * FormTemplate upsert
   */
  export type FormTemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormTemplate
     */
    select?: FormTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormTemplate
     */
    omit?: FormTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormTemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the FormTemplate to update in case it exists.
     */
    where: FormTemplateWhereUniqueInput
    /**
     * In case the FormTemplate found by the `where` argument doesn't exist, create a new FormTemplate with this data.
     */
    create: XOR<FormTemplateCreateInput, FormTemplateUncheckedCreateInput>
    /**
     * In case the FormTemplate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormTemplateUpdateInput, FormTemplateUncheckedUpdateInput>
  }

  /**
   * FormTemplate delete
   */
  export type FormTemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormTemplate
     */
    select?: FormTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormTemplate
     */
    omit?: FormTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormTemplateInclude<ExtArgs> | null
    /**
     * Filter which FormTemplate to delete.
     */
    where: FormTemplateWhereUniqueInput
  }

  /**
   * FormTemplate deleteMany
   */
  export type FormTemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FormTemplates to delete
     */
    where?: FormTemplateWhereInput
    /**
     * Limit how many FormTemplates to delete.
     */
    limit?: number
  }

  /**
   * FormTemplate.form_fields
   */
  export type FormTemplate$form_fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormField
     */
    select?: FormFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormField
     */
    omit?: FormFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormFieldInclude<ExtArgs> | null
    where?: FormFieldWhereInput
    orderBy?: FormFieldOrderByWithRelationInput | FormFieldOrderByWithRelationInput[]
    cursor?: FormFieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FormFieldScalarFieldEnum | FormFieldScalarFieldEnum[]
  }

  /**
   * FormTemplate.document_types
   */
  export type FormTemplate$document_typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentType
     */
    select?: DocumentTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentType
     */
    omit?: DocumentTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeInclude<ExtArgs> | null
    where?: DocumentTypeWhereInput
    orderBy?: DocumentTypeOrderByWithRelationInput | DocumentTypeOrderByWithRelationInput[]
    cursor?: DocumentTypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentTypeScalarFieldEnum | DocumentTypeScalarFieldEnum[]
  }

  /**
   * FormTemplate without action
   */
  export type FormTemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FormTemplate
     */
    select?: FormTemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FormTemplate
     */
    omit?: FormTemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FormTemplateInclude<ExtArgs> | null
  }


  /**
   * Model FieldOption
   */

  export type AggregateFieldOption = {
    _count: FieldOptionCountAggregateOutputType | null
    _avg: FieldOptionAvgAggregateOutputType | null
    _sum: FieldOptionSumAggregateOutputType | null
    _min: FieldOptionMinAggregateOutputType | null
    _max: FieldOptionMaxAggregateOutputType | null
  }

  export type FieldOptionAvgAggregateOutputType = {
    id: number | null
    field_id: number | null
    order: number | null
  }

  export type FieldOptionSumAggregateOutputType = {
    id: number | null
    field_id: number | null
    order: number | null
  }

  export type FieldOptionMinAggregateOutputType = {
    id: number | null
    field_id: number | null
    option_value: string | null
    option_label: string | null
    order: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FieldOptionMaxAggregateOutputType = {
    id: number | null
    field_id: number | null
    option_value: string | null
    option_label: string | null
    order: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type FieldOptionCountAggregateOutputType = {
    id: number
    field_id: number
    option_value: number
    option_label: number
    order: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type FieldOptionAvgAggregateInputType = {
    id?: true
    field_id?: true
    order?: true
  }

  export type FieldOptionSumAggregateInputType = {
    id?: true
    field_id?: true
    order?: true
  }

  export type FieldOptionMinAggregateInputType = {
    id?: true
    field_id?: true
    option_value?: true
    option_label?: true
    order?: true
    created_at?: true
    updated_at?: true
  }

  export type FieldOptionMaxAggregateInputType = {
    id?: true
    field_id?: true
    option_value?: true
    option_label?: true
    order?: true
    created_at?: true
    updated_at?: true
  }

  export type FieldOptionCountAggregateInputType = {
    id?: true
    field_id?: true
    option_value?: true
    option_label?: true
    order?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type FieldOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FieldOption to aggregate.
     */
    where?: FieldOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FieldOptions to fetch.
     */
    orderBy?: FieldOptionOrderByWithRelationInput | FieldOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FieldOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FieldOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FieldOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FieldOptions
    **/
    _count?: true | FieldOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FieldOptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FieldOptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FieldOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FieldOptionMaxAggregateInputType
  }

  export type GetFieldOptionAggregateType<T extends FieldOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateFieldOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFieldOption[P]>
      : GetScalarType<T[P], AggregateFieldOption[P]>
  }




  export type FieldOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FieldOptionWhereInput
    orderBy?: FieldOptionOrderByWithAggregationInput | FieldOptionOrderByWithAggregationInput[]
    by: FieldOptionScalarFieldEnum[] | FieldOptionScalarFieldEnum
    having?: FieldOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FieldOptionCountAggregateInputType | true
    _avg?: FieldOptionAvgAggregateInputType
    _sum?: FieldOptionSumAggregateInputType
    _min?: FieldOptionMinAggregateInputType
    _max?: FieldOptionMaxAggregateInputType
  }

  export type FieldOptionGroupByOutputType = {
    id: number
    field_id: number
    option_value: string
    option_label: string
    order: number
    created_at: Date
    updated_at: Date
    _count: FieldOptionCountAggregateOutputType | null
    _avg: FieldOptionAvgAggregateOutputType | null
    _sum: FieldOptionSumAggregateOutputType | null
    _min: FieldOptionMinAggregateOutputType | null
    _max: FieldOptionMaxAggregateOutputType | null
  }

  type GetFieldOptionGroupByPayload<T extends FieldOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FieldOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FieldOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FieldOptionGroupByOutputType[P]>
            : GetScalarType<T[P], FieldOptionGroupByOutputType[P]>
        }
      >
    >


  export type FieldOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    field_id?: boolean
    option_value?: boolean
    option_label?: boolean
    order?: boolean
    created_at?: boolean
    updated_at?: boolean
    form_field?: boolean | FormFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fieldOption"]>

  export type FieldOptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    field_id?: boolean
    option_value?: boolean
    option_label?: boolean
    order?: boolean
    created_at?: boolean
    updated_at?: boolean
    form_field?: boolean | FormFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fieldOption"]>

  export type FieldOptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    field_id?: boolean
    option_value?: boolean
    option_label?: boolean
    order?: boolean
    created_at?: boolean
    updated_at?: boolean
    form_field?: boolean | FormFieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fieldOption"]>

  export type FieldOptionSelectScalar = {
    id?: boolean
    field_id?: boolean
    option_value?: boolean
    option_label?: boolean
    order?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type FieldOptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "field_id" | "option_value" | "option_label" | "order" | "created_at" | "updated_at", ExtArgs["result"]["fieldOption"]>
  export type FieldOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form_field?: boolean | FormFieldDefaultArgs<ExtArgs>
  }
  export type FieldOptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form_field?: boolean | FormFieldDefaultArgs<ExtArgs>
  }
  export type FieldOptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    form_field?: boolean | FormFieldDefaultArgs<ExtArgs>
  }

  export type $FieldOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FieldOption"
    objects: {
      form_field: Prisma.$FormFieldPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      field_id: number
      option_value: string
      option_label: string
      order: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["fieldOption"]>
    composites: {}
  }

  type FieldOptionGetPayload<S extends boolean | null | undefined | FieldOptionDefaultArgs> = $Result.GetResult<Prisma.$FieldOptionPayload, S>

  type FieldOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FieldOptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FieldOptionCountAggregateInputType | true
    }

  export interface FieldOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FieldOption'], meta: { name: 'FieldOption' } }
    /**
     * Find zero or one FieldOption that matches the filter.
     * @param {FieldOptionFindUniqueArgs} args - Arguments to find a FieldOption
     * @example
     * // Get one FieldOption
     * const fieldOption = await prisma.fieldOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FieldOptionFindUniqueArgs>(args: SelectSubset<T, FieldOptionFindUniqueArgs<ExtArgs>>): Prisma__FieldOptionClient<$Result.GetResult<Prisma.$FieldOptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FieldOption that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FieldOptionFindUniqueOrThrowArgs} args - Arguments to find a FieldOption
     * @example
     * // Get one FieldOption
     * const fieldOption = await prisma.fieldOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FieldOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, FieldOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FieldOptionClient<$Result.GetResult<Prisma.$FieldOptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FieldOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldOptionFindFirstArgs} args - Arguments to find a FieldOption
     * @example
     * // Get one FieldOption
     * const fieldOption = await prisma.fieldOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FieldOptionFindFirstArgs>(args?: SelectSubset<T, FieldOptionFindFirstArgs<ExtArgs>>): Prisma__FieldOptionClient<$Result.GetResult<Prisma.$FieldOptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FieldOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldOptionFindFirstOrThrowArgs} args - Arguments to find a FieldOption
     * @example
     * // Get one FieldOption
     * const fieldOption = await prisma.fieldOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FieldOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, FieldOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__FieldOptionClient<$Result.GetResult<Prisma.$FieldOptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FieldOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FieldOptions
     * const fieldOptions = await prisma.fieldOption.findMany()
     * 
     * // Get first 10 FieldOptions
     * const fieldOptions = await prisma.fieldOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fieldOptionWithIdOnly = await prisma.fieldOption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FieldOptionFindManyArgs>(args?: SelectSubset<T, FieldOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldOptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FieldOption.
     * @param {FieldOptionCreateArgs} args - Arguments to create a FieldOption.
     * @example
     * // Create one FieldOption
     * const FieldOption = await prisma.fieldOption.create({
     *   data: {
     *     // ... data to create a FieldOption
     *   }
     * })
     * 
     */
    create<T extends FieldOptionCreateArgs>(args: SelectSubset<T, FieldOptionCreateArgs<ExtArgs>>): Prisma__FieldOptionClient<$Result.GetResult<Prisma.$FieldOptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FieldOptions.
     * @param {FieldOptionCreateManyArgs} args - Arguments to create many FieldOptions.
     * @example
     * // Create many FieldOptions
     * const fieldOption = await prisma.fieldOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FieldOptionCreateManyArgs>(args?: SelectSubset<T, FieldOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FieldOptions and returns the data saved in the database.
     * @param {FieldOptionCreateManyAndReturnArgs} args - Arguments to create many FieldOptions.
     * @example
     * // Create many FieldOptions
     * const fieldOption = await prisma.fieldOption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FieldOptions and only return the `id`
     * const fieldOptionWithIdOnly = await prisma.fieldOption.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FieldOptionCreateManyAndReturnArgs>(args?: SelectSubset<T, FieldOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldOptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FieldOption.
     * @param {FieldOptionDeleteArgs} args - Arguments to delete one FieldOption.
     * @example
     * // Delete one FieldOption
     * const FieldOption = await prisma.fieldOption.delete({
     *   where: {
     *     // ... filter to delete one FieldOption
     *   }
     * })
     * 
     */
    delete<T extends FieldOptionDeleteArgs>(args: SelectSubset<T, FieldOptionDeleteArgs<ExtArgs>>): Prisma__FieldOptionClient<$Result.GetResult<Prisma.$FieldOptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FieldOption.
     * @param {FieldOptionUpdateArgs} args - Arguments to update one FieldOption.
     * @example
     * // Update one FieldOption
     * const fieldOption = await prisma.fieldOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FieldOptionUpdateArgs>(args: SelectSubset<T, FieldOptionUpdateArgs<ExtArgs>>): Prisma__FieldOptionClient<$Result.GetResult<Prisma.$FieldOptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FieldOptions.
     * @param {FieldOptionDeleteManyArgs} args - Arguments to filter FieldOptions to delete.
     * @example
     * // Delete a few FieldOptions
     * const { count } = await prisma.fieldOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FieldOptionDeleteManyArgs>(args?: SelectSubset<T, FieldOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FieldOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FieldOptions
     * const fieldOption = await prisma.fieldOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FieldOptionUpdateManyArgs>(args: SelectSubset<T, FieldOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FieldOptions and returns the data updated in the database.
     * @param {FieldOptionUpdateManyAndReturnArgs} args - Arguments to update many FieldOptions.
     * @example
     * // Update many FieldOptions
     * const fieldOption = await prisma.fieldOption.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FieldOptions and only return the `id`
     * const fieldOptionWithIdOnly = await prisma.fieldOption.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FieldOptionUpdateManyAndReturnArgs>(args: SelectSubset<T, FieldOptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldOptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FieldOption.
     * @param {FieldOptionUpsertArgs} args - Arguments to update or create a FieldOption.
     * @example
     * // Update or create a FieldOption
     * const fieldOption = await prisma.fieldOption.upsert({
     *   create: {
     *     // ... data to create a FieldOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FieldOption we want to update
     *   }
     * })
     */
    upsert<T extends FieldOptionUpsertArgs>(args: SelectSubset<T, FieldOptionUpsertArgs<ExtArgs>>): Prisma__FieldOptionClient<$Result.GetResult<Prisma.$FieldOptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FieldOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldOptionCountArgs} args - Arguments to filter FieldOptions to count.
     * @example
     * // Count the number of FieldOptions
     * const count = await prisma.fieldOption.count({
     *   where: {
     *     // ... the filter for the FieldOptions we want to count
     *   }
     * })
    **/
    count<T extends FieldOptionCountArgs>(
      args?: Subset<T, FieldOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FieldOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FieldOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FieldOptionAggregateArgs>(args: Subset<T, FieldOptionAggregateArgs>): Prisma.PrismaPromise<GetFieldOptionAggregateType<T>>

    /**
     * Group by FieldOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldOptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FieldOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FieldOptionGroupByArgs['orderBy'] }
        : { orderBy?: FieldOptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FieldOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFieldOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FieldOption model
   */
  readonly fields: FieldOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FieldOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FieldOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    form_field<T extends FormFieldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FormFieldDefaultArgs<ExtArgs>>): Prisma__FormFieldClient<$Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FieldOption model
   */
  interface FieldOptionFieldRefs {
    readonly id: FieldRef<"FieldOption", 'Int'>
    readonly field_id: FieldRef<"FieldOption", 'Int'>
    readonly option_value: FieldRef<"FieldOption", 'String'>
    readonly option_label: FieldRef<"FieldOption", 'String'>
    readonly order: FieldRef<"FieldOption", 'Int'>
    readonly created_at: FieldRef<"FieldOption", 'DateTime'>
    readonly updated_at: FieldRef<"FieldOption", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FieldOption findUnique
   */
  export type FieldOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldOption
     */
    select?: FieldOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldOption
     */
    omit?: FieldOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldOptionInclude<ExtArgs> | null
    /**
     * Filter, which FieldOption to fetch.
     */
    where: FieldOptionWhereUniqueInput
  }

  /**
   * FieldOption findUniqueOrThrow
   */
  export type FieldOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldOption
     */
    select?: FieldOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldOption
     */
    omit?: FieldOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldOptionInclude<ExtArgs> | null
    /**
     * Filter, which FieldOption to fetch.
     */
    where: FieldOptionWhereUniqueInput
  }

  /**
   * FieldOption findFirst
   */
  export type FieldOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldOption
     */
    select?: FieldOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldOption
     */
    omit?: FieldOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldOptionInclude<ExtArgs> | null
    /**
     * Filter, which FieldOption to fetch.
     */
    where?: FieldOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FieldOptions to fetch.
     */
    orderBy?: FieldOptionOrderByWithRelationInput | FieldOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FieldOptions.
     */
    cursor?: FieldOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FieldOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FieldOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FieldOptions.
     */
    distinct?: FieldOptionScalarFieldEnum | FieldOptionScalarFieldEnum[]
  }

  /**
   * FieldOption findFirstOrThrow
   */
  export type FieldOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldOption
     */
    select?: FieldOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldOption
     */
    omit?: FieldOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldOptionInclude<ExtArgs> | null
    /**
     * Filter, which FieldOption to fetch.
     */
    where?: FieldOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FieldOptions to fetch.
     */
    orderBy?: FieldOptionOrderByWithRelationInput | FieldOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FieldOptions.
     */
    cursor?: FieldOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FieldOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FieldOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FieldOptions.
     */
    distinct?: FieldOptionScalarFieldEnum | FieldOptionScalarFieldEnum[]
  }

  /**
   * FieldOption findMany
   */
  export type FieldOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldOption
     */
    select?: FieldOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldOption
     */
    omit?: FieldOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldOptionInclude<ExtArgs> | null
    /**
     * Filter, which FieldOptions to fetch.
     */
    where?: FieldOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FieldOptions to fetch.
     */
    orderBy?: FieldOptionOrderByWithRelationInput | FieldOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FieldOptions.
     */
    cursor?: FieldOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FieldOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FieldOptions.
     */
    skip?: number
    distinct?: FieldOptionScalarFieldEnum | FieldOptionScalarFieldEnum[]
  }

  /**
   * FieldOption create
   */
  export type FieldOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldOption
     */
    select?: FieldOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldOption
     */
    omit?: FieldOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a FieldOption.
     */
    data: XOR<FieldOptionCreateInput, FieldOptionUncheckedCreateInput>
  }

  /**
   * FieldOption createMany
   */
  export type FieldOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FieldOptions.
     */
    data: FieldOptionCreateManyInput | FieldOptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FieldOption createManyAndReturn
   */
  export type FieldOptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldOption
     */
    select?: FieldOptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FieldOption
     */
    omit?: FieldOptionOmit<ExtArgs> | null
    /**
     * The data used to create many FieldOptions.
     */
    data: FieldOptionCreateManyInput | FieldOptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldOptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * FieldOption update
   */
  export type FieldOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldOption
     */
    select?: FieldOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldOption
     */
    omit?: FieldOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a FieldOption.
     */
    data: XOR<FieldOptionUpdateInput, FieldOptionUncheckedUpdateInput>
    /**
     * Choose, which FieldOption to update.
     */
    where: FieldOptionWhereUniqueInput
  }

  /**
   * FieldOption updateMany
   */
  export type FieldOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FieldOptions.
     */
    data: XOR<FieldOptionUpdateManyMutationInput, FieldOptionUncheckedUpdateManyInput>
    /**
     * Filter which FieldOptions to update
     */
    where?: FieldOptionWhereInput
    /**
     * Limit how many FieldOptions to update.
     */
    limit?: number
  }

  /**
   * FieldOption updateManyAndReturn
   */
  export type FieldOptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldOption
     */
    select?: FieldOptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FieldOption
     */
    omit?: FieldOptionOmit<ExtArgs> | null
    /**
     * The data used to update FieldOptions.
     */
    data: XOR<FieldOptionUpdateManyMutationInput, FieldOptionUncheckedUpdateManyInput>
    /**
     * Filter which FieldOptions to update
     */
    where?: FieldOptionWhereInput
    /**
     * Limit how many FieldOptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldOptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * FieldOption upsert
   */
  export type FieldOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldOption
     */
    select?: FieldOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldOption
     */
    omit?: FieldOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the FieldOption to update in case it exists.
     */
    where: FieldOptionWhereUniqueInput
    /**
     * In case the FieldOption found by the `where` argument doesn't exist, create a new FieldOption with this data.
     */
    create: XOR<FieldOptionCreateInput, FieldOptionUncheckedCreateInput>
    /**
     * In case the FieldOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FieldOptionUpdateInput, FieldOptionUncheckedUpdateInput>
  }

  /**
   * FieldOption delete
   */
  export type FieldOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldOption
     */
    select?: FieldOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldOption
     */
    omit?: FieldOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldOptionInclude<ExtArgs> | null
    /**
     * Filter which FieldOption to delete.
     */
    where: FieldOptionWhereUniqueInput
  }

  /**
   * FieldOption deleteMany
   */
  export type FieldOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FieldOptions to delete
     */
    where?: FieldOptionWhereInput
    /**
     * Limit how many FieldOptions to delete.
     */
    limit?: number
  }

  /**
   * FieldOption without action
   */
  export type FieldOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldOption
     */
    select?: FieldOptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FieldOption
     */
    omit?: FieldOptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldOptionInclude<ExtArgs> | null
  }


  /**
   * Model DocumentTypeLocation
   */

  export type AggregateDocumentTypeLocation = {
    _count: DocumentTypeLocationCountAggregateOutputType | null
    _avg: DocumentTypeLocationAvgAggregateOutputType | null
    _sum: DocumentTypeLocationSumAggregateOutputType | null
    _min: DocumentTypeLocationMinAggregateOutputType | null
    _max: DocumentTypeLocationMaxAggregateOutputType | null
  }

  export type DocumentTypeLocationAvgAggregateOutputType = {
    id: number | null
    document_type_id: number | null
    location_id: number | null
  }

  export type DocumentTypeLocationSumAggregateOutputType = {
    id: number | null
    document_type_id: number | null
    location_id: number | null
  }

  export type DocumentTypeLocationMinAggregateOutputType = {
    id: number | null
    document_type_id: number | null
    location_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DocumentTypeLocationMaxAggregateOutputType = {
    id: number | null
    document_type_id: number | null
    location_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type DocumentTypeLocationCountAggregateOutputType = {
    id: number
    document_type_id: number
    location_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type DocumentTypeLocationAvgAggregateInputType = {
    id?: true
    document_type_id?: true
    location_id?: true
  }

  export type DocumentTypeLocationSumAggregateInputType = {
    id?: true
    document_type_id?: true
    location_id?: true
  }

  export type DocumentTypeLocationMinAggregateInputType = {
    id?: true
    document_type_id?: true
    location_id?: true
    created_at?: true
    updated_at?: true
  }

  export type DocumentTypeLocationMaxAggregateInputType = {
    id?: true
    document_type_id?: true
    location_id?: true
    created_at?: true
    updated_at?: true
  }

  export type DocumentTypeLocationCountAggregateInputType = {
    id?: true
    document_type_id?: true
    location_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type DocumentTypeLocationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentTypeLocation to aggregate.
     */
    where?: DocumentTypeLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentTypeLocations to fetch.
     */
    orderBy?: DocumentTypeLocationOrderByWithRelationInput | DocumentTypeLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentTypeLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentTypeLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentTypeLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentTypeLocations
    **/
    _count?: true | DocumentTypeLocationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentTypeLocationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentTypeLocationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentTypeLocationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentTypeLocationMaxAggregateInputType
  }

  export type GetDocumentTypeLocationAggregateType<T extends DocumentTypeLocationAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentTypeLocation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentTypeLocation[P]>
      : GetScalarType<T[P], AggregateDocumentTypeLocation[P]>
  }




  export type DocumentTypeLocationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentTypeLocationWhereInput
    orderBy?: DocumentTypeLocationOrderByWithAggregationInput | DocumentTypeLocationOrderByWithAggregationInput[]
    by: DocumentTypeLocationScalarFieldEnum[] | DocumentTypeLocationScalarFieldEnum
    having?: DocumentTypeLocationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentTypeLocationCountAggregateInputType | true
    _avg?: DocumentTypeLocationAvgAggregateInputType
    _sum?: DocumentTypeLocationSumAggregateInputType
    _min?: DocumentTypeLocationMinAggregateInputType
    _max?: DocumentTypeLocationMaxAggregateInputType
  }

  export type DocumentTypeLocationGroupByOutputType = {
    id: number
    document_type_id: number
    location_id: number
    created_at: Date
    updated_at: Date
    _count: DocumentTypeLocationCountAggregateOutputType | null
    _avg: DocumentTypeLocationAvgAggregateOutputType | null
    _sum: DocumentTypeLocationSumAggregateOutputType | null
    _min: DocumentTypeLocationMinAggregateOutputType | null
    _max: DocumentTypeLocationMaxAggregateOutputType | null
  }

  type GetDocumentTypeLocationGroupByPayload<T extends DocumentTypeLocationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentTypeLocationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentTypeLocationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentTypeLocationGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentTypeLocationGroupByOutputType[P]>
        }
      >
    >


  export type DocumentTypeLocationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    document_type_id?: boolean
    location_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    document_type?: boolean | DocumentTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentTypeLocation"]>

  export type DocumentTypeLocationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    document_type_id?: boolean
    location_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    document_type?: boolean | DocumentTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentTypeLocation"]>

  export type DocumentTypeLocationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    document_type_id?: boolean
    location_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    document_type?: boolean | DocumentTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentTypeLocation"]>

  export type DocumentTypeLocationSelectScalar = {
    id?: boolean
    document_type_id?: boolean
    location_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type DocumentTypeLocationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "document_type_id" | "location_id" | "created_at" | "updated_at", ExtArgs["result"]["documentTypeLocation"]>
  export type DocumentTypeLocationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document_type?: boolean | DocumentTypeDefaultArgs<ExtArgs>
  }
  export type DocumentTypeLocationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document_type?: boolean | DocumentTypeDefaultArgs<ExtArgs>
  }
  export type DocumentTypeLocationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document_type?: boolean | DocumentTypeDefaultArgs<ExtArgs>
  }

  export type $DocumentTypeLocationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentTypeLocation"
    objects: {
      document_type: Prisma.$DocumentTypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      document_type_id: number
      location_id: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["documentTypeLocation"]>
    composites: {}
  }

  type DocumentTypeLocationGetPayload<S extends boolean | null | undefined | DocumentTypeLocationDefaultArgs> = $Result.GetResult<Prisma.$DocumentTypeLocationPayload, S>

  type DocumentTypeLocationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentTypeLocationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentTypeLocationCountAggregateInputType | true
    }

  export interface DocumentTypeLocationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentTypeLocation'], meta: { name: 'DocumentTypeLocation' } }
    /**
     * Find zero or one DocumentTypeLocation that matches the filter.
     * @param {DocumentTypeLocationFindUniqueArgs} args - Arguments to find a DocumentTypeLocation
     * @example
     * // Get one DocumentTypeLocation
     * const documentTypeLocation = await prisma.documentTypeLocation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentTypeLocationFindUniqueArgs>(args: SelectSubset<T, DocumentTypeLocationFindUniqueArgs<ExtArgs>>): Prisma__DocumentTypeLocationClient<$Result.GetResult<Prisma.$DocumentTypeLocationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentTypeLocation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentTypeLocationFindUniqueOrThrowArgs} args - Arguments to find a DocumentTypeLocation
     * @example
     * // Get one DocumentTypeLocation
     * const documentTypeLocation = await prisma.documentTypeLocation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentTypeLocationFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentTypeLocationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentTypeLocationClient<$Result.GetResult<Prisma.$DocumentTypeLocationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentTypeLocation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeLocationFindFirstArgs} args - Arguments to find a DocumentTypeLocation
     * @example
     * // Get one DocumentTypeLocation
     * const documentTypeLocation = await prisma.documentTypeLocation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentTypeLocationFindFirstArgs>(args?: SelectSubset<T, DocumentTypeLocationFindFirstArgs<ExtArgs>>): Prisma__DocumentTypeLocationClient<$Result.GetResult<Prisma.$DocumentTypeLocationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentTypeLocation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeLocationFindFirstOrThrowArgs} args - Arguments to find a DocumentTypeLocation
     * @example
     * // Get one DocumentTypeLocation
     * const documentTypeLocation = await prisma.documentTypeLocation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentTypeLocationFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentTypeLocationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentTypeLocationClient<$Result.GetResult<Prisma.$DocumentTypeLocationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentTypeLocations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeLocationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentTypeLocations
     * const documentTypeLocations = await prisma.documentTypeLocation.findMany()
     * 
     * // Get first 10 DocumentTypeLocations
     * const documentTypeLocations = await prisma.documentTypeLocation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentTypeLocationWithIdOnly = await prisma.documentTypeLocation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentTypeLocationFindManyArgs>(args?: SelectSubset<T, DocumentTypeLocationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentTypeLocationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentTypeLocation.
     * @param {DocumentTypeLocationCreateArgs} args - Arguments to create a DocumentTypeLocation.
     * @example
     * // Create one DocumentTypeLocation
     * const DocumentTypeLocation = await prisma.documentTypeLocation.create({
     *   data: {
     *     // ... data to create a DocumentTypeLocation
     *   }
     * })
     * 
     */
    create<T extends DocumentTypeLocationCreateArgs>(args: SelectSubset<T, DocumentTypeLocationCreateArgs<ExtArgs>>): Prisma__DocumentTypeLocationClient<$Result.GetResult<Prisma.$DocumentTypeLocationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentTypeLocations.
     * @param {DocumentTypeLocationCreateManyArgs} args - Arguments to create many DocumentTypeLocations.
     * @example
     * // Create many DocumentTypeLocations
     * const documentTypeLocation = await prisma.documentTypeLocation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentTypeLocationCreateManyArgs>(args?: SelectSubset<T, DocumentTypeLocationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentTypeLocations and returns the data saved in the database.
     * @param {DocumentTypeLocationCreateManyAndReturnArgs} args - Arguments to create many DocumentTypeLocations.
     * @example
     * // Create many DocumentTypeLocations
     * const documentTypeLocation = await prisma.documentTypeLocation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentTypeLocations and only return the `id`
     * const documentTypeLocationWithIdOnly = await prisma.documentTypeLocation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentTypeLocationCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentTypeLocationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentTypeLocationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocumentTypeLocation.
     * @param {DocumentTypeLocationDeleteArgs} args - Arguments to delete one DocumentTypeLocation.
     * @example
     * // Delete one DocumentTypeLocation
     * const DocumentTypeLocation = await prisma.documentTypeLocation.delete({
     *   where: {
     *     // ... filter to delete one DocumentTypeLocation
     *   }
     * })
     * 
     */
    delete<T extends DocumentTypeLocationDeleteArgs>(args: SelectSubset<T, DocumentTypeLocationDeleteArgs<ExtArgs>>): Prisma__DocumentTypeLocationClient<$Result.GetResult<Prisma.$DocumentTypeLocationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentTypeLocation.
     * @param {DocumentTypeLocationUpdateArgs} args - Arguments to update one DocumentTypeLocation.
     * @example
     * // Update one DocumentTypeLocation
     * const documentTypeLocation = await prisma.documentTypeLocation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentTypeLocationUpdateArgs>(args: SelectSubset<T, DocumentTypeLocationUpdateArgs<ExtArgs>>): Prisma__DocumentTypeLocationClient<$Result.GetResult<Prisma.$DocumentTypeLocationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentTypeLocations.
     * @param {DocumentTypeLocationDeleteManyArgs} args - Arguments to filter DocumentTypeLocations to delete.
     * @example
     * // Delete a few DocumentTypeLocations
     * const { count } = await prisma.documentTypeLocation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentTypeLocationDeleteManyArgs>(args?: SelectSubset<T, DocumentTypeLocationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentTypeLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeLocationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentTypeLocations
     * const documentTypeLocation = await prisma.documentTypeLocation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentTypeLocationUpdateManyArgs>(args: SelectSubset<T, DocumentTypeLocationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentTypeLocations and returns the data updated in the database.
     * @param {DocumentTypeLocationUpdateManyAndReturnArgs} args - Arguments to update many DocumentTypeLocations.
     * @example
     * // Update many DocumentTypeLocations
     * const documentTypeLocation = await prisma.documentTypeLocation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocumentTypeLocations and only return the `id`
     * const documentTypeLocationWithIdOnly = await prisma.documentTypeLocation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentTypeLocationUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentTypeLocationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentTypeLocationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocumentTypeLocation.
     * @param {DocumentTypeLocationUpsertArgs} args - Arguments to update or create a DocumentTypeLocation.
     * @example
     * // Update or create a DocumentTypeLocation
     * const documentTypeLocation = await prisma.documentTypeLocation.upsert({
     *   create: {
     *     // ... data to create a DocumentTypeLocation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentTypeLocation we want to update
     *   }
     * })
     */
    upsert<T extends DocumentTypeLocationUpsertArgs>(args: SelectSubset<T, DocumentTypeLocationUpsertArgs<ExtArgs>>): Prisma__DocumentTypeLocationClient<$Result.GetResult<Prisma.$DocumentTypeLocationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentTypeLocations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeLocationCountArgs} args - Arguments to filter DocumentTypeLocations to count.
     * @example
     * // Count the number of DocumentTypeLocations
     * const count = await prisma.documentTypeLocation.count({
     *   where: {
     *     // ... the filter for the DocumentTypeLocations we want to count
     *   }
     * })
    **/
    count<T extends DocumentTypeLocationCountArgs>(
      args?: Subset<T, DocumentTypeLocationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentTypeLocationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentTypeLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeLocationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentTypeLocationAggregateArgs>(args: Subset<T, DocumentTypeLocationAggregateArgs>): Prisma.PrismaPromise<GetDocumentTypeLocationAggregateType<T>>

    /**
     * Group by DocumentTypeLocation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentTypeLocationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentTypeLocationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentTypeLocationGroupByArgs['orderBy'] }
        : { orderBy?: DocumentTypeLocationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentTypeLocationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentTypeLocationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentTypeLocation model
   */
  readonly fields: DocumentTypeLocationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentTypeLocation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentTypeLocationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document_type<T extends DocumentTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentTypeDefaultArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DocumentTypeLocation model
   */
  interface DocumentTypeLocationFieldRefs {
    readonly id: FieldRef<"DocumentTypeLocation", 'Int'>
    readonly document_type_id: FieldRef<"DocumentTypeLocation", 'Int'>
    readonly location_id: FieldRef<"DocumentTypeLocation", 'Int'>
    readonly created_at: FieldRef<"DocumentTypeLocation", 'DateTime'>
    readonly updated_at: FieldRef<"DocumentTypeLocation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DocumentTypeLocation findUnique
   */
  export type DocumentTypeLocationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTypeLocation
     */
    select?: DocumentTypeLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTypeLocation
     */
    omit?: DocumentTypeLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeLocationInclude<ExtArgs> | null
    /**
     * Filter, which DocumentTypeLocation to fetch.
     */
    where: DocumentTypeLocationWhereUniqueInput
  }

  /**
   * DocumentTypeLocation findUniqueOrThrow
   */
  export type DocumentTypeLocationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTypeLocation
     */
    select?: DocumentTypeLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTypeLocation
     */
    omit?: DocumentTypeLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeLocationInclude<ExtArgs> | null
    /**
     * Filter, which DocumentTypeLocation to fetch.
     */
    where: DocumentTypeLocationWhereUniqueInput
  }

  /**
   * DocumentTypeLocation findFirst
   */
  export type DocumentTypeLocationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTypeLocation
     */
    select?: DocumentTypeLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTypeLocation
     */
    omit?: DocumentTypeLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeLocationInclude<ExtArgs> | null
    /**
     * Filter, which DocumentTypeLocation to fetch.
     */
    where?: DocumentTypeLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentTypeLocations to fetch.
     */
    orderBy?: DocumentTypeLocationOrderByWithRelationInput | DocumentTypeLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentTypeLocations.
     */
    cursor?: DocumentTypeLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentTypeLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentTypeLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentTypeLocations.
     */
    distinct?: DocumentTypeLocationScalarFieldEnum | DocumentTypeLocationScalarFieldEnum[]
  }

  /**
   * DocumentTypeLocation findFirstOrThrow
   */
  export type DocumentTypeLocationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTypeLocation
     */
    select?: DocumentTypeLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTypeLocation
     */
    omit?: DocumentTypeLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeLocationInclude<ExtArgs> | null
    /**
     * Filter, which DocumentTypeLocation to fetch.
     */
    where?: DocumentTypeLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentTypeLocations to fetch.
     */
    orderBy?: DocumentTypeLocationOrderByWithRelationInput | DocumentTypeLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentTypeLocations.
     */
    cursor?: DocumentTypeLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentTypeLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentTypeLocations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentTypeLocations.
     */
    distinct?: DocumentTypeLocationScalarFieldEnum | DocumentTypeLocationScalarFieldEnum[]
  }

  /**
   * DocumentTypeLocation findMany
   */
  export type DocumentTypeLocationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTypeLocation
     */
    select?: DocumentTypeLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTypeLocation
     */
    omit?: DocumentTypeLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeLocationInclude<ExtArgs> | null
    /**
     * Filter, which DocumentTypeLocations to fetch.
     */
    where?: DocumentTypeLocationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentTypeLocations to fetch.
     */
    orderBy?: DocumentTypeLocationOrderByWithRelationInput | DocumentTypeLocationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentTypeLocations.
     */
    cursor?: DocumentTypeLocationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentTypeLocations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentTypeLocations.
     */
    skip?: number
    distinct?: DocumentTypeLocationScalarFieldEnum | DocumentTypeLocationScalarFieldEnum[]
  }

  /**
   * DocumentTypeLocation create
   */
  export type DocumentTypeLocationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTypeLocation
     */
    select?: DocumentTypeLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTypeLocation
     */
    omit?: DocumentTypeLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeLocationInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentTypeLocation.
     */
    data: XOR<DocumentTypeLocationCreateInput, DocumentTypeLocationUncheckedCreateInput>
  }

  /**
   * DocumentTypeLocation createMany
   */
  export type DocumentTypeLocationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentTypeLocations.
     */
    data: DocumentTypeLocationCreateManyInput | DocumentTypeLocationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DocumentTypeLocation createManyAndReturn
   */
  export type DocumentTypeLocationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTypeLocation
     */
    select?: DocumentTypeLocationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTypeLocation
     */
    omit?: DocumentTypeLocationOmit<ExtArgs> | null
    /**
     * The data used to create many DocumentTypeLocations.
     */
    data: DocumentTypeLocationCreateManyInput | DocumentTypeLocationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeLocationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentTypeLocation update
   */
  export type DocumentTypeLocationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTypeLocation
     */
    select?: DocumentTypeLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTypeLocation
     */
    omit?: DocumentTypeLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeLocationInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentTypeLocation.
     */
    data: XOR<DocumentTypeLocationUpdateInput, DocumentTypeLocationUncheckedUpdateInput>
    /**
     * Choose, which DocumentTypeLocation to update.
     */
    where: DocumentTypeLocationWhereUniqueInput
  }

  /**
   * DocumentTypeLocation updateMany
   */
  export type DocumentTypeLocationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentTypeLocations.
     */
    data: XOR<DocumentTypeLocationUpdateManyMutationInput, DocumentTypeLocationUncheckedUpdateManyInput>
    /**
     * Filter which DocumentTypeLocations to update
     */
    where?: DocumentTypeLocationWhereInput
    /**
     * Limit how many DocumentTypeLocations to update.
     */
    limit?: number
  }

  /**
   * DocumentTypeLocation updateManyAndReturn
   */
  export type DocumentTypeLocationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTypeLocation
     */
    select?: DocumentTypeLocationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTypeLocation
     */
    omit?: DocumentTypeLocationOmit<ExtArgs> | null
    /**
     * The data used to update DocumentTypeLocations.
     */
    data: XOR<DocumentTypeLocationUpdateManyMutationInput, DocumentTypeLocationUncheckedUpdateManyInput>
    /**
     * Filter which DocumentTypeLocations to update
     */
    where?: DocumentTypeLocationWhereInput
    /**
     * Limit how many DocumentTypeLocations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeLocationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentTypeLocation upsert
   */
  export type DocumentTypeLocationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTypeLocation
     */
    select?: DocumentTypeLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTypeLocation
     */
    omit?: DocumentTypeLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeLocationInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentTypeLocation to update in case it exists.
     */
    where: DocumentTypeLocationWhereUniqueInput
    /**
     * In case the DocumentTypeLocation found by the `where` argument doesn't exist, create a new DocumentTypeLocation with this data.
     */
    create: XOR<DocumentTypeLocationCreateInput, DocumentTypeLocationUncheckedCreateInput>
    /**
     * In case the DocumentTypeLocation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentTypeLocationUpdateInput, DocumentTypeLocationUncheckedUpdateInput>
  }

  /**
   * DocumentTypeLocation delete
   */
  export type DocumentTypeLocationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTypeLocation
     */
    select?: DocumentTypeLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTypeLocation
     */
    omit?: DocumentTypeLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeLocationInclude<ExtArgs> | null
    /**
     * Filter which DocumentTypeLocation to delete.
     */
    where: DocumentTypeLocationWhereUniqueInput
  }

  /**
   * DocumentTypeLocation deleteMany
   */
  export type DocumentTypeLocationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentTypeLocations to delete
     */
    where?: DocumentTypeLocationWhereInput
    /**
     * Limit how many DocumentTypeLocations to delete.
     */
    limit?: number
  }

  /**
   * DocumentTypeLocation without action
   */
  export type DocumentTypeLocationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentTypeLocation
     */
    select?: DocumentTypeLocationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentTypeLocation
     */
    omit?: DocumentTypeLocationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentTypeLocationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DocumentTypeScalarFieldEnum: {
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

  export type DocumentTypeScalarFieldEnum = (typeof DocumentTypeScalarFieldEnum)[keyof typeof DocumentTypeScalarFieldEnum]


  export const DocumentTitleScalarFieldEnum: {
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

  export type DocumentTitleScalarFieldEnum = (typeof DocumentTitleScalarFieldEnum)[keyof typeof DocumentTitleScalarFieldEnum]


  export const FormFieldScalarFieldEnum: {
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

  export type FormFieldScalarFieldEnum = (typeof FormFieldScalarFieldEnum)[keyof typeof FormFieldScalarFieldEnum]


  export const DocumentConfigurationScalarFieldEnum: {
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

  export type DocumentConfigurationScalarFieldEnum = (typeof DocumentConfigurationScalarFieldEnum)[keyof typeof DocumentConfigurationScalarFieldEnum]


  export const RegionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    country: 'country',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RegionScalarFieldEnum = (typeof RegionScalarFieldEnum)[keyof typeof RegionScalarFieldEnum]


  export const Document_fieldsScalarFieldEnum: {
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

  export type Document_fieldsScalarFieldEnum = (typeof Document_fieldsScalarFieldEnum)[keyof typeof Document_fieldsScalarFieldEnum]


  export const FormTemplateScalarFieldEnum: {
    id: 'id',
    form_key: 'form_key',
    name: 'name',
    description: 'description',
    version: 'version',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type FormTemplateScalarFieldEnum = (typeof FormTemplateScalarFieldEnum)[keyof typeof FormTemplateScalarFieldEnum]


  export const FieldOptionScalarFieldEnum: {
    id: 'id',
    field_id: 'field_id',
    option_value: 'option_value',
    option_label: 'option_label',
    order: 'order',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type FieldOptionScalarFieldEnum = (typeof FieldOptionScalarFieldEnum)[keyof typeof FieldOptionScalarFieldEnum]


  export const DocumentTypeLocationScalarFieldEnum: {
    id: 'id',
    document_type_id: 'document_type_id',
    location_id: 'location_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type DocumentTypeLocationScalarFieldEnum = (typeof DocumentTypeLocationScalarFieldEnum)[keyof typeof DocumentTypeLocationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type DocumentTypeWhereInput = {
    AND?: DocumentTypeWhereInput | DocumentTypeWhereInput[]
    OR?: DocumentTypeWhereInput[]
    NOT?: DocumentTypeWhereInput | DocumentTypeWhereInput[]
    id?: IntFilter<"DocumentType"> | number
    name?: StringFilter<"DocumentType"> | string
    createdAt?: DateTimeFilter<"DocumentType"> | Date | string
    updatedAt?: DateTimeFilter<"DocumentType"> | Date | string
    description?: StringNullableFilter<"DocumentType"> | string | null
    formId?: StringNullableFilter<"DocumentType"> | string | null
    hideHeader?: BoolFilter<"DocumentType"> | boolean
    showFormButtons?: BoolFilter<"DocumentType"> | boolean
    parent_type_id?: StringNullableFilter<"DocumentType"> | string | null
    parent_name?: StringNullableFilter<"DocumentType"> | string | null
    child_type_id?: StringNullableFilter<"DocumentType"> | string | null
    child_name?: StringNullableFilter<"DocumentType"> | string | null
    form_template_id?: IntNullableFilter<"DocumentType"> | number | null
    documentTitles?: DocumentTitleListRelationFilter
    documentConfigurations?: DocumentConfigurationListRelationFilter
    document_fields?: Document_fieldsListRelationFilter
    form_template?: XOR<FormTemplateNullableScalarRelationFilter, FormTemplateWhereInput> | null
    locations?: DocumentTypeLocationListRelationFilter
  }

  export type DocumentTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrderInput | SortOrder
    formId?: SortOrderInput | SortOrder
    hideHeader?: SortOrder
    showFormButtons?: SortOrder
    parent_type_id?: SortOrderInput | SortOrder
    parent_name?: SortOrderInput | SortOrder
    child_type_id?: SortOrderInput | SortOrder
    child_name?: SortOrderInput | SortOrder
    form_template_id?: SortOrderInput | SortOrder
    documentTitles?: DocumentTitleOrderByRelationAggregateInput
    documentConfigurations?: DocumentConfigurationOrderByRelationAggregateInput
    document_fields?: document_fieldsOrderByRelationAggregateInput
    form_template?: FormTemplateOrderByWithRelationInput
    locations?: DocumentTypeLocationOrderByRelationAggregateInput
  }

  export type DocumentTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    parent_type_id_child_type_id?: DocumentTypeParent_type_id_child_type_idCompoundUniqueInput
    AND?: DocumentTypeWhereInput | DocumentTypeWhereInput[]
    OR?: DocumentTypeWhereInput[]
    NOT?: DocumentTypeWhereInput | DocumentTypeWhereInput[]
    createdAt?: DateTimeFilter<"DocumentType"> | Date | string
    updatedAt?: DateTimeFilter<"DocumentType"> | Date | string
    description?: StringNullableFilter<"DocumentType"> | string | null
    formId?: StringNullableFilter<"DocumentType"> | string | null
    hideHeader?: BoolFilter<"DocumentType"> | boolean
    showFormButtons?: BoolFilter<"DocumentType"> | boolean
    parent_type_id?: StringNullableFilter<"DocumentType"> | string | null
    parent_name?: StringNullableFilter<"DocumentType"> | string | null
    child_type_id?: StringNullableFilter<"DocumentType"> | string | null
    child_name?: StringNullableFilter<"DocumentType"> | string | null
    form_template_id?: IntNullableFilter<"DocumentType"> | number | null
    documentTitles?: DocumentTitleListRelationFilter
    documentConfigurations?: DocumentConfigurationListRelationFilter
    document_fields?: Document_fieldsListRelationFilter
    form_template?: XOR<FormTemplateNullableScalarRelationFilter, FormTemplateWhereInput> | null
    locations?: DocumentTypeLocationListRelationFilter
  }, "id" | "name" | "parent_type_id_child_type_id">

  export type DocumentTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrderInput | SortOrder
    formId?: SortOrderInput | SortOrder
    hideHeader?: SortOrder
    showFormButtons?: SortOrder
    parent_type_id?: SortOrderInput | SortOrder
    parent_name?: SortOrderInput | SortOrder
    child_type_id?: SortOrderInput | SortOrder
    child_name?: SortOrderInput | SortOrder
    form_template_id?: SortOrderInput | SortOrder
    _count?: DocumentTypeCountOrderByAggregateInput
    _avg?: DocumentTypeAvgOrderByAggregateInput
    _max?: DocumentTypeMaxOrderByAggregateInput
    _min?: DocumentTypeMinOrderByAggregateInput
    _sum?: DocumentTypeSumOrderByAggregateInput
  }

  export type DocumentTypeScalarWhereWithAggregatesInput = {
    AND?: DocumentTypeScalarWhereWithAggregatesInput | DocumentTypeScalarWhereWithAggregatesInput[]
    OR?: DocumentTypeScalarWhereWithAggregatesInput[]
    NOT?: DocumentTypeScalarWhereWithAggregatesInput | DocumentTypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DocumentType"> | number
    name?: StringWithAggregatesFilter<"DocumentType"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DocumentType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DocumentType"> | Date | string
    description?: StringNullableWithAggregatesFilter<"DocumentType"> | string | null
    formId?: StringNullableWithAggregatesFilter<"DocumentType"> | string | null
    hideHeader?: BoolWithAggregatesFilter<"DocumentType"> | boolean
    showFormButtons?: BoolWithAggregatesFilter<"DocumentType"> | boolean
    parent_type_id?: StringNullableWithAggregatesFilter<"DocumentType"> | string | null
    parent_name?: StringNullableWithAggregatesFilter<"DocumentType"> | string | null
    child_type_id?: StringNullableWithAggregatesFilter<"DocumentType"> | string | null
    child_name?: StringNullableWithAggregatesFilter<"DocumentType"> | string | null
    form_template_id?: IntNullableWithAggregatesFilter<"DocumentType"> | number | null
  }

  export type DocumentTitleWhereInput = {
    AND?: DocumentTitleWhereInput | DocumentTitleWhereInput[]
    OR?: DocumentTitleWhereInput[]
    NOT?: DocumentTitleWhereInput | DocumentTitleWhereInput[]
    id?: IntFilter<"DocumentTitle"> | number
    title?: StringFilter<"DocumentTitle"> | string
    created_at?: DateTimeFilter<"DocumentTitle"> | Date | string
    updated_at?: DateTimeFilter<"DocumentTitle"> | Date | string
    shareable?: BoolFilter<"DocumentTitle"> | boolean
    document_type_id?: IntFilter<"DocumentTitle"> | number
    is_display?: BoolFilter<"DocumentTitle"> | boolean
    require_number?: BoolFilter<"DocumentTitle"> | boolean
    require_valid_date?: BoolFilter<"DocumentTitle"> | boolean
    require_expire_date?: BoolFilter<"DocumentTitle"> | boolean
    require_doc_data?: BoolFilter<"DocumentTitle"> | boolean
    doc_data_options?: JsonNullableFilter<"DocumentTitle">
    doc_data_name?: StringNullableFilter<"DocumentTitle"> | string | null
    require_attachment_front?: BoolFilter<"DocumentTitle"> | boolean
    require_attachment_back?: BoolFilter<"DocumentTitle"> | boolean
    description?: StringNullableFilter<"DocumentTitle"> | string | null
    form_description?: StringNullableFilter<"DocumentTitle"> | string | null
    form_title?: StringNullableFilter<"DocumentTitle"> | string | null
    document_types?: XOR<DocumentTypeScalarRelationFilter, DocumentTypeWhereInput>
    documentConfigurations?: DocumentConfigurationListRelationFilter
    document_fields?: Document_fieldsListRelationFilter
  }

  export type DocumentTitleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    shareable?: SortOrder
    document_type_id?: SortOrder
    is_display?: SortOrder
    require_number?: SortOrder
    require_valid_date?: SortOrder
    require_expire_date?: SortOrder
    require_doc_data?: SortOrder
    doc_data_options?: SortOrderInput | SortOrder
    doc_data_name?: SortOrderInput | SortOrder
    require_attachment_front?: SortOrder
    require_attachment_back?: SortOrder
    description?: SortOrderInput | SortOrder
    form_description?: SortOrderInput | SortOrder
    form_title?: SortOrderInput | SortOrder
    document_types?: DocumentTypeOrderByWithRelationInput
    documentConfigurations?: DocumentConfigurationOrderByRelationAggregateInput
    document_fields?: document_fieldsOrderByRelationAggregateInput
  }

  export type DocumentTitleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DocumentTitleWhereInput | DocumentTitleWhereInput[]
    OR?: DocumentTitleWhereInput[]
    NOT?: DocumentTitleWhereInput | DocumentTitleWhereInput[]
    title?: StringFilter<"DocumentTitle"> | string
    created_at?: DateTimeFilter<"DocumentTitle"> | Date | string
    updated_at?: DateTimeFilter<"DocumentTitle"> | Date | string
    shareable?: BoolFilter<"DocumentTitle"> | boolean
    document_type_id?: IntFilter<"DocumentTitle"> | number
    is_display?: BoolFilter<"DocumentTitle"> | boolean
    require_number?: BoolFilter<"DocumentTitle"> | boolean
    require_valid_date?: BoolFilter<"DocumentTitle"> | boolean
    require_expire_date?: BoolFilter<"DocumentTitle"> | boolean
    require_doc_data?: BoolFilter<"DocumentTitle"> | boolean
    doc_data_options?: JsonNullableFilter<"DocumentTitle">
    doc_data_name?: StringNullableFilter<"DocumentTitle"> | string | null
    require_attachment_front?: BoolFilter<"DocumentTitle"> | boolean
    require_attachment_back?: BoolFilter<"DocumentTitle"> | boolean
    description?: StringNullableFilter<"DocumentTitle"> | string | null
    form_description?: StringNullableFilter<"DocumentTitle"> | string | null
    form_title?: StringNullableFilter<"DocumentTitle"> | string | null
    document_types?: XOR<DocumentTypeScalarRelationFilter, DocumentTypeWhereInput>
    documentConfigurations?: DocumentConfigurationListRelationFilter
    document_fields?: Document_fieldsListRelationFilter
  }, "id">

  export type DocumentTitleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    shareable?: SortOrder
    document_type_id?: SortOrder
    is_display?: SortOrder
    require_number?: SortOrder
    require_valid_date?: SortOrder
    require_expire_date?: SortOrder
    require_doc_data?: SortOrder
    doc_data_options?: SortOrderInput | SortOrder
    doc_data_name?: SortOrderInput | SortOrder
    require_attachment_front?: SortOrder
    require_attachment_back?: SortOrder
    description?: SortOrderInput | SortOrder
    form_description?: SortOrderInput | SortOrder
    form_title?: SortOrderInput | SortOrder
    _count?: DocumentTitleCountOrderByAggregateInput
    _avg?: DocumentTitleAvgOrderByAggregateInput
    _max?: DocumentTitleMaxOrderByAggregateInput
    _min?: DocumentTitleMinOrderByAggregateInput
    _sum?: DocumentTitleSumOrderByAggregateInput
  }

  export type DocumentTitleScalarWhereWithAggregatesInput = {
    AND?: DocumentTitleScalarWhereWithAggregatesInput | DocumentTitleScalarWhereWithAggregatesInput[]
    OR?: DocumentTitleScalarWhereWithAggregatesInput[]
    NOT?: DocumentTitleScalarWhereWithAggregatesInput | DocumentTitleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DocumentTitle"> | number
    title?: StringWithAggregatesFilter<"DocumentTitle"> | string
    created_at?: DateTimeWithAggregatesFilter<"DocumentTitle"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"DocumentTitle"> | Date | string
    shareable?: BoolWithAggregatesFilter<"DocumentTitle"> | boolean
    document_type_id?: IntWithAggregatesFilter<"DocumentTitle"> | number
    is_display?: BoolWithAggregatesFilter<"DocumentTitle"> | boolean
    require_number?: BoolWithAggregatesFilter<"DocumentTitle"> | boolean
    require_valid_date?: BoolWithAggregatesFilter<"DocumentTitle"> | boolean
    require_expire_date?: BoolWithAggregatesFilter<"DocumentTitle"> | boolean
    require_doc_data?: BoolWithAggregatesFilter<"DocumentTitle"> | boolean
    doc_data_options?: JsonNullableWithAggregatesFilter<"DocumentTitle">
    doc_data_name?: StringNullableWithAggregatesFilter<"DocumentTitle"> | string | null
    require_attachment_front?: BoolWithAggregatesFilter<"DocumentTitle"> | boolean
    require_attachment_back?: BoolWithAggregatesFilter<"DocumentTitle"> | boolean
    description?: StringNullableWithAggregatesFilter<"DocumentTitle"> | string | null
    form_description?: StringNullableWithAggregatesFilter<"DocumentTitle"> | string | null
    form_title?: StringNullableWithAggregatesFilter<"DocumentTitle"> | string | null
  }

  export type FormFieldWhereInput = {
    AND?: FormFieldWhereInput | FormFieldWhereInput[]
    OR?: FormFieldWhereInput[]
    NOT?: FormFieldWhereInput | FormFieldWhereInput[]
    id?: IntFilter<"FormField"> | number
    template_id?: IntFilter<"FormField"> | number
    field_id?: StringFilter<"FormField"> | string
    field_name?: StringFilter<"FormField"> | string
    field_type?: StringFilter<"FormField"> | string
    label?: StringFilter<"FormField"> | string
    placeholder?: StringNullableFilter<"FormField"> | string | null
    required?: BoolFilter<"FormField"> | boolean
    is_hidden?: BoolFilter<"FormField"> | boolean
    order?: IntFilter<"FormField"> | number
    full_width?: BoolFilter<"FormField"> | boolean
    display_conditions?: JsonNullableFilter<"FormField">
    validation_rules?: JsonNullableFilter<"FormField">
    created_at?: DateTimeFilter<"FormField"> | Date | string
    updated_at?: DateTimeFilter<"FormField"> | Date | string
    form_template?: XOR<FormTemplateScalarRelationFilter, FormTemplateWhereInput>
    field_options?: FieldOptionListRelationFilter
  }

  export type FormFieldOrderByWithRelationInput = {
    id?: SortOrder
    template_id?: SortOrder
    field_id?: SortOrder
    field_name?: SortOrder
    field_type?: SortOrder
    label?: SortOrder
    placeholder?: SortOrderInput | SortOrder
    required?: SortOrder
    is_hidden?: SortOrder
    order?: SortOrder
    full_width?: SortOrder
    display_conditions?: SortOrderInput | SortOrder
    validation_rules?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    form_template?: FormTemplateOrderByWithRelationInput
    field_options?: FieldOptionOrderByRelationAggregateInput
  }

  export type FormFieldWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FormFieldWhereInput | FormFieldWhereInput[]
    OR?: FormFieldWhereInput[]
    NOT?: FormFieldWhereInput | FormFieldWhereInput[]
    template_id?: IntFilter<"FormField"> | number
    field_id?: StringFilter<"FormField"> | string
    field_name?: StringFilter<"FormField"> | string
    field_type?: StringFilter<"FormField"> | string
    label?: StringFilter<"FormField"> | string
    placeholder?: StringNullableFilter<"FormField"> | string | null
    required?: BoolFilter<"FormField"> | boolean
    is_hidden?: BoolFilter<"FormField"> | boolean
    order?: IntFilter<"FormField"> | number
    full_width?: BoolFilter<"FormField"> | boolean
    display_conditions?: JsonNullableFilter<"FormField">
    validation_rules?: JsonNullableFilter<"FormField">
    created_at?: DateTimeFilter<"FormField"> | Date | string
    updated_at?: DateTimeFilter<"FormField"> | Date | string
    form_template?: XOR<FormTemplateScalarRelationFilter, FormTemplateWhereInput>
    field_options?: FieldOptionListRelationFilter
  }, "id">

  export type FormFieldOrderByWithAggregationInput = {
    id?: SortOrder
    template_id?: SortOrder
    field_id?: SortOrder
    field_name?: SortOrder
    field_type?: SortOrder
    label?: SortOrder
    placeholder?: SortOrderInput | SortOrder
    required?: SortOrder
    is_hidden?: SortOrder
    order?: SortOrder
    full_width?: SortOrder
    display_conditions?: SortOrderInput | SortOrder
    validation_rules?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: FormFieldCountOrderByAggregateInput
    _avg?: FormFieldAvgOrderByAggregateInput
    _max?: FormFieldMaxOrderByAggregateInput
    _min?: FormFieldMinOrderByAggregateInput
    _sum?: FormFieldSumOrderByAggregateInput
  }

  export type FormFieldScalarWhereWithAggregatesInput = {
    AND?: FormFieldScalarWhereWithAggregatesInput | FormFieldScalarWhereWithAggregatesInput[]
    OR?: FormFieldScalarWhereWithAggregatesInput[]
    NOT?: FormFieldScalarWhereWithAggregatesInput | FormFieldScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FormField"> | number
    template_id?: IntWithAggregatesFilter<"FormField"> | number
    field_id?: StringWithAggregatesFilter<"FormField"> | string
    field_name?: StringWithAggregatesFilter<"FormField"> | string
    field_type?: StringWithAggregatesFilter<"FormField"> | string
    label?: StringWithAggregatesFilter<"FormField"> | string
    placeholder?: StringNullableWithAggregatesFilter<"FormField"> | string | null
    required?: BoolWithAggregatesFilter<"FormField"> | boolean
    is_hidden?: BoolWithAggregatesFilter<"FormField"> | boolean
    order?: IntWithAggregatesFilter<"FormField"> | number
    full_width?: BoolWithAggregatesFilter<"FormField"> | boolean
    display_conditions?: JsonNullableWithAggregatesFilter<"FormField">
    validation_rules?: JsonNullableWithAggregatesFilter<"FormField">
    created_at?: DateTimeWithAggregatesFilter<"FormField"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"FormField"> | Date | string
  }

  export type DocumentConfigurationWhereInput = {
    AND?: DocumentConfigurationWhereInput | DocumentConfigurationWhereInput[]
    OR?: DocumentConfigurationWhereInput[]
    NOT?: DocumentConfigurationWhereInput | DocumentConfigurationWhereInput[]
    id?: IntFilter<"DocumentConfiguration"> | number
    regionId?: IntFilter<"DocumentConfiguration"> | number
    documentTypeId?: IntFilter<"DocumentConfiguration"> | number
    documentTitleId?: IntFilter<"DocumentConfiguration"> | number
    typeOfCondition?: IntFilter<"DocumentConfiguration"> | number
    createdAt?: DateTimeFilter<"DocumentConfiguration"> | Date | string
    updatedAt?: DateTimeFilter<"DocumentConfiguration"> | Date | string
    active?: BoolFilter<"DocumentConfiguration"> | boolean
    priority?: IntFilter<"DocumentConfiguration"> | number
    customFields?: JsonNullableFilter<"DocumentConfiguration">
    documentTitle?: XOR<DocumentTitleScalarRelationFilter, DocumentTitleWhereInput>
    documentType?: XOR<DocumentTypeScalarRelationFilter, DocumentTypeWhereInput>
    region?: XOR<RegionScalarRelationFilter, RegionWhereInput>
  }

  export type DocumentConfigurationOrderByWithRelationInput = {
    id?: SortOrder
    regionId?: SortOrder
    documentTypeId?: SortOrder
    documentTitleId?: SortOrder
    typeOfCondition?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    active?: SortOrder
    priority?: SortOrder
    customFields?: SortOrderInput | SortOrder
    documentTitle?: DocumentTitleOrderByWithRelationInput
    documentType?: DocumentTypeOrderByWithRelationInput
    region?: RegionOrderByWithRelationInput
  }

  export type DocumentConfigurationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    regionId_documentTitleId?: DocumentConfigurationRegionIdDocumentTitleIdCompoundUniqueInput
    AND?: DocumentConfigurationWhereInput | DocumentConfigurationWhereInput[]
    OR?: DocumentConfigurationWhereInput[]
    NOT?: DocumentConfigurationWhereInput | DocumentConfigurationWhereInput[]
    regionId?: IntFilter<"DocumentConfiguration"> | number
    documentTypeId?: IntFilter<"DocumentConfiguration"> | number
    documentTitleId?: IntFilter<"DocumentConfiguration"> | number
    typeOfCondition?: IntFilter<"DocumentConfiguration"> | number
    createdAt?: DateTimeFilter<"DocumentConfiguration"> | Date | string
    updatedAt?: DateTimeFilter<"DocumentConfiguration"> | Date | string
    active?: BoolFilter<"DocumentConfiguration"> | boolean
    priority?: IntFilter<"DocumentConfiguration"> | number
    customFields?: JsonNullableFilter<"DocumentConfiguration">
    documentTitle?: XOR<DocumentTitleScalarRelationFilter, DocumentTitleWhereInput>
    documentType?: XOR<DocumentTypeScalarRelationFilter, DocumentTypeWhereInput>
    region?: XOR<RegionScalarRelationFilter, RegionWhereInput>
  }, "id" | "regionId_documentTitleId">

  export type DocumentConfigurationOrderByWithAggregationInput = {
    id?: SortOrder
    regionId?: SortOrder
    documentTypeId?: SortOrder
    documentTitleId?: SortOrder
    typeOfCondition?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    active?: SortOrder
    priority?: SortOrder
    customFields?: SortOrderInput | SortOrder
    _count?: DocumentConfigurationCountOrderByAggregateInput
    _avg?: DocumentConfigurationAvgOrderByAggregateInput
    _max?: DocumentConfigurationMaxOrderByAggregateInput
    _min?: DocumentConfigurationMinOrderByAggregateInput
    _sum?: DocumentConfigurationSumOrderByAggregateInput
  }

  export type DocumentConfigurationScalarWhereWithAggregatesInput = {
    AND?: DocumentConfigurationScalarWhereWithAggregatesInput | DocumentConfigurationScalarWhereWithAggregatesInput[]
    OR?: DocumentConfigurationScalarWhereWithAggregatesInput[]
    NOT?: DocumentConfigurationScalarWhereWithAggregatesInput | DocumentConfigurationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DocumentConfiguration"> | number
    regionId?: IntWithAggregatesFilter<"DocumentConfiguration"> | number
    documentTypeId?: IntWithAggregatesFilter<"DocumentConfiguration"> | number
    documentTitleId?: IntWithAggregatesFilter<"DocumentConfiguration"> | number
    typeOfCondition?: IntWithAggregatesFilter<"DocumentConfiguration"> | number
    createdAt?: DateTimeWithAggregatesFilter<"DocumentConfiguration"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DocumentConfiguration"> | Date | string
    active?: BoolWithAggregatesFilter<"DocumentConfiguration"> | boolean
    priority?: IntWithAggregatesFilter<"DocumentConfiguration"> | number
    customFields?: JsonNullableWithAggregatesFilter<"DocumentConfiguration">
  }

  export type RegionWhereInput = {
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    id?: IntFilter<"Region"> | number
    name?: StringFilter<"Region"> | string
    code?: StringFilter<"Region"> | string
    country?: StringFilter<"Region"> | string
    active?: BoolFilter<"Region"> | boolean
    createdAt?: DateTimeFilter<"Region"> | Date | string
    updatedAt?: DateTimeFilter<"Region"> | Date | string
    documentConfigurations?: DocumentConfigurationListRelationFilter
  }

  export type RegionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    country?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    documentConfigurations?: DocumentConfigurationOrderByRelationAggregateInput
  }

  export type RegionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    name?: StringFilter<"Region"> | string
    country?: StringFilter<"Region"> | string
    active?: BoolFilter<"Region"> | boolean
    createdAt?: DateTimeFilter<"Region"> | Date | string
    updatedAt?: DateTimeFilter<"Region"> | Date | string
    documentConfigurations?: DocumentConfigurationListRelationFilter
  }, "id" | "code">

  export type RegionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    country?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RegionCountOrderByAggregateInput
    _avg?: RegionAvgOrderByAggregateInput
    _max?: RegionMaxOrderByAggregateInput
    _min?: RegionMinOrderByAggregateInput
    _sum?: RegionSumOrderByAggregateInput
  }

  export type RegionScalarWhereWithAggregatesInput = {
    AND?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    OR?: RegionScalarWhereWithAggregatesInput[]
    NOT?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Region"> | number
    name?: StringWithAggregatesFilter<"Region"> | string
    code?: StringWithAggregatesFilter<"Region"> | string
    country?: StringWithAggregatesFilter<"Region"> | string
    active?: BoolWithAggregatesFilter<"Region"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Region"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Region"> | Date | string
  }

  export type document_fieldsWhereInput = {
    AND?: document_fieldsWhereInput | document_fieldsWhereInput[]
    OR?: document_fieldsWhereInput[]
    NOT?: document_fieldsWhereInput | document_fieldsWhereInput[]
    id?: IntFilter<"document_fields"> | number
    field_id?: StringFilter<"document_fields"> | string
    name?: StringFilter<"document_fields"> | string
    label?: StringFilter<"document_fields"> | string
    type?: StringFilter<"document_fields"> | string
    placeholder?: StringNullableFilter<"document_fields"> | string | null
    required?: BoolFilter<"document_fields"> | boolean
    order?: IntFilter<"document_fields"> | number
    full_width?: BoolFilter<"document_fields"> | boolean
    hidden?: BoolFilter<"document_fields"> | boolean
    default_value?: StringNullableFilter<"document_fields"> | string | null
    options?: JsonNullableFilter<"document_fields">
    validation?: JsonNullableFilter<"document_fields">
    conditional_display?: JsonNullableFilter<"document_fields">
    help_text?: StringNullableFilter<"document_fields"> | string | null
    document_type_id?: IntFilter<"document_fields"> | number
    document_title_id?: IntNullableFilter<"document_fields"> | number | null
    created_at?: DateTimeFilter<"document_fields"> | Date | string
    updated_at?: DateTimeFilter<"document_fields"> | Date | string
    document_titles?: XOR<DocumentTitleNullableScalarRelationFilter, DocumentTitleWhereInput> | null
    document_types?: XOR<DocumentTypeScalarRelationFilter, DocumentTypeWhereInput>
  }

  export type document_fieldsOrderByWithRelationInput = {
    id?: SortOrder
    field_id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    type?: SortOrder
    placeholder?: SortOrderInput | SortOrder
    required?: SortOrder
    order?: SortOrder
    full_width?: SortOrder
    hidden?: SortOrder
    default_value?: SortOrderInput | SortOrder
    options?: SortOrderInput | SortOrder
    validation?: SortOrderInput | SortOrder
    conditional_display?: SortOrderInput | SortOrder
    help_text?: SortOrderInput | SortOrder
    document_type_id?: SortOrder
    document_title_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    document_titles?: DocumentTitleOrderByWithRelationInput
    document_types?: DocumentTypeOrderByWithRelationInput
  }

  export type document_fieldsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: document_fieldsWhereInput | document_fieldsWhereInput[]
    OR?: document_fieldsWhereInput[]
    NOT?: document_fieldsWhereInput | document_fieldsWhereInput[]
    field_id?: StringFilter<"document_fields"> | string
    name?: StringFilter<"document_fields"> | string
    label?: StringFilter<"document_fields"> | string
    type?: StringFilter<"document_fields"> | string
    placeholder?: StringNullableFilter<"document_fields"> | string | null
    required?: BoolFilter<"document_fields"> | boolean
    order?: IntFilter<"document_fields"> | number
    full_width?: BoolFilter<"document_fields"> | boolean
    hidden?: BoolFilter<"document_fields"> | boolean
    default_value?: StringNullableFilter<"document_fields"> | string | null
    options?: JsonNullableFilter<"document_fields">
    validation?: JsonNullableFilter<"document_fields">
    conditional_display?: JsonNullableFilter<"document_fields">
    help_text?: StringNullableFilter<"document_fields"> | string | null
    document_type_id?: IntFilter<"document_fields"> | number
    document_title_id?: IntNullableFilter<"document_fields"> | number | null
    created_at?: DateTimeFilter<"document_fields"> | Date | string
    updated_at?: DateTimeFilter<"document_fields"> | Date | string
    document_titles?: XOR<DocumentTitleNullableScalarRelationFilter, DocumentTitleWhereInput> | null
    document_types?: XOR<DocumentTypeScalarRelationFilter, DocumentTypeWhereInput>
  }, "id">

  export type document_fieldsOrderByWithAggregationInput = {
    id?: SortOrder
    field_id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    type?: SortOrder
    placeholder?: SortOrderInput | SortOrder
    required?: SortOrder
    order?: SortOrder
    full_width?: SortOrder
    hidden?: SortOrder
    default_value?: SortOrderInput | SortOrder
    options?: SortOrderInput | SortOrder
    validation?: SortOrderInput | SortOrder
    conditional_display?: SortOrderInput | SortOrder
    help_text?: SortOrderInput | SortOrder
    document_type_id?: SortOrder
    document_title_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: document_fieldsCountOrderByAggregateInput
    _avg?: document_fieldsAvgOrderByAggregateInput
    _max?: document_fieldsMaxOrderByAggregateInput
    _min?: document_fieldsMinOrderByAggregateInput
    _sum?: document_fieldsSumOrderByAggregateInput
  }

  export type document_fieldsScalarWhereWithAggregatesInput = {
    AND?: document_fieldsScalarWhereWithAggregatesInput | document_fieldsScalarWhereWithAggregatesInput[]
    OR?: document_fieldsScalarWhereWithAggregatesInput[]
    NOT?: document_fieldsScalarWhereWithAggregatesInput | document_fieldsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"document_fields"> | number
    field_id?: StringWithAggregatesFilter<"document_fields"> | string
    name?: StringWithAggregatesFilter<"document_fields"> | string
    label?: StringWithAggregatesFilter<"document_fields"> | string
    type?: StringWithAggregatesFilter<"document_fields"> | string
    placeholder?: StringNullableWithAggregatesFilter<"document_fields"> | string | null
    required?: BoolWithAggregatesFilter<"document_fields"> | boolean
    order?: IntWithAggregatesFilter<"document_fields"> | number
    full_width?: BoolWithAggregatesFilter<"document_fields"> | boolean
    hidden?: BoolWithAggregatesFilter<"document_fields"> | boolean
    default_value?: StringNullableWithAggregatesFilter<"document_fields"> | string | null
    options?: JsonNullableWithAggregatesFilter<"document_fields">
    validation?: JsonNullableWithAggregatesFilter<"document_fields">
    conditional_display?: JsonNullableWithAggregatesFilter<"document_fields">
    help_text?: StringNullableWithAggregatesFilter<"document_fields"> | string | null
    document_type_id?: IntWithAggregatesFilter<"document_fields"> | number
    document_title_id?: IntNullableWithAggregatesFilter<"document_fields"> | number | null
    created_at?: DateTimeWithAggregatesFilter<"document_fields"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"document_fields"> | Date | string
  }

  export type FormTemplateWhereInput = {
    AND?: FormTemplateWhereInput | FormTemplateWhereInput[]
    OR?: FormTemplateWhereInput[]
    NOT?: FormTemplateWhereInput | FormTemplateWhereInput[]
    id?: IntFilter<"FormTemplate"> | number
    form_key?: StringFilter<"FormTemplate"> | string
    name?: StringFilter<"FormTemplate"> | string
    description?: StringNullableFilter<"FormTemplate"> | string | null
    version?: IntFilter<"FormTemplate"> | number
    is_active?: BoolFilter<"FormTemplate"> | boolean
    created_at?: DateTimeFilter<"FormTemplate"> | Date | string
    updated_at?: DateTimeFilter<"FormTemplate"> | Date | string
    form_fields?: FormFieldListRelationFilter
    document_types?: DocumentTypeListRelationFilter
  }

  export type FormTemplateOrderByWithRelationInput = {
    id?: SortOrder
    form_key?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    version?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    form_fields?: FormFieldOrderByRelationAggregateInput
    document_types?: DocumentTypeOrderByRelationAggregateInput
  }

  export type FormTemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    form_key?: string
    AND?: FormTemplateWhereInput | FormTemplateWhereInput[]
    OR?: FormTemplateWhereInput[]
    NOT?: FormTemplateWhereInput | FormTemplateWhereInput[]
    name?: StringFilter<"FormTemplate"> | string
    description?: StringNullableFilter<"FormTemplate"> | string | null
    version?: IntFilter<"FormTemplate"> | number
    is_active?: BoolFilter<"FormTemplate"> | boolean
    created_at?: DateTimeFilter<"FormTemplate"> | Date | string
    updated_at?: DateTimeFilter<"FormTemplate"> | Date | string
    form_fields?: FormFieldListRelationFilter
    document_types?: DocumentTypeListRelationFilter
  }, "id" | "form_key">

  export type FormTemplateOrderByWithAggregationInput = {
    id?: SortOrder
    form_key?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    version?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: FormTemplateCountOrderByAggregateInput
    _avg?: FormTemplateAvgOrderByAggregateInput
    _max?: FormTemplateMaxOrderByAggregateInput
    _min?: FormTemplateMinOrderByAggregateInput
    _sum?: FormTemplateSumOrderByAggregateInput
  }

  export type FormTemplateScalarWhereWithAggregatesInput = {
    AND?: FormTemplateScalarWhereWithAggregatesInput | FormTemplateScalarWhereWithAggregatesInput[]
    OR?: FormTemplateScalarWhereWithAggregatesInput[]
    NOT?: FormTemplateScalarWhereWithAggregatesInput | FormTemplateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FormTemplate"> | number
    form_key?: StringWithAggregatesFilter<"FormTemplate"> | string
    name?: StringWithAggregatesFilter<"FormTemplate"> | string
    description?: StringNullableWithAggregatesFilter<"FormTemplate"> | string | null
    version?: IntWithAggregatesFilter<"FormTemplate"> | number
    is_active?: BoolWithAggregatesFilter<"FormTemplate"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"FormTemplate"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"FormTemplate"> | Date | string
  }

  export type FieldOptionWhereInput = {
    AND?: FieldOptionWhereInput | FieldOptionWhereInput[]
    OR?: FieldOptionWhereInput[]
    NOT?: FieldOptionWhereInput | FieldOptionWhereInput[]
    id?: IntFilter<"FieldOption"> | number
    field_id?: IntFilter<"FieldOption"> | number
    option_value?: StringFilter<"FieldOption"> | string
    option_label?: StringFilter<"FieldOption"> | string
    order?: IntFilter<"FieldOption"> | number
    created_at?: DateTimeFilter<"FieldOption"> | Date | string
    updated_at?: DateTimeFilter<"FieldOption"> | Date | string
    form_field?: XOR<FormFieldScalarRelationFilter, FormFieldWhereInput>
  }

  export type FieldOptionOrderByWithRelationInput = {
    id?: SortOrder
    field_id?: SortOrder
    option_value?: SortOrder
    option_label?: SortOrder
    order?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    form_field?: FormFieldOrderByWithRelationInput
  }

  export type FieldOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FieldOptionWhereInput | FieldOptionWhereInput[]
    OR?: FieldOptionWhereInput[]
    NOT?: FieldOptionWhereInput | FieldOptionWhereInput[]
    field_id?: IntFilter<"FieldOption"> | number
    option_value?: StringFilter<"FieldOption"> | string
    option_label?: StringFilter<"FieldOption"> | string
    order?: IntFilter<"FieldOption"> | number
    created_at?: DateTimeFilter<"FieldOption"> | Date | string
    updated_at?: DateTimeFilter<"FieldOption"> | Date | string
    form_field?: XOR<FormFieldScalarRelationFilter, FormFieldWhereInput>
  }, "id">

  export type FieldOptionOrderByWithAggregationInput = {
    id?: SortOrder
    field_id?: SortOrder
    option_value?: SortOrder
    option_label?: SortOrder
    order?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: FieldOptionCountOrderByAggregateInput
    _avg?: FieldOptionAvgOrderByAggregateInput
    _max?: FieldOptionMaxOrderByAggregateInput
    _min?: FieldOptionMinOrderByAggregateInput
    _sum?: FieldOptionSumOrderByAggregateInput
  }

  export type FieldOptionScalarWhereWithAggregatesInput = {
    AND?: FieldOptionScalarWhereWithAggregatesInput | FieldOptionScalarWhereWithAggregatesInput[]
    OR?: FieldOptionScalarWhereWithAggregatesInput[]
    NOT?: FieldOptionScalarWhereWithAggregatesInput | FieldOptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FieldOption"> | number
    field_id?: IntWithAggregatesFilter<"FieldOption"> | number
    option_value?: StringWithAggregatesFilter<"FieldOption"> | string
    option_label?: StringWithAggregatesFilter<"FieldOption"> | string
    order?: IntWithAggregatesFilter<"FieldOption"> | number
    created_at?: DateTimeWithAggregatesFilter<"FieldOption"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"FieldOption"> | Date | string
  }

  export type DocumentTypeLocationWhereInput = {
    AND?: DocumentTypeLocationWhereInput | DocumentTypeLocationWhereInput[]
    OR?: DocumentTypeLocationWhereInput[]
    NOT?: DocumentTypeLocationWhereInput | DocumentTypeLocationWhereInput[]
    id?: IntFilter<"DocumentTypeLocation"> | number
    document_type_id?: IntFilter<"DocumentTypeLocation"> | number
    location_id?: IntFilter<"DocumentTypeLocation"> | number
    created_at?: DateTimeFilter<"DocumentTypeLocation"> | Date | string
    updated_at?: DateTimeFilter<"DocumentTypeLocation"> | Date | string
    document_type?: XOR<DocumentTypeScalarRelationFilter, DocumentTypeWhereInput>
  }

  export type DocumentTypeLocationOrderByWithRelationInput = {
    id?: SortOrder
    document_type_id?: SortOrder
    location_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    document_type?: DocumentTypeOrderByWithRelationInput
  }

  export type DocumentTypeLocationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    document_type_id_location_id?: DocumentTypeLocationDocument_type_idLocation_idCompoundUniqueInput
    AND?: DocumentTypeLocationWhereInput | DocumentTypeLocationWhereInput[]
    OR?: DocumentTypeLocationWhereInput[]
    NOT?: DocumentTypeLocationWhereInput | DocumentTypeLocationWhereInput[]
    document_type_id?: IntFilter<"DocumentTypeLocation"> | number
    location_id?: IntFilter<"DocumentTypeLocation"> | number
    created_at?: DateTimeFilter<"DocumentTypeLocation"> | Date | string
    updated_at?: DateTimeFilter<"DocumentTypeLocation"> | Date | string
    document_type?: XOR<DocumentTypeScalarRelationFilter, DocumentTypeWhereInput>
  }, "id" | "document_type_id_location_id">

  export type DocumentTypeLocationOrderByWithAggregationInput = {
    id?: SortOrder
    document_type_id?: SortOrder
    location_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: DocumentTypeLocationCountOrderByAggregateInput
    _avg?: DocumentTypeLocationAvgOrderByAggregateInput
    _max?: DocumentTypeLocationMaxOrderByAggregateInput
    _min?: DocumentTypeLocationMinOrderByAggregateInput
    _sum?: DocumentTypeLocationSumOrderByAggregateInput
  }

  export type DocumentTypeLocationScalarWhereWithAggregatesInput = {
    AND?: DocumentTypeLocationScalarWhereWithAggregatesInput | DocumentTypeLocationScalarWhereWithAggregatesInput[]
    OR?: DocumentTypeLocationScalarWhereWithAggregatesInput[]
    NOT?: DocumentTypeLocationScalarWhereWithAggregatesInput | DocumentTypeLocationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DocumentTypeLocation"> | number
    document_type_id?: IntWithAggregatesFilter<"DocumentTypeLocation"> | number
    location_id?: IntWithAggregatesFilter<"DocumentTypeLocation"> | number
    created_at?: DateTimeWithAggregatesFilter<"DocumentTypeLocation"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"DocumentTypeLocation"> | Date | string
  }

  export type DocumentTypeCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    formId?: string | null
    hideHeader?: boolean
    showFormButtons?: boolean
    parent_type_id?: string | null
    parent_name?: string | null
    child_type_id?: string | null
    child_name?: string | null
    documentTitles?: DocumentTitleCreateNestedManyWithoutDocument_typesInput
    documentConfigurations?: DocumentConfigurationCreateNestedManyWithoutDocumentTypeInput
    document_fields?: document_fieldsCreateNestedManyWithoutDocument_typesInput
    form_template?: FormTemplateCreateNestedOneWithoutDocument_typesInput
    locations?: DocumentTypeLocationCreateNestedManyWithoutDocument_typeInput
  }

  export type DocumentTypeUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    formId?: string | null
    hideHeader?: boolean
    showFormButtons?: boolean
    parent_type_id?: string | null
    parent_name?: string | null
    child_type_id?: string | null
    child_name?: string | null
    form_template_id?: number | null
    documentTitles?: DocumentTitleUncheckedCreateNestedManyWithoutDocument_typesInput
    documentConfigurations?: DocumentConfigurationUncheckedCreateNestedManyWithoutDocumentTypeInput
    document_fields?: document_fieldsUncheckedCreateNestedManyWithoutDocument_typesInput
    locations?: DocumentTypeLocationUncheckedCreateNestedManyWithoutDocument_typeInput
  }

  export type DocumentTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formId?: NullableStringFieldUpdateOperationsInput | string | null
    hideHeader?: BoolFieldUpdateOperationsInput | boolean
    showFormButtons?: BoolFieldUpdateOperationsInput | boolean
    parent_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent_name?: NullableStringFieldUpdateOperationsInput | string | null
    child_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    child_name?: NullableStringFieldUpdateOperationsInput | string | null
    documentTitles?: DocumentTitleUpdateManyWithoutDocument_typesNestedInput
    documentConfigurations?: DocumentConfigurationUpdateManyWithoutDocumentTypeNestedInput
    document_fields?: document_fieldsUpdateManyWithoutDocument_typesNestedInput
    form_template?: FormTemplateUpdateOneWithoutDocument_typesNestedInput
    locations?: DocumentTypeLocationUpdateManyWithoutDocument_typeNestedInput
  }

  export type DocumentTypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formId?: NullableStringFieldUpdateOperationsInput | string | null
    hideHeader?: BoolFieldUpdateOperationsInput | boolean
    showFormButtons?: BoolFieldUpdateOperationsInput | boolean
    parent_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent_name?: NullableStringFieldUpdateOperationsInput | string | null
    child_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    child_name?: NullableStringFieldUpdateOperationsInput | string | null
    form_template_id?: NullableIntFieldUpdateOperationsInput | number | null
    documentTitles?: DocumentTitleUncheckedUpdateManyWithoutDocument_typesNestedInput
    documentConfigurations?: DocumentConfigurationUncheckedUpdateManyWithoutDocumentTypeNestedInput
    document_fields?: document_fieldsUncheckedUpdateManyWithoutDocument_typesNestedInput
    locations?: DocumentTypeLocationUncheckedUpdateManyWithoutDocument_typeNestedInput
  }

  export type DocumentTypeCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    formId?: string | null
    hideHeader?: boolean
    showFormButtons?: boolean
    parent_type_id?: string | null
    parent_name?: string | null
    child_type_id?: string | null
    child_name?: string | null
    form_template_id?: number | null
  }

  export type DocumentTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formId?: NullableStringFieldUpdateOperationsInput | string | null
    hideHeader?: BoolFieldUpdateOperationsInput | boolean
    showFormButtons?: BoolFieldUpdateOperationsInput | boolean
    parent_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent_name?: NullableStringFieldUpdateOperationsInput | string | null
    child_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    child_name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentTypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formId?: NullableStringFieldUpdateOperationsInput | string | null
    hideHeader?: BoolFieldUpdateOperationsInput | boolean
    showFormButtons?: BoolFieldUpdateOperationsInput | boolean
    parent_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent_name?: NullableStringFieldUpdateOperationsInput | string | null
    child_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    child_name?: NullableStringFieldUpdateOperationsInput | string | null
    form_template_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type DocumentTitleCreateInput = {
    title: string
    created_at?: Date | string
    updated_at: Date | string
    shareable?: boolean
    is_display?: boolean
    require_number?: boolean
    require_valid_date?: boolean
    require_expire_date?: boolean
    require_doc_data?: boolean
    doc_data_options?: NullableJsonNullValueInput | InputJsonValue
    doc_data_name?: string | null
    require_attachment_front?: boolean
    require_attachment_back?: boolean
    description?: string | null
    form_description?: string | null
    form_title?: string | null
    document_types: DocumentTypeCreateNestedOneWithoutDocumentTitlesInput
    documentConfigurations?: DocumentConfigurationCreateNestedManyWithoutDocumentTitleInput
    document_fields?: document_fieldsCreateNestedManyWithoutDocument_titlesInput
  }

  export type DocumentTitleUncheckedCreateInput = {
    id?: number
    title: string
    created_at?: Date | string
    updated_at: Date | string
    shareable?: boolean
    document_type_id: number
    is_display?: boolean
    require_number?: boolean
    require_valid_date?: boolean
    require_expire_date?: boolean
    require_doc_data?: boolean
    doc_data_options?: NullableJsonNullValueInput | InputJsonValue
    doc_data_name?: string | null
    require_attachment_front?: boolean
    require_attachment_back?: boolean
    description?: string | null
    form_description?: string | null
    form_title?: string | null
    documentConfigurations?: DocumentConfigurationUncheckedCreateNestedManyWithoutDocumentTitleInput
    document_fields?: document_fieldsUncheckedCreateNestedManyWithoutDocument_titlesInput
  }

  export type DocumentTitleUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shareable?: BoolFieldUpdateOperationsInput | boolean
    is_display?: BoolFieldUpdateOperationsInput | boolean
    require_number?: BoolFieldUpdateOperationsInput | boolean
    require_valid_date?: BoolFieldUpdateOperationsInput | boolean
    require_expire_date?: BoolFieldUpdateOperationsInput | boolean
    require_doc_data?: BoolFieldUpdateOperationsInput | boolean
    doc_data_options?: NullableJsonNullValueInput | InputJsonValue
    doc_data_name?: NullableStringFieldUpdateOperationsInput | string | null
    require_attachment_front?: BoolFieldUpdateOperationsInput | boolean
    require_attachment_back?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    form_description?: NullableStringFieldUpdateOperationsInput | string | null
    form_title?: NullableStringFieldUpdateOperationsInput | string | null
    document_types?: DocumentTypeUpdateOneRequiredWithoutDocumentTitlesNestedInput
    documentConfigurations?: DocumentConfigurationUpdateManyWithoutDocumentTitleNestedInput
    document_fields?: document_fieldsUpdateManyWithoutDocument_titlesNestedInput
  }

  export type DocumentTitleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shareable?: BoolFieldUpdateOperationsInput | boolean
    document_type_id?: IntFieldUpdateOperationsInput | number
    is_display?: BoolFieldUpdateOperationsInput | boolean
    require_number?: BoolFieldUpdateOperationsInput | boolean
    require_valid_date?: BoolFieldUpdateOperationsInput | boolean
    require_expire_date?: BoolFieldUpdateOperationsInput | boolean
    require_doc_data?: BoolFieldUpdateOperationsInput | boolean
    doc_data_options?: NullableJsonNullValueInput | InputJsonValue
    doc_data_name?: NullableStringFieldUpdateOperationsInput | string | null
    require_attachment_front?: BoolFieldUpdateOperationsInput | boolean
    require_attachment_back?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    form_description?: NullableStringFieldUpdateOperationsInput | string | null
    form_title?: NullableStringFieldUpdateOperationsInput | string | null
    documentConfigurations?: DocumentConfigurationUncheckedUpdateManyWithoutDocumentTitleNestedInput
    document_fields?: document_fieldsUncheckedUpdateManyWithoutDocument_titlesNestedInput
  }

  export type DocumentTitleCreateManyInput = {
    id?: number
    title: string
    created_at?: Date | string
    updated_at: Date | string
    shareable?: boolean
    document_type_id: number
    is_display?: boolean
    require_number?: boolean
    require_valid_date?: boolean
    require_expire_date?: boolean
    require_doc_data?: boolean
    doc_data_options?: NullableJsonNullValueInput | InputJsonValue
    doc_data_name?: string | null
    require_attachment_front?: boolean
    require_attachment_back?: boolean
    description?: string | null
    form_description?: string | null
    form_title?: string | null
  }

  export type DocumentTitleUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shareable?: BoolFieldUpdateOperationsInput | boolean
    is_display?: BoolFieldUpdateOperationsInput | boolean
    require_number?: BoolFieldUpdateOperationsInput | boolean
    require_valid_date?: BoolFieldUpdateOperationsInput | boolean
    require_expire_date?: BoolFieldUpdateOperationsInput | boolean
    require_doc_data?: BoolFieldUpdateOperationsInput | boolean
    doc_data_options?: NullableJsonNullValueInput | InputJsonValue
    doc_data_name?: NullableStringFieldUpdateOperationsInput | string | null
    require_attachment_front?: BoolFieldUpdateOperationsInput | boolean
    require_attachment_back?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    form_description?: NullableStringFieldUpdateOperationsInput | string | null
    form_title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentTitleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shareable?: BoolFieldUpdateOperationsInput | boolean
    document_type_id?: IntFieldUpdateOperationsInput | number
    is_display?: BoolFieldUpdateOperationsInput | boolean
    require_number?: BoolFieldUpdateOperationsInput | boolean
    require_valid_date?: BoolFieldUpdateOperationsInput | boolean
    require_expire_date?: BoolFieldUpdateOperationsInput | boolean
    require_doc_data?: BoolFieldUpdateOperationsInput | boolean
    doc_data_options?: NullableJsonNullValueInput | InputJsonValue
    doc_data_name?: NullableStringFieldUpdateOperationsInput | string | null
    require_attachment_front?: BoolFieldUpdateOperationsInput | boolean
    require_attachment_back?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    form_description?: NullableStringFieldUpdateOperationsInput | string | null
    form_title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FormFieldCreateInput = {
    field_id: string
    field_name: string
    field_type: string
    label: string
    placeholder?: string | null
    required?: boolean
    is_hidden?: boolean
    order?: number
    full_width?: boolean
    display_conditions?: NullableJsonNullValueInput | InputJsonValue
    validation_rules?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    form_template: FormTemplateCreateNestedOneWithoutForm_fieldsInput
    field_options?: FieldOptionCreateNestedManyWithoutForm_fieldInput
  }

  export type FormFieldUncheckedCreateInput = {
    id?: number
    template_id: number
    field_id: string
    field_name: string
    field_type: string
    label: string
    placeholder?: string | null
    required?: boolean
    is_hidden?: boolean
    order?: number
    full_width?: boolean
    display_conditions?: NullableJsonNullValueInput | InputJsonValue
    validation_rules?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    field_options?: FieldOptionUncheckedCreateNestedManyWithoutForm_fieldInput
  }

  export type FormFieldUpdateInput = {
    field_id?: StringFieldUpdateOperationsInput | string
    field_name?: StringFieldUpdateOperationsInput | string
    field_type?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    is_hidden?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    full_width?: BoolFieldUpdateOperationsInput | boolean
    display_conditions?: NullableJsonNullValueInput | InputJsonValue
    validation_rules?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    form_template?: FormTemplateUpdateOneRequiredWithoutForm_fieldsNestedInput
    field_options?: FieldOptionUpdateManyWithoutForm_fieldNestedInput
  }

  export type FormFieldUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    template_id?: IntFieldUpdateOperationsInput | number
    field_id?: StringFieldUpdateOperationsInput | string
    field_name?: StringFieldUpdateOperationsInput | string
    field_type?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    is_hidden?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    full_width?: BoolFieldUpdateOperationsInput | boolean
    display_conditions?: NullableJsonNullValueInput | InputJsonValue
    validation_rules?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    field_options?: FieldOptionUncheckedUpdateManyWithoutForm_fieldNestedInput
  }

  export type FormFieldCreateManyInput = {
    id?: number
    template_id: number
    field_id: string
    field_name: string
    field_type: string
    label: string
    placeholder?: string | null
    required?: boolean
    is_hidden?: boolean
    order?: number
    full_width?: boolean
    display_conditions?: NullableJsonNullValueInput | InputJsonValue
    validation_rules?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FormFieldUpdateManyMutationInput = {
    field_id?: StringFieldUpdateOperationsInput | string
    field_name?: StringFieldUpdateOperationsInput | string
    field_type?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    is_hidden?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    full_width?: BoolFieldUpdateOperationsInput | boolean
    display_conditions?: NullableJsonNullValueInput | InputJsonValue
    validation_rules?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormFieldUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    template_id?: IntFieldUpdateOperationsInput | number
    field_id?: StringFieldUpdateOperationsInput | string
    field_name?: StringFieldUpdateOperationsInput | string
    field_type?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    is_hidden?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    full_width?: BoolFieldUpdateOperationsInput | boolean
    display_conditions?: NullableJsonNullValueInput | InputJsonValue
    validation_rules?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentConfigurationCreateInput = {
    typeOfCondition?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    priority?: number
    customFields?: NullableJsonNullValueInput | InputJsonValue
    documentTitle: DocumentTitleCreateNestedOneWithoutDocumentConfigurationsInput
    documentType: DocumentTypeCreateNestedOneWithoutDocumentConfigurationsInput
    region: RegionCreateNestedOneWithoutDocumentConfigurationsInput
  }

  export type DocumentConfigurationUncheckedCreateInput = {
    id?: number
    regionId: number
    documentTypeId: number
    documentTitleId: number
    typeOfCondition?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    priority?: number
    customFields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DocumentConfigurationUpdateInput = {
    typeOfCondition?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
    customFields?: NullableJsonNullValueInput | InputJsonValue
    documentTitle?: DocumentTitleUpdateOneRequiredWithoutDocumentConfigurationsNestedInput
    documentType?: DocumentTypeUpdateOneRequiredWithoutDocumentConfigurationsNestedInput
    region?: RegionUpdateOneRequiredWithoutDocumentConfigurationsNestedInput
  }

  export type DocumentConfigurationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    regionId?: IntFieldUpdateOperationsInput | number
    documentTypeId?: IntFieldUpdateOperationsInput | number
    documentTitleId?: IntFieldUpdateOperationsInput | number
    typeOfCondition?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
    customFields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DocumentConfigurationCreateManyInput = {
    id?: number
    regionId: number
    documentTypeId: number
    documentTitleId: number
    typeOfCondition?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    priority?: number
    customFields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DocumentConfigurationUpdateManyMutationInput = {
    typeOfCondition?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
    customFields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DocumentConfigurationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    regionId?: IntFieldUpdateOperationsInput | number
    documentTypeId?: IntFieldUpdateOperationsInput | number
    documentTitleId?: IntFieldUpdateOperationsInput | number
    typeOfCondition?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
    customFields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type RegionCreateInput = {
    name: string
    code: string
    country?: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    documentConfigurations?: DocumentConfigurationCreateNestedManyWithoutRegionInput
  }

  export type RegionUncheckedCreateInput = {
    id?: number
    name: string
    code: string
    country?: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    documentConfigurations?: DocumentConfigurationUncheckedCreateNestedManyWithoutRegionInput
  }

  export type RegionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentConfigurations?: DocumentConfigurationUpdateManyWithoutRegionNestedInput
  }

  export type RegionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentConfigurations?: DocumentConfigurationUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type RegionCreateManyInput = {
    id?: number
    name: string
    code: string
    country?: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type document_fieldsCreateInput = {
    field_id: string
    name: string
    label: string
    type: string
    placeholder?: string | null
    required?: boolean
    order: number
    full_width?: boolean
    hidden?: boolean
    default_value?: string | null
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    conditional_display?: NullableJsonNullValueInput | InputJsonValue
    help_text?: string | null
    created_at?: Date | string
    updated_at: Date | string
    document_titles?: DocumentTitleCreateNestedOneWithoutDocument_fieldsInput
    document_types: DocumentTypeCreateNestedOneWithoutDocument_fieldsInput
  }

  export type document_fieldsUncheckedCreateInput = {
    id?: number
    field_id: string
    name: string
    label: string
    type: string
    placeholder?: string | null
    required?: boolean
    order: number
    full_width?: boolean
    hidden?: boolean
    default_value?: string | null
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    conditional_display?: NullableJsonNullValueInput | InputJsonValue
    help_text?: string | null
    document_type_id: number
    document_title_id?: number | null
    created_at?: Date | string
    updated_at: Date | string
  }

  export type document_fieldsUpdateInput = {
    field_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    full_width?: BoolFieldUpdateOperationsInput | boolean
    hidden?: BoolFieldUpdateOperationsInput | boolean
    default_value?: NullableStringFieldUpdateOperationsInput | string | null
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    conditional_display?: NullableJsonNullValueInput | InputJsonValue
    help_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    document_titles?: DocumentTitleUpdateOneWithoutDocument_fieldsNestedInput
    document_types?: DocumentTypeUpdateOneRequiredWithoutDocument_fieldsNestedInput
  }

  export type document_fieldsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    field_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    full_width?: BoolFieldUpdateOperationsInput | boolean
    hidden?: BoolFieldUpdateOperationsInput | boolean
    default_value?: NullableStringFieldUpdateOperationsInput | string | null
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    conditional_display?: NullableJsonNullValueInput | InputJsonValue
    help_text?: NullableStringFieldUpdateOperationsInput | string | null
    document_type_id?: IntFieldUpdateOperationsInput | number
    document_title_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type document_fieldsCreateManyInput = {
    id?: number
    field_id: string
    name: string
    label: string
    type: string
    placeholder?: string | null
    required?: boolean
    order: number
    full_width?: boolean
    hidden?: boolean
    default_value?: string | null
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    conditional_display?: NullableJsonNullValueInput | InputJsonValue
    help_text?: string | null
    document_type_id: number
    document_title_id?: number | null
    created_at?: Date | string
    updated_at: Date | string
  }

  export type document_fieldsUpdateManyMutationInput = {
    field_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    full_width?: BoolFieldUpdateOperationsInput | boolean
    hidden?: BoolFieldUpdateOperationsInput | boolean
    default_value?: NullableStringFieldUpdateOperationsInput | string | null
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    conditional_display?: NullableJsonNullValueInput | InputJsonValue
    help_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type document_fieldsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    field_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    full_width?: BoolFieldUpdateOperationsInput | boolean
    hidden?: BoolFieldUpdateOperationsInput | boolean
    default_value?: NullableStringFieldUpdateOperationsInput | string | null
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    conditional_display?: NullableJsonNullValueInput | InputJsonValue
    help_text?: NullableStringFieldUpdateOperationsInput | string | null
    document_type_id?: IntFieldUpdateOperationsInput | number
    document_title_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormTemplateCreateInput = {
    form_key: string
    name: string
    description?: string | null
    version?: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    form_fields?: FormFieldCreateNestedManyWithoutForm_templateInput
    document_types?: DocumentTypeCreateNestedManyWithoutForm_templateInput
  }

  export type FormTemplateUncheckedCreateInput = {
    id?: number
    form_key: string
    name: string
    description?: string | null
    version?: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    form_fields?: FormFieldUncheckedCreateNestedManyWithoutForm_templateInput
    document_types?: DocumentTypeUncheckedCreateNestedManyWithoutForm_templateInput
  }

  export type FormTemplateUpdateInput = {
    form_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    form_fields?: FormFieldUpdateManyWithoutForm_templateNestedInput
    document_types?: DocumentTypeUpdateManyWithoutForm_templateNestedInput
  }

  export type FormTemplateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    form_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    form_fields?: FormFieldUncheckedUpdateManyWithoutForm_templateNestedInput
    document_types?: DocumentTypeUncheckedUpdateManyWithoutForm_templateNestedInput
  }

  export type FormTemplateCreateManyInput = {
    id?: number
    form_key: string
    name: string
    description?: string | null
    version?: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FormTemplateUpdateManyMutationInput = {
    form_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormTemplateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    form_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldOptionCreateInput = {
    option_value: string
    option_label: string
    order?: number
    created_at?: Date | string
    updated_at?: Date | string
    form_field: FormFieldCreateNestedOneWithoutField_optionsInput
  }

  export type FieldOptionUncheckedCreateInput = {
    id?: number
    field_id: number
    option_value: string
    option_label: string
    order?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FieldOptionUpdateInput = {
    option_value?: StringFieldUpdateOperationsInput | string
    option_label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    form_field?: FormFieldUpdateOneRequiredWithoutField_optionsNestedInput
  }

  export type FieldOptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    field_id?: IntFieldUpdateOperationsInput | number
    option_value?: StringFieldUpdateOperationsInput | string
    option_label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldOptionCreateManyInput = {
    id?: number
    field_id: number
    option_value: string
    option_label: string
    order?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FieldOptionUpdateManyMutationInput = {
    option_value?: StringFieldUpdateOperationsInput | string
    option_label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldOptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    field_id?: IntFieldUpdateOperationsInput | number
    option_value?: StringFieldUpdateOperationsInput | string
    option_label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentTypeLocationCreateInput = {
    location_id: number
    created_at?: Date | string
    updated_at?: Date | string
    document_type: DocumentTypeCreateNestedOneWithoutLocationsInput
  }

  export type DocumentTypeLocationUncheckedCreateInput = {
    id?: number
    document_type_id: number
    location_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DocumentTypeLocationUpdateInput = {
    location_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    document_type?: DocumentTypeUpdateOneRequiredWithoutLocationsNestedInput
  }

  export type DocumentTypeLocationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    document_type_id?: IntFieldUpdateOperationsInput | number
    location_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentTypeLocationCreateManyInput = {
    id?: number
    document_type_id: number
    location_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DocumentTypeLocationUpdateManyMutationInput = {
    location_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentTypeLocationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    document_type_id?: IntFieldUpdateOperationsInput | number
    location_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DocumentTitleListRelationFilter = {
    every?: DocumentTitleWhereInput
    some?: DocumentTitleWhereInput
    none?: DocumentTitleWhereInput
  }

  export type DocumentConfigurationListRelationFilter = {
    every?: DocumentConfigurationWhereInput
    some?: DocumentConfigurationWhereInput
    none?: DocumentConfigurationWhereInput
  }

  export type Document_fieldsListRelationFilter = {
    every?: document_fieldsWhereInput
    some?: document_fieldsWhereInput
    none?: document_fieldsWhereInput
  }

  export type FormTemplateNullableScalarRelationFilter = {
    is?: FormTemplateWhereInput | null
    isNot?: FormTemplateWhereInput | null
  }

  export type DocumentTypeLocationListRelationFilter = {
    every?: DocumentTypeLocationWhereInput
    some?: DocumentTypeLocationWhereInput
    none?: DocumentTypeLocationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DocumentTitleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentConfigurationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type document_fieldsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentTypeLocationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentTypeParent_type_id_child_type_idCompoundUniqueInput = {
    parent_type_id: string
    child_type_id: string
  }

  export type DocumentTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    formId?: SortOrder
    hideHeader?: SortOrder
    showFormButtons?: SortOrder
    parent_type_id?: SortOrder
    parent_name?: SortOrder
    child_type_id?: SortOrder
    child_name?: SortOrder
    form_template_id?: SortOrder
  }

  export type DocumentTypeAvgOrderByAggregateInput = {
    id?: SortOrder
    form_template_id?: SortOrder
  }

  export type DocumentTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    formId?: SortOrder
    hideHeader?: SortOrder
    showFormButtons?: SortOrder
    parent_type_id?: SortOrder
    parent_name?: SortOrder
    child_type_id?: SortOrder
    child_name?: SortOrder
    form_template_id?: SortOrder
  }

  export type DocumentTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    formId?: SortOrder
    hideHeader?: SortOrder
    showFormButtons?: SortOrder
    parent_type_id?: SortOrder
    parent_name?: SortOrder
    child_type_id?: SortOrder
    child_name?: SortOrder
    form_template_id?: SortOrder
  }

  export type DocumentTypeSumOrderByAggregateInput = {
    id?: SortOrder
    form_template_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DocumentTypeScalarRelationFilter = {
    is?: DocumentTypeWhereInput
    isNot?: DocumentTypeWhereInput
  }

  export type DocumentTitleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    shareable?: SortOrder
    document_type_id?: SortOrder
    is_display?: SortOrder
    require_number?: SortOrder
    require_valid_date?: SortOrder
    require_expire_date?: SortOrder
    require_doc_data?: SortOrder
    doc_data_options?: SortOrder
    doc_data_name?: SortOrder
    require_attachment_front?: SortOrder
    require_attachment_back?: SortOrder
    description?: SortOrder
    form_description?: SortOrder
    form_title?: SortOrder
  }

  export type DocumentTitleAvgOrderByAggregateInput = {
    id?: SortOrder
    document_type_id?: SortOrder
  }

  export type DocumentTitleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    shareable?: SortOrder
    document_type_id?: SortOrder
    is_display?: SortOrder
    require_number?: SortOrder
    require_valid_date?: SortOrder
    require_expire_date?: SortOrder
    require_doc_data?: SortOrder
    doc_data_name?: SortOrder
    require_attachment_front?: SortOrder
    require_attachment_back?: SortOrder
    description?: SortOrder
    form_description?: SortOrder
    form_title?: SortOrder
  }

  export type DocumentTitleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    shareable?: SortOrder
    document_type_id?: SortOrder
    is_display?: SortOrder
    require_number?: SortOrder
    require_valid_date?: SortOrder
    require_expire_date?: SortOrder
    require_doc_data?: SortOrder
    doc_data_name?: SortOrder
    require_attachment_front?: SortOrder
    require_attachment_back?: SortOrder
    description?: SortOrder
    form_description?: SortOrder
    form_title?: SortOrder
  }

  export type DocumentTitleSumOrderByAggregateInput = {
    id?: SortOrder
    document_type_id?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type FormTemplateScalarRelationFilter = {
    is?: FormTemplateWhereInput
    isNot?: FormTemplateWhereInput
  }

  export type FieldOptionListRelationFilter = {
    every?: FieldOptionWhereInput
    some?: FieldOptionWhereInput
    none?: FieldOptionWhereInput
  }

  export type FieldOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormFieldCountOrderByAggregateInput = {
    id?: SortOrder
    template_id?: SortOrder
    field_id?: SortOrder
    field_name?: SortOrder
    field_type?: SortOrder
    label?: SortOrder
    placeholder?: SortOrder
    required?: SortOrder
    is_hidden?: SortOrder
    order?: SortOrder
    full_width?: SortOrder
    display_conditions?: SortOrder
    validation_rules?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FormFieldAvgOrderByAggregateInput = {
    id?: SortOrder
    template_id?: SortOrder
    order?: SortOrder
  }

  export type FormFieldMaxOrderByAggregateInput = {
    id?: SortOrder
    template_id?: SortOrder
    field_id?: SortOrder
    field_name?: SortOrder
    field_type?: SortOrder
    label?: SortOrder
    placeholder?: SortOrder
    required?: SortOrder
    is_hidden?: SortOrder
    order?: SortOrder
    full_width?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FormFieldMinOrderByAggregateInput = {
    id?: SortOrder
    template_id?: SortOrder
    field_id?: SortOrder
    field_name?: SortOrder
    field_type?: SortOrder
    label?: SortOrder
    placeholder?: SortOrder
    required?: SortOrder
    is_hidden?: SortOrder
    order?: SortOrder
    full_width?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FormFieldSumOrderByAggregateInput = {
    id?: SortOrder
    template_id?: SortOrder
    order?: SortOrder
  }

  export type DocumentTitleScalarRelationFilter = {
    is?: DocumentTitleWhereInput
    isNot?: DocumentTitleWhereInput
  }

  export type RegionScalarRelationFilter = {
    is?: RegionWhereInput
    isNot?: RegionWhereInput
  }

  export type DocumentConfigurationRegionIdDocumentTitleIdCompoundUniqueInput = {
    regionId: number
    documentTitleId: number
  }

  export type DocumentConfigurationCountOrderByAggregateInput = {
    id?: SortOrder
    regionId?: SortOrder
    documentTypeId?: SortOrder
    documentTitleId?: SortOrder
    typeOfCondition?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    active?: SortOrder
    priority?: SortOrder
    customFields?: SortOrder
  }

  export type DocumentConfigurationAvgOrderByAggregateInput = {
    id?: SortOrder
    regionId?: SortOrder
    documentTypeId?: SortOrder
    documentTitleId?: SortOrder
    typeOfCondition?: SortOrder
    priority?: SortOrder
  }

  export type DocumentConfigurationMaxOrderByAggregateInput = {
    id?: SortOrder
    regionId?: SortOrder
    documentTypeId?: SortOrder
    documentTitleId?: SortOrder
    typeOfCondition?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    active?: SortOrder
    priority?: SortOrder
  }

  export type DocumentConfigurationMinOrderByAggregateInput = {
    id?: SortOrder
    regionId?: SortOrder
    documentTypeId?: SortOrder
    documentTitleId?: SortOrder
    typeOfCondition?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    active?: SortOrder
    priority?: SortOrder
  }

  export type DocumentConfigurationSumOrderByAggregateInput = {
    id?: SortOrder
    regionId?: SortOrder
    documentTypeId?: SortOrder
    documentTitleId?: SortOrder
    typeOfCondition?: SortOrder
    priority?: SortOrder
  }

  export type RegionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    country?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RegionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    country?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    country?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RegionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DocumentTitleNullableScalarRelationFilter = {
    is?: DocumentTitleWhereInput | null
    isNot?: DocumentTitleWhereInput | null
  }

  export type document_fieldsCountOrderByAggregateInput = {
    id?: SortOrder
    field_id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    type?: SortOrder
    placeholder?: SortOrder
    required?: SortOrder
    order?: SortOrder
    full_width?: SortOrder
    hidden?: SortOrder
    default_value?: SortOrder
    options?: SortOrder
    validation?: SortOrder
    conditional_display?: SortOrder
    help_text?: SortOrder
    document_type_id?: SortOrder
    document_title_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type document_fieldsAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    document_type_id?: SortOrder
    document_title_id?: SortOrder
  }

  export type document_fieldsMaxOrderByAggregateInput = {
    id?: SortOrder
    field_id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    type?: SortOrder
    placeholder?: SortOrder
    required?: SortOrder
    order?: SortOrder
    full_width?: SortOrder
    hidden?: SortOrder
    default_value?: SortOrder
    help_text?: SortOrder
    document_type_id?: SortOrder
    document_title_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type document_fieldsMinOrderByAggregateInput = {
    id?: SortOrder
    field_id?: SortOrder
    name?: SortOrder
    label?: SortOrder
    type?: SortOrder
    placeholder?: SortOrder
    required?: SortOrder
    order?: SortOrder
    full_width?: SortOrder
    hidden?: SortOrder
    default_value?: SortOrder
    help_text?: SortOrder
    document_type_id?: SortOrder
    document_title_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type document_fieldsSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    document_type_id?: SortOrder
    document_title_id?: SortOrder
  }

  export type FormFieldListRelationFilter = {
    every?: FormFieldWhereInput
    some?: FormFieldWhereInput
    none?: FormFieldWhereInput
  }

  export type DocumentTypeListRelationFilter = {
    every?: DocumentTypeWhereInput
    some?: DocumentTypeWhereInput
    none?: DocumentTypeWhereInput
  }

  export type FormFieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentTypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FormTemplateCountOrderByAggregateInput = {
    id?: SortOrder
    form_key?: SortOrder
    name?: SortOrder
    description?: SortOrder
    version?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FormTemplateAvgOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
  }

  export type FormTemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    form_key?: SortOrder
    name?: SortOrder
    description?: SortOrder
    version?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FormTemplateMinOrderByAggregateInput = {
    id?: SortOrder
    form_key?: SortOrder
    name?: SortOrder
    description?: SortOrder
    version?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FormTemplateSumOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
  }

  export type FormFieldScalarRelationFilter = {
    is?: FormFieldWhereInput
    isNot?: FormFieldWhereInput
  }

  export type FieldOptionCountOrderByAggregateInput = {
    id?: SortOrder
    field_id?: SortOrder
    option_value?: SortOrder
    option_label?: SortOrder
    order?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FieldOptionAvgOrderByAggregateInput = {
    id?: SortOrder
    field_id?: SortOrder
    order?: SortOrder
  }

  export type FieldOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    field_id?: SortOrder
    option_value?: SortOrder
    option_label?: SortOrder
    order?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FieldOptionMinOrderByAggregateInput = {
    id?: SortOrder
    field_id?: SortOrder
    option_value?: SortOrder
    option_label?: SortOrder
    order?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FieldOptionSumOrderByAggregateInput = {
    id?: SortOrder
    field_id?: SortOrder
    order?: SortOrder
  }

  export type DocumentTypeLocationDocument_type_idLocation_idCompoundUniqueInput = {
    document_type_id: number
    location_id: number
  }

  export type DocumentTypeLocationCountOrderByAggregateInput = {
    id?: SortOrder
    document_type_id?: SortOrder
    location_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DocumentTypeLocationAvgOrderByAggregateInput = {
    id?: SortOrder
    document_type_id?: SortOrder
    location_id?: SortOrder
  }

  export type DocumentTypeLocationMaxOrderByAggregateInput = {
    id?: SortOrder
    document_type_id?: SortOrder
    location_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DocumentTypeLocationMinOrderByAggregateInput = {
    id?: SortOrder
    document_type_id?: SortOrder
    location_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DocumentTypeLocationSumOrderByAggregateInput = {
    id?: SortOrder
    document_type_id?: SortOrder
    location_id?: SortOrder
  }

  export type DocumentTitleCreateNestedManyWithoutDocument_typesInput = {
    create?: XOR<DocumentTitleCreateWithoutDocument_typesInput, DocumentTitleUncheckedCreateWithoutDocument_typesInput> | DocumentTitleCreateWithoutDocument_typesInput[] | DocumentTitleUncheckedCreateWithoutDocument_typesInput[]
    connectOrCreate?: DocumentTitleCreateOrConnectWithoutDocument_typesInput | DocumentTitleCreateOrConnectWithoutDocument_typesInput[]
    createMany?: DocumentTitleCreateManyDocument_typesInputEnvelope
    connect?: DocumentTitleWhereUniqueInput | DocumentTitleWhereUniqueInput[]
  }

  export type DocumentConfigurationCreateNestedManyWithoutDocumentTypeInput = {
    create?: XOR<DocumentConfigurationCreateWithoutDocumentTypeInput, DocumentConfigurationUncheckedCreateWithoutDocumentTypeInput> | DocumentConfigurationCreateWithoutDocumentTypeInput[] | DocumentConfigurationUncheckedCreateWithoutDocumentTypeInput[]
    connectOrCreate?: DocumentConfigurationCreateOrConnectWithoutDocumentTypeInput | DocumentConfigurationCreateOrConnectWithoutDocumentTypeInput[]
    createMany?: DocumentConfigurationCreateManyDocumentTypeInputEnvelope
    connect?: DocumentConfigurationWhereUniqueInput | DocumentConfigurationWhereUniqueInput[]
  }

  export type document_fieldsCreateNestedManyWithoutDocument_typesInput = {
    create?: XOR<document_fieldsCreateWithoutDocument_typesInput, document_fieldsUncheckedCreateWithoutDocument_typesInput> | document_fieldsCreateWithoutDocument_typesInput[] | document_fieldsUncheckedCreateWithoutDocument_typesInput[]
    connectOrCreate?: document_fieldsCreateOrConnectWithoutDocument_typesInput | document_fieldsCreateOrConnectWithoutDocument_typesInput[]
    createMany?: document_fieldsCreateManyDocument_typesInputEnvelope
    connect?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
  }

  export type FormTemplateCreateNestedOneWithoutDocument_typesInput = {
    create?: XOR<FormTemplateCreateWithoutDocument_typesInput, FormTemplateUncheckedCreateWithoutDocument_typesInput>
    connectOrCreate?: FormTemplateCreateOrConnectWithoutDocument_typesInput
    connect?: FormTemplateWhereUniqueInput
  }

  export type DocumentTypeLocationCreateNestedManyWithoutDocument_typeInput = {
    create?: XOR<DocumentTypeLocationCreateWithoutDocument_typeInput, DocumentTypeLocationUncheckedCreateWithoutDocument_typeInput> | DocumentTypeLocationCreateWithoutDocument_typeInput[] | DocumentTypeLocationUncheckedCreateWithoutDocument_typeInput[]
    connectOrCreate?: DocumentTypeLocationCreateOrConnectWithoutDocument_typeInput | DocumentTypeLocationCreateOrConnectWithoutDocument_typeInput[]
    createMany?: DocumentTypeLocationCreateManyDocument_typeInputEnvelope
    connect?: DocumentTypeLocationWhereUniqueInput | DocumentTypeLocationWhereUniqueInput[]
  }

  export type DocumentTitleUncheckedCreateNestedManyWithoutDocument_typesInput = {
    create?: XOR<DocumentTitleCreateWithoutDocument_typesInput, DocumentTitleUncheckedCreateWithoutDocument_typesInput> | DocumentTitleCreateWithoutDocument_typesInput[] | DocumentTitleUncheckedCreateWithoutDocument_typesInput[]
    connectOrCreate?: DocumentTitleCreateOrConnectWithoutDocument_typesInput | DocumentTitleCreateOrConnectWithoutDocument_typesInput[]
    createMany?: DocumentTitleCreateManyDocument_typesInputEnvelope
    connect?: DocumentTitleWhereUniqueInput | DocumentTitleWhereUniqueInput[]
  }

  export type DocumentConfigurationUncheckedCreateNestedManyWithoutDocumentTypeInput = {
    create?: XOR<DocumentConfigurationCreateWithoutDocumentTypeInput, DocumentConfigurationUncheckedCreateWithoutDocumentTypeInput> | DocumentConfigurationCreateWithoutDocumentTypeInput[] | DocumentConfigurationUncheckedCreateWithoutDocumentTypeInput[]
    connectOrCreate?: DocumentConfigurationCreateOrConnectWithoutDocumentTypeInput | DocumentConfigurationCreateOrConnectWithoutDocumentTypeInput[]
    createMany?: DocumentConfigurationCreateManyDocumentTypeInputEnvelope
    connect?: DocumentConfigurationWhereUniqueInput | DocumentConfigurationWhereUniqueInput[]
  }

  export type document_fieldsUncheckedCreateNestedManyWithoutDocument_typesInput = {
    create?: XOR<document_fieldsCreateWithoutDocument_typesInput, document_fieldsUncheckedCreateWithoutDocument_typesInput> | document_fieldsCreateWithoutDocument_typesInput[] | document_fieldsUncheckedCreateWithoutDocument_typesInput[]
    connectOrCreate?: document_fieldsCreateOrConnectWithoutDocument_typesInput | document_fieldsCreateOrConnectWithoutDocument_typesInput[]
    createMany?: document_fieldsCreateManyDocument_typesInputEnvelope
    connect?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
  }

  export type DocumentTypeLocationUncheckedCreateNestedManyWithoutDocument_typeInput = {
    create?: XOR<DocumentTypeLocationCreateWithoutDocument_typeInput, DocumentTypeLocationUncheckedCreateWithoutDocument_typeInput> | DocumentTypeLocationCreateWithoutDocument_typeInput[] | DocumentTypeLocationUncheckedCreateWithoutDocument_typeInput[]
    connectOrCreate?: DocumentTypeLocationCreateOrConnectWithoutDocument_typeInput | DocumentTypeLocationCreateOrConnectWithoutDocument_typeInput[]
    createMany?: DocumentTypeLocationCreateManyDocument_typeInputEnvelope
    connect?: DocumentTypeLocationWhereUniqueInput | DocumentTypeLocationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DocumentTitleUpdateManyWithoutDocument_typesNestedInput = {
    create?: XOR<DocumentTitleCreateWithoutDocument_typesInput, DocumentTitleUncheckedCreateWithoutDocument_typesInput> | DocumentTitleCreateWithoutDocument_typesInput[] | DocumentTitleUncheckedCreateWithoutDocument_typesInput[]
    connectOrCreate?: DocumentTitleCreateOrConnectWithoutDocument_typesInput | DocumentTitleCreateOrConnectWithoutDocument_typesInput[]
    upsert?: DocumentTitleUpsertWithWhereUniqueWithoutDocument_typesInput | DocumentTitleUpsertWithWhereUniqueWithoutDocument_typesInput[]
    createMany?: DocumentTitleCreateManyDocument_typesInputEnvelope
    set?: DocumentTitleWhereUniqueInput | DocumentTitleWhereUniqueInput[]
    disconnect?: DocumentTitleWhereUniqueInput | DocumentTitleWhereUniqueInput[]
    delete?: DocumentTitleWhereUniqueInput | DocumentTitleWhereUniqueInput[]
    connect?: DocumentTitleWhereUniqueInput | DocumentTitleWhereUniqueInput[]
    update?: DocumentTitleUpdateWithWhereUniqueWithoutDocument_typesInput | DocumentTitleUpdateWithWhereUniqueWithoutDocument_typesInput[]
    updateMany?: DocumentTitleUpdateManyWithWhereWithoutDocument_typesInput | DocumentTitleUpdateManyWithWhereWithoutDocument_typesInput[]
    deleteMany?: DocumentTitleScalarWhereInput | DocumentTitleScalarWhereInput[]
  }

  export type DocumentConfigurationUpdateManyWithoutDocumentTypeNestedInput = {
    create?: XOR<DocumentConfigurationCreateWithoutDocumentTypeInput, DocumentConfigurationUncheckedCreateWithoutDocumentTypeInput> | DocumentConfigurationCreateWithoutDocumentTypeInput[] | DocumentConfigurationUncheckedCreateWithoutDocumentTypeInput[]
    connectOrCreate?: DocumentConfigurationCreateOrConnectWithoutDocumentTypeInput | DocumentConfigurationCreateOrConnectWithoutDocumentTypeInput[]
    upsert?: DocumentConfigurationUpsertWithWhereUniqueWithoutDocumentTypeInput | DocumentConfigurationUpsertWithWhereUniqueWithoutDocumentTypeInput[]
    createMany?: DocumentConfigurationCreateManyDocumentTypeInputEnvelope
    set?: DocumentConfigurationWhereUniqueInput | DocumentConfigurationWhereUniqueInput[]
    disconnect?: DocumentConfigurationWhereUniqueInput | DocumentConfigurationWhereUniqueInput[]
    delete?: DocumentConfigurationWhereUniqueInput | DocumentConfigurationWhereUniqueInput[]
    connect?: DocumentConfigurationWhereUniqueInput | DocumentConfigurationWhereUniqueInput[]
    update?: DocumentConfigurationUpdateWithWhereUniqueWithoutDocumentTypeInput | DocumentConfigurationUpdateWithWhereUniqueWithoutDocumentTypeInput[]
    updateMany?: DocumentConfigurationUpdateManyWithWhereWithoutDocumentTypeInput | DocumentConfigurationUpdateManyWithWhereWithoutDocumentTypeInput[]
    deleteMany?: DocumentConfigurationScalarWhereInput | DocumentConfigurationScalarWhereInput[]
  }

  export type document_fieldsUpdateManyWithoutDocument_typesNestedInput = {
    create?: XOR<document_fieldsCreateWithoutDocument_typesInput, document_fieldsUncheckedCreateWithoutDocument_typesInput> | document_fieldsCreateWithoutDocument_typesInput[] | document_fieldsUncheckedCreateWithoutDocument_typesInput[]
    connectOrCreate?: document_fieldsCreateOrConnectWithoutDocument_typesInput | document_fieldsCreateOrConnectWithoutDocument_typesInput[]
    upsert?: document_fieldsUpsertWithWhereUniqueWithoutDocument_typesInput | document_fieldsUpsertWithWhereUniqueWithoutDocument_typesInput[]
    createMany?: document_fieldsCreateManyDocument_typesInputEnvelope
    set?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
    disconnect?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
    delete?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
    connect?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
    update?: document_fieldsUpdateWithWhereUniqueWithoutDocument_typesInput | document_fieldsUpdateWithWhereUniqueWithoutDocument_typesInput[]
    updateMany?: document_fieldsUpdateManyWithWhereWithoutDocument_typesInput | document_fieldsUpdateManyWithWhereWithoutDocument_typesInput[]
    deleteMany?: document_fieldsScalarWhereInput | document_fieldsScalarWhereInput[]
  }

  export type FormTemplateUpdateOneWithoutDocument_typesNestedInput = {
    create?: XOR<FormTemplateCreateWithoutDocument_typesInput, FormTemplateUncheckedCreateWithoutDocument_typesInput>
    connectOrCreate?: FormTemplateCreateOrConnectWithoutDocument_typesInput
    upsert?: FormTemplateUpsertWithoutDocument_typesInput
    disconnect?: FormTemplateWhereInput | boolean
    delete?: FormTemplateWhereInput | boolean
    connect?: FormTemplateWhereUniqueInput
    update?: XOR<XOR<FormTemplateUpdateToOneWithWhereWithoutDocument_typesInput, FormTemplateUpdateWithoutDocument_typesInput>, FormTemplateUncheckedUpdateWithoutDocument_typesInput>
  }

  export type DocumentTypeLocationUpdateManyWithoutDocument_typeNestedInput = {
    create?: XOR<DocumentTypeLocationCreateWithoutDocument_typeInput, DocumentTypeLocationUncheckedCreateWithoutDocument_typeInput> | DocumentTypeLocationCreateWithoutDocument_typeInput[] | DocumentTypeLocationUncheckedCreateWithoutDocument_typeInput[]
    connectOrCreate?: DocumentTypeLocationCreateOrConnectWithoutDocument_typeInput | DocumentTypeLocationCreateOrConnectWithoutDocument_typeInput[]
    upsert?: DocumentTypeLocationUpsertWithWhereUniqueWithoutDocument_typeInput | DocumentTypeLocationUpsertWithWhereUniqueWithoutDocument_typeInput[]
    createMany?: DocumentTypeLocationCreateManyDocument_typeInputEnvelope
    set?: DocumentTypeLocationWhereUniqueInput | DocumentTypeLocationWhereUniqueInput[]
    disconnect?: DocumentTypeLocationWhereUniqueInput | DocumentTypeLocationWhereUniqueInput[]
    delete?: DocumentTypeLocationWhereUniqueInput | DocumentTypeLocationWhereUniqueInput[]
    connect?: DocumentTypeLocationWhereUniqueInput | DocumentTypeLocationWhereUniqueInput[]
    update?: DocumentTypeLocationUpdateWithWhereUniqueWithoutDocument_typeInput | DocumentTypeLocationUpdateWithWhereUniqueWithoutDocument_typeInput[]
    updateMany?: DocumentTypeLocationUpdateManyWithWhereWithoutDocument_typeInput | DocumentTypeLocationUpdateManyWithWhereWithoutDocument_typeInput[]
    deleteMany?: DocumentTypeLocationScalarWhereInput | DocumentTypeLocationScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DocumentTitleUncheckedUpdateManyWithoutDocument_typesNestedInput = {
    create?: XOR<DocumentTitleCreateWithoutDocument_typesInput, DocumentTitleUncheckedCreateWithoutDocument_typesInput> | DocumentTitleCreateWithoutDocument_typesInput[] | DocumentTitleUncheckedCreateWithoutDocument_typesInput[]
    connectOrCreate?: DocumentTitleCreateOrConnectWithoutDocument_typesInput | DocumentTitleCreateOrConnectWithoutDocument_typesInput[]
    upsert?: DocumentTitleUpsertWithWhereUniqueWithoutDocument_typesInput | DocumentTitleUpsertWithWhereUniqueWithoutDocument_typesInput[]
    createMany?: DocumentTitleCreateManyDocument_typesInputEnvelope
    set?: DocumentTitleWhereUniqueInput | DocumentTitleWhereUniqueInput[]
    disconnect?: DocumentTitleWhereUniqueInput | DocumentTitleWhereUniqueInput[]
    delete?: DocumentTitleWhereUniqueInput | DocumentTitleWhereUniqueInput[]
    connect?: DocumentTitleWhereUniqueInput | DocumentTitleWhereUniqueInput[]
    update?: DocumentTitleUpdateWithWhereUniqueWithoutDocument_typesInput | DocumentTitleUpdateWithWhereUniqueWithoutDocument_typesInput[]
    updateMany?: DocumentTitleUpdateManyWithWhereWithoutDocument_typesInput | DocumentTitleUpdateManyWithWhereWithoutDocument_typesInput[]
    deleteMany?: DocumentTitleScalarWhereInput | DocumentTitleScalarWhereInput[]
  }

  export type DocumentConfigurationUncheckedUpdateManyWithoutDocumentTypeNestedInput = {
    create?: XOR<DocumentConfigurationCreateWithoutDocumentTypeInput, DocumentConfigurationUncheckedCreateWithoutDocumentTypeInput> | DocumentConfigurationCreateWithoutDocumentTypeInput[] | DocumentConfigurationUncheckedCreateWithoutDocumentTypeInput[]
    connectOrCreate?: DocumentConfigurationCreateOrConnectWithoutDocumentTypeInput | DocumentConfigurationCreateOrConnectWithoutDocumentTypeInput[]
    upsert?: DocumentConfigurationUpsertWithWhereUniqueWithoutDocumentTypeInput | DocumentConfigurationUpsertWithWhereUniqueWithoutDocumentTypeInput[]
    createMany?: DocumentConfigurationCreateManyDocumentTypeInputEnvelope
    set?: DocumentConfigurationWhereUniqueInput | DocumentConfigurationWhereUniqueInput[]
    disconnect?: DocumentConfigurationWhereUniqueInput | DocumentConfigurationWhereUniqueInput[]
    delete?: DocumentConfigurationWhereUniqueInput | DocumentConfigurationWhereUniqueInput[]
    connect?: DocumentConfigurationWhereUniqueInput | DocumentConfigurationWhereUniqueInput[]
    update?: DocumentConfigurationUpdateWithWhereUniqueWithoutDocumentTypeInput | DocumentConfigurationUpdateWithWhereUniqueWithoutDocumentTypeInput[]
    updateMany?: DocumentConfigurationUpdateManyWithWhereWithoutDocumentTypeInput | DocumentConfigurationUpdateManyWithWhereWithoutDocumentTypeInput[]
    deleteMany?: DocumentConfigurationScalarWhereInput | DocumentConfigurationScalarWhereInput[]
  }

  export type document_fieldsUncheckedUpdateManyWithoutDocument_typesNestedInput = {
    create?: XOR<document_fieldsCreateWithoutDocument_typesInput, document_fieldsUncheckedCreateWithoutDocument_typesInput> | document_fieldsCreateWithoutDocument_typesInput[] | document_fieldsUncheckedCreateWithoutDocument_typesInput[]
    connectOrCreate?: document_fieldsCreateOrConnectWithoutDocument_typesInput | document_fieldsCreateOrConnectWithoutDocument_typesInput[]
    upsert?: document_fieldsUpsertWithWhereUniqueWithoutDocument_typesInput | document_fieldsUpsertWithWhereUniqueWithoutDocument_typesInput[]
    createMany?: document_fieldsCreateManyDocument_typesInputEnvelope
    set?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
    disconnect?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
    delete?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
    connect?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
    update?: document_fieldsUpdateWithWhereUniqueWithoutDocument_typesInput | document_fieldsUpdateWithWhereUniqueWithoutDocument_typesInput[]
    updateMany?: document_fieldsUpdateManyWithWhereWithoutDocument_typesInput | document_fieldsUpdateManyWithWhereWithoutDocument_typesInput[]
    deleteMany?: document_fieldsScalarWhereInput | document_fieldsScalarWhereInput[]
  }

  export type DocumentTypeLocationUncheckedUpdateManyWithoutDocument_typeNestedInput = {
    create?: XOR<DocumentTypeLocationCreateWithoutDocument_typeInput, DocumentTypeLocationUncheckedCreateWithoutDocument_typeInput> | DocumentTypeLocationCreateWithoutDocument_typeInput[] | DocumentTypeLocationUncheckedCreateWithoutDocument_typeInput[]
    connectOrCreate?: DocumentTypeLocationCreateOrConnectWithoutDocument_typeInput | DocumentTypeLocationCreateOrConnectWithoutDocument_typeInput[]
    upsert?: DocumentTypeLocationUpsertWithWhereUniqueWithoutDocument_typeInput | DocumentTypeLocationUpsertWithWhereUniqueWithoutDocument_typeInput[]
    createMany?: DocumentTypeLocationCreateManyDocument_typeInputEnvelope
    set?: DocumentTypeLocationWhereUniqueInput | DocumentTypeLocationWhereUniqueInput[]
    disconnect?: DocumentTypeLocationWhereUniqueInput | DocumentTypeLocationWhereUniqueInput[]
    delete?: DocumentTypeLocationWhereUniqueInput | DocumentTypeLocationWhereUniqueInput[]
    connect?: DocumentTypeLocationWhereUniqueInput | DocumentTypeLocationWhereUniqueInput[]
    update?: DocumentTypeLocationUpdateWithWhereUniqueWithoutDocument_typeInput | DocumentTypeLocationUpdateWithWhereUniqueWithoutDocument_typeInput[]
    updateMany?: DocumentTypeLocationUpdateManyWithWhereWithoutDocument_typeInput | DocumentTypeLocationUpdateManyWithWhereWithoutDocument_typeInput[]
    deleteMany?: DocumentTypeLocationScalarWhereInput | DocumentTypeLocationScalarWhereInput[]
  }

  export type DocumentTypeCreateNestedOneWithoutDocumentTitlesInput = {
    create?: XOR<DocumentTypeCreateWithoutDocumentTitlesInput, DocumentTypeUncheckedCreateWithoutDocumentTitlesInput>
    connectOrCreate?: DocumentTypeCreateOrConnectWithoutDocumentTitlesInput
    connect?: DocumentTypeWhereUniqueInput
  }

  export type DocumentConfigurationCreateNestedManyWithoutDocumentTitleInput = {
    create?: XOR<DocumentConfigurationCreateWithoutDocumentTitleInput, DocumentConfigurationUncheckedCreateWithoutDocumentTitleInput> | DocumentConfigurationCreateWithoutDocumentTitleInput[] | DocumentConfigurationUncheckedCreateWithoutDocumentTitleInput[]
    connectOrCreate?: DocumentConfigurationCreateOrConnectWithoutDocumentTitleInput | DocumentConfigurationCreateOrConnectWithoutDocumentTitleInput[]
    createMany?: DocumentConfigurationCreateManyDocumentTitleInputEnvelope
    connect?: DocumentConfigurationWhereUniqueInput | DocumentConfigurationWhereUniqueInput[]
  }

  export type document_fieldsCreateNestedManyWithoutDocument_titlesInput = {
    create?: XOR<document_fieldsCreateWithoutDocument_titlesInput, document_fieldsUncheckedCreateWithoutDocument_titlesInput> | document_fieldsCreateWithoutDocument_titlesInput[] | document_fieldsUncheckedCreateWithoutDocument_titlesInput[]
    connectOrCreate?: document_fieldsCreateOrConnectWithoutDocument_titlesInput | document_fieldsCreateOrConnectWithoutDocument_titlesInput[]
    createMany?: document_fieldsCreateManyDocument_titlesInputEnvelope
    connect?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
  }

  export type DocumentConfigurationUncheckedCreateNestedManyWithoutDocumentTitleInput = {
    create?: XOR<DocumentConfigurationCreateWithoutDocumentTitleInput, DocumentConfigurationUncheckedCreateWithoutDocumentTitleInput> | DocumentConfigurationCreateWithoutDocumentTitleInput[] | DocumentConfigurationUncheckedCreateWithoutDocumentTitleInput[]
    connectOrCreate?: DocumentConfigurationCreateOrConnectWithoutDocumentTitleInput | DocumentConfigurationCreateOrConnectWithoutDocumentTitleInput[]
    createMany?: DocumentConfigurationCreateManyDocumentTitleInputEnvelope
    connect?: DocumentConfigurationWhereUniqueInput | DocumentConfigurationWhereUniqueInput[]
  }

  export type document_fieldsUncheckedCreateNestedManyWithoutDocument_titlesInput = {
    create?: XOR<document_fieldsCreateWithoutDocument_titlesInput, document_fieldsUncheckedCreateWithoutDocument_titlesInput> | document_fieldsCreateWithoutDocument_titlesInput[] | document_fieldsUncheckedCreateWithoutDocument_titlesInput[]
    connectOrCreate?: document_fieldsCreateOrConnectWithoutDocument_titlesInput | document_fieldsCreateOrConnectWithoutDocument_titlesInput[]
    createMany?: document_fieldsCreateManyDocument_titlesInputEnvelope
    connect?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
  }

  export type DocumentTypeUpdateOneRequiredWithoutDocumentTitlesNestedInput = {
    create?: XOR<DocumentTypeCreateWithoutDocumentTitlesInput, DocumentTypeUncheckedCreateWithoutDocumentTitlesInput>
    connectOrCreate?: DocumentTypeCreateOrConnectWithoutDocumentTitlesInput
    upsert?: DocumentTypeUpsertWithoutDocumentTitlesInput
    connect?: DocumentTypeWhereUniqueInput
    update?: XOR<XOR<DocumentTypeUpdateToOneWithWhereWithoutDocumentTitlesInput, DocumentTypeUpdateWithoutDocumentTitlesInput>, DocumentTypeUncheckedUpdateWithoutDocumentTitlesInput>
  }

  export type DocumentConfigurationUpdateManyWithoutDocumentTitleNestedInput = {
    create?: XOR<DocumentConfigurationCreateWithoutDocumentTitleInput, DocumentConfigurationUncheckedCreateWithoutDocumentTitleInput> | DocumentConfigurationCreateWithoutDocumentTitleInput[] | DocumentConfigurationUncheckedCreateWithoutDocumentTitleInput[]
    connectOrCreate?: DocumentConfigurationCreateOrConnectWithoutDocumentTitleInput | DocumentConfigurationCreateOrConnectWithoutDocumentTitleInput[]
    upsert?: DocumentConfigurationUpsertWithWhereUniqueWithoutDocumentTitleInput | DocumentConfigurationUpsertWithWhereUniqueWithoutDocumentTitleInput[]
    createMany?: DocumentConfigurationCreateManyDocumentTitleInputEnvelope
    set?: DocumentConfigurationWhereUniqueInput | DocumentConfigurationWhereUniqueInput[]
    disconnect?: DocumentConfigurationWhereUniqueInput | DocumentConfigurationWhereUniqueInput[]
    delete?: DocumentConfigurationWhereUniqueInput | DocumentConfigurationWhereUniqueInput[]
    connect?: DocumentConfigurationWhereUniqueInput | DocumentConfigurationWhereUniqueInput[]
    update?: DocumentConfigurationUpdateWithWhereUniqueWithoutDocumentTitleInput | DocumentConfigurationUpdateWithWhereUniqueWithoutDocumentTitleInput[]
    updateMany?: DocumentConfigurationUpdateManyWithWhereWithoutDocumentTitleInput | DocumentConfigurationUpdateManyWithWhereWithoutDocumentTitleInput[]
    deleteMany?: DocumentConfigurationScalarWhereInput | DocumentConfigurationScalarWhereInput[]
  }

  export type document_fieldsUpdateManyWithoutDocument_titlesNestedInput = {
    create?: XOR<document_fieldsCreateWithoutDocument_titlesInput, document_fieldsUncheckedCreateWithoutDocument_titlesInput> | document_fieldsCreateWithoutDocument_titlesInput[] | document_fieldsUncheckedCreateWithoutDocument_titlesInput[]
    connectOrCreate?: document_fieldsCreateOrConnectWithoutDocument_titlesInput | document_fieldsCreateOrConnectWithoutDocument_titlesInput[]
    upsert?: document_fieldsUpsertWithWhereUniqueWithoutDocument_titlesInput | document_fieldsUpsertWithWhereUniqueWithoutDocument_titlesInput[]
    createMany?: document_fieldsCreateManyDocument_titlesInputEnvelope
    set?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
    disconnect?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
    delete?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
    connect?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
    update?: document_fieldsUpdateWithWhereUniqueWithoutDocument_titlesInput | document_fieldsUpdateWithWhereUniqueWithoutDocument_titlesInput[]
    updateMany?: document_fieldsUpdateManyWithWhereWithoutDocument_titlesInput | document_fieldsUpdateManyWithWhereWithoutDocument_titlesInput[]
    deleteMany?: document_fieldsScalarWhereInput | document_fieldsScalarWhereInput[]
  }

  export type DocumentConfigurationUncheckedUpdateManyWithoutDocumentTitleNestedInput = {
    create?: XOR<DocumentConfigurationCreateWithoutDocumentTitleInput, DocumentConfigurationUncheckedCreateWithoutDocumentTitleInput> | DocumentConfigurationCreateWithoutDocumentTitleInput[] | DocumentConfigurationUncheckedCreateWithoutDocumentTitleInput[]
    connectOrCreate?: DocumentConfigurationCreateOrConnectWithoutDocumentTitleInput | DocumentConfigurationCreateOrConnectWithoutDocumentTitleInput[]
    upsert?: DocumentConfigurationUpsertWithWhereUniqueWithoutDocumentTitleInput | DocumentConfigurationUpsertWithWhereUniqueWithoutDocumentTitleInput[]
    createMany?: DocumentConfigurationCreateManyDocumentTitleInputEnvelope
    set?: DocumentConfigurationWhereUniqueInput | DocumentConfigurationWhereUniqueInput[]
    disconnect?: DocumentConfigurationWhereUniqueInput | DocumentConfigurationWhereUniqueInput[]
    delete?: DocumentConfigurationWhereUniqueInput | DocumentConfigurationWhereUniqueInput[]
    connect?: DocumentConfigurationWhereUniqueInput | DocumentConfigurationWhereUniqueInput[]
    update?: DocumentConfigurationUpdateWithWhereUniqueWithoutDocumentTitleInput | DocumentConfigurationUpdateWithWhereUniqueWithoutDocumentTitleInput[]
    updateMany?: DocumentConfigurationUpdateManyWithWhereWithoutDocumentTitleInput | DocumentConfigurationUpdateManyWithWhereWithoutDocumentTitleInput[]
    deleteMany?: DocumentConfigurationScalarWhereInput | DocumentConfigurationScalarWhereInput[]
  }

  export type document_fieldsUncheckedUpdateManyWithoutDocument_titlesNestedInput = {
    create?: XOR<document_fieldsCreateWithoutDocument_titlesInput, document_fieldsUncheckedCreateWithoutDocument_titlesInput> | document_fieldsCreateWithoutDocument_titlesInput[] | document_fieldsUncheckedCreateWithoutDocument_titlesInput[]
    connectOrCreate?: document_fieldsCreateOrConnectWithoutDocument_titlesInput | document_fieldsCreateOrConnectWithoutDocument_titlesInput[]
    upsert?: document_fieldsUpsertWithWhereUniqueWithoutDocument_titlesInput | document_fieldsUpsertWithWhereUniqueWithoutDocument_titlesInput[]
    createMany?: document_fieldsCreateManyDocument_titlesInputEnvelope
    set?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
    disconnect?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
    delete?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
    connect?: document_fieldsWhereUniqueInput | document_fieldsWhereUniqueInput[]
    update?: document_fieldsUpdateWithWhereUniqueWithoutDocument_titlesInput | document_fieldsUpdateWithWhereUniqueWithoutDocument_titlesInput[]
    updateMany?: document_fieldsUpdateManyWithWhereWithoutDocument_titlesInput | document_fieldsUpdateManyWithWhereWithoutDocument_titlesInput[]
    deleteMany?: document_fieldsScalarWhereInput | document_fieldsScalarWhereInput[]
  }

  export type FormTemplateCreateNestedOneWithoutForm_fieldsInput = {
    create?: XOR<FormTemplateCreateWithoutForm_fieldsInput, FormTemplateUncheckedCreateWithoutForm_fieldsInput>
    connectOrCreate?: FormTemplateCreateOrConnectWithoutForm_fieldsInput
    connect?: FormTemplateWhereUniqueInput
  }

  export type FieldOptionCreateNestedManyWithoutForm_fieldInput = {
    create?: XOR<FieldOptionCreateWithoutForm_fieldInput, FieldOptionUncheckedCreateWithoutForm_fieldInput> | FieldOptionCreateWithoutForm_fieldInput[] | FieldOptionUncheckedCreateWithoutForm_fieldInput[]
    connectOrCreate?: FieldOptionCreateOrConnectWithoutForm_fieldInput | FieldOptionCreateOrConnectWithoutForm_fieldInput[]
    createMany?: FieldOptionCreateManyForm_fieldInputEnvelope
    connect?: FieldOptionWhereUniqueInput | FieldOptionWhereUniqueInput[]
  }

  export type FieldOptionUncheckedCreateNestedManyWithoutForm_fieldInput = {
    create?: XOR<FieldOptionCreateWithoutForm_fieldInput, FieldOptionUncheckedCreateWithoutForm_fieldInput> | FieldOptionCreateWithoutForm_fieldInput[] | FieldOptionUncheckedCreateWithoutForm_fieldInput[]
    connectOrCreate?: FieldOptionCreateOrConnectWithoutForm_fieldInput | FieldOptionCreateOrConnectWithoutForm_fieldInput[]
    createMany?: FieldOptionCreateManyForm_fieldInputEnvelope
    connect?: FieldOptionWhereUniqueInput | FieldOptionWhereUniqueInput[]
  }

  export type FormTemplateUpdateOneRequiredWithoutForm_fieldsNestedInput = {
    create?: XOR<FormTemplateCreateWithoutForm_fieldsInput, FormTemplateUncheckedCreateWithoutForm_fieldsInput>
    connectOrCreate?: FormTemplateCreateOrConnectWithoutForm_fieldsInput
    upsert?: FormTemplateUpsertWithoutForm_fieldsInput
    connect?: FormTemplateWhereUniqueInput
    update?: XOR<XOR<FormTemplateUpdateToOneWithWhereWithoutForm_fieldsInput, FormTemplateUpdateWithoutForm_fieldsInput>, FormTemplateUncheckedUpdateWithoutForm_fieldsInput>
  }

  export type FieldOptionUpdateManyWithoutForm_fieldNestedInput = {
    create?: XOR<FieldOptionCreateWithoutForm_fieldInput, FieldOptionUncheckedCreateWithoutForm_fieldInput> | FieldOptionCreateWithoutForm_fieldInput[] | FieldOptionUncheckedCreateWithoutForm_fieldInput[]
    connectOrCreate?: FieldOptionCreateOrConnectWithoutForm_fieldInput | FieldOptionCreateOrConnectWithoutForm_fieldInput[]
    upsert?: FieldOptionUpsertWithWhereUniqueWithoutForm_fieldInput | FieldOptionUpsertWithWhereUniqueWithoutForm_fieldInput[]
    createMany?: FieldOptionCreateManyForm_fieldInputEnvelope
    set?: FieldOptionWhereUniqueInput | FieldOptionWhereUniqueInput[]
    disconnect?: FieldOptionWhereUniqueInput | FieldOptionWhereUniqueInput[]
    delete?: FieldOptionWhereUniqueInput | FieldOptionWhereUniqueInput[]
    connect?: FieldOptionWhereUniqueInput | FieldOptionWhereUniqueInput[]
    update?: FieldOptionUpdateWithWhereUniqueWithoutForm_fieldInput | FieldOptionUpdateWithWhereUniqueWithoutForm_fieldInput[]
    updateMany?: FieldOptionUpdateManyWithWhereWithoutForm_fieldInput | FieldOptionUpdateManyWithWhereWithoutForm_fieldInput[]
    deleteMany?: FieldOptionScalarWhereInput | FieldOptionScalarWhereInput[]
  }

  export type FieldOptionUncheckedUpdateManyWithoutForm_fieldNestedInput = {
    create?: XOR<FieldOptionCreateWithoutForm_fieldInput, FieldOptionUncheckedCreateWithoutForm_fieldInput> | FieldOptionCreateWithoutForm_fieldInput[] | FieldOptionUncheckedCreateWithoutForm_fieldInput[]
    connectOrCreate?: FieldOptionCreateOrConnectWithoutForm_fieldInput | FieldOptionCreateOrConnectWithoutForm_fieldInput[]
    upsert?: FieldOptionUpsertWithWhereUniqueWithoutForm_fieldInput | FieldOptionUpsertWithWhereUniqueWithoutForm_fieldInput[]
    createMany?: FieldOptionCreateManyForm_fieldInputEnvelope
    set?: FieldOptionWhereUniqueInput | FieldOptionWhereUniqueInput[]
    disconnect?: FieldOptionWhereUniqueInput | FieldOptionWhereUniqueInput[]
    delete?: FieldOptionWhereUniqueInput | FieldOptionWhereUniqueInput[]
    connect?: FieldOptionWhereUniqueInput | FieldOptionWhereUniqueInput[]
    update?: FieldOptionUpdateWithWhereUniqueWithoutForm_fieldInput | FieldOptionUpdateWithWhereUniqueWithoutForm_fieldInput[]
    updateMany?: FieldOptionUpdateManyWithWhereWithoutForm_fieldInput | FieldOptionUpdateManyWithWhereWithoutForm_fieldInput[]
    deleteMany?: FieldOptionScalarWhereInput | FieldOptionScalarWhereInput[]
  }

  export type DocumentTitleCreateNestedOneWithoutDocumentConfigurationsInput = {
    create?: XOR<DocumentTitleCreateWithoutDocumentConfigurationsInput, DocumentTitleUncheckedCreateWithoutDocumentConfigurationsInput>
    connectOrCreate?: DocumentTitleCreateOrConnectWithoutDocumentConfigurationsInput
    connect?: DocumentTitleWhereUniqueInput
  }

  export type DocumentTypeCreateNestedOneWithoutDocumentConfigurationsInput = {
    create?: XOR<DocumentTypeCreateWithoutDocumentConfigurationsInput, DocumentTypeUncheckedCreateWithoutDocumentConfigurationsInput>
    connectOrCreate?: DocumentTypeCreateOrConnectWithoutDocumentConfigurationsInput
    connect?: DocumentTypeWhereUniqueInput
  }

  export type RegionCreateNestedOneWithoutDocumentConfigurationsInput = {
    create?: XOR<RegionCreateWithoutDocumentConfigurationsInput, RegionUncheckedCreateWithoutDocumentConfigurationsInput>
    connectOrCreate?: RegionCreateOrConnectWithoutDocumentConfigurationsInput
    connect?: RegionWhereUniqueInput
  }

  export type DocumentTitleUpdateOneRequiredWithoutDocumentConfigurationsNestedInput = {
    create?: XOR<DocumentTitleCreateWithoutDocumentConfigurationsInput, DocumentTitleUncheckedCreateWithoutDocumentConfigurationsInput>
    connectOrCreate?: DocumentTitleCreateOrConnectWithoutDocumentConfigurationsInput
    upsert?: DocumentTitleUpsertWithoutDocumentConfigurationsInput
    connect?: DocumentTitleWhereUniqueInput
    update?: XOR<XOR<DocumentTitleUpdateToOneWithWhereWithoutDocumentConfigurationsInput, DocumentTitleUpdateWithoutDocumentConfigurationsInput>, DocumentTitleUncheckedUpdateWithoutDocumentConfigurationsInput>
  }

  export type DocumentTypeUpdateOneRequiredWithoutDocumentConfigurationsNestedInput = {
    create?: XOR<DocumentTypeCreateWithoutDocumentConfigurationsInput, DocumentTypeUncheckedCreateWithoutDocumentConfigurationsInput>
    connectOrCreate?: DocumentTypeCreateOrConnectWithoutDocumentConfigurationsInput
    upsert?: DocumentTypeUpsertWithoutDocumentConfigurationsInput
    connect?: DocumentTypeWhereUniqueInput
    update?: XOR<XOR<DocumentTypeUpdateToOneWithWhereWithoutDocumentConfigurationsInput, DocumentTypeUpdateWithoutDocumentConfigurationsInput>, DocumentTypeUncheckedUpdateWithoutDocumentConfigurationsInput>
  }

  export type RegionUpdateOneRequiredWithoutDocumentConfigurationsNestedInput = {
    create?: XOR<RegionCreateWithoutDocumentConfigurationsInput, RegionUncheckedCreateWithoutDocumentConfigurationsInput>
    connectOrCreate?: RegionCreateOrConnectWithoutDocumentConfigurationsInput
    upsert?: RegionUpsertWithoutDocumentConfigurationsInput
    connect?: RegionWhereUniqueInput
    update?: XOR<XOR<RegionUpdateToOneWithWhereWithoutDocumentConfigurationsInput, RegionUpdateWithoutDocumentConfigurationsInput>, RegionUncheckedUpdateWithoutDocumentConfigurationsInput>
  }

  export type DocumentConfigurationCreateNestedManyWithoutRegionInput = {
    create?: XOR<DocumentConfigurationCreateWithoutRegionInput, DocumentConfigurationUncheckedCreateWithoutRegionInput> | DocumentConfigurationCreateWithoutRegionInput[] | DocumentConfigurationUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: DocumentConfigurationCreateOrConnectWithoutRegionInput | DocumentConfigurationCreateOrConnectWithoutRegionInput[]
    createMany?: DocumentConfigurationCreateManyRegionInputEnvelope
    connect?: DocumentConfigurationWhereUniqueInput | DocumentConfigurationWhereUniqueInput[]
  }

  export type DocumentConfigurationUncheckedCreateNestedManyWithoutRegionInput = {
    create?: XOR<DocumentConfigurationCreateWithoutRegionInput, DocumentConfigurationUncheckedCreateWithoutRegionInput> | DocumentConfigurationCreateWithoutRegionInput[] | DocumentConfigurationUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: DocumentConfigurationCreateOrConnectWithoutRegionInput | DocumentConfigurationCreateOrConnectWithoutRegionInput[]
    createMany?: DocumentConfigurationCreateManyRegionInputEnvelope
    connect?: DocumentConfigurationWhereUniqueInput | DocumentConfigurationWhereUniqueInput[]
  }

  export type DocumentConfigurationUpdateManyWithoutRegionNestedInput = {
    create?: XOR<DocumentConfigurationCreateWithoutRegionInput, DocumentConfigurationUncheckedCreateWithoutRegionInput> | DocumentConfigurationCreateWithoutRegionInput[] | DocumentConfigurationUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: DocumentConfigurationCreateOrConnectWithoutRegionInput | DocumentConfigurationCreateOrConnectWithoutRegionInput[]
    upsert?: DocumentConfigurationUpsertWithWhereUniqueWithoutRegionInput | DocumentConfigurationUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: DocumentConfigurationCreateManyRegionInputEnvelope
    set?: DocumentConfigurationWhereUniqueInput | DocumentConfigurationWhereUniqueInput[]
    disconnect?: DocumentConfigurationWhereUniqueInput | DocumentConfigurationWhereUniqueInput[]
    delete?: DocumentConfigurationWhereUniqueInput | DocumentConfigurationWhereUniqueInput[]
    connect?: DocumentConfigurationWhereUniqueInput | DocumentConfigurationWhereUniqueInput[]
    update?: DocumentConfigurationUpdateWithWhereUniqueWithoutRegionInput | DocumentConfigurationUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: DocumentConfigurationUpdateManyWithWhereWithoutRegionInput | DocumentConfigurationUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: DocumentConfigurationScalarWhereInput | DocumentConfigurationScalarWhereInput[]
  }

  export type DocumentConfigurationUncheckedUpdateManyWithoutRegionNestedInput = {
    create?: XOR<DocumentConfigurationCreateWithoutRegionInput, DocumentConfigurationUncheckedCreateWithoutRegionInput> | DocumentConfigurationCreateWithoutRegionInput[] | DocumentConfigurationUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: DocumentConfigurationCreateOrConnectWithoutRegionInput | DocumentConfigurationCreateOrConnectWithoutRegionInput[]
    upsert?: DocumentConfigurationUpsertWithWhereUniqueWithoutRegionInput | DocumentConfigurationUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: DocumentConfigurationCreateManyRegionInputEnvelope
    set?: DocumentConfigurationWhereUniqueInput | DocumentConfigurationWhereUniqueInput[]
    disconnect?: DocumentConfigurationWhereUniqueInput | DocumentConfigurationWhereUniqueInput[]
    delete?: DocumentConfigurationWhereUniqueInput | DocumentConfigurationWhereUniqueInput[]
    connect?: DocumentConfigurationWhereUniqueInput | DocumentConfigurationWhereUniqueInput[]
    update?: DocumentConfigurationUpdateWithWhereUniqueWithoutRegionInput | DocumentConfigurationUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: DocumentConfigurationUpdateManyWithWhereWithoutRegionInput | DocumentConfigurationUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: DocumentConfigurationScalarWhereInput | DocumentConfigurationScalarWhereInput[]
  }

  export type DocumentTitleCreateNestedOneWithoutDocument_fieldsInput = {
    create?: XOR<DocumentTitleCreateWithoutDocument_fieldsInput, DocumentTitleUncheckedCreateWithoutDocument_fieldsInput>
    connectOrCreate?: DocumentTitleCreateOrConnectWithoutDocument_fieldsInput
    connect?: DocumentTitleWhereUniqueInput
  }

  export type DocumentTypeCreateNestedOneWithoutDocument_fieldsInput = {
    create?: XOR<DocumentTypeCreateWithoutDocument_fieldsInput, DocumentTypeUncheckedCreateWithoutDocument_fieldsInput>
    connectOrCreate?: DocumentTypeCreateOrConnectWithoutDocument_fieldsInput
    connect?: DocumentTypeWhereUniqueInput
  }

  export type DocumentTitleUpdateOneWithoutDocument_fieldsNestedInput = {
    create?: XOR<DocumentTitleCreateWithoutDocument_fieldsInput, DocumentTitleUncheckedCreateWithoutDocument_fieldsInput>
    connectOrCreate?: DocumentTitleCreateOrConnectWithoutDocument_fieldsInput
    upsert?: DocumentTitleUpsertWithoutDocument_fieldsInput
    disconnect?: DocumentTitleWhereInput | boolean
    delete?: DocumentTitleWhereInput | boolean
    connect?: DocumentTitleWhereUniqueInput
    update?: XOR<XOR<DocumentTitleUpdateToOneWithWhereWithoutDocument_fieldsInput, DocumentTitleUpdateWithoutDocument_fieldsInput>, DocumentTitleUncheckedUpdateWithoutDocument_fieldsInput>
  }

  export type DocumentTypeUpdateOneRequiredWithoutDocument_fieldsNestedInput = {
    create?: XOR<DocumentTypeCreateWithoutDocument_fieldsInput, DocumentTypeUncheckedCreateWithoutDocument_fieldsInput>
    connectOrCreate?: DocumentTypeCreateOrConnectWithoutDocument_fieldsInput
    upsert?: DocumentTypeUpsertWithoutDocument_fieldsInput
    connect?: DocumentTypeWhereUniqueInput
    update?: XOR<XOR<DocumentTypeUpdateToOneWithWhereWithoutDocument_fieldsInput, DocumentTypeUpdateWithoutDocument_fieldsInput>, DocumentTypeUncheckedUpdateWithoutDocument_fieldsInput>
  }

  export type FormFieldCreateNestedManyWithoutForm_templateInput = {
    create?: XOR<FormFieldCreateWithoutForm_templateInput, FormFieldUncheckedCreateWithoutForm_templateInput> | FormFieldCreateWithoutForm_templateInput[] | FormFieldUncheckedCreateWithoutForm_templateInput[]
    connectOrCreate?: FormFieldCreateOrConnectWithoutForm_templateInput | FormFieldCreateOrConnectWithoutForm_templateInput[]
    createMany?: FormFieldCreateManyForm_templateInputEnvelope
    connect?: FormFieldWhereUniqueInput | FormFieldWhereUniqueInput[]
  }

  export type DocumentTypeCreateNestedManyWithoutForm_templateInput = {
    create?: XOR<DocumentTypeCreateWithoutForm_templateInput, DocumentTypeUncheckedCreateWithoutForm_templateInput> | DocumentTypeCreateWithoutForm_templateInput[] | DocumentTypeUncheckedCreateWithoutForm_templateInput[]
    connectOrCreate?: DocumentTypeCreateOrConnectWithoutForm_templateInput | DocumentTypeCreateOrConnectWithoutForm_templateInput[]
    createMany?: DocumentTypeCreateManyForm_templateInputEnvelope
    connect?: DocumentTypeWhereUniqueInput | DocumentTypeWhereUniqueInput[]
  }

  export type FormFieldUncheckedCreateNestedManyWithoutForm_templateInput = {
    create?: XOR<FormFieldCreateWithoutForm_templateInput, FormFieldUncheckedCreateWithoutForm_templateInput> | FormFieldCreateWithoutForm_templateInput[] | FormFieldUncheckedCreateWithoutForm_templateInput[]
    connectOrCreate?: FormFieldCreateOrConnectWithoutForm_templateInput | FormFieldCreateOrConnectWithoutForm_templateInput[]
    createMany?: FormFieldCreateManyForm_templateInputEnvelope
    connect?: FormFieldWhereUniqueInput | FormFieldWhereUniqueInput[]
  }

  export type DocumentTypeUncheckedCreateNestedManyWithoutForm_templateInput = {
    create?: XOR<DocumentTypeCreateWithoutForm_templateInput, DocumentTypeUncheckedCreateWithoutForm_templateInput> | DocumentTypeCreateWithoutForm_templateInput[] | DocumentTypeUncheckedCreateWithoutForm_templateInput[]
    connectOrCreate?: DocumentTypeCreateOrConnectWithoutForm_templateInput | DocumentTypeCreateOrConnectWithoutForm_templateInput[]
    createMany?: DocumentTypeCreateManyForm_templateInputEnvelope
    connect?: DocumentTypeWhereUniqueInput | DocumentTypeWhereUniqueInput[]
  }

  export type FormFieldUpdateManyWithoutForm_templateNestedInput = {
    create?: XOR<FormFieldCreateWithoutForm_templateInput, FormFieldUncheckedCreateWithoutForm_templateInput> | FormFieldCreateWithoutForm_templateInput[] | FormFieldUncheckedCreateWithoutForm_templateInput[]
    connectOrCreate?: FormFieldCreateOrConnectWithoutForm_templateInput | FormFieldCreateOrConnectWithoutForm_templateInput[]
    upsert?: FormFieldUpsertWithWhereUniqueWithoutForm_templateInput | FormFieldUpsertWithWhereUniqueWithoutForm_templateInput[]
    createMany?: FormFieldCreateManyForm_templateInputEnvelope
    set?: FormFieldWhereUniqueInput | FormFieldWhereUniqueInput[]
    disconnect?: FormFieldWhereUniqueInput | FormFieldWhereUniqueInput[]
    delete?: FormFieldWhereUniqueInput | FormFieldWhereUniqueInput[]
    connect?: FormFieldWhereUniqueInput | FormFieldWhereUniqueInput[]
    update?: FormFieldUpdateWithWhereUniqueWithoutForm_templateInput | FormFieldUpdateWithWhereUniqueWithoutForm_templateInput[]
    updateMany?: FormFieldUpdateManyWithWhereWithoutForm_templateInput | FormFieldUpdateManyWithWhereWithoutForm_templateInput[]
    deleteMany?: FormFieldScalarWhereInput | FormFieldScalarWhereInput[]
  }

  export type DocumentTypeUpdateManyWithoutForm_templateNestedInput = {
    create?: XOR<DocumentTypeCreateWithoutForm_templateInput, DocumentTypeUncheckedCreateWithoutForm_templateInput> | DocumentTypeCreateWithoutForm_templateInput[] | DocumentTypeUncheckedCreateWithoutForm_templateInput[]
    connectOrCreate?: DocumentTypeCreateOrConnectWithoutForm_templateInput | DocumentTypeCreateOrConnectWithoutForm_templateInput[]
    upsert?: DocumentTypeUpsertWithWhereUniqueWithoutForm_templateInput | DocumentTypeUpsertWithWhereUniqueWithoutForm_templateInput[]
    createMany?: DocumentTypeCreateManyForm_templateInputEnvelope
    set?: DocumentTypeWhereUniqueInput | DocumentTypeWhereUniqueInput[]
    disconnect?: DocumentTypeWhereUniqueInput | DocumentTypeWhereUniqueInput[]
    delete?: DocumentTypeWhereUniqueInput | DocumentTypeWhereUniqueInput[]
    connect?: DocumentTypeWhereUniqueInput | DocumentTypeWhereUniqueInput[]
    update?: DocumentTypeUpdateWithWhereUniqueWithoutForm_templateInput | DocumentTypeUpdateWithWhereUniqueWithoutForm_templateInput[]
    updateMany?: DocumentTypeUpdateManyWithWhereWithoutForm_templateInput | DocumentTypeUpdateManyWithWhereWithoutForm_templateInput[]
    deleteMany?: DocumentTypeScalarWhereInput | DocumentTypeScalarWhereInput[]
  }

  export type FormFieldUncheckedUpdateManyWithoutForm_templateNestedInput = {
    create?: XOR<FormFieldCreateWithoutForm_templateInput, FormFieldUncheckedCreateWithoutForm_templateInput> | FormFieldCreateWithoutForm_templateInput[] | FormFieldUncheckedCreateWithoutForm_templateInput[]
    connectOrCreate?: FormFieldCreateOrConnectWithoutForm_templateInput | FormFieldCreateOrConnectWithoutForm_templateInput[]
    upsert?: FormFieldUpsertWithWhereUniqueWithoutForm_templateInput | FormFieldUpsertWithWhereUniqueWithoutForm_templateInput[]
    createMany?: FormFieldCreateManyForm_templateInputEnvelope
    set?: FormFieldWhereUniqueInput | FormFieldWhereUniqueInput[]
    disconnect?: FormFieldWhereUniqueInput | FormFieldWhereUniqueInput[]
    delete?: FormFieldWhereUniqueInput | FormFieldWhereUniqueInput[]
    connect?: FormFieldWhereUniqueInput | FormFieldWhereUniqueInput[]
    update?: FormFieldUpdateWithWhereUniqueWithoutForm_templateInput | FormFieldUpdateWithWhereUniqueWithoutForm_templateInput[]
    updateMany?: FormFieldUpdateManyWithWhereWithoutForm_templateInput | FormFieldUpdateManyWithWhereWithoutForm_templateInput[]
    deleteMany?: FormFieldScalarWhereInput | FormFieldScalarWhereInput[]
  }

  export type DocumentTypeUncheckedUpdateManyWithoutForm_templateNestedInput = {
    create?: XOR<DocumentTypeCreateWithoutForm_templateInput, DocumentTypeUncheckedCreateWithoutForm_templateInput> | DocumentTypeCreateWithoutForm_templateInput[] | DocumentTypeUncheckedCreateWithoutForm_templateInput[]
    connectOrCreate?: DocumentTypeCreateOrConnectWithoutForm_templateInput | DocumentTypeCreateOrConnectWithoutForm_templateInput[]
    upsert?: DocumentTypeUpsertWithWhereUniqueWithoutForm_templateInput | DocumentTypeUpsertWithWhereUniqueWithoutForm_templateInput[]
    createMany?: DocumentTypeCreateManyForm_templateInputEnvelope
    set?: DocumentTypeWhereUniqueInput | DocumentTypeWhereUniqueInput[]
    disconnect?: DocumentTypeWhereUniqueInput | DocumentTypeWhereUniqueInput[]
    delete?: DocumentTypeWhereUniqueInput | DocumentTypeWhereUniqueInput[]
    connect?: DocumentTypeWhereUniqueInput | DocumentTypeWhereUniqueInput[]
    update?: DocumentTypeUpdateWithWhereUniqueWithoutForm_templateInput | DocumentTypeUpdateWithWhereUniqueWithoutForm_templateInput[]
    updateMany?: DocumentTypeUpdateManyWithWhereWithoutForm_templateInput | DocumentTypeUpdateManyWithWhereWithoutForm_templateInput[]
    deleteMany?: DocumentTypeScalarWhereInput | DocumentTypeScalarWhereInput[]
  }

  export type FormFieldCreateNestedOneWithoutField_optionsInput = {
    create?: XOR<FormFieldCreateWithoutField_optionsInput, FormFieldUncheckedCreateWithoutField_optionsInput>
    connectOrCreate?: FormFieldCreateOrConnectWithoutField_optionsInput
    connect?: FormFieldWhereUniqueInput
  }

  export type FormFieldUpdateOneRequiredWithoutField_optionsNestedInput = {
    create?: XOR<FormFieldCreateWithoutField_optionsInput, FormFieldUncheckedCreateWithoutField_optionsInput>
    connectOrCreate?: FormFieldCreateOrConnectWithoutField_optionsInput
    upsert?: FormFieldUpsertWithoutField_optionsInput
    connect?: FormFieldWhereUniqueInput
    update?: XOR<XOR<FormFieldUpdateToOneWithWhereWithoutField_optionsInput, FormFieldUpdateWithoutField_optionsInput>, FormFieldUncheckedUpdateWithoutField_optionsInput>
  }

  export type DocumentTypeCreateNestedOneWithoutLocationsInput = {
    create?: XOR<DocumentTypeCreateWithoutLocationsInput, DocumentTypeUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: DocumentTypeCreateOrConnectWithoutLocationsInput
    connect?: DocumentTypeWhereUniqueInput
  }

  export type DocumentTypeUpdateOneRequiredWithoutLocationsNestedInput = {
    create?: XOR<DocumentTypeCreateWithoutLocationsInput, DocumentTypeUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: DocumentTypeCreateOrConnectWithoutLocationsInput
    upsert?: DocumentTypeUpsertWithoutLocationsInput
    connect?: DocumentTypeWhereUniqueInput
    update?: XOR<XOR<DocumentTypeUpdateToOneWithWhereWithoutLocationsInput, DocumentTypeUpdateWithoutLocationsInput>, DocumentTypeUncheckedUpdateWithoutLocationsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DocumentTitleCreateWithoutDocument_typesInput = {
    title: string
    created_at?: Date | string
    updated_at: Date | string
    shareable?: boolean
    is_display?: boolean
    require_number?: boolean
    require_valid_date?: boolean
    require_expire_date?: boolean
    require_doc_data?: boolean
    doc_data_options?: NullableJsonNullValueInput | InputJsonValue
    doc_data_name?: string | null
    require_attachment_front?: boolean
    require_attachment_back?: boolean
    description?: string | null
    form_description?: string | null
    form_title?: string | null
    documentConfigurations?: DocumentConfigurationCreateNestedManyWithoutDocumentTitleInput
    document_fields?: document_fieldsCreateNestedManyWithoutDocument_titlesInput
  }

  export type DocumentTitleUncheckedCreateWithoutDocument_typesInput = {
    id?: number
    title: string
    created_at?: Date | string
    updated_at: Date | string
    shareable?: boolean
    is_display?: boolean
    require_number?: boolean
    require_valid_date?: boolean
    require_expire_date?: boolean
    require_doc_data?: boolean
    doc_data_options?: NullableJsonNullValueInput | InputJsonValue
    doc_data_name?: string | null
    require_attachment_front?: boolean
    require_attachment_back?: boolean
    description?: string | null
    form_description?: string | null
    form_title?: string | null
    documentConfigurations?: DocumentConfigurationUncheckedCreateNestedManyWithoutDocumentTitleInput
    document_fields?: document_fieldsUncheckedCreateNestedManyWithoutDocument_titlesInput
  }

  export type DocumentTitleCreateOrConnectWithoutDocument_typesInput = {
    where: DocumentTitleWhereUniqueInput
    create: XOR<DocumentTitleCreateWithoutDocument_typesInput, DocumentTitleUncheckedCreateWithoutDocument_typesInput>
  }

  export type DocumentTitleCreateManyDocument_typesInputEnvelope = {
    data: DocumentTitleCreateManyDocument_typesInput | DocumentTitleCreateManyDocument_typesInput[]
    skipDuplicates?: boolean
  }

  export type DocumentConfigurationCreateWithoutDocumentTypeInput = {
    typeOfCondition?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    priority?: number
    customFields?: NullableJsonNullValueInput | InputJsonValue
    documentTitle: DocumentTitleCreateNestedOneWithoutDocumentConfigurationsInput
    region: RegionCreateNestedOneWithoutDocumentConfigurationsInput
  }

  export type DocumentConfigurationUncheckedCreateWithoutDocumentTypeInput = {
    id?: number
    regionId: number
    documentTitleId: number
    typeOfCondition?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    priority?: number
    customFields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DocumentConfigurationCreateOrConnectWithoutDocumentTypeInput = {
    where: DocumentConfigurationWhereUniqueInput
    create: XOR<DocumentConfigurationCreateWithoutDocumentTypeInput, DocumentConfigurationUncheckedCreateWithoutDocumentTypeInput>
  }

  export type DocumentConfigurationCreateManyDocumentTypeInputEnvelope = {
    data: DocumentConfigurationCreateManyDocumentTypeInput | DocumentConfigurationCreateManyDocumentTypeInput[]
    skipDuplicates?: boolean
  }

  export type document_fieldsCreateWithoutDocument_typesInput = {
    field_id: string
    name: string
    label: string
    type: string
    placeholder?: string | null
    required?: boolean
    order: number
    full_width?: boolean
    hidden?: boolean
    default_value?: string | null
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    conditional_display?: NullableJsonNullValueInput | InputJsonValue
    help_text?: string | null
    created_at?: Date | string
    updated_at: Date | string
    document_titles?: DocumentTitleCreateNestedOneWithoutDocument_fieldsInput
  }

  export type document_fieldsUncheckedCreateWithoutDocument_typesInput = {
    id?: number
    field_id: string
    name: string
    label: string
    type: string
    placeholder?: string | null
    required?: boolean
    order: number
    full_width?: boolean
    hidden?: boolean
    default_value?: string | null
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    conditional_display?: NullableJsonNullValueInput | InputJsonValue
    help_text?: string | null
    document_title_id?: number | null
    created_at?: Date | string
    updated_at: Date | string
  }

  export type document_fieldsCreateOrConnectWithoutDocument_typesInput = {
    where: document_fieldsWhereUniqueInput
    create: XOR<document_fieldsCreateWithoutDocument_typesInput, document_fieldsUncheckedCreateWithoutDocument_typesInput>
  }

  export type document_fieldsCreateManyDocument_typesInputEnvelope = {
    data: document_fieldsCreateManyDocument_typesInput | document_fieldsCreateManyDocument_typesInput[]
    skipDuplicates?: boolean
  }

  export type FormTemplateCreateWithoutDocument_typesInput = {
    form_key: string
    name: string
    description?: string | null
    version?: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    form_fields?: FormFieldCreateNestedManyWithoutForm_templateInput
  }

  export type FormTemplateUncheckedCreateWithoutDocument_typesInput = {
    id?: number
    form_key: string
    name: string
    description?: string | null
    version?: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    form_fields?: FormFieldUncheckedCreateNestedManyWithoutForm_templateInput
  }

  export type FormTemplateCreateOrConnectWithoutDocument_typesInput = {
    where: FormTemplateWhereUniqueInput
    create: XOR<FormTemplateCreateWithoutDocument_typesInput, FormTemplateUncheckedCreateWithoutDocument_typesInput>
  }

  export type DocumentTypeLocationCreateWithoutDocument_typeInput = {
    location_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DocumentTypeLocationUncheckedCreateWithoutDocument_typeInput = {
    id?: number
    location_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DocumentTypeLocationCreateOrConnectWithoutDocument_typeInput = {
    where: DocumentTypeLocationWhereUniqueInput
    create: XOR<DocumentTypeLocationCreateWithoutDocument_typeInput, DocumentTypeLocationUncheckedCreateWithoutDocument_typeInput>
  }

  export type DocumentTypeLocationCreateManyDocument_typeInputEnvelope = {
    data: DocumentTypeLocationCreateManyDocument_typeInput | DocumentTypeLocationCreateManyDocument_typeInput[]
    skipDuplicates?: boolean
  }

  export type DocumentTitleUpsertWithWhereUniqueWithoutDocument_typesInput = {
    where: DocumentTitleWhereUniqueInput
    update: XOR<DocumentTitleUpdateWithoutDocument_typesInput, DocumentTitleUncheckedUpdateWithoutDocument_typesInput>
    create: XOR<DocumentTitleCreateWithoutDocument_typesInput, DocumentTitleUncheckedCreateWithoutDocument_typesInput>
  }

  export type DocumentTitleUpdateWithWhereUniqueWithoutDocument_typesInput = {
    where: DocumentTitleWhereUniqueInput
    data: XOR<DocumentTitleUpdateWithoutDocument_typesInput, DocumentTitleUncheckedUpdateWithoutDocument_typesInput>
  }

  export type DocumentTitleUpdateManyWithWhereWithoutDocument_typesInput = {
    where: DocumentTitleScalarWhereInput
    data: XOR<DocumentTitleUpdateManyMutationInput, DocumentTitleUncheckedUpdateManyWithoutDocument_typesInput>
  }

  export type DocumentTitleScalarWhereInput = {
    AND?: DocumentTitleScalarWhereInput | DocumentTitleScalarWhereInput[]
    OR?: DocumentTitleScalarWhereInput[]
    NOT?: DocumentTitleScalarWhereInput | DocumentTitleScalarWhereInput[]
    id?: IntFilter<"DocumentTitle"> | number
    title?: StringFilter<"DocumentTitle"> | string
    created_at?: DateTimeFilter<"DocumentTitle"> | Date | string
    updated_at?: DateTimeFilter<"DocumentTitle"> | Date | string
    shareable?: BoolFilter<"DocumentTitle"> | boolean
    document_type_id?: IntFilter<"DocumentTitle"> | number
    is_display?: BoolFilter<"DocumentTitle"> | boolean
    require_number?: BoolFilter<"DocumentTitle"> | boolean
    require_valid_date?: BoolFilter<"DocumentTitle"> | boolean
    require_expire_date?: BoolFilter<"DocumentTitle"> | boolean
    require_doc_data?: BoolFilter<"DocumentTitle"> | boolean
    doc_data_options?: JsonNullableFilter<"DocumentTitle">
    doc_data_name?: StringNullableFilter<"DocumentTitle"> | string | null
    require_attachment_front?: BoolFilter<"DocumentTitle"> | boolean
    require_attachment_back?: BoolFilter<"DocumentTitle"> | boolean
    description?: StringNullableFilter<"DocumentTitle"> | string | null
    form_description?: StringNullableFilter<"DocumentTitle"> | string | null
    form_title?: StringNullableFilter<"DocumentTitle"> | string | null
  }

  export type DocumentConfigurationUpsertWithWhereUniqueWithoutDocumentTypeInput = {
    where: DocumentConfigurationWhereUniqueInput
    update: XOR<DocumentConfigurationUpdateWithoutDocumentTypeInput, DocumentConfigurationUncheckedUpdateWithoutDocumentTypeInput>
    create: XOR<DocumentConfigurationCreateWithoutDocumentTypeInput, DocumentConfigurationUncheckedCreateWithoutDocumentTypeInput>
  }

  export type DocumentConfigurationUpdateWithWhereUniqueWithoutDocumentTypeInput = {
    where: DocumentConfigurationWhereUniqueInput
    data: XOR<DocumentConfigurationUpdateWithoutDocumentTypeInput, DocumentConfigurationUncheckedUpdateWithoutDocumentTypeInput>
  }

  export type DocumentConfigurationUpdateManyWithWhereWithoutDocumentTypeInput = {
    where: DocumentConfigurationScalarWhereInput
    data: XOR<DocumentConfigurationUpdateManyMutationInput, DocumentConfigurationUncheckedUpdateManyWithoutDocumentTypeInput>
  }

  export type DocumentConfigurationScalarWhereInput = {
    AND?: DocumentConfigurationScalarWhereInput | DocumentConfigurationScalarWhereInput[]
    OR?: DocumentConfigurationScalarWhereInput[]
    NOT?: DocumentConfigurationScalarWhereInput | DocumentConfigurationScalarWhereInput[]
    id?: IntFilter<"DocumentConfiguration"> | number
    regionId?: IntFilter<"DocumentConfiguration"> | number
    documentTypeId?: IntFilter<"DocumentConfiguration"> | number
    documentTitleId?: IntFilter<"DocumentConfiguration"> | number
    typeOfCondition?: IntFilter<"DocumentConfiguration"> | number
    createdAt?: DateTimeFilter<"DocumentConfiguration"> | Date | string
    updatedAt?: DateTimeFilter<"DocumentConfiguration"> | Date | string
    active?: BoolFilter<"DocumentConfiguration"> | boolean
    priority?: IntFilter<"DocumentConfiguration"> | number
    customFields?: JsonNullableFilter<"DocumentConfiguration">
  }

  export type document_fieldsUpsertWithWhereUniqueWithoutDocument_typesInput = {
    where: document_fieldsWhereUniqueInput
    update: XOR<document_fieldsUpdateWithoutDocument_typesInput, document_fieldsUncheckedUpdateWithoutDocument_typesInput>
    create: XOR<document_fieldsCreateWithoutDocument_typesInput, document_fieldsUncheckedCreateWithoutDocument_typesInput>
  }

  export type document_fieldsUpdateWithWhereUniqueWithoutDocument_typesInput = {
    where: document_fieldsWhereUniqueInput
    data: XOR<document_fieldsUpdateWithoutDocument_typesInput, document_fieldsUncheckedUpdateWithoutDocument_typesInput>
  }

  export type document_fieldsUpdateManyWithWhereWithoutDocument_typesInput = {
    where: document_fieldsScalarWhereInput
    data: XOR<document_fieldsUpdateManyMutationInput, document_fieldsUncheckedUpdateManyWithoutDocument_typesInput>
  }

  export type document_fieldsScalarWhereInput = {
    AND?: document_fieldsScalarWhereInput | document_fieldsScalarWhereInput[]
    OR?: document_fieldsScalarWhereInput[]
    NOT?: document_fieldsScalarWhereInput | document_fieldsScalarWhereInput[]
    id?: IntFilter<"document_fields"> | number
    field_id?: StringFilter<"document_fields"> | string
    name?: StringFilter<"document_fields"> | string
    label?: StringFilter<"document_fields"> | string
    type?: StringFilter<"document_fields"> | string
    placeholder?: StringNullableFilter<"document_fields"> | string | null
    required?: BoolFilter<"document_fields"> | boolean
    order?: IntFilter<"document_fields"> | number
    full_width?: BoolFilter<"document_fields"> | boolean
    hidden?: BoolFilter<"document_fields"> | boolean
    default_value?: StringNullableFilter<"document_fields"> | string | null
    options?: JsonNullableFilter<"document_fields">
    validation?: JsonNullableFilter<"document_fields">
    conditional_display?: JsonNullableFilter<"document_fields">
    help_text?: StringNullableFilter<"document_fields"> | string | null
    document_type_id?: IntFilter<"document_fields"> | number
    document_title_id?: IntNullableFilter<"document_fields"> | number | null
    created_at?: DateTimeFilter<"document_fields"> | Date | string
    updated_at?: DateTimeFilter<"document_fields"> | Date | string
  }

  export type FormTemplateUpsertWithoutDocument_typesInput = {
    update: XOR<FormTemplateUpdateWithoutDocument_typesInput, FormTemplateUncheckedUpdateWithoutDocument_typesInput>
    create: XOR<FormTemplateCreateWithoutDocument_typesInput, FormTemplateUncheckedCreateWithoutDocument_typesInput>
    where?: FormTemplateWhereInput
  }

  export type FormTemplateUpdateToOneWithWhereWithoutDocument_typesInput = {
    where?: FormTemplateWhereInput
    data: XOR<FormTemplateUpdateWithoutDocument_typesInput, FormTemplateUncheckedUpdateWithoutDocument_typesInput>
  }

  export type FormTemplateUpdateWithoutDocument_typesInput = {
    form_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    form_fields?: FormFieldUpdateManyWithoutForm_templateNestedInput
  }

  export type FormTemplateUncheckedUpdateWithoutDocument_typesInput = {
    id?: IntFieldUpdateOperationsInput | number
    form_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    form_fields?: FormFieldUncheckedUpdateManyWithoutForm_templateNestedInput
  }

  export type DocumentTypeLocationUpsertWithWhereUniqueWithoutDocument_typeInput = {
    where: DocumentTypeLocationWhereUniqueInput
    update: XOR<DocumentTypeLocationUpdateWithoutDocument_typeInput, DocumentTypeLocationUncheckedUpdateWithoutDocument_typeInput>
    create: XOR<DocumentTypeLocationCreateWithoutDocument_typeInput, DocumentTypeLocationUncheckedCreateWithoutDocument_typeInput>
  }

  export type DocumentTypeLocationUpdateWithWhereUniqueWithoutDocument_typeInput = {
    where: DocumentTypeLocationWhereUniqueInput
    data: XOR<DocumentTypeLocationUpdateWithoutDocument_typeInput, DocumentTypeLocationUncheckedUpdateWithoutDocument_typeInput>
  }

  export type DocumentTypeLocationUpdateManyWithWhereWithoutDocument_typeInput = {
    where: DocumentTypeLocationScalarWhereInput
    data: XOR<DocumentTypeLocationUpdateManyMutationInput, DocumentTypeLocationUncheckedUpdateManyWithoutDocument_typeInput>
  }

  export type DocumentTypeLocationScalarWhereInput = {
    AND?: DocumentTypeLocationScalarWhereInput | DocumentTypeLocationScalarWhereInput[]
    OR?: DocumentTypeLocationScalarWhereInput[]
    NOT?: DocumentTypeLocationScalarWhereInput | DocumentTypeLocationScalarWhereInput[]
    id?: IntFilter<"DocumentTypeLocation"> | number
    document_type_id?: IntFilter<"DocumentTypeLocation"> | number
    location_id?: IntFilter<"DocumentTypeLocation"> | number
    created_at?: DateTimeFilter<"DocumentTypeLocation"> | Date | string
    updated_at?: DateTimeFilter<"DocumentTypeLocation"> | Date | string
  }

  export type DocumentTypeCreateWithoutDocumentTitlesInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    formId?: string | null
    hideHeader?: boolean
    showFormButtons?: boolean
    parent_type_id?: string | null
    parent_name?: string | null
    child_type_id?: string | null
    child_name?: string | null
    documentConfigurations?: DocumentConfigurationCreateNestedManyWithoutDocumentTypeInput
    document_fields?: document_fieldsCreateNestedManyWithoutDocument_typesInput
    form_template?: FormTemplateCreateNestedOneWithoutDocument_typesInput
    locations?: DocumentTypeLocationCreateNestedManyWithoutDocument_typeInput
  }

  export type DocumentTypeUncheckedCreateWithoutDocumentTitlesInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    formId?: string | null
    hideHeader?: boolean
    showFormButtons?: boolean
    parent_type_id?: string | null
    parent_name?: string | null
    child_type_id?: string | null
    child_name?: string | null
    form_template_id?: number | null
    documentConfigurations?: DocumentConfigurationUncheckedCreateNestedManyWithoutDocumentTypeInput
    document_fields?: document_fieldsUncheckedCreateNestedManyWithoutDocument_typesInput
    locations?: DocumentTypeLocationUncheckedCreateNestedManyWithoutDocument_typeInput
  }

  export type DocumentTypeCreateOrConnectWithoutDocumentTitlesInput = {
    where: DocumentTypeWhereUniqueInput
    create: XOR<DocumentTypeCreateWithoutDocumentTitlesInput, DocumentTypeUncheckedCreateWithoutDocumentTitlesInput>
  }

  export type DocumentConfigurationCreateWithoutDocumentTitleInput = {
    typeOfCondition?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    priority?: number
    customFields?: NullableJsonNullValueInput | InputJsonValue
    documentType: DocumentTypeCreateNestedOneWithoutDocumentConfigurationsInput
    region: RegionCreateNestedOneWithoutDocumentConfigurationsInput
  }

  export type DocumentConfigurationUncheckedCreateWithoutDocumentTitleInput = {
    id?: number
    regionId: number
    documentTypeId: number
    typeOfCondition?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    priority?: number
    customFields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DocumentConfigurationCreateOrConnectWithoutDocumentTitleInput = {
    where: DocumentConfigurationWhereUniqueInput
    create: XOR<DocumentConfigurationCreateWithoutDocumentTitleInput, DocumentConfigurationUncheckedCreateWithoutDocumentTitleInput>
  }

  export type DocumentConfigurationCreateManyDocumentTitleInputEnvelope = {
    data: DocumentConfigurationCreateManyDocumentTitleInput | DocumentConfigurationCreateManyDocumentTitleInput[]
    skipDuplicates?: boolean
  }

  export type document_fieldsCreateWithoutDocument_titlesInput = {
    field_id: string
    name: string
    label: string
    type: string
    placeholder?: string | null
    required?: boolean
    order: number
    full_width?: boolean
    hidden?: boolean
    default_value?: string | null
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    conditional_display?: NullableJsonNullValueInput | InputJsonValue
    help_text?: string | null
    created_at?: Date | string
    updated_at: Date | string
    document_types: DocumentTypeCreateNestedOneWithoutDocument_fieldsInput
  }

  export type document_fieldsUncheckedCreateWithoutDocument_titlesInput = {
    id?: number
    field_id: string
    name: string
    label: string
    type: string
    placeholder?: string | null
    required?: boolean
    order: number
    full_width?: boolean
    hidden?: boolean
    default_value?: string | null
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    conditional_display?: NullableJsonNullValueInput | InputJsonValue
    help_text?: string | null
    document_type_id: number
    created_at?: Date | string
    updated_at: Date | string
  }

  export type document_fieldsCreateOrConnectWithoutDocument_titlesInput = {
    where: document_fieldsWhereUniqueInput
    create: XOR<document_fieldsCreateWithoutDocument_titlesInput, document_fieldsUncheckedCreateWithoutDocument_titlesInput>
  }

  export type document_fieldsCreateManyDocument_titlesInputEnvelope = {
    data: document_fieldsCreateManyDocument_titlesInput | document_fieldsCreateManyDocument_titlesInput[]
    skipDuplicates?: boolean
  }

  export type DocumentTypeUpsertWithoutDocumentTitlesInput = {
    update: XOR<DocumentTypeUpdateWithoutDocumentTitlesInput, DocumentTypeUncheckedUpdateWithoutDocumentTitlesInput>
    create: XOR<DocumentTypeCreateWithoutDocumentTitlesInput, DocumentTypeUncheckedCreateWithoutDocumentTitlesInput>
    where?: DocumentTypeWhereInput
  }

  export type DocumentTypeUpdateToOneWithWhereWithoutDocumentTitlesInput = {
    where?: DocumentTypeWhereInput
    data: XOR<DocumentTypeUpdateWithoutDocumentTitlesInput, DocumentTypeUncheckedUpdateWithoutDocumentTitlesInput>
  }

  export type DocumentTypeUpdateWithoutDocumentTitlesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formId?: NullableStringFieldUpdateOperationsInput | string | null
    hideHeader?: BoolFieldUpdateOperationsInput | boolean
    showFormButtons?: BoolFieldUpdateOperationsInput | boolean
    parent_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent_name?: NullableStringFieldUpdateOperationsInput | string | null
    child_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    child_name?: NullableStringFieldUpdateOperationsInput | string | null
    documentConfigurations?: DocumentConfigurationUpdateManyWithoutDocumentTypeNestedInput
    document_fields?: document_fieldsUpdateManyWithoutDocument_typesNestedInput
    form_template?: FormTemplateUpdateOneWithoutDocument_typesNestedInput
    locations?: DocumentTypeLocationUpdateManyWithoutDocument_typeNestedInput
  }

  export type DocumentTypeUncheckedUpdateWithoutDocumentTitlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formId?: NullableStringFieldUpdateOperationsInput | string | null
    hideHeader?: BoolFieldUpdateOperationsInput | boolean
    showFormButtons?: BoolFieldUpdateOperationsInput | boolean
    parent_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent_name?: NullableStringFieldUpdateOperationsInput | string | null
    child_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    child_name?: NullableStringFieldUpdateOperationsInput | string | null
    form_template_id?: NullableIntFieldUpdateOperationsInput | number | null
    documentConfigurations?: DocumentConfigurationUncheckedUpdateManyWithoutDocumentTypeNestedInput
    document_fields?: document_fieldsUncheckedUpdateManyWithoutDocument_typesNestedInput
    locations?: DocumentTypeLocationUncheckedUpdateManyWithoutDocument_typeNestedInput
  }

  export type DocumentConfigurationUpsertWithWhereUniqueWithoutDocumentTitleInput = {
    where: DocumentConfigurationWhereUniqueInput
    update: XOR<DocumentConfigurationUpdateWithoutDocumentTitleInput, DocumentConfigurationUncheckedUpdateWithoutDocumentTitleInput>
    create: XOR<DocumentConfigurationCreateWithoutDocumentTitleInput, DocumentConfigurationUncheckedCreateWithoutDocumentTitleInput>
  }

  export type DocumentConfigurationUpdateWithWhereUniqueWithoutDocumentTitleInput = {
    where: DocumentConfigurationWhereUniqueInput
    data: XOR<DocumentConfigurationUpdateWithoutDocumentTitleInput, DocumentConfigurationUncheckedUpdateWithoutDocumentTitleInput>
  }

  export type DocumentConfigurationUpdateManyWithWhereWithoutDocumentTitleInput = {
    where: DocumentConfigurationScalarWhereInput
    data: XOR<DocumentConfigurationUpdateManyMutationInput, DocumentConfigurationUncheckedUpdateManyWithoutDocumentTitleInput>
  }

  export type document_fieldsUpsertWithWhereUniqueWithoutDocument_titlesInput = {
    where: document_fieldsWhereUniqueInput
    update: XOR<document_fieldsUpdateWithoutDocument_titlesInput, document_fieldsUncheckedUpdateWithoutDocument_titlesInput>
    create: XOR<document_fieldsCreateWithoutDocument_titlesInput, document_fieldsUncheckedCreateWithoutDocument_titlesInput>
  }

  export type document_fieldsUpdateWithWhereUniqueWithoutDocument_titlesInput = {
    where: document_fieldsWhereUniqueInput
    data: XOR<document_fieldsUpdateWithoutDocument_titlesInput, document_fieldsUncheckedUpdateWithoutDocument_titlesInput>
  }

  export type document_fieldsUpdateManyWithWhereWithoutDocument_titlesInput = {
    where: document_fieldsScalarWhereInput
    data: XOR<document_fieldsUpdateManyMutationInput, document_fieldsUncheckedUpdateManyWithoutDocument_titlesInput>
  }

  export type FormTemplateCreateWithoutForm_fieldsInput = {
    form_key: string
    name: string
    description?: string | null
    version?: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    document_types?: DocumentTypeCreateNestedManyWithoutForm_templateInput
  }

  export type FormTemplateUncheckedCreateWithoutForm_fieldsInput = {
    id?: number
    form_key: string
    name: string
    description?: string | null
    version?: number
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    document_types?: DocumentTypeUncheckedCreateNestedManyWithoutForm_templateInput
  }

  export type FormTemplateCreateOrConnectWithoutForm_fieldsInput = {
    where: FormTemplateWhereUniqueInput
    create: XOR<FormTemplateCreateWithoutForm_fieldsInput, FormTemplateUncheckedCreateWithoutForm_fieldsInput>
  }

  export type FieldOptionCreateWithoutForm_fieldInput = {
    option_value: string
    option_label: string
    order?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FieldOptionUncheckedCreateWithoutForm_fieldInput = {
    id?: number
    option_value: string
    option_label: string
    order?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FieldOptionCreateOrConnectWithoutForm_fieldInput = {
    where: FieldOptionWhereUniqueInput
    create: XOR<FieldOptionCreateWithoutForm_fieldInput, FieldOptionUncheckedCreateWithoutForm_fieldInput>
  }

  export type FieldOptionCreateManyForm_fieldInputEnvelope = {
    data: FieldOptionCreateManyForm_fieldInput | FieldOptionCreateManyForm_fieldInput[]
    skipDuplicates?: boolean
  }

  export type FormTemplateUpsertWithoutForm_fieldsInput = {
    update: XOR<FormTemplateUpdateWithoutForm_fieldsInput, FormTemplateUncheckedUpdateWithoutForm_fieldsInput>
    create: XOR<FormTemplateCreateWithoutForm_fieldsInput, FormTemplateUncheckedCreateWithoutForm_fieldsInput>
    where?: FormTemplateWhereInput
  }

  export type FormTemplateUpdateToOneWithWhereWithoutForm_fieldsInput = {
    where?: FormTemplateWhereInput
    data: XOR<FormTemplateUpdateWithoutForm_fieldsInput, FormTemplateUncheckedUpdateWithoutForm_fieldsInput>
  }

  export type FormTemplateUpdateWithoutForm_fieldsInput = {
    form_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    document_types?: DocumentTypeUpdateManyWithoutForm_templateNestedInput
  }

  export type FormTemplateUncheckedUpdateWithoutForm_fieldsInput = {
    id?: IntFieldUpdateOperationsInput | number
    form_key?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: IntFieldUpdateOperationsInput | number
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    document_types?: DocumentTypeUncheckedUpdateManyWithoutForm_templateNestedInput
  }

  export type FieldOptionUpsertWithWhereUniqueWithoutForm_fieldInput = {
    where: FieldOptionWhereUniqueInput
    update: XOR<FieldOptionUpdateWithoutForm_fieldInput, FieldOptionUncheckedUpdateWithoutForm_fieldInput>
    create: XOR<FieldOptionCreateWithoutForm_fieldInput, FieldOptionUncheckedCreateWithoutForm_fieldInput>
  }

  export type FieldOptionUpdateWithWhereUniqueWithoutForm_fieldInput = {
    where: FieldOptionWhereUniqueInput
    data: XOR<FieldOptionUpdateWithoutForm_fieldInput, FieldOptionUncheckedUpdateWithoutForm_fieldInput>
  }

  export type FieldOptionUpdateManyWithWhereWithoutForm_fieldInput = {
    where: FieldOptionScalarWhereInput
    data: XOR<FieldOptionUpdateManyMutationInput, FieldOptionUncheckedUpdateManyWithoutForm_fieldInput>
  }

  export type FieldOptionScalarWhereInput = {
    AND?: FieldOptionScalarWhereInput | FieldOptionScalarWhereInput[]
    OR?: FieldOptionScalarWhereInput[]
    NOT?: FieldOptionScalarWhereInput | FieldOptionScalarWhereInput[]
    id?: IntFilter<"FieldOption"> | number
    field_id?: IntFilter<"FieldOption"> | number
    option_value?: StringFilter<"FieldOption"> | string
    option_label?: StringFilter<"FieldOption"> | string
    order?: IntFilter<"FieldOption"> | number
    created_at?: DateTimeFilter<"FieldOption"> | Date | string
    updated_at?: DateTimeFilter<"FieldOption"> | Date | string
  }

  export type DocumentTitleCreateWithoutDocumentConfigurationsInput = {
    title: string
    created_at?: Date | string
    updated_at: Date | string
    shareable?: boolean
    is_display?: boolean
    require_number?: boolean
    require_valid_date?: boolean
    require_expire_date?: boolean
    require_doc_data?: boolean
    doc_data_options?: NullableJsonNullValueInput | InputJsonValue
    doc_data_name?: string | null
    require_attachment_front?: boolean
    require_attachment_back?: boolean
    description?: string | null
    form_description?: string | null
    form_title?: string | null
    document_types: DocumentTypeCreateNestedOneWithoutDocumentTitlesInput
    document_fields?: document_fieldsCreateNestedManyWithoutDocument_titlesInput
  }

  export type DocumentTitleUncheckedCreateWithoutDocumentConfigurationsInput = {
    id?: number
    title: string
    created_at?: Date | string
    updated_at: Date | string
    shareable?: boolean
    document_type_id: number
    is_display?: boolean
    require_number?: boolean
    require_valid_date?: boolean
    require_expire_date?: boolean
    require_doc_data?: boolean
    doc_data_options?: NullableJsonNullValueInput | InputJsonValue
    doc_data_name?: string | null
    require_attachment_front?: boolean
    require_attachment_back?: boolean
    description?: string | null
    form_description?: string | null
    form_title?: string | null
    document_fields?: document_fieldsUncheckedCreateNestedManyWithoutDocument_titlesInput
  }

  export type DocumentTitleCreateOrConnectWithoutDocumentConfigurationsInput = {
    where: DocumentTitleWhereUniqueInput
    create: XOR<DocumentTitleCreateWithoutDocumentConfigurationsInput, DocumentTitleUncheckedCreateWithoutDocumentConfigurationsInput>
  }

  export type DocumentTypeCreateWithoutDocumentConfigurationsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    formId?: string | null
    hideHeader?: boolean
    showFormButtons?: boolean
    parent_type_id?: string | null
    parent_name?: string | null
    child_type_id?: string | null
    child_name?: string | null
    documentTitles?: DocumentTitleCreateNestedManyWithoutDocument_typesInput
    document_fields?: document_fieldsCreateNestedManyWithoutDocument_typesInput
    form_template?: FormTemplateCreateNestedOneWithoutDocument_typesInput
    locations?: DocumentTypeLocationCreateNestedManyWithoutDocument_typeInput
  }

  export type DocumentTypeUncheckedCreateWithoutDocumentConfigurationsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    formId?: string | null
    hideHeader?: boolean
    showFormButtons?: boolean
    parent_type_id?: string | null
    parent_name?: string | null
    child_type_id?: string | null
    child_name?: string | null
    form_template_id?: number | null
    documentTitles?: DocumentTitleUncheckedCreateNestedManyWithoutDocument_typesInput
    document_fields?: document_fieldsUncheckedCreateNestedManyWithoutDocument_typesInput
    locations?: DocumentTypeLocationUncheckedCreateNestedManyWithoutDocument_typeInput
  }

  export type DocumentTypeCreateOrConnectWithoutDocumentConfigurationsInput = {
    where: DocumentTypeWhereUniqueInput
    create: XOR<DocumentTypeCreateWithoutDocumentConfigurationsInput, DocumentTypeUncheckedCreateWithoutDocumentConfigurationsInput>
  }

  export type RegionCreateWithoutDocumentConfigurationsInput = {
    name: string
    code: string
    country?: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegionUncheckedCreateWithoutDocumentConfigurationsInput = {
    id?: number
    name: string
    code: string
    country?: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RegionCreateOrConnectWithoutDocumentConfigurationsInput = {
    where: RegionWhereUniqueInput
    create: XOR<RegionCreateWithoutDocumentConfigurationsInput, RegionUncheckedCreateWithoutDocumentConfigurationsInput>
  }

  export type DocumentTitleUpsertWithoutDocumentConfigurationsInput = {
    update: XOR<DocumentTitleUpdateWithoutDocumentConfigurationsInput, DocumentTitleUncheckedUpdateWithoutDocumentConfigurationsInput>
    create: XOR<DocumentTitleCreateWithoutDocumentConfigurationsInput, DocumentTitleUncheckedCreateWithoutDocumentConfigurationsInput>
    where?: DocumentTitleWhereInput
  }

  export type DocumentTitleUpdateToOneWithWhereWithoutDocumentConfigurationsInput = {
    where?: DocumentTitleWhereInput
    data: XOR<DocumentTitleUpdateWithoutDocumentConfigurationsInput, DocumentTitleUncheckedUpdateWithoutDocumentConfigurationsInput>
  }

  export type DocumentTitleUpdateWithoutDocumentConfigurationsInput = {
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shareable?: BoolFieldUpdateOperationsInput | boolean
    is_display?: BoolFieldUpdateOperationsInput | boolean
    require_number?: BoolFieldUpdateOperationsInput | boolean
    require_valid_date?: BoolFieldUpdateOperationsInput | boolean
    require_expire_date?: BoolFieldUpdateOperationsInput | boolean
    require_doc_data?: BoolFieldUpdateOperationsInput | boolean
    doc_data_options?: NullableJsonNullValueInput | InputJsonValue
    doc_data_name?: NullableStringFieldUpdateOperationsInput | string | null
    require_attachment_front?: BoolFieldUpdateOperationsInput | boolean
    require_attachment_back?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    form_description?: NullableStringFieldUpdateOperationsInput | string | null
    form_title?: NullableStringFieldUpdateOperationsInput | string | null
    document_types?: DocumentTypeUpdateOneRequiredWithoutDocumentTitlesNestedInput
    document_fields?: document_fieldsUpdateManyWithoutDocument_titlesNestedInput
  }

  export type DocumentTitleUncheckedUpdateWithoutDocumentConfigurationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shareable?: BoolFieldUpdateOperationsInput | boolean
    document_type_id?: IntFieldUpdateOperationsInput | number
    is_display?: BoolFieldUpdateOperationsInput | boolean
    require_number?: BoolFieldUpdateOperationsInput | boolean
    require_valid_date?: BoolFieldUpdateOperationsInput | boolean
    require_expire_date?: BoolFieldUpdateOperationsInput | boolean
    require_doc_data?: BoolFieldUpdateOperationsInput | boolean
    doc_data_options?: NullableJsonNullValueInput | InputJsonValue
    doc_data_name?: NullableStringFieldUpdateOperationsInput | string | null
    require_attachment_front?: BoolFieldUpdateOperationsInput | boolean
    require_attachment_back?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    form_description?: NullableStringFieldUpdateOperationsInput | string | null
    form_title?: NullableStringFieldUpdateOperationsInput | string | null
    document_fields?: document_fieldsUncheckedUpdateManyWithoutDocument_titlesNestedInput
  }

  export type DocumentTypeUpsertWithoutDocumentConfigurationsInput = {
    update: XOR<DocumentTypeUpdateWithoutDocumentConfigurationsInput, DocumentTypeUncheckedUpdateWithoutDocumentConfigurationsInput>
    create: XOR<DocumentTypeCreateWithoutDocumentConfigurationsInput, DocumentTypeUncheckedCreateWithoutDocumentConfigurationsInput>
    where?: DocumentTypeWhereInput
  }

  export type DocumentTypeUpdateToOneWithWhereWithoutDocumentConfigurationsInput = {
    where?: DocumentTypeWhereInput
    data: XOR<DocumentTypeUpdateWithoutDocumentConfigurationsInput, DocumentTypeUncheckedUpdateWithoutDocumentConfigurationsInput>
  }

  export type DocumentTypeUpdateWithoutDocumentConfigurationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formId?: NullableStringFieldUpdateOperationsInput | string | null
    hideHeader?: BoolFieldUpdateOperationsInput | boolean
    showFormButtons?: BoolFieldUpdateOperationsInput | boolean
    parent_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent_name?: NullableStringFieldUpdateOperationsInput | string | null
    child_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    child_name?: NullableStringFieldUpdateOperationsInput | string | null
    documentTitles?: DocumentTitleUpdateManyWithoutDocument_typesNestedInput
    document_fields?: document_fieldsUpdateManyWithoutDocument_typesNestedInput
    form_template?: FormTemplateUpdateOneWithoutDocument_typesNestedInput
    locations?: DocumentTypeLocationUpdateManyWithoutDocument_typeNestedInput
  }

  export type DocumentTypeUncheckedUpdateWithoutDocumentConfigurationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formId?: NullableStringFieldUpdateOperationsInput | string | null
    hideHeader?: BoolFieldUpdateOperationsInput | boolean
    showFormButtons?: BoolFieldUpdateOperationsInput | boolean
    parent_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent_name?: NullableStringFieldUpdateOperationsInput | string | null
    child_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    child_name?: NullableStringFieldUpdateOperationsInput | string | null
    form_template_id?: NullableIntFieldUpdateOperationsInput | number | null
    documentTitles?: DocumentTitleUncheckedUpdateManyWithoutDocument_typesNestedInput
    document_fields?: document_fieldsUncheckedUpdateManyWithoutDocument_typesNestedInput
    locations?: DocumentTypeLocationUncheckedUpdateManyWithoutDocument_typeNestedInput
  }

  export type RegionUpsertWithoutDocumentConfigurationsInput = {
    update: XOR<RegionUpdateWithoutDocumentConfigurationsInput, RegionUncheckedUpdateWithoutDocumentConfigurationsInput>
    create: XOR<RegionCreateWithoutDocumentConfigurationsInput, RegionUncheckedCreateWithoutDocumentConfigurationsInput>
    where?: RegionWhereInput
  }

  export type RegionUpdateToOneWithWhereWithoutDocumentConfigurationsInput = {
    where?: RegionWhereInput
    data: XOR<RegionUpdateWithoutDocumentConfigurationsInput, RegionUncheckedUpdateWithoutDocumentConfigurationsInput>
  }

  export type RegionUpdateWithoutDocumentConfigurationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegionUncheckedUpdateWithoutDocumentConfigurationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentConfigurationCreateWithoutRegionInput = {
    typeOfCondition?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    priority?: number
    customFields?: NullableJsonNullValueInput | InputJsonValue
    documentTitle: DocumentTitleCreateNestedOneWithoutDocumentConfigurationsInput
    documentType: DocumentTypeCreateNestedOneWithoutDocumentConfigurationsInput
  }

  export type DocumentConfigurationUncheckedCreateWithoutRegionInput = {
    id?: number
    documentTypeId: number
    documentTitleId: number
    typeOfCondition?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    priority?: number
    customFields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DocumentConfigurationCreateOrConnectWithoutRegionInput = {
    where: DocumentConfigurationWhereUniqueInput
    create: XOR<DocumentConfigurationCreateWithoutRegionInput, DocumentConfigurationUncheckedCreateWithoutRegionInput>
  }

  export type DocumentConfigurationCreateManyRegionInputEnvelope = {
    data: DocumentConfigurationCreateManyRegionInput | DocumentConfigurationCreateManyRegionInput[]
    skipDuplicates?: boolean
  }

  export type DocumentConfigurationUpsertWithWhereUniqueWithoutRegionInput = {
    where: DocumentConfigurationWhereUniqueInput
    update: XOR<DocumentConfigurationUpdateWithoutRegionInput, DocumentConfigurationUncheckedUpdateWithoutRegionInput>
    create: XOR<DocumentConfigurationCreateWithoutRegionInput, DocumentConfigurationUncheckedCreateWithoutRegionInput>
  }

  export type DocumentConfigurationUpdateWithWhereUniqueWithoutRegionInput = {
    where: DocumentConfigurationWhereUniqueInput
    data: XOR<DocumentConfigurationUpdateWithoutRegionInput, DocumentConfigurationUncheckedUpdateWithoutRegionInput>
  }

  export type DocumentConfigurationUpdateManyWithWhereWithoutRegionInput = {
    where: DocumentConfigurationScalarWhereInput
    data: XOR<DocumentConfigurationUpdateManyMutationInput, DocumentConfigurationUncheckedUpdateManyWithoutRegionInput>
  }

  export type DocumentTitleCreateWithoutDocument_fieldsInput = {
    title: string
    created_at?: Date | string
    updated_at: Date | string
    shareable?: boolean
    is_display?: boolean
    require_number?: boolean
    require_valid_date?: boolean
    require_expire_date?: boolean
    require_doc_data?: boolean
    doc_data_options?: NullableJsonNullValueInput | InputJsonValue
    doc_data_name?: string | null
    require_attachment_front?: boolean
    require_attachment_back?: boolean
    description?: string | null
    form_description?: string | null
    form_title?: string | null
    document_types: DocumentTypeCreateNestedOneWithoutDocumentTitlesInput
    documentConfigurations?: DocumentConfigurationCreateNestedManyWithoutDocumentTitleInput
  }

  export type DocumentTitleUncheckedCreateWithoutDocument_fieldsInput = {
    id?: number
    title: string
    created_at?: Date | string
    updated_at: Date | string
    shareable?: boolean
    document_type_id: number
    is_display?: boolean
    require_number?: boolean
    require_valid_date?: boolean
    require_expire_date?: boolean
    require_doc_data?: boolean
    doc_data_options?: NullableJsonNullValueInput | InputJsonValue
    doc_data_name?: string | null
    require_attachment_front?: boolean
    require_attachment_back?: boolean
    description?: string | null
    form_description?: string | null
    form_title?: string | null
    documentConfigurations?: DocumentConfigurationUncheckedCreateNestedManyWithoutDocumentTitleInput
  }

  export type DocumentTitleCreateOrConnectWithoutDocument_fieldsInput = {
    where: DocumentTitleWhereUniqueInput
    create: XOR<DocumentTitleCreateWithoutDocument_fieldsInput, DocumentTitleUncheckedCreateWithoutDocument_fieldsInput>
  }

  export type DocumentTypeCreateWithoutDocument_fieldsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    formId?: string | null
    hideHeader?: boolean
    showFormButtons?: boolean
    parent_type_id?: string | null
    parent_name?: string | null
    child_type_id?: string | null
    child_name?: string | null
    documentTitles?: DocumentTitleCreateNestedManyWithoutDocument_typesInput
    documentConfigurations?: DocumentConfigurationCreateNestedManyWithoutDocumentTypeInput
    form_template?: FormTemplateCreateNestedOneWithoutDocument_typesInput
    locations?: DocumentTypeLocationCreateNestedManyWithoutDocument_typeInput
  }

  export type DocumentTypeUncheckedCreateWithoutDocument_fieldsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    formId?: string | null
    hideHeader?: boolean
    showFormButtons?: boolean
    parent_type_id?: string | null
    parent_name?: string | null
    child_type_id?: string | null
    child_name?: string | null
    form_template_id?: number | null
    documentTitles?: DocumentTitleUncheckedCreateNestedManyWithoutDocument_typesInput
    documentConfigurations?: DocumentConfigurationUncheckedCreateNestedManyWithoutDocumentTypeInput
    locations?: DocumentTypeLocationUncheckedCreateNestedManyWithoutDocument_typeInput
  }

  export type DocumentTypeCreateOrConnectWithoutDocument_fieldsInput = {
    where: DocumentTypeWhereUniqueInput
    create: XOR<DocumentTypeCreateWithoutDocument_fieldsInput, DocumentTypeUncheckedCreateWithoutDocument_fieldsInput>
  }

  export type DocumentTitleUpsertWithoutDocument_fieldsInput = {
    update: XOR<DocumentTitleUpdateWithoutDocument_fieldsInput, DocumentTitleUncheckedUpdateWithoutDocument_fieldsInput>
    create: XOR<DocumentTitleCreateWithoutDocument_fieldsInput, DocumentTitleUncheckedCreateWithoutDocument_fieldsInput>
    where?: DocumentTitleWhereInput
  }

  export type DocumentTitleUpdateToOneWithWhereWithoutDocument_fieldsInput = {
    where?: DocumentTitleWhereInput
    data: XOR<DocumentTitleUpdateWithoutDocument_fieldsInput, DocumentTitleUncheckedUpdateWithoutDocument_fieldsInput>
  }

  export type DocumentTitleUpdateWithoutDocument_fieldsInput = {
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shareable?: BoolFieldUpdateOperationsInput | boolean
    is_display?: BoolFieldUpdateOperationsInput | boolean
    require_number?: BoolFieldUpdateOperationsInput | boolean
    require_valid_date?: BoolFieldUpdateOperationsInput | boolean
    require_expire_date?: BoolFieldUpdateOperationsInput | boolean
    require_doc_data?: BoolFieldUpdateOperationsInput | boolean
    doc_data_options?: NullableJsonNullValueInput | InputJsonValue
    doc_data_name?: NullableStringFieldUpdateOperationsInput | string | null
    require_attachment_front?: BoolFieldUpdateOperationsInput | boolean
    require_attachment_back?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    form_description?: NullableStringFieldUpdateOperationsInput | string | null
    form_title?: NullableStringFieldUpdateOperationsInput | string | null
    document_types?: DocumentTypeUpdateOneRequiredWithoutDocumentTitlesNestedInput
    documentConfigurations?: DocumentConfigurationUpdateManyWithoutDocumentTitleNestedInput
  }

  export type DocumentTitleUncheckedUpdateWithoutDocument_fieldsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shareable?: BoolFieldUpdateOperationsInput | boolean
    document_type_id?: IntFieldUpdateOperationsInput | number
    is_display?: BoolFieldUpdateOperationsInput | boolean
    require_number?: BoolFieldUpdateOperationsInput | boolean
    require_valid_date?: BoolFieldUpdateOperationsInput | boolean
    require_expire_date?: BoolFieldUpdateOperationsInput | boolean
    require_doc_data?: BoolFieldUpdateOperationsInput | boolean
    doc_data_options?: NullableJsonNullValueInput | InputJsonValue
    doc_data_name?: NullableStringFieldUpdateOperationsInput | string | null
    require_attachment_front?: BoolFieldUpdateOperationsInput | boolean
    require_attachment_back?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    form_description?: NullableStringFieldUpdateOperationsInput | string | null
    form_title?: NullableStringFieldUpdateOperationsInput | string | null
    documentConfigurations?: DocumentConfigurationUncheckedUpdateManyWithoutDocumentTitleNestedInput
  }

  export type DocumentTypeUpsertWithoutDocument_fieldsInput = {
    update: XOR<DocumentTypeUpdateWithoutDocument_fieldsInput, DocumentTypeUncheckedUpdateWithoutDocument_fieldsInput>
    create: XOR<DocumentTypeCreateWithoutDocument_fieldsInput, DocumentTypeUncheckedCreateWithoutDocument_fieldsInput>
    where?: DocumentTypeWhereInput
  }

  export type DocumentTypeUpdateToOneWithWhereWithoutDocument_fieldsInput = {
    where?: DocumentTypeWhereInput
    data: XOR<DocumentTypeUpdateWithoutDocument_fieldsInput, DocumentTypeUncheckedUpdateWithoutDocument_fieldsInput>
  }

  export type DocumentTypeUpdateWithoutDocument_fieldsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formId?: NullableStringFieldUpdateOperationsInput | string | null
    hideHeader?: BoolFieldUpdateOperationsInput | boolean
    showFormButtons?: BoolFieldUpdateOperationsInput | boolean
    parent_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent_name?: NullableStringFieldUpdateOperationsInput | string | null
    child_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    child_name?: NullableStringFieldUpdateOperationsInput | string | null
    documentTitles?: DocumentTitleUpdateManyWithoutDocument_typesNestedInput
    documentConfigurations?: DocumentConfigurationUpdateManyWithoutDocumentTypeNestedInput
    form_template?: FormTemplateUpdateOneWithoutDocument_typesNestedInput
    locations?: DocumentTypeLocationUpdateManyWithoutDocument_typeNestedInput
  }

  export type DocumentTypeUncheckedUpdateWithoutDocument_fieldsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formId?: NullableStringFieldUpdateOperationsInput | string | null
    hideHeader?: BoolFieldUpdateOperationsInput | boolean
    showFormButtons?: BoolFieldUpdateOperationsInput | boolean
    parent_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent_name?: NullableStringFieldUpdateOperationsInput | string | null
    child_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    child_name?: NullableStringFieldUpdateOperationsInput | string | null
    form_template_id?: NullableIntFieldUpdateOperationsInput | number | null
    documentTitles?: DocumentTitleUncheckedUpdateManyWithoutDocument_typesNestedInput
    documentConfigurations?: DocumentConfigurationUncheckedUpdateManyWithoutDocumentTypeNestedInput
    locations?: DocumentTypeLocationUncheckedUpdateManyWithoutDocument_typeNestedInput
  }

  export type FormFieldCreateWithoutForm_templateInput = {
    field_id: string
    field_name: string
    field_type: string
    label: string
    placeholder?: string | null
    required?: boolean
    is_hidden?: boolean
    order?: number
    full_width?: boolean
    display_conditions?: NullableJsonNullValueInput | InputJsonValue
    validation_rules?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    field_options?: FieldOptionCreateNestedManyWithoutForm_fieldInput
  }

  export type FormFieldUncheckedCreateWithoutForm_templateInput = {
    id?: number
    field_id: string
    field_name: string
    field_type: string
    label: string
    placeholder?: string | null
    required?: boolean
    is_hidden?: boolean
    order?: number
    full_width?: boolean
    display_conditions?: NullableJsonNullValueInput | InputJsonValue
    validation_rules?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    field_options?: FieldOptionUncheckedCreateNestedManyWithoutForm_fieldInput
  }

  export type FormFieldCreateOrConnectWithoutForm_templateInput = {
    where: FormFieldWhereUniqueInput
    create: XOR<FormFieldCreateWithoutForm_templateInput, FormFieldUncheckedCreateWithoutForm_templateInput>
  }

  export type FormFieldCreateManyForm_templateInputEnvelope = {
    data: FormFieldCreateManyForm_templateInput | FormFieldCreateManyForm_templateInput[]
    skipDuplicates?: boolean
  }

  export type DocumentTypeCreateWithoutForm_templateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    formId?: string | null
    hideHeader?: boolean
    showFormButtons?: boolean
    parent_type_id?: string | null
    parent_name?: string | null
    child_type_id?: string | null
    child_name?: string | null
    documentTitles?: DocumentTitleCreateNestedManyWithoutDocument_typesInput
    documentConfigurations?: DocumentConfigurationCreateNestedManyWithoutDocumentTypeInput
    document_fields?: document_fieldsCreateNestedManyWithoutDocument_typesInput
    locations?: DocumentTypeLocationCreateNestedManyWithoutDocument_typeInput
  }

  export type DocumentTypeUncheckedCreateWithoutForm_templateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    formId?: string | null
    hideHeader?: boolean
    showFormButtons?: boolean
    parent_type_id?: string | null
    parent_name?: string | null
    child_type_id?: string | null
    child_name?: string | null
    documentTitles?: DocumentTitleUncheckedCreateNestedManyWithoutDocument_typesInput
    documentConfigurations?: DocumentConfigurationUncheckedCreateNestedManyWithoutDocumentTypeInput
    document_fields?: document_fieldsUncheckedCreateNestedManyWithoutDocument_typesInput
    locations?: DocumentTypeLocationUncheckedCreateNestedManyWithoutDocument_typeInput
  }

  export type DocumentTypeCreateOrConnectWithoutForm_templateInput = {
    where: DocumentTypeWhereUniqueInput
    create: XOR<DocumentTypeCreateWithoutForm_templateInput, DocumentTypeUncheckedCreateWithoutForm_templateInput>
  }

  export type DocumentTypeCreateManyForm_templateInputEnvelope = {
    data: DocumentTypeCreateManyForm_templateInput | DocumentTypeCreateManyForm_templateInput[]
    skipDuplicates?: boolean
  }

  export type FormFieldUpsertWithWhereUniqueWithoutForm_templateInput = {
    where: FormFieldWhereUniqueInput
    update: XOR<FormFieldUpdateWithoutForm_templateInput, FormFieldUncheckedUpdateWithoutForm_templateInput>
    create: XOR<FormFieldCreateWithoutForm_templateInput, FormFieldUncheckedCreateWithoutForm_templateInput>
  }

  export type FormFieldUpdateWithWhereUniqueWithoutForm_templateInput = {
    where: FormFieldWhereUniqueInput
    data: XOR<FormFieldUpdateWithoutForm_templateInput, FormFieldUncheckedUpdateWithoutForm_templateInput>
  }

  export type FormFieldUpdateManyWithWhereWithoutForm_templateInput = {
    where: FormFieldScalarWhereInput
    data: XOR<FormFieldUpdateManyMutationInput, FormFieldUncheckedUpdateManyWithoutForm_templateInput>
  }

  export type FormFieldScalarWhereInput = {
    AND?: FormFieldScalarWhereInput | FormFieldScalarWhereInput[]
    OR?: FormFieldScalarWhereInput[]
    NOT?: FormFieldScalarWhereInput | FormFieldScalarWhereInput[]
    id?: IntFilter<"FormField"> | number
    template_id?: IntFilter<"FormField"> | number
    field_id?: StringFilter<"FormField"> | string
    field_name?: StringFilter<"FormField"> | string
    field_type?: StringFilter<"FormField"> | string
    label?: StringFilter<"FormField"> | string
    placeholder?: StringNullableFilter<"FormField"> | string | null
    required?: BoolFilter<"FormField"> | boolean
    is_hidden?: BoolFilter<"FormField"> | boolean
    order?: IntFilter<"FormField"> | number
    full_width?: BoolFilter<"FormField"> | boolean
    display_conditions?: JsonNullableFilter<"FormField">
    validation_rules?: JsonNullableFilter<"FormField">
    created_at?: DateTimeFilter<"FormField"> | Date | string
    updated_at?: DateTimeFilter<"FormField"> | Date | string
  }

  export type DocumentTypeUpsertWithWhereUniqueWithoutForm_templateInput = {
    where: DocumentTypeWhereUniqueInput
    update: XOR<DocumentTypeUpdateWithoutForm_templateInput, DocumentTypeUncheckedUpdateWithoutForm_templateInput>
    create: XOR<DocumentTypeCreateWithoutForm_templateInput, DocumentTypeUncheckedCreateWithoutForm_templateInput>
  }

  export type DocumentTypeUpdateWithWhereUniqueWithoutForm_templateInput = {
    where: DocumentTypeWhereUniqueInput
    data: XOR<DocumentTypeUpdateWithoutForm_templateInput, DocumentTypeUncheckedUpdateWithoutForm_templateInput>
  }

  export type DocumentTypeUpdateManyWithWhereWithoutForm_templateInput = {
    where: DocumentTypeScalarWhereInput
    data: XOR<DocumentTypeUpdateManyMutationInput, DocumentTypeUncheckedUpdateManyWithoutForm_templateInput>
  }

  export type DocumentTypeScalarWhereInput = {
    AND?: DocumentTypeScalarWhereInput | DocumentTypeScalarWhereInput[]
    OR?: DocumentTypeScalarWhereInput[]
    NOT?: DocumentTypeScalarWhereInput | DocumentTypeScalarWhereInput[]
    id?: IntFilter<"DocumentType"> | number
    name?: StringFilter<"DocumentType"> | string
    createdAt?: DateTimeFilter<"DocumentType"> | Date | string
    updatedAt?: DateTimeFilter<"DocumentType"> | Date | string
    description?: StringNullableFilter<"DocumentType"> | string | null
    formId?: StringNullableFilter<"DocumentType"> | string | null
    hideHeader?: BoolFilter<"DocumentType"> | boolean
    showFormButtons?: BoolFilter<"DocumentType"> | boolean
    parent_type_id?: StringNullableFilter<"DocumentType"> | string | null
    parent_name?: StringNullableFilter<"DocumentType"> | string | null
    child_type_id?: StringNullableFilter<"DocumentType"> | string | null
    child_name?: StringNullableFilter<"DocumentType"> | string | null
    form_template_id?: IntNullableFilter<"DocumentType"> | number | null
  }

  export type FormFieldCreateWithoutField_optionsInput = {
    field_id: string
    field_name: string
    field_type: string
    label: string
    placeholder?: string | null
    required?: boolean
    is_hidden?: boolean
    order?: number
    full_width?: boolean
    display_conditions?: NullableJsonNullValueInput | InputJsonValue
    validation_rules?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
    form_template: FormTemplateCreateNestedOneWithoutForm_fieldsInput
  }

  export type FormFieldUncheckedCreateWithoutField_optionsInput = {
    id?: number
    template_id: number
    field_id: string
    field_name: string
    field_type: string
    label: string
    placeholder?: string | null
    required?: boolean
    is_hidden?: boolean
    order?: number
    full_width?: boolean
    display_conditions?: NullableJsonNullValueInput | InputJsonValue
    validation_rules?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FormFieldCreateOrConnectWithoutField_optionsInput = {
    where: FormFieldWhereUniqueInput
    create: XOR<FormFieldCreateWithoutField_optionsInput, FormFieldUncheckedCreateWithoutField_optionsInput>
  }

  export type FormFieldUpsertWithoutField_optionsInput = {
    update: XOR<FormFieldUpdateWithoutField_optionsInput, FormFieldUncheckedUpdateWithoutField_optionsInput>
    create: XOR<FormFieldCreateWithoutField_optionsInput, FormFieldUncheckedCreateWithoutField_optionsInput>
    where?: FormFieldWhereInput
  }

  export type FormFieldUpdateToOneWithWhereWithoutField_optionsInput = {
    where?: FormFieldWhereInput
    data: XOR<FormFieldUpdateWithoutField_optionsInput, FormFieldUncheckedUpdateWithoutField_optionsInput>
  }

  export type FormFieldUpdateWithoutField_optionsInput = {
    field_id?: StringFieldUpdateOperationsInput | string
    field_name?: StringFieldUpdateOperationsInput | string
    field_type?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    is_hidden?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    full_width?: BoolFieldUpdateOperationsInput | boolean
    display_conditions?: NullableJsonNullValueInput | InputJsonValue
    validation_rules?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    form_template?: FormTemplateUpdateOneRequiredWithoutForm_fieldsNestedInput
  }

  export type FormFieldUncheckedUpdateWithoutField_optionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    template_id?: IntFieldUpdateOperationsInput | number
    field_id?: StringFieldUpdateOperationsInput | string
    field_name?: StringFieldUpdateOperationsInput | string
    field_type?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    is_hidden?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    full_width?: BoolFieldUpdateOperationsInput | boolean
    display_conditions?: NullableJsonNullValueInput | InputJsonValue
    validation_rules?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentTypeCreateWithoutLocationsInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    formId?: string | null
    hideHeader?: boolean
    showFormButtons?: boolean
    parent_type_id?: string | null
    parent_name?: string | null
    child_type_id?: string | null
    child_name?: string | null
    documentTitles?: DocumentTitleCreateNestedManyWithoutDocument_typesInput
    documentConfigurations?: DocumentConfigurationCreateNestedManyWithoutDocumentTypeInput
    document_fields?: document_fieldsCreateNestedManyWithoutDocument_typesInput
    form_template?: FormTemplateCreateNestedOneWithoutDocument_typesInput
  }

  export type DocumentTypeUncheckedCreateWithoutLocationsInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    formId?: string | null
    hideHeader?: boolean
    showFormButtons?: boolean
    parent_type_id?: string | null
    parent_name?: string | null
    child_type_id?: string | null
    child_name?: string | null
    form_template_id?: number | null
    documentTitles?: DocumentTitleUncheckedCreateNestedManyWithoutDocument_typesInput
    documentConfigurations?: DocumentConfigurationUncheckedCreateNestedManyWithoutDocumentTypeInput
    document_fields?: document_fieldsUncheckedCreateNestedManyWithoutDocument_typesInput
  }

  export type DocumentTypeCreateOrConnectWithoutLocationsInput = {
    where: DocumentTypeWhereUniqueInput
    create: XOR<DocumentTypeCreateWithoutLocationsInput, DocumentTypeUncheckedCreateWithoutLocationsInput>
  }

  export type DocumentTypeUpsertWithoutLocationsInput = {
    update: XOR<DocumentTypeUpdateWithoutLocationsInput, DocumentTypeUncheckedUpdateWithoutLocationsInput>
    create: XOR<DocumentTypeCreateWithoutLocationsInput, DocumentTypeUncheckedCreateWithoutLocationsInput>
    where?: DocumentTypeWhereInput
  }

  export type DocumentTypeUpdateToOneWithWhereWithoutLocationsInput = {
    where?: DocumentTypeWhereInput
    data: XOR<DocumentTypeUpdateWithoutLocationsInput, DocumentTypeUncheckedUpdateWithoutLocationsInput>
  }

  export type DocumentTypeUpdateWithoutLocationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formId?: NullableStringFieldUpdateOperationsInput | string | null
    hideHeader?: BoolFieldUpdateOperationsInput | boolean
    showFormButtons?: BoolFieldUpdateOperationsInput | boolean
    parent_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent_name?: NullableStringFieldUpdateOperationsInput | string | null
    child_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    child_name?: NullableStringFieldUpdateOperationsInput | string | null
    documentTitles?: DocumentTitleUpdateManyWithoutDocument_typesNestedInput
    documentConfigurations?: DocumentConfigurationUpdateManyWithoutDocumentTypeNestedInput
    document_fields?: document_fieldsUpdateManyWithoutDocument_typesNestedInput
    form_template?: FormTemplateUpdateOneWithoutDocument_typesNestedInput
  }

  export type DocumentTypeUncheckedUpdateWithoutLocationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formId?: NullableStringFieldUpdateOperationsInput | string | null
    hideHeader?: BoolFieldUpdateOperationsInput | boolean
    showFormButtons?: BoolFieldUpdateOperationsInput | boolean
    parent_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent_name?: NullableStringFieldUpdateOperationsInput | string | null
    child_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    child_name?: NullableStringFieldUpdateOperationsInput | string | null
    form_template_id?: NullableIntFieldUpdateOperationsInput | number | null
    documentTitles?: DocumentTitleUncheckedUpdateManyWithoutDocument_typesNestedInput
    documentConfigurations?: DocumentConfigurationUncheckedUpdateManyWithoutDocumentTypeNestedInput
    document_fields?: document_fieldsUncheckedUpdateManyWithoutDocument_typesNestedInput
  }

  export type DocumentTitleCreateManyDocument_typesInput = {
    id?: number
    title: string
    created_at?: Date | string
    updated_at: Date | string
    shareable?: boolean
    is_display?: boolean
    require_number?: boolean
    require_valid_date?: boolean
    require_expire_date?: boolean
    require_doc_data?: boolean
    doc_data_options?: NullableJsonNullValueInput | InputJsonValue
    doc_data_name?: string | null
    require_attachment_front?: boolean
    require_attachment_back?: boolean
    description?: string | null
    form_description?: string | null
    form_title?: string | null
  }

  export type DocumentConfigurationCreateManyDocumentTypeInput = {
    id?: number
    regionId: number
    documentTitleId: number
    typeOfCondition?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    priority?: number
    customFields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type document_fieldsCreateManyDocument_typesInput = {
    id?: number
    field_id: string
    name: string
    label: string
    type: string
    placeholder?: string | null
    required?: boolean
    order: number
    full_width?: boolean
    hidden?: boolean
    default_value?: string | null
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    conditional_display?: NullableJsonNullValueInput | InputJsonValue
    help_text?: string | null
    document_title_id?: number | null
    created_at?: Date | string
    updated_at: Date | string
  }

  export type DocumentTypeLocationCreateManyDocument_typeInput = {
    id?: number
    location_id: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DocumentTitleUpdateWithoutDocument_typesInput = {
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shareable?: BoolFieldUpdateOperationsInput | boolean
    is_display?: BoolFieldUpdateOperationsInput | boolean
    require_number?: BoolFieldUpdateOperationsInput | boolean
    require_valid_date?: BoolFieldUpdateOperationsInput | boolean
    require_expire_date?: BoolFieldUpdateOperationsInput | boolean
    require_doc_data?: BoolFieldUpdateOperationsInput | boolean
    doc_data_options?: NullableJsonNullValueInput | InputJsonValue
    doc_data_name?: NullableStringFieldUpdateOperationsInput | string | null
    require_attachment_front?: BoolFieldUpdateOperationsInput | boolean
    require_attachment_back?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    form_description?: NullableStringFieldUpdateOperationsInput | string | null
    form_title?: NullableStringFieldUpdateOperationsInput | string | null
    documentConfigurations?: DocumentConfigurationUpdateManyWithoutDocumentTitleNestedInput
    document_fields?: document_fieldsUpdateManyWithoutDocument_titlesNestedInput
  }

  export type DocumentTitleUncheckedUpdateWithoutDocument_typesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shareable?: BoolFieldUpdateOperationsInput | boolean
    is_display?: BoolFieldUpdateOperationsInput | boolean
    require_number?: BoolFieldUpdateOperationsInput | boolean
    require_valid_date?: BoolFieldUpdateOperationsInput | boolean
    require_expire_date?: BoolFieldUpdateOperationsInput | boolean
    require_doc_data?: BoolFieldUpdateOperationsInput | boolean
    doc_data_options?: NullableJsonNullValueInput | InputJsonValue
    doc_data_name?: NullableStringFieldUpdateOperationsInput | string | null
    require_attachment_front?: BoolFieldUpdateOperationsInput | boolean
    require_attachment_back?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    form_description?: NullableStringFieldUpdateOperationsInput | string | null
    form_title?: NullableStringFieldUpdateOperationsInput | string | null
    documentConfigurations?: DocumentConfigurationUncheckedUpdateManyWithoutDocumentTitleNestedInput
    document_fields?: document_fieldsUncheckedUpdateManyWithoutDocument_titlesNestedInput
  }

  export type DocumentTitleUncheckedUpdateManyWithoutDocument_typesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    shareable?: BoolFieldUpdateOperationsInput | boolean
    is_display?: BoolFieldUpdateOperationsInput | boolean
    require_number?: BoolFieldUpdateOperationsInput | boolean
    require_valid_date?: BoolFieldUpdateOperationsInput | boolean
    require_expire_date?: BoolFieldUpdateOperationsInput | boolean
    require_doc_data?: BoolFieldUpdateOperationsInput | boolean
    doc_data_options?: NullableJsonNullValueInput | InputJsonValue
    doc_data_name?: NullableStringFieldUpdateOperationsInput | string | null
    require_attachment_front?: BoolFieldUpdateOperationsInput | boolean
    require_attachment_back?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    form_description?: NullableStringFieldUpdateOperationsInput | string | null
    form_title?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentConfigurationUpdateWithoutDocumentTypeInput = {
    typeOfCondition?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
    customFields?: NullableJsonNullValueInput | InputJsonValue
    documentTitle?: DocumentTitleUpdateOneRequiredWithoutDocumentConfigurationsNestedInput
    region?: RegionUpdateOneRequiredWithoutDocumentConfigurationsNestedInput
  }

  export type DocumentConfigurationUncheckedUpdateWithoutDocumentTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    regionId?: IntFieldUpdateOperationsInput | number
    documentTitleId?: IntFieldUpdateOperationsInput | number
    typeOfCondition?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
    customFields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DocumentConfigurationUncheckedUpdateManyWithoutDocumentTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    regionId?: IntFieldUpdateOperationsInput | number
    documentTitleId?: IntFieldUpdateOperationsInput | number
    typeOfCondition?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
    customFields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type document_fieldsUpdateWithoutDocument_typesInput = {
    field_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    full_width?: BoolFieldUpdateOperationsInput | boolean
    hidden?: BoolFieldUpdateOperationsInput | boolean
    default_value?: NullableStringFieldUpdateOperationsInput | string | null
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    conditional_display?: NullableJsonNullValueInput | InputJsonValue
    help_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    document_titles?: DocumentTitleUpdateOneWithoutDocument_fieldsNestedInput
  }

  export type document_fieldsUncheckedUpdateWithoutDocument_typesInput = {
    id?: IntFieldUpdateOperationsInput | number
    field_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    full_width?: BoolFieldUpdateOperationsInput | boolean
    hidden?: BoolFieldUpdateOperationsInput | boolean
    default_value?: NullableStringFieldUpdateOperationsInput | string | null
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    conditional_display?: NullableJsonNullValueInput | InputJsonValue
    help_text?: NullableStringFieldUpdateOperationsInput | string | null
    document_title_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type document_fieldsUncheckedUpdateManyWithoutDocument_typesInput = {
    id?: IntFieldUpdateOperationsInput | number
    field_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    full_width?: BoolFieldUpdateOperationsInput | boolean
    hidden?: BoolFieldUpdateOperationsInput | boolean
    default_value?: NullableStringFieldUpdateOperationsInput | string | null
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    conditional_display?: NullableJsonNullValueInput | InputJsonValue
    help_text?: NullableStringFieldUpdateOperationsInput | string | null
    document_title_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentTypeLocationUpdateWithoutDocument_typeInput = {
    location_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentTypeLocationUncheckedUpdateWithoutDocument_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    location_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentTypeLocationUncheckedUpdateManyWithoutDocument_typeInput = {
    id?: IntFieldUpdateOperationsInput | number
    location_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentConfigurationCreateManyDocumentTitleInput = {
    id?: number
    regionId: number
    documentTypeId: number
    typeOfCondition?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    priority?: number
    customFields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type document_fieldsCreateManyDocument_titlesInput = {
    id?: number
    field_id: string
    name: string
    label: string
    type: string
    placeholder?: string | null
    required?: boolean
    order: number
    full_width?: boolean
    hidden?: boolean
    default_value?: string | null
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    conditional_display?: NullableJsonNullValueInput | InputJsonValue
    help_text?: string | null
    document_type_id: number
    created_at?: Date | string
    updated_at: Date | string
  }

  export type DocumentConfigurationUpdateWithoutDocumentTitleInput = {
    typeOfCondition?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
    customFields?: NullableJsonNullValueInput | InputJsonValue
    documentType?: DocumentTypeUpdateOneRequiredWithoutDocumentConfigurationsNestedInput
    region?: RegionUpdateOneRequiredWithoutDocumentConfigurationsNestedInput
  }

  export type DocumentConfigurationUncheckedUpdateWithoutDocumentTitleInput = {
    id?: IntFieldUpdateOperationsInput | number
    regionId?: IntFieldUpdateOperationsInput | number
    documentTypeId?: IntFieldUpdateOperationsInput | number
    typeOfCondition?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
    customFields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DocumentConfigurationUncheckedUpdateManyWithoutDocumentTitleInput = {
    id?: IntFieldUpdateOperationsInput | number
    regionId?: IntFieldUpdateOperationsInput | number
    documentTypeId?: IntFieldUpdateOperationsInput | number
    typeOfCondition?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
    customFields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type document_fieldsUpdateWithoutDocument_titlesInput = {
    field_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    full_width?: BoolFieldUpdateOperationsInput | boolean
    hidden?: BoolFieldUpdateOperationsInput | boolean
    default_value?: NullableStringFieldUpdateOperationsInput | string | null
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    conditional_display?: NullableJsonNullValueInput | InputJsonValue
    help_text?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    document_types?: DocumentTypeUpdateOneRequiredWithoutDocument_fieldsNestedInput
  }

  export type document_fieldsUncheckedUpdateWithoutDocument_titlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    field_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    full_width?: BoolFieldUpdateOperationsInput | boolean
    hidden?: BoolFieldUpdateOperationsInput | boolean
    default_value?: NullableStringFieldUpdateOperationsInput | string | null
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    conditional_display?: NullableJsonNullValueInput | InputJsonValue
    help_text?: NullableStringFieldUpdateOperationsInput | string | null
    document_type_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type document_fieldsUncheckedUpdateManyWithoutDocument_titlesInput = {
    id?: IntFieldUpdateOperationsInput | number
    field_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    full_width?: BoolFieldUpdateOperationsInput | boolean
    hidden?: BoolFieldUpdateOperationsInput | boolean
    default_value?: NullableStringFieldUpdateOperationsInput | string | null
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    conditional_display?: NullableJsonNullValueInput | InputJsonValue
    help_text?: NullableStringFieldUpdateOperationsInput | string | null
    document_type_id?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldOptionCreateManyForm_fieldInput = {
    id?: number
    option_value: string
    option_label: string
    order?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type FieldOptionUpdateWithoutForm_fieldInput = {
    option_value?: StringFieldUpdateOperationsInput | string
    option_label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldOptionUncheckedUpdateWithoutForm_fieldInput = {
    id?: IntFieldUpdateOperationsInput | number
    option_value?: StringFieldUpdateOperationsInput | string
    option_label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldOptionUncheckedUpdateManyWithoutForm_fieldInput = {
    id?: IntFieldUpdateOperationsInput | number
    option_value?: StringFieldUpdateOperationsInput | string
    option_label?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentConfigurationCreateManyRegionInput = {
    id?: number
    documentTypeId: number
    documentTitleId: number
    typeOfCondition?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    active?: boolean
    priority?: number
    customFields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DocumentConfigurationUpdateWithoutRegionInput = {
    typeOfCondition?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
    customFields?: NullableJsonNullValueInput | InputJsonValue
    documentTitle?: DocumentTitleUpdateOneRequiredWithoutDocumentConfigurationsNestedInput
    documentType?: DocumentTypeUpdateOneRequiredWithoutDocumentConfigurationsNestedInput
  }

  export type DocumentConfigurationUncheckedUpdateWithoutRegionInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentTypeId?: IntFieldUpdateOperationsInput | number
    documentTitleId?: IntFieldUpdateOperationsInput | number
    typeOfCondition?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
    customFields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type DocumentConfigurationUncheckedUpdateManyWithoutRegionInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentTypeId?: IntFieldUpdateOperationsInput | number
    documentTitleId?: IntFieldUpdateOperationsInput | number
    typeOfCondition?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    priority?: IntFieldUpdateOperationsInput | number
    customFields?: NullableJsonNullValueInput | InputJsonValue
  }

  export type FormFieldCreateManyForm_templateInput = {
    id?: number
    field_id: string
    field_name: string
    field_type: string
    label: string
    placeholder?: string | null
    required?: boolean
    is_hidden?: boolean
    order?: number
    full_width?: boolean
    display_conditions?: NullableJsonNullValueInput | InputJsonValue
    validation_rules?: NullableJsonNullValueInput | InputJsonValue
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type DocumentTypeCreateManyForm_templateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    formId?: string | null
    hideHeader?: boolean
    showFormButtons?: boolean
    parent_type_id?: string | null
    parent_name?: string | null
    child_type_id?: string | null
    child_name?: string | null
  }

  export type FormFieldUpdateWithoutForm_templateInput = {
    field_id?: StringFieldUpdateOperationsInput | string
    field_name?: StringFieldUpdateOperationsInput | string
    field_type?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    is_hidden?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    full_width?: BoolFieldUpdateOperationsInput | boolean
    display_conditions?: NullableJsonNullValueInput | InputJsonValue
    validation_rules?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    field_options?: FieldOptionUpdateManyWithoutForm_fieldNestedInput
  }

  export type FormFieldUncheckedUpdateWithoutForm_templateInput = {
    id?: IntFieldUpdateOperationsInput | number
    field_id?: StringFieldUpdateOperationsInput | string
    field_name?: StringFieldUpdateOperationsInput | string
    field_type?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    is_hidden?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    full_width?: BoolFieldUpdateOperationsInput | boolean
    display_conditions?: NullableJsonNullValueInput | InputJsonValue
    validation_rules?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    field_options?: FieldOptionUncheckedUpdateManyWithoutForm_fieldNestedInput
  }

  export type FormFieldUncheckedUpdateManyWithoutForm_templateInput = {
    id?: IntFieldUpdateOperationsInput | number
    field_id?: StringFieldUpdateOperationsInput | string
    field_name?: StringFieldUpdateOperationsInput | string
    field_type?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    is_hidden?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    full_width?: BoolFieldUpdateOperationsInput | boolean
    display_conditions?: NullableJsonNullValueInput | InputJsonValue
    validation_rules?: NullableJsonNullValueInput | InputJsonValue
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentTypeUpdateWithoutForm_templateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formId?: NullableStringFieldUpdateOperationsInput | string | null
    hideHeader?: BoolFieldUpdateOperationsInput | boolean
    showFormButtons?: BoolFieldUpdateOperationsInput | boolean
    parent_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent_name?: NullableStringFieldUpdateOperationsInput | string | null
    child_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    child_name?: NullableStringFieldUpdateOperationsInput | string | null
    documentTitles?: DocumentTitleUpdateManyWithoutDocument_typesNestedInput
    documentConfigurations?: DocumentConfigurationUpdateManyWithoutDocumentTypeNestedInput
    document_fields?: document_fieldsUpdateManyWithoutDocument_typesNestedInput
    locations?: DocumentTypeLocationUpdateManyWithoutDocument_typeNestedInput
  }

  export type DocumentTypeUncheckedUpdateWithoutForm_templateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formId?: NullableStringFieldUpdateOperationsInput | string | null
    hideHeader?: BoolFieldUpdateOperationsInput | boolean
    showFormButtons?: BoolFieldUpdateOperationsInput | boolean
    parent_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent_name?: NullableStringFieldUpdateOperationsInput | string | null
    child_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    child_name?: NullableStringFieldUpdateOperationsInput | string | null
    documentTitles?: DocumentTitleUncheckedUpdateManyWithoutDocument_typesNestedInput
    documentConfigurations?: DocumentConfigurationUncheckedUpdateManyWithoutDocumentTypeNestedInput
    document_fields?: document_fieldsUncheckedUpdateManyWithoutDocument_typesNestedInput
    locations?: DocumentTypeLocationUncheckedUpdateManyWithoutDocument_typeNestedInput
  }

  export type DocumentTypeUncheckedUpdateManyWithoutForm_templateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formId?: NullableStringFieldUpdateOperationsInput | string | null
    hideHeader?: BoolFieldUpdateOperationsInput | boolean
    showFormButtons?: BoolFieldUpdateOperationsInput | boolean
    parent_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    parent_name?: NullableStringFieldUpdateOperationsInput | string | null
    child_type_id?: NullableStringFieldUpdateOperationsInput | string | null
    child_name?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}