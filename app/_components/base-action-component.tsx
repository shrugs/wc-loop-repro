"use client";

import { useEffect } from "react";
import { usePrepareContractWrite } from "wagmi";
import { base } from "wagmi/chains";

export function BaseActionComponent() {
  // this is just a random free mint i found on mint.fun i do not endorse whatever it is
  const { error } = usePrepareContractWrite({
    chainId: base.id,
    address: "0x4EF3E5AB7267798d2585197b3Cc46a518AA0a225",
    abi: [
      {
        inputs: [
          {
            internalType: "uint256",
            type: "uint256",
          },
          {
            internalType: "uint256",
            type: "uint256",
          },
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ] as const,
    functionName: "mint",
    args: [BigInt(0), BigInt(1)],
  });

  useEffect(() => {
    if (error) console.error(error);
  }, [error]);

  return <div>this component has a base usePrepareContractWrite in it</div>;
}
