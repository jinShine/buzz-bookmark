
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
 * Model Book
 * 
 */
export type Book = $Result.DefaultSelection<Prisma.$BookPayload>
/**
 * Model FollowBook
 * 
 */
export type FollowBook = $Result.DefaultSelection<Prisma.$FollowBookPayload>
/**
 * Model Likes
 * 
 */
export type Likes = $Result.DefaultSelection<Prisma.$LikesPayload>
/**
 * Model Mark
 * 
 */
export type Mark = $Result.DefaultSelection<Prisma.$MarkPayload>
/**
 * Model Member
 * 
 */
export type Member = $Result.DefaultSelection<Prisma.$MemberPayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>
/**
 * Model Talk
 * 
 */
export type Talk = $Result.DefaultSelection<Prisma.$TalkPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Books
 * const books = await prisma.book.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Books
   * const books = await prisma.book.findMany()
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
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.followBook`: Exposes CRUD operations for the **FollowBook** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FollowBooks
    * const followBooks = await prisma.followBook.findMany()
    * ```
    */
  get followBook(): Prisma.FollowBookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.likes`: Exposes CRUD operations for the **Likes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.likes.findMany()
    * ```
    */
  get likes(): Prisma.LikesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mark`: Exposes CRUD operations for the **Mark** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Marks
    * const marks = await prisma.mark.findMany()
    * ```
    */
  get mark(): Prisma.MarkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.member`: Exposes CRUD operations for the **Member** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Members
    * const members = await prisma.member.findMany()
    * ```
    */
  get member(): Prisma.MemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.talk`: Exposes CRUD operations for the **Talk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Talks
    * const talks = await prisma.talk.findMany()
    * ```
    */
  get talk(): Prisma.TalkDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
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
    Book: 'Book',
    FollowBook: 'FollowBook',
    Likes: 'Likes',
    Mark: 'Mark',
    Member: 'Member',
    Report: 'Report',
    Talk: 'Talk'
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
      modelProps: "book" | "followBook" | "likes" | "mark" | "member" | "report" | "talk"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Book: {
        payload: Prisma.$BookPayload<ExtArgs>
        fields: Prisma.BookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findFirst: {
            args: Prisma.BookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findMany: {
            args: Prisma.BookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          create: {
            args: Prisma.BookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          createMany: {
            args: Prisma.BookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          update: {
            args: Prisma.BookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          deleteMany: {
            args: Prisma.BookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.BookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      FollowBook: {
        payload: Prisma.$FollowBookPayload<ExtArgs>
        fields: Prisma.FollowBookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FollowBookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowBookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FollowBookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowBookPayload>
          }
          findFirst: {
            args: Prisma.FollowBookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowBookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FollowBookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowBookPayload>
          }
          findMany: {
            args: Prisma.FollowBookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowBookPayload>[]
          }
          create: {
            args: Prisma.FollowBookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowBookPayload>
          }
          createMany: {
            args: Prisma.FollowBookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FollowBookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowBookPayload>
          }
          update: {
            args: Prisma.FollowBookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowBookPayload>
          }
          deleteMany: {
            args: Prisma.FollowBookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FollowBookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FollowBookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FollowBookPayload>
          }
          aggregate: {
            args: Prisma.FollowBookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFollowBook>
          }
          groupBy: {
            args: Prisma.FollowBookGroupByArgs<ExtArgs>
            result: $Utils.Optional<FollowBookGroupByOutputType>[]
          }
          count: {
            args: Prisma.FollowBookCountArgs<ExtArgs>
            result: $Utils.Optional<FollowBookCountAggregateOutputType> | number
          }
        }
      }
      Likes: {
        payload: Prisma.$LikesPayload<ExtArgs>
        fields: Prisma.LikesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          findFirst: {
            args: Prisma.LikesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          findMany: {
            args: Prisma.LikesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>[]
          }
          create: {
            args: Prisma.LikesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          createMany: {
            args: Prisma.LikesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LikesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          update: {
            args: Prisma.LikesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          deleteMany: {
            args: Prisma.LikesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LikesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LikesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LikesPayload>
          }
          aggregate: {
            args: Prisma.LikesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLikes>
          }
          groupBy: {
            args: Prisma.LikesGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikesGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikesCountArgs<ExtArgs>
            result: $Utils.Optional<LikesCountAggregateOutputType> | number
          }
        }
      }
      Mark: {
        payload: Prisma.$MarkPayload<ExtArgs>
        fields: Prisma.MarkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MarkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MarkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>
          }
          findFirst: {
            args: Prisma.MarkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MarkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>
          }
          findMany: {
            args: Prisma.MarkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>[]
          }
          create: {
            args: Prisma.MarkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>
          }
          createMany: {
            args: Prisma.MarkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MarkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>
          }
          update: {
            args: Prisma.MarkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>
          }
          deleteMany: {
            args: Prisma.MarkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MarkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MarkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MarkPayload>
          }
          aggregate: {
            args: Prisma.MarkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMark>
          }
          groupBy: {
            args: Prisma.MarkGroupByArgs<ExtArgs>
            result: $Utils.Optional<MarkGroupByOutputType>[]
          }
          count: {
            args: Prisma.MarkCountArgs<ExtArgs>
            result: $Utils.Optional<MarkCountAggregateOutputType> | number
          }
        }
      }
      Member: {
        payload: Prisma.$MemberPayload<ExtArgs>
        fields: Prisma.MemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findFirst: {
            args: Prisma.MemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          findMany: {
            args: Prisma.MemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>[]
          }
          create: {
            args: Prisma.MemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          createMany: {
            args: Prisma.MemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.MemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          update: {
            args: Prisma.MemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          deleteMany: {
            args: Prisma.MemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MemberPayload>
          }
          aggregate: {
            args: Prisma.MemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMember>
          }
          groupBy: {
            args: Prisma.MemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<MemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.MemberCountArgs<ExtArgs>
            result: $Utils.Optional<MemberCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
      Talk: {
        payload: Prisma.$TalkPayload<ExtArgs>
        fields: Prisma.TalkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TalkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TalkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalkPayload>
          }
          findFirst: {
            args: Prisma.TalkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TalkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalkPayload>
          }
          findMany: {
            args: Prisma.TalkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalkPayload>[]
          }
          create: {
            args: Prisma.TalkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalkPayload>
          }
          createMany: {
            args: Prisma.TalkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TalkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalkPayload>
          }
          update: {
            args: Prisma.TalkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalkPayload>
          }
          deleteMany: {
            args: Prisma.TalkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TalkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TalkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalkPayload>
          }
          aggregate: {
            args: Prisma.TalkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTalk>
          }
          groupBy: {
            args: Prisma.TalkGroupByArgs<ExtArgs>
            result: $Utils.Optional<TalkGroupByOutputType>[]
          }
          count: {
            args: Prisma.TalkCountArgs<ExtArgs>
            result: $Utils.Optional<TalkCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    book?: BookOmit
    followBook?: FollowBookOmit
    likes?: LikesOmit
    mark?: MarkOmit
    member?: MemberOmit
    report?: ReportOmit
    talk?: TalkOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    FollowBook: number
    Mark: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    FollowBook?: boolean | BookCountOutputTypeCountFollowBookArgs
    Mark?: boolean | BookCountOutputTypeCountMarkArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountFollowBookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowBookWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountMarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarkWhereInput
  }


  /**
   * Count Type MarkCountOutputType
   */

  export type MarkCountOutputType = {
    Likes: number
    Report: number
    Talk: number
  }

  export type MarkCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Likes?: boolean | MarkCountOutputTypeCountLikesArgs
    Report?: boolean | MarkCountOutputTypeCountReportArgs
    Talk?: boolean | MarkCountOutputTypeCountTalkArgs
  }

  // Custom InputTypes
  /**
   * MarkCountOutputType without action
   */
  export type MarkCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MarkCountOutputType
     */
    select?: MarkCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MarkCountOutputType without action
   */
  export type MarkCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikesWhereInput
  }

  /**
   * MarkCountOutputType without action
   */
  export type MarkCountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * MarkCountOutputType without action
   */
  export type MarkCountOutputTypeCountTalkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TalkWhereInput
  }


  /**
   * Count Type MemberCountOutputType
   */

  export type MemberCountOutputType = {
    Book: number
    FollowBook: number
    Likes: number
    Mark: number
    Report: number
    Talk: number
  }

  export type MemberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Book?: boolean | MemberCountOutputTypeCountBookArgs
    FollowBook?: boolean | MemberCountOutputTypeCountFollowBookArgs
    Likes?: boolean | MemberCountOutputTypeCountLikesArgs
    Mark?: boolean | MemberCountOutputTypeCountMarkArgs
    Report?: boolean | MemberCountOutputTypeCountReportArgs
    Talk?: boolean | MemberCountOutputTypeCountTalkArgs
  }

  // Custom InputTypes
  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MemberCountOutputType
     */
    select?: MemberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountBookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountFollowBookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowBookWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikesWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountMarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarkWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * MemberCountOutputType without action
   */
  export type MemberCountOutputTypeCountTalkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TalkWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    id: number | null
    member: number | null
  }

  export type BookSumAggregateOutputType = {
    id: number | null
    member: number | null
  }

  export type BookMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    member: number | null
    title: string | null
    withdel: boolean | null
    ispublic: boolean | null
    remark: string | null
  }

  export type BookMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    member: number | null
    title: string | null
    withdel: boolean | null
    ispublic: boolean | null
    remark: string | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    member: number
    title: number
    withdel: number
    ispublic: number
    remark: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    id?: true
    member?: true
  }

  export type BookSumAggregateInputType = {
    id?: true
    member?: true
  }

  export type BookMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    member?: true
    title?: true
    withdel?: true
    ispublic?: true
    remark?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    member?: true
    title?: true
    withdel?: true
    ispublic?: true
    remark?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    member?: true
    title?: true
    withdel?: true
    ispublic?: true
    remark?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book to aggregate.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
    orderBy?: BookOrderByWithAggregationInput | BookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    id: number
    createdAt: Date | null
    updatedAt: Date | null
    member: number
    title: string
    withdel: boolean
    ispublic: boolean
    remark: string | null
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    member?: boolean
    title?: boolean
    withdel?: boolean
    ispublic?: boolean
    remark?: boolean
    Member?: boolean | MemberDefaultArgs<ExtArgs>
    FollowBook?: boolean | Book$FollowBookArgs<ExtArgs>
    Mark?: boolean | Book$MarkArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>



  export type BookSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    member?: boolean
    title?: boolean
    withdel?: boolean
    ispublic?: boolean
    remark?: boolean
  }

  export type BookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "member" | "title" | "withdel" | "ispublic" | "remark", ExtArgs["result"]["book"]>
  export type BookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Member?: boolean | MemberDefaultArgs<ExtArgs>
    FollowBook?: boolean | Book$FollowBookArgs<ExtArgs>
    Mark?: boolean | Book$MarkArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Book"
    objects: {
      Member: Prisma.$MemberPayload<ExtArgs>
      FollowBook: Prisma.$FollowBookPayload<ExtArgs>[]
      Mark: Prisma.$MarkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date | null
      updatedAt: Date | null
      member: number
      title: string
      withdel: boolean
      ispublic: boolean
      remark: string | null
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = $Result.GetResult<Prisma.$BookPayload, S>

  type BookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface BookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Book'], meta: { name: 'Book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookFindUniqueArgs>(args: SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookFindFirstArgs>(args?: SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookFindManyArgs>(args?: SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends BookCreateArgs>(args: SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {BookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookCreateManyArgs>(args?: SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends BookDeleteArgs>(args: SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookUpdateArgs>(args: SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookDeleteManyArgs>(args?: SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookUpdateManyArgs>(args: SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends BookUpsertArgs>(args: SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
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
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Book model
   */
  readonly fields: BookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    FollowBook<T extends Book$FollowBookArgs<ExtArgs> = {}>(args?: Subset<T, Book$FollowBookArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Mark<T extends Book$MarkArgs<ExtArgs> = {}>(args?: Subset<T, Book$MarkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Book model
   */
  interface BookFieldRefs {
    readonly id: FieldRef<"Book", 'Int'>
    readonly createdAt: FieldRef<"Book", 'DateTime'>
    readonly updatedAt: FieldRef<"Book", 'DateTime'>
    readonly member: FieldRef<"Book", 'Int'>
    readonly title: FieldRef<"Book", 'String'>
    readonly withdel: FieldRef<"Book", 'Boolean'>
    readonly ispublic: FieldRef<"Book", 'Boolean'>
    readonly remark: FieldRef<"Book", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Book findUnique
   */
  export type BookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findFirst
   */
  export type BookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findMany
   */
  export type BookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book create
   */
  export type BookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to create a Book.
     */
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }

  /**
   * Book createMany
   */
  export type BookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book update
   */
  export type BookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to update a Book.
     */
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book upsert
   */
  export type BookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The filter to search for the Book to update in case it exists.
     */
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     */
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }

  /**
   * Book delete
   */
  export type BookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter which Book to delete.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to delete.
     */
    limit?: number
  }

  /**
   * Book.FollowBook
   */
  export type Book$FollowBookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowBook
     */
    select?: FollowBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowBook
     */
    omit?: FollowBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowBookInclude<ExtArgs> | null
    where?: FollowBookWhereInput
    orderBy?: FollowBookOrderByWithRelationInput | FollowBookOrderByWithRelationInput[]
    cursor?: FollowBookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowBookScalarFieldEnum | FollowBookScalarFieldEnum[]
  }

  /**
   * Book.Mark
   */
  export type Book$MarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    where?: MarkWhereInput
    orderBy?: MarkOrderByWithRelationInput | MarkOrderByWithRelationInput[]
    cursor?: MarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarkScalarFieldEnum | MarkScalarFieldEnum[]
  }

  /**
   * Book without action
   */
  export type BookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
  }


  /**
   * Model FollowBook
   */

  export type AggregateFollowBook = {
    _count: FollowBookCountAggregateOutputType | null
    _avg: FollowBookAvgAggregateOutputType | null
    _sum: FollowBookSumAggregateOutputType | null
    _min: FollowBookMinAggregateOutputType | null
    _max: FollowBookMaxAggregateOutputType | null
  }

  export type FollowBookAvgAggregateOutputType = {
    id: number | null
    book: number | null
    member: number | null
  }

  export type FollowBookSumAggregateOutputType = {
    id: number | null
    book: number | null
    member: number | null
  }

  export type FollowBookMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    book: number | null
    member: number | null
  }

  export type FollowBookMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    book: number | null
    member: number | null
  }

  export type FollowBookCountAggregateOutputType = {
    id: number
    createdAt: number
    book: number
    member: number
    _all: number
  }


  export type FollowBookAvgAggregateInputType = {
    id?: true
    book?: true
    member?: true
  }

  export type FollowBookSumAggregateInputType = {
    id?: true
    book?: true
    member?: true
  }

  export type FollowBookMinAggregateInputType = {
    id?: true
    createdAt?: true
    book?: true
    member?: true
  }

  export type FollowBookMaxAggregateInputType = {
    id?: true
    createdAt?: true
    book?: true
    member?: true
  }

  export type FollowBookCountAggregateInputType = {
    id?: true
    createdAt?: true
    book?: true
    member?: true
    _all?: true
  }

  export type FollowBookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FollowBook to aggregate.
     */
    where?: FollowBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowBooks to fetch.
     */
    orderBy?: FollowBookOrderByWithRelationInput | FollowBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FollowBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FollowBooks
    **/
    _count?: true | FollowBookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FollowBookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FollowBookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FollowBookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FollowBookMaxAggregateInputType
  }

  export type GetFollowBookAggregateType<T extends FollowBookAggregateArgs> = {
        [P in keyof T & keyof AggregateFollowBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFollowBook[P]>
      : GetScalarType<T[P], AggregateFollowBook[P]>
  }




  export type FollowBookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FollowBookWhereInput
    orderBy?: FollowBookOrderByWithAggregationInput | FollowBookOrderByWithAggregationInput[]
    by: FollowBookScalarFieldEnum[] | FollowBookScalarFieldEnum
    having?: FollowBookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FollowBookCountAggregateInputType | true
    _avg?: FollowBookAvgAggregateInputType
    _sum?: FollowBookSumAggregateInputType
    _min?: FollowBookMinAggregateInputType
    _max?: FollowBookMaxAggregateInputType
  }

  export type FollowBookGroupByOutputType = {
    id: number
    createdAt: Date | null
    book: number
    member: number | null
    _count: FollowBookCountAggregateOutputType | null
    _avg: FollowBookAvgAggregateOutputType | null
    _sum: FollowBookSumAggregateOutputType | null
    _min: FollowBookMinAggregateOutputType | null
    _max: FollowBookMaxAggregateOutputType | null
  }

  type GetFollowBookGroupByPayload<T extends FollowBookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FollowBookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FollowBookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FollowBookGroupByOutputType[P]>
            : GetScalarType<T[P], FollowBookGroupByOutputType[P]>
        }
      >
    >


  export type FollowBookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    book?: boolean
    member?: boolean
    Book?: boolean | BookDefaultArgs<ExtArgs>
    Member?: boolean | FollowBook$MemberArgs<ExtArgs>
  }, ExtArgs["result"]["followBook"]>



  export type FollowBookSelectScalar = {
    id?: boolean
    createdAt?: boolean
    book?: boolean
    member?: boolean
  }

  export type FollowBookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "book" | "member", ExtArgs["result"]["followBook"]>
  export type FollowBookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Book?: boolean | BookDefaultArgs<ExtArgs>
    Member?: boolean | FollowBook$MemberArgs<ExtArgs>
  }

  export type $FollowBookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FollowBook"
    objects: {
      Book: Prisma.$BookPayload<ExtArgs>
      Member: Prisma.$MemberPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date | null
      book: number
      member: number | null
    }, ExtArgs["result"]["followBook"]>
    composites: {}
  }

  type FollowBookGetPayload<S extends boolean | null | undefined | FollowBookDefaultArgs> = $Result.GetResult<Prisma.$FollowBookPayload, S>

  type FollowBookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FollowBookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FollowBookCountAggregateInputType | true
    }

  export interface FollowBookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FollowBook'], meta: { name: 'FollowBook' } }
    /**
     * Find zero or one FollowBook that matches the filter.
     * @param {FollowBookFindUniqueArgs} args - Arguments to find a FollowBook
     * @example
     * // Get one FollowBook
     * const followBook = await prisma.followBook.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FollowBookFindUniqueArgs>(args: SelectSubset<T, FollowBookFindUniqueArgs<ExtArgs>>): Prisma__FollowBookClient<$Result.GetResult<Prisma.$FollowBookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FollowBook that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FollowBookFindUniqueOrThrowArgs} args - Arguments to find a FollowBook
     * @example
     * // Get one FollowBook
     * const followBook = await prisma.followBook.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FollowBookFindUniqueOrThrowArgs>(args: SelectSubset<T, FollowBookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FollowBookClient<$Result.GetResult<Prisma.$FollowBookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FollowBook that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowBookFindFirstArgs} args - Arguments to find a FollowBook
     * @example
     * // Get one FollowBook
     * const followBook = await prisma.followBook.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FollowBookFindFirstArgs>(args?: SelectSubset<T, FollowBookFindFirstArgs<ExtArgs>>): Prisma__FollowBookClient<$Result.GetResult<Prisma.$FollowBookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FollowBook that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowBookFindFirstOrThrowArgs} args - Arguments to find a FollowBook
     * @example
     * // Get one FollowBook
     * const followBook = await prisma.followBook.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FollowBookFindFirstOrThrowArgs>(args?: SelectSubset<T, FollowBookFindFirstOrThrowArgs<ExtArgs>>): Prisma__FollowBookClient<$Result.GetResult<Prisma.$FollowBookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FollowBooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowBookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FollowBooks
     * const followBooks = await prisma.followBook.findMany()
     * 
     * // Get first 10 FollowBooks
     * const followBooks = await prisma.followBook.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const followBookWithIdOnly = await prisma.followBook.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FollowBookFindManyArgs>(args?: SelectSubset<T, FollowBookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FollowBook.
     * @param {FollowBookCreateArgs} args - Arguments to create a FollowBook.
     * @example
     * // Create one FollowBook
     * const FollowBook = await prisma.followBook.create({
     *   data: {
     *     // ... data to create a FollowBook
     *   }
     * })
     * 
     */
    create<T extends FollowBookCreateArgs>(args: SelectSubset<T, FollowBookCreateArgs<ExtArgs>>): Prisma__FollowBookClient<$Result.GetResult<Prisma.$FollowBookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FollowBooks.
     * @param {FollowBookCreateManyArgs} args - Arguments to create many FollowBooks.
     * @example
     * // Create many FollowBooks
     * const followBook = await prisma.followBook.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FollowBookCreateManyArgs>(args?: SelectSubset<T, FollowBookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FollowBook.
     * @param {FollowBookDeleteArgs} args - Arguments to delete one FollowBook.
     * @example
     * // Delete one FollowBook
     * const FollowBook = await prisma.followBook.delete({
     *   where: {
     *     // ... filter to delete one FollowBook
     *   }
     * })
     * 
     */
    delete<T extends FollowBookDeleteArgs>(args: SelectSubset<T, FollowBookDeleteArgs<ExtArgs>>): Prisma__FollowBookClient<$Result.GetResult<Prisma.$FollowBookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FollowBook.
     * @param {FollowBookUpdateArgs} args - Arguments to update one FollowBook.
     * @example
     * // Update one FollowBook
     * const followBook = await prisma.followBook.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FollowBookUpdateArgs>(args: SelectSubset<T, FollowBookUpdateArgs<ExtArgs>>): Prisma__FollowBookClient<$Result.GetResult<Prisma.$FollowBookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FollowBooks.
     * @param {FollowBookDeleteManyArgs} args - Arguments to filter FollowBooks to delete.
     * @example
     * // Delete a few FollowBooks
     * const { count } = await prisma.followBook.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FollowBookDeleteManyArgs>(args?: SelectSubset<T, FollowBookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FollowBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowBookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FollowBooks
     * const followBook = await prisma.followBook.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FollowBookUpdateManyArgs>(args: SelectSubset<T, FollowBookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FollowBook.
     * @param {FollowBookUpsertArgs} args - Arguments to update or create a FollowBook.
     * @example
     * // Update or create a FollowBook
     * const followBook = await prisma.followBook.upsert({
     *   create: {
     *     // ... data to create a FollowBook
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FollowBook we want to update
     *   }
     * })
     */
    upsert<T extends FollowBookUpsertArgs>(args: SelectSubset<T, FollowBookUpsertArgs<ExtArgs>>): Prisma__FollowBookClient<$Result.GetResult<Prisma.$FollowBookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FollowBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowBookCountArgs} args - Arguments to filter FollowBooks to count.
     * @example
     * // Count the number of FollowBooks
     * const count = await prisma.followBook.count({
     *   where: {
     *     // ... the filter for the FollowBooks we want to count
     *   }
     * })
    **/
    count<T extends FollowBookCountArgs>(
      args?: Subset<T, FollowBookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FollowBookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FollowBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowBookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FollowBookAggregateArgs>(args: Subset<T, FollowBookAggregateArgs>): Prisma.PrismaPromise<GetFollowBookAggregateType<T>>

    /**
     * Group by FollowBook.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FollowBookGroupByArgs} args - Group by arguments.
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
      T extends FollowBookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FollowBookGroupByArgs['orderBy'] }
        : { orderBy?: FollowBookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FollowBookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFollowBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FollowBook model
   */
  readonly fields: FollowBookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FollowBook.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FollowBookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Member<T extends FollowBook$MemberArgs<ExtArgs> = {}>(args?: Subset<T, FollowBook$MemberArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the FollowBook model
   */
  interface FollowBookFieldRefs {
    readonly id: FieldRef<"FollowBook", 'Int'>
    readonly createdAt: FieldRef<"FollowBook", 'DateTime'>
    readonly book: FieldRef<"FollowBook", 'Int'>
    readonly member: FieldRef<"FollowBook", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * FollowBook findUnique
   */
  export type FollowBookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowBook
     */
    select?: FollowBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowBook
     */
    omit?: FollowBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowBookInclude<ExtArgs> | null
    /**
     * Filter, which FollowBook to fetch.
     */
    where: FollowBookWhereUniqueInput
  }

  /**
   * FollowBook findUniqueOrThrow
   */
  export type FollowBookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowBook
     */
    select?: FollowBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowBook
     */
    omit?: FollowBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowBookInclude<ExtArgs> | null
    /**
     * Filter, which FollowBook to fetch.
     */
    where: FollowBookWhereUniqueInput
  }

  /**
   * FollowBook findFirst
   */
  export type FollowBookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowBook
     */
    select?: FollowBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowBook
     */
    omit?: FollowBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowBookInclude<ExtArgs> | null
    /**
     * Filter, which FollowBook to fetch.
     */
    where?: FollowBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowBooks to fetch.
     */
    orderBy?: FollowBookOrderByWithRelationInput | FollowBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FollowBooks.
     */
    cursor?: FollowBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FollowBooks.
     */
    distinct?: FollowBookScalarFieldEnum | FollowBookScalarFieldEnum[]
  }

  /**
   * FollowBook findFirstOrThrow
   */
  export type FollowBookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowBook
     */
    select?: FollowBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowBook
     */
    omit?: FollowBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowBookInclude<ExtArgs> | null
    /**
     * Filter, which FollowBook to fetch.
     */
    where?: FollowBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowBooks to fetch.
     */
    orderBy?: FollowBookOrderByWithRelationInput | FollowBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FollowBooks.
     */
    cursor?: FollowBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FollowBooks.
     */
    distinct?: FollowBookScalarFieldEnum | FollowBookScalarFieldEnum[]
  }

  /**
   * FollowBook findMany
   */
  export type FollowBookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowBook
     */
    select?: FollowBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowBook
     */
    omit?: FollowBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowBookInclude<ExtArgs> | null
    /**
     * Filter, which FollowBooks to fetch.
     */
    where?: FollowBookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FollowBooks to fetch.
     */
    orderBy?: FollowBookOrderByWithRelationInput | FollowBookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FollowBooks.
     */
    cursor?: FollowBookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FollowBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FollowBooks.
     */
    skip?: number
    distinct?: FollowBookScalarFieldEnum | FollowBookScalarFieldEnum[]
  }

  /**
   * FollowBook create
   */
  export type FollowBookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowBook
     */
    select?: FollowBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowBook
     */
    omit?: FollowBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowBookInclude<ExtArgs> | null
    /**
     * The data needed to create a FollowBook.
     */
    data: XOR<FollowBookCreateInput, FollowBookUncheckedCreateInput>
  }

  /**
   * FollowBook createMany
   */
  export type FollowBookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FollowBooks.
     */
    data: FollowBookCreateManyInput | FollowBookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FollowBook update
   */
  export type FollowBookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowBook
     */
    select?: FollowBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowBook
     */
    omit?: FollowBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowBookInclude<ExtArgs> | null
    /**
     * The data needed to update a FollowBook.
     */
    data: XOR<FollowBookUpdateInput, FollowBookUncheckedUpdateInput>
    /**
     * Choose, which FollowBook to update.
     */
    where: FollowBookWhereUniqueInput
  }

  /**
   * FollowBook updateMany
   */
  export type FollowBookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FollowBooks.
     */
    data: XOR<FollowBookUpdateManyMutationInput, FollowBookUncheckedUpdateManyInput>
    /**
     * Filter which FollowBooks to update
     */
    where?: FollowBookWhereInput
    /**
     * Limit how many FollowBooks to update.
     */
    limit?: number
  }

  /**
   * FollowBook upsert
   */
  export type FollowBookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowBook
     */
    select?: FollowBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowBook
     */
    omit?: FollowBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowBookInclude<ExtArgs> | null
    /**
     * The filter to search for the FollowBook to update in case it exists.
     */
    where: FollowBookWhereUniqueInput
    /**
     * In case the FollowBook found by the `where` argument doesn't exist, create a new FollowBook with this data.
     */
    create: XOR<FollowBookCreateInput, FollowBookUncheckedCreateInput>
    /**
     * In case the FollowBook was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FollowBookUpdateInput, FollowBookUncheckedUpdateInput>
  }

  /**
   * FollowBook delete
   */
  export type FollowBookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowBook
     */
    select?: FollowBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowBook
     */
    omit?: FollowBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowBookInclude<ExtArgs> | null
    /**
     * Filter which FollowBook to delete.
     */
    where: FollowBookWhereUniqueInput
  }

  /**
   * FollowBook deleteMany
   */
  export type FollowBookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FollowBooks to delete
     */
    where?: FollowBookWhereInput
    /**
     * Limit how many FollowBooks to delete.
     */
    limit?: number
  }

  /**
   * FollowBook.Member
   */
  export type FollowBook$MemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
  }

  /**
   * FollowBook without action
   */
  export type FollowBookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowBook
     */
    select?: FollowBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowBook
     */
    omit?: FollowBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowBookInclude<ExtArgs> | null
  }


  /**
   * Model Likes
   */

  export type AggregateLikes = {
    _count: LikesCountAggregateOutputType | null
    _avg: LikesAvgAggregateOutputType | null
    _sum: LikesSumAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  export type LikesAvgAggregateOutputType = {
    id: number | null
    mark: number | null
    member: number | null
  }

  export type LikesSumAggregateOutputType = {
    id: number | null
    mark: number | null
    member: number | null
  }

  export type LikesMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    mark: number | null
    member: number | null
  }

  export type LikesMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    mark: number | null
    member: number | null
  }

  export type LikesCountAggregateOutputType = {
    id: number
    createdAt: number
    mark: number
    member: number
    _all: number
  }


  export type LikesAvgAggregateInputType = {
    id?: true
    mark?: true
    member?: true
  }

  export type LikesSumAggregateInputType = {
    id?: true
    mark?: true
    member?: true
  }

  export type LikesMinAggregateInputType = {
    id?: true
    createdAt?: true
    mark?: true
    member?: true
  }

  export type LikesMaxAggregateInputType = {
    id?: true
    createdAt?: true
    mark?: true
    member?: true
  }

  export type LikesCountAggregateInputType = {
    id?: true
    createdAt?: true
    mark?: true
    member?: true
    _all?: true
  }

  export type LikesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to aggregate.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Likes
    **/
    _count?: true | LikesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LikesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LikesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikesMaxAggregateInputType
  }

  export type GetLikesAggregateType<T extends LikesAggregateArgs> = {
        [P in keyof T & keyof AggregateLikes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikes[P]>
      : GetScalarType<T[P], AggregateLikes[P]>
  }




  export type LikesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikesWhereInput
    orderBy?: LikesOrderByWithAggregationInput | LikesOrderByWithAggregationInput[]
    by: LikesScalarFieldEnum[] | LikesScalarFieldEnum
    having?: LikesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikesCountAggregateInputType | true
    _avg?: LikesAvgAggregateInputType
    _sum?: LikesSumAggregateInputType
    _min?: LikesMinAggregateInputType
    _max?: LikesMaxAggregateInputType
  }

  export type LikesGroupByOutputType = {
    id: number
    createdAt: Date | null
    mark: number
    member: number | null
    _count: LikesCountAggregateOutputType | null
    _avg: LikesAvgAggregateOutputType | null
    _sum: LikesSumAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  type GetLikesGroupByPayload<T extends LikesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikesGroupByOutputType[P]>
            : GetScalarType<T[P], LikesGroupByOutputType[P]>
        }
      >
    >


  export type LikesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    mark?: boolean
    member?: boolean
    Mark?: boolean | MarkDefaultArgs<ExtArgs>
    Member?: boolean | Likes$MemberArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>



  export type LikesSelectScalar = {
    id?: boolean
    createdAt?: boolean
    mark?: boolean
    member?: boolean
  }

  export type LikesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "mark" | "member", ExtArgs["result"]["likes"]>
  export type LikesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Mark?: boolean | MarkDefaultArgs<ExtArgs>
    Member?: boolean | Likes$MemberArgs<ExtArgs>
  }

  export type $LikesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Likes"
    objects: {
      Mark: Prisma.$MarkPayload<ExtArgs>
      Member: Prisma.$MemberPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date | null
      mark: number
      member: number | null
    }, ExtArgs["result"]["likes"]>
    composites: {}
  }

  type LikesGetPayload<S extends boolean | null | undefined | LikesDefaultArgs> = $Result.GetResult<Prisma.$LikesPayload, S>

  type LikesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LikesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikesCountAggregateInputType | true
    }

  export interface LikesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Likes'], meta: { name: 'Likes' } }
    /**
     * Find zero or one Likes that matches the filter.
     * @param {LikesFindUniqueArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LikesFindUniqueArgs>(args: SelectSubset<T, LikesFindUniqueArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Likes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LikesFindUniqueOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LikesFindUniqueOrThrowArgs>(args: SelectSubset<T, LikesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindFirstArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LikesFindFirstArgs>(args?: SelectSubset<T, LikesFindFirstArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Likes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindFirstOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LikesFindFirstOrThrowArgs>(args?: SelectSubset<T, LikesFindFirstOrThrowArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.likes.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.likes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likesWithIdOnly = await prisma.likes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LikesFindManyArgs>(args?: SelectSubset<T, LikesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Likes.
     * @param {LikesCreateArgs} args - Arguments to create a Likes.
     * @example
     * // Create one Likes
     * const Likes = await prisma.likes.create({
     *   data: {
     *     // ... data to create a Likes
     *   }
     * })
     * 
     */
    create<T extends LikesCreateArgs>(args: SelectSubset<T, LikesCreateArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Likes.
     * @param {LikesCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const likes = await prisma.likes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LikesCreateManyArgs>(args?: SelectSubset<T, LikesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Likes.
     * @param {LikesDeleteArgs} args - Arguments to delete one Likes.
     * @example
     * // Delete one Likes
     * const Likes = await prisma.likes.delete({
     *   where: {
     *     // ... filter to delete one Likes
     *   }
     * })
     * 
     */
    delete<T extends LikesDeleteArgs>(args: SelectSubset<T, LikesDeleteArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Likes.
     * @param {LikesUpdateArgs} args - Arguments to update one Likes.
     * @example
     * // Update one Likes
     * const likes = await prisma.likes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LikesUpdateArgs>(args: SelectSubset<T, LikesUpdateArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Likes.
     * @param {LikesDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.likes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LikesDeleteManyArgs>(args?: SelectSubset<T, LikesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const likes = await prisma.likes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LikesUpdateManyArgs>(args: SelectSubset<T, LikesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Likes.
     * @param {LikesUpsertArgs} args - Arguments to update or create a Likes.
     * @example
     * // Update or create a Likes
     * const likes = await prisma.likes.upsert({
     *   create: {
     *     // ... data to create a Likes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Likes we want to update
     *   }
     * })
     */
    upsert<T extends LikesUpsertArgs>(args: SelectSubset<T, LikesUpsertArgs<ExtArgs>>): Prisma__LikesClient<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.likes.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends LikesCountArgs>(
      args?: Subset<T, LikesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikesAggregateArgs>(args: Subset<T, LikesAggregateArgs>): Prisma.PrismaPromise<GetLikesAggregateType<T>>

    /**
     * Group by Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesGroupByArgs} args - Group by arguments.
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
      T extends LikesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikesGroupByArgs['orderBy'] }
        : { orderBy?: LikesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LikesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Likes model
   */
  readonly fields: LikesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Likes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Mark<T extends MarkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarkDefaultArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Member<T extends Likes$MemberArgs<ExtArgs> = {}>(args?: Subset<T, Likes$MemberArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Likes model
   */
  interface LikesFieldRefs {
    readonly id: FieldRef<"Likes", 'Int'>
    readonly createdAt: FieldRef<"Likes", 'DateTime'>
    readonly mark: FieldRef<"Likes", 'Int'>
    readonly member: FieldRef<"Likes", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Likes findUnique
   */
  export type LikesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes findUniqueOrThrow
   */
  export type LikesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes findFirst
   */
  export type LikesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Likes findFirstOrThrow
   */
  export type LikesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Likes.
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Likes findMany
   */
  export type LikesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter, which Likes to fetch.
     */
    where?: LikesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Likes to fetch.
     */
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Likes.
     */
    cursor?: LikesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Likes.
     */
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Likes create
   */
  export type LikesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * The data needed to create a Likes.
     */
    data: XOR<LikesCreateInput, LikesUncheckedCreateInput>
  }

  /**
   * Likes createMany
   */
  export type LikesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Likes.
     */
    data: LikesCreateManyInput | LikesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Likes update
   */
  export type LikesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * The data needed to update a Likes.
     */
    data: XOR<LikesUpdateInput, LikesUncheckedUpdateInput>
    /**
     * Choose, which Likes to update.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes updateMany
   */
  export type LikesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Likes.
     */
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyInput>
    /**
     * Filter which Likes to update
     */
    where?: LikesWhereInput
    /**
     * Limit how many Likes to update.
     */
    limit?: number
  }

  /**
   * Likes upsert
   */
  export type LikesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * The filter to search for the Likes to update in case it exists.
     */
    where: LikesWhereUniqueInput
    /**
     * In case the Likes found by the `where` argument doesn't exist, create a new Likes with this data.
     */
    create: XOR<LikesCreateInput, LikesUncheckedCreateInput>
    /**
     * In case the Likes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikesUpdateInput, LikesUncheckedUpdateInput>
  }

  /**
   * Likes delete
   */
  export type LikesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    /**
     * Filter which Likes to delete.
     */
    where: LikesWhereUniqueInput
  }

  /**
   * Likes deleteMany
   */
  export type LikesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Likes to delete
     */
    where?: LikesWhereInput
    /**
     * Limit how many Likes to delete.
     */
    limit?: number
  }

  /**
   * Likes.Member
   */
  export type Likes$MemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
  }

  /**
   * Likes without action
   */
  export type LikesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
  }


  /**
   * Model Mark
   */

  export type AggregateMark = {
    _count: MarkCountAggregateOutputType | null
    _avg: MarkAvgAggregateOutputType | null
    _sum: MarkSumAggregateOutputType | null
    _min: MarkMinAggregateOutputType | null
    _max: MarkMaxAggregateOutputType | null
  }

  export type MarkAvgAggregateOutputType = {
    id: number | null
    book: number | null
    maker: number | null
  }

  export type MarkSumAggregateOutputType = {
    id: number | null
    book: number | null
    maker: number | null
  }

  export type MarkMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    book: number | null
    title: string | null
    link: string | null
    image: string | null
    maker: number | null
    remark: string | null
  }

  export type MarkMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    book: number | null
    title: string | null
    link: string | null
    image: string | null
    maker: number | null
    remark: string | null
  }

  export type MarkCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    book: number
    title: number
    link: number
    image: number
    maker: number
    remark: number
    _all: number
  }


  export type MarkAvgAggregateInputType = {
    id?: true
    book?: true
    maker?: true
  }

  export type MarkSumAggregateInputType = {
    id?: true
    book?: true
    maker?: true
  }

  export type MarkMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    book?: true
    title?: true
    link?: true
    image?: true
    maker?: true
    remark?: true
  }

  export type MarkMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    book?: true
    title?: true
    link?: true
    image?: true
    maker?: true
    remark?: true
  }

  export type MarkCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    book?: true
    title?: true
    link?: true
    image?: true
    maker?: true
    remark?: true
    _all?: true
  }

  export type MarkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Mark to aggregate.
     */
    where?: MarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarkOrderByWithRelationInput | MarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Marks
    **/
    _count?: true | MarkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MarkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MarkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MarkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MarkMaxAggregateInputType
  }

  export type GetMarkAggregateType<T extends MarkAggregateArgs> = {
        [P in keyof T & keyof AggregateMark]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMark[P]>
      : GetScalarType<T[P], AggregateMark[P]>
  }




  export type MarkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MarkWhereInput
    orderBy?: MarkOrderByWithAggregationInput | MarkOrderByWithAggregationInput[]
    by: MarkScalarFieldEnum[] | MarkScalarFieldEnum
    having?: MarkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MarkCountAggregateInputType | true
    _avg?: MarkAvgAggregateInputType
    _sum?: MarkSumAggregateInputType
    _min?: MarkMinAggregateInputType
    _max?: MarkMaxAggregateInputType
  }

  export type MarkGroupByOutputType = {
    id: number
    createdAt: Date | null
    updatedAt: Date | null
    book: number
    title: string
    link: string
    image: string | null
    maker: number | null
    remark: string | null
    _count: MarkCountAggregateOutputType | null
    _avg: MarkAvgAggregateOutputType | null
    _sum: MarkSumAggregateOutputType | null
    _min: MarkMinAggregateOutputType | null
    _max: MarkMaxAggregateOutputType | null
  }

  type GetMarkGroupByPayload<T extends MarkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MarkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MarkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MarkGroupByOutputType[P]>
            : GetScalarType<T[P], MarkGroupByOutputType[P]>
        }
      >
    >


  export type MarkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    book?: boolean
    title?: boolean
    link?: boolean
    image?: boolean
    maker?: boolean
    remark?: boolean
    Likes?: boolean | Mark$LikesArgs<ExtArgs>
    Book?: boolean | BookDefaultArgs<ExtArgs>
    Member?: boolean | Mark$MemberArgs<ExtArgs>
    Report?: boolean | Mark$ReportArgs<ExtArgs>
    Talk?: boolean | Mark$TalkArgs<ExtArgs>
    _count?: boolean | MarkCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mark"]>



  export type MarkSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    book?: boolean
    title?: boolean
    link?: boolean
    image?: boolean
    maker?: boolean
    remark?: boolean
  }

  export type MarkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "book" | "title" | "link" | "image" | "maker" | "remark", ExtArgs["result"]["mark"]>
  export type MarkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Likes?: boolean | Mark$LikesArgs<ExtArgs>
    Book?: boolean | BookDefaultArgs<ExtArgs>
    Member?: boolean | Mark$MemberArgs<ExtArgs>
    Report?: boolean | Mark$ReportArgs<ExtArgs>
    Talk?: boolean | Mark$TalkArgs<ExtArgs>
    _count?: boolean | MarkCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MarkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Mark"
    objects: {
      Likes: Prisma.$LikesPayload<ExtArgs>[]
      Book: Prisma.$BookPayload<ExtArgs>
      Member: Prisma.$MemberPayload<ExtArgs> | null
      Report: Prisma.$ReportPayload<ExtArgs>[]
      Talk: Prisma.$TalkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date | null
      updatedAt: Date | null
      book: number
      title: string
      link: string
      image: string | null
      maker: number | null
      remark: string | null
    }, ExtArgs["result"]["mark"]>
    composites: {}
  }

  type MarkGetPayload<S extends boolean | null | undefined | MarkDefaultArgs> = $Result.GetResult<Prisma.$MarkPayload, S>

  type MarkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MarkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MarkCountAggregateInputType | true
    }

  export interface MarkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Mark'], meta: { name: 'Mark' } }
    /**
     * Find zero or one Mark that matches the filter.
     * @param {MarkFindUniqueArgs} args - Arguments to find a Mark
     * @example
     * // Get one Mark
     * const mark = await prisma.mark.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MarkFindUniqueArgs>(args: SelectSubset<T, MarkFindUniqueArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Mark that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MarkFindUniqueOrThrowArgs} args - Arguments to find a Mark
     * @example
     * // Get one Mark
     * const mark = await prisma.mark.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MarkFindUniqueOrThrowArgs>(args: SelectSubset<T, MarkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mark that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkFindFirstArgs} args - Arguments to find a Mark
     * @example
     * // Get one Mark
     * const mark = await prisma.mark.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MarkFindFirstArgs>(args?: SelectSubset<T, MarkFindFirstArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Mark that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkFindFirstOrThrowArgs} args - Arguments to find a Mark
     * @example
     * // Get one Mark
     * const mark = await prisma.mark.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MarkFindFirstOrThrowArgs>(args?: SelectSubset<T, MarkFindFirstOrThrowArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Marks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Marks
     * const marks = await prisma.mark.findMany()
     * 
     * // Get first 10 Marks
     * const marks = await prisma.mark.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const markWithIdOnly = await prisma.mark.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MarkFindManyArgs>(args?: SelectSubset<T, MarkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Mark.
     * @param {MarkCreateArgs} args - Arguments to create a Mark.
     * @example
     * // Create one Mark
     * const Mark = await prisma.mark.create({
     *   data: {
     *     // ... data to create a Mark
     *   }
     * })
     * 
     */
    create<T extends MarkCreateArgs>(args: SelectSubset<T, MarkCreateArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Marks.
     * @param {MarkCreateManyArgs} args - Arguments to create many Marks.
     * @example
     * // Create many Marks
     * const mark = await prisma.mark.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MarkCreateManyArgs>(args?: SelectSubset<T, MarkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Mark.
     * @param {MarkDeleteArgs} args - Arguments to delete one Mark.
     * @example
     * // Delete one Mark
     * const Mark = await prisma.mark.delete({
     *   where: {
     *     // ... filter to delete one Mark
     *   }
     * })
     * 
     */
    delete<T extends MarkDeleteArgs>(args: SelectSubset<T, MarkDeleteArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Mark.
     * @param {MarkUpdateArgs} args - Arguments to update one Mark.
     * @example
     * // Update one Mark
     * const mark = await prisma.mark.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MarkUpdateArgs>(args: SelectSubset<T, MarkUpdateArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Marks.
     * @param {MarkDeleteManyArgs} args - Arguments to filter Marks to delete.
     * @example
     * // Delete a few Marks
     * const { count } = await prisma.mark.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MarkDeleteManyArgs>(args?: SelectSubset<T, MarkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Marks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Marks
     * const mark = await prisma.mark.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MarkUpdateManyArgs>(args: SelectSubset<T, MarkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Mark.
     * @param {MarkUpsertArgs} args - Arguments to update or create a Mark.
     * @example
     * // Update or create a Mark
     * const mark = await prisma.mark.upsert({
     *   create: {
     *     // ... data to create a Mark
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mark we want to update
     *   }
     * })
     */
    upsert<T extends MarkUpsertArgs>(args: SelectSubset<T, MarkUpsertArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Marks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkCountArgs} args - Arguments to filter Marks to count.
     * @example
     * // Count the number of Marks
     * const count = await prisma.mark.count({
     *   where: {
     *     // ... the filter for the Marks we want to count
     *   }
     * })
    **/
    count<T extends MarkCountArgs>(
      args?: Subset<T, MarkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MarkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MarkAggregateArgs>(args: Subset<T, MarkAggregateArgs>): Prisma.PrismaPromise<GetMarkAggregateType<T>>

    /**
     * Group by Mark.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MarkGroupByArgs} args - Group by arguments.
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
      T extends MarkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MarkGroupByArgs['orderBy'] }
        : { orderBy?: MarkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MarkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMarkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Mark model
   */
  readonly fields: MarkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mark.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MarkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Likes<T extends Mark$LikesArgs<ExtArgs> = {}>(args?: Subset<T, Mark$LikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Member<T extends Mark$MemberArgs<ExtArgs> = {}>(args?: Subset<T, Mark$MemberArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Report<T extends Mark$ReportArgs<ExtArgs> = {}>(args?: Subset<T, Mark$ReportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Talk<T extends Mark$TalkArgs<ExtArgs> = {}>(args?: Subset<T, Mark$TalkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TalkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Mark model
   */
  interface MarkFieldRefs {
    readonly id: FieldRef<"Mark", 'Int'>
    readonly createdAt: FieldRef<"Mark", 'DateTime'>
    readonly updatedAt: FieldRef<"Mark", 'DateTime'>
    readonly book: FieldRef<"Mark", 'Int'>
    readonly title: FieldRef<"Mark", 'String'>
    readonly link: FieldRef<"Mark", 'String'>
    readonly image: FieldRef<"Mark", 'String'>
    readonly maker: FieldRef<"Mark", 'Int'>
    readonly remark: FieldRef<"Mark", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Mark findUnique
   */
  export type MarkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * Filter, which Mark to fetch.
     */
    where: MarkWhereUniqueInput
  }

  /**
   * Mark findUniqueOrThrow
   */
  export type MarkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * Filter, which Mark to fetch.
     */
    where: MarkWhereUniqueInput
  }

  /**
   * Mark findFirst
   */
  export type MarkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * Filter, which Mark to fetch.
     */
    where?: MarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarkOrderByWithRelationInput | MarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Marks.
     */
    cursor?: MarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marks.
     */
    distinct?: MarkScalarFieldEnum | MarkScalarFieldEnum[]
  }

  /**
   * Mark findFirstOrThrow
   */
  export type MarkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * Filter, which Mark to fetch.
     */
    where?: MarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarkOrderByWithRelationInput | MarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Marks.
     */
    cursor?: MarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Marks.
     */
    distinct?: MarkScalarFieldEnum | MarkScalarFieldEnum[]
  }

  /**
   * Mark findMany
   */
  export type MarkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * Filter, which Marks to fetch.
     */
    where?: MarkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Marks to fetch.
     */
    orderBy?: MarkOrderByWithRelationInput | MarkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Marks.
     */
    cursor?: MarkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Marks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Marks.
     */
    skip?: number
    distinct?: MarkScalarFieldEnum | MarkScalarFieldEnum[]
  }

  /**
   * Mark create
   */
  export type MarkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * The data needed to create a Mark.
     */
    data: XOR<MarkCreateInput, MarkUncheckedCreateInput>
  }

  /**
   * Mark createMany
   */
  export type MarkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Marks.
     */
    data: MarkCreateManyInput | MarkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Mark update
   */
  export type MarkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * The data needed to update a Mark.
     */
    data: XOR<MarkUpdateInput, MarkUncheckedUpdateInput>
    /**
     * Choose, which Mark to update.
     */
    where: MarkWhereUniqueInput
  }

  /**
   * Mark updateMany
   */
  export type MarkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Marks.
     */
    data: XOR<MarkUpdateManyMutationInput, MarkUncheckedUpdateManyInput>
    /**
     * Filter which Marks to update
     */
    where?: MarkWhereInput
    /**
     * Limit how many Marks to update.
     */
    limit?: number
  }

  /**
   * Mark upsert
   */
  export type MarkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * The filter to search for the Mark to update in case it exists.
     */
    where: MarkWhereUniqueInput
    /**
     * In case the Mark found by the `where` argument doesn't exist, create a new Mark with this data.
     */
    create: XOR<MarkCreateInput, MarkUncheckedCreateInput>
    /**
     * In case the Mark was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MarkUpdateInput, MarkUncheckedUpdateInput>
  }

  /**
   * Mark delete
   */
  export type MarkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    /**
     * Filter which Mark to delete.
     */
    where: MarkWhereUniqueInput
  }

  /**
   * Mark deleteMany
   */
  export type MarkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Marks to delete
     */
    where?: MarkWhereInput
    /**
     * Limit how many Marks to delete.
     */
    limit?: number
  }

  /**
   * Mark.Likes
   */
  export type Mark$LikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    where?: LikesWhereInput
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    cursor?: LikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Mark.Member
   */
  export type Mark$MemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
  }

  /**
   * Mark.Report
   */
  export type Mark$ReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Mark.Talk
   */
  export type Mark$TalkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talk
     */
    select?: TalkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talk
     */
    omit?: TalkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalkInclude<ExtArgs> | null
    where?: TalkWhereInput
    orderBy?: TalkOrderByWithRelationInput | TalkOrderByWithRelationInput[]
    cursor?: TalkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TalkScalarFieldEnum | TalkScalarFieldEnum[]
  }

  /**
   * Mark without action
   */
  export type MarkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
  }


  /**
   * Model Member
   */

  export type AggregateMember = {
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  export type MemberAvgAggregateOutputType = {
    id: number | null
  }

  export type MemberSumAggregateOutputType = {
    id: number | null
  }

  export type MemberMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    nickname: string | null
    email: string | null
    passwd: string | null
    isadmin: boolean | null
    image: string | null
    emailcheck: string | null
    outdt: string | null
    descript: string | null
  }

  export type MemberMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    nickname: string | null
    email: string | null
    passwd: string | null
    isadmin: boolean | null
    image: string | null
    emailcheck: string | null
    outdt: string | null
    descript: string | null
  }

  export type MemberCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    nickname: number
    email: number
    passwd: number
    isadmin: number
    image: number
    emailcheck: number
    outdt: number
    descript: number
    _all: number
  }


  export type MemberAvgAggregateInputType = {
    id?: true
  }

  export type MemberSumAggregateInputType = {
    id?: true
  }

  export type MemberMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    nickname?: true
    email?: true
    passwd?: true
    isadmin?: true
    image?: true
    emailcheck?: true
    outdt?: true
    descript?: true
  }

  export type MemberMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    nickname?: true
    email?: true
    passwd?: true
    isadmin?: true
    image?: true
    emailcheck?: true
    outdt?: true
    descript?: true
  }

  export type MemberCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    nickname?: true
    email?: true
    passwd?: true
    isadmin?: true
    image?: true
    emailcheck?: true
    outdt?: true
    descript?: true
    _all?: true
  }

  export type MemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Member to aggregate.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Members
    **/
    _count?: true | MemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MemberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MemberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MemberMaxAggregateInputType
  }

  export type GetMemberAggregateType<T extends MemberAggregateArgs> = {
        [P in keyof T & keyof AggregateMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMember[P]>
      : GetScalarType<T[P], AggregateMember[P]>
  }




  export type MemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MemberWhereInput
    orderBy?: MemberOrderByWithAggregationInput | MemberOrderByWithAggregationInput[]
    by: MemberScalarFieldEnum[] | MemberScalarFieldEnum
    having?: MemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MemberCountAggregateInputType | true
    _avg?: MemberAvgAggregateInputType
    _sum?: MemberSumAggregateInputType
    _min?: MemberMinAggregateInputType
    _max?: MemberMaxAggregateInputType
  }

  export type MemberGroupByOutputType = {
    id: number
    createdAt: Date | null
    updatedAt: Date | null
    nickname: string
    email: string
    passwd: string | null
    isadmin: boolean
    image: string | null
    emailcheck: string | null
    outdt: string | null
    descript: string | null
    _count: MemberCountAggregateOutputType | null
    _avg: MemberAvgAggregateOutputType | null
    _sum: MemberSumAggregateOutputType | null
    _min: MemberMinAggregateOutputType | null
    _max: MemberMaxAggregateOutputType | null
  }

  type GetMemberGroupByPayload<T extends MemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MemberGroupByOutputType[P]>
            : GetScalarType<T[P], MemberGroupByOutputType[P]>
        }
      >
    >


  export type MemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nickname?: boolean
    email?: boolean
    passwd?: boolean
    isadmin?: boolean
    image?: boolean
    emailcheck?: boolean
    outdt?: boolean
    descript?: boolean
    Book?: boolean | Member$BookArgs<ExtArgs>
    FollowBook?: boolean | Member$FollowBookArgs<ExtArgs>
    Likes?: boolean | Member$LikesArgs<ExtArgs>
    Mark?: boolean | Member$MarkArgs<ExtArgs>
    Report?: boolean | Member$ReportArgs<ExtArgs>
    Talk?: boolean | Member$TalkArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["member"]>



  export type MemberSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nickname?: boolean
    email?: boolean
    passwd?: boolean
    isadmin?: boolean
    image?: boolean
    emailcheck?: boolean
    outdt?: boolean
    descript?: boolean
  }

  export type MemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "nickname" | "email" | "passwd" | "isadmin" | "image" | "emailcheck" | "outdt" | "descript", ExtArgs["result"]["member"]>
  export type MemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Book?: boolean | Member$BookArgs<ExtArgs>
    FollowBook?: boolean | Member$FollowBookArgs<ExtArgs>
    Likes?: boolean | Member$LikesArgs<ExtArgs>
    Mark?: boolean | Member$MarkArgs<ExtArgs>
    Report?: boolean | Member$ReportArgs<ExtArgs>
    Talk?: boolean | Member$TalkArgs<ExtArgs>
    _count?: boolean | MemberCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $MemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Member"
    objects: {
      Book: Prisma.$BookPayload<ExtArgs>[]
      FollowBook: Prisma.$FollowBookPayload<ExtArgs>[]
      Likes: Prisma.$LikesPayload<ExtArgs>[]
      Mark: Prisma.$MarkPayload<ExtArgs>[]
      Report: Prisma.$ReportPayload<ExtArgs>[]
      Talk: Prisma.$TalkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date | null
      updatedAt: Date | null
      nickname: string
      email: string
      passwd: string | null
      isadmin: boolean
      image: string | null
      emailcheck: string | null
      outdt: string | null
      descript: string | null
    }, ExtArgs["result"]["member"]>
    composites: {}
  }

  type MemberGetPayload<S extends boolean | null | undefined | MemberDefaultArgs> = $Result.GetResult<Prisma.$MemberPayload, S>

  type MemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MemberCountAggregateInputType | true
    }

  export interface MemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Member'], meta: { name: 'Member' } }
    /**
     * Find zero or one Member that matches the filter.
     * @param {MemberFindUniqueArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MemberFindUniqueArgs>(args: SelectSubset<T, MemberFindUniqueArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Member that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MemberFindUniqueOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MemberFindUniqueOrThrowArgs>(args: SelectSubset<T, MemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MemberFindFirstArgs>(args?: SelectSubset<T, MemberFindFirstArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Member that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindFirstOrThrowArgs} args - Arguments to find a Member
     * @example
     * // Get one Member
     * const member = await prisma.member.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MemberFindFirstOrThrowArgs>(args?: SelectSubset<T, MemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Members that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Members
     * const members = await prisma.member.findMany()
     * 
     * // Get first 10 Members
     * const members = await prisma.member.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const memberWithIdOnly = await prisma.member.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MemberFindManyArgs>(args?: SelectSubset<T, MemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Member.
     * @param {MemberCreateArgs} args - Arguments to create a Member.
     * @example
     * // Create one Member
     * const Member = await prisma.member.create({
     *   data: {
     *     // ... data to create a Member
     *   }
     * })
     * 
     */
    create<T extends MemberCreateArgs>(args: SelectSubset<T, MemberCreateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Members.
     * @param {MemberCreateManyArgs} args - Arguments to create many Members.
     * @example
     * // Create many Members
     * const member = await prisma.member.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MemberCreateManyArgs>(args?: SelectSubset<T, MemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Member.
     * @param {MemberDeleteArgs} args - Arguments to delete one Member.
     * @example
     * // Delete one Member
     * const Member = await prisma.member.delete({
     *   where: {
     *     // ... filter to delete one Member
     *   }
     * })
     * 
     */
    delete<T extends MemberDeleteArgs>(args: SelectSubset<T, MemberDeleteArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Member.
     * @param {MemberUpdateArgs} args - Arguments to update one Member.
     * @example
     * // Update one Member
     * const member = await prisma.member.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MemberUpdateArgs>(args: SelectSubset<T, MemberUpdateArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Members.
     * @param {MemberDeleteManyArgs} args - Arguments to filter Members to delete.
     * @example
     * // Delete a few Members
     * const { count } = await prisma.member.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MemberDeleteManyArgs>(args?: SelectSubset<T, MemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Members
     * const member = await prisma.member.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MemberUpdateManyArgs>(args: SelectSubset<T, MemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Member.
     * @param {MemberUpsertArgs} args - Arguments to update or create a Member.
     * @example
     * // Update or create a Member
     * const member = await prisma.member.upsert({
     *   create: {
     *     // ... data to create a Member
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Member we want to update
     *   }
     * })
     */
    upsert<T extends MemberUpsertArgs>(args: SelectSubset<T, MemberUpsertArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Members.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberCountArgs} args - Arguments to filter Members to count.
     * @example
     * // Count the number of Members
     * const count = await prisma.member.count({
     *   where: {
     *     // ... the filter for the Members we want to count
     *   }
     * })
    **/
    count<T extends MemberCountArgs>(
      args?: Subset<T, MemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MemberAggregateArgs>(args: Subset<T, MemberAggregateArgs>): Prisma.PrismaPromise<GetMemberAggregateType<T>>

    /**
     * Group by Member.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MemberGroupByArgs} args - Group by arguments.
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
      T extends MemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MemberGroupByArgs['orderBy'] }
        : { orderBy?: MemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Member model
   */
  readonly fields: MemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Member.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Book<T extends Member$BookArgs<ExtArgs> = {}>(args?: Subset<T, Member$BookArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    FollowBook<T extends Member$FollowBookArgs<ExtArgs> = {}>(args?: Subset<T, Member$FollowBookArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FollowBookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Likes<T extends Member$LikesArgs<ExtArgs> = {}>(args?: Subset<T, Member$LikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Mark<T extends Member$MarkArgs<ExtArgs> = {}>(args?: Subset<T, Member$MarkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Report<T extends Member$ReportArgs<ExtArgs> = {}>(args?: Subset<T, Member$ReportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Talk<T extends Member$TalkArgs<ExtArgs> = {}>(args?: Subset<T, Member$TalkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TalkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Member model
   */
  interface MemberFieldRefs {
    readonly id: FieldRef<"Member", 'Int'>
    readonly createdAt: FieldRef<"Member", 'DateTime'>
    readonly updatedAt: FieldRef<"Member", 'DateTime'>
    readonly nickname: FieldRef<"Member", 'String'>
    readonly email: FieldRef<"Member", 'String'>
    readonly passwd: FieldRef<"Member", 'String'>
    readonly isadmin: FieldRef<"Member", 'Boolean'>
    readonly image: FieldRef<"Member", 'String'>
    readonly emailcheck: FieldRef<"Member", 'String'>
    readonly outdt: FieldRef<"Member", 'String'>
    readonly descript: FieldRef<"Member", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Member findUnique
   */
  export type MemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findUniqueOrThrow
   */
  export type MemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member findFirst
   */
  export type MemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findFirstOrThrow
   */
  export type MemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Member to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Members.
     */
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member findMany
   */
  export type MemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter, which Members to fetch.
     */
    where?: MemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Members to fetch.
     */
    orderBy?: MemberOrderByWithRelationInput | MemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Members.
     */
    cursor?: MemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Members from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Members.
     */
    skip?: number
    distinct?: MemberScalarFieldEnum | MemberScalarFieldEnum[]
  }

  /**
   * Member create
   */
  export type MemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to create a Member.
     */
    data: XOR<MemberCreateInput, MemberUncheckedCreateInput>
  }

  /**
   * Member createMany
   */
  export type MemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Members.
     */
    data: MemberCreateManyInput | MemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Member update
   */
  export type MemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The data needed to update a Member.
     */
    data: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
    /**
     * Choose, which Member to update.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member updateMany
   */
  export type MemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Members.
     */
    data: XOR<MemberUpdateManyMutationInput, MemberUncheckedUpdateManyInput>
    /**
     * Filter which Members to update
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to update.
     */
    limit?: number
  }

  /**
   * Member upsert
   */
  export type MemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * The filter to search for the Member to update in case it exists.
     */
    where: MemberWhereUniqueInput
    /**
     * In case the Member found by the `where` argument doesn't exist, create a new Member with this data.
     */
    create: XOR<MemberCreateInput, MemberUncheckedCreateInput>
    /**
     * In case the Member was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MemberUpdateInput, MemberUncheckedUpdateInput>
  }

  /**
   * Member delete
   */
  export type MemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    /**
     * Filter which Member to delete.
     */
    where: MemberWhereUniqueInput
  }

  /**
   * Member deleteMany
   */
  export type MemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Members to delete
     */
    where?: MemberWhereInput
    /**
     * Limit how many Members to delete.
     */
    limit?: number
  }

  /**
   * Member.Book
   */
  export type Member$BookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    cursor?: BookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Member.FollowBook
   */
  export type Member$FollowBookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FollowBook
     */
    select?: FollowBookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FollowBook
     */
    omit?: FollowBookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FollowBookInclude<ExtArgs> | null
    where?: FollowBookWhereInput
    orderBy?: FollowBookOrderByWithRelationInput | FollowBookOrderByWithRelationInput[]
    cursor?: FollowBookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FollowBookScalarFieldEnum | FollowBookScalarFieldEnum[]
  }

  /**
   * Member.Likes
   */
  export type Member$LikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Likes
     */
    select?: LikesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Likes
     */
    omit?: LikesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikesInclude<ExtArgs> | null
    where?: LikesWhereInput
    orderBy?: LikesOrderByWithRelationInput | LikesOrderByWithRelationInput[]
    cursor?: LikesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * Member.Mark
   */
  export type Member$MarkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Mark
     */
    select?: MarkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Mark
     */
    omit?: MarkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MarkInclude<ExtArgs> | null
    where?: MarkWhereInput
    orderBy?: MarkOrderByWithRelationInput | MarkOrderByWithRelationInput[]
    cursor?: MarkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MarkScalarFieldEnum | MarkScalarFieldEnum[]
  }

  /**
   * Member.Report
   */
  export type Member$ReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Member.Talk
   */
  export type Member$TalkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talk
     */
    select?: TalkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talk
     */
    omit?: TalkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalkInclude<ExtArgs> | null
    where?: TalkWhereInput
    orderBy?: TalkOrderByWithRelationInput | TalkOrderByWithRelationInput[]
    cursor?: TalkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TalkScalarFieldEnum | TalkScalarFieldEnum[]
  }

  /**
   * Member without action
   */
  export type MemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportAvgAggregateOutputType = {
    id: number | null
    mark: number | null
    member: number | null
  }

  export type ReportSumAggregateOutputType = {
    id: number | null
    mark: number | null
    member: number | null
  }

  export type ReportMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    mark: number | null
    member: number | null
  }

  export type ReportMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    mark: number | null
    member: number | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    mark: number
    member: number
    _all: number
  }


  export type ReportAvgAggregateInputType = {
    id?: true
    mark?: true
    member?: true
  }

  export type ReportSumAggregateInputType = {
    id?: true
    mark?: true
    member?: true
  }

  export type ReportMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    mark?: true
    member?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    mark?: true
    member?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    mark?: true
    member?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _avg?: ReportAvgAggregateInputType
    _sum?: ReportSumAggregateInputType
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: number
    createdAt: Date | null
    updatedAt: Date | null
    mark: number
    member: number
    _count: ReportCountAggregateOutputType | null
    _avg: ReportAvgAggregateOutputType | null
    _sum: ReportSumAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mark?: boolean
    member?: boolean
    Mark?: boolean | MarkDefaultArgs<ExtArgs>
    Member?: boolean | MemberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>



  export type ReportSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mark?: boolean
    member?: boolean
  }

  export type ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "mark" | "member", ExtArgs["result"]["report"]>
  export type ReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Mark?: boolean | MarkDefaultArgs<ExtArgs>
    Member?: boolean | MemberDefaultArgs<ExtArgs>
  }

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {
      Mark: Prisma.$MarkPayload<ExtArgs>
      Member: Prisma.$MemberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date | null
      updatedAt: Date | null
      mark: number
      member: number
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
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
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Mark<T extends MarkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarkDefaultArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Member<T extends MemberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MemberDefaultArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Report model
   */
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'Int'>
    readonly createdAt: FieldRef<"Report", 'DateTime'>
    readonly updatedAt: FieldRef<"Report", 'DateTime'>
    readonly mark: FieldRef<"Report", 'Int'>
    readonly member: FieldRef<"Report", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
  }


  /**
   * Model Talk
   */

  export type AggregateTalk = {
    _count: TalkCountAggregateOutputType | null
    _avg: TalkAvgAggregateOutputType | null
    _sum: TalkSumAggregateOutputType | null
    _min: TalkMinAggregateOutputType | null
    _max: TalkMaxAggregateOutputType | null
  }

  export type TalkAvgAggregateOutputType = {
    id: number | null
    mark: number | null
    member: number | null
  }

  export type TalkSumAggregateOutputType = {
    id: number | null
    mark: number | null
    member: number | null
  }

  export type TalkMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    mark: number | null
    member: number | null
    msg: string | null
  }

  export type TalkMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    mark: number | null
    member: number | null
    msg: string | null
  }

  export type TalkCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    mark: number
    member: number
    msg: number
    _all: number
  }


  export type TalkAvgAggregateInputType = {
    id?: true
    mark?: true
    member?: true
  }

  export type TalkSumAggregateInputType = {
    id?: true
    mark?: true
    member?: true
  }

  export type TalkMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    mark?: true
    member?: true
    msg?: true
  }

  export type TalkMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    mark?: true
    member?: true
    msg?: true
  }

  export type TalkCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    mark?: true
    member?: true
    msg?: true
    _all?: true
  }

  export type TalkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Talk to aggregate.
     */
    where?: TalkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Talks to fetch.
     */
    orderBy?: TalkOrderByWithRelationInput | TalkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TalkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Talks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Talks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Talks
    **/
    _count?: true | TalkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TalkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TalkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TalkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TalkMaxAggregateInputType
  }

  export type GetTalkAggregateType<T extends TalkAggregateArgs> = {
        [P in keyof T & keyof AggregateTalk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTalk[P]>
      : GetScalarType<T[P], AggregateTalk[P]>
  }




  export type TalkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TalkWhereInput
    orderBy?: TalkOrderByWithAggregationInput | TalkOrderByWithAggregationInput[]
    by: TalkScalarFieldEnum[] | TalkScalarFieldEnum
    having?: TalkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TalkCountAggregateInputType | true
    _avg?: TalkAvgAggregateInputType
    _sum?: TalkSumAggregateInputType
    _min?: TalkMinAggregateInputType
    _max?: TalkMaxAggregateInputType
  }

  export type TalkGroupByOutputType = {
    id: number
    createdAt: Date | null
    updatedAt: Date | null
    mark: number
    member: number | null
    msg: string
    _count: TalkCountAggregateOutputType | null
    _avg: TalkAvgAggregateOutputType | null
    _sum: TalkSumAggregateOutputType | null
    _min: TalkMinAggregateOutputType | null
    _max: TalkMaxAggregateOutputType | null
  }

  type GetTalkGroupByPayload<T extends TalkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TalkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TalkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TalkGroupByOutputType[P]>
            : GetScalarType<T[P], TalkGroupByOutputType[P]>
        }
      >
    >


  export type TalkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mark?: boolean
    member?: boolean
    msg?: boolean
    Mark?: boolean | MarkDefaultArgs<ExtArgs>
    Member?: boolean | Talk$MemberArgs<ExtArgs>
  }, ExtArgs["result"]["talk"]>



  export type TalkSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mark?: boolean
    member?: boolean
    msg?: boolean
  }

  export type TalkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "mark" | "member" | "msg", ExtArgs["result"]["talk"]>
  export type TalkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Mark?: boolean | MarkDefaultArgs<ExtArgs>
    Member?: boolean | Talk$MemberArgs<ExtArgs>
  }

  export type $TalkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Talk"
    objects: {
      Mark: Prisma.$MarkPayload<ExtArgs>
      Member: Prisma.$MemberPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date | null
      updatedAt: Date | null
      mark: number
      member: number | null
      msg: string
    }, ExtArgs["result"]["talk"]>
    composites: {}
  }

  type TalkGetPayload<S extends boolean | null | undefined | TalkDefaultArgs> = $Result.GetResult<Prisma.$TalkPayload, S>

  type TalkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TalkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TalkCountAggregateInputType | true
    }

  export interface TalkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Talk'], meta: { name: 'Talk' } }
    /**
     * Find zero or one Talk that matches the filter.
     * @param {TalkFindUniqueArgs} args - Arguments to find a Talk
     * @example
     * // Get one Talk
     * const talk = await prisma.talk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TalkFindUniqueArgs>(args: SelectSubset<T, TalkFindUniqueArgs<ExtArgs>>): Prisma__TalkClient<$Result.GetResult<Prisma.$TalkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Talk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TalkFindUniqueOrThrowArgs} args - Arguments to find a Talk
     * @example
     * // Get one Talk
     * const talk = await prisma.talk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TalkFindUniqueOrThrowArgs>(args: SelectSubset<T, TalkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TalkClient<$Result.GetResult<Prisma.$TalkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Talk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalkFindFirstArgs} args - Arguments to find a Talk
     * @example
     * // Get one Talk
     * const talk = await prisma.talk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TalkFindFirstArgs>(args?: SelectSubset<T, TalkFindFirstArgs<ExtArgs>>): Prisma__TalkClient<$Result.GetResult<Prisma.$TalkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Talk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalkFindFirstOrThrowArgs} args - Arguments to find a Talk
     * @example
     * // Get one Talk
     * const talk = await prisma.talk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TalkFindFirstOrThrowArgs>(args?: SelectSubset<T, TalkFindFirstOrThrowArgs<ExtArgs>>): Prisma__TalkClient<$Result.GetResult<Prisma.$TalkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Talks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Talks
     * const talks = await prisma.talk.findMany()
     * 
     * // Get first 10 Talks
     * const talks = await prisma.talk.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const talkWithIdOnly = await prisma.talk.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TalkFindManyArgs>(args?: SelectSubset<T, TalkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TalkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Talk.
     * @param {TalkCreateArgs} args - Arguments to create a Talk.
     * @example
     * // Create one Talk
     * const Talk = await prisma.talk.create({
     *   data: {
     *     // ... data to create a Talk
     *   }
     * })
     * 
     */
    create<T extends TalkCreateArgs>(args: SelectSubset<T, TalkCreateArgs<ExtArgs>>): Prisma__TalkClient<$Result.GetResult<Prisma.$TalkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Talks.
     * @param {TalkCreateManyArgs} args - Arguments to create many Talks.
     * @example
     * // Create many Talks
     * const talk = await prisma.talk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TalkCreateManyArgs>(args?: SelectSubset<T, TalkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Talk.
     * @param {TalkDeleteArgs} args - Arguments to delete one Talk.
     * @example
     * // Delete one Talk
     * const Talk = await prisma.talk.delete({
     *   where: {
     *     // ... filter to delete one Talk
     *   }
     * })
     * 
     */
    delete<T extends TalkDeleteArgs>(args: SelectSubset<T, TalkDeleteArgs<ExtArgs>>): Prisma__TalkClient<$Result.GetResult<Prisma.$TalkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Talk.
     * @param {TalkUpdateArgs} args - Arguments to update one Talk.
     * @example
     * // Update one Talk
     * const talk = await prisma.talk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TalkUpdateArgs>(args: SelectSubset<T, TalkUpdateArgs<ExtArgs>>): Prisma__TalkClient<$Result.GetResult<Prisma.$TalkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Talks.
     * @param {TalkDeleteManyArgs} args - Arguments to filter Talks to delete.
     * @example
     * // Delete a few Talks
     * const { count } = await prisma.talk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TalkDeleteManyArgs>(args?: SelectSubset<T, TalkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Talks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Talks
     * const talk = await prisma.talk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TalkUpdateManyArgs>(args: SelectSubset<T, TalkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Talk.
     * @param {TalkUpsertArgs} args - Arguments to update or create a Talk.
     * @example
     * // Update or create a Talk
     * const talk = await prisma.talk.upsert({
     *   create: {
     *     // ... data to create a Talk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Talk we want to update
     *   }
     * })
     */
    upsert<T extends TalkUpsertArgs>(args: SelectSubset<T, TalkUpsertArgs<ExtArgs>>): Prisma__TalkClient<$Result.GetResult<Prisma.$TalkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Talks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalkCountArgs} args - Arguments to filter Talks to count.
     * @example
     * // Count the number of Talks
     * const count = await prisma.talk.count({
     *   where: {
     *     // ... the filter for the Talks we want to count
     *   }
     * })
    **/
    count<T extends TalkCountArgs>(
      args?: Subset<T, TalkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TalkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Talk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TalkAggregateArgs>(args: Subset<T, TalkAggregateArgs>): Prisma.PrismaPromise<GetTalkAggregateType<T>>

    /**
     * Group by Talk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalkGroupByArgs} args - Group by arguments.
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
      T extends TalkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TalkGroupByArgs['orderBy'] }
        : { orderBy?: TalkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TalkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTalkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Talk model
   */
  readonly fields: TalkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Talk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TalkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Mark<T extends MarkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MarkDefaultArgs<ExtArgs>>): Prisma__MarkClient<$Result.GetResult<Prisma.$MarkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Member<T extends Talk$MemberArgs<ExtArgs> = {}>(args?: Subset<T, Talk$MemberArgs<ExtArgs>>): Prisma__MemberClient<$Result.GetResult<Prisma.$MemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Talk model
   */
  interface TalkFieldRefs {
    readonly id: FieldRef<"Talk", 'Int'>
    readonly createdAt: FieldRef<"Talk", 'DateTime'>
    readonly updatedAt: FieldRef<"Talk", 'DateTime'>
    readonly mark: FieldRef<"Talk", 'Int'>
    readonly member: FieldRef<"Talk", 'Int'>
    readonly msg: FieldRef<"Talk", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Talk findUnique
   */
  export type TalkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talk
     */
    select?: TalkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talk
     */
    omit?: TalkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalkInclude<ExtArgs> | null
    /**
     * Filter, which Talk to fetch.
     */
    where: TalkWhereUniqueInput
  }

  /**
   * Talk findUniqueOrThrow
   */
  export type TalkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talk
     */
    select?: TalkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talk
     */
    omit?: TalkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalkInclude<ExtArgs> | null
    /**
     * Filter, which Talk to fetch.
     */
    where: TalkWhereUniqueInput
  }

  /**
   * Talk findFirst
   */
  export type TalkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talk
     */
    select?: TalkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talk
     */
    omit?: TalkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalkInclude<ExtArgs> | null
    /**
     * Filter, which Talk to fetch.
     */
    where?: TalkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Talks to fetch.
     */
    orderBy?: TalkOrderByWithRelationInput | TalkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Talks.
     */
    cursor?: TalkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Talks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Talks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Talks.
     */
    distinct?: TalkScalarFieldEnum | TalkScalarFieldEnum[]
  }

  /**
   * Talk findFirstOrThrow
   */
  export type TalkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talk
     */
    select?: TalkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talk
     */
    omit?: TalkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalkInclude<ExtArgs> | null
    /**
     * Filter, which Talk to fetch.
     */
    where?: TalkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Talks to fetch.
     */
    orderBy?: TalkOrderByWithRelationInput | TalkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Talks.
     */
    cursor?: TalkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Talks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Talks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Talks.
     */
    distinct?: TalkScalarFieldEnum | TalkScalarFieldEnum[]
  }

  /**
   * Talk findMany
   */
  export type TalkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talk
     */
    select?: TalkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talk
     */
    omit?: TalkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalkInclude<ExtArgs> | null
    /**
     * Filter, which Talks to fetch.
     */
    where?: TalkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Talks to fetch.
     */
    orderBy?: TalkOrderByWithRelationInput | TalkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Talks.
     */
    cursor?: TalkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Talks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Talks.
     */
    skip?: number
    distinct?: TalkScalarFieldEnum | TalkScalarFieldEnum[]
  }

  /**
   * Talk create
   */
  export type TalkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talk
     */
    select?: TalkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talk
     */
    omit?: TalkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalkInclude<ExtArgs> | null
    /**
     * The data needed to create a Talk.
     */
    data: XOR<TalkCreateInput, TalkUncheckedCreateInput>
  }

  /**
   * Talk createMany
   */
  export type TalkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Talks.
     */
    data: TalkCreateManyInput | TalkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Talk update
   */
  export type TalkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talk
     */
    select?: TalkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talk
     */
    omit?: TalkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalkInclude<ExtArgs> | null
    /**
     * The data needed to update a Talk.
     */
    data: XOR<TalkUpdateInput, TalkUncheckedUpdateInput>
    /**
     * Choose, which Talk to update.
     */
    where: TalkWhereUniqueInput
  }

  /**
   * Talk updateMany
   */
  export type TalkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Talks.
     */
    data: XOR<TalkUpdateManyMutationInput, TalkUncheckedUpdateManyInput>
    /**
     * Filter which Talks to update
     */
    where?: TalkWhereInput
    /**
     * Limit how many Talks to update.
     */
    limit?: number
  }

  /**
   * Talk upsert
   */
  export type TalkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talk
     */
    select?: TalkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talk
     */
    omit?: TalkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalkInclude<ExtArgs> | null
    /**
     * The filter to search for the Talk to update in case it exists.
     */
    where: TalkWhereUniqueInput
    /**
     * In case the Talk found by the `where` argument doesn't exist, create a new Talk with this data.
     */
    create: XOR<TalkCreateInput, TalkUncheckedCreateInput>
    /**
     * In case the Talk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TalkUpdateInput, TalkUncheckedUpdateInput>
  }

  /**
   * Talk delete
   */
  export type TalkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talk
     */
    select?: TalkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talk
     */
    omit?: TalkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalkInclude<ExtArgs> | null
    /**
     * Filter which Talk to delete.
     */
    where: TalkWhereUniqueInput
  }

  /**
   * Talk deleteMany
   */
  export type TalkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Talks to delete
     */
    where?: TalkWhereInput
    /**
     * Limit how many Talks to delete.
     */
    limit?: number
  }

  /**
   * Talk.Member
   */
  export type Talk$MemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Member
     */
    select?: MemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Member
     */
    omit?: MemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MemberInclude<ExtArgs> | null
    where?: MemberWhereInput
  }

  /**
   * Talk without action
   */
  export type TalkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Talk
     */
    select?: TalkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Talk
     */
    omit?: TalkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalkInclude<ExtArgs> | null
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


  export const BookScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    member: 'member',
    title: 'title',
    withdel: 'withdel',
    ispublic: 'ispublic',
    remark: 'remark'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const FollowBookScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    book: 'book',
    member: 'member'
  };

  export type FollowBookScalarFieldEnum = (typeof FollowBookScalarFieldEnum)[keyof typeof FollowBookScalarFieldEnum]


  export const LikesScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    mark: 'mark',
    member: 'member'
  };

  export type LikesScalarFieldEnum = (typeof LikesScalarFieldEnum)[keyof typeof LikesScalarFieldEnum]


  export const MarkScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    book: 'book',
    title: 'title',
    link: 'link',
    image: 'image',
    maker: 'maker',
    remark: 'remark'
  };

  export type MarkScalarFieldEnum = (typeof MarkScalarFieldEnum)[keyof typeof MarkScalarFieldEnum]


  export const MemberScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    nickname: 'nickname',
    email: 'email',
    passwd: 'passwd',
    isadmin: 'isadmin',
    image: 'image',
    emailcheck: 'emailcheck',
    outdt: 'outdt',
    descript: 'descript'
  };

  export type MemberScalarFieldEnum = (typeof MemberScalarFieldEnum)[keyof typeof MemberScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    mark: 'mark',
    member: 'member'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const TalkScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    mark: 'mark',
    member: 'member',
    msg: 'msg'
  };

  export type TalkScalarFieldEnum = (typeof TalkScalarFieldEnum)[keyof typeof TalkScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const BookOrderByRelevanceFieldEnum: {
    title: 'title',
    remark: 'remark'
  };

  export type BookOrderByRelevanceFieldEnum = (typeof BookOrderByRelevanceFieldEnum)[keyof typeof BookOrderByRelevanceFieldEnum]


  export const MarkOrderByRelevanceFieldEnum: {
    title: 'title',
    link: 'link',
    image: 'image',
    remark: 'remark'
  };

  export type MarkOrderByRelevanceFieldEnum = (typeof MarkOrderByRelevanceFieldEnum)[keyof typeof MarkOrderByRelevanceFieldEnum]


  export const MemberOrderByRelevanceFieldEnum: {
    nickname: 'nickname',
    email: 'email',
    passwd: 'passwd',
    image: 'image',
    emailcheck: 'emailcheck',
    outdt: 'outdt',
    descript: 'descript'
  };

  export type MemberOrderByRelevanceFieldEnum = (typeof MemberOrderByRelevanceFieldEnum)[keyof typeof MemberOrderByRelevanceFieldEnum]


  export const TalkOrderByRelevanceFieldEnum: {
    msg: 'msg'
  };

  export type TalkOrderByRelevanceFieldEnum = (typeof TalkOrderByRelevanceFieldEnum)[keyof typeof TalkOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type BookWhereInput = {
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    id?: IntFilter<"Book"> | number
    createdAt?: DateTimeNullableFilter<"Book"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Book"> | Date | string | null
    member?: IntFilter<"Book"> | number
    title?: StringFilter<"Book"> | string
    withdel?: BoolFilter<"Book"> | boolean
    ispublic?: BoolFilter<"Book"> | boolean
    remark?: StringNullableFilter<"Book"> | string | null
    Member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    FollowBook?: FollowBookListRelationFilter
    Mark?: MarkListRelationFilter
  }

  export type BookOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    member?: SortOrder
    title?: SortOrder
    withdel?: SortOrder
    ispublic?: SortOrder
    remark?: SortOrderInput | SortOrder
    Member?: MemberOrderByWithRelationInput
    FollowBook?: FollowBookOrderByRelationAggregateInput
    Mark?: MarkOrderByRelationAggregateInput
    _relevance?: BookOrderByRelevanceInput
  }

  export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    createdAt?: DateTimeNullableFilter<"Book"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Book"> | Date | string | null
    member?: IntFilter<"Book"> | number
    title?: StringFilter<"Book"> | string
    withdel?: BoolFilter<"Book"> | boolean
    ispublic?: BoolFilter<"Book"> | boolean
    remark?: StringNullableFilter<"Book"> | string | null
    Member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
    FollowBook?: FollowBookListRelationFilter
    Mark?: MarkListRelationFilter
  }, "id">

  export type BookOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    member?: SortOrder
    title?: SortOrder
    withdel?: SortOrder
    ispublic?: SortOrder
    remark?: SortOrderInput | SortOrder
    _count?: BookCountOrderByAggregateInput
    _avg?: BookAvgOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
    _sum?: BookSumOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    OR?: BookScalarWhereWithAggregatesInput[]
    NOT?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Book"> | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"Book"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Book"> | Date | string | null
    member?: IntWithAggregatesFilter<"Book"> | number
    title?: StringWithAggregatesFilter<"Book"> | string
    withdel?: BoolWithAggregatesFilter<"Book"> | boolean
    ispublic?: BoolWithAggregatesFilter<"Book"> | boolean
    remark?: StringNullableWithAggregatesFilter<"Book"> | string | null
  }

  export type FollowBookWhereInput = {
    AND?: FollowBookWhereInput | FollowBookWhereInput[]
    OR?: FollowBookWhereInput[]
    NOT?: FollowBookWhereInput | FollowBookWhereInput[]
    id?: IntFilter<"FollowBook"> | number
    createdAt?: DateTimeNullableFilter<"FollowBook"> | Date | string | null
    book?: IntFilter<"FollowBook"> | number
    member?: IntNullableFilter<"FollowBook"> | number | null
    Book?: XOR<BookScalarRelationFilter, BookWhereInput>
    Member?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
  }

  export type FollowBookOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    book?: SortOrder
    member?: SortOrderInput | SortOrder
    Book?: BookOrderByWithRelationInput
    Member?: MemberOrderByWithRelationInput
  }

  export type FollowBookWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FollowBookWhereInput | FollowBookWhereInput[]
    OR?: FollowBookWhereInput[]
    NOT?: FollowBookWhereInput | FollowBookWhereInput[]
    createdAt?: DateTimeNullableFilter<"FollowBook"> | Date | string | null
    book?: IntFilter<"FollowBook"> | number
    member?: IntNullableFilter<"FollowBook"> | number | null
    Book?: XOR<BookScalarRelationFilter, BookWhereInput>
    Member?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
  }, "id">

  export type FollowBookOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    book?: SortOrder
    member?: SortOrderInput | SortOrder
    _count?: FollowBookCountOrderByAggregateInput
    _avg?: FollowBookAvgOrderByAggregateInput
    _max?: FollowBookMaxOrderByAggregateInput
    _min?: FollowBookMinOrderByAggregateInput
    _sum?: FollowBookSumOrderByAggregateInput
  }

  export type FollowBookScalarWhereWithAggregatesInput = {
    AND?: FollowBookScalarWhereWithAggregatesInput | FollowBookScalarWhereWithAggregatesInput[]
    OR?: FollowBookScalarWhereWithAggregatesInput[]
    NOT?: FollowBookScalarWhereWithAggregatesInput | FollowBookScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"FollowBook"> | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"FollowBook"> | Date | string | null
    book?: IntWithAggregatesFilter<"FollowBook"> | number
    member?: IntNullableWithAggregatesFilter<"FollowBook"> | number | null
  }

  export type LikesWhereInput = {
    AND?: LikesWhereInput | LikesWhereInput[]
    OR?: LikesWhereInput[]
    NOT?: LikesWhereInput | LikesWhereInput[]
    id?: IntFilter<"Likes"> | number
    createdAt?: DateTimeNullableFilter<"Likes"> | Date | string | null
    mark?: IntFilter<"Likes"> | number
    member?: IntNullableFilter<"Likes"> | number | null
    Mark?: XOR<MarkScalarRelationFilter, MarkWhereInput>
    Member?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
  }

  export type LikesOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    mark?: SortOrder
    member?: SortOrderInput | SortOrder
    Mark?: MarkOrderByWithRelationInput
    Member?: MemberOrderByWithRelationInput
  }

  export type LikesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LikesWhereInput | LikesWhereInput[]
    OR?: LikesWhereInput[]
    NOT?: LikesWhereInput | LikesWhereInput[]
    createdAt?: DateTimeNullableFilter<"Likes"> | Date | string | null
    mark?: IntFilter<"Likes"> | number
    member?: IntNullableFilter<"Likes"> | number | null
    Mark?: XOR<MarkScalarRelationFilter, MarkWhereInput>
    Member?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
  }, "id">

  export type LikesOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    mark?: SortOrder
    member?: SortOrderInput | SortOrder
    _count?: LikesCountOrderByAggregateInput
    _avg?: LikesAvgOrderByAggregateInput
    _max?: LikesMaxOrderByAggregateInput
    _min?: LikesMinOrderByAggregateInput
    _sum?: LikesSumOrderByAggregateInput
  }

  export type LikesScalarWhereWithAggregatesInput = {
    AND?: LikesScalarWhereWithAggregatesInput | LikesScalarWhereWithAggregatesInput[]
    OR?: LikesScalarWhereWithAggregatesInput[]
    NOT?: LikesScalarWhereWithAggregatesInput | LikesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Likes"> | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"Likes"> | Date | string | null
    mark?: IntWithAggregatesFilter<"Likes"> | number
    member?: IntNullableWithAggregatesFilter<"Likes"> | number | null
  }

  export type MarkWhereInput = {
    AND?: MarkWhereInput | MarkWhereInput[]
    OR?: MarkWhereInput[]
    NOT?: MarkWhereInput | MarkWhereInput[]
    id?: IntFilter<"Mark"> | number
    createdAt?: DateTimeNullableFilter<"Mark"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Mark"> | Date | string | null
    book?: IntFilter<"Mark"> | number
    title?: StringFilter<"Mark"> | string
    link?: StringFilter<"Mark"> | string
    image?: StringNullableFilter<"Mark"> | string | null
    maker?: IntNullableFilter<"Mark"> | number | null
    remark?: StringNullableFilter<"Mark"> | string | null
    Likes?: LikesListRelationFilter
    Book?: XOR<BookScalarRelationFilter, BookWhereInput>
    Member?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
    Report?: ReportListRelationFilter
    Talk?: TalkListRelationFilter
  }

  export type MarkOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    book?: SortOrder
    title?: SortOrder
    link?: SortOrder
    image?: SortOrderInput | SortOrder
    maker?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    Likes?: LikesOrderByRelationAggregateInput
    Book?: BookOrderByWithRelationInput
    Member?: MemberOrderByWithRelationInput
    Report?: ReportOrderByRelationAggregateInput
    Talk?: TalkOrderByRelationAggregateInput
    _relevance?: MarkOrderByRelevanceInput
  }

  export type MarkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MarkWhereInput | MarkWhereInput[]
    OR?: MarkWhereInput[]
    NOT?: MarkWhereInput | MarkWhereInput[]
    createdAt?: DateTimeNullableFilter<"Mark"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Mark"> | Date | string | null
    book?: IntFilter<"Mark"> | number
    title?: StringFilter<"Mark"> | string
    link?: StringFilter<"Mark"> | string
    image?: StringNullableFilter<"Mark"> | string | null
    maker?: IntNullableFilter<"Mark"> | number | null
    remark?: StringNullableFilter<"Mark"> | string | null
    Likes?: LikesListRelationFilter
    Book?: XOR<BookScalarRelationFilter, BookWhereInput>
    Member?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
    Report?: ReportListRelationFilter
    Talk?: TalkListRelationFilter
  }, "id">

  export type MarkOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    book?: SortOrder
    title?: SortOrder
    link?: SortOrder
    image?: SortOrderInput | SortOrder
    maker?: SortOrderInput | SortOrder
    remark?: SortOrderInput | SortOrder
    _count?: MarkCountOrderByAggregateInput
    _avg?: MarkAvgOrderByAggregateInput
    _max?: MarkMaxOrderByAggregateInput
    _min?: MarkMinOrderByAggregateInput
    _sum?: MarkSumOrderByAggregateInput
  }

  export type MarkScalarWhereWithAggregatesInput = {
    AND?: MarkScalarWhereWithAggregatesInput | MarkScalarWhereWithAggregatesInput[]
    OR?: MarkScalarWhereWithAggregatesInput[]
    NOT?: MarkScalarWhereWithAggregatesInput | MarkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Mark"> | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"Mark"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Mark"> | Date | string | null
    book?: IntWithAggregatesFilter<"Mark"> | number
    title?: StringWithAggregatesFilter<"Mark"> | string
    link?: StringWithAggregatesFilter<"Mark"> | string
    image?: StringNullableWithAggregatesFilter<"Mark"> | string | null
    maker?: IntNullableWithAggregatesFilter<"Mark"> | number | null
    remark?: StringNullableWithAggregatesFilter<"Mark"> | string | null
  }

  export type MemberWhereInput = {
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    id?: IntFilter<"Member"> | number
    createdAt?: DateTimeNullableFilter<"Member"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Member"> | Date | string | null
    nickname?: StringFilter<"Member"> | string
    email?: StringFilter<"Member"> | string
    passwd?: StringNullableFilter<"Member"> | string | null
    isadmin?: BoolFilter<"Member"> | boolean
    image?: StringNullableFilter<"Member"> | string | null
    emailcheck?: StringNullableFilter<"Member"> | string | null
    outdt?: StringNullableFilter<"Member"> | string | null
    descript?: StringNullableFilter<"Member"> | string | null
    Book?: BookListRelationFilter
    FollowBook?: FollowBookListRelationFilter
    Likes?: LikesListRelationFilter
    Mark?: MarkListRelationFilter
    Report?: ReportListRelationFilter
    Talk?: TalkListRelationFilter
  }

  export type MemberOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    nickname?: SortOrder
    email?: SortOrder
    passwd?: SortOrderInput | SortOrder
    isadmin?: SortOrder
    image?: SortOrderInput | SortOrder
    emailcheck?: SortOrderInput | SortOrder
    outdt?: SortOrderInput | SortOrder
    descript?: SortOrderInput | SortOrder
    Book?: BookOrderByRelationAggregateInput
    FollowBook?: FollowBookOrderByRelationAggregateInput
    Likes?: LikesOrderByRelationAggregateInput
    Mark?: MarkOrderByRelationAggregateInput
    Report?: ReportOrderByRelationAggregateInput
    Talk?: TalkOrderByRelationAggregateInput
    _relevance?: MemberOrderByRelevanceInput
  }

  export type MemberWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: MemberWhereInput | MemberWhereInput[]
    OR?: MemberWhereInput[]
    NOT?: MemberWhereInput | MemberWhereInput[]
    createdAt?: DateTimeNullableFilter<"Member"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Member"> | Date | string | null
    nickname?: StringFilter<"Member"> | string
    passwd?: StringNullableFilter<"Member"> | string | null
    isadmin?: BoolFilter<"Member"> | boolean
    image?: StringNullableFilter<"Member"> | string | null
    emailcheck?: StringNullableFilter<"Member"> | string | null
    outdt?: StringNullableFilter<"Member"> | string | null
    descript?: StringNullableFilter<"Member"> | string | null
    Book?: BookListRelationFilter
    FollowBook?: FollowBookListRelationFilter
    Likes?: LikesListRelationFilter
    Mark?: MarkListRelationFilter
    Report?: ReportListRelationFilter
    Talk?: TalkListRelationFilter
  }, "id" | "email">

  export type MemberOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    nickname?: SortOrder
    email?: SortOrder
    passwd?: SortOrderInput | SortOrder
    isadmin?: SortOrder
    image?: SortOrderInput | SortOrder
    emailcheck?: SortOrderInput | SortOrder
    outdt?: SortOrderInput | SortOrder
    descript?: SortOrderInput | SortOrder
    _count?: MemberCountOrderByAggregateInput
    _avg?: MemberAvgOrderByAggregateInput
    _max?: MemberMaxOrderByAggregateInput
    _min?: MemberMinOrderByAggregateInput
    _sum?: MemberSumOrderByAggregateInput
  }

  export type MemberScalarWhereWithAggregatesInput = {
    AND?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    OR?: MemberScalarWhereWithAggregatesInput[]
    NOT?: MemberScalarWhereWithAggregatesInput | MemberScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Member"> | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"Member"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Member"> | Date | string | null
    nickname?: StringWithAggregatesFilter<"Member"> | string
    email?: StringWithAggregatesFilter<"Member"> | string
    passwd?: StringNullableWithAggregatesFilter<"Member"> | string | null
    isadmin?: BoolWithAggregatesFilter<"Member"> | boolean
    image?: StringNullableWithAggregatesFilter<"Member"> | string | null
    emailcheck?: StringNullableWithAggregatesFilter<"Member"> | string | null
    outdt?: StringNullableWithAggregatesFilter<"Member"> | string | null
    descript?: StringNullableWithAggregatesFilter<"Member"> | string | null
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: IntFilter<"Report"> | number
    createdAt?: DateTimeNullableFilter<"Report"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Report"> | Date | string | null
    mark?: IntFilter<"Report"> | number
    member?: IntFilter<"Report"> | number
    Mark?: XOR<MarkScalarRelationFilter, MarkWhereInput>
    Member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    mark?: SortOrder
    member?: SortOrder
    Mark?: MarkOrderByWithRelationInput
    Member?: MemberOrderByWithRelationInput
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    createdAt?: DateTimeNullableFilter<"Report"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Report"> | Date | string | null
    mark?: IntFilter<"Report"> | number
    member?: IntFilter<"Report"> | number
    Mark?: XOR<MarkScalarRelationFilter, MarkWhereInput>
    Member?: XOR<MemberScalarRelationFilter, MemberWhereInput>
  }, "id">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    mark?: SortOrder
    member?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _avg?: ReportAvgOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
    _sum?: ReportSumOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Report"> | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"Report"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Report"> | Date | string | null
    mark?: IntWithAggregatesFilter<"Report"> | number
    member?: IntWithAggregatesFilter<"Report"> | number
  }

  export type TalkWhereInput = {
    AND?: TalkWhereInput | TalkWhereInput[]
    OR?: TalkWhereInput[]
    NOT?: TalkWhereInput | TalkWhereInput[]
    id?: IntFilter<"Talk"> | number
    createdAt?: DateTimeNullableFilter<"Talk"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Talk"> | Date | string | null
    mark?: IntFilter<"Talk"> | number
    member?: IntNullableFilter<"Talk"> | number | null
    msg?: StringFilter<"Talk"> | string
    Mark?: XOR<MarkScalarRelationFilter, MarkWhereInput>
    Member?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
  }

  export type TalkOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    mark?: SortOrder
    member?: SortOrderInput | SortOrder
    msg?: SortOrder
    Mark?: MarkOrderByWithRelationInput
    Member?: MemberOrderByWithRelationInput
    _relevance?: TalkOrderByRelevanceInput
  }

  export type TalkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TalkWhereInput | TalkWhereInput[]
    OR?: TalkWhereInput[]
    NOT?: TalkWhereInput | TalkWhereInput[]
    createdAt?: DateTimeNullableFilter<"Talk"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Talk"> | Date | string | null
    mark?: IntFilter<"Talk"> | number
    member?: IntNullableFilter<"Talk"> | number | null
    msg?: StringFilter<"Talk"> | string
    Mark?: XOR<MarkScalarRelationFilter, MarkWhereInput>
    Member?: XOR<MemberNullableScalarRelationFilter, MemberWhereInput> | null
  }, "id">

  export type TalkOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    mark?: SortOrder
    member?: SortOrderInput | SortOrder
    msg?: SortOrder
    _count?: TalkCountOrderByAggregateInput
    _avg?: TalkAvgOrderByAggregateInput
    _max?: TalkMaxOrderByAggregateInput
    _min?: TalkMinOrderByAggregateInput
    _sum?: TalkSumOrderByAggregateInput
  }

  export type TalkScalarWhereWithAggregatesInput = {
    AND?: TalkScalarWhereWithAggregatesInput | TalkScalarWhereWithAggregatesInput[]
    OR?: TalkScalarWhereWithAggregatesInput[]
    NOT?: TalkScalarWhereWithAggregatesInput | TalkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Talk"> | number
    createdAt?: DateTimeNullableWithAggregatesFilter<"Talk"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Talk"> | Date | string | null
    mark?: IntWithAggregatesFilter<"Talk"> | number
    member?: IntNullableWithAggregatesFilter<"Talk"> | number | null
    msg?: StringWithAggregatesFilter<"Talk"> | string
  }

  export type BookCreateInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    title: string
    withdel?: boolean
    ispublic?: boolean
    remark?: string | null
    Member: MemberCreateNestedOneWithoutBookInput
    FollowBook?: FollowBookCreateNestedManyWithoutBookInput
    Mark?: MarkCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    member: number
    title: string
    withdel?: boolean
    ispublic?: boolean
    remark?: string | null
    FollowBook?: FollowBookUncheckedCreateNestedManyWithoutBookInput
    Mark?: MarkUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookUpdateInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    withdel?: BoolFieldUpdateOperationsInput | boolean
    ispublic?: BoolFieldUpdateOperationsInput | boolean
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    Member?: MemberUpdateOneRequiredWithoutBookNestedInput
    FollowBook?: FollowBookUpdateManyWithoutBookNestedInput
    Mark?: MarkUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    withdel?: BoolFieldUpdateOperationsInput | boolean
    ispublic?: BoolFieldUpdateOperationsInput | boolean
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    FollowBook?: FollowBookUncheckedUpdateManyWithoutBookNestedInput
    Mark?: MarkUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateManyInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    member: number
    title: string
    withdel?: boolean
    ispublic?: boolean
    remark?: string | null
  }

  export type BookUpdateManyMutationInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    withdel?: BoolFieldUpdateOperationsInput | boolean
    ispublic?: BoolFieldUpdateOperationsInput | boolean
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    withdel?: BoolFieldUpdateOperationsInput | boolean
    ispublic?: BoolFieldUpdateOperationsInput | boolean
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FollowBookCreateInput = {
    createdAt?: Date | string | null
    Book: BookCreateNestedOneWithoutFollowBookInput
    Member?: MemberCreateNestedOneWithoutFollowBookInput
  }

  export type FollowBookUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string | null
    book: number
    member?: number | null
  }

  export type FollowBookUpdateInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Book?: BookUpdateOneRequiredWithoutFollowBookNestedInput
    Member?: MemberUpdateOneWithoutFollowBookNestedInput
  }

  export type FollowBookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    book?: IntFieldUpdateOperationsInput | number
    member?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FollowBookCreateManyInput = {
    id?: number
    createdAt?: Date | string | null
    book: number
    member?: number | null
  }

  export type FollowBookUpdateManyMutationInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FollowBookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    book?: IntFieldUpdateOperationsInput | number
    member?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LikesCreateInput = {
    createdAt?: Date | string | null
    Mark: MarkCreateNestedOneWithoutLikesInput
    Member?: MemberCreateNestedOneWithoutLikesInput
  }

  export type LikesUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string | null
    mark: number
    member?: number | null
  }

  export type LikesUpdateInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Mark?: MarkUpdateOneRequiredWithoutLikesNestedInput
    Member?: MemberUpdateOneWithoutLikesNestedInput
  }

  export type LikesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mark?: IntFieldUpdateOperationsInput | number
    member?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LikesCreateManyInput = {
    id?: number
    createdAt?: Date | string | null
    mark: number
    member?: number | null
  }

  export type LikesUpdateManyMutationInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LikesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mark?: IntFieldUpdateOperationsInput | number
    member?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MarkCreateInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    title: string
    link: string
    image?: string | null
    remark?: string | null
    Likes?: LikesCreateNestedManyWithoutMarkInput
    Book: BookCreateNestedOneWithoutMarkInput
    Member?: MemberCreateNestedOneWithoutMarkInput
    Report?: ReportCreateNestedManyWithoutMarkInput
    Talk?: TalkCreateNestedManyWithoutMarkInput
  }

  export type MarkUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    book: number
    title: string
    link: string
    image?: string | null
    maker?: number | null
    remark?: string | null
    Likes?: LikesUncheckedCreateNestedManyWithoutMarkInput
    Report?: ReportUncheckedCreateNestedManyWithoutMarkInput
    Talk?: TalkUncheckedCreateNestedManyWithoutMarkInput
  }

  export type MarkUpdateInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    Likes?: LikesUpdateManyWithoutMarkNestedInput
    Book?: BookUpdateOneRequiredWithoutMarkNestedInput
    Member?: MemberUpdateOneWithoutMarkNestedInput
    Report?: ReportUpdateManyWithoutMarkNestedInput
    Talk?: TalkUpdateManyWithoutMarkNestedInput
  }

  export type MarkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    book?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    maker?: NullableIntFieldUpdateOperationsInput | number | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    Likes?: LikesUncheckedUpdateManyWithoutMarkNestedInput
    Report?: ReportUncheckedUpdateManyWithoutMarkNestedInput
    Talk?: TalkUncheckedUpdateManyWithoutMarkNestedInput
  }

  export type MarkCreateManyInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    book: number
    title: string
    link: string
    image?: string | null
    maker?: number | null
    remark?: string | null
  }

  export type MarkUpdateManyMutationInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MarkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    book?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    maker?: NullableIntFieldUpdateOperationsInput | number | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MemberCreateInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    nickname: string
    email: string
    passwd?: string | null
    isadmin?: boolean
    image?: string | null
    emailcheck?: string | null
    outdt?: string | null
    descript?: string | null
    Book?: BookCreateNestedManyWithoutMemberInput
    FollowBook?: FollowBookCreateNestedManyWithoutMemberInput
    Likes?: LikesCreateNestedManyWithoutMemberInput
    Mark?: MarkCreateNestedManyWithoutMemberInput
    Report?: ReportCreateNestedManyWithoutMemberInput
    Talk?: TalkCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    nickname: string
    email: string
    passwd?: string | null
    isadmin?: boolean
    image?: string | null
    emailcheck?: string | null
    outdt?: string | null
    descript?: string | null
    Book?: BookUncheckedCreateNestedManyWithoutMemberInput
    FollowBook?: FollowBookUncheckedCreateNestedManyWithoutMemberInput
    Likes?: LikesUncheckedCreateNestedManyWithoutMemberInput
    Mark?: MarkUncheckedCreateNestedManyWithoutMemberInput
    Report?: ReportUncheckedCreateNestedManyWithoutMemberInput
    Talk?: TalkUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberUpdateInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: NullableStringFieldUpdateOperationsInput | string | null
    isadmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailcheck?: NullableStringFieldUpdateOperationsInput | string | null
    outdt?: NullableStringFieldUpdateOperationsInput | string | null
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    Book?: BookUpdateManyWithoutMemberNestedInput
    FollowBook?: FollowBookUpdateManyWithoutMemberNestedInput
    Likes?: LikesUpdateManyWithoutMemberNestedInput
    Mark?: MarkUpdateManyWithoutMemberNestedInput
    Report?: ReportUpdateManyWithoutMemberNestedInput
    Talk?: TalkUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: NullableStringFieldUpdateOperationsInput | string | null
    isadmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailcheck?: NullableStringFieldUpdateOperationsInput | string | null
    outdt?: NullableStringFieldUpdateOperationsInput | string | null
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    Book?: BookUncheckedUpdateManyWithoutMemberNestedInput
    FollowBook?: FollowBookUncheckedUpdateManyWithoutMemberNestedInput
    Likes?: LikesUncheckedUpdateManyWithoutMemberNestedInput
    Mark?: MarkUncheckedUpdateManyWithoutMemberNestedInput
    Report?: ReportUncheckedUpdateManyWithoutMemberNestedInput
    Talk?: TalkUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MemberCreateManyInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    nickname: string
    email: string
    passwd?: string | null
    isadmin?: boolean
    image?: string | null
    emailcheck?: string | null
    outdt?: string | null
    descript?: string | null
  }

  export type MemberUpdateManyMutationInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: NullableStringFieldUpdateOperationsInput | string | null
    isadmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailcheck?: NullableStringFieldUpdateOperationsInput | string | null
    outdt?: NullableStringFieldUpdateOperationsInput | string | null
    descript?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MemberUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: NullableStringFieldUpdateOperationsInput | string | null
    isadmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailcheck?: NullableStringFieldUpdateOperationsInput | string | null
    outdt?: NullableStringFieldUpdateOperationsInput | string | null
    descript?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReportCreateInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Mark: MarkCreateNestedOneWithoutReportInput
    Member: MemberCreateNestedOneWithoutReportInput
  }

  export type ReportUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    mark: number
    member: number
  }

  export type ReportUpdateInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Mark?: MarkUpdateOneRequiredWithoutReportNestedInput
    Member?: MemberUpdateOneRequiredWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mark?: IntFieldUpdateOperationsInput | number
    member?: IntFieldUpdateOperationsInput | number
  }

  export type ReportCreateManyInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    mark: number
    member: number
  }

  export type ReportUpdateManyMutationInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mark?: IntFieldUpdateOperationsInput | number
    member?: IntFieldUpdateOperationsInput | number
  }

  export type TalkCreateInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    msg: string
    Mark: MarkCreateNestedOneWithoutTalkInput
    Member?: MemberCreateNestedOneWithoutTalkInput
  }

  export type TalkUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    mark: number
    member?: number | null
    msg: string
  }

  export type TalkUpdateInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    msg?: StringFieldUpdateOperationsInput | string
    Mark?: MarkUpdateOneRequiredWithoutTalkNestedInput
    Member?: MemberUpdateOneWithoutTalkNestedInput
  }

  export type TalkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mark?: IntFieldUpdateOperationsInput | number
    member?: NullableIntFieldUpdateOperationsInput | number | null
    msg?: StringFieldUpdateOperationsInput | string
  }

  export type TalkCreateManyInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    mark: number
    member?: number | null
    msg: string
  }

  export type TalkUpdateManyMutationInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    msg?: StringFieldUpdateOperationsInput | string
  }

  export type TalkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mark?: IntFieldUpdateOperationsInput | number
    member?: NullableIntFieldUpdateOperationsInput | number | null
    msg?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type MemberScalarRelationFilter = {
    is?: MemberWhereInput
    isNot?: MemberWhereInput
  }

  export type FollowBookListRelationFilter = {
    every?: FollowBookWhereInput
    some?: FollowBookWhereInput
    none?: FollowBookWhereInput
  }

  export type MarkListRelationFilter = {
    every?: MarkWhereInput
    some?: MarkWhereInput
    none?: MarkWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FollowBookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MarkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookOrderByRelevanceInput = {
    fields: BookOrderByRelevanceFieldEnum | BookOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BookCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    member?: SortOrder
    title?: SortOrder
    withdel?: SortOrder
    ispublic?: SortOrder
    remark?: SortOrder
  }

  export type BookAvgOrderByAggregateInput = {
    id?: SortOrder
    member?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    member?: SortOrder
    title?: SortOrder
    withdel?: SortOrder
    ispublic?: SortOrder
    remark?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    member?: SortOrder
    title?: SortOrder
    withdel?: SortOrder
    ispublic?: SortOrder
    remark?: SortOrder
  }

  export type BookSumOrderByAggregateInput = {
    id?: SortOrder
    member?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BookScalarRelationFilter = {
    is?: BookWhereInput
    isNot?: BookWhereInput
  }

  export type MemberNullableScalarRelationFilter = {
    is?: MemberWhereInput | null
    isNot?: MemberWhereInput | null
  }

  export type FollowBookCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    book?: SortOrder
    member?: SortOrder
  }

  export type FollowBookAvgOrderByAggregateInput = {
    id?: SortOrder
    book?: SortOrder
    member?: SortOrder
  }

  export type FollowBookMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    book?: SortOrder
    member?: SortOrder
  }

  export type FollowBookMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    book?: SortOrder
    member?: SortOrder
  }

  export type FollowBookSumOrderByAggregateInput = {
    id?: SortOrder
    book?: SortOrder
    member?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type MarkScalarRelationFilter = {
    is?: MarkWhereInput
    isNot?: MarkWhereInput
  }

  export type LikesCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    mark?: SortOrder
    member?: SortOrder
  }

  export type LikesAvgOrderByAggregateInput = {
    id?: SortOrder
    mark?: SortOrder
    member?: SortOrder
  }

  export type LikesMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    mark?: SortOrder
    member?: SortOrder
  }

  export type LikesMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    mark?: SortOrder
    member?: SortOrder
  }

  export type LikesSumOrderByAggregateInput = {
    id?: SortOrder
    mark?: SortOrder
    member?: SortOrder
  }

  export type LikesListRelationFilter = {
    every?: LikesWhereInput
    some?: LikesWhereInput
    none?: LikesWhereInput
  }

  export type ReportListRelationFilter = {
    every?: ReportWhereInput
    some?: ReportWhereInput
    none?: ReportWhereInput
  }

  export type TalkListRelationFilter = {
    every?: TalkWhereInput
    some?: TalkWhereInput
    none?: TalkWhereInput
  }

  export type LikesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TalkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MarkOrderByRelevanceInput = {
    fields: MarkOrderByRelevanceFieldEnum | MarkOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MarkCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    book?: SortOrder
    title?: SortOrder
    link?: SortOrder
    image?: SortOrder
    maker?: SortOrder
    remark?: SortOrder
  }

  export type MarkAvgOrderByAggregateInput = {
    id?: SortOrder
    book?: SortOrder
    maker?: SortOrder
  }

  export type MarkMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    book?: SortOrder
    title?: SortOrder
    link?: SortOrder
    image?: SortOrder
    maker?: SortOrder
    remark?: SortOrder
  }

  export type MarkMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    book?: SortOrder
    title?: SortOrder
    link?: SortOrder
    image?: SortOrder
    maker?: SortOrder
    remark?: SortOrder
  }

  export type MarkSumOrderByAggregateInput = {
    id?: SortOrder
    book?: SortOrder
    maker?: SortOrder
  }

  export type BookListRelationFilter = {
    every?: BookWhereInput
    some?: BookWhereInput
    none?: BookWhereInput
  }

  export type BookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MemberOrderByRelevanceInput = {
    fields: MemberOrderByRelevanceFieldEnum | MemberOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type MemberCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    passwd?: SortOrder
    isadmin?: SortOrder
    image?: SortOrder
    emailcheck?: SortOrder
    outdt?: SortOrder
    descript?: SortOrder
  }

  export type MemberAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MemberMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    passwd?: SortOrder
    isadmin?: SortOrder
    image?: SortOrder
    emailcheck?: SortOrder
    outdt?: SortOrder
    descript?: SortOrder
  }

  export type MemberMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nickname?: SortOrder
    email?: SortOrder
    passwd?: SortOrder
    isadmin?: SortOrder
    image?: SortOrder
    emailcheck?: SortOrder
    outdt?: SortOrder
    descript?: SortOrder
  }

  export type MemberSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mark?: SortOrder
    member?: SortOrder
  }

  export type ReportAvgOrderByAggregateInput = {
    id?: SortOrder
    mark?: SortOrder
    member?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mark?: SortOrder
    member?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mark?: SortOrder
    member?: SortOrder
  }

  export type ReportSumOrderByAggregateInput = {
    id?: SortOrder
    mark?: SortOrder
    member?: SortOrder
  }

  export type TalkOrderByRelevanceInput = {
    fields: TalkOrderByRelevanceFieldEnum | TalkOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TalkCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mark?: SortOrder
    member?: SortOrder
    msg?: SortOrder
  }

  export type TalkAvgOrderByAggregateInput = {
    id?: SortOrder
    mark?: SortOrder
    member?: SortOrder
  }

  export type TalkMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mark?: SortOrder
    member?: SortOrder
    msg?: SortOrder
  }

  export type TalkMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mark?: SortOrder
    member?: SortOrder
    msg?: SortOrder
  }

  export type TalkSumOrderByAggregateInput = {
    id?: SortOrder
    mark?: SortOrder
    member?: SortOrder
  }

  export type MemberCreateNestedOneWithoutBookInput = {
    create?: XOR<MemberCreateWithoutBookInput, MemberUncheckedCreateWithoutBookInput>
    connectOrCreate?: MemberCreateOrConnectWithoutBookInput
    connect?: MemberWhereUniqueInput
  }

  export type FollowBookCreateNestedManyWithoutBookInput = {
    create?: XOR<FollowBookCreateWithoutBookInput, FollowBookUncheckedCreateWithoutBookInput> | FollowBookCreateWithoutBookInput[] | FollowBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: FollowBookCreateOrConnectWithoutBookInput | FollowBookCreateOrConnectWithoutBookInput[]
    createMany?: FollowBookCreateManyBookInputEnvelope
    connect?: FollowBookWhereUniqueInput | FollowBookWhereUniqueInput[]
  }

  export type MarkCreateNestedManyWithoutBookInput = {
    create?: XOR<MarkCreateWithoutBookInput, MarkUncheckedCreateWithoutBookInput> | MarkCreateWithoutBookInput[] | MarkUncheckedCreateWithoutBookInput[]
    connectOrCreate?: MarkCreateOrConnectWithoutBookInput | MarkCreateOrConnectWithoutBookInput[]
    createMany?: MarkCreateManyBookInputEnvelope
    connect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
  }

  export type FollowBookUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<FollowBookCreateWithoutBookInput, FollowBookUncheckedCreateWithoutBookInput> | FollowBookCreateWithoutBookInput[] | FollowBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: FollowBookCreateOrConnectWithoutBookInput | FollowBookCreateOrConnectWithoutBookInput[]
    createMany?: FollowBookCreateManyBookInputEnvelope
    connect?: FollowBookWhereUniqueInput | FollowBookWhereUniqueInput[]
  }

  export type MarkUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<MarkCreateWithoutBookInput, MarkUncheckedCreateWithoutBookInput> | MarkCreateWithoutBookInput[] | MarkUncheckedCreateWithoutBookInput[]
    connectOrCreate?: MarkCreateOrConnectWithoutBookInput | MarkCreateOrConnectWithoutBookInput[]
    createMany?: MarkCreateManyBookInputEnvelope
    connect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type MemberUpdateOneRequiredWithoutBookNestedInput = {
    create?: XOR<MemberCreateWithoutBookInput, MemberUncheckedCreateWithoutBookInput>
    connectOrCreate?: MemberCreateOrConnectWithoutBookInput
    upsert?: MemberUpsertWithoutBookInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutBookInput, MemberUpdateWithoutBookInput>, MemberUncheckedUpdateWithoutBookInput>
  }

  export type FollowBookUpdateManyWithoutBookNestedInput = {
    create?: XOR<FollowBookCreateWithoutBookInput, FollowBookUncheckedCreateWithoutBookInput> | FollowBookCreateWithoutBookInput[] | FollowBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: FollowBookCreateOrConnectWithoutBookInput | FollowBookCreateOrConnectWithoutBookInput[]
    upsert?: FollowBookUpsertWithWhereUniqueWithoutBookInput | FollowBookUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: FollowBookCreateManyBookInputEnvelope
    set?: FollowBookWhereUniqueInput | FollowBookWhereUniqueInput[]
    disconnect?: FollowBookWhereUniqueInput | FollowBookWhereUniqueInput[]
    delete?: FollowBookWhereUniqueInput | FollowBookWhereUniqueInput[]
    connect?: FollowBookWhereUniqueInput | FollowBookWhereUniqueInput[]
    update?: FollowBookUpdateWithWhereUniqueWithoutBookInput | FollowBookUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: FollowBookUpdateManyWithWhereWithoutBookInput | FollowBookUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: FollowBookScalarWhereInput | FollowBookScalarWhereInput[]
  }

  export type MarkUpdateManyWithoutBookNestedInput = {
    create?: XOR<MarkCreateWithoutBookInput, MarkUncheckedCreateWithoutBookInput> | MarkCreateWithoutBookInput[] | MarkUncheckedCreateWithoutBookInput[]
    connectOrCreate?: MarkCreateOrConnectWithoutBookInput | MarkCreateOrConnectWithoutBookInput[]
    upsert?: MarkUpsertWithWhereUniqueWithoutBookInput | MarkUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: MarkCreateManyBookInputEnvelope
    set?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    disconnect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    delete?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    connect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    update?: MarkUpdateWithWhereUniqueWithoutBookInput | MarkUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: MarkUpdateManyWithWhereWithoutBookInput | MarkUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: MarkScalarWhereInput | MarkScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FollowBookUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<FollowBookCreateWithoutBookInput, FollowBookUncheckedCreateWithoutBookInput> | FollowBookCreateWithoutBookInput[] | FollowBookUncheckedCreateWithoutBookInput[]
    connectOrCreate?: FollowBookCreateOrConnectWithoutBookInput | FollowBookCreateOrConnectWithoutBookInput[]
    upsert?: FollowBookUpsertWithWhereUniqueWithoutBookInput | FollowBookUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: FollowBookCreateManyBookInputEnvelope
    set?: FollowBookWhereUniqueInput | FollowBookWhereUniqueInput[]
    disconnect?: FollowBookWhereUniqueInput | FollowBookWhereUniqueInput[]
    delete?: FollowBookWhereUniqueInput | FollowBookWhereUniqueInput[]
    connect?: FollowBookWhereUniqueInput | FollowBookWhereUniqueInput[]
    update?: FollowBookUpdateWithWhereUniqueWithoutBookInput | FollowBookUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: FollowBookUpdateManyWithWhereWithoutBookInput | FollowBookUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: FollowBookScalarWhereInput | FollowBookScalarWhereInput[]
  }

  export type MarkUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<MarkCreateWithoutBookInput, MarkUncheckedCreateWithoutBookInput> | MarkCreateWithoutBookInput[] | MarkUncheckedCreateWithoutBookInput[]
    connectOrCreate?: MarkCreateOrConnectWithoutBookInput | MarkCreateOrConnectWithoutBookInput[]
    upsert?: MarkUpsertWithWhereUniqueWithoutBookInput | MarkUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: MarkCreateManyBookInputEnvelope
    set?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    disconnect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    delete?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    connect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    update?: MarkUpdateWithWhereUniqueWithoutBookInput | MarkUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: MarkUpdateManyWithWhereWithoutBookInput | MarkUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: MarkScalarWhereInput | MarkScalarWhereInput[]
  }

  export type BookCreateNestedOneWithoutFollowBookInput = {
    create?: XOR<BookCreateWithoutFollowBookInput, BookUncheckedCreateWithoutFollowBookInput>
    connectOrCreate?: BookCreateOrConnectWithoutFollowBookInput
    connect?: BookWhereUniqueInput
  }

  export type MemberCreateNestedOneWithoutFollowBookInput = {
    create?: XOR<MemberCreateWithoutFollowBookInput, MemberUncheckedCreateWithoutFollowBookInput>
    connectOrCreate?: MemberCreateOrConnectWithoutFollowBookInput
    connect?: MemberWhereUniqueInput
  }

  export type BookUpdateOneRequiredWithoutFollowBookNestedInput = {
    create?: XOR<BookCreateWithoutFollowBookInput, BookUncheckedCreateWithoutFollowBookInput>
    connectOrCreate?: BookCreateOrConnectWithoutFollowBookInput
    upsert?: BookUpsertWithoutFollowBookInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutFollowBookInput, BookUpdateWithoutFollowBookInput>, BookUncheckedUpdateWithoutFollowBookInput>
  }

  export type MemberUpdateOneWithoutFollowBookNestedInput = {
    create?: XOR<MemberCreateWithoutFollowBookInput, MemberUncheckedCreateWithoutFollowBookInput>
    connectOrCreate?: MemberCreateOrConnectWithoutFollowBookInput
    upsert?: MemberUpsertWithoutFollowBookInput
    disconnect?: MemberWhereInput | boolean
    delete?: MemberWhereInput | boolean
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutFollowBookInput, MemberUpdateWithoutFollowBookInput>, MemberUncheckedUpdateWithoutFollowBookInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MarkCreateNestedOneWithoutLikesInput = {
    create?: XOR<MarkCreateWithoutLikesInput, MarkUncheckedCreateWithoutLikesInput>
    connectOrCreate?: MarkCreateOrConnectWithoutLikesInput
    connect?: MarkWhereUniqueInput
  }

  export type MemberCreateNestedOneWithoutLikesInput = {
    create?: XOR<MemberCreateWithoutLikesInput, MemberUncheckedCreateWithoutLikesInput>
    connectOrCreate?: MemberCreateOrConnectWithoutLikesInput
    connect?: MemberWhereUniqueInput
  }

  export type MarkUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<MarkCreateWithoutLikesInput, MarkUncheckedCreateWithoutLikesInput>
    connectOrCreate?: MarkCreateOrConnectWithoutLikesInput
    upsert?: MarkUpsertWithoutLikesInput
    connect?: MarkWhereUniqueInput
    update?: XOR<XOR<MarkUpdateToOneWithWhereWithoutLikesInput, MarkUpdateWithoutLikesInput>, MarkUncheckedUpdateWithoutLikesInput>
  }

  export type MemberUpdateOneWithoutLikesNestedInput = {
    create?: XOR<MemberCreateWithoutLikesInput, MemberUncheckedCreateWithoutLikesInput>
    connectOrCreate?: MemberCreateOrConnectWithoutLikesInput
    upsert?: MemberUpsertWithoutLikesInput
    disconnect?: MemberWhereInput | boolean
    delete?: MemberWhereInput | boolean
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutLikesInput, MemberUpdateWithoutLikesInput>, MemberUncheckedUpdateWithoutLikesInput>
  }

  export type LikesCreateNestedManyWithoutMarkInput = {
    create?: XOR<LikesCreateWithoutMarkInput, LikesUncheckedCreateWithoutMarkInput> | LikesCreateWithoutMarkInput[] | LikesUncheckedCreateWithoutMarkInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutMarkInput | LikesCreateOrConnectWithoutMarkInput[]
    createMany?: LikesCreateManyMarkInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type BookCreateNestedOneWithoutMarkInput = {
    create?: XOR<BookCreateWithoutMarkInput, BookUncheckedCreateWithoutMarkInput>
    connectOrCreate?: BookCreateOrConnectWithoutMarkInput
    connect?: BookWhereUniqueInput
  }

  export type MemberCreateNestedOneWithoutMarkInput = {
    create?: XOR<MemberCreateWithoutMarkInput, MemberUncheckedCreateWithoutMarkInput>
    connectOrCreate?: MemberCreateOrConnectWithoutMarkInput
    connect?: MemberWhereUniqueInput
  }

  export type ReportCreateNestedManyWithoutMarkInput = {
    create?: XOR<ReportCreateWithoutMarkInput, ReportUncheckedCreateWithoutMarkInput> | ReportCreateWithoutMarkInput[] | ReportUncheckedCreateWithoutMarkInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutMarkInput | ReportCreateOrConnectWithoutMarkInput[]
    createMany?: ReportCreateManyMarkInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type TalkCreateNestedManyWithoutMarkInput = {
    create?: XOR<TalkCreateWithoutMarkInput, TalkUncheckedCreateWithoutMarkInput> | TalkCreateWithoutMarkInput[] | TalkUncheckedCreateWithoutMarkInput[]
    connectOrCreate?: TalkCreateOrConnectWithoutMarkInput | TalkCreateOrConnectWithoutMarkInput[]
    createMany?: TalkCreateManyMarkInputEnvelope
    connect?: TalkWhereUniqueInput | TalkWhereUniqueInput[]
  }

  export type LikesUncheckedCreateNestedManyWithoutMarkInput = {
    create?: XOR<LikesCreateWithoutMarkInput, LikesUncheckedCreateWithoutMarkInput> | LikesCreateWithoutMarkInput[] | LikesUncheckedCreateWithoutMarkInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutMarkInput | LikesCreateOrConnectWithoutMarkInput[]
    createMany?: LikesCreateManyMarkInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutMarkInput = {
    create?: XOR<ReportCreateWithoutMarkInput, ReportUncheckedCreateWithoutMarkInput> | ReportCreateWithoutMarkInput[] | ReportUncheckedCreateWithoutMarkInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutMarkInput | ReportCreateOrConnectWithoutMarkInput[]
    createMany?: ReportCreateManyMarkInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type TalkUncheckedCreateNestedManyWithoutMarkInput = {
    create?: XOR<TalkCreateWithoutMarkInput, TalkUncheckedCreateWithoutMarkInput> | TalkCreateWithoutMarkInput[] | TalkUncheckedCreateWithoutMarkInput[]
    connectOrCreate?: TalkCreateOrConnectWithoutMarkInput | TalkCreateOrConnectWithoutMarkInput[]
    createMany?: TalkCreateManyMarkInputEnvelope
    connect?: TalkWhereUniqueInput | TalkWhereUniqueInput[]
  }

  export type LikesUpdateManyWithoutMarkNestedInput = {
    create?: XOR<LikesCreateWithoutMarkInput, LikesUncheckedCreateWithoutMarkInput> | LikesCreateWithoutMarkInput[] | LikesUncheckedCreateWithoutMarkInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutMarkInput | LikesCreateOrConnectWithoutMarkInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutMarkInput | LikesUpsertWithWhereUniqueWithoutMarkInput[]
    createMany?: LikesCreateManyMarkInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutMarkInput | LikesUpdateWithWhereUniqueWithoutMarkInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutMarkInput | LikesUpdateManyWithWhereWithoutMarkInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type BookUpdateOneRequiredWithoutMarkNestedInput = {
    create?: XOR<BookCreateWithoutMarkInput, BookUncheckedCreateWithoutMarkInput>
    connectOrCreate?: BookCreateOrConnectWithoutMarkInput
    upsert?: BookUpsertWithoutMarkInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutMarkInput, BookUpdateWithoutMarkInput>, BookUncheckedUpdateWithoutMarkInput>
  }

  export type MemberUpdateOneWithoutMarkNestedInput = {
    create?: XOR<MemberCreateWithoutMarkInput, MemberUncheckedCreateWithoutMarkInput>
    connectOrCreate?: MemberCreateOrConnectWithoutMarkInput
    upsert?: MemberUpsertWithoutMarkInput
    disconnect?: MemberWhereInput | boolean
    delete?: MemberWhereInput | boolean
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutMarkInput, MemberUpdateWithoutMarkInput>, MemberUncheckedUpdateWithoutMarkInput>
  }

  export type ReportUpdateManyWithoutMarkNestedInput = {
    create?: XOR<ReportCreateWithoutMarkInput, ReportUncheckedCreateWithoutMarkInput> | ReportCreateWithoutMarkInput[] | ReportUncheckedCreateWithoutMarkInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutMarkInput | ReportCreateOrConnectWithoutMarkInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutMarkInput | ReportUpsertWithWhereUniqueWithoutMarkInput[]
    createMany?: ReportCreateManyMarkInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutMarkInput | ReportUpdateWithWhereUniqueWithoutMarkInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutMarkInput | ReportUpdateManyWithWhereWithoutMarkInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type TalkUpdateManyWithoutMarkNestedInput = {
    create?: XOR<TalkCreateWithoutMarkInput, TalkUncheckedCreateWithoutMarkInput> | TalkCreateWithoutMarkInput[] | TalkUncheckedCreateWithoutMarkInput[]
    connectOrCreate?: TalkCreateOrConnectWithoutMarkInput | TalkCreateOrConnectWithoutMarkInput[]
    upsert?: TalkUpsertWithWhereUniqueWithoutMarkInput | TalkUpsertWithWhereUniqueWithoutMarkInput[]
    createMany?: TalkCreateManyMarkInputEnvelope
    set?: TalkWhereUniqueInput | TalkWhereUniqueInput[]
    disconnect?: TalkWhereUniqueInput | TalkWhereUniqueInput[]
    delete?: TalkWhereUniqueInput | TalkWhereUniqueInput[]
    connect?: TalkWhereUniqueInput | TalkWhereUniqueInput[]
    update?: TalkUpdateWithWhereUniqueWithoutMarkInput | TalkUpdateWithWhereUniqueWithoutMarkInput[]
    updateMany?: TalkUpdateManyWithWhereWithoutMarkInput | TalkUpdateManyWithWhereWithoutMarkInput[]
    deleteMany?: TalkScalarWhereInput | TalkScalarWhereInput[]
  }

  export type LikesUncheckedUpdateManyWithoutMarkNestedInput = {
    create?: XOR<LikesCreateWithoutMarkInput, LikesUncheckedCreateWithoutMarkInput> | LikesCreateWithoutMarkInput[] | LikesUncheckedCreateWithoutMarkInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutMarkInput | LikesCreateOrConnectWithoutMarkInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutMarkInput | LikesUpsertWithWhereUniqueWithoutMarkInput[]
    createMany?: LikesCreateManyMarkInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutMarkInput | LikesUpdateWithWhereUniqueWithoutMarkInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutMarkInput | LikesUpdateManyWithWhereWithoutMarkInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutMarkNestedInput = {
    create?: XOR<ReportCreateWithoutMarkInput, ReportUncheckedCreateWithoutMarkInput> | ReportCreateWithoutMarkInput[] | ReportUncheckedCreateWithoutMarkInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutMarkInput | ReportCreateOrConnectWithoutMarkInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutMarkInput | ReportUpsertWithWhereUniqueWithoutMarkInput[]
    createMany?: ReportCreateManyMarkInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutMarkInput | ReportUpdateWithWhereUniqueWithoutMarkInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutMarkInput | ReportUpdateManyWithWhereWithoutMarkInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type TalkUncheckedUpdateManyWithoutMarkNestedInput = {
    create?: XOR<TalkCreateWithoutMarkInput, TalkUncheckedCreateWithoutMarkInput> | TalkCreateWithoutMarkInput[] | TalkUncheckedCreateWithoutMarkInput[]
    connectOrCreate?: TalkCreateOrConnectWithoutMarkInput | TalkCreateOrConnectWithoutMarkInput[]
    upsert?: TalkUpsertWithWhereUniqueWithoutMarkInput | TalkUpsertWithWhereUniqueWithoutMarkInput[]
    createMany?: TalkCreateManyMarkInputEnvelope
    set?: TalkWhereUniqueInput | TalkWhereUniqueInput[]
    disconnect?: TalkWhereUniqueInput | TalkWhereUniqueInput[]
    delete?: TalkWhereUniqueInput | TalkWhereUniqueInput[]
    connect?: TalkWhereUniqueInput | TalkWhereUniqueInput[]
    update?: TalkUpdateWithWhereUniqueWithoutMarkInput | TalkUpdateWithWhereUniqueWithoutMarkInput[]
    updateMany?: TalkUpdateManyWithWhereWithoutMarkInput | TalkUpdateManyWithWhereWithoutMarkInput[]
    deleteMany?: TalkScalarWhereInput | TalkScalarWhereInput[]
  }

  export type BookCreateNestedManyWithoutMemberInput = {
    create?: XOR<BookCreateWithoutMemberInput, BookUncheckedCreateWithoutMemberInput> | BookCreateWithoutMemberInput[] | BookUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: BookCreateOrConnectWithoutMemberInput | BookCreateOrConnectWithoutMemberInput[]
    createMany?: BookCreateManyMemberInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type FollowBookCreateNestedManyWithoutMemberInput = {
    create?: XOR<FollowBookCreateWithoutMemberInput, FollowBookUncheckedCreateWithoutMemberInput> | FollowBookCreateWithoutMemberInput[] | FollowBookUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: FollowBookCreateOrConnectWithoutMemberInput | FollowBookCreateOrConnectWithoutMemberInput[]
    createMany?: FollowBookCreateManyMemberInputEnvelope
    connect?: FollowBookWhereUniqueInput | FollowBookWhereUniqueInput[]
  }

  export type LikesCreateNestedManyWithoutMemberInput = {
    create?: XOR<LikesCreateWithoutMemberInput, LikesUncheckedCreateWithoutMemberInput> | LikesCreateWithoutMemberInput[] | LikesUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutMemberInput | LikesCreateOrConnectWithoutMemberInput[]
    createMany?: LikesCreateManyMemberInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type MarkCreateNestedManyWithoutMemberInput = {
    create?: XOR<MarkCreateWithoutMemberInput, MarkUncheckedCreateWithoutMemberInput> | MarkCreateWithoutMemberInput[] | MarkUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MarkCreateOrConnectWithoutMemberInput | MarkCreateOrConnectWithoutMemberInput[]
    createMany?: MarkCreateManyMemberInputEnvelope
    connect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
  }

  export type ReportCreateNestedManyWithoutMemberInput = {
    create?: XOR<ReportCreateWithoutMemberInput, ReportUncheckedCreateWithoutMemberInput> | ReportCreateWithoutMemberInput[] | ReportUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutMemberInput | ReportCreateOrConnectWithoutMemberInput[]
    createMany?: ReportCreateManyMemberInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type TalkCreateNestedManyWithoutMemberInput = {
    create?: XOR<TalkCreateWithoutMemberInput, TalkUncheckedCreateWithoutMemberInput> | TalkCreateWithoutMemberInput[] | TalkUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: TalkCreateOrConnectWithoutMemberInput | TalkCreateOrConnectWithoutMemberInput[]
    createMany?: TalkCreateManyMemberInputEnvelope
    connect?: TalkWhereUniqueInput | TalkWhereUniqueInput[]
  }

  export type BookUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<BookCreateWithoutMemberInput, BookUncheckedCreateWithoutMemberInput> | BookCreateWithoutMemberInput[] | BookUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: BookCreateOrConnectWithoutMemberInput | BookCreateOrConnectWithoutMemberInput[]
    createMany?: BookCreateManyMemberInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type FollowBookUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<FollowBookCreateWithoutMemberInput, FollowBookUncheckedCreateWithoutMemberInput> | FollowBookCreateWithoutMemberInput[] | FollowBookUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: FollowBookCreateOrConnectWithoutMemberInput | FollowBookCreateOrConnectWithoutMemberInput[]
    createMany?: FollowBookCreateManyMemberInputEnvelope
    connect?: FollowBookWhereUniqueInput | FollowBookWhereUniqueInput[]
  }

  export type LikesUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<LikesCreateWithoutMemberInput, LikesUncheckedCreateWithoutMemberInput> | LikesCreateWithoutMemberInput[] | LikesUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutMemberInput | LikesCreateOrConnectWithoutMemberInput[]
    createMany?: LikesCreateManyMemberInputEnvelope
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
  }

  export type MarkUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<MarkCreateWithoutMemberInput, MarkUncheckedCreateWithoutMemberInput> | MarkCreateWithoutMemberInput[] | MarkUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MarkCreateOrConnectWithoutMemberInput | MarkCreateOrConnectWithoutMemberInput[]
    createMany?: MarkCreateManyMemberInputEnvelope
    connect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<ReportCreateWithoutMemberInput, ReportUncheckedCreateWithoutMemberInput> | ReportCreateWithoutMemberInput[] | ReportUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutMemberInput | ReportCreateOrConnectWithoutMemberInput[]
    createMany?: ReportCreateManyMemberInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type TalkUncheckedCreateNestedManyWithoutMemberInput = {
    create?: XOR<TalkCreateWithoutMemberInput, TalkUncheckedCreateWithoutMemberInput> | TalkCreateWithoutMemberInput[] | TalkUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: TalkCreateOrConnectWithoutMemberInput | TalkCreateOrConnectWithoutMemberInput[]
    createMany?: TalkCreateManyMemberInputEnvelope
    connect?: TalkWhereUniqueInput | TalkWhereUniqueInput[]
  }

  export type BookUpdateManyWithoutMemberNestedInput = {
    create?: XOR<BookCreateWithoutMemberInput, BookUncheckedCreateWithoutMemberInput> | BookCreateWithoutMemberInput[] | BookUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: BookCreateOrConnectWithoutMemberInput | BookCreateOrConnectWithoutMemberInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutMemberInput | BookUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: BookCreateManyMemberInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutMemberInput | BookUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: BookUpdateManyWithWhereWithoutMemberInput | BookUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type FollowBookUpdateManyWithoutMemberNestedInput = {
    create?: XOR<FollowBookCreateWithoutMemberInput, FollowBookUncheckedCreateWithoutMemberInput> | FollowBookCreateWithoutMemberInput[] | FollowBookUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: FollowBookCreateOrConnectWithoutMemberInput | FollowBookCreateOrConnectWithoutMemberInput[]
    upsert?: FollowBookUpsertWithWhereUniqueWithoutMemberInput | FollowBookUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: FollowBookCreateManyMemberInputEnvelope
    set?: FollowBookWhereUniqueInput | FollowBookWhereUniqueInput[]
    disconnect?: FollowBookWhereUniqueInput | FollowBookWhereUniqueInput[]
    delete?: FollowBookWhereUniqueInput | FollowBookWhereUniqueInput[]
    connect?: FollowBookWhereUniqueInput | FollowBookWhereUniqueInput[]
    update?: FollowBookUpdateWithWhereUniqueWithoutMemberInput | FollowBookUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: FollowBookUpdateManyWithWhereWithoutMemberInput | FollowBookUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: FollowBookScalarWhereInput | FollowBookScalarWhereInput[]
  }

  export type LikesUpdateManyWithoutMemberNestedInput = {
    create?: XOR<LikesCreateWithoutMemberInput, LikesUncheckedCreateWithoutMemberInput> | LikesCreateWithoutMemberInput[] | LikesUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutMemberInput | LikesCreateOrConnectWithoutMemberInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutMemberInput | LikesUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: LikesCreateManyMemberInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutMemberInput | LikesUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutMemberInput | LikesUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type MarkUpdateManyWithoutMemberNestedInput = {
    create?: XOR<MarkCreateWithoutMemberInput, MarkUncheckedCreateWithoutMemberInput> | MarkCreateWithoutMemberInput[] | MarkUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MarkCreateOrConnectWithoutMemberInput | MarkCreateOrConnectWithoutMemberInput[]
    upsert?: MarkUpsertWithWhereUniqueWithoutMemberInput | MarkUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: MarkCreateManyMemberInputEnvelope
    set?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    disconnect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    delete?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    connect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    update?: MarkUpdateWithWhereUniqueWithoutMemberInput | MarkUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: MarkUpdateManyWithWhereWithoutMemberInput | MarkUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: MarkScalarWhereInput | MarkScalarWhereInput[]
  }

  export type ReportUpdateManyWithoutMemberNestedInput = {
    create?: XOR<ReportCreateWithoutMemberInput, ReportUncheckedCreateWithoutMemberInput> | ReportCreateWithoutMemberInput[] | ReportUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutMemberInput | ReportCreateOrConnectWithoutMemberInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutMemberInput | ReportUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: ReportCreateManyMemberInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutMemberInput | ReportUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutMemberInput | ReportUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type TalkUpdateManyWithoutMemberNestedInput = {
    create?: XOR<TalkCreateWithoutMemberInput, TalkUncheckedCreateWithoutMemberInput> | TalkCreateWithoutMemberInput[] | TalkUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: TalkCreateOrConnectWithoutMemberInput | TalkCreateOrConnectWithoutMemberInput[]
    upsert?: TalkUpsertWithWhereUniqueWithoutMemberInput | TalkUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: TalkCreateManyMemberInputEnvelope
    set?: TalkWhereUniqueInput | TalkWhereUniqueInput[]
    disconnect?: TalkWhereUniqueInput | TalkWhereUniqueInput[]
    delete?: TalkWhereUniqueInput | TalkWhereUniqueInput[]
    connect?: TalkWhereUniqueInput | TalkWhereUniqueInput[]
    update?: TalkUpdateWithWhereUniqueWithoutMemberInput | TalkUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: TalkUpdateManyWithWhereWithoutMemberInput | TalkUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: TalkScalarWhereInput | TalkScalarWhereInput[]
  }

  export type BookUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<BookCreateWithoutMemberInput, BookUncheckedCreateWithoutMemberInput> | BookCreateWithoutMemberInput[] | BookUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: BookCreateOrConnectWithoutMemberInput | BookCreateOrConnectWithoutMemberInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutMemberInput | BookUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: BookCreateManyMemberInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutMemberInput | BookUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: BookUpdateManyWithWhereWithoutMemberInput | BookUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type FollowBookUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<FollowBookCreateWithoutMemberInput, FollowBookUncheckedCreateWithoutMemberInput> | FollowBookCreateWithoutMemberInput[] | FollowBookUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: FollowBookCreateOrConnectWithoutMemberInput | FollowBookCreateOrConnectWithoutMemberInput[]
    upsert?: FollowBookUpsertWithWhereUniqueWithoutMemberInput | FollowBookUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: FollowBookCreateManyMemberInputEnvelope
    set?: FollowBookWhereUniqueInput | FollowBookWhereUniqueInput[]
    disconnect?: FollowBookWhereUniqueInput | FollowBookWhereUniqueInput[]
    delete?: FollowBookWhereUniqueInput | FollowBookWhereUniqueInput[]
    connect?: FollowBookWhereUniqueInput | FollowBookWhereUniqueInput[]
    update?: FollowBookUpdateWithWhereUniqueWithoutMemberInput | FollowBookUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: FollowBookUpdateManyWithWhereWithoutMemberInput | FollowBookUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: FollowBookScalarWhereInput | FollowBookScalarWhereInput[]
  }

  export type LikesUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<LikesCreateWithoutMemberInput, LikesUncheckedCreateWithoutMemberInput> | LikesCreateWithoutMemberInput[] | LikesUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: LikesCreateOrConnectWithoutMemberInput | LikesCreateOrConnectWithoutMemberInput[]
    upsert?: LikesUpsertWithWhereUniqueWithoutMemberInput | LikesUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: LikesCreateManyMemberInputEnvelope
    set?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    disconnect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    delete?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    connect?: LikesWhereUniqueInput | LikesWhereUniqueInput[]
    update?: LikesUpdateWithWhereUniqueWithoutMemberInput | LikesUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: LikesUpdateManyWithWhereWithoutMemberInput | LikesUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: LikesScalarWhereInput | LikesScalarWhereInput[]
  }

  export type MarkUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<MarkCreateWithoutMemberInput, MarkUncheckedCreateWithoutMemberInput> | MarkCreateWithoutMemberInput[] | MarkUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: MarkCreateOrConnectWithoutMemberInput | MarkCreateOrConnectWithoutMemberInput[]
    upsert?: MarkUpsertWithWhereUniqueWithoutMemberInput | MarkUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: MarkCreateManyMemberInputEnvelope
    set?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    disconnect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    delete?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    connect?: MarkWhereUniqueInput | MarkWhereUniqueInput[]
    update?: MarkUpdateWithWhereUniqueWithoutMemberInput | MarkUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: MarkUpdateManyWithWhereWithoutMemberInput | MarkUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: MarkScalarWhereInput | MarkScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<ReportCreateWithoutMemberInput, ReportUncheckedCreateWithoutMemberInput> | ReportCreateWithoutMemberInput[] | ReportUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutMemberInput | ReportCreateOrConnectWithoutMemberInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutMemberInput | ReportUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: ReportCreateManyMemberInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutMemberInput | ReportUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutMemberInput | ReportUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type TalkUncheckedUpdateManyWithoutMemberNestedInput = {
    create?: XOR<TalkCreateWithoutMemberInput, TalkUncheckedCreateWithoutMemberInput> | TalkCreateWithoutMemberInput[] | TalkUncheckedCreateWithoutMemberInput[]
    connectOrCreate?: TalkCreateOrConnectWithoutMemberInput | TalkCreateOrConnectWithoutMemberInput[]
    upsert?: TalkUpsertWithWhereUniqueWithoutMemberInput | TalkUpsertWithWhereUniqueWithoutMemberInput[]
    createMany?: TalkCreateManyMemberInputEnvelope
    set?: TalkWhereUniqueInput | TalkWhereUniqueInput[]
    disconnect?: TalkWhereUniqueInput | TalkWhereUniqueInput[]
    delete?: TalkWhereUniqueInput | TalkWhereUniqueInput[]
    connect?: TalkWhereUniqueInput | TalkWhereUniqueInput[]
    update?: TalkUpdateWithWhereUniqueWithoutMemberInput | TalkUpdateWithWhereUniqueWithoutMemberInput[]
    updateMany?: TalkUpdateManyWithWhereWithoutMemberInput | TalkUpdateManyWithWhereWithoutMemberInput[]
    deleteMany?: TalkScalarWhereInput | TalkScalarWhereInput[]
  }

  export type MarkCreateNestedOneWithoutReportInput = {
    create?: XOR<MarkCreateWithoutReportInput, MarkUncheckedCreateWithoutReportInput>
    connectOrCreate?: MarkCreateOrConnectWithoutReportInput
    connect?: MarkWhereUniqueInput
  }

  export type MemberCreateNestedOneWithoutReportInput = {
    create?: XOR<MemberCreateWithoutReportInput, MemberUncheckedCreateWithoutReportInput>
    connectOrCreate?: MemberCreateOrConnectWithoutReportInput
    connect?: MemberWhereUniqueInput
  }

  export type MarkUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<MarkCreateWithoutReportInput, MarkUncheckedCreateWithoutReportInput>
    connectOrCreate?: MarkCreateOrConnectWithoutReportInput
    upsert?: MarkUpsertWithoutReportInput
    connect?: MarkWhereUniqueInput
    update?: XOR<XOR<MarkUpdateToOneWithWhereWithoutReportInput, MarkUpdateWithoutReportInput>, MarkUncheckedUpdateWithoutReportInput>
  }

  export type MemberUpdateOneRequiredWithoutReportNestedInput = {
    create?: XOR<MemberCreateWithoutReportInput, MemberUncheckedCreateWithoutReportInput>
    connectOrCreate?: MemberCreateOrConnectWithoutReportInput
    upsert?: MemberUpsertWithoutReportInput
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutReportInput, MemberUpdateWithoutReportInput>, MemberUncheckedUpdateWithoutReportInput>
  }

  export type MarkCreateNestedOneWithoutTalkInput = {
    create?: XOR<MarkCreateWithoutTalkInput, MarkUncheckedCreateWithoutTalkInput>
    connectOrCreate?: MarkCreateOrConnectWithoutTalkInput
    connect?: MarkWhereUniqueInput
  }

  export type MemberCreateNestedOneWithoutTalkInput = {
    create?: XOR<MemberCreateWithoutTalkInput, MemberUncheckedCreateWithoutTalkInput>
    connectOrCreate?: MemberCreateOrConnectWithoutTalkInput
    connect?: MemberWhereUniqueInput
  }

  export type MarkUpdateOneRequiredWithoutTalkNestedInput = {
    create?: XOR<MarkCreateWithoutTalkInput, MarkUncheckedCreateWithoutTalkInput>
    connectOrCreate?: MarkCreateOrConnectWithoutTalkInput
    upsert?: MarkUpsertWithoutTalkInput
    connect?: MarkWhereUniqueInput
    update?: XOR<XOR<MarkUpdateToOneWithWhereWithoutTalkInput, MarkUpdateWithoutTalkInput>, MarkUncheckedUpdateWithoutTalkInput>
  }

  export type MemberUpdateOneWithoutTalkNestedInput = {
    create?: XOR<MemberCreateWithoutTalkInput, MemberUncheckedCreateWithoutTalkInput>
    connectOrCreate?: MemberCreateOrConnectWithoutTalkInput
    upsert?: MemberUpsertWithoutTalkInput
    disconnect?: MemberWhereInput | boolean
    delete?: MemberWhereInput | boolean
    connect?: MemberWhereUniqueInput
    update?: XOR<XOR<MemberUpdateToOneWithWhereWithoutTalkInput, MemberUpdateWithoutTalkInput>, MemberUncheckedUpdateWithoutTalkInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type MemberCreateWithoutBookInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    nickname: string
    email: string
    passwd?: string | null
    isadmin?: boolean
    image?: string | null
    emailcheck?: string | null
    outdt?: string | null
    descript?: string | null
    FollowBook?: FollowBookCreateNestedManyWithoutMemberInput
    Likes?: LikesCreateNestedManyWithoutMemberInput
    Mark?: MarkCreateNestedManyWithoutMemberInput
    Report?: ReportCreateNestedManyWithoutMemberInput
    Talk?: TalkCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutBookInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    nickname: string
    email: string
    passwd?: string | null
    isadmin?: boolean
    image?: string | null
    emailcheck?: string | null
    outdt?: string | null
    descript?: string | null
    FollowBook?: FollowBookUncheckedCreateNestedManyWithoutMemberInput
    Likes?: LikesUncheckedCreateNestedManyWithoutMemberInput
    Mark?: MarkUncheckedCreateNestedManyWithoutMemberInput
    Report?: ReportUncheckedCreateNestedManyWithoutMemberInput
    Talk?: TalkUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutBookInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutBookInput, MemberUncheckedCreateWithoutBookInput>
  }

  export type FollowBookCreateWithoutBookInput = {
    createdAt?: Date | string | null
    Member?: MemberCreateNestedOneWithoutFollowBookInput
  }

  export type FollowBookUncheckedCreateWithoutBookInput = {
    id?: number
    createdAt?: Date | string | null
    member?: number | null
  }

  export type FollowBookCreateOrConnectWithoutBookInput = {
    where: FollowBookWhereUniqueInput
    create: XOR<FollowBookCreateWithoutBookInput, FollowBookUncheckedCreateWithoutBookInput>
  }

  export type FollowBookCreateManyBookInputEnvelope = {
    data: FollowBookCreateManyBookInput | FollowBookCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type MarkCreateWithoutBookInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    title: string
    link: string
    image?: string | null
    remark?: string | null
    Likes?: LikesCreateNestedManyWithoutMarkInput
    Member?: MemberCreateNestedOneWithoutMarkInput
    Report?: ReportCreateNestedManyWithoutMarkInput
    Talk?: TalkCreateNestedManyWithoutMarkInput
  }

  export type MarkUncheckedCreateWithoutBookInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    title: string
    link: string
    image?: string | null
    maker?: number | null
    remark?: string | null
    Likes?: LikesUncheckedCreateNestedManyWithoutMarkInput
    Report?: ReportUncheckedCreateNestedManyWithoutMarkInput
    Talk?: TalkUncheckedCreateNestedManyWithoutMarkInput
  }

  export type MarkCreateOrConnectWithoutBookInput = {
    where: MarkWhereUniqueInput
    create: XOR<MarkCreateWithoutBookInput, MarkUncheckedCreateWithoutBookInput>
  }

  export type MarkCreateManyBookInputEnvelope = {
    data: MarkCreateManyBookInput | MarkCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type MemberUpsertWithoutBookInput = {
    update: XOR<MemberUpdateWithoutBookInput, MemberUncheckedUpdateWithoutBookInput>
    create: XOR<MemberCreateWithoutBookInput, MemberUncheckedCreateWithoutBookInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutBookInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutBookInput, MemberUncheckedUpdateWithoutBookInput>
  }

  export type MemberUpdateWithoutBookInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: NullableStringFieldUpdateOperationsInput | string | null
    isadmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailcheck?: NullableStringFieldUpdateOperationsInput | string | null
    outdt?: NullableStringFieldUpdateOperationsInput | string | null
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    FollowBook?: FollowBookUpdateManyWithoutMemberNestedInput
    Likes?: LikesUpdateManyWithoutMemberNestedInput
    Mark?: MarkUpdateManyWithoutMemberNestedInput
    Report?: ReportUpdateManyWithoutMemberNestedInput
    Talk?: TalkUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: NullableStringFieldUpdateOperationsInput | string | null
    isadmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailcheck?: NullableStringFieldUpdateOperationsInput | string | null
    outdt?: NullableStringFieldUpdateOperationsInput | string | null
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    FollowBook?: FollowBookUncheckedUpdateManyWithoutMemberNestedInput
    Likes?: LikesUncheckedUpdateManyWithoutMemberNestedInput
    Mark?: MarkUncheckedUpdateManyWithoutMemberNestedInput
    Report?: ReportUncheckedUpdateManyWithoutMemberNestedInput
    Talk?: TalkUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type FollowBookUpsertWithWhereUniqueWithoutBookInput = {
    where: FollowBookWhereUniqueInput
    update: XOR<FollowBookUpdateWithoutBookInput, FollowBookUncheckedUpdateWithoutBookInput>
    create: XOR<FollowBookCreateWithoutBookInput, FollowBookUncheckedCreateWithoutBookInput>
  }

  export type FollowBookUpdateWithWhereUniqueWithoutBookInput = {
    where: FollowBookWhereUniqueInput
    data: XOR<FollowBookUpdateWithoutBookInput, FollowBookUncheckedUpdateWithoutBookInput>
  }

  export type FollowBookUpdateManyWithWhereWithoutBookInput = {
    where: FollowBookScalarWhereInput
    data: XOR<FollowBookUpdateManyMutationInput, FollowBookUncheckedUpdateManyWithoutBookInput>
  }

  export type FollowBookScalarWhereInput = {
    AND?: FollowBookScalarWhereInput | FollowBookScalarWhereInput[]
    OR?: FollowBookScalarWhereInput[]
    NOT?: FollowBookScalarWhereInput | FollowBookScalarWhereInput[]
    id?: IntFilter<"FollowBook"> | number
    createdAt?: DateTimeNullableFilter<"FollowBook"> | Date | string | null
    book?: IntFilter<"FollowBook"> | number
    member?: IntNullableFilter<"FollowBook"> | number | null
  }

  export type MarkUpsertWithWhereUniqueWithoutBookInput = {
    where: MarkWhereUniqueInput
    update: XOR<MarkUpdateWithoutBookInput, MarkUncheckedUpdateWithoutBookInput>
    create: XOR<MarkCreateWithoutBookInput, MarkUncheckedCreateWithoutBookInput>
  }

  export type MarkUpdateWithWhereUniqueWithoutBookInput = {
    where: MarkWhereUniqueInput
    data: XOR<MarkUpdateWithoutBookInput, MarkUncheckedUpdateWithoutBookInput>
  }

  export type MarkUpdateManyWithWhereWithoutBookInput = {
    where: MarkScalarWhereInput
    data: XOR<MarkUpdateManyMutationInput, MarkUncheckedUpdateManyWithoutBookInput>
  }

  export type MarkScalarWhereInput = {
    AND?: MarkScalarWhereInput | MarkScalarWhereInput[]
    OR?: MarkScalarWhereInput[]
    NOT?: MarkScalarWhereInput | MarkScalarWhereInput[]
    id?: IntFilter<"Mark"> | number
    createdAt?: DateTimeNullableFilter<"Mark"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Mark"> | Date | string | null
    book?: IntFilter<"Mark"> | number
    title?: StringFilter<"Mark"> | string
    link?: StringFilter<"Mark"> | string
    image?: StringNullableFilter<"Mark"> | string | null
    maker?: IntNullableFilter<"Mark"> | number | null
    remark?: StringNullableFilter<"Mark"> | string | null
  }

  export type BookCreateWithoutFollowBookInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    title: string
    withdel?: boolean
    ispublic?: boolean
    remark?: string | null
    Member: MemberCreateNestedOneWithoutBookInput
    Mark?: MarkCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutFollowBookInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    member: number
    title: string
    withdel?: boolean
    ispublic?: boolean
    remark?: string | null
    Mark?: MarkUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutFollowBookInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutFollowBookInput, BookUncheckedCreateWithoutFollowBookInput>
  }

  export type MemberCreateWithoutFollowBookInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    nickname: string
    email: string
    passwd?: string | null
    isadmin?: boolean
    image?: string | null
    emailcheck?: string | null
    outdt?: string | null
    descript?: string | null
    Book?: BookCreateNestedManyWithoutMemberInput
    Likes?: LikesCreateNestedManyWithoutMemberInput
    Mark?: MarkCreateNestedManyWithoutMemberInput
    Report?: ReportCreateNestedManyWithoutMemberInput
    Talk?: TalkCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutFollowBookInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    nickname: string
    email: string
    passwd?: string | null
    isadmin?: boolean
    image?: string | null
    emailcheck?: string | null
    outdt?: string | null
    descript?: string | null
    Book?: BookUncheckedCreateNestedManyWithoutMemberInput
    Likes?: LikesUncheckedCreateNestedManyWithoutMemberInput
    Mark?: MarkUncheckedCreateNestedManyWithoutMemberInput
    Report?: ReportUncheckedCreateNestedManyWithoutMemberInput
    Talk?: TalkUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutFollowBookInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutFollowBookInput, MemberUncheckedCreateWithoutFollowBookInput>
  }

  export type BookUpsertWithoutFollowBookInput = {
    update: XOR<BookUpdateWithoutFollowBookInput, BookUncheckedUpdateWithoutFollowBookInput>
    create: XOR<BookCreateWithoutFollowBookInput, BookUncheckedCreateWithoutFollowBookInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutFollowBookInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutFollowBookInput, BookUncheckedUpdateWithoutFollowBookInput>
  }

  export type BookUpdateWithoutFollowBookInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    withdel?: BoolFieldUpdateOperationsInput | boolean
    ispublic?: BoolFieldUpdateOperationsInput | boolean
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    Member?: MemberUpdateOneRequiredWithoutBookNestedInput
    Mark?: MarkUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutFollowBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    withdel?: BoolFieldUpdateOperationsInput | boolean
    ispublic?: BoolFieldUpdateOperationsInput | boolean
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    Mark?: MarkUncheckedUpdateManyWithoutBookNestedInput
  }

  export type MemberUpsertWithoutFollowBookInput = {
    update: XOR<MemberUpdateWithoutFollowBookInput, MemberUncheckedUpdateWithoutFollowBookInput>
    create: XOR<MemberCreateWithoutFollowBookInput, MemberUncheckedCreateWithoutFollowBookInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutFollowBookInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutFollowBookInput, MemberUncheckedUpdateWithoutFollowBookInput>
  }

  export type MemberUpdateWithoutFollowBookInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: NullableStringFieldUpdateOperationsInput | string | null
    isadmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailcheck?: NullableStringFieldUpdateOperationsInput | string | null
    outdt?: NullableStringFieldUpdateOperationsInput | string | null
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    Book?: BookUpdateManyWithoutMemberNestedInput
    Likes?: LikesUpdateManyWithoutMemberNestedInput
    Mark?: MarkUpdateManyWithoutMemberNestedInput
    Report?: ReportUpdateManyWithoutMemberNestedInput
    Talk?: TalkUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutFollowBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: NullableStringFieldUpdateOperationsInput | string | null
    isadmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailcheck?: NullableStringFieldUpdateOperationsInput | string | null
    outdt?: NullableStringFieldUpdateOperationsInput | string | null
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    Book?: BookUncheckedUpdateManyWithoutMemberNestedInput
    Likes?: LikesUncheckedUpdateManyWithoutMemberNestedInput
    Mark?: MarkUncheckedUpdateManyWithoutMemberNestedInput
    Report?: ReportUncheckedUpdateManyWithoutMemberNestedInput
    Talk?: TalkUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MarkCreateWithoutLikesInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    title: string
    link: string
    image?: string | null
    remark?: string | null
    Book: BookCreateNestedOneWithoutMarkInput
    Member?: MemberCreateNestedOneWithoutMarkInput
    Report?: ReportCreateNestedManyWithoutMarkInput
    Talk?: TalkCreateNestedManyWithoutMarkInput
  }

  export type MarkUncheckedCreateWithoutLikesInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    book: number
    title: string
    link: string
    image?: string | null
    maker?: number | null
    remark?: string | null
    Report?: ReportUncheckedCreateNestedManyWithoutMarkInput
    Talk?: TalkUncheckedCreateNestedManyWithoutMarkInput
  }

  export type MarkCreateOrConnectWithoutLikesInput = {
    where: MarkWhereUniqueInput
    create: XOR<MarkCreateWithoutLikesInput, MarkUncheckedCreateWithoutLikesInput>
  }

  export type MemberCreateWithoutLikesInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    nickname: string
    email: string
    passwd?: string | null
    isadmin?: boolean
    image?: string | null
    emailcheck?: string | null
    outdt?: string | null
    descript?: string | null
    Book?: BookCreateNestedManyWithoutMemberInput
    FollowBook?: FollowBookCreateNestedManyWithoutMemberInput
    Mark?: MarkCreateNestedManyWithoutMemberInput
    Report?: ReportCreateNestedManyWithoutMemberInput
    Talk?: TalkCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutLikesInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    nickname: string
    email: string
    passwd?: string | null
    isadmin?: boolean
    image?: string | null
    emailcheck?: string | null
    outdt?: string | null
    descript?: string | null
    Book?: BookUncheckedCreateNestedManyWithoutMemberInput
    FollowBook?: FollowBookUncheckedCreateNestedManyWithoutMemberInput
    Mark?: MarkUncheckedCreateNestedManyWithoutMemberInput
    Report?: ReportUncheckedCreateNestedManyWithoutMemberInput
    Talk?: TalkUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutLikesInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutLikesInput, MemberUncheckedCreateWithoutLikesInput>
  }

  export type MarkUpsertWithoutLikesInput = {
    update: XOR<MarkUpdateWithoutLikesInput, MarkUncheckedUpdateWithoutLikesInput>
    create: XOR<MarkCreateWithoutLikesInput, MarkUncheckedCreateWithoutLikesInput>
    where?: MarkWhereInput
  }

  export type MarkUpdateToOneWithWhereWithoutLikesInput = {
    where?: MarkWhereInput
    data: XOR<MarkUpdateWithoutLikesInput, MarkUncheckedUpdateWithoutLikesInput>
  }

  export type MarkUpdateWithoutLikesInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    Book?: BookUpdateOneRequiredWithoutMarkNestedInput
    Member?: MemberUpdateOneWithoutMarkNestedInput
    Report?: ReportUpdateManyWithoutMarkNestedInput
    Talk?: TalkUpdateManyWithoutMarkNestedInput
  }

  export type MarkUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    book?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    maker?: NullableIntFieldUpdateOperationsInput | number | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    Report?: ReportUncheckedUpdateManyWithoutMarkNestedInput
    Talk?: TalkUncheckedUpdateManyWithoutMarkNestedInput
  }

  export type MemberUpsertWithoutLikesInput = {
    update: XOR<MemberUpdateWithoutLikesInput, MemberUncheckedUpdateWithoutLikesInput>
    create: XOR<MemberCreateWithoutLikesInput, MemberUncheckedCreateWithoutLikesInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutLikesInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutLikesInput, MemberUncheckedUpdateWithoutLikesInput>
  }

  export type MemberUpdateWithoutLikesInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: NullableStringFieldUpdateOperationsInput | string | null
    isadmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailcheck?: NullableStringFieldUpdateOperationsInput | string | null
    outdt?: NullableStringFieldUpdateOperationsInput | string | null
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    Book?: BookUpdateManyWithoutMemberNestedInput
    FollowBook?: FollowBookUpdateManyWithoutMemberNestedInput
    Mark?: MarkUpdateManyWithoutMemberNestedInput
    Report?: ReportUpdateManyWithoutMemberNestedInput
    Talk?: TalkUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutLikesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: NullableStringFieldUpdateOperationsInput | string | null
    isadmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailcheck?: NullableStringFieldUpdateOperationsInput | string | null
    outdt?: NullableStringFieldUpdateOperationsInput | string | null
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    Book?: BookUncheckedUpdateManyWithoutMemberNestedInput
    FollowBook?: FollowBookUncheckedUpdateManyWithoutMemberNestedInput
    Mark?: MarkUncheckedUpdateManyWithoutMemberNestedInput
    Report?: ReportUncheckedUpdateManyWithoutMemberNestedInput
    Talk?: TalkUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type LikesCreateWithoutMarkInput = {
    createdAt?: Date | string | null
    Member?: MemberCreateNestedOneWithoutLikesInput
  }

  export type LikesUncheckedCreateWithoutMarkInput = {
    id?: number
    createdAt?: Date | string | null
    member?: number | null
  }

  export type LikesCreateOrConnectWithoutMarkInput = {
    where: LikesWhereUniqueInput
    create: XOR<LikesCreateWithoutMarkInput, LikesUncheckedCreateWithoutMarkInput>
  }

  export type LikesCreateManyMarkInputEnvelope = {
    data: LikesCreateManyMarkInput | LikesCreateManyMarkInput[]
    skipDuplicates?: boolean
  }

  export type BookCreateWithoutMarkInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    title: string
    withdel?: boolean
    ispublic?: boolean
    remark?: string | null
    Member: MemberCreateNestedOneWithoutBookInput
    FollowBook?: FollowBookCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutMarkInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    member: number
    title: string
    withdel?: boolean
    ispublic?: boolean
    remark?: string | null
    FollowBook?: FollowBookUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutMarkInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutMarkInput, BookUncheckedCreateWithoutMarkInput>
  }

  export type MemberCreateWithoutMarkInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    nickname: string
    email: string
    passwd?: string | null
    isadmin?: boolean
    image?: string | null
    emailcheck?: string | null
    outdt?: string | null
    descript?: string | null
    Book?: BookCreateNestedManyWithoutMemberInput
    FollowBook?: FollowBookCreateNestedManyWithoutMemberInput
    Likes?: LikesCreateNestedManyWithoutMemberInput
    Report?: ReportCreateNestedManyWithoutMemberInput
    Talk?: TalkCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutMarkInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    nickname: string
    email: string
    passwd?: string | null
    isadmin?: boolean
    image?: string | null
    emailcheck?: string | null
    outdt?: string | null
    descript?: string | null
    Book?: BookUncheckedCreateNestedManyWithoutMemberInput
    FollowBook?: FollowBookUncheckedCreateNestedManyWithoutMemberInput
    Likes?: LikesUncheckedCreateNestedManyWithoutMemberInput
    Report?: ReportUncheckedCreateNestedManyWithoutMemberInput
    Talk?: TalkUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutMarkInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutMarkInput, MemberUncheckedCreateWithoutMarkInput>
  }

  export type ReportCreateWithoutMarkInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Member: MemberCreateNestedOneWithoutReportInput
  }

  export type ReportUncheckedCreateWithoutMarkInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    member: number
  }

  export type ReportCreateOrConnectWithoutMarkInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutMarkInput, ReportUncheckedCreateWithoutMarkInput>
  }

  export type ReportCreateManyMarkInputEnvelope = {
    data: ReportCreateManyMarkInput | ReportCreateManyMarkInput[]
    skipDuplicates?: boolean
  }

  export type TalkCreateWithoutMarkInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    msg: string
    Member?: MemberCreateNestedOneWithoutTalkInput
  }

  export type TalkUncheckedCreateWithoutMarkInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    member?: number | null
    msg: string
  }

  export type TalkCreateOrConnectWithoutMarkInput = {
    where: TalkWhereUniqueInput
    create: XOR<TalkCreateWithoutMarkInput, TalkUncheckedCreateWithoutMarkInput>
  }

  export type TalkCreateManyMarkInputEnvelope = {
    data: TalkCreateManyMarkInput | TalkCreateManyMarkInput[]
    skipDuplicates?: boolean
  }

  export type LikesUpsertWithWhereUniqueWithoutMarkInput = {
    where: LikesWhereUniqueInput
    update: XOR<LikesUpdateWithoutMarkInput, LikesUncheckedUpdateWithoutMarkInput>
    create: XOR<LikesCreateWithoutMarkInput, LikesUncheckedCreateWithoutMarkInput>
  }

  export type LikesUpdateWithWhereUniqueWithoutMarkInput = {
    where: LikesWhereUniqueInput
    data: XOR<LikesUpdateWithoutMarkInput, LikesUncheckedUpdateWithoutMarkInput>
  }

  export type LikesUpdateManyWithWhereWithoutMarkInput = {
    where: LikesScalarWhereInput
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyWithoutMarkInput>
  }

  export type LikesScalarWhereInput = {
    AND?: LikesScalarWhereInput | LikesScalarWhereInput[]
    OR?: LikesScalarWhereInput[]
    NOT?: LikesScalarWhereInput | LikesScalarWhereInput[]
    id?: IntFilter<"Likes"> | number
    createdAt?: DateTimeNullableFilter<"Likes"> | Date | string | null
    mark?: IntFilter<"Likes"> | number
    member?: IntNullableFilter<"Likes"> | number | null
  }

  export type BookUpsertWithoutMarkInput = {
    update: XOR<BookUpdateWithoutMarkInput, BookUncheckedUpdateWithoutMarkInput>
    create: XOR<BookCreateWithoutMarkInput, BookUncheckedCreateWithoutMarkInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutMarkInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutMarkInput, BookUncheckedUpdateWithoutMarkInput>
  }

  export type BookUpdateWithoutMarkInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    withdel?: BoolFieldUpdateOperationsInput | boolean
    ispublic?: BoolFieldUpdateOperationsInput | boolean
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    Member?: MemberUpdateOneRequiredWithoutBookNestedInput
    FollowBook?: FollowBookUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutMarkInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    withdel?: BoolFieldUpdateOperationsInput | boolean
    ispublic?: BoolFieldUpdateOperationsInput | boolean
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    FollowBook?: FollowBookUncheckedUpdateManyWithoutBookNestedInput
  }

  export type MemberUpsertWithoutMarkInput = {
    update: XOR<MemberUpdateWithoutMarkInput, MemberUncheckedUpdateWithoutMarkInput>
    create: XOR<MemberCreateWithoutMarkInput, MemberUncheckedCreateWithoutMarkInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutMarkInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutMarkInput, MemberUncheckedUpdateWithoutMarkInput>
  }

  export type MemberUpdateWithoutMarkInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: NullableStringFieldUpdateOperationsInput | string | null
    isadmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailcheck?: NullableStringFieldUpdateOperationsInput | string | null
    outdt?: NullableStringFieldUpdateOperationsInput | string | null
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    Book?: BookUpdateManyWithoutMemberNestedInput
    FollowBook?: FollowBookUpdateManyWithoutMemberNestedInput
    Likes?: LikesUpdateManyWithoutMemberNestedInput
    Report?: ReportUpdateManyWithoutMemberNestedInput
    Talk?: TalkUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutMarkInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: NullableStringFieldUpdateOperationsInput | string | null
    isadmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailcheck?: NullableStringFieldUpdateOperationsInput | string | null
    outdt?: NullableStringFieldUpdateOperationsInput | string | null
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    Book?: BookUncheckedUpdateManyWithoutMemberNestedInput
    FollowBook?: FollowBookUncheckedUpdateManyWithoutMemberNestedInput
    Likes?: LikesUncheckedUpdateManyWithoutMemberNestedInput
    Report?: ReportUncheckedUpdateManyWithoutMemberNestedInput
    Talk?: TalkUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type ReportUpsertWithWhereUniqueWithoutMarkInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutMarkInput, ReportUncheckedUpdateWithoutMarkInput>
    create: XOR<ReportCreateWithoutMarkInput, ReportUncheckedCreateWithoutMarkInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutMarkInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutMarkInput, ReportUncheckedUpdateWithoutMarkInput>
  }

  export type ReportUpdateManyWithWhereWithoutMarkInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutMarkInput>
  }

  export type ReportScalarWhereInput = {
    AND?: ReportScalarWhereInput | ReportScalarWhereInput[]
    OR?: ReportScalarWhereInput[]
    NOT?: ReportScalarWhereInput | ReportScalarWhereInput[]
    id?: IntFilter<"Report"> | number
    createdAt?: DateTimeNullableFilter<"Report"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Report"> | Date | string | null
    mark?: IntFilter<"Report"> | number
    member?: IntFilter<"Report"> | number
  }

  export type TalkUpsertWithWhereUniqueWithoutMarkInput = {
    where: TalkWhereUniqueInput
    update: XOR<TalkUpdateWithoutMarkInput, TalkUncheckedUpdateWithoutMarkInput>
    create: XOR<TalkCreateWithoutMarkInput, TalkUncheckedCreateWithoutMarkInput>
  }

  export type TalkUpdateWithWhereUniqueWithoutMarkInput = {
    where: TalkWhereUniqueInput
    data: XOR<TalkUpdateWithoutMarkInput, TalkUncheckedUpdateWithoutMarkInput>
  }

  export type TalkUpdateManyWithWhereWithoutMarkInput = {
    where: TalkScalarWhereInput
    data: XOR<TalkUpdateManyMutationInput, TalkUncheckedUpdateManyWithoutMarkInput>
  }

  export type TalkScalarWhereInput = {
    AND?: TalkScalarWhereInput | TalkScalarWhereInput[]
    OR?: TalkScalarWhereInput[]
    NOT?: TalkScalarWhereInput | TalkScalarWhereInput[]
    id?: IntFilter<"Talk"> | number
    createdAt?: DateTimeNullableFilter<"Talk"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Talk"> | Date | string | null
    mark?: IntFilter<"Talk"> | number
    member?: IntNullableFilter<"Talk"> | number | null
    msg?: StringFilter<"Talk"> | string
  }

  export type BookCreateWithoutMemberInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    title: string
    withdel?: boolean
    ispublic?: boolean
    remark?: string | null
    FollowBook?: FollowBookCreateNestedManyWithoutBookInput
    Mark?: MarkCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutMemberInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    title: string
    withdel?: boolean
    ispublic?: boolean
    remark?: string | null
    FollowBook?: FollowBookUncheckedCreateNestedManyWithoutBookInput
    Mark?: MarkUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutMemberInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutMemberInput, BookUncheckedCreateWithoutMemberInput>
  }

  export type BookCreateManyMemberInputEnvelope = {
    data: BookCreateManyMemberInput | BookCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type FollowBookCreateWithoutMemberInput = {
    createdAt?: Date | string | null
    Book: BookCreateNestedOneWithoutFollowBookInput
  }

  export type FollowBookUncheckedCreateWithoutMemberInput = {
    id?: number
    createdAt?: Date | string | null
    book: number
  }

  export type FollowBookCreateOrConnectWithoutMemberInput = {
    where: FollowBookWhereUniqueInput
    create: XOR<FollowBookCreateWithoutMemberInput, FollowBookUncheckedCreateWithoutMemberInput>
  }

  export type FollowBookCreateManyMemberInputEnvelope = {
    data: FollowBookCreateManyMemberInput | FollowBookCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type LikesCreateWithoutMemberInput = {
    createdAt?: Date | string | null
    Mark: MarkCreateNestedOneWithoutLikesInput
  }

  export type LikesUncheckedCreateWithoutMemberInput = {
    id?: number
    createdAt?: Date | string | null
    mark: number
  }

  export type LikesCreateOrConnectWithoutMemberInput = {
    where: LikesWhereUniqueInput
    create: XOR<LikesCreateWithoutMemberInput, LikesUncheckedCreateWithoutMemberInput>
  }

  export type LikesCreateManyMemberInputEnvelope = {
    data: LikesCreateManyMemberInput | LikesCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type MarkCreateWithoutMemberInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    title: string
    link: string
    image?: string | null
    remark?: string | null
    Likes?: LikesCreateNestedManyWithoutMarkInput
    Book: BookCreateNestedOneWithoutMarkInput
    Report?: ReportCreateNestedManyWithoutMarkInput
    Talk?: TalkCreateNestedManyWithoutMarkInput
  }

  export type MarkUncheckedCreateWithoutMemberInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    book: number
    title: string
    link: string
    image?: string | null
    remark?: string | null
    Likes?: LikesUncheckedCreateNestedManyWithoutMarkInput
    Report?: ReportUncheckedCreateNestedManyWithoutMarkInput
    Talk?: TalkUncheckedCreateNestedManyWithoutMarkInput
  }

  export type MarkCreateOrConnectWithoutMemberInput = {
    where: MarkWhereUniqueInput
    create: XOR<MarkCreateWithoutMemberInput, MarkUncheckedCreateWithoutMemberInput>
  }

  export type MarkCreateManyMemberInputEnvelope = {
    data: MarkCreateManyMemberInput | MarkCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type ReportCreateWithoutMemberInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    Mark: MarkCreateNestedOneWithoutReportInput
  }

  export type ReportUncheckedCreateWithoutMemberInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    mark: number
  }

  export type ReportCreateOrConnectWithoutMemberInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutMemberInput, ReportUncheckedCreateWithoutMemberInput>
  }

  export type ReportCreateManyMemberInputEnvelope = {
    data: ReportCreateManyMemberInput | ReportCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type TalkCreateWithoutMemberInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    msg: string
    Mark: MarkCreateNestedOneWithoutTalkInput
  }

  export type TalkUncheckedCreateWithoutMemberInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    mark: number
    msg: string
  }

  export type TalkCreateOrConnectWithoutMemberInput = {
    where: TalkWhereUniqueInput
    create: XOR<TalkCreateWithoutMemberInput, TalkUncheckedCreateWithoutMemberInput>
  }

  export type TalkCreateManyMemberInputEnvelope = {
    data: TalkCreateManyMemberInput | TalkCreateManyMemberInput[]
    skipDuplicates?: boolean
  }

  export type BookUpsertWithWhereUniqueWithoutMemberInput = {
    where: BookWhereUniqueInput
    update: XOR<BookUpdateWithoutMemberInput, BookUncheckedUpdateWithoutMemberInput>
    create: XOR<BookCreateWithoutMemberInput, BookUncheckedCreateWithoutMemberInput>
  }

  export type BookUpdateWithWhereUniqueWithoutMemberInput = {
    where: BookWhereUniqueInput
    data: XOR<BookUpdateWithoutMemberInput, BookUncheckedUpdateWithoutMemberInput>
  }

  export type BookUpdateManyWithWhereWithoutMemberInput = {
    where: BookScalarWhereInput
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyWithoutMemberInput>
  }

  export type BookScalarWhereInput = {
    AND?: BookScalarWhereInput | BookScalarWhereInput[]
    OR?: BookScalarWhereInput[]
    NOT?: BookScalarWhereInput | BookScalarWhereInput[]
    id?: IntFilter<"Book"> | number
    createdAt?: DateTimeNullableFilter<"Book"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Book"> | Date | string | null
    member?: IntFilter<"Book"> | number
    title?: StringFilter<"Book"> | string
    withdel?: BoolFilter<"Book"> | boolean
    ispublic?: BoolFilter<"Book"> | boolean
    remark?: StringNullableFilter<"Book"> | string | null
  }

  export type FollowBookUpsertWithWhereUniqueWithoutMemberInput = {
    where: FollowBookWhereUniqueInput
    update: XOR<FollowBookUpdateWithoutMemberInput, FollowBookUncheckedUpdateWithoutMemberInput>
    create: XOR<FollowBookCreateWithoutMemberInput, FollowBookUncheckedCreateWithoutMemberInput>
  }

  export type FollowBookUpdateWithWhereUniqueWithoutMemberInput = {
    where: FollowBookWhereUniqueInput
    data: XOR<FollowBookUpdateWithoutMemberInput, FollowBookUncheckedUpdateWithoutMemberInput>
  }

  export type FollowBookUpdateManyWithWhereWithoutMemberInput = {
    where: FollowBookScalarWhereInput
    data: XOR<FollowBookUpdateManyMutationInput, FollowBookUncheckedUpdateManyWithoutMemberInput>
  }

  export type LikesUpsertWithWhereUniqueWithoutMemberInput = {
    where: LikesWhereUniqueInput
    update: XOR<LikesUpdateWithoutMemberInput, LikesUncheckedUpdateWithoutMemberInput>
    create: XOR<LikesCreateWithoutMemberInput, LikesUncheckedCreateWithoutMemberInput>
  }

  export type LikesUpdateWithWhereUniqueWithoutMemberInput = {
    where: LikesWhereUniqueInput
    data: XOR<LikesUpdateWithoutMemberInput, LikesUncheckedUpdateWithoutMemberInput>
  }

  export type LikesUpdateManyWithWhereWithoutMemberInput = {
    where: LikesScalarWhereInput
    data: XOR<LikesUpdateManyMutationInput, LikesUncheckedUpdateManyWithoutMemberInput>
  }

  export type MarkUpsertWithWhereUniqueWithoutMemberInput = {
    where: MarkWhereUniqueInput
    update: XOR<MarkUpdateWithoutMemberInput, MarkUncheckedUpdateWithoutMemberInput>
    create: XOR<MarkCreateWithoutMemberInput, MarkUncheckedCreateWithoutMemberInput>
  }

  export type MarkUpdateWithWhereUniqueWithoutMemberInput = {
    where: MarkWhereUniqueInput
    data: XOR<MarkUpdateWithoutMemberInput, MarkUncheckedUpdateWithoutMemberInput>
  }

  export type MarkUpdateManyWithWhereWithoutMemberInput = {
    where: MarkScalarWhereInput
    data: XOR<MarkUpdateManyMutationInput, MarkUncheckedUpdateManyWithoutMemberInput>
  }

  export type ReportUpsertWithWhereUniqueWithoutMemberInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutMemberInput, ReportUncheckedUpdateWithoutMemberInput>
    create: XOR<ReportCreateWithoutMemberInput, ReportUncheckedCreateWithoutMemberInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutMemberInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutMemberInput, ReportUncheckedUpdateWithoutMemberInput>
  }

  export type ReportUpdateManyWithWhereWithoutMemberInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutMemberInput>
  }

  export type TalkUpsertWithWhereUniqueWithoutMemberInput = {
    where: TalkWhereUniqueInput
    update: XOR<TalkUpdateWithoutMemberInput, TalkUncheckedUpdateWithoutMemberInput>
    create: XOR<TalkCreateWithoutMemberInput, TalkUncheckedCreateWithoutMemberInput>
  }

  export type TalkUpdateWithWhereUniqueWithoutMemberInput = {
    where: TalkWhereUniqueInput
    data: XOR<TalkUpdateWithoutMemberInput, TalkUncheckedUpdateWithoutMemberInput>
  }

  export type TalkUpdateManyWithWhereWithoutMemberInput = {
    where: TalkScalarWhereInput
    data: XOR<TalkUpdateManyMutationInput, TalkUncheckedUpdateManyWithoutMemberInput>
  }

  export type MarkCreateWithoutReportInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    title: string
    link: string
    image?: string | null
    remark?: string | null
    Likes?: LikesCreateNestedManyWithoutMarkInput
    Book: BookCreateNestedOneWithoutMarkInput
    Member?: MemberCreateNestedOneWithoutMarkInput
    Talk?: TalkCreateNestedManyWithoutMarkInput
  }

  export type MarkUncheckedCreateWithoutReportInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    book: number
    title: string
    link: string
    image?: string | null
    maker?: number | null
    remark?: string | null
    Likes?: LikesUncheckedCreateNestedManyWithoutMarkInput
    Talk?: TalkUncheckedCreateNestedManyWithoutMarkInput
  }

  export type MarkCreateOrConnectWithoutReportInput = {
    where: MarkWhereUniqueInput
    create: XOR<MarkCreateWithoutReportInput, MarkUncheckedCreateWithoutReportInput>
  }

  export type MemberCreateWithoutReportInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    nickname: string
    email: string
    passwd?: string | null
    isadmin?: boolean
    image?: string | null
    emailcheck?: string | null
    outdt?: string | null
    descript?: string | null
    Book?: BookCreateNestedManyWithoutMemberInput
    FollowBook?: FollowBookCreateNestedManyWithoutMemberInput
    Likes?: LikesCreateNestedManyWithoutMemberInput
    Mark?: MarkCreateNestedManyWithoutMemberInput
    Talk?: TalkCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutReportInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    nickname: string
    email: string
    passwd?: string | null
    isadmin?: boolean
    image?: string | null
    emailcheck?: string | null
    outdt?: string | null
    descript?: string | null
    Book?: BookUncheckedCreateNestedManyWithoutMemberInput
    FollowBook?: FollowBookUncheckedCreateNestedManyWithoutMemberInput
    Likes?: LikesUncheckedCreateNestedManyWithoutMemberInput
    Mark?: MarkUncheckedCreateNestedManyWithoutMemberInput
    Talk?: TalkUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutReportInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutReportInput, MemberUncheckedCreateWithoutReportInput>
  }

  export type MarkUpsertWithoutReportInput = {
    update: XOR<MarkUpdateWithoutReportInput, MarkUncheckedUpdateWithoutReportInput>
    create: XOR<MarkCreateWithoutReportInput, MarkUncheckedCreateWithoutReportInput>
    where?: MarkWhereInput
  }

  export type MarkUpdateToOneWithWhereWithoutReportInput = {
    where?: MarkWhereInput
    data: XOR<MarkUpdateWithoutReportInput, MarkUncheckedUpdateWithoutReportInput>
  }

  export type MarkUpdateWithoutReportInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    Likes?: LikesUpdateManyWithoutMarkNestedInput
    Book?: BookUpdateOneRequiredWithoutMarkNestedInput
    Member?: MemberUpdateOneWithoutMarkNestedInput
    Talk?: TalkUpdateManyWithoutMarkNestedInput
  }

  export type MarkUncheckedUpdateWithoutReportInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    book?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    maker?: NullableIntFieldUpdateOperationsInput | number | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    Likes?: LikesUncheckedUpdateManyWithoutMarkNestedInput
    Talk?: TalkUncheckedUpdateManyWithoutMarkNestedInput
  }

  export type MemberUpsertWithoutReportInput = {
    update: XOR<MemberUpdateWithoutReportInput, MemberUncheckedUpdateWithoutReportInput>
    create: XOR<MemberCreateWithoutReportInput, MemberUncheckedCreateWithoutReportInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutReportInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutReportInput, MemberUncheckedUpdateWithoutReportInput>
  }

  export type MemberUpdateWithoutReportInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: NullableStringFieldUpdateOperationsInput | string | null
    isadmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailcheck?: NullableStringFieldUpdateOperationsInput | string | null
    outdt?: NullableStringFieldUpdateOperationsInput | string | null
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    Book?: BookUpdateManyWithoutMemberNestedInput
    FollowBook?: FollowBookUpdateManyWithoutMemberNestedInput
    Likes?: LikesUpdateManyWithoutMemberNestedInput
    Mark?: MarkUpdateManyWithoutMemberNestedInput
    Talk?: TalkUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutReportInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: NullableStringFieldUpdateOperationsInput | string | null
    isadmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailcheck?: NullableStringFieldUpdateOperationsInput | string | null
    outdt?: NullableStringFieldUpdateOperationsInput | string | null
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    Book?: BookUncheckedUpdateManyWithoutMemberNestedInput
    FollowBook?: FollowBookUncheckedUpdateManyWithoutMemberNestedInput
    Likes?: LikesUncheckedUpdateManyWithoutMemberNestedInput
    Mark?: MarkUncheckedUpdateManyWithoutMemberNestedInput
    Talk?: TalkUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type MarkCreateWithoutTalkInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    title: string
    link: string
    image?: string | null
    remark?: string | null
    Likes?: LikesCreateNestedManyWithoutMarkInput
    Book: BookCreateNestedOneWithoutMarkInput
    Member?: MemberCreateNestedOneWithoutMarkInput
    Report?: ReportCreateNestedManyWithoutMarkInput
  }

  export type MarkUncheckedCreateWithoutTalkInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    book: number
    title: string
    link: string
    image?: string | null
    maker?: number | null
    remark?: string | null
    Likes?: LikesUncheckedCreateNestedManyWithoutMarkInput
    Report?: ReportUncheckedCreateNestedManyWithoutMarkInput
  }

  export type MarkCreateOrConnectWithoutTalkInput = {
    where: MarkWhereUniqueInput
    create: XOR<MarkCreateWithoutTalkInput, MarkUncheckedCreateWithoutTalkInput>
  }

  export type MemberCreateWithoutTalkInput = {
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    nickname: string
    email: string
    passwd?: string | null
    isadmin?: boolean
    image?: string | null
    emailcheck?: string | null
    outdt?: string | null
    descript?: string | null
    Book?: BookCreateNestedManyWithoutMemberInput
    FollowBook?: FollowBookCreateNestedManyWithoutMemberInput
    Likes?: LikesCreateNestedManyWithoutMemberInput
    Mark?: MarkCreateNestedManyWithoutMemberInput
    Report?: ReportCreateNestedManyWithoutMemberInput
  }

  export type MemberUncheckedCreateWithoutTalkInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    nickname: string
    email: string
    passwd?: string | null
    isadmin?: boolean
    image?: string | null
    emailcheck?: string | null
    outdt?: string | null
    descript?: string | null
    Book?: BookUncheckedCreateNestedManyWithoutMemberInput
    FollowBook?: FollowBookUncheckedCreateNestedManyWithoutMemberInput
    Likes?: LikesUncheckedCreateNestedManyWithoutMemberInput
    Mark?: MarkUncheckedCreateNestedManyWithoutMemberInput
    Report?: ReportUncheckedCreateNestedManyWithoutMemberInput
  }

  export type MemberCreateOrConnectWithoutTalkInput = {
    where: MemberWhereUniqueInput
    create: XOR<MemberCreateWithoutTalkInput, MemberUncheckedCreateWithoutTalkInput>
  }

  export type MarkUpsertWithoutTalkInput = {
    update: XOR<MarkUpdateWithoutTalkInput, MarkUncheckedUpdateWithoutTalkInput>
    create: XOR<MarkCreateWithoutTalkInput, MarkUncheckedCreateWithoutTalkInput>
    where?: MarkWhereInput
  }

  export type MarkUpdateToOneWithWhereWithoutTalkInput = {
    where?: MarkWhereInput
    data: XOR<MarkUpdateWithoutTalkInput, MarkUncheckedUpdateWithoutTalkInput>
  }

  export type MarkUpdateWithoutTalkInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    Likes?: LikesUpdateManyWithoutMarkNestedInput
    Book?: BookUpdateOneRequiredWithoutMarkNestedInput
    Member?: MemberUpdateOneWithoutMarkNestedInput
    Report?: ReportUpdateManyWithoutMarkNestedInput
  }

  export type MarkUncheckedUpdateWithoutTalkInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    book?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    maker?: NullableIntFieldUpdateOperationsInput | number | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    Likes?: LikesUncheckedUpdateManyWithoutMarkNestedInput
    Report?: ReportUncheckedUpdateManyWithoutMarkNestedInput
  }

  export type MemberUpsertWithoutTalkInput = {
    update: XOR<MemberUpdateWithoutTalkInput, MemberUncheckedUpdateWithoutTalkInput>
    create: XOR<MemberCreateWithoutTalkInput, MemberUncheckedCreateWithoutTalkInput>
    where?: MemberWhereInput
  }

  export type MemberUpdateToOneWithWhereWithoutTalkInput = {
    where?: MemberWhereInput
    data: XOR<MemberUpdateWithoutTalkInput, MemberUncheckedUpdateWithoutTalkInput>
  }

  export type MemberUpdateWithoutTalkInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: NullableStringFieldUpdateOperationsInput | string | null
    isadmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailcheck?: NullableStringFieldUpdateOperationsInput | string | null
    outdt?: NullableStringFieldUpdateOperationsInput | string | null
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    Book?: BookUpdateManyWithoutMemberNestedInput
    FollowBook?: FollowBookUpdateManyWithoutMemberNestedInput
    Likes?: LikesUpdateManyWithoutMemberNestedInput
    Mark?: MarkUpdateManyWithoutMemberNestedInput
    Report?: ReportUpdateManyWithoutMemberNestedInput
  }

  export type MemberUncheckedUpdateWithoutTalkInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nickname?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwd?: NullableStringFieldUpdateOperationsInput | string | null
    isadmin?: BoolFieldUpdateOperationsInput | boolean
    image?: NullableStringFieldUpdateOperationsInput | string | null
    emailcheck?: NullableStringFieldUpdateOperationsInput | string | null
    outdt?: NullableStringFieldUpdateOperationsInput | string | null
    descript?: NullableStringFieldUpdateOperationsInput | string | null
    Book?: BookUncheckedUpdateManyWithoutMemberNestedInput
    FollowBook?: FollowBookUncheckedUpdateManyWithoutMemberNestedInput
    Likes?: LikesUncheckedUpdateManyWithoutMemberNestedInput
    Mark?: MarkUncheckedUpdateManyWithoutMemberNestedInput
    Report?: ReportUncheckedUpdateManyWithoutMemberNestedInput
  }

  export type FollowBookCreateManyBookInput = {
    id?: number
    createdAt?: Date | string | null
    member?: number | null
  }

  export type MarkCreateManyBookInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    title: string
    link: string
    image?: string | null
    maker?: number | null
    remark?: string | null
  }

  export type FollowBookUpdateWithoutBookInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Member?: MemberUpdateOneWithoutFollowBookNestedInput
  }

  export type FollowBookUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FollowBookUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MarkUpdateWithoutBookInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    Likes?: LikesUpdateManyWithoutMarkNestedInput
    Member?: MemberUpdateOneWithoutMarkNestedInput
    Report?: ReportUpdateManyWithoutMarkNestedInput
    Talk?: TalkUpdateManyWithoutMarkNestedInput
  }

  export type MarkUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    maker?: NullableIntFieldUpdateOperationsInput | number | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    Likes?: LikesUncheckedUpdateManyWithoutMarkNestedInput
    Report?: ReportUncheckedUpdateManyWithoutMarkNestedInput
    Talk?: TalkUncheckedUpdateManyWithoutMarkNestedInput
  }

  export type MarkUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    maker?: NullableIntFieldUpdateOperationsInput | number | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LikesCreateManyMarkInput = {
    id?: number
    createdAt?: Date | string | null
    member?: number | null
  }

  export type ReportCreateManyMarkInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    member: number
  }

  export type TalkCreateManyMarkInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    member?: number | null
    msg: string
  }

  export type LikesUpdateWithoutMarkInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Member?: MemberUpdateOneWithoutLikesNestedInput
  }

  export type LikesUncheckedUpdateWithoutMarkInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LikesUncheckedUpdateManyWithoutMarkInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ReportUpdateWithoutMarkInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Member?: MemberUpdateOneRequiredWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateWithoutMarkInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: IntFieldUpdateOperationsInput | number
  }

  export type ReportUncheckedUpdateManyWithoutMarkInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: IntFieldUpdateOperationsInput | number
  }

  export type TalkUpdateWithoutMarkInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    msg?: StringFieldUpdateOperationsInput | string
    Member?: MemberUpdateOneWithoutTalkNestedInput
  }

  export type TalkUncheckedUpdateWithoutMarkInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: NullableIntFieldUpdateOperationsInput | number | null
    msg?: StringFieldUpdateOperationsInput | string
  }

  export type TalkUncheckedUpdateManyWithoutMarkInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    member?: NullableIntFieldUpdateOperationsInput | number | null
    msg?: StringFieldUpdateOperationsInput | string
  }

  export type BookCreateManyMemberInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    title: string
    withdel?: boolean
    ispublic?: boolean
    remark?: string | null
  }

  export type FollowBookCreateManyMemberInput = {
    id?: number
    createdAt?: Date | string | null
    book: number
  }

  export type LikesCreateManyMemberInput = {
    id?: number
    createdAt?: Date | string | null
    mark: number
  }

  export type MarkCreateManyMemberInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    book: number
    title: string
    link: string
    image?: string | null
    remark?: string | null
  }

  export type ReportCreateManyMemberInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    mark: number
  }

  export type TalkCreateManyMemberInput = {
    id?: number
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    mark: number
    msg: string
  }

  export type BookUpdateWithoutMemberInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    withdel?: BoolFieldUpdateOperationsInput | boolean
    ispublic?: BoolFieldUpdateOperationsInput | boolean
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    FollowBook?: FollowBookUpdateManyWithoutBookNestedInput
    Mark?: MarkUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    withdel?: BoolFieldUpdateOperationsInput | boolean
    ispublic?: BoolFieldUpdateOperationsInput | boolean
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    FollowBook?: FollowBookUncheckedUpdateManyWithoutBookNestedInput
    Mark?: MarkUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateManyWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    withdel?: BoolFieldUpdateOperationsInput | boolean
    ispublic?: BoolFieldUpdateOperationsInput | boolean
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FollowBookUpdateWithoutMemberInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Book?: BookUpdateOneRequiredWithoutFollowBookNestedInput
  }

  export type FollowBookUncheckedUpdateWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    book?: IntFieldUpdateOperationsInput | number
  }

  export type FollowBookUncheckedUpdateManyWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    book?: IntFieldUpdateOperationsInput | number
  }

  export type LikesUpdateWithoutMemberInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Mark?: MarkUpdateOneRequiredWithoutLikesNestedInput
  }

  export type LikesUncheckedUpdateWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mark?: IntFieldUpdateOperationsInput | number
  }

  export type LikesUncheckedUpdateManyWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mark?: IntFieldUpdateOperationsInput | number
  }

  export type MarkUpdateWithoutMemberInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    Likes?: LikesUpdateManyWithoutMarkNestedInput
    Book?: BookUpdateOneRequiredWithoutMarkNestedInput
    Report?: ReportUpdateManyWithoutMarkNestedInput
    Talk?: TalkUpdateManyWithoutMarkNestedInput
  }

  export type MarkUncheckedUpdateWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    book?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
    Likes?: LikesUncheckedUpdateManyWithoutMarkNestedInput
    Report?: ReportUncheckedUpdateManyWithoutMarkNestedInput
    Talk?: TalkUncheckedUpdateManyWithoutMarkNestedInput
  }

  export type MarkUncheckedUpdateManyWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    book?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    remark?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReportUpdateWithoutMemberInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Mark?: MarkUpdateOneRequiredWithoutReportNestedInput
  }

  export type ReportUncheckedUpdateWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mark?: IntFieldUpdateOperationsInput | number
  }

  export type ReportUncheckedUpdateManyWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mark?: IntFieldUpdateOperationsInput | number
  }

  export type TalkUpdateWithoutMemberInput = {
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    msg?: StringFieldUpdateOperationsInput | string
    Mark?: MarkUpdateOneRequiredWithoutTalkNestedInput
  }

  export type TalkUncheckedUpdateWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mark?: IntFieldUpdateOperationsInput | number
    msg?: StringFieldUpdateOperationsInput | string
  }

  export type TalkUncheckedUpdateManyWithoutMemberInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    mark?: IntFieldUpdateOperationsInput | number
    msg?: StringFieldUpdateOperationsInput | string
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