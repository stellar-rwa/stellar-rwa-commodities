import { useState, useEffect } from "react";
import { StellarAccount } from "@stellar-commodity/constants";

export function useStellarAccount(address: string | null) {
  const [account, setAccount] = useState<StellarAccount | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!address) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setAccount(null);
      return;
    }

    const fetchAccount = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/stellar/account?address=${address}`);
        if (!response.ok) {
          throw new Error("Failed to fetch account");
        }
        const data = await response.json();
        setAccount(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAccount();
  }, [address]);

  return { account, loading, error };
}
