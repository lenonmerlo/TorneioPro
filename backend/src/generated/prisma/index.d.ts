
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
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Treinador
 * 
 */
export type Treinador = $Result.DefaultSelection<Prisma.$TreinadorPayload>
/**
 * Model Atleta
 * 
 */
export type Atleta = $Result.DefaultSelection<Prisma.$AtletaPayload>
/**
 * Model Torneio
 * 
 */
export type Torneio = $Result.DefaultSelection<Prisma.$TorneioPayload>
/**
 * Model ParticipacaoAmador
 * 
 */
export type ParticipacaoAmador = $Result.DefaultSelection<Prisma.$ParticipacaoAmadorPayload>
/**
 * Model EquipeAmador
 * 
 */
export type EquipeAmador = $Result.DefaultSelection<Prisma.$EquipeAmadorPayload>
/**
 * Model EquipeOficial
 * 
 */
export type EquipeOficial = $Result.DefaultSelection<Prisma.$EquipeOficialPayload>
/**
 * Model AtletaEquipeOficial
 * 
 */
export type AtletaEquipeOficial = $Result.DefaultSelection<Prisma.$AtletaEquipeOficialPayload>
/**
 * Model Partida
 * 
 */
export type Partida = $Result.DefaultSelection<Prisma.$PartidaPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const StatusTorneio: {
  aberto: 'aberto',
  fechado: 'fechado',
  encerrado: 'encerrado'
};

export type StatusTorneio = (typeof StatusTorneio)[keyof typeof StatusTorneio]


export const TipoTorneio: {
  amador: 'amador',
  oficial: 'oficial'
};

export type TipoTorneio = (typeof TipoTorneio)[keyof typeof TipoTorneio]

}

export type StatusTorneio = $Enums.StatusTorneio

export const StatusTorneio: typeof $Enums.StatusTorneio

export type TipoTorneio = $Enums.TipoTorneio

export const TipoTorneio: typeof $Enums.TipoTorneio

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
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
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
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
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.treinador`: Exposes CRUD operations for the **Treinador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Treinadors
    * const treinadors = await prisma.treinador.findMany()
    * ```
    */
  get treinador(): Prisma.TreinadorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.atleta`: Exposes CRUD operations for the **Atleta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Atletas
    * const atletas = await prisma.atleta.findMany()
    * ```
    */
  get atleta(): Prisma.AtletaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.torneio`: Exposes CRUD operations for the **Torneio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Torneios
    * const torneios = await prisma.torneio.findMany()
    * ```
    */
  get torneio(): Prisma.TorneioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.participacaoAmador`: Exposes CRUD operations for the **ParticipacaoAmador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ParticipacaoAmadors
    * const participacaoAmadors = await prisma.participacaoAmador.findMany()
    * ```
    */
  get participacaoAmador(): Prisma.ParticipacaoAmadorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipeAmador`: Exposes CRUD operations for the **EquipeAmador** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EquipeAmadors
    * const equipeAmadors = await prisma.equipeAmador.findMany()
    * ```
    */
  get equipeAmador(): Prisma.EquipeAmadorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.equipeOficial`: Exposes CRUD operations for the **EquipeOficial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EquipeOficials
    * const equipeOficials = await prisma.equipeOficial.findMany()
    * ```
    */
  get equipeOficial(): Prisma.EquipeOficialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.atletaEquipeOficial`: Exposes CRUD operations for the **AtletaEquipeOficial** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AtletaEquipeOficials
    * const atletaEquipeOficials = await prisma.atletaEquipeOficial.findMany()
    * ```
    */
  get atletaEquipeOficial(): Prisma.AtletaEquipeOficialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.partida`: Exposes CRUD operations for the **Partida** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Partidas
    * const partidas = await prisma.partida.findMany()
    * ```
    */
  get partida(): Prisma.PartidaDelegate<ExtArgs, ClientOptions>;
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
    Usuario: 'Usuario',
    Treinador: 'Treinador',
    Atleta: 'Atleta',
    Torneio: 'Torneio',
    ParticipacaoAmador: 'ParticipacaoAmador',
    EquipeAmador: 'EquipeAmador',
    EquipeOficial: 'EquipeOficial',
    AtletaEquipeOficial: 'AtletaEquipeOficial',
    Partida: 'Partida'
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
      modelProps: "usuario" | "treinador" | "atleta" | "torneio" | "participacaoAmador" | "equipeAmador" | "equipeOficial" | "atletaEquipeOficial" | "partida"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Treinador: {
        payload: Prisma.$TreinadorPayload<ExtArgs>
        fields: Prisma.TreinadorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TreinadorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinadorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TreinadorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinadorPayload>
          }
          findFirst: {
            args: Prisma.TreinadorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinadorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TreinadorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinadorPayload>
          }
          findMany: {
            args: Prisma.TreinadorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinadorPayload>[]
          }
          create: {
            args: Prisma.TreinadorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinadorPayload>
          }
          createMany: {
            args: Prisma.TreinadorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TreinadorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinadorPayload>[]
          }
          delete: {
            args: Prisma.TreinadorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinadorPayload>
          }
          update: {
            args: Prisma.TreinadorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinadorPayload>
          }
          deleteMany: {
            args: Prisma.TreinadorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TreinadorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TreinadorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinadorPayload>[]
          }
          upsert: {
            args: Prisma.TreinadorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TreinadorPayload>
          }
          aggregate: {
            args: Prisma.TreinadorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTreinador>
          }
          groupBy: {
            args: Prisma.TreinadorGroupByArgs<ExtArgs>
            result: $Utils.Optional<TreinadorGroupByOutputType>[]
          }
          count: {
            args: Prisma.TreinadorCountArgs<ExtArgs>
            result: $Utils.Optional<TreinadorCountAggregateOutputType> | number
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
      Torneio: {
        payload: Prisma.$TorneioPayload<ExtArgs>
        fields: Prisma.TorneioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TorneioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TorneioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TorneioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TorneioPayload>
          }
          findFirst: {
            args: Prisma.TorneioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TorneioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TorneioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TorneioPayload>
          }
          findMany: {
            args: Prisma.TorneioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TorneioPayload>[]
          }
          create: {
            args: Prisma.TorneioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TorneioPayload>
          }
          createMany: {
            args: Prisma.TorneioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TorneioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TorneioPayload>[]
          }
          delete: {
            args: Prisma.TorneioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TorneioPayload>
          }
          update: {
            args: Prisma.TorneioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TorneioPayload>
          }
          deleteMany: {
            args: Prisma.TorneioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TorneioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TorneioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TorneioPayload>[]
          }
          upsert: {
            args: Prisma.TorneioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TorneioPayload>
          }
          aggregate: {
            args: Prisma.TorneioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTorneio>
          }
          groupBy: {
            args: Prisma.TorneioGroupByArgs<ExtArgs>
            result: $Utils.Optional<TorneioGroupByOutputType>[]
          }
          count: {
            args: Prisma.TorneioCountArgs<ExtArgs>
            result: $Utils.Optional<TorneioCountAggregateOutputType> | number
          }
        }
      }
      ParticipacaoAmador: {
        payload: Prisma.$ParticipacaoAmadorPayload<ExtArgs>
        fields: Prisma.ParticipacaoAmadorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipacaoAmadorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoAmadorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipacaoAmadorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoAmadorPayload>
          }
          findFirst: {
            args: Prisma.ParticipacaoAmadorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoAmadorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipacaoAmadorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoAmadorPayload>
          }
          findMany: {
            args: Prisma.ParticipacaoAmadorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoAmadorPayload>[]
          }
          create: {
            args: Prisma.ParticipacaoAmadorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoAmadorPayload>
          }
          createMany: {
            args: Prisma.ParticipacaoAmadorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipacaoAmadorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoAmadorPayload>[]
          }
          delete: {
            args: Prisma.ParticipacaoAmadorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoAmadorPayload>
          }
          update: {
            args: Prisma.ParticipacaoAmadorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoAmadorPayload>
          }
          deleteMany: {
            args: Prisma.ParticipacaoAmadorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipacaoAmadorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipacaoAmadorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoAmadorPayload>[]
          }
          upsert: {
            args: Prisma.ParticipacaoAmadorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoAmadorPayload>
          }
          aggregate: {
            args: Prisma.ParticipacaoAmadorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipacaoAmador>
          }
          groupBy: {
            args: Prisma.ParticipacaoAmadorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipacaoAmadorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipacaoAmadorCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipacaoAmadorCountAggregateOutputType> | number
          }
        }
      }
      EquipeAmador: {
        payload: Prisma.$EquipeAmadorPayload<ExtArgs>
        fields: Prisma.EquipeAmadorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipeAmadorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipeAmadorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipeAmadorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipeAmadorPayload>
          }
          findFirst: {
            args: Prisma.EquipeAmadorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipeAmadorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipeAmadorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipeAmadorPayload>
          }
          findMany: {
            args: Prisma.EquipeAmadorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipeAmadorPayload>[]
          }
          create: {
            args: Prisma.EquipeAmadorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipeAmadorPayload>
          }
          createMany: {
            args: Prisma.EquipeAmadorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipeAmadorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipeAmadorPayload>[]
          }
          delete: {
            args: Prisma.EquipeAmadorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipeAmadorPayload>
          }
          update: {
            args: Prisma.EquipeAmadorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipeAmadorPayload>
          }
          deleteMany: {
            args: Prisma.EquipeAmadorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipeAmadorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipeAmadorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipeAmadorPayload>[]
          }
          upsert: {
            args: Prisma.EquipeAmadorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipeAmadorPayload>
          }
          aggregate: {
            args: Prisma.EquipeAmadorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipeAmador>
          }
          groupBy: {
            args: Prisma.EquipeAmadorGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipeAmadorGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipeAmadorCountArgs<ExtArgs>
            result: $Utils.Optional<EquipeAmadorCountAggregateOutputType> | number
          }
        }
      }
      EquipeOficial: {
        payload: Prisma.$EquipeOficialPayload<ExtArgs>
        fields: Prisma.EquipeOficialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipeOficialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipeOficialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipeOficialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipeOficialPayload>
          }
          findFirst: {
            args: Prisma.EquipeOficialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipeOficialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipeOficialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipeOficialPayload>
          }
          findMany: {
            args: Prisma.EquipeOficialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipeOficialPayload>[]
          }
          create: {
            args: Prisma.EquipeOficialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipeOficialPayload>
          }
          createMany: {
            args: Prisma.EquipeOficialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipeOficialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipeOficialPayload>[]
          }
          delete: {
            args: Prisma.EquipeOficialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipeOficialPayload>
          }
          update: {
            args: Prisma.EquipeOficialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipeOficialPayload>
          }
          deleteMany: {
            args: Prisma.EquipeOficialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipeOficialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipeOficialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipeOficialPayload>[]
          }
          upsert: {
            args: Prisma.EquipeOficialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipeOficialPayload>
          }
          aggregate: {
            args: Prisma.EquipeOficialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipeOficial>
          }
          groupBy: {
            args: Prisma.EquipeOficialGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipeOficialGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipeOficialCountArgs<ExtArgs>
            result: $Utils.Optional<EquipeOficialCountAggregateOutputType> | number
          }
        }
      }
      AtletaEquipeOficial: {
        payload: Prisma.$AtletaEquipeOficialPayload<ExtArgs>
        fields: Prisma.AtletaEquipeOficialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtletaEquipeOficialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtletaEquipeOficialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtletaEquipeOficialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtletaEquipeOficialPayload>
          }
          findFirst: {
            args: Prisma.AtletaEquipeOficialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtletaEquipeOficialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtletaEquipeOficialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtletaEquipeOficialPayload>
          }
          findMany: {
            args: Prisma.AtletaEquipeOficialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtletaEquipeOficialPayload>[]
          }
          create: {
            args: Prisma.AtletaEquipeOficialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtletaEquipeOficialPayload>
          }
          createMany: {
            args: Prisma.AtletaEquipeOficialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AtletaEquipeOficialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtletaEquipeOficialPayload>[]
          }
          delete: {
            args: Prisma.AtletaEquipeOficialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtletaEquipeOficialPayload>
          }
          update: {
            args: Prisma.AtletaEquipeOficialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtletaEquipeOficialPayload>
          }
          deleteMany: {
            args: Prisma.AtletaEquipeOficialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AtletaEquipeOficialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AtletaEquipeOficialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtletaEquipeOficialPayload>[]
          }
          upsert: {
            args: Prisma.AtletaEquipeOficialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtletaEquipeOficialPayload>
          }
          aggregate: {
            args: Prisma.AtletaEquipeOficialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtletaEquipeOficial>
          }
          groupBy: {
            args: Prisma.AtletaEquipeOficialGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtletaEquipeOficialGroupByOutputType>[]
          }
          count: {
            args: Prisma.AtletaEquipeOficialCountArgs<ExtArgs>
            result: $Utils.Optional<AtletaEquipeOficialCountAggregateOutputType> | number
          }
        }
      }
      Partida: {
        payload: Prisma.$PartidaPayload<ExtArgs>
        fields: Prisma.PartidaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartidaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartidaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload>
          }
          findFirst: {
            args: Prisma.PartidaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartidaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload>
          }
          findMany: {
            args: Prisma.PartidaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload>[]
          }
          create: {
            args: Prisma.PartidaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload>
          }
          createMany: {
            args: Prisma.PartidaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartidaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload>[]
          }
          delete: {
            args: Prisma.PartidaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload>
          }
          update: {
            args: Prisma.PartidaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload>
          }
          deleteMany: {
            args: Prisma.PartidaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartidaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PartidaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload>[]
          }
          upsert: {
            args: Prisma.PartidaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartidaPayload>
          }
          aggregate: {
            args: Prisma.PartidaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartida>
          }
          groupBy: {
            args: Prisma.PartidaGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartidaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartidaCountArgs<ExtArgs>
            result: $Utils.Optional<PartidaCountAggregateOutputType> | number
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
    usuario?: UsuarioOmit
    treinador?: TreinadorOmit
    atleta?: AtletaOmit
    torneio?: TorneioOmit
    participacaoAmador?: ParticipacaoAmadorOmit
    equipeAmador?: EquipeAmadorOmit
    equipeOficial?: EquipeOficialOmit
    atletaEquipeOficial?: AtletaEquipeOficialOmit
    partida?: PartidaOmit
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
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    Torneio: number
    Treinador: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Torneio?: boolean | UsuarioCountOutputTypeCountTorneioArgs
    Treinador?: boolean | UsuarioCountOutputTypeCountTreinadorArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountTorneioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TorneioWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountTreinadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreinadorWhereInput
  }


  /**
   * Count Type AtletaCountOutputType
   */

  export type AtletaCountOutputType = {
    participacoesAmador: number
    equipesOficiais: number
    EquipeAmador: number
  }

  export type AtletaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participacoesAmador?: boolean | AtletaCountOutputTypeCountParticipacoesAmadorArgs
    equipesOficiais?: boolean | AtletaCountOutputTypeCountEquipesOficiaisArgs
    EquipeAmador?: boolean | AtletaCountOutputTypeCountEquipeAmadorArgs
  }

  // Custom InputTypes
  /**
   * AtletaCountOutputType without action
   */
  export type AtletaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtletaCountOutputType
     */
    select?: AtletaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AtletaCountOutputType without action
   */
  export type AtletaCountOutputTypeCountParticipacoesAmadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipacaoAmadorWhereInput
  }

  /**
   * AtletaCountOutputType without action
   */
  export type AtletaCountOutputTypeCountEquipesOficiaisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtletaEquipeOficialWhereInput
  }

  /**
   * AtletaCountOutputType without action
   */
  export type AtletaCountOutputTypeCountEquipeAmadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipeAmadorWhereInput
  }


  /**
   * Count Type TorneioCountOutputType
   */

  export type TorneioCountOutputType = {
    Partida: number
    equipesAmador: number
    equipesOficial: number
    ParticipacaoAmador: number
  }

  export type TorneioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Partida?: boolean | TorneioCountOutputTypeCountPartidaArgs
    equipesAmador?: boolean | TorneioCountOutputTypeCountEquipesAmadorArgs
    equipesOficial?: boolean | TorneioCountOutputTypeCountEquipesOficialArgs
    ParticipacaoAmador?: boolean | TorneioCountOutputTypeCountParticipacaoAmadorArgs
  }

  // Custom InputTypes
  /**
   * TorneioCountOutputType without action
   */
  export type TorneioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TorneioCountOutputType
     */
    select?: TorneioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TorneioCountOutputType without action
   */
  export type TorneioCountOutputTypeCountPartidaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartidaWhereInput
  }

  /**
   * TorneioCountOutputType without action
   */
  export type TorneioCountOutputTypeCountEquipesAmadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipeAmadorWhereInput
  }

  /**
   * TorneioCountOutputType without action
   */
  export type TorneioCountOutputTypeCountEquipesOficialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipeOficialWhereInput
  }

  /**
   * TorneioCountOutputType without action
   */
  export type TorneioCountOutputTypeCountParticipacaoAmadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipacaoAmadorWhereInput
  }


  /**
   * Count Type EquipeAmadorCountOutputType
   */

  export type EquipeAmadorCountOutputType = {
    membros: number
    partidasComoEquipe1: number
    partidasComoEquipe2: number
  }

  export type EquipeAmadorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membros?: boolean | EquipeAmadorCountOutputTypeCountMembrosArgs
    partidasComoEquipe1?: boolean | EquipeAmadorCountOutputTypeCountPartidasComoEquipe1Args
    partidasComoEquipe2?: boolean | EquipeAmadorCountOutputTypeCountPartidasComoEquipe2Args
  }

  // Custom InputTypes
  /**
   * EquipeAmadorCountOutputType without action
   */
  export type EquipeAmadorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeAmadorCountOutputType
     */
    select?: EquipeAmadorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EquipeAmadorCountOutputType without action
   */
  export type EquipeAmadorCountOutputTypeCountMembrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtletaWhereInput
  }

  /**
   * EquipeAmadorCountOutputType without action
   */
  export type EquipeAmadorCountOutputTypeCountPartidasComoEquipe1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartidaWhereInput
  }

  /**
   * EquipeAmadorCountOutputType without action
   */
  export type EquipeAmadorCountOutputTypeCountPartidasComoEquipe2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartidaWhereInput
  }


  /**
   * Count Type EquipeOficialCountOutputType
   */

  export type EquipeOficialCountOutputType = {
    membros: number
    partidasComoEquipeOficial1: number
    partidasComoEquipeOficial2: number
  }

  export type EquipeOficialCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    membros?: boolean | EquipeOficialCountOutputTypeCountMembrosArgs
    partidasComoEquipeOficial1?: boolean | EquipeOficialCountOutputTypeCountPartidasComoEquipeOficial1Args
    partidasComoEquipeOficial2?: boolean | EquipeOficialCountOutputTypeCountPartidasComoEquipeOficial2Args
  }

  // Custom InputTypes
  /**
   * EquipeOficialCountOutputType without action
   */
  export type EquipeOficialCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeOficialCountOutputType
     */
    select?: EquipeOficialCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EquipeOficialCountOutputType without action
   */
  export type EquipeOficialCountOutputTypeCountMembrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtletaEquipeOficialWhereInput
  }

  /**
   * EquipeOficialCountOutputType without action
   */
  export type EquipeOficialCountOutputTypeCountPartidasComoEquipeOficial1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartidaWhereInput
  }

  /**
   * EquipeOficialCountOutputType without action
   */
  export type EquipeOficialCountOutputTypeCountPartidasComoEquipeOficial2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartidaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    perfil: string | null
    criadoEm: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    senha: string | null
    perfil: string | null
    criadoEm: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    senha: number
    perfil: number
    criadoEm: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    perfil?: true
    criadoEm?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    perfil?: true
    criadoEm?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    senha?: true
    perfil?: true
    criadoEm?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    email: string
    senha: string
    perfil: string
    criadoEm: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    perfil?: boolean
    criadoEm?: boolean
    Torneio?: boolean | Usuario$TorneioArgs<ExtArgs>
    atleta?: boolean | Usuario$atletaArgs<ExtArgs>
    Treinador?: boolean | Usuario$TreinadorArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    perfil?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    perfil?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    senha?: boolean
    perfil?: boolean
    criadoEm?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "senha" | "perfil" | "criadoEm", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Torneio?: boolean | Usuario$TorneioArgs<ExtArgs>
    atleta?: boolean | Usuario$atletaArgs<ExtArgs>
    Treinador?: boolean | Usuario$TreinadorArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      Torneio: Prisma.$TorneioPayload<ExtArgs>[]
      atleta: Prisma.$AtletaPayload<ExtArgs> | null
      Treinador: Prisma.$TreinadorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      senha: string
      perfil: string
      criadoEm: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
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
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
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
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Torneio<T extends Usuario$TorneioArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$TorneioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TorneioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    atleta<T extends Usuario$atletaArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$atletaArgs<ExtArgs>>): Prisma__AtletaClient<$Result.GetResult<Prisma.$AtletaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Treinador<T extends Usuario$TreinadorArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$TreinadorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreinadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly perfil: FieldRef<"Usuario", 'String'>
    readonly criadoEm: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.Torneio
   */
  export type Usuario$TorneioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneio
     */
    select?: TorneioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Torneio
     */
    omit?: TorneioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TorneioInclude<ExtArgs> | null
    where?: TorneioWhereInput
    orderBy?: TorneioOrderByWithRelationInput | TorneioOrderByWithRelationInput[]
    cursor?: TorneioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TorneioScalarFieldEnum | TorneioScalarFieldEnum[]
  }

  /**
   * Usuario.atleta
   */
  export type Usuario$atletaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  /**
   * Usuario.Treinador
   */
  export type Usuario$TreinadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treinador
     */
    select?: TreinadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treinador
     */
    omit?: TreinadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinadorInclude<ExtArgs> | null
    where?: TreinadorWhereInput
    orderBy?: TreinadorOrderByWithRelationInput | TreinadorOrderByWithRelationInput[]
    cursor?: TreinadorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TreinadorScalarFieldEnum | TreinadorScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Treinador
   */

  export type AggregateTreinador = {
    _count: TreinadorCountAggregateOutputType | null
    _avg: TreinadorAvgAggregateOutputType | null
    _sum: TreinadorSumAggregateOutputType | null
    _min: TreinadorMinAggregateOutputType | null
    _max: TreinadorMaxAggregateOutputType | null
  }

  export type TreinadorAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type TreinadorSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type TreinadorMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    usuarioId: number | null
  }

  export type TreinadorMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    usuarioId: number | null
  }

  export type TreinadorCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    usuarioId: number
    _all: number
  }


  export type TreinadorAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type TreinadorSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type TreinadorMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    usuarioId?: true
  }

  export type TreinadorMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    usuarioId?: true
  }

  export type TreinadorCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    usuarioId?: true
    _all?: true
  }

  export type TreinadorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Treinador to aggregate.
     */
    where?: TreinadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Treinadors to fetch.
     */
    orderBy?: TreinadorOrderByWithRelationInput | TreinadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TreinadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Treinadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Treinadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Treinadors
    **/
    _count?: true | TreinadorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TreinadorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TreinadorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TreinadorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TreinadorMaxAggregateInputType
  }

  export type GetTreinadorAggregateType<T extends TreinadorAggregateArgs> = {
        [P in keyof T & keyof AggregateTreinador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTreinador[P]>
      : GetScalarType<T[P], AggregateTreinador[P]>
  }




  export type TreinadorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TreinadorWhereInput
    orderBy?: TreinadorOrderByWithAggregationInput | TreinadorOrderByWithAggregationInput[]
    by: TreinadorScalarFieldEnum[] | TreinadorScalarFieldEnum
    having?: TreinadorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TreinadorCountAggregateInputType | true
    _avg?: TreinadorAvgAggregateInputType
    _sum?: TreinadorSumAggregateInputType
    _min?: TreinadorMinAggregateInputType
    _max?: TreinadorMaxAggregateInputType
  }

  export type TreinadorGroupByOutputType = {
    id: number
    nome: string
    email: string
    usuarioId: number
    _count: TreinadorCountAggregateOutputType | null
    _avg: TreinadorAvgAggregateOutputType | null
    _sum: TreinadorSumAggregateOutputType | null
    _min: TreinadorMinAggregateOutputType | null
    _max: TreinadorMaxAggregateOutputType | null
  }

  type GetTreinadorGroupByPayload<T extends TreinadorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TreinadorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TreinadorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TreinadorGroupByOutputType[P]>
            : GetScalarType<T[P], TreinadorGroupByOutputType[P]>
        }
      >
    >


  export type TreinadorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treinador"]>

  export type TreinadorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treinador"]>

  export type TreinadorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["treinador"]>

  export type TreinadorSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    usuarioId?: boolean
  }

  export type TreinadorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "usuarioId", ExtArgs["result"]["treinador"]>
  export type TreinadorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type TreinadorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type TreinadorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $TreinadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Treinador"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      usuarioId: number
    }, ExtArgs["result"]["treinador"]>
    composites: {}
  }

  type TreinadorGetPayload<S extends boolean | null | undefined | TreinadorDefaultArgs> = $Result.GetResult<Prisma.$TreinadorPayload, S>

  type TreinadorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TreinadorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TreinadorCountAggregateInputType | true
    }

  export interface TreinadorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Treinador'], meta: { name: 'Treinador' } }
    /**
     * Find zero or one Treinador that matches the filter.
     * @param {TreinadorFindUniqueArgs} args - Arguments to find a Treinador
     * @example
     * // Get one Treinador
     * const treinador = await prisma.treinador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TreinadorFindUniqueArgs>(args: SelectSubset<T, TreinadorFindUniqueArgs<ExtArgs>>): Prisma__TreinadorClient<$Result.GetResult<Prisma.$TreinadorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Treinador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TreinadorFindUniqueOrThrowArgs} args - Arguments to find a Treinador
     * @example
     * // Get one Treinador
     * const treinador = await prisma.treinador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TreinadorFindUniqueOrThrowArgs>(args: SelectSubset<T, TreinadorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TreinadorClient<$Result.GetResult<Prisma.$TreinadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Treinador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreinadorFindFirstArgs} args - Arguments to find a Treinador
     * @example
     * // Get one Treinador
     * const treinador = await prisma.treinador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TreinadorFindFirstArgs>(args?: SelectSubset<T, TreinadorFindFirstArgs<ExtArgs>>): Prisma__TreinadorClient<$Result.GetResult<Prisma.$TreinadorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Treinador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreinadorFindFirstOrThrowArgs} args - Arguments to find a Treinador
     * @example
     * // Get one Treinador
     * const treinador = await prisma.treinador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TreinadorFindFirstOrThrowArgs>(args?: SelectSubset<T, TreinadorFindFirstOrThrowArgs<ExtArgs>>): Prisma__TreinadorClient<$Result.GetResult<Prisma.$TreinadorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Treinadors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreinadorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Treinadors
     * const treinadors = await prisma.treinador.findMany()
     * 
     * // Get first 10 Treinadors
     * const treinadors = await prisma.treinador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const treinadorWithIdOnly = await prisma.treinador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TreinadorFindManyArgs>(args?: SelectSubset<T, TreinadorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreinadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Treinador.
     * @param {TreinadorCreateArgs} args - Arguments to create a Treinador.
     * @example
     * // Create one Treinador
     * const Treinador = await prisma.treinador.create({
     *   data: {
     *     // ... data to create a Treinador
     *   }
     * })
     * 
     */
    create<T extends TreinadorCreateArgs>(args: SelectSubset<T, TreinadorCreateArgs<ExtArgs>>): Prisma__TreinadorClient<$Result.GetResult<Prisma.$TreinadorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Treinadors.
     * @param {TreinadorCreateManyArgs} args - Arguments to create many Treinadors.
     * @example
     * // Create many Treinadors
     * const treinador = await prisma.treinador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TreinadorCreateManyArgs>(args?: SelectSubset<T, TreinadorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Treinadors and returns the data saved in the database.
     * @param {TreinadorCreateManyAndReturnArgs} args - Arguments to create many Treinadors.
     * @example
     * // Create many Treinadors
     * const treinador = await prisma.treinador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Treinadors and only return the `id`
     * const treinadorWithIdOnly = await prisma.treinador.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TreinadorCreateManyAndReturnArgs>(args?: SelectSubset<T, TreinadorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreinadorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Treinador.
     * @param {TreinadorDeleteArgs} args - Arguments to delete one Treinador.
     * @example
     * // Delete one Treinador
     * const Treinador = await prisma.treinador.delete({
     *   where: {
     *     // ... filter to delete one Treinador
     *   }
     * })
     * 
     */
    delete<T extends TreinadorDeleteArgs>(args: SelectSubset<T, TreinadorDeleteArgs<ExtArgs>>): Prisma__TreinadorClient<$Result.GetResult<Prisma.$TreinadorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Treinador.
     * @param {TreinadorUpdateArgs} args - Arguments to update one Treinador.
     * @example
     * // Update one Treinador
     * const treinador = await prisma.treinador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TreinadorUpdateArgs>(args: SelectSubset<T, TreinadorUpdateArgs<ExtArgs>>): Prisma__TreinadorClient<$Result.GetResult<Prisma.$TreinadorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Treinadors.
     * @param {TreinadorDeleteManyArgs} args - Arguments to filter Treinadors to delete.
     * @example
     * // Delete a few Treinadors
     * const { count } = await prisma.treinador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TreinadorDeleteManyArgs>(args?: SelectSubset<T, TreinadorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Treinadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreinadorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Treinadors
     * const treinador = await prisma.treinador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TreinadorUpdateManyArgs>(args: SelectSubset<T, TreinadorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Treinadors and returns the data updated in the database.
     * @param {TreinadorUpdateManyAndReturnArgs} args - Arguments to update many Treinadors.
     * @example
     * // Update many Treinadors
     * const treinador = await prisma.treinador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Treinadors and only return the `id`
     * const treinadorWithIdOnly = await prisma.treinador.updateManyAndReturn({
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
    updateManyAndReturn<T extends TreinadorUpdateManyAndReturnArgs>(args: SelectSubset<T, TreinadorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TreinadorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Treinador.
     * @param {TreinadorUpsertArgs} args - Arguments to update or create a Treinador.
     * @example
     * // Update or create a Treinador
     * const treinador = await prisma.treinador.upsert({
     *   create: {
     *     // ... data to create a Treinador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Treinador we want to update
     *   }
     * })
     */
    upsert<T extends TreinadorUpsertArgs>(args: SelectSubset<T, TreinadorUpsertArgs<ExtArgs>>): Prisma__TreinadorClient<$Result.GetResult<Prisma.$TreinadorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Treinadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreinadorCountArgs} args - Arguments to filter Treinadors to count.
     * @example
     * // Count the number of Treinadors
     * const count = await prisma.treinador.count({
     *   where: {
     *     // ... the filter for the Treinadors we want to count
     *   }
     * })
    **/
    count<T extends TreinadorCountArgs>(
      args?: Subset<T, TreinadorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TreinadorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Treinador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreinadorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TreinadorAggregateArgs>(args: Subset<T, TreinadorAggregateArgs>): Prisma.PrismaPromise<GetTreinadorAggregateType<T>>

    /**
     * Group by Treinador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TreinadorGroupByArgs} args - Group by arguments.
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
      T extends TreinadorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TreinadorGroupByArgs['orderBy'] }
        : { orderBy?: TreinadorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TreinadorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTreinadorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Treinador model
   */
  readonly fields: TreinadorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Treinador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TreinadorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Treinador model
   */
  interface TreinadorFieldRefs {
    readonly id: FieldRef<"Treinador", 'Int'>
    readonly nome: FieldRef<"Treinador", 'String'>
    readonly email: FieldRef<"Treinador", 'String'>
    readonly usuarioId: FieldRef<"Treinador", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Treinador findUnique
   */
  export type TreinadorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treinador
     */
    select?: TreinadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treinador
     */
    omit?: TreinadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinadorInclude<ExtArgs> | null
    /**
     * Filter, which Treinador to fetch.
     */
    where: TreinadorWhereUniqueInput
  }

  /**
   * Treinador findUniqueOrThrow
   */
  export type TreinadorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treinador
     */
    select?: TreinadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treinador
     */
    omit?: TreinadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinadorInclude<ExtArgs> | null
    /**
     * Filter, which Treinador to fetch.
     */
    where: TreinadorWhereUniqueInput
  }

  /**
   * Treinador findFirst
   */
  export type TreinadorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treinador
     */
    select?: TreinadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treinador
     */
    omit?: TreinadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinadorInclude<ExtArgs> | null
    /**
     * Filter, which Treinador to fetch.
     */
    where?: TreinadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Treinadors to fetch.
     */
    orderBy?: TreinadorOrderByWithRelationInput | TreinadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Treinadors.
     */
    cursor?: TreinadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Treinadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Treinadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Treinadors.
     */
    distinct?: TreinadorScalarFieldEnum | TreinadorScalarFieldEnum[]
  }

  /**
   * Treinador findFirstOrThrow
   */
  export type TreinadorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treinador
     */
    select?: TreinadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treinador
     */
    omit?: TreinadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinadorInclude<ExtArgs> | null
    /**
     * Filter, which Treinador to fetch.
     */
    where?: TreinadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Treinadors to fetch.
     */
    orderBy?: TreinadorOrderByWithRelationInput | TreinadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Treinadors.
     */
    cursor?: TreinadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Treinadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Treinadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Treinadors.
     */
    distinct?: TreinadorScalarFieldEnum | TreinadorScalarFieldEnum[]
  }

  /**
   * Treinador findMany
   */
  export type TreinadorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treinador
     */
    select?: TreinadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treinador
     */
    omit?: TreinadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinadorInclude<ExtArgs> | null
    /**
     * Filter, which Treinadors to fetch.
     */
    where?: TreinadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Treinadors to fetch.
     */
    orderBy?: TreinadorOrderByWithRelationInput | TreinadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Treinadors.
     */
    cursor?: TreinadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Treinadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Treinadors.
     */
    skip?: number
    distinct?: TreinadorScalarFieldEnum | TreinadorScalarFieldEnum[]
  }

  /**
   * Treinador create
   */
  export type TreinadorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treinador
     */
    select?: TreinadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treinador
     */
    omit?: TreinadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinadorInclude<ExtArgs> | null
    /**
     * The data needed to create a Treinador.
     */
    data: XOR<TreinadorCreateInput, TreinadorUncheckedCreateInput>
  }

  /**
   * Treinador createMany
   */
  export type TreinadorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Treinadors.
     */
    data: TreinadorCreateManyInput | TreinadorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Treinador createManyAndReturn
   */
  export type TreinadorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treinador
     */
    select?: TreinadorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Treinador
     */
    omit?: TreinadorOmit<ExtArgs> | null
    /**
     * The data used to create many Treinadors.
     */
    data: TreinadorCreateManyInput | TreinadorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinadorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Treinador update
   */
  export type TreinadorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treinador
     */
    select?: TreinadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treinador
     */
    omit?: TreinadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinadorInclude<ExtArgs> | null
    /**
     * The data needed to update a Treinador.
     */
    data: XOR<TreinadorUpdateInput, TreinadorUncheckedUpdateInput>
    /**
     * Choose, which Treinador to update.
     */
    where: TreinadorWhereUniqueInput
  }

  /**
   * Treinador updateMany
   */
  export type TreinadorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Treinadors.
     */
    data: XOR<TreinadorUpdateManyMutationInput, TreinadorUncheckedUpdateManyInput>
    /**
     * Filter which Treinadors to update
     */
    where?: TreinadorWhereInput
    /**
     * Limit how many Treinadors to update.
     */
    limit?: number
  }

  /**
   * Treinador updateManyAndReturn
   */
  export type TreinadorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treinador
     */
    select?: TreinadorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Treinador
     */
    omit?: TreinadorOmit<ExtArgs> | null
    /**
     * The data used to update Treinadors.
     */
    data: XOR<TreinadorUpdateManyMutationInput, TreinadorUncheckedUpdateManyInput>
    /**
     * Filter which Treinadors to update
     */
    where?: TreinadorWhereInput
    /**
     * Limit how many Treinadors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinadorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Treinador upsert
   */
  export type TreinadorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treinador
     */
    select?: TreinadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treinador
     */
    omit?: TreinadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinadorInclude<ExtArgs> | null
    /**
     * The filter to search for the Treinador to update in case it exists.
     */
    where: TreinadorWhereUniqueInput
    /**
     * In case the Treinador found by the `where` argument doesn't exist, create a new Treinador with this data.
     */
    create: XOR<TreinadorCreateInput, TreinadorUncheckedCreateInput>
    /**
     * In case the Treinador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TreinadorUpdateInput, TreinadorUncheckedUpdateInput>
  }

  /**
   * Treinador delete
   */
  export type TreinadorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treinador
     */
    select?: TreinadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treinador
     */
    omit?: TreinadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinadorInclude<ExtArgs> | null
    /**
     * Filter which Treinador to delete.
     */
    where: TreinadorWhereUniqueInput
  }

  /**
   * Treinador deleteMany
   */
  export type TreinadorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Treinadors to delete
     */
    where?: TreinadorWhereInput
    /**
     * Limit how many Treinadors to delete.
     */
    limit?: number
  }

  /**
   * Treinador without action
   */
  export type TreinadorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Treinador
     */
    select?: TreinadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Treinador
     */
    omit?: TreinadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TreinadorInclude<ExtArgs> | null
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
    usuarioId: number | null
  }

  export type AtletaSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type AtletaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    genero: string | null
    nivel: string | null
    usuarioId: number | null
  }

  export type AtletaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    genero: string | null
    nivel: string | null
    usuarioId: number | null
  }

  export type AtletaCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    genero: number
    nivel: number
    usuarioId: number
    _all: number
  }


  export type AtletaAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type AtletaSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type AtletaMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    genero?: true
    nivel?: true
    usuarioId?: true
  }

  export type AtletaMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    genero?: true
    nivel?: true
    usuarioId?: true
  }

  export type AtletaCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    genero?: true
    nivel?: true
    usuarioId?: true
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
    email: string
    genero: string
    nivel: string | null
    usuarioId: number | null
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
    email?: boolean
    genero?: boolean
    nivel?: boolean
    usuarioId?: boolean
    usuario?: boolean | Atleta$usuarioArgs<ExtArgs>
    participacoesAmador?: boolean | Atleta$participacoesAmadorArgs<ExtArgs>
    equipesOficiais?: boolean | Atleta$equipesOficiaisArgs<ExtArgs>
    EquipeAmador?: boolean | Atleta$EquipeAmadorArgs<ExtArgs>
    _count?: boolean | AtletaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atleta"]>

  export type AtletaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    genero?: boolean
    nivel?: boolean
    usuarioId?: boolean
    usuario?: boolean | Atleta$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["atleta"]>

  export type AtletaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    genero?: boolean
    nivel?: boolean
    usuarioId?: boolean
    usuario?: boolean | Atleta$usuarioArgs<ExtArgs>
  }, ExtArgs["result"]["atleta"]>

  export type AtletaSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    genero?: boolean
    nivel?: boolean
    usuarioId?: boolean
  }

  export type AtletaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "genero" | "nivel" | "usuarioId", ExtArgs["result"]["atleta"]>
  export type AtletaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Atleta$usuarioArgs<ExtArgs>
    participacoesAmador?: boolean | Atleta$participacoesAmadorArgs<ExtArgs>
    equipesOficiais?: boolean | Atleta$equipesOficiaisArgs<ExtArgs>
    EquipeAmador?: boolean | Atleta$EquipeAmadorArgs<ExtArgs>
    _count?: boolean | AtletaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AtletaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Atleta$usuarioArgs<ExtArgs>
  }
  export type AtletaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | Atleta$usuarioArgs<ExtArgs>
  }

  export type $AtletaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Atleta"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs> | null
      participacoesAmador: Prisma.$ParticipacaoAmadorPayload<ExtArgs>[]
      equipesOficiais: Prisma.$AtletaEquipeOficialPayload<ExtArgs>[]
      EquipeAmador: Prisma.$EquipeAmadorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      genero: string
      nivel: string | null
      usuarioId: number | null
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
    usuario<T extends Atleta$usuarioArgs<ExtArgs> = {}>(args?: Subset<T, Atleta$usuarioArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    participacoesAmador<T extends Atleta$participacoesAmadorArgs<ExtArgs> = {}>(args?: Subset<T, Atleta$participacoesAmadorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipacaoAmadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    equipesOficiais<T extends Atleta$equipesOficiaisArgs<ExtArgs> = {}>(args?: Subset<T, Atleta$equipesOficiaisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtletaEquipeOficialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    EquipeAmador<T extends Atleta$EquipeAmadorArgs<ExtArgs> = {}>(args?: Subset<T, Atleta$EquipeAmadorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipeAmadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"Atleta", 'String'>
    readonly genero: FieldRef<"Atleta", 'String'>
    readonly nivel: FieldRef<"Atleta", 'String'>
    readonly usuarioId: FieldRef<"Atleta", 'Int'>
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
   * Atleta.usuario
   */
  export type Atleta$usuarioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
  }

  /**
   * Atleta.participacoesAmador
   */
  export type Atleta$participacoesAmadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipacaoAmador
     */
    select?: ParticipacaoAmadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipacaoAmador
     */
    omit?: ParticipacaoAmadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoAmadorInclude<ExtArgs> | null
    where?: ParticipacaoAmadorWhereInput
    orderBy?: ParticipacaoAmadorOrderByWithRelationInput | ParticipacaoAmadorOrderByWithRelationInput[]
    cursor?: ParticipacaoAmadorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipacaoAmadorScalarFieldEnum | ParticipacaoAmadorScalarFieldEnum[]
  }

  /**
   * Atleta.equipesOficiais
   */
  export type Atleta$equipesOficiaisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtletaEquipeOficial
     */
    select?: AtletaEquipeOficialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtletaEquipeOficial
     */
    omit?: AtletaEquipeOficialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaEquipeOficialInclude<ExtArgs> | null
    where?: AtletaEquipeOficialWhereInput
    orderBy?: AtletaEquipeOficialOrderByWithRelationInput | AtletaEquipeOficialOrderByWithRelationInput[]
    cursor?: AtletaEquipeOficialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtletaEquipeOficialScalarFieldEnum | AtletaEquipeOficialScalarFieldEnum[]
  }

  /**
   * Atleta.EquipeAmador
   */
  export type Atleta$EquipeAmadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeAmador
     */
    select?: EquipeAmadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeAmador
     */
    omit?: EquipeAmadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeAmadorInclude<ExtArgs> | null
    where?: EquipeAmadorWhereInput
    orderBy?: EquipeAmadorOrderByWithRelationInput | EquipeAmadorOrderByWithRelationInput[]
    cursor?: EquipeAmadorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipeAmadorScalarFieldEnum | EquipeAmadorScalarFieldEnum[]
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
   * Model Torneio
   */

  export type AggregateTorneio = {
    _count: TorneioCountAggregateOutputType | null
    _avg: TorneioAvgAggregateOutputType | null
    _sum: TorneioSumAggregateOutputType | null
    _min: TorneioMinAggregateOutputType | null
    _max: TorneioMaxAggregateOutputType | null
  }

  export type TorneioAvgAggregateOutputType = {
    id: number | null
    criadoPorId: number | null
  }

  export type TorneioSumAggregateOutputType = {
    id: number | null
    criadoPorId: number | null
  }

  export type TorneioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    tipo: $Enums.TipoTorneio | null
    data: Date | null
    local: string | null
    status: $Enums.StatusTorneio | null
    criadoPorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TorneioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    tipo: $Enums.TipoTorneio | null
    data: Date | null
    local: string | null
    status: $Enums.StatusTorneio | null
    criadoPorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TorneioCountAggregateOutputType = {
    id: number
    nome: number
    tipo: number
    data: number
    local: number
    status: number
    criadoPorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TorneioAvgAggregateInputType = {
    id?: true
    criadoPorId?: true
  }

  export type TorneioSumAggregateInputType = {
    id?: true
    criadoPorId?: true
  }

  export type TorneioMinAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    data?: true
    local?: true
    status?: true
    criadoPorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TorneioMaxAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    data?: true
    local?: true
    status?: true
    criadoPorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TorneioCountAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    data?: true
    local?: true
    status?: true
    criadoPorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TorneioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Torneio to aggregate.
     */
    where?: TorneioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Torneios to fetch.
     */
    orderBy?: TorneioOrderByWithRelationInput | TorneioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TorneioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Torneios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Torneios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Torneios
    **/
    _count?: true | TorneioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TorneioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TorneioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TorneioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TorneioMaxAggregateInputType
  }

  export type GetTorneioAggregateType<T extends TorneioAggregateArgs> = {
        [P in keyof T & keyof AggregateTorneio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTorneio[P]>
      : GetScalarType<T[P], AggregateTorneio[P]>
  }




  export type TorneioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TorneioWhereInput
    orderBy?: TorneioOrderByWithAggregationInput | TorneioOrderByWithAggregationInput[]
    by: TorneioScalarFieldEnum[] | TorneioScalarFieldEnum
    having?: TorneioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TorneioCountAggregateInputType | true
    _avg?: TorneioAvgAggregateInputType
    _sum?: TorneioSumAggregateInputType
    _min?: TorneioMinAggregateInputType
    _max?: TorneioMaxAggregateInputType
  }

  export type TorneioGroupByOutputType = {
    id: number
    nome: string
    tipo: $Enums.TipoTorneio
    data: Date
    local: string | null
    status: $Enums.StatusTorneio
    criadoPorId: number
    createdAt: Date
    updatedAt: Date
    _count: TorneioCountAggregateOutputType | null
    _avg: TorneioAvgAggregateOutputType | null
    _sum: TorneioSumAggregateOutputType | null
    _min: TorneioMinAggregateOutputType | null
    _max: TorneioMaxAggregateOutputType | null
  }

  type GetTorneioGroupByPayload<T extends TorneioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TorneioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TorneioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TorneioGroupByOutputType[P]>
            : GetScalarType<T[P], TorneioGroupByOutputType[P]>
        }
      >
    >


  export type TorneioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
    data?: boolean
    local?: boolean
    status?: boolean
    criadoPorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    criadoPor?: boolean | UsuarioDefaultArgs<ExtArgs>
    Partida?: boolean | Torneio$PartidaArgs<ExtArgs>
    equipesAmador?: boolean | Torneio$equipesAmadorArgs<ExtArgs>
    equipesOficial?: boolean | Torneio$equipesOficialArgs<ExtArgs>
    ParticipacaoAmador?: boolean | Torneio$ParticipacaoAmadorArgs<ExtArgs>
    _count?: boolean | TorneioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["torneio"]>

  export type TorneioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
    data?: boolean
    local?: boolean
    status?: boolean
    criadoPorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    criadoPor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["torneio"]>

  export type TorneioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
    data?: boolean
    local?: boolean
    status?: boolean
    criadoPorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    criadoPor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["torneio"]>

  export type TorneioSelectScalar = {
    id?: boolean
    nome?: boolean
    tipo?: boolean
    data?: boolean
    local?: boolean
    status?: boolean
    criadoPorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TorneioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "tipo" | "data" | "local" | "status" | "criadoPorId" | "createdAt" | "updatedAt", ExtArgs["result"]["torneio"]>
  export type TorneioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criadoPor?: boolean | UsuarioDefaultArgs<ExtArgs>
    Partida?: boolean | Torneio$PartidaArgs<ExtArgs>
    equipesAmador?: boolean | Torneio$equipesAmadorArgs<ExtArgs>
    equipesOficial?: boolean | Torneio$equipesOficialArgs<ExtArgs>
    ParticipacaoAmador?: boolean | Torneio$ParticipacaoAmadorArgs<ExtArgs>
    _count?: boolean | TorneioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TorneioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criadoPor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type TorneioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criadoPor?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $TorneioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Torneio"
    objects: {
      criadoPor: Prisma.$UsuarioPayload<ExtArgs>
      Partida: Prisma.$PartidaPayload<ExtArgs>[]
      equipesAmador: Prisma.$EquipeAmadorPayload<ExtArgs>[]
      equipesOficial: Prisma.$EquipeOficialPayload<ExtArgs>[]
      ParticipacaoAmador: Prisma.$ParticipacaoAmadorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      tipo: $Enums.TipoTorneio
      data: Date
      local: string | null
      status: $Enums.StatusTorneio
      criadoPorId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["torneio"]>
    composites: {}
  }

  type TorneioGetPayload<S extends boolean | null | undefined | TorneioDefaultArgs> = $Result.GetResult<Prisma.$TorneioPayload, S>

  type TorneioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TorneioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TorneioCountAggregateInputType | true
    }

  export interface TorneioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Torneio'], meta: { name: 'Torneio' } }
    /**
     * Find zero or one Torneio that matches the filter.
     * @param {TorneioFindUniqueArgs} args - Arguments to find a Torneio
     * @example
     * // Get one Torneio
     * const torneio = await prisma.torneio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TorneioFindUniqueArgs>(args: SelectSubset<T, TorneioFindUniqueArgs<ExtArgs>>): Prisma__TorneioClient<$Result.GetResult<Prisma.$TorneioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Torneio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TorneioFindUniqueOrThrowArgs} args - Arguments to find a Torneio
     * @example
     * // Get one Torneio
     * const torneio = await prisma.torneio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TorneioFindUniqueOrThrowArgs>(args: SelectSubset<T, TorneioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TorneioClient<$Result.GetResult<Prisma.$TorneioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Torneio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorneioFindFirstArgs} args - Arguments to find a Torneio
     * @example
     * // Get one Torneio
     * const torneio = await prisma.torneio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TorneioFindFirstArgs>(args?: SelectSubset<T, TorneioFindFirstArgs<ExtArgs>>): Prisma__TorneioClient<$Result.GetResult<Prisma.$TorneioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Torneio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorneioFindFirstOrThrowArgs} args - Arguments to find a Torneio
     * @example
     * // Get one Torneio
     * const torneio = await prisma.torneio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TorneioFindFirstOrThrowArgs>(args?: SelectSubset<T, TorneioFindFirstOrThrowArgs<ExtArgs>>): Prisma__TorneioClient<$Result.GetResult<Prisma.$TorneioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Torneios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorneioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Torneios
     * const torneios = await prisma.torneio.findMany()
     * 
     * // Get first 10 Torneios
     * const torneios = await prisma.torneio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const torneioWithIdOnly = await prisma.torneio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TorneioFindManyArgs>(args?: SelectSubset<T, TorneioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TorneioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Torneio.
     * @param {TorneioCreateArgs} args - Arguments to create a Torneio.
     * @example
     * // Create one Torneio
     * const Torneio = await prisma.torneio.create({
     *   data: {
     *     // ... data to create a Torneio
     *   }
     * })
     * 
     */
    create<T extends TorneioCreateArgs>(args: SelectSubset<T, TorneioCreateArgs<ExtArgs>>): Prisma__TorneioClient<$Result.GetResult<Prisma.$TorneioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Torneios.
     * @param {TorneioCreateManyArgs} args - Arguments to create many Torneios.
     * @example
     * // Create many Torneios
     * const torneio = await prisma.torneio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TorneioCreateManyArgs>(args?: SelectSubset<T, TorneioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Torneios and returns the data saved in the database.
     * @param {TorneioCreateManyAndReturnArgs} args - Arguments to create many Torneios.
     * @example
     * // Create many Torneios
     * const torneio = await prisma.torneio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Torneios and only return the `id`
     * const torneioWithIdOnly = await prisma.torneio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TorneioCreateManyAndReturnArgs>(args?: SelectSubset<T, TorneioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TorneioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Torneio.
     * @param {TorneioDeleteArgs} args - Arguments to delete one Torneio.
     * @example
     * // Delete one Torneio
     * const Torneio = await prisma.torneio.delete({
     *   where: {
     *     // ... filter to delete one Torneio
     *   }
     * })
     * 
     */
    delete<T extends TorneioDeleteArgs>(args: SelectSubset<T, TorneioDeleteArgs<ExtArgs>>): Prisma__TorneioClient<$Result.GetResult<Prisma.$TorneioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Torneio.
     * @param {TorneioUpdateArgs} args - Arguments to update one Torneio.
     * @example
     * // Update one Torneio
     * const torneio = await prisma.torneio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TorneioUpdateArgs>(args: SelectSubset<T, TorneioUpdateArgs<ExtArgs>>): Prisma__TorneioClient<$Result.GetResult<Prisma.$TorneioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Torneios.
     * @param {TorneioDeleteManyArgs} args - Arguments to filter Torneios to delete.
     * @example
     * // Delete a few Torneios
     * const { count } = await prisma.torneio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TorneioDeleteManyArgs>(args?: SelectSubset<T, TorneioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Torneios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorneioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Torneios
     * const torneio = await prisma.torneio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TorneioUpdateManyArgs>(args: SelectSubset<T, TorneioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Torneios and returns the data updated in the database.
     * @param {TorneioUpdateManyAndReturnArgs} args - Arguments to update many Torneios.
     * @example
     * // Update many Torneios
     * const torneio = await prisma.torneio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Torneios and only return the `id`
     * const torneioWithIdOnly = await prisma.torneio.updateManyAndReturn({
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
    updateManyAndReturn<T extends TorneioUpdateManyAndReturnArgs>(args: SelectSubset<T, TorneioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TorneioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Torneio.
     * @param {TorneioUpsertArgs} args - Arguments to update or create a Torneio.
     * @example
     * // Update or create a Torneio
     * const torneio = await prisma.torneio.upsert({
     *   create: {
     *     // ... data to create a Torneio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Torneio we want to update
     *   }
     * })
     */
    upsert<T extends TorneioUpsertArgs>(args: SelectSubset<T, TorneioUpsertArgs<ExtArgs>>): Prisma__TorneioClient<$Result.GetResult<Prisma.$TorneioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Torneios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorneioCountArgs} args - Arguments to filter Torneios to count.
     * @example
     * // Count the number of Torneios
     * const count = await prisma.torneio.count({
     *   where: {
     *     // ... the filter for the Torneios we want to count
     *   }
     * })
    **/
    count<T extends TorneioCountArgs>(
      args?: Subset<T, TorneioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TorneioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Torneio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorneioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TorneioAggregateArgs>(args: Subset<T, TorneioAggregateArgs>): Prisma.PrismaPromise<GetTorneioAggregateType<T>>

    /**
     * Group by Torneio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TorneioGroupByArgs} args - Group by arguments.
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
      T extends TorneioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TorneioGroupByArgs['orderBy'] }
        : { orderBy?: TorneioGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TorneioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTorneioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Torneio model
   */
  readonly fields: TorneioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Torneio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TorneioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    criadoPor<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Partida<T extends Torneio$PartidaArgs<ExtArgs> = {}>(args?: Subset<T, Torneio$PartidaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    equipesAmador<T extends Torneio$equipesAmadorArgs<ExtArgs> = {}>(args?: Subset<T, Torneio$equipesAmadorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipeAmadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    equipesOficial<T extends Torneio$equipesOficialArgs<ExtArgs> = {}>(args?: Subset<T, Torneio$equipesOficialArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipeOficialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ParticipacaoAmador<T extends Torneio$ParticipacaoAmadorArgs<ExtArgs> = {}>(args?: Subset<T, Torneio$ParticipacaoAmadorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipacaoAmadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Torneio model
   */
  interface TorneioFieldRefs {
    readonly id: FieldRef<"Torneio", 'Int'>
    readonly nome: FieldRef<"Torneio", 'String'>
    readonly tipo: FieldRef<"Torneio", 'TipoTorneio'>
    readonly data: FieldRef<"Torneio", 'DateTime'>
    readonly local: FieldRef<"Torneio", 'String'>
    readonly status: FieldRef<"Torneio", 'StatusTorneio'>
    readonly criadoPorId: FieldRef<"Torneio", 'Int'>
    readonly createdAt: FieldRef<"Torneio", 'DateTime'>
    readonly updatedAt: FieldRef<"Torneio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Torneio findUnique
   */
  export type TorneioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneio
     */
    select?: TorneioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Torneio
     */
    omit?: TorneioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TorneioInclude<ExtArgs> | null
    /**
     * Filter, which Torneio to fetch.
     */
    where: TorneioWhereUniqueInput
  }

  /**
   * Torneio findUniqueOrThrow
   */
  export type TorneioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneio
     */
    select?: TorneioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Torneio
     */
    omit?: TorneioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TorneioInclude<ExtArgs> | null
    /**
     * Filter, which Torneio to fetch.
     */
    where: TorneioWhereUniqueInput
  }

  /**
   * Torneio findFirst
   */
  export type TorneioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneio
     */
    select?: TorneioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Torneio
     */
    omit?: TorneioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TorneioInclude<ExtArgs> | null
    /**
     * Filter, which Torneio to fetch.
     */
    where?: TorneioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Torneios to fetch.
     */
    orderBy?: TorneioOrderByWithRelationInput | TorneioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Torneios.
     */
    cursor?: TorneioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Torneios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Torneios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Torneios.
     */
    distinct?: TorneioScalarFieldEnum | TorneioScalarFieldEnum[]
  }

  /**
   * Torneio findFirstOrThrow
   */
  export type TorneioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneio
     */
    select?: TorneioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Torneio
     */
    omit?: TorneioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TorneioInclude<ExtArgs> | null
    /**
     * Filter, which Torneio to fetch.
     */
    where?: TorneioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Torneios to fetch.
     */
    orderBy?: TorneioOrderByWithRelationInput | TorneioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Torneios.
     */
    cursor?: TorneioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Torneios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Torneios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Torneios.
     */
    distinct?: TorneioScalarFieldEnum | TorneioScalarFieldEnum[]
  }

  /**
   * Torneio findMany
   */
  export type TorneioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneio
     */
    select?: TorneioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Torneio
     */
    omit?: TorneioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TorneioInclude<ExtArgs> | null
    /**
     * Filter, which Torneios to fetch.
     */
    where?: TorneioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Torneios to fetch.
     */
    orderBy?: TorneioOrderByWithRelationInput | TorneioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Torneios.
     */
    cursor?: TorneioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Torneios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Torneios.
     */
    skip?: number
    distinct?: TorneioScalarFieldEnum | TorneioScalarFieldEnum[]
  }

  /**
   * Torneio create
   */
  export type TorneioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneio
     */
    select?: TorneioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Torneio
     */
    omit?: TorneioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TorneioInclude<ExtArgs> | null
    /**
     * The data needed to create a Torneio.
     */
    data: XOR<TorneioCreateInput, TorneioUncheckedCreateInput>
  }

  /**
   * Torneio createMany
   */
  export type TorneioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Torneios.
     */
    data: TorneioCreateManyInput | TorneioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Torneio createManyAndReturn
   */
  export type TorneioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneio
     */
    select?: TorneioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Torneio
     */
    omit?: TorneioOmit<ExtArgs> | null
    /**
     * The data used to create many Torneios.
     */
    data: TorneioCreateManyInput | TorneioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TorneioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Torneio update
   */
  export type TorneioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneio
     */
    select?: TorneioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Torneio
     */
    omit?: TorneioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TorneioInclude<ExtArgs> | null
    /**
     * The data needed to update a Torneio.
     */
    data: XOR<TorneioUpdateInput, TorneioUncheckedUpdateInput>
    /**
     * Choose, which Torneio to update.
     */
    where: TorneioWhereUniqueInput
  }

  /**
   * Torneio updateMany
   */
  export type TorneioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Torneios.
     */
    data: XOR<TorneioUpdateManyMutationInput, TorneioUncheckedUpdateManyInput>
    /**
     * Filter which Torneios to update
     */
    where?: TorneioWhereInput
    /**
     * Limit how many Torneios to update.
     */
    limit?: number
  }

  /**
   * Torneio updateManyAndReturn
   */
  export type TorneioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneio
     */
    select?: TorneioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Torneio
     */
    omit?: TorneioOmit<ExtArgs> | null
    /**
     * The data used to update Torneios.
     */
    data: XOR<TorneioUpdateManyMutationInput, TorneioUncheckedUpdateManyInput>
    /**
     * Filter which Torneios to update
     */
    where?: TorneioWhereInput
    /**
     * Limit how many Torneios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TorneioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Torneio upsert
   */
  export type TorneioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneio
     */
    select?: TorneioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Torneio
     */
    omit?: TorneioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TorneioInclude<ExtArgs> | null
    /**
     * The filter to search for the Torneio to update in case it exists.
     */
    where: TorneioWhereUniqueInput
    /**
     * In case the Torneio found by the `where` argument doesn't exist, create a new Torneio with this data.
     */
    create: XOR<TorneioCreateInput, TorneioUncheckedCreateInput>
    /**
     * In case the Torneio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TorneioUpdateInput, TorneioUncheckedUpdateInput>
  }

  /**
   * Torneio delete
   */
  export type TorneioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneio
     */
    select?: TorneioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Torneio
     */
    omit?: TorneioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TorneioInclude<ExtArgs> | null
    /**
     * Filter which Torneio to delete.
     */
    where: TorneioWhereUniqueInput
  }

  /**
   * Torneio deleteMany
   */
  export type TorneioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Torneios to delete
     */
    where?: TorneioWhereInput
    /**
     * Limit how many Torneios to delete.
     */
    limit?: number
  }

  /**
   * Torneio.Partida
   */
  export type Torneio$PartidaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    where?: PartidaWhereInput
    orderBy?: PartidaOrderByWithRelationInput | PartidaOrderByWithRelationInput[]
    cursor?: PartidaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartidaScalarFieldEnum | PartidaScalarFieldEnum[]
  }

  /**
   * Torneio.equipesAmador
   */
  export type Torneio$equipesAmadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeAmador
     */
    select?: EquipeAmadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeAmador
     */
    omit?: EquipeAmadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeAmadorInclude<ExtArgs> | null
    where?: EquipeAmadorWhereInput
    orderBy?: EquipeAmadorOrderByWithRelationInput | EquipeAmadorOrderByWithRelationInput[]
    cursor?: EquipeAmadorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipeAmadorScalarFieldEnum | EquipeAmadorScalarFieldEnum[]
  }

  /**
   * Torneio.equipesOficial
   */
  export type Torneio$equipesOficialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeOficial
     */
    select?: EquipeOficialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeOficial
     */
    omit?: EquipeOficialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeOficialInclude<ExtArgs> | null
    where?: EquipeOficialWhereInput
    orderBy?: EquipeOficialOrderByWithRelationInput | EquipeOficialOrderByWithRelationInput[]
    cursor?: EquipeOficialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipeOficialScalarFieldEnum | EquipeOficialScalarFieldEnum[]
  }

  /**
   * Torneio.ParticipacaoAmador
   */
  export type Torneio$ParticipacaoAmadorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipacaoAmador
     */
    select?: ParticipacaoAmadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipacaoAmador
     */
    omit?: ParticipacaoAmadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoAmadorInclude<ExtArgs> | null
    where?: ParticipacaoAmadorWhereInput
    orderBy?: ParticipacaoAmadorOrderByWithRelationInput | ParticipacaoAmadorOrderByWithRelationInput[]
    cursor?: ParticipacaoAmadorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipacaoAmadorScalarFieldEnum | ParticipacaoAmadorScalarFieldEnum[]
  }

  /**
   * Torneio without action
   */
  export type TorneioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Torneio
     */
    select?: TorneioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Torneio
     */
    omit?: TorneioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TorneioInclude<ExtArgs> | null
  }


  /**
   * Model ParticipacaoAmador
   */

  export type AggregateParticipacaoAmador = {
    _count: ParticipacaoAmadorCountAggregateOutputType | null
    _avg: ParticipacaoAmadorAvgAggregateOutputType | null
    _sum: ParticipacaoAmadorSumAggregateOutputType | null
    _min: ParticipacaoAmadorMinAggregateOutputType | null
    _max: ParticipacaoAmadorMaxAggregateOutputType | null
  }

  export type ParticipacaoAmadorAvgAggregateOutputType = {
    id: number | null
    atletaId: number | null
    torneioId: number | null
  }

  export type ParticipacaoAmadorSumAggregateOutputType = {
    id: number | null
    atletaId: number | null
    torneioId: number | null
  }

  export type ParticipacaoAmadorMinAggregateOutputType = {
    id: number | null
    atletaId: number | null
    torneioId: number | null
    criadoEm: Date | null
  }

  export type ParticipacaoAmadorMaxAggregateOutputType = {
    id: number | null
    atletaId: number | null
    torneioId: number | null
    criadoEm: Date | null
  }

  export type ParticipacaoAmadorCountAggregateOutputType = {
    id: number
    atletaId: number
    torneioId: number
    criadoEm: number
    _all: number
  }


  export type ParticipacaoAmadorAvgAggregateInputType = {
    id?: true
    atletaId?: true
    torneioId?: true
  }

  export type ParticipacaoAmadorSumAggregateInputType = {
    id?: true
    atletaId?: true
    torneioId?: true
  }

  export type ParticipacaoAmadorMinAggregateInputType = {
    id?: true
    atletaId?: true
    torneioId?: true
    criadoEm?: true
  }

  export type ParticipacaoAmadorMaxAggregateInputType = {
    id?: true
    atletaId?: true
    torneioId?: true
    criadoEm?: true
  }

  export type ParticipacaoAmadorCountAggregateInputType = {
    id?: true
    atletaId?: true
    torneioId?: true
    criadoEm?: true
    _all?: true
  }

  export type ParticipacaoAmadorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParticipacaoAmador to aggregate.
     */
    where?: ParticipacaoAmadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipacaoAmadors to fetch.
     */
    orderBy?: ParticipacaoAmadorOrderByWithRelationInput | ParticipacaoAmadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipacaoAmadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipacaoAmadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipacaoAmadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ParticipacaoAmadors
    **/
    _count?: true | ParticipacaoAmadorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticipacaoAmadorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticipacaoAmadorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipacaoAmadorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipacaoAmadorMaxAggregateInputType
  }

  export type GetParticipacaoAmadorAggregateType<T extends ParticipacaoAmadorAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipacaoAmador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipacaoAmador[P]>
      : GetScalarType<T[P], AggregateParticipacaoAmador[P]>
  }




  export type ParticipacaoAmadorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipacaoAmadorWhereInput
    orderBy?: ParticipacaoAmadorOrderByWithAggregationInput | ParticipacaoAmadorOrderByWithAggregationInput[]
    by: ParticipacaoAmadorScalarFieldEnum[] | ParticipacaoAmadorScalarFieldEnum
    having?: ParticipacaoAmadorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipacaoAmadorCountAggregateInputType | true
    _avg?: ParticipacaoAmadorAvgAggregateInputType
    _sum?: ParticipacaoAmadorSumAggregateInputType
    _min?: ParticipacaoAmadorMinAggregateInputType
    _max?: ParticipacaoAmadorMaxAggregateInputType
  }

  export type ParticipacaoAmadorGroupByOutputType = {
    id: number
    atletaId: number
    torneioId: number
    criadoEm: Date
    _count: ParticipacaoAmadorCountAggregateOutputType | null
    _avg: ParticipacaoAmadorAvgAggregateOutputType | null
    _sum: ParticipacaoAmadorSumAggregateOutputType | null
    _min: ParticipacaoAmadorMinAggregateOutputType | null
    _max: ParticipacaoAmadorMaxAggregateOutputType | null
  }

  type GetParticipacaoAmadorGroupByPayload<T extends ParticipacaoAmadorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipacaoAmadorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipacaoAmadorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipacaoAmadorGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipacaoAmadorGroupByOutputType[P]>
        }
      >
    >


  export type ParticipacaoAmadorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    atletaId?: boolean
    torneioId?: boolean
    criadoEm?: boolean
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participacaoAmador"]>

  export type ParticipacaoAmadorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    atletaId?: boolean
    torneioId?: boolean
    criadoEm?: boolean
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participacaoAmador"]>

  export type ParticipacaoAmadorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    atletaId?: boolean
    torneioId?: boolean
    criadoEm?: boolean
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participacaoAmador"]>

  export type ParticipacaoAmadorSelectScalar = {
    id?: boolean
    atletaId?: boolean
    torneioId?: boolean
    criadoEm?: boolean
  }

  export type ParticipacaoAmadorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "atletaId" | "torneioId" | "criadoEm", ExtArgs["result"]["participacaoAmador"]>
  export type ParticipacaoAmadorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
  }
  export type ParticipacaoAmadorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
  }
  export type ParticipacaoAmadorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
  }

  export type $ParticipacaoAmadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ParticipacaoAmador"
    objects: {
      atleta: Prisma.$AtletaPayload<ExtArgs>
      torneio: Prisma.$TorneioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      atletaId: number
      torneioId: number
      criadoEm: Date
    }, ExtArgs["result"]["participacaoAmador"]>
    composites: {}
  }

  type ParticipacaoAmadorGetPayload<S extends boolean | null | undefined | ParticipacaoAmadorDefaultArgs> = $Result.GetResult<Prisma.$ParticipacaoAmadorPayload, S>

  type ParticipacaoAmadorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipacaoAmadorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipacaoAmadorCountAggregateInputType | true
    }

  export interface ParticipacaoAmadorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ParticipacaoAmador'], meta: { name: 'ParticipacaoAmador' } }
    /**
     * Find zero or one ParticipacaoAmador that matches the filter.
     * @param {ParticipacaoAmadorFindUniqueArgs} args - Arguments to find a ParticipacaoAmador
     * @example
     * // Get one ParticipacaoAmador
     * const participacaoAmador = await prisma.participacaoAmador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipacaoAmadorFindUniqueArgs>(args: SelectSubset<T, ParticipacaoAmadorFindUniqueArgs<ExtArgs>>): Prisma__ParticipacaoAmadorClient<$Result.GetResult<Prisma.$ParticipacaoAmadorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ParticipacaoAmador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipacaoAmadorFindUniqueOrThrowArgs} args - Arguments to find a ParticipacaoAmador
     * @example
     * // Get one ParticipacaoAmador
     * const participacaoAmador = await prisma.participacaoAmador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipacaoAmadorFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipacaoAmadorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipacaoAmadorClient<$Result.GetResult<Prisma.$ParticipacaoAmadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParticipacaoAmador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoAmadorFindFirstArgs} args - Arguments to find a ParticipacaoAmador
     * @example
     * // Get one ParticipacaoAmador
     * const participacaoAmador = await prisma.participacaoAmador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipacaoAmadorFindFirstArgs>(args?: SelectSubset<T, ParticipacaoAmadorFindFirstArgs<ExtArgs>>): Prisma__ParticipacaoAmadorClient<$Result.GetResult<Prisma.$ParticipacaoAmadorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ParticipacaoAmador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoAmadorFindFirstOrThrowArgs} args - Arguments to find a ParticipacaoAmador
     * @example
     * // Get one ParticipacaoAmador
     * const participacaoAmador = await prisma.participacaoAmador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipacaoAmadorFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipacaoAmadorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipacaoAmadorClient<$Result.GetResult<Prisma.$ParticipacaoAmadorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ParticipacaoAmadors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoAmadorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ParticipacaoAmadors
     * const participacaoAmadors = await prisma.participacaoAmador.findMany()
     * 
     * // Get first 10 ParticipacaoAmadors
     * const participacaoAmadors = await prisma.participacaoAmador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participacaoAmadorWithIdOnly = await prisma.participacaoAmador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipacaoAmadorFindManyArgs>(args?: SelectSubset<T, ParticipacaoAmadorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipacaoAmadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ParticipacaoAmador.
     * @param {ParticipacaoAmadorCreateArgs} args - Arguments to create a ParticipacaoAmador.
     * @example
     * // Create one ParticipacaoAmador
     * const ParticipacaoAmador = await prisma.participacaoAmador.create({
     *   data: {
     *     // ... data to create a ParticipacaoAmador
     *   }
     * })
     * 
     */
    create<T extends ParticipacaoAmadorCreateArgs>(args: SelectSubset<T, ParticipacaoAmadorCreateArgs<ExtArgs>>): Prisma__ParticipacaoAmadorClient<$Result.GetResult<Prisma.$ParticipacaoAmadorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ParticipacaoAmadors.
     * @param {ParticipacaoAmadorCreateManyArgs} args - Arguments to create many ParticipacaoAmadors.
     * @example
     * // Create many ParticipacaoAmadors
     * const participacaoAmador = await prisma.participacaoAmador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipacaoAmadorCreateManyArgs>(args?: SelectSubset<T, ParticipacaoAmadorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ParticipacaoAmadors and returns the data saved in the database.
     * @param {ParticipacaoAmadorCreateManyAndReturnArgs} args - Arguments to create many ParticipacaoAmadors.
     * @example
     * // Create many ParticipacaoAmadors
     * const participacaoAmador = await prisma.participacaoAmador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ParticipacaoAmadors and only return the `id`
     * const participacaoAmadorWithIdOnly = await prisma.participacaoAmador.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipacaoAmadorCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipacaoAmadorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipacaoAmadorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ParticipacaoAmador.
     * @param {ParticipacaoAmadorDeleteArgs} args - Arguments to delete one ParticipacaoAmador.
     * @example
     * // Delete one ParticipacaoAmador
     * const ParticipacaoAmador = await prisma.participacaoAmador.delete({
     *   where: {
     *     // ... filter to delete one ParticipacaoAmador
     *   }
     * })
     * 
     */
    delete<T extends ParticipacaoAmadorDeleteArgs>(args: SelectSubset<T, ParticipacaoAmadorDeleteArgs<ExtArgs>>): Prisma__ParticipacaoAmadorClient<$Result.GetResult<Prisma.$ParticipacaoAmadorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ParticipacaoAmador.
     * @param {ParticipacaoAmadorUpdateArgs} args - Arguments to update one ParticipacaoAmador.
     * @example
     * // Update one ParticipacaoAmador
     * const participacaoAmador = await prisma.participacaoAmador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipacaoAmadorUpdateArgs>(args: SelectSubset<T, ParticipacaoAmadorUpdateArgs<ExtArgs>>): Prisma__ParticipacaoAmadorClient<$Result.GetResult<Prisma.$ParticipacaoAmadorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ParticipacaoAmadors.
     * @param {ParticipacaoAmadorDeleteManyArgs} args - Arguments to filter ParticipacaoAmadors to delete.
     * @example
     * // Delete a few ParticipacaoAmadors
     * const { count } = await prisma.participacaoAmador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipacaoAmadorDeleteManyArgs>(args?: SelectSubset<T, ParticipacaoAmadorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParticipacaoAmadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoAmadorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ParticipacaoAmadors
     * const participacaoAmador = await prisma.participacaoAmador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipacaoAmadorUpdateManyArgs>(args: SelectSubset<T, ParticipacaoAmadorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ParticipacaoAmadors and returns the data updated in the database.
     * @param {ParticipacaoAmadorUpdateManyAndReturnArgs} args - Arguments to update many ParticipacaoAmadors.
     * @example
     * // Update many ParticipacaoAmadors
     * const participacaoAmador = await prisma.participacaoAmador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ParticipacaoAmadors and only return the `id`
     * const participacaoAmadorWithIdOnly = await prisma.participacaoAmador.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParticipacaoAmadorUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipacaoAmadorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipacaoAmadorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ParticipacaoAmador.
     * @param {ParticipacaoAmadorUpsertArgs} args - Arguments to update or create a ParticipacaoAmador.
     * @example
     * // Update or create a ParticipacaoAmador
     * const participacaoAmador = await prisma.participacaoAmador.upsert({
     *   create: {
     *     // ... data to create a ParticipacaoAmador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ParticipacaoAmador we want to update
     *   }
     * })
     */
    upsert<T extends ParticipacaoAmadorUpsertArgs>(args: SelectSubset<T, ParticipacaoAmadorUpsertArgs<ExtArgs>>): Prisma__ParticipacaoAmadorClient<$Result.GetResult<Prisma.$ParticipacaoAmadorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ParticipacaoAmadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoAmadorCountArgs} args - Arguments to filter ParticipacaoAmadors to count.
     * @example
     * // Count the number of ParticipacaoAmadors
     * const count = await prisma.participacaoAmador.count({
     *   where: {
     *     // ... the filter for the ParticipacaoAmadors we want to count
     *   }
     * })
    **/
    count<T extends ParticipacaoAmadorCountArgs>(
      args?: Subset<T, ParticipacaoAmadorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipacaoAmadorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ParticipacaoAmador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoAmadorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParticipacaoAmadorAggregateArgs>(args: Subset<T, ParticipacaoAmadorAggregateArgs>): Prisma.PrismaPromise<GetParticipacaoAmadorAggregateType<T>>

    /**
     * Group by ParticipacaoAmador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoAmadorGroupByArgs} args - Group by arguments.
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
      T extends ParticipacaoAmadorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipacaoAmadorGroupByArgs['orderBy'] }
        : { orderBy?: ParticipacaoAmadorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParticipacaoAmadorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipacaoAmadorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ParticipacaoAmador model
   */
  readonly fields: ParticipacaoAmadorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ParticipacaoAmador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipacaoAmadorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    atleta<T extends AtletaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AtletaDefaultArgs<ExtArgs>>): Prisma__AtletaClient<$Result.GetResult<Prisma.$AtletaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    torneio<T extends TorneioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TorneioDefaultArgs<ExtArgs>>): Prisma__TorneioClient<$Result.GetResult<Prisma.$TorneioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ParticipacaoAmador model
   */
  interface ParticipacaoAmadorFieldRefs {
    readonly id: FieldRef<"ParticipacaoAmador", 'Int'>
    readonly atletaId: FieldRef<"ParticipacaoAmador", 'Int'>
    readonly torneioId: FieldRef<"ParticipacaoAmador", 'Int'>
    readonly criadoEm: FieldRef<"ParticipacaoAmador", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ParticipacaoAmador findUnique
   */
  export type ParticipacaoAmadorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipacaoAmador
     */
    select?: ParticipacaoAmadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipacaoAmador
     */
    omit?: ParticipacaoAmadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoAmadorInclude<ExtArgs> | null
    /**
     * Filter, which ParticipacaoAmador to fetch.
     */
    where: ParticipacaoAmadorWhereUniqueInput
  }

  /**
   * ParticipacaoAmador findUniqueOrThrow
   */
  export type ParticipacaoAmadorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipacaoAmador
     */
    select?: ParticipacaoAmadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipacaoAmador
     */
    omit?: ParticipacaoAmadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoAmadorInclude<ExtArgs> | null
    /**
     * Filter, which ParticipacaoAmador to fetch.
     */
    where: ParticipacaoAmadorWhereUniqueInput
  }

  /**
   * ParticipacaoAmador findFirst
   */
  export type ParticipacaoAmadorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipacaoAmador
     */
    select?: ParticipacaoAmadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipacaoAmador
     */
    omit?: ParticipacaoAmadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoAmadorInclude<ExtArgs> | null
    /**
     * Filter, which ParticipacaoAmador to fetch.
     */
    where?: ParticipacaoAmadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipacaoAmadors to fetch.
     */
    orderBy?: ParticipacaoAmadorOrderByWithRelationInput | ParticipacaoAmadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParticipacaoAmadors.
     */
    cursor?: ParticipacaoAmadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipacaoAmadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipacaoAmadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParticipacaoAmadors.
     */
    distinct?: ParticipacaoAmadorScalarFieldEnum | ParticipacaoAmadorScalarFieldEnum[]
  }

  /**
   * ParticipacaoAmador findFirstOrThrow
   */
  export type ParticipacaoAmadorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipacaoAmador
     */
    select?: ParticipacaoAmadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipacaoAmador
     */
    omit?: ParticipacaoAmadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoAmadorInclude<ExtArgs> | null
    /**
     * Filter, which ParticipacaoAmador to fetch.
     */
    where?: ParticipacaoAmadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipacaoAmadors to fetch.
     */
    orderBy?: ParticipacaoAmadorOrderByWithRelationInput | ParticipacaoAmadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ParticipacaoAmadors.
     */
    cursor?: ParticipacaoAmadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipacaoAmadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipacaoAmadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ParticipacaoAmadors.
     */
    distinct?: ParticipacaoAmadorScalarFieldEnum | ParticipacaoAmadorScalarFieldEnum[]
  }

  /**
   * ParticipacaoAmador findMany
   */
  export type ParticipacaoAmadorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipacaoAmador
     */
    select?: ParticipacaoAmadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipacaoAmador
     */
    omit?: ParticipacaoAmadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoAmadorInclude<ExtArgs> | null
    /**
     * Filter, which ParticipacaoAmadors to fetch.
     */
    where?: ParticipacaoAmadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ParticipacaoAmadors to fetch.
     */
    orderBy?: ParticipacaoAmadorOrderByWithRelationInput | ParticipacaoAmadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ParticipacaoAmadors.
     */
    cursor?: ParticipacaoAmadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ParticipacaoAmadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ParticipacaoAmadors.
     */
    skip?: number
    distinct?: ParticipacaoAmadorScalarFieldEnum | ParticipacaoAmadorScalarFieldEnum[]
  }

  /**
   * ParticipacaoAmador create
   */
  export type ParticipacaoAmadorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipacaoAmador
     */
    select?: ParticipacaoAmadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipacaoAmador
     */
    omit?: ParticipacaoAmadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoAmadorInclude<ExtArgs> | null
    /**
     * The data needed to create a ParticipacaoAmador.
     */
    data: XOR<ParticipacaoAmadorCreateInput, ParticipacaoAmadorUncheckedCreateInput>
  }

  /**
   * ParticipacaoAmador createMany
   */
  export type ParticipacaoAmadorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ParticipacaoAmadors.
     */
    data: ParticipacaoAmadorCreateManyInput | ParticipacaoAmadorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ParticipacaoAmador createManyAndReturn
   */
  export type ParticipacaoAmadorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipacaoAmador
     */
    select?: ParticipacaoAmadorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipacaoAmador
     */
    omit?: ParticipacaoAmadorOmit<ExtArgs> | null
    /**
     * The data used to create many ParticipacaoAmadors.
     */
    data: ParticipacaoAmadorCreateManyInput | ParticipacaoAmadorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoAmadorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParticipacaoAmador update
   */
  export type ParticipacaoAmadorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipacaoAmador
     */
    select?: ParticipacaoAmadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipacaoAmador
     */
    omit?: ParticipacaoAmadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoAmadorInclude<ExtArgs> | null
    /**
     * The data needed to update a ParticipacaoAmador.
     */
    data: XOR<ParticipacaoAmadorUpdateInput, ParticipacaoAmadorUncheckedUpdateInput>
    /**
     * Choose, which ParticipacaoAmador to update.
     */
    where: ParticipacaoAmadorWhereUniqueInput
  }

  /**
   * ParticipacaoAmador updateMany
   */
  export type ParticipacaoAmadorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ParticipacaoAmadors.
     */
    data: XOR<ParticipacaoAmadorUpdateManyMutationInput, ParticipacaoAmadorUncheckedUpdateManyInput>
    /**
     * Filter which ParticipacaoAmadors to update
     */
    where?: ParticipacaoAmadorWhereInput
    /**
     * Limit how many ParticipacaoAmadors to update.
     */
    limit?: number
  }

  /**
   * ParticipacaoAmador updateManyAndReturn
   */
  export type ParticipacaoAmadorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipacaoAmador
     */
    select?: ParticipacaoAmadorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipacaoAmador
     */
    omit?: ParticipacaoAmadorOmit<ExtArgs> | null
    /**
     * The data used to update ParticipacaoAmadors.
     */
    data: XOR<ParticipacaoAmadorUpdateManyMutationInput, ParticipacaoAmadorUncheckedUpdateManyInput>
    /**
     * Filter which ParticipacaoAmadors to update
     */
    where?: ParticipacaoAmadorWhereInput
    /**
     * Limit how many ParticipacaoAmadors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoAmadorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ParticipacaoAmador upsert
   */
  export type ParticipacaoAmadorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipacaoAmador
     */
    select?: ParticipacaoAmadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipacaoAmador
     */
    omit?: ParticipacaoAmadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoAmadorInclude<ExtArgs> | null
    /**
     * The filter to search for the ParticipacaoAmador to update in case it exists.
     */
    where: ParticipacaoAmadorWhereUniqueInput
    /**
     * In case the ParticipacaoAmador found by the `where` argument doesn't exist, create a new ParticipacaoAmador with this data.
     */
    create: XOR<ParticipacaoAmadorCreateInput, ParticipacaoAmadorUncheckedCreateInput>
    /**
     * In case the ParticipacaoAmador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipacaoAmadorUpdateInput, ParticipacaoAmadorUncheckedUpdateInput>
  }

  /**
   * ParticipacaoAmador delete
   */
  export type ParticipacaoAmadorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipacaoAmador
     */
    select?: ParticipacaoAmadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipacaoAmador
     */
    omit?: ParticipacaoAmadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoAmadorInclude<ExtArgs> | null
    /**
     * Filter which ParticipacaoAmador to delete.
     */
    where: ParticipacaoAmadorWhereUniqueInput
  }

  /**
   * ParticipacaoAmador deleteMany
   */
  export type ParticipacaoAmadorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ParticipacaoAmadors to delete
     */
    where?: ParticipacaoAmadorWhereInput
    /**
     * Limit how many ParticipacaoAmadors to delete.
     */
    limit?: number
  }

  /**
   * ParticipacaoAmador without action
   */
  export type ParticipacaoAmadorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParticipacaoAmador
     */
    select?: ParticipacaoAmadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ParticipacaoAmador
     */
    omit?: ParticipacaoAmadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoAmadorInclude<ExtArgs> | null
  }


  /**
   * Model EquipeAmador
   */

  export type AggregateEquipeAmador = {
    _count: EquipeAmadorCountAggregateOutputType | null
    _avg: EquipeAmadorAvgAggregateOutputType | null
    _sum: EquipeAmadorSumAggregateOutputType | null
    _min: EquipeAmadorMinAggregateOutputType | null
    _max: EquipeAmadorMaxAggregateOutputType | null
  }

  export type EquipeAmadorAvgAggregateOutputType = {
    id: number | null
    torneioId: number | null
  }

  export type EquipeAmadorSumAggregateOutputType = {
    id: number | null
    torneioId: number | null
  }

  export type EquipeAmadorMinAggregateOutputType = {
    id: number | null
    nome: string | null
    tipo: string | null
    torneioId: number | null
  }

  export type EquipeAmadorMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    tipo: string | null
    torneioId: number | null
  }

  export type EquipeAmadorCountAggregateOutputType = {
    id: number
    nome: number
    tipo: number
    torneioId: number
    _all: number
  }


  export type EquipeAmadorAvgAggregateInputType = {
    id?: true
    torneioId?: true
  }

  export type EquipeAmadorSumAggregateInputType = {
    id?: true
    torneioId?: true
  }

  export type EquipeAmadorMinAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    torneioId?: true
  }

  export type EquipeAmadorMaxAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    torneioId?: true
  }

  export type EquipeAmadorCountAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    torneioId?: true
    _all?: true
  }

  export type EquipeAmadorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquipeAmador to aggregate.
     */
    where?: EquipeAmadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipeAmadors to fetch.
     */
    orderBy?: EquipeAmadorOrderByWithRelationInput | EquipeAmadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipeAmadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipeAmadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipeAmadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EquipeAmadors
    **/
    _count?: true | EquipeAmadorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipeAmadorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipeAmadorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipeAmadorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipeAmadorMaxAggregateInputType
  }

  export type GetEquipeAmadorAggregateType<T extends EquipeAmadorAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipeAmador]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipeAmador[P]>
      : GetScalarType<T[P], AggregateEquipeAmador[P]>
  }




  export type EquipeAmadorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipeAmadorWhereInput
    orderBy?: EquipeAmadorOrderByWithAggregationInput | EquipeAmadorOrderByWithAggregationInput[]
    by: EquipeAmadorScalarFieldEnum[] | EquipeAmadorScalarFieldEnum
    having?: EquipeAmadorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipeAmadorCountAggregateInputType | true
    _avg?: EquipeAmadorAvgAggregateInputType
    _sum?: EquipeAmadorSumAggregateInputType
    _min?: EquipeAmadorMinAggregateInputType
    _max?: EquipeAmadorMaxAggregateInputType
  }

  export type EquipeAmadorGroupByOutputType = {
    id: number
    nome: string
    tipo: string
    torneioId: number
    _count: EquipeAmadorCountAggregateOutputType | null
    _avg: EquipeAmadorAvgAggregateOutputType | null
    _sum: EquipeAmadorSumAggregateOutputType | null
    _min: EquipeAmadorMinAggregateOutputType | null
    _max: EquipeAmadorMaxAggregateOutputType | null
  }

  type GetEquipeAmadorGroupByPayload<T extends EquipeAmadorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipeAmadorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipeAmadorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipeAmadorGroupByOutputType[P]>
            : GetScalarType<T[P], EquipeAmadorGroupByOutputType[P]>
        }
      >
    >


  export type EquipeAmadorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
    torneioId?: boolean
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
    membros?: boolean | EquipeAmador$membrosArgs<ExtArgs>
    partidasComoEquipe1?: boolean | EquipeAmador$partidasComoEquipe1Args<ExtArgs>
    partidasComoEquipe2?: boolean | EquipeAmador$partidasComoEquipe2Args<ExtArgs>
    _count?: boolean | EquipeAmadorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipeAmador"]>

  export type EquipeAmadorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
    torneioId?: boolean
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipeAmador"]>

  export type EquipeAmadorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
    torneioId?: boolean
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipeAmador"]>

  export type EquipeAmadorSelectScalar = {
    id?: boolean
    nome?: boolean
    tipo?: boolean
    torneioId?: boolean
  }

  export type EquipeAmadorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "tipo" | "torneioId", ExtArgs["result"]["equipeAmador"]>
  export type EquipeAmadorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
    membros?: boolean | EquipeAmador$membrosArgs<ExtArgs>
    partidasComoEquipe1?: boolean | EquipeAmador$partidasComoEquipe1Args<ExtArgs>
    partidasComoEquipe2?: boolean | EquipeAmador$partidasComoEquipe2Args<ExtArgs>
    _count?: boolean | EquipeAmadorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipeAmadorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
  }
  export type EquipeAmadorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
  }

  export type $EquipeAmadorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EquipeAmador"
    objects: {
      torneio: Prisma.$TorneioPayload<ExtArgs>
      membros: Prisma.$AtletaPayload<ExtArgs>[]
      partidasComoEquipe1: Prisma.$PartidaPayload<ExtArgs>[]
      partidasComoEquipe2: Prisma.$PartidaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      tipo: string
      torneioId: number
    }, ExtArgs["result"]["equipeAmador"]>
    composites: {}
  }

  type EquipeAmadorGetPayload<S extends boolean | null | undefined | EquipeAmadorDefaultArgs> = $Result.GetResult<Prisma.$EquipeAmadorPayload, S>

  type EquipeAmadorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipeAmadorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipeAmadorCountAggregateInputType | true
    }

  export interface EquipeAmadorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EquipeAmador'], meta: { name: 'EquipeAmador' } }
    /**
     * Find zero or one EquipeAmador that matches the filter.
     * @param {EquipeAmadorFindUniqueArgs} args - Arguments to find a EquipeAmador
     * @example
     * // Get one EquipeAmador
     * const equipeAmador = await prisma.equipeAmador.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipeAmadorFindUniqueArgs>(args: SelectSubset<T, EquipeAmadorFindUniqueArgs<ExtArgs>>): Prisma__EquipeAmadorClient<$Result.GetResult<Prisma.$EquipeAmadorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EquipeAmador that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipeAmadorFindUniqueOrThrowArgs} args - Arguments to find a EquipeAmador
     * @example
     * // Get one EquipeAmador
     * const equipeAmador = await prisma.equipeAmador.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipeAmadorFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipeAmadorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipeAmadorClient<$Result.GetResult<Prisma.$EquipeAmadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EquipeAmador that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeAmadorFindFirstArgs} args - Arguments to find a EquipeAmador
     * @example
     * // Get one EquipeAmador
     * const equipeAmador = await prisma.equipeAmador.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipeAmadorFindFirstArgs>(args?: SelectSubset<T, EquipeAmadorFindFirstArgs<ExtArgs>>): Prisma__EquipeAmadorClient<$Result.GetResult<Prisma.$EquipeAmadorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EquipeAmador that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeAmadorFindFirstOrThrowArgs} args - Arguments to find a EquipeAmador
     * @example
     * // Get one EquipeAmador
     * const equipeAmador = await prisma.equipeAmador.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipeAmadorFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipeAmadorFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipeAmadorClient<$Result.GetResult<Prisma.$EquipeAmadorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EquipeAmadors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeAmadorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EquipeAmadors
     * const equipeAmadors = await prisma.equipeAmador.findMany()
     * 
     * // Get first 10 EquipeAmadors
     * const equipeAmadors = await prisma.equipeAmador.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipeAmadorWithIdOnly = await prisma.equipeAmador.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipeAmadorFindManyArgs>(args?: SelectSubset<T, EquipeAmadorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipeAmadorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EquipeAmador.
     * @param {EquipeAmadorCreateArgs} args - Arguments to create a EquipeAmador.
     * @example
     * // Create one EquipeAmador
     * const EquipeAmador = await prisma.equipeAmador.create({
     *   data: {
     *     // ... data to create a EquipeAmador
     *   }
     * })
     * 
     */
    create<T extends EquipeAmadorCreateArgs>(args: SelectSubset<T, EquipeAmadorCreateArgs<ExtArgs>>): Prisma__EquipeAmadorClient<$Result.GetResult<Prisma.$EquipeAmadorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EquipeAmadors.
     * @param {EquipeAmadorCreateManyArgs} args - Arguments to create many EquipeAmadors.
     * @example
     * // Create many EquipeAmadors
     * const equipeAmador = await prisma.equipeAmador.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipeAmadorCreateManyArgs>(args?: SelectSubset<T, EquipeAmadorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EquipeAmadors and returns the data saved in the database.
     * @param {EquipeAmadorCreateManyAndReturnArgs} args - Arguments to create many EquipeAmadors.
     * @example
     * // Create many EquipeAmadors
     * const equipeAmador = await prisma.equipeAmador.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EquipeAmadors and only return the `id`
     * const equipeAmadorWithIdOnly = await prisma.equipeAmador.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipeAmadorCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipeAmadorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipeAmadorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EquipeAmador.
     * @param {EquipeAmadorDeleteArgs} args - Arguments to delete one EquipeAmador.
     * @example
     * // Delete one EquipeAmador
     * const EquipeAmador = await prisma.equipeAmador.delete({
     *   where: {
     *     // ... filter to delete one EquipeAmador
     *   }
     * })
     * 
     */
    delete<T extends EquipeAmadorDeleteArgs>(args: SelectSubset<T, EquipeAmadorDeleteArgs<ExtArgs>>): Prisma__EquipeAmadorClient<$Result.GetResult<Prisma.$EquipeAmadorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EquipeAmador.
     * @param {EquipeAmadorUpdateArgs} args - Arguments to update one EquipeAmador.
     * @example
     * // Update one EquipeAmador
     * const equipeAmador = await prisma.equipeAmador.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipeAmadorUpdateArgs>(args: SelectSubset<T, EquipeAmadorUpdateArgs<ExtArgs>>): Prisma__EquipeAmadorClient<$Result.GetResult<Prisma.$EquipeAmadorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EquipeAmadors.
     * @param {EquipeAmadorDeleteManyArgs} args - Arguments to filter EquipeAmadors to delete.
     * @example
     * // Delete a few EquipeAmadors
     * const { count } = await prisma.equipeAmador.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipeAmadorDeleteManyArgs>(args?: SelectSubset<T, EquipeAmadorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EquipeAmadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeAmadorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EquipeAmadors
     * const equipeAmador = await prisma.equipeAmador.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipeAmadorUpdateManyArgs>(args: SelectSubset<T, EquipeAmadorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EquipeAmadors and returns the data updated in the database.
     * @param {EquipeAmadorUpdateManyAndReturnArgs} args - Arguments to update many EquipeAmadors.
     * @example
     * // Update many EquipeAmadors
     * const equipeAmador = await prisma.equipeAmador.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EquipeAmadors and only return the `id`
     * const equipeAmadorWithIdOnly = await prisma.equipeAmador.updateManyAndReturn({
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
    updateManyAndReturn<T extends EquipeAmadorUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipeAmadorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipeAmadorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EquipeAmador.
     * @param {EquipeAmadorUpsertArgs} args - Arguments to update or create a EquipeAmador.
     * @example
     * // Update or create a EquipeAmador
     * const equipeAmador = await prisma.equipeAmador.upsert({
     *   create: {
     *     // ... data to create a EquipeAmador
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EquipeAmador we want to update
     *   }
     * })
     */
    upsert<T extends EquipeAmadorUpsertArgs>(args: SelectSubset<T, EquipeAmadorUpsertArgs<ExtArgs>>): Prisma__EquipeAmadorClient<$Result.GetResult<Prisma.$EquipeAmadorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EquipeAmadors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeAmadorCountArgs} args - Arguments to filter EquipeAmadors to count.
     * @example
     * // Count the number of EquipeAmadors
     * const count = await prisma.equipeAmador.count({
     *   where: {
     *     // ... the filter for the EquipeAmadors we want to count
     *   }
     * })
    **/
    count<T extends EquipeAmadorCountArgs>(
      args?: Subset<T, EquipeAmadorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipeAmadorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EquipeAmador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeAmadorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EquipeAmadorAggregateArgs>(args: Subset<T, EquipeAmadorAggregateArgs>): Prisma.PrismaPromise<GetEquipeAmadorAggregateType<T>>

    /**
     * Group by EquipeAmador.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeAmadorGroupByArgs} args - Group by arguments.
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
      T extends EquipeAmadorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipeAmadorGroupByArgs['orderBy'] }
        : { orderBy?: EquipeAmadorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EquipeAmadorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipeAmadorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EquipeAmador model
   */
  readonly fields: EquipeAmadorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EquipeAmador.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipeAmadorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    torneio<T extends TorneioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TorneioDefaultArgs<ExtArgs>>): Prisma__TorneioClient<$Result.GetResult<Prisma.$TorneioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    membros<T extends EquipeAmador$membrosArgs<ExtArgs> = {}>(args?: Subset<T, EquipeAmador$membrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtletaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    partidasComoEquipe1<T extends EquipeAmador$partidasComoEquipe1Args<ExtArgs> = {}>(args?: Subset<T, EquipeAmador$partidasComoEquipe1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    partidasComoEquipe2<T extends EquipeAmador$partidasComoEquipe2Args<ExtArgs> = {}>(args?: Subset<T, EquipeAmador$partidasComoEquipe2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EquipeAmador model
   */
  interface EquipeAmadorFieldRefs {
    readonly id: FieldRef<"EquipeAmador", 'Int'>
    readonly nome: FieldRef<"EquipeAmador", 'String'>
    readonly tipo: FieldRef<"EquipeAmador", 'String'>
    readonly torneioId: FieldRef<"EquipeAmador", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * EquipeAmador findUnique
   */
  export type EquipeAmadorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeAmador
     */
    select?: EquipeAmadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeAmador
     */
    omit?: EquipeAmadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeAmadorInclude<ExtArgs> | null
    /**
     * Filter, which EquipeAmador to fetch.
     */
    where: EquipeAmadorWhereUniqueInput
  }

  /**
   * EquipeAmador findUniqueOrThrow
   */
  export type EquipeAmadorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeAmador
     */
    select?: EquipeAmadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeAmador
     */
    omit?: EquipeAmadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeAmadorInclude<ExtArgs> | null
    /**
     * Filter, which EquipeAmador to fetch.
     */
    where: EquipeAmadorWhereUniqueInput
  }

  /**
   * EquipeAmador findFirst
   */
  export type EquipeAmadorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeAmador
     */
    select?: EquipeAmadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeAmador
     */
    omit?: EquipeAmadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeAmadorInclude<ExtArgs> | null
    /**
     * Filter, which EquipeAmador to fetch.
     */
    where?: EquipeAmadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipeAmadors to fetch.
     */
    orderBy?: EquipeAmadorOrderByWithRelationInput | EquipeAmadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquipeAmadors.
     */
    cursor?: EquipeAmadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipeAmadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipeAmadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipeAmadors.
     */
    distinct?: EquipeAmadorScalarFieldEnum | EquipeAmadorScalarFieldEnum[]
  }

  /**
   * EquipeAmador findFirstOrThrow
   */
  export type EquipeAmadorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeAmador
     */
    select?: EquipeAmadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeAmador
     */
    omit?: EquipeAmadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeAmadorInclude<ExtArgs> | null
    /**
     * Filter, which EquipeAmador to fetch.
     */
    where?: EquipeAmadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipeAmadors to fetch.
     */
    orderBy?: EquipeAmadorOrderByWithRelationInput | EquipeAmadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquipeAmadors.
     */
    cursor?: EquipeAmadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipeAmadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipeAmadors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipeAmadors.
     */
    distinct?: EquipeAmadorScalarFieldEnum | EquipeAmadorScalarFieldEnum[]
  }

  /**
   * EquipeAmador findMany
   */
  export type EquipeAmadorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeAmador
     */
    select?: EquipeAmadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeAmador
     */
    omit?: EquipeAmadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeAmadorInclude<ExtArgs> | null
    /**
     * Filter, which EquipeAmadors to fetch.
     */
    where?: EquipeAmadorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipeAmadors to fetch.
     */
    orderBy?: EquipeAmadorOrderByWithRelationInput | EquipeAmadorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EquipeAmadors.
     */
    cursor?: EquipeAmadorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipeAmadors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipeAmadors.
     */
    skip?: number
    distinct?: EquipeAmadorScalarFieldEnum | EquipeAmadorScalarFieldEnum[]
  }

  /**
   * EquipeAmador create
   */
  export type EquipeAmadorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeAmador
     */
    select?: EquipeAmadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeAmador
     */
    omit?: EquipeAmadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeAmadorInclude<ExtArgs> | null
    /**
     * The data needed to create a EquipeAmador.
     */
    data: XOR<EquipeAmadorCreateInput, EquipeAmadorUncheckedCreateInput>
  }

  /**
   * EquipeAmador createMany
   */
  export type EquipeAmadorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EquipeAmadors.
     */
    data: EquipeAmadorCreateManyInput | EquipeAmadorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EquipeAmador createManyAndReturn
   */
  export type EquipeAmadorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeAmador
     */
    select?: EquipeAmadorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeAmador
     */
    omit?: EquipeAmadorOmit<ExtArgs> | null
    /**
     * The data used to create many EquipeAmadors.
     */
    data: EquipeAmadorCreateManyInput | EquipeAmadorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeAmadorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EquipeAmador update
   */
  export type EquipeAmadorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeAmador
     */
    select?: EquipeAmadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeAmador
     */
    omit?: EquipeAmadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeAmadorInclude<ExtArgs> | null
    /**
     * The data needed to update a EquipeAmador.
     */
    data: XOR<EquipeAmadorUpdateInput, EquipeAmadorUncheckedUpdateInput>
    /**
     * Choose, which EquipeAmador to update.
     */
    where: EquipeAmadorWhereUniqueInput
  }

  /**
   * EquipeAmador updateMany
   */
  export type EquipeAmadorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EquipeAmadors.
     */
    data: XOR<EquipeAmadorUpdateManyMutationInput, EquipeAmadorUncheckedUpdateManyInput>
    /**
     * Filter which EquipeAmadors to update
     */
    where?: EquipeAmadorWhereInput
    /**
     * Limit how many EquipeAmadors to update.
     */
    limit?: number
  }

  /**
   * EquipeAmador updateManyAndReturn
   */
  export type EquipeAmadorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeAmador
     */
    select?: EquipeAmadorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeAmador
     */
    omit?: EquipeAmadorOmit<ExtArgs> | null
    /**
     * The data used to update EquipeAmadors.
     */
    data: XOR<EquipeAmadorUpdateManyMutationInput, EquipeAmadorUncheckedUpdateManyInput>
    /**
     * Filter which EquipeAmadors to update
     */
    where?: EquipeAmadorWhereInput
    /**
     * Limit how many EquipeAmadors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeAmadorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EquipeAmador upsert
   */
  export type EquipeAmadorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeAmador
     */
    select?: EquipeAmadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeAmador
     */
    omit?: EquipeAmadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeAmadorInclude<ExtArgs> | null
    /**
     * The filter to search for the EquipeAmador to update in case it exists.
     */
    where: EquipeAmadorWhereUniqueInput
    /**
     * In case the EquipeAmador found by the `where` argument doesn't exist, create a new EquipeAmador with this data.
     */
    create: XOR<EquipeAmadorCreateInput, EquipeAmadorUncheckedCreateInput>
    /**
     * In case the EquipeAmador was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipeAmadorUpdateInput, EquipeAmadorUncheckedUpdateInput>
  }

  /**
   * EquipeAmador delete
   */
  export type EquipeAmadorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeAmador
     */
    select?: EquipeAmadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeAmador
     */
    omit?: EquipeAmadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeAmadorInclude<ExtArgs> | null
    /**
     * Filter which EquipeAmador to delete.
     */
    where: EquipeAmadorWhereUniqueInput
  }

  /**
   * EquipeAmador deleteMany
   */
  export type EquipeAmadorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquipeAmadors to delete
     */
    where?: EquipeAmadorWhereInput
    /**
     * Limit how many EquipeAmadors to delete.
     */
    limit?: number
  }

  /**
   * EquipeAmador.membros
   */
  export type EquipeAmador$membrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * EquipeAmador.partidasComoEquipe1
   */
  export type EquipeAmador$partidasComoEquipe1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    where?: PartidaWhereInput
    orderBy?: PartidaOrderByWithRelationInput | PartidaOrderByWithRelationInput[]
    cursor?: PartidaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartidaScalarFieldEnum | PartidaScalarFieldEnum[]
  }

  /**
   * EquipeAmador.partidasComoEquipe2
   */
  export type EquipeAmador$partidasComoEquipe2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    where?: PartidaWhereInput
    orderBy?: PartidaOrderByWithRelationInput | PartidaOrderByWithRelationInput[]
    cursor?: PartidaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartidaScalarFieldEnum | PartidaScalarFieldEnum[]
  }

  /**
   * EquipeAmador without action
   */
  export type EquipeAmadorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeAmador
     */
    select?: EquipeAmadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeAmador
     */
    omit?: EquipeAmadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeAmadorInclude<ExtArgs> | null
  }


  /**
   * Model EquipeOficial
   */

  export type AggregateEquipeOficial = {
    _count: EquipeOficialCountAggregateOutputType | null
    _avg: EquipeOficialAvgAggregateOutputType | null
    _sum: EquipeOficialSumAggregateOutputType | null
    _min: EquipeOficialMinAggregateOutputType | null
    _max: EquipeOficialMaxAggregateOutputType | null
  }

  export type EquipeOficialAvgAggregateOutputType = {
    id: number | null
    torneioId: number | null
  }

  export type EquipeOficialSumAggregateOutputType = {
    id: number | null
    torneioId: number | null
  }

  export type EquipeOficialMinAggregateOutputType = {
    id: number | null
    nome: string | null
    tipo: string | null
    createdAt: Date | null
    torneioId: number | null
  }

  export type EquipeOficialMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    tipo: string | null
    createdAt: Date | null
    torneioId: number | null
  }

  export type EquipeOficialCountAggregateOutputType = {
    id: number
    nome: number
    tipo: number
    createdAt: number
    torneioId: number
    _all: number
  }


  export type EquipeOficialAvgAggregateInputType = {
    id?: true
    torneioId?: true
  }

  export type EquipeOficialSumAggregateInputType = {
    id?: true
    torneioId?: true
  }

  export type EquipeOficialMinAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    createdAt?: true
    torneioId?: true
  }

  export type EquipeOficialMaxAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    createdAt?: true
    torneioId?: true
  }

  export type EquipeOficialCountAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    createdAt?: true
    torneioId?: true
    _all?: true
  }

  export type EquipeOficialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquipeOficial to aggregate.
     */
    where?: EquipeOficialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipeOficials to fetch.
     */
    orderBy?: EquipeOficialOrderByWithRelationInput | EquipeOficialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipeOficialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipeOficials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipeOficials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EquipeOficials
    **/
    _count?: true | EquipeOficialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipeOficialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipeOficialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipeOficialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipeOficialMaxAggregateInputType
  }

  export type GetEquipeOficialAggregateType<T extends EquipeOficialAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipeOficial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipeOficial[P]>
      : GetScalarType<T[P], AggregateEquipeOficial[P]>
  }




  export type EquipeOficialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipeOficialWhereInput
    orderBy?: EquipeOficialOrderByWithAggregationInput | EquipeOficialOrderByWithAggregationInput[]
    by: EquipeOficialScalarFieldEnum[] | EquipeOficialScalarFieldEnum
    having?: EquipeOficialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipeOficialCountAggregateInputType | true
    _avg?: EquipeOficialAvgAggregateInputType
    _sum?: EquipeOficialSumAggregateInputType
    _min?: EquipeOficialMinAggregateInputType
    _max?: EquipeOficialMaxAggregateInputType
  }

  export type EquipeOficialGroupByOutputType = {
    id: number
    nome: string
    tipo: string
    createdAt: Date
    torneioId: number
    _count: EquipeOficialCountAggregateOutputType | null
    _avg: EquipeOficialAvgAggregateOutputType | null
    _sum: EquipeOficialSumAggregateOutputType | null
    _min: EquipeOficialMinAggregateOutputType | null
    _max: EquipeOficialMaxAggregateOutputType | null
  }

  type GetEquipeOficialGroupByPayload<T extends EquipeOficialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipeOficialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipeOficialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipeOficialGroupByOutputType[P]>
            : GetScalarType<T[P], EquipeOficialGroupByOutputType[P]>
        }
      >
    >


  export type EquipeOficialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
    createdAt?: boolean
    torneioId?: boolean
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
    membros?: boolean | EquipeOficial$membrosArgs<ExtArgs>
    partidasComoEquipeOficial1?: boolean | EquipeOficial$partidasComoEquipeOficial1Args<ExtArgs>
    partidasComoEquipeOficial2?: boolean | EquipeOficial$partidasComoEquipeOficial2Args<ExtArgs>
    _count?: boolean | EquipeOficialCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipeOficial"]>

  export type EquipeOficialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
    createdAt?: boolean
    torneioId?: boolean
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipeOficial"]>

  export type EquipeOficialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
    createdAt?: boolean
    torneioId?: boolean
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipeOficial"]>

  export type EquipeOficialSelectScalar = {
    id?: boolean
    nome?: boolean
    tipo?: boolean
    createdAt?: boolean
    torneioId?: boolean
  }

  export type EquipeOficialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "tipo" | "createdAt" | "torneioId", ExtArgs["result"]["equipeOficial"]>
  export type EquipeOficialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
    membros?: boolean | EquipeOficial$membrosArgs<ExtArgs>
    partidasComoEquipeOficial1?: boolean | EquipeOficial$partidasComoEquipeOficial1Args<ExtArgs>
    partidasComoEquipeOficial2?: boolean | EquipeOficial$partidasComoEquipeOficial2Args<ExtArgs>
    _count?: boolean | EquipeOficialCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipeOficialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
  }
  export type EquipeOficialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
  }

  export type $EquipeOficialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EquipeOficial"
    objects: {
      torneio: Prisma.$TorneioPayload<ExtArgs>
      membros: Prisma.$AtletaEquipeOficialPayload<ExtArgs>[]
      partidasComoEquipeOficial1: Prisma.$PartidaPayload<ExtArgs>[]
      partidasComoEquipeOficial2: Prisma.$PartidaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      tipo: string
      createdAt: Date
      torneioId: number
    }, ExtArgs["result"]["equipeOficial"]>
    composites: {}
  }

  type EquipeOficialGetPayload<S extends boolean | null | undefined | EquipeOficialDefaultArgs> = $Result.GetResult<Prisma.$EquipeOficialPayload, S>

  type EquipeOficialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipeOficialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipeOficialCountAggregateInputType | true
    }

  export interface EquipeOficialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EquipeOficial'], meta: { name: 'EquipeOficial' } }
    /**
     * Find zero or one EquipeOficial that matches the filter.
     * @param {EquipeOficialFindUniqueArgs} args - Arguments to find a EquipeOficial
     * @example
     * // Get one EquipeOficial
     * const equipeOficial = await prisma.equipeOficial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipeOficialFindUniqueArgs>(args: SelectSubset<T, EquipeOficialFindUniqueArgs<ExtArgs>>): Prisma__EquipeOficialClient<$Result.GetResult<Prisma.$EquipeOficialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EquipeOficial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipeOficialFindUniqueOrThrowArgs} args - Arguments to find a EquipeOficial
     * @example
     * // Get one EquipeOficial
     * const equipeOficial = await prisma.equipeOficial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipeOficialFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipeOficialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipeOficialClient<$Result.GetResult<Prisma.$EquipeOficialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EquipeOficial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeOficialFindFirstArgs} args - Arguments to find a EquipeOficial
     * @example
     * // Get one EquipeOficial
     * const equipeOficial = await prisma.equipeOficial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipeOficialFindFirstArgs>(args?: SelectSubset<T, EquipeOficialFindFirstArgs<ExtArgs>>): Prisma__EquipeOficialClient<$Result.GetResult<Prisma.$EquipeOficialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EquipeOficial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeOficialFindFirstOrThrowArgs} args - Arguments to find a EquipeOficial
     * @example
     * // Get one EquipeOficial
     * const equipeOficial = await prisma.equipeOficial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipeOficialFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipeOficialFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipeOficialClient<$Result.GetResult<Prisma.$EquipeOficialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EquipeOficials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeOficialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EquipeOficials
     * const equipeOficials = await prisma.equipeOficial.findMany()
     * 
     * // Get first 10 EquipeOficials
     * const equipeOficials = await prisma.equipeOficial.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const equipeOficialWithIdOnly = await prisma.equipeOficial.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EquipeOficialFindManyArgs>(args?: SelectSubset<T, EquipeOficialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipeOficialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EquipeOficial.
     * @param {EquipeOficialCreateArgs} args - Arguments to create a EquipeOficial.
     * @example
     * // Create one EquipeOficial
     * const EquipeOficial = await prisma.equipeOficial.create({
     *   data: {
     *     // ... data to create a EquipeOficial
     *   }
     * })
     * 
     */
    create<T extends EquipeOficialCreateArgs>(args: SelectSubset<T, EquipeOficialCreateArgs<ExtArgs>>): Prisma__EquipeOficialClient<$Result.GetResult<Prisma.$EquipeOficialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EquipeOficials.
     * @param {EquipeOficialCreateManyArgs} args - Arguments to create many EquipeOficials.
     * @example
     * // Create many EquipeOficials
     * const equipeOficial = await prisma.equipeOficial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipeOficialCreateManyArgs>(args?: SelectSubset<T, EquipeOficialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EquipeOficials and returns the data saved in the database.
     * @param {EquipeOficialCreateManyAndReturnArgs} args - Arguments to create many EquipeOficials.
     * @example
     * // Create many EquipeOficials
     * const equipeOficial = await prisma.equipeOficial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EquipeOficials and only return the `id`
     * const equipeOficialWithIdOnly = await prisma.equipeOficial.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipeOficialCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipeOficialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipeOficialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EquipeOficial.
     * @param {EquipeOficialDeleteArgs} args - Arguments to delete one EquipeOficial.
     * @example
     * // Delete one EquipeOficial
     * const EquipeOficial = await prisma.equipeOficial.delete({
     *   where: {
     *     // ... filter to delete one EquipeOficial
     *   }
     * })
     * 
     */
    delete<T extends EquipeOficialDeleteArgs>(args: SelectSubset<T, EquipeOficialDeleteArgs<ExtArgs>>): Prisma__EquipeOficialClient<$Result.GetResult<Prisma.$EquipeOficialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EquipeOficial.
     * @param {EquipeOficialUpdateArgs} args - Arguments to update one EquipeOficial.
     * @example
     * // Update one EquipeOficial
     * const equipeOficial = await prisma.equipeOficial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipeOficialUpdateArgs>(args: SelectSubset<T, EquipeOficialUpdateArgs<ExtArgs>>): Prisma__EquipeOficialClient<$Result.GetResult<Prisma.$EquipeOficialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EquipeOficials.
     * @param {EquipeOficialDeleteManyArgs} args - Arguments to filter EquipeOficials to delete.
     * @example
     * // Delete a few EquipeOficials
     * const { count } = await prisma.equipeOficial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipeOficialDeleteManyArgs>(args?: SelectSubset<T, EquipeOficialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EquipeOficials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeOficialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EquipeOficials
     * const equipeOficial = await prisma.equipeOficial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipeOficialUpdateManyArgs>(args: SelectSubset<T, EquipeOficialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EquipeOficials and returns the data updated in the database.
     * @param {EquipeOficialUpdateManyAndReturnArgs} args - Arguments to update many EquipeOficials.
     * @example
     * // Update many EquipeOficials
     * const equipeOficial = await prisma.equipeOficial.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EquipeOficials and only return the `id`
     * const equipeOficialWithIdOnly = await prisma.equipeOficial.updateManyAndReturn({
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
    updateManyAndReturn<T extends EquipeOficialUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipeOficialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipeOficialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EquipeOficial.
     * @param {EquipeOficialUpsertArgs} args - Arguments to update or create a EquipeOficial.
     * @example
     * // Update or create a EquipeOficial
     * const equipeOficial = await prisma.equipeOficial.upsert({
     *   create: {
     *     // ... data to create a EquipeOficial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EquipeOficial we want to update
     *   }
     * })
     */
    upsert<T extends EquipeOficialUpsertArgs>(args: SelectSubset<T, EquipeOficialUpsertArgs<ExtArgs>>): Prisma__EquipeOficialClient<$Result.GetResult<Prisma.$EquipeOficialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EquipeOficials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeOficialCountArgs} args - Arguments to filter EquipeOficials to count.
     * @example
     * // Count the number of EquipeOficials
     * const count = await prisma.equipeOficial.count({
     *   where: {
     *     // ... the filter for the EquipeOficials we want to count
     *   }
     * })
    **/
    count<T extends EquipeOficialCountArgs>(
      args?: Subset<T, EquipeOficialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipeOficialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EquipeOficial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeOficialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EquipeOficialAggregateArgs>(args: Subset<T, EquipeOficialAggregateArgs>): Prisma.PrismaPromise<GetEquipeOficialAggregateType<T>>

    /**
     * Group by EquipeOficial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeOficialGroupByArgs} args - Group by arguments.
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
      T extends EquipeOficialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipeOficialGroupByArgs['orderBy'] }
        : { orderBy?: EquipeOficialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EquipeOficialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipeOficialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EquipeOficial model
   */
  readonly fields: EquipeOficialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EquipeOficial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipeOficialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    torneio<T extends TorneioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TorneioDefaultArgs<ExtArgs>>): Prisma__TorneioClient<$Result.GetResult<Prisma.$TorneioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    membros<T extends EquipeOficial$membrosArgs<ExtArgs> = {}>(args?: Subset<T, EquipeOficial$membrosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtletaEquipeOficialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    partidasComoEquipeOficial1<T extends EquipeOficial$partidasComoEquipeOficial1Args<ExtArgs> = {}>(args?: Subset<T, EquipeOficial$partidasComoEquipeOficial1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    partidasComoEquipeOficial2<T extends EquipeOficial$partidasComoEquipeOficial2Args<ExtArgs> = {}>(args?: Subset<T, EquipeOficial$partidasComoEquipeOficial2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the EquipeOficial model
   */
  interface EquipeOficialFieldRefs {
    readonly id: FieldRef<"EquipeOficial", 'Int'>
    readonly nome: FieldRef<"EquipeOficial", 'String'>
    readonly tipo: FieldRef<"EquipeOficial", 'String'>
    readonly createdAt: FieldRef<"EquipeOficial", 'DateTime'>
    readonly torneioId: FieldRef<"EquipeOficial", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * EquipeOficial findUnique
   */
  export type EquipeOficialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeOficial
     */
    select?: EquipeOficialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeOficial
     */
    omit?: EquipeOficialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeOficialInclude<ExtArgs> | null
    /**
     * Filter, which EquipeOficial to fetch.
     */
    where: EquipeOficialWhereUniqueInput
  }

  /**
   * EquipeOficial findUniqueOrThrow
   */
  export type EquipeOficialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeOficial
     */
    select?: EquipeOficialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeOficial
     */
    omit?: EquipeOficialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeOficialInclude<ExtArgs> | null
    /**
     * Filter, which EquipeOficial to fetch.
     */
    where: EquipeOficialWhereUniqueInput
  }

  /**
   * EquipeOficial findFirst
   */
  export type EquipeOficialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeOficial
     */
    select?: EquipeOficialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeOficial
     */
    omit?: EquipeOficialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeOficialInclude<ExtArgs> | null
    /**
     * Filter, which EquipeOficial to fetch.
     */
    where?: EquipeOficialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipeOficials to fetch.
     */
    orderBy?: EquipeOficialOrderByWithRelationInput | EquipeOficialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquipeOficials.
     */
    cursor?: EquipeOficialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipeOficials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipeOficials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipeOficials.
     */
    distinct?: EquipeOficialScalarFieldEnum | EquipeOficialScalarFieldEnum[]
  }

  /**
   * EquipeOficial findFirstOrThrow
   */
  export type EquipeOficialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeOficial
     */
    select?: EquipeOficialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeOficial
     */
    omit?: EquipeOficialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeOficialInclude<ExtArgs> | null
    /**
     * Filter, which EquipeOficial to fetch.
     */
    where?: EquipeOficialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipeOficials to fetch.
     */
    orderBy?: EquipeOficialOrderByWithRelationInput | EquipeOficialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquipeOficials.
     */
    cursor?: EquipeOficialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipeOficials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipeOficials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipeOficials.
     */
    distinct?: EquipeOficialScalarFieldEnum | EquipeOficialScalarFieldEnum[]
  }

  /**
   * EquipeOficial findMany
   */
  export type EquipeOficialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeOficial
     */
    select?: EquipeOficialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeOficial
     */
    omit?: EquipeOficialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeOficialInclude<ExtArgs> | null
    /**
     * Filter, which EquipeOficials to fetch.
     */
    where?: EquipeOficialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipeOficials to fetch.
     */
    orderBy?: EquipeOficialOrderByWithRelationInput | EquipeOficialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EquipeOficials.
     */
    cursor?: EquipeOficialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipeOficials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipeOficials.
     */
    skip?: number
    distinct?: EquipeOficialScalarFieldEnum | EquipeOficialScalarFieldEnum[]
  }

  /**
   * EquipeOficial create
   */
  export type EquipeOficialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeOficial
     */
    select?: EquipeOficialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeOficial
     */
    omit?: EquipeOficialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeOficialInclude<ExtArgs> | null
    /**
     * The data needed to create a EquipeOficial.
     */
    data: XOR<EquipeOficialCreateInput, EquipeOficialUncheckedCreateInput>
  }

  /**
   * EquipeOficial createMany
   */
  export type EquipeOficialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EquipeOficials.
     */
    data: EquipeOficialCreateManyInput | EquipeOficialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EquipeOficial createManyAndReturn
   */
  export type EquipeOficialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeOficial
     */
    select?: EquipeOficialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeOficial
     */
    omit?: EquipeOficialOmit<ExtArgs> | null
    /**
     * The data used to create many EquipeOficials.
     */
    data: EquipeOficialCreateManyInput | EquipeOficialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeOficialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EquipeOficial update
   */
  export type EquipeOficialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeOficial
     */
    select?: EquipeOficialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeOficial
     */
    omit?: EquipeOficialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeOficialInclude<ExtArgs> | null
    /**
     * The data needed to update a EquipeOficial.
     */
    data: XOR<EquipeOficialUpdateInput, EquipeOficialUncheckedUpdateInput>
    /**
     * Choose, which EquipeOficial to update.
     */
    where: EquipeOficialWhereUniqueInput
  }

  /**
   * EquipeOficial updateMany
   */
  export type EquipeOficialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EquipeOficials.
     */
    data: XOR<EquipeOficialUpdateManyMutationInput, EquipeOficialUncheckedUpdateManyInput>
    /**
     * Filter which EquipeOficials to update
     */
    where?: EquipeOficialWhereInput
    /**
     * Limit how many EquipeOficials to update.
     */
    limit?: number
  }

  /**
   * EquipeOficial updateManyAndReturn
   */
  export type EquipeOficialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeOficial
     */
    select?: EquipeOficialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeOficial
     */
    omit?: EquipeOficialOmit<ExtArgs> | null
    /**
     * The data used to update EquipeOficials.
     */
    data: XOR<EquipeOficialUpdateManyMutationInput, EquipeOficialUncheckedUpdateManyInput>
    /**
     * Filter which EquipeOficials to update
     */
    where?: EquipeOficialWhereInput
    /**
     * Limit how many EquipeOficials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeOficialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EquipeOficial upsert
   */
  export type EquipeOficialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeOficial
     */
    select?: EquipeOficialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeOficial
     */
    omit?: EquipeOficialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeOficialInclude<ExtArgs> | null
    /**
     * The filter to search for the EquipeOficial to update in case it exists.
     */
    where: EquipeOficialWhereUniqueInput
    /**
     * In case the EquipeOficial found by the `where` argument doesn't exist, create a new EquipeOficial with this data.
     */
    create: XOR<EquipeOficialCreateInput, EquipeOficialUncheckedCreateInput>
    /**
     * In case the EquipeOficial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipeOficialUpdateInput, EquipeOficialUncheckedUpdateInput>
  }

  /**
   * EquipeOficial delete
   */
  export type EquipeOficialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeOficial
     */
    select?: EquipeOficialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeOficial
     */
    omit?: EquipeOficialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeOficialInclude<ExtArgs> | null
    /**
     * Filter which EquipeOficial to delete.
     */
    where: EquipeOficialWhereUniqueInput
  }

  /**
   * EquipeOficial deleteMany
   */
  export type EquipeOficialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquipeOficials to delete
     */
    where?: EquipeOficialWhereInput
    /**
     * Limit how many EquipeOficials to delete.
     */
    limit?: number
  }

  /**
   * EquipeOficial.membros
   */
  export type EquipeOficial$membrosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtletaEquipeOficial
     */
    select?: AtletaEquipeOficialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtletaEquipeOficial
     */
    omit?: AtletaEquipeOficialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaEquipeOficialInclude<ExtArgs> | null
    where?: AtletaEquipeOficialWhereInput
    orderBy?: AtletaEquipeOficialOrderByWithRelationInput | AtletaEquipeOficialOrderByWithRelationInput[]
    cursor?: AtletaEquipeOficialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtletaEquipeOficialScalarFieldEnum | AtletaEquipeOficialScalarFieldEnum[]
  }

  /**
   * EquipeOficial.partidasComoEquipeOficial1
   */
  export type EquipeOficial$partidasComoEquipeOficial1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    where?: PartidaWhereInput
    orderBy?: PartidaOrderByWithRelationInput | PartidaOrderByWithRelationInput[]
    cursor?: PartidaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartidaScalarFieldEnum | PartidaScalarFieldEnum[]
  }

  /**
   * EquipeOficial.partidasComoEquipeOficial2
   */
  export type EquipeOficial$partidasComoEquipeOficial2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    where?: PartidaWhereInput
    orderBy?: PartidaOrderByWithRelationInput | PartidaOrderByWithRelationInput[]
    cursor?: PartidaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartidaScalarFieldEnum | PartidaScalarFieldEnum[]
  }

  /**
   * EquipeOficial without action
   */
  export type EquipeOficialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeOficial
     */
    select?: EquipeOficialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeOficial
     */
    omit?: EquipeOficialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeOficialInclude<ExtArgs> | null
  }


  /**
   * Model AtletaEquipeOficial
   */

  export type AggregateAtletaEquipeOficial = {
    _count: AtletaEquipeOficialCountAggregateOutputType | null
    _avg: AtletaEquipeOficialAvgAggregateOutputType | null
    _sum: AtletaEquipeOficialSumAggregateOutputType | null
    _min: AtletaEquipeOficialMinAggregateOutputType | null
    _max: AtletaEquipeOficialMaxAggregateOutputType | null
  }

  export type AtletaEquipeOficialAvgAggregateOutputType = {
    atletaId: number | null
    equipeOficialId: number | null
  }

  export type AtletaEquipeOficialSumAggregateOutputType = {
    atletaId: number | null
    equipeOficialId: number | null
  }

  export type AtletaEquipeOficialMinAggregateOutputType = {
    atletaId: number | null
    equipeOficialId: number | null
  }

  export type AtletaEquipeOficialMaxAggregateOutputType = {
    atletaId: number | null
    equipeOficialId: number | null
  }

  export type AtletaEquipeOficialCountAggregateOutputType = {
    atletaId: number
    equipeOficialId: number
    _all: number
  }


  export type AtletaEquipeOficialAvgAggregateInputType = {
    atletaId?: true
    equipeOficialId?: true
  }

  export type AtletaEquipeOficialSumAggregateInputType = {
    atletaId?: true
    equipeOficialId?: true
  }

  export type AtletaEquipeOficialMinAggregateInputType = {
    atletaId?: true
    equipeOficialId?: true
  }

  export type AtletaEquipeOficialMaxAggregateInputType = {
    atletaId?: true
    equipeOficialId?: true
  }

  export type AtletaEquipeOficialCountAggregateInputType = {
    atletaId?: true
    equipeOficialId?: true
    _all?: true
  }

  export type AtletaEquipeOficialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AtletaEquipeOficial to aggregate.
     */
    where?: AtletaEquipeOficialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtletaEquipeOficials to fetch.
     */
    orderBy?: AtletaEquipeOficialOrderByWithRelationInput | AtletaEquipeOficialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtletaEquipeOficialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtletaEquipeOficials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtletaEquipeOficials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AtletaEquipeOficials
    **/
    _count?: true | AtletaEquipeOficialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AtletaEquipeOficialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AtletaEquipeOficialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtletaEquipeOficialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtletaEquipeOficialMaxAggregateInputType
  }

  export type GetAtletaEquipeOficialAggregateType<T extends AtletaEquipeOficialAggregateArgs> = {
        [P in keyof T & keyof AggregateAtletaEquipeOficial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtletaEquipeOficial[P]>
      : GetScalarType<T[P], AggregateAtletaEquipeOficial[P]>
  }




  export type AtletaEquipeOficialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtletaEquipeOficialWhereInput
    orderBy?: AtletaEquipeOficialOrderByWithAggregationInput | AtletaEquipeOficialOrderByWithAggregationInput[]
    by: AtletaEquipeOficialScalarFieldEnum[] | AtletaEquipeOficialScalarFieldEnum
    having?: AtletaEquipeOficialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtletaEquipeOficialCountAggregateInputType | true
    _avg?: AtletaEquipeOficialAvgAggregateInputType
    _sum?: AtletaEquipeOficialSumAggregateInputType
    _min?: AtletaEquipeOficialMinAggregateInputType
    _max?: AtletaEquipeOficialMaxAggregateInputType
  }

  export type AtletaEquipeOficialGroupByOutputType = {
    atletaId: number
    equipeOficialId: number
    _count: AtletaEquipeOficialCountAggregateOutputType | null
    _avg: AtletaEquipeOficialAvgAggregateOutputType | null
    _sum: AtletaEquipeOficialSumAggregateOutputType | null
    _min: AtletaEquipeOficialMinAggregateOutputType | null
    _max: AtletaEquipeOficialMaxAggregateOutputType | null
  }

  type GetAtletaEquipeOficialGroupByPayload<T extends AtletaEquipeOficialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtletaEquipeOficialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtletaEquipeOficialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtletaEquipeOficialGroupByOutputType[P]>
            : GetScalarType<T[P], AtletaEquipeOficialGroupByOutputType[P]>
        }
      >
    >


  export type AtletaEquipeOficialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    atletaId?: boolean
    equipeOficialId?: boolean
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
    equipeOficial?: boolean | EquipeOficialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atletaEquipeOficial"]>

  export type AtletaEquipeOficialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    atletaId?: boolean
    equipeOficialId?: boolean
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
    equipeOficial?: boolean | EquipeOficialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atletaEquipeOficial"]>

  export type AtletaEquipeOficialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    atletaId?: boolean
    equipeOficialId?: boolean
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
    equipeOficial?: boolean | EquipeOficialDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atletaEquipeOficial"]>

  export type AtletaEquipeOficialSelectScalar = {
    atletaId?: boolean
    equipeOficialId?: boolean
  }

  export type AtletaEquipeOficialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"atletaId" | "equipeOficialId", ExtArgs["result"]["atletaEquipeOficial"]>
  export type AtletaEquipeOficialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
    equipeOficial?: boolean | EquipeOficialDefaultArgs<ExtArgs>
  }
  export type AtletaEquipeOficialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
    equipeOficial?: boolean | EquipeOficialDefaultArgs<ExtArgs>
  }
  export type AtletaEquipeOficialIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
    equipeOficial?: boolean | EquipeOficialDefaultArgs<ExtArgs>
  }

  export type $AtletaEquipeOficialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AtletaEquipeOficial"
    objects: {
      atleta: Prisma.$AtletaPayload<ExtArgs>
      equipeOficial: Prisma.$EquipeOficialPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      atletaId: number
      equipeOficialId: number
    }, ExtArgs["result"]["atletaEquipeOficial"]>
    composites: {}
  }

  type AtletaEquipeOficialGetPayload<S extends boolean | null | undefined | AtletaEquipeOficialDefaultArgs> = $Result.GetResult<Prisma.$AtletaEquipeOficialPayload, S>

  type AtletaEquipeOficialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AtletaEquipeOficialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AtletaEquipeOficialCountAggregateInputType | true
    }

  export interface AtletaEquipeOficialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AtletaEquipeOficial'], meta: { name: 'AtletaEquipeOficial' } }
    /**
     * Find zero or one AtletaEquipeOficial that matches the filter.
     * @param {AtletaEquipeOficialFindUniqueArgs} args - Arguments to find a AtletaEquipeOficial
     * @example
     * // Get one AtletaEquipeOficial
     * const atletaEquipeOficial = await prisma.atletaEquipeOficial.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AtletaEquipeOficialFindUniqueArgs>(args: SelectSubset<T, AtletaEquipeOficialFindUniqueArgs<ExtArgs>>): Prisma__AtletaEquipeOficialClient<$Result.GetResult<Prisma.$AtletaEquipeOficialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AtletaEquipeOficial that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AtletaEquipeOficialFindUniqueOrThrowArgs} args - Arguments to find a AtletaEquipeOficial
     * @example
     * // Get one AtletaEquipeOficial
     * const atletaEquipeOficial = await prisma.atletaEquipeOficial.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AtletaEquipeOficialFindUniqueOrThrowArgs>(args: SelectSubset<T, AtletaEquipeOficialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AtletaEquipeOficialClient<$Result.GetResult<Prisma.$AtletaEquipeOficialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AtletaEquipeOficial that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtletaEquipeOficialFindFirstArgs} args - Arguments to find a AtletaEquipeOficial
     * @example
     * // Get one AtletaEquipeOficial
     * const atletaEquipeOficial = await prisma.atletaEquipeOficial.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AtletaEquipeOficialFindFirstArgs>(args?: SelectSubset<T, AtletaEquipeOficialFindFirstArgs<ExtArgs>>): Prisma__AtletaEquipeOficialClient<$Result.GetResult<Prisma.$AtletaEquipeOficialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AtletaEquipeOficial that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtletaEquipeOficialFindFirstOrThrowArgs} args - Arguments to find a AtletaEquipeOficial
     * @example
     * // Get one AtletaEquipeOficial
     * const atletaEquipeOficial = await prisma.atletaEquipeOficial.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AtletaEquipeOficialFindFirstOrThrowArgs>(args?: SelectSubset<T, AtletaEquipeOficialFindFirstOrThrowArgs<ExtArgs>>): Prisma__AtletaEquipeOficialClient<$Result.GetResult<Prisma.$AtletaEquipeOficialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AtletaEquipeOficials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtletaEquipeOficialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AtletaEquipeOficials
     * const atletaEquipeOficials = await prisma.atletaEquipeOficial.findMany()
     * 
     * // Get first 10 AtletaEquipeOficials
     * const atletaEquipeOficials = await prisma.atletaEquipeOficial.findMany({ take: 10 })
     * 
     * // Only select the `atletaId`
     * const atletaEquipeOficialWithAtletaIdOnly = await prisma.atletaEquipeOficial.findMany({ select: { atletaId: true } })
     * 
     */
    findMany<T extends AtletaEquipeOficialFindManyArgs>(args?: SelectSubset<T, AtletaEquipeOficialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtletaEquipeOficialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AtletaEquipeOficial.
     * @param {AtletaEquipeOficialCreateArgs} args - Arguments to create a AtletaEquipeOficial.
     * @example
     * // Create one AtletaEquipeOficial
     * const AtletaEquipeOficial = await prisma.atletaEquipeOficial.create({
     *   data: {
     *     // ... data to create a AtletaEquipeOficial
     *   }
     * })
     * 
     */
    create<T extends AtletaEquipeOficialCreateArgs>(args: SelectSubset<T, AtletaEquipeOficialCreateArgs<ExtArgs>>): Prisma__AtletaEquipeOficialClient<$Result.GetResult<Prisma.$AtletaEquipeOficialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AtletaEquipeOficials.
     * @param {AtletaEquipeOficialCreateManyArgs} args - Arguments to create many AtletaEquipeOficials.
     * @example
     * // Create many AtletaEquipeOficials
     * const atletaEquipeOficial = await prisma.atletaEquipeOficial.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AtletaEquipeOficialCreateManyArgs>(args?: SelectSubset<T, AtletaEquipeOficialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AtletaEquipeOficials and returns the data saved in the database.
     * @param {AtletaEquipeOficialCreateManyAndReturnArgs} args - Arguments to create many AtletaEquipeOficials.
     * @example
     * // Create many AtletaEquipeOficials
     * const atletaEquipeOficial = await prisma.atletaEquipeOficial.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AtletaEquipeOficials and only return the `atletaId`
     * const atletaEquipeOficialWithAtletaIdOnly = await prisma.atletaEquipeOficial.createManyAndReturn({
     *   select: { atletaId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AtletaEquipeOficialCreateManyAndReturnArgs>(args?: SelectSubset<T, AtletaEquipeOficialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtletaEquipeOficialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AtletaEquipeOficial.
     * @param {AtletaEquipeOficialDeleteArgs} args - Arguments to delete one AtletaEquipeOficial.
     * @example
     * // Delete one AtletaEquipeOficial
     * const AtletaEquipeOficial = await prisma.atletaEquipeOficial.delete({
     *   where: {
     *     // ... filter to delete one AtletaEquipeOficial
     *   }
     * })
     * 
     */
    delete<T extends AtletaEquipeOficialDeleteArgs>(args: SelectSubset<T, AtletaEquipeOficialDeleteArgs<ExtArgs>>): Prisma__AtletaEquipeOficialClient<$Result.GetResult<Prisma.$AtletaEquipeOficialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AtletaEquipeOficial.
     * @param {AtletaEquipeOficialUpdateArgs} args - Arguments to update one AtletaEquipeOficial.
     * @example
     * // Update one AtletaEquipeOficial
     * const atletaEquipeOficial = await prisma.atletaEquipeOficial.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AtletaEquipeOficialUpdateArgs>(args: SelectSubset<T, AtletaEquipeOficialUpdateArgs<ExtArgs>>): Prisma__AtletaEquipeOficialClient<$Result.GetResult<Prisma.$AtletaEquipeOficialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AtletaEquipeOficials.
     * @param {AtletaEquipeOficialDeleteManyArgs} args - Arguments to filter AtletaEquipeOficials to delete.
     * @example
     * // Delete a few AtletaEquipeOficials
     * const { count } = await prisma.atletaEquipeOficial.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AtletaEquipeOficialDeleteManyArgs>(args?: SelectSubset<T, AtletaEquipeOficialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AtletaEquipeOficials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtletaEquipeOficialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AtletaEquipeOficials
     * const atletaEquipeOficial = await prisma.atletaEquipeOficial.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AtletaEquipeOficialUpdateManyArgs>(args: SelectSubset<T, AtletaEquipeOficialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AtletaEquipeOficials and returns the data updated in the database.
     * @param {AtletaEquipeOficialUpdateManyAndReturnArgs} args - Arguments to update many AtletaEquipeOficials.
     * @example
     * // Update many AtletaEquipeOficials
     * const atletaEquipeOficial = await prisma.atletaEquipeOficial.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AtletaEquipeOficials and only return the `atletaId`
     * const atletaEquipeOficialWithAtletaIdOnly = await prisma.atletaEquipeOficial.updateManyAndReturn({
     *   select: { atletaId: true },
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
    updateManyAndReturn<T extends AtletaEquipeOficialUpdateManyAndReturnArgs>(args: SelectSubset<T, AtletaEquipeOficialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtletaEquipeOficialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AtletaEquipeOficial.
     * @param {AtletaEquipeOficialUpsertArgs} args - Arguments to update or create a AtletaEquipeOficial.
     * @example
     * // Update or create a AtletaEquipeOficial
     * const atletaEquipeOficial = await prisma.atletaEquipeOficial.upsert({
     *   create: {
     *     // ... data to create a AtletaEquipeOficial
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AtletaEquipeOficial we want to update
     *   }
     * })
     */
    upsert<T extends AtletaEquipeOficialUpsertArgs>(args: SelectSubset<T, AtletaEquipeOficialUpsertArgs<ExtArgs>>): Prisma__AtletaEquipeOficialClient<$Result.GetResult<Prisma.$AtletaEquipeOficialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AtletaEquipeOficials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtletaEquipeOficialCountArgs} args - Arguments to filter AtletaEquipeOficials to count.
     * @example
     * // Count the number of AtletaEquipeOficials
     * const count = await prisma.atletaEquipeOficial.count({
     *   where: {
     *     // ... the filter for the AtletaEquipeOficials we want to count
     *   }
     * })
    **/
    count<T extends AtletaEquipeOficialCountArgs>(
      args?: Subset<T, AtletaEquipeOficialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtletaEquipeOficialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AtletaEquipeOficial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtletaEquipeOficialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AtletaEquipeOficialAggregateArgs>(args: Subset<T, AtletaEquipeOficialAggregateArgs>): Prisma.PrismaPromise<GetAtletaEquipeOficialAggregateType<T>>

    /**
     * Group by AtletaEquipeOficial.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtletaEquipeOficialGroupByArgs} args - Group by arguments.
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
      T extends AtletaEquipeOficialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtletaEquipeOficialGroupByArgs['orderBy'] }
        : { orderBy?: AtletaEquipeOficialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AtletaEquipeOficialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtletaEquipeOficialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AtletaEquipeOficial model
   */
  readonly fields: AtletaEquipeOficialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AtletaEquipeOficial.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtletaEquipeOficialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    atleta<T extends AtletaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AtletaDefaultArgs<ExtArgs>>): Prisma__AtletaClient<$Result.GetResult<Prisma.$AtletaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    equipeOficial<T extends EquipeOficialDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipeOficialDefaultArgs<ExtArgs>>): Prisma__EquipeOficialClient<$Result.GetResult<Prisma.$EquipeOficialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AtletaEquipeOficial model
   */
  interface AtletaEquipeOficialFieldRefs {
    readonly atletaId: FieldRef<"AtletaEquipeOficial", 'Int'>
    readonly equipeOficialId: FieldRef<"AtletaEquipeOficial", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AtletaEquipeOficial findUnique
   */
  export type AtletaEquipeOficialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtletaEquipeOficial
     */
    select?: AtletaEquipeOficialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtletaEquipeOficial
     */
    omit?: AtletaEquipeOficialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaEquipeOficialInclude<ExtArgs> | null
    /**
     * Filter, which AtletaEquipeOficial to fetch.
     */
    where: AtletaEquipeOficialWhereUniqueInput
  }

  /**
   * AtletaEquipeOficial findUniqueOrThrow
   */
  export type AtletaEquipeOficialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtletaEquipeOficial
     */
    select?: AtletaEquipeOficialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtletaEquipeOficial
     */
    omit?: AtletaEquipeOficialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaEquipeOficialInclude<ExtArgs> | null
    /**
     * Filter, which AtletaEquipeOficial to fetch.
     */
    where: AtletaEquipeOficialWhereUniqueInput
  }

  /**
   * AtletaEquipeOficial findFirst
   */
  export type AtletaEquipeOficialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtletaEquipeOficial
     */
    select?: AtletaEquipeOficialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtletaEquipeOficial
     */
    omit?: AtletaEquipeOficialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaEquipeOficialInclude<ExtArgs> | null
    /**
     * Filter, which AtletaEquipeOficial to fetch.
     */
    where?: AtletaEquipeOficialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtletaEquipeOficials to fetch.
     */
    orderBy?: AtletaEquipeOficialOrderByWithRelationInput | AtletaEquipeOficialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AtletaEquipeOficials.
     */
    cursor?: AtletaEquipeOficialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtletaEquipeOficials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtletaEquipeOficials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AtletaEquipeOficials.
     */
    distinct?: AtletaEquipeOficialScalarFieldEnum | AtletaEquipeOficialScalarFieldEnum[]
  }

  /**
   * AtletaEquipeOficial findFirstOrThrow
   */
  export type AtletaEquipeOficialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtletaEquipeOficial
     */
    select?: AtletaEquipeOficialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtletaEquipeOficial
     */
    omit?: AtletaEquipeOficialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaEquipeOficialInclude<ExtArgs> | null
    /**
     * Filter, which AtletaEquipeOficial to fetch.
     */
    where?: AtletaEquipeOficialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtletaEquipeOficials to fetch.
     */
    orderBy?: AtletaEquipeOficialOrderByWithRelationInput | AtletaEquipeOficialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AtletaEquipeOficials.
     */
    cursor?: AtletaEquipeOficialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtletaEquipeOficials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtletaEquipeOficials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AtletaEquipeOficials.
     */
    distinct?: AtletaEquipeOficialScalarFieldEnum | AtletaEquipeOficialScalarFieldEnum[]
  }

  /**
   * AtletaEquipeOficial findMany
   */
  export type AtletaEquipeOficialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtletaEquipeOficial
     */
    select?: AtletaEquipeOficialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtletaEquipeOficial
     */
    omit?: AtletaEquipeOficialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaEquipeOficialInclude<ExtArgs> | null
    /**
     * Filter, which AtletaEquipeOficials to fetch.
     */
    where?: AtletaEquipeOficialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AtletaEquipeOficials to fetch.
     */
    orderBy?: AtletaEquipeOficialOrderByWithRelationInput | AtletaEquipeOficialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AtletaEquipeOficials.
     */
    cursor?: AtletaEquipeOficialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AtletaEquipeOficials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AtletaEquipeOficials.
     */
    skip?: number
    distinct?: AtletaEquipeOficialScalarFieldEnum | AtletaEquipeOficialScalarFieldEnum[]
  }

  /**
   * AtletaEquipeOficial create
   */
  export type AtletaEquipeOficialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtletaEquipeOficial
     */
    select?: AtletaEquipeOficialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtletaEquipeOficial
     */
    omit?: AtletaEquipeOficialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaEquipeOficialInclude<ExtArgs> | null
    /**
     * The data needed to create a AtletaEquipeOficial.
     */
    data: XOR<AtletaEquipeOficialCreateInput, AtletaEquipeOficialUncheckedCreateInput>
  }

  /**
   * AtletaEquipeOficial createMany
   */
  export type AtletaEquipeOficialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AtletaEquipeOficials.
     */
    data: AtletaEquipeOficialCreateManyInput | AtletaEquipeOficialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AtletaEquipeOficial createManyAndReturn
   */
  export type AtletaEquipeOficialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtletaEquipeOficial
     */
    select?: AtletaEquipeOficialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AtletaEquipeOficial
     */
    omit?: AtletaEquipeOficialOmit<ExtArgs> | null
    /**
     * The data used to create many AtletaEquipeOficials.
     */
    data: AtletaEquipeOficialCreateManyInput | AtletaEquipeOficialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaEquipeOficialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AtletaEquipeOficial update
   */
  export type AtletaEquipeOficialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtletaEquipeOficial
     */
    select?: AtletaEquipeOficialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtletaEquipeOficial
     */
    omit?: AtletaEquipeOficialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaEquipeOficialInclude<ExtArgs> | null
    /**
     * The data needed to update a AtletaEquipeOficial.
     */
    data: XOR<AtletaEquipeOficialUpdateInput, AtletaEquipeOficialUncheckedUpdateInput>
    /**
     * Choose, which AtletaEquipeOficial to update.
     */
    where: AtletaEquipeOficialWhereUniqueInput
  }

  /**
   * AtletaEquipeOficial updateMany
   */
  export type AtletaEquipeOficialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AtletaEquipeOficials.
     */
    data: XOR<AtletaEquipeOficialUpdateManyMutationInput, AtletaEquipeOficialUncheckedUpdateManyInput>
    /**
     * Filter which AtletaEquipeOficials to update
     */
    where?: AtletaEquipeOficialWhereInput
    /**
     * Limit how many AtletaEquipeOficials to update.
     */
    limit?: number
  }

  /**
   * AtletaEquipeOficial updateManyAndReturn
   */
  export type AtletaEquipeOficialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtletaEquipeOficial
     */
    select?: AtletaEquipeOficialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AtletaEquipeOficial
     */
    omit?: AtletaEquipeOficialOmit<ExtArgs> | null
    /**
     * The data used to update AtletaEquipeOficials.
     */
    data: XOR<AtletaEquipeOficialUpdateManyMutationInput, AtletaEquipeOficialUncheckedUpdateManyInput>
    /**
     * Filter which AtletaEquipeOficials to update
     */
    where?: AtletaEquipeOficialWhereInput
    /**
     * Limit how many AtletaEquipeOficials to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaEquipeOficialIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AtletaEquipeOficial upsert
   */
  export type AtletaEquipeOficialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtletaEquipeOficial
     */
    select?: AtletaEquipeOficialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtletaEquipeOficial
     */
    omit?: AtletaEquipeOficialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaEquipeOficialInclude<ExtArgs> | null
    /**
     * The filter to search for the AtletaEquipeOficial to update in case it exists.
     */
    where: AtletaEquipeOficialWhereUniqueInput
    /**
     * In case the AtletaEquipeOficial found by the `where` argument doesn't exist, create a new AtletaEquipeOficial with this data.
     */
    create: XOR<AtletaEquipeOficialCreateInput, AtletaEquipeOficialUncheckedCreateInput>
    /**
     * In case the AtletaEquipeOficial was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtletaEquipeOficialUpdateInput, AtletaEquipeOficialUncheckedUpdateInput>
  }

  /**
   * AtletaEquipeOficial delete
   */
  export type AtletaEquipeOficialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtletaEquipeOficial
     */
    select?: AtletaEquipeOficialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtletaEquipeOficial
     */
    omit?: AtletaEquipeOficialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaEquipeOficialInclude<ExtArgs> | null
    /**
     * Filter which AtletaEquipeOficial to delete.
     */
    where: AtletaEquipeOficialWhereUniqueInput
  }

  /**
   * AtletaEquipeOficial deleteMany
   */
  export type AtletaEquipeOficialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AtletaEquipeOficials to delete
     */
    where?: AtletaEquipeOficialWhereInput
    /**
     * Limit how many AtletaEquipeOficials to delete.
     */
    limit?: number
  }

  /**
   * AtletaEquipeOficial without action
   */
  export type AtletaEquipeOficialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AtletaEquipeOficial
     */
    select?: AtletaEquipeOficialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AtletaEquipeOficial
     */
    omit?: AtletaEquipeOficialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtletaEquipeOficialInclude<ExtArgs> | null
  }


  /**
   * Model Partida
   */

  export type AggregatePartida = {
    _count: PartidaCountAggregateOutputType | null
    _avg: PartidaAvgAggregateOutputType | null
    _sum: PartidaSumAggregateOutputType | null
    _min: PartidaMinAggregateOutputType | null
    _max: PartidaMaxAggregateOutputType | null
  }

  export type PartidaAvgAggregateOutputType = {
    id: number | null
    torneioId: number | null
    equipeAmador1Id: number | null
    equipeAmador2Id: number | null
    equipeOficial1Id: number | null
    equipeOficial2Id: number | null
    pontosEquipe1: number | null
    pontosEquipe2: number | null
    vencedorId: number | null
  }

  export type PartidaSumAggregateOutputType = {
    id: number | null
    torneioId: number | null
    equipeAmador1Id: number | null
    equipeAmador2Id: number | null
    equipeOficial1Id: number | null
    equipeOficial2Id: number | null
    pontosEquipe1: number | null
    pontosEquipe2: number | null
    vencedorId: number | null
  }

  export type PartidaMinAggregateOutputType = {
    id: number | null
    torneioId: number | null
    fase: string | null
    equipeAmador1Id: number | null
    equipeAmador2Id: number | null
    equipeOficial1Id: number | null
    equipeOficial2Id: number | null
    pontosEquipe1: number | null
    pontosEquipe2: number | null
    vencedorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartidaMaxAggregateOutputType = {
    id: number | null
    torneioId: number | null
    fase: string | null
    equipeAmador1Id: number | null
    equipeAmador2Id: number | null
    equipeOficial1Id: number | null
    equipeOficial2Id: number | null
    pontosEquipe1: number | null
    pontosEquipe2: number | null
    vencedorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PartidaCountAggregateOutputType = {
    id: number
    torneioId: number
    fase: number
    equipeAmador1Id: number
    equipeAmador2Id: number
    equipeOficial1Id: number
    equipeOficial2Id: number
    pontosEquipe1: number
    pontosEquipe2: number
    vencedorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PartidaAvgAggregateInputType = {
    id?: true
    torneioId?: true
    equipeAmador1Id?: true
    equipeAmador2Id?: true
    equipeOficial1Id?: true
    equipeOficial2Id?: true
    pontosEquipe1?: true
    pontosEquipe2?: true
    vencedorId?: true
  }

  export type PartidaSumAggregateInputType = {
    id?: true
    torneioId?: true
    equipeAmador1Id?: true
    equipeAmador2Id?: true
    equipeOficial1Id?: true
    equipeOficial2Id?: true
    pontosEquipe1?: true
    pontosEquipe2?: true
    vencedorId?: true
  }

  export type PartidaMinAggregateInputType = {
    id?: true
    torneioId?: true
    fase?: true
    equipeAmador1Id?: true
    equipeAmador2Id?: true
    equipeOficial1Id?: true
    equipeOficial2Id?: true
    pontosEquipe1?: true
    pontosEquipe2?: true
    vencedorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartidaMaxAggregateInputType = {
    id?: true
    torneioId?: true
    fase?: true
    equipeAmador1Id?: true
    equipeAmador2Id?: true
    equipeOficial1Id?: true
    equipeOficial2Id?: true
    pontosEquipe1?: true
    pontosEquipe2?: true
    vencedorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PartidaCountAggregateInputType = {
    id?: true
    torneioId?: true
    fase?: true
    equipeAmador1Id?: true
    equipeAmador2Id?: true
    equipeOficial1Id?: true
    equipeOficial2Id?: true
    pontosEquipe1?: true
    pontosEquipe2?: true
    vencedorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PartidaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partida to aggregate.
     */
    where?: PartidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partidas to fetch.
     */
    orderBy?: PartidaOrderByWithRelationInput | PartidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Partidas
    **/
    _count?: true | PartidaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartidaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartidaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartidaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartidaMaxAggregateInputType
  }

  export type GetPartidaAggregateType<T extends PartidaAggregateArgs> = {
        [P in keyof T & keyof AggregatePartida]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartida[P]>
      : GetScalarType<T[P], AggregatePartida[P]>
  }




  export type PartidaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartidaWhereInput
    orderBy?: PartidaOrderByWithAggregationInput | PartidaOrderByWithAggregationInput[]
    by: PartidaScalarFieldEnum[] | PartidaScalarFieldEnum
    having?: PartidaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartidaCountAggregateInputType | true
    _avg?: PartidaAvgAggregateInputType
    _sum?: PartidaSumAggregateInputType
    _min?: PartidaMinAggregateInputType
    _max?: PartidaMaxAggregateInputType
  }

  export type PartidaGroupByOutputType = {
    id: number
    torneioId: number
    fase: string
    equipeAmador1Id: number | null
    equipeAmador2Id: number | null
    equipeOficial1Id: number | null
    equipeOficial2Id: number | null
    pontosEquipe1: number | null
    pontosEquipe2: number | null
    vencedorId: number | null
    createdAt: Date
    updatedAt: Date
    _count: PartidaCountAggregateOutputType | null
    _avg: PartidaAvgAggregateOutputType | null
    _sum: PartidaSumAggregateOutputType | null
    _min: PartidaMinAggregateOutputType | null
    _max: PartidaMaxAggregateOutputType | null
  }

  type GetPartidaGroupByPayload<T extends PartidaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartidaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartidaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartidaGroupByOutputType[P]>
            : GetScalarType<T[P], PartidaGroupByOutputType[P]>
        }
      >
    >


  export type PartidaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    torneioId?: boolean
    fase?: boolean
    equipeAmador1Id?: boolean
    equipeAmador2Id?: boolean
    equipeOficial1Id?: boolean
    equipeOficial2Id?: boolean
    pontosEquipe1?: boolean
    pontosEquipe2?: boolean
    vencedorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
    equipeAmador1?: boolean | Partida$equipeAmador1Args<ExtArgs>
    equipeAmador2?: boolean | Partida$equipeAmador2Args<ExtArgs>
    equipeOficial1?: boolean | Partida$equipeOficial1Args<ExtArgs>
    equipeOficial2?: boolean | Partida$equipeOficial2Args<ExtArgs>
  }, ExtArgs["result"]["partida"]>

  export type PartidaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    torneioId?: boolean
    fase?: boolean
    equipeAmador1Id?: boolean
    equipeAmador2Id?: boolean
    equipeOficial1Id?: boolean
    equipeOficial2Id?: boolean
    pontosEquipe1?: boolean
    pontosEquipe2?: boolean
    vencedorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
    equipeAmador1?: boolean | Partida$equipeAmador1Args<ExtArgs>
    equipeAmador2?: boolean | Partida$equipeAmador2Args<ExtArgs>
    equipeOficial1?: boolean | Partida$equipeOficial1Args<ExtArgs>
    equipeOficial2?: boolean | Partida$equipeOficial2Args<ExtArgs>
  }, ExtArgs["result"]["partida"]>

  export type PartidaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    torneioId?: boolean
    fase?: boolean
    equipeAmador1Id?: boolean
    equipeAmador2Id?: boolean
    equipeOficial1Id?: boolean
    equipeOficial2Id?: boolean
    pontosEquipe1?: boolean
    pontosEquipe2?: boolean
    vencedorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
    equipeAmador1?: boolean | Partida$equipeAmador1Args<ExtArgs>
    equipeAmador2?: boolean | Partida$equipeAmador2Args<ExtArgs>
    equipeOficial1?: boolean | Partida$equipeOficial1Args<ExtArgs>
    equipeOficial2?: boolean | Partida$equipeOficial2Args<ExtArgs>
  }, ExtArgs["result"]["partida"]>

  export type PartidaSelectScalar = {
    id?: boolean
    torneioId?: boolean
    fase?: boolean
    equipeAmador1Id?: boolean
    equipeAmador2Id?: boolean
    equipeOficial1Id?: boolean
    equipeOficial2Id?: boolean
    pontosEquipe1?: boolean
    pontosEquipe2?: boolean
    vencedorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PartidaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "torneioId" | "fase" | "equipeAmador1Id" | "equipeAmador2Id" | "equipeOficial1Id" | "equipeOficial2Id" | "pontosEquipe1" | "pontosEquipe2" | "vencedorId" | "createdAt" | "updatedAt", ExtArgs["result"]["partida"]>
  export type PartidaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
    equipeAmador1?: boolean | Partida$equipeAmador1Args<ExtArgs>
    equipeAmador2?: boolean | Partida$equipeAmador2Args<ExtArgs>
    equipeOficial1?: boolean | Partida$equipeOficial1Args<ExtArgs>
    equipeOficial2?: boolean | Partida$equipeOficial2Args<ExtArgs>
  }
  export type PartidaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
    equipeAmador1?: boolean | Partida$equipeAmador1Args<ExtArgs>
    equipeAmador2?: boolean | Partida$equipeAmador2Args<ExtArgs>
    equipeOficial1?: boolean | Partida$equipeOficial1Args<ExtArgs>
    equipeOficial2?: boolean | Partida$equipeOficial2Args<ExtArgs>
  }
  export type PartidaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
    equipeAmador1?: boolean | Partida$equipeAmador1Args<ExtArgs>
    equipeAmador2?: boolean | Partida$equipeAmador2Args<ExtArgs>
    equipeOficial1?: boolean | Partida$equipeOficial1Args<ExtArgs>
    equipeOficial2?: boolean | Partida$equipeOficial2Args<ExtArgs>
  }

  export type $PartidaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Partida"
    objects: {
      torneio: Prisma.$TorneioPayload<ExtArgs>
      equipeAmador1: Prisma.$EquipeAmadorPayload<ExtArgs> | null
      equipeAmador2: Prisma.$EquipeAmadorPayload<ExtArgs> | null
      equipeOficial1: Prisma.$EquipeOficialPayload<ExtArgs> | null
      equipeOficial2: Prisma.$EquipeOficialPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      torneioId: number
      fase: string
      equipeAmador1Id: number | null
      equipeAmador2Id: number | null
      equipeOficial1Id: number | null
      equipeOficial2Id: number | null
      pontosEquipe1: number | null
      pontosEquipe2: number | null
      vencedorId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["partida"]>
    composites: {}
  }

  type PartidaGetPayload<S extends boolean | null | undefined | PartidaDefaultArgs> = $Result.GetResult<Prisma.$PartidaPayload, S>

  type PartidaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartidaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartidaCountAggregateInputType | true
    }

  export interface PartidaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Partida'], meta: { name: 'Partida' } }
    /**
     * Find zero or one Partida that matches the filter.
     * @param {PartidaFindUniqueArgs} args - Arguments to find a Partida
     * @example
     * // Get one Partida
     * const partida = await prisma.partida.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartidaFindUniqueArgs>(args: SelectSubset<T, PartidaFindUniqueArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Partida that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartidaFindUniqueOrThrowArgs} args - Arguments to find a Partida
     * @example
     * // Get one Partida
     * const partida = await prisma.partida.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartidaFindUniqueOrThrowArgs>(args: SelectSubset<T, PartidaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Partida that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidaFindFirstArgs} args - Arguments to find a Partida
     * @example
     * // Get one Partida
     * const partida = await prisma.partida.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartidaFindFirstArgs>(args?: SelectSubset<T, PartidaFindFirstArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Partida that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidaFindFirstOrThrowArgs} args - Arguments to find a Partida
     * @example
     * // Get one Partida
     * const partida = await prisma.partida.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartidaFindFirstOrThrowArgs>(args?: SelectSubset<T, PartidaFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Partidas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Partidas
     * const partidas = await prisma.partida.findMany()
     * 
     * // Get first 10 Partidas
     * const partidas = await prisma.partida.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const partidaWithIdOnly = await prisma.partida.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PartidaFindManyArgs>(args?: SelectSubset<T, PartidaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Partida.
     * @param {PartidaCreateArgs} args - Arguments to create a Partida.
     * @example
     * // Create one Partida
     * const Partida = await prisma.partida.create({
     *   data: {
     *     // ... data to create a Partida
     *   }
     * })
     * 
     */
    create<T extends PartidaCreateArgs>(args: SelectSubset<T, PartidaCreateArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Partidas.
     * @param {PartidaCreateManyArgs} args - Arguments to create many Partidas.
     * @example
     * // Create many Partidas
     * const partida = await prisma.partida.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartidaCreateManyArgs>(args?: SelectSubset<T, PartidaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Partidas and returns the data saved in the database.
     * @param {PartidaCreateManyAndReturnArgs} args - Arguments to create many Partidas.
     * @example
     * // Create many Partidas
     * const partida = await prisma.partida.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Partidas and only return the `id`
     * const partidaWithIdOnly = await prisma.partida.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartidaCreateManyAndReturnArgs>(args?: SelectSubset<T, PartidaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Partida.
     * @param {PartidaDeleteArgs} args - Arguments to delete one Partida.
     * @example
     * // Delete one Partida
     * const Partida = await prisma.partida.delete({
     *   where: {
     *     // ... filter to delete one Partida
     *   }
     * })
     * 
     */
    delete<T extends PartidaDeleteArgs>(args: SelectSubset<T, PartidaDeleteArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Partida.
     * @param {PartidaUpdateArgs} args - Arguments to update one Partida.
     * @example
     * // Update one Partida
     * const partida = await prisma.partida.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartidaUpdateArgs>(args: SelectSubset<T, PartidaUpdateArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Partidas.
     * @param {PartidaDeleteManyArgs} args - Arguments to filter Partidas to delete.
     * @example
     * // Delete a few Partidas
     * const { count } = await prisma.partida.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartidaDeleteManyArgs>(args?: SelectSubset<T, PartidaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Partidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Partidas
     * const partida = await prisma.partida.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartidaUpdateManyArgs>(args: SelectSubset<T, PartidaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Partidas and returns the data updated in the database.
     * @param {PartidaUpdateManyAndReturnArgs} args - Arguments to update many Partidas.
     * @example
     * // Update many Partidas
     * const partida = await prisma.partida.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Partidas and only return the `id`
     * const partidaWithIdOnly = await prisma.partida.updateManyAndReturn({
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
    updateManyAndReturn<T extends PartidaUpdateManyAndReturnArgs>(args: SelectSubset<T, PartidaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Partida.
     * @param {PartidaUpsertArgs} args - Arguments to update or create a Partida.
     * @example
     * // Update or create a Partida
     * const partida = await prisma.partida.upsert({
     *   create: {
     *     // ... data to create a Partida
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Partida we want to update
     *   }
     * })
     */
    upsert<T extends PartidaUpsertArgs>(args: SelectSubset<T, PartidaUpsertArgs<ExtArgs>>): Prisma__PartidaClient<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Partidas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidaCountArgs} args - Arguments to filter Partidas to count.
     * @example
     * // Count the number of Partidas
     * const count = await prisma.partida.count({
     *   where: {
     *     // ... the filter for the Partidas we want to count
     *   }
     * })
    **/
    count<T extends PartidaCountArgs>(
      args?: Subset<T, PartidaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartidaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Partida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PartidaAggregateArgs>(args: Subset<T, PartidaAggregateArgs>): Prisma.PrismaPromise<GetPartidaAggregateType<T>>

    /**
     * Group by Partida.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartidaGroupByArgs} args - Group by arguments.
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
      T extends PartidaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartidaGroupByArgs['orderBy'] }
        : { orderBy?: PartidaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PartidaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartidaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Partida model
   */
  readonly fields: PartidaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Partida.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartidaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    torneio<T extends TorneioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TorneioDefaultArgs<ExtArgs>>): Prisma__TorneioClient<$Result.GetResult<Prisma.$TorneioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    equipeAmador1<T extends Partida$equipeAmador1Args<ExtArgs> = {}>(args?: Subset<T, Partida$equipeAmador1Args<ExtArgs>>): Prisma__EquipeAmadorClient<$Result.GetResult<Prisma.$EquipeAmadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    equipeAmador2<T extends Partida$equipeAmador2Args<ExtArgs> = {}>(args?: Subset<T, Partida$equipeAmador2Args<ExtArgs>>): Prisma__EquipeAmadorClient<$Result.GetResult<Prisma.$EquipeAmadorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    equipeOficial1<T extends Partida$equipeOficial1Args<ExtArgs> = {}>(args?: Subset<T, Partida$equipeOficial1Args<ExtArgs>>): Prisma__EquipeOficialClient<$Result.GetResult<Prisma.$EquipeOficialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    equipeOficial2<T extends Partida$equipeOficial2Args<ExtArgs> = {}>(args?: Subset<T, Partida$equipeOficial2Args<ExtArgs>>): Prisma__EquipeOficialClient<$Result.GetResult<Prisma.$EquipeOficialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Partida model
   */
  interface PartidaFieldRefs {
    readonly id: FieldRef<"Partida", 'Int'>
    readonly torneioId: FieldRef<"Partida", 'Int'>
    readonly fase: FieldRef<"Partida", 'String'>
    readonly equipeAmador1Id: FieldRef<"Partida", 'Int'>
    readonly equipeAmador2Id: FieldRef<"Partida", 'Int'>
    readonly equipeOficial1Id: FieldRef<"Partida", 'Int'>
    readonly equipeOficial2Id: FieldRef<"Partida", 'Int'>
    readonly pontosEquipe1: FieldRef<"Partida", 'Int'>
    readonly pontosEquipe2: FieldRef<"Partida", 'Int'>
    readonly vencedorId: FieldRef<"Partida", 'Int'>
    readonly createdAt: FieldRef<"Partida", 'DateTime'>
    readonly updatedAt: FieldRef<"Partida", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Partida findUnique
   */
  export type PartidaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * Filter, which Partida to fetch.
     */
    where: PartidaWhereUniqueInput
  }

  /**
   * Partida findUniqueOrThrow
   */
  export type PartidaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * Filter, which Partida to fetch.
     */
    where: PartidaWhereUniqueInput
  }

  /**
   * Partida findFirst
   */
  export type PartidaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * Filter, which Partida to fetch.
     */
    where?: PartidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partidas to fetch.
     */
    orderBy?: PartidaOrderByWithRelationInput | PartidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partidas.
     */
    cursor?: PartidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Partidas.
     */
    distinct?: PartidaScalarFieldEnum | PartidaScalarFieldEnum[]
  }

  /**
   * Partida findFirstOrThrow
   */
  export type PartidaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * Filter, which Partida to fetch.
     */
    where?: PartidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partidas to fetch.
     */
    orderBy?: PartidaOrderByWithRelationInput | PartidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partidas.
     */
    cursor?: PartidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partidas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Partidas.
     */
    distinct?: PartidaScalarFieldEnum | PartidaScalarFieldEnum[]
  }

  /**
   * Partida findMany
   */
  export type PartidaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * Filter, which Partidas to fetch.
     */
    where?: PartidaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partidas to fetch.
     */
    orderBy?: PartidaOrderByWithRelationInput | PartidaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Partidas.
     */
    cursor?: PartidaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partidas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partidas.
     */
    skip?: number
    distinct?: PartidaScalarFieldEnum | PartidaScalarFieldEnum[]
  }

  /**
   * Partida create
   */
  export type PartidaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * The data needed to create a Partida.
     */
    data: XOR<PartidaCreateInput, PartidaUncheckedCreateInput>
  }

  /**
   * Partida createMany
   */
  export type PartidaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Partidas.
     */
    data: PartidaCreateManyInput | PartidaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Partida createManyAndReturn
   */
  export type PartidaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * The data used to create many Partidas.
     */
    data: PartidaCreateManyInput | PartidaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Partida update
   */
  export type PartidaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * The data needed to update a Partida.
     */
    data: XOR<PartidaUpdateInput, PartidaUncheckedUpdateInput>
    /**
     * Choose, which Partida to update.
     */
    where: PartidaWhereUniqueInput
  }

  /**
   * Partida updateMany
   */
  export type PartidaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Partidas.
     */
    data: XOR<PartidaUpdateManyMutationInput, PartidaUncheckedUpdateManyInput>
    /**
     * Filter which Partidas to update
     */
    where?: PartidaWhereInput
    /**
     * Limit how many Partidas to update.
     */
    limit?: number
  }

  /**
   * Partida updateManyAndReturn
   */
  export type PartidaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * The data used to update Partidas.
     */
    data: XOR<PartidaUpdateManyMutationInput, PartidaUncheckedUpdateManyInput>
    /**
     * Filter which Partidas to update
     */
    where?: PartidaWhereInput
    /**
     * Limit how many Partidas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Partida upsert
   */
  export type PartidaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * The filter to search for the Partida to update in case it exists.
     */
    where: PartidaWhereUniqueInput
    /**
     * In case the Partida found by the `where` argument doesn't exist, create a new Partida with this data.
     */
    create: XOR<PartidaCreateInput, PartidaUncheckedCreateInput>
    /**
     * In case the Partida was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartidaUpdateInput, PartidaUncheckedUpdateInput>
  }

  /**
   * Partida delete
   */
  export type PartidaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
    /**
     * Filter which Partida to delete.
     */
    where: PartidaWhereUniqueInput
  }

  /**
   * Partida deleteMany
   */
  export type PartidaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partidas to delete
     */
    where?: PartidaWhereInput
    /**
     * Limit how many Partidas to delete.
     */
    limit?: number
  }

  /**
   * Partida.equipeAmador1
   */
  export type Partida$equipeAmador1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeAmador
     */
    select?: EquipeAmadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeAmador
     */
    omit?: EquipeAmadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeAmadorInclude<ExtArgs> | null
    where?: EquipeAmadorWhereInput
  }

  /**
   * Partida.equipeAmador2
   */
  export type Partida$equipeAmador2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeAmador
     */
    select?: EquipeAmadorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeAmador
     */
    omit?: EquipeAmadorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeAmadorInclude<ExtArgs> | null
    where?: EquipeAmadorWhereInput
  }

  /**
   * Partida.equipeOficial1
   */
  export type Partida$equipeOficial1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeOficial
     */
    select?: EquipeOficialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeOficial
     */
    omit?: EquipeOficialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeOficialInclude<ExtArgs> | null
    where?: EquipeOficialWhereInput
  }

  /**
   * Partida.equipeOficial2
   */
  export type Partida$equipeOficial2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeOficial
     */
    select?: EquipeOficialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeOficial
     */
    omit?: EquipeOficialOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeOficialInclude<ExtArgs> | null
    where?: EquipeOficialWhereInput
  }

  /**
   * Partida without action
   */
  export type PartidaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partida
     */
    select?: PartidaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partida
     */
    omit?: PartidaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartidaInclude<ExtArgs> | null
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


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    senha: 'senha',
    perfil: 'perfil',
    criadoEm: 'criadoEm'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const TreinadorScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    usuarioId: 'usuarioId'
  };

  export type TreinadorScalarFieldEnum = (typeof TreinadorScalarFieldEnum)[keyof typeof TreinadorScalarFieldEnum]


  export const AtletaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    genero: 'genero',
    nivel: 'nivel',
    usuarioId: 'usuarioId'
  };

  export type AtletaScalarFieldEnum = (typeof AtletaScalarFieldEnum)[keyof typeof AtletaScalarFieldEnum]


  export const TorneioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    tipo: 'tipo',
    data: 'data',
    local: 'local',
    status: 'status',
    criadoPorId: 'criadoPorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TorneioScalarFieldEnum = (typeof TorneioScalarFieldEnum)[keyof typeof TorneioScalarFieldEnum]


  export const ParticipacaoAmadorScalarFieldEnum: {
    id: 'id',
    atletaId: 'atletaId',
    torneioId: 'torneioId',
    criadoEm: 'criadoEm'
  };

  export type ParticipacaoAmadorScalarFieldEnum = (typeof ParticipacaoAmadorScalarFieldEnum)[keyof typeof ParticipacaoAmadorScalarFieldEnum]


  export const EquipeAmadorScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    tipo: 'tipo',
    torneioId: 'torneioId'
  };

  export type EquipeAmadorScalarFieldEnum = (typeof EquipeAmadorScalarFieldEnum)[keyof typeof EquipeAmadorScalarFieldEnum]


  export const EquipeOficialScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    tipo: 'tipo',
    createdAt: 'createdAt',
    torneioId: 'torneioId'
  };

  export type EquipeOficialScalarFieldEnum = (typeof EquipeOficialScalarFieldEnum)[keyof typeof EquipeOficialScalarFieldEnum]


  export const AtletaEquipeOficialScalarFieldEnum: {
    atletaId: 'atletaId',
    equipeOficialId: 'equipeOficialId'
  };

  export type AtletaEquipeOficialScalarFieldEnum = (typeof AtletaEquipeOficialScalarFieldEnum)[keyof typeof AtletaEquipeOficialScalarFieldEnum]


  export const PartidaScalarFieldEnum: {
    id: 'id',
    torneioId: 'torneioId',
    fase: 'fase',
    equipeAmador1Id: 'equipeAmador1Id',
    equipeAmador2Id: 'equipeAmador2Id',
    equipeOficial1Id: 'equipeOficial1Id',
    equipeOficial2Id: 'equipeOficial2Id',
    pontosEquipe1: 'pontosEquipe1',
    pontosEquipe2: 'pontosEquipe2',
    vencedorId: 'vencedorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PartidaScalarFieldEnum = (typeof PartidaScalarFieldEnum)[keyof typeof PartidaScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'TipoTorneio'
   */
  export type EnumTipoTorneioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoTorneio'>
    


  /**
   * Reference to a field of type 'TipoTorneio[]'
   */
  export type ListEnumTipoTorneioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoTorneio[]'>
    


  /**
   * Reference to a field of type 'StatusTorneio'
   */
  export type EnumStatusTorneioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusTorneio'>
    


  /**
   * Reference to a field of type 'StatusTorneio[]'
   */
  export type ListEnumStatusTorneioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusTorneio[]'>
    


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


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    perfil?: StringFilter<"Usuario"> | string
    criadoEm?: DateTimeFilter<"Usuario"> | Date | string
    Torneio?: TorneioListRelationFilter
    atleta?: XOR<AtletaNullableScalarRelationFilter, AtletaWhereInput> | null
    Treinador?: TreinadorListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    perfil?: SortOrder
    criadoEm?: SortOrder
    Torneio?: TorneioOrderByRelationAggregateInput
    atleta?: AtletaOrderByWithRelationInput
    Treinador?: TreinadorOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    perfil?: StringFilter<"Usuario"> | string
    criadoEm?: DateTimeFilter<"Usuario"> | Date | string
    Torneio?: TorneioListRelationFilter
    atleta?: XOR<AtletaNullableScalarRelationFilter, AtletaWhereInput> | null
    Treinador?: TreinadorListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    perfil?: SortOrder
    criadoEm?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    perfil?: StringWithAggregatesFilter<"Usuario"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type TreinadorWhereInput = {
    AND?: TreinadorWhereInput | TreinadorWhereInput[]
    OR?: TreinadorWhereInput[]
    NOT?: TreinadorWhereInput | TreinadorWhereInput[]
    id?: IntFilter<"Treinador"> | number
    nome?: StringFilter<"Treinador"> | string
    email?: StringFilter<"Treinador"> | string
    usuarioId?: IntFilter<"Treinador"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type TreinadorOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    usuarioId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type TreinadorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    usuarioId?: number
    AND?: TreinadorWhereInput | TreinadorWhereInput[]
    OR?: TreinadorWhereInput[]
    NOT?: TreinadorWhereInput | TreinadorWhereInput[]
    nome?: StringFilter<"Treinador"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id" | "email" | "usuarioId">

  export type TreinadorOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    usuarioId?: SortOrder
    _count?: TreinadorCountOrderByAggregateInput
    _avg?: TreinadorAvgOrderByAggregateInput
    _max?: TreinadorMaxOrderByAggregateInput
    _min?: TreinadorMinOrderByAggregateInput
    _sum?: TreinadorSumOrderByAggregateInput
  }

  export type TreinadorScalarWhereWithAggregatesInput = {
    AND?: TreinadorScalarWhereWithAggregatesInput | TreinadorScalarWhereWithAggregatesInput[]
    OR?: TreinadorScalarWhereWithAggregatesInput[]
    NOT?: TreinadorScalarWhereWithAggregatesInput | TreinadorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Treinador"> | number
    nome?: StringWithAggregatesFilter<"Treinador"> | string
    email?: StringWithAggregatesFilter<"Treinador"> | string
    usuarioId?: IntWithAggregatesFilter<"Treinador"> | number
  }

  export type AtletaWhereInput = {
    AND?: AtletaWhereInput | AtletaWhereInput[]
    OR?: AtletaWhereInput[]
    NOT?: AtletaWhereInput | AtletaWhereInput[]
    id?: IntFilter<"Atleta"> | number
    nome?: StringFilter<"Atleta"> | string
    email?: StringFilter<"Atleta"> | string
    genero?: StringFilter<"Atleta"> | string
    nivel?: StringNullableFilter<"Atleta"> | string | null
    usuarioId?: IntNullableFilter<"Atleta"> | number | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    participacoesAmador?: ParticipacaoAmadorListRelationFilter
    equipesOficiais?: AtletaEquipeOficialListRelationFilter
    EquipeAmador?: EquipeAmadorListRelationFilter
  }

  export type AtletaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    genero?: SortOrder
    nivel?: SortOrderInput | SortOrder
    usuarioId?: SortOrderInput | SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    participacoesAmador?: ParticipacaoAmadorOrderByRelationAggregateInput
    equipesOficiais?: AtletaEquipeOficialOrderByRelationAggregateInput
    EquipeAmador?: EquipeAmadorOrderByRelationAggregateInput
  }

  export type AtletaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    usuarioId?: number
    AND?: AtletaWhereInput | AtletaWhereInput[]
    OR?: AtletaWhereInput[]
    NOT?: AtletaWhereInput | AtletaWhereInput[]
    nome?: StringFilter<"Atleta"> | string
    genero?: StringFilter<"Atleta"> | string
    nivel?: StringNullableFilter<"Atleta"> | string | null
    usuario?: XOR<UsuarioNullableScalarRelationFilter, UsuarioWhereInput> | null
    participacoesAmador?: ParticipacaoAmadorListRelationFilter
    equipesOficiais?: AtletaEquipeOficialListRelationFilter
    EquipeAmador?: EquipeAmadorListRelationFilter
  }, "id" | "email" | "usuarioId">

  export type AtletaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    genero?: SortOrder
    nivel?: SortOrderInput | SortOrder
    usuarioId?: SortOrderInput | SortOrder
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
    email?: StringWithAggregatesFilter<"Atleta"> | string
    genero?: StringWithAggregatesFilter<"Atleta"> | string
    nivel?: StringNullableWithAggregatesFilter<"Atleta"> | string | null
    usuarioId?: IntNullableWithAggregatesFilter<"Atleta"> | number | null
  }

  export type TorneioWhereInput = {
    AND?: TorneioWhereInput | TorneioWhereInput[]
    OR?: TorneioWhereInput[]
    NOT?: TorneioWhereInput | TorneioWhereInput[]
    id?: IntFilter<"Torneio"> | number
    nome?: StringFilter<"Torneio"> | string
    tipo?: EnumTipoTorneioFilter<"Torneio"> | $Enums.TipoTorneio
    data?: DateTimeFilter<"Torneio"> | Date | string
    local?: StringNullableFilter<"Torneio"> | string | null
    status?: EnumStatusTorneioFilter<"Torneio"> | $Enums.StatusTorneio
    criadoPorId?: IntFilter<"Torneio"> | number
    createdAt?: DateTimeFilter<"Torneio"> | Date | string
    updatedAt?: DateTimeFilter<"Torneio"> | Date | string
    criadoPor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    Partida?: PartidaListRelationFilter
    equipesAmador?: EquipeAmadorListRelationFilter
    equipesOficial?: EquipeOficialListRelationFilter
    ParticipacaoAmador?: ParticipacaoAmadorListRelationFilter
  }

  export type TorneioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    data?: SortOrder
    local?: SortOrderInput | SortOrder
    status?: SortOrder
    criadoPorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    criadoPor?: UsuarioOrderByWithRelationInput
    Partida?: PartidaOrderByRelationAggregateInput
    equipesAmador?: EquipeAmadorOrderByRelationAggregateInput
    equipesOficial?: EquipeOficialOrderByRelationAggregateInput
    ParticipacaoAmador?: ParticipacaoAmadorOrderByRelationAggregateInput
  }

  export type TorneioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TorneioWhereInput | TorneioWhereInput[]
    OR?: TorneioWhereInput[]
    NOT?: TorneioWhereInput | TorneioWhereInput[]
    nome?: StringFilter<"Torneio"> | string
    tipo?: EnumTipoTorneioFilter<"Torneio"> | $Enums.TipoTorneio
    data?: DateTimeFilter<"Torneio"> | Date | string
    local?: StringNullableFilter<"Torneio"> | string | null
    status?: EnumStatusTorneioFilter<"Torneio"> | $Enums.StatusTorneio
    criadoPorId?: IntFilter<"Torneio"> | number
    createdAt?: DateTimeFilter<"Torneio"> | Date | string
    updatedAt?: DateTimeFilter<"Torneio"> | Date | string
    criadoPor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    Partida?: PartidaListRelationFilter
    equipesAmador?: EquipeAmadorListRelationFilter
    equipesOficial?: EquipeOficialListRelationFilter
    ParticipacaoAmador?: ParticipacaoAmadorListRelationFilter
  }, "id">

  export type TorneioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    data?: SortOrder
    local?: SortOrderInput | SortOrder
    status?: SortOrder
    criadoPorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TorneioCountOrderByAggregateInput
    _avg?: TorneioAvgOrderByAggregateInput
    _max?: TorneioMaxOrderByAggregateInput
    _min?: TorneioMinOrderByAggregateInput
    _sum?: TorneioSumOrderByAggregateInput
  }

  export type TorneioScalarWhereWithAggregatesInput = {
    AND?: TorneioScalarWhereWithAggregatesInput | TorneioScalarWhereWithAggregatesInput[]
    OR?: TorneioScalarWhereWithAggregatesInput[]
    NOT?: TorneioScalarWhereWithAggregatesInput | TorneioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Torneio"> | number
    nome?: StringWithAggregatesFilter<"Torneio"> | string
    tipo?: EnumTipoTorneioWithAggregatesFilter<"Torneio"> | $Enums.TipoTorneio
    data?: DateTimeWithAggregatesFilter<"Torneio"> | Date | string
    local?: StringNullableWithAggregatesFilter<"Torneio"> | string | null
    status?: EnumStatusTorneioWithAggregatesFilter<"Torneio"> | $Enums.StatusTorneio
    criadoPorId?: IntWithAggregatesFilter<"Torneio"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Torneio"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Torneio"> | Date | string
  }

  export type ParticipacaoAmadorWhereInput = {
    AND?: ParticipacaoAmadorWhereInput | ParticipacaoAmadorWhereInput[]
    OR?: ParticipacaoAmadorWhereInput[]
    NOT?: ParticipacaoAmadorWhereInput | ParticipacaoAmadorWhereInput[]
    id?: IntFilter<"ParticipacaoAmador"> | number
    atletaId?: IntFilter<"ParticipacaoAmador"> | number
    torneioId?: IntFilter<"ParticipacaoAmador"> | number
    criadoEm?: DateTimeFilter<"ParticipacaoAmador"> | Date | string
    atleta?: XOR<AtletaScalarRelationFilter, AtletaWhereInput>
    torneio?: XOR<TorneioScalarRelationFilter, TorneioWhereInput>
  }

  export type ParticipacaoAmadorOrderByWithRelationInput = {
    id?: SortOrder
    atletaId?: SortOrder
    torneioId?: SortOrder
    criadoEm?: SortOrder
    atleta?: AtletaOrderByWithRelationInput
    torneio?: TorneioOrderByWithRelationInput
  }

  export type ParticipacaoAmadorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    atletaId_torneioId?: ParticipacaoAmadorAtletaIdTorneioIdCompoundUniqueInput
    AND?: ParticipacaoAmadorWhereInput | ParticipacaoAmadorWhereInput[]
    OR?: ParticipacaoAmadorWhereInput[]
    NOT?: ParticipacaoAmadorWhereInput | ParticipacaoAmadorWhereInput[]
    atletaId?: IntFilter<"ParticipacaoAmador"> | number
    torneioId?: IntFilter<"ParticipacaoAmador"> | number
    criadoEm?: DateTimeFilter<"ParticipacaoAmador"> | Date | string
    atleta?: XOR<AtletaScalarRelationFilter, AtletaWhereInput>
    torneio?: XOR<TorneioScalarRelationFilter, TorneioWhereInput>
  }, "id" | "atletaId_torneioId">

  export type ParticipacaoAmadorOrderByWithAggregationInput = {
    id?: SortOrder
    atletaId?: SortOrder
    torneioId?: SortOrder
    criadoEm?: SortOrder
    _count?: ParticipacaoAmadorCountOrderByAggregateInput
    _avg?: ParticipacaoAmadorAvgOrderByAggregateInput
    _max?: ParticipacaoAmadorMaxOrderByAggregateInput
    _min?: ParticipacaoAmadorMinOrderByAggregateInput
    _sum?: ParticipacaoAmadorSumOrderByAggregateInput
  }

  export type ParticipacaoAmadorScalarWhereWithAggregatesInput = {
    AND?: ParticipacaoAmadorScalarWhereWithAggregatesInput | ParticipacaoAmadorScalarWhereWithAggregatesInput[]
    OR?: ParticipacaoAmadorScalarWhereWithAggregatesInput[]
    NOT?: ParticipacaoAmadorScalarWhereWithAggregatesInput | ParticipacaoAmadorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ParticipacaoAmador"> | number
    atletaId?: IntWithAggregatesFilter<"ParticipacaoAmador"> | number
    torneioId?: IntWithAggregatesFilter<"ParticipacaoAmador"> | number
    criadoEm?: DateTimeWithAggregatesFilter<"ParticipacaoAmador"> | Date | string
  }

  export type EquipeAmadorWhereInput = {
    AND?: EquipeAmadorWhereInput | EquipeAmadorWhereInput[]
    OR?: EquipeAmadorWhereInput[]
    NOT?: EquipeAmadorWhereInput | EquipeAmadorWhereInput[]
    id?: IntFilter<"EquipeAmador"> | number
    nome?: StringFilter<"EquipeAmador"> | string
    tipo?: StringFilter<"EquipeAmador"> | string
    torneioId?: IntFilter<"EquipeAmador"> | number
    torneio?: XOR<TorneioScalarRelationFilter, TorneioWhereInput>
    membros?: AtletaListRelationFilter
    partidasComoEquipe1?: PartidaListRelationFilter
    partidasComoEquipe2?: PartidaListRelationFilter
  }

  export type EquipeAmadorOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    torneioId?: SortOrder
    torneio?: TorneioOrderByWithRelationInput
    membros?: AtletaOrderByRelationAggregateInput
    partidasComoEquipe1?: PartidaOrderByRelationAggregateInput
    partidasComoEquipe2?: PartidaOrderByRelationAggregateInput
  }

  export type EquipeAmadorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EquipeAmadorWhereInput | EquipeAmadorWhereInput[]
    OR?: EquipeAmadorWhereInput[]
    NOT?: EquipeAmadorWhereInput | EquipeAmadorWhereInput[]
    nome?: StringFilter<"EquipeAmador"> | string
    tipo?: StringFilter<"EquipeAmador"> | string
    torneioId?: IntFilter<"EquipeAmador"> | number
    torneio?: XOR<TorneioScalarRelationFilter, TorneioWhereInput>
    membros?: AtletaListRelationFilter
    partidasComoEquipe1?: PartidaListRelationFilter
    partidasComoEquipe2?: PartidaListRelationFilter
  }, "id">

  export type EquipeAmadorOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    torneioId?: SortOrder
    _count?: EquipeAmadorCountOrderByAggregateInput
    _avg?: EquipeAmadorAvgOrderByAggregateInput
    _max?: EquipeAmadorMaxOrderByAggregateInput
    _min?: EquipeAmadorMinOrderByAggregateInput
    _sum?: EquipeAmadorSumOrderByAggregateInput
  }

  export type EquipeAmadorScalarWhereWithAggregatesInput = {
    AND?: EquipeAmadorScalarWhereWithAggregatesInput | EquipeAmadorScalarWhereWithAggregatesInput[]
    OR?: EquipeAmadorScalarWhereWithAggregatesInput[]
    NOT?: EquipeAmadorScalarWhereWithAggregatesInput | EquipeAmadorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EquipeAmador"> | number
    nome?: StringWithAggregatesFilter<"EquipeAmador"> | string
    tipo?: StringWithAggregatesFilter<"EquipeAmador"> | string
    torneioId?: IntWithAggregatesFilter<"EquipeAmador"> | number
  }

  export type EquipeOficialWhereInput = {
    AND?: EquipeOficialWhereInput | EquipeOficialWhereInput[]
    OR?: EquipeOficialWhereInput[]
    NOT?: EquipeOficialWhereInput | EquipeOficialWhereInput[]
    id?: IntFilter<"EquipeOficial"> | number
    nome?: StringFilter<"EquipeOficial"> | string
    tipo?: StringFilter<"EquipeOficial"> | string
    createdAt?: DateTimeFilter<"EquipeOficial"> | Date | string
    torneioId?: IntFilter<"EquipeOficial"> | number
    torneio?: XOR<TorneioScalarRelationFilter, TorneioWhereInput>
    membros?: AtletaEquipeOficialListRelationFilter
    partidasComoEquipeOficial1?: PartidaListRelationFilter
    partidasComoEquipeOficial2?: PartidaListRelationFilter
  }

  export type EquipeOficialOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    torneioId?: SortOrder
    torneio?: TorneioOrderByWithRelationInput
    membros?: AtletaEquipeOficialOrderByRelationAggregateInput
    partidasComoEquipeOficial1?: PartidaOrderByRelationAggregateInput
    partidasComoEquipeOficial2?: PartidaOrderByRelationAggregateInput
  }

  export type EquipeOficialWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EquipeOficialWhereInput | EquipeOficialWhereInput[]
    OR?: EquipeOficialWhereInput[]
    NOT?: EquipeOficialWhereInput | EquipeOficialWhereInput[]
    nome?: StringFilter<"EquipeOficial"> | string
    tipo?: StringFilter<"EquipeOficial"> | string
    createdAt?: DateTimeFilter<"EquipeOficial"> | Date | string
    torneioId?: IntFilter<"EquipeOficial"> | number
    torneio?: XOR<TorneioScalarRelationFilter, TorneioWhereInput>
    membros?: AtletaEquipeOficialListRelationFilter
    partidasComoEquipeOficial1?: PartidaListRelationFilter
    partidasComoEquipeOficial2?: PartidaListRelationFilter
  }, "id">

  export type EquipeOficialOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    torneioId?: SortOrder
    _count?: EquipeOficialCountOrderByAggregateInput
    _avg?: EquipeOficialAvgOrderByAggregateInput
    _max?: EquipeOficialMaxOrderByAggregateInput
    _min?: EquipeOficialMinOrderByAggregateInput
    _sum?: EquipeOficialSumOrderByAggregateInput
  }

  export type EquipeOficialScalarWhereWithAggregatesInput = {
    AND?: EquipeOficialScalarWhereWithAggregatesInput | EquipeOficialScalarWhereWithAggregatesInput[]
    OR?: EquipeOficialScalarWhereWithAggregatesInput[]
    NOT?: EquipeOficialScalarWhereWithAggregatesInput | EquipeOficialScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EquipeOficial"> | number
    nome?: StringWithAggregatesFilter<"EquipeOficial"> | string
    tipo?: StringWithAggregatesFilter<"EquipeOficial"> | string
    createdAt?: DateTimeWithAggregatesFilter<"EquipeOficial"> | Date | string
    torneioId?: IntWithAggregatesFilter<"EquipeOficial"> | number
  }

  export type AtletaEquipeOficialWhereInput = {
    AND?: AtletaEquipeOficialWhereInput | AtletaEquipeOficialWhereInput[]
    OR?: AtletaEquipeOficialWhereInput[]
    NOT?: AtletaEquipeOficialWhereInput | AtletaEquipeOficialWhereInput[]
    atletaId?: IntFilter<"AtletaEquipeOficial"> | number
    equipeOficialId?: IntFilter<"AtletaEquipeOficial"> | number
    atleta?: XOR<AtletaScalarRelationFilter, AtletaWhereInput>
    equipeOficial?: XOR<EquipeOficialScalarRelationFilter, EquipeOficialWhereInput>
  }

  export type AtletaEquipeOficialOrderByWithRelationInput = {
    atletaId?: SortOrder
    equipeOficialId?: SortOrder
    atleta?: AtletaOrderByWithRelationInput
    equipeOficial?: EquipeOficialOrderByWithRelationInput
  }

  export type AtletaEquipeOficialWhereUniqueInput = Prisma.AtLeast<{
    atletaId_equipeOficialId?: AtletaEquipeOficialAtletaIdEquipeOficialIdCompoundUniqueInput
    AND?: AtletaEquipeOficialWhereInput | AtletaEquipeOficialWhereInput[]
    OR?: AtletaEquipeOficialWhereInput[]
    NOT?: AtletaEquipeOficialWhereInput | AtletaEquipeOficialWhereInput[]
    atletaId?: IntFilter<"AtletaEquipeOficial"> | number
    equipeOficialId?: IntFilter<"AtletaEquipeOficial"> | number
    atleta?: XOR<AtletaScalarRelationFilter, AtletaWhereInput>
    equipeOficial?: XOR<EquipeOficialScalarRelationFilter, EquipeOficialWhereInput>
  }, "atletaId_equipeOficialId">

  export type AtletaEquipeOficialOrderByWithAggregationInput = {
    atletaId?: SortOrder
    equipeOficialId?: SortOrder
    _count?: AtletaEquipeOficialCountOrderByAggregateInput
    _avg?: AtletaEquipeOficialAvgOrderByAggregateInput
    _max?: AtletaEquipeOficialMaxOrderByAggregateInput
    _min?: AtletaEquipeOficialMinOrderByAggregateInput
    _sum?: AtletaEquipeOficialSumOrderByAggregateInput
  }

  export type AtletaEquipeOficialScalarWhereWithAggregatesInput = {
    AND?: AtletaEquipeOficialScalarWhereWithAggregatesInput | AtletaEquipeOficialScalarWhereWithAggregatesInput[]
    OR?: AtletaEquipeOficialScalarWhereWithAggregatesInput[]
    NOT?: AtletaEquipeOficialScalarWhereWithAggregatesInput | AtletaEquipeOficialScalarWhereWithAggregatesInput[]
    atletaId?: IntWithAggregatesFilter<"AtletaEquipeOficial"> | number
    equipeOficialId?: IntWithAggregatesFilter<"AtletaEquipeOficial"> | number
  }

  export type PartidaWhereInput = {
    AND?: PartidaWhereInput | PartidaWhereInput[]
    OR?: PartidaWhereInput[]
    NOT?: PartidaWhereInput | PartidaWhereInput[]
    id?: IntFilter<"Partida"> | number
    torneioId?: IntFilter<"Partida"> | number
    fase?: StringFilter<"Partida"> | string
    equipeAmador1Id?: IntNullableFilter<"Partida"> | number | null
    equipeAmador2Id?: IntNullableFilter<"Partida"> | number | null
    equipeOficial1Id?: IntNullableFilter<"Partida"> | number | null
    equipeOficial2Id?: IntNullableFilter<"Partida"> | number | null
    pontosEquipe1?: IntNullableFilter<"Partida"> | number | null
    pontosEquipe2?: IntNullableFilter<"Partida"> | number | null
    vencedorId?: IntNullableFilter<"Partida"> | number | null
    createdAt?: DateTimeFilter<"Partida"> | Date | string
    updatedAt?: DateTimeFilter<"Partida"> | Date | string
    torneio?: XOR<TorneioScalarRelationFilter, TorneioWhereInput>
    equipeAmador1?: XOR<EquipeAmadorNullableScalarRelationFilter, EquipeAmadorWhereInput> | null
    equipeAmador2?: XOR<EquipeAmadorNullableScalarRelationFilter, EquipeAmadorWhereInput> | null
    equipeOficial1?: XOR<EquipeOficialNullableScalarRelationFilter, EquipeOficialWhereInput> | null
    equipeOficial2?: XOR<EquipeOficialNullableScalarRelationFilter, EquipeOficialWhereInput> | null
  }

  export type PartidaOrderByWithRelationInput = {
    id?: SortOrder
    torneioId?: SortOrder
    fase?: SortOrder
    equipeAmador1Id?: SortOrderInput | SortOrder
    equipeAmador2Id?: SortOrderInput | SortOrder
    equipeOficial1Id?: SortOrderInput | SortOrder
    equipeOficial2Id?: SortOrderInput | SortOrder
    pontosEquipe1?: SortOrderInput | SortOrder
    pontosEquipe2?: SortOrderInput | SortOrder
    vencedorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    torneio?: TorneioOrderByWithRelationInput
    equipeAmador1?: EquipeAmadorOrderByWithRelationInput
    equipeAmador2?: EquipeAmadorOrderByWithRelationInput
    equipeOficial1?: EquipeOficialOrderByWithRelationInput
    equipeOficial2?: EquipeOficialOrderByWithRelationInput
  }

  export type PartidaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PartidaWhereInput | PartidaWhereInput[]
    OR?: PartidaWhereInput[]
    NOT?: PartidaWhereInput | PartidaWhereInput[]
    torneioId?: IntFilter<"Partida"> | number
    fase?: StringFilter<"Partida"> | string
    equipeAmador1Id?: IntNullableFilter<"Partida"> | number | null
    equipeAmador2Id?: IntNullableFilter<"Partida"> | number | null
    equipeOficial1Id?: IntNullableFilter<"Partida"> | number | null
    equipeOficial2Id?: IntNullableFilter<"Partida"> | number | null
    pontosEquipe1?: IntNullableFilter<"Partida"> | number | null
    pontosEquipe2?: IntNullableFilter<"Partida"> | number | null
    vencedorId?: IntNullableFilter<"Partida"> | number | null
    createdAt?: DateTimeFilter<"Partida"> | Date | string
    updatedAt?: DateTimeFilter<"Partida"> | Date | string
    torneio?: XOR<TorneioScalarRelationFilter, TorneioWhereInput>
    equipeAmador1?: XOR<EquipeAmadorNullableScalarRelationFilter, EquipeAmadorWhereInput> | null
    equipeAmador2?: XOR<EquipeAmadorNullableScalarRelationFilter, EquipeAmadorWhereInput> | null
    equipeOficial1?: XOR<EquipeOficialNullableScalarRelationFilter, EquipeOficialWhereInput> | null
    equipeOficial2?: XOR<EquipeOficialNullableScalarRelationFilter, EquipeOficialWhereInput> | null
  }, "id">

  export type PartidaOrderByWithAggregationInput = {
    id?: SortOrder
    torneioId?: SortOrder
    fase?: SortOrder
    equipeAmador1Id?: SortOrderInput | SortOrder
    equipeAmador2Id?: SortOrderInput | SortOrder
    equipeOficial1Id?: SortOrderInput | SortOrder
    equipeOficial2Id?: SortOrderInput | SortOrder
    pontosEquipe1?: SortOrderInput | SortOrder
    pontosEquipe2?: SortOrderInput | SortOrder
    vencedorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PartidaCountOrderByAggregateInput
    _avg?: PartidaAvgOrderByAggregateInput
    _max?: PartidaMaxOrderByAggregateInput
    _min?: PartidaMinOrderByAggregateInput
    _sum?: PartidaSumOrderByAggregateInput
  }

  export type PartidaScalarWhereWithAggregatesInput = {
    AND?: PartidaScalarWhereWithAggregatesInput | PartidaScalarWhereWithAggregatesInput[]
    OR?: PartidaScalarWhereWithAggregatesInput[]
    NOT?: PartidaScalarWhereWithAggregatesInput | PartidaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Partida"> | number
    torneioId?: IntWithAggregatesFilter<"Partida"> | number
    fase?: StringWithAggregatesFilter<"Partida"> | string
    equipeAmador1Id?: IntNullableWithAggregatesFilter<"Partida"> | number | null
    equipeAmador2Id?: IntNullableWithAggregatesFilter<"Partida"> | number | null
    equipeOficial1Id?: IntNullableWithAggregatesFilter<"Partida"> | number | null
    equipeOficial2Id?: IntNullableWithAggregatesFilter<"Partida"> | number | null
    pontosEquipe1?: IntNullableWithAggregatesFilter<"Partida"> | number | null
    pontosEquipe2?: IntNullableWithAggregatesFilter<"Partida"> | number | null
    vencedorId?: IntNullableWithAggregatesFilter<"Partida"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Partida"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Partida"> | Date | string
  }

  export type UsuarioCreateInput = {
    nome: string
    email: string
    senha: string
    perfil: string
    criadoEm?: Date | string
    Torneio?: TorneioCreateNestedManyWithoutCriadoPorInput
    atleta?: AtletaCreateNestedOneWithoutUsuarioInput
    Treinador?: TreinadorCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    perfil: string
    criadoEm?: Date | string
    Torneio?: TorneioUncheckedCreateNestedManyWithoutCriadoPorInput
    atleta?: AtletaUncheckedCreateNestedOneWithoutUsuarioInput
    Treinador?: TreinadorUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    perfil?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    Torneio?: TorneioUpdateManyWithoutCriadoPorNestedInput
    atleta?: AtletaUpdateOneWithoutUsuarioNestedInput
    Treinador?: TreinadorUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    perfil?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    Torneio?: TorneioUncheckedUpdateManyWithoutCriadoPorNestedInput
    atleta?: AtletaUncheckedUpdateOneWithoutUsuarioNestedInput
    Treinador?: TreinadorUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    email: string
    senha: string
    perfil: string
    criadoEm?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    perfil?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    perfil?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreinadorCreateInput = {
    nome: string
    email: string
    usuario: UsuarioCreateNestedOneWithoutTreinadorInput
  }

  export type TreinadorUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    usuarioId: number
  }

  export type TreinadorUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    usuario?: UsuarioUpdateOneRequiredWithoutTreinadorNestedInput
  }

  export type TreinadorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type TreinadorCreateManyInput = {
    id?: number
    nome: string
    email: string
    usuarioId: number
  }

  export type TreinadorUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type TreinadorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type AtletaCreateInput = {
    nome: string
    email: string
    genero: string
    nivel?: string | null
    usuario?: UsuarioCreateNestedOneWithoutAtletaInput
    participacoesAmador?: ParticipacaoAmadorCreateNestedManyWithoutAtletaInput
    equipesOficiais?: AtletaEquipeOficialCreateNestedManyWithoutAtletaInput
    EquipeAmador?: EquipeAmadorCreateNestedManyWithoutMembrosInput
  }

  export type AtletaUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    genero: string
    nivel?: string | null
    usuarioId?: number | null
    participacoesAmador?: ParticipacaoAmadorUncheckedCreateNestedManyWithoutAtletaInput
    equipesOficiais?: AtletaEquipeOficialUncheckedCreateNestedManyWithoutAtletaInput
    EquipeAmador?: EquipeAmadorUncheckedCreateNestedManyWithoutMembrosInput
  }

  export type AtletaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    nivel?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneWithoutAtletaNestedInput
    participacoesAmador?: ParticipacaoAmadorUpdateManyWithoutAtletaNestedInput
    equipesOficiais?: AtletaEquipeOficialUpdateManyWithoutAtletaNestedInput
    EquipeAmador?: EquipeAmadorUpdateManyWithoutMembrosNestedInput
  }

  export type AtletaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    nivel?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
    participacoesAmador?: ParticipacaoAmadorUncheckedUpdateManyWithoutAtletaNestedInput
    equipesOficiais?: AtletaEquipeOficialUncheckedUpdateManyWithoutAtletaNestedInput
    EquipeAmador?: EquipeAmadorUncheckedUpdateManyWithoutMembrosNestedInput
  }

  export type AtletaCreateManyInput = {
    id?: number
    nome: string
    email: string
    genero: string
    nivel?: string | null
    usuarioId?: number | null
  }

  export type AtletaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    nivel?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AtletaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    nivel?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TorneioCreateInput = {
    nome: string
    tipo: $Enums.TipoTorneio
    data: Date | string
    local?: string | null
    status?: $Enums.StatusTorneio
    createdAt?: Date | string
    updatedAt?: Date | string
    criadoPor: UsuarioCreateNestedOneWithoutTorneioInput
    Partida?: PartidaCreateNestedManyWithoutTorneioInput
    equipesAmador?: EquipeAmadorCreateNestedManyWithoutTorneioInput
    equipesOficial?: EquipeOficialCreateNestedManyWithoutTorneioInput
    ParticipacaoAmador?: ParticipacaoAmadorCreateNestedManyWithoutTorneioInput
  }

  export type TorneioUncheckedCreateInput = {
    id?: number
    nome: string
    tipo: $Enums.TipoTorneio
    data: Date | string
    local?: string | null
    status?: $Enums.StatusTorneio
    criadoPorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Partida?: PartidaUncheckedCreateNestedManyWithoutTorneioInput
    equipesAmador?: EquipeAmadorUncheckedCreateNestedManyWithoutTorneioInput
    equipesOficial?: EquipeOficialUncheckedCreateNestedManyWithoutTorneioInput
    ParticipacaoAmador?: ParticipacaoAmadorUncheckedCreateNestedManyWithoutTorneioInput
  }

  export type TorneioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoTorneioFieldUpdateOperationsInput | $Enums.TipoTorneio
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTorneioFieldUpdateOperationsInput | $Enums.StatusTorneio
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: UsuarioUpdateOneRequiredWithoutTorneioNestedInput
    Partida?: PartidaUpdateManyWithoutTorneioNestedInput
    equipesAmador?: EquipeAmadorUpdateManyWithoutTorneioNestedInput
    equipesOficial?: EquipeOficialUpdateManyWithoutTorneioNestedInput
    ParticipacaoAmador?: ParticipacaoAmadorUpdateManyWithoutTorneioNestedInput
  }

  export type TorneioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoTorneioFieldUpdateOperationsInput | $Enums.TipoTorneio
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTorneioFieldUpdateOperationsInput | $Enums.StatusTorneio
    criadoPorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Partida?: PartidaUncheckedUpdateManyWithoutTorneioNestedInput
    equipesAmador?: EquipeAmadorUncheckedUpdateManyWithoutTorneioNestedInput
    equipesOficial?: EquipeOficialUncheckedUpdateManyWithoutTorneioNestedInput
    ParticipacaoAmador?: ParticipacaoAmadorUncheckedUpdateManyWithoutTorneioNestedInput
  }

  export type TorneioCreateManyInput = {
    id?: number
    nome: string
    tipo: $Enums.TipoTorneio
    data: Date | string
    local?: string | null
    status?: $Enums.StatusTorneio
    criadoPorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TorneioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoTorneioFieldUpdateOperationsInput | $Enums.TipoTorneio
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTorneioFieldUpdateOperationsInput | $Enums.StatusTorneio
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TorneioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoTorneioFieldUpdateOperationsInput | $Enums.TipoTorneio
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTorneioFieldUpdateOperationsInput | $Enums.StatusTorneio
    criadoPorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipacaoAmadorCreateInput = {
    criadoEm?: Date | string
    atleta: AtletaCreateNestedOneWithoutParticipacoesAmadorInput
    torneio: TorneioCreateNestedOneWithoutParticipacaoAmadorInput
  }

  export type ParticipacaoAmadorUncheckedCreateInput = {
    id?: number
    atletaId: number
    torneioId: number
    criadoEm?: Date | string
  }

  export type ParticipacaoAmadorUpdateInput = {
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atleta?: AtletaUpdateOneRequiredWithoutParticipacoesAmadorNestedInput
    torneio?: TorneioUpdateOneRequiredWithoutParticipacaoAmadorNestedInput
  }

  export type ParticipacaoAmadorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    atletaId?: IntFieldUpdateOperationsInput | number
    torneioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipacaoAmadorCreateManyInput = {
    id?: number
    atletaId: number
    torneioId: number
    criadoEm?: Date | string
  }

  export type ParticipacaoAmadorUpdateManyMutationInput = {
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipacaoAmadorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    atletaId?: IntFieldUpdateOperationsInput | number
    torneioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipeAmadorCreateInput = {
    nome: string
    tipo: string
    torneio: TorneioCreateNestedOneWithoutEquipesAmadorInput
    membros?: AtletaCreateNestedManyWithoutEquipeAmadorInput
    partidasComoEquipe1?: PartidaCreateNestedManyWithoutEquipeAmador1Input
    partidasComoEquipe2?: PartidaCreateNestedManyWithoutEquipeAmador2Input
  }

  export type EquipeAmadorUncheckedCreateInput = {
    id?: number
    nome: string
    tipo: string
    torneioId: number
    membros?: AtletaUncheckedCreateNestedManyWithoutEquipeAmadorInput
    partidasComoEquipe1?: PartidaUncheckedCreateNestedManyWithoutEquipeAmador1Input
    partidasComoEquipe2?: PartidaUncheckedCreateNestedManyWithoutEquipeAmador2Input
  }

  export type EquipeAmadorUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    torneio?: TorneioUpdateOneRequiredWithoutEquipesAmadorNestedInput
    membros?: AtletaUpdateManyWithoutEquipeAmadorNestedInput
    partidasComoEquipe1?: PartidaUpdateManyWithoutEquipeAmador1NestedInput
    partidasComoEquipe2?: PartidaUpdateManyWithoutEquipeAmador2NestedInput
  }

  export type EquipeAmadorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    torneioId?: IntFieldUpdateOperationsInput | number
    membros?: AtletaUncheckedUpdateManyWithoutEquipeAmadorNestedInput
    partidasComoEquipe1?: PartidaUncheckedUpdateManyWithoutEquipeAmador1NestedInput
    partidasComoEquipe2?: PartidaUncheckedUpdateManyWithoutEquipeAmador2NestedInput
  }

  export type EquipeAmadorCreateManyInput = {
    id?: number
    nome: string
    tipo: string
    torneioId: number
  }

  export type EquipeAmadorUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type EquipeAmadorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    torneioId?: IntFieldUpdateOperationsInput | number
  }

  export type EquipeOficialCreateInput = {
    nome: string
    tipo: string
    createdAt?: Date | string
    torneio: TorneioCreateNestedOneWithoutEquipesOficialInput
    membros?: AtletaEquipeOficialCreateNestedManyWithoutEquipeOficialInput
    partidasComoEquipeOficial1?: PartidaCreateNestedManyWithoutEquipeOficial1Input
    partidasComoEquipeOficial2?: PartidaCreateNestedManyWithoutEquipeOficial2Input
  }

  export type EquipeOficialUncheckedCreateInput = {
    id?: number
    nome: string
    tipo: string
    createdAt?: Date | string
    torneioId: number
    membros?: AtletaEquipeOficialUncheckedCreateNestedManyWithoutEquipeOficialInput
    partidasComoEquipeOficial1?: PartidaUncheckedCreateNestedManyWithoutEquipeOficial1Input
    partidasComoEquipeOficial2?: PartidaUncheckedCreateNestedManyWithoutEquipeOficial2Input
  }

  export type EquipeOficialUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    torneio?: TorneioUpdateOneRequiredWithoutEquipesOficialNestedInput
    membros?: AtletaEquipeOficialUpdateManyWithoutEquipeOficialNestedInput
    partidasComoEquipeOficial1?: PartidaUpdateManyWithoutEquipeOficial1NestedInput
    partidasComoEquipeOficial2?: PartidaUpdateManyWithoutEquipeOficial2NestedInput
  }

  export type EquipeOficialUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    torneioId?: IntFieldUpdateOperationsInput | number
    membros?: AtletaEquipeOficialUncheckedUpdateManyWithoutEquipeOficialNestedInput
    partidasComoEquipeOficial1?: PartidaUncheckedUpdateManyWithoutEquipeOficial1NestedInput
    partidasComoEquipeOficial2?: PartidaUncheckedUpdateManyWithoutEquipeOficial2NestedInput
  }

  export type EquipeOficialCreateManyInput = {
    id?: number
    nome: string
    tipo: string
    createdAt?: Date | string
    torneioId: number
  }

  export type EquipeOficialUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipeOficialUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    torneioId?: IntFieldUpdateOperationsInput | number
  }

  export type AtletaEquipeOficialCreateInput = {
    atleta: AtletaCreateNestedOneWithoutEquipesOficiaisInput
    equipeOficial: EquipeOficialCreateNestedOneWithoutMembrosInput
  }

  export type AtletaEquipeOficialUncheckedCreateInput = {
    atletaId: number
    equipeOficialId: number
  }

  export type AtletaEquipeOficialUpdateInput = {
    atleta?: AtletaUpdateOneRequiredWithoutEquipesOficiaisNestedInput
    equipeOficial?: EquipeOficialUpdateOneRequiredWithoutMembrosNestedInput
  }

  export type AtletaEquipeOficialUncheckedUpdateInput = {
    atletaId?: IntFieldUpdateOperationsInput | number
    equipeOficialId?: IntFieldUpdateOperationsInput | number
  }

  export type AtletaEquipeOficialCreateManyInput = {
    atletaId: number
    equipeOficialId: number
  }

  export type AtletaEquipeOficialUpdateManyMutationInput = {

  }

  export type AtletaEquipeOficialUncheckedUpdateManyInput = {
    atletaId?: IntFieldUpdateOperationsInput | number
    equipeOficialId?: IntFieldUpdateOperationsInput | number
  }

  export type PartidaCreateInput = {
    fase: string
    pontosEquipe1?: number | null
    pontosEquipe2?: number | null
    vencedorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    torneio: TorneioCreateNestedOneWithoutPartidaInput
    equipeAmador1?: EquipeAmadorCreateNestedOneWithoutPartidasComoEquipe1Input
    equipeAmador2?: EquipeAmadorCreateNestedOneWithoutPartidasComoEquipe2Input
    equipeOficial1?: EquipeOficialCreateNestedOneWithoutPartidasComoEquipeOficial1Input
    equipeOficial2?: EquipeOficialCreateNestedOneWithoutPartidasComoEquipeOficial2Input
  }

  export type PartidaUncheckedCreateInput = {
    id?: number
    torneioId: number
    fase: string
    equipeAmador1Id?: number | null
    equipeAmador2Id?: number | null
    equipeOficial1Id?: number | null
    equipeOficial2Id?: number | null
    pontosEquipe1?: number | null
    pontosEquipe2?: number | null
    vencedorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartidaUpdateInput = {
    fase?: StringFieldUpdateOperationsInput | string
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    vencedorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    torneio?: TorneioUpdateOneRequiredWithoutPartidaNestedInput
    equipeAmador1?: EquipeAmadorUpdateOneWithoutPartidasComoEquipe1NestedInput
    equipeAmador2?: EquipeAmadorUpdateOneWithoutPartidasComoEquipe2NestedInput
    equipeOficial1?: EquipeOficialUpdateOneWithoutPartidasComoEquipeOficial1NestedInput
    equipeOficial2?: EquipeOficialUpdateOneWithoutPartidasComoEquipeOficial2NestedInput
  }

  export type PartidaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    torneioId?: IntFieldUpdateOperationsInput | number
    fase?: StringFieldUpdateOperationsInput | string
    equipeAmador1Id?: NullableIntFieldUpdateOperationsInput | number | null
    equipeAmador2Id?: NullableIntFieldUpdateOperationsInput | number | null
    equipeOficial1Id?: NullableIntFieldUpdateOperationsInput | number | null
    equipeOficial2Id?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    vencedorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartidaCreateManyInput = {
    id?: number
    torneioId: number
    fase: string
    equipeAmador1Id?: number | null
    equipeAmador2Id?: number | null
    equipeOficial1Id?: number | null
    equipeOficial2Id?: number | null
    pontosEquipe1?: number | null
    pontosEquipe2?: number | null
    vencedorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartidaUpdateManyMutationInput = {
    fase?: StringFieldUpdateOperationsInput | string
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    vencedorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartidaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    torneioId?: IntFieldUpdateOperationsInput | number
    fase?: StringFieldUpdateOperationsInput | string
    equipeAmador1Id?: NullableIntFieldUpdateOperationsInput | number | null
    equipeAmador2Id?: NullableIntFieldUpdateOperationsInput | number | null
    equipeOficial1Id?: NullableIntFieldUpdateOperationsInput | number | null
    equipeOficial2Id?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    vencedorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type TorneioListRelationFilter = {
    every?: TorneioWhereInput
    some?: TorneioWhereInput
    none?: TorneioWhereInput
  }

  export type AtletaNullableScalarRelationFilter = {
    is?: AtletaWhereInput | null
    isNot?: AtletaWhereInput | null
  }

  export type TreinadorListRelationFilter = {
    every?: TreinadorWhereInput
    some?: TreinadorWhereInput
    none?: TreinadorWhereInput
  }

  export type TorneioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TreinadorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    perfil?: SortOrder
    criadoEm?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    perfil?: SortOrder
    criadoEm?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    perfil?: SortOrder
    criadoEm?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
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

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type TreinadorCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    usuarioId?: SortOrder
  }

  export type TreinadorAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type TreinadorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    usuarioId?: SortOrder
  }

  export type TreinadorMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    usuarioId?: SortOrder
  }

  export type TreinadorSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
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

  export type UsuarioNullableScalarRelationFilter = {
    is?: UsuarioWhereInput | null
    isNot?: UsuarioWhereInput | null
  }

  export type ParticipacaoAmadorListRelationFilter = {
    every?: ParticipacaoAmadorWhereInput
    some?: ParticipacaoAmadorWhereInput
    none?: ParticipacaoAmadorWhereInput
  }

  export type AtletaEquipeOficialListRelationFilter = {
    every?: AtletaEquipeOficialWhereInput
    some?: AtletaEquipeOficialWhereInput
    none?: AtletaEquipeOficialWhereInput
  }

  export type EquipeAmadorListRelationFilter = {
    every?: EquipeAmadorWhereInput
    some?: EquipeAmadorWhereInput
    none?: EquipeAmadorWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ParticipacaoAmadorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AtletaEquipeOficialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EquipeAmadorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AtletaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    genero?: SortOrder
    nivel?: SortOrder
    usuarioId?: SortOrder
  }

  export type AtletaAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type AtletaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    genero?: SortOrder
    nivel?: SortOrder
    usuarioId?: SortOrder
  }

  export type AtletaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    genero?: SortOrder
    nivel?: SortOrder
    usuarioId?: SortOrder
  }

  export type AtletaSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
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

  export type EnumTipoTorneioFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoTorneio | EnumTipoTorneioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoTorneio[] | ListEnumTipoTorneioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoTorneio[] | ListEnumTipoTorneioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoTorneioFilter<$PrismaModel> | $Enums.TipoTorneio
  }

  export type EnumStatusTorneioFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusTorneio | EnumStatusTorneioFieldRefInput<$PrismaModel>
    in?: $Enums.StatusTorneio[] | ListEnumStatusTorneioFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusTorneio[] | ListEnumStatusTorneioFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusTorneioFilter<$PrismaModel> | $Enums.StatusTorneio
  }

  export type PartidaListRelationFilter = {
    every?: PartidaWhereInput
    some?: PartidaWhereInput
    none?: PartidaWhereInput
  }

  export type EquipeOficialListRelationFilter = {
    every?: EquipeOficialWhereInput
    some?: EquipeOficialWhereInput
    none?: EquipeOficialWhereInput
  }

  export type PartidaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EquipeOficialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TorneioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    data?: SortOrder
    local?: SortOrder
    status?: SortOrder
    criadoPorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TorneioAvgOrderByAggregateInput = {
    id?: SortOrder
    criadoPorId?: SortOrder
  }

  export type TorneioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    data?: SortOrder
    local?: SortOrder
    status?: SortOrder
    criadoPorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TorneioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    data?: SortOrder
    local?: SortOrder
    status?: SortOrder
    criadoPorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TorneioSumOrderByAggregateInput = {
    id?: SortOrder
    criadoPorId?: SortOrder
  }

  export type EnumTipoTorneioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoTorneio | EnumTipoTorneioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoTorneio[] | ListEnumTipoTorneioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoTorneio[] | ListEnumTipoTorneioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoTorneioWithAggregatesFilter<$PrismaModel> | $Enums.TipoTorneio
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoTorneioFilter<$PrismaModel>
    _max?: NestedEnumTipoTorneioFilter<$PrismaModel>
  }

  export type EnumStatusTorneioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusTorneio | EnumStatusTorneioFieldRefInput<$PrismaModel>
    in?: $Enums.StatusTorneio[] | ListEnumStatusTorneioFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusTorneio[] | ListEnumStatusTorneioFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusTorneioWithAggregatesFilter<$PrismaModel> | $Enums.StatusTorneio
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusTorneioFilter<$PrismaModel>
    _max?: NestedEnumStatusTorneioFilter<$PrismaModel>
  }

  export type AtletaScalarRelationFilter = {
    is?: AtletaWhereInput
    isNot?: AtletaWhereInput
  }

  export type TorneioScalarRelationFilter = {
    is?: TorneioWhereInput
    isNot?: TorneioWhereInput
  }

  export type ParticipacaoAmadorAtletaIdTorneioIdCompoundUniqueInput = {
    atletaId: number
    torneioId: number
  }

  export type ParticipacaoAmadorCountOrderByAggregateInput = {
    id?: SortOrder
    atletaId?: SortOrder
    torneioId?: SortOrder
    criadoEm?: SortOrder
  }

  export type ParticipacaoAmadorAvgOrderByAggregateInput = {
    id?: SortOrder
    atletaId?: SortOrder
    torneioId?: SortOrder
  }

  export type ParticipacaoAmadorMaxOrderByAggregateInput = {
    id?: SortOrder
    atletaId?: SortOrder
    torneioId?: SortOrder
    criadoEm?: SortOrder
  }

  export type ParticipacaoAmadorMinOrderByAggregateInput = {
    id?: SortOrder
    atletaId?: SortOrder
    torneioId?: SortOrder
    criadoEm?: SortOrder
  }

  export type ParticipacaoAmadorSumOrderByAggregateInput = {
    id?: SortOrder
    atletaId?: SortOrder
    torneioId?: SortOrder
  }

  export type AtletaListRelationFilter = {
    every?: AtletaWhereInput
    some?: AtletaWhereInput
    none?: AtletaWhereInput
  }

  export type AtletaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EquipeAmadorCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    torneioId?: SortOrder
  }

  export type EquipeAmadorAvgOrderByAggregateInput = {
    id?: SortOrder
    torneioId?: SortOrder
  }

  export type EquipeAmadorMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    torneioId?: SortOrder
  }

  export type EquipeAmadorMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    torneioId?: SortOrder
  }

  export type EquipeAmadorSumOrderByAggregateInput = {
    id?: SortOrder
    torneioId?: SortOrder
  }

  export type EquipeOficialCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    torneioId?: SortOrder
  }

  export type EquipeOficialAvgOrderByAggregateInput = {
    id?: SortOrder
    torneioId?: SortOrder
  }

  export type EquipeOficialMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    torneioId?: SortOrder
  }

  export type EquipeOficialMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    createdAt?: SortOrder
    torneioId?: SortOrder
  }

  export type EquipeOficialSumOrderByAggregateInput = {
    id?: SortOrder
    torneioId?: SortOrder
  }

  export type EquipeOficialScalarRelationFilter = {
    is?: EquipeOficialWhereInput
    isNot?: EquipeOficialWhereInput
  }

  export type AtletaEquipeOficialAtletaIdEquipeOficialIdCompoundUniqueInput = {
    atletaId: number
    equipeOficialId: number
  }

  export type AtletaEquipeOficialCountOrderByAggregateInput = {
    atletaId?: SortOrder
    equipeOficialId?: SortOrder
  }

  export type AtletaEquipeOficialAvgOrderByAggregateInput = {
    atletaId?: SortOrder
    equipeOficialId?: SortOrder
  }

  export type AtletaEquipeOficialMaxOrderByAggregateInput = {
    atletaId?: SortOrder
    equipeOficialId?: SortOrder
  }

  export type AtletaEquipeOficialMinOrderByAggregateInput = {
    atletaId?: SortOrder
    equipeOficialId?: SortOrder
  }

  export type AtletaEquipeOficialSumOrderByAggregateInput = {
    atletaId?: SortOrder
    equipeOficialId?: SortOrder
  }

  export type EquipeAmadorNullableScalarRelationFilter = {
    is?: EquipeAmadorWhereInput | null
    isNot?: EquipeAmadorWhereInput | null
  }

  export type EquipeOficialNullableScalarRelationFilter = {
    is?: EquipeOficialWhereInput | null
    isNot?: EquipeOficialWhereInput | null
  }

  export type PartidaCountOrderByAggregateInput = {
    id?: SortOrder
    torneioId?: SortOrder
    fase?: SortOrder
    equipeAmador1Id?: SortOrder
    equipeAmador2Id?: SortOrder
    equipeOficial1Id?: SortOrder
    equipeOficial2Id?: SortOrder
    pontosEquipe1?: SortOrder
    pontosEquipe2?: SortOrder
    vencedorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartidaAvgOrderByAggregateInput = {
    id?: SortOrder
    torneioId?: SortOrder
    equipeAmador1Id?: SortOrder
    equipeAmador2Id?: SortOrder
    equipeOficial1Id?: SortOrder
    equipeOficial2Id?: SortOrder
    pontosEquipe1?: SortOrder
    pontosEquipe2?: SortOrder
    vencedorId?: SortOrder
  }

  export type PartidaMaxOrderByAggregateInput = {
    id?: SortOrder
    torneioId?: SortOrder
    fase?: SortOrder
    equipeAmador1Id?: SortOrder
    equipeAmador2Id?: SortOrder
    equipeOficial1Id?: SortOrder
    equipeOficial2Id?: SortOrder
    pontosEquipe1?: SortOrder
    pontosEquipe2?: SortOrder
    vencedorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartidaMinOrderByAggregateInput = {
    id?: SortOrder
    torneioId?: SortOrder
    fase?: SortOrder
    equipeAmador1Id?: SortOrder
    equipeAmador2Id?: SortOrder
    equipeOficial1Id?: SortOrder
    equipeOficial2Id?: SortOrder
    pontosEquipe1?: SortOrder
    pontosEquipe2?: SortOrder
    vencedorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PartidaSumOrderByAggregateInput = {
    id?: SortOrder
    torneioId?: SortOrder
    equipeAmador1Id?: SortOrder
    equipeAmador2Id?: SortOrder
    equipeOficial1Id?: SortOrder
    equipeOficial2Id?: SortOrder
    pontosEquipe1?: SortOrder
    pontosEquipe2?: SortOrder
    vencedorId?: SortOrder
  }

  export type TorneioCreateNestedManyWithoutCriadoPorInput = {
    create?: XOR<TorneioCreateWithoutCriadoPorInput, TorneioUncheckedCreateWithoutCriadoPorInput> | TorneioCreateWithoutCriadoPorInput[] | TorneioUncheckedCreateWithoutCriadoPorInput[]
    connectOrCreate?: TorneioCreateOrConnectWithoutCriadoPorInput | TorneioCreateOrConnectWithoutCriadoPorInput[]
    createMany?: TorneioCreateManyCriadoPorInputEnvelope
    connect?: TorneioWhereUniqueInput | TorneioWhereUniqueInput[]
  }

  export type AtletaCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<AtletaCreateWithoutUsuarioInput, AtletaUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: AtletaCreateOrConnectWithoutUsuarioInput
    connect?: AtletaWhereUniqueInput
  }

  export type TreinadorCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<TreinadorCreateWithoutUsuarioInput, TreinadorUncheckedCreateWithoutUsuarioInput> | TreinadorCreateWithoutUsuarioInput[] | TreinadorUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TreinadorCreateOrConnectWithoutUsuarioInput | TreinadorCreateOrConnectWithoutUsuarioInput[]
    createMany?: TreinadorCreateManyUsuarioInputEnvelope
    connect?: TreinadorWhereUniqueInput | TreinadorWhereUniqueInput[]
  }

  export type TorneioUncheckedCreateNestedManyWithoutCriadoPorInput = {
    create?: XOR<TorneioCreateWithoutCriadoPorInput, TorneioUncheckedCreateWithoutCriadoPorInput> | TorneioCreateWithoutCriadoPorInput[] | TorneioUncheckedCreateWithoutCriadoPorInput[]
    connectOrCreate?: TorneioCreateOrConnectWithoutCriadoPorInput | TorneioCreateOrConnectWithoutCriadoPorInput[]
    createMany?: TorneioCreateManyCriadoPorInputEnvelope
    connect?: TorneioWhereUniqueInput | TorneioWhereUniqueInput[]
  }

  export type AtletaUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: XOR<AtletaCreateWithoutUsuarioInput, AtletaUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: AtletaCreateOrConnectWithoutUsuarioInput
    connect?: AtletaWhereUniqueInput
  }

  export type TreinadorUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<TreinadorCreateWithoutUsuarioInput, TreinadorUncheckedCreateWithoutUsuarioInput> | TreinadorCreateWithoutUsuarioInput[] | TreinadorUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TreinadorCreateOrConnectWithoutUsuarioInput | TreinadorCreateOrConnectWithoutUsuarioInput[]
    createMany?: TreinadorCreateManyUsuarioInputEnvelope
    connect?: TreinadorWhereUniqueInput | TreinadorWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TorneioUpdateManyWithoutCriadoPorNestedInput = {
    create?: XOR<TorneioCreateWithoutCriadoPorInput, TorneioUncheckedCreateWithoutCriadoPorInput> | TorneioCreateWithoutCriadoPorInput[] | TorneioUncheckedCreateWithoutCriadoPorInput[]
    connectOrCreate?: TorneioCreateOrConnectWithoutCriadoPorInput | TorneioCreateOrConnectWithoutCriadoPorInput[]
    upsert?: TorneioUpsertWithWhereUniqueWithoutCriadoPorInput | TorneioUpsertWithWhereUniqueWithoutCriadoPorInput[]
    createMany?: TorneioCreateManyCriadoPorInputEnvelope
    set?: TorneioWhereUniqueInput | TorneioWhereUniqueInput[]
    disconnect?: TorneioWhereUniqueInput | TorneioWhereUniqueInput[]
    delete?: TorneioWhereUniqueInput | TorneioWhereUniqueInput[]
    connect?: TorneioWhereUniqueInput | TorneioWhereUniqueInput[]
    update?: TorneioUpdateWithWhereUniqueWithoutCriadoPorInput | TorneioUpdateWithWhereUniqueWithoutCriadoPorInput[]
    updateMany?: TorneioUpdateManyWithWhereWithoutCriadoPorInput | TorneioUpdateManyWithWhereWithoutCriadoPorInput[]
    deleteMany?: TorneioScalarWhereInput | TorneioScalarWhereInput[]
  }

  export type AtletaUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<AtletaCreateWithoutUsuarioInput, AtletaUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: AtletaCreateOrConnectWithoutUsuarioInput
    upsert?: AtletaUpsertWithoutUsuarioInput
    disconnect?: AtletaWhereInput | boolean
    delete?: AtletaWhereInput | boolean
    connect?: AtletaWhereUniqueInput
    update?: XOR<XOR<AtletaUpdateToOneWithWhereWithoutUsuarioInput, AtletaUpdateWithoutUsuarioInput>, AtletaUncheckedUpdateWithoutUsuarioInput>
  }

  export type TreinadorUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<TreinadorCreateWithoutUsuarioInput, TreinadorUncheckedCreateWithoutUsuarioInput> | TreinadorCreateWithoutUsuarioInput[] | TreinadorUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TreinadorCreateOrConnectWithoutUsuarioInput | TreinadorCreateOrConnectWithoutUsuarioInput[]
    upsert?: TreinadorUpsertWithWhereUniqueWithoutUsuarioInput | TreinadorUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: TreinadorCreateManyUsuarioInputEnvelope
    set?: TreinadorWhereUniqueInput | TreinadorWhereUniqueInput[]
    disconnect?: TreinadorWhereUniqueInput | TreinadorWhereUniqueInput[]
    delete?: TreinadorWhereUniqueInput | TreinadorWhereUniqueInput[]
    connect?: TreinadorWhereUniqueInput | TreinadorWhereUniqueInput[]
    update?: TreinadorUpdateWithWhereUniqueWithoutUsuarioInput | TreinadorUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: TreinadorUpdateManyWithWhereWithoutUsuarioInput | TreinadorUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: TreinadorScalarWhereInput | TreinadorScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TorneioUncheckedUpdateManyWithoutCriadoPorNestedInput = {
    create?: XOR<TorneioCreateWithoutCriadoPorInput, TorneioUncheckedCreateWithoutCriadoPorInput> | TorneioCreateWithoutCriadoPorInput[] | TorneioUncheckedCreateWithoutCriadoPorInput[]
    connectOrCreate?: TorneioCreateOrConnectWithoutCriadoPorInput | TorneioCreateOrConnectWithoutCriadoPorInput[]
    upsert?: TorneioUpsertWithWhereUniqueWithoutCriadoPorInput | TorneioUpsertWithWhereUniqueWithoutCriadoPorInput[]
    createMany?: TorneioCreateManyCriadoPorInputEnvelope
    set?: TorneioWhereUniqueInput | TorneioWhereUniqueInput[]
    disconnect?: TorneioWhereUniqueInput | TorneioWhereUniqueInput[]
    delete?: TorneioWhereUniqueInput | TorneioWhereUniqueInput[]
    connect?: TorneioWhereUniqueInput | TorneioWhereUniqueInput[]
    update?: TorneioUpdateWithWhereUniqueWithoutCriadoPorInput | TorneioUpdateWithWhereUniqueWithoutCriadoPorInput[]
    updateMany?: TorneioUpdateManyWithWhereWithoutCriadoPorInput | TorneioUpdateManyWithWhereWithoutCriadoPorInput[]
    deleteMany?: TorneioScalarWhereInput | TorneioScalarWhereInput[]
  }

  export type AtletaUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: XOR<AtletaCreateWithoutUsuarioInput, AtletaUncheckedCreateWithoutUsuarioInput>
    connectOrCreate?: AtletaCreateOrConnectWithoutUsuarioInput
    upsert?: AtletaUpsertWithoutUsuarioInput
    disconnect?: AtletaWhereInput | boolean
    delete?: AtletaWhereInput | boolean
    connect?: AtletaWhereUniqueInput
    update?: XOR<XOR<AtletaUpdateToOneWithWhereWithoutUsuarioInput, AtletaUpdateWithoutUsuarioInput>, AtletaUncheckedUpdateWithoutUsuarioInput>
  }

  export type TreinadorUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<TreinadorCreateWithoutUsuarioInput, TreinadorUncheckedCreateWithoutUsuarioInput> | TreinadorCreateWithoutUsuarioInput[] | TreinadorUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: TreinadorCreateOrConnectWithoutUsuarioInput | TreinadorCreateOrConnectWithoutUsuarioInput[]
    upsert?: TreinadorUpsertWithWhereUniqueWithoutUsuarioInput | TreinadorUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: TreinadorCreateManyUsuarioInputEnvelope
    set?: TreinadorWhereUniqueInput | TreinadorWhereUniqueInput[]
    disconnect?: TreinadorWhereUniqueInput | TreinadorWhereUniqueInput[]
    delete?: TreinadorWhereUniqueInput | TreinadorWhereUniqueInput[]
    connect?: TreinadorWhereUniqueInput | TreinadorWhereUniqueInput[]
    update?: TreinadorUpdateWithWhereUniqueWithoutUsuarioInput | TreinadorUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: TreinadorUpdateManyWithWhereWithoutUsuarioInput | TreinadorUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: TreinadorScalarWhereInput | TreinadorScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutTreinadorInput = {
    create?: XOR<UsuarioCreateWithoutTreinadorInput, UsuarioUncheckedCreateWithoutTreinadorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTreinadorInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutTreinadorNestedInput = {
    create?: XOR<UsuarioCreateWithoutTreinadorInput, UsuarioUncheckedCreateWithoutTreinadorInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTreinadorInput
    upsert?: UsuarioUpsertWithoutTreinadorInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutTreinadorInput, UsuarioUpdateWithoutTreinadorInput>, UsuarioUncheckedUpdateWithoutTreinadorInput>
  }

  export type UsuarioCreateNestedOneWithoutAtletaInput = {
    create?: XOR<UsuarioCreateWithoutAtletaInput, UsuarioUncheckedCreateWithoutAtletaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAtletaInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ParticipacaoAmadorCreateNestedManyWithoutAtletaInput = {
    create?: XOR<ParticipacaoAmadorCreateWithoutAtletaInput, ParticipacaoAmadorUncheckedCreateWithoutAtletaInput> | ParticipacaoAmadorCreateWithoutAtletaInput[] | ParticipacaoAmadorUncheckedCreateWithoutAtletaInput[]
    connectOrCreate?: ParticipacaoAmadorCreateOrConnectWithoutAtletaInput | ParticipacaoAmadorCreateOrConnectWithoutAtletaInput[]
    createMany?: ParticipacaoAmadorCreateManyAtletaInputEnvelope
    connect?: ParticipacaoAmadorWhereUniqueInput | ParticipacaoAmadorWhereUniqueInput[]
  }

  export type AtletaEquipeOficialCreateNestedManyWithoutAtletaInput = {
    create?: XOR<AtletaEquipeOficialCreateWithoutAtletaInput, AtletaEquipeOficialUncheckedCreateWithoutAtletaInput> | AtletaEquipeOficialCreateWithoutAtletaInput[] | AtletaEquipeOficialUncheckedCreateWithoutAtletaInput[]
    connectOrCreate?: AtletaEquipeOficialCreateOrConnectWithoutAtletaInput | AtletaEquipeOficialCreateOrConnectWithoutAtletaInput[]
    createMany?: AtletaEquipeOficialCreateManyAtletaInputEnvelope
    connect?: AtletaEquipeOficialWhereUniqueInput | AtletaEquipeOficialWhereUniqueInput[]
  }

  export type EquipeAmadorCreateNestedManyWithoutMembrosInput = {
    create?: XOR<EquipeAmadorCreateWithoutMembrosInput, EquipeAmadorUncheckedCreateWithoutMembrosInput> | EquipeAmadorCreateWithoutMembrosInput[] | EquipeAmadorUncheckedCreateWithoutMembrosInput[]
    connectOrCreate?: EquipeAmadorCreateOrConnectWithoutMembrosInput | EquipeAmadorCreateOrConnectWithoutMembrosInput[]
    connect?: EquipeAmadorWhereUniqueInput | EquipeAmadorWhereUniqueInput[]
  }

  export type ParticipacaoAmadorUncheckedCreateNestedManyWithoutAtletaInput = {
    create?: XOR<ParticipacaoAmadorCreateWithoutAtletaInput, ParticipacaoAmadorUncheckedCreateWithoutAtletaInput> | ParticipacaoAmadorCreateWithoutAtletaInput[] | ParticipacaoAmadorUncheckedCreateWithoutAtletaInput[]
    connectOrCreate?: ParticipacaoAmadorCreateOrConnectWithoutAtletaInput | ParticipacaoAmadorCreateOrConnectWithoutAtletaInput[]
    createMany?: ParticipacaoAmadorCreateManyAtletaInputEnvelope
    connect?: ParticipacaoAmadorWhereUniqueInput | ParticipacaoAmadorWhereUniqueInput[]
  }

  export type AtletaEquipeOficialUncheckedCreateNestedManyWithoutAtletaInput = {
    create?: XOR<AtletaEquipeOficialCreateWithoutAtletaInput, AtletaEquipeOficialUncheckedCreateWithoutAtletaInput> | AtletaEquipeOficialCreateWithoutAtletaInput[] | AtletaEquipeOficialUncheckedCreateWithoutAtletaInput[]
    connectOrCreate?: AtletaEquipeOficialCreateOrConnectWithoutAtletaInput | AtletaEquipeOficialCreateOrConnectWithoutAtletaInput[]
    createMany?: AtletaEquipeOficialCreateManyAtletaInputEnvelope
    connect?: AtletaEquipeOficialWhereUniqueInput | AtletaEquipeOficialWhereUniqueInput[]
  }

  export type EquipeAmadorUncheckedCreateNestedManyWithoutMembrosInput = {
    create?: XOR<EquipeAmadorCreateWithoutMembrosInput, EquipeAmadorUncheckedCreateWithoutMembrosInput> | EquipeAmadorCreateWithoutMembrosInput[] | EquipeAmadorUncheckedCreateWithoutMembrosInput[]
    connectOrCreate?: EquipeAmadorCreateOrConnectWithoutMembrosInput | EquipeAmadorCreateOrConnectWithoutMembrosInput[]
    connect?: EquipeAmadorWhereUniqueInput | EquipeAmadorWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UsuarioUpdateOneWithoutAtletaNestedInput = {
    create?: XOR<UsuarioCreateWithoutAtletaInput, UsuarioUncheckedCreateWithoutAtletaInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAtletaInput
    upsert?: UsuarioUpsertWithoutAtletaInput
    disconnect?: UsuarioWhereInput | boolean
    delete?: UsuarioWhereInput | boolean
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAtletaInput, UsuarioUpdateWithoutAtletaInput>, UsuarioUncheckedUpdateWithoutAtletaInput>
  }

  export type ParticipacaoAmadorUpdateManyWithoutAtletaNestedInput = {
    create?: XOR<ParticipacaoAmadorCreateWithoutAtletaInput, ParticipacaoAmadorUncheckedCreateWithoutAtletaInput> | ParticipacaoAmadorCreateWithoutAtletaInput[] | ParticipacaoAmadorUncheckedCreateWithoutAtletaInput[]
    connectOrCreate?: ParticipacaoAmadorCreateOrConnectWithoutAtletaInput | ParticipacaoAmadorCreateOrConnectWithoutAtletaInput[]
    upsert?: ParticipacaoAmadorUpsertWithWhereUniqueWithoutAtletaInput | ParticipacaoAmadorUpsertWithWhereUniqueWithoutAtletaInput[]
    createMany?: ParticipacaoAmadorCreateManyAtletaInputEnvelope
    set?: ParticipacaoAmadorWhereUniqueInput | ParticipacaoAmadorWhereUniqueInput[]
    disconnect?: ParticipacaoAmadorWhereUniqueInput | ParticipacaoAmadorWhereUniqueInput[]
    delete?: ParticipacaoAmadorWhereUniqueInput | ParticipacaoAmadorWhereUniqueInput[]
    connect?: ParticipacaoAmadorWhereUniqueInput | ParticipacaoAmadorWhereUniqueInput[]
    update?: ParticipacaoAmadorUpdateWithWhereUniqueWithoutAtletaInput | ParticipacaoAmadorUpdateWithWhereUniqueWithoutAtletaInput[]
    updateMany?: ParticipacaoAmadorUpdateManyWithWhereWithoutAtletaInput | ParticipacaoAmadorUpdateManyWithWhereWithoutAtletaInput[]
    deleteMany?: ParticipacaoAmadorScalarWhereInput | ParticipacaoAmadorScalarWhereInput[]
  }

  export type AtletaEquipeOficialUpdateManyWithoutAtletaNestedInput = {
    create?: XOR<AtletaEquipeOficialCreateWithoutAtletaInput, AtletaEquipeOficialUncheckedCreateWithoutAtletaInput> | AtletaEquipeOficialCreateWithoutAtletaInput[] | AtletaEquipeOficialUncheckedCreateWithoutAtletaInput[]
    connectOrCreate?: AtletaEquipeOficialCreateOrConnectWithoutAtletaInput | AtletaEquipeOficialCreateOrConnectWithoutAtletaInput[]
    upsert?: AtletaEquipeOficialUpsertWithWhereUniqueWithoutAtletaInput | AtletaEquipeOficialUpsertWithWhereUniqueWithoutAtletaInput[]
    createMany?: AtletaEquipeOficialCreateManyAtletaInputEnvelope
    set?: AtletaEquipeOficialWhereUniqueInput | AtletaEquipeOficialWhereUniqueInput[]
    disconnect?: AtletaEquipeOficialWhereUniqueInput | AtletaEquipeOficialWhereUniqueInput[]
    delete?: AtletaEquipeOficialWhereUniqueInput | AtletaEquipeOficialWhereUniqueInput[]
    connect?: AtletaEquipeOficialWhereUniqueInput | AtletaEquipeOficialWhereUniqueInput[]
    update?: AtletaEquipeOficialUpdateWithWhereUniqueWithoutAtletaInput | AtletaEquipeOficialUpdateWithWhereUniqueWithoutAtletaInput[]
    updateMany?: AtletaEquipeOficialUpdateManyWithWhereWithoutAtletaInput | AtletaEquipeOficialUpdateManyWithWhereWithoutAtletaInput[]
    deleteMany?: AtletaEquipeOficialScalarWhereInput | AtletaEquipeOficialScalarWhereInput[]
  }

  export type EquipeAmadorUpdateManyWithoutMembrosNestedInput = {
    create?: XOR<EquipeAmadorCreateWithoutMembrosInput, EquipeAmadorUncheckedCreateWithoutMembrosInput> | EquipeAmadorCreateWithoutMembrosInput[] | EquipeAmadorUncheckedCreateWithoutMembrosInput[]
    connectOrCreate?: EquipeAmadorCreateOrConnectWithoutMembrosInput | EquipeAmadorCreateOrConnectWithoutMembrosInput[]
    upsert?: EquipeAmadorUpsertWithWhereUniqueWithoutMembrosInput | EquipeAmadorUpsertWithWhereUniqueWithoutMembrosInput[]
    set?: EquipeAmadorWhereUniqueInput | EquipeAmadorWhereUniqueInput[]
    disconnect?: EquipeAmadorWhereUniqueInput | EquipeAmadorWhereUniqueInput[]
    delete?: EquipeAmadorWhereUniqueInput | EquipeAmadorWhereUniqueInput[]
    connect?: EquipeAmadorWhereUniqueInput | EquipeAmadorWhereUniqueInput[]
    update?: EquipeAmadorUpdateWithWhereUniqueWithoutMembrosInput | EquipeAmadorUpdateWithWhereUniqueWithoutMembrosInput[]
    updateMany?: EquipeAmadorUpdateManyWithWhereWithoutMembrosInput | EquipeAmadorUpdateManyWithWhereWithoutMembrosInput[]
    deleteMany?: EquipeAmadorScalarWhereInput | EquipeAmadorScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ParticipacaoAmadorUncheckedUpdateManyWithoutAtletaNestedInput = {
    create?: XOR<ParticipacaoAmadorCreateWithoutAtletaInput, ParticipacaoAmadorUncheckedCreateWithoutAtletaInput> | ParticipacaoAmadorCreateWithoutAtletaInput[] | ParticipacaoAmadorUncheckedCreateWithoutAtletaInput[]
    connectOrCreate?: ParticipacaoAmadorCreateOrConnectWithoutAtletaInput | ParticipacaoAmadorCreateOrConnectWithoutAtletaInput[]
    upsert?: ParticipacaoAmadorUpsertWithWhereUniqueWithoutAtletaInput | ParticipacaoAmadorUpsertWithWhereUniqueWithoutAtletaInput[]
    createMany?: ParticipacaoAmadorCreateManyAtletaInputEnvelope
    set?: ParticipacaoAmadorWhereUniqueInput | ParticipacaoAmadorWhereUniqueInput[]
    disconnect?: ParticipacaoAmadorWhereUniqueInput | ParticipacaoAmadorWhereUniqueInput[]
    delete?: ParticipacaoAmadorWhereUniqueInput | ParticipacaoAmadorWhereUniqueInput[]
    connect?: ParticipacaoAmadorWhereUniqueInput | ParticipacaoAmadorWhereUniqueInput[]
    update?: ParticipacaoAmadorUpdateWithWhereUniqueWithoutAtletaInput | ParticipacaoAmadorUpdateWithWhereUniqueWithoutAtletaInput[]
    updateMany?: ParticipacaoAmadorUpdateManyWithWhereWithoutAtletaInput | ParticipacaoAmadorUpdateManyWithWhereWithoutAtletaInput[]
    deleteMany?: ParticipacaoAmadorScalarWhereInput | ParticipacaoAmadorScalarWhereInput[]
  }

  export type AtletaEquipeOficialUncheckedUpdateManyWithoutAtletaNestedInput = {
    create?: XOR<AtletaEquipeOficialCreateWithoutAtletaInput, AtletaEquipeOficialUncheckedCreateWithoutAtletaInput> | AtletaEquipeOficialCreateWithoutAtletaInput[] | AtletaEquipeOficialUncheckedCreateWithoutAtletaInput[]
    connectOrCreate?: AtletaEquipeOficialCreateOrConnectWithoutAtletaInput | AtletaEquipeOficialCreateOrConnectWithoutAtletaInput[]
    upsert?: AtletaEquipeOficialUpsertWithWhereUniqueWithoutAtletaInput | AtletaEquipeOficialUpsertWithWhereUniqueWithoutAtletaInput[]
    createMany?: AtletaEquipeOficialCreateManyAtletaInputEnvelope
    set?: AtletaEquipeOficialWhereUniqueInput | AtletaEquipeOficialWhereUniqueInput[]
    disconnect?: AtletaEquipeOficialWhereUniqueInput | AtletaEquipeOficialWhereUniqueInput[]
    delete?: AtletaEquipeOficialWhereUniqueInput | AtletaEquipeOficialWhereUniqueInput[]
    connect?: AtletaEquipeOficialWhereUniqueInput | AtletaEquipeOficialWhereUniqueInput[]
    update?: AtletaEquipeOficialUpdateWithWhereUniqueWithoutAtletaInput | AtletaEquipeOficialUpdateWithWhereUniqueWithoutAtletaInput[]
    updateMany?: AtletaEquipeOficialUpdateManyWithWhereWithoutAtletaInput | AtletaEquipeOficialUpdateManyWithWhereWithoutAtletaInput[]
    deleteMany?: AtletaEquipeOficialScalarWhereInput | AtletaEquipeOficialScalarWhereInput[]
  }

  export type EquipeAmadorUncheckedUpdateManyWithoutMembrosNestedInput = {
    create?: XOR<EquipeAmadorCreateWithoutMembrosInput, EquipeAmadorUncheckedCreateWithoutMembrosInput> | EquipeAmadorCreateWithoutMembrosInput[] | EquipeAmadorUncheckedCreateWithoutMembrosInput[]
    connectOrCreate?: EquipeAmadorCreateOrConnectWithoutMembrosInput | EquipeAmadorCreateOrConnectWithoutMembrosInput[]
    upsert?: EquipeAmadorUpsertWithWhereUniqueWithoutMembrosInput | EquipeAmadorUpsertWithWhereUniqueWithoutMembrosInput[]
    set?: EquipeAmadorWhereUniqueInput | EquipeAmadorWhereUniqueInput[]
    disconnect?: EquipeAmadorWhereUniqueInput | EquipeAmadorWhereUniqueInput[]
    delete?: EquipeAmadorWhereUniqueInput | EquipeAmadorWhereUniqueInput[]
    connect?: EquipeAmadorWhereUniqueInput | EquipeAmadorWhereUniqueInput[]
    update?: EquipeAmadorUpdateWithWhereUniqueWithoutMembrosInput | EquipeAmadorUpdateWithWhereUniqueWithoutMembrosInput[]
    updateMany?: EquipeAmadorUpdateManyWithWhereWithoutMembrosInput | EquipeAmadorUpdateManyWithWhereWithoutMembrosInput[]
    deleteMany?: EquipeAmadorScalarWhereInput | EquipeAmadorScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutTorneioInput = {
    create?: XOR<UsuarioCreateWithoutTorneioInput, UsuarioUncheckedCreateWithoutTorneioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTorneioInput
    connect?: UsuarioWhereUniqueInput
  }

  export type PartidaCreateNestedManyWithoutTorneioInput = {
    create?: XOR<PartidaCreateWithoutTorneioInput, PartidaUncheckedCreateWithoutTorneioInput> | PartidaCreateWithoutTorneioInput[] | PartidaUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: PartidaCreateOrConnectWithoutTorneioInput | PartidaCreateOrConnectWithoutTorneioInput[]
    createMany?: PartidaCreateManyTorneioInputEnvelope
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
  }

  export type EquipeAmadorCreateNestedManyWithoutTorneioInput = {
    create?: XOR<EquipeAmadorCreateWithoutTorneioInput, EquipeAmadorUncheckedCreateWithoutTorneioInput> | EquipeAmadorCreateWithoutTorneioInput[] | EquipeAmadorUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: EquipeAmadorCreateOrConnectWithoutTorneioInput | EquipeAmadorCreateOrConnectWithoutTorneioInput[]
    createMany?: EquipeAmadorCreateManyTorneioInputEnvelope
    connect?: EquipeAmadorWhereUniqueInput | EquipeAmadorWhereUniqueInput[]
  }

  export type EquipeOficialCreateNestedManyWithoutTorneioInput = {
    create?: XOR<EquipeOficialCreateWithoutTorneioInput, EquipeOficialUncheckedCreateWithoutTorneioInput> | EquipeOficialCreateWithoutTorneioInput[] | EquipeOficialUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: EquipeOficialCreateOrConnectWithoutTorneioInput | EquipeOficialCreateOrConnectWithoutTorneioInput[]
    createMany?: EquipeOficialCreateManyTorneioInputEnvelope
    connect?: EquipeOficialWhereUniqueInput | EquipeOficialWhereUniqueInput[]
  }

  export type ParticipacaoAmadorCreateNestedManyWithoutTorneioInput = {
    create?: XOR<ParticipacaoAmadorCreateWithoutTorneioInput, ParticipacaoAmadorUncheckedCreateWithoutTorneioInput> | ParticipacaoAmadorCreateWithoutTorneioInput[] | ParticipacaoAmadorUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: ParticipacaoAmadorCreateOrConnectWithoutTorneioInput | ParticipacaoAmadorCreateOrConnectWithoutTorneioInput[]
    createMany?: ParticipacaoAmadorCreateManyTorneioInputEnvelope
    connect?: ParticipacaoAmadorWhereUniqueInput | ParticipacaoAmadorWhereUniqueInput[]
  }

  export type PartidaUncheckedCreateNestedManyWithoutTorneioInput = {
    create?: XOR<PartidaCreateWithoutTorneioInput, PartidaUncheckedCreateWithoutTorneioInput> | PartidaCreateWithoutTorneioInput[] | PartidaUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: PartidaCreateOrConnectWithoutTorneioInput | PartidaCreateOrConnectWithoutTorneioInput[]
    createMany?: PartidaCreateManyTorneioInputEnvelope
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
  }

  export type EquipeAmadorUncheckedCreateNestedManyWithoutTorneioInput = {
    create?: XOR<EquipeAmadorCreateWithoutTorneioInput, EquipeAmadorUncheckedCreateWithoutTorneioInput> | EquipeAmadorCreateWithoutTorneioInput[] | EquipeAmadorUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: EquipeAmadorCreateOrConnectWithoutTorneioInput | EquipeAmadorCreateOrConnectWithoutTorneioInput[]
    createMany?: EquipeAmadorCreateManyTorneioInputEnvelope
    connect?: EquipeAmadorWhereUniqueInput | EquipeAmadorWhereUniqueInput[]
  }

  export type EquipeOficialUncheckedCreateNestedManyWithoutTorneioInput = {
    create?: XOR<EquipeOficialCreateWithoutTorneioInput, EquipeOficialUncheckedCreateWithoutTorneioInput> | EquipeOficialCreateWithoutTorneioInput[] | EquipeOficialUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: EquipeOficialCreateOrConnectWithoutTorneioInput | EquipeOficialCreateOrConnectWithoutTorneioInput[]
    createMany?: EquipeOficialCreateManyTorneioInputEnvelope
    connect?: EquipeOficialWhereUniqueInput | EquipeOficialWhereUniqueInput[]
  }

  export type ParticipacaoAmadorUncheckedCreateNestedManyWithoutTorneioInput = {
    create?: XOR<ParticipacaoAmadorCreateWithoutTorneioInput, ParticipacaoAmadorUncheckedCreateWithoutTorneioInput> | ParticipacaoAmadorCreateWithoutTorneioInput[] | ParticipacaoAmadorUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: ParticipacaoAmadorCreateOrConnectWithoutTorneioInput | ParticipacaoAmadorCreateOrConnectWithoutTorneioInput[]
    createMany?: ParticipacaoAmadorCreateManyTorneioInputEnvelope
    connect?: ParticipacaoAmadorWhereUniqueInput | ParticipacaoAmadorWhereUniqueInput[]
  }

  export type EnumTipoTorneioFieldUpdateOperationsInput = {
    set?: $Enums.TipoTorneio
  }

  export type EnumStatusTorneioFieldUpdateOperationsInput = {
    set?: $Enums.StatusTorneio
  }

  export type UsuarioUpdateOneRequiredWithoutTorneioNestedInput = {
    create?: XOR<UsuarioCreateWithoutTorneioInput, UsuarioUncheckedCreateWithoutTorneioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTorneioInput
    upsert?: UsuarioUpsertWithoutTorneioInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutTorneioInput, UsuarioUpdateWithoutTorneioInput>, UsuarioUncheckedUpdateWithoutTorneioInput>
  }

  export type PartidaUpdateManyWithoutTorneioNestedInput = {
    create?: XOR<PartidaCreateWithoutTorneioInput, PartidaUncheckedCreateWithoutTorneioInput> | PartidaCreateWithoutTorneioInput[] | PartidaUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: PartidaCreateOrConnectWithoutTorneioInput | PartidaCreateOrConnectWithoutTorneioInput[]
    upsert?: PartidaUpsertWithWhereUniqueWithoutTorneioInput | PartidaUpsertWithWhereUniqueWithoutTorneioInput[]
    createMany?: PartidaCreateManyTorneioInputEnvelope
    set?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    disconnect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    delete?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    update?: PartidaUpdateWithWhereUniqueWithoutTorneioInput | PartidaUpdateWithWhereUniqueWithoutTorneioInput[]
    updateMany?: PartidaUpdateManyWithWhereWithoutTorneioInput | PartidaUpdateManyWithWhereWithoutTorneioInput[]
    deleteMany?: PartidaScalarWhereInput | PartidaScalarWhereInput[]
  }

  export type EquipeAmadorUpdateManyWithoutTorneioNestedInput = {
    create?: XOR<EquipeAmadorCreateWithoutTorneioInput, EquipeAmadorUncheckedCreateWithoutTorneioInput> | EquipeAmadorCreateWithoutTorneioInput[] | EquipeAmadorUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: EquipeAmadorCreateOrConnectWithoutTorneioInput | EquipeAmadorCreateOrConnectWithoutTorneioInput[]
    upsert?: EquipeAmadorUpsertWithWhereUniqueWithoutTorneioInput | EquipeAmadorUpsertWithWhereUniqueWithoutTorneioInput[]
    createMany?: EquipeAmadorCreateManyTorneioInputEnvelope
    set?: EquipeAmadorWhereUniqueInput | EquipeAmadorWhereUniqueInput[]
    disconnect?: EquipeAmadorWhereUniqueInput | EquipeAmadorWhereUniqueInput[]
    delete?: EquipeAmadorWhereUniqueInput | EquipeAmadorWhereUniqueInput[]
    connect?: EquipeAmadorWhereUniqueInput | EquipeAmadorWhereUniqueInput[]
    update?: EquipeAmadorUpdateWithWhereUniqueWithoutTorneioInput | EquipeAmadorUpdateWithWhereUniqueWithoutTorneioInput[]
    updateMany?: EquipeAmadorUpdateManyWithWhereWithoutTorneioInput | EquipeAmadorUpdateManyWithWhereWithoutTorneioInput[]
    deleteMany?: EquipeAmadorScalarWhereInput | EquipeAmadorScalarWhereInput[]
  }

  export type EquipeOficialUpdateManyWithoutTorneioNestedInput = {
    create?: XOR<EquipeOficialCreateWithoutTorneioInput, EquipeOficialUncheckedCreateWithoutTorneioInput> | EquipeOficialCreateWithoutTorneioInput[] | EquipeOficialUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: EquipeOficialCreateOrConnectWithoutTorneioInput | EquipeOficialCreateOrConnectWithoutTorneioInput[]
    upsert?: EquipeOficialUpsertWithWhereUniqueWithoutTorneioInput | EquipeOficialUpsertWithWhereUniqueWithoutTorneioInput[]
    createMany?: EquipeOficialCreateManyTorneioInputEnvelope
    set?: EquipeOficialWhereUniqueInput | EquipeOficialWhereUniqueInput[]
    disconnect?: EquipeOficialWhereUniqueInput | EquipeOficialWhereUniqueInput[]
    delete?: EquipeOficialWhereUniqueInput | EquipeOficialWhereUniqueInput[]
    connect?: EquipeOficialWhereUniqueInput | EquipeOficialWhereUniqueInput[]
    update?: EquipeOficialUpdateWithWhereUniqueWithoutTorneioInput | EquipeOficialUpdateWithWhereUniqueWithoutTorneioInput[]
    updateMany?: EquipeOficialUpdateManyWithWhereWithoutTorneioInput | EquipeOficialUpdateManyWithWhereWithoutTorneioInput[]
    deleteMany?: EquipeOficialScalarWhereInput | EquipeOficialScalarWhereInput[]
  }

  export type ParticipacaoAmadorUpdateManyWithoutTorneioNestedInput = {
    create?: XOR<ParticipacaoAmadorCreateWithoutTorneioInput, ParticipacaoAmadorUncheckedCreateWithoutTorneioInput> | ParticipacaoAmadorCreateWithoutTorneioInput[] | ParticipacaoAmadorUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: ParticipacaoAmadorCreateOrConnectWithoutTorneioInput | ParticipacaoAmadorCreateOrConnectWithoutTorneioInput[]
    upsert?: ParticipacaoAmadorUpsertWithWhereUniqueWithoutTorneioInput | ParticipacaoAmadorUpsertWithWhereUniqueWithoutTorneioInput[]
    createMany?: ParticipacaoAmadorCreateManyTorneioInputEnvelope
    set?: ParticipacaoAmadorWhereUniqueInput | ParticipacaoAmadorWhereUniqueInput[]
    disconnect?: ParticipacaoAmadorWhereUniqueInput | ParticipacaoAmadorWhereUniqueInput[]
    delete?: ParticipacaoAmadorWhereUniqueInput | ParticipacaoAmadorWhereUniqueInput[]
    connect?: ParticipacaoAmadorWhereUniqueInput | ParticipacaoAmadorWhereUniqueInput[]
    update?: ParticipacaoAmadorUpdateWithWhereUniqueWithoutTorneioInput | ParticipacaoAmadorUpdateWithWhereUniqueWithoutTorneioInput[]
    updateMany?: ParticipacaoAmadorUpdateManyWithWhereWithoutTorneioInput | ParticipacaoAmadorUpdateManyWithWhereWithoutTorneioInput[]
    deleteMany?: ParticipacaoAmadorScalarWhereInput | ParticipacaoAmadorScalarWhereInput[]
  }

  export type PartidaUncheckedUpdateManyWithoutTorneioNestedInput = {
    create?: XOR<PartidaCreateWithoutTorneioInput, PartidaUncheckedCreateWithoutTorneioInput> | PartidaCreateWithoutTorneioInput[] | PartidaUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: PartidaCreateOrConnectWithoutTorneioInput | PartidaCreateOrConnectWithoutTorneioInput[]
    upsert?: PartidaUpsertWithWhereUniqueWithoutTorneioInput | PartidaUpsertWithWhereUniqueWithoutTorneioInput[]
    createMany?: PartidaCreateManyTorneioInputEnvelope
    set?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    disconnect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    delete?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    update?: PartidaUpdateWithWhereUniqueWithoutTorneioInput | PartidaUpdateWithWhereUniqueWithoutTorneioInput[]
    updateMany?: PartidaUpdateManyWithWhereWithoutTorneioInput | PartidaUpdateManyWithWhereWithoutTorneioInput[]
    deleteMany?: PartidaScalarWhereInput | PartidaScalarWhereInput[]
  }

  export type EquipeAmadorUncheckedUpdateManyWithoutTorneioNestedInput = {
    create?: XOR<EquipeAmadorCreateWithoutTorneioInput, EquipeAmadorUncheckedCreateWithoutTorneioInput> | EquipeAmadorCreateWithoutTorneioInput[] | EquipeAmadorUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: EquipeAmadorCreateOrConnectWithoutTorneioInput | EquipeAmadorCreateOrConnectWithoutTorneioInput[]
    upsert?: EquipeAmadorUpsertWithWhereUniqueWithoutTorneioInput | EquipeAmadorUpsertWithWhereUniqueWithoutTorneioInput[]
    createMany?: EquipeAmadorCreateManyTorneioInputEnvelope
    set?: EquipeAmadorWhereUniqueInput | EquipeAmadorWhereUniqueInput[]
    disconnect?: EquipeAmadorWhereUniqueInput | EquipeAmadorWhereUniqueInput[]
    delete?: EquipeAmadorWhereUniqueInput | EquipeAmadorWhereUniqueInput[]
    connect?: EquipeAmadorWhereUniqueInput | EquipeAmadorWhereUniqueInput[]
    update?: EquipeAmadorUpdateWithWhereUniqueWithoutTorneioInput | EquipeAmadorUpdateWithWhereUniqueWithoutTorneioInput[]
    updateMany?: EquipeAmadorUpdateManyWithWhereWithoutTorneioInput | EquipeAmadorUpdateManyWithWhereWithoutTorneioInput[]
    deleteMany?: EquipeAmadorScalarWhereInput | EquipeAmadorScalarWhereInput[]
  }

  export type EquipeOficialUncheckedUpdateManyWithoutTorneioNestedInput = {
    create?: XOR<EquipeOficialCreateWithoutTorneioInput, EquipeOficialUncheckedCreateWithoutTorneioInput> | EquipeOficialCreateWithoutTorneioInput[] | EquipeOficialUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: EquipeOficialCreateOrConnectWithoutTorneioInput | EquipeOficialCreateOrConnectWithoutTorneioInput[]
    upsert?: EquipeOficialUpsertWithWhereUniqueWithoutTorneioInput | EquipeOficialUpsertWithWhereUniqueWithoutTorneioInput[]
    createMany?: EquipeOficialCreateManyTorneioInputEnvelope
    set?: EquipeOficialWhereUniqueInput | EquipeOficialWhereUniqueInput[]
    disconnect?: EquipeOficialWhereUniqueInput | EquipeOficialWhereUniqueInput[]
    delete?: EquipeOficialWhereUniqueInput | EquipeOficialWhereUniqueInput[]
    connect?: EquipeOficialWhereUniqueInput | EquipeOficialWhereUniqueInput[]
    update?: EquipeOficialUpdateWithWhereUniqueWithoutTorneioInput | EquipeOficialUpdateWithWhereUniqueWithoutTorneioInput[]
    updateMany?: EquipeOficialUpdateManyWithWhereWithoutTorneioInput | EquipeOficialUpdateManyWithWhereWithoutTorneioInput[]
    deleteMany?: EquipeOficialScalarWhereInput | EquipeOficialScalarWhereInput[]
  }

  export type ParticipacaoAmadorUncheckedUpdateManyWithoutTorneioNestedInput = {
    create?: XOR<ParticipacaoAmadorCreateWithoutTorneioInput, ParticipacaoAmadorUncheckedCreateWithoutTorneioInput> | ParticipacaoAmadorCreateWithoutTorneioInput[] | ParticipacaoAmadorUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: ParticipacaoAmadorCreateOrConnectWithoutTorneioInput | ParticipacaoAmadorCreateOrConnectWithoutTorneioInput[]
    upsert?: ParticipacaoAmadorUpsertWithWhereUniqueWithoutTorneioInput | ParticipacaoAmadorUpsertWithWhereUniqueWithoutTorneioInput[]
    createMany?: ParticipacaoAmadorCreateManyTorneioInputEnvelope
    set?: ParticipacaoAmadorWhereUniqueInput | ParticipacaoAmadorWhereUniqueInput[]
    disconnect?: ParticipacaoAmadorWhereUniqueInput | ParticipacaoAmadorWhereUniqueInput[]
    delete?: ParticipacaoAmadorWhereUniqueInput | ParticipacaoAmadorWhereUniqueInput[]
    connect?: ParticipacaoAmadorWhereUniqueInput | ParticipacaoAmadorWhereUniqueInput[]
    update?: ParticipacaoAmadorUpdateWithWhereUniqueWithoutTorneioInput | ParticipacaoAmadorUpdateWithWhereUniqueWithoutTorneioInput[]
    updateMany?: ParticipacaoAmadorUpdateManyWithWhereWithoutTorneioInput | ParticipacaoAmadorUpdateManyWithWhereWithoutTorneioInput[]
    deleteMany?: ParticipacaoAmadorScalarWhereInput | ParticipacaoAmadorScalarWhereInput[]
  }

  export type AtletaCreateNestedOneWithoutParticipacoesAmadorInput = {
    create?: XOR<AtletaCreateWithoutParticipacoesAmadorInput, AtletaUncheckedCreateWithoutParticipacoesAmadorInput>
    connectOrCreate?: AtletaCreateOrConnectWithoutParticipacoesAmadorInput
    connect?: AtletaWhereUniqueInput
  }

  export type TorneioCreateNestedOneWithoutParticipacaoAmadorInput = {
    create?: XOR<TorneioCreateWithoutParticipacaoAmadorInput, TorneioUncheckedCreateWithoutParticipacaoAmadorInput>
    connectOrCreate?: TorneioCreateOrConnectWithoutParticipacaoAmadorInput
    connect?: TorneioWhereUniqueInput
  }

  export type AtletaUpdateOneRequiredWithoutParticipacoesAmadorNestedInput = {
    create?: XOR<AtletaCreateWithoutParticipacoesAmadorInput, AtletaUncheckedCreateWithoutParticipacoesAmadorInput>
    connectOrCreate?: AtletaCreateOrConnectWithoutParticipacoesAmadorInput
    upsert?: AtletaUpsertWithoutParticipacoesAmadorInput
    connect?: AtletaWhereUniqueInput
    update?: XOR<XOR<AtletaUpdateToOneWithWhereWithoutParticipacoesAmadorInput, AtletaUpdateWithoutParticipacoesAmadorInput>, AtletaUncheckedUpdateWithoutParticipacoesAmadorInput>
  }

  export type TorneioUpdateOneRequiredWithoutParticipacaoAmadorNestedInput = {
    create?: XOR<TorneioCreateWithoutParticipacaoAmadorInput, TorneioUncheckedCreateWithoutParticipacaoAmadorInput>
    connectOrCreate?: TorneioCreateOrConnectWithoutParticipacaoAmadorInput
    upsert?: TorneioUpsertWithoutParticipacaoAmadorInput
    connect?: TorneioWhereUniqueInput
    update?: XOR<XOR<TorneioUpdateToOneWithWhereWithoutParticipacaoAmadorInput, TorneioUpdateWithoutParticipacaoAmadorInput>, TorneioUncheckedUpdateWithoutParticipacaoAmadorInput>
  }

  export type TorneioCreateNestedOneWithoutEquipesAmadorInput = {
    create?: XOR<TorneioCreateWithoutEquipesAmadorInput, TorneioUncheckedCreateWithoutEquipesAmadorInput>
    connectOrCreate?: TorneioCreateOrConnectWithoutEquipesAmadorInput
    connect?: TorneioWhereUniqueInput
  }

  export type AtletaCreateNestedManyWithoutEquipeAmadorInput = {
    create?: XOR<AtletaCreateWithoutEquipeAmadorInput, AtletaUncheckedCreateWithoutEquipeAmadorInput> | AtletaCreateWithoutEquipeAmadorInput[] | AtletaUncheckedCreateWithoutEquipeAmadorInput[]
    connectOrCreate?: AtletaCreateOrConnectWithoutEquipeAmadorInput | AtletaCreateOrConnectWithoutEquipeAmadorInput[]
    connect?: AtletaWhereUniqueInput | AtletaWhereUniqueInput[]
  }

  export type PartidaCreateNestedManyWithoutEquipeAmador1Input = {
    create?: XOR<PartidaCreateWithoutEquipeAmador1Input, PartidaUncheckedCreateWithoutEquipeAmador1Input> | PartidaCreateWithoutEquipeAmador1Input[] | PartidaUncheckedCreateWithoutEquipeAmador1Input[]
    connectOrCreate?: PartidaCreateOrConnectWithoutEquipeAmador1Input | PartidaCreateOrConnectWithoutEquipeAmador1Input[]
    createMany?: PartidaCreateManyEquipeAmador1InputEnvelope
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
  }

  export type PartidaCreateNestedManyWithoutEquipeAmador2Input = {
    create?: XOR<PartidaCreateWithoutEquipeAmador2Input, PartidaUncheckedCreateWithoutEquipeAmador2Input> | PartidaCreateWithoutEquipeAmador2Input[] | PartidaUncheckedCreateWithoutEquipeAmador2Input[]
    connectOrCreate?: PartidaCreateOrConnectWithoutEquipeAmador2Input | PartidaCreateOrConnectWithoutEquipeAmador2Input[]
    createMany?: PartidaCreateManyEquipeAmador2InputEnvelope
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
  }

  export type AtletaUncheckedCreateNestedManyWithoutEquipeAmadorInput = {
    create?: XOR<AtletaCreateWithoutEquipeAmadorInput, AtletaUncheckedCreateWithoutEquipeAmadorInput> | AtletaCreateWithoutEquipeAmadorInput[] | AtletaUncheckedCreateWithoutEquipeAmadorInput[]
    connectOrCreate?: AtletaCreateOrConnectWithoutEquipeAmadorInput | AtletaCreateOrConnectWithoutEquipeAmadorInput[]
    connect?: AtletaWhereUniqueInput | AtletaWhereUniqueInput[]
  }

  export type PartidaUncheckedCreateNestedManyWithoutEquipeAmador1Input = {
    create?: XOR<PartidaCreateWithoutEquipeAmador1Input, PartidaUncheckedCreateWithoutEquipeAmador1Input> | PartidaCreateWithoutEquipeAmador1Input[] | PartidaUncheckedCreateWithoutEquipeAmador1Input[]
    connectOrCreate?: PartidaCreateOrConnectWithoutEquipeAmador1Input | PartidaCreateOrConnectWithoutEquipeAmador1Input[]
    createMany?: PartidaCreateManyEquipeAmador1InputEnvelope
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
  }

  export type PartidaUncheckedCreateNestedManyWithoutEquipeAmador2Input = {
    create?: XOR<PartidaCreateWithoutEquipeAmador2Input, PartidaUncheckedCreateWithoutEquipeAmador2Input> | PartidaCreateWithoutEquipeAmador2Input[] | PartidaUncheckedCreateWithoutEquipeAmador2Input[]
    connectOrCreate?: PartidaCreateOrConnectWithoutEquipeAmador2Input | PartidaCreateOrConnectWithoutEquipeAmador2Input[]
    createMany?: PartidaCreateManyEquipeAmador2InputEnvelope
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
  }

  export type TorneioUpdateOneRequiredWithoutEquipesAmadorNestedInput = {
    create?: XOR<TorneioCreateWithoutEquipesAmadorInput, TorneioUncheckedCreateWithoutEquipesAmadorInput>
    connectOrCreate?: TorneioCreateOrConnectWithoutEquipesAmadorInput
    upsert?: TorneioUpsertWithoutEquipesAmadorInput
    connect?: TorneioWhereUniqueInput
    update?: XOR<XOR<TorneioUpdateToOneWithWhereWithoutEquipesAmadorInput, TorneioUpdateWithoutEquipesAmadorInput>, TorneioUncheckedUpdateWithoutEquipesAmadorInput>
  }

  export type AtletaUpdateManyWithoutEquipeAmadorNestedInput = {
    create?: XOR<AtletaCreateWithoutEquipeAmadorInput, AtletaUncheckedCreateWithoutEquipeAmadorInput> | AtletaCreateWithoutEquipeAmadorInput[] | AtletaUncheckedCreateWithoutEquipeAmadorInput[]
    connectOrCreate?: AtletaCreateOrConnectWithoutEquipeAmadorInput | AtletaCreateOrConnectWithoutEquipeAmadorInput[]
    upsert?: AtletaUpsertWithWhereUniqueWithoutEquipeAmadorInput | AtletaUpsertWithWhereUniqueWithoutEquipeAmadorInput[]
    set?: AtletaWhereUniqueInput | AtletaWhereUniqueInput[]
    disconnect?: AtletaWhereUniqueInput | AtletaWhereUniqueInput[]
    delete?: AtletaWhereUniqueInput | AtletaWhereUniqueInput[]
    connect?: AtletaWhereUniqueInput | AtletaWhereUniqueInput[]
    update?: AtletaUpdateWithWhereUniqueWithoutEquipeAmadorInput | AtletaUpdateWithWhereUniqueWithoutEquipeAmadorInput[]
    updateMany?: AtletaUpdateManyWithWhereWithoutEquipeAmadorInput | AtletaUpdateManyWithWhereWithoutEquipeAmadorInput[]
    deleteMany?: AtletaScalarWhereInput | AtletaScalarWhereInput[]
  }

  export type PartidaUpdateManyWithoutEquipeAmador1NestedInput = {
    create?: XOR<PartidaCreateWithoutEquipeAmador1Input, PartidaUncheckedCreateWithoutEquipeAmador1Input> | PartidaCreateWithoutEquipeAmador1Input[] | PartidaUncheckedCreateWithoutEquipeAmador1Input[]
    connectOrCreate?: PartidaCreateOrConnectWithoutEquipeAmador1Input | PartidaCreateOrConnectWithoutEquipeAmador1Input[]
    upsert?: PartidaUpsertWithWhereUniqueWithoutEquipeAmador1Input | PartidaUpsertWithWhereUniqueWithoutEquipeAmador1Input[]
    createMany?: PartidaCreateManyEquipeAmador1InputEnvelope
    set?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    disconnect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    delete?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    update?: PartidaUpdateWithWhereUniqueWithoutEquipeAmador1Input | PartidaUpdateWithWhereUniqueWithoutEquipeAmador1Input[]
    updateMany?: PartidaUpdateManyWithWhereWithoutEquipeAmador1Input | PartidaUpdateManyWithWhereWithoutEquipeAmador1Input[]
    deleteMany?: PartidaScalarWhereInput | PartidaScalarWhereInput[]
  }

  export type PartidaUpdateManyWithoutEquipeAmador2NestedInput = {
    create?: XOR<PartidaCreateWithoutEquipeAmador2Input, PartidaUncheckedCreateWithoutEquipeAmador2Input> | PartidaCreateWithoutEquipeAmador2Input[] | PartidaUncheckedCreateWithoutEquipeAmador2Input[]
    connectOrCreate?: PartidaCreateOrConnectWithoutEquipeAmador2Input | PartidaCreateOrConnectWithoutEquipeAmador2Input[]
    upsert?: PartidaUpsertWithWhereUniqueWithoutEquipeAmador2Input | PartidaUpsertWithWhereUniqueWithoutEquipeAmador2Input[]
    createMany?: PartidaCreateManyEquipeAmador2InputEnvelope
    set?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    disconnect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    delete?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    update?: PartidaUpdateWithWhereUniqueWithoutEquipeAmador2Input | PartidaUpdateWithWhereUniqueWithoutEquipeAmador2Input[]
    updateMany?: PartidaUpdateManyWithWhereWithoutEquipeAmador2Input | PartidaUpdateManyWithWhereWithoutEquipeAmador2Input[]
    deleteMany?: PartidaScalarWhereInput | PartidaScalarWhereInput[]
  }

  export type AtletaUncheckedUpdateManyWithoutEquipeAmadorNestedInput = {
    create?: XOR<AtletaCreateWithoutEquipeAmadorInput, AtletaUncheckedCreateWithoutEquipeAmadorInput> | AtletaCreateWithoutEquipeAmadorInput[] | AtletaUncheckedCreateWithoutEquipeAmadorInput[]
    connectOrCreate?: AtletaCreateOrConnectWithoutEquipeAmadorInput | AtletaCreateOrConnectWithoutEquipeAmadorInput[]
    upsert?: AtletaUpsertWithWhereUniqueWithoutEquipeAmadorInput | AtletaUpsertWithWhereUniqueWithoutEquipeAmadorInput[]
    set?: AtletaWhereUniqueInput | AtletaWhereUniqueInput[]
    disconnect?: AtletaWhereUniqueInput | AtletaWhereUniqueInput[]
    delete?: AtletaWhereUniqueInput | AtletaWhereUniqueInput[]
    connect?: AtletaWhereUniqueInput | AtletaWhereUniqueInput[]
    update?: AtletaUpdateWithWhereUniqueWithoutEquipeAmadorInput | AtletaUpdateWithWhereUniqueWithoutEquipeAmadorInput[]
    updateMany?: AtletaUpdateManyWithWhereWithoutEquipeAmadorInput | AtletaUpdateManyWithWhereWithoutEquipeAmadorInput[]
    deleteMany?: AtletaScalarWhereInput | AtletaScalarWhereInput[]
  }

  export type PartidaUncheckedUpdateManyWithoutEquipeAmador1NestedInput = {
    create?: XOR<PartidaCreateWithoutEquipeAmador1Input, PartidaUncheckedCreateWithoutEquipeAmador1Input> | PartidaCreateWithoutEquipeAmador1Input[] | PartidaUncheckedCreateWithoutEquipeAmador1Input[]
    connectOrCreate?: PartidaCreateOrConnectWithoutEquipeAmador1Input | PartidaCreateOrConnectWithoutEquipeAmador1Input[]
    upsert?: PartidaUpsertWithWhereUniqueWithoutEquipeAmador1Input | PartidaUpsertWithWhereUniqueWithoutEquipeAmador1Input[]
    createMany?: PartidaCreateManyEquipeAmador1InputEnvelope
    set?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    disconnect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    delete?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    update?: PartidaUpdateWithWhereUniqueWithoutEquipeAmador1Input | PartidaUpdateWithWhereUniqueWithoutEquipeAmador1Input[]
    updateMany?: PartidaUpdateManyWithWhereWithoutEquipeAmador1Input | PartidaUpdateManyWithWhereWithoutEquipeAmador1Input[]
    deleteMany?: PartidaScalarWhereInput | PartidaScalarWhereInput[]
  }

  export type PartidaUncheckedUpdateManyWithoutEquipeAmador2NestedInput = {
    create?: XOR<PartidaCreateWithoutEquipeAmador2Input, PartidaUncheckedCreateWithoutEquipeAmador2Input> | PartidaCreateWithoutEquipeAmador2Input[] | PartidaUncheckedCreateWithoutEquipeAmador2Input[]
    connectOrCreate?: PartidaCreateOrConnectWithoutEquipeAmador2Input | PartidaCreateOrConnectWithoutEquipeAmador2Input[]
    upsert?: PartidaUpsertWithWhereUniqueWithoutEquipeAmador2Input | PartidaUpsertWithWhereUniqueWithoutEquipeAmador2Input[]
    createMany?: PartidaCreateManyEquipeAmador2InputEnvelope
    set?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    disconnect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    delete?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    update?: PartidaUpdateWithWhereUniqueWithoutEquipeAmador2Input | PartidaUpdateWithWhereUniqueWithoutEquipeAmador2Input[]
    updateMany?: PartidaUpdateManyWithWhereWithoutEquipeAmador2Input | PartidaUpdateManyWithWhereWithoutEquipeAmador2Input[]
    deleteMany?: PartidaScalarWhereInput | PartidaScalarWhereInput[]
  }

  export type TorneioCreateNestedOneWithoutEquipesOficialInput = {
    create?: XOR<TorneioCreateWithoutEquipesOficialInput, TorneioUncheckedCreateWithoutEquipesOficialInput>
    connectOrCreate?: TorneioCreateOrConnectWithoutEquipesOficialInput
    connect?: TorneioWhereUniqueInput
  }

  export type AtletaEquipeOficialCreateNestedManyWithoutEquipeOficialInput = {
    create?: XOR<AtletaEquipeOficialCreateWithoutEquipeOficialInput, AtletaEquipeOficialUncheckedCreateWithoutEquipeOficialInput> | AtletaEquipeOficialCreateWithoutEquipeOficialInput[] | AtletaEquipeOficialUncheckedCreateWithoutEquipeOficialInput[]
    connectOrCreate?: AtletaEquipeOficialCreateOrConnectWithoutEquipeOficialInput | AtletaEquipeOficialCreateOrConnectWithoutEquipeOficialInput[]
    createMany?: AtletaEquipeOficialCreateManyEquipeOficialInputEnvelope
    connect?: AtletaEquipeOficialWhereUniqueInput | AtletaEquipeOficialWhereUniqueInput[]
  }

  export type PartidaCreateNestedManyWithoutEquipeOficial1Input = {
    create?: XOR<PartidaCreateWithoutEquipeOficial1Input, PartidaUncheckedCreateWithoutEquipeOficial1Input> | PartidaCreateWithoutEquipeOficial1Input[] | PartidaUncheckedCreateWithoutEquipeOficial1Input[]
    connectOrCreate?: PartidaCreateOrConnectWithoutEquipeOficial1Input | PartidaCreateOrConnectWithoutEquipeOficial1Input[]
    createMany?: PartidaCreateManyEquipeOficial1InputEnvelope
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
  }

  export type PartidaCreateNestedManyWithoutEquipeOficial2Input = {
    create?: XOR<PartidaCreateWithoutEquipeOficial2Input, PartidaUncheckedCreateWithoutEquipeOficial2Input> | PartidaCreateWithoutEquipeOficial2Input[] | PartidaUncheckedCreateWithoutEquipeOficial2Input[]
    connectOrCreate?: PartidaCreateOrConnectWithoutEquipeOficial2Input | PartidaCreateOrConnectWithoutEquipeOficial2Input[]
    createMany?: PartidaCreateManyEquipeOficial2InputEnvelope
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
  }

  export type AtletaEquipeOficialUncheckedCreateNestedManyWithoutEquipeOficialInput = {
    create?: XOR<AtletaEquipeOficialCreateWithoutEquipeOficialInput, AtletaEquipeOficialUncheckedCreateWithoutEquipeOficialInput> | AtletaEquipeOficialCreateWithoutEquipeOficialInput[] | AtletaEquipeOficialUncheckedCreateWithoutEquipeOficialInput[]
    connectOrCreate?: AtletaEquipeOficialCreateOrConnectWithoutEquipeOficialInput | AtletaEquipeOficialCreateOrConnectWithoutEquipeOficialInput[]
    createMany?: AtletaEquipeOficialCreateManyEquipeOficialInputEnvelope
    connect?: AtletaEquipeOficialWhereUniqueInput | AtletaEquipeOficialWhereUniqueInput[]
  }

  export type PartidaUncheckedCreateNestedManyWithoutEquipeOficial1Input = {
    create?: XOR<PartidaCreateWithoutEquipeOficial1Input, PartidaUncheckedCreateWithoutEquipeOficial1Input> | PartidaCreateWithoutEquipeOficial1Input[] | PartidaUncheckedCreateWithoutEquipeOficial1Input[]
    connectOrCreate?: PartidaCreateOrConnectWithoutEquipeOficial1Input | PartidaCreateOrConnectWithoutEquipeOficial1Input[]
    createMany?: PartidaCreateManyEquipeOficial1InputEnvelope
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
  }

  export type PartidaUncheckedCreateNestedManyWithoutEquipeOficial2Input = {
    create?: XOR<PartidaCreateWithoutEquipeOficial2Input, PartidaUncheckedCreateWithoutEquipeOficial2Input> | PartidaCreateWithoutEquipeOficial2Input[] | PartidaUncheckedCreateWithoutEquipeOficial2Input[]
    connectOrCreate?: PartidaCreateOrConnectWithoutEquipeOficial2Input | PartidaCreateOrConnectWithoutEquipeOficial2Input[]
    createMany?: PartidaCreateManyEquipeOficial2InputEnvelope
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
  }

  export type TorneioUpdateOneRequiredWithoutEquipesOficialNestedInput = {
    create?: XOR<TorneioCreateWithoutEquipesOficialInput, TorneioUncheckedCreateWithoutEquipesOficialInput>
    connectOrCreate?: TorneioCreateOrConnectWithoutEquipesOficialInput
    upsert?: TorneioUpsertWithoutEquipesOficialInput
    connect?: TorneioWhereUniqueInput
    update?: XOR<XOR<TorneioUpdateToOneWithWhereWithoutEquipesOficialInput, TorneioUpdateWithoutEquipesOficialInput>, TorneioUncheckedUpdateWithoutEquipesOficialInput>
  }

  export type AtletaEquipeOficialUpdateManyWithoutEquipeOficialNestedInput = {
    create?: XOR<AtletaEquipeOficialCreateWithoutEquipeOficialInput, AtletaEquipeOficialUncheckedCreateWithoutEquipeOficialInput> | AtletaEquipeOficialCreateWithoutEquipeOficialInput[] | AtletaEquipeOficialUncheckedCreateWithoutEquipeOficialInput[]
    connectOrCreate?: AtletaEquipeOficialCreateOrConnectWithoutEquipeOficialInput | AtletaEquipeOficialCreateOrConnectWithoutEquipeOficialInput[]
    upsert?: AtletaEquipeOficialUpsertWithWhereUniqueWithoutEquipeOficialInput | AtletaEquipeOficialUpsertWithWhereUniqueWithoutEquipeOficialInput[]
    createMany?: AtletaEquipeOficialCreateManyEquipeOficialInputEnvelope
    set?: AtletaEquipeOficialWhereUniqueInput | AtletaEquipeOficialWhereUniqueInput[]
    disconnect?: AtletaEquipeOficialWhereUniqueInput | AtletaEquipeOficialWhereUniqueInput[]
    delete?: AtletaEquipeOficialWhereUniqueInput | AtletaEquipeOficialWhereUniqueInput[]
    connect?: AtletaEquipeOficialWhereUniqueInput | AtletaEquipeOficialWhereUniqueInput[]
    update?: AtletaEquipeOficialUpdateWithWhereUniqueWithoutEquipeOficialInput | AtletaEquipeOficialUpdateWithWhereUniqueWithoutEquipeOficialInput[]
    updateMany?: AtletaEquipeOficialUpdateManyWithWhereWithoutEquipeOficialInput | AtletaEquipeOficialUpdateManyWithWhereWithoutEquipeOficialInput[]
    deleteMany?: AtletaEquipeOficialScalarWhereInput | AtletaEquipeOficialScalarWhereInput[]
  }

  export type PartidaUpdateManyWithoutEquipeOficial1NestedInput = {
    create?: XOR<PartidaCreateWithoutEquipeOficial1Input, PartidaUncheckedCreateWithoutEquipeOficial1Input> | PartidaCreateWithoutEquipeOficial1Input[] | PartidaUncheckedCreateWithoutEquipeOficial1Input[]
    connectOrCreate?: PartidaCreateOrConnectWithoutEquipeOficial1Input | PartidaCreateOrConnectWithoutEquipeOficial1Input[]
    upsert?: PartidaUpsertWithWhereUniqueWithoutEquipeOficial1Input | PartidaUpsertWithWhereUniqueWithoutEquipeOficial1Input[]
    createMany?: PartidaCreateManyEquipeOficial1InputEnvelope
    set?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    disconnect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    delete?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    update?: PartidaUpdateWithWhereUniqueWithoutEquipeOficial1Input | PartidaUpdateWithWhereUniqueWithoutEquipeOficial1Input[]
    updateMany?: PartidaUpdateManyWithWhereWithoutEquipeOficial1Input | PartidaUpdateManyWithWhereWithoutEquipeOficial1Input[]
    deleteMany?: PartidaScalarWhereInput | PartidaScalarWhereInput[]
  }

  export type PartidaUpdateManyWithoutEquipeOficial2NestedInput = {
    create?: XOR<PartidaCreateWithoutEquipeOficial2Input, PartidaUncheckedCreateWithoutEquipeOficial2Input> | PartidaCreateWithoutEquipeOficial2Input[] | PartidaUncheckedCreateWithoutEquipeOficial2Input[]
    connectOrCreate?: PartidaCreateOrConnectWithoutEquipeOficial2Input | PartidaCreateOrConnectWithoutEquipeOficial2Input[]
    upsert?: PartidaUpsertWithWhereUniqueWithoutEquipeOficial2Input | PartidaUpsertWithWhereUniqueWithoutEquipeOficial2Input[]
    createMany?: PartidaCreateManyEquipeOficial2InputEnvelope
    set?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    disconnect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    delete?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    update?: PartidaUpdateWithWhereUniqueWithoutEquipeOficial2Input | PartidaUpdateWithWhereUniqueWithoutEquipeOficial2Input[]
    updateMany?: PartidaUpdateManyWithWhereWithoutEquipeOficial2Input | PartidaUpdateManyWithWhereWithoutEquipeOficial2Input[]
    deleteMany?: PartidaScalarWhereInput | PartidaScalarWhereInput[]
  }

  export type AtletaEquipeOficialUncheckedUpdateManyWithoutEquipeOficialNestedInput = {
    create?: XOR<AtletaEquipeOficialCreateWithoutEquipeOficialInput, AtletaEquipeOficialUncheckedCreateWithoutEquipeOficialInput> | AtletaEquipeOficialCreateWithoutEquipeOficialInput[] | AtletaEquipeOficialUncheckedCreateWithoutEquipeOficialInput[]
    connectOrCreate?: AtletaEquipeOficialCreateOrConnectWithoutEquipeOficialInput | AtletaEquipeOficialCreateOrConnectWithoutEquipeOficialInput[]
    upsert?: AtletaEquipeOficialUpsertWithWhereUniqueWithoutEquipeOficialInput | AtletaEquipeOficialUpsertWithWhereUniqueWithoutEquipeOficialInput[]
    createMany?: AtletaEquipeOficialCreateManyEquipeOficialInputEnvelope
    set?: AtletaEquipeOficialWhereUniqueInput | AtletaEquipeOficialWhereUniqueInput[]
    disconnect?: AtletaEquipeOficialWhereUniqueInput | AtletaEquipeOficialWhereUniqueInput[]
    delete?: AtletaEquipeOficialWhereUniqueInput | AtletaEquipeOficialWhereUniqueInput[]
    connect?: AtletaEquipeOficialWhereUniqueInput | AtletaEquipeOficialWhereUniqueInput[]
    update?: AtletaEquipeOficialUpdateWithWhereUniqueWithoutEquipeOficialInput | AtletaEquipeOficialUpdateWithWhereUniqueWithoutEquipeOficialInput[]
    updateMany?: AtletaEquipeOficialUpdateManyWithWhereWithoutEquipeOficialInput | AtletaEquipeOficialUpdateManyWithWhereWithoutEquipeOficialInput[]
    deleteMany?: AtletaEquipeOficialScalarWhereInput | AtletaEquipeOficialScalarWhereInput[]
  }

  export type PartidaUncheckedUpdateManyWithoutEquipeOficial1NestedInput = {
    create?: XOR<PartidaCreateWithoutEquipeOficial1Input, PartidaUncheckedCreateWithoutEquipeOficial1Input> | PartidaCreateWithoutEquipeOficial1Input[] | PartidaUncheckedCreateWithoutEquipeOficial1Input[]
    connectOrCreate?: PartidaCreateOrConnectWithoutEquipeOficial1Input | PartidaCreateOrConnectWithoutEquipeOficial1Input[]
    upsert?: PartidaUpsertWithWhereUniqueWithoutEquipeOficial1Input | PartidaUpsertWithWhereUniqueWithoutEquipeOficial1Input[]
    createMany?: PartidaCreateManyEquipeOficial1InputEnvelope
    set?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    disconnect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    delete?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    update?: PartidaUpdateWithWhereUniqueWithoutEquipeOficial1Input | PartidaUpdateWithWhereUniqueWithoutEquipeOficial1Input[]
    updateMany?: PartidaUpdateManyWithWhereWithoutEquipeOficial1Input | PartidaUpdateManyWithWhereWithoutEquipeOficial1Input[]
    deleteMany?: PartidaScalarWhereInput | PartidaScalarWhereInput[]
  }

  export type PartidaUncheckedUpdateManyWithoutEquipeOficial2NestedInput = {
    create?: XOR<PartidaCreateWithoutEquipeOficial2Input, PartidaUncheckedCreateWithoutEquipeOficial2Input> | PartidaCreateWithoutEquipeOficial2Input[] | PartidaUncheckedCreateWithoutEquipeOficial2Input[]
    connectOrCreate?: PartidaCreateOrConnectWithoutEquipeOficial2Input | PartidaCreateOrConnectWithoutEquipeOficial2Input[]
    upsert?: PartidaUpsertWithWhereUniqueWithoutEquipeOficial2Input | PartidaUpsertWithWhereUniqueWithoutEquipeOficial2Input[]
    createMany?: PartidaCreateManyEquipeOficial2InputEnvelope
    set?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    disconnect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    delete?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    update?: PartidaUpdateWithWhereUniqueWithoutEquipeOficial2Input | PartidaUpdateWithWhereUniqueWithoutEquipeOficial2Input[]
    updateMany?: PartidaUpdateManyWithWhereWithoutEquipeOficial2Input | PartidaUpdateManyWithWhereWithoutEquipeOficial2Input[]
    deleteMany?: PartidaScalarWhereInput | PartidaScalarWhereInput[]
  }

  export type AtletaCreateNestedOneWithoutEquipesOficiaisInput = {
    create?: XOR<AtletaCreateWithoutEquipesOficiaisInput, AtletaUncheckedCreateWithoutEquipesOficiaisInput>
    connectOrCreate?: AtletaCreateOrConnectWithoutEquipesOficiaisInput
    connect?: AtletaWhereUniqueInput
  }

  export type EquipeOficialCreateNestedOneWithoutMembrosInput = {
    create?: XOR<EquipeOficialCreateWithoutMembrosInput, EquipeOficialUncheckedCreateWithoutMembrosInput>
    connectOrCreate?: EquipeOficialCreateOrConnectWithoutMembrosInput
    connect?: EquipeOficialWhereUniqueInput
  }

  export type AtletaUpdateOneRequiredWithoutEquipesOficiaisNestedInput = {
    create?: XOR<AtletaCreateWithoutEquipesOficiaisInput, AtletaUncheckedCreateWithoutEquipesOficiaisInput>
    connectOrCreate?: AtletaCreateOrConnectWithoutEquipesOficiaisInput
    upsert?: AtletaUpsertWithoutEquipesOficiaisInput
    connect?: AtletaWhereUniqueInput
    update?: XOR<XOR<AtletaUpdateToOneWithWhereWithoutEquipesOficiaisInput, AtletaUpdateWithoutEquipesOficiaisInput>, AtletaUncheckedUpdateWithoutEquipesOficiaisInput>
  }

  export type EquipeOficialUpdateOneRequiredWithoutMembrosNestedInput = {
    create?: XOR<EquipeOficialCreateWithoutMembrosInput, EquipeOficialUncheckedCreateWithoutMembrosInput>
    connectOrCreate?: EquipeOficialCreateOrConnectWithoutMembrosInput
    upsert?: EquipeOficialUpsertWithoutMembrosInput
    connect?: EquipeOficialWhereUniqueInput
    update?: XOR<XOR<EquipeOficialUpdateToOneWithWhereWithoutMembrosInput, EquipeOficialUpdateWithoutMembrosInput>, EquipeOficialUncheckedUpdateWithoutMembrosInput>
  }

  export type TorneioCreateNestedOneWithoutPartidaInput = {
    create?: XOR<TorneioCreateWithoutPartidaInput, TorneioUncheckedCreateWithoutPartidaInput>
    connectOrCreate?: TorneioCreateOrConnectWithoutPartidaInput
    connect?: TorneioWhereUniqueInput
  }

  export type EquipeAmadorCreateNestedOneWithoutPartidasComoEquipe1Input = {
    create?: XOR<EquipeAmadorCreateWithoutPartidasComoEquipe1Input, EquipeAmadorUncheckedCreateWithoutPartidasComoEquipe1Input>
    connectOrCreate?: EquipeAmadorCreateOrConnectWithoutPartidasComoEquipe1Input
    connect?: EquipeAmadorWhereUniqueInput
  }

  export type EquipeAmadorCreateNestedOneWithoutPartidasComoEquipe2Input = {
    create?: XOR<EquipeAmadorCreateWithoutPartidasComoEquipe2Input, EquipeAmadorUncheckedCreateWithoutPartidasComoEquipe2Input>
    connectOrCreate?: EquipeAmadorCreateOrConnectWithoutPartidasComoEquipe2Input
    connect?: EquipeAmadorWhereUniqueInput
  }

  export type EquipeOficialCreateNestedOneWithoutPartidasComoEquipeOficial1Input = {
    create?: XOR<EquipeOficialCreateWithoutPartidasComoEquipeOficial1Input, EquipeOficialUncheckedCreateWithoutPartidasComoEquipeOficial1Input>
    connectOrCreate?: EquipeOficialCreateOrConnectWithoutPartidasComoEquipeOficial1Input
    connect?: EquipeOficialWhereUniqueInput
  }

  export type EquipeOficialCreateNestedOneWithoutPartidasComoEquipeOficial2Input = {
    create?: XOR<EquipeOficialCreateWithoutPartidasComoEquipeOficial2Input, EquipeOficialUncheckedCreateWithoutPartidasComoEquipeOficial2Input>
    connectOrCreate?: EquipeOficialCreateOrConnectWithoutPartidasComoEquipeOficial2Input
    connect?: EquipeOficialWhereUniqueInput
  }

  export type TorneioUpdateOneRequiredWithoutPartidaNestedInput = {
    create?: XOR<TorneioCreateWithoutPartidaInput, TorneioUncheckedCreateWithoutPartidaInput>
    connectOrCreate?: TorneioCreateOrConnectWithoutPartidaInput
    upsert?: TorneioUpsertWithoutPartidaInput
    connect?: TorneioWhereUniqueInput
    update?: XOR<XOR<TorneioUpdateToOneWithWhereWithoutPartidaInput, TorneioUpdateWithoutPartidaInput>, TorneioUncheckedUpdateWithoutPartidaInput>
  }

  export type EquipeAmadorUpdateOneWithoutPartidasComoEquipe1NestedInput = {
    create?: XOR<EquipeAmadorCreateWithoutPartidasComoEquipe1Input, EquipeAmadorUncheckedCreateWithoutPartidasComoEquipe1Input>
    connectOrCreate?: EquipeAmadorCreateOrConnectWithoutPartidasComoEquipe1Input
    upsert?: EquipeAmadorUpsertWithoutPartidasComoEquipe1Input
    disconnect?: EquipeAmadorWhereInput | boolean
    delete?: EquipeAmadorWhereInput | boolean
    connect?: EquipeAmadorWhereUniqueInput
    update?: XOR<XOR<EquipeAmadorUpdateToOneWithWhereWithoutPartidasComoEquipe1Input, EquipeAmadorUpdateWithoutPartidasComoEquipe1Input>, EquipeAmadorUncheckedUpdateWithoutPartidasComoEquipe1Input>
  }

  export type EquipeAmadorUpdateOneWithoutPartidasComoEquipe2NestedInput = {
    create?: XOR<EquipeAmadorCreateWithoutPartidasComoEquipe2Input, EquipeAmadorUncheckedCreateWithoutPartidasComoEquipe2Input>
    connectOrCreate?: EquipeAmadorCreateOrConnectWithoutPartidasComoEquipe2Input
    upsert?: EquipeAmadorUpsertWithoutPartidasComoEquipe2Input
    disconnect?: EquipeAmadorWhereInput | boolean
    delete?: EquipeAmadorWhereInput | boolean
    connect?: EquipeAmadorWhereUniqueInput
    update?: XOR<XOR<EquipeAmadorUpdateToOneWithWhereWithoutPartidasComoEquipe2Input, EquipeAmadorUpdateWithoutPartidasComoEquipe2Input>, EquipeAmadorUncheckedUpdateWithoutPartidasComoEquipe2Input>
  }

  export type EquipeOficialUpdateOneWithoutPartidasComoEquipeOficial1NestedInput = {
    create?: XOR<EquipeOficialCreateWithoutPartidasComoEquipeOficial1Input, EquipeOficialUncheckedCreateWithoutPartidasComoEquipeOficial1Input>
    connectOrCreate?: EquipeOficialCreateOrConnectWithoutPartidasComoEquipeOficial1Input
    upsert?: EquipeOficialUpsertWithoutPartidasComoEquipeOficial1Input
    disconnect?: EquipeOficialWhereInput | boolean
    delete?: EquipeOficialWhereInput | boolean
    connect?: EquipeOficialWhereUniqueInput
    update?: XOR<XOR<EquipeOficialUpdateToOneWithWhereWithoutPartidasComoEquipeOficial1Input, EquipeOficialUpdateWithoutPartidasComoEquipeOficial1Input>, EquipeOficialUncheckedUpdateWithoutPartidasComoEquipeOficial1Input>
  }

  export type EquipeOficialUpdateOneWithoutPartidasComoEquipeOficial2NestedInput = {
    create?: XOR<EquipeOficialCreateWithoutPartidasComoEquipeOficial2Input, EquipeOficialUncheckedCreateWithoutPartidasComoEquipeOficial2Input>
    connectOrCreate?: EquipeOficialCreateOrConnectWithoutPartidasComoEquipeOficial2Input
    upsert?: EquipeOficialUpsertWithoutPartidasComoEquipeOficial2Input
    disconnect?: EquipeOficialWhereInput | boolean
    delete?: EquipeOficialWhereInput | boolean
    connect?: EquipeOficialWhereUniqueInput
    update?: XOR<XOR<EquipeOficialUpdateToOneWithWhereWithoutPartidasComoEquipeOficial2Input, EquipeOficialUpdateWithoutPartidasComoEquipeOficial2Input>, EquipeOficialUncheckedUpdateWithoutPartidasComoEquipeOficial2Input>
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

  export type NestedEnumTipoTorneioFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoTorneio | EnumTipoTorneioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoTorneio[] | ListEnumTipoTorneioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoTorneio[] | ListEnumTipoTorneioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoTorneioFilter<$PrismaModel> | $Enums.TipoTorneio
  }

  export type NestedEnumStatusTorneioFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusTorneio | EnumStatusTorneioFieldRefInput<$PrismaModel>
    in?: $Enums.StatusTorneio[] | ListEnumStatusTorneioFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusTorneio[] | ListEnumStatusTorneioFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusTorneioFilter<$PrismaModel> | $Enums.StatusTorneio
  }

  export type NestedEnumTipoTorneioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoTorneio | EnumTipoTorneioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoTorneio[] | ListEnumTipoTorneioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoTorneio[] | ListEnumTipoTorneioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoTorneioWithAggregatesFilter<$PrismaModel> | $Enums.TipoTorneio
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoTorneioFilter<$PrismaModel>
    _max?: NestedEnumTipoTorneioFilter<$PrismaModel>
  }

  export type NestedEnumStatusTorneioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusTorneio | EnumStatusTorneioFieldRefInput<$PrismaModel>
    in?: $Enums.StatusTorneio[] | ListEnumStatusTorneioFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusTorneio[] | ListEnumStatusTorneioFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusTorneioWithAggregatesFilter<$PrismaModel> | $Enums.StatusTorneio
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatusTorneioFilter<$PrismaModel>
    _max?: NestedEnumStatusTorneioFilter<$PrismaModel>
  }

  export type TorneioCreateWithoutCriadoPorInput = {
    nome: string
    tipo: $Enums.TipoTorneio
    data: Date | string
    local?: string | null
    status?: $Enums.StatusTorneio
    createdAt?: Date | string
    updatedAt?: Date | string
    Partida?: PartidaCreateNestedManyWithoutTorneioInput
    equipesAmador?: EquipeAmadorCreateNestedManyWithoutTorneioInput
    equipesOficial?: EquipeOficialCreateNestedManyWithoutTorneioInput
    ParticipacaoAmador?: ParticipacaoAmadorCreateNestedManyWithoutTorneioInput
  }

  export type TorneioUncheckedCreateWithoutCriadoPorInput = {
    id?: number
    nome: string
    tipo: $Enums.TipoTorneio
    data: Date | string
    local?: string | null
    status?: $Enums.StatusTorneio
    createdAt?: Date | string
    updatedAt?: Date | string
    Partida?: PartidaUncheckedCreateNestedManyWithoutTorneioInput
    equipesAmador?: EquipeAmadorUncheckedCreateNestedManyWithoutTorneioInput
    equipesOficial?: EquipeOficialUncheckedCreateNestedManyWithoutTorneioInput
    ParticipacaoAmador?: ParticipacaoAmadorUncheckedCreateNestedManyWithoutTorneioInput
  }

  export type TorneioCreateOrConnectWithoutCriadoPorInput = {
    where: TorneioWhereUniqueInput
    create: XOR<TorneioCreateWithoutCriadoPorInput, TorneioUncheckedCreateWithoutCriadoPorInput>
  }

  export type TorneioCreateManyCriadoPorInputEnvelope = {
    data: TorneioCreateManyCriadoPorInput | TorneioCreateManyCriadoPorInput[]
    skipDuplicates?: boolean
  }

  export type AtletaCreateWithoutUsuarioInput = {
    nome: string
    email: string
    genero: string
    nivel?: string | null
    participacoesAmador?: ParticipacaoAmadorCreateNestedManyWithoutAtletaInput
    equipesOficiais?: AtletaEquipeOficialCreateNestedManyWithoutAtletaInput
    EquipeAmador?: EquipeAmadorCreateNestedManyWithoutMembrosInput
  }

  export type AtletaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    nome: string
    email: string
    genero: string
    nivel?: string | null
    participacoesAmador?: ParticipacaoAmadorUncheckedCreateNestedManyWithoutAtletaInput
    equipesOficiais?: AtletaEquipeOficialUncheckedCreateNestedManyWithoutAtletaInput
    EquipeAmador?: EquipeAmadorUncheckedCreateNestedManyWithoutMembrosInput
  }

  export type AtletaCreateOrConnectWithoutUsuarioInput = {
    where: AtletaWhereUniqueInput
    create: XOR<AtletaCreateWithoutUsuarioInput, AtletaUncheckedCreateWithoutUsuarioInput>
  }

  export type TreinadorCreateWithoutUsuarioInput = {
    nome: string
    email: string
  }

  export type TreinadorUncheckedCreateWithoutUsuarioInput = {
    id?: number
    nome: string
    email: string
  }

  export type TreinadorCreateOrConnectWithoutUsuarioInput = {
    where: TreinadorWhereUniqueInput
    create: XOR<TreinadorCreateWithoutUsuarioInput, TreinadorUncheckedCreateWithoutUsuarioInput>
  }

  export type TreinadorCreateManyUsuarioInputEnvelope = {
    data: TreinadorCreateManyUsuarioInput | TreinadorCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type TorneioUpsertWithWhereUniqueWithoutCriadoPorInput = {
    where: TorneioWhereUniqueInput
    update: XOR<TorneioUpdateWithoutCriadoPorInput, TorneioUncheckedUpdateWithoutCriadoPorInput>
    create: XOR<TorneioCreateWithoutCriadoPorInput, TorneioUncheckedCreateWithoutCriadoPorInput>
  }

  export type TorneioUpdateWithWhereUniqueWithoutCriadoPorInput = {
    where: TorneioWhereUniqueInput
    data: XOR<TorneioUpdateWithoutCriadoPorInput, TorneioUncheckedUpdateWithoutCriadoPorInput>
  }

  export type TorneioUpdateManyWithWhereWithoutCriadoPorInput = {
    where: TorneioScalarWhereInput
    data: XOR<TorneioUpdateManyMutationInput, TorneioUncheckedUpdateManyWithoutCriadoPorInput>
  }

  export type TorneioScalarWhereInput = {
    AND?: TorneioScalarWhereInput | TorneioScalarWhereInput[]
    OR?: TorneioScalarWhereInput[]
    NOT?: TorneioScalarWhereInput | TorneioScalarWhereInput[]
    id?: IntFilter<"Torneio"> | number
    nome?: StringFilter<"Torneio"> | string
    tipo?: EnumTipoTorneioFilter<"Torneio"> | $Enums.TipoTorneio
    data?: DateTimeFilter<"Torneio"> | Date | string
    local?: StringNullableFilter<"Torneio"> | string | null
    status?: EnumStatusTorneioFilter<"Torneio"> | $Enums.StatusTorneio
    criadoPorId?: IntFilter<"Torneio"> | number
    createdAt?: DateTimeFilter<"Torneio"> | Date | string
    updatedAt?: DateTimeFilter<"Torneio"> | Date | string
  }

  export type AtletaUpsertWithoutUsuarioInput = {
    update: XOR<AtletaUpdateWithoutUsuarioInput, AtletaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<AtletaCreateWithoutUsuarioInput, AtletaUncheckedCreateWithoutUsuarioInput>
    where?: AtletaWhereInput
  }

  export type AtletaUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: AtletaWhereInput
    data: XOR<AtletaUpdateWithoutUsuarioInput, AtletaUncheckedUpdateWithoutUsuarioInput>
  }

  export type AtletaUpdateWithoutUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    nivel?: NullableStringFieldUpdateOperationsInput | string | null
    participacoesAmador?: ParticipacaoAmadorUpdateManyWithoutAtletaNestedInput
    equipesOficiais?: AtletaEquipeOficialUpdateManyWithoutAtletaNestedInput
    EquipeAmador?: EquipeAmadorUpdateManyWithoutMembrosNestedInput
  }

  export type AtletaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    nivel?: NullableStringFieldUpdateOperationsInput | string | null
    participacoesAmador?: ParticipacaoAmadorUncheckedUpdateManyWithoutAtletaNestedInput
    equipesOficiais?: AtletaEquipeOficialUncheckedUpdateManyWithoutAtletaNestedInput
    EquipeAmador?: EquipeAmadorUncheckedUpdateManyWithoutMembrosNestedInput
  }

  export type TreinadorUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: TreinadorWhereUniqueInput
    update: XOR<TreinadorUpdateWithoutUsuarioInput, TreinadorUncheckedUpdateWithoutUsuarioInput>
    create: XOR<TreinadorCreateWithoutUsuarioInput, TreinadorUncheckedCreateWithoutUsuarioInput>
  }

  export type TreinadorUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: TreinadorWhereUniqueInput
    data: XOR<TreinadorUpdateWithoutUsuarioInput, TreinadorUncheckedUpdateWithoutUsuarioInput>
  }

  export type TreinadorUpdateManyWithWhereWithoutUsuarioInput = {
    where: TreinadorScalarWhereInput
    data: XOR<TreinadorUpdateManyMutationInput, TreinadorUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type TreinadorScalarWhereInput = {
    AND?: TreinadorScalarWhereInput | TreinadorScalarWhereInput[]
    OR?: TreinadorScalarWhereInput[]
    NOT?: TreinadorScalarWhereInput | TreinadorScalarWhereInput[]
    id?: IntFilter<"Treinador"> | number
    nome?: StringFilter<"Treinador"> | string
    email?: StringFilter<"Treinador"> | string
    usuarioId?: IntFilter<"Treinador"> | number
  }

  export type UsuarioCreateWithoutTreinadorInput = {
    nome: string
    email: string
    senha: string
    perfil: string
    criadoEm?: Date | string
    Torneio?: TorneioCreateNestedManyWithoutCriadoPorInput
    atleta?: AtletaCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutTreinadorInput = {
    id?: number
    nome: string
    email: string
    senha: string
    perfil: string
    criadoEm?: Date | string
    Torneio?: TorneioUncheckedCreateNestedManyWithoutCriadoPorInput
    atleta?: AtletaUncheckedCreateNestedOneWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutTreinadorInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutTreinadorInput, UsuarioUncheckedCreateWithoutTreinadorInput>
  }

  export type UsuarioUpsertWithoutTreinadorInput = {
    update: XOR<UsuarioUpdateWithoutTreinadorInput, UsuarioUncheckedUpdateWithoutTreinadorInput>
    create: XOR<UsuarioCreateWithoutTreinadorInput, UsuarioUncheckedCreateWithoutTreinadorInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutTreinadorInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutTreinadorInput, UsuarioUncheckedUpdateWithoutTreinadorInput>
  }

  export type UsuarioUpdateWithoutTreinadorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    perfil?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    Torneio?: TorneioUpdateManyWithoutCriadoPorNestedInput
    atleta?: AtletaUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutTreinadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    perfil?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    Torneio?: TorneioUncheckedUpdateManyWithoutCriadoPorNestedInput
    atleta?: AtletaUncheckedUpdateOneWithoutUsuarioNestedInput
  }

  export type UsuarioCreateWithoutAtletaInput = {
    nome: string
    email: string
    senha: string
    perfil: string
    criadoEm?: Date | string
    Torneio?: TorneioCreateNestedManyWithoutCriadoPorInput
    Treinador?: TreinadorCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutAtletaInput = {
    id?: number
    nome: string
    email: string
    senha: string
    perfil: string
    criadoEm?: Date | string
    Torneio?: TorneioUncheckedCreateNestedManyWithoutCriadoPorInput
    Treinador?: TreinadorUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutAtletaInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAtletaInput, UsuarioUncheckedCreateWithoutAtletaInput>
  }

  export type ParticipacaoAmadorCreateWithoutAtletaInput = {
    criadoEm?: Date | string
    torneio: TorneioCreateNestedOneWithoutParticipacaoAmadorInput
  }

  export type ParticipacaoAmadorUncheckedCreateWithoutAtletaInput = {
    id?: number
    torneioId: number
    criadoEm?: Date | string
  }

  export type ParticipacaoAmadorCreateOrConnectWithoutAtletaInput = {
    where: ParticipacaoAmadorWhereUniqueInput
    create: XOR<ParticipacaoAmadorCreateWithoutAtletaInput, ParticipacaoAmadorUncheckedCreateWithoutAtletaInput>
  }

  export type ParticipacaoAmadorCreateManyAtletaInputEnvelope = {
    data: ParticipacaoAmadorCreateManyAtletaInput | ParticipacaoAmadorCreateManyAtletaInput[]
    skipDuplicates?: boolean
  }

  export type AtletaEquipeOficialCreateWithoutAtletaInput = {
    equipeOficial: EquipeOficialCreateNestedOneWithoutMembrosInput
  }

  export type AtletaEquipeOficialUncheckedCreateWithoutAtletaInput = {
    equipeOficialId: number
  }

  export type AtletaEquipeOficialCreateOrConnectWithoutAtletaInput = {
    where: AtletaEquipeOficialWhereUniqueInput
    create: XOR<AtletaEquipeOficialCreateWithoutAtletaInput, AtletaEquipeOficialUncheckedCreateWithoutAtletaInput>
  }

  export type AtletaEquipeOficialCreateManyAtletaInputEnvelope = {
    data: AtletaEquipeOficialCreateManyAtletaInput | AtletaEquipeOficialCreateManyAtletaInput[]
    skipDuplicates?: boolean
  }

  export type EquipeAmadorCreateWithoutMembrosInput = {
    nome: string
    tipo: string
    torneio: TorneioCreateNestedOneWithoutEquipesAmadorInput
    partidasComoEquipe1?: PartidaCreateNestedManyWithoutEquipeAmador1Input
    partidasComoEquipe2?: PartidaCreateNestedManyWithoutEquipeAmador2Input
  }

  export type EquipeAmadorUncheckedCreateWithoutMembrosInput = {
    id?: number
    nome: string
    tipo: string
    torneioId: number
    partidasComoEquipe1?: PartidaUncheckedCreateNestedManyWithoutEquipeAmador1Input
    partidasComoEquipe2?: PartidaUncheckedCreateNestedManyWithoutEquipeAmador2Input
  }

  export type EquipeAmadorCreateOrConnectWithoutMembrosInput = {
    where: EquipeAmadorWhereUniqueInput
    create: XOR<EquipeAmadorCreateWithoutMembrosInput, EquipeAmadorUncheckedCreateWithoutMembrosInput>
  }

  export type UsuarioUpsertWithoutAtletaInput = {
    update: XOR<UsuarioUpdateWithoutAtletaInput, UsuarioUncheckedUpdateWithoutAtletaInput>
    create: XOR<UsuarioCreateWithoutAtletaInput, UsuarioUncheckedCreateWithoutAtletaInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAtletaInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAtletaInput, UsuarioUncheckedUpdateWithoutAtletaInput>
  }

  export type UsuarioUpdateWithoutAtletaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    perfil?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    Torneio?: TorneioUpdateManyWithoutCriadoPorNestedInput
    Treinador?: TreinadorUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAtletaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    perfil?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    Torneio?: TorneioUncheckedUpdateManyWithoutCriadoPorNestedInput
    Treinador?: TreinadorUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ParticipacaoAmadorUpsertWithWhereUniqueWithoutAtletaInput = {
    where: ParticipacaoAmadorWhereUniqueInput
    update: XOR<ParticipacaoAmadorUpdateWithoutAtletaInput, ParticipacaoAmadorUncheckedUpdateWithoutAtletaInput>
    create: XOR<ParticipacaoAmadorCreateWithoutAtletaInput, ParticipacaoAmadorUncheckedCreateWithoutAtletaInput>
  }

  export type ParticipacaoAmadorUpdateWithWhereUniqueWithoutAtletaInput = {
    where: ParticipacaoAmadorWhereUniqueInput
    data: XOR<ParticipacaoAmadorUpdateWithoutAtletaInput, ParticipacaoAmadorUncheckedUpdateWithoutAtletaInput>
  }

  export type ParticipacaoAmadorUpdateManyWithWhereWithoutAtletaInput = {
    where: ParticipacaoAmadorScalarWhereInput
    data: XOR<ParticipacaoAmadorUpdateManyMutationInput, ParticipacaoAmadorUncheckedUpdateManyWithoutAtletaInput>
  }

  export type ParticipacaoAmadorScalarWhereInput = {
    AND?: ParticipacaoAmadorScalarWhereInput | ParticipacaoAmadorScalarWhereInput[]
    OR?: ParticipacaoAmadorScalarWhereInput[]
    NOT?: ParticipacaoAmadorScalarWhereInput | ParticipacaoAmadorScalarWhereInput[]
    id?: IntFilter<"ParticipacaoAmador"> | number
    atletaId?: IntFilter<"ParticipacaoAmador"> | number
    torneioId?: IntFilter<"ParticipacaoAmador"> | number
    criadoEm?: DateTimeFilter<"ParticipacaoAmador"> | Date | string
  }

  export type AtletaEquipeOficialUpsertWithWhereUniqueWithoutAtletaInput = {
    where: AtletaEquipeOficialWhereUniqueInput
    update: XOR<AtletaEquipeOficialUpdateWithoutAtletaInput, AtletaEquipeOficialUncheckedUpdateWithoutAtletaInput>
    create: XOR<AtletaEquipeOficialCreateWithoutAtletaInput, AtletaEquipeOficialUncheckedCreateWithoutAtletaInput>
  }

  export type AtletaEquipeOficialUpdateWithWhereUniqueWithoutAtletaInput = {
    where: AtletaEquipeOficialWhereUniqueInput
    data: XOR<AtletaEquipeOficialUpdateWithoutAtletaInput, AtletaEquipeOficialUncheckedUpdateWithoutAtletaInput>
  }

  export type AtletaEquipeOficialUpdateManyWithWhereWithoutAtletaInput = {
    where: AtletaEquipeOficialScalarWhereInput
    data: XOR<AtletaEquipeOficialUpdateManyMutationInput, AtletaEquipeOficialUncheckedUpdateManyWithoutAtletaInput>
  }

  export type AtletaEquipeOficialScalarWhereInput = {
    AND?: AtletaEquipeOficialScalarWhereInput | AtletaEquipeOficialScalarWhereInput[]
    OR?: AtletaEquipeOficialScalarWhereInput[]
    NOT?: AtletaEquipeOficialScalarWhereInput | AtletaEquipeOficialScalarWhereInput[]
    atletaId?: IntFilter<"AtletaEquipeOficial"> | number
    equipeOficialId?: IntFilter<"AtletaEquipeOficial"> | number
  }

  export type EquipeAmadorUpsertWithWhereUniqueWithoutMembrosInput = {
    where: EquipeAmadorWhereUniqueInput
    update: XOR<EquipeAmadorUpdateWithoutMembrosInput, EquipeAmadorUncheckedUpdateWithoutMembrosInput>
    create: XOR<EquipeAmadorCreateWithoutMembrosInput, EquipeAmadorUncheckedCreateWithoutMembrosInput>
  }

  export type EquipeAmadorUpdateWithWhereUniqueWithoutMembrosInput = {
    where: EquipeAmadorWhereUniqueInput
    data: XOR<EquipeAmadorUpdateWithoutMembrosInput, EquipeAmadorUncheckedUpdateWithoutMembrosInput>
  }

  export type EquipeAmadorUpdateManyWithWhereWithoutMembrosInput = {
    where: EquipeAmadorScalarWhereInput
    data: XOR<EquipeAmadorUpdateManyMutationInput, EquipeAmadorUncheckedUpdateManyWithoutMembrosInput>
  }

  export type EquipeAmadorScalarWhereInput = {
    AND?: EquipeAmadorScalarWhereInput | EquipeAmadorScalarWhereInput[]
    OR?: EquipeAmadorScalarWhereInput[]
    NOT?: EquipeAmadorScalarWhereInput | EquipeAmadorScalarWhereInput[]
    id?: IntFilter<"EquipeAmador"> | number
    nome?: StringFilter<"EquipeAmador"> | string
    tipo?: StringFilter<"EquipeAmador"> | string
    torneioId?: IntFilter<"EquipeAmador"> | number
  }

  export type UsuarioCreateWithoutTorneioInput = {
    nome: string
    email: string
    senha: string
    perfil: string
    criadoEm?: Date | string
    atleta?: AtletaCreateNestedOneWithoutUsuarioInput
    Treinador?: TreinadorCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutTorneioInput = {
    id?: number
    nome: string
    email: string
    senha: string
    perfil: string
    criadoEm?: Date | string
    atleta?: AtletaUncheckedCreateNestedOneWithoutUsuarioInput
    Treinador?: TreinadorUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutTorneioInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutTorneioInput, UsuarioUncheckedCreateWithoutTorneioInput>
  }

  export type PartidaCreateWithoutTorneioInput = {
    fase: string
    pontosEquipe1?: number | null
    pontosEquipe2?: number | null
    vencedorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    equipeAmador1?: EquipeAmadorCreateNestedOneWithoutPartidasComoEquipe1Input
    equipeAmador2?: EquipeAmadorCreateNestedOneWithoutPartidasComoEquipe2Input
    equipeOficial1?: EquipeOficialCreateNestedOneWithoutPartidasComoEquipeOficial1Input
    equipeOficial2?: EquipeOficialCreateNestedOneWithoutPartidasComoEquipeOficial2Input
  }

  export type PartidaUncheckedCreateWithoutTorneioInput = {
    id?: number
    fase: string
    equipeAmador1Id?: number | null
    equipeAmador2Id?: number | null
    equipeOficial1Id?: number | null
    equipeOficial2Id?: number | null
    pontosEquipe1?: number | null
    pontosEquipe2?: number | null
    vencedorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartidaCreateOrConnectWithoutTorneioInput = {
    where: PartidaWhereUniqueInput
    create: XOR<PartidaCreateWithoutTorneioInput, PartidaUncheckedCreateWithoutTorneioInput>
  }

  export type PartidaCreateManyTorneioInputEnvelope = {
    data: PartidaCreateManyTorneioInput | PartidaCreateManyTorneioInput[]
    skipDuplicates?: boolean
  }

  export type EquipeAmadorCreateWithoutTorneioInput = {
    nome: string
    tipo: string
    membros?: AtletaCreateNestedManyWithoutEquipeAmadorInput
    partidasComoEquipe1?: PartidaCreateNestedManyWithoutEquipeAmador1Input
    partidasComoEquipe2?: PartidaCreateNestedManyWithoutEquipeAmador2Input
  }

  export type EquipeAmadorUncheckedCreateWithoutTorneioInput = {
    id?: number
    nome: string
    tipo: string
    membros?: AtletaUncheckedCreateNestedManyWithoutEquipeAmadorInput
    partidasComoEquipe1?: PartidaUncheckedCreateNestedManyWithoutEquipeAmador1Input
    partidasComoEquipe2?: PartidaUncheckedCreateNestedManyWithoutEquipeAmador2Input
  }

  export type EquipeAmadorCreateOrConnectWithoutTorneioInput = {
    where: EquipeAmadorWhereUniqueInput
    create: XOR<EquipeAmadorCreateWithoutTorneioInput, EquipeAmadorUncheckedCreateWithoutTorneioInput>
  }

  export type EquipeAmadorCreateManyTorneioInputEnvelope = {
    data: EquipeAmadorCreateManyTorneioInput | EquipeAmadorCreateManyTorneioInput[]
    skipDuplicates?: boolean
  }

  export type EquipeOficialCreateWithoutTorneioInput = {
    nome: string
    tipo: string
    createdAt?: Date | string
    membros?: AtletaEquipeOficialCreateNestedManyWithoutEquipeOficialInput
    partidasComoEquipeOficial1?: PartidaCreateNestedManyWithoutEquipeOficial1Input
    partidasComoEquipeOficial2?: PartidaCreateNestedManyWithoutEquipeOficial2Input
  }

  export type EquipeOficialUncheckedCreateWithoutTorneioInput = {
    id?: number
    nome: string
    tipo: string
    createdAt?: Date | string
    membros?: AtletaEquipeOficialUncheckedCreateNestedManyWithoutEquipeOficialInput
    partidasComoEquipeOficial1?: PartidaUncheckedCreateNestedManyWithoutEquipeOficial1Input
    partidasComoEquipeOficial2?: PartidaUncheckedCreateNestedManyWithoutEquipeOficial2Input
  }

  export type EquipeOficialCreateOrConnectWithoutTorneioInput = {
    where: EquipeOficialWhereUniqueInput
    create: XOR<EquipeOficialCreateWithoutTorneioInput, EquipeOficialUncheckedCreateWithoutTorneioInput>
  }

  export type EquipeOficialCreateManyTorneioInputEnvelope = {
    data: EquipeOficialCreateManyTorneioInput | EquipeOficialCreateManyTorneioInput[]
    skipDuplicates?: boolean
  }

  export type ParticipacaoAmadorCreateWithoutTorneioInput = {
    criadoEm?: Date | string
    atleta: AtletaCreateNestedOneWithoutParticipacoesAmadorInput
  }

  export type ParticipacaoAmadorUncheckedCreateWithoutTorneioInput = {
    id?: number
    atletaId: number
    criadoEm?: Date | string
  }

  export type ParticipacaoAmadorCreateOrConnectWithoutTorneioInput = {
    where: ParticipacaoAmadorWhereUniqueInput
    create: XOR<ParticipacaoAmadorCreateWithoutTorneioInput, ParticipacaoAmadorUncheckedCreateWithoutTorneioInput>
  }

  export type ParticipacaoAmadorCreateManyTorneioInputEnvelope = {
    data: ParticipacaoAmadorCreateManyTorneioInput | ParticipacaoAmadorCreateManyTorneioInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutTorneioInput = {
    update: XOR<UsuarioUpdateWithoutTorneioInput, UsuarioUncheckedUpdateWithoutTorneioInput>
    create: XOR<UsuarioCreateWithoutTorneioInput, UsuarioUncheckedCreateWithoutTorneioInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutTorneioInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutTorneioInput, UsuarioUncheckedUpdateWithoutTorneioInput>
  }

  export type UsuarioUpdateWithoutTorneioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    perfil?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atleta?: AtletaUpdateOneWithoutUsuarioNestedInput
    Treinador?: TreinadorUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutTorneioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    perfil?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atleta?: AtletaUncheckedUpdateOneWithoutUsuarioNestedInput
    Treinador?: TreinadorUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type PartidaUpsertWithWhereUniqueWithoutTorneioInput = {
    where: PartidaWhereUniqueInput
    update: XOR<PartidaUpdateWithoutTorneioInput, PartidaUncheckedUpdateWithoutTorneioInput>
    create: XOR<PartidaCreateWithoutTorneioInput, PartidaUncheckedCreateWithoutTorneioInput>
  }

  export type PartidaUpdateWithWhereUniqueWithoutTorneioInput = {
    where: PartidaWhereUniqueInput
    data: XOR<PartidaUpdateWithoutTorneioInput, PartidaUncheckedUpdateWithoutTorneioInput>
  }

  export type PartidaUpdateManyWithWhereWithoutTorneioInput = {
    where: PartidaScalarWhereInput
    data: XOR<PartidaUpdateManyMutationInput, PartidaUncheckedUpdateManyWithoutTorneioInput>
  }

  export type PartidaScalarWhereInput = {
    AND?: PartidaScalarWhereInput | PartidaScalarWhereInput[]
    OR?: PartidaScalarWhereInput[]
    NOT?: PartidaScalarWhereInput | PartidaScalarWhereInput[]
    id?: IntFilter<"Partida"> | number
    torneioId?: IntFilter<"Partida"> | number
    fase?: StringFilter<"Partida"> | string
    equipeAmador1Id?: IntNullableFilter<"Partida"> | number | null
    equipeAmador2Id?: IntNullableFilter<"Partida"> | number | null
    equipeOficial1Id?: IntNullableFilter<"Partida"> | number | null
    equipeOficial2Id?: IntNullableFilter<"Partida"> | number | null
    pontosEquipe1?: IntNullableFilter<"Partida"> | number | null
    pontosEquipe2?: IntNullableFilter<"Partida"> | number | null
    vencedorId?: IntNullableFilter<"Partida"> | number | null
    createdAt?: DateTimeFilter<"Partida"> | Date | string
    updatedAt?: DateTimeFilter<"Partida"> | Date | string
  }

  export type EquipeAmadorUpsertWithWhereUniqueWithoutTorneioInput = {
    where: EquipeAmadorWhereUniqueInput
    update: XOR<EquipeAmadorUpdateWithoutTorneioInput, EquipeAmadorUncheckedUpdateWithoutTorneioInput>
    create: XOR<EquipeAmadorCreateWithoutTorneioInput, EquipeAmadorUncheckedCreateWithoutTorneioInput>
  }

  export type EquipeAmadorUpdateWithWhereUniqueWithoutTorneioInput = {
    where: EquipeAmadorWhereUniqueInput
    data: XOR<EquipeAmadorUpdateWithoutTorneioInput, EquipeAmadorUncheckedUpdateWithoutTorneioInput>
  }

  export type EquipeAmadorUpdateManyWithWhereWithoutTorneioInput = {
    where: EquipeAmadorScalarWhereInput
    data: XOR<EquipeAmadorUpdateManyMutationInput, EquipeAmadorUncheckedUpdateManyWithoutTorneioInput>
  }

  export type EquipeOficialUpsertWithWhereUniqueWithoutTorneioInput = {
    where: EquipeOficialWhereUniqueInput
    update: XOR<EquipeOficialUpdateWithoutTorneioInput, EquipeOficialUncheckedUpdateWithoutTorneioInput>
    create: XOR<EquipeOficialCreateWithoutTorneioInput, EquipeOficialUncheckedCreateWithoutTorneioInput>
  }

  export type EquipeOficialUpdateWithWhereUniqueWithoutTorneioInput = {
    where: EquipeOficialWhereUniqueInput
    data: XOR<EquipeOficialUpdateWithoutTorneioInput, EquipeOficialUncheckedUpdateWithoutTorneioInput>
  }

  export type EquipeOficialUpdateManyWithWhereWithoutTorneioInput = {
    where: EquipeOficialScalarWhereInput
    data: XOR<EquipeOficialUpdateManyMutationInput, EquipeOficialUncheckedUpdateManyWithoutTorneioInput>
  }

  export type EquipeOficialScalarWhereInput = {
    AND?: EquipeOficialScalarWhereInput | EquipeOficialScalarWhereInput[]
    OR?: EquipeOficialScalarWhereInput[]
    NOT?: EquipeOficialScalarWhereInput | EquipeOficialScalarWhereInput[]
    id?: IntFilter<"EquipeOficial"> | number
    nome?: StringFilter<"EquipeOficial"> | string
    tipo?: StringFilter<"EquipeOficial"> | string
    createdAt?: DateTimeFilter<"EquipeOficial"> | Date | string
    torneioId?: IntFilter<"EquipeOficial"> | number
  }

  export type ParticipacaoAmadorUpsertWithWhereUniqueWithoutTorneioInput = {
    where: ParticipacaoAmadorWhereUniqueInput
    update: XOR<ParticipacaoAmadorUpdateWithoutTorneioInput, ParticipacaoAmadorUncheckedUpdateWithoutTorneioInput>
    create: XOR<ParticipacaoAmadorCreateWithoutTorneioInput, ParticipacaoAmadorUncheckedCreateWithoutTorneioInput>
  }

  export type ParticipacaoAmadorUpdateWithWhereUniqueWithoutTorneioInput = {
    where: ParticipacaoAmadorWhereUniqueInput
    data: XOR<ParticipacaoAmadorUpdateWithoutTorneioInput, ParticipacaoAmadorUncheckedUpdateWithoutTorneioInput>
  }

  export type ParticipacaoAmadorUpdateManyWithWhereWithoutTorneioInput = {
    where: ParticipacaoAmadorScalarWhereInput
    data: XOR<ParticipacaoAmadorUpdateManyMutationInput, ParticipacaoAmadorUncheckedUpdateManyWithoutTorneioInput>
  }

  export type AtletaCreateWithoutParticipacoesAmadorInput = {
    nome: string
    email: string
    genero: string
    nivel?: string | null
    usuario?: UsuarioCreateNestedOneWithoutAtletaInput
    equipesOficiais?: AtletaEquipeOficialCreateNestedManyWithoutAtletaInput
    EquipeAmador?: EquipeAmadorCreateNestedManyWithoutMembrosInput
  }

  export type AtletaUncheckedCreateWithoutParticipacoesAmadorInput = {
    id?: number
    nome: string
    email: string
    genero: string
    nivel?: string | null
    usuarioId?: number | null
    equipesOficiais?: AtletaEquipeOficialUncheckedCreateNestedManyWithoutAtletaInput
    EquipeAmador?: EquipeAmadorUncheckedCreateNestedManyWithoutMembrosInput
  }

  export type AtletaCreateOrConnectWithoutParticipacoesAmadorInput = {
    where: AtletaWhereUniqueInput
    create: XOR<AtletaCreateWithoutParticipacoesAmadorInput, AtletaUncheckedCreateWithoutParticipacoesAmadorInput>
  }

  export type TorneioCreateWithoutParticipacaoAmadorInput = {
    nome: string
    tipo: $Enums.TipoTorneio
    data: Date | string
    local?: string | null
    status?: $Enums.StatusTorneio
    createdAt?: Date | string
    updatedAt?: Date | string
    criadoPor: UsuarioCreateNestedOneWithoutTorneioInput
    Partida?: PartidaCreateNestedManyWithoutTorneioInput
    equipesAmador?: EquipeAmadorCreateNestedManyWithoutTorneioInput
    equipesOficial?: EquipeOficialCreateNestedManyWithoutTorneioInput
  }

  export type TorneioUncheckedCreateWithoutParticipacaoAmadorInput = {
    id?: number
    nome: string
    tipo: $Enums.TipoTorneio
    data: Date | string
    local?: string | null
    status?: $Enums.StatusTorneio
    criadoPorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Partida?: PartidaUncheckedCreateNestedManyWithoutTorneioInput
    equipesAmador?: EquipeAmadorUncheckedCreateNestedManyWithoutTorneioInput
    equipesOficial?: EquipeOficialUncheckedCreateNestedManyWithoutTorneioInput
  }

  export type TorneioCreateOrConnectWithoutParticipacaoAmadorInput = {
    where: TorneioWhereUniqueInput
    create: XOR<TorneioCreateWithoutParticipacaoAmadorInput, TorneioUncheckedCreateWithoutParticipacaoAmadorInput>
  }

  export type AtletaUpsertWithoutParticipacoesAmadorInput = {
    update: XOR<AtletaUpdateWithoutParticipacoesAmadorInput, AtletaUncheckedUpdateWithoutParticipacoesAmadorInput>
    create: XOR<AtletaCreateWithoutParticipacoesAmadorInput, AtletaUncheckedCreateWithoutParticipacoesAmadorInput>
    where?: AtletaWhereInput
  }

  export type AtletaUpdateToOneWithWhereWithoutParticipacoesAmadorInput = {
    where?: AtletaWhereInput
    data: XOR<AtletaUpdateWithoutParticipacoesAmadorInput, AtletaUncheckedUpdateWithoutParticipacoesAmadorInput>
  }

  export type AtletaUpdateWithoutParticipacoesAmadorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    nivel?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneWithoutAtletaNestedInput
    equipesOficiais?: AtletaEquipeOficialUpdateManyWithoutAtletaNestedInput
    EquipeAmador?: EquipeAmadorUpdateManyWithoutMembrosNestedInput
  }

  export type AtletaUncheckedUpdateWithoutParticipacoesAmadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    nivel?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
    equipesOficiais?: AtletaEquipeOficialUncheckedUpdateManyWithoutAtletaNestedInput
    EquipeAmador?: EquipeAmadorUncheckedUpdateManyWithoutMembrosNestedInput
  }

  export type TorneioUpsertWithoutParticipacaoAmadorInput = {
    update: XOR<TorneioUpdateWithoutParticipacaoAmadorInput, TorneioUncheckedUpdateWithoutParticipacaoAmadorInput>
    create: XOR<TorneioCreateWithoutParticipacaoAmadorInput, TorneioUncheckedCreateWithoutParticipacaoAmadorInput>
    where?: TorneioWhereInput
  }

  export type TorneioUpdateToOneWithWhereWithoutParticipacaoAmadorInput = {
    where?: TorneioWhereInput
    data: XOR<TorneioUpdateWithoutParticipacaoAmadorInput, TorneioUncheckedUpdateWithoutParticipacaoAmadorInput>
  }

  export type TorneioUpdateWithoutParticipacaoAmadorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoTorneioFieldUpdateOperationsInput | $Enums.TipoTorneio
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTorneioFieldUpdateOperationsInput | $Enums.StatusTorneio
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: UsuarioUpdateOneRequiredWithoutTorneioNestedInput
    Partida?: PartidaUpdateManyWithoutTorneioNestedInput
    equipesAmador?: EquipeAmadorUpdateManyWithoutTorneioNestedInput
    equipesOficial?: EquipeOficialUpdateManyWithoutTorneioNestedInput
  }

  export type TorneioUncheckedUpdateWithoutParticipacaoAmadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoTorneioFieldUpdateOperationsInput | $Enums.TipoTorneio
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTorneioFieldUpdateOperationsInput | $Enums.StatusTorneio
    criadoPorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Partida?: PartidaUncheckedUpdateManyWithoutTorneioNestedInput
    equipesAmador?: EquipeAmadorUncheckedUpdateManyWithoutTorneioNestedInput
    equipesOficial?: EquipeOficialUncheckedUpdateManyWithoutTorneioNestedInput
  }

  export type TorneioCreateWithoutEquipesAmadorInput = {
    nome: string
    tipo: $Enums.TipoTorneio
    data: Date | string
    local?: string | null
    status?: $Enums.StatusTorneio
    createdAt?: Date | string
    updatedAt?: Date | string
    criadoPor: UsuarioCreateNestedOneWithoutTorneioInput
    Partida?: PartidaCreateNestedManyWithoutTorneioInput
    equipesOficial?: EquipeOficialCreateNestedManyWithoutTorneioInput
    ParticipacaoAmador?: ParticipacaoAmadorCreateNestedManyWithoutTorneioInput
  }

  export type TorneioUncheckedCreateWithoutEquipesAmadorInput = {
    id?: number
    nome: string
    tipo: $Enums.TipoTorneio
    data: Date | string
    local?: string | null
    status?: $Enums.StatusTorneio
    criadoPorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Partida?: PartidaUncheckedCreateNestedManyWithoutTorneioInput
    equipesOficial?: EquipeOficialUncheckedCreateNestedManyWithoutTorneioInput
    ParticipacaoAmador?: ParticipacaoAmadorUncheckedCreateNestedManyWithoutTorneioInput
  }

  export type TorneioCreateOrConnectWithoutEquipesAmadorInput = {
    where: TorneioWhereUniqueInput
    create: XOR<TorneioCreateWithoutEquipesAmadorInput, TorneioUncheckedCreateWithoutEquipesAmadorInput>
  }

  export type AtletaCreateWithoutEquipeAmadorInput = {
    nome: string
    email: string
    genero: string
    nivel?: string | null
    usuario?: UsuarioCreateNestedOneWithoutAtletaInput
    participacoesAmador?: ParticipacaoAmadorCreateNestedManyWithoutAtletaInput
    equipesOficiais?: AtletaEquipeOficialCreateNestedManyWithoutAtletaInput
  }

  export type AtletaUncheckedCreateWithoutEquipeAmadorInput = {
    id?: number
    nome: string
    email: string
    genero: string
    nivel?: string | null
    usuarioId?: number | null
    participacoesAmador?: ParticipacaoAmadorUncheckedCreateNestedManyWithoutAtletaInput
    equipesOficiais?: AtletaEquipeOficialUncheckedCreateNestedManyWithoutAtletaInput
  }

  export type AtletaCreateOrConnectWithoutEquipeAmadorInput = {
    where: AtletaWhereUniqueInput
    create: XOR<AtletaCreateWithoutEquipeAmadorInput, AtletaUncheckedCreateWithoutEquipeAmadorInput>
  }

  export type PartidaCreateWithoutEquipeAmador1Input = {
    fase: string
    pontosEquipe1?: number | null
    pontosEquipe2?: number | null
    vencedorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    torneio: TorneioCreateNestedOneWithoutPartidaInput
    equipeAmador2?: EquipeAmadorCreateNestedOneWithoutPartidasComoEquipe2Input
    equipeOficial1?: EquipeOficialCreateNestedOneWithoutPartidasComoEquipeOficial1Input
    equipeOficial2?: EquipeOficialCreateNestedOneWithoutPartidasComoEquipeOficial2Input
  }

  export type PartidaUncheckedCreateWithoutEquipeAmador1Input = {
    id?: number
    torneioId: number
    fase: string
    equipeAmador2Id?: number | null
    equipeOficial1Id?: number | null
    equipeOficial2Id?: number | null
    pontosEquipe1?: number | null
    pontosEquipe2?: number | null
    vencedorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartidaCreateOrConnectWithoutEquipeAmador1Input = {
    where: PartidaWhereUniqueInput
    create: XOR<PartidaCreateWithoutEquipeAmador1Input, PartidaUncheckedCreateWithoutEquipeAmador1Input>
  }

  export type PartidaCreateManyEquipeAmador1InputEnvelope = {
    data: PartidaCreateManyEquipeAmador1Input | PartidaCreateManyEquipeAmador1Input[]
    skipDuplicates?: boolean
  }

  export type PartidaCreateWithoutEquipeAmador2Input = {
    fase: string
    pontosEquipe1?: number | null
    pontosEquipe2?: number | null
    vencedorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    torneio: TorneioCreateNestedOneWithoutPartidaInput
    equipeAmador1?: EquipeAmadorCreateNestedOneWithoutPartidasComoEquipe1Input
    equipeOficial1?: EquipeOficialCreateNestedOneWithoutPartidasComoEquipeOficial1Input
    equipeOficial2?: EquipeOficialCreateNestedOneWithoutPartidasComoEquipeOficial2Input
  }

  export type PartidaUncheckedCreateWithoutEquipeAmador2Input = {
    id?: number
    torneioId: number
    fase: string
    equipeAmador1Id?: number | null
    equipeOficial1Id?: number | null
    equipeOficial2Id?: number | null
    pontosEquipe1?: number | null
    pontosEquipe2?: number | null
    vencedorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartidaCreateOrConnectWithoutEquipeAmador2Input = {
    where: PartidaWhereUniqueInput
    create: XOR<PartidaCreateWithoutEquipeAmador2Input, PartidaUncheckedCreateWithoutEquipeAmador2Input>
  }

  export type PartidaCreateManyEquipeAmador2InputEnvelope = {
    data: PartidaCreateManyEquipeAmador2Input | PartidaCreateManyEquipeAmador2Input[]
    skipDuplicates?: boolean
  }

  export type TorneioUpsertWithoutEquipesAmadorInput = {
    update: XOR<TorneioUpdateWithoutEquipesAmadorInput, TorneioUncheckedUpdateWithoutEquipesAmadorInput>
    create: XOR<TorneioCreateWithoutEquipesAmadorInput, TorneioUncheckedCreateWithoutEquipesAmadorInput>
    where?: TorneioWhereInput
  }

  export type TorneioUpdateToOneWithWhereWithoutEquipesAmadorInput = {
    where?: TorneioWhereInput
    data: XOR<TorneioUpdateWithoutEquipesAmadorInput, TorneioUncheckedUpdateWithoutEquipesAmadorInput>
  }

  export type TorneioUpdateWithoutEquipesAmadorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoTorneioFieldUpdateOperationsInput | $Enums.TipoTorneio
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTorneioFieldUpdateOperationsInput | $Enums.StatusTorneio
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: UsuarioUpdateOneRequiredWithoutTorneioNestedInput
    Partida?: PartidaUpdateManyWithoutTorneioNestedInput
    equipesOficial?: EquipeOficialUpdateManyWithoutTorneioNestedInput
    ParticipacaoAmador?: ParticipacaoAmadorUpdateManyWithoutTorneioNestedInput
  }

  export type TorneioUncheckedUpdateWithoutEquipesAmadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoTorneioFieldUpdateOperationsInput | $Enums.TipoTorneio
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTorneioFieldUpdateOperationsInput | $Enums.StatusTorneio
    criadoPorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Partida?: PartidaUncheckedUpdateManyWithoutTorneioNestedInput
    equipesOficial?: EquipeOficialUncheckedUpdateManyWithoutTorneioNestedInput
    ParticipacaoAmador?: ParticipacaoAmadorUncheckedUpdateManyWithoutTorneioNestedInput
  }

  export type AtletaUpsertWithWhereUniqueWithoutEquipeAmadorInput = {
    where: AtletaWhereUniqueInput
    update: XOR<AtletaUpdateWithoutEquipeAmadorInput, AtletaUncheckedUpdateWithoutEquipeAmadorInput>
    create: XOR<AtletaCreateWithoutEquipeAmadorInput, AtletaUncheckedCreateWithoutEquipeAmadorInput>
  }

  export type AtletaUpdateWithWhereUniqueWithoutEquipeAmadorInput = {
    where: AtletaWhereUniqueInput
    data: XOR<AtletaUpdateWithoutEquipeAmadorInput, AtletaUncheckedUpdateWithoutEquipeAmadorInput>
  }

  export type AtletaUpdateManyWithWhereWithoutEquipeAmadorInput = {
    where: AtletaScalarWhereInput
    data: XOR<AtletaUpdateManyMutationInput, AtletaUncheckedUpdateManyWithoutEquipeAmadorInput>
  }

  export type AtletaScalarWhereInput = {
    AND?: AtletaScalarWhereInput | AtletaScalarWhereInput[]
    OR?: AtletaScalarWhereInput[]
    NOT?: AtletaScalarWhereInput | AtletaScalarWhereInput[]
    id?: IntFilter<"Atleta"> | number
    nome?: StringFilter<"Atleta"> | string
    email?: StringFilter<"Atleta"> | string
    genero?: StringFilter<"Atleta"> | string
    nivel?: StringNullableFilter<"Atleta"> | string | null
    usuarioId?: IntNullableFilter<"Atleta"> | number | null
  }

  export type PartidaUpsertWithWhereUniqueWithoutEquipeAmador1Input = {
    where: PartidaWhereUniqueInput
    update: XOR<PartidaUpdateWithoutEquipeAmador1Input, PartidaUncheckedUpdateWithoutEquipeAmador1Input>
    create: XOR<PartidaCreateWithoutEquipeAmador1Input, PartidaUncheckedCreateWithoutEquipeAmador1Input>
  }

  export type PartidaUpdateWithWhereUniqueWithoutEquipeAmador1Input = {
    where: PartidaWhereUniqueInput
    data: XOR<PartidaUpdateWithoutEquipeAmador1Input, PartidaUncheckedUpdateWithoutEquipeAmador1Input>
  }

  export type PartidaUpdateManyWithWhereWithoutEquipeAmador1Input = {
    where: PartidaScalarWhereInput
    data: XOR<PartidaUpdateManyMutationInput, PartidaUncheckedUpdateManyWithoutEquipeAmador1Input>
  }

  export type PartidaUpsertWithWhereUniqueWithoutEquipeAmador2Input = {
    where: PartidaWhereUniqueInput
    update: XOR<PartidaUpdateWithoutEquipeAmador2Input, PartidaUncheckedUpdateWithoutEquipeAmador2Input>
    create: XOR<PartidaCreateWithoutEquipeAmador2Input, PartidaUncheckedCreateWithoutEquipeAmador2Input>
  }

  export type PartidaUpdateWithWhereUniqueWithoutEquipeAmador2Input = {
    where: PartidaWhereUniqueInput
    data: XOR<PartidaUpdateWithoutEquipeAmador2Input, PartidaUncheckedUpdateWithoutEquipeAmador2Input>
  }

  export type PartidaUpdateManyWithWhereWithoutEquipeAmador2Input = {
    where: PartidaScalarWhereInput
    data: XOR<PartidaUpdateManyMutationInput, PartidaUncheckedUpdateManyWithoutEquipeAmador2Input>
  }

  export type TorneioCreateWithoutEquipesOficialInput = {
    nome: string
    tipo: $Enums.TipoTorneio
    data: Date | string
    local?: string | null
    status?: $Enums.StatusTorneio
    createdAt?: Date | string
    updatedAt?: Date | string
    criadoPor: UsuarioCreateNestedOneWithoutTorneioInput
    Partida?: PartidaCreateNestedManyWithoutTorneioInput
    equipesAmador?: EquipeAmadorCreateNestedManyWithoutTorneioInput
    ParticipacaoAmador?: ParticipacaoAmadorCreateNestedManyWithoutTorneioInput
  }

  export type TorneioUncheckedCreateWithoutEquipesOficialInput = {
    id?: number
    nome: string
    tipo: $Enums.TipoTorneio
    data: Date | string
    local?: string | null
    status?: $Enums.StatusTorneio
    criadoPorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    Partida?: PartidaUncheckedCreateNestedManyWithoutTorneioInput
    equipesAmador?: EquipeAmadorUncheckedCreateNestedManyWithoutTorneioInput
    ParticipacaoAmador?: ParticipacaoAmadorUncheckedCreateNestedManyWithoutTorneioInput
  }

  export type TorneioCreateOrConnectWithoutEquipesOficialInput = {
    where: TorneioWhereUniqueInput
    create: XOR<TorneioCreateWithoutEquipesOficialInput, TorneioUncheckedCreateWithoutEquipesOficialInput>
  }

  export type AtletaEquipeOficialCreateWithoutEquipeOficialInput = {
    atleta: AtletaCreateNestedOneWithoutEquipesOficiaisInput
  }

  export type AtletaEquipeOficialUncheckedCreateWithoutEquipeOficialInput = {
    atletaId: number
  }

  export type AtletaEquipeOficialCreateOrConnectWithoutEquipeOficialInput = {
    where: AtletaEquipeOficialWhereUniqueInput
    create: XOR<AtletaEquipeOficialCreateWithoutEquipeOficialInput, AtletaEquipeOficialUncheckedCreateWithoutEquipeOficialInput>
  }

  export type AtletaEquipeOficialCreateManyEquipeOficialInputEnvelope = {
    data: AtletaEquipeOficialCreateManyEquipeOficialInput | AtletaEquipeOficialCreateManyEquipeOficialInput[]
    skipDuplicates?: boolean
  }

  export type PartidaCreateWithoutEquipeOficial1Input = {
    fase: string
    pontosEquipe1?: number | null
    pontosEquipe2?: number | null
    vencedorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    torneio: TorneioCreateNestedOneWithoutPartidaInput
    equipeAmador1?: EquipeAmadorCreateNestedOneWithoutPartidasComoEquipe1Input
    equipeAmador2?: EquipeAmadorCreateNestedOneWithoutPartidasComoEquipe2Input
    equipeOficial2?: EquipeOficialCreateNestedOneWithoutPartidasComoEquipeOficial2Input
  }

  export type PartidaUncheckedCreateWithoutEquipeOficial1Input = {
    id?: number
    torneioId: number
    fase: string
    equipeAmador1Id?: number | null
    equipeAmador2Id?: number | null
    equipeOficial2Id?: number | null
    pontosEquipe1?: number | null
    pontosEquipe2?: number | null
    vencedorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartidaCreateOrConnectWithoutEquipeOficial1Input = {
    where: PartidaWhereUniqueInput
    create: XOR<PartidaCreateWithoutEquipeOficial1Input, PartidaUncheckedCreateWithoutEquipeOficial1Input>
  }

  export type PartidaCreateManyEquipeOficial1InputEnvelope = {
    data: PartidaCreateManyEquipeOficial1Input | PartidaCreateManyEquipeOficial1Input[]
    skipDuplicates?: boolean
  }

  export type PartidaCreateWithoutEquipeOficial2Input = {
    fase: string
    pontosEquipe1?: number | null
    pontosEquipe2?: number | null
    vencedorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    torneio: TorneioCreateNestedOneWithoutPartidaInput
    equipeAmador1?: EquipeAmadorCreateNestedOneWithoutPartidasComoEquipe1Input
    equipeAmador2?: EquipeAmadorCreateNestedOneWithoutPartidasComoEquipe2Input
    equipeOficial1?: EquipeOficialCreateNestedOneWithoutPartidasComoEquipeOficial1Input
  }

  export type PartidaUncheckedCreateWithoutEquipeOficial2Input = {
    id?: number
    torneioId: number
    fase: string
    equipeAmador1Id?: number | null
    equipeAmador2Id?: number | null
    equipeOficial1Id?: number | null
    pontosEquipe1?: number | null
    pontosEquipe2?: number | null
    vencedorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartidaCreateOrConnectWithoutEquipeOficial2Input = {
    where: PartidaWhereUniqueInput
    create: XOR<PartidaCreateWithoutEquipeOficial2Input, PartidaUncheckedCreateWithoutEquipeOficial2Input>
  }

  export type PartidaCreateManyEquipeOficial2InputEnvelope = {
    data: PartidaCreateManyEquipeOficial2Input | PartidaCreateManyEquipeOficial2Input[]
    skipDuplicates?: boolean
  }

  export type TorneioUpsertWithoutEquipesOficialInput = {
    update: XOR<TorneioUpdateWithoutEquipesOficialInput, TorneioUncheckedUpdateWithoutEquipesOficialInput>
    create: XOR<TorneioCreateWithoutEquipesOficialInput, TorneioUncheckedCreateWithoutEquipesOficialInput>
    where?: TorneioWhereInput
  }

  export type TorneioUpdateToOneWithWhereWithoutEquipesOficialInput = {
    where?: TorneioWhereInput
    data: XOR<TorneioUpdateWithoutEquipesOficialInput, TorneioUncheckedUpdateWithoutEquipesOficialInput>
  }

  export type TorneioUpdateWithoutEquipesOficialInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoTorneioFieldUpdateOperationsInput | $Enums.TipoTorneio
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTorneioFieldUpdateOperationsInput | $Enums.StatusTorneio
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: UsuarioUpdateOneRequiredWithoutTorneioNestedInput
    Partida?: PartidaUpdateManyWithoutTorneioNestedInput
    equipesAmador?: EquipeAmadorUpdateManyWithoutTorneioNestedInput
    ParticipacaoAmador?: ParticipacaoAmadorUpdateManyWithoutTorneioNestedInput
  }

  export type TorneioUncheckedUpdateWithoutEquipesOficialInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoTorneioFieldUpdateOperationsInput | $Enums.TipoTorneio
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTorneioFieldUpdateOperationsInput | $Enums.StatusTorneio
    criadoPorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Partida?: PartidaUncheckedUpdateManyWithoutTorneioNestedInput
    equipesAmador?: EquipeAmadorUncheckedUpdateManyWithoutTorneioNestedInput
    ParticipacaoAmador?: ParticipacaoAmadorUncheckedUpdateManyWithoutTorneioNestedInput
  }

  export type AtletaEquipeOficialUpsertWithWhereUniqueWithoutEquipeOficialInput = {
    where: AtletaEquipeOficialWhereUniqueInput
    update: XOR<AtletaEquipeOficialUpdateWithoutEquipeOficialInput, AtletaEquipeOficialUncheckedUpdateWithoutEquipeOficialInput>
    create: XOR<AtletaEquipeOficialCreateWithoutEquipeOficialInput, AtletaEquipeOficialUncheckedCreateWithoutEquipeOficialInput>
  }

  export type AtletaEquipeOficialUpdateWithWhereUniqueWithoutEquipeOficialInput = {
    where: AtletaEquipeOficialWhereUniqueInput
    data: XOR<AtletaEquipeOficialUpdateWithoutEquipeOficialInput, AtletaEquipeOficialUncheckedUpdateWithoutEquipeOficialInput>
  }

  export type AtletaEquipeOficialUpdateManyWithWhereWithoutEquipeOficialInput = {
    where: AtletaEquipeOficialScalarWhereInput
    data: XOR<AtletaEquipeOficialUpdateManyMutationInput, AtletaEquipeOficialUncheckedUpdateManyWithoutEquipeOficialInput>
  }

  export type PartidaUpsertWithWhereUniqueWithoutEquipeOficial1Input = {
    where: PartidaWhereUniqueInput
    update: XOR<PartidaUpdateWithoutEquipeOficial1Input, PartidaUncheckedUpdateWithoutEquipeOficial1Input>
    create: XOR<PartidaCreateWithoutEquipeOficial1Input, PartidaUncheckedCreateWithoutEquipeOficial1Input>
  }

  export type PartidaUpdateWithWhereUniqueWithoutEquipeOficial1Input = {
    where: PartidaWhereUniqueInput
    data: XOR<PartidaUpdateWithoutEquipeOficial1Input, PartidaUncheckedUpdateWithoutEquipeOficial1Input>
  }

  export type PartidaUpdateManyWithWhereWithoutEquipeOficial1Input = {
    where: PartidaScalarWhereInput
    data: XOR<PartidaUpdateManyMutationInput, PartidaUncheckedUpdateManyWithoutEquipeOficial1Input>
  }

  export type PartidaUpsertWithWhereUniqueWithoutEquipeOficial2Input = {
    where: PartidaWhereUniqueInput
    update: XOR<PartidaUpdateWithoutEquipeOficial2Input, PartidaUncheckedUpdateWithoutEquipeOficial2Input>
    create: XOR<PartidaCreateWithoutEquipeOficial2Input, PartidaUncheckedCreateWithoutEquipeOficial2Input>
  }

  export type PartidaUpdateWithWhereUniqueWithoutEquipeOficial2Input = {
    where: PartidaWhereUniqueInput
    data: XOR<PartidaUpdateWithoutEquipeOficial2Input, PartidaUncheckedUpdateWithoutEquipeOficial2Input>
  }

  export type PartidaUpdateManyWithWhereWithoutEquipeOficial2Input = {
    where: PartidaScalarWhereInput
    data: XOR<PartidaUpdateManyMutationInput, PartidaUncheckedUpdateManyWithoutEquipeOficial2Input>
  }

  export type AtletaCreateWithoutEquipesOficiaisInput = {
    nome: string
    email: string
    genero: string
    nivel?: string | null
    usuario?: UsuarioCreateNestedOneWithoutAtletaInput
    participacoesAmador?: ParticipacaoAmadorCreateNestedManyWithoutAtletaInput
    EquipeAmador?: EquipeAmadorCreateNestedManyWithoutMembrosInput
  }

  export type AtletaUncheckedCreateWithoutEquipesOficiaisInput = {
    id?: number
    nome: string
    email: string
    genero: string
    nivel?: string | null
    usuarioId?: number | null
    participacoesAmador?: ParticipacaoAmadorUncheckedCreateNestedManyWithoutAtletaInput
    EquipeAmador?: EquipeAmadorUncheckedCreateNestedManyWithoutMembrosInput
  }

  export type AtletaCreateOrConnectWithoutEquipesOficiaisInput = {
    where: AtletaWhereUniqueInput
    create: XOR<AtletaCreateWithoutEquipesOficiaisInput, AtletaUncheckedCreateWithoutEquipesOficiaisInput>
  }

  export type EquipeOficialCreateWithoutMembrosInput = {
    nome: string
    tipo: string
    createdAt?: Date | string
    torneio: TorneioCreateNestedOneWithoutEquipesOficialInput
    partidasComoEquipeOficial1?: PartidaCreateNestedManyWithoutEquipeOficial1Input
    partidasComoEquipeOficial2?: PartidaCreateNestedManyWithoutEquipeOficial2Input
  }

  export type EquipeOficialUncheckedCreateWithoutMembrosInput = {
    id?: number
    nome: string
    tipo: string
    createdAt?: Date | string
    torneioId: number
    partidasComoEquipeOficial1?: PartidaUncheckedCreateNestedManyWithoutEquipeOficial1Input
    partidasComoEquipeOficial2?: PartidaUncheckedCreateNestedManyWithoutEquipeOficial2Input
  }

  export type EquipeOficialCreateOrConnectWithoutMembrosInput = {
    where: EquipeOficialWhereUniqueInput
    create: XOR<EquipeOficialCreateWithoutMembrosInput, EquipeOficialUncheckedCreateWithoutMembrosInput>
  }

  export type AtletaUpsertWithoutEquipesOficiaisInput = {
    update: XOR<AtletaUpdateWithoutEquipesOficiaisInput, AtletaUncheckedUpdateWithoutEquipesOficiaisInput>
    create: XOR<AtletaCreateWithoutEquipesOficiaisInput, AtletaUncheckedCreateWithoutEquipesOficiaisInput>
    where?: AtletaWhereInput
  }

  export type AtletaUpdateToOneWithWhereWithoutEquipesOficiaisInput = {
    where?: AtletaWhereInput
    data: XOR<AtletaUpdateWithoutEquipesOficiaisInput, AtletaUncheckedUpdateWithoutEquipesOficiaisInput>
  }

  export type AtletaUpdateWithoutEquipesOficiaisInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    nivel?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneWithoutAtletaNestedInput
    participacoesAmador?: ParticipacaoAmadorUpdateManyWithoutAtletaNestedInput
    EquipeAmador?: EquipeAmadorUpdateManyWithoutMembrosNestedInput
  }

  export type AtletaUncheckedUpdateWithoutEquipesOficiaisInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    nivel?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
    participacoesAmador?: ParticipacaoAmadorUncheckedUpdateManyWithoutAtletaNestedInput
    EquipeAmador?: EquipeAmadorUncheckedUpdateManyWithoutMembrosNestedInput
  }

  export type EquipeOficialUpsertWithoutMembrosInput = {
    update: XOR<EquipeOficialUpdateWithoutMembrosInput, EquipeOficialUncheckedUpdateWithoutMembrosInput>
    create: XOR<EquipeOficialCreateWithoutMembrosInput, EquipeOficialUncheckedCreateWithoutMembrosInput>
    where?: EquipeOficialWhereInput
  }

  export type EquipeOficialUpdateToOneWithWhereWithoutMembrosInput = {
    where?: EquipeOficialWhereInput
    data: XOR<EquipeOficialUpdateWithoutMembrosInput, EquipeOficialUncheckedUpdateWithoutMembrosInput>
  }

  export type EquipeOficialUpdateWithoutMembrosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    torneio?: TorneioUpdateOneRequiredWithoutEquipesOficialNestedInput
    partidasComoEquipeOficial1?: PartidaUpdateManyWithoutEquipeOficial1NestedInput
    partidasComoEquipeOficial2?: PartidaUpdateManyWithoutEquipeOficial2NestedInput
  }

  export type EquipeOficialUncheckedUpdateWithoutMembrosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    torneioId?: IntFieldUpdateOperationsInput | number
    partidasComoEquipeOficial1?: PartidaUncheckedUpdateManyWithoutEquipeOficial1NestedInput
    partidasComoEquipeOficial2?: PartidaUncheckedUpdateManyWithoutEquipeOficial2NestedInput
  }

  export type TorneioCreateWithoutPartidaInput = {
    nome: string
    tipo: $Enums.TipoTorneio
    data: Date | string
    local?: string | null
    status?: $Enums.StatusTorneio
    createdAt?: Date | string
    updatedAt?: Date | string
    criadoPor: UsuarioCreateNestedOneWithoutTorneioInput
    equipesAmador?: EquipeAmadorCreateNestedManyWithoutTorneioInput
    equipesOficial?: EquipeOficialCreateNestedManyWithoutTorneioInput
    ParticipacaoAmador?: ParticipacaoAmadorCreateNestedManyWithoutTorneioInput
  }

  export type TorneioUncheckedCreateWithoutPartidaInput = {
    id?: number
    nome: string
    tipo: $Enums.TipoTorneio
    data: Date | string
    local?: string | null
    status?: $Enums.StatusTorneio
    criadoPorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    equipesAmador?: EquipeAmadorUncheckedCreateNestedManyWithoutTorneioInput
    equipesOficial?: EquipeOficialUncheckedCreateNestedManyWithoutTorneioInput
    ParticipacaoAmador?: ParticipacaoAmadorUncheckedCreateNestedManyWithoutTorneioInput
  }

  export type TorneioCreateOrConnectWithoutPartidaInput = {
    where: TorneioWhereUniqueInput
    create: XOR<TorneioCreateWithoutPartidaInput, TorneioUncheckedCreateWithoutPartidaInput>
  }

  export type EquipeAmadorCreateWithoutPartidasComoEquipe1Input = {
    nome: string
    tipo: string
    torneio: TorneioCreateNestedOneWithoutEquipesAmadorInput
    membros?: AtletaCreateNestedManyWithoutEquipeAmadorInput
    partidasComoEquipe2?: PartidaCreateNestedManyWithoutEquipeAmador2Input
  }

  export type EquipeAmadorUncheckedCreateWithoutPartidasComoEquipe1Input = {
    id?: number
    nome: string
    tipo: string
    torneioId: number
    membros?: AtletaUncheckedCreateNestedManyWithoutEquipeAmadorInput
    partidasComoEquipe2?: PartidaUncheckedCreateNestedManyWithoutEquipeAmador2Input
  }

  export type EquipeAmadorCreateOrConnectWithoutPartidasComoEquipe1Input = {
    where: EquipeAmadorWhereUniqueInput
    create: XOR<EquipeAmadorCreateWithoutPartidasComoEquipe1Input, EquipeAmadorUncheckedCreateWithoutPartidasComoEquipe1Input>
  }

  export type EquipeAmadorCreateWithoutPartidasComoEquipe2Input = {
    nome: string
    tipo: string
    torneio: TorneioCreateNestedOneWithoutEquipesAmadorInput
    membros?: AtletaCreateNestedManyWithoutEquipeAmadorInput
    partidasComoEquipe1?: PartidaCreateNestedManyWithoutEquipeAmador1Input
  }

  export type EquipeAmadorUncheckedCreateWithoutPartidasComoEquipe2Input = {
    id?: number
    nome: string
    tipo: string
    torneioId: number
    membros?: AtletaUncheckedCreateNestedManyWithoutEquipeAmadorInput
    partidasComoEquipe1?: PartidaUncheckedCreateNestedManyWithoutEquipeAmador1Input
  }

  export type EquipeAmadorCreateOrConnectWithoutPartidasComoEquipe2Input = {
    where: EquipeAmadorWhereUniqueInput
    create: XOR<EquipeAmadorCreateWithoutPartidasComoEquipe2Input, EquipeAmadorUncheckedCreateWithoutPartidasComoEquipe2Input>
  }

  export type EquipeOficialCreateWithoutPartidasComoEquipeOficial1Input = {
    nome: string
    tipo: string
    createdAt?: Date | string
    torneio: TorneioCreateNestedOneWithoutEquipesOficialInput
    membros?: AtletaEquipeOficialCreateNestedManyWithoutEquipeOficialInput
    partidasComoEquipeOficial2?: PartidaCreateNestedManyWithoutEquipeOficial2Input
  }

  export type EquipeOficialUncheckedCreateWithoutPartidasComoEquipeOficial1Input = {
    id?: number
    nome: string
    tipo: string
    createdAt?: Date | string
    torneioId: number
    membros?: AtletaEquipeOficialUncheckedCreateNestedManyWithoutEquipeOficialInput
    partidasComoEquipeOficial2?: PartidaUncheckedCreateNestedManyWithoutEquipeOficial2Input
  }

  export type EquipeOficialCreateOrConnectWithoutPartidasComoEquipeOficial1Input = {
    where: EquipeOficialWhereUniqueInput
    create: XOR<EquipeOficialCreateWithoutPartidasComoEquipeOficial1Input, EquipeOficialUncheckedCreateWithoutPartidasComoEquipeOficial1Input>
  }

  export type EquipeOficialCreateWithoutPartidasComoEquipeOficial2Input = {
    nome: string
    tipo: string
    createdAt?: Date | string
    torneio: TorneioCreateNestedOneWithoutEquipesOficialInput
    membros?: AtletaEquipeOficialCreateNestedManyWithoutEquipeOficialInput
    partidasComoEquipeOficial1?: PartidaCreateNestedManyWithoutEquipeOficial1Input
  }

  export type EquipeOficialUncheckedCreateWithoutPartidasComoEquipeOficial2Input = {
    id?: number
    nome: string
    tipo: string
    createdAt?: Date | string
    torneioId: number
    membros?: AtletaEquipeOficialUncheckedCreateNestedManyWithoutEquipeOficialInput
    partidasComoEquipeOficial1?: PartidaUncheckedCreateNestedManyWithoutEquipeOficial1Input
  }

  export type EquipeOficialCreateOrConnectWithoutPartidasComoEquipeOficial2Input = {
    where: EquipeOficialWhereUniqueInput
    create: XOR<EquipeOficialCreateWithoutPartidasComoEquipeOficial2Input, EquipeOficialUncheckedCreateWithoutPartidasComoEquipeOficial2Input>
  }

  export type TorneioUpsertWithoutPartidaInput = {
    update: XOR<TorneioUpdateWithoutPartidaInput, TorneioUncheckedUpdateWithoutPartidaInput>
    create: XOR<TorneioCreateWithoutPartidaInput, TorneioUncheckedCreateWithoutPartidaInput>
    where?: TorneioWhereInput
  }

  export type TorneioUpdateToOneWithWhereWithoutPartidaInput = {
    where?: TorneioWhereInput
    data: XOR<TorneioUpdateWithoutPartidaInput, TorneioUncheckedUpdateWithoutPartidaInput>
  }

  export type TorneioUpdateWithoutPartidaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoTorneioFieldUpdateOperationsInput | $Enums.TipoTorneio
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTorneioFieldUpdateOperationsInput | $Enums.StatusTorneio
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: UsuarioUpdateOneRequiredWithoutTorneioNestedInput
    equipesAmador?: EquipeAmadorUpdateManyWithoutTorneioNestedInput
    equipesOficial?: EquipeOficialUpdateManyWithoutTorneioNestedInput
    ParticipacaoAmador?: ParticipacaoAmadorUpdateManyWithoutTorneioNestedInput
  }

  export type TorneioUncheckedUpdateWithoutPartidaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoTorneioFieldUpdateOperationsInput | $Enums.TipoTorneio
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTorneioFieldUpdateOperationsInput | $Enums.StatusTorneio
    criadoPorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipesAmador?: EquipeAmadorUncheckedUpdateManyWithoutTorneioNestedInput
    equipesOficial?: EquipeOficialUncheckedUpdateManyWithoutTorneioNestedInput
    ParticipacaoAmador?: ParticipacaoAmadorUncheckedUpdateManyWithoutTorneioNestedInput
  }

  export type EquipeAmadorUpsertWithoutPartidasComoEquipe1Input = {
    update: XOR<EquipeAmadorUpdateWithoutPartidasComoEquipe1Input, EquipeAmadorUncheckedUpdateWithoutPartidasComoEquipe1Input>
    create: XOR<EquipeAmadorCreateWithoutPartidasComoEquipe1Input, EquipeAmadorUncheckedCreateWithoutPartidasComoEquipe1Input>
    where?: EquipeAmadorWhereInput
  }

  export type EquipeAmadorUpdateToOneWithWhereWithoutPartidasComoEquipe1Input = {
    where?: EquipeAmadorWhereInput
    data: XOR<EquipeAmadorUpdateWithoutPartidasComoEquipe1Input, EquipeAmadorUncheckedUpdateWithoutPartidasComoEquipe1Input>
  }

  export type EquipeAmadorUpdateWithoutPartidasComoEquipe1Input = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    torneio?: TorneioUpdateOneRequiredWithoutEquipesAmadorNestedInput
    membros?: AtletaUpdateManyWithoutEquipeAmadorNestedInput
    partidasComoEquipe2?: PartidaUpdateManyWithoutEquipeAmador2NestedInput
  }

  export type EquipeAmadorUncheckedUpdateWithoutPartidasComoEquipe1Input = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    torneioId?: IntFieldUpdateOperationsInput | number
    membros?: AtletaUncheckedUpdateManyWithoutEquipeAmadorNestedInput
    partidasComoEquipe2?: PartidaUncheckedUpdateManyWithoutEquipeAmador2NestedInput
  }

  export type EquipeAmadorUpsertWithoutPartidasComoEquipe2Input = {
    update: XOR<EquipeAmadorUpdateWithoutPartidasComoEquipe2Input, EquipeAmadorUncheckedUpdateWithoutPartidasComoEquipe2Input>
    create: XOR<EquipeAmadorCreateWithoutPartidasComoEquipe2Input, EquipeAmadorUncheckedCreateWithoutPartidasComoEquipe2Input>
    where?: EquipeAmadorWhereInput
  }

  export type EquipeAmadorUpdateToOneWithWhereWithoutPartidasComoEquipe2Input = {
    where?: EquipeAmadorWhereInput
    data: XOR<EquipeAmadorUpdateWithoutPartidasComoEquipe2Input, EquipeAmadorUncheckedUpdateWithoutPartidasComoEquipe2Input>
  }

  export type EquipeAmadorUpdateWithoutPartidasComoEquipe2Input = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    torneio?: TorneioUpdateOneRequiredWithoutEquipesAmadorNestedInput
    membros?: AtletaUpdateManyWithoutEquipeAmadorNestedInput
    partidasComoEquipe1?: PartidaUpdateManyWithoutEquipeAmador1NestedInput
  }

  export type EquipeAmadorUncheckedUpdateWithoutPartidasComoEquipe2Input = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    torneioId?: IntFieldUpdateOperationsInput | number
    membros?: AtletaUncheckedUpdateManyWithoutEquipeAmadorNestedInput
    partidasComoEquipe1?: PartidaUncheckedUpdateManyWithoutEquipeAmador1NestedInput
  }

  export type EquipeOficialUpsertWithoutPartidasComoEquipeOficial1Input = {
    update: XOR<EquipeOficialUpdateWithoutPartidasComoEquipeOficial1Input, EquipeOficialUncheckedUpdateWithoutPartidasComoEquipeOficial1Input>
    create: XOR<EquipeOficialCreateWithoutPartidasComoEquipeOficial1Input, EquipeOficialUncheckedCreateWithoutPartidasComoEquipeOficial1Input>
    where?: EquipeOficialWhereInput
  }

  export type EquipeOficialUpdateToOneWithWhereWithoutPartidasComoEquipeOficial1Input = {
    where?: EquipeOficialWhereInput
    data: XOR<EquipeOficialUpdateWithoutPartidasComoEquipeOficial1Input, EquipeOficialUncheckedUpdateWithoutPartidasComoEquipeOficial1Input>
  }

  export type EquipeOficialUpdateWithoutPartidasComoEquipeOficial1Input = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    torneio?: TorneioUpdateOneRequiredWithoutEquipesOficialNestedInput
    membros?: AtletaEquipeOficialUpdateManyWithoutEquipeOficialNestedInput
    partidasComoEquipeOficial2?: PartidaUpdateManyWithoutEquipeOficial2NestedInput
  }

  export type EquipeOficialUncheckedUpdateWithoutPartidasComoEquipeOficial1Input = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    torneioId?: IntFieldUpdateOperationsInput | number
    membros?: AtletaEquipeOficialUncheckedUpdateManyWithoutEquipeOficialNestedInput
    partidasComoEquipeOficial2?: PartidaUncheckedUpdateManyWithoutEquipeOficial2NestedInput
  }

  export type EquipeOficialUpsertWithoutPartidasComoEquipeOficial2Input = {
    update: XOR<EquipeOficialUpdateWithoutPartidasComoEquipeOficial2Input, EquipeOficialUncheckedUpdateWithoutPartidasComoEquipeOficial2Input>
    create: XOR<EquipeOficialCreateWithoutPartidasComoEquipeOficial2Input, EquipeOficialUncheckedCreateWithoutPartidasComoEquipeOficial2Input>
    where?: EquipeOficialWhereInput
  }

  export type EquipeOficialUpdateToOneWithWhereWithoutPartidasComoEquipeOficial2Input = {
    where?: EquipeOficialWhereInput
    data: XOR<EquipeOficialUpdateWithoutPartidasComoEquipeOficial2Input, EquipeOficialUncheckedUpdateWithoutPartidasComoEquipeOficial2Input>
  }

  export type EquipeOficialUpdateWithoutPartidasComoEquipeOficial2Input = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    torneio?: TorneioUpdateOneRequiredWithoutEquipesOficialNestedInput
    membros?: AtletaEquipeOficialUpdateManyWithoutEquipeOficialNestedInput
    partidasComoEquipeOficial1?: PartidaUpdateManyWithoutEquipeOficial1NestedInput
  }

  export type EquipeOficialUncheckedUpdateWithoutPartidasComoEquipeOficial2Input = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    torneioId?: IntFieldUpdateOperationsInput | number
    membros?: AtletaEquipeOficialUncheckedUpdateManyWithoutEquipeOficialNestedInput
    partidasComoEquipeOficial1?: PartidaUncheckedUpdateManyWithoutEquipeOficial1NestedInput
  }

  export type TorneioCreateManyCriadoPorInput = {
    id?: number
    nome: string
    tipo: $Enums.TipoTorneio
    data: Date | string
    local?: string | null
    status?: $Enums.StatusTorneio
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TreinadorCreateManyUsuarioInput = {
    id?: number
    nome: string
    email: string
  }

  export type TorneioUpdateWithoutCriadoPorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoTorneioFieldUpdateOperationsInput | $Enums.TipoTorneio
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTorneioFieldUpdateOperationsInput | $Enums.StatusTorneio
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Partida?: PartidaUpdateManyWithoutTorneioNestedInput
    equipesAmador?: EquipeAmadorUpdateManyWithoutTorneioNestedInput
    equipesOficial?: EquipeOficialUpdateManyWithoutTorneioNestedInput
    ParticipacaoAmador?: ParticipacaoAmadorUpdateManyWithoutTorneioNestedInput
  }

  export type TorneioUncheckedUpdateWithoutCriadoPorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoTorneioFieldUpdateOperationsInput | $Enums.TipoTorneio
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTorneioFieldUpdateOperationsInput | $Enums.StatusTorneio
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Partida?: PartidaUncheckedUpdateManyWithoutTorneioNestedInput
    equipesAmador?: EquipeAmadorUncheckedUpdateManyWithoutTorneioNestedInput
    equipesOficial?: EquipeOficialUncheckedUpdateManyWithoutTorneioNestedInput
    ParticipacaoAmador?: ParticipacaoAmadorUncheckedUpdateManyWithoutTorneioNestedInput
  }

  export type TorneioUncheckedUpdateManyWithoutCriadoPorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoTorneioFieldUpdateOperationsInput | $Enums.TipoTorneio
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTorneioFieldUpdateOperationsInput | $Enums.StatusTorneio
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TreinadorUpdateWithoutUsuarioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type TreinadorUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type TreinadorUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type ParticipacaoAmadorCreateManyAtletaInput = {
    id?: number
    torneioId: number
    criadoEm?: Date | string
  }

  export type AtletaEquipeOficialCreateManyAtletaInput = {
    equipeOficialId: number
  }

  export type ParticipacaoAmadorUpdateWithoutAtletaInput = {
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    torneio?: TorneioUpdateOneRequiredWithoutParticipacaoAmadorNestedInput
  }

  export type ParticipacaoAmadorUncheckedUpdateWithoutAtletaInput = {
    id?: IntFieldUpdateOperationsInput | number
    torneioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipacaoAmadorUncheckedUpdateManyWithoutAtletaInput = {
    id?: IntFieldUpdateOperationsInput | number
    torneioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtletaEquipeOficialUpdateWithoutAtletaInput = {
    equipeOficial?: EquipeOficialUpdateOneRequiredWithoutMembrosNestedInput
  }

  export type AtletaEquipeOficialUncheckedUpdateWithoutAtletaInput = {
    equipeOficialId?: IntFieldUpdateOperationsInput | number
  }

  export type AtletaEquipeOficialUncheckedUpdateManyWithoutAtletaInput = {
    equipeOficialId?: IntFieldUpdateOperationsInput | number
  }

  export type EquipeAmadorUpdateWithoutMembrosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    torneio?: TorneioUpdateOneRequiredWithoutEquipesAmadorNestedInput
    partidasComoEquipe1?: PartidaUpdateManyWithoutEquipeAmador1NestedInput
    partidasComoEquipe2?: PartidaUpdateManyWithoutEquipeAmador2NestedInput
  }

  export type EquipeAmadorUncheckedUpdateWithoutMembrosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    torneioId?: IntFieldUpdateOperationsInput | number
    partidasComoEquipe1?: PartidaUncheckedUpdateManyWithoutEquipeAmador1NestedInput
    partidasComoEquipe2?: PartidaUncheckedUpdateManyWithoutEquipeAmador2NestedInput
  }

  export type EquipeAmadorUncheckedUpdateManyWithoutMembrosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    torneioId?: IntFieldUpdateOperationsInput | number
  }

  export type PartidaCreateManyTorneioInput = {
    id?: number
    fase: string
    equipeAmador1Id?: number | null
    equipeAmador2Id?: number | null
    equipeOficial1Id?: number | null
    equipeOficial2Id?: number | null
    pontosEquipe1?: number | null
    pontosEquipe2?: number | null
    vencedorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EquipeAmadorCreateManyTorneioInput = {
    id?: number
    nome: string
    tipo: string
  }

  export type EquipeOficialCreateManyTorneioInput = {
    id?: number
    nome: string
    tipo: string
    createdAt?: Date | string
  }

  export type ParticipacaoAmadorCreateManyTorneioInput = {
    id?: number
    atletaId: number
    criadoEm?: Date | string
  }

  export type PartidaUpdateWithoutTorneioInput = {
    fase?: StringFieldUpdateOperationsInput | string
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    vencedorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipeAmador1?: EquipeAmadorUpdateOneWithoutPartidasComoEquipe1NestedInput
    equipeAmador2?: EquipeAmadorUpdateOneWithoutPartidasComoEquipe2NestedInput
    equipeOficial1?: EquipeOficialUpdateOneWithoutPartidasComoEquipeOficial1NestedInput
    equipeOficial2?: EquipeOficialUpdateOneWithoutPartidasComoEquipeOficial2NestedInput
  }

  export type PartidaUncheckedUpdateWithoutTorneioInput = {
    id?: IntFieldUpdateOperationsInput | number
    fase?: StringFieldUpdateOperationsInput | string
    equipeAmador1Id?: NullableIntFieldUpdateOperationsInput | number | null
    equipeAmador2Id?: NullableIntFieldUpdateOperationsInput | number | null
    equipeOficial1Id?: NullableIntFieldUpdateOperationsInput | number | null
    equipeOficial2Id?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    vencedorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartidaUncheckedUpdateManyWithoutTorneioInput = {
    id?: IntFieldUpdateOperationsInput | number
    fase?: StringFieldUpdateOperationsInput | string
    equipeAmador1Id?: NullableIntFieldUpdateOperationsInput | number | null
    equipeAmador2Id?: NullableIntFieldUpdateOperationsInput | number | null
    equipeOficial1Id?: NullableIntFieldUpdateOperationsInput | number | null
    equipeOficial2Id?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    vencedorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipeAmadorUpdateWithoutTorneioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    membros?: AtletaUpdateManyWithoutEquipeAmadorNestedInput
    partidasComoEquipe1?: PartidaUpdateManyWithoutEquipeAmador1NestedInput
    partidasComoEquipe2?: PartidaUpdateManyWithoutEquipeAmador2NestedInput
  }

  export type EquipeAmadorUncheckedUpdateWithoutTorneioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    membros?: AtletaUncheckedUpdateManyWithoutEquipeAmadorNestedInput
    partidasComoEquipe1?: PartidaUncheckedUpdateManyWithoutEquipeAmador1NestedInput
    partidasComoEquipe2?: PartidaUncheckedUpdateManyWithoutEquipeAmador2NestedInput
  }

  export type EquipeAmadorUncheckedUpdateManyWithoutTorneioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type EquipeOficialUpdateWithoutTorneioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    membros?: AtletaEquipeOficialUpdateManyWithoutEquipeOficialNestedInput
    partidasComoEquipeOficial1?: PartidaUpdateManyWithoutEquipeOficial1NestedInput
    partidasComoEquipeOficial2?: PartidaUpdateManyWithoutEquipeOficial2NestedInput
  }

  export type EquipeOficialUncheckedUpdateWithoutTorneioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    membros?: AtletaEquipeOficialUncheckedUpdateManyWithoutEquipeOficialNestedInput
    partidasComoEquipeOficial1?: PartidaUncheckedUpdateManyWithoutEquipeOficial1NestedInput
    partidasComoEquipeOficial2?: PartidaUncheckedUpdateManyWithoutEquipeOficial2NestedInput
  }

  export type EquipeOficialUncheckedUpdateManyWithoutTorneioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipacaoAmadorUpdateWithoutTorneioInput = {
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atleta?: AtletaUpdateOneRequiredWithoutParticipacoesAmadorNestedInput
  }

  export type ParticipacaoAmadorUncheckedUpdateWithoutTorneioInput = {
    id?: IntFieldUpdateOperationsInput | number
    atletaId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipacaoAmadorUncheckedUpdateManyWithoutTorneioInput = {
    id?: IntFieldUpdateOperationsInput | number
    atletaId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartidaCreateManyEquipeAmador1Input = {
    id?: number
    torneioId: number
    fase: string
    equipeAmador2Id?: number | null
    equipeOficial1Id?: number | null
    equipeOficial2Id?: number | null
    pontosEquipe1?: number | null
    pontosEquipe2?: number | null
    vencedorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartidaCreateManyEquipeAmador2Input = {
    id?: number
    torneioId: number
    fase: string
    equipeAmador1Id?: number | null
    equipeOficial1Id?: number | null
    equipeOficial2Id?: number | null
    pontosEquipe1?: number | null
    pontosEquipe2?: number | null
    vencedorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AtletaUpdateWithoutEquipeAmadorInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    nivel?: NullableStringFieldUpdateOperationsInput | string | null
    usuario?: UsuarioUpdateOneWithoutAtletaNestedInput
    participacoesAmador?: ParticipacaoAmadorUpdateManyWithoutAtletaNestedInput
    equipesOficiais?: AtletaEquipeOficialUpdateManyWithoutAtletaNestedInput
  }

  export type AtletaUncheckedUpdateWithoutEquipeAmadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    nivel?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
    participacoesAmador?: ParticipacaoAmadorUncheckedUpdateManyWithoutAtletaNestedInput
    equipesOficiais?: AtletaEquipeOficialUncheckedUpdateManyWithoutAtletaNestedInput
  }

  export type AtletaUncheckedUpdateManyWithoutEquipeAmadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    nivel?: NullableStringFieldUpdateOperationsInput | string | null
    usuarioId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PartidaUpdateWithoutEquipeAmador1Input = {
    fase?: StringFieldUpdateOperationsInput | string
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    vencedorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    torneio?: TorneioUpdateOneRequiredWithoutPartidaNestedInput
    equipeAmador2?: EquipeAmadorUpdateOneWithoutPartidasComoEquipe2NestedInput
    equipeOficial1?: EquipeOficialUpdateOneWithoutPartidasComoEquipeOficial1NestedInput
    equipeOficial2?: EquipeOficialUpdateOneWithoutPartidasComoEquipeOficial2NestedInput
  }

  export type PartidaUncheckedUpdateWithoutEquipeAmador1Input = {
    id?: IntFieldUpdateOperationsInput | number
    torneioId?: IntFieldUpdateOperationsInput | number
    fase?: StringFieldUpdateOperationsInput | string
    equipeAmador2Id?: NullableIntFieldUpdateOperationsInput | number | null
    equipeOficial1Id?: NullableIntFieldUpdateOperationsInput | number | null
    equipeOficial2Id?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    vencedorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartidaUncheckedUpdateManyWithoutEquipeAmador1Input = {
    id?: IntFieldUpdateOperationsInput | number
    torneioId?: IntFieldUpdateOperationsInput | number
    fase?: StringFieldUpdateOperationsInput | string
    equipeAmador2Id?: NullableIntFieldUpdateOperationsInput | number | null
    equipeOficial1Id?: NullableIntFieldUpdateOperationsInput | number | null
    equipeOficial2Id?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    vencedorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartidaUpdateWithoutEquipeAmador2Input = {
    fase?: StringFieldUpdateOperationsInput | string
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    vencedorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    torneio?: TorneioUpdateOneRequiredWithoutPartidaNestedInput
    equipeAmador1?: EquipeAmadorUpdateOneWithoutPartidasComoEquipe1NestedInput
    equipeOficial1?: EquipeOficialUpdateOneWithoutPartidasComoEquipeOficial1NestedInput
    equipeOficial2?: EquipeOficialUpdateOneWithoutPartidasComoEquipeOficial2NestedInput
  }

  export type PartidaUncheckedUpdateWithoutEquipeAmador2Input = {
    id?: IntFieldUpdateOperationsInput | number
    torneioId?: IntFieldUpdateOperationsInput | number
    fase?: StringFieldUpdateOperationsInput | string
    equipeAmador1Id?: NullableIntFieldUpdateOperationsInput | number | null
    equipeOficial1Id?: NullableIntFieldUpdateOperationsInput | number | null
    equipeOficial2Id?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    vencedorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartidaUncheckedUpdateManyWithoutEquipeAmador2Input = {
    id?: IntFieldUpdateOperationsInput | number
    torneioId?: IntFieldUpdateOperationsInput | number
    fase?: StringFieldUpdateOperationsInput | string
    equipeAmador1Id?: NullableIntFieldUpdateOperationsInput | number | null
    equipeOficial1Id?: NullableIntFieldUpdateOperationsInput | number | null
    equipeOficial2Id?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    vencedorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AtletaEquipeOficialCreateManyEquipeOficialInput = {
    atletaId: number
  }

  export type PartidaCreateManyEquipeOficial1Input = {
    id?: number
    torneioId: number
    fase: string
    equipeAmador1Id?: number | null
    equipeAmador2Id?: number | null
    equipeOficial2Id?: number | null
    pontosEquipe1?: number | null
    pontosEquipe2?: number | null
    vencedorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PartidaCreateManyEquipeOficial2Input = {
    id?: number
    torneioId: number
    fase: string
    equipeAmador1Id?: number | null
    equipeAmador2Id?: number | null
    equipeOficial1Id?: number | null
    pontosEquipe1?: number | null
    pontosEquipe2?: number | null
    vencedorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AtletaEquipeOficialUpdateWithoutEquipeOficialInput = {
    atleta?: AtletaUpdateOneRequiredWithoutEquipesOficiaisNestedInput
  }

  export type AtletaEquipeOficialUncheckedUpdateWithoutEquipeOficialInput = {
    atletaId?: IntFieldUpdateOperationsInput | number
  }

  export type AtletaEquipeOficialUncheckedUpdateManyWithoutEquipeOficialInput = {
    atletaId?: IntFieldUpdateOperationsInput | number
  }

  export type PartidaUpdateWithoutEquipeOficial1Input = {
    fase?: StringFieldUpdateOperationsInput | string
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    vencedorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    torneio?: TorneioUpdateOneRequiredWithoutPartidaNestedInput
    equipeAmador1?: EquipeAmadorUpdateOneWithoutPartidasComoEquipe1NestedInput
    equipeAmador2?: EquipeAmadorUpdateOneWithoutPartidasComoEquipe2NestedInput
    equipeOficial2?: EquipeOficialUpdateOneWithoutPartidasComoEquipeOficial2NestedInput
  }

  export type PartidaUncheckedUpdateWithoutEquipeOficial1Input = {
    id?: IntFieldUpdateOperationsInput | number
    torneioId?: IntFieldUpdateOperationsInput | number
    fase?: StringFieldUpdateOperationsInput | string
    equipeAmador1Id?: NullableIntFieldUpdateOperationsInput | number | null
    equipeAmador2Id?: NullableIntFieldUpdateOperationsInput | number | null
    equipeOficial2Id?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    vencedorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartidaUncheckedUpdateManyWithoutEquipeOficial1Input = {
    id?: IntFieldUpdateOperationsInput | number
    torneioId?: IntFieldUpdateOperationsInput | number
    fase?: StringFieldUpdateOperationsInput | string
    equipeAmador1Id?: NullableIntFieldUpdateOperationsInput | number | null
    equipeAmador2Id?: NullableIntFieldUpdateOperationsInput | number | null
    equipeOficial2Id?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    vencedorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartidaUpdateWithoutEquipeOficial2Input = {
    fase?: StringFieldUpdateOperationsInput | string
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    vencedorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    torneio?: TorneioUpdateOneRequiredWithoutPartidaNestedInput
    equipeAmador1?: EquipeAmadorUpdateOneWithoutPartidasComoEquipe1NestedInput
    equipeAmador2?: EquipeAmadorUpdateOneWithoutPartidasComoEquipe2NestedInput
    equipeOficial1?: EquipeOficialUpdateOneWithoutPartidasComoEquipeOficial1NestedInput
  }

  export type PartidaUncheckedUpdateWithoutEquipeOficial2Input = {
    id?: IntFieldUpdateOperationsInput | number
    torneioId?: IntFieldUpdateOperationsInput | number
    fase?: StringFieldUpdateOperationsInput | string
    equipeAmador1Id?: NullableIntFieldUpdateOperationsInput | number | null
    equipeAmador2Id?: NullableIntFieldUpdateOperationsInput | number | null
    equipeOficial1Id?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    vencedorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartidaUncheckedUpdateManyWithoutEquipeOficial2Input = {
    id?: IntFieldUpdateOperationsInput | number
    torneioId?: IntFieldUpdateOperationsInput | number
    fase?: StringFieldUpdateOperationsInput | string
    equipeAmador1Id?: NullableIntFieldUpdateOperationsInput | number | null
    equipeAmador2Id?: NullableIntFieldUpdateOperationsInput | number | null
    equipeOficial1Id?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    vencedorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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