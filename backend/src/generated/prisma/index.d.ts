
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
 * Model Equipe
 * 
 */
export type Equipe = $Result.DefaultSelection<Prisma.$EquipePayload>
/**
 * Model Atleta
 * 
 */
export type Atleta = $Result.DefaultSelection<Prisma.$AtletaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Equipes
 * const equipes = await prisma.equipe.findMany()
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
   * // Fetch zero or more Equipes
   * const equipes = await prisma.equipe.findMany()
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
   * `prisma.equipe`: Exposes CRUD operations for the **Equipe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Equipes
    * const equipes = await prisma.equipe.findMany()
    * ```
    */
  get equipe(): Prisma.EquipeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.atleta`: Exposes CRUD operations for the **Atleta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Atletas
    * const atletas = await prisma.atleta.findMany()
    * ```
    */
  get atleta(): Prisma.AtletaDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
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
    Equipe: 'Equipe',
    Atleta: 'Atleta'
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
      modelProps: "equipe" | "atleta"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Equipe: {
        payload: Prisma.$EquipePayload<ExtArgs>
        fields: Prisma.EquipeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>
          }
          findFirst: {
            args: Prisma.EquipeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>
          }
          findMany: {
            args: Prisma.EquipeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>[]
          }
          create: {
            args: Prisma.EquipeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>
          }
          createMany: {
            args: Prisma.EquipeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>[]
          }
          delete: {
            args: Prisma.EquipeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>
          }
          update: {
            args: Prisma.EquipeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>
          }
          deleteMany: {
            args: Prisma.EquipeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>[]
          }
          upsert: {
            args: Prisma.EquipeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipePayload>
          }
          aggregate: {
            args: Prisma.EquipeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipe>
          }
          groupBy: {
            args: Prisma.EquipeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipeCountArgs<ExtArgs>
            result: $Utils.Optional<EquipeCountAggregateOutputType> | number
          }
        }
      }
      Atleta: {
        payload: Prisma.$AtletaPayload<ExtArgs>
        fields: Prisma.AtletaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtletaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtletaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtletaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtletaPayload>
          }
          findFirst: {
            args: Prisma.AtletaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtletaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtletaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtletaPayload>
          }
          findMany: {
            args: Prisma.AtletaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtletaPayload>[]
          }
          create: {
            args: Prisma.AtletaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtletaPayload>
          }
          createMany: {
            args: Prisma.AtletaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AtletaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtletaPayload>[]
          }
          delete: {
            args: Prisma.AtletaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtletaPayload>
          }
          update: {
            args: Prisma.AtletaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtletaPayload>
          }
          deleteMany: {
            args: Prisma.AtletaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AtletaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AtletaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtletaPayload>[]
          }
          upsert: {
            args: Prisma.AtletaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtletaPayload>
          }
          aggregate: {
            args: Prisma.AtletaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtleta>
          }
          groupBy: {
            args: Prisma.AtletaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtletaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AtletaCountArgs<ExtArgs>
            result: $Utils.Optional<AtletaCountAggregateOutputType> | number
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
    equipe?: EquipeOmit
    atleta?: AtletaOmit
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
   * Count Type EquipeCountOutputType
   */

  export type EquipeCountOutputType = {
    atletas: number
  }

  export type EquipeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atletas?: boolean | EquipeCountOutputTypeCountAtletasArgs
  }

  // Custom InputTypes
  /**
   * EquipeCountOutputType without action
   */
  export type EquipeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeCountOutputType
     */
    select?: EquipeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EquipeCountOutputType without action
   */
  export type EquipeCountOutputTypeCountAtletasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtletaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Equipe
   */

  export type AggregateEquipe = {
    _count: EquipeCountAggregateOutputType | null
    _avg: EquipeAvgAggregateOutputType | null
    _sum: EquipeSumAggregateOutputType | null
    _min: EquipeMinAggregateOutputType | null
    _max: EquipeMaxAggregateOutputType | null
  }

  export type EquipeAvgAggregateOutputType = {
    id: number | null
  }

  export type EquipeSumAggregateOutputType = {
    id: number | null
  }

  export type EquipeMinAggregateOutputType = {
    id: number | null
    nome: string | null
    tipo: string | null
  }

  export type EquipeMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    tipo: string | null
  }

  export type EquipeCountAggregateOutputType = {
    id: number
    nome: number
    tipo: number
    _all: number
  }


  export type EquipeAvgAggregateInputType = {
    id?: true
  }

  export type EquipeSumAggregateInputType = {
    id?: true
  }

  export type EquipeMinAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
  }

  export type EquipeMaxAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
  }

  export type EquipeCountAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    _all?: true
  }

  export type EquipeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipe to aggregate.
     */
    where?: EquipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipes to fetch.
     */
    orderBy?: EquipeOrderByWithRelationInput | EquipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Equipes
    **/
    _count?: true | EquipeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipeMaxAggregateInputType
  }

  export type GetEquipeAggregateType<T extends EquipeAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipe[P]>
      : GetScalarType<T[P], AggregateEquipe[P]>
  }




  export type EquipeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipeWhereInput
    orderBy?: EquipeOrderByWithAggregationInput | EquipeOrderByWithAggregationInput[]
    by: EquipeScalarFieldEnum[] | EquipeScalarFieldEnum
    having?: EquipeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipeCountAggregateInputType | true
    _avg?: EquipeAvgAggregateInputType
    _sum?: EquipeSumAggregateInputType
    _min?: EquipeMinAggregateInputType
    _max?: EquipeMaxAggregateInputType
  }

  export type EquipeGroupByOutputType = {
    id: number
    nome: string
    tipo: string
    _count: EquipeCountAggregateOutputType | null
    _avg: EquipeAvgAggregateOutputType | null
    _sum: EquipeSumAggregateOutputType | null
    _min: EquipeMinAggregateOutputType | null
    _max: EquipeMaxAggregateOutputType | null
  }

  type GetEquipeGroupByPayload<T extends EquipeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipeGroupByOutputType[P]>
            : GetScalarType<T[P], EquipeGroupByOutputType[P]>
        }
      >
    >


  export type EquipeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
    atletas?: boolean | Equipe$atletasArgs<ExtArgs>
    _count?: boolean | EquipeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipe"]>

  export type EquipeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
  }, ExtArgs["result"]["equipe"]>

  export type EquipeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
  }, ExtArgs["result"]["equipe"]>

  export type EquipeSelectScalar = {
    id?: boolean
    nome?: boolean
    tipo?: boolean
  }

  export type EquipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "tipo", ExtArgs["result"]["equipe"]>
  export type EquipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atletas?: boolean | Equipe$atletasArgs<ExtArgs>
    _count?: boolean | EquipeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EquipeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EquipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipe"
    objects: {
      atletas: Prisma.$AtletaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      tipo: string
    }, ExtArgs["result"]["equipe"]>
    composites: {}
  }

  type EquipeGetPayload<S extends boolean | null | undefined | EquipeDefaultArgs> = $Result.GetResult<Prisma.$EquipePayload, S>

  type EquipeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipeCountAggregateInputType | true
    }

  export interface EquipeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Equipe'], meta: { name: 'Equipe' } }
    /**
     * Find zero or one Equipe that matches the filter.
     * @param {EquipeFindUniqueArgs} args - Arguments to find a Equipe
     * @example
     * // Get one Equipe
     * const equipe = await prisma.equipe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipeFindUniqueArgs>(args: SelectSubset<T, EquipeFindUniqueArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Equipe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipeFindUniqueOrThrowArgs} args - Arguments to find a Equipe
     * @example
     * // Get one Equipe
     * const equipe = await prisma.equipe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipeFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeFindFirstArgs} args - Arguments to find a Equipe
     * @example
     * // Get one Equipe
     * const equipe = await prisma.equipe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipeFindFirstArgs>(args?: SelectSubset<T, EquipeFindFirstArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Equipe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeFindFirstOrThrowArgs} args - Arguments to find a Equipe
     * @example
     * // Get one Equipe
     * const equipe = await prisma.equipe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipeFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Equipes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Equipes
     * const equipes = await prisma.equipe.findMany()
     * 
     * // Get first 10 Equipes
     * const equipes = await prisma.equipe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipeWithIdOnly = await prisma.equipe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipeFindManyArgs>(args?: SelectSubset<T, EquipeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Equipe.
     * @param {EquipeCreateArgs} args - Arguments to create a Equipe.
     * @example
     * // Create one Equipe
     * const Equipe = await prisma.equipe.create({
     *   data: {
     *     // ... data to create a Equipe
     *   }
     * })
     * 
     */
    create<T extends EquipeCreateArgs>(args: SelectSubset<T, EquipeCreateArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Equipes.
     * @param {EquipeCreateManyArgs} args - Arguments to create many Equipes.
     * @example
     * // Create many Equipes
     * const equipe = await prisma.equipe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipeCreateManyArgs>(args?: SelectSubset<T, EquipeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Equipes and returns the data saved in the database.
     * @param {EquipeCreateManyAndReturnArgs} args - Arguments to create many Equipes.
     * @example
     * // Create many Equipes
     * const equipe = await prisma.equipe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Equipes and only return the `id`
     * const equipeWithIdOnly = await prisma.equipe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipeCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Equipe.
     * @param {EquipeDeleteArgs} args - Arguments to delete one Equipe.
     * @example
     * // Delete one Equipe
     * const Equipe = await prisma.equipe.delete({
     *   where: {
     *     // ... filter to delete one Equipe
     *   }
     * })
     * 
     */
    delete<T extends EquipeDeleteArgs>(args: SelectSubset<T, EquipeDeleteArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Equipe.
     * @param {EquipeUpdateArgs} args - Arguments to update one Equipe.
     * @example
     * // Update one Equipe
     * const equipe = await prisma.equipe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipeUpdateArgs>(args: SelectSubset<T, EquipeUpdateArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Equipes.
     * @param {EquipeDeleteManyArgs} args - Arguments to filter Equipes to delete.
     * @example
     * // Delete a few Equipes
     * const { count } = await prisma.equipe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipeDeleteManyArgs>(args?: SelectSubset<T, EquipeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Equipes
     * const equipe = await prisma.equipe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipeUpdateManyArgs>(args: SelectSubset<T, EquipeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Equipes and returns the data updated in the database.
     * @param {EquipeUpdateManyAndReturnArgs} args - Arguments to update many Equipes.
     * @example
     * // Update many Equipes
     * const equipe = await prisma.equipe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Equipes and only return the `id`
     * const equipeWithIdOnly = await prisma.equipe.updateManyAndReturn({
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
    updateManyAndReturn<T extends EquipeUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Equipe.
     * @param {EquipeUpsertArgs} args - Arguments to update or create a Equipe.
     * @example
     * // Update or create a Equipe
     * const equipe = await prisma.equipe.upsert({
     *   create: {
     *     // ... data to create a Equipe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Equipe we want to update
     *   }
     * })
     */
    upsert<T extends EquipeUpsertArgs>(args: SelectSubset<T, EquipeUpsertArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Equipes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeCountArgs} args - Arguments to filter Equipes to count.
     * @example
     * // Count the number of Equipes
     * const count = await prisma.equipe.count({
     *   where: {
     *     // ... the filter for the Equipes we want to count
     *   }
     * })
    **/
    count<T extends EquipeCountArgs>(
      args?: Subset<T, EquipeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Equipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EquipeAggregateArgs>(args: Subset<T, EquipeAggregateArgs>): Prisma.PrismaPromise<GetEquipeAggregateType<T>>

    /**
     * Group by Equipe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeGroupByArgs} args - Group by arguments.
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
      T extends EquipeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipeGroupByArgs['orderBy'] }
        : { orderBy?: EquipeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EquipeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Equipe model
   */
  readonly fields: EquipeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Equipe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    atletas<T extends Equipe$atletasArgs<ExtArgs> = {}>(args?: Subset<T, Equipe$atletasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtletaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Equipe model
   */
  interface EquipeFieldRefs {
    readonly id: FieldRef<"Equipe", 'Int'>
    readonly nome: FieldRef<"Equipe", 'String'>
    readonly tipo: FieldRef<"Equipe", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Equipe findUnique
   */
  export type EquipeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * Filter, which Equipe to fetch.
     */
    where: EquipeWhereUniqueInput
  }

  /**
   * Equipe findUniqueOrThrow
   */
  export type EquipeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * Filter, which Equipe to fetch.
     */
    where: EquipeWhereUniqueInput
  }

  /**
   * Equipe findFirst
   */
  export type EquipeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * Filter, which Equipe to fetch.
     */
    where?: EquipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipes to fetch.
     */
    orderBy?: EquipeOrderByWithRelationInput | EquipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipes.
     */
    cursor?: EquipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipes.
     */
    distinct?: EquipeScalarFieldEnum | EquipeScalarFieldEnum[]
  }

  /**
   * Equipe findFirstOrThrow
   */
  export type EquipeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * Filter, which Equipe to fetch.
     */
    where?: EquipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipes to fetch.
     */
    orderBy?: EquipeOrderByWithRelationInput | EquipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Equipes.
     */
    cursor?: EquipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Equipes.
     */
    distinct?: EquipeScalarFieldEnum | EquipeScalarFieldEnum[]
  }

  /**
   * Equipe findMany
   */
  export type EquipeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * Filter, which Equipes to fetch.
     */
    where?: EquipeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Equipes to fetch.
     */
    orderBy?: EquipeOrderByWithRelationInput | EquipeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Equipes.
     */
    cursor?: EquipeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Equipes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Equipes.
     */
    skip?: number
    distinct?: EquipeScalarFieldEnum | EquipeScalarFieldEnum[]
  }

  /**
   * Equipe create
   */
  export type EquipeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * The data needed to create a Equipe.
     */
    data: XOR<EquipeCreateInput, EquipeUncheckedCreateInput>
  }

  /**
   * Equipe createMany
   */
  export type EquipeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Equipes.
     */
    data: EquipeCreateManyInput | EquipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipe createManyAndReturn
   */
  export type EquipeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * The data used to create many Equipes.
     */
    data: EquipeCreateManyInput | EquipeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Equipe update
   */
  export type EquipeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * The data needed to update a Equipe.
     */
    data: XOR<EquipeUpdateInput, EquipeUncheckedUpdateInput>
    /**
     * Choose, which Equipe to update.
     */
    where: EquipeWhereUniqueInput
  }

  /**
   * Equipe updateMany
   */
  export type EquipeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Equipes.
     */
    data: XOR<EquipeUpdateManyMutationInput, EquipeUncheckedUpdateManyInput>
    /**
     * Filter which Equipes to update
     */
    where?: EquipeWhereInput
    /**
     * Limit how many Equipes to update.
     */
    limit?: number
  }

  /**
   * Equipe updateManyAndReturn
   */
  export type EquipeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * The data used to update Equipes.
     */
    data: XOR<EquipeUpdateManyMutationInput, EquipeUncheckedUpdateManyInput>
    /**
     * Filter which Equipes to update
     */
    where?: EquipeWhereInput
    /**
     * Limit how many Equipes to update.
     */
    limit?: number
  }

  /**
   * Equipe upsert
   */
  export type EquipeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * The filter to search for the Equipe to update in case it exists.
     */
    where: EquipeWhereUniqueInput
    /**
     * In case the Equipe found by the `where` argument doesn't exist, create a new Equipe with this data.
     */
    create: XOR<EquipeCreateInput, EquipeUncheckedCreateInput>
    /**
     * In case the Equipe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipeUpdateInput, EquipeUncheckedUpdateInput>
  }

  /**
   * Equipe delete
   */
  export type EquipeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    /**
     * Filter which Equipe to delete.
     */
    where: EquipeWhereUniqueInput
  }

  /**
   * Equipe deleteMany
   */
  export type EquipeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Equipes to delete
     */
    where?: EquipeWhereInput
    /**
     * Limit how many Equipes to delete.
     */
    limit?: number
  }

  /**
   * Equipe.atletas
   */
  export type Equipe$atletasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atleta
     */
    select?: AtletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atleta
     */
    omit?: AtletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaInclude<ExtArgs> | null
    where?: AtletaWhereInput
    orderBy?: AtletaOrderByWithRelationInput | AtletaOrderByWithRelationInput[]
    cursor?: AtletaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtletaScalarFieldEnum | AtletaScalarFieldEnum[]
  }

  /**
   * Equipe without action
   */
  export type EquipeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
  }


  /**
   * Model Atleta
   */

  export type AggregateAtleta = {
    _count: AtletaCountAggregateOutputType | null
    _avg: AtletaAvgAggregateOutputType | null
    _sum: AtletaSumAggregateOutputType | null
    _min: AtletaMinAggregateOutputType | null
    _max: AtletaMaxAggregateOutputType | null
  }

  export type AtletaAvgAggregateOutputType = {
    id: number | null
    equipeId: number | null
  }

  export type AtletaSumAggregateOutputType = {
    id: number | null
    equipeId: number | null
  }

  export type AtletaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    genero: string | null
    nivel: string | null
    equipeId: number | null
  }

  export type AtletaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    genero: string | null
    nivel: string | null
    equipeId: number | null
  }

  export type AtletaCountAggregateOutputType = {
    id: number
    nome: number
    genero: number
    nivel: number
    equipeId: number
    _all: number
  }


  export type AtletaAvgAggregateInputType = {
    id?: true
    equipeId?: true
  }

  export type AtletaSumAggregateInputType = {
    id?: true
    equipeId?: true
  }

  export type AtletaMinAggregateInputType = {
    id?: true
    nome?: true
    genero?: true
    nivel?: true
    equipeId?: true
  }

  export type AtletaMaxAggregateInputType = {
    id?: true
    nome?: true
    genero?: true
    nivel?: true
    equipeId?: true
  }

  export type AtletaCountAggregateInputType = {
    id?: true
    nome?: true
    genero?: true
    nivel?: true
    equipeId?: true
    _all?: true
  }

  export type AtletaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atleta to aggregate.
     */
    where?: AtletaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atletas to fetch.
     */
    orderBy?: AtletaOrderByWithRelationInput | AtletaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtletaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atletas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atletas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Atletas
    **/
    _count?: true | AtletaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AtletaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AtletaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtletaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtletaMaxAggregateInputType
  }

  export type GetAtletaAggregateType<T extends AtletaAggregateArgs> = {
        [P in keyof T & keyof AggregateAtleta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtleta[P]>
      : GetScalarType<T[P], AggregateAtleta[P]>
  }




  export type AtletaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtletaWhereInput
    orderBy?: AtletaOrderByWithAggregationInput | AtletaOrderByWithAggregationInput[]
    by: AtletaScalarFieldEnum[] | AtletaScalarFieldEnum
    having?: AtletaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtletaCountAggregateInputType | true
    _avg?: AtletaAvgAggregateInputType
    _sum?: AtletaSumAggregateInputType
    _min?: AtletaMinAggregateInputType
    _max?: AtletaMaxAggregateInputType
  }

  export type AtletaGroupByOutputType = {
    id: number
    nome: string
    genero: string
    nivel: string | null
    equipeId: number | null
    _count: AtletaCountAggregateOutputType | null
    _avg: AtletaAvgAggregateOutputType | null
    _sum: AtletaSumAggregateOutputType | null
    _min: AtletaMinAggregateOutputType | null
    _max: AtletaMaxAggregateOutputType | null
  }

  type GetAtletaGroupByPayload<T extends AtletaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtletaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtletaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtletaGroupByOutputType[P]>
            : GetScalarType<T[P], AtletaGroupByOutputType[P]>
        }
      >
    >


  export type AtletaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    genero?: boolean
    nivel?: boolean
    equipeId?: boolean
    equipe?: boolean | Atleta$equipeArgs<ExtArgs>
  }, ExtArgs["result"]["atleta"]>

  export type AtletaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    genero?: boolean
    nivel?: boolean
    equipeId?: boolean
    equipe?: boolean | Atleta$equipeArgs<ExtArgs>
  }, ExtArgs["result"]["atleta"]>

  export type AtletaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    genero?: boolean
    nivel?: boolean
    equipeId?: boolean
    equipe?: boolean | Atleta$equipeArgs<ExtArgs>
  }, ExtArgs["result"]["atleta"]>

  export type AtletaSelectScalar = {
    id?: boolean
    nome?: boolean
    genero?: boolean
    nivel?: boolean
    equipeId?: boolean
  }

  export type AtletaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "genero" | "nivel" | "equipeId", ExtArgs["result"]["atleta"]>
  export type AtletaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipe?: boolean | Atleta$equipeArgs<ExtArgs>
  }
  export type AtletaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipe?: boolean | Atleta$equipeArgs<ExtArgs>
  }
  export type AtletaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    equipe?: boolean | Atleta$equipeArgs<ExtArgs>
  }

  export type $AtletaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Atleta"
    objects: {
      equipe: Prisma.$EquipePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      genero: string
      nivel: string | null
      equipeId: number | null
    }, ExtArgs["result"]["atleta"]>
    composites: {}
  }

  type AtletaGetPayload<S extends boolean | null | undefined | AtletaDefaultArgs> = $Result.GetResult<Prisma.$AtletaPayload, S>

  type AtletaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AtletaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AtletaCountAggregateInputType | true
    }

  export interface AtletaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Atleta'], meta: { name: 'Atleta' } }
    /**
     * Find zero or one Atleta that matches the filter.
     * @param {AtletaFindUniqueArgs} args - Arguments to find a Atleta
     * @example
     * // Get one Atleta
     * const atleta = await prisma.atleta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AtletaFindUniqueArgs>(args: SelectSubset<T, AtletaFindUniqueArgs<ExtArgs>>): Prisma__AtletaClient<$Result.GetResult<Prisma.$AtletaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Atleta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AtletaFindUniqueOrThrowArgs} args - Arguments to find a Atleta
     * @example
     * // Get one Atleta
     * const atleta = await prisma.atleta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AtletaFindUniqueOrThrowArgs>(args: SelectSubset<T, AtletaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AtletaClient<$Result.GetResult<Prisma.$AtletaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atleta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtletaFindFirstArgs} args - Arguments to find a Atleta
     * @example
     * // Get one Atleta
     * const atleta = await prisma.atleta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AtletaFindFirstArgs>(args?: SelectSubset<T, AtletaFindFirstArgs<ExtArgs>>): Prisma__AtletaClient<$Result.GetResult<Prisma.$AtletaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atleta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtletaFindFirstOrThrowArgs} args - Arguments to find a Atleta
     * @example
     * // Get one Atleta
     * const atleta = await prisma.atleta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AtletaFindFirstOrThrowArgs>(args?: SelectSubset<T, AtletaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AtletaClient<$Result.GetResult<Prisma.$AtletaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Atletas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtletaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Atletas
     * const atletas = await prisma.atleta.findMany()
     * 
     * // Get first 10 Atletas
     * const atletas = await prisma.atleta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const atletaWithIdOnly = await prisma.atleta.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AtletaFindManyArgs>(args?: SelectSubset<T, AtletaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtletaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Atleta.
     * @param {AtletaCreateArgs} args - Arguments to create a Atleta.
     * @example
     * // Create one Atleta
     * const Atleta = await prisma.atleta.create({
     *   data: {
     *     // ... data to create a Atleta
     *   }
     * })
     * 
     */
    create<T extends AtletaCreateArgs>(args: SelectSubset<T, AtletaCreateArgs<ExtArgs>>): Prisma__AtletaClient<$Result.GetResult<Prisma.$AtletaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Atletas.
     * @param {AtletaCreateManyArgs} args - Arguments to create many Atletas.
     * @example
     * // Create many Atletas
     * const atleta = await prisma.atleta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AtletaCreateManyArgs>(args?: SelectSubset<T, AtletaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Atletas and returns the data saved in the database.
     * @param {AtletaCreateManyAndReturnArgs} args - Arguments to create many Atletas.
     * @example
     * // Create many Atletas
     * const atleta = await prisma.atleta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Atletas and only return the `id`
     * const atletaWithIdOnly = await prisma.atleta.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AtletaCreateManyAndReturnArgs>(args?: SelectSubset<T, AtletaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtletaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Atleta.
     * @param {AtletaDeleteArgs} args - Arguments to delete one Atleta.
     * @example
     * // Delete one Atleta
     * const Atleta = await prisma.atleta.delete({
     *   where: {
     *     // ... filter to delete one Atleta
     *   }
     * })
     * 
     */
    delete<T extends AtletaDeleteArgs>(args: SelectSubset<T, AtletaDeleteArgs<ExtArgs>>): Prisma__AtletaClient<$Result.GetResult<Prisma.$AtletaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Atleta.
     * @param {AtletaUpdateArgs} args - Arguments to update one Atleta.
     * @example
     * // Update one Atleta
     * const atleta = await prisma.atleta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AtletaUpdateArgs>(args: SelectSubset<T, AtletaUpdateArgs<ExtArgs>>): Prisma__AtletaClient<$Result.GetResult<Prisma.$AtletaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Atletas.
     * @param {AtletaDeleteManyArgs} args - Arguments to filter Atletas to delete.
     * @example
     * // Delete a few Atletas
     * const { count } = await prisma.atleta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AtletaDeleteManyArgs>(args?: SelectSubset<T, AtletaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atletas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtletaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Atletas
     * const atleta = await prisma.atleta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AtletaUpdateManyArgs>(args: SelectSubset<T, AtletaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atletas and returns the data updated in the database.
     * @param {AtletaUpdateManyAndReturnArgs} args - Arguments to update many Atletas.
     * @example
     * // Update many Atletas
     * const atleta = await prisma.atleta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Atletas and only return the `id`
     * const atletaWithIdOnly = await prisma.atleta.updateManyAndReturn({
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
    updateManyAndReturn<T extends AtletaUpdateManyAndReturnArgs>(args: SelectSubset<T, AtletaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtletaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Atleta.
     * @param {AtletaUpsertArgs} args - Arguments to update or create a Atleta.
     * @example
     * // Update or create a Atleta
     * const atleta = await prisma.atleta.upsert({
     *   create: {
     *     // ... data to create a Atleta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Atleta we want to update
     *   }
     * })
     */
    upsert<T extends AtletaUpsertArgs>(args: SelectSubset<T, AtletaUpsertArgs<ExtArgs>>): Prisma__AtletaClient<$Result.GetResult<Prisma.$AtletaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Atletas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtletaCountArgs} args - Arguments to filter Atletas to count.
     * @example
     * // Count the number of Atletas
     * const count = await prisma.atleta.count({
     *   where: {
     *     // ... the filter for the Atletas we want to count
     *   }
     * })
    **/
    count<T extends AtletaCountArgs>(
      args?: Subset<T, AtletaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtletaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Atleta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtletaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AtletaAggregateArgs>(args: Subset<T, AtletaAggregateArgs>): Prisma.PrismaPromise<GetAtletaAggregateType<T>>

    /**
     * Group by Atleta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtletaGroupByArgs} args - Group by arguments.
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
      T extends AtletaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtletaGroupByArgs['orderBy'] }
        : { orderBy?: AtletaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AtletaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtletaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Atleta model
   */
  readonly fields: AtletaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Atleta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtletaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    equipe<T extends Atleta$equipeArgs<ExtArgs> = {}>(args?: Subset<T, Atleta$equipeArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Atleta model
   */
  interface AtletaFieldRefs {
    readonly id: FieldRef<"Atleta", 'Int'>
    readonly nome: FieldRef<"Atleta", 'String'>
    readonly genero: FieldRef<"Atleta", 'String'>
    readonly nivel: FieldRef<"Atleta", 'String'>
    readonly equipeId: FieldRef<"Atleta", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Atleta findUnique
   */
  export type AtletaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atleta
     */
    select?: AtletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atleta
     */
    omit?: AtletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaInclude<ExtArgs> | null
    /**
     * Filter, which Atleta to fetch.
     */
    where: AtletaWhereUniqueInput
  }

  /**
   * Atleta findUniqueOrThrow
   */
  export type AtletaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atleta
     */
    select?: AtletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atleta
     */
    omit?: AtletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaInclude<ExtArgs> | null
    /**
     * Filter, which Atleta to fetch.
     */
    where: AtletaWhereUniqueInput
  }

  /**
   * Atleta findFirst
   */
  export type AtletaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atleta
     */
    select?: AtletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atleta
     */
    omit?: AtletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaInclude<ExtArgs> | null
    /**
     * Filter, which Atleta to fetch.
     */
    where?: AtletaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atletas to fetch.
     */
    orderBy?: AtletaOrderByWithRelationInput | AtletaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atletas.
     */
    cursor?: AtletaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atletas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atletas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atletas.
     */
    distinct?: AtletaScalarFieldEnum | AtletaScalarFieldEnum[]
  }

  /**
   * Atleta findFirstOrThrow
   */
  export type AtletaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atleta
     */
    select?: AtletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atleta
     */
    omit?: AtletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaInclude<ExtArgs> | null
    /**
     * Filter, which Atleta to fetch.
     */
    where?: AtletaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atletas to fetch.
     */
    orderBy?: AtletaOrderByWithRelationInput | AtletaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atletas.
     */
    cursor?: AtletaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atletas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atletas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atletas.
     */
    distinct?: AtletaScalarFieldEnum | AtletaScalarFieldEnum[]
  }

  /**
   * Atleta findMany
   */
  export type AtletaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atleta
     */
    select?: AtletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atleta
     */
    omit?: AtletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaInclude<ExtArgs> | null
    /**
     * Filter, which Atletas to fetch.
     */
    where?: AtletaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atletas to fetch.
     */
    orderBy?: AtletaOrderByWithRelationInput | AtletaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Atletas.
     */
    cursor?: AtletaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atletas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atletas.
     */
    skip?: number
    distinct?: AtletaScalarFieldEnum | AtletaScalarFieldEnum[]
  }

  /**
   * Atleta create
   */
  export type AtletaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atleta
     */
    select?: AtletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atleta
     */
    omit?: AtletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaInclude<ExtArgs> | null
    /**
     * The data needed to create a Atleta.
     */
    data: XOR<AtletaCreateInput, AtletaUncheckedCreateInput>
  }

  /**
   * Atleta createMany
   */
  export type AtletaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Atletas.
     */
    data: AtletaCreateManyInput | AtletaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Atleta createManyAndReturn
   */
  export type AtletaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atleta
     */
    select?: AtletaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Atleta
     */
    omit?: AtletaOmit<ExtArgs> | null
    /**
     * The data used to create many Atletas.
     */
    data: AtletaCreateManyInput | AtletaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Atleta update
   */
  export type AtletaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atleta
     */
    select?: AtletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atleta
     */
    omit?: AtletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaInclude<ExtArgs> | null
    /**
     * The data needed to update a Atleta.
     */
    data: XOR<AtletaUpdateInput, AtletaUncheckedUpdateInput>
    /**
     * Choose, which Atleta to update.
     */
    where: AtletaWhereUniqueInput
  }

  /**
   * Atleta updateMany
   */
  export type AtletaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Atletas.
     */
    data: XOR<AtletaUpdateManyMutationInput, AtletaUncheckedUpdateManyInput>
    /**
     * Filter which Atletas to update
     */
    where?: AtletaWhereInput
    /**
     * Limit how many Atletas to update.
     */
    limit?: number
  }

  /**
   * Atleta updateManyAndReturn
   */
  export type AtletaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atleta
     */
    select?: AtletaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Atleta
     */
    omit?: AtletaOmit<ExtArgs> | null
    /**
     * The data used to update Atletas.
     */
    data: XOR<AtletaUpdateManyMutationInput, AtletaUncheckedUpdateManyInput>
    /**
     * Filter which Atletas to update
     */
    where?: AtletaWhereInput
    /**
     * Limit how many Atletas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Atleta upsert
   */
  export type AtletaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atleta
     */
    select?: AtletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atleta
     */
    omit?: AtletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaInclude<ExtArgs> | null
    /**
     * The filter to search for the Atleta to update in case it exists.
     */
    where: AtletaWhereUniqueInput
    /**
     * In case the Atleta found by the `where` argument doesn't exist, create a new Atleta with this data.
     */
    create: XOR<AtletaCreateInput, AtletaUncheckedCreateInput>
    /**
     * In case the Atleta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtletaUpdateInput, AtletaUncheckedUpdateInput>
  }

  /**
   * Atleta delete
   */
  export type AtletaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atleta
     */
    select?: AtletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atleta
     */
    omit?: AtletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaInclude<ExtArgs> | null
    /**
     * Filter which Atleta to delete.
     */
    where: AtletaWhereUniqueInput
  }

  /**
   * Atleta deleteMany
   */
  export type AtletaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atletas to delete
     */
    where?: AtletaWhereInput
    /**
     * Limit how many Atletas to delete.
     */
    limit?: number
  }

  /**
   * Atleta.equipe
   */
  export type Atleta$equipeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Equipe
     */
    select?: EquipeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Equipe
     */
    omit?: EquipeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeInclude<ExtArgs> | null
    where?: EquipeWhereInput
  }

  /**
   * Atleta without action
   */
  export type AtletaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atleta
     */
    select?: AtletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atleta
     */
    omit?: AtletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaInclude<ExtArgs> | null
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


  export const EquipeScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    tipo: 'tipo'
  };

  export type EquipeScalarFieldEnum = (typeof EquipeScalarFieldEnum)[keyof typeof EquipeScalarFieldEnum]


  export const AtletaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    genero: 'genero',
    nivel: 'nivel',
    equipeId: 'equipeId'
  };

  export type AtletaScalarFieldEnum = (typeof AtletaScalarFieldEnum)[keyof typeof AtletaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  export type EquipeWhereInput = {
    AND?: EquipeWhereInput | EquipeWhereInput[]
    OR?: EquipeWhereInput[]
    NOT?: EquipeWhereInput | EquipeWhereInput[]
    id?: IntFilter<"Equipe"> | number
    nome?: StringFilter<"Equipe"> | string
    tipo?: StringFilter<"Equipe"> | string
    atletas?: AtletaListRelationFilter
  }

  export type EquipeOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    atletas?: AtletaOrderByRelationAggregateInput
  }

  export type EquipeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EquipeWhereInput | EquipeWhereInput[]
    OR?: EquipeWhereInput[]
    NOT?: EquipeWhereInput | EquipeWhereInput[]
    nome?: StringFilter<"Equipe"> | string
    tipo?: StringFilter<"Equipe"> | string
    atletas?: AtletaListRelationFilter
  }, "id">

  export type EquipeOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    _count?: EquipeCountOrderByAggregateInput
    _avg?: EquipeAvgOrderByAggregateInput
    _max?: EquipeMaxOrderByAggregateInput
    _min?: EquipeMinOrderByAggregateInput
    _sum?: EquipeSumOrderByAggregateInput
  }

  export type EquipeScalarWhereWithAggregatesInput = {
    AND?: EquipeScalarWhereWithAggregatesInput | EquipeScalarWhereWithAggregatesInput[]
    OR?: EquipeScalarWhereWithAggregatesInput[]
    NOT?: EquipeScalarWhereWithAggregatesInput | EquipeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Equipe"> | number
    nome?: StringWithAggregatesFilter<"Equipe"> | string
    tipo?: StringWithAggregatesFilter<"Equipe"> | string
  }

  export type AtletaWhereInput = {
    AND?: AtletaWhereInput | AtletaWhereInput[]
    OR?: AtletaWhereInput[]
    NOT?: AtletaWhereInput | AtletaWhereInput[]
    id?: IntFilter<"Atleta"> | number
    nome?: StringFilter<"Atleta"> | string
    genero?: StringFilter<"Atleta"> | string
    nivel?: StringNullableFilter<"Atleta"> | string | null
    equipeId?: IntNullableFilter<"Atleta"> | number | null
    equipe?: XOR<EquipeNullableScalarRelationFilter, EquipeWhereInput> | null
  }

  export type AtletaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    genero?: SortOrder
    nivel?: SortOrderInput | SortOrder
    equipeId?: SortOrderInput | SortOrder
    equipe?: EquipeOrderByWithRelationInput
  }

  export type AtletaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AtletaWhereInput | AtletaWhereInput[]
    OR?: AtletaWhereInput[]
    NOT?: AtletaWhereInput | AtletaWhereInput[]
    nome?: StringFilter<"Atleta"> | string
    genero?: StringFilter<"Atleta"> | string
    nivel?: StringNullableFilter<"Atleta"> | string | null
    equipeId?: IntNullableFilter<"Atleta"> | number | null
    equipe?: XOR<EquipeNullableScalarRelationFilter, EquipeWhereInput> | null
  }, "id">

  export type AtletaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    genero?: SortOrder
    nivel?: SortOrderInput | SortOrder
    equipeId?: SortOrderInput | SortOrder
    _count?: AtletaCountOrderByAggregateInput
    _avg?: AtletaAvgOrderByAggregateInput
    _max?: AtletaMaxOrderByAggregateInput
    _min?: AtletaMinOrderByAggregateInput
    _sum?: AtletaSumOrderByAggregateInput
  }

  export type AtletaScalarWhereWithAggregatesInput = {
    AND?: AtletaScalarWhereWithAggregatesInput | AtletaScalarWhereWithAggregatesInput[]
    OR?: AtletaScalarWhereWithAggregatesInput[]
    NOT?: AtletaScalarWhereWithAggregatesInput | AtletaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Atleta"> | number
    nome?: StringWithAggregatesFilter<"Atleta"> | string
    genero?: StringWithAggregatesFilter<"Atleta"> | string
    nivel?: StringNullableWithAggregatesFilter<"Atleta"> | string | null
    equipeId?: IntNullableWithAggregatesFilter<"Atleta"> | number | null
  }

  export type EquipeCreateInput = {
    nome: string
    tipo: string
    atletas?: AtletaCreateNestedManyWithoutEquipeInput
  }

  export type EquipeUncheckedCreateInput = {
    id?: number
    nome: string
    tipo: string
    atletas?: AtletaUncheckedCreateNestedManyWithoutEquipeInput
  }

  export type EquipeUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    atletas?: AtletaUpdateManyWithoutEquipeNestedInput
  }

  export type EquipeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    atletas?: AtletaUncheckedUpdateManyWithoutEquipeNestedInput
  }

  export type EquipeCreateManyInput = {
    id?: number
    nome: string
    tipo: string
  }

  export type EquipeUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type EquipeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type AtletaCreateInput = {
    nome: string
    genero: string
    nivel?: string | null
    equipe?: EquipeCreateNestedOneWithoutAtletasInput
  }

  export type AtletaUncheckedCreateInput = {
    id?: number
    nome: string
    genero: string
    nivel?: string | null
    equipeId?: number | null
  }

  export type AtletaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    nivel?: NullableStringFieldUpdateOperationsInput | string | null
    equipe?: EquipeUpdateOneWithoutAtletasNestedInput
  }

  export type AtletaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    nivel?: NullableStringFieldUpdateOperationsInput | string | null
    equipeId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AtletaCreateManyInput = {
    id?: number
    nome: string
    genero: string
    nivel?: string | null
    equipeId?: number | null
  }

  export type AtletaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    nivel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AtletaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    nivel?: NullableStringFieldUpdateOperationsInput | string | null
    equipeId?: NullableIntFieldUpdateOperationsInput | number | null
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

  export type AtletaListRelationFilter = {
    every?: AtletaWhereInput
    some?: AtletaWhereInput
    none?: AtletaWhereInput
  }

  export type AtletaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EquipeCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
  }

  export type EquipeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EquipeMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
  }

  export type EquipeMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
  }

  export type EquipeSumOrderByAggregateInput = {
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

  export type EquipeNullableScalarRelationFilter = {
    is?: EquipeWhereInput | null
    isNot?: EquipeWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AtletaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    genero?: SortOrder
    nivel?: SortOrder
    equipeId?: SortOrder
  }

  export type AtletaAvgOrderByAggregateInput = {
    id?: SortOrder
    equipeId?: SortOrder
  }

  export type AtletaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    genero?: SortOrder
    nivel?: SortOrder
    equipeId?: SortOrder
  }

  export type AtletaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    genero?: SortOrder
    nivel?: SortOrder
    equipeId?: SortOrder
  }

  export type AtletaSumOrderByAggregateInput = {
    id?: SortOrder
    equipeId?: SortOrder
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

  export type AtletaCreateNestedManyWithoutEquipeInput = {
    create?: XOR<AtletaCreateWithoutEquipeInput, AtletaUncheckedCreateWithoutEquipeInput> | AtletaCreateWithoutEquipeInput[] | AtletaUncheckedCreateWithoutEquipeInput[]
    connectOrCreate?: AtletaCreateOrConnectWithoutEquipeInput | AtletaCreateOrConnectWithoutEquipeInput[]
    createMany?: AtletaCreateManyEquipeInputEnvelope
    connect?: AtletaWhereUniqueInput | AtletaWhereUniqueInput[]
  }

  export type AtletaUncheckedCreateNestedManyWithoutEquipeInput = {
    create?: XOR<AtletaCreateWithoutEquipeInput, AtletaUncheckedCreateWithoutEquipeInput> | AtletaCreateWithoutEquipeInput[] | AtletaUncheckedCreateWithoutEquipeInput[]
    connectOrCreate?: AtletaCreateOrConnectWithoutEquipeInput | AtletaCreateOrConnectWithoutEquipeInput[]
    createMany?: AtletaCreateManyEquipeInputEnvelope
    connect?: AtletaWhereUniqueInput | AtletaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type AtletaUpdateManyWithoutEquipeNestedInput = {
    create?: XOR<AtletaCreateWithoutEquipeInput, AtletaUncheckedCreateWithoutEquipeInput> | AtletaCreateWithoutEquipeInput[] | AtletaUncheckedCreateWithoutEquipeInput[]
    connectOrCreate?: AtletaCreateOrConnectWithoutEquipeInput | AtletaCreateOrConnectWithoutEquipeInput[]
    upsert?: AtletaUpsertWithWhereUniqueWithoutEquipeInput | AtletaUpsertWithWhereUniqueWithoutEquipeInput[]
    createMany?: AtletaCreateManyEquipeInputEnvelope
    set?: AtletaWhereUniqueInput | AtletaWhereUniqueInput[]
    disconnect?: AtletaWhereUniqueInput | AtletaWhereUniqueInput[]
    delete?: AtletaWhereUniqueInput | AtletaWhereUniqueInput[]
    connect?: AtletaWhereUniqueInput | AtletaWhereUniqueInput[]
    update?: AtletaUpdateWithWhereUniqueWithoutEquipeInput | AtletaUpdateWithWhereUniqueWithoutEquipeInput[]
    updateMany?: AtletaUpdateManyWithWhereWithoutEquipeInput | AtletaUpdateManyWithWhereWithoutEquipeInput[]
    deleteMany?: AtletaScalarWhereInput | AtletaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AtletaUncheckedUpdateManyWithoutEquipeNestedInput = {
    create?: XOR<AtletaCreateWithoutEquipeInput, AtletaUncheckedCreateWithoutEquipeInput> | AtletaCreateWithoutEquipeInput[] | AtletaUncheckedCreateWithoutEquipeInput[]
    connectOrCreate?: AtletaCreateOrConnectWithoutEquipeInput | AtletaCreateOrConnectWithoutEquipeInput[]
    upsert?: AtletaUpsertWithWhereUniqueWithoutEquipeInput | AtletaUpsertWithWhereUniqueWithoutEquipeInput[]
    createMany?: AtletaCreateManyEquipeInputEnvelope
    set?: AtletaWhereUniqueInput | AtletaWhereUniqueInput[]
    disconnect?: AtletaWhereUniqueInput | AtletaWhereUniqueInput[]
    delete?: AtletaWhereUniqueInput | AtletaWhereUniqueInput[]
    connect?: AtletaWhereUniqueInput | AtletaWhereUniqueInput[]
    update?: AtletaUpdateWithWhereUniqueWithoutEquipeInput | AtletaUpdateWithWhereUniqueWithoutEquipeInput[]
    updateMany?: AtletaUpdateManyWithWhereWithoutEquipeInput | AtletaUpdateManyWithWhereWithoutEquipeInput[]
    deleteMany?: AtletaScalarWhereInput | AtletaScalarWhereInput[]
  }

  export type EquipeCreateNestedOneWithoutAtletasInput = {
    create?: XOR<EquipeCreateWithoutAtletasInput, EquipeUncheckedCreateWithoutAtletasInput>
    connectOrCreate?: EquipeCreateOrConnectWithoutAtletasInput
    connect?: EquipeWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EquipeUpdateOneWithoutAtletasNestedInput = {
    create?: XOR<EquipeCreateWithoutAtletasInput, EquipeUncheckedCreateWithoutAtletasInput>
    connectOrCreate?: EquipeCreateOrConnectWithoutAtletasInput
    upsert?: EquipeUpsertWithoutAtletasInput
    disconnect?: EquipeWhereInput | boolean
    delete?: EquipeWhereInput | boolean
    connect?: EquipeWhereUniqueInput
    update?: XOR<XOR<EquipeUpdateToOneWithWhereWithoutAtletasInput, EquipeUpdateWithoutAtletasInput>, EquipeUncheckedUpdateWithoutAtletasInput>
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

  export type AtletaCreateWithoutEquipeInput = {
    nome: string
    genero: string
    nivel?: string | null
  }

  export type AtletaUncheckedCreateWithoutEquipeInput = {
    id?: number
    nome: string
    genero: string
    nivel?: string | null
  }

  export type AtletaCreateOrConnectWithoutEquipeInput = {
    where: AtletaWhereUniqueInput
    create: XOR<AtletaCreateWithoutEquipeInput, AtletaUncheckedCreateWithoutEquipeInput>
  }

  export type AtletaCreateManyEquipeInputEnvelope = {
    data: AtletaCreateManyEquipeInput | AtletaCreateManyEquipeInput[]
    skipDuplicates?: boolean
  }

  export type AtletaUpsertWithWhereUniqueWithoutEquipeInput = {
    where: AtletaWhereUniqueInput
    update: XOR<AtletaUpdateWithoutEquipeInput, AtletaUncheckedUpdateWithoutEquipeInput>
    create: XOR<AtletaCreateWithoutEquipeInput, AtletaUncheckedCreateWithoutEquipeInput>
  }

  export type AtletaUpdateWithWhereUniqueWithoutEquipeInput = {
    where: AtletaWhereUniqueInput
    data: XOR<AtletaUpdateWithoutEquipeInput, AtletaUncheckedUpdateWithoutEquipeInput>
  }

  export type AtletaUpdateManyWithWhereWithoutEquipeInput = {
    where: AtletaScalarWhereInput
    data: XOR<AtletaUpdateManyMutationInput, AtletaUncheckedUpdateManyWithoutEquipeInput>
  }

  export type AtletaScalarWhereInput = {
    AND?: AtletaScalarWhereInput | AtletaScalarWhereInput[]
    OR?: AtletaScalarWhereInput[]
    NOT?: AtletaScalarWhereInput | AtletaScalarWhereInput[]
    id?: IntFilter<"Atleta"> | number
    nome?: StringFilter<"Atleta"> | string
    genero?: StringFilter<"Atleta"> | string
    nivel?: StringNullableFilter<"Atleta"> | string | null
    equipeId?: IntNullableFilter<"Atleta"> | number | null
  }

  export type EquipeCreateWithoutAtletasInput = {
    nome: string
    tipo: string
  }

  export type EquipeUncheckedCreateWithoutAtletasInput = {
    id?: number
    nome: string
    tipo: string
  }

  export type EquipeCreateOrConnectWithoutAtletasInput = {
    where: EquipeWhereUniqueInput
    create: XOR<EquipeCreateWithoutAtletasInput, EquipeUncheckedCreateWithoutAtletasInput>
  }

  export type EquipeUpsertWithoutAtletasInput = {
    update: XOR<EquipeUpdateWithoutAtletasInput, EquipeUncheckedUpdateWithoutAtletasInput>
    create: XOR<EquipeCreateWithoutAtletasInput, EquipeUncheckedCreateWithoutAtletasInput>
    where?: EquipeWhereInput
  }

  export type EquipeUpdateToOneWithWhereWithoutAtletasInput = {
    where?: EquipeWhereInput
    data: XOR<EquipeUpdateWithoutAtletasInput, EquipeUncheckedUpdateWithoutAtletasInput>
  }

  export type EquipeUpdateWithoutAtletasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type EquipeUncheckedUpdateWithoutAtletasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type AtletaCreateManyEquipeInput = {
    id?: number
    nome: string
    genero: string
    nivel?: string | null
  }

  export type AtletaUpdateWithoutEquipeInput = {
    nome?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    nivel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AtletaUncheckedUpdateWithoutEquipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    nivel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AtletaUncheckedUpdateManyWithoutEquipeInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    nivel?: NullableStringFieldUpdateOperationsInput | string | null
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