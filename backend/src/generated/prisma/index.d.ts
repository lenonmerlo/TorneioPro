
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
 * Model Participacao
 * 
 */
export type Participacao = $Result.DefaultSelection<Prisma.$ParticipacaoPayload>
/**
 * Model Equipe
 * 
 */
export type Equipe = $Result.DefaultSelection<Prisma.$EquipePayload>
/**
 * Model EquipeAtleta
 * 
 */
export type EquipeAtleta = $Result.DefaultSelection<Prisma.$EquipeAtletaPayload>
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


export const TipoEquipe: {
  individual: 'individual',
  dupla: 'dupla',
  trio: 'trio',
  quarteto: 'quarteto'
};

export type TipoEquipe = (typeof TipoEquipe)[keyof typeof TipoEquipe]

}

export type StatusTorneio = $Enums.StatusTorneio

export const StatusTorneio: typeof $Enums.StatusTorneio

export type TipoEquipe = $Enums.TipoEquipe

export const TipoEquipe: typeof $Enums.TipoEquipe

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
   * `prisma.participacao`: Exposes CRUD operations for the **Participacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Participacaos
    * const participacaos = await prisma.participacao.findMany()
    * ```
    */
  get participacao(): Prisma.ParticipacaoDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.equipeAtleta`: Exposes CRUD operations for the **EquipeAtleta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EquipeAtletas
    * const equipeAtletas = await prisma.equipeAtleta.findMany()
    * ```
    */
  get equipeAtleta(): Prisma.EquipeAtletaDelegate<ExtArgs, ClientOptions>;

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
    Participacao: 'Participacao',
    Equipe: 'Equipe',
    EquipeAtleta: 'EquipeAtleta',
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
      modelProps: "usuario" | "treinador" | "atleta" | "torneio" | "participacao" | "equipe" | "equipeAtleta" | "partida"
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
      Participacao: {
        payload: Prisma.$ParticipacaoPayload<ExtArgs>
        fields: Prisma.ParticipacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParticipacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParticipacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoPayload>
          }
          findFirst: {
            args: Prisma.ParticipacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParticipacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoPayload>
          }
          findMany: {
            args: Prisma.ParticipacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoPayload>[]
          }
          create: {
            args: Prisma.ParticipacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoPayload>
          }
          createMany: {
            args: Prisma.ParticipacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParticipacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoPayload>[]
          }
          delete: {
            args: Prisma.ParticipacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoPayload>
          }
          update: {
            args: Prisma.ParticipacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoPayload>
          }
          deleteMany: {
            args: Prisma.ParticipacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParticipacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParticipacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoPayload>[]
          }
          upsert: {
            args: Prisma.ParticipacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParticipacaoPayload>
          }
          aggregate: {
            args: Prisma.ParticipacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParticipacao>
          }
          groupBy: {
            args: Prisma.ParticipacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParticipacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParticipacaoCountArgs<ExtArgs>
            result: $Utils.Optional<ParticipacaoCountAggregateOutputType> | number
          }
        }
      }
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
      EquipeAtleta: {
        payload: Prisma.$EquipeAtletaPayload<ExtArgs>
        fields: Prisma.EquipeAtletaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EquipeAtletaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipeAtletaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EquipeAtletaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipeAtletaPayload>
          }
          findFirst: {
            args: Prisma.EquipeAtletaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipeAtletaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EquipeAtletaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipeAtletaPayload>
          }
          findMany: {
            args: Prisma.EquipeAtletaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipeAtletaPayload>[]
          }
          create: {
            args: Prisma.EquipeAtletaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipeAtletaPayload>
          }
          createMany: {
            args: Prisma.EquipeAtletaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EquipeAtletaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipeAtletaPayload>[]
          }
          delete: {
            args: Prisma.EquipeAtletaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipeAtletaPayload>
          }
          update: {
            args: Prisma.EquipeAtletaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipeAtletaPayload>
          }
          deleteMany: {
            args: Prisma.EquipeAtletaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EquipeAtletaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EquipeAtletaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipeAtletaPayload>[]
          }
          upsert: {
            args: Prisma.EquipeAtletaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EquipeAtletaPayload>
          }
          aggregate: {
            args: Prisma.EquipeAtletaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEquipeAtleta>
          }
          groupBy: {
            args: Prisma.EquipeAtletaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EquipeAtletaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EquipeAtletaCountArgs<ExtArgs>
            result: $Utils.Optional<EquipeAtletaCountAggregateOutputType> | number
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
    participacao?: ParticipacaoOmit
    equipe?: EquipeOmit
    equipeAtleta?: EquipeAtletaOmit
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
    torneios: number
    Treinador: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    torneios?: boolean | UsuarioCountOutputTypeCountTorneiosArgs
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
  export type UsuarioCountOutputTypeCountTorneiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    participacoes: number
    equipes: number
  }

  export type AtletaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participacoes?: boolean | AtletaCountOutputTypeCountParticipacoesArgs
    equipes?: boolean | AtletaCountOutputTypeCountEquipesArgs
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
  export type AtletaCountOutputTypeCountParticipacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipacaoWhereInput
  }

  /**
   * AtletaCountOutputType without action
   */
  export type AtletaCountOutputTypeCountEquipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipeAtletaWhereInput
  }


  /**
   * Count Type TorneioCountOutputType
   */

  export type TorneioCountOutputType = {
    participacoes: number
    equipes: number
    partidas: number
  }

  export type TorneioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participacoes?: boolean | TorneioCountOutputTypeCountParticipacoesArgs
    equipes?: boolean | TorneioCountOutputTypeCountEquipesArgs
    partidas?: boolean | TorneioCountOutputTypeCountPartidasArgs
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
  export type TorneioCountOutputTypeCountParticipacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipacaoWhereInput
  }

  /**
   * TorneioCountOutputType without action
   */
  export type TorneioCountOutputTypeCountEquipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipeWhereInput
  }

  /**
   * TorneioCountOutputType without action
   */
  export type TorneioCountOutputTypeCountPartidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartidaWhereInput
  }


  /**
   * Count Type EquipeCountOutputType
   */

  export type EquipeCountOutputType = {
    atletas: number
    partidasComoEquipe1: number
    partidasComoEquipe2: number
    Partida: number
  }

  export type EquipeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atletas?: boolean | EquipeCountOutputTypeCountAtletasArgs
    partidasComoEquipe1?: boolean | EquipeCountOutputTypeCountPartidasComoEquipe1Args
    partidasComoEquipe2?: boolean | EquipeCountOutputTypeCountPartidasComoEquipe2Args
    Partida?: boolean | EquipeCountOutputTypeCountPartidaArgs
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
    where?: EquipeAtletaWhereInput
  }

  /**
   * EquipeCountOutputType without action
   */
  export type EquipeCountOutputTypeCountPartidasComoEquipe1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartidaWhereInput
  }

  /**
   * EquipeCountOutputType without action
   */
  export type EquipeCountOutputTypeCountPartidasComoEquipe2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartidaWhereInput
  }

  /**
   * EquipeCountOutputType without action
   */
  export type EquipeCountOutputTypeCountPartidaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    torneios?: boolean | Usuario$torneiosArgs<ExtArgs>
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
    torneios?: boolean | Usuario$torneiosArgs<ExtArgs>
    Treinador?: boolean | Usuario$TreinadorArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      torneios: Prisma.$TorneioPayload<ExtArgs>[]
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
    torneios<T extends Usuario$torneiosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$torneiosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TorneioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Usuario.torneios
   */
  export type Usuario$torneiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
  }

  export type AtletaSumAggregateOutputType = {
    id: number | null
  }

  export type AtletaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    genero: string | null
    nivel: string | null
  }

  export type AtletaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    genero: string | null
    nivel: string | null
  }

  export type AtletaCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    genero: number
    nivel: number
    _all: number
  }


  export type AtletaAvgAggregateInputType = {
    id?: true
  }

  export type AtletaSumAggregateInputType = {
    id?: true
  }

  export type AtletaMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    genero?: true
    nivel?: true
  }

  export type AtletaMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    genero?: true
    nivel?: true
  }

  export type AtletaCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    genero?: true
    nivel?: true
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
    participacoes?: boolean | Atleta$participacoesArgs<ExtArgs>
    equipes?: boolean | Atleta$equipesArgs<ExtArgs>
    _count?: boolean | AtletaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atleta"]>

  export type AtletaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    genero?: boolean
    nivel?: boolean
  }, ExtArgs["result"]["atleta"]>

  export type AtletaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    genero?: boolean
    nivel?: boolean
  }, ExtArgs["result"]["atleta"]>

  export type AtletaSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    genero?: boolean
    nivel?: boolean
  }

  export type AtletaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "genero" | "nivel", ExtArgs["result"]["atleta"]>
  export type AtletaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participacoes?: boolean | Atleta$participacoesArgs<ExtArgs>
    equipes?: boolean | Atleta$equipesArgs<ExtArgs>
    _count?: boolean | AtletaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AtletaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AtletaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AtletaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Atleta"
    objects: {
      participacoes: Prisma.$ParticipacaoPayload<ExtArgs>[]
      equipes: Prisma.$EquipeAtletaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      genero: string
      nivel: string | null
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
    participacoes<T extends Atleta$participacoesArgs<ExtArgs> = {}>(args?: Subset<T, Atleta$participacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    equipes<T extends Atleta$equipesArgs<ExtArgs> = {}>(args?: Subset<T, Atleta$equipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipeAtletaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Atleta.participacoes
   */
  export type Atleta$participacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
    where?: ParticipacaoWhereInput
    orderBy?: ParticipacaoOrderByWithRelationInput | ParticipacaoOrderByWithRelationInput[]
    cursor?: ParticipacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipacaoScalarFieldEnum | ParticipacaoScalarFieldEnum[]
  }

  /**
   * Atleta.equipes
   */
  export type Atleta$equipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeAtleta
     */
    select?: EquipeAtletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeAtleta
     */
    omit?: EquipeAtletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeAtletaInclude<ExtArgs> | null
    where?: EquipeAtletaWhereInput
    orderBy?: EquipeAtletaOrderByWithRelationInput | EquipeAtletaOrderByWithRelationInput[]
    cursor?: EquipeAtletaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipeAtletaScalarFieldEnum | EquipeAtletaScalarFieldEnum[]
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
    data?: boolean
    local?: boolean
    status?: boolean
    criadoPorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    criadoPor?: boolean | UsuarioDefaultArgs<ExtArgs>
    participacoes?: boolean | Torneio$participacoesArgs<ExtArgs>
    equipes?: boolean | Torneio$equipesArgs<ExtArgs>
    partidas?: boolean | Torneio$partidasArgs<ExtArgs>
    _count?: boolean | TorneioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["torneio"]>

  export type TorneioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
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
    data?: boolean
    local?: boolean
    status?: boolean
    criadoPorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TorneioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "data" | "local" | "status" | "criadoPorId" | "createdAt" | "updatedAt", ExtArgs["result"]["torneio"]>
  export type TorneioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    criadoPor?: boolean | UsuarioDefaultArgs<ExtArgs>
    participacoes?: boolean | Torneio$participacoesArgs<ExtArgs>
    equipes?: boolean | Torneio$equipesArgs<ExtArgs>
    partidas?: boolean | Torneio$partidasArgs<ExtArgs>
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
      participacoes: Prisma.$ParticipacaoPayload<ExtArgs>[]
      equipes: Prisma.$EquipePayload<ExtArgs>[]
      partidas: Prisma.$PartidaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
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
    participacoes<T extends Torneio$participacoesArgs<ExtArgs> = {}>(args?: Subset<T, Torneio$participacoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    equipes<T extends Torneio$equipesArgs<ExtArgs> = {}>(args?: Subset<T, Torneio$equipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    partidas<T extends Torneio$partidasArgs<ExtArgs> = {}>(args?: Subset<T, Torneio$partidasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Torneio.participacoes
   */
  export type Torneio$participacoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
    where?: ParticipacaoWhereInput
    orderBy?: ParticipacaoOrderByWithRelationInput | ParticipacaoOrderByWithRelationInput[]
    cursor?: ParticipacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ParticipacaoScalarFieldEnum | ParticipacaoScalarFieldEnum[]
  }

  /**
   * Torneio.equipes
   */
  export type Torneio$equipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: EquipeOrderByWithRelationInput | EquipeOrderByWithRelationInput[]
    cursor?: EquipeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipeScalarFieldEnum | EquipeScalarFieldEnum[]
  }

  /**
   * Torneio.partidas
   */
  export type Torneio$partidasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Model Participacao
   */

  export type AggregateParticipacao = {
    _count: ParticipacaoCountAggregateOutputType | null
    _avg: ParticipacaoAvgAggregateOutputType | null
    _sum: ParticipacaoSumAggregateOutputType | null
    _min: ParticipacaoMinAggregateOutputType | null
    _max: ParticipacaoMaxAggregateOutputType | null
  }

  export type ParticipacaoAvgAggregateOutputType = {
    id: number | null
    atletaId: number | null
    torneioId: number | null
  }

  export type ParticipacaoSumAggregateOutputType = {
    id: number | null
    atletaId: number | null
    torneioId: number | null
  }

  export type ParticipacaoMinAggregateOutputType = {
    id: number | null
    atletaId: number | null
    torneioId: number | null
    criadoEm: Date | null
  }

  export type ParticipacaoMaxAggregateOutputType = {
    id: number | null
    atletaId: number | null
    torneioId: number | null
    criadoEm: Date | null
  }

  export type ParticipacaoCountAggregateOutputType = {
    id: number
    atletaId: number
    torneioId: number
    criadoEm: number
    _all: number
  }


  export type ParticipacaoAvgAggregateInputType = {
    id?: true
    atletaId?: true
    torneioId?: true
  }

  export type ParticipacaoSumAggregateInputType = {
    id?: true
    atletaId?: true
    torneioId?: true
  }

  export type ParticipacaoMinAggregateInputType = {
    id?: true
    atletaId?: true
    torneioId?: true
    criadoEm?: true
  }

  export type ParticipacaoMaxAggregateInputType = {
    id?: true
    atletaId?: true
    torneioId?: true
    criadoEm?: true
  }

  export type ParticipacaoCountAggregateInputType = {
    id?: true
    atletaId?: true
    torneioId?: true
    criadoEm?: true
    _all?: true
  }

  export type ParticipacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participacao to aggregate.
     */
    where?: ParticipacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participacaos to fetch.
     */
    orderBy?: ParticipacaoOrderByWithRelationInput | ParticipacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParticipacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Participacaos
    **/
    _count?: true | ParticipacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ParticipacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ParticipacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParticipacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParticipacaoMaxAggregateInputType
  }

  export type GetParticipacaoAggregateType<T extends ParticipacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateParticipacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParticipacao[P]>
      : GetScalarType<T[P], AggregateParticipacao[P]>
  }




  export type ParticipacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParticipacaoWhereInput
    orderBy?: ParticipacaoOrderByWithAggregationInput | ParticipacaoOrderByWithAggregationInput[]
    by: ParticipacaoScalarFieldEnum[] | ParticipacaoScalarFieldEnum
    having?: ParticipacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParticipacaoCountAggregateInputType | true
    _avg?: ParticipacaoAvgAggregateInputType
    _sum?: ParticipacaoSumAggregateInputType
    _min?: ParticipacaoMinAggregateInputType
    _max?: ParticipacaoMaxAggregateInputType
  }

  export type ParticipacaoGroupByOutputType = {
    id: number
    atletaId: number
    torneioId: number
    criadoEm: Date
    _count: ParticipacaoCountAggregateOutputType | null
    _avg: ParticipacaoAvgAggregateOutputType | null
    _sum: ParticipacaoSumAggregateOutputType | null
    _min: ParticipacaoMinAggregateOutputType | null
    _max: ParticipacaoMaxAggregateOutputType | null
  }

  type GetParticipacaoGroupByPayload<T extends ParticipacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParticipacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParticipacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParticipacaoGroupByOutputType[P]>
            : GetScalarType<T[P], ParticipacaoGroupByOutputType[P]>
        }
      >
    >


  export type ParticipacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    atletaId?: boolean
    torneioId?: boolean
    criadoEm?: boolean
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participacao"]>

  export type ParticipacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    atletaId?: boolean
    torneioId?: boolean
    criadoEm?: boolean
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participacao"]>

  export type ParticipacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    atletaId?: boolean
    torneioId?: boolean
    criadoEm?: boolean
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["participacao"]>

  export type ParticipacaoSelectScalar = {
    id?: boolean
    atletaId?: boolean
    torneioId?: boolean
    criadoEm?: boolean
  }

  export type ParticipacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "atletaId" | "torneioId" | "criadoEm", ExtArgs["result"]["participacao"]>
  export type ParticipacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
  }
  export type ParticipacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
  }
  export type ParticipacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
  }

  export type $ParticipacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Participacao"
    objects: {
      atleta: Prisma.$AtletaPayload<ExtArgs>
      torneio: Prisma.$TorneioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      atletaId: number
      torneioId: number
      criadoEm: Date
    }, ExtArgs["result"]["participacao"]>
    composites: {}
  }

  type ParticipacaoGetPayload<S extends boolean | null | undefined | ParticipacaoDefaultArgs> = $Result.GetResult<Prisma.$ParticipacaoPayload, S>

  type ParticipacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParticipacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParticipacaoCountAggregateInputType | true
    }

  export interface ParticipacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Participacao'], meta: { name: 'Participacao' } }
    /**
     * Find zero or one Participacao that matches the filter.
     * @param {ParticipacaoFindUniqueArgs} args - Arguments to find a Participacao
     * @example
     * // Get one Participacao
     * const participacao = await prisma.participacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParticipacaoFindUniqueArgs>(args: SelectSubset<T, ParticipacaoFindUniqueArgs<ExtArgs>>): Prisma__ParticipacaoClient<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Participacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParticipacaoFindUniqueOrThrowArgs} args - Arguments to find a Participacao
     * @example
     * // Get one Participacao
     * const participacao = await prisma.participacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParticipacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, ParticipacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParticipacaoClient<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoFindFirstArgs} args - Arguments to find a Participacao
     * @example
     * // Get one Participacao
     * const participacao = await prisma.participacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParticipacaoFindFirstArgs>(args?: SelectSubset<T, ParticipacaoFindFirstArgs<ExtArgs>>): Prisma__ParticipacaoClient<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Participacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoFindFirstOrThrowArgs} args - Arguments to find a Participacao
     * @example
     * // Get one Participacao
     * const participacao = await prisma.participacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParticipacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, ParticipacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParticipacaoClient<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Participacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Participacaos
     * const participacaos = await prisma.participacao.findMany()
     * 
     * // Get first 10 Participacaos
     * const participacaos = await prisma.participacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const participacaoWithIdOnly = await prisma.participacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParticipacaoFindManyArgs>(args?: SelectSubset<T, ParticipacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Participacao.
     * @param {ParticipacaoCreateArgs} args - Arguments to create a Participacao.
     * @example
     * // Create one Participacao
     * const Participacao = await prisma.participacao.create({
     *   data: {
     *     // ... data to create a Participacao
     *   }
     * })
     * 
     */
    create<T extends ParticipacaoCreateArgs>(args: SelectSubset<T, ParticipacaoCreateArgs<ExtArgs>>): Prisma__ParticipacaoClient<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Participacaos.
     * @param {ParticipacaoCreateManyArgs} args - Arguments to create many Participacaos.
     * @example
     * // Create many Participacaos
     * const participacao = await prisma.participacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParticipacaoCreateManyArgs>(args?: SelectSubset<T, ParticipacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Participacaos and returns the data saved in the database.
     * @param {ParticipacaoCreateManyAndReturnArgs} args - Arguments to create many Participacaos.
     * @example
     * // Create many Participacaos
     * const participacao = await prisma.participacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Participacaos and only return the `id`
     * const participacaoWithIdOnly = await prisma.participacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParticipacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, ParticipacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Participacao.
     * @param {ParticipacaoDeleteArgs} args - Arguments to delete one Participacao.
     * @example
     * // Delete one Participacao
     * const Participacao = await prisma.participacao.delete({
     *   where: {
     *     // ... filter to delete one Participacao
     *   }
     * })
     * 
     */
    delete<T extends ParticipacaoDeleteArgs>(args: SelectSubset<T, ParticipacaoDeleteArgs<ExtArgs>>): Prisma__ParticipacaoClient<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Participacao.
     * @param {ParticipacaoUpdateArgs} args - Arguments to update one Participacao.
     * @example
     * // Update one Participacao
     * const participacao = await prisma.participacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParticipacaoUpdateArgs>(args: SelectSubset<T, ParticipacaoUpdateArgs<ExtArgs>>): Prisma__ParticipacaoClient<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Participacaos.
     * @param {ParticipacaoDeleteManyArgs} args - Arguments to filter Participacaos to delete.
     * @example
     * // Delete a few Participacaos
     * const { count } = await prisma.participacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParticipacaoDeleteManyArgs>(args?: SelectSubset<T, ParticipacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Participacaos
     * const participacao = await prisma.participacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParticipacaoUpdateManyArgs>(args: SelectSubset<T, ParticipacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Participacaos and returns the data updated in the database.
     * @param {ParticipacaoUpdateManyAndReturnArgs} args - Arguments to update many Participacaos.
     * @example
     * // Update many Participacaos
     * const participacao = await prisma.participacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Participacaos and only return the `id`
     * const participacaoWithIdOnly = await prisma.participacao.updateManyAndReturn({
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
    updateManyAndReturn<T extends ParticipacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, ParticipacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Participacao.
     * @param {ParticipacaoUpsertArgs} args - Arguments to update or create a Participacao.
     * @example
     * // Update or create a Participacao
     * const participacao = await prisma.participacao.upsert({
     *   create: {
     *     // ... data to create a Participacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Participacao we want to update
     *   }
     * })
     */
    upsert<T extends ParticipacaoUpsertArgs>(args: SelectSubset<T, ParticipacaoUpsertArgs<ExtArgs>>): Prisma__ParticipacaoClient<$Result.GetResult<Prisma.$ParticipacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Participacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoCountArgs} args - Arguments to filter Participacaos to count.
     * @example
     * // Count the number of Participacaos
     * const count = await prisma.participacao.count({
     *   where: {
     *     // ... the filter for the Participacaos we want to count
     *   }
     * })
    **/
    count<T extends ParticipacaoCountArgs>(
      args?: Subset<T, ParticipacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParticipacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Participacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParticipacaoAggregateArgs>(args: Subset<T, ParticipacaoAggregateArgs>): Prisma.PrismaPromise<GetParticipacaoAggregateType<T>>

    /**
     * Group by Participacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParticipacaoGroupByArgs} args - Group by arguments.
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
      T extends ParticipacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParticipacaoGroupByArgs['orderBy'] }
        : { orderBy?: ParticipacaoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ParticipacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParticipacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Participacao model
   */
  readonly fields: ParticipacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Participacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParticipacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Participacao model
   */
  interface ParticipacaoFieldRefs {
    readonly id: FieldRef<"Participacao", 'Int'>
    readonly atletaId: FieldRef<"Participacao", 'Int'>
    readonly torneioId: FieldRef<"Participacao", 'Int'>
    readonly criadoEm: FieldRef<"Participacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Participacao findUnique
   */
  export type ParticipacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
    /**
     * Filter, which Participacao to fetch.
     */
    where: ParticipacaoWhereUniqueInput
  }

  /**
   * Participacao findUniqueOrThrow
   */
  export type ParticipacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
    /**
     * Filter, which Participacao to fetch.
     */
    where: ParticipacaoWhereUniqueInput
  }

  /**
   * Participacao findFirst
   */
  export type ParticipacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
    /**
     * Filter, which Participacao to fetch.
     */
    where?: ParticipacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participacaos to fetch.
     */
    orderBy?: ParticipacaoOrderByWithRelationInput | ParticipacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participacaos.
     */
    cursor?: ParticipacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participacaos.
     */
    distinct?: ParticipacaoScalarFieldEnum | ParticipacaoScalarFieldEnum[]
  }

  /**
   * Participacao findFirstOrThrow
   */
  export type ParticipacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
    /**
     * Filter, which Participacao to fetch.
     */
    where?: ParticipacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participacaos to fetch.
     */
    orderBy?: ParticipacaoOrderByWithRelationInput | ParticipacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Participacaos.
     */
    cursor?: ParticipacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Participacaos.
     */
    distinct?: ParticipacaoScalarFieldEnum | ParticipacaoScalarFieldEnum[]
  }

  /**
   * Participacao findMany
   */
  export type ParticipacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
    /**
     * Filter, which Participacaos to fetch.
     */
    where?: ParticipacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Participacaos to fetch.
     */
    orderBy?: ParticipacaoOrderByWithRelationInput | ParticipacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Participacaos.
     */
    cursor?: ParticipacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Participacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Participacaos.
     */
    skip?: number
    distinct?: ParticipacaoScalarFieldEnum | ParticipacaoScalarFieldEnum[]
  }

  /**
   * Participacao create
   */
  export type ParticipacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Participacao.
     */
    data: XOR<ParticipacaoCreateInput, ParticipacaoUncheckedCreateInput>
  }

  /**
   * Participacao createMany
   */
  export type ParticipacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Participacaos.
     */
    data: ParticipacaoCreateManyInput | ParticipacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Participacao createManyAndReturn
   */
  export type ParticipacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Participacaos.
     */
    data: ParticipacaoCreateManyInput | ParticipacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participacao update
   */
  export type ParticipacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Participacao.
     */
    data: XOR<ParticipacaoUpdateInput, ParticipacaoUncheckedUpdateInput>
    /**
     * Choose, which Participacao to update.
     */
    where: ParticipacaoWhereUniqueInput
  }

  /**
   * Participacao updateMany
   */
  export type ParticipacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Participacaos.
     */
    data: XOR<ParticipacaoUpdateManyMutationInput, ParticipacaoUncheckedUpdateManyInput>
    /**
     * Filter which Participacaos to update
     */
    where?: ParticipacaoWhereInput
    /**
     * Limit how many Participacaos to update.
     */
    limit?: number
  }

  /**
   * Participacao updateManyAndReturn
   */
  export type ParticipacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * The data used to update Participacaos.
     */
    data: XOR<ParticipacaoUpdateManyMutationInput, ParticipacaoUncheckedUpdateManyInput>
    /**
     * Filter which Participacaos to update
     */
    where?: ParticipacaoWhereInput
    /**
     * Limit how many Participacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Participacao upsert
   */
  export type ParticipacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Participacao to update in case it exists.
     */
    where: ParticipacaoWhereUniqueInput
    /**
     * In case the Participacao found by the `where` argument doesn't exist, create a new Participacao with this data.
     */
    create: XOR<ParticipacaoCreateInput, ParticipacaoUncheckedCreateInput>
    /**
     * In case the Participacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParticipacaoUpdateInput, ParticipacaoUncheckedUpdateInput>
  }

  /**
   * Participacao delete
   */
  export type ParticipacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
    /**
     * Filter which Participacao to delete.
     */
    where: ParticipacaoWhereUniqueInput
  }

  /**
   * Participacao deleteMany
   */
  export type ParticipacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Participacaos to delete
     */
    where?: ParticipacaoWhereInput
    /**
     * Limit how many Participacaos to delete.
     */
    limit?: number
  }

  /**
   * Participacao without action
   */
  export type ParticipacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Participacao
     */
    select?: ParticipacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Participacao
     */
    omit?: ParticipacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParticipacaoInclude<ExtArgs> | null
  }


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
    torneioId: number | null
  }

  export type EquipeSumAggregateOutputType = {
    id: number | null
    torneioId: number | null
  }

  export type EquipeMinAggregateOutputType = {
    id: number | null
    nome: string | null
    tipo: $Enums.TipoEquipe | null
    torneioId: number | null
    createdAt: Date | null
  }

  export type EquipeMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    tipo: $Enums.TipoEquipe | null
    torneioId: number | null
    createdAt: Date | null
  }

  export type EquipeCountAggregateOutputType = {
    id: number
    nome: number
    tipo: number
    torneioId: number
    createdAt: number
    _all: number
  }


  export type EquipeAvgAggregateInputType = {
    id?: true
    torneioId?: true
  }

  export type EquipeSumAggregateInputType = {
    id?: true
    torneioId?: true
  }

  export type EquipeMinAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    torneioId?: true
    createdAt?: true
  }

  export type EquipeMaxAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    torneioId?: true
    createdAt?: true
  }

  export type EquipeCountAggregateInputType = {
    id?: true
    nome?: true
    tipo?: true
    torneioId?: true
    createdAt?: true
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
    tipo: $Enums.TipoEquipe
    torneioId: number
    createdAt: Date
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
    torneioId?: boolean
    createdAt?: boolean
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
    atletas?: boolean | Equipe$atletasArgs<ExtArgs>
    partidasComoEquipe1?: boolean | Equipe$partidasComoEquipe1Args<ExtArgs>
    partidasComoEquipe2?: boolean | Equipe$partidasComoEquipe2Args<ExtArgs>
    Partida?: boolean | Equipe$PartidaArgs<ExtArgs>
    _count?: boolean | EquipeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipe"]>

  export type EquipeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
    torneioId?: boolean
    createdAt?: boolean
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipe"]>

  export type EquipeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    tipo?: boolean
    torneioId?: boolean
    createdAt?: boolean
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipe"]>

  export type EquipeSelectScalar = {
    id?: boolean
    nome?: boolean
    tipo?: boolean
    torneioId?: boolean
    createdAt?: boolean
  }

  export type EquipeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "tipo" | "torneioId" | "createdAt", ExtArgs["result"]["equipe"]>
  export type EquipeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
    atletas?: boolean | Equipe$atletasArgs<ExtArgs>
    partidasComoEquipe1?: boolean | Equipe$partidasComoEquipe1Args<ExtArgs>
    partidasComoEquipe2?: boolean | Equipe$partidasComoEquipe2Args<ExtArgs>
    Partida?: boolean | Equipe$PartidaArgs<ExtArgs>
    _count?: boolean | EquipeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EquipeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
  }
  export type EquipeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
  }

  export type $EquipePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Equipe"
    objects: {
      torneio: Prisma.$TorneioPayload<ExtArgs>
      atletas: Prisma.$EquipeAtletaPayload<ExtArgs>[]
      partidasComoEquipe1: Prisma.$PartidaPayload<ExtArgs>[]
      partidasComoEquipe2: Prisma.$PartidaPayload<ExtArgs>[]
      Partida: Prisma.$PartidaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      tipo: $Enums.TipoEquipe
      torneioId: number
      createdAt: Date
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
    torneio<T extends TorneioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TorneioDefaultArgs<ExtArgs>>): Prisma__TorneioClient<$Result.GetResult<Prisma.$TorneioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    atletas<T extends Equipe$atletasArgs<ExtArgs> = {}>(args?: Subset<T, Equipe$atletasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipeAtletaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    partidasComoEquipe1<T extends Equipe$partidasComoEquipe1Args<ExtArgs> = {}>(args?: Subset<T, Equipe$partidasComoEquipe1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    partidasComoEquipe2<T extends Equipe$partidasComoEquipe2Args<ExtArgs> = {}>(args?: Subset<T, Equipe$partidasComoEquipe2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Partida<T extends Equipe$PartidaArgs<ExtArgs> = {}>(args?: Subset<T, Equipe$PartidaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartidaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly tipo: FieldRef<"Equipe", 'TipoEquipe'>
    readonly torneioId: FieldRef<"Equipe", 'Int'>
    readonly createdAt: FieldRef<"Equipe", 'DateTime'>
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeIncludeCreateManyAndReturn<ExtArgs> | null
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeIncludeUpdateManyAndReturn<ExtArgs> | null
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
     * Select specific fields to fetch from the EquipeAtleta
     */
    select?: EquipeAtletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeAtleta
     */
    omit?: EquipeAtletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeAtletaInclude<ExtArgs> | null
    where?: EquipeAtletaWhereInput
    orderBy?: EquipeAtletaOrderByWithRelationInput | EquipeAtletaOrderByWithRelationInput[]
    cursor?: EquipeAtletaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EquipeAtletaScalarFieldEnum | EquipeAtletaScalarFieldEnum[]
  }

  /**
   * Equipe.partidasComoEquipe1
   */
  export type Equipe$partidasComoEquipe1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Equipe.partidasComoEquipe2
   */
  export type Equipe$partidasComoEquipe2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Equipe.Partida
   */
  export type Equipe$PartidaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Model EquipeAtleta
   */

  export type AggregateEquipeAtleta = {
    _count: EquipeAtletaCountAggregateOutputType | null
    _avg: EquipeAtletaAvgAggregateOutputType | null
    _sum: EquipeAtletaSumAggregateOutputType | null
    _min: EquipeAtletaMinAggregateOutputType | null
    _max: EquipeAtletaMaxAggregateOutputType | null
  }

  export type EquipeAtletaAvgAggregateOutputType = {
    atletaId: number | null
    equipeId: number | null
  }

  export type EquipeAtletaSumAggregateOutputType = {
    atletaId: number | null
    equipeId: number | null
  }

  export type EquipeAtletaMinAggregateOutputType = {
    atletaId: number | null
    equipeId: number | null
  }

  export type EquipeAtletaMaxAggregateOutputType = {
    atletaId: number | null
    equipeId: number | null
  }

  export type EquipeAtletaCountAggregateOutputType = {
    atletaId: number
    equipeId: number
    _all: number
  }


  export type EquipeAtletaAvgAggregateInputType = {
    atletaId?: true
    equipeId?: true
  }

  export type EquipeAtletaSumAggregateInputType = {
    atletaId?: true
    equipeId?: true
  }

  export type EquipeAtletaMinAggregateInputType = {
    atletaId?: true
    equipeId?: true
  }

  export type EquipeAtletaMaxAggregateInputType = {
    atletaId?: true
    equipeId?: true
  }

  export type EquipeAtletaCountAggregateInputType = {
    atletaId?: true
    equipeId?: true
    _all?: true
  }

  export type EquipeAtletaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquipeAtleta to aggregate.
     */
    where?: EquipeAtletaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipeAtletas to fetch.
     */
    orderBy?: EquipeAtletaOrderByWithRelationInput | EquipeAtletaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EquipeAtletaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipeAtletas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipeAtletas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EquipeAtletas
    **/
    _count?: true | EquipeAtletaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EquipeAtletaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EquipeAtletaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EquipeAtletaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EquipeAtletaMaxAggregateInputType
  }

  export type GetEquipeAtletaAggregateType<T extends EquipeAtletaAggregateArgs> = {
        [P in keyof T & keyof AggregateEquipeAtleta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEquipeAtleta[P]>
      : GetScalarType<T[P], AggregateEquipeAtleta[P]>
  }




  export type EquipeAtletaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EquipeAtletaWhereInput
    orderBy?: EquipeAtletaOrderByWithAggregationInput | EquipeAtletaOrderByWithAggregationInput[]
    by: EquipeAtletaScalarFieldEnum[] | EquipeAtletaScalarFieldEnum
    having?: EquipeAtletaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EquipeAtletaCountAggregateInputType | true
    _avg?: EquipeAtletaAvgAggregateInputType
    _sum?: EquipeAtletaSumAggregateInputType
    _min?: EquipeAtletaMinAggregateInputType
    _max?: EquipeAtletaMaxAggregateInputType
  }

  export type EquipeAtletaGroupByOutputType = {
    atletaId: number
    equipeId: number
    _count: EquipeAtletaCountAggregateOutputType | null
    _avg: EquipeAtletaAvgAggregateOutputType | null
    _sum: EquipeAtletaSumAggregateOutputType | null
    _min: EquipeAtletaMinAggregateOutputType | null
    _max: EquipeAtletaMaxAggregateOutputType | null
  }

  type GetEquipeAtletaGroupByPayload<T extends EquipeAtletaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EquipeAtletaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EquipeAtletaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EquipeAtletaGroupByOutputType[P]>
            : GetScalarType<T[P], EquipeAtletaGroupByOutputType[P]>
        }
      >
    >


  export type EquipeAtletaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    atletaId?: boolean
    equipeId?: boolean
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
    equipe?: boolean | EquipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipeAtleta"]>

  export type EquipeAtletaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    atletaId?: boolean
    equipeId?: boolean
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
    equipe?: boolean | EquipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipeAtleta"]>

  export type EquipeAtletaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    atletaId?: boolean
    equipeId?: boolean
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
    equipe?: boolean | EquipeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["equipeAtleta"]>

  export type EquipeAtletaSelectScalar = {
    atletaId?: boolean
    equipeId?: boolean
  }

  export type EquipeAtletaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"atletaId" | "equipeId", ExtArgs["result"]["equipeAtleta"]>
  export type EquipeAtletaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
    equipe?: boolean | EquipeDefaultArgs<ExtArgs>
  }
  export type EquipeAtletaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
    equipe?: boolean | EquipeDefaultArgs<ExtArgs>
  }
  export type EquipeAtletaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    atleta?: boolean | AtletaDefaultArgs<ExtArgs>
    equipe?: boolean | EquipeDefaultArgs<ExtArgs>
  }

  export type $EquipeAtletaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EquipeAtleta"
    objects: {
      atleta: Prisma.$AtletaPayload<ExtArgs>
      equipe: Prisma.$EquipePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      atletaId: number
      equipeId: number
    }, ExtArgs["result"]["equipeAtleta"]>
    composites: {}
  }

  type EquipeAtletaGetPayload<S extends boolean | null | undefined | EquipeAtletaDefaultArgs> = $Result.GetResult<Prisma.$EquipeAtletaPayload, S>

  type EquipeAtletaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EquipeAtletaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EquipeAtletaCountAggregateInputType | true
    }

  export interface EquipeAtletaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EquipeAtleta'], meta: { name: 'EquipeAtleta' } }
    /**
     * Find zero or one EquipeAtleta that matches the filter.
     * @param {EquipeAtletaFindUniqueArgs} args - Arguments to find a EquipeAtleta
     * @example
     * // Get one EquipeAtleta
     * const equipeAtleta = await prisma.equipeAtleta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EquipeAtletaFindUniqueArgs>(args: SelectSubset<T, EquipeAtletaFindUniqueArgs<ExtArgs>>): Prisma__EquipeAtletaClient<$Result.GetResult<Prisma.$EquipeAtletaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EquipeAtleta that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EquipeAtletaFindUniqueOrThrowArgs} args - Arguments to find a EquipeAtleta
     * @example
     * // Get one EquipeAtleta
     * const equipeAtleta = await prisma.equipeAtleta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EquipeAtletaFindUniqueOrThrowArgs>(args: SelectSubset<T, EquipeAtletaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EquipeAtletaClient<$Result.GetResult<Prisma.$EquipeAtletaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EquipeAtleta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeAtletaFindFirstArgs} args - Arguments to find a EquipeAtleta
     * @example
     * // Get one EquipeAtleta
     * const equipeAtleta = await prisma.equipeAtleta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EquipeAtletaFindFirstArgs>(args?: SelectSubset<T, EquipeAtletaFindFirstArgs<ExtArgs>>): Prisma__EquipeAtletaClient<$Result.GetResult<Prisma.$EquipeAtletaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EquipeAtleta that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeAtletaFindFirstOrThrowArgs} args - Arguments to find a EquipeAtleta
     * @example
     * // Get one EquipeAtleta
     * const equipeAtleta = await prisma.equipeAtleta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EquipeAtletaFindFirstOrThrowArgs>(args?: SelectSubset<T, EquipeAtletaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EquipeAtletaClient<$Result.GetResult<Prisma.$EquipeAtletaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EquipeAtletas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeAtletaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EquipeAtletas
     * const equipeAtletas = await prisma.equipeAtleta.findMany()
     * 
     * // Get first 10 EquipeAtletas
     * const equipeAtletas = await prisma.equipeAtleta.findMany({ take: 10 })
     * 
     * // Only select the `atletaId`
     * const equipeAtletaWithAtletaIdOnly = await prisma.equipeAtleta.findMany({ select: { atletaId: true } })
     * 
     */
    findMany<T extends EquipeAtletaFindManyArgs>(args?: SelectSubset<T, EquipeAtletaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipeAtletaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EquipeAtleta.
     * @param {EquipeAtletaCreateArgs} args - Arguments to create a EquipeAtleta.
     * @example
     * // Create one EquipeAtleta
     * const EquipeAtleta = await prisma.equipeAtleta.create({
     *   data: {
     *     // ... data to create a EquipeAtleta
     *   }
     * })
     * 
     */
    create<T extends EquipeAtletaCreateArgs>(args: SelectSubset<T, EquipeAtletaCreateArgs<ExtArgs>>): Prisma__EquipeAtletaClient<$Result.GetResult<Prisma.$EquipeAtletaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EquipeAtletas.
     * @param {EquipeAtletaCreateManyArgs} args - Arguments to create many EquipeAtletas.
     * @example
     * // Create many EquipeAtletas
     * const equipeAtleta = await prisma.equipeAtleta.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EquipeAtletaCreateManyArgs>(args?: SelectSubset<T, EquipeAtletaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EquipeAtletas and returns the data saved in the database.
     * @param {EquipeAtletaCreateManyAndReturnArgs} args - Arguments to create many EquipeAtletas.
     * @example
     * // Create many EquipeAtletas
     * const equipeAtleta = await prisma.equipeAtleta.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EquipeAtletas and only return the `atletaId`
     * const equipeAtletaWithAtletaIdOnly = await prisma.equipeAtleta.createManyAndReturn({
     *   select: { atletaId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EquipeAtletaCreateManyAndReturnArgs>(args?: SelectSubset<T, EquipeAtletaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipeAtletaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EquipeAtleta.
     * @param {EquipeAtletaDeleteArgs} args - Arguments to delete one EquipeAtleta.
     * @example
     * // Delete one EquipeAtleta
     * const EquipeAtleta = await prisma.equipeAtleta.delete({
     *   where: {
     *     // ... filter to delete one EquipeAtleta
     *   }
     * })
     * 
     */
    delete<T extends EquipeAtletaDeleteArgs>(args: SelectSubset<T, EquipeAtletaDeleteArgs<ExtArgs>>): Prisma__EquipeAtletaClient<$Result.GetResult<Prisma.$EquipeAtletaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EquipeAtleta.
     * @param {EquipeAtletaUpdateArgs} args - Arguments to update one EquipeAtleta.
     * @example
     * // Update one EquipeAtleta
     * const equipeAtleta = await prisma.equipeAtleta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EquipeAtletaUpdateArgs>(args: SelectSubset<T, EquipeAtletaUpdateArgs<ExtArgs>>): Prisma__EquipeAtletaClient<$Result.GetResult<Prisma.$EquipeAtletaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EquipeAtletas.
     * @param {EquipeAtletaDeleteManyArgs} args - Arguments to filter EquipeAtletas to delete.
     * @example
     * // Delete a few EquipeAtletas
     * const { count } = await prisma.equipeAtleta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EquipeAtletaDeleteManyArgs>(args?: SelectSubset<T, EquipeAtletaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EquipeAtletas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeAtletaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EquipeAtletas
     * const equipeAtleta = await prisma.equipeAtleta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EquipeAtletaUpdateManyArgs>(args: SelectSubset<T, EquipeAtletaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EquipeAtletas and returns the data updated in the database.
     * @param {EquipeAtletaUpdateManyAndReturnArgs} args - Arguments to update many EquipeAtletas.
     * @example
     * // Update many EquipeAtletas
     * const equipeAtleta = await prisma.equipeAtleta.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EquipeAtletas and only return the `atletaId`
     * const equipeAtletaWithAtletaIdOnly = await prisma.equipeAtleta.updateManyAndReturn({
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
    updateManyAndReturn<T extends EquipeAtletaUpdateManyAndReturnArgs>(args: SelectSubset<T, EquipeAtletaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EquipeAtletaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EquipeAtleta.
     * @param {EquipeAtletaUpsertArgs} args - Arguments to update or create a EquipeAtleta.
     * @example
     * // Update or create a EquipeAtleta
     * const equipeAtleta = await prisma.equipeAtleta.upsert({
     *   create: {
     *     // ... data to create a EquipeAtleta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EquipeAtleta we want to update
     *   }
     * })
     */
    upsert<T extends EquipeAtletaUpsertArgs>(args: SelectSubset<T, EquipeAtletaUpsertArgs<ExtArgs>>): Prisma__EquipeAtletaClient<$Result.GetResult<Prisma.$EquipeAtletaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EquipeAtletas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeAtletaCountArgs} args - Arguments to filter EquipeAtletas to count.
     * @example
     * // Count the number of EquipeAtletas
     * const count = await prisma.equipeAtleta.count({
     *   where: {
     *     // ... the filter for the EquipeAtletas we want to count
     *   }
     * })
    **/
    count<T extends EquipeAtletaCountArgs>(
      args?: Subset<T, EquipeAtletaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EquipeAtletaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EquipeAtleta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeAtletaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EquipeAtletaAggregateArgs>(args: Subset<T, EquipeAtletaAggregateArgs>): Prisma.PrismaPromise<GetEquipeAtletaAggregateType<T>>

    /**
     * Group by EquipeAtleta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EquipeAtletaGroupByArgs} args - Group by arguments.
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
      T extends EquipeAtletaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EquipeAtletaGroupByArgs['orderBy'] }
        : { orderBy?: EquipeAtletaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EquipeAtletaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEquipeAtletaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EquipeAtleta model
   */
  readonly fields: EquipeAtletaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EquipeAtleta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EquipeAtletaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    atleta<T extends AtletaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AtletaDefaultArgs<ExtArgs>>): Prisma__AtletaClient<$Result.GetResult<Prisma.$AtletaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    equipe<T extends EquipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipeDefaultArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EquipeAtleta model
   */
  interface EquipeAtletaFieldRefs {
    readonly atletaId: FieldRef<"EquipeAtleta", 'Int'>
    readonly equipeId: FieldRef<"EquipeAtleta", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * EquipeAtleta findUnique
   */
  export type EquipeAtletaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeAtleta
     */
    select?: EquipeAtletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeAtleta
     */
    omit?: EquipeAtletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeAtletaInclude<ExtArgs> | null
    /**
     * Filter, which EquipeAtleta to fetch.
     */
    where: EquipeAtletaWhereUniqueInput
  }

  /**
   * EquipeAtleta findUniqueOrThrow
   */
  export type EquipeAtletaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeAtleta
     */
    select?: EquipeAtletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeAtleta
     */
    omit?: EquipeAtletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeAtletaInclude<ExtArgs> | null
    /**
     * Filter, which EquipeAtleta to fetch.
     */
    where: EquipeAtletaWhereUniqueInput
  }

  /**
   * EquipeAtleta findFirst
   */
  export type EquipeAtletaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeAtleta
     */
    select?: EquipeAtletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeAtleta
     */
    omit?: EquipeAtletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeAtletaInclude<ExtArgs> | null
    /**
     * Filter, which EquipeAtleta to fetch.
     */
    where?: EquipeAtletaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipeAtletas to fetch.
     */
    orderBy?: EquipeAtletaOrderByWithRelationInput | EquipeAtletaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquipeAtletas.
     */
    cursor?: EquipeAtletaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipeAtletas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipeAtletas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipeAtletas.
     */
    distinct?: EquipeAtletaScalarFieldEnum | EquipeAtletaScalarFieldEnum[]
  }

  /**
   * EquipeAtleta findFirstOrThrow
   */
  export type EquipeAtletaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeAtleta
     */
    select?: EquipeAtletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeAtleta
     */
    omit?: EquipeAtletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeAtletaInclude<ExtArgs> | null
    /**
     * Filter, which EquipeAtleta to fetch.
     */
    where?: EquipeAtletaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipeAtletas to fetch.
     */
    orderBy?: EquipeAtletaOrderByWithRelationInput | EquipeAtletaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EquipeAtletas.
     */
    cursor?: EquipeAtletaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipeAtletas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipeAtletas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EquipeAtletas.
     */
    distinct?: EquipeAtletaScalarFieldEnum | EquipeAtletaScalarFieldEnum[]
  }

  /**
   * EquipeAtleta findMany
   */
  export type EquipeAtletaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeAtleta
     */
    select?: EquipeAtletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeAtleta
     */
    omit?: EquipeAtletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeAtletaInclude<ExtArgs> | null
    /**
     * Filter, which EquipeAtletas to fetch.
     */
    where?: EquipeAtletaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EquipeAtletas to fetch.
     */
    orderBy?: EquipeAtletaOrderByWithRelationInput | EquipeAtletaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EquipeAtletas.
     */
    cursor?: EquipeAtletaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EquipeAtletas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EquipeAtletas.
     */
    skip?: number
    distinct?: EquipeAtletaScalarFieldEnum | EquipeAtletaScalarFieldEnum[]
  }

  /**
   * EquipeAtleta create
   */
  export type EquipeAtletaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeAtleta
     */
    select?: EquipeAtletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeAtleta
     */
    omit?: EquipeAtletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeAtletaInclude<ExtArgs> | null
    /**
     * The data needed to create a EquipeAtleta.
     */
    data: XOR<EquipeAtletaCreateInput, EquipeAtletaUncheckedCreateInput>
  }

  /**
   * EquipeAtleta createMany
   */
  export type EquipeAtletaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EquipeAtletas.
     */
    data: EquipeAtletaCreateManyInput | EquipeAtletaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EquipeAtleta createManyAndReturn
   */
  export type EquipeAtletaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeAtleta
     */
    select?: EquipeAtletaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeAtleta
     */
    omit?: EquipeAtletaOmit<ExtArgs> | null
    /**
     * The data used to create many EquipeAtletas.
     */
    data: EquipeAtletaCreateManyInput | EquipeAtletaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeAtletaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EquipeAtleta update
   */
  export type EquipeAtletaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeAtleta
     */
    select?: EquipeAtletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeAtleta
     */
    omit?: EquipeAtletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeAtletaInclude<ExtArgs> | null
    /**
     * The data needed to update a EquipeAtleta.
     */
    data: XOR<EquipeAtletaUpdateInput, EquipeAtletaUncheckedUpdateInput>
    /**
     * Choose, which EquipeAtleta to update.
     */
    where: EquipeAtletaWhereUniqueInput
  }

  /**
   * EquipeAtleta updateMany
   */
  export type EquipeAtletaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EquipeAtletas.
     */
    data: XOR<EquipeAtletaUpdateManyMutationInput, EquipeAtletaUncheckedUpdateManyInput>
    /**
     * Filter which EquipeAtletas to update
     */
    where?: EquipeAtletaWhereInput
    /**
     * Limit how many EquipeAtletas to update.
     */
    limit?: number
  }

  /**
   * EquipeAtleta updateManyAndReturn
   */
  export type EquipeAtletaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeAtleta
     */
    select?: EquipeAtletaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeAtleta
     */
    omit?: EquipeAtletaOmit<ExtArgs> | null
    /**
     * The data used to update EquipeAtletas.
     */
    data: XOR<EquipeAtletaUpdateManyMutationInput, EquipeAtletaUncheckedUpdateManyInput>
    /**
     * Filter which EquipeAtletas to update
     */
    where?: EquipeAtletaWhereInput
    /**
     * Limit how many EquipeAtletas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeAtletaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EquipeAtleta upsert
   */
  export type EquipeAtletaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeAtleta
     */
    select?: EquipeAtletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeAtleta
     */
    omit?: EquipeAtletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeAtletaInclude<ExtArgs> | null
    /**
     * The filter to search for the EquipeAtleta to update in case it exists.
     */
    where: EquipeAtletaWhereUniqueInput
    /**
     * In case the EquipeAtleta found by the `where` argument doesn't exist, create a new EquipeAtleta with this data.
     */
    create: XOR<EquipeAtletaCreateInput, EquipeAtletaUncheckedCreateInput>
    /**
     * In case the EquipeAtleta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EquipeAtletaUpdateInput, EquipeAtletaUncheckedUpdateInput>
  }

  /**
   * EquipeAtleta delete
   */
  export type EquipeAtletaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeAtleta
     */
    select?: EquipeAtletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeAtleta
     */
    omit?: EquipeAtletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeAtletaInclude<ExtArgs> | null
    /**
     * Filter which EquipeAtleta to delete.
     */
    where: EquipeAtletaWhereUniqueInput
  }

  /**
   * EquipeAtleta deleteMany
   */
  export type EquipeAtletaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EquipeAtletas to delete
     */
    where?: EquipeAtletaWhereInput
    /**
     * Limit how many EquipeAtletas to delete.
     */
    limit?: number
  }

  /**
   * EquipeAtleta without action
   */
  export type EquipeAtletaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EquipeAtleta
     */
    select?: EquipeAtletaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EquipeAtleta
     */
    omit?: EquipeAtletaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EquipeAtletaInclude<ExtArgs> | null
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
    pontosEquipe1: number | null
    pontosEquipe2: number | null
    vencedorId: number | null
    equipe1Id: number | null
    equipe2Id: number | null
  }

  export type PartidaSumAggregateOutputType = {
    id: number | null
    torneioId: number | null
    pontosEquipe1: number | null
    pontosEquipe2: number | null
    vencedorId: number | null
    equipe1Id: number | null
    equipe2Id: number | null
  }

  export type PartidaMinAggregateOutputType = {
    id: number | null
    torneioId: number | null
    fase: string | null
    pontosEquipe1: number | null
    pontosEquipe2: number | null
    vencedorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    equipe1Id: number | null
    equipe2Id: number | null
  }

  export type PartidaMaxAggregateOutputType = {
    id: number | null
    torneioId: number | null
    fase: string | null
    pontosEquipe1: number | null
    pontosEquipe2: number | null
    vencedorId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    equipe1Id: number | null
    equipe2Id: number | null
  }

  export type PartidaCountAggregateOutputType = {
    id: number
    torneioId: number
    fase: number
    pontosEquipe1: number
    pontosEquipe2: number
    vencedorId: number
    createdAt: number
    updatedAt: number
    equipe1Id: number
    equipe2Id: number
    _all: number
  }


  export type PartidaAvgAggregateInputType = {
    id?: true
    torneioId?: true
    pontosEquipe1?: true
    pontosEquipe2?: true
    vencedorId?: true
    equipe1Id?: true
    equipe2Id?: true
  }

  export type PartidaSumAggregateInputType = {
    id?: true
    torneioId?: true
    pontosEquipe1?: true
    pontosEquipe2?: true
    vencedorId?: true
    equipe1Id?: true
    equipe2Id?: true
  }

  export type PartidaMinAggregateInputType = {
    id?: true
    torneioId?: true
    fase?: true
    pontosEquipe1?: true
    pontosEquipe2?: true
    vencedorId?: true
    createdAt?: true
    updatedAt?: true
    equipe1Id?: true
    equipe2Id?: true
  }

  export type PartidaMaxAggregateInputType = {
    id?: true
    torneioId?: true
    fase?: true
    pontosEquipe1?: true
    pontosEquipe2?: true
    vencedorId?: true
    createdAt?: true
    updatedAt?: true
    equipe1Id?: true
    equipe2Id?: true
  }

  export type PartidaCountAggregateInputType = {
    id?: true
    torneioId?: true
    fase?: true
    pontosEquipe1?: true
    pontosEquipe2?: true
    vencedorId?: true
    createdAt?: true
    updatedAt?: true
    equipe1Id?: true
    equipe2Id?: true
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
    pontosEquipe1: number | null
    pontosEquipe2: number | null
    vencedorId: number | null
    createdAt: Date
    updatedAt: Date
    equipe1Id: number
    equipe2Id: number
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
    pontosEquipe1?: boolean
    pontosEquipe2?: boolean
    vencedorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    equipe1Id?: boolean
    equipe2Id?: boolean
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
    equipe1?: boolean | EquipeDefaultArgs<ExtArgs>
    equipe2?: boolean | EquipeDefaultArgs<ExtArgs>
    vencedor?: boolean | Partida$vencedorArgs<ExtArgs>
  }, ExtArgs["result"]["partida"]>

  export type PartidaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    torneioId?: boolean
    fase?: boolean
    pontosEquipe1?: boolean
    pontosEquipe2?: boolean
    vencedorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    equipe1Id?: boolean
    equipe2Id?: boolean
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
    equipe1?: boolean | EquipeDefaultArgs<ExtArgs>
    equipe2?: boolean | EquipeDefaultArgs<ExtArgs>
    vencedor?: boolean | Partida$vencedorArgs<ExtArgs>
  }, ExtArgs["result"]["partida"]>

  export type PartidaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    torneioId?: boolean
    fase?: boolean
    pontosEquipe1?: boolean
    pontosEquipe2?: boolean
    vencedorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    equipe1Id?: boolean
    equipe2Id?: boolean
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
    equipe1?: boolean | EquipeDefaultArgs<ExtArgs>
    equipe2?: boolean | EquipeDefaultArgs<ExtArgs>
    vencedor?: boolean | Partida$vencedorArgs<ExtArgs>
  }, ExtArgs["result"]["partida"]>

  export type PartidaSelectScalar = {
    id?: boolean
    torneioId?: boolean
    fase?: boolean
    pontosEquipe1?: boolean
    pontosEquipe2?: boolean
    vencedorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    equipe1Id?: boolean
    equipe2Id?: boolean
  }

  export type PartidaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "torneioId" | "fase" | "pontosEquipe1" | "pontosEquipe2" | "vencedorId" | "createdAt" | "updatedAt" | "equipe1Id" | "equipe2Id", ExtArgs["result"]["partida"]>
  export type PartidaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
    equipe1?: boolean | EquipeDefaultArgs<ExtArgs>
    equipe2?: boolean | EquipeDefaultArgs<ExtArgs>
    vencedor?: boolean | Partida$vencedorArgs<ExtArgs>
  }
  export type PartidaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
    equipe1?: boolean | EquipeDefaultArgs<ExtArgs>
    equipe2?: boolean | EquipeDefaultArgs<ExtArgs>
    vencedor?: boolean | Partida$vencedorArgs<ExtArgs>
  }
  export type PartidaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    torneio?: boolean | TorneioDefaultArgs<ExtArgs>
    equipe1?: boolean | EquipeDefaultArgs<ExtArgs>
    equipe2?: boolean | EquipeDefaultArgs<ExtArgs>
    vencedor?: boolean | Partida$vencedorArgs<ExtArgs>
  }

  export type $PartidaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Partida"
    objects: {
      torneio: Prisma.$TorneioPayload<ExtArgs>
      equipe1: Prisma.$EquipePayload<ExtArgs>
      equipe2: Prisma.$EquipePayload<ExtArgs>
      vencedor: Prisma.$EquipePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      torneioId: number
      fase: string
      pontosEquipe1: number | null
      pontosEquipe2: number | null
      vencedorId: number | null
      createdAt: Date
      updatedAt: Date
      equipe1Id: number
      equipe2Id: number
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
    equipe1<T extends EquipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipeDefaultArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    equipe2<T extends EquipeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EquipeDefaultArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vencedor<T extends Partida$vencedorArgs<ExtArgs> = {}>(args?: Subset<T, Partida$vencedorArgs<ExtArgs>>): Prisma__EquipeClient<$Result.GetResult<Prisma.$EquipePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly pontosEquipe1: FieldRef<"Partida", 'Int'>
    readonly pontosEquipe2: FieldRef<"Partida", 'Int'>
    readonly vencedorId: FieldRef<"Partida", 'Int'>
    readonly createdAt: FieldRef<"Partida", 'DateTime'>
    readonly updatedAt: FieldRef<"Partida", 'DateTime'>
    readonly equipe1Id: FieldRef<"Partida", 'Int'>
    readonly equipe2Id: FieldRef<"Partida", 'Int'>
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
   * Partida.vencedor
   */
  export type Partida$vencedorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    nivel: 'nivel'
  };

  export type AtletaScalarFieldEnum = (typeof AtletaScalarFieldEnum)[keyof typeof AtletaScalarFieldEnum]


  export const TorneioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    data: 'data',
    local: 'local',
    status: 'status',
    criadoPorId: 'criadoPorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TorneioScalarFieldEnum = (typeof TorneioScalarFieldEnum)[keyof typeof TorneioScalarFieldEnum]


  export const ParticipacaoScalarFieldEnum: {
    id: 'id',
    atletaId: 'atletaId',
    torneioId: 'torneioId',
    criadoEm: 'criadoEm'
  };

  export type ParticipacaoScalarFieldEnum = (typeof ParticipacaoScalarFieldEnum)[keyof typeof ParticipacaoScalarFieldEnum]


  export const EquipeScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    tipo: 'tipo',
    torneioId: 'torneioId',
    createdAt: 'createdAt'
  };

  export type EquipeScalarFieldEnum = (typeof EquipeScalarFieldEnum)[keyof typeof EquipeScalarFieldEnum]


  export const EquipeAtletaScalarFieldEnum: {
    atletaId: 'atletaId',
    equipeId: 'equipeId'
  };

  export type EquipeAtletaScalarFieldEnum = (typeof EquipeAtletaScalarFieldEnum)[keyof typeof EquipeAtletaScalarFieldEnum]


  export const PartidaScalarFieldEnum: {
    id: 'id',
    torneioId: 'torneioId',
    fase: 'fase',
    pontosEquipe1: 'pontosEquipe1',
    pontosEquipe2: 'pontosEquipe2',
    vencedorId: 'vencedorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    equipe1Id: 'equipe1Id',
    equipe2Id: 'equipe2Id'
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
   * Reference to a field of type 'StatusTorneio'
   */
  export type EnumStatusTorneioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusTorneio'>
    


  /**
   * Reference to a field of type 'StatusTorneio[]'
   */
  export type ListEnumStatusTorneioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatusTorneio[]'>
    


  /**
   * Reference to a field of type 'TipoEquipe'
   */
  export type EnumTipoEquipeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoEquipe'>
    


  /**
   * Reference to a field of type 'TipoEquipe[]'
   */
  export type ListEnumTipoEquipeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoEquipe[]'>
    


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
    torneios?: TorneioListRelationFilter
    Treinador?: TreinadorListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    senha?: SortOrder
    perfil?: SortOrder
    criadoEm?: SortOrder
    torneios?: TorneioOrderByRelationAggregateInput
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
    torneios?: TorneioListRelationFilter
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
    usuarioId?: number
    AND?: TreinadorWhereInput | TreinadorWhereInput[]
    OR?: TreinadorWhereInput[]
    NOT?: TreinadorWhereInput | TreinadorWhereInput[]
    nome?: StringFilter<"Treinador"> | string
    email?: StringFilter<"Treinador"> | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id" | "usuarioId">

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
    participacoes?: ParticipacaoListRelationFilter
    equipes?: EquipeAtletaListRelationFilter
  }

  export type AtletaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    genero?: SortOrder
    nivel?: SortOrderInput | SortOrder
    participacoes?: ParticipacaoOrderByRelationAggregateInput
    equipes?: EquipeAtletaOrderByRelationAggregateInput
  }

  export type AtletaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AtletaWhereInput | AtletaWhereInput[]
    OR?: AtletaWhereInput[]
    NOT?: AtletaWhereInput | AtletaWhereInput[]
    nome?: StringFilter<"Atleta"> | string
    genero?: StringFilter<"Atleta"> | string
    nivel?: StringNullableFilter<"Atleta"> | string | null
    participacoes?: ParticipacaoListRelationFilter
    equipes?: EquipeAtletaListRelationFilter
  }, "id" | "email">

  export type AtletaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    genero?: SortOrder
    nivel?: SortOrderInput | SortOrder
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
  }

  export type TorneioWhereInput = {
    AND?: TorneioWhereInput | TorneioWhereInput[]
    OR?: TorneioWhereInput[]
    NOT?: TorneioWhereInput | TorneioWhereInput[]
    id?: IntFilter<"Torneio"> | number
    nome?: StringFilter<"Torneio"> | string
    data?: DateTimeFilter<"Torneio"> | Date | string
    local?: StringNullableFilter<"Torneio"> | string | null
    status?: EnumStatusTorneioFilter<"Torneio"> | $Enums.StatusTorneio
    criadoPorId?: IntFilter<"Torneio"> | number
    createdAt?: DateTimeFilter<"Torneio"> | Date | string
    updatedAt?: DateTimeFilter<"Torneio"> | Date | string
    criadoPor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    participacoes?: ParticipacaoListRelationFilter
    equipes?: EquipeListRelationFilter
    partidas?: PartidaListRelationFilter
  }

  export type TorneioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    data?: SortOrder
    local?: SortOrderInput | SortOrder
    status?: SortOrder
    criadoPorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    criadoPor?: UsuarioOrderByWithRelationInput
    participacoes?: ParticipacaoOrderByRelationAggregateInput
    equipes?: EquipeOrderByRelationAggregateInput
    partidas?: PartidaOrderByRelationAggregateInput
  }

  export type TorneioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TorneioWhereInput | TorneioWhereInput[]
    OR?: TorneioWhereInput[]
    NOT?: TorneioWhereInput | TorneioWhereInput[]
    nome?: StringFilter<"Torneio"> | string
    data?: DateTimeFilter<"Torneio"> | Date | string
    local?: StringNullableFilter<"Torneio"> | string | null
    status?: EnumStatusTorneioFilter<"Torneio"> | $Enums.StatusTorneio
    criadoPorId?: IntFilter<"Torneio"> | number
    createdAt?: DateTimeFilter<"Torneio"> | Date | string
    updatedAt?: DateTimeFilter<"Torneio"> | Date | string
    criadoPor?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    participacoes?: ParticipacaoListRelationFilter
    equipes?: EquipeListRelationFilter
    partidas?: PartidaListRelationFilter
  }, "id">

  export type TorneioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
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
    data?: DateTimeWithAggregatesFilter<"Torneio"> | Date | string
    local?: StringNullableWithAggregatesFilter<"Torneio"> | string | null
    status?: EnumStatusTorneioWithAggregatesFilter<"Torneio"> | $Enums.StatusTorneio
    criadoPorId?: IntWithAggregatesFilter<"Torneio"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Torneio"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Torneio"> | Date | string
  }

  export type ParticipacaoWhereInput = {
    AND?: ParticipacaoWhereInput | ParticipacaoWhereInput[]
    OR?: ParticipacaoWhereInput[]
    NOT?: ParticipacaoWhereInput | ParticipacaoWhereInput[]
    id?: IntFilter<"Participacao"> | number
    atletaId?: IntFilter<"Participacao"> | number
    torneioId?: IntFilter<"Participacao"> | number
    criadoEm?: DateTimeFilter<"Participacao"> | Date | string
    atleta?: XOR<AtletaScalarRelationFilter, AtletaWhereInput>
    torneio?: XOR<TorneioScalarRelationFilter, TorneioWhereInput>
  }

  export type ParticipacaoOrderByWithRelationInput = {
    id?: SortOrder
    atletaId?: SortOrder
    torneioId?: SortOrder
    criadoEm?: SortOrder
    atleta?: AtletaOrderByWithRelationInput
    torneio?: TorneioOrderByWithRelationInput
  }

  export type ParticipacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    atletaId_torneioId?: ParticipacaoAtletaIdTorneioIdCompoundUniqueInput
    AND?: ParticipacaoWhereInput | ParticipacaoWhereInput[]
    OR?: ParticipacaoWhereInput[]
    NOT?: ParticipacaoWhereInput | ParticipacaoWhereInput[]
    atletaId?: IntFilter<"Participacao"> | number
    torneioId?: IntFilter<"Participacao"> | number
    criadoEm?: DateTimeFilter<"Participacao"> | Date | string
    atleta?: XOR<AtletaScalarRelationFilter, AtletaWhereInput>
    torneio?: XOR<TorneioScalarRelationFilter, TorneioWhereInput>
  }, "id" | "atletaId_torneioId">

  export type ParticipacaoOrderByWithAggregationInput = {
    id?: SortOrder
    atletaId?: SortOrder
    torneioId?: SortOrder
    criadoEm?: SortOrder
    _count?: ParticipacaoCountOrderByAggregateInput
    _avg?: ParticipacaoAvgOrderByAggregateInput
    _max?: ParticipacaoMaxOrderByAggregateInput
    _min?: ParticipacaoMinOrderByAggregateInput
    _sum?: ParticipacaoSumOrderByAggregateInput
  }

  export type ParticipacaoScalarWhereWithAggregatesInput = {
    AND?: ParticipacaoScalarWhereWithAggregatesInput | ParticipacaoScalarWhereWithAggregatesInput[]
    OR?: ParticipacaoScalarWhereWithAggregatesInput[]
    NOT?: ParticipacaoScalarWhereWithAggregatesInput | ParticipacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Participacao"> | number
    atletaId?: IntWithAggregatesFilter<"Participacao"> | number
    torneioId?: IntWithAggregatesFilter<"Participacao"> | number
    criadoEm?: DateTimeWithAggregatesFilter<"Participacao"> | Date | string
  }

  export type EquipeWhereInput = {
    AND?: EquipeWhereInput | EquipeWhereInput[]
    OR?: EquipeWhereInput[]
    NOT?: EquipeWhereInput | EquipeWhereInput[]
    id?: IntFilter<"Equipe"> | number
    nome?: StringFilter<"Equipe"> | string
    tipo?: EnumTipoEquipeFilter<"Equipe"> | $Enums.TipoEquipe
    torneioId?: IntFilter<"Equipe"> | number
    createdAt?: DateTimeFilter<"Equipe"> | Date | string
    torneio?: XOR<TorneioScalarRelationFilter, TorneioWhereInput>
    atletas?: EquipeAtletaListRelationFilter
    partidasComoEquipe1?: PartidaListRelationFilter
    partidasComoEquipe2?: PartidaListRelationFilter
    Partida?: PartidaListRelationFilter
  }

  export type EquipeOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    torneioId?: SortOrder
    createdAt?: SortOrder
    torneio?: TorneioOrderByWithRelationInput
    atletas?: EquipeAtletaOrderByRelationAggregateInput
    partidasComoEquipe1?: PartidaOrderByRelationAggregateInput
    partidasComoEquipe2?: PartidaOrderByRelationAggregateInput
    Partida?: PartidaOrderByRelationAggregateInput
  }

  export type EquipeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EquipeWhereInput | EquipeWhereInput[]
    OR?: EquipeWhereInput[]
    NOT?: EquipeWhereInput | EquipeWhereInput[]
    nome?: StringFilter<"Equipe"> | string
    tipo?: EnumTipoEquipeFilter<"Equipe"> | $Enums.TipoEquipe
    torneioId?: IntFilter<"Equipe"> | number
    createdAt?: DateTimeFilter<"Equipe"> | Date | string
    torneio?: XOR<TorneioScalarRelationFilter, TorneioWhereInput>
    atletas?: EquipeAtletaListRelationFilter
    partidasComoEquipe1?: PartidaListRelationFilter
    partidasComoEquipe2?: PartidaListRelationFilter
    Partida?: PartidaListRelationFilter
  }, "id">

  export type EquipeOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    torneioId?: SortOrder
    createdAt?: SortOrder
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
    tipo?: EnumTipoEquipeWithAggregatesFilter<"Equipe"> | $Enums.TipoEquipe
    torneioId?: IntWithAggregatesFilter<"Equipe"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Equipe"> | Date | string
  }

  export type EquipeAtletaWhereInput = {
    AND?: EquipeAtletaWhereInput | EquipeAtletaWhereInput[]
    OR?: EquipeAtletaWhereInput[]
    NOT?: EquipeAtletaWhereInput | EquipeAtletaWhereInput[]
    atletaId?: IntFilter<"EquipeAtleta"> | number
    equipeId?: IntFilter<"EquipeAtleta"> | number
    atleta?: XOR<AtletaScalarRelationFilter, AtletaWhereInput>
    equipe?: XOR<EquipeScalarRelationFilter, EquipeWhereInput>
  }

  export type EquipeAtletaOrderByWithRelationInput = {
    atletaId?: SortOrder
    equipeId?: SortOrder
    atleta?: AtletaOrderByWithRelationInput
    equipe?: EquipeOrderByWithRelationInput
  }

  export type EquipeAtletaWhereUniqueInput = Prisma.AtLeast<{
    atletaId_equipeId?: EquipeAtletaAtletaIdEquipeIdCompoundUniqueInput
    AND?: EquipeAtletaWhereInput | EquipeAtletaWhereInput[]
    OR?: EquipeAtletaWhereInput[]
    NOT?: EquipeAtletaWhereInput | EquipeAtletaWhereInput[]
    atletaId?: IntFilter<"EquipeAtleta"> | number
    equipeId?: IntFilter<"EquipeAtleta"> | number
    atleta?: XOR<AtletaScalarRelationFilter, AtletaWhereInput>
    equipe?: XOR<EquipeScalarRelationFilter, EquipeWhereInput>
  }, "atletaId_equipeId">

  export type EquipeAtletaOrderByWithAggregationInput = {
    atletaId?: SortOrder
    equipeId?: SortOrder
    _count?: EquipeAtletaCountOrderByAggregateInput
    _avg?: EquipeAtletaAvgOrderByAggregateInput
    _max?: EquipeAtletaMaxOrderByAggregateInput
    _min?: EquipeAtletaMinOrderByAggregateInput
    _sum?: EquipeAtletaSumOrderByAggregateInput
  }

  export type EquipeAtletaScalarWhereWithAggregatesInput = {
    AND?: EquipeAtletaScalarWhereWithAggregatesInput | EquipeAtletaScalarWhereWithAggregatesInput[]
    OR?: EquipeAtletaScalarWhereWithAggregatesInput[]
    NOT?: EquipeAtletaScalarWhereWithAggregatesInput | EquipeAtletaScalarWhereWithAggregatesInput[]
    atletaId?: IntWithAggregatesFilter<"EquipeAtleta"> | number
    equipeId?: IntWithAggregatesFilter<"EquipeAtleta"> | number
  }

  export type PartidaWhereInput = {
    AND?: PartidaWhereInput | PartidaWhereInput[]
    OR?: PartidaWhereInput[]
    NOT?: PartidaWhereInput | PartidaWhereInput[]
    id?: IntFilter<"Partida"> | number
    torneioId?: IntFilter<"Partida"> | number
    fase?: StringFilter<"Partida"> | string
    pontosEquipe1?: IntNullableFilter<"Partida"> | number | null
    pontosEquipe2?: IntNullableFilter<"Partida"> | number | null
    vencedorId?: IntNullableFilter<"Partida"> | number | null
    createdAt?: DateTimeFilter<"Partida"> | Date | string
    updatedAt?: DateTimeFilter<"Partida"> | Date | string
    equipe1Id?: IntFilter<"Partida"> | number
    equipe2Id?: IntFilter<"Partida"> | number
    torneio?: XOR<TorneioScalarRelationFilter, TorneioWhereInput>
    equipe1?: XOR<EquipeScalarRelationFilter, EquipeWhereInput>
    equipe2?: XOR<EquipeScalarRelationFilter, EquipeWhereInput>
    vencedor?: XOR<EquipeNullableScalarRelationFilter, EquipeWhereInput> | null
  }

  export type PartidaOrderByWithRelationInput = {
    id?: SortOrder
    torneioId?: SortOrder
    fase?: SortOrder
    pontosEquipe1?: SortOrderInput | SortOrder
    pontosEquipe2?: SortOrderInput | SortOrder
    vencedorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    equipe1Id?: SortOrder
    equipe2Id?: SortOrder
    torneio?: TorneioOrderByWithRelationInput
    equipe1?: EquipeOrderByWithRelationInput
    equipe2?: EquipeOrderByWithRelationInput
    vencedor?: EquipeOrderByWithRelationInput
  }

  export type PartidaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PartidaWhereInput | PartidaWhereInput[]
    OR?: PartidaWhereInput[]
    NOT?: PartidaWhereInput | PartidaWhereInput[]
    torneioId?: IntFilter<"Partida"> | number
    fase?: StringFilter<"Partida"> | string
    pontosEquipe1?: IntNullableFilter<"Partida"> | number | null
    pontosEquipe2?: IntNullableFilter<"Partida"> | number | null
    vencedorId?: IntNullableFilter<"Partida"> | number | null
    createdAt?: DateTimeFilter<"Partida"> | Date | string
    updatedAt?: DateTimeFilter<"Partida"> | Date | string
    equipe1Id?: IntFilter<"Partida"> | number
    equipe2Id?: IntFilter<"Partida"> | number
    torneio?: XOR<TorneioScalarRelationFilter, TorneioWhereInput>
    equipe1?: XOR<EquipeScalarRelationFilter, EquipeWhereInput>
    equipe2?: XOR<EquipeScalarRelationFilter, EquipeWhereInput>
    vencedor?: XOR<EquipeNullableScalarRelationFilter, EquipeWhereInput> | null
  }, "id">

  export type PartidaOrderByWithAggregationInput = {
    id?: SortOrder
    torneioId?: SortOrder
    fase?: SortOrder
    pontosEquipe1?: SortOrderInput | SortOrder
    pontosEquipe2?: SortOrderInput | SortOrder
    vencedorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    equipe1Id?: SortOrder
    equipe2Id?: SortOrder
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
    pontosEquipe1?: IntNullableWithAggregatesFilter<"Partida"> | number | null
    pontosEquipe2?: IntNullableWithAggregatesFilter<"Partida"> | number | null
    vencedorId?: IntNullableWithAggregatesFilter<"Partida"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Partida"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Partida"> | Date | string
    equipe1Id?: IntWithAggregatesFilter<"Partida"> | number
    equipe2Id?: IntWithAggregatesFilter<"Partida"> | number
  }

  export type UsuarioCreateInput = {
    nome: string
    email: string
    senha: string
    perfil: string
    criadoEm?: Date | string
    torneios?: TorneioCreateNestedManyWithoutCriadoPorInput
    Treinador?: TreinadorCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    senha: string
    perfil: string
    criadoEm?: Date | string
    torneios?: TorneioUncheckedCreateNestedManyWithoutCriadoPorInput
    Treinador?: TreinadorUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    perfil?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    torneios?: TorneioUpdateManyWithoutCriadoPorNestedInput
    Treinador?: TreinadorUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    perfil?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    torneios?: TorneioUncheckedUpdateManyWithoutCriadoPorNestedInput
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
    participacoes?: ParticipacaoCreateNestedManyWithoutAtletaInput
    equipes?: EquipeAtletaCreateNestedManyWithoutAtletaInput
  }

  export type AtletaUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    genero: string
    nivel?: string | null
    participacoes?: ParticipacaoUncheckedCreateNestedManyWithoutAtletaInput
    equipes?: EquipeAtletaUncheckedCreateNestedManyWithoutAtletaInput
  }

  export type AtletaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    nivel?: NullableStringFieldUpdateOperationsInput | string | null
    participacoes?: ParticipacaoUpdateManyWithoutAtletaNestedInput
    equipes?: EquipeAtletaUpdateManyWithoutAtletaNestedInput
  }

  export type AtletaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    nivel?: NullableStringFieldUpdateOperationsInput | string | null
    participacoes?: ParticipacaoUncheckedUpdateManyWithoutAtletaNestedInput
    equipes?: EquipeAtletaUncheckedUpdateManyWithoutAtletaNestedInput
  }

  export type AtletaCreateManyInput = {
    id?: number
    nome: string
    email: string
    genero: string
    nivel?: string | null
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
  }

  export type TorneioCreateInput = {
    nome: string
    data: Date | string
    local?: string | null
    status?: $Enums.StatusTorneio
    createdAt?: Date | string
    updatedAt?: Date | string
    criadoPor: UsuarioCreateNestedOneWithoutTorneiosInput
    participacoes?: ParticipacaoCreateNestedManyWithoutTorneioInput
    equipes?: EquipeCreateNestedManyWithoutTorneioInput
    partidas?: PartidaCreateNestedManyWithoutTorneioInput
  }

  export type TorneioUncheckedCreateInput = {
    id?: number
    nome: string
    data: Date | string
    local?: string | null
    status?: $Enums.StatusTorneio
    criadoPorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    participacoes?: ParticipacaoUncheckedCreateNestedManyWithoutTorneioInput
    equipes?: EquipeUncheckedCreateNestedManyWithoutTorneioInput
    partidas?: PartidaUncheckedCreateNestedManyWithoutTorneioInput
  }

  export type TorneioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTorneioFieldUpdateOperationsInput | $Enums.StatusTorneio
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: UsuarioUpdateOneRequiredWithoutTorneiosNestedInput
    participacoes?: ParticipacaoUpdateManyWithoutTorneioNestedInput
    equipes?: EquipeUpdateManyWithoutTorneioNestedInput
    partidas?: PartidaUpdateManyWithoutTorneioNestedInput
  }

  export type TorneioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTorneioFieldUpdateOperationsInput | $Enums.StatusTorneio
    criadoPorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participacoes?: ParticipacaoUncheckedUpdateManyWithoutTorneioNestedInput
    equipes?: EquipeUncheckedUpdateManyWithoutTorneioNestedInput
    partidas?: PartidaUncheckedUpdateManyWithoutTorneioNestedInput
  }

  export type TorneioCreateManyInput = {
    id?: number
    nome: string
    data: Date | string
    local?: string | null
    status?: $Enums.StatusTorneio
    criadoPorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TorneioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTorneioFieldUpdateOperationsInput | $Enums.StatusTorneio
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TorneioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTorneioFieldUpdateOperationsInput | $Enums.StatusTorneio
    criadoPorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipacaoCreateInput = {
    criadoEm?: Date | string
    atleta: AtletaCreateNestedOneWithoutParticipacoesInput
    torneio: TorneioCreateNestedOneWithoutParticipacoesInput
  }

  export type ParticipacaoUncheckedCreateInput = {
    id?: number
    atletaId: number
    torneioId: number
    criadoEm?: Date | string
  }

  export type ParticipacaoUpdateInput = {
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atleta?: AtletaUpdateOneRequiredWithoutParticipacoesNestedInput
    torneio?: TorneioUpdateOneRequiredWithoutParticipacoesNestedInput
  }

  export type ParticipacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    atletaId?: IntFieldUpdateOperationsInput | number
    torneioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipacaoCreateManyInput = {
    id?: number
    atletaId: number
    torneioId: number
    criadoEm?: Date | string
  }

  export type ParticipacaoUpdateManyMutationInput = {
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    atletaId?: IntFieldUpdateOperationsInput | number
    torneioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipeCreateInput = {
    nome: string
    tipo: $Enums.TipoEquipe
    createdAt?: Date | string
    torneio: TorneioCreateNestedOneWithoutEquipesInput
    atletas?: EquipeAtletaCreateNestedManyWithoutEquipeInput
    partidasComoEquipe1?: PartidaCreateNestedManyWithoutEquipe1Input
    partidasComoEquipe2?: PartidaCreateNestedManyWithoutEquipe2Input
    Partida?: PartidaCreateNestedManyWithoutVencedorInput
  }

  export type EquipeUncheckedCreateInput = {
    id?: number
    nome: string
    tipo: $Enums.TipoEquipe
    torneioId: number
    createdAt?: Date | string
    atletas?: EquipeAtletaUncheckedCreateNestedManyWithoutEquipeInput
    partidasComoEquipe1?: PartidaUncheckedCreateNestedManyWithoutEquipe1Input
    partidasComoEquipe2?: PartidaUncheckedCreateNestedManyWithoutEquipe2Input
    Partida?: PartidaUncheckedCreateNestedManyWithoutVencedorInput
  }

  export type EquipeUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEquipeFieldUpdateOperationsInput | $Enums.TipoEquipe
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    torneio?: TorneioUpdateOneRequiredWithoutEquipesNestedInput
    atletas?: EquipeAtletaUpdateManyWithoutEquipeNestedInput
    partidasComoEquipe1?: PartidaUpdateManyWithoutEquipe1NestedInput
    partidasComoEquipe2?: PartidaUpdateManyWithoutEquipe2NestedInput
    Partida?: PartidaUpdateManyWithoutVencedorNestedInput
  }

  export type EquipeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEquipeFieldUpdateOperationsInput | $Enums.TipoEquipe
    torneioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atletas?: EquipeAtletaUncheckedUpdateManyWithoutEquipeNestedInput
    partidasComoEquipe1?: PartidaUncheckedUpdateManyWithoutEquipe1NestedInput
    partidasComoEquipe2?: PartidaUncheckedUpdateManyWithoutEquipe2NestedInput
    Partida?: PartidaUncheckedUpdateManyWithoutVencedorNestedInput
  }

  export type EquipeCreateManyInput = {
    id?: number
    nome: string
    tipo: $Enums.TipoEquipe
    torneioId: number
    createdAt?: Date | string
  }

  export type EquipeUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEquipeFieldUpdateOperationsInput | $Enums.TipoEquipe
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEquipeFieldUpdateOperationsInput | $Enums.TipoEquipe
    torneioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipeAtletaCreateInput = {
    atleta: AtletaCreateNestedOneWithoutEquipesInput
    equipe: EquipeCreateNestedOneWithoutAtletasInput
  }

  export type EquipeAtletaUncheckedCreateInput = {
    atletaId: number
    equipeId: number
  }

  export type EquipeAtletaUpdateInput = {
    atleta?: AtletaUpdateOneRequiredWithoutEquipesNestedInput
    equipe?: EquipeUpdateOneRequiredWithoutAtletasNestedInput
  }

  export type EquipeAtletaUncheckedUpdateInput = {
    atletaId?: IntFieldUpdateOperationsInput | number
    equipeId?: IntFieldUpdateOperationsInput | number
  }

  export type EquipeAtletaCreateManyInput = {
    atletaId: number
    equipeId: number
  }

  export type EquipeAtletaUpdateManyMutationInput = {

  }

  export type EquipeAtletaUncheckedUpdateManyInput = {
    atletaId?: IntFieldUpdateOperationsInput | number
    equipeId?: IntFieldUpdateOperationsInput | number
  }

  export type PartidaCreateInput = {
    fase: string
    pontosEquipe1?: number | null
    pontosEquipe2?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    torneio: TorneioCreateNestedOneWithoutPartidasInput
    equipe1: EquipeCreateNestedOneWithoutPartidasComoEquipe1Input
    equipe2: EquipeCreateNestedOneWithoutPartidasComoEquipe2Input
    vencedor?: EquipeCreateNestedOneWithoutPartidaInput
  }

  export type PartidaUncheckedCreateInput = {
    id?: number
    torneioId: number
    fase: string
    pontosEquipe1?: number | null
    pontosEquipe2?: number | null
    vencedorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    equipe1Id: number
    equipe2Id: number
  }

  export type PartidaUpdateInput = {
    fase?: StringFieldUpdateOperationsInput | string
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    torneio?: TorneioUpdateOneRequiredWithoutPartidasNestedInput
    equipe1?: EquipeUpdateOneRequiredWithoutPartidasComoEquipe1NestedInput
    equipe2?: EquipeUpdateOneRequiredWithoutPartidasComoEquipe2NestedInput
    vencedor?: EquipeUpdateOneWithoutPartidaNestedInput
  }

  export type PartidaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    torneioId?: IntFieldUpdateOperationsInput | number
    fase?: StringFieldUpdateOperationsInput | string
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    vencedorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipe1Id?: IntFieldUpdateOperationsInput | number
    equipe2Id?: IntFieldUpdateOperationsInput | number
  }

  export type PartidaCreateManyInput = {
    id?: number
    torneioId: number
    fase: string
    pontosEquipe1?: number | null
    pontosEquipe2?: number | null
    vencedorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    equipe1Id: number
    equipe2Id: number
  }

  export type PartidaUpdateManyMutationInput = {
    fase?: StringFieldUpdateOperationsInput | string
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartidaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    torneioId?: IntFieldUpdateOperationsInput | number
    fase?: StringFieldUpdateOperationsInput | string
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    vencedorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipe1Id?: IntFieldUpdateOperationsInput | number
    equipe2Id?: IntFieldUpdateOperationsInput | number
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

  export type ParticipacaoListRelationFilter = {
    every?: ParticipacaoWhereInput
    some?: ParticipacaoWhereInput
    none?: ParticipacaoWhereInput
  }

  export type EquipeAtletaListRelationFilter = {
    every?: EquipeAtletaWhereInput
    some?: EquipeAtletaWhereInput
    none?: EquipeAtletaWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ParticipacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EquipeAtletaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AtletaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    genero?: SortOrder
    nivel?: SortOrder
  }

  export type AtletaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AtletaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    genero?: SortOrder
    nivel?: SortOrder
  }

  export type AtletaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    genero?: SortOrder
    nivel?: SortOrder
  }

  export type AtletaSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumStatusTorneioFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusTorneio | EnumStatusTorneioFieldRefInput<$PrismaModel>
    in?: $Enums.StatusTorneio[] | ListEnumStatusTorneioFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusTorneio[] | ListEnumStatusTorneioFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusTorneioFilter<$PrismaModel> | $Enums.StatusTorneio
  }

  export type EquipeListRelationFilter = {
    every?: EquipeWhereInput
    some?: EquipeWhereInput
    none?: EquipeWhereInput
  }

  export type PartidaListRelationFilter = {
    every?: PartidaWhereInput
    some?: PartidaWhereInput
    none?: PartidaWhereInput
  }

  export type EquipeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PartidaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TorneioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
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

  export type ParticipacaoAtletaIdTorneioIdCompoundUniqueInput = {
    atletaId: number
    torneioId: number
  }

  export type ParticipacaoCountOrderByAggregateInput = {
    id?: SortOrder
    atletaId?: SortOrder
    torneioId?: SortOrder
    criadoEm?: SortOrder
  }

  export type ParticipacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    atletaId?: SortOrder
    torneioId?: SortOrder
  }

  export type ParticipacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    atletaId?: SortOrder
    torneioId?: SortOrder
    criadoEm?: SortOrder
  }

  export type ParticipacaoMinOrderByAggregateInput = {
    id?: SortOrder
    atletaId?: SortOrder
    torneioId?: SortOrder
    criadoEm?: SortOrder
  }

  export type ParticipacaoSumOrderByAggregateInput = {
    id?: SortOrder
    atletaId?: SortOrder
    torneioId?: SortOrder
  }

  export type EnumTipoEquipeFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoEquipe | EnumTipoEquipeFieldRefInput<$PrismaModel>
    in?: $Enums.TipoEquipe[] | ListEnumTipoEquipeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoEquipe[] | ListEnumTipoEquipeFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoEquipeFilter<$PrismaModel> | $Enums.TipoEquipe
  }

  export type EquipeCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    torneioId?: SortOrder
    createdAt?: SortOrder
  }

  export type EquipeAvgOrderByAggregateInput = {
    id?: SortOrder
    torneioId?: SortOrder
  }

  export type EquipeMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    torneioId?: SortOrder
    createdAt?: SortOrder
  }

  export type EquipeMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    tipo?: SortOrder
    torneioId?: SortOrder
    createdAt?: SortOrder
  }

  export type EquipeSumOrderByAggregateInput = {
    id?: SortOrder
    torneioId?: SortOrder
  }

  export type EnumTipoEquipeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoEquipe | EnumTipoEquipeFieldRefInput<$PrismaModel>
    in?: $Enums.TipoEquipe[] | ListEnumTipoEquipeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoEquipe[] | ListEnumTipoEquipeFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoEquipeWithAggregatesFilter<$PrismaModel> | $Enums.TipoEquipe
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoEquipeFilter<$PrismaModel>
    _max?: NestedEnumTipoEquipeFilter<$PrismaModel>
  }

  export type EquipeScalarRelationFilter = {
    is?: EquipeWhereInput
    isNot?: EquipeWhereInput
  }

  export type EquipeAtletaAtletaIdEquipeIdCompoundUniqueInput = {
    atletaId: number
    equipeId: number
  }

  export type EquipeAtletaCountOrderByAggregateInput = {
    atletaId?: SortOrder
    equipeId?: SortOrder
  }

  export type EquipeAtletaAvgOrderByAggregateInput = {
    atletaId?: SortOrder
    equipeId?: SortOrder
  }

  export type EquipeAtletaMaxOrderByAggregateInput = {
    atletaId?: SortOrder
    equipeId?: SortOrder
  }

  export type EquipeAtletaMinOrderByAggregateInput = {
    atletaId?: SortOrder
    equipeId?: SortOrder
  }

  export type EquipeAtletaSumOrderByAggregateInput = {
    atletaId?: SortOrder
    equipeId?: SortOrder
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

  export type PartidaCountOrderByAggregateInput = {
    id?: SortOrder
    torneioId?: SortOrder
    fase?: SortOrder
    pontosEquipe1?: SortOrder
    pontosEquipe2?: SortOrder
    vencedorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    equipe1Id?: SortOrder
    equipe2Id?: SortOrder
  }

  export type PartidaAvgOrderByAggregateInput = {
    id?: SortOrder
    torneioId?: SortOrder
    pontosEquipe1?: SortOrder
    pontosEquipe2?: SortOrder
    vencedorId?: SortOrder
    equipe1Id?: SortOrder
    equipe2Id?: SortOrder
  }

  export type PartidaMaxOrderByAggregateInput = {
    id?: SortOrder
    torneioId?: SortOrder
    fase?: SortOrder
    pontosEquipe1?: SortOrder
    pontosEquipe2?: SortOrder
    vencedorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    equipe1Id?: SortOrder
    equipe2Id?: SortOrder
  }

  export type PartidaMinOrderByAggregateInput = {
    id?: SortOrder
    torneioId?: SortOrder
    fase?: SortOrder
    pontosEquipe1?: SortOrder
    pontosEquipe2?: SortOrder
    vencedorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    equipe1Id?: SortOrder
    equipe2Id?: SortOrder
  }

  export type PartidaSumOrderByAggregateInput = {
    id?: SortOrder
    torneioId?: SortOrder
    pontosEquipe1?: SortOrder
    pontosEquipe2?: SortOrder
    vencedorId?: SortOrder
    equipe1Id?: SortOrder
    equipe2Id?: SortOrder
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

  export type TorneioCreateNestedManyWithoutCriadoPorInput = {
    create?: XOR<TorneioCreateWithoutCriadoPorInput, TorneioUncheckedCreateWithoutCriadoPorInput> | TorneioCreateWithoutCriadoPorInput[] | TorneioUncheckedCreateWithoutCriadoPorInput[]
    connectOrCreate?: TorneioCreateOrConnectWithoutCriadoPorInput | TorneioCreateOrConnectWithoutCriadoPorInput[]
    createMany?: TorneioCreateManyCriadoPorInputEnvelope
    connect?: TorneioWhereUniqueInput | TorneioWhereUniqueInput[]
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

  export type ParticipacaoCreateNestedManyWithoutAtletaInput = {
    create?: XOR<ParticipacaoCreateWithoutAtletaInput, ParticipacaoUncheckedCreateWithoutAtletaInput> | ParticipacaoCreateWithoutAtletaInput[] | ParticipacaoUncheckedCreateWithoutAtletaInput[]
    connectOrCreate?: ParticipacaoCreateOrConnectWithoutAtletaInput | ParticipacaoCreateOrConnectWithoutAtletaInput[]
    createMany?: ParticipacaoCreateManyAtletaInputEnvelope
    connect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
  }

  export type EquipeAtletaCreateNestedManyWithoutAtletaInput = {
    create?: XOR<EquipeAtletaCreateWithoutAtletaInput, EquipeAtletaUncheckedCreateWithoutAtletaInput> | EquipeAtletaCreateWithoutAtletaInput[] | EquipeAtletaUncheckedCreateWithoutAtletaInput[]
    connectOrCreate?: EquipeAtletaCreateOrConnectWithoutAtletaInput | EquipeAtletaCreateOrConnectWithoutAtletaInput[]
    createMany?: EquipeAtletaCreateManyAtletaInputEnvelope
    connect?: EquipeAtletaWhereUniqueInput | EquipeAtletaWhereUniqueInput[]
  }

  export type ParticipacaoUncheckedCreateNestedManyWithoutAtletaInput = {
    create?: XOR<ParticipacaoCreateWithoutAtletaInput, ParticipacaoUncheckedCreateWithoutAtletaInput> | ParticipacaoCreateWithoutAtletaInput[] | ParticipacaoUncheckedCreateWithoutAtletaInput[]
    connectOrCreate?: ParticipacaoCreateOrConnectWithoutAtletaInput | ParticipacaoCreateOrConnectWithoutAtletaInput[]
    createMany?: ParticipacaoCreateManyAtletaInputEnvelope
    connect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
  }

  export type EquipeAtletaUncheckedCreateNestedManyWithoutAtletaInput = {
    create?: XOR<EquipeAtletaCreateWithoutAtletaInput, EquipeAtletaUncheckedCreateWithoutAtletaInput> | EquipeAtletaCreateWithoutAtletaInput[] | EquipeAtletaUncheckedCreateWithoutAtletaInput[]
    connectOrCreate?: EquipeAtletaCreateOrConnectWithoutAtletaInput | EquipeAtletaCreateOrConnectWithoutAtletaInput[]
    createMany?: EquipeAtletaCreateManyAtletaInputEnvelope
    connect?: EquipeAtletaWhereUniqueInput | EquipeAtletaWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ParticipacaoUpdateManyWithoutAtletaNestedInput = {
    create?: XOR<ParticipacaoCreateWithoutAtletaInput, ParticipacaoUncheckedCreateWithoutAtletaInput> | ParticipacaoCreateWithoutAtletaInput[] | ParticipacaoUncheckedCreateWithoutAtletaInput[]
    connectOrCreate?: ParticipacaoCreateOrConnectWithoutAtletaInput | ParticipacaoCreateOrConnectWithoutAtletaInput[]
    upsert?: ParticipacaoUpsertWithWhereUniqueWithoutAtletaInput | ParticipacaoUpsertWithWhereUniqueWithoutAtletaInput[]
    createMany?: ParticipacaoCreateManyAtletaInputEnvelope
    set?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    disconnect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    delete?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    connect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    update?: ParticipacaoUpdateWithWhereUniqueWithoutAtletaInput | ParticipacaoUpdateWithWhereUniqueWithoutAtletaInput[]
    updateMany?: ParticipacaoUpdateManyWithWhereWithoutAtletaInput | ParticipacaoUpdateManyWithWhereWithoutAtletaInput[]
    deleteMany?: ParticipacaoScalarWhereInput | ParticipacaoScalarWhereInput[]
  }

  export type EquipeAtletaUpdateManyWithoutAtletaNestedInput = {
    create?: XOR<EquipeAtletaCreateWithoutAtletaInput, EquipeAtletaUncheckedCreateWithoutAtletaInput> | EquipeAtletaCreateWithoutAtletaInput[] | EquipeAtletaUncheckedCreateWithoutAtletaInput[]
    connectOrCreate?: EquipeAtletaCreateOrConnectWithoutAtletaInput | EquipeAtletaCreateOrConnectWithoutAtletaInput[]
    upsert?: EquipeAtletaUpsertWithWhereUniqueWithoutAtletaInput | EquipeAtletaUpsertWithWhereUniqueWithoutAtletaInput[]
    createMany?: EquipeAtletaCreateManyAtletaInputEnvelope
    set?: EquipeAtletaWhereUniqueInput | EquipeAtletaWhereUniqueInput[]
    disconnect?: EquipeAtletaWhereUniqueInput | EquipeAtletaWhereUniqueInput[]
    delete?: EquipeAtletaWhereUniqueInput | EquipeAtletaWhereUniqueInput[]
    connect?: EquipeAtletaWhereUniqueInput | EquipeAtletaWhereUniqueInput[]
    update?: EquipeAtletaUpdateWithWhereUniqueWithoutAtletaInput | EquipeAtletaUpdateWithWhereUniqueWithoutAtletaInput[]
    updateMany?: EquipeAtletaUpdateManyWithWhereWithoutAtletaInput | EquipeAtletaUpdateManyWithWhereWithoutAtletaInput[]
    deleteMany?: EquipeAtletaScalarWhereInput | EquipeAtletaScalarWhereInput[]
  }

  export type ParticipacaoUncheckedUpdateManyWithoutAtletaNestedInput = {
    create?: XOR<ParticipacaoCreateWithoutAtletaInput, ParticipacaoUncheckedCreateWithoutAtletaInput> | ParticipacaoCreateWithoutAtletaInput[] | ParticipacaoUncheckedCreateWithoutAtletaInput[]
    connectOrCreate?: ParticipacaoCreateOrConnectWithoutAtletaInput | ParticipacaoCreateOrConnectWithoutAtletaInput[]
    upsert?: ParticipacaoUpsertWithWhereUniqueWithoutAtletaInput | ParticipacaoUpsertWithWhereUniqueWithoutAtletaInput[]
    createMany?: ParticipacaoCreateManyAtletaInputEnvelope
    set?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    disconnect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    delete?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    connect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    update?: ParticipacaoUpdateWithWhereUniqueWithoutAtletaInput | ParticipacaoUpdateWithWhereUniqueWithoutAtletaInput[]
    updateMany?: ParticipacaoUpdateManyWithWhereWithoutAtletaInput | ParticipacaoUpdateManyWithWhereWithoutAtletaInput[]
    deleteMany?: ParticipacaoScalarWhereInput | ParticipacaoScalarWhereInput[]
  }

  export type EquipeAtletaUncheckedUpdateManyWithoutAtletaNestedInput = {
    create?: XOR<EquipeAtletaCreateWithoutAtletaInput, EquipeAtletaUncheckedCreateWithoutAtletaInput> | EquipeAtletaCreateWithoutAtletaInput[] | EquipeAtletaUncheckedCreateWithoutAtletaInput[]
    connectOrCreate?: EquipeAtletaCreateOrConnectWithoutAtletaInput | EquipeAtletaCreateOrConnectWithoutAtletaInput[]
    upsert?: EquipeAtletaUpsertWithWhereUniqueWithoutAtletaInput | EquipeAtletaUpsertWithWhereUniqueWithoutAtletaInput[]
    createMany?: EquipeAtletaCreateManyAtletaInputEnvelope
    set?: EquipeAtletaWhereUniqueInput | EquipeAtletaWhereUniqueInput[]
    disconnect?: EquipeAtletaWhereUniqueInput | EquipeAtletaWhereUniqueInput[]
    delete?: EquipeAtletaWhereUniqueInput | EquipeAtletaWhereUniqueInput[]
    connect?: EquipeAtletaWhereUniqueInput | EquipeAtletaWhereUniqueInput[]
    update?: EquipeAtletaUpdateWithWhereUniqueWithoutAtletaInput | EquipeAtletaUpdateWithWhereUniqueWithoutAtletaInput[]
    updateMany?: EquipeAtletaUpdateManyWithWhereWithoutAtletaInput | EquipeAtletaUpdateManyWithWhereWithoutAtletaInput[]
    deleteMany?: EquipeAtletaScalarWhereInput | EquipeAtletaScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutTorneiosInput = {
    create?: XOR<UsuarioCreateWithoutTorneiosInput, UsuarioUncheckedCreateWithoutTorneiosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTorneiosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ParticipacaoCreateNestedManyWithoutTorneioInput = {
    create?: XOR<ParticipacaoCreateWithoutTorneioInput, ParticipacaoUncheckedCreateWithoutTorneioInput> | ParticipacaoCreateWithoutTorneioInput[] | ParticipacaoUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: ParticipacaoCreateOrConnectWithoutTorneioInput | ParticipacaoCreateOrConnectWithoutTorneioInput[]
    createMany?: ParticipacaoCreateManyTorneioInputEnvelope
    connect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
  }

  export type EquipeCreateNestedManyWithoutTorneioInput = {
    create?: XOR<EquipeCreateWithoutTorneioInput, EquipeUncheckedCreateWithoutTorneioInput> | EquipeCreateWithoutTorneioInput[] | EquipeUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: EquipeCreateOrConnectWithoutTorneioInput | EquipeCreateOrConnectWithoutTorneioInput[]
    createMany?: EquipeCreateManyTorneioInputEnvelope
    connect?: EquipeWhereUniqueInput | EquipeWhereUniqueInput[]
  }

  export type PartidaCreateNestedManyWithoutTorneioInput = {
    create?: XOR<PartidaCreateWithoutTorneioInput, PartidaUncheckedCreateWithoutTorneioInput> | PartidaCreateWithoutTorneioInput[] | PartidaUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: PartidaCreateOrConnectWithoutTorneioInput | PartidaCreateOrConnectWithoutTorneioInput[]
    createMany?: PartidaCreateManyTorneioInputEnvelope
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
  }

  export type ParticipacaoUncheckedCreateNestedManyWithoutTorneioInput = {
    create?: XOR<ParticipacaoCreateWithoutTorneioInput, ParticipacaoUncheckedCreateWithoutTorneioInput> | ParticipacaoCreateWithoutTorneioInput[] | ParticipacaoUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: ParticipacaoCreateOrConnectWithoutTorneioInput | ParticipacaoCreateOrConnectWithoutTorneioInput[]
    createMany?: ParticipacaoCreateManyTorneioInputEnvelope
    connect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
  }

  export type EquipeUncheckedCreateNestedManyWithoutTorneioInput = {
    create?: XOR<EquipeCreateWithoutTorneioInput, EquipeUncheckedCreateWithoutTorneioInput> | EquipeCreateWithoutTorneioInput[] | EquipeUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: EquipeCreateOrConnectWithoutTorneioInput | EquipeCreateOrConnectWithoutTorneioInput[]
    createMany?: EquipeCreateManyTorneioInputEnvelope
    connect?: EquipeWhereUniqueInput | EquipeWhereUniqueInput[]
  }

  export type PartidaUncheckedCreateNestedManyWithoutTorneioInput = {
    create?: XOR<PartidaCreateWithoutTorneioInput, PartidaUncheckedCreateWithoutTorneioInput> | PartidaCreateWithoutTorneioInput[] | PartidaUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: PartidaCreateOrConnectWithoutTorneioInput | PartidaCreateOrConnectWithoutTorneioInput[]
    createMany?: PartidaCreateManyTorneioInputEnvelope
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
  }

  export type EnumStatusTorneioFieldUpdateOperationsInput = {
    set?: $Enums.StatusTorneio
  }

  export type UsuarioUpdateOneRequiredWithoutTorneiosNestedInput = {
    create?: XOR<UsuarioCreateWithoutTorneiosInput, UsuarioUncheckedCreateWithoutTorneiosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutTorneiosInput
    upsert?: UsuarioUpsertWithoutTorneiosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutTorneiosInput, UsuarioUpdateWithoutTorneiosInput>, UsuarioUncheckedUpdateWithoutTorneiosInput>
  }

  export type ParticipacaoUpdateManyWithoutTorneioNestedInput = {
    create?: XOR<ParticipacaoCreateWithoutTorneioInput, ParticipacaoUncheckedCreateWithoutTorneioInput> | ParticipacaoCreateWithoutTorneioInput[] | ParticipacaoUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: ParticipacaoCreateOrConnectWithoutTorneioInput | ParticipacaoCreateOrConnectWithoutTorneioInput[]
    upsert?: ParticipacaoUpsertWithWhereUniqueWithoutTorneioInput | ParticipacaoUpsertWithWhereUniqueWithoutTorneioInput[]
    createMany?: ParticipacaoCreateManyTorneioInputEnvelope
    set?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    disconnect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    delete?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    connect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    update?: ParticipacaoUpdateWithWhereUniqueWithoutTorneioInput | ParticipacaoUpdateWithWhereUniqueWithoutTorneioInput[]
    updateMany?: ParticipacaoUpdateManyWithWhereWithoutTorneioInput | ParticipacaoUpdateManyWithWhereWithoutTorneioInput[]
    deleteMany?: ParticipacaoScalarWhereInput | ParticipacaoScalarWhereInput[]
  }

  export type EquipeUpdateManyWithoutTorneioNestedInput = {
    create?: XOR<EquipeCreateWithoutTorneioInput, EquipeUncheckedCreateWithoutTorneioInput> | EquipeCreateWithoutTorneioInput[] | EquipeUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: EquipeCreateOrConnectWithoutTorneioInput | EquipeCreateOrConnectWithoutTorneioInput[]
    upsert?: EquipeUpsertWithWhereUniqueWithoutTorneioInput | EquipeUpsertWithWhereUniqueWithoutTorneioInput[]
    createMany?: EquipeCreateManyTorneioInputEnvelope
    set?: EquipeWhereUniqueInput | EquipeWhereUniqueInput[]
    disconnect?: EquipeWhereUniqueInput | EquipeWhereUniqueInput[]
    delete?: EquipeWhereUniqueInput | EquipeWhereUniqueInput[]
    connect?: EquipeWhereUniqueInput | EquipeWhereUniqueInput[]
    update?: EquipeUpdateWithWhereUniqueWithoutTorneioInput | EquipeUpdateWithWhereUniqueWithoutTorneioInput[]
    updateMany?: EquipeUpdateManyWithWhereWithoutTorneioInput | EquipeUpdateManyWithWhereWithoutTorneioInput[]
    deleteMany?: EquipeScalarWhereInput | EquipeScalarWhereInput[]
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

  export type ParticipacaoUncheckedUpdateManyWithoutTorneioNestedInput = {
    create?: XOR<ParticipacaoCreateWithoutTorneioInput, ParticipacaoUncheckedCreateWithoutTorneioInput> | ParticipacaoCreateWithoutTorneioInput[] | ParticipacaoUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: ParticipacaoCreateOrConnectWithoutTorneioInput | ParticipacaoCreateOrConnectWithoutTorneioInput[]
    upsert?: ParticipacaoUpsertWithWhereUniqueWithoutTorneioInput | ParticipacaoUpsertWithWhereUniqueWithoutTorneioInput[]
    createMany?: ParticipacaoCreateManyTorneioInputEnvelope
    set?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    disconnect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    delete?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    connect?: ParticipacaoWhereUniqueInput | ParticipacaoWhereUniqueInput[]
    update?: ParticipacaoUpdateWithWhereUniqueWithoutTorneioInput | ParticipacaoUpdateWithWhereUniqueWithoutTorneioInput[]
    updateMany?: ParticipacaoUpdateManyWithWhereWithoutTorneioInput | ParticipacaoUpdateManyWithWhereWithoutTorneioInput[]
    deleteMany?: ParticipacaoScalarWhereInput | ParticipacaoScalarWhereInput[]
  }

  export type EquipeUncheckedUpdateManyWithoutTorneioNestedInput = {
    create?: XOR<EquipeCreateWithoutTorneioInput, EquipeUncheckedCreateWithoutTorneioInput> | EquipeCreateWithoutTorneioInput[] | EquipeUncheckedCreateWithoutTorneioInput[]
    connectOrCreate?: EquipeCreateOrConnectWithoutTorneioInput | EquipeCreateOrConnectWithoutTorneioInput[]
    upsert?: EquipeUpsertWithWhereUniqueWithoutTorneioInput | EquipeUpsertWithWhereUniqueWithoutTorneioInput[]
    createMany?: EquipeCreateManyTorneioInputEnvelope
    set?: EquipeWhereUniqueInput | EquipeWhereUniqueInput[]
    disconnect?: EquipeWhereUniqueInput | EquipeWhereUniqueInput[]
    delete?: EquipeWhereUniqueInput | EquipeWhereUniqueInput[]
    connect?: EquipeWhereUniqueInput | EquipeWhereUniqueInput[]
    update?: EquipeUpdateWithWhereUniqueWithoutTorneioInput | EquipeUpdateWithWhereUniqueWithoutTorneioInput[]
    updateMany?: EquipeUpdateManyWithWhereWithoutTorneioInput | EquipeUpdateManyWithWhereWithoutTorneioInput[]
    deleteMany?: EquipeScalarWhereInput | EquipeScalarWhereInput[]
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

  export type AtletaCreateNestedOneWithoutParticipacoesInput = {
    create?: XOR<AtletaCreateWithoutParticipacoesInput, AtletaUncheckedCreateWithoutParticipacoesInput>
    connectOrCreate?: AtletaCreateOrConnectWithoutParticipacoesInput
    connect?: AtletaWhereUniqueInput
  }

  export type TorneioCreateNestedOneWithoutParticipacoesInput = {
    create?: XOR<TorneioCreateWithoutParticipacoesInput, TorneioUncheckedCreateWithoutParticipacoesInput>
    connectOrCreate?: TorneioCreateOrConnectWithoutParticipacoesInput
    connect?: TorneioWhereUniqueInput
  }

  export type AtletaUpdateOneRequiredWithoutParticipacoesNestedInput = {
    create?: XOR<AtletaCreateWithoutParticipacoesInput, AtletaUncheckedCreateWithoutParticipacoesInput>
    connectOrCreate?: AtletaCreateOrConnectWithoutParticipacoesInput
    upsert?: AtletaUpsertWithoutParticipacoesInput
    connect?: AtletaWhereUniqueInput
    update?: XOR<XOR<AtletaUpdateToOneWithWhereWithoutParticipacoesInput, AtletaUpdateWithoutParticipacoesInput>, AtletaUncheckedUpdateWithoutParticipacoesInput>
  }

  export type TorneioUpdateOneRequiredWithoutParticipacoesNestedInput = {
    create?: XOR<TorneioCreateWithoutParticipacoesInput, TorneioUncheckedCreateWithoutParticipacoesInput>
    connectOrCreate?: TorneioCreateOrConnectWithoutParticipacoesInput
    upsert?: TorneioUpsertWithoutParticipacoesInput
    connect?: TorneioWhereUniqueInput
    update?: XOR<XOR<TorneioUpdateToOneWithWhereWithoutParticipacoesInput, TorneioUpdateWithoutParticipacoesInput>, TorneioUncheckedUpdateWithoutParticipacoesInput>
  }

  export type TorneioCreateNestedOneWithoutEquipesInput = {
    create?: XOR<TorneioCreateWithoutEquipesInput, TorneioUncheckedCreateWithoutEquipesInput>
    connectOrCreate?: TorneioCreateOrConnectWithoutEquipesInput
    connect?: TorneioWhereUniqueInput
  }

  export type EquipeAtletaCreateNestedManyWithoutEquipeInput = {
    create?: XOR<EquipeAtletaCreateWithoutEquipeInput, EquipeAtletaUncheckedCreateWithoutEquipeInput> | EquipeAtletaCreateWithoutEquipeInput[] | EquipeAtletaUncheckedCreateWithoutEquipeInput[]
    connectOrCreate?: EquipeAtletaCreateOrConnectWithoutEquipeInput | EquipeAtletaCreateOrConnectWithoutEquipeInput[]
    createMany?: EquipeAtletaCreateManyEquipeInputEnvelope
    connect?: EquipeAtletaWhereUniqueInput | EquipeAtletaWhereUniqueInput[]
  }

  export type PartidaCreateNestedManyWithoutEquipe1Input = {
    create?: XOR<PartidaCreateWithoutEquipe1Input, PartidaUncheckedCreateWithoutEquipe1Input> | PartidaCreateWithoutEquipe1Input[] | PartidaUncheckedCreateWithoutEquipe1Input[]
    connectOrCreate?: PartidaCreateOrConnectWithoutEquipe1Input | PartidaCreateOrConnectWithoutEquipe1Input[]
    createMany?: PartidaCreateManyEquipe1InputEnvelope
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
  }

  export type PartidaCreateNestedManyWithoutEquipe2Input = {
    create?: XOR<PartidaCreateWithoutEquipe2Input, PartidaUncheckedCreateWithoutEquipe2Input> | PartidaCreateWithoutEquipe2Input[] | PartidaUncheckedCreateWithoutEquipe2Input[]
    connectOrCreate?: PartidaCreateOrConnectWithoutEquipe2Input | PartidaCreateOrConnectWithoutEquipe2Input[]
    createMany?: PartidaCreateManyEquipe2InputEnvelope
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
  }

  export type PartidaCreateNestedManyWithoutVencedorInput = {
    create?: XOR<PartidaCreateWithoutVencedorInput, PartidaUncheckedCreateWithoutVencedorInput> | PartidaCreateWithoutVencedorInput[] | PartidaUncheckedCreateWithoutVencedorInput[]
    connectOrCreate?: PartidaCreateOrConnectWithoutVencedorInput | PartidaCreateOrConnectWithoutVencedorInput[]
    createMany?: PartidaCreateManyVencedorInputEnvelope
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
  }

  export type EquipeAtletaUncheckedCreateNestedManyWithoutEquipeInput = {
    create?: XOR<EquipeAtletaCreateWithoutEquipeInput, EquipeAtletaUncheckedCreateWithoutEquipeInput> | EquipeAtletaCreateWithoutEquipeInput[] | EquipeAtletaUncheckedCreateWithoutEquipeInput[]
    connectOrCreate?: EquipeAtletaCreateOrConnectWithoutEquipeInput | EquipeAtletaCreateOrConnectWithoutEquipeInput[]
    createMany?: EquipeAtletaCreateManyEquipeInputEnvelope
    connect?: EquipeAtletaWhereUniqueInput | EquipeAtletaWhereUniqueInput[]
  }

  export type PartidaUncheckedCreateNestedManyWithoutEquipe1Input = {
    create?: XOR<PartidaCreateWithoutEquipe1Input, PartidaUncheckedCreateWithoutEquipe1Input> | PartidaCreateWithoutEquipe1Input[] | PartidaUncheckedCreateWithoutEquipe1Input[]
    connectOrCreate?: PartidaCreateOrConnectWithoutEquipe1Input | PartidaCreateOrConnectWithoutEquipe1Input[]
    createMany?: PartidaCreateManyEquipe1InputEnvelope
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
  }

  export type PartidaUncheckedCreateNestedManyWithoutEquipe2Input = {
    create?: XOR<PartidaCreateWithoutEquipe2Input, PartidaUncheckedCreateWithoutEquipe2Input> | PartidaCreateWithoutEquipe2Input[] | PartidaUncheckedCreateWithoutEquipe2Input[]
    connectOrCreate?: PartidaCreateOrConnectWithoutEquipe2Input | PartidaCreateOrConnectWithoutEquipe2Input[]
    createMany?: PartidaCreateManyEquipe2InputEnvelope
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
  }

  export type PartidaUncheckedCreateNestedManyWithoutVencedorInput = {
    create?: XOR<PartidaCreateWithoutVencedorInput, PartidaUncheckedCreateWithoutVencedorInput> | PartidaCreateWithoutVencedorInput[] | PartidaUncheckedCreateWithoutVencedorInput[]
    connectOrCreate?: PartidaCreateOrConnectWithoutVencedorInput | PartidaCreateOrConnectWithoutVencedorInput[]
    createMany?: PartidaCreateManyVencedorInputEnvelope
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
  }

  export type EnumTipoEquipeFieldUpdateOperationsInput = {
    set?: $Enums.TipoEquipe
  }

  export type TorneioUpdateOneRequiredWithoutEquipesNestedInput = {
    create?: XOR<TorneioCreateWithoutEquipesInput, TorneioUncheckedCreateWithoutEquipesInput>
    connectOrCreate?: TorneioCreateOrConnectWithoutEquipesInput
    upsert?: TorneioUpsertWithoutEquipesInput
    connect?: TorneioWhereUniqueInput
    update?: XOR<XOR<TorneioUpdateToOneWithWhereWithoutEquipesInput, TorneioUpdateWithoutEquipesInput>, TorneioUncheckedUpdateWithoutEquipesInput>
  }

  export type EquipeAtletaUpdateManyWithoutEquipeNestedInput = {
    create?: XOR<EquipeAtletaCreateWithoutEquipeInput, EquipeAtletaUncheckedCreateWithoutEquipeInput> | EquipeAtletaCreateWithoutEquipeInput[] | EquipeAtletaUncheckedCreateWithoutEquipeInput[]
    connectOrCreate?: EquipeAtletaCreateOrConnectWithoutEquipeInput | EquipeAtletaCreateOrConnectWithoutEquipeInput[]
    upsert?: EquipeAtletaUpsertWithWhereUniqueWithoutEquipeInput | EquipeAtletaUpsertWithWhereUniqueWithoutEquipeInput[]
    createMany?: EquipeAtletaCreateManyEquipeInputEnvelope
    set?: EquipeAtletaWhereUniqueInput | EquipeAtletaWhereUniqueInput[]
    disconnect?: EquipeAtletaWhereUniqueInput | EquipeAtletaWhereUniqueInput[]
    delete?: EquipeAtletaWhereUniqueInput | EquipeAtletaWhereUniqueInput[]
    connect?: EquipeAtletaWhereUniqueInput | EquipeAtletaWhereUniqueInput[]
    update?: EquipeAtletaUpdateWithWhereUniqueWithoutEquipeInput | EquipeAtletaUpdateWithWhereUniqueWithoutEquipeInput[]
    updateMany?: EquipeAtletaUpdateManyWithWhereWithoutEquipeInput | EquipeAtletaUpdateManyWithWhereWithoutEquipeInput[]
    deleteMany?: EquipeAtletaScalarWhereInput | EquipeAtletaScalarWhereInput[]
  }

  export type PartidaUpdateManyWithoutEquipe1NestedInput = {
    create?: XOR<PartidaCreateWithoutEquipe1Input, PartidaUncheckedCreateWithoutEquipe1Input> | PartidaCreateWithoutEquipe1Input[] | PartidaUncheckedCreateWithoutEquipe1Input[]
    connectOrCreate?: PartidaCreateOrConnectWithoutEquipe1Input | PartidaCreateOrConnectWithoutEquipe1Input[]
    upsert?: PartidaUpsertWithWhereUniqueWithoutEquipe1Input | PartidaUpsertWithWhereUniqueWithoutEquipe1Input[]
    createMany?: PartidaCreateManyEquipe1InputEnvelope
    set?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    disconnect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    delete?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    update?: PartidaUpdateWithWhereUniqueWithoutEquipe1Input | PartidaUpdateWithWhereUniqueWithoutEquipe1Input[]
    updateMany?: PartidaUpdateManyWithWhereWithoutEquipe1Input | PartidaUpdateManyWithWhereWithoutEquipe1Input[]
    deleteMany?: PartidaScalarWhereInput | PartidaScalarWhereInput[]
  }

  export type PartidaUpdateManyWithoutEquipe2NestedInput = {
    create?: XOR<PartidaCreateWithoutEquipe2Input, PartidaUncheckedCreateWithoutEquipe2Input> | PartidaCreateWithoutEquipe2Input[] | PartidaUncheckedCreateWithoutEquipe2Input[]
    connectOrCreate?: PartidaCreateOrConnectWithoutEquipe2Input | PartidaCreateOrConnectWithoutEquipe2Input[]
    upsert?: PartidaUpsertWithWhereUniqueWithoutEquipe2Input | PartidaUpsertWithWhereUniqueWithoutEquipe2Input[]
    createMany?: PartidaCreateManyEquipe2InputEnvelope
    set?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    disconnect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    delete?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    update?: PartidaUpdateWithWhereUniqueWithoutEquipe2Input | PartidaUpdateWithWhereUniqueWithoutEquipe2Input[]
    updateMany?: PartidaUpdateManyWithWhereWithoutEquipe2Input | PartidaUpdateManyWithWhereWithoutEquipe2Input[]
    deleteMany?: PartidaScalarWhereInput | PartidaScalarWhereInput[]
  }

  export type PartidaUpdateManyWithoutVencedorNestedInput = {
    create?: XOR<PartidaCreateWithoutVencedorInput, PartidaUncheckedCreateWithoutVencedorInput> | PartidaCreateWithoutVencedorInput[] | PartidaUncheckedCreateWithoutVencedorInput[]
    connectOrCreate?: PartidaCreateOrConnectWithoutVencedorInput | PartidaCreateOrConnectWithoutVencedorInput[]
    upsert?: PartidaUpsertWithWhereUniqueWithoutVencedorInput | PartidaUpsertWithWhereUniqueWithoutVencedorInput[]
    createMany?: PartidaCreateManyVencedorInputEnvelope
    set?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    disconnect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    delete?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    update?: PartidaUpdateWithWhereUniqueWithoutVencedorInput | PartidaUpdateWithWhereUniqueWithoutVencedorInput[]
    updateMany?: PartidaUpdateManyWithWhereWithoutVencedorInput | PartidaUpdateManyWithWhereWithoutVencedorInput[]
    deleteMany?: PartidaScalarWhereInput | PartidaScalarWhereInput[]
  }

  export type EquipeAtletaUncheckedUpdateManyWithoutEquipeNestedInput = {
    create?: XOR<EquipeAtletaCreateWithoutEquipeInput, EquipeAtletaUncheckedCreateWithoutEquipeInput> | EquipeAtletaCreateWithoutEquipeInput[] | EquipeAtletaUncheckedCreateWithoutEquipeInput[]
    connectOrCreate?: EquipeAtletaCreateOrConnectWithoutEquipeInput | EquipeAtletaCreateOrConnectWithoutEquipeInput[]
    upsert?: EquipeAtletaUpsertWithWhereUniqueWithoutEquipeInput | EquipeAtletaUpsertWithWhereUniqueWithoutEquipeInput[]
    createMany?: EquipeAtletaCreateManyEquipeInputEnvelope
    set?: EquipeAtletaWhereUniqueInput | EquipeAtletaWhereUniqueInput[]
    disconnect?: EquipeAtletaWhereUniqueInput | EquipeAtletaWhereUniqueInput[]
    delete?: EquipeAtletaWhereUniqueInput | EquipeAtletaWhereUniqueInput[]
    connect?: EquipeAtletaWhereUniqueInput | EquipeAtletaWhereUniqueInput[]
    update?: EquipeAtletaUpdateWithWhereUniqueWithoutEquipeInput | EquipeAtletaUpdateWithWhereUniqueWithoutEquipeInput[]
    updateMany?: EquipeAtletaUpdateManyWithWhereWithoutEquipeInput | EquipeAtletaUpdateManyWithWhereWithoutEquipeInput[]
    deleteMany?: EquipeAtletaScalarWhereInput | EquipeAtletaScalarWhereInput[]
  }

  export type PartidaUncheckedUpdateManyWithoutEquipe1NestedInput = {
    create?: XOR<PartidaCreateWithoutEquipe1Input, PartidaUncheckedCreateWithoutEquipe1Input> | PartidaCreateWithoutEquipe1Input[] | PartidaUncheckedCreateWithoutEquipe1Input[]
    connectOrCreate?: PartidaCreateOrConnectWithoutEquipe1Input | PartidaCreateOrConnectWithoutEquipe1Input[]
    upsert?: PartidaUpsertWithWhereUniqueWithoutEquipe1Input | PartidaUpsertWithWhereUniqueWithoutEquipe1Input[]
    createMany?: PartidaCreateManyEquipe1InputEnvelope
    set?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    disconnect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    delete?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    update?: PartidaUpdateWithWhereUniqueWithoutEquipe1Input | PartidaUpdateWithWhereUniqueWithoutEquipe1Input[]
    updateMany?: PartidaUpdateManyWithWhereWithoutEquipe1Input | PartidaUpdateManyWithWhereWithoutEquipe1Input[]
    deleteMany?: PartidaScalarWhereInput | PartidaScalarWhereInput[]
  }

  export type PartidaUncheckedUpdateManyWithoutEquipe2NestedInput = {
    create?: XOR<PartidaCreateWithoutEquipe2Input, PartidaUncheckedCreateWithoutEquipe2Input> | PartidaCreateWithoutEquipe2Input[] | PartidaUncheckedCreateWithoutEquipe2Input[]
    connectOrCreate?: PartidaCreateOrConnectWithoutEquipe2Input | PartidaCreateOrConnectWithoutEquipe2Input[]
    upsert?: PartidaUpsertWithWhereUniqueWithoutEquipe2Input | PartidaUpsertWithWhereUniqueWithoutEquipe2Input[]
    createMany?: PartidaCreateManyEquipe2InputEnvelope
    set?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    disconnect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    delete?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    update?: PartidaUpdateWithWhereUniqueWithoutEquipe2Input | PartidaUpdateWithWhereUniqueWithoutEquipe2Input[]
    updateMany?: PartidaUpdateManyWithWhereWithoutEquipe2Input | PartidaUpdateManyWithWhereWithoutEquipe2Input[]
    deleteMany?: PartidaScalarWhereInput | PartidaScalarWhereInput[]
  }

  export type PartidaUncheckedUpdateManyWithoutVencedorNestedInput = {
    create?: XOR<PartidaCreateWithoutVencedorInput, PartidaUncheckedCreateWithoutVencedorInput> | PartidaCreateWithoutVencedorInput[] | PartidaUncheckedCreateWithoutVencedorInput[]
    connectOrCreate?: PartidaCreateOrConnectWithoutVencedorInput | PartidaCreateOrConnectWithoutVencedorInput[]
    upsert?: PartidaUpsertWithWhereUniqueWithoutVencedorInput | PartidaUpsertWithWhereUniqueWithoutVencedorInput[]
    createMany?: PartidaCreateManyVencedorInputEnvelope
    set?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    disconnect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    delete?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    connect?: PartidaWhereUniqueInput | PartidaWhereUniqueInput[]
    update?: PartidaUpdateWithWhereUniqueWithoutVencedorInput | PartidaUpdateWithWhereUniqueWithoutVencedorInput[]
    updateMany?: PartidaUpdateManyWithWhereWithoutVencedorInput | PartidaUpdateManyWithWhereWithoutVencedorInput[]
    deleteMany?: PartidaScalarWhereInput | PartidaScalarWhereInput[]
  }

  export type AtletaCreateNestedOneWithoutEquipesInput = {
    create?: XOR<AtletaCreateWithoutEquipesInput, AtletaUncheckedCreateWithoutEquipesInput>
    connectOrCreate?: AtletaCreateOrConnectWithoutEquipesInput
    connect?: AtletaWhereUniqueInput
  }

  export type EquipeCreateNestedOneWithoutAtletasInput = {
    create?: XOR<EquipeCreateWithoutAtletasInput, EquipeUncheckedCreateWithoutAtletasInput>
    connectOrCreate?: EquipeCreateOrConnectWithoutAtletasInput
    connect?: EquipeWhereUniqueInput
  }

  export type AtletaUpdateOneRequiredWithoutEquipesNestedInput = {
    create?: XOR<AtletaCreateWithoutEquipesInput, AtletaUncheckedCreateWithoutEquipesInput>
    connectOrCreate?: AtletaCreateOrConnectWithoutEquipesInput
    upsert?: AtletaUpsertWithoutEquipesInput
    connect?: AtletaWhereUniqueInput
    update?: XOR<XOR<AtletaUpdateToOneWithWhereWithoutEquipesInput, AtletaUpdateWithoutEquipesInput>, AtletaUncheckedUpdateWithoutEquipesInput>
  }

  export type EquipeUpdateOneRequiredWithoutAtletasNestedInput = {
    create?: XOR<EquipeCreateWithoutAtletasInput, EquipeUncheckedCreateWithoutAtletasInput>
    connectOrCreate?: EquipeCreateOrConnectWithoutAtletasInput
    upsert?: EquipeUpsertWithoutAtletasInput
    connect?: EquipeWhereUniqueInput
    update?: XOR<XOR<EquipeUpdateToOneWithWhereWithoutAtletasInput, EquipeUpdateWithoutAtletasInput>, EquipeUncheckedUpdateWithoutAtletasInput>
  }

  export type TorneioCreateNestedOneWithoutPartidasInput = {
    create?: XOR<TorneioCreateWithoutPartidasInput, TorneioUncheckedCreateWithoutPartidasInput>
    connectOrCreate?: TorneioCreateOrConnectWithoutPartidasInput
    connect?: TorneioWhereUniqueInput
  }

  export type EquipeCreateNestedOneWithoutPartidasComoEquipe1Input = {
    create?: XOR<EquipeCreateWithoutPartidasComoEquipe1Input, EquipeUncheckedCreateWithoutPartidasComoEquipe1Input>
    connectOrCreate?: EquipeCreateOrConnectWithoutPartidasComoEquipe1Input
    connect?: EquipeWhereUniqueInput
  }

  export type EquipeCreateNestedOneWithoutPartidasComoEquipe2Input = {
    create?: XOR<EquipeCreateWithoutPartidasComoEquipe2Input, EquipeUncheckedCreateWithoutPartidasComoEquipe2Input>
    connectOrCreate?: EquipeCreateOrConnectWithoutPartidasComoEquipe2Input
    connect?: EquipeWhereUniqueInput
  }

  export type EquipeCreateNestedOneWithoutPartidaInput = {
    create?: XOR<EquipeCreateWithoutPartidaInput, EquipeUncheckedCreateWithoutPartidaInput>
    connectOrCreate?: EquipeCreateOrConnectWithoutPartidaInput
    connect?: EquipeWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TorneioUpdateOneRequiredWithoutPartidasNestedInput = {
    create?: XOR<TorneioCreateWithoutPartidasInput, TorneioUncheckedCreateWithoutPartidasInput>
    connectOrCreate?: TorneioCreateOrConnectWithoutPartidasInput
    upsert?: TorneioUpsertWithoutPartidasInput
    connect?: TorneioWhereUniqueInput
    update?: XOR<XOR<TorneioUpdateToOneWithWhereWithoutPartidasInput, TorneioUpdateWithoutPartidasInput>, TorneioUncheckedUpdateWithoutPartidasInput>
  }

  export type EquipeUpdateOneRequiredWithoutPartidasComoEquipe1NestedInput = {
    create?: XOR<EquipeCreateWithoutPartidasComoEquipe1Input, EquipeUncheckedCreateWithoutPartidasComoEquipe1Input>
    connectOrCreate?: EquipeCreateOrConnectWithoutPartidasComoEquipe1Input
    upsert?: EquipeUpsertWithoutPartidasComoEquipe1Input
    connect?: EquipeWhereUniqueInput
    update?: XOR<XOR<EquipeUpdateToOneWithWhereWithoutPartidasComoEquipe1Input, EquipeUpdateWithoutPartidasComoEquipe1Input>, EquipeUncheckedUpdateWithoutPartidasComoEquipe1Input>
  }

  export type EquipeUpdateOneRequiredWithoutPartidasComoEquipe2NestedInput = {
    create?: XOR<EquipeCreateWithoutPartidasComoEquipe2Input, EquipeUncheckedCreateWithoutPartidasComoEquipe2Input>
    connectOrCreate?: EquipeCreateOrConnectWithoutPartidasComoEquipe2Input
    upsert?: EquipeUpsertWithoutPartidasComoEquipe2Input
    connect?: EquipeWhereUniqueInput
    update?: XOR<XOR<EquipeUpdateToOneWithWhereWithoutPartidasComoEquipe2Input, EquipeUpdateWithoutPartidasComoEquipe2Input>, EquipeUncheckedUpdateWithoutPartidasComoEquipe2Input>
  }

  export type EquipeUpdateOneWithoutPartidaNestedInput = {
    create?: XOR<EquipeCreateWithoutPartidaInput, EquipeUncheckedCreateWithoutPartidaInput>
    connectOrCreate?: EquipeCreateOrConnectWithoutPartidaInput
    upsert?: EquipeUpsertWithoutPartidaInput
    disconnect?: EquipeWhereInput | boolean
    delete?: EquipeWhereInput | boolean
    connect?: EquipeWhereUniqueInput
    update?: XOR<XOR<EquipeUpdateToOneWithWhereWithoutPartidaInput, EquipeUpdateWithoutPartidaInput>, EquipeUncheckedUpdateWithoutPartidaInput>
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

  export type NestedEnumStatusTorneioFilter<$PrismaModel = never> = {
    equals?: $Enums.StatusTorneio | EnumStatusTorneioFieldRefInput<$PrismaModel>
    in?: $Enums.StatusTorneio[] | ListEnumStatusTorneioFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatusTorneio[] | ListEnumStatusTorneioFieldRefInput<$PrismaModel>
    not?: NestedEnumStatusTorneioFilter<$PrismaModel> | $Enums.StatusTorneio
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

  export type NestedEnumTipoEquipeFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoEquipe | EnumTipoEquipeFieldRefInput<$PrismaModel>
    in?: $Enums.TipoEquipe[] | ListEnumTipoEquipeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoEquipe[] | ListEnumTipoEquipeFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoEquipeFilter<$PrismaModel> | $Enums.TipoEquipe
  }

  export type NestedEnumTipoEquipeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoEquipe | EnumTipoEquipeFieldRefInput<$PrismaModel>
    in?: $Enums.TipoEquipe[] | ListEnumTipoEquipeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoEquipe[] | ListEnumTipoEquipeFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoEquipeWithAggregatesFilter<$PrismaModel> | $Enums.TipoEquipe
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoEquipeFilter<$PrismaModel>
    _max?: NestedEnumTipoEquipeFilter<$PrismaModel>
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

  export type TorneioCreateWithoutCriadoPorInput = {
    nome: string
    data: Date | string
    local?: string | null
    status?: $Enums.StatusTorneio
    createdAt?: Date | string
    updatedAt?: Date | string
    participacoes?: ParticipacaoCreateNestedManyWithoutTorneioInput
    equipes?: EquipeCreateNestedManyWithoutTorneioInput
    partidas?: PartidaCreateNestedManyWithoutTorneioInput
  }

  export type TorneioUncheckedCreateWithoutCriadoPorInput = {
    id?: number
    nome: string
    data: Date | string
    local?: string | null
    status?: $Enums.StatusTorneio
    createdAt?: Date | string
    updatedAt?: Date | string
    participacoes?: ParticipacaoUncheckedCreateNestedManyWithoutTorneioInput
    equipes?: EquipeUncheckedCreateNestedManyWithoutTorneioInput
    partidas?: PartidaUncheckedCreateNestedManyWithoutTorneioInput
  }

  export type TorneioCreateOrConnectWithoutCriadoPorInput = {
    where: TorneioWhereUniqueInput
    create: XOR<TorneioCreateWithoutCriadoPorInput, TorneioUncheckedCreateWithoutCriadoPorInput>
  }

  export type TorneioCreateManyCriadoPorInputEnvelope = {
    data: TorneioCreateManyCriadoPorInput | TorneioCreateManyCriadoPorInput[]
    skipDuplicates?: boolean
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
    data?: DateTimeFilter<"Torneio"> | Date | string
    local?: StringNullableFilter<"Torneio"> | string | null
    status?: EnumStatusTorneioFilter<"Torneio"> | $Enums.StatusTorneio
    criadoPorId?: IntFilter<"Torneio"> | number
    createdAt?: DateTimeFilter<"Torneio"> | Date | string
    updatedAt?: DateTimeFilter<"Torneio"> | Date | string
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
    torneios?: TorneioCreateNestedManyWithoutCriadoPorInput
  }

  export type UsuarioUncheckedCreateWithoutTreinadorInput = {
    id?: number
    nome: string
    email: string
    senha: string
    perfil: string
    criadoEm?: Date | string
    torneios?: TorneioUncheckedCreateNestedManyWithoutCriadoPorInput
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
    torneios?: TorneioUpdateManyWithoutCriadoPorNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutTreinadorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    perfil?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    torneios?: TorneioUncheckedUpdateManyWithoutCriadoPorNestedInput
  }

  export type ParticipacaoCreateWithoutAtletaInput = {
    criadoEm?: Date | string
    torneio: TorneioCreateNestedOneWithoutParticipacoesInput
  }

  export type ParticipacaoUncheckedCreateWithoutAtletaInput = {
    id?: number
    torneioId: number
    criadoEm?: Date | string
  }

  export type ParticipacaoCreateOrConnectWithoutAtletaInput = {
    where: ParticipacaoWhereUniqueInput
    create: XOR<ParticipacaoCreateWithoutAtletaInput, ParticipacaoUncheckedCreateWithoutAtletaInput>
  }

  export type ParticipacaoCreateManyAtletaInputEnvelope = {
    data: ParticipacaoCreateManyAtletaInput | ParticipacaoCreateManyAtletaInput[]
    skipDuplicates?: boolean
  }

  export type EquipeAtletaCreateWithoutAtletaInput = {
    equipe: EquipeCreateNestedOneWithoutAtletasInput
  }

  export type EquipeAtletaUncheckedCreateWithoutAtletaInput = {
    equipeId: number
  }

  export type EquipeAtletaCreateOrConnectWithoutAtletaInput = {
    where: EquipeAtletaWhereUniqueInput
    create: XOR<EquipeAtletaCreateWithoutAtletaInput, EquipeAtletaUncheckedCreateWithoutAtletaInput>
  }

  export type EquipeAtletaCreateManyAtletaInputEnvelope = {
    data: EquipeAtletaCreateManyAtletaInput | EquipeAtletaCreateManyAtletaInput[]
    skipDuplicates?: boolean
  }

  export type ParticipacaoUpsertWithWhereUniqueWithoutAtletaInput = {
    where: ParticipacaoWhereUniqueInput
    update: XOR<ParticipacaoUpdateWithoutAtletaInput, ParticipacaoUncheckedUpdateWithoutAtletaInput>
    create: XOR<ParticipacaoCreateWithoutAtletaInput, ParticipacaoUncheckedCreateWithoutAtletaInput>
  }

  export type ParticipacaoUpdateWithWhereUniqueWithoutAtletaInput = {
    where: ParticipacaoWhereUniqueInput
    data: XOR<ParticipacaoUpdateWithoutAtletaInput, ParticipacaoUncheckedUpdateWithoutAtletaInput>
  }

  export type ParticipacaoUpdateManyWithWhereWithoutAtletaInput = {
    where: ParticipacaoScalarWhereInput
    data: XOR<ParticipacaoUpdateManyMutationInput, ParticipacaoUncheckedUpdateManyWithoutAtletaInput>
  }

  export type ParticipacaoScalarWhereInput = {
    AND?: ParticipacaoScalarWhereInput | ParticipacaoScalarWhereInput[]
    OR?: ParticipacaoScalarWhereInput[]
    NOT?: ParticipacaoScalarWhereInput | ParticipacaoScalarWhereInput[]
    id?: IntFilter<"Participacao"> | number
    atletaId?: IntFilter<"Participacao"> | number
    torneioId?: IntFilter<"Participacao"> | number
    criadoEm?: DateTimeFilter<"Participacao"> | Date | string
  }

  export type EquipeAtletaUpsertWithWhereUniqueWithoutAtletaInput = {
    where: EquipeAtletaWhereUniqueInput
    update: XOR<EquipeAtletaUpdateWithoutAtletaInput, EquipeAtletaUncheckedUpdateWithoutAtletaInput>
    create: XOR<EquipeAtletaCreateWithoutAtletaInput, EquipeAtletaUncheckedCreateWithoutAtletaInput>
  }

  export type EquipeAtletaUpdateWithWhereUniqueWithoutAtletaInput = {
    where: EquipeAtletaWhereUniqueInput
    data: XOR<EquipeAtletaUpdateWithoutAtletaInput, EquipeAtletaUncheckedUpdateWithoutAtletaInput>
  }

  export type EquipeAtletaUpdateManyWithWhereWithoutAtletaInput = {
    where: EquipeAtletaScalarWhereInput
    data: XOR<EquipeAtletaUpdateManyMutationInput, EquipeAtletaUncheckedUpdateManyWithoutAtletaInput>
  }

  export type EquipeAtletaScalarWhereInput = {
    AND?: EquipeAtletaScalarWhereInput | EquipeAtletaScalarWhereInput[]
    OR?: EquipeAtletaScalarWhereInput[]
    NOT?: EquipeAtletaScalarWhereInput | EquipeAtletaScalarWhereInput[]
    atletaId?: IntFilter<"EquipeAtleta"> | number
    equipeId?: IntFilter<"EquipeAtleta"> | number
  }

  export type UsuarioCreateWithoutTorneiosInput = {
    nome: string
    email: string
    senha: string
    perfil: string
    criadoEm?: Date | string
    Treinador?: TreinadorCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutTorneiosInput = {
    id?: number
    nome: string
    email: string
    senha: string
    perfil: string
    criadoEm?: Date | string
    Treinador?: TreinadorUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutTorneiosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutTorneiosInput, UsuarioUncheckedCreateWithoutTorneiosInput>
  }

  export type ParticipacaoCreateWithoutTorneioInput = {
    criadoEm?: Date | string
    atleta: AtletaCreateNestedOneWithoutParticipacoesInput
  }

  export type ParticipacaoUncheckedCreateWithoutTorneioInput = {
    id?: number
    atletaId: number
    criadoEm?: Date | string
  }

  export type ParticipacaoCreateOrConnectWithoutTorneioInput = {
    where: ParticipacaoWhereUniqueInput
    create: XOR<ParticipacaoCreateWithoutTorneioInput, ParticipacaoUncheckedCreateWithoutTorneioInput>
  }

  export type ParticipacaoCreateManyTorneioInputEnvelope = {
    data: ParticipacaoCreateManyTorneioInput | ParticipacaoCreateManyTorneioInput[]
    skipDuplicates?: boolean
  }

  export type EquipeCreateWithoutTorneioInput = {
    nome: string
    tipo: $Enums.TipoEquipe
    createdAt?: Date | string
    atletas?: EquipeAtletaCreateNestedManyWithoutEquipeInput
    partidasComoEquipe1?: PartidaCreateNestedManyWithoutEquipe1Input
    partidasComoEquipe2?: PartidaCreateNestedManyWithoutEquipe2Input
    Partida?: PartidaCreateNestedManyWithoutVencedorInput
  }

  export type EquipeUncheckedCreateWithoutTorneioInput = {
    id?: number
    nome: string
    tipo: $Enums.TipoEquipe
    createdAt?: Date | string
    atletas?: EquipeAtletaUncheckedCreateNestedManyWithoutEquipeInput
    partidasComoEquipe1?: PartidaUncheckedCreateNestedManyWithoutEquipe1Input
    partidasComoEquipe2?: PartidaUncheckedCreateNestedManyWithoutEquipe2Input
    Partida?: PartidaUncheckedCreateNestedManyWithoutVencedorInput
  }

  export type EquipeCreateOrConnectWithoutTorneioInput = {
    where: EquipeWhereUniqueInput
    create: XOR<EquipeCreateWithoutTorneioInput, EquipeUncheckedCreateWithoutTorneioInput>
  }

  export type EquipeCreateManyTorneioInputEnvelope = {
    data: EquipeCreateManyTorneioInput | EquipeCreateManyTorneioInput[]
    skipDuplicates?: boolean
  }

  export type PartidaCreateWithoutTorneioInput = {
    fase: string
    pontosEquipe1?: number | null
    pontosEquipe2?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    equipe1: EquipeCreateNestedOneWithoutPartidasComoEquipe1Input
    equipe2: EquipeCreateNestedOneWithoutPartidasComoEquipe2Input
    vencedor?: EquipeCreateNestedOneWithoutPartidaInput
  }

  export type PartidaUncheckedCreateWithoutTorneioInput = {
    id?: number
    fase: string
    pontosEquipe1?: number | null
    pontosEquipe2?: number | null
    vencedorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    equipe1Id: number
    equipe2Id: number
  }

  export type PartidaCreateOrConnectWithoutTorneioInput = {
    where: PartidaWhereUniqueInput
    create: XOR<PartidaCreateWithoutTorneioInput, PartidaUncheckedCreateWithoutTorneioInput>
  }

  export type PartidaCreateManyTorneioInputEnvelope = {
    data: PartidaCreateManyTorneioInput | PartidaCreateManyTorneioInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutTorneiosInput = {
    update: XOR<UsuarioUpdateWithoutTorneiosInput, UsuarioUncheckedUpdateWithoutTorneiosInput>
    create: XOR<UsuarioCreateWithoutTorneiosInput, UsuarioUncheckedCreateWithoutTorneiosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutTorneiosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutTorneiosInput, UsuarioUncheckedUpdateWithoutTorneiosInput>
  }

  export type UsuarioUpdateWithoutTorneiosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    perfil?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    Treinador?: TreinadorUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutTorneiosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    perfil?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    Treinador?: TreinadorUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ParticipacaoUpsertWithWhereUniqueWithoutTorneioInput = {
    where: ParticipacaoWhereUniqueInput
    update: XOR<ParticipacaoUpdateWithoutTorneioInput, ParticipacaoUncheckedUpdateWithoutTorneioInput>
    create: XOR<ParticipacaoCreateWithoutTorneioInput, ParticipacaoUncheckedCreateWithoutTorneioInput>
  }

  export type ParticipacaoUpdateWithWhereUniqueWithoutTorneioInput = {
    where: ParticipacaoWhereUniqueInput
    data: XOR<ParticipacaoUpdateWithoutTorneioInput, ParticipacaoUncheckedUpdateWithoutTorneioInput>
  }

  export type ParticipacaoUpdateManyWithWhereWithoutTorneioInput = {
    where: ParticipacaoScalarWhereInput
    data: XOR<ParticipacaoUpdateManyMutationInput, ParticipacaoUncheckedUpdateManyWithoutTorneioInput>
  }

  export type EquipeUpsertWithWhereUniqueWithoutTorneioInput = {
    where: EquipeWhereUniqueInput
    update: XOR<EquipeUpdateWithoutTorneioInput, EquipeUncheckedUpdateWithoutTorneioInput>
    create: XOR<EquipeCreateWithoutTorneioInput, EquipeUncheckedCreateWithoutTorneioInput>
  }

  export type EquipeUpdateWithWhereUniqueWithoutTorneioInput = {
    where: EquipeWhereUniqueInput
    data: XOR<EquipeUpdateWithoutTorneioInput, EquipeUncheckedUpdateWithoutTorneioInput>
  }

  export type EquipeUpdateManyWithWhereWithoutTorneioInput = {
    where: EquipeScalarWhereInput
    data: XOR<EquipeUpdateManyMutationInput, EquipeUncheckedUpdateManyWithoutTorneioInput>
  }

  export type EquipeScalarWhereInput = {
    AND?: EquipeScalarWhereInput | EquipeScalarWhereInput[]
    OR?: EquipeScalarWhereInput[]
    NOT?: EquipeScalarWhereInput | EquipeScalarWhereInput[]
    id?: IntFilter<"Equipe"> | number
    nome?: StringFilter<"Equipe"> | string
    tipo?: EnumTipoEquipeFilter<"Equipe"> | $Enums.TipoEquipe
    torneioId?: IntFilter<"Equipe"> | number
    createdAt?: DateTimeFilter<"Equipe"> | Date | string
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
    pontosEquipe1?: IntNullableFilter<"Partida"> | number | null
    pontosEquipe2?: IntNullableFilter<"Partida"> | number | null
    vencedorId?: IntNullableFilter<"Partida"> | number | null
    createdAt?: DateTimeFilter<"Partida"> | Date | string
    updatedAt?: DateTimeFilter<"Partida"> | Date | string
    equipe1Id?: IntFilter<"Partida"> | number
    equipe2Id?: IntFilter<"Partida"> | number
  }

  export type AtletaCreateWithoutParticipacoesInput = {
    nome: string
    email: string
    genero: string
    nivel?: string | null
    equipes?: EquipeAtletaCreateNestedManyWithoutAtletaInput
  }

  export type AtletaUncheckedCreateWithoutParticipacoesInput = {
    id?: number
    nome: string
    email: string
    genero: string
    nivel?: string | null
    equipes?: EquipeAtletaUncheckedCreateNestedManyWithoutAtletaInput
  }

  export type AtletaCreateOrConnectWithoutParticipacoesInput = {
    where: AtletaWhereUniqueInput
    create: XOR<AtletaCreateWithoutParticipacoesInput, AtletaUncheckedCreateWithoutParticipacoesInput>
  }

  export type TorneioCreateWithoutParticipacoesInput = {
    nome: string
    data: Date | string
    local?: string | null
    status?: $Enums.StatusTorneio
    createdAt?: Date | string
    updatedAt?: Date | string
    criadoPor: UsuarioCreateNestedOneWithoutTorneiosInput
    equipes?: EquipeCreateNestedManyWithoutTorneioInput
    partidas?: PartidaCreateNestedManyWithoutTorneioInput
  }

  export type TorneioUncheckedCreateWithoutParticipacoesInput = {
    id?: number
    nome: string
    data: Date | string
    local?: string | null
    status?: $Enums.StatusTorneio
    criadoPorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    equipes?: EquipeUncheckedCreateNestedManyWithoutTorneioInput
    partidas?: PartidaUncheckedCreateNestedManyWithoutTorneioInput
  }

  export type TorneioCreateOrConnectWithoutParticipacoesInput = {
    where: TorneioWhereUniqueInput
    create: XOR<TorneioCreateWithoutParticipacoesInput, TorneioUncheckedCreateWithoutParticipacoesInput>
  }

  export type AtletaUpsertWithoutParticipacoesInput = {
    update: XOR<AtletaUpdateWithoutParticipacoesInput, AtletaUncheckedUpdateWithoutParticipacoesInput>
    create: XOR<AtletaCreateWithoutParticipacoesInput, AtletaUncheckedCreateWithoutParticipacoesInput>
    where?: AtletaWhereInput
  }

  export type AtletaUpdateToOneWithWhereWithoutParticipacoesInput = {
    where?: AtletaWhereInput
    data: XOR<AtletaUpdateWithoutParticipacoesInput, AtletaUncheckedUpdateWithoutParticipacoesInput>
  }

  export type AtletaUpdateWithoutParticipacoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    nivel?: NullableStringFieldUpdateOperationsInput | string | null
    equipes?: EquipeAtletaUpdateManyWithoutAtletaNestedInput
  }

  export type AtletaUncheckedUpdateWithoutParticipacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    nivel?: NullableStringFieldUpdateOperationsInput | string | null
    equipes?: EquipeAtletaUncheckedUpdateManyWithoutAtletaNestedInput
  }

  export type TorneioUpsertWithoutParticipacoesInput = {
    update: XOR<TorneioUpdateWithoutParticipacoesInput, TorneioUncheckedUpdateWithoutParticipacoesInput>
    create: XOR<TorneioCreateWithoutParticipacoesInput, TorneioUncheckedCreateWithoutParticipacoesInput>
    where?: TorneioWhereInput
  }

  export type TorneioUpdateToOneWithWhereWithoutParticipacoesInput = {
    where?: TorneioWhereInput
    data: XOR<TorneioUpdateWithoutParticipacoesInput, TorneioUncheckedUpdateWithoutParticipacoesInput>
  }

  export type TorneioUpdateWithoutParticipacoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTorneioFieldUpdateOperationsInput | $Enums.StatusTorneio
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: UsuarioUpdateOneRequiredWithoutTorneiosNestedInput
    equipes?: EquipeUpdateManyWithoutTorneioNestedInput
    partidas?: PartidaUpdateManyWithoutTorneioNestedInput
  }

  export type TorneioUncheckedUpdateWithoutParticipacoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTorneioFieldUpdateOperationsInput | $Enums.StatusTorneio
    criadoPorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipes?: EquipeUncheckedUpdateManyWithoutTorneioNestedInput
    partidas?: PartidaUncheckedUpdateManyWithoutTorneioNestedInput
  }

  export type TorneioCreateWithoutEquipesInput = {
    nome: string
    data: Date | string
    local?: string | null
    status?: $Enums.StatusTorneio
    createdAt?: Date | string
    updatedAt?: Date | string
    criadoPor: UsuarioCreateNestedOneWithoutTorneiosInput
    participacoes?: ParticipacaoCreateNestedManyWithoutTorneioInput
    partidas?: PartidaCreateNestedManyWithoutTorneioInput
  }

  export type TorneioUncheckedCreateWithoutEquipesInput = {
    id?: number
    nome: string
    data: Date | string
    local?: string | null
    status?: $Enums.StatusTorneio
    criadoPorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    participacoes?: ParticipacaoUncheckedCreateNestedManyWithoutTorneioInput
    partidas?: PartidaUncheckedCreateNestedManyWithoutTorneioInput
  }

  export type TorneioCreateOrConnectWithoutEquipesInput = {
    where: TorneioWhereUniqueInput
    create: XOR<TorneioCreateWithoutEquipesInput, TorneioUncheckedCreateWithoutEquipesInput>
  }

  export type EquipeAtletaCreateWithoutEquipeInput = {
    atleta: AtletaCreateNestedOneWithoutEquipesInput
  }

  export type EquipeAtletaUncheckedCreateWithoutEquipeInput = {
    atletaId: number
  }

  export type EquipeAtletaCreateOrConnectWithoutEquipeInput = {
    where: EquipeAtletaWhereUniqueInput
    create: XOR<EquipeAtletaCreateWithoutEquipeInput, EquipeAtletaUncheckedCreateWithoutEquipeInput>
  }

  export type EquipeAtletaCreateManyEquipeInputEnvelope = {
    data: EquipeAtletaCreateManyEquipeInput | EquipeAtletaCreateManyEquipeInput[]
    skipDuplicates?: boolean
  }

  export type PartidaCreateWithoutEquipe1Input = {
    fase: string
    pontosEquipe1?: number | null
    pontosEquipe2?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    torneio: TorneioCreateNestedOneWithoutPartidasInput
    equipe2: EquipeCreateNestedOneWithoutPartidasComoEquipe2Input
    vencedor?: EquipeCreateNestedOneWithoutPartidaInput
  }

  export type PartidaUncheckedCreateWithoutEquipe1Input = {
    id?: number
    torneioId: number
    fase: string
    pontosEquipe1?: number | null
    pontosEquipe2?: number | null
    vencedorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    equipe2Id: number
  }

  export type PartidaCreateOrConnectWithoutEquipe1Input = {
    where: PartidaWhereUniqueInput
    create: XOR<PartidaCreateWithoutEquipe1Input, PartidaUncheckedCreateWithoutEquipe1Input>
  }

  export type PartidaCreateManyEquipe1InputEnvelope = {
    data: PartidaCreateManyEquipe1Input | PartidaCreateManyEquipe1Input[]
    skipDuplicates?: boolean
  }

  export type PartidaCreateWithoutEquipe2Input = {
    fase: string
    pontosEquipe1?: number | null
    pontosEquipe2?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    torneio: TorneioCreateNestedOneWithoutPartidasInput
    equipe1: EquipeCreateNestedOneWithoutPartidasComoEquipe1Input
    vencedor?: EquipeCreateNestedOneWithoutPartidaInput
  }

  export type PartidaUncheckedCreateWithoutEquipe2Input = {
    id?: number
    torneioId: number
    fase: string
    pontosEquipe1?: number | null
    pontosEquipe2?: number | null
    vencedorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    equipe1Id: number
  }

  export type PartidaCreateOrConnectWithoutEquipe2Input = {
    where: PartidaWhereUniqueInput
    create: XOR<PartidaCreateWithoutEquipe2Input, PartidaUncheckedCreateWithoutEquipe2Input>
  }

  export type PartidaCreateManyEquipe2InputEnvelope = {
    data: PartidaCreateManyEquipe2Input | PartidaCreateManyEquipe2Input[]
    skipDuplicates?: boolean
  }

  export type PartidaCreateWithoutVencedorInput = {
    fase: string
    pontosEquipe1?: number | null
    pontosEquipe2?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    torneio: TorneioCreateNestedOneWithoutPartidasInput
    equipe1: EquipeCreateNestedOneWithoutPartidasComoEquipe1Input
    equipe2: EquipeCreateNestedOneWithoutPartidasComoEquipe2Input
  }

  export type PartidaUncheckedCreateWithoutVencedorInput = {
    id?: number
    torneioId: number
    fase: string
    pontosEquipe1?: number | null
    pontosEquipe2?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    equipe1Id: number
    equipe2Id: number
  }

  export type PartidaCreateOrConnectWithoutVencedorInput = {
    where: PartidaWhereUniqueInput
    create: XOR<PartidaCreateWithoutVencedorInput, PartidaUncheckedCreateWithoutVencedorInput>
  }

  export type PartidaCreateManyVencedorInputEnvelope = {
    data: PartidaCreateManyVencedorInput | PartidaCreateManyVencedorInput[]
    skipDuplicates?: boolean
  }

  export type TorneioUpsertWithoutEquipesInput = {
    update: XOR<TorneioUpdateWithoutEquipesInput, TorneioUncheckedUpdateWithoutEquipesInput>
    create: XOR<TorneioCreateWithoutEquipesInput, TorneioUncheckedCreateWithoutEquipesInput>
    where?: TorneioWhereInput
  }

  export type TorneioUpdateToOneWithWhereWithoutEquipesInput = {
    where?: TorneioWhereInput
    data: XOR<TorneioUpdateWithoutEquipesInput, TorneioUncheckedUpdateWithoutEquipesInput>
  }

  export type TorneioUpdateWithoutEquipesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTorneioFieldUpdateOperationsInput | $Enums.StatusTorneio
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: UsuarioUpdateOneRequiredWithoutTorneiosNestedInput
    participacoes?: ParticipacaoUpdateManyWithoutTorneioNestedInput
    partidas?: PartidaUpdateManyWithoutTorneioNestedInput
  }

  export type TorneioUncheckedUpdateWithoutEquipesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTorneioFieldUpdateOperationsInput | $Enums.StatusTorneio
    criadoPorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participacoes?: ParticipacaoUncheckedUpdateManyWithoutTorneioNestedInput
    partidas?: PartidaUncheckedUpdateManyWithoutTorneioNestedInput
  }

  export type EquipeAtletaUpsertWithWhereUniqueWithoutEquipeInput = {
    where: EquipeAtletaWhereUniqueInput
    update: XOR<EquipeAtletaUpdateWithoutEquipeInput, EquipeAtletaUncheckedUpdateWithoutEquipeInput>
    create: XOR<EquipeAtletaCreateWithoutEquipeInput, EquipeAtletaUncheckedCreateWithoutEquipeInput>
  }

  export type EquipeAtletaUpdateWithWhereUniqueWithoutEquipeInput = {
    where: EquipeAtletaWhereUniqueInput
    data: XOR<EquipeAtletaUpdateWithoutEquipeInput, EquipeAtletaUncheckedUpdateWithoutEquipeInput>
  }

  export type EquipeAtletaUpdateManyWithWhereWithoutEquipeInput = {
    where: EquipeAtletaScalarWhereInput
    data: XOR<EquipeAtletaUpdateManyMutationInput, EquipeAtletaUncheckedUpdateManyWithoutEquipeInput>
  }

  export type PartidaUpsertWithWhereUniqueWithoutEquipe1Input = {
    where: PartidaWhereUniqueInput
    update: XOR<PartidaUpdateWithoutEquipe1Input, PartidaUncheckedUpdateWithoutEquipe1Input>
    create: XOR<PartidaCreateWithoutEquipe1Input, PartidaUncheckedCreateWithoutEquipe1Input>
  }

  export type PartidaUpdateWithWhereUniqueWithoutEquipe1Input = {
    where: PartidaWhereUniqueInput
    data: XOR<PartidaUpdateWithoutEquipe1Input, PartidaUncheckedUpdateWithoutEquipe1Input>
  }

  export type PartidaUpdateManyWithWhereWithoutEquipe1Input = {
    where: PartidaScalarWhereInput
    data: XOR<PartidaUpdateManyMutationInput, PartidaUncheckedUpdateManyWithoutEquipe1Input>
  }

  export type PartidaUpsertWithWhereUniqueWithoutEquipe2Input = {
    where: PartidaWhereUniqueInput
    update: XOR<PartidaUpdateWithoutEquipe2Input, PartidaUncheckedUpdateWithoutEquipe2Input>
    create: XOR<PartidaCreateWithoutEquipe2Input, PartidaUncheckedCreateWithoutEquipe2Input>
  }

  export type PartidaUpdateWithWhereUniqueWithoutEquipe2Input = {
    where: PartidaWhereUniqueInput
    data: XOR<PartidaUpdateWithoutEquipe2Input, PartidaUncheckedUpdateWithoutEquipe2Input>
  }

  export type PartidaUpdateManyWithWhereWithoutEquipe2Input = {
    where: PartidaScalarWhereInput
    data: XOR<PartidaUpdateManyMutationInput, PartidaUncheckedUpdateManyWithoutEquipe2Input>
  }

  export type PartidaUpsertWithWhereUniqueWithoutVencedorInput = {
    where: PartidaWhereUniqueInput
    update: XOR<PartidaUpdateWithoutVencedorInput, PartidaUncheckedUpdateWithoutVencedorInput>
    create: XOR<PartidaCreateWithoutVencedorInput, PartidaUncheckedCreateWithoutVencedorInput>
  }

  export type PartidaUpdateWithWhereUniqueWithoutVencedorInput = {
    where: PartidaWhereUniqueInput
    data: XOR<PartidaUpdateWithoutVencedorInput, PartidaUncheckedUpdateWithoutVencedorInput>
  }

  export type PartidaUpdateManyWithWhereWithoutVencedorInput = {
    where: PartidaScalarWhereInput
    data: XOR<PartidaUpdateManyMutationInput, PartidaUncheckedUpdateManyWithoutVencedorInput>
  }

  export type AtletaCreateWithoutEquipesInput = {
    nome: string
    email: string
    genero: string
    nivel?: string | null
    participacoes?: ParticipacaoCreateNestedManyWithoutAtletaInput
  }

  export type AtletaUncheckedCreateWithoutEquipesInput = {
    id?: number
    nome: string
    email: string
    genero: string
    nivel?: string | null
    participacoes?: ParticipacaoUncheckedCreateNestedManyWithoutAtletaInput
  }

  export type AtletaCreateOrConnectWithoutEquipesInput = {
    where: AtletaWhereUniqueInput
    create: XOR<AtletaCreateWithoutEquipesInput, AtletaUncheckedCreateWithoutEquipesInput>
  }

  export type EquipeCreateWithoutAtletasInput = {
    nome: string
    tipo: $Enums.TipoEquipe
    createdAt?: Date | string
    torneio: TorneioCreateNestedOneWithoutEquipesInput
    partidasComoEquipe1?: PartidaCreateNestedManyWithoutEquipe1Input
    partidasComoEquipe2?: PartidaCreateNestedManyWithoutEquipe2Input
    Partida?: PartidaCreateNestedManyWithoutVencedorInput
  }

  export type EquipeUncheckedCreateWithoutAtletasInput = {
    id?: number
    nome: string
    tipo: $Enums.TipoEquipe
    torneioId: number
    createdAt?: Date | string
    partidasComoEquipe1?: PartidaUncheckedCreateNestedManyWithoutEquipe1Input
    partidasComoEquipe2?: PartidaUncheckedCreateNestedManyWithoutEquipe2Input
    Partida?: PartidaUncheckedCreateNestedManyWithoutVencedorInput
  }

  export type EquipeCreateOrConnectWithoutAtletasInput = {
    where: EquipeWhereUniqueInput
    create: XOR<EquipeCreateWithoutAtletasInput, EquipeUncheckedCreateWithoutAtletasInput>
  }

  export type AtletaUpsertWithoutEquipesInput = {
    update: XOR<AtletaUpdateWithoutEquipesInput, AtletaUncheckedUpdateWithoutEquipesInput>
    create: XOR<AtletaCreateWithoutEquipesInput, AtletaUncheckedCreateWithoutEquipesInput>
    where?: AtletaWhereInput
  }

  export type AtletaUpdateToOneWithWhereWithoutEquipesInput = {
    where?: AtletaWhereInput
    data: XOR<AtletaUpdateWithoutEquipesInput, AtletaUncheckedUpdateWithoutEquipesInput>
  }

  export type AtletaUpdateWithoutEquipesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    nivel?: NullableStringFieldUpdateOperationsInput | string | null
    participacoes?: ParticipacaoUpdateManyWithoutAtletaNestedInput
  }

  export type AtletaUncheckedUpdateWithoutEquipesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    nivel?: NullableStringFieldUpdateOperationsInput | string | null
    participacoes?: ParticipacaoUncheckedUpdateManyWithoutAtletaNestedInput
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
    tipo?: EnumTipoEquipeFieldUpdateOperationsInput | $Enums.TipoEquipe
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    torneio?: TorneioUpdateOneRequiredWithoutEquipesNestedInput
    partidasComoEquipe1?: PartidaUpdateManyWithoutEquipe1NestedInput
    partidasComoEquipe2?: PartidaUpdateManyWithoutEquipe2NestedInput
    Partida?: PartidaUpdateManyWithoutVencedorNestedInput
  }

  export type EquipeUncheckedUpdateWithoutAtletasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEquipeFieldUpdateOperationsInput | $Enums.TipoEquipe
    torneioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    partidasComoEquipe1?: PartidaUncheckedUpdateManyWithoutEquipe1NestedInput
    partidasComoEquipe2?: PartidaUncheckedUpdateManyWithoutEquipe2NestedInput
    Partida?: PartidaUncheckedUpdateManyWithoutVencedorNestedInput
  }

  export type TorneioCreateWithoutPartidasInput = {
    nome: string
    data: Date | string
    local?: string | null
    status?: $Enums.StatusTorneio
    createdAt?: Date | string
    updatedAt?: Date | string
    criadoPor: UsuarioCreateNestedOneWithoutTorneiosInput
    participacoes?: ParticipacaoCreateNestedManyWithoutTorneioInput
    equipes?: EquipeCreateNestedManyWithoutTorneioInput
  }

  export type TorneioUncheckedCreateWithoutPartidasInput = {
    id?: number
    nome: string
    data: Date | string
    local?: string | null
    status?: $Enums.StatusTorneio
    criadoPorId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    participacoes?: ParticipacaoUncheckedCreateNestedManyWithoutTorneioInput
    equipes?: EquipeUncheckedCreateNestedManyWithoutTorneioInput
  }

  export type TorneioCreateOrConnectWithoutPartidasInput = {
    where: TorneioWhereUniqueInput
    create: XOR<TorneioCreateWithoutPartidasInput, TorneioUncheckedCreateWithoutPartidasInput>
  }

  export type EquipeCreateWithoutPartidasComoEquipe1Input = {
    nome: string
    tipo: $Enums.TipoEquipe
    createdAt?: Date | string
    torneio: TorneioCreateNestedOneWithoutEquipesInput
    atletas?: EquipeAtletaCreateNestedManyWithoutEquipeInput
    partidasComoEquipe2?: PartidaCreateNestedManyWithoutEquipe2Input
    Partida?: PartidaCreateNestedManyWithoutVencedorInput
  }

  export type EquipeUncheckedCreateWithoutPartidasComoEquipe1Input = {
    id?: number
    nome: string
    tipo: $Enums.TipoEquipe
    torneioId: number
    createdAt?: Date | string
    atletas?: EquipeAtletaUncheckedCreateNestedManyWithoutEquipeInput
    partidasComoEquipe2?: PartidaUncheckedCreateNestedManyWithoutEquipe2Input
    Partida?: PartidaUncheckedCreateNestedManyWithoutVencedorInput
  }

  export type EquipeCreateOrConnectWithoutPartidasComoEquipe1Input = {
    where: EquipeWhereUniqueInput
    create: XOR<EquipeCreateWithoutPartidasComoEquipe1Input, EquipeUncheckedCreateWithoutPartidasComoEquipe1Input>
  }

  export type EquipeCreateWithoutPartidasComoEquipe2Input = {
    nome: string
    tipo: $Enums.TipoEquipe
    createdAt?: Date | string
    torneio: TorneioCreateNestedOneWithoutEquipesInput
    atletas?: EquipeAtletaCreateNestedManyWithoutEquipeInput
    partidasComoEquipe1?: PartidaCreateNestedManyWithoutEquipe1Input
    Partida?: PartidaCreateNestedManyWithoutVencedorInput
  }

  export type EquipeUncheckedCreateWithoutPartidasComoEquipe2Input = {
    id?: number
    nome: string
    tipo: $Enums.TipoEquipe
    torneioId: number
    createdAt?: Date | string
    atletas?: EquipeAtletaUncheckedCreateNestedManyWithoutEquipeInput
    partidasComoEquipe1?: PartidaUncheckedCreateNestedManyWithoutEquipe1Input
    Partida?: PartidaUncheckedCreateNestedManyWithoutVencedorInput
  }

  export type EquipeCreateOrConnectWithoutPartidasComoEquipe2Input = {
    where: EquipeWhereUniqueInput
    create: XOR<EquipeCreateWithoutPartidasComoEquipe2Input, EquipeUncheckedCreateWithoutPartidasComoEquipe2Input>
  }

  export type EquipeCreateWithoutPartidaInput = {
    nome: string
    tipo: $Enums.TipoEquipe
    createdAt?: Date | string
    torneio: TorneioCreateNestedOneWithoutEquipesInput
    atletas?: EquipeAtletaCreateNestedManyWithoutEquipeInput
    partidasComoEquipe1?: PartidaCreateNestedManyWithoutEquipe1Input
    partidasComoEquipe2?: PartidaCreateNestedManyWithoutEquipe2Input
  }

  export type EquipeUncheckedCreateWithoutPartidaInput = {
    id?: number
    nome: string
    tipo: $Enums.TipoEquipe
    torneioId: number
    createdAt?: Date | string
    atletas?: EquipeAtletaUncheckedCreateNestedManyWithoutEquipeInput
    partidasComoEquipe1?: PartidaUncheckedCreateNestedManyWithoutEquipe1Input
    partidasComoEquipe2?: PartidaUncheckedCreateNestedManyWithoutEquipe2Input
  }

  export type EquipeCreateOrConnectWithoutPartidaInput = {
    where: EquipeWhereUniqueInput
    create: XOR<EquipeCreateWithoutPartidaInput, EquipeUncheckedCreateWithoutPartidaInput>
  }

  export type TorneioUpsertWithoutPartidasInput = {
    update: XOR<TorneioUpdateWithoutPartidasInput, TorneioUncheckedUpdateWithoutPartidasInput>
    create: XOR<TorneioCreateWithoutPartidasInput, TorneioUncheckedCreateWithoutPartidasInput>
    where?: TorneioWhereInput
  }

  export type TorneioUpdateToOneWithWhereWithoutPartidasInput = {
    where?: TorneioWhereInput
    data: XOR<TorneioUpdateWithoutPartidasInput, TorneioUncheckedUpdateWithoutPartidasInput>
  }

  export type TorneioUpdateWithoutPartidasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTorneioFieldUpdateOperationsInput | $Enums.StatusTorneio
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    criadoPor?: UsuarioUpdateOneRequiredWithoutTorneiosNestedInput
    participacoes?: ParticipacaoUpdateManyWithoutTorneioNestedInput
    equipes?: EquipeUpdateManyWithoutTorneioNestedInput
  }

  export type TorneioUncheckedUpdateWithoutPartidasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTorneioFieldUpdateOperationsInput | $Enums.StatusTorneio
    criadoPorId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participacoes?: ParticipacaoUncheckedUpdateManyWithoutTorneioNestedInput
    equipes?: EquipeUncheckedUpdateManyWithoutTorneioNestedInput
  }

  export type EquipeUpsertWithoutPartidasComoEquipe1Input = {
    update: XOR<EquipeUpdateWithoutPartidasComoEquipe1Input, EquipeUncheckedUpdateWithoutPartidasComoEquipe1Input>
    create: XOR<EquipeCreateWithoutPartidasComoEquipe1Input, EquipeUncheckedCreateWithoutPartidasComoEquipe1Input>
    where?: EquipeWhereInput
  }

  export type EquipeUpdateToOneWithWhereWithoutPartidasComoEquipe1Input = {
    where?: EquipeWhereInput
    data: XOR<EquipeUpdateWithoutPartidasComoEquipe1Input, EquipeUncheckedUpdateWithoutPartidasComoEquipe1Input>
  }

  export type EquipeUpdateWithoutPartidasComoEquipe1Input = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEquipeFieldUpdateOperationsInput | $Enums.TipoEquipe
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    torneio?: TorneioUpdateOneRequiredWithoutEquipesNestedInput
    atletas?: EquipeAtletaUpdateManyWithoutEquipeNestedInput
    partidasComoEquipe2?: PartidaUpdateManyWithoutEquipe2NestedInput
    Partida?: PartidaUpdateManyWithoutVencedorNestedInput
  }

  export type EquipeUncheckedUpdateWithoutPartidasComoEquipe1Input = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEquipeFieldUpdateOperationsInput | $Enums.TipoEquipe
    torneioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atletas?: EquipeAtletaUncheckedUpdateManyWithoutEquipeNestedInput
    partidasComoEquipe2?: PartidaUncheckedUpdateManyWithoutEquipe2NestedInput
    Partida?: PartidaUncheckedUpdateManyWithoutVencedorNestedInput
  }

  export type EquipeUpsertWithoutPartidasComoEquipe2Input = {
    update: XOR<EquipeUpdateWithoutPartidasComoEquipe2Input, EquipeUncheckedUpdateWithoutPartidasComoEquipe2Input>
    create: XOR<EquipeCreateWithoutPartidasComoEquipe2Input, EquipeUncheckedCreateWithoutPartidasComoEquipe2Input>
    where?: EquipeWhereInput
  }

  export type EquipeUpdateToOneWithWhereWithoutPartidasComoEquipe2Input = {
    where?: EquipeWhereInput
    data: XOR<EquipeUpdateWithoutPartidasComoEquipe2Input, EquipeUncheckedUpdateWithoutPartidasComoEquipe2Input>
  }

  export type EquipeUpdateWithoutPartidasComoEquipe2Input = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEquipeFieldUpdateOperationsInput | $Enums.TipoEquipe
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    torneio?: TorneioUpdateOneRequiredWithoutEquipesNestedInput
    atletas?: EquipeAtletaUpdateManyWithoutEquipeNestedInput
    partidasComoEquipe1?: PartidaUpdateManyWithoutEquipe1NestedInput
    Partida?: PartidaUpdateManyWithoutVencedorNestedInput
  }

  export type EquipeUncheckedUpdateWithoutPartidasComoEquipe2Input = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEquipeFieldUpdateOperationsInput | $Enums.TipoEquipe
    torneioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atletas?: EquipeAtletaUncheckedUpdateManyWithoutEquipeNestedInput
    partidasComoEquipe1?: PartidaUncheckedUpdateManyWithoutEquipe1NestedInput
    Partida?: PartidaUncheckedUpdateManyWithoutVencedorNestedInput
  }

  export type EquipeUpsertWithoutPartidaInput = {
    update: XOR<EquipeUpdateWithoutPartidaInput, EquipeUncheckedUpdateWithoutPartidaInput>
    create: XOR<EquipeCreateWithoutPartidaInput, EquipeUncheckedCreateWithoutPartidaInput>
    where?: EquipeWhereInput
  }

  export type EquipeUpdateToOneWithWhereWithoutPartidaInput = {
    where?: EquipeWhereInput
    data: XOR<EquipeUpdateWithoutPartidaInput, EquipeUncheckedUpdateWithoutPartidaInput>
  }

  export type EquipeUpdateWithoutPartidaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEquipeFieldUpdateOperationsInput | $Enums.TipoEquipe
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    torneio?: TorneioUpdateOneRequiredWithoutEquipesNestedInput
    atletas?: EquipeAtletaUpdateManyWithoutEquipeNestedInput
    partidasComoEquipe1?: PartidaUpdateManyWithoutEquipe1NestedInput
    partidasComoEquipe2?: PartidaUpdateManyWithoutEquipe2NestedInput
  }

  export type EquipeUncheckedUpdateWithoutPartidaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEquipeFieldUpdateOperationsInput | $Enums.TipoEquipe
    torneioId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atletas?: EquipeAtletaUncheckedUpdateManyWithoutEquipeNestedInput
    partidasComoEquipe1?: PartidaUncheckedUpdateManyWithoutEquipe1NestedInput
    partidasComoEquipe2?: PartidaUncheckedUpdateManyWithoutEquipe2NestedInput
  }

  export type TorneioCreateManyCriadoPorInput = {
    id?: number
    nome: string
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
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTorneioFieldUpdateOperationsInput | $Enums.StatusTorneio
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participacoes?: ParticipacaoUpdateManyWithoutTorneioNestedInput
    equipes?: EquipeUpdateManyWithoutTorneioNestedInput
    partidas?: PartidaUpdateManyWithoutTorneioNestedInput
  }

  export type TorneioUncheckedUpdateWithoutCriadoPorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    data?: DateTimeFieldUpdateOperationsInput | Date | string
    local?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumStatusTorneioFieldUpdateOperationsInput | $Enums.StatusTorneio
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participacoes?: ParticipacaoUncheckedUpdateManyWithoutTorneioNestedInput
    equipes?: EquipeUncheckedUpdateManyWithoutTorneioNestedInput
    partidas?: PartidaUncheckedUpdateManyWithoutTorneioNestedInput
  }

  export type TorneioUncheckedUpdateManyWithoutCriadoPorInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
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

  export type ParticipacaoCreateManyAtletaInput = {
    id?: number
    torneioId: number
    criadoEm?: Date | string
  }

  export type EquipeAtletaCreateManyAtletaInput = {
    equipeId: number
  }

  export type ParticipacaoUpdateWithoutAtletaInput = {
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    torneio?: TorneioUpdateOneRequiredWithoutParticipacoesNestedInput
  }

  export type ParticipacaoUncheckedUpdateWithoutAtletaInput = {
    id?: IntFieldUpdateOperationsInput | number
    torneioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipacaoUncheckedUpdateManyWithoutAtletaInput = {
    id?: IntFieldUpdateOperationsInput | number
    torneioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipeAtletaUpdateWithoutAtletaInput = {
    equipe?: EquipeUpdateOneRequiredWithoutAtletasNestedInput
  }

  export type EquipeAtletaUncheckedUpdateWithoutAtletaInput = {
    equipeId?: IntFieldUpdateOperationsInput | number
  }

  export type EquipeAtletaUncheckedUpdateManyWithoutAtletaInput = {
    equipeId?: IntFieldUpdateOperationsInput | number
  }

  export type ParticipacaoCreateManyTorneioInput = {
    id?: number
    atletaId: number
    criadoEm?: Date | string
  }

  export type EquipeCreateManyTorneioInput = {
    id?: number
    nome: string
    tipo: $Enums.TipoEquipe
    createdAt?: Date | string
  }

  export type PartidaCreateManyTorneioInput = {
    id?: number
    fase: string
    pontosEquipe1?: number | null
    pontosEquipe2?: number | null
    vencedorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    equipe1Id: number
    equipe2Id: number
  }

  export type ParticipacaoUpdateWithoutTorneioInput = {
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atleta?: AtletaUpdateOneRequiredWithoutParticipacoesNestedInput
  }

  export type ParticipacaoUncheckedUpdateWithoutTorneioInput = {
    id?: IntFieldUpdateOperationsInput | number
    atletaId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParticipacaoUncheckedUpdateManyWithoutTorneioInput = {
    id?: IntFieldUpdateOperationsInput | number
    atletaId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EquipeUpdateWithoutTorneioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEquipeFieldUpdateOperationsInput | $Enums.TipoEquipe
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atletas?: EquipeAtletaUpdateManyWithoutEquipeNestedInput
    partidasComoEquipe1?: PartidaUpdateManyWithoutEquipe1NestedInput
    partidasComoEquipe2?: PartidaUpdateManyWithoutEquipe2NestedInput
    Partida?: PartidaUpdateManyWithoutVencedorNestedInput
  }

  export type EquipeUncheckedUpdateWithoutTorneioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEquipeFieldUpdateOperationsInput | $Enums.TipoEquipe
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    atletas?: EquipeAtletaUncheckedUpdateManyWithoutEquipeNestedInput
    partidasComoEquipe1?: PartidaUncheckedUpdateManyWithoutEquipe1NestedInput
    partidasComoEquipe2?: PartidaUncheckedUpdateManyWithoutEquipe2NestedInput
    Partida?: PartidaUncheckedUpdateManyWithoutVencedorNestedInput
  }

  export type EquipeUncheckedUpdateManyWithoutTorneioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    tipo?: EnumTipoEquipeFieldUpdateOperationsInput | $Enums.TipoEquipe
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartidaUpdateWithoutTorneioInput = {
    fase?: StringFieldUpdateOperationsInput | string
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipe1?: EquipeUpdateOneRequiredWithoutPartidasComoEquipe1NestedInput
    equipe2?: EquipeUpdateOneRequiredWithoutPartidasComoEquipe2NestedInput
    vencedor?: EquipeUpdateOneWithoutPartidaNestedInput
  }

  export type PartidaUncheckedUpdateWithoutTorneioInput = {
    id?: IntFieldUpdateOperationsInput | number
    fase?: StringFieldUpdateOperationsInput | string
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    vencedorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipe1Id?: IntFieldUpdateOperationsInput | number
    equipe2Id?: IntFieldUpdateOperationsInput | number
  }

  export type PartidaUncheckedUpdateManyWithoutTorneioInput = {
    id?: IntFieldUpdateOperationsInput | number
    fase?: StringFieldUpdateOperationsInput | string
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    vencedorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipe1Id?: IntFieldUpdateOperationsInput | number
    equipe2Id?: IntFieldUpdateOperationsInput | number
  }

  export type EquipeAtletaCreateManyEquipeInput = {
    atletaId: number
  }

  export type PartidaCreateManyEquipe1Input = {
    id?: number
    torneioId: number
    fase: string
    pontosEquipe1?: number | null
    pontosEquipe2?: number | null
    vencedorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    equipe2Id: number
  }

  export type PartidaCreateManyEquipe2Input = {
    id?: number
    torneioId: number
    fase: string
    pontosEquipe1?: number | null
    pontosEquipe2?: number | null
    vencedorId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    equipe1Id: number
  }

  export type PartidaCreateManyVencedorInput = {
    id?: number
    torneioId: number
    fase: string
    pontosEquipe1?: number | null
    pontosEquipe2?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    equipe1Id: number
    equipe2Id: number
  }

  export type EquipeAtletaUpdateWithoutEquipeInput = {
    atleta?: AtletaUpdateOneRequiredWithoutEquipesNestedInput
  }

  export type EquipeAtletaUncheckedUpdateWithoutEquipeInput = {
    atletaId?: IntFieldUpdateOperationsInput | number
  }

  export type EquipeAtletaUncheckedUpdateManyWithoutEquipeInput = {
    atletaId?: IntFieldUpdateOperationsInput | number
  }

  export type PartidaUpdateWithoutEquipe1Input = {
    fase?: StringFieldUpdateOperationsInput | string
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    torneio?: TorneioUpdateOneRequiredWithoutPartidasNestedInput
    equipe2?: EquipeUpdateOneRequiredWithoutPartidasComoEquipe2NestedInput
    vencedor?: EquipeUpdateOneWithoutPartidaNestedInput
  }

  export type PartidaUncheckedUpdateWithoutEquipe1Input = {
    id?: IntFieldUpdateOperationsInput | number
    torneioId?: IntFieldUpdateOperationsInput | number
    fase?: StringFieldUpdateOperationsInput | string
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    vencedorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipe2Id?: IntFieldUpdateOperationsInput | number
  }

  export type PartidaUncheckedUpdateManyWithoutEquipe1Input = {
    id?: IntFieldUpdateOperationsInput | number
    torneioId?: IntFieldUpdateOperationsInput | number
    fase?: StringFieldUpdateOperationsInput | string
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    vencedorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipe2Id?: IntFieldUpdateOperationsInput | number
  }

  export type PartidaUpdateWithoutEquipe2Input = {
    fase?: StringFieldUpdateOperationsInput | string
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    torneio?: TorneioUpdateOneRequiredWithoutPartidasNestedInput
    equipe1?: EquipeUpdateOneRequiredWithoutPartidasComoEquipe1NestedInput
    vencedor?: EquipeUpdateOneWithoutPartidaNestedInput
  }

  export type PartidaUncheckedUpdateWithoutEquipe2Input = {
    id?: IntFieldUpdateOperationsInput | number
    torneioId?: IntFieldUpdateOperationsInput | number
    fase?: StringFieldUpdateOperationsInput | string
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    vencedorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipe1Id?: IntFieldUpdateOperationsInput | number
  }

  export type PartidaUncheckedUpdateManyWithoutEquipe2Input = {
    id?: IntFieldUpdateOperationsInput | number
    torneioId?: IntFieldUpdateOperationsInput | number
    fase?: StringFieldUpdateOperationsInput | string
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    vencedorId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipe1Id?: IntFieldUpdateOperationsInput | number
  }

  export type PartidaUpdateWithoutVencedorInput = {
    fase?: StringFieldUpdateOperationsInput | string
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    torneio?: TorneioUpdateOneRequiredWithoutPartidasNestedInput
    equipe1?: EquipeUpdateOneRequiredWithoutPartidasComoEquipe1NestedInput
    equipe2?: EquipeUpdateOneRequiredWithoutPartidasComoEquipe2NestedInput
  }

  export type PartidaUncheckedUpdateWithoutVencedorInput = {
    id?: IntFieldUpdateOperationsInput | number
    torneioId?: IntFieldUpdateOperationsInput | number
    fase?: StringFieldUpdateOperationsInput | string
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipe1Id?: IntFieldUpdateOperationsInput | number
    equipe2Id?: IntFieldUpdateOperationsInput | number
  }

  export type PartidaUncheckedUpdateManyWithoutVencedorInput = {
    id?: IntFieldUpdateOperationsInput | number
    torneioId?: IntFieldUpdateOperationsInput | number
    fase?: StringFieldUpdateOperationsInput | string
    pontosEquipe1?: NullableIntFieldUpdateOperationsInput | number | null
    pontosEquipe2?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    equipe1Id?: IntFieldUpdateOperationsInput | number
    equipe2Id?: IntFieldUpdateOperationsInput | number
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