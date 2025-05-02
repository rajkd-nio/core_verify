
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
    document_fields: 'document_fields'
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
      modelProps: "documentType" | "documentTitle" | "formField" | "documentConfiguration" | "region" | "document_fields"
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
    documentConfigurations: number
    document_fields: number
    documentTitles: number
  }

  export type DocumentTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentConfigurations?: boolean | DocumentTypeCountOutputTypeCountDocumentConfigurationsArgs
    document_fields?: boolean | DocumentTypeCountOutputTypeCountDocument_fieldsArgs
    documentTitles?: boolean | DocumentTypeCountOutputTypeCountDocumentTitlesArgs
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
  export type DocumentTypeCountOutputTypeCountDocumentTitlesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentTitleWhereInput
  }


  /**
   * Count Type DocumentTitleCountOutputType
   */

  export type DocumentTitleCountOutputType = {
    documentConfigurations: number
    document_fields: number
    formFieldEntries: number
  }

  export type DocumentTitleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentConfigurations?: boolean | DocumentTitleCountOutputTypeCountDocumentConfigurationsArgs
    document_fields?: boolean | DocumentTitleCountOutputTypeCountDocument_fieldsArgs
    formFieldEntries?: boolean | DocumentTitleCountOutputTypeCountFormFieldEntriesArgs
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
   * DocumentTitleCountOutputType without action
   */
  export type DocumentTitleCountOutputTypeCountFormFieldEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FormFieldWhereInput
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
  }

  export type DocumentTypeSumAggregateOutputType = {
    id: number | null
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
    _all: number
  }


  export type DocumentTypeAvgAggregateInputType = {
    id?: true
  }

  export type DocumentTypeSumAggregateInputType = {
    id?: true
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
    documentConfigurations?: boolean | DocumentType$documentConfigurationsArgs<ExtArgs>
    document_fields?: boolean | DocumentType$document_fieldsArgs<ExtArgs>
    documentTitles?: boolean | DocumentType$documentTitlesArgs<ExtArgs>
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
  }

  export type DocumentTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "description" | "formId" | "hideHeader" | "showFormButtons", ExtArgs["result"]["documentType"]>
  export type DocumentTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentConfigurations?: boolean | DocumentType$documentConfigurationsArgs<ExtArgs>
    document_fields?: boolean | DocumentType$document_fieldsArgs<ExtArgs>
    documentTitles?: boolean | DocumentType$documentTitlesArgs<ExtArgs>
    _count?: boolean | DocumentTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DocumentTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DocumentTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DocumentTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentType"
    objects: {
      documentConfigurations: Prisma.$DocumentConfigurationPayload<ExtArgs>[]
      document_fields: Prisma.$document_fieldsPayload<ExtArgs>[]
      documentTitles: Prisma.$DocumentTitlePayload<ExtArgs>[]
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
    documentConfigurations<T extends DocumentType$documentConfigurationsArgs<ExtArgs> = {}>(args?: Subset<T, DocumentType$documentConfigurationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentConfigurationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    document_fields<T extends DocumentType$document_fieldsArgs<ExtArgs> = {}>(args?: Subset<T, DocumentType$document_fieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$document_fieldsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documentTitles<T extends DocumentType$documentTitlesArgs<ExtArgs> = {}>(args?: Subset<T, DocumentType$documentTitlesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentTitlePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    documentTypeId: number | null
  }

  export type DocumentTitleSumAggregateOutputType = {
    id: number | null
    documentTypeId: number | null
  }

  export type DocumentTitleMinAggregateOutputType = {
    id: number | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    shareable: boolean | null
    documentTypeId: number | null
    isDisplay: boolean | null
    requireNumber: boolean | null
    requireValidDate: boolean | null
    requireExpireDate: boolean | null
    requireDocData: boolean | null
    docDataName: string | null
    requireAttachmentFront: boolean | null
    requireAttachmentBack: boolean | null
    description: string | null
    formDescription: string | null
    formTitle: string | null
  }

  export type DocumentTitleMaxAggregateOutputType = {
    id: number | null
    title: string | null
    createdAt: Date | null
    updatedAt: Date | null
    shareable: boolean | null
    documentTypeId: number | null
    isDisplay: boolean | null
    requireNumber: boolean | null
    requireValidDate: boolean | null
    requireExpireDate: boolean | null
    requireDocData: boolean | null
    docDataName: string | null
    requireAttachmentFront: boolean | null
    requireAttachmentBack: boolean | null
    description: string | null
    formDescription: string | null
    formTitle: string | null
  }

  export type DocumentTitleCountAggregateOutputType = {
    id: number
    title: number
    createdAt: number
    updatedAt: number
    shareable: number
    documentTypeId: number
    isDisplay: number
    requireNumber: number
    requireValidDate: number
    requireExpireDate: number
    requireDocData: number
    docDataOptions: number
    docDataName: number
    requireAttachmentFront: number
    requireAttachmentBack: number
    description: number
    formDescription: number
    formTitle: number
    _all: number
  }


  export type DocumentTitleAvgAggregateInputType = {
    id?: true
    documentTypeId?: true
  }

  export type DocumentTitleSumAggregateInputType = {
    id?: true
    documentTypeId?: true
  }

  export type DocumentTitleMinAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    shareable?: true
    documentTypeId?: true
    isDisplay?: true
    requireNumber?: true
    requireValidDate?: true
    requireExpireDate?: true
    requireDocData?: true
    docDataName?: true
    requireAttachmentFront?: true
    requireAttachmentBack?: true
    description?: true
    formDescription?: true
    formTitle?: true
  }

  export type DocumentTitleMaxAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    shareable?: true
    documentTypeId?: true
    isDisplay?: true
    requireNumber?: true
    requireValidDate?: true
    requireExpireDate?: true
    requireDocData?: true
    docDataName?: true
    requireAttachmentFront?: true
    requireAttachmentBack?: true
    description?: true
    formDescription?: true
    formTitle?: true
  }

  export type DocumentTitleCountAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    updatedAt?: true
    shareable?: true
    documentTypeId?: true
    isDisplay?: true
    requireNumber?: true
    requireValidDate?: true
    requireExpireDate?: true
    requireDocData?: true
    docDataOptions?: true
    docDataName?: true
    requireAttachmentFront?: true
    requireAttachmentBack?: true
    description?: true
    formDescription?: true
    formTitle?: true
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
    createdAt: Date
    updatedAt: Date
    shareable: boolean
    documentTypeId: number
    isDisplay: boolean
    requireNumber: boolean
    requireValidDate: boolean
    requireExpireDate: boolean
    requireDocData: boolean
    docDataOptions: JsonValue | null
    docDataName: string | null
    requireAttachmentFront: boolean
    requireAttachmentBack: boolean
    description: string | null
    formDescription: string | null
    formTitle: string | null
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
    createdAt?: boolean
    updatedAt?: boolean
    shareable?: boolean
    documentTypeId?: boolean
    isDisplay?: boolean
    requireNumber?: boolean
    requireValidDate?: boolean
    requireExpireDate?: boolean
    requireDocData?: boolean
    docDataOptions?: boolean
    docDataName?: boolean
    requireAttachmentFront?: boolean
    requireAttachmentBack?: boolean
    description?: boolean
    formDescription?: boolean
    formTitle?: boolean
    documentConfigurations?: boolean | DocumentTitle$documentConfigurationsArgs<ExtArgs>
    document_fields?: boolean | DocumentTitle$document_fieldsArgs<ExtArgs>
    documentType?: boolean | DocumentTypeDefaultArgs<ExtArgs>
    formFieldEntries?: boolean | DocumentTitle$formFieldEntriesArgs<ExtArgs>
    _count?: boolean | DocumentTitleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentTitle"]>

  export type DocumentTitleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shareable?: boolean
    documentTypeId?: boolean
    isDisplay?: boolean
    requireNumber?: boolean
    requireValidDate?: boolean
    requireExpireDate?: boolean
    requireDocData?: boolean
    docDataOptions?: boolean
    docDataName?: boolean
    requireAttachmentFront?: boolean
    requireAttachmentBack?: boolean
    description?: boolean
    formDescription?: boolean
    formTitle?: boolean
    documentType?: boolean | DocumentTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentTitle"]>

  export type DocumentTitleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shareable?: boolean
    documentTypeId?: boolean
    isDisplay?: boolean
    requireNumber?: boolean
    requireValidDate?: boolean
    requireExpireDate?: boolean
    requireDocData?: boolean
    docDataOptions?: boolean
    docDataName?: boolean
    requireAttachmentFront?: boolean
    requireAttachmentBack?: boolean
    description?: boolean
    formDescription?: boolean
    formTitle?: boolean
    documentType?: boolean | DocumentTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentTitle"]>

  export type DocumentTitleSelectScalar = {
    id?: boolean
    title?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shareable?: boolean
    documentTypeId?: boolean
    isDisplay?: boolean
    requireNumber?: boolean
    requireValidDate?: boolean
    requireExpireDate?: boolean
    requireDocData?: boolean
    docDataOptions?: boolean
    docDataName?: boolean
    requireAttachmentFront?: boolean
    requireAttachmentBack?: boolean
    description?: boolean
    formDescription?: boolean
    formTitle?: boolean
  }

  export type DocumentTitleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "createdAt" | "updatedAt" | "shareable" | "documentTypeId" | "isDisplay" | "requireNumber" | "requireValidDate" | "requireExpireDate" | "requireDocData" | "docDataOptions" | "docDataName" | "requireAttachmentFront" | "requireAttachmentBack" | "description" | "formDescription" | "formTitle", ExtArgs["result"]["documentTitle"]>
  export type DocumentTitleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentConfigurations?: boolean | DocumentTitle$documentConfigurationsArgs<ExtArgs>
    document_fields?: boolean | DocumentTitle$document_fieldsArgs<ExtArgs>
    documentType?: boolean | DocumentTypeDefaultArgs<ExtArgs>
    formFieldEntries?: boolean | DocumentTitle$formFieldEntriesArgs<ExtArgs>
    _count?: boolean | DocumentTitleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DocumentTitleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentType?: boolean | DocumentTypeDefaultArgs<ExtArgs>
  }
  export type DocumentTitleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentType?: boolean | DocumentTypeDefaultArgs<ExtArgs>
  }

  export type $DocumentTitlePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentTitle"
    objects: {
      documentConfigurations: Prisma.$DocumentConfigurationPayload<ExtArgs>[]
      document_fields: Prisma.$document_fieldsPayload<ExtArgs>[]
      documentType: Prisma.$DocumentTypePayload<ExtArgs>
      formFieldEntries: Prisma.$FormFieldPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      createdAt: Date
      updatedAt: Date
      shareable: boolean
      documentTypeId: number
      isDisplay: boolean
      requireNumber: boolean
      requireValidDate: boolean
      requireExpireDate: boolean
      requireDocData: boolean
      docDataOptions: Prisma.JsonValue | null
      docDataName: string | null
      requireAttachmentFront: boolean
      requireAttachmentBack: boolean
      description: string | null
      formDescription: string | null
      formTitle: string | null
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
    documentConfigurations<T extends DocumentTitle$documentConfigurationsArgs<ExtArgs> = {}>(args?: Subset<T, DocumentTitle$documentConfigurationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentConfigurationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    document_fields<T extends DocumentTitle$document_fieldsArgs<ExtArgs> = {}>(args?: Subset<T, DocumentTitle$document_fieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$document_fieldsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documentType<T extends DocumentTypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentTypeDefaultArgs<ExtArgs>>): Prisma__DocumentTypeClient<$Result.GetResult<Prisma.$DocumentTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    formFieldEntries<T extends DocumentTitle$formFieldEntriesArgs<ExtArgs> = {}>(args?: Subset<T, DocumentTitle$formFieldEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FormFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly createdAt: FieldRef<"DocumentTitle", 'DateTime'>
    readonly updatedAt: FieldRef<"DocumentTitle", 'DateTime'>
    readonly shareable: FieldRef<"DocumentTitle", 'Boolean'>
    readonly documentTypeId: FieldRef<"DocumentTitle", 'Int'>
    readonly isDisplay: FieldRef<"DocumentTitle", 'Boolean'>
    readonly requireNumber: FieldRef<"DocumentTitle", 'Boolean'>
    readonly requireValidDate: FieldRef<"DocumentTitle", 'Boolean'>
    readonly requireExpireDate: FieldRef<"DocumentTitle", 'Boolean'>
    readonly requireDocData: FieldRef<"DocumentTitle", 'Boolean'>
    readonly docDataOptions: FieldRef<"DocumentTitle", 'Json'>
    readonly docDataName: FieldRef<"DocumentTitle", 'String'>
    readonly requireAttachmentFront: FieldRef<"DocumentTitle", 'Boolean'>
    readonly requireAttachmentBack: FieldRef<"DocumentTitle", 'Boolean'>
    readonly description: FieldRef<"DocumentTitle", 'String'>
    readonly formDescription: FieldRef<"DocumentTitle", 'String'>
    readonly formTitle: FieldRef<"DocumentTitle", 'String'>
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
   * DocumentTitle.formFieldEntries
   */
  export type DocumentTitle$formFieldEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    documentTitleId: number | null
    order: number | null
  }

  export type FormFieldSumAggregateOutputType = {
    id: number | null
    documentTitleId: number | null
    order: number | null
  }

  export type FormFieldMinAggregateOutputType = {
    id: number | null
    documentTitleId: number | null
    fieldName: string | null
    label: string | null
    type: string | null
    placeholder: string | null
    required: boolean | null
    order: number | null
    fullWidth: boolean | null
    hidden: boolean | null
    defaultValue: string | null
    helpText: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FormFieldMaxAggregateOutputType = {
    id: number | null
    documentTitleId: number | null
    fieldName: string | null
    label: string | null
    type: string | null
    placeholder: string | null
    required: boolean | null
    order: number | null
    fullWidth: boolean | null
    hidden: boolean | null
    defaultValue: string | null
    helpText: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FormFieldCountAggregateOutputType = {
    id: number
    documentTitleId: number
    fieldName: number
    label: number
    type: number
    placeholder: number
    required: number
    order: number
    fullWidth: number
    hidden: number
    defaultValue: number
    options: number
    validation: number
    conditionalShow: number
    helpText: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FormFieldAvgAggregateInputType = {
    id?: true
    documentTitleId?: true
    order?: true
  }

  export type FormFieldSumAggregateInputType = {
    id?: true
    documentTitleId?: true
    order?: true
  }

  export type FormFieldMinAggregateInputType = {
    id?: true
    documentTitleId?: true
    fieldName?: true
    label?: true
    type?: true
    placeholder?: true
    required?: true
    order?: true
    fullWidth?: true
    hidden?: true
    defaultValue?: true
    helpText?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FormFieldMaxAggregateInputType = {
    id?: true
    documentTitleId?: true
    fieldName?: true
    label?: true
    type?: true
    placeholder?: true
    required?: true
    order?: true
    fullWidth?: true
    hidden?: true
    defaultValue?: true
    helpText?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FormFieldCountAggregateInputType = {
    id?: true
    documentTitleId?: true
    fieldName?: true
    label?: true
    type?: true
    placeholder?: true
    required?: true
    order?: true
    fullWidth?: true
    hidden?: true
    defaultValue?: true
    options?: true
    validation?: true
    conditionalShow?: true
    helpText?: true
    createdAt?: true
    updatedAt?: true
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
    documentTitleId: number
    fieldName: string
    label: string
    type: string
    placeholder: string | null
    required: boolean
    order: number
    fullWidth: boolean
    hidden: boolean
    defaultValue: string | null
    options: JsonValue | null
    validation: JsonValue | null
    conditionalShow: JsonValue | null
    helpText: string | null
    createdAt: Date
    updatedAt: Date
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
    documentTitleId?: boolean
    fieldName?: boolean
    label?: boolean
    type?: boolean
    placeholder?: boolean
    required?: boolean
    order?: boolean
    fullWidth?: boolean
    hidden?: boolean
    defaultValue?: boolean
    options?: boolean
    validation?: boolean
    conditionalShow?: boolean
    helpText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    documentTitle?: boolean | DocumentTitleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formField"]>

  export type FormFieldSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentTitleId?: boolean
    fieldName?: boolean
    label?: boolean
    type?: boolean
    placeholder?: boolean
    required?: boolean
    order?: boolean
    fullWidth?: boolean
    hidden?: boolean
    defaultValue?: boolean
    options?: boolean
    validation?: boolean
    conditionalShow?: boolean
    helpText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    documentTitle?: boolean | DocumentTitleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formField"]>

  export type FormFieldSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentTitleId?: boolean
    fieldName?: boolean
    label?: boolean
    type?: boolean
    placeholder?: boolean
    required?: boolean
    order?: boolean
    fullWidth?: boolean
    hidden?: boolean
    defaultValue?: boolean
    options?: boolean
    validation?: boolean
    conditionalShow?: boolean
    helpText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    documentTitle?: boolean | DocumentTitleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formField"]>

  export type FormFieldSelectScalar = {
    id?: boolean
    documentTitleId?: boolean
    fieldName?: boolean
    label?: boolean
    type?: boolean
    placeholder?: boolean
    required?: boolean
    order?: boolean
    fullWidth?: boolean
    hidden?: boolean
    defaultValue?: boolean
    options?: boolean
    validation?: boolean
    conditionalShow?: boolean
    helpText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FormFieldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentTitleId" | "fieldName" | "label" | "type" | "placeholder" | "required" | "order" | "fullWidth" | "hidden" | "defaultValue" | "options" | "validation" | "conditionalShow" | "helpText" | "createdAt" | "updatedAt", ExtArgs["result"]["formField"]>
  export type FormFieldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentTitle?: boolean | DocumentTitleDefaultArgs<ExtArgs>
  }
  export type FormFieldIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentTitle?: boolean | DocumentTitleDefaultArgs<ExtArgs>
  }
  export type FormFieldIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documentTitle?: boolean | DocumentTitleDefaultArgs<ExtArgs>
  }

  export type $FormFieldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FormField"
    objects: {
      documentTitle: Prisma.$DocumentTitlePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      documentTitleId: number
      fieldName: string
      label: string
      type: string
      placeholder: string | null
      required: boolean
      order: number
      fullWidth: boolean
      hidden: boolean
      defaultValue: string | null
      options: Prisma.JsonValue | null
      validation: Prisma.JsonValue | null
      conditionalShow: Prisma.JsonValue | null
      helpText: string | null
      createdAt: Date
      updatedAt: Date
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
    documentTitle<T extends DocumentTitleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentTitleDefaultArgs<ExtArgs>>): Prisma__DocumentTitleClient<$Result.GetResult<Prisma.$DocumentTitlePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
    readonly documentTitleId: FieldRef<"FormField", 'Int'>
    readonly fieldName: FieldRef<"FormField", 'String'>
    readonly label: FieldRef<"FormField", 'String'>
    readonly type: FieldRef<"FormField", 'String'>
    readonly placeholder: FieldRef<"FormField", 'String'>
    readonly required: FieldRef<"FormField", 'Boolean'>
    readonly order: FieldRef<"FormField", 'Int'>
    readonly fullWidth: FieldRef<"FormField", 'Boolean'>
    readonly hidden: FieldRef<"FormField", 'Boolean'>
    readonly defaultValue: FieldRef<"FormField", 'String'>
    readonly options: FieldRef<"FormField", 'Json'>
    readonly validation: FieldRef<"FormField", 'Json'>
    readonly conditionalShow: FieldRef<"FormField", 'Json'>
    readonly helpText: FieldRef<"FormField", 'String'>
    readonly createdAt: FieldRef<"FormField", 'DateTime'>
    readonly updatedAt: FieldRef<"FormField", 'DateTime'>
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
    showFormButtons: 'showFormButtons'
  };

  export type DocumentTypeScalarFieldEnum = (typeof DocumentTypeScalarFieldEnum)[keyof typeof DocumentTypeScalarFieldEnum]


  export const DocumentTitleScalarFieldEnum: {
    id: 'id',
    title: 'title',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    shareable: 'shareable',
    documentTypeId: 'documentTypeId',
    isDisplay: 'isDisplay',
    requireNumber: 'requireNumber',
    requireValidDate: 'requireValidDate',
    requireExpireDate: 'requireExpireDate',
    requireDocData: 'requireDocData',
    docDataOptions: 'docDataOptions',
    docDataName: 'docDataName',
    requireAttachmentFront: 'requireAttachmentFront',
    requireAttachmentBack: 'requireAttachmentBack',
    description: 'description',
    formDescription: 'formDescription',
    formTitle: 'formTitle'
  };

  export type DocumentTitleScalarFieldEnum = (typeof DocumentTitleScalarFieldEnum)[keyof typeof DocumentTitleScalarFieldEnum]


  export const FormFieldScalarFieldEnum: {
    id: 'id',
    documentTitleId: 'documentTitleId',
    fieldName: 'fieldName',
    label: 'label',
    type: 'type',
    placeholder: 'placeholder',
    required: 'required',
    order: 'order',
    fullWidth: 'fullWidth',
    hidden: 'hidden',
    defaultValue: 'defaultValue',
    options: 'options',
    validation: 'validation',
    conditionalShow: 'conditionalShow',
    helpText: 'helpText',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
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
    documentConfigurations?: DocumentConfigurationListRelationFilter
    document_fields?: Document_fieldsListRelationFilter
    documentTitles?: DocumentTitleListRelationFilter
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
    documentConfigurations?: DocumentConfigurationOrderByRelationAggregateInput
    document_fields?: document_fieldsOrderByRelationAggregateInput
    documentTitles?: DocumentTitleOrderByRelationAggregateInput
  }

  export type DocumentTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: DocumentTypeWhereInput | DocumentTypeWhereInput[]
    OR?: DocumentTypeWhereInput[]
    NOT?: DocumentTypeWhereInput | DocumentTypeWhereInput[]
    createdAt?: DateTimeFilter<"DocumentType"> | Date | string
    updatedAt?: DateTimeFilter<"DocumentType"> | Date | string
    description?: StringNullableFilter<"DocumentType"> | string | null
    formId?: StringNullableFilter<"DocumentType"> | string | null
    hideHeader?: BoolFilter<"DocumentType"> | boolean
    showFormButtons?: BoolFilter<"DocumentType"> | boolean
    documentConfigurations?: DocumentConfigurationListRelationFilter
    document_fields?: Document_fieldsListRelationFilter
    documentTitles?: DocumentTitleListRelationFilter
  }, "id" | "name">

  export type DocumentTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrderInput | SortOrder
    formId?: SortOrderInput | SortOrder
    hideHeader?: SortOrder
    showFormButtons?: SortOrder
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
  }

  export type DocumentTitleWhereInput = {
    AND?: DocumentTitleWhereInput | DocumentTitleWhereInput[]
    OR?: DocumentTitleWhereInput[]
    NOT?: DocumentTitleWhereInput | DocumentTitleWhereInput[]
    id?: IntFilter<"DocumentTitle"> | number
    title?: StringFilter<"DocumentTitle"> | string
    createdAt?: DateTimeFilter<"DocumentTitle"> | Date | string
    updatedAt?: DateTimeFilter<"DocumentTitle"> | Date | string
    shareable?: BoolFilter<"DocumentTitle"> | boolean
    documentTypeId?: IntFilter<"DocumentTitle"> | number
    isDisplay?: BoolFilter<"DocumentTitle"> | boolean
    requireNumber?: BoolFilter<"DocumentTitle"> | boolean
    requireValidDate?: BoolFilter<"DocumentTitle"> | boolean
    requireExpireDate?: BoolFilter<"DocumentTitle"> | boolean
    requireDocData?: BoolFilter<"DocumentTitle"> | boolean
    docDataOptions?: JsonNullableFilter<"DocumentTitle">
    docDataName?: StringNullableFilter<"DocumentTitle"> | string | null
    requireAttachmentFront?: BoolFilter<"DocumentTitle"> | boolean
    requireAttachmentBack?: BoolFilter<"DocumentTitle"> | boolean
    description?: StringNullableFilter<"DocumentTitle"> | string | null
    formDescription?: StringNullableFilter<"DocumentTitle"> | string | null
    formTitle?: StringNullableFilter<"DocumentTitle"> | string | null
    documentConfigurations?: DocumentConfigurationListRelationFilter
    document_fields?: Document_fieldsListRelationFilter
    documentType?: XOR<DocumentTypeScalarRelationFilter, DocumentTypeWhereInput>
    formFieldEntries?: FormFieldListRelationFilter
  }

  export type DocumentTitleOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shareable?: SortOrder
    documentTypeId?: SortOrder
    isDisplay?: SortOrder
    requireNumber?: SortOrder
    requireValidDate?: SortOrder
    requireExpireDate?: SortOrder
    requireDocData?: SortOrder
    docDataOptions?: SortOrderInput | SortOrder
    docDataName?: SortOrderInput | SortOrder
    requireAttachmentFront?: SortOrder
    requireAttachmentBack?: SortOrder
    description?: SortOrderInput | SortOrder
    formDescription?: SortOrderInput | SortOrder
    formTitle?: SortOrderInput | SortOrder
    documentConfigurations?: DocumentConfigurationOrderByRelationAggregateInput
    document_fields?: document_fieldsOrderByRelationAggregateInput
    documentType?: DocumentTypeOrderByWithRelationInput
    formFieldEntries?: FormFieldOrderByRelationAggregateInput
  }

  export type DocumentTitleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DocumentTitleWhereInput | DocumentTitleWhereInput[]
    OR?: DocumentTitleWhereInput[]
    NOT?: DocumentTitleWhereInput | DocumentTitleWhereInput[]
    title?: StringFilter<"DocumentTitle"> | string
    createdAt?: DateTimeFilter<"DocumentTitle"> | Date | string
    updatedAt?: DateTimeFilter<"DocumentTitle"> | Date | string
    shareable?: BoolFilter<"DocumentTitle"> | boolean
    documentTypeId?: IntFilter<"DocumentTitle"> | number
    isDisplay?: BoolFilter<"DocumentTitle"> | boolean
    requireNumber?: BoolFilter<"DocumentTitle"> | boolean
    requireValidDate?: BoolFilter<"DocumentTitle"> | boolean
    requireExpireDate?: BoolFilter<"DocumentTitle"> | boolean
    requireDocData?: BoolFilter<"DocumentTitle"> | boolean
    docDataOptions?: JsonNullableFilter<"DocumentTitle">
    docDataName?: StringNullableFilter<"DocumentTitle"> | string | null
    requireAttachmentFront?: BoolFilter<"DocumentTitle"> | boolean
    requireAttachmentBack?: BoolFilter<"DocumentTitle"> | boolean
    description?: StringNullableFilter<"DocumentTitle"> | string | null
    formDescription?: StringNullableFilter<"DocumentTitle"> | string | null
    formTitle?: StringNullableFilter<"DocumentTitle"> | string | null
    documentConfigurations?: DocumentConfigurationListRelationFilter
    document_fields?: Document_fieldsListRelationFilter
    documentType?: XOR<DocumentTypeScalarRelationFilter, DocumentTypeWhereInput>
    formFieldEntries?: FormFieldListRelationFilter
  }, "id">

  export type DocumentTitleOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shareable?: SortOrder
    documentTypeId?: SortOrder
    isDisplay?: SortOrder
    requireNumber?: SortOrder
    requireValidDate?: SortOrder
    requireExpireDate?: SortOrder
    requireDocData?: SortOrder
    docDataOptions?: SortOrderInput | SortOrder
    docDataName?: SortOrderInput | SortOrder
    requireAttachmentFront?: SortOrder
    requireAttachmentBack?: SortOrder
    description?: SortOrderInput | SortOrder
    formDescription?: SortOrderInput | SortOrder
    formTitle?: SortOrderInput | SortOrder
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
    createdAt?: DateTimeWithAggregatesFilter<"DocumentTitle"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"DocumentTitle"> | Date | string
    shareable?: BoolWithAggregatesFilter<"DocumentTitle"> | boolean
    documentTypeId?: IntWithAggregatesFilter<"DocumentTitle"> | number
    isDisplay?: BoolWithAggregatesFilter<"DocumentTitle"> | boolean
    requireNumber?: BoolWithAggregatesFilter<"DocumentTitle"> | boolean
    requireValidDate?: BoolWithAggregatesFilter<"DocumentTitle"> | boolean
    requireExpireDate?: BoolWithAggregatesFilter<"DocumentTitle"> | boolean
    requireDocData?: BoolWithAggregatesFilter<"DocumentTitle"> | boolean
    docDataOptions?: JsonNullableWithAggregatesFilter<"DocumentTitle">
    docDataName?: StringNullableWithAggregatesFilter<"DocumentTitle"> | string | null
    requireAttachmentFront?: BoolWithAggregatesFilter<"DocumentTitle"> | boolean
    requireAttachmentBack?: BoolWithAggregatesFilter<"DocumentTitle"> | boolean
    description?: StringNullableWithAggregatesFilter<"DocumentTitle"> | string | null
    formDescription?: StringNullableWithAggregatesFilter<"DocumentTitle"> | string | null
    formTitle?: StringNullableWithAggregatesFilter<"DocumentTitle"> | string | null
  }

  export type FormFieldWhereInput = {
    AND?: FormFieldWhereInput | FormFieldWhereInput[]
    OR?: FormFieldWhereInput[]
    NOT?: FormFieldWhereInput | FormFieldWhereInput[]
    id?: IntFilter<"FormField"> | number
    documentTitleId?: IntFilter<"FormField"> | number
    fieldName?: StringFilter<"FormField"> | string
    label?: StringFilter<"FormField"> | string
    type?: StringFilter<"FormField"> | string
    placeholder?: StringNullableFilter<"FormField"> | string | null
    required?: BoolFilter<"FormField"> | boolean
    order?: IntFilter<"FormField"> | number
    fullWidth?: BoolFilter<"FormField"> | boolean
    hidden?: BoolFilter<"FormField"> | boolean
    defaultValue?: StringNullableFilter<"FormField"> | string | null
    options?: JsonNullableFilter<"FormField">
    validation?: JsonNullableFilter<"FormField">
    conditionalShow?: JsonNullableFilter<"FormField">
    helpText?: StringNullableFilter<"FormField"> | string | null
    createdAt?: DateTimeFilter<"FormField"> | Date | string
    updatedAt?: DateTimeFilter<"FormField"> | Date | string
    documentTitle?: XOR<DocumentTitleScalarRelationFilter, DocumentTitleWhereInput>
  }

  export type FormFieldOrderByWithRelationInput = {
    id?: SortOrder
    documentTitleId?: SortOrder
    fieldName?: SortOrder
    label?: SortOrder
    type?: SortOrder
    placeholder?: SortOrderInput | SortOrder
    required?: SortOrder
    order?: SortOrder
    fullWidth?: SortOrder
    hidden?: SortOrder
    defaultValue?: SortOrderInput | SortOrder
    options?: SortOrderInput | SortOrder
    validation?: SortOrderInput | SortOrder
    conditionalShow?: SortOrderInput | SortOrder
    helpText?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    documentTitle?: DocumentTitleOrderByWithRelationInput
  }

  export type FormFieldWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FormFieldWhereInput | FormFieldWhereInput[]
    OR?: FormFieldWhereInput[]
    NOT?: FormFieldWhereInput | FormFieldWhereInput[]
    documentTitleId?: IntFilter<"FormField"> | number
    fieldName?: StringFilter<"FormField"> | string
    label?: StringFilter<"FormField"> | string
    type?: StringFilter<"FormField"> | string
    placeholder?: StringNullableFilter<"FormField"> | string | null
    required?: BoolFilter<"FormField"> | boolean
    order?: IntFilter<"FormField"> | number
    fullWidth?: BoolFilter<"FormField"> | boolean
    hidden?: BoolFilter<"FormField"> | boolean
    defaultValue?: StringNullableFilter<"FormField"> | string | null
    options?: JsonNullableFilter<"FormField">
    validation?: JsonNullableFilter<"FormField">
    conditionalShow?: JsonNullableFilter<"FormField">
    helpText?: StringNullableFilter<"FormField"> | string | null
    createdAt?: DateTimeFilter<"FormField"> | Date | string
    updatedAt?: DateTimeFilter<"FormField"> | Date | string
    documentTitle?: XOR<DocumentTitleScalarRelationFilter, DocumentTitleWhereInput>
  }, "id">

  export type FormFieldOrderByWithAggregationInput = {
    id?: SortOrder
    documentTitleId?: SortOrder
    fieldName?: SortOrder
    label?: SortOrder
    type?: SortOrder
    placeholder?: SortOrderInput | SortOrder
    required?: SortOrder
    order?: SortOrder
    fullWidth?: SortOrder
    hidden?: SortOrder
    defaultValue?: SortOrderInput | SortOrder
    options?: SortOrderInput | SortOrder
    validation?: SortOrderInput | SortOrder
    conditionalShow?: SortOrderInput | SortOrder
    helpText?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    documentTitleId?: IntWithAggregatesFilter<"FormField"> | number
    fieldName?: StringWithAggregatesFilter<"FormField"> | string
    label?: StringWithAggregatesFilter<"FormField"> | string
    type?: StringWithAggregatesFilter<"FormField"> | string
    placeholder?: StringNullableWithAggregatesFilter<"FormField"> | string | null
    required?: BoolWithAggregatesFilter<"FormField"> | boolean
    order?: IntWithAggregatesFilter<"FormField"> | number
    fullWidth?: BoolWithAggregatesFilter<"FormField"> | boolean
    hidden?: BoolWithAggregatesFilter<"FormField"> | boolean
    defaultValue?: StringNullableWithAggregatesFilter<"FormField"> | string | null
    options?: JsonNullableWithAggregatesFilter<"FormField">
    validation?: JsonNullableWithAggregatesFilter<"FormField">
    conditionalShow?: JsonNullableWithAggregatesFilter<"FormField">
    helpText?: StringNullableWithAggregatesFilter<"FormField"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"FormField"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FormField"> | Date | string
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

  export type DocumentTypeCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    formId?: string | null
    hideHeader?: boolean
    showFormButtons?: boolean
    documentConfigurations?: DocumentConfigurationCreateNestedManyWithoutDocumentTypeInput
    document_fields?: document_fieldsCreateNestedManyWithoutDocument_typesInput
    documentTitles?: DocumentTitleCreateNestedManyWithoutDocumentTypeInput
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
    documentConfigurations?: DocumentConfigurationUncheckedCreateNestedManyWithoutDocumentTypeInput
    document_fields?: document_fieldsUncheckedCreateNestedManyWithoutDocument_typesInput
    documentTitles?: DocumentTitleUncheckedCreateNestedManyWithoutDocumentTypeInput
  }

  export type DocumentTypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formId?: NullableStringFieldUpdateOperationsInput | string | null
    hideHeader?: BoolFieldUpdateOperationsInput | boolean
    showFormButtons?: BoolFieldUpdateOperationsInput | boolean
    documentConfigurations?: DocumentConfigurationUpdateManyWithoutDocumentTypeNestedInput
    document_fields?: document_fieldsUpdateManyWithoutDocument_typesNestedInput
    documentTitles?: DocumentTitleUpdateManyWithoutDocumentTypeNestedInput
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
    documentConfigurations?: DocumentConfigurationUncheckedUpdateManyWithoutDocumentTypeNestedInput
    document_fields?: document_fieldsUncheckedUpdateManyWithoutDocument_typesNestedInput
    documentTitles?: DocumentTitleUncheckedUpdateManyWithoutDocumentTypeNestedInput
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
  }

  export type DocumentTypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formId?: NullableStringFieldUpdateOperationsInput | string | null
    hideHeader?: BoolFieldUpdateOperationsInput | boolean
    showFormButtons?: BoolFieldUpdateOperationsInput | boolean
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
  }

  export type DocumentTitleCreateInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shareable?: boolean
    isDisplay?: boolean
    requireNumber?: boolean
    requireValidDate?: boolean
    requireExpireDate?: boolean
    requireDocData?: boolean
    docDataOptions?: NullableJsonNullValueInput | InputJsonValue
    docDataName?: string | null
    requireAttachmentFront?: boolean
    requireAttachmentBack?: boolean
    description?: string | null
    formDescription?: string | null
    formTitle?: string | null
    documentConfigurations?: DocumentConfigurationCreateNestedManyWithoutDocumentTitleInput
    document_fields?: document_fieldsCreateNestedManyWithoutDocument_titlesInput
    documentType: DocumentTypeCreateNestedOneWithoutDocumentTitlesInput
    formFieldEntries?: FormFieldCreateNestedManyWithoutDocumentTitleInput
  }

  export type DocumentTitleUncheckedCreateInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shareable?: boolean
    documentTypeId: number
    isDisplay?: boolean
    requireNumber?: boolean
    requireValidDate?: boolean
    requireExpireDate?: boolean
    requireDocData?: boolean
    docDataOptions?: NullableJsonNullValueInput | InputJsonValue
    docDataName?: string | null
    requireAttachmentFront?: boolean
    requireAttachmentBack?: boolean
    description?: string | null
    formDescription?: string | null
    formTitle?: string | null
    documentConfigurations?: DocumentConfigurationUncheckedCreateNestedManyWithoutDocumentTitleInput
    document_fields?: document_fieldsUncheckedCreateNestedManyWithoutDocument_titlesInput
    formFieldEntries?: FormFieldUncheckedCreateNestedManyWithoutDocumentTitleInput
  }

  export type DocumentTitleUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shareable?: BoolFieldUpdateOperationsInput | boolean
    isDisplay?: BoolFieldUpdateOperationsInput | boolean
    requireNumber?: BoolFieldUpdateOperationsInput | boolean
    requireValidDate?: BoolFieldUpdateOperationsInput | boolean
    requireExpireDate?: BoolFieldUpdateOperationsInput | boolean
    requireDocData?: BoolFieldUpdateOperationsInput | boolean
    docDataOptions?: NullableJsonNullValueInput | InputJsonValue
    docDataName?: NullableStringFieldUpdateOperationsInput | string | null
    requireAttachmentFront?: BoolFieldUpdateOperationsInput | boolean
    requireAttachmentBack?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formDescription?: NullableStringFieldUpdateOperationsInput | string | null
    formTitle?: NullableStringFieldUpdateOperationsInput | string | null
    documentConfigurations?: DocumentConfigurationUpdateManyWithoutDocumentTitleNestedInput
    document_fields?: document_fieldsUpdateManyWithoutDocument_titlesNestedInput
    documentType?: DocumentTypeUpdateOneRequiredWithoutDocumentTitlesNestedInput
    formFieldEntries?: FormFieldUpdateManyWithoutDocumentTitleNestedInput
  }

  export type DocumentTitleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shareable?: BoolFieldUpdateOperationsInput | boolean
    documentTypeId?: IntFieldUpdateOperationsInput | number
    isDisplay?: BoolFieldUpdateOperationsInput | boolean
    requireNumber?: BoolFieldUpdateOperationsInput | boolean
    requireValidDate?: BoolFieldUpdateOperationsInput | boolean
    requireExpireDate?: BoolFieldUpdateOperationsInput | boolean
    requireDocData?: BoolFieldUpdateOperationsInput | boolean
    docDataOptions?: NullableJsonNullValueInput | InputJsonValue
    docDataName?: NullableStringFieldUpdateOperationsInput | string | null
    requireAttachmentFront?: BoolFieldUpdateOperationsInput | boolean
    requireAttachmentBack?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formDescription?: NullableStringFieldUpdateOperationsInput | string | null
    formTitle?: NullableStringFieldUpdateOperationsInput | string | null
    documentConfigurations?: DocumentConfigurationUncheckedUpdateManyWithoutDocumentTitleNestedInput
    document_fields?: document_fieldsUncheckedUpdateManyWithoutDocument_titlesNestedInput
    formFieldEntries?: FormFieldUncheckedUpdateManyWithoutDocumentTitleNestedInput
  }

  export type DocumentTitleCreateManyInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shareable?: boolean
    documentTypeId: number
    isDisplay?: boolean
    requireNumber?: boolean
    requireValidDate?: boolean
    requireExpireDate?: boolean
    requireDocData?: boolean
    docDataOptions?: NullableJsonNullValueInput | InputJsonValue
    docDataName?: string | null
    requireAttachmentFront?: boolean
    requireAttachmentBack?: boolean
    description?: string | null
    formDescription?: string | null
    formTitle?: string | null
  }

  export type DocumentTitleUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shareable?: BoolFieldUpdateOperationsInput | boolean
    isDisplay?: BoolFieldUpdateOperationsInput | boolean
    requireNumber?: BoolFieldUpdateOperationsInput | boolean
    requireValidDate?: BoolFieldUpdateOperationsInput | boolean
    requireExpireDate?: BoolFieldUpdateOperationsInput | boolean
    requireDocData?: BoolFieldUpdateOperationsInput | boolean
    docDataOptions?: NullableJsonNullValueInput | InputJsonValue
    docDataName?: NullableStringFieldUpdateOperationsInput | string | null
    requireAttachmentFront?: BoolFieldUpdateOperationsInput | boolean
    requireAttachmentBack?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formDescription?: NullableStringFieldUpdateOperationsInput | string | null
    formTitle?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DocumentTitleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shareable?: BoolFieldUpdateOperationsInput | boolean
    documentTypeId?: IntFieldUpdateOperationsInput | number
    isDisplay?: BoolFieldUpdateOperationsInput | boolean
    requireNumber?: BoolFieldUpdateOperationsInput | boolean
    requireValidDate?: BoolFieldUpdateOperationsInput | boolean
    requireExpireDate?: BoolFieldUpdateOperationsInput | boolean
    requireDocData?: BoolFieldUpdateOperationsInput | boolean
    docDataOptions?: NullableJsonNullValueInput | InputJsonValue
    docDataName?: NullableStringFieldUpdateOperationsInput | string | null
    requireAttachmentFront?: BoolFieldUpdateOperationsInput | boolean
    requireAttachmentBack?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formDescription?: NullableStringFieldUpdateOperationsInput | string | null
    formTitle?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FormFieldCreateInput = {
    fieldName: string
    label: string
    type: string
    placeholder?: string | null
    required?: boolean
    order?: number
    fullWidth?: boolean
    hidden?: boolean
    defaultValue?: string | null
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    conditionalShow?: NullableJsonNullValueInput | InputJsonValue
    helpText?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    documentTitle: DocumentTitleCreateNestedOneWithoutFormFieldEntriesInput
  }

  export type FormFieldUncheckedCreateInput = {
    id?: number
    documentTitleId: number
    fieldName: string
    label: string
    type: string
    placeholder?: string | null
    required?: boolean
    order?: number
    fullWidth?: boolean
    hidden?: boolean
    defaultValue?: string | null
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    conditionalShow?: NullableJsonNullValueInput | InputJsonValue
    helpText?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormFieldUpdateInput = {
    fieldName?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    fullWidth?: BoolFieldUpdateOperationsInput | boolean
    hidden?: BoolFieldUpdateOperationsInput | boolean
    defaultValue?: NullableStringFieldUpdateOperationsInput | string | null
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    conditionalShow?: NullableJsonNullValueInput | InputJsonValue
    helpText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documentTitle?: DocumentTitleUpdateOneRequiredWithoutFormFieldEntriesNestedInput
  }

  export type FormFieldUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentTitleId?: IntFieldUpdateOperationsInput | number
    fieldName?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    fullWidth?: BoolFieldUpdateOperationsInput | boolean
    hidden?: BoolFieldUpdateOperationsInput | boolean
    defaultValue?: NullableStringFieldUpdateOperationsInput | string | null
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    conditionalShow?: NullableJsonNullValueInput | InputJsonValue
    helpText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormFieldCreateManyInput = {
    id?: number
    documentTitleId: number
    fieldName: string
    label: string
    type: string
    placeholder?: string | null
    required?: boolean
    order?: number
    fullWidth?: boolean
    hidden?: boolean
    defaultValue?: string | null
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    conditionalShow?: NullableJsonNullValueInput | InputJsonValue
    helpText?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormFieldUpdateManyMutationInput = {
    fieldName?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    fullWidth?: BoolFieldUpdateOperationsInput | boolean
    hidden?: BoolFieldUpdateOperationsInput | boolean
    defaultValue?: NullableStringFieldUpdateOperationsInput | string | null
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    conditionalShow?: NullableJsonNullValueInput | InputJsonValue
    helpText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormFieldUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentTitleId?: IntFieldUpdateOperationsInput | number
    fieldName?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    fullWidth?: BoolFieldUpdateOperationsInput | boolean
    hidden?: BoolFieldUpdateOperationsInput | boolean
    defaultValue?: NullableStringFieldUpdateOperationsInput | string | null
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    conditionalShow?: NullableJsonNullValueInput | InputJsonValue
    helpText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type DocumentTitleListRelationFilter = {
    every?: DocumentTitleWhereInput
    some?: DocumentTitleWhereInput
    none?: DocumentTitleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DocumentConfigurationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type document_fieldsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentTitleOrderByRelationAggregateInput = {
    _count?: SortOrder
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
  }

  export type DocumentTypeAvgOrderByAggregateInput = {
    id?: SortOrder
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
  }

  export type DocumentTypeSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type FormFieldListRelationFilter = {
    every?: FormFieldWhereInput
    some?: FormFieldWhereInput
    none?: FormFieldWhereInput
  }

  export type FormFieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentTitleCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shareable?: SortOrder
    documentTypeId?: SortOrder
    isDisplay?: SortOrder
    requireNumber?: SortOrder
    requireValidDate?: SortOrder
    requireExpireDate?: SortOrder
    requireDocData?: SortOrder
    docDataOptions?: SortOrder
    docDataName?: SortOrder
    requireAttachmentFront?: SortOrder
    requireAttachmentBack?: SortOrder
    description?: SortOrder
    formDescription?: SortOrder
    formTitle?: SortOrder
  }

  export type DocumentTitleAvgOrderByAggregateInput = {
    id?: SortOrder
    documentTypeId?: SortOrder
  }

  export type DocumentTitleMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shareable?: SortOrder
    documentTypeId?: SortOrder
    isDisplay?: SortOrder
    requireNumber?: SortOrder
    requireValidDate?: SortOrder
    requireExpireDate?: SortOrder
    requireDocData?: SortOrder
    docDataName?: SortOrder
    requireAttachmentFront?: SortOrder
    requireAttachmentBack?: SortOrder
    description?: SortOrder
    formDescription?: SortOrder
    formTitle?: SortOrder
  }

  export type DocumentTitleMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shareable?: SortOrder
    documentTypeId?: SortOrder
    isDisplay?: SortOrder
    requireNumber?: SortOrder
    requireValidDate?: SortOrder
    requireExpireDate?: SortOrder
    requireDocData?: SortOrder
    docDataName?: SortOrder
    requireAttachmentFront?: SortOrder
    requireAttachmentBack?: SortOrder
    description?: SortOrder
    formDescription?: SortOrder
    formTitle?: SortOrder
  }

  export type DocumentTitleSumOrderByAggregateInput = {
    id?: SortOrder
    documentTypeId?: SortOrder
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

  export type DocumentTitleScalarRelationFilter = {
    is?: DocumentTitleWhereInput
    isNot?: DocumentTitleWhereInput
  }

  export type FormFieldCountOrderByAggregateInput = {
    id?: SortOrder
    documentTitleId?: SortOrder
    fieldName?: SortOrder
    label?: SortOrder
    type?: SortOrder
    placeholder?: SortOrder
    required?: SortOrder
    order?: SortOrder
    fullWidth?: SortOrder
    hidden?: SortOrder
    defaultValue?: SortOrder
    options?: SortOrder
    validation?: SortOrder
    conditionalShow?: SortOrder
    helpText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormFieldAvgOrderByAggregateInput = {
    id?: SortOrder
    documentTitleId?: SortOrder
    order?: SortOrder
  }

  export type FormFieldMaxOrderByAggregateInput = {
    id?: SortOrder
    documentTitleId?: SortOrder
    fieldName?: SortOrder
    label?: SortOrder
    type?: SortOrder
    placeholder?: SortOrder
    required?: SortOrder
    order?: SortOrder
    fullWidth?: SortOrder
    hidden?: SortOrder
    defaultValue?: SortOrder
    helpText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormFieldMinOrderByAggregateInput = {
    id?: SortOrder
    documentTitleId?: SortOrder
    fieldName?: SortOrder
    label?: SortOrder
    type?: SortOrder
    placeholder?: SortOrder
    required?: SortOrder
    order?: SortOrder
    fullWidth?: SortOrder
    hidden?: SortOrder
    defaultValue?: SortOrder
    helpText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FormFieldSumOrderByAggregateInput = {
    id?: SortOrder
    documentTitleId?: SortOrder
    order?: SortOrder
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

  export type DocumentTitleCreateNestedManyWithoutDocumentTypeInput = {
    create?: XOR<DocumentTitleCreateWithoutDocumentTypeInput, DocumentTitleUncheckedCreateWithoutDocumentTypeInput> | DocumentTitleCreateWithoutDocumentTypeInput[] | DocumentTitleUncheckedCreateWithoutDocumentTypeInput[]
    connectOrCreate?: DocumentTitleCreateOrConnectWithoutDocumentTypeInput | DocumentTitleCreateOrConnectWithoutDocumentTypeInput[]
    createMany?: DocumentTitleCreateManyDocumentTypeInputEnvelope
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

  export type DocumentTitleUncheckedCreateNestedManyWithoutDocumentTypeInput = {
    create?: XOR<DocumentTitleCreateWithoutDocumentTypeInput, DocumentTitleUncheckedCreateWithoutDocumentTypeInput> | DocumentTitleCreateWithoutDocumentTypeInput[] | DocumentTitleUncheckedCreateWithoutDocumentTypeInput[]
    connectOrCreate?: DocumentTitleCreateOrConnectWithoutDocumentTypeInput | DocumentTitleCreateOrConnectWithoutDocumentTypeInput[]
    createMany?: DocumentTitleCreateManyDocumentTypeInputEnvelope
    connect?: DocumentTitleWhereUniqueInput | DocumentTitleWhereUniqueInput[]
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

  export type DocumentTitleUpdateManyWithoutDocumentTypeNestedInput = {
    create?: XOR<DocumentTitleCreateWithoutDocumentTypeInput, DocumentTitleUncheckedCreateWithoutDocumentTypeInput> | DocumentTitleCreateWithoutDocumentTypeInput[] | DocumentTitleUncheckedCreateWithoutDocumentTypeInput[]
    connectOrCreate?: DocumentTitleCreateOrConnectWithoutDocumentTypeInput | DocumentTitleCreateOrConnectWithoutDocumentTypeInput[]
    upsert?: DocumentTitleUpsertWithWhereUniqueWithoutDocumentTypeInput | DocumentTitleUpsertWithWhereUniqueWithoutDocumentTypeInput[]
    createMany?: DocumentTitleCreateManyDocumentTypeInputEnvelope
    set?: DocumentTitleWhereUniqueInput | DocumentTitleWhereUniqueInput[]
    disconnect?: DocumentTitleWhereUniqueInput | DocumentTitleWhereUniqueInput[]
    delete?: DocumentTitleWhereUniqueInput | DocumentTitleWhereUniqueInput[]
    connect?: DocumentTitleWhereUniqueInput | DocumentTitleWhereUniqueInput[]
    update?: DocumentTitleUpdateWithWhereUniqueWithoutDocumentTypeInput | DocumentTitleUpdateWithWhereUniqueWithoutDocumentTypeInput[]
    updateMany?: DocumentTitleUpdateManyWithWhereWithoutDocumentTypeInput | DocumentTitleUpdateManyWithWhereWithoutDocumentTypeInput[]
    deleteMany?: DocumentTitleScalarWhereInput | DocumentTitleScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type DocumentTitleUncheckedUpdateManyWithoutDocumentTypeNestedInput = {
    create?: XOR<DocumentTitleCreateWithoutDocumentTypeInput, DocumentTitleUncheckedCreateWithoutDocumentTypeInput> | DocumentTitleCreateWithoutDocumentTypeInput[] | DocumentTitleUncheckedCreateWithoutDocumentTypeInput[]
    connectOrCreate?: DocumentTitleCreateOrConnectWithoutDocumentTypeInput | DocumentTitleCreateOrConnectWithoutDocumentTypeInput[]
    upsert?: DocumentTitleUpsertWithWhereUniqueWithoutDocumentTypeInput | DocumentTitleUpsertWithWhereUniqueWithoutDocumentTypeInput[]
    createMany?: DocumentTitleCreateManyDocumentTypeInputEnvelope
    set?: DocumentTitleWhereUniqueInput | DocumentTitleWhereUniqueInput[]
    disconnect?: DocumentTitleWhereUniqueInput | DocumentTitleWhereUniqueInput[]
    delete?: DocumentTitleWhereUniqueInput | DocumentTitleWhereUniqueInput[]
    connect?: DocumentTitleWhereUniqueInput | DocumentTitleWhereUniqueInput[]
    update?: DocumentTitleUpdateWithWhereUniqueWithoutDocumentTypeInput | DocumentTitleUpdateWithWhereUniqueWithoutDocumentTypeInput[]
    updateMany?: DocumentTitleUpdateManyWithWhereWithoutDocumentTypeInput | DocumentTitleUpdateManyWithWhereWithoutDocumentTypeInput[]
    deleteMany?: DocumentTitleScalarWhereInput | DocumentTitleScalarWhereInput[]
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

  export type DocumentTypeCreateNestedOneWithoutDocumentTitlesInput = {
    create?: XOR<DocumentTypeCreateWithoutDocumentTitlesInput, DocumentTypeUncheckedCreateWithoutDocumentTitlesInput>
    connectOrCreate?: DocumentTypeCreateOrConnectWithoutDocumentTitlesInput
    connect?: DocumentTypeWhereUniqueInput
  }

  export type FormFieldCreateNestedManyWithoutDocumentTitleInput = {
    create?: XOR<FormFieldCreateWithoutDocumentTitleInput, FormFieldUncheckedCreateWithoutDocumentTitleInput> | FormFieldCreateWithoutDocumentTitleInput[] | FormFieldUncheckedCreateWithoutDocumentTitleInput[]
    connectOrCreate?: FormFieldCreateOrConnectWithoutDocumentTitleInput | FormFieldCreateOrConnectWithoutDocumentTitleInput[]
    createMany?: FormFieldCreateManyDocumentTitleInputEnvelope
    connect?: FormFieldWhereUniqueInput | FormFieldWhereUniqueInput[]
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

  export type FormFieldUncheckedCreateNestedManyWithoutDocumentTitleInput = {
    create?: XOR<FormFieldCreateWithoutDocumentTitleInput, FormFieldUncheckedCreateWithoutDocumentTitleInput> | FormFieldCreateWithoutDocumentTitleInput[] | FormFieldUncheckedCreateWithoutDocumentTitleInput[]
    connectOrCreate?: FormFieldCreateOrConnectWithoutDocumentTitleInput | FormFieldCreateOrConnectWithoutDocumentTitleInput[]
    createMany?: FormFieldCreateManyDocumentTitleInputEnvelope
    connect?: FormFieldWhereUniqueInput | FormFieldWhereUniqueInput[]
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

  export type DocumentTypeUpdateOneRequiredWithoutDocumentTitlesNestedInput = {
    create?: XOR<DocumentTypeCreateWithoutDocumentTitlesInput, DocumentTypeUncheckedCreateWithoutDocumentTitlesInput>
    connectOrCreate?: DocumentTypeCreateOrConnectWithoutDocumentTitlesInput
    upsert?: DocumentTypeUpsertWithoutDocumentTitlesInput
    connect?: DocumentTypeWhereUniqueInput
    update?: XOR<XOR<DocumentTypeUpdateToOneWithWhereWithoutDocumentTitlesInput, DocumentTypeUpdateWithoutDocumentTitlesInput>, DocumentTypeUncheckedUpdateWithoutDocumentTitlesInput>
  }

  export type FormFieldUpdateManyWithoutDocumentTitleNestedInput = {
    create?: XOR<FormFieldCreateWithoutDocumentTitleInput, FormFieldUncheckedCreateWithoutDocumentTitleInput> | FormFieldCreateWithoutDocumentTitleInput[] | FormFieldUncheckedCreateWithoutDocumentTitleInput[]
    connectOrCreate?: FormFieldCreateOrConnectWithoutDocumentTitleInput | FormFieldCreateOrConnectWithoutDocumentTitleInput[]
    upsert?: FormFieldUpsertWithWhereUniqueWithoutDocumentTitleInput | FormFieldUpsertWithWhereUniqueWithoutDocumentTitleInput[]
    createMany?: FormFieldCreateManyDocumentTitleInputEnvelope
    set?: FormFieldWhereUniqueInput | FormFieldWhereUniqueInput[]
    disconnect?: FormFieldWhereUniqueInput | FormFieldWhereUniqueInput[]
    delete?: FormFieldWhereUniqueInput | FormFieldWhereUniqueInput[]
    connect?: FormFieldWhereUniqueInput | FormFieldWhereUniqueInput[]
    update?: FormFieldUpdateWithWhereUniqueWithoutDocumentTitleInput | FormFieldUpdateWithWhereUniqueWithoutDocumentTitleInput[]
    updateMany?: FormFieldUpdateManyWithWhereWithoutDocumentTitleInput | FormFieldUpdateManyWithWhereWithoutDocumentTitleInput[]
    deleteMany?: FormFieldScalarWhereInput | FormFieldScalarWhereInput[]
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

  export type FormFieldUncheckedUpdateManyWithoutDocumentTitleNestedInput = {
    create?: XOR<FormFieldCreateWithoutDocumentTitleInput, FormFieldUncheckedCreateWithoutDocumentTitleInput> | FormFieldCreateWithoutDocumentTitleInput[] | FormFieldUncheckedCreateWithoutDocumentTitleInput[]
    connectOrCreate?: FormFieldCreateOrConnectWithoutDocumentTitleInput | FormFieldCreateOrConnectWithoutDocumentTitleInput[]
    upsert?: FormFieldUpsertWithWhereUniqueWithoutDocumentTitleInput | FormFieldUpsertWithWhereUniqueWithoutDocumentTitleInput[]
    createMany?: FormFieldCreateManyDocumentTitleInputEnvelope
    set?: FormFieldWhereUniqueInput | FormFieldWhereUniqueInput[]
    disconnect?: FormFieldWhereUniqueInput | FormFieldWhereUniqueInput[]
    delete?: FormFieldWhereUniqueInput | FormFieldWhereUniqueInput[]
    connect?: FormFieldWhereUniqueInput | FormFieldWhereUniqueInput[]
    update?: FormFieldUpdateWithWhereUniqueWithoutDocumentTitleInput | FormFieldUpdateWithWhereUniqueWithoutDocumentTitleInput[]
    updateMany?: FormFieldUpdateManyWithWhereWithoutDocumentTitleInput | FormFieldUpdateManyWithWhereWithoutDocumentTitleInput[]
    deleteMany?: FormFieldScalarWhereInput | FormFieldScalarWhereInput[]
  }

  export type DocumentTitleCreateNestedOneWithoutFormFieldEntriesInput = {
    create?: XOR<DocumentTitleCreateWithoutFormFieldEntriesInput, DocumentTitleUncheckedCreateWithoutFormFieldEntriesInput>
    connectOrCreate?: DocumentTitleCreateOrConnectWithoutFormFieldEntriesInput
    connect?: DocumentTitleWhereUniqueInput
  }

  export type DocumentTitleUpdateOneRequiredWithoutFormFieldEntriesNestedInput = {
    create?: XOR<DocumentTitleCreateWithoutFormFieldEntriesInput, DocumentTitleUncheckedCreateWithoutFormFieldEntriesInput>
    connectOrCreate?: DocumentTitleCreateOrConnectWithoutFormFieldEntriesInput
    upsert?: DocumentTitleUpsertWithoutFormFieldEntriesInput
    connect?: DocumentTitleWhereUniqueInput
    update?: XOR<XOR<DocumentTitleUpdateToOneWithWhereWithoutFormFieldEntriesInput, DocumentTitleUpdateWithoutFormFieldEntriesInput>, DocumentTitleUncheckedUpdateWithoutFormFieldEntriesInput>
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

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type DocumentTitleCreateWithoutDocumentTypeInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shareable?: boolean
    isDisplay?: boolean
    requireNumber?: boolean
    requireValidDate?: boolean
    requireExpireDate?: boolean
    requireDocData?: boolean
    docDataOptions?: NullableJsonNullValueInput | InputJsonValue
    docDataName?: string | null
    requireAttachmentFront?: boolean
    requireAttachmentBack?: boolean
    description?: string | null
    formDescription?: string | null
    formTitle?: string | null
    documentConfigurations?: DocumentConfigurationCreateNestedManyWithoutDocumentTitleInput
    document_fields?: document_fieldsCreateNestedManyWithoutDocument_titlesInput
    formFieldEntries?: FormFieldCreateNestedManyWithoutDocumentTitleInput
  }

  export type DocumentTitleUncheckedCreateWithoutDocumentTypeInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shareable?: boolean
    isDisplay?: boolean
    requireNumber?: boolean
    requireValidDate?: boolean
    requireExpireDate?: boolean
    requireDocData?: boolean
    docDataOptions?: NullableJsonNullValueInput | InputJsonValue
    docDataName?: string | null
    requireAttachmentFront?: boolean
    requireAttachmentBack?: boolean
    description?: string | null
    formDescription?: string | null
    formTitle?: string | null
    documentConfigurations?: DocumentConfigurationUncheckedCreateNestedManyWithoutDocumentTitleInput
    document_fields?: document_fieldsUncheckedCreateNestedManyWithoutDocument_titlesInput
    formFieldEntries?: FormFieldUncheckedCreateNestedManyWithoutDocumentTitleInput
  }

  export type DocumentTitleCreateOrConnectWithoutDocumentTypeInput = {
    where: DocumentTitleWhereUniqueInput
    create: XOR<DocumentTitleCreateWithoutDocumentTypeInput, DocumentTitleUncheckedCreateWithoutDocumentTypeInput>
  }

  export type DocumentTitleCreateManyDocumentTypeInputEnvelope = {
    data: DocumentTitleCreateManyDocumentTypeInput | DocumentTitleCreateManyDocumentTypeInput[]
    skipDuplicates?: boolean
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

  export type DocumentTitleUpsertWithWhereUniqueWithoutDocumentTypeInput = {
    where: DocumentTitleWhereUniqueInput
    update: XOR<DocumentTitleUpdateWithoutDocumentTypeInput, DocumentTitleUncheckedUpdateWithoutDocumentTypeInput>
    create: XOR<DocumentTitleCreateWithoutDocumentTypeInput, DocumentTitleUncheckedCreateWithoutDocumentTypeInput>
  }

  export type DocumentTitleUpdateWithWhereUniqueWithoutDocumentTypeInput = {
    where: DocumentTitleWhereUniqueInput
    data: XOR<DocumentTitleUpdateWithoutDocumentTypeInput, DocumentTitleUncheckedUpdateWithoutDocumentTypeInput>
  }

  export type DocumentTitleUpdateManyWithWhereWithoutDocumentTypeInput = {
    where: DocumentTitleScalarWhereInput
    data: XOR<DocumentTitleUpdateManyMutationInput, DocumentTitleUncheckedUpdateManyWithoutDocumentTypeInput>
  }

  export type DocumentTitleScalarWhereInput = {
    AND?: DocumentTitleScalarWhereInput | DocumentTitleScalarWhereInput[]
    OR?: DocumentTitleScalarWhereInput[]
    NOT?: DocumentTitleScalarWhereInput | DocumentTitleScalarWhereInput[]
    id?: IntFilter<"DocumentTitle"> | number
    title?: StringFilter<"DocumentTitle"> | string
    createdAt?: DateTimeFilter<"DocumentTitle"> | Date | string
    updatedAt?: DateTimeFilter<"DocumentTitle"> | Date | string
    shareable?: BoolFilter<"DocumentTitle"> | boolean
    documentTypeId?: IntFilter<"DocumentTitle"> | number
    isDisplay?: BoolFilter<"DocumentTitle"> | boolean
    requireNumber?: BoolFilter<"DocumentTitle"> | boolean
    requireValidDate?: BoolFilter<"DocumentTitle"> | boolean
    requireExpireDate?: BoolFilter<"DocumentTitle"> | boolean
    requireDocData?: BoolFilter<"DocumentTitle"> | boolean
    docDataOptions?: JsonNullableFilter<"DocumentTitle">
    docDataName?: StringNullableFilter<"DocumentTitle"> | string | null
    requireAttachmentFront?: BoolFilter<"DocumentTitle"> | boolean
    requireAttachmentBack?: BoolFilter<"DocumentTitle"> | boolean
    description?: StringNullableFilter<"DocumentTitle"> | string | null
    formDescription?: StringNullableFilter<"DocumentTitle"> | string | null
    formTitle?: StringNullableFilter<"DocumentTitle"> | string | null
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

  export type DocumentTypeCreateWithoutDocumentTitlesInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    formId?: string | null
    hideHeader?: boolean
    showFormButtons?: boolean
    documentConfigurations?: DocumentConfigurationCreateNestedManyWithoutDocumentTypeInput
    document_fields?: document_fieldsCreateNestedManyWithoutDocument_typesInput
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
    documentConfigurations?: DocumentConfigurationUncheckedCreateNestedManyWithoutDocumentTypeInput
    document_fields?: document_fieldsUncheckedCreateNestedManyWithoutDocument_typesInput
  }

  export type DocumentTypeCreateOrConnectWithoutDocumentTitlesInput = {
    where: DocumentTypeWhereUniqueInput
    create: XOR<DocumentTypeCreateWithoutDocumentTitlesInput, DocumentTypeUncheckedCreateWithoutDocumentTitlesInput>
  }

  export type FormFieldCreateWithoutDocumentTitleInput = {
    fieldName: string
    label: string
    type: string
    placeholder?: string | null
    required?: boolean
    order?: number
    fullWidth?: boolean
    hidden?: boolean
    defaultValue?: string | null
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    conditionalShow?: NullableJsonNullValueInput | InputJsonValue
    helpText?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormFieldUncheckedCreateWithoutDocumentTitleInput = {
    id?: number
    fieldName: string
    label: string
    type: string
    placeholder?: string | null
    required?: boolean
    order?: number
    fullWidth?: boolean
    hidden?: boolean
    defaultValue?: string | null
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    conditionalShow?: NullableJsonNullValueInput | InputJsonValue
    helpText?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FormFieldCreateOrConnectWithoutDocumentTitleInput = {
    where: FormFieldWhereUniqueInput
    create: XOR<FormFieldCreateWithoutDocumentTitleInput, FormFieldUncheckedCreateWithoutDocumentTitleInput>
  }

  export type FormFieldCreateManyDocumentTitleInputEnvelope = {
    data: FormFieldCreateManyDocumentTitleInput | FormFieldCreateManyDocumentTitleInput[]
    skipDuplicates?: boolean
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
    documentConfigurations?: DocumentConfigurationUpdateManyWithoutDocumentTypeNestedInput
    document_fields?: document_fieldsUpdateManyWithoutDocument_typesNestedInput
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
    documentConfigurations?: DocumentConfigurationUncheckedUpdateManyWithoutDocumentTypeNestedInput
    document_fields?: document_fieldsUncheckedUpdateManyWithoutDocument_typesNestedInput
  }

  export type FormFieldUpsertWithWhereUniqueWithoutDocumentTitleInput = {
    where: FormFieldWhereUniqueInput
    update: XOR<FormFieldUpdateWithoutDocumentTitleInput, FormFieldUncheckedUpdateWithoutDocumentTitleInput>
    create: XOR<FormFieldCreateWithoutDocumentTitleInput, FormFieldUncheckedCreateWithoutDocumentTitleInput>
  }

  export type FormFieldUpdateWithWhereUniqueWithoutDocumentTitleInput = {
    where: FormFieldWhereUniqueInput
    data: XOR<FormFieldUpdateWithoutDocumentTitleInput, FormFieldUncheckedUpdateWithoutDocumentTitleInput>
  }

  export type FormFieldUpdateManyWithWhereWithoutDocumentTitleInput = {
    where: FormFieldScalarWhereInput
    data: XOR<FormFieldUpdateManyMutationInput, FormFieldUncheckedUpdateManyWithoutDocumentTitleInput>
  }

  export type FormFieldScalarWhereInput = {
    AND?: FormFieldScalarWhereInput | FormFieldScalarWhereInput[]
    OR?: FormFieldScalarWhereInput[]
    NOT?: FormFieldScalarWhereInput | FormFieldScalarWhereInput[]
    id?: IntFilter<"FormField"> | number
    documentTitleId?: IntFilter<"FormField"> | number
    fieldName?: StringFilter<"FormField"> | string
    label?: StringFilter<"FormField"> | string
    type?: StringFilter<"FormField"> | string
    placeholder?: StringNullableFilter<"FormField"> | string | null
    required?: BoolFilter<"FormField"> | boolean
    order?: IntFilter<"FormField"> | number
    fullWidth?: BoolFilter<"FormField"> | boolean
    hidden?: BoolFilter<"FormField"> | boolean
    defaultValue?: StringNullableFilter<"FormField"> | string | null
    options?: JsonNullableFilter<"FormField">
    validation?: JsonNullableFilter<"FormField">
    conditionalShow?: JsonNullableFilter<"FormField">
    helpText?: StringNullableFilter<"FormField"> | string | null
    createdAt?: DateTimeFilter<"FormField"> | Date | string
    updatedAt?: DateTimeFilter<"FormField"> | Date | string
  }

  export type DocumentTitleCreateWithoutFormFieldEntriesInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shareable?: boolean
    isDisplay?: boolean
    requireNumber?: boolean
    requireValidDate?: boolean
    requireExpireDate?: boolean
    requireDocData?: boolean
    docDataOptions?: NullableJsonNullValueInput | InputJsonValue
    docDataName?: string | null
    requireAttachmentFront?: boolean
    requireAttachmentBack?: boolean
    description?: string | null
    formDescription?: string | null
    formTitle?: string | null
    documentConfigurations?: DocumentConfigurationCreateNestedManyWithoutDocumentTitleInput
    document_fields?: document_fieldsCreateNestedManyWithoutDocument_titlesInput
    documentType: DocumentTypeCreateNestedOneWithoutDocumentTitlesInput
  }

  export type DocumentTitleUncheckedCreateWithoutFormFieldEntriesInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shareable?: boolean
    documentTypeId: number
    isDisplay?: boolean
    requireNumber?: boolean
    requireValidDate?: boolean
    requireExpireDate?: boolean
    requireDocData?: boolean
    docDataOptions?: NullableJsonNullValueInput | InputJsonValue
    docDataName?: string | null
    requireAttachmentFront?: boolean
    requireAttachmentBack?: boolean
    description?: string | null
    formDescription?: string | null
    formTitle?: string | null
    documentConfigurations?: DocumentConfigurationUncheckedCreateNestedManyWithoutDocumentTitleInput
    document_fields?: document_fieldsUncheckedCreateNestedManyWithoutDocument_titlesInput
  }

  export type DocumentTitleCreateOrConnectWithoutFormFieldEntriesInput = {
    where: DocumentTitleWhereUniqueInput
    create: XOR<DocumentTitleCreateWithoutFormFieldEntriesInput, DocumentTitleUncheckedCreateWithoutFormFieldEntriesInput>
  }

  export type DocumentTitleUpsertWithoutFormFieldEntriesInput = {
    update: XOR<DocumentTitleUpdateWithoutFormFieldEntriesInput, DocumentTitleUncheckedUpdateWithoutFormFieldEntriesInput>
    create: XOR<DocumentTitleCreateWithoutFormFieldEntriesInput, DocumentTitleUncheckedCreateWithoutFormFieldEntriesInput>
    where?: DocumentTitleWhereInput
  }

  export type DocumentTitleUpdateToOneWithWhereWithoutFormFieldEntriesInput = {
    where?: DocumentTitleWhereInput
    data: XOR<DocumentTitleUpdateWithoutFormFieldEntriesInput, DocumentTitleUncheckedUpdateWithoutFormFieldEntriesInput>
  }

  export type DocumentTitleUpdateWithoutFormFieldEntriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shareable?: BoolFieldUpdateOperationsInput | boolean
    isDisplay?: BoolFieldUpdateOperationsInput | boolean
    requireNumber?: BoolFieldUpdateOperationsInput | boolean
    requireValidDate?: BoolFieldUpdateOperationsInput | boolean
    requireExpireDate?: BoolFieldUpdateOperationsInput | boolean
    requireDocData?: BoolFieldUpdateOperationsInput | boolean
    docDataOptions?: NullableJsonNullValueInput | InputJsonValue
    docDataName?: NullableStringFieldUpdateOperationsInput | string | null
    requireAttachmentFront?: BoolFieldUpdateOperationsInput | boolean
    requireAttachmentBack?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formDescription?: NullableStringFieldUpdateOperationsInput | string | null
    formTitle?: NullableStringFieldUpdateOperationsInput | string | null
    documentConfigurations?: DocumentConfigurationUpdateManyWithoutDocumentTitleNestedInput
    document_fields?: document_fieldsUpdateManyWithoutDocument_titlesNestedInput
    documentType?: DocumentTypeUpdateOneRequiredWithoutDocumentTitlesNestedInput
  }

  export type DocumentTitleUncheckedUpdateWithoutFormFieldEntriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shareable?: BoolFieldUpdateOperationsInput | boolean
    documentTypeId?: IntFieldUpdateOperationsInput | number
    isDisplay?: BoolFieldUpdateOperationsInput | boolean
    requireNumber?: BoolFieldUpdateOperationsInput | boolean
    requireValidDate?: BoolFieldUpdateOperationsInput | boolean
    requireExpireDate?: BoolFieldUpdateOperationsInput | boolean
    requireDocData?: BoolFieldUpdateOperationsInput | boolean
    docDataOptions?: NullableJsonNullValueInput | InputJsonValue
    docDataName?: NullableStringFieldUpdateOperationsInput | string | null
    requireAttachmentFront?: BoolFieldUpdateOperationsInput | boolean
    requireAttachmentBack?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formDescription?: NullableStringFieldUpdateOperationsInput | string | null
    formTitle?: NullableStringFieldUpdateOperationsInput | string | null
    documentConfigurations?: DocumentConfigurationUncheckedUpdateManyWithoutDocumentTitleNestedInput
    document_fields?: document_fieldsUncheckedUpdateManyWithoutDocument_titlesNestedInput
  }

  export type DocumentTitleCreateWithoutDocumentConfigurationsInput = {
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shareable?: boolean
    isDisplay?: boolean
    requireNumber?: boolean
    requireValidDate?: boolean
    requireExpireDate?: boolean
    requireDocData?: boolean
    docDataOptions?: NullableJsonNullValueInput | InputJsonValue
    docDataName?: string | null
    requireAttachmentFront?: boolean
    requireAttachmentBack?: boolean
    description?: string | null
    formDescription?: string | null
    formTitle?: string | null
    document_fields?: document_fieldsCreateNestedManyWithoutDocument_titlesInput
    documentType: DocumentTypeCreateNestedOneWithoutDocumentTitlesInput
    formFieldEntries?: FormFieldCreateNestedManyWithoutDocumentTitleInput
  }

  export type DocumentTitleUncheckedCreateWithoutDocumentConfigurationsInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shareable?: boolean
    documentTypeId: number
    isDisplay?: boolean
    requireNumber?: boolean
    requireValidDate?: boolean
    requireExpireDate?: boolean
    requireDocData?: boolean
    docDataOptions?: NullableJsonNullValueInput | InputJsonValue
    docDataName?: string | null
    requireAttachmentFront?: boolean
    requireAttachmentBack?: boolean
    description?: string | null
    formDescription?: string | null
    formTitle?: string | null
    document_fields?: document_fieldsUncheckedCreateNestedManyWithoutDocument_titlesInput
    formFieldEntries?: FormFieldUncheckedCreateNestedManyWithoutDocumentTitleInput
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
    document_fields?: document_fieldsCreateNestedManyWithoutDocument_typesInput
    documentTitles?: DocumentTitleCreateNestedManyWithoutDocumentTypeInput
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
    document_fields?: document_fieldsUncheckedCreateNestedManyWithoutDocument_typesInput
    documentTitles?: DocumentTitleUncheckedCreateNestedManyWithoutDocumentTypeInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shareable?: BoolFieldUpdateOperationsInput | boolean
    isDisplay?: BoolFieldUpdateOperationsInput | boolean
    requireNumber?: BoolFieldUpdateOperationsInput | boolean
    requireValidDate?: BoolFieldUpdateOperationsInput | boolean
    requireExpireDate?: BoolFieldUpdateOperationsInput | boolean
    requireDocData?: BoolFieldUpdateOperationsInput | boolean
    docDataOptions?: NullableJsonNullValueInput | InputJsonValue
    docDataName?: NullableStringFieldUpdateOperationsInput | string | null
    requireAttachmentFront?: BoolFieldUpdateOperationsInput | boolean
    requireAttachmentBack?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formDescription?: NullableStringFieldUpdateOperationsInput | string | null
    formTitle?: NullableStringFieldUpdateOperationsInput | string | null
    document_fields?: document_fieldsUpdateManyWithoutDocument_titlesNestedInput
    documentType?: DocumentTypeUpdateOneRequiredWithoutDocumentTitlesNestedInput
    formFieldEntries?: FormFieldUpdateManyWithoutDocumentTitleNestedInput
  }

  export type DocumentTitleUncheckedUpdateWithoutDocumentConfigurationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shareable?: BoolFieldUpdateOperationsInput | boolean
    documentTypeId?: IntFieldUpdateOperationsInput | number
    isDisplay?: BoolFieldUpdateOperationsInput | boolean
    requireNumber?: BoolFieldUpdateOperationsInput | boolean
    requireValidDate?: BoolFieldUpdateOperationsInput | boolean
    requireExpireDate?: BoolFieldUpdateOperationsInput | boolean
    requireDocData?: BoolFieldUpdateOperationsInput | boolean
    docDataOptions?: NullableJsonNullValueInput | InputJsonValue
    docDataName?: NullableStringFieldUpdateOperationsInput | string | null
    requireAttachmentFront?: BoolFieldUpdateOperationsInput | boolean
    requireAttachmentBack?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formDescription?: NullableStringFieldUpdateOperationsInput | string | null
    formTitle?: NullableStringFieldUpdateOperationsInput | string | null
    document_fields?: document_fieldsUncheckedUpdateManyWithoutDocument_titlesNestedInput
    formFieldEntries?: FormFieldUncheckedUpdateManyWithoutDocumentTitleNestedInput
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
    document_fields?: document_fieldsUpdateManyWithoutDocument_typesNestedInput
    documentTitles?: DocumentTitleUpdateManyWithoutDocumentTypeNestedInput
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
    document_fields?: document_fieldsUncheckedUpdateManyWithoutDocument_typesNestedInput
    documentTitles?: DocumentTitleUncheckedUpdateManyWithoutDocumentTypeNestedInput
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
    createdAt?: Date | string
    updatedAt?: Date | string
    shareable?: boolean
    isDisplay?: boolean
    requireNumber?: boolean
    requireValidDate?: boolean
    requireExpireDate?: boolean
    requireDocData?: boolean
    docDataOptions?: NullableJsonNullValueInput | InputJsonValue
    docDataName?: string | null
    requireAttachmentFront?: boolean
    requireAttachmentBack?: boolean
    description?: string | null
    formDescription?: string | null
    formTitle?: string | null
    documentConfigurations?: DocumentConfigurationCreateNestedManyWithoutDocumentTitleInput
    documentType: DocumentTypeCreateNestedOneWithoutDocumentTitlesInput
    formFieldEntries?: FormFieldCreateNestedManyWithoutDocumentTitleInput
  }

  export type DocumentTitleUncheckedCreateWithoutDocument_fieldsInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shareable?: boolean
    documentTypeId: number
    isDisplay?: boolean
    requireNumber?: boolean
    requireValidDate?: boolean
    requireExpireDate?: boolean
    requireDocData?: boolean
    docDataOptions?: NullableJsonNullValueInput | InputJsonValue
    docDataName?: string | null
    requireAttachmentFront?: boolean
    requireAttachmentBack?: boolean
    description?: string | null
    formDescription?: string | null
    formTitle?: string | null
    documentConfigurations?: DocumentConfigurationUncheckedCreateNestedManyWithoutDocumentTitleInput
    formFieldEntries?: FormFieldUncheckedCreateNestedManyWithoutDocumentTitleInput
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
    documentConfigurations?: DocumentConfigurationCreateNestedManyWithoutDocumentTypeInput
    documentTitles?: DocumentTitleCreateNestedManyWithoutDocumentTypeInput
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
    documentConfigurations?: DocumentConfigurationUncheckedCreateNestedManyWithoutDocumentTypeInput
    documentTitles?: DocumentTitleUncheckedCreateNestedManyWithoutDocumentTypeInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shareable?: BoolFieldUpdateOperationsInput | boolean
    isDisplay?: BoolFieldUpdateOperationsInput | boolean
    requireNumber?: BoolFieldUpdateOperationsInput | boolean
    requireValidDate?: BoolFieldUpdateOperationsInput | boolean
    requireExpireDate?: BoolFieldUpdateOperationsInput | boolean
    requireDocData?: BoolFieldUpdateOperationsInput | boolean
    docDataOptions?: NullableJsonNullValueInput | InputJsonValue
    docDataName?: NullableStringFieldUpdateOperationsInput | string | null
    requireAttachmentFront?: BoolFieldUpdateOperationsInput | boolean
    requireAttachmentBack?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formDescription?: NullableStringFieldUpdateOperationsInput | string | null
    formTitle?: NullableStringFieldUpdateOperationsInput | string | null
    documentConfigurations?: DocumentConfigurationUpdateManyWithoutDocumentTitleNestedInput
    documentType?: DocumentTypeUpdateOneRequiredWithoutDocumentTitlesNestedInput
    formFieldEntries?: FormFieldUpdateManyWithoutDocumentTitleNestedInput
  }

  export type DocumentTitleUncheckedUpdateWithoutDocument_fieldsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shareable?: BoolFieldUpdateOperationsInput | boolean
    documentTypeId?: IntFieldUpdateOperationsInput | number
    isDisplay?: BoolFieldUpdateOperationsInput | boolean
    requireNumber?: BoolFieldUpdateOperationsInput | boolean
    requireValidDate?: BoolFieldUpdateOperationsInput | boolean
    requireExpireDate?: BoolFieldUpdateOperationsInput | boolean
    requireDocData?: BoolFieldUpdateOperationsInput | boolean
    docDataOptions?: NullableJsonNullValueInput | InputJsonValue
    docDataName?: NullableStringFieldUpdateOperationsInput | string | null
    requireAttachmentFront?: BoolFieldUpdateOperationsInput | boolean
    requireAttachmentBack?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formDescription?: NullableStringFieldUpdateOperationsInput | string | null
    formTitle?: NullableStringFieldUpdateOperationsInput | string | null
    documentConfigurations?: DocumentConfigurationUncheckedUpdateManyWithoutDocumentTitleNestedInput
    formFieldEntries?: FormFieldUncheckedUpdateManyWithoutDocumentTitleNestedInput
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
    documentConfigurations?: DocumentConfigurationUpdateManyWithoutDocumentTypeNestedInput
    documentTitles?: DocumentTitleUpdateManyWithoutDocumentTypeNestedInput
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
    documentConfigurations?: DocumentConfigurationUncheckedUpdateManyWithoutDocumentTypeNestedInput
    documentTitles?: DocumentTitleUncheckedUpdateManyWithoutDocumentTypeNestedInput
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

  export type DocumentTitleCreateManyDocumentTypeInput = {
    id?: number
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shareable?: boolean
    isDisplay?: boolean
    requireNumber?: boolean
    requireValidDate?: boolean
    requireExpireDate?: boolean
    requireDocData?: boolean
    docDataOptions?: NullableJsonNullValueInput | InputJsonValue
    docDataName?: string | null
    requireAttachmentFront?: boolean
    requireAttachmentBack?: boolean
    description?: string | null
    formDescription?: string | null
    formTitle?: string | null
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

  export type DocumentTitleUpdateWithoutDocumentTypeInput = {
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shareable?: BoolFieldUpdateOperationsInput | boolean
    isDisplay?: BoolFieldUpdateOperationsInput | boolean
    requireNumber?: BoolFieldUpdateOperationsInput | boolean
    requireValidDate?: BoolFieldUpdateOperationsInput | boolean
    requireExpireDate?: BoolFieldUpdateOperationsInput | boolean
    requireDocData?: BoolFieldUpdateOperationsInput | boolean
    docDataOptions?: NullableJsonNullValueInput | InputJsonValue
    docDataName?: NullableStringFieldUpdateOperationsInput | string | null
    requireAttachmentFront?: BoolFieldUpdateOperationsInput | boolean
    requireAttachmentBack?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formDescription?: NullableStringFieldUpdateOperationsInput | string | null
    formTitle?: NullableStringFieldUpdateOperationsInput | string | null
    documentConfigurations?: DocumentConfigurationUpdateManyWithoutDocumentTitleNestedInput
    document_fields?: document_fieldsUpdateManyWithoutDocument_titlesNestedInput
    formFieldEntries?: FormFieldUpdateManyWithoutDocumentTitleNestedInput
  }

  export type DocumentTitleUncheckedUpdateWithoutDocumentTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shareable?: BoolFieldUpdateOperationsInput | boolean
    isDisplay?: BoolFieldUpdateOperationsInput | boolean
    requireNumber?: BoolFieldUpdateOperationsInput | boolean
    requireValidDate?: BoolFieldUpdateOperationsInput | boolean
    requireExpireDate?: BoolFieldUpdateOperationsInput | boolean
    requireDocData?: BoolFieldUpdateOperationsInput | boolean
    docDataOptions?: NullableJsonNullValueInput | InputJsonValue
    docDataName?: NullableStringFieldUpdateOperationsInput | string | null
    requireAttachmentFront?: BoolFieldUpdateOperationsInput | boolean
    requireAttachmentBack?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formDescription?: NullableStringFieldUpdateOperationsInput | string | null
    formTitle?: NullableStringFieldUpdateOperationsInput | string | null
    documentConfigurations?: DocumentConfigurationUncheckedUpdateManyWithoutDocumentTitleNestedInput
    document_fields?: document_fieldsUncheckedUpdateManyWithoutDocument_titlesNestedInput
    formFieldEntries?: FormFieldUncheckedUpdateManyWithoutDocumentTitleNestedInput
  }

  export type DocumentTitleUncheckedUpdateManyWithoutDocumentTypeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shareable?: BoolFieldUpdateOperationsInput | boolean
    isDisplay?: BoolFieldUpdateOperationsInput | boolean
    requireNumber?: BoolFieldUpdateOperationsInput | boolean
    requireValidDate?: BoolFieldUpdateOperationsInput | boolean
    requireExpireDate?: BoolFieldUpdateOperationsInput | boolean
    requireDocData?: BoolFieldUpdateOperationsInput | boolean
    docDataOptions?: NullableJsonNullValueInput | InputJsonValue
    docDataName?: NullableStringFieldUpdateOperationsInput | string | null
    requireAttachmentFront?: BoolFieldUpdateOperationsInput | boolean
    requireAttachmentBack?: BoolFieldUpdateOperationsInput | boolean
    description?: NullableStringFieldUpdateOperationsInput | string | null
    formDescription?: NullableStringFieldUpdateOperationsInput | string | null
    formTitle?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type FormFieldCreateManyDocumentTitleInput = {
    id?: number
    fieldName: string
    label: string
    type: string
    placeholder?: string | null
    required?: boolean
    order?: number
    fullWidth?: boolean
    hidden?: boolean
    defaultValue?: string | null
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    conditionalShow?: NullableJsonNullValueInput | InputJsonValue
    helpText?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
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

  export type FormFieldUpdateWithoutDocumentTitleInput = {
    fieldName?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    fullWidth?: BoolFieldUpdateOperationsInput | boolean
    hidden?: BoolFieldUpdateOperationsInput | boolean
    defaultValue?: NullableStringFieldUpdateOperationsInput | string | null
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    conditionalShow?: NullableJsonNullValueInput | InputJsonValue
    helpText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormFieldUncheckedUpdateWithoutDocumentTitleInput = {
    id?: IntFieldUpdateOperationsInput | number
    fieldName?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    fullWidth?: BoolFieldUpdateOperationsInput | boolean
    hidden?: BoolFieldUpdateOperationsInput | boolean
    defaultValue?: NullableStringFieldUpdateOperationsInput | string | null
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    conditionalShow?: NullableJsonNullValueInput | InputJsonValue
    helpText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FormFieldUncheckedUpdateManyWithoutDocumentTitleInput = {
    id?: IntFieldUpdateOperationsInput | number
    fieldName?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    placeholder?: NullableStringFieldUpdateOperationsInput | string | null
    required?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    fullWidth?: BoolFieldUpdateOperationsInput | boolean
    hidden?: BoolFieldUpdateOperationsInput | boolean
    defaultValue?: NullableStringFieldUpdateOperationsInput | string | null
    options?: NullableJsonNullValueInput | InputJsonValue
    validation?: NullableJsonNullValueInput | InputJsonValue
    conditionalShow?: NullableJsonNullValueInput | InputJsonValue
    helpText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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