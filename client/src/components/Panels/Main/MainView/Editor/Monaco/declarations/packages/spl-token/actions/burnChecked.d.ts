import type {
  ConfirmOptions,
  Connection,
  PublicKey,
  Signer,
  TransactionSignature,
} from "@solana/web3.js";
/**
 * Burn tokens from an account, asserting the token mint and decimals
 *
 * @param connection     Connection to use
 * @param payer          Payer of the transaction fees
 * @param account        Account to burn tokens from
 * @param mint           Mint for the account
 * @param owner          Account owner
 * @param amount         Amount to burn
 * @param decimals       Number of decimals in amount to burn
 * @param multiSigners   Signing accounts if `owner` is a multisig
 * @param confirmOptions Options for confirming the transaction
 * @param programId      SPL Token program account
 *
 * @return Signature of the confirmed transaction
 */
export declare function burnChecked(
  connection: Connection,
  payer: Signer,
  account: PublicKey,
  mint: PublicKey,
  owner: Signer | PublicKey,
  amount: number | bigint,
  decimals: number,
  multiSigners?: Signer[],
  confirmOptions?: ConfirmOptions,
  programId?: PublicKey
): Promise<TransactionSignature>;
//# sourceMappingURL=burnChecked.d.ts.map
